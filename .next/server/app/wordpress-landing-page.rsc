1:"$Sreact.fragment"
2:I[79520,["/_next/static/chunks/87f96b3d474c7c83.js","/_next/static/chunks/d00bf5dffe6d4034.js","/_next/static/chunks/1eaa683564898b5d.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js"],""]
10:I[68027,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"default"]
:HL["/_next/static/chunks/0a9f946d86b709c5.css","style"]
:HL["/_next/static/chunks/163f657a16afbe5e.css","style"]
3:T78a,
          (function() {
            // Function to convert CSS link to async loading
            function deferCSS(link) {
              if (link.href && !link.hasAttribute('data-deferred') && link.rel === 'stylesheet') {
                link.setAttribute('data-deferred', 'true');
                // Use media="print" trick to load asynchronously
                link.media = 'print';
                link.onload = function() {
                  this.media = 'all';
                };
                // Fallback for browsers that don't support onload on link
                if (!link.onload) {
                  setTimeout(function() {
                    link.media = 'all';
                  }, 0);
                }
              }
            }
            
            // Convert existing CSS links immediately
            const existingLinks = document.querySelectorAll('link[rel="stylesheet"]');
            existingLinks.forEach(deferCSS);
            
            // Watch for new CSS links added by Next.js
            const observer = new MutationObserver(function(mutations) {
              mutations.forEach(function(mutation) {
                mutation.addedNodes.forEach(function(node) {
                  if (node.nodeName === 'LINK' && node.rel === 'stylesheet') {
                    deferCSS(node);
                  }
                });
              });
            });
            
            // Start observing the document head
            if (document.head) {
              observer.observe(document.head, {
                childList: true,
                subtree: true
              });
            }
            
            // Also observe document for early CSS injection
            if (document.documentElement) {
              observer.observe(document.documentElement, {
                childList: true,
                subtree: true
              });
            }
          })();
        4:T7ef,*{margin:0;padding:0;box-sizing:border-box}html,body{overflow-x:hidden;overflow-y:auto;width:100%;max-width:100vw}#root,.App{width:100%;overflow-x:hidden;max-width:100vw}:root{--primary-color:#000;--primary-dark:#1a1a1a;--accent-color:#2563eb;--accent-hover:#1e40af;--text-dark:#1a1a1a;--text-light:#666;--text-white:#fff;--bg-dark:#000;--bg-dark-secondary:#0a0a0a;--bg-light:#f5f5f5;--bg-white:#fff;--border-color:#e5e5e5}html{scroll-behavior:smooth;overflow-x:hidden;width:100%;max-width:100vw;scroll-padding-top:80px}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--text-dark);line-height:1.6;background:var(--bg-white);overflow-x:hidden;position:relative;width:100%;max-width:100vw}.container{max-width:1400px;margin:0 auto;padding:0 40px;position:relative;z-index:1;width:100%;box-sizing:border-box}@media (max-width:768px){.container{padding:0 20px}}.navbar{position:fixed;top:0;left:0;right:0;width:100%;max-width:100vw;background:#ffffffd9;backdrop-filter:blur(30px) saturate(180%);-webkit-backdrop-filter:blur(30px) saturate(180%);z-index:1000;transition:all .4s cubic-bezier(.4,0,.2,1);box-shadow:0 1px 3px #0000000d;border-bottom:1px solid rgba(0,0,0,.06)}.hero{position:relative;min-height:100vh;display:flex;align-items:center;padding:120px 0 80px;overflow:hidden}.hero-content{position:relative;z-index:2}.hero-title{font-size:clamp(2.5rem,5vw,4.5rem);font-weight:800;line-height:1.1;margin-bottom:1.5rem;color:var(--text-dark)}.hero-subtitle{font-size:clamp(1rem,2vw,1.25rem);color:var(--text-light);line-height:1.8;margin-bottom:2rem}.btn{display:inline-flex;align-items:center;padding:16px 40px;min-height:48px;font-size:1rem;font-weight:600;text-decoration:none;border-radius:4px;transition:all .4s cubic-bezier(.4,0,.2,1);cursor:pointer;border:none}.btn-white{background-color:#fff;color:var(--text-dark);border:1px solid rgba(255,255,255,.3)}0:{"P":null,"b":"Ysmwuav82FYkiAemKPmM9","c":["","wordpress-landing-page"],"q":"","i":false,"f":[[["",{"children":["wordpress-landing-page",{"children":["__PAGE__",{}]}]},"$undefined","$undefined",true],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0a9f946d86b709c5.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/163f657a16afbe5e.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/87f96b3d474c7c83.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/d00bf5dffe6d4034.js","async":true,"nonce":"$undefined"}],["$","script","script-2",{"src":"/_next/static/chunks/1eaa683564898b5d.js","async":true,"nonce":"$undefined"}],["$","script","script-3",{"src":"/_next/static/chunks/ea9b783e323d6cb9.js","async":true,"nonce":"$undefined"}],["$","script","script-4",{"src":"/_next/static/chunks/b92e25d5c087748f.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"en","suppressHydrationWarning":true,"children":[["$","head",null,{"children":[[["$","$L2",null,{"src":"https://www.googletagmanager.com/gtag/js?id=G-F4SER380S1","strategy":"afterInteractive"}],["$","$L2",null,{"id":"google-analytics","strategy":"afterInteractive","children":"\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n                gtag('config', 'G-F4SER380S1');\n              "}]],["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$3"}}],["$","style",null,{"dangerouslySetInnerHTML":{"__html":"$4"}}],"$L5","$L6","$L7","$L8","$L9","$La","$Lb"]}],"$Lc"]}]]}],{"children":["$Ld",{"children":["$Le",{},null,false,false]},null,false,false]},null,false,false],"$Lf",false]],"m":"$undefined","G":["$10",[]],"S":true}
