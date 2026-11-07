/* Logika aplikasi. Semua data tersimpan di browser (IndexedDB), tidak ada yang dikirim ke server. */
const NAMA={indo:'Bahasa Indonesia',mtk:'Matematika',tryout:'Tryout'};
const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let D={materi:{indo:[],mtk:[]},sets:{}},route=['home'],Q=null,mem={};
/* penyimpanan: IndexedDB (cadangan: memori) */
const open=()=>new Promise((res,rej)=>{try{const r=indexedDB.open('tka',1);r.onupgradeneeded=()=>r.result.createObjectStore('s');r.onsuccess=()=>res(r.result);r.onerror=()=>rej()}catch(e){rej()}});
async function kvGet(k){try{const d=await open();return await new Promise(r=>{const q=d.transaction('s').objectStore('s').get(k);q.onsuccess=()=>r(q.result);q.onerror=()=>r(mem[k])})}catch(e){return mem[k]}}
async function kvSet(k,v){mem[k]=v;try{const d=await open();await new Promise(r=>{const t=d.transaction('s','readwrite');t.objectStore('s').put(v,k);t.oncomplete=r;t.onerror=r})}catch(e){}}
async function kvDel(k){delete mem[k];try{const d=await open();d.transaction('s','readwrite').objectStore('s').delete(k)}catch(e){}}
const save=()=>kvSet('data',D),uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,5);
const go=r=>{route.push(r);render();scrollTo(0,0)},back=()=>{clearInterval(Q&&Q.iv);route.pop();render()};
async function pdfText(f){pdfjsLib.GlobalWorkerOptions.workerSrc='vendor/pdf.worker.min.js';
const p=await pdfjsLib.getDocument({data:await f.arrayBuffer(),isEvalSupported:false}).promise;let out='';
for(let i=1;i<=p.numPages;i++){const c=await(await p.getPage(i)).getTextContent();let y=null,l='';
for(const it of c.items){const yy=it.transform[5];if(y!==null&&Math.abs(yy-y)>3){out+=l+'\n';l=''}l+=it.str;y=yy}out+=l+'\n'}return out}
function parse(t){const ls=t.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);let ki=ls.findIndex(l=>/^kunci(\s+jawaban)?\b/i.test(l));
const sl=ki<0?ls:ls.slice(0,ki),kl=ki<0?[]:ls.slice(ki+1),qs=[];let q=null,cur=null;
for(const l of sl){let m=l.match(/^(?:\[(PGK|PG|JODOH|BS)\]\s*)?(\d+)[.)]\s+(.*)/i);
if(m){q={n:+m[2],tag:(m[1]||'').toUpperCase(),text:m[3],opts:[],lefts:[],stm:[]};qs.push(q);cur=q;cur.f='text';continue}
if(!q)continue;
if(m=l.match(/^L(\d+)[.)]\s*(.*)/i)){q.lefts.push(m[2]);cur=q.lefts;cur.i=q.lefts.length-1;continue}
if(m=l.match(/^S(\d+)[.)]\s*(.*)/i)){q.stm.push(m[2]);cur=q.stm;cur.i=q.stm.length-1;continue}
if(m=l.match(/^([A-E])[.)]\s+(.*)/)){q.opts.push({k:m[1],t:m[2]});cur=q.opts;cur.i=q.opts.length-1;continue}
if(cur===q)q.text+='\n'+l;else if(cur===q.opts)q.opts[cur.i].t+=' '+l;else cur[cur.i]+=' '+l}
const K={};let e=null,inx=false;
for(const l of kl){const m=l.match(/^(\d+)[.):]\s*(.*)/);if(m){e=K[+m[1]]={a:'',x:''};inx=false;let r=m[2];const p=r.match(/^(.*?)\s*(?:penjelasan|pembahasan)\s*:?\s*(.*)$/i);if(p){e.a=p[1];e.x=p[2];inx=true}else e.a=r;continue}
if(!e)continue;const p=l.match(/^(?:penjelasan|pembahasan)\s*:?\s*(.*)$/i);if(p){inx=true;e.x+=p[1]}else if(inx)e.x+=' '+l;else e.a+=' '+l}
return qs.map(q=>{q.t=q.tag||(q.lefts.length?'JODOH':q.stm.length?'BS':'PG');const k=K[q.n]||{a:'',x:''},a=k.a;
if(q.t=='JODOH')q.key=q.lefts.map((_,i)=>{const r=a.match(new RegExp('L?'+(i+1)+'\\s*[-=:→>]+\\s*([A-E])','i'));return r?r[1].toUpperCase():''});
else if(q.t=='BS')q.key=a.split(/[\s,;]+/).filter(Boolean).slice(0,3).map(x=>/^b/i.test(x)?'B':'S');
else if(q.t=='PGK')q.key=(a.match(/[A-E]/gi)||[]).map(x=>x.toUpperCase()).filter((v,i,r)=>r.indexOf(v)==i).sort();
else q.key=(a.match(/[A-E]/i)||[''])[0].toUpperCase();
q.exp=k.x;delete q.tag;delete q.f;return q})}

