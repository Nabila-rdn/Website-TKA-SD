/* Service worker: online -> ambil versi terbaru; offline -> pakai salinan tersimpan. */
const C='tka-v3',F=['./','index.html','style.css','app.js','data.js','manifest.webmanifest','icon-192.png','icon-512.png','vendor/pdf.min.js','vendor/pdf.worker.min.js','vendor/fonts/young-serif-latin-400-normal.woff2','vendor/fonts/atkinson-hyperlegible-latin-400-normal.woff2','vendor/fonts/atkinson-hyperlegible-latin-700-normal.woff2'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!='GET'||new URL(r.url).origin!=location.origin)return;
 e.respondWith(fetch(r).then(x=>{if(x.status==200){const c=x.clone();caches.open(C).then(k=>k.put(r,c))}return x}).catch(()=>caches.match(r).then(x=>x||caches.match('index.html'))))});