11:I[85526,["/_next/static/chunks/87f96b3d474c7c83.js","/_next/static/chunks/d00bf5dffe6d4034.js","/_next/static/chunks/1eaa683564898b5d.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js"],"default"]
12:I[16749,["/_next/static/chunks/87f96b3d474c7c83.js","/_next/static/chunks/d00bf5dffe6d4034.js","/_next/static/chunks/1eaa683564898b5d.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js"],"default"]
13:I[88497,["/_next/static/chunks/87f96b3d474c7c83.js","/_next/static/chunks/d00bf5dffe6d4034.js","/_next/static/chunks/1eaa683564898b5d.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js"],"default"]
14:I[91782,["/_next/static/chunks/87f96b3d474c7c83.js","/_next/static/chunks/d00bf5dffe6d4034.js","/_next/static/chunks/1eaa683564898b5d.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js"],"default"]
15:I[96681,["/_next/static/chunks/87f96b3d474c7c83.js","/_next/static/chunks/d00bf5dffe6d4034.js","/_next/static/chunks/1eaa683564898b5d.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js"],"default"]
16:I[39756,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"default"]
17:I[37457,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"default"]
18:I[12604,["/_next/static/chunks/87f96b3d474c7c83.js","/_next/static/chunks/d00bf5dffe6d4034.js","/_next/static/chunks/1eaa683564898b5d.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js","/_next/static/chunks/2273281691a5bf6b.js"],"default"]
19:I[71967,["/_next/static/chunks/87f96b3d474c7c83.js","/_next/static/chunks/d00bf5dffe6d4034.js","/_next/static/chunks/1eaa683564898b5d.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js","/_next/static/chunks/25ce747f8458a078.js"],"default"]
1a:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"OutletBoundary"]
1b:"$Sreact.suspense"
1d:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"ViewportBoundary"]
1f:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"MetadataBoundary"]
:HL["/logo.webp","image",{"type":"image/webp","fetchPriority":"high"}]
:HL["/_next/static/chunks/2d745c736d77b66b.css","style"]
5:[["$","link",null,{"rel":"preconnect","href":"https://www.googletagmanager.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://www.google-analytics.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"dns-prefetch","href":"https://www.googletagmanager.com"}],["$","link",null,{"rel":"dns-prefetch","href":"https://www.google-analytics.com"}]]
6:[["$","link",null,{"rel":"preconnect","href":"https://www.clarity.ms","crossOrigin":"anonymous"}],["$","link",null,{"rel":"dns-prefetch","href":"https://www.clarity.ms"}]]
7:["$","link",null,{"rel":"preload","href":"/logo.webp","as":"image","type":"image/webp","fetchPriority":"high"}]
8:["$","$L2",null,{"id":"microsoft-clarity","strategy":"afterInteractive","dangerouslySetInnerHTML":{"__html":"\n                (function(c,l,a,r,i,t,y){\n                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};\n                  t=l.createElement(r);t.async=1;t.src=\"https://www.clarity.ms/tag/\"+i;\n                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);\n                })(window, document, \"clarity\", \"script\", \"ut70ln5wh3\");\n              "}}]
9:["$","$L11",null,{}]
a:["$","$L12",null,{}]
b:["$","$L13",null,{}]
c:["$","body",null,{"suppressHydrationWarning":true,"children":[false,["$","$L14",null,{"children":["$","$L15",null,{"children":["$","$L16",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L17",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","$L18",null,{}],[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/2d745c736d77b66b.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]}]]}]
d:["$","$1","c",{"children":[null,["$","$L16",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L17",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
e:["$","$1","c",{"children":[["$","$L19",null,{}],[["$","script","script-0",{"src":"/_next/static/chunks/25ce747f8458a078.js","async":true,"nonce":"$undefined"}]],["$","$L1a",null,{"children":["$","$1b",null,{"name":"Next.MetadataOutlet","children":"$@1c"}]}]]}]
f:["$","$1","h",{"children":[null,["$","$L1d",null,{"children":"$@1e"}],["$","div",null,{"hidden":true,"children":["$","$L1f",null,{"children":["$","$1b",null,{"name":"Next.Metadata","children":"$@20"}]}]}],null]}]
1e:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"}]]
21:I[27201,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"IconMark"]
20:[["$","title","0",{"children":"Professional WordPress Landing Page Design | Starting ₹6,999 | Team Nirosha"}],["$","meta","1",{"name":"description","content":"Get a high-converting WordPress landing page designed in 48 hours! Starting at just ₹6,999. Timely delivery guaranteed or we cut the project fee. High performance, CRM integration, and mobile-responsive design included."}],["$","meta","2",{"name":"author","content":"Team Nirosha"}],["$","meta","3",{"name":"keywords","content":"WordPress landing page,WordPress landing page design,WordPress landing page cost,affordable WordPress landing page,WordPress landing page development,conversion optimized landing page,WordPress lead magnet,WordPress landing page price"}],["$","meta","4",{"name":"creator","content":"Team Nirosha"}],["$","meta","5",{"name":"publisher","content":"Team Nirosha"}],["$","meta","6",{"name":"robots","content":"index, follow"}],["$","meta","7",{"name":"googlebot","content":"index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"}],["$","link","8",{"rel":"canonical","href":"https://nirosha.org/wordpress-landing-page"}],["$","meta","9",{"property":"og:title","content":"Professional WordPress Landing Page Design | Starting ₹6,999 | Team Nirosha"}],["$","meta","10",{"property":"og:description","content":"Get a high-converting WordPress landing page designed in 48 hours! Starting at just ₹6,999. Timely delivery guaranteed or we cut the project fee."}],["$","meta","11",{"property":"og:url","content":"https://nirosha.org/wordpress-landing-page"}],["$","meta","12",{"property":"og:site_name","content":"Team Nirosha"}],["$","meta","13",{"property":"og:locale","content":"en_US"}],["$","meta","14",{"property":"og:image","content":"https://nirosha.org/logo.png"}],["$","meta","15",{"property":"og:image:width","content":"600"}],["$","meta","16",{"property":"og:image:height","content":"60"}],["$","meta","17",{"property":"og:image:alt","content":"WordPress Landing Page Design Services"}],["$","meta","18",{"property":"og:type","content":"website"}],["$","meta","19",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","20",{"name":"twitter:site","content":"@niroshaorg"}],["$","meta","21",{"name":"twitter:creator","content":"@niroshaorg"}],["$","meta","22",{"name":"twitter:title","content":"Professional WordPress Landing Page Design | Starting ₹6,999"}],["$","meta","23",{"name":"twitter:description","content":"High-converting WordPress landing pages with guaranteed timely delivery. CRM integration included."}],["$","meta","24",{"name":"twitter:image","content":"https://nirosha.org/logo.png"}],["$","link","25",{"rel":"icon","href":"/logo.png"}],["$","link","26",{"rel":"apple-touch-icon","href":"/logo.png"}],["$","$L21","27",{}]]
1c:null