function viewList(k){const L=D.sets[k]||[],nm=k=='tryout'?'Tryout':'Latihan Soal '+NAMA[k.split('-')[0]];
$('#app').innerHTML=hdr(k=='tryout'?'Tryout':'Latihan '+NAMA[k])+`<div class="row opts"><label><input type="checkbox" id="aq" ${D.acakQ?'checked':''}> Acak urutan soal</label><label><input type="checkbox" id="ao" ${D.acakO?'checked':''}> Acak pilihan jawaban</label></div><p class="mu">Acak urutan bisa membuat soal yang memakai bacaan bersama jadi kurang nyambung.</p><div class="card"><b>Upload PDF soal &amp; jawaban</b>
<p class="mu">Soal otomatis dibuat dari PDF. Kunci jawaban boleh di file yang sama (setelah tulisan KUNCI JAWABAN) atau di file terpisah.</p>
<div style="margin:8px 0">PDF soal: <input type="file" id="fs" accept="application/pdf"></div><div style="margin:8px 0">PDF kunci &amp; pembahasan (opsional): <input type="file" id="fk" accept="application/pdf"></div>
<button id="gen">Generate soal</button> <span id="msg" class="mu"></span>
<details style="margin-top:10px"><summary>Format PDF yang dibaca</summary><div class="mu pre" style="margin-top:6px">Tiap soal diawali nomor: <code>1. Teks soal</code>
• Pilihan ganda: opsi <code>A. ...</code> <code>B. ...</code>
• Pilihan lebih dari satu: tulis <code>[PGK]</code> sebelum nomor, mis. <code>[PGK] 2. Soal...</code>
• Mencocokkan: pernyataan kiri <code>L1. ...</code> <code>L2. ...</code>, pilihan kanan <code>A. ...</code> <code>B. ...</code>
• Benar/Salah: teks cerita lalu <code>S1. ...</code> <code>S2. ...</code> <code>S3. ...</code>

Kunci (setelah baris KUNCI JAWABAN):
<code>1. B Penjelasan: ...</code>
<code>2. A,C Penjelasan: ...</code>
<code>3. L1-B, L2-A Penjelasan: ...</code>
<code>4. B,S,B Penjelasan: ...</code></div></details></div>
<div style="margin-top:12px">${L.length?L.map(s=>`<div class="item" data-go="quiz:${k}|${s.id}"><span>${esc(s.name)} <span class="mu">· ${s.qs.length} soal</span></span>${s.builtin?'':`<button class="d" data-del="${k}|${s.id}">Hapus</button>`}</div>`).join(''):'<p class="mu">Belum ada set soal.</p>'}</div>`;
$('#gen').onclick=async()=>{const fs=$('#fs').files[0],fk=$('#fk').files[0],m=$('#msg');if(!fs){m.textContent='Pilih PDF soal dulu.';return}
try{m.textContent='Membaca PDF…';let t=await pdfText(fs);if(fk)t+='\nKUNCI JAWABAN\n'+await pdfText(fk);
const qs=parse(t);if(!qs.length){m.textContent='Soal tidak terdeteksi. Cek format di atas.';return}
const n=(D.sets[k]||[]).length+1;(D.sets[k]=D.sets[k]||[]).push({id:uid(),name:(k=='tryout'?'Tryout ':'Latihan Soal '+NAMA[k.split('-')[0]]+' ')+n,qs});await save();render()}catch(e){m.textContent='Gagal membaca PDF (pastikan teksnya bisa diseleksi, bukan hasil scan).'}}}
async function delSet(k,id){if((D.sets[k]||[]).some(x=>x.id==id&&x.builtin))return;if(!confirm('Hapus set ini?'))return;D.sets[k]=D.sets[k].filter(s=>s.id!=id);await save();render()}
/* ===== Kerjakan soal ===== */
function viewQuiz(r){const[k,id]=r.split('|'),s=D.sets[k].find(x=>x.id==id);
if(!Q||Q.id!=id)Q=newQ(id,k,prep(s));
draw()}
function draw(){const{s,done,res}=Q,sc=score();
$('#app').innerHTML=hdr(esc(s.name))+`<div class="bar row sp"><div><span class="mu">Sisa waktu</span><div class="time" id="tm">${fmt(Q.left)}</div></div>
${done?'':`<div class="row">Menit: <input type="number" id="mn" min="1" value="${Q.mn||30}"><button class="g" data-do="tstart">${Q.iv?'Reset':'Mulai'}</button></div>`}
<button data-do="${done?'redraw':'submit'}" ${done?'style="display:none"':''}>Kirim jawaban</button></div>
${done?`<div class="card"><h2>Jawaban terkirim </h2><div class="stat"><div style="background:var(--okb);color:var(--ok)">${sc.ok}<br><small>Benar</small></div><div style="background:var(--nob);color:var(--no)">${sc.no}<br><small>Salah</small></div></div><p>Nilai: <b>${Math.round(sc.ok/s.qs.length*100)}</b> / 100</p>${res?'':'<button data-do="showres">Lihat hasil</button>'}${sc.no?' <button class="g" data-do="retry">Ulangi yang salah</button>':''} <button class="g" data-do="finish">Selesai</button></div>`:''}
${s.qs.map((q,i)=>qH(q,i)).join('')}`;
document.querySelectorAll('[data-a]').forEach(el=>el.onchange=ev=>setA(el))}
const fmt=t=>String(Math.floor(t/60)).padStart(2,'0')+':'+String(t%60).padStart(2,'0');
function tStart(){clearInterval(Q.iv);Q.mn=+$('#mn').value||30;Q.left=Q.mn*60;Q.iv=setInterval(()=>{Q.left--;const t=$('#tm');if(t)t.textContent=fmt(Q.left);if(Q.left<=0){clearInterval(Q.iv);Q.iv=null;submitQ(true)}},1000);$('#tm').textContent=fmt(Q.left)}
function setA(el){const[i,j]=el.dataset.a.split('.'),q=Q.s.qs[i],a=Q.ans;
if(q.t=='PG')a[i]=el.value;else if(q.t=='PGK'){const v=a[i];el.checked?v.push(el.value):a[i]=v.filter(x=>x!=el.value)}else a[i][+j]=el.value}
function ok(q,a){const k=q.key;if(q.t=='PG')return a&&a==k;if(q.t=='PGK')return k.length&&[...a].sort().join()==k.join();return k.length&&k.every((x,i)=>x&&a[i]==x)}
function score(){let o=0;if(!Q)return{ok:0,no:0};Q.s.qs.forEach((q,i)=>{if(ok(q,Q.ans[i]))o++});return{ok:o,no:Q.s.qs.length-o}}
function submitQ(auto){if(Q.done)return;if(!auto&&!confirm('Kirim jawaban sekarang?'))return;clearInterval(Q.iv);Q.iv=null;Q.done=true;logHist();draw();scrollTo(0,0)}
function ansTxt(q,a){return q.t=='JODOH'?q.lefts.map((_,i)=>`L${i+1}→${a[i]||'-'}`).join(', '):q.t=='BS'?a.map(x=>x||'-').join(', '):q.t=='PGK'?(a.join(', ')||'-'):(a||'-')}
function qH(q,i){const A=Q.ans[i],d=Q.done,r=Q.res,c=r?(ok(q,A)?'ok':'no'):'',dis=d?'disabled':'';
const lbl={PG:'Pilihan ganda',PGK:'Pilih lebih dari satu jawaban',JODOH:'Mencocokkan jawaban',BS:'Benar / Salah'}[q.t];let b='';
if(q.t=='PG'||q.t=='PGK')b=q.opts.map(o=>`<label class="opt"><input type="${q.t=='PG'?'radio':'checkbox'}" name="q${i}" value="${o.k}" data-a="${i}.0" ${(q.t=='PG'?A==o.k:A.includes(o.k))?'checked':''} ${dis}><span><b>${o.k}.</b> ${esc(o.t)}</span></label>`).join('');
else if(q.t=='JODOH')b=`<div class="mu pre">${q.opts.map(o=>`<b>${o.k}.</b> ${esc(o.t)}`).join('\n')}</div>`+q.lefts.map((l,j)=>`<div class="row" style="margin:8px 0"><span style="flex:1">${j+1}. ${esc(l)}</span><select data-a="${i}.${j}" ${dis}><option value="">Pilih</option>${q.opts.map(o=>`<option ${A[j]==o.k?'selected':''}>${o.k}</option>`).join('')}</select></div>`).join('');
else b=q.stm.map((l,j)=>`<div style="margin:8px 0">${esc(l)}<div class="row">${['B','S'].map(v=>`<label class="opt" style="margin:4px 0"><input type="radio" name="q${i}_${j}" value="${v}" data-a="${i}.${j}" ${A[j]==v?'checked':''} ${dis}>${v=='B'?'Benar':'Salah'}</label>`).join('')}</div></div>`).join('');
let ex='';if(r){const good=ok(q,A);ex=`<div class="exp"><b style="color:var(--${good?'ok':'no'})">${good?'Benar':'Salah'}</b> · Jawabanmu: ${esc(ansTxt(q,A))}<br>Jawaban benar: <b>${esc(ansTxt(q,q.key))}</b>${q.exp?`<br><span class="pre">${esc(q.exp)}</span>`:'<br><span class="mu">(Penjelasan belum ada di PDF)</span>'}</div>`}
return `<div class="card q ${c}"><span class="tag">${lbl}</span><div class="pre"><b>${i+1}.</b> ${esc(q.text)}</div>${b}${ex}</div>`}

