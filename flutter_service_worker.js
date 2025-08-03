'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a10721483cd8b96e2a11be3531948f09",
".git/config": "7ea5c11ee6231200f2065d379349c5b8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1b9934357aaedf2cc09f2a6b7e90c863",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "db2b07b20494cd542d615562f301e586",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0844534ee4f8cd85782d02e61a1e525f",
".git/logs/refs/heads/main": "94ea55b3762248f917328eeafcc79b48",
".git/logs/refs/remotes/origin/main": "223bdc13c369010340d7d6d296e10047",
".git/objects/04/f16122c77aec81eaceb7f42505ef861d5be5a4": "ac0fc2bbed8e5981c585e94ec616c709",
".git/objects/09/56ca52703e54fb316e71afa489c38de512a3c5": "5ecbc1f78d4926fa110171aa99746e26",
".git/objects/0a/cdca51513ef6a4fcda4c57d0cb5cc3d49a1619": "a39b5b4ad71f677d4dc37f620b141acc",
".git/objects/1a/24952331bd6a2c0ca00c6e88fac60af2dffd1a": "cb898c25a6f84858aef9468b64cc99fd",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/26/d1651b9cf3c554db8ff77c2d7aa11d934afd94": "9554f0bb71861ac6d767a9ce828592ed",
".git/objects/27/6d5eb3cf152674b8acb57f9bdeeacaa668c44a": "96a747989979e5990b621e04463fec00",
".git/objects/2f/e1bdee4d42613c8d9f39afca429b8fc75745e0": "beefa96888037cc5032cff993ff88a7f",
".git/objects/33/a0113748eade11b2468048673ce545d73fd092": "f9f9b49283d0579aff5b8b519e5cea19",
".git/objects/40/b6dce18c6a1ced8feb117e9ff0a846f682fdb7": "43b2287138db636acaf236e981e4319f",
".git/objects/44/57c20bc31752767b35e35d84f5a50906c9721e": "88cc4f328f53ce94d7b3c9a2aed69818",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/ec6e5b4fa9e8b849bc79cd6b59972d16045ea1": "e459b44196521691fb63d29d26073157",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4c/a065727751ae95a5f694d6f7f32f5d386df695": "3241b505eed3b88865a5ba9abfe247c8",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/57/9fc6ef14dfd48f712095bf9634e9eb3bd7b88e": "f8f73fa19616260054b76bb3ec7236a4",
".git/objects/5a/2a143d4cf4043d6479c8bfc82a348345ab4490": "3f8a94a6d29630e321873a9bb8475c7c",
".git/objects/5e/071df382d4fa16d17ae6ce7755ea899f209e10": "9da76d389dbd0aef818ce757f9c62ba1",
".git/objects/61/a3779282e21342823a0cb1e84d65e3109a37b4": "16b4c9fe0cb721d72902c4c9d96dbeb2",
".git/objects/66/724acd2fddd9b1da1bc350df0b82175b3f0c6b": "4a37d5726118a8e97c61fd324da1021b",
".git/objects/68/20423e8270650e12b4c83695a289420d169572": "f0fd68f8b72e3239eb4dcbed1cb14d98",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/75/8e34a67046977590fe81b91bb88a4330139799": "6be34bea76553a3df01c11c1cf3f31dd",
".git/objects/77/13a48af7c8797e53d214e69aae8dedcea63126": "0d28637671cd9110fa610f967ec30ff4",
".git/objects/77/ee00db420b51bb7a4cd2b7fb1b7856eddb37bf": "fc367d55f07eccaa15e2c5430c6ad0ee",
".git/objects/7c/e2c9ded6a7f71d8c574c30d67fbaaa73a2f1da": "15ca1ba602bec97b8dd6c2bdfdf30618",
".git/objects/80/481bb1800577b56c9614c0bfccf0437a3f2796": "5a86420f795292711ab7aab28f2f01b3",
".git/objects/85/7376a6eb07565e55390c4bc1979b8b63b3d700": "28b8e9a8f60b3b8450f2cb4e45da4663",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/e00cdcd956ddfa24cbce8dd243bd075fe58568": "87e3344e3410b9eb1b977779bd43fc36",
".git/objects/8b/f0dc6c9a7bfb8f5600b915c6013448425bdf68": "5424bf20d1cbd703039e95b01785437b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/27c38c2a6efc2a7e546e7450ec76dc268e4203": "6bdecabe6c437dce4420210a44ff5d57",
".git/objects/90/e50dd8fd0e72a8e88dd42f03dd1315b4212dbc": "e21c1f6931bbad05d000a65774a45d1c",
".git/objects/97/18bb26e97d113b0b47d110c49da07afff34749": "965d1525739f0be278444b0b68433a5c",
".git/objects/98/74d7866c60ccf26d5eefac80e486c57c2b6574": "d0e16257acf854a510b8e991c9ee9723",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a2/be14b3cbc54d924fdca1b769c13c85558b25c6": "6a3cad12d0a79f447d54edd8c0b9fd36",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c6/4214d599c5915e5f323077e9d60f4074237989": "976a5c832a0ea4b8a4da5c7e1209a96a",
".git/objects/c6/fb32a8d1a19402f4aee71b71f6138467a0bc56": "37899133f7b2468df7cfef22cb81d122",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/cc521acd42d9e729fecf0147eb666d0ac86b29": "84d9e94eabed26ea27b7d1ad1ed2d0c2",
".git/objects/cb/9a46ef58f9446743e425e031f66f5fba61176e": "dff248fd7e75a4b5a9d3703c304e285a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/d48b617d2ab3cdb8837ce60c342f58c0e5e306": "7905eac611ec463c28adbf7dc4b108d7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e6/c06c28d960bf9bec8d91363d5a6ec17bea259c": "8ec4029e8c66e6869308b29ee50a2dd9",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/2d24ea7d7e83e484a1f618bdb23a4119329fde": "5304c82a110d8e2f66949896a424c41f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fb/12b9775d89de8bd71fe4a85db70c1fd32f8e7f": "2427b0ba7e1ff51f6dcc803482997ba8",
".git/objects/fd/69dfc5c6443c4e2c7296a1c631df3bb8302a48": "2fb7d339b7b5fee1de81fa017ffe77bc",
".git/objects/fd/984041bc675a15cfe37bee957013904ef1f3e8": "c3b45f8f3673670fb7e6be6c06ae2a70",
".git/objects/fe/171a3d7b737846e8b8f1463989883944f021a8": "fe9c12edc459bdd3424a815a6f091a12",
".git/refs/heads/main": "70de4fdb979c3295ef69401c3e1a5729",
".git/refs/remotes/origin/main": "f1a7c11be5f0ba36220e894d5c2eb470",
"assets/AssetManifest.bin": "7f66b836d6f5cdacfcbfc800f304ff4d",
"assets/AssetManifest.bin.json": "8a4ee2ca317d18519f23ecd7b494f50d",
"assets/AssetManifest.json": "0ab268eac9beeb7e403be49932247b37",
"assets/assets/level/level1.json": "892542b52a46f0b091057091971f2174",
"assets/assets/level/level2.json": "151a0f30400d40db10a6c2fb76f0a96d",
"assets/assets/level/level3.json": "7bd9f5aebe2783663e40a4d9a4dc25d9",
"assets/assets/level/level4.json": "49d070330cf977730df6d8e1f4ebeff8",
"assets/assets/level/level5.json": "11c99df0eb0cb4029da5ddc2a482d544",
"assets/assets/level/level6.json": "958fd9c96d421f1ebf65148a091604f0",
"assets/assets/level/level7.json": "356c562fb3c6702b778f7c216bfe1aab",
"assets/assets/level/level8.json": "b70b0254c5aa585ab80c39dea7bb3001",
"assets/assets/level/level_viewer.html": "e889b07d9ddbcc138969027825fe4300",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f16417dfd6dd49e54fd3e3781cca282d",
"assets/NOTICES": "7f673730900047942f728fe9f06d3f75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "fe1559fe0473c24de03127a03fb1ca6a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "73ea81e5883f33fa8010938a9302a950",
"/": "73ea81e5883f33fa8010938a9302a950",
"main.dart.js": "f6d35c60e74f23958148f4854ccd0b6e",
"manifest.json": "be4251f644ab99883c013441a7960320",
"version.json": "87625bca426f47de88cc3a482c4e3909"};
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
