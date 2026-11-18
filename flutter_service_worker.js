'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "337c406f2758edeee6dfef01e1b9d0ad",
"index.html": "4f2ddc2f5b13f05e64c8112408b7a0b7",
"/": "4f2ddc2f5b13f05e64c8112408b7a0b7",
"main.dart.js": "50fbb17fd3236d3c78ba54195e3b45e6",
"version.json": "e9d3fb4b479f3f7cdcaa6dd67a434ba3",
"assets/version.json": "4e689d1319a4940c91545d65dc36a2d4",
"assets/assets/fonts/Archivo-Black.ttf": "381a1bfef7f2254a3f3fe98b4191f1bd",
"assets/assets/fonts/Archivo-Bold.ttf": "5a7fcfd46eea94baa2ec8b1ad14f386c",
"assets/assets/fonts/Archivo-ExtraBold.ttf": "fe0f1af12ccfad36604d6f77aacb82bb",
"assets/assets/fonts/Archivo-Medium.ttf": "23c82d909b930837429db901ad8c4ea3",
"assets/assets/fonts/Archivo-Regular.ttf": "8ab6ec14e506889aff68639f9ee4dfdb",
"assets/assets/fonts/Archivo-SemiBold.ttf": "ba11776670f77fe0b28ecb068ac8fbe6",
"assets/assets/fonts/Baloo2-Bold.ttf": "d96aacb903cdc057c258890e9ebc0f3b",
"assets/assets/fonts/Baloo2-ExtraBold.ttf": "a33cf713fc51cb3d88d5f3d3638f45d3",
"assets/assets/fonts/Baloo2-Medium.ttf": "8e5a7abdabb14bad28d9417ae8768993",
"assets/assets/fonts/Baloo2-Regular.ttf": "98397f5fe32477af9f0460e9c9077690",
"assets/assets/fonts/Baloo2-SemiBold.ttf": "1c477530d861ded2a50ef3295c83bcf6",
"assets/assets/fonts/HindSiliguri-Bold.ttf": "ea6b2d4c5503311131986f83bbbe89db",
"assets/assets/fonts/HindSiliguri-Light.ttf": "8b7dd111e17bbf6f7d8cebcaf5a7a273",
"assets/assets/fonts/HindSiliguri-Medium.ttf": "35044a0e2c61f2d7c774aa72a7b8a5ce",
"assets/assets/fonts/HindSiliguri-Regular.ttf": "4d945383f386003ba6bc1026c177865b",
"assets/assets/fonts/HindSiliguri-SemiBold.ttf": "55f4101c8c57f5993e0b2468e39ba604",
"assets/assets/fonts/NotoSansBengali-Bold.ttf": "49dc85d9c2f04baa4a751c098150cbd7",
"assets/assets/fonts/NotoSansBengali-ExtraBold.ttf": "b3a0d3b1579917a7f0bed68b5b5d4e9d",
"assets/assets/fonts/NotoSansBengali-Medium.ttf": "a4e305a8031378313a6c39e73d7b6a28",
"assets/assets/fonts/Roboto-Regular.ttf": "e20d2de553c537cb16367bf2b7f3735a",
"assets/assets/fonts/Roboto-Bold.ttf": "fb9780c7a23f74b62646efc76e9da7cc",
"assets/assets/fonts/NotoSansBengali-SemiBold.ttf": "008c1490984ec4e247ec170504acef89",
"assets/assets/fonts/Roboto-Medium.ttf": "c45c12e87b17604ec916e4d2e3baa402",
"assets/assets/fonts/Roboto-Black.ttf": "54ae67187929065710b18769bf491d3a",
"assets/assets/fonts/NotoSansBengali-Regular.ttf": "5f8360ccb6eb11d12ff22e093ffcee9b",
"assets/assets/logo-mark.png": "8639c6f6bc184875ada738dcd5565f1a",
"assets/fonts/MaterialIcons-Regular.otf": "406fc92eafe79e2b9819ea7bdc932c1c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "3a861740a79b85a70dfdcaea70d38928",
"assets/AssetManifest.bin": "154dea617d6fedc9551db3e299a4f97c",
"assets/AssetManifest.bin.json": "a8f2f797dbda4caad717299167226fd6",
"assets/FontManifest.json": "a36c17924da36614bc31288b30ef2371",
"assets/NOTICES": "031f02c931b18cc4afbbabe21a3abebe",
"favicon.png": "e2e82f2f6793dd0f83877d1161531fe4",
"manifest.json": "1f8cf461ea8186e09ee7fc2571ac1544",
"icons/Icon-512.png": "b2d4ce1b0842eb5cfc31c6b9374d07a0",
"icons/Icon-maskable-192.png": "3101b42e06e5d2be52c4d3e729a14938",
"icons/Icon-maskable-512.png": "2cb0de34daf1550411acddcdb5cec460",
"icons/Icon-192.png": "db168ffc3efafe84cfdec9b163e0f7ca",
"logo-lockup.png": "f3bc53cbf13b476246120d1acfab8530"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