function nav(d){const p=route[route.length-1].slice(5).split('|');route[route.length-1]='read:'+p[0]+'|'+p[1]+'|'+(+p[2]+d);render();scrollTo(0,0)}
const fm=s=>esc(s).split('**').map((x,i)=>i%2?'<b>'+x+'</b>':x).join('');
function mk(t){return t.split('\n').map(l=>{l=l.trim();if(!l)return'';const c=l[0],r=l.slice(1).trim();
 if(c=='#')return `<h3>${esc(r)}</h3>`;
 if(c=='-')return `<div class="li">${fm(r)}</div>`;
 if(c=='>')return `<div class="note">${fm(r)}</div>`;
 if(c=='?'){const[q,a,e]=r.split('||');return `<div class="eg"><b>Contoh soal</b><div class="pre">${fm(q.replace(/\\n/g,'\n'))}</div><details><summary>Lihat jawaban</summary><b>Jawaban: ${esc(a)}</b><br>${fm(e)}</details></div>`}
 return `<p>${fm(l)}</p>`}).join('')}
const _mk=mk;
mk=function(t){let o='',b=[];for(const l of t.split('\n')){if(l[0]=='@'){o+=_mk(b.join('\n'));b=[];o+=`<div class='fig'>${FIG[l.slice(1).trim()]}</div>`}else b.push(l)}return o+_mk(b.join('\n'))};
function mergeB(){D.sets=D.sets||{};for(const k in PK){D.sets[k]=[...PK[k].map((x,i)=>({id:'b-'+k+'-'+i,name:x.n,builtin:1,qs:x.p.flatMap(parse)})),...(D.sets[k]||[]).filter(s=>!s.builtin)]}}

