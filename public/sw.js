if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>n(e,t),r={module:{uri:t},exports:c,require:o};s[t]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(i(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/959-ce9a440c30edd36d.js",revision:"ydlTSsdMRpZ73_nmTXap0"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"ydlTSsdMRpZ73_nmTXap0"},{url:"/_next/static/chunks/main-d52644f8e98a2f80.js",revision:"ydlTSsdMRpZ73_nmTXap0"},{url:"/_next/static/chunks/pages/_app-34ae60f174c01278.js",revision:"ydlTSsdMRpZ73_nmTXap0"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"ydlTSsdMRpZ73_nmTXap0"},{url:"/_next/static/chunks/pages/index-4de0dd1558675941.js",revision:"ydlTSsdMRpZ73_nmTXap0"},{url:"/_next/static/chunks/pages/login-b3f54629b21a2a5e.js",revision:"ydlTSsdMRpZ73_nmTXap0"},{url:"/_next/static/chunks/pages/posts/%5Bid%5D-217e4c78c4605cb4.js",revision:"ydlTSsdMRpZ73_nmTXap0"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"ydlTSsdMRpZ73_nmTXap0"},{url:"/_next/static/chunks/webpack-b927671265afed5e.js",revision:"ydlTSsdMRpZ73_nmTXap0"},{url:"/_next/static/css/7a7394706abee014.css",revision:"ydlTSsdMRpZ73_nmTXap0"},{url:"/_next/static/ydlTSsdMRpZ73_nmTXap0/_buildManifest.js",revision:"ydlTSsdMRpZ73_nmTXap0"},{url:"/_next/static/ydlTSsdMRpZ73_nmTXap0/_middlewareManifest.js",revision:"ydlTSsdMRpZ73_nmTXap0"},{url:"/_next/static/ydlTSsdMRpZ73_nmTXap0/_ssgManifest.js",revision:"ydlTSsdMRpZ73_nmTXap0"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"a3eaf71c2157dde1c9a12d3c56f6a921"},{url:"/icon-256x256.png",revision:"8257663a0087310588ccb6010a964954"},{url:"/icon-384x384.png",revision:"8425b4d32ee3110af38ba9f47f75e93b"},{url:"/icon-512x512.png",revision:"b78e0d479d4c90f19c87e708703d3cef"},{url:"/logo.png",revision:"8149466359989ab59bd2a37c1e818934"},{url:"/manifest.json",revision:"2f8aebefee91a766777c3f9ffc88c3ef"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));