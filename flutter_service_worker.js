'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "efe3e10b0df2bb7eb42f90d42fd6baed",
".git/config": "ebb1f86c12d7bf39dd65c0df1dc451dc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "1a5db8d140e14f238053f2d1d4d37144",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cbfaa9f5fbdc081f7a9d4065151e133f",
".git/logs/refs/heads/master": "cbfaa9f5fbdc081f7a9d4065151e133f",
".git/logs/refs/remotes/origin/master": "696bca42827000f553fb718889f3ec62",
".git/objects/1b/9913cfaa4bce38e5523a0bef703e90f94958be": "419de34abfa903db20eb56b57fafbc37",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/16c9a1714d398e706a153890007b5b1ada272f": "41c35c67bd5700b8421f6a833278d033",
".git/objects/2a/8a3fff0fd7f0c9f599c2e2bedfec9bdf06be04": "0b1df4cc9f90c71cbf39bc3455ae528c",
".git/objects/2f/d3705c164e81df95e01e25b7f7abe85d102f6a": "2241ffefe30d3a2b0773b577de7550a4",
".git/objects/30/b37ee44e1c4dba3fa1f0f966dfcd9765f3ea9b": "d24007a5a7a1e4eab7bee2c0af0a3f05",
".git/objects/3a/caa994863389ce23fd5e9511a44723dadc4a2d": "35496d763447b255366c45a18e3050e4",
".git/objects/3b/c14126ce4fcc7d96df0d8515be75c67d2b9a64": "0cb1d0364e28add298932722b7609dd1",
".git/objects/42/47c72b47114998ecbb0fd2dab1a8ddfd03ab5a": "7ef3c8fa7b740d4dbdd2984f5e663db3",
".git/objects/60/c995b0254393f6f6006b8324fb87fe5c98876a": "f225ab0c4cd091deeb8c2439e3547678",
".git/objects/6e/adc851a04af5e5af9fa13a84e59de6da559430": "140c538c0a1c8a27be521250d6945330",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/86/1cf90c4cf121925b12752a2ae8569c402312ce": "551a3d06ccb035d53d50b9d1c48a9766",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/0739669f1b13e75b55751902f8f84c472870d7": "b7a155998274a21d510ca767ceabbc3b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/4bdb32a6a9dac87785ec892fce91649ab6baf9": "fcdccecfe64cd2de07e1a25029b718ef",
".git/objects/9e/1ea65c98e2170b249f85d5ae7cc2ce64ac13d1": "16203a1b0d1d2ccac487e3647a5c5cfd",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/e2e986a15ffd89f11b074ef8f795a1e9050818": "356e0093893b91bafb88dffa4d358964",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c5/be95c980297878d2112526fe20a917f737e9cc": "5e31de2f594b0c13d1e7e5f8a3dcec7a",
".git/objects/d1/d748c8b8b2f5b3250d30b590410126349b11ca": "327f48f00109cbd9e2bd52e12c5f4662",
".git/objects/e1/c01a95fce993d98131f1a4b4b47c0a79356575": "81fa7fecf2f6ed77dc8a4f03d75caca8",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/5e65dc036932afccf9f90e523cb7b0310f5e08": "1dde798fb1cc406d4d78978d7bc3c5d8",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f9/3cd37698964bd2ec9547b5417c4541707775ae": "2243e871a4f0997deaf312bd4f353ecb",
".git/refs/heads/master": "3e71817cb6498c32fd0bd1f64037d8cc",
".git/refs/remotes/origin/master": "3e71817cb6498c32fd0bd1f64037d8cc",
"assets/AssetManifest.json": "b25a3599cfcec0e5b4c644881f3e2344",
"assets/face.png": "021ada146ffb7c1753557ff29618d04c",
"assets/FontManifest.json": "90cd9f941233cc76ee7aa08546272515",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/in.png": "fd0d5546fdbdc85c76c4372a0d51f1bc",
"assets/meyre.png": "13baa6beeee21f83e7e9e35f261f9b32",
"assets/NOTICES": "1a13c81ff3cd573e49d9b0bdc49741b3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/prancheta.png": "c8b6a24d7abaf4e083916e78b7ceba28",
"assets/web/assets/face.png": "021ada146ffb7c1753557ff29618d04c",
"assets/web/assets/in.png": "fd0d5546fdbdc85c76c4372a0d51f1bc",
"assets/web/assets/meyre.png": "13baa6beeee21f83e7e9e35f261f9b32",
"assets/web/assets/prancheta.png": "c8b6a24d7abaf4e083916e78b7ceba28",
"assets/web/fonts/BerkshireSwash-Regular.ttf": "dc7bceaa5cca20023e332a65fc9aa2a1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"fonts/BerkshireSwash-Regular.ttf": "dc7bceaa5cca20023e332a65fc9aa2a1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "3fdc51424d38a72bfa5dba7b03683274",
"/": "3fdc51424d38a72bfa5dba7b03683274",
"main.dart.js": "971ded9c51dbd396f39d402874eb2812",
"manifest.json": "485e76cd0cfe509ee6d1bc9dc7be1a8c",
"version.json": "f8b0582c029f7a500a1746b7f1471a1f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