const hdr=t=>`<nav class="crumbs"><button class="link" data-do="back">← Kembali</button><button class="link" data-do="home">Beranda</button></nav><h2>${t}</h2>`;
const row=(go,no,nm,sub)=>`<li><button data-go="${go}"><span class="no">${no}</span><span class="nm">${nm}<small>${sub}</small></span><span class="ar">→</span></button></li>`;
function render(){const r=route[route.length-1],a=$('#app');
if(r=='home')a.innerHTML=`<header class="mast"><p class="eyebrow">Persiapan TKA SD/MI 2026</p><h1>Belajar TKA</h1><p class="lede">Ringkasan materi dan latihan soal, lengkap dengan timer dan pembahasan.</p></header><ol class="toc">${row('subj:indo','01','Bahasa Indonesia','Materi dan latihan soal')}${row('subj:mtk','02','Matematika','Materi dan latihan soal')}${row('list:tryout','03','Tryout','Soal gabungan dengan hitung mundur')}${row('hist','04','Riwayat nilai','Perkembangan latihanmu')}${row('data','05','Cadangan data','Simpan dan pindahkan set soal')}</ol>`;
else if(r.startsWith('subj:')){const s=r.slice(5);a.innerHTML=hdr(NAMA[s])+`<ol class="toc">${row('materi:'+s,'A','Materi','Ringkasan per bab')}${row('list:'+s,'B','Latihan','Paket soal dan hasil')}</ol>`}
else if(r=='hist')viewHist();
else if(r=='data')viewData();
else if(r.startsWith('materi:'))viewMateri(r.slice(7));
else if(r.startsWith('read:'))viewRead(r.slice(5));
else if(r.startsWith('list:'))viewList(r.slice(5));
else if(r.startsWith('quiz:'))viewQuiz(r.slice(5))}
function viewMateri(s){$('#app').innerHTML=hdr('Materi '+NAMA[s])+BUKU[s].filter(c=>!c.p).map((c,ci)=>`<section class="bab"><h3><span class="no">${ci+1}.</span>${esc(c.t)}</h3>${c.s.map((x,si)=>MT[s+ci+'-'+si]?`<button class="item" data-go="read:${s}|${ci}|${si}"><span>${esc(x[0])}</span><span class="mu">Baca →</span></button>`:`<div class="item off"><span>${esc(x[0])}</span><span class="mu">Segera hadir</span></div>`).join('')}</section>`).join('')}
function viewRead(r){const[s,ci,si]=r.split('|'),c=BUKU[s][+ci],x=c.s[+si],has=k=>MT[s+ci+'-'+k];
$('#app').innerHTML=hdr(esc(x[0]))+`<p class="mu">${esc(c.t)}</p><article class="prose">${mk(MT[s+ci+'-'+si])}</article><div class="row sp pager">${+si>0&&has(+si-1)?`<button class="g" data-do="prev">← Sebelumnya</button>`:'<span></span>'}${has(+si+1)?`<button data-do="next">Berikutnya →</button>`:''}</div>`}
function setTheme(t){document.documentElement.dataset.theme=t;try{localStorage.setItem('tka-theme',t)}catch(e){}$('#theme').textContent=t=='dark'?'Mode terang':'Mode gelap'}
let th;try{th=localStorage.getItem('tka-theme')}catch(e){}
setTheme(th||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
/* Semua klik lewat satu pintu ini (tanpa onclick di HTML, supaya CSP bisa ketat) */
const ACT={back,home:()=>{route=['home'];render()},prev:()=>nav(-1),next:()=>nav(1),tstart:()=>tStart(),submit:()=>submitQ(),redraw:()=>draw(),
 showres:()=>{Q.res=true;draw()},finish:()=>{Q=null;back()},theme:()=>setTheme(document.documentElement.dataset.theme=='dark'?'light':'dark')};
document.addEventListener('click',e=>{const t=e.target.closest('[data-go],[data-del],[data-do]');if(!t)return;
 if(t.dataset.go)go(t.dataset.go);else if(t.dataset.del){const[k,id]=t.dataset.del.split('|');delSet(k,id)}else ACT[t.dataset.do]&&ACT[t.dataset.do]()});


/* ===== Fitur tambahan: acak, ulang soal salah, riwayat, cadangan, PWA ===== */
const rnd=a=>{a=[...a];for(let i=a.length;i>1;){const j=Math.random()*i--|0;[a[i],a[j]]=[a[j],a[i]]}return a};
function prep(s){if(!D.acakQ&&!D.acakO)return s;let qs=s.qs.map(q=>JSON.parse(JSON.stringify(q)));
 if(D.acakO)qs.forEach(q=>{if(q.t!='PG'&&q.t!='PGK')return;const m={};q.opts=rnd(q.opts).map((o,i)=>{m[o.k]='ABCDE'[i];return{k:'ABCDE'[i],t:o.t}});q.key=q.t=='PG'?(m[q.key]||q.key):(q.key||[]).map(x=>m[x]||x).sort()});
 if(D.acakQ)qs=rnd(qs);return{...s,qs}}
const newQ=(id,k,s)=>({id,k,s,ans:s.qs.map(q=>q.t=='PGK'?[]:q.t=='BS'?['','','']:q.t=='JODOH'?q.lefts.map(()=>''):''),done:false,res:false,left:0,iv:null});
function logHist(){const c=score();D.hist=[...(D.hist||[]),{t:Date.now(),name:Q.s.name,ok:c.ok,n:Q.s.qs.length}].slice(-200);save()}
function viewHist(){const H=[...(D.hist||[])].reverse(),av=H.length?Math.round(H.reduce((a,x)=>a+x.ok/x.n*100,0)/H.length):0;
 $('#app').innerHTML=hdr('Riwayat nilai')+(H.length?`<div class="stat"><div>${H.length}<br><small>Kali latihan</small></div><div>${av}<br><small>Rata-rata nilai</small></div></div>`+H.map(x=>`<div class="item"><span>${esc(x.name)}<br><span class="mu">${new Date(x.t).toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'})} · ${x.ok} dari ${x.n} benar</span></span><b class="sc">${Math.round(x.ok/x.n*100)}</b></div>`).join('')+`<p><button class="d" data-do="clearhist">Hapus riwayat</button></p>`:'<p class="mu">Belum ada riwayat. Selesaikan satu latihan dulu.</p>')}
function viewData(){$('#app').innerHTML=hdr('Cadangan data')+`<div class="card"><b>Ekspor</b><p class="mu">Simpan set soal hasil upload dan riwayat nilai ke satu file .json.</p><button data-do="export">Simpan ke file</button></div><div class="card"><b>Impor</b><p class="mu">Muat file cadangan. Data yang sudah ada tidak ditimpa.</p><input type="file" id="imp" accept=".json,application/json"><p id="imsg" class="mu"></p></div>`;
 $('#imp').onchange=async e=>{const m=$('#imsg');try{const f=e.target.files[0];if(!f||f.size>2e7)throw 0;const r=importData(JSON.parse(await f.text()));await save();m.textContent=r.s+r.h?'Berhasil: '+r.s+' set soal dan '+r.h+' riwayat ditambahkan.':'Tidak ada data baru yang bisa ditambahkan.'}catch(x){m.textContent='File tidak valid.'}}}
const str=x=>typeof x=='string'&&x.length<500,okQ=q=>q&&['PG','PGK','JODOH','BS'].includes(q.t)&&typeof q.text=='string'&&[q.opts,q.lefts,q.stm].every(Array.isArray)&&q.opts.every(o=>o&&str(o.k)&&typeof o.t=='string')&&q.lefts.every(x=>typeof x=='string')&&q.stm.every(x=>typeof x=='string')&&q.key!=null&&(q.exp==null||typeof q.exp=='string');
function importData(j){let s=0,h=0;D.sets=D.sets||{};
 for(const k of ['indo','mtk','tryout']){const L=D.sets[k]=D.sets[k]||[],src=j&&j.sets&&j.sets[k];if(!Array.isArray(src))continue;
  for(const x of src){if(!x||!str(x.id)||!str(x.name)||!Array.isArray(x.qs)||!x.qs.length||!x.qs.every(okQ)||L.some(y=>y.id==x.id))continue;L.push({id:x.id,name:x.name,qs:x.qs});s++}}
 D.hist=D.hist||[];for(const x of (j&&Array.isArray(j.hist)?j.hist:[])){if(x&&Number.isFinite(x.t)&&str(x.name)&&Number.isInteger(x.ok)&&Number.isInteger(x.n)&&x.n>0&&!D.hist.some(y=>y.t==x.t&&y.name==x.name)){D.hist.push({t:x.t,name:x.name,ok:x.ok,n:x.n});h++}}
 D.hist.sort((a,b)=>a.t-b.t);return{s,h}}
Object.assign(ACT,{
 retry:()=>{const w=Q.s.qs.filter((q,i)=>!ok(q,Q.ans[i]));if(!w.length)return;Q=newQ(Q.id,Q.k,{...Q.s,name:Q.s.name.replace(/ · ulang.*$/,'')+' · ulang soal salah',qs:w});draw();scrollTo(0,0)},
 clearhist:()=>{if(confirm('Hapus semua riwayat nilai?')){D.hist=[];save();render()}},
 export:()=>{const sets={};for(const k in D.sets||{}){const u=D.sets[k].filter(x=>!x.builtin);if(u.length)sets[k]=u}
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify({v:1,sets,hist:D.hist||[]})],{type:'application/json'}));a.download='cadangan-belajar-tka-'+new Date().toISOString().slice(0,10)+'.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),1e4)}});
document.addEventListener('change',e=>{if(e.target.id=='aq'){D.acakQ=e.target.checked;save()}if(e.target.id=='ao'){D.acakO=e.target.checked;save()}});
if('serviceWorker' in navigator&&location.protocol.startsWith('http'))addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));

(async()=>{const d=await kvGet('data');if(d)D=d;D.materi=D.materi||{indo:[],mtk:[]};D.hist=D.hist||[];mergeB();render();try{navigator.storage&&navigator.storage.persist&&navigator.storage.persist()}catch(e){}})();
