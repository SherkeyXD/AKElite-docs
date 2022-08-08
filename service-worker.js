/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "27e01fba025b35d204b09be0087c0720"
  },
  {
    "url": "assets/css/0.styles.5f3da628.css",
    "revision": "9890a87246f1e9b3992b3e9acac5f998"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.596d1193.js",
    "revision": "d6fb49c2594b79556d35ff39a392bc1e"
  },
  {
    "url": "assets/js/11.388f36c4.js",
    "revision": "5fac797468d83caa8d0d85303e0e2d30"
  },
  {
    "url": "assets/js/12.679d8caa.js",
    "revision": "c5f6fda6bc6f7b12c86594ce9dfb36bd"
  },
  {
    "url": "assets/js/13.d480c183.js",
    "revision": "9e402ef3b0bf69dd764e203f1dec82f6"
  },
  {
    "url": "assets/js/14.232c6fff.js",
    "revision": "1f0655ef4362051b5b611d7b024dd83a"
  },
  {
    "url": "assets/js/15.8b02cb35.js",
    "revision": "3e5ec9ce1d591261173fcba4bf60889a"
  },
  {
    "url": "assets/js/16.211cc140.js",
    "revision": "2fea27a1f5ca3f7c264009f0a411954e"
  },
  {
    "url": "assets/js/2.6a53d314.js",
    "revision": "73bf60fa6e4836b7ba5a126690c5a54e"
  },
  {
    "url": "assets/js/3.90fa59e4.js",
    "revision": "f04220ce963cadb1b0ebb6676dfc4808"
  },
  {
    "url": "assets/js/4.6b3d6af4.js",
    "revision": "86ac456cbc019727b8cdd0a59d22b8c9"
  },
  {
    "url": "assets/js/5.a61548ab.js",
    "revision": "dbaabb027f78c8e867f73e176a3ef053"
  },
  {
    "url": "assets/js/6.f86d0ae3.js",
    "revision": "472d7317d7f35ae7105b64a0f6f176b3"
  },
  {
    "url": "assets/js/7.20bfd56f.js",
    "revision": "87bff39b66f6a783735a3c00e798bd8c"
  },
  {
    "url": "assets/js/8.b1fcf844.js",
    "revision": "f58150a4dac6b43d16389eadbc20f254"
  },
  {
    "url": "assets/js/9.48e3da73.js",
    "revision": "da32e9a5220658757d72b7bc4f30bc58"
  },
  {
    "url": "assets/js/app.b7eda26b.js",
    "revision": "5ad4447fb9ae4de8effd26aa8420043f"
  },
  {
    "url": "boss/index.html",
    "revision": "a28dfa82498a462e5767de2a0619faa0"
  },
  {
    "url": "elite/index.html",
    "revision": "5f2cc51b54a2d7924b39bab1cdcabaf8"
  },
  {
    "url": "enemy/index.html",
    "revision": "8498e5f46f5d947e8ae89ca56ca34917"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png.png",
    "revision": "95662fda679559db45a6d7dbfdc72818"
  },
  {
    "url": "icons/msapplication-icon-144x144.png.png",
    "revision": "7cb93fc4bd10fa4b8f3e57e1fdc91883"
  },
  {
    "url": "icons/safari-pinned-tab.svg.svg",
    "revision": "166ec72702511acb30b44c734ed83221"
  },
  {
    "url": "index.html",
    "revision": "2e312ecbfba9d0e02a8dcf64521cf4c5"
  },
  {
    "url": "logo/1024x.png",
    "revision": "86c144b95494a4b18593590ab60f702b"
  },
  {
    "url": "logo/144x.png",
    "revision": "7cb93fc4bd10fa4b8f3e57e1fdc91883"
  },
  {
    "url": "logo/256x.png",
    "revision": "f695868e6d5f63eed4e24cd72c224a7e"
  },
  {
    "url": "logo/72x.png",
    "revision": "9f7d0ed388d237d6d53395c33e81fd90"
  },
  {
    "url": "normal/index.html",
    "revision": "566269803cae61337962107251b8237e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
