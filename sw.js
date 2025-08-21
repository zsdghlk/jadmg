const CACHE = "app-shell-v1";
const ASSETS = ["/", "/manifest.webmanifest"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  // GAS は常に最新（キャッシュしない）
  if (url.hostname.includes("script.googleusercontent.com") ||
      url.hostname.includes("script.google.com")) return;
  // それ以外はキャッシュ優先
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
