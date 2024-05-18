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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "73e8521caec71c02611635b02e5ca828"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.bfea3617.css",
    "revision": "777c6dac1f36dd5c6ef5e70925d8c22a"
  },
  {
    "url": "assets/img/1.821bdc01.png",
    "revision": "821bdc01ad6e1d065e21a3637346b22b"
  },
  {
    "url": "assets/img/10.f362cd11.png",
    "revision": "f362cd11ebfc3fe53ccf0a7a2ce9bf61"
  },
  {
    "url": "assets/img/11.f9f075ae.png",
    "revision": "f9f075aeb51fadbef91ea45feb3db733"
  },
  {
    "url": "assets/img/12.cc421671.png",
    "revision": "cc4216712f47559dc17b0f509a65da44"
  },
  {
    "url": "assets/img/13.d4899a77.png",
    "revision": "d4899a77e1d6bbf0827dff17cdc73e43"
  },
  {
    "url": "assets/img/14.7fa41178.png",
    "revision": "7fa41178eb6a63fb890a8836078b41fe"
  },
  {
    "url": "assets/img/2.79bba3f4.png",
    "revision": "79bba3f4cdaaa037ea871e1c17b842b4"
  },
  {
    "url": "assets/img/3.dc6944a6.png",
    "revision": "dc6944a64c1ebd7f4235d00a7f10d8cf"
  },
  {
    "url": "assets/img/4.ec3dec4d.png",
    "revision": "ec3dec4d06b2796b5b8ce7e1562449d1"
  },
  {
    "url": "assets/img/5.7a8ac405.png",
    "revision": "7a8ac4052a1979aad2a18b6d542dc9e4"
  },
  {
    "url": "assets/img/6.8306d6d4.png",
    "revision": "8306d6d4253f2ad5c29ec494914fcec8"
  },
  {
    "url": "assets/img/7.7991359c.png",
    "revision": "7991359c5b7ed6889e5146b0f27b2d8d"
  },
  {
    "url": "assets/img/8.7f032e5e.png",
    "revision": "7f032e5eb4efebc4d6b1ae273846eea3"
  },
  {
    "url": "assets/img/9.3e5b0a2e.png",
    "revision": "3e5b0a2ebcb4773cef2309fd8e207804"
  },
  {
    "url": "assets/img/relational_scheme.45f8bfdd.png",
    "revision": "45f8bfdd6793223804ff8bf9533d3a8b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4c52f180.js",
    "revision": "56ed230d7c50f513a9b34e7d5dcb2854"
  },
  {
    "url": "assets/js/11.9fa77de9.js",
    "revision": "8ed8d60f0735b7e95cd45c51fde629c0"
  },
  {
    "url": "assets/js/12.6012b735.js",
    "revision": "a8fb6d2f40b84a9d20ac21224301b957"
  },
  {
    "url": "assets/js/13.2509ed86.js",
    "revision": "fcbac0131cf02d2d8520c080c7c2ef37"
  },
  {
    "url": "assets/js/14.308c0d83.js",
    "revision": "8d2f292ff9419bbd9b1d0f051eac01ff"
  },
  {
    "url": "assets/js/15.da474ae8.js",
    "revision": "3a9b571025fcfa25db483ebb87ac6850"
  },
  {
    "url": "assets/js/16.8a8faa92.js",
    "revision": "0810394808c52e50565293c6eebdeaeb"
  },
  {
    "url": "assets/js/17.58cfd6d4.js",
    "revision": "d67d6576160c237ed6a98d87a474f786"
  },
  {
    "url": "assets/js/18.93225ad5.js",
    "revision": "964cf1beb45e0e4c315adf3e62d2d371"
  },
  {
    "url": "assets/js/19.73fe5b74.js",
    "revision": "7ea329723014df3d6700587d86ea20a2"
  },
  {
    "url": "assets/js/2.e5599348.js",
    "revision": "cd5c0489689d700a995bafd8e0794e6d"
  },
  {
    "url": "assets/js/20.bfd1ba8c.js",
    "revision": "05203d208ef59c1f6b1ab5e117bbcbdb"
  },
  {
    "url": "assets/js/21.d15c48fe.js",
    "revision": "05a1301fa5e24629e3bae64dfc057ce3"
  },
  {
    "url": "assets/js/22.fb515055.js",
    "revision": "f3cf92f7186048268ac3ad0114f4d0f4"
  },
  {
    "url": "assets/js/23.c85fc1ba.js",
    "revision": "2839afadce79553fa82e660a50aef866"
  },
  {
    "url": "assets/js/24.81457cf6.js",
    "revision": "0456e9f3b7718899ec146000f2c8701d"
  },
  {
    "url": "assets/js/26.9c7fce7a.js",
    "revision": "4c209d8d6ab931ab305fae2d8e658562"
  },
  {
    "url": "assets/js/3.da0e1d4b.js",
    "revision": "d1e06d71ab08d415b64c6b09e492952c"
  },
  {
    "url": "assets/js/4.b13261c3.js",
    "revision": "2e0496997919a01605961ade3e060446"
  },
  {
    "url": "assets/js/5.874d4b30.js",
    "revision": "97911f8df53a58d68dea4601c03a01ed"
  },
  {
    "url": "assets/js/6.6a39f0be.js",
    "revision": "47a30ba359e4ac45b8aaf1da8fe81704"
  },
  {
    "url": "assets/js/7.16cec092.js",
    "revision": "d5801ea755d2bdc12b65db133499ee8f"
  },
  {
    "url": "assets/js/8.4e8c1ce4.js",
    "revision": "443b3e0ad0b51bfe7d09251218b5cad2"
  },
  {
    "url": "assets/js/9.a3514000.js",
    "revision": "2eee7d2a5e208411207ac6f5d0eca2a9"
  },
  {
    "url": "assets/js/app.86e64c6a.js",
    "revision": "1632b852d298e36b1c107accee4f3652"
  },
  {
    "url": "conclusion/index.html",
    "revision": "d3e8c4f9374f43b1e296ea1e73e13f62"
  },
  {
    "url": "design/index.html",
    "revision": "4eab850c0a649aa8cf8aa9c6dc9e70a4"
  },
  {
    "url": "index.html",
    "revision": "bb616433c36eedce9a7c23357a43ef79"
  },
  {
    "url": "intro/index.html",
    "revision": "2d5104918d0db9246f53638e92c0a3a2"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "ad6fc395a5f88a302d29a5714041c9bd"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "895705a1d2bc89ca4cc50cd33613abcf"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "b5f5ef5580f3c86b66880db55ddbc246"
  },
  {
    "url": "software/index.html",
    "revision": "4bbbde4ab680e865aeefe634e642dcf7"
  },
  {
    "url": "test/index.html",
    "revision": "8ed513b4b9ed97bb526e43e689dd6a6c"
  },
  {
    "url": "use cases/index.html",
    "revision": "f15aaed6b2c1727a08526ecfd158ebec"
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
