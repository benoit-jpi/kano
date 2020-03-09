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
    "revision": "9ed861aba87c49b42134b550e09c2932"
  },
  {
    "url": "about/contact.html",
    "revision": "aa4b1530727a55e97615fe3284ee8b1c"
  },
  {
    "url": "about/contributing.html",
    "revision": "4dfbd22ca407e48d7dd33ffcf406d4c4"
  },
  {
    "url": "about/introduction.html",
    "revision": "81f1f5f5b8e24bc0e7eadcc3291e1bbe"
  },
  {
    "url": "about/license.html",
    "revision": "7009cfa4afb6c1f7170715ec115ac95a"
  },
  {
    "url": "about/roadmap.html",
    "revision": "13cceb56c2a83cfa91355db8f1480089"
  },
  {
    "url": "assets/css/0.styles.fff2c21d.css",
    "revision": "3f18e0cb604a75884acf5568bce78757"
  },
  {
    "url": "assets/img/kano-screenshot.2b6d4bbf.png",
    "revision": "2b6d4bbfa0992bbbbaae5745b2a7db4b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fd31af73.js",
    "revision": "4c775b92be2847b9796f297bf89a9a0b"
  },
  {
    "url": "assets/js/11.5f54ffdf.js",
    "revision": "88ef6fe83dd70175adf902c480562a5d"
  },
  {
    "url": "assets/js/12.6f32cd49.js",
    "revision": "d865402eb32d80007231b9537cca15f5"
  },
  {
    "url": "assets/js/13.9c2082cc.js",
    "revision": "5d8722ffd65a5caa1db8763554baa72f"
  },
  {
    "url": "assets/js/14.f813f6c9.js",
    "revision": "3cdc1cae1ea4f454fcf3fe6de0f438ce"
  },
  {
    "url": "assets/js/15.adca4878.js",
    "revision": "e62aff35074fb531b921a8ed4452239b"
  },
  {
    "url": "assets/js/16.ea94cc60.js",
    "revision": "7ed0acb935b0850ee364e50ad0a8a75b"
  },
  {
    "url": "assets/js/17.4c9c4cec.js",
    "revision": "ba51c54ba7efc8b7c55721f1bad5432e"
  },
  {
    "url": "assets/js/18.a61b639f.js",
    "revision": "ae4d7e013c44fffeba1676076b21f18c"
  },
  {
    "url": "assets/js/19.22431170.js",
    "revision": "5288a7dacc311de538d053ce8ff48c28"
  },
  {
    "url": "assets/js/2.22f3cf03.js",
    "revision": "ed61744e779f4e29f9526460a6d60388"
  },
  {
    "url": "assets/js/20.06eabe83.js",
    "revision": "f43c1a36ba1477b99f69594b2c096a03"
  },
  {
    "url": "assets/js/3.5fd83cbf.js",
    "revision": "367aac5ba2961688dce1122522e00e7d"
  },
  {
    "url": "assets/js/4.f8739072.js",
    "revision": "8031b0a3089315ad664cfd322a23e5e7"
  },
  {
    "url": "assets/js/5.35d4035f.js",
    "revision": "e1ab26dd3feb14f78b18f32f98b20b00"
  },
  {
    "url": "assets/js/6.e630bb9f.js",
    "revision": "94fd0bf790ff4f65fb7480dda1b397b4"
  },
  {
    "url": "assets/js/7.d45bd771.js",
    "revision": "e873138e442e540463bec92b2bff63bb"
  },
  {
    "url": "assets/js/8.2a2a3f52.js",
    "revision": "92465267541f01f2047d96a942183017"
  },
  {
    "url": "assets/js/9.96713510.js",
    "revision": "c68626bd92046e59fa57f526cd26c698"
  },
  {
    "url": "assets/js/app.3ffd61fa.js",
    "revision": "434ddb2b73bda23b3038c050904fbc0a"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "6fc07a14dc0aeab36e9cfe7cfc3615cd"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "145b26baec3b65972acb35ce476fbe39"
  },
  {
    "url": "guides/understanding-kano.html",
    "revision": "7f3ba5db4d57e5276488ab34c54d1017"
  },
  {
    "url": "index.html",
    "revision": "19a611fb6bb9e00bdb58fdf7f814729a"
  },
  {
    "url": "reference/api.html",
    "revision": "aa9d075e4c221f7e673cc244b4e7ebe2"
  },
  {
    "url": "reference/configuration.html",
    "revision": "42b85cc56435c504aae956a87ebd4470"
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
