1:"$Sreact.fragment"
f:I[68027,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"default"]
:HL["/_next/static/chunks/f5334eba2bf94ce2.css","style"]
:HL["/_next/static/chunks/163f657a16afbe5e.css","style"]
2:T78a,
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
        3:T7ef,*{margin:0;padding:0;box-sizing:border-box}html,body{overflow-x:hidden;overflow-y:auto;width:100%;max-width:100vw}#root,.App{width:100%;overflow-x:hidden;max-width:100vw}:root{--primary-color:#000;--primary-dark:#1a1a1a;--accent-color:#2563eb;--accent-hover:#1e40af;--text-dark:#1a1a1a;--text-light:#666;--text-white:#fff;--bg-dark:#000;--bg-dark-secondary:#0a0a0a;--bg-light:#f5f5f5;--bg-white:#fff;--border-color:#e5e5e5}html{scroll-behavior:smooth;overflow-x:hidden;width:100%;max-width:100vw;scroll-padding-top:80px}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--text-dark);line-height:1.6;background:var(--bg-white);overflow-x:hidden;position:relative;width:100%;max-width:100vw}.container{max-width:1400px;margin:0 auto;padding:0 40px;position:relative;z-index:1;width:100%;box-sizing:border-box}@media (max-width:768px){.container{padding:0 20px}}.navbar{position:fixed;top:0;left:0;right:0;width:100%;max-width:100vw;background:#ffffffd9;backdrop-filter:blur(30px) saturate(180%);-webkit-backdrop-filter:blur(30px) saturate(180%);z-index:1000;transition:all .4s cubic-bezier(.4,0,.2,1);box-shadow:0 1px 3px #0000000d;border-bottom:1px solid rgba(0,0,0,.06)}.hero{position:relative;min-height:100vh;display:flex;align-items:center;padding:120px 0 80px;overflow:hidden}.hero-content{position:relative;z-index:2}.hero-title{font-size:clamp(2.5rem,5vw,4.5rem);font-weight:800;line-height:1.1;margin-bottom:1.5rem;color:var(--text-dark)}.hero-subtitle{font-size:clamp(1rem,2vw,1.25rem);color:var(--text-light);line-height:1.8;margin-bottom:2rem}.btn{display:inline-flex;align-items:center;padding:16px 40px;min-height:48px;font-size:1rem;font-weight:600;text-decoration:none;border-radius:4px;transition:all .4s cubic-bezier(.4,0,.2,1);cursor:pointer;border:none}.btn-white{background-color:#fff;color:var(--text-dark);border:1px solid rgba(255,255,255,.3)}0:{"P":null,"b":"tg5bqu-c73LJJ_98iZ7SJ","c":["",""],"q":"","i":false,"f":[[["",{"children":["__PAGE__",{}]},"$undefined","$undefined",true],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/f5334eba2bf94ce2.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/163f657a16afbe5e.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/aa9509b769e08ea4.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/d738ad2970c413d7.js","async":true,"nonce":"$undefined"}],["$","script","script-2",{"src":"/_next/static/chunks/e3cd90f8f0ef6591.js","async":true,"nonce":"$undefined"}],["$","script","script-3",{"src":"/_next/static/chunks/ea9b783e323d6cb9.js","async":true,"nonce":"$undefined"}],["$","script","script-4",{"src":"/_next/static/chunks/b92e25d5c087748f.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"en","suppressHydrationWarning":true,"children":[["$","head",null,{"children":[["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$2"}}],["$","style",null,{"dangerouslySetInnerHTML":{"__html":"$3"}}],"$L4","$L5","$L6","$L7","$L8","$L9","$La","$Lb"]}],"$Lc"]}]]}],{"children":["$Ld",{},null,false,false]},null,false,false],"$Le",false]],"m":"$undefined","G":["$f",[]],"S":true}
10:I[85526,["/_next/static/chunks/aa9509b769e08ea4.js","/_next/static/chunks/d738ad2970c413d7.js","/_next/static/chunks/e3cd90f8f0ef6591.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js"],"default"]
11:I[16749,["/_next/static/chunks/aa9509b769e08ea4.js","/_next/static/chunks/d738ad2970c413d7.js","/_next/static/chunks/e3cd90f8f0ef6591.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js"],"default"]
12:I[88497,["/_next/static/chunks/aa9509b769e08ea4.js","/_next/static/chunks/d738ad2970c413d7.js","/_next/static/chunks/e3cd90f8f0ef6591.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js"],"default"]
13:I[78875,["/_next/static/chunks/aa9509b769e08ea4.js","/_next/static/chunks/d738ad2970c413d7.js","/_next/static/chunks/e3cd90f8f0ef6591.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js"],"default"]
14:I[96681,["/_next/static/chunks/aa9509b769e08ea4.js","/_next/static/chunks/d738ad2970c413d7.js","/_next/static/chunks/e3cd90f8f0ef6591.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js"],"default"]
15:I[39756,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"default"]
16:I[37457,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"default"]
17:I[12604,["/_next/static/chunks/aa9509b769e08ea4.js","/_next/static/chunks/d738ad2970c413d7.js","/_next/static/chunks/e3cd90f8f0ef6591.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js","/_next/static/chunks/2273281691a5bf6b.js"],"default"]
18:I[6476,["/_next/static/chunks/aa9509b769e08ea4.js","/_next/static/chunks/d738ad2970c413d7.js","/_next/static/chunks/e3cd90f8f0ef6591.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js","/_next/static/chunks/31b327ca1fe6318e.js"],"default"]
19:I[28517,["/_next/static/chunks/aa9509b769e08ea4.js","/_next/static/chunks/d738ad2970c413d7.js","/_next/static/chunks/e3cd90f8f0ef6591.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js","/_next/static/chunks/31b327ca1fe6318e.js"],"default"]
1a:I[28991,["/_next/static/chunks/aa9509b769e08ea4.js","/_next/static/chunks/d738ad2970c413d7.js","/_next/static/chunks/e3cd90f8f0ef6591.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js","/_next/static/chunks/31b327ca1fe6318e.js"],"default"]
1b:I[28771,["/_next/static/chunks/aa9509b769e08ea4.js","/_next/static/chunks/d738ad2970c413d7.js","/_next/static/chunks/e3cd90f8f0ef6591.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js","/_next/static/chunks/31b327ca1fe6318e.js"],"default"]
1c:"$Sreact.suspense"
1d:I[52157,["/_next/static/chunks/aa9509b769e08ea4.js","/_next/static/chunks/d738ad2970c413d7.js","/_next/static/chunks/e3cd90f8f0ef6591.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js","/_next/static/chunks/31b327ca1fe6318e.js"],"PreloadChunks"]
24:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"OutletBoundary"]
26:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"ViewportBoundary"]
28:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"MetadataBoundary"]
:HL["/logo.webp","image",{"type":"image/webp","fetchPriority":"high"}]
:HL["/_next/static/chunks/2d745c736d77b66b.css","style"]
4:["$","link",null,{"rel":"preconnect","href":"https://www.googletagmanager.com","crossOrigin":"anonymous"}]
5:["$","link",null,{"rel":"preconnect","href":"https://www.google-analytics.com","crossOrigin":"anonymous"}]
6:["$","link",null,{"rel":"dns-prefetch","href":"https://www.googletagmanager.com"}]
7:["$","link",null,{"rel":"dns-prefetch","href":"https://www.google-analytics.com"}]
8:["$","link",null,{"rel":"preload","href":"/logo.webp","as":"image","type":"image/webp","fetchPriority":"high"}]
9:["$","$L10",null,{}]
a:["$","$L11",null,{}]
b:["$","$L12",null,{}]
c:["$","body",null,{"suppressHydrationWarning":true,"children":[["$","$L13",null,{}],["$","$L14",null,{"children":["$","$L15",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L16",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","$L17",null,{}],[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/2d745c736d77b66b.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]]}]
d:["$","$1","c",{"children":[[["$","$L18",null,{}],["$","$L19",null,{}],["$","$L1a",null,{}],["$","$L1b",null,{}],["$","$1c",null,{"fallback":["$","div",null,{"style":{"minHeight":"400px"}}],"children":["$","$1c",null,{"fallback":["$","div",null,{"style":{"minHeight":"400px"}}],"children":[["$","$L1d",null,{"moduleIds":["8538640931459682100"]}],"$L1e"]}]}],["$","$1c",null,{"fallback":["$","div",null,{"style":{"minHeight":"400px"}}],"children":["$","$1c",null,{"fallback":["$","div",null,{"style":{"minHeight":"400px"}}],"children":[["$","$L1d",null,{"moduleIds":["14849234816476480697"]}],"$L1f"]}]}],["$","$1c",null,{"fallback":["$","div",null,{"style":{"minHeight":"400px"}}],"children":["$","$1c",null,{"fallback":["$","div",null,{"style":{"minHeight":"400px"}}],"children":[["$","$L1d",null,{"moduleIds":["11145494327489474355"]}],"$L20"]}]}],["$","$1c",null,{"fallback":["$","div",null,{"style":{"minHeight":"400px"}}],"children":["$","$1c",null,{"fallback":["$","div",null,{"style":{"minHeight":"400px"}}],"children":[["$","$L1d",null,{"moduleIds":["9609819398823657471"]}],"$L21"]}]}],["$","$1c",null,{"fallback":["$","div",null,{"style":{"minHeight":"400px"}}],"children":["$","$1c",null,{"fallback":["$","div",null,{"style":{"minHeight":"400px"}}],"children":[["$","$L1d",null,{"moduleIds":["7887042832457914578"]}],"$L22"]}]}],["$","$1c",null,{"fallback":["$","div",null,{"style":{"minHeight":"400px"}}],"children":["$","$1c",null,{"fallback":["$","div",null,{"style":{"minHeight":"400px"}}],"children":[["$","$L1d",null,{"moduleIds":["3364612875133014169"]}],"$L23"]}]}]],[["$","script","script-0",{"src":"/_next/static/chunks/31b327ca1fe6318e.js","async":true,"nonce":"$undefined"}]],["$","$L24",null,{"children":["$","$1c",null,{"name":"Next.MetadataOutlet","children":"$@25"}]}]]}]
e:["$","$1","h",{"children":[null,["$","$L26",null,{"children":"$@27"}],["$","div",null,{"hidden":true,"children":["$","$L28",null,{"children":["$","$1c",null,{"name":"Next.Metadata","children":"$@29"}]}]}],null]}]
2a:I[44835,["/_next/static/chunks/aa9509b769e08ea4.js","/_next/static/chunks/d738ad2970c413d7.js","/_next/static/chunks/e3cd90f8f0ef6591.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js","/_next/static/chunks/31b327ca1fe6318e.js"],"default"]
2b:I[93457,["/_next/static/chunks/aa9509b769e08ea4.js","/_next/static/chunks/d738ad2970c413d7.js","/_next/static/chunks/e3cd90f8f0ef6591.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js","/_next/static/chunks/31b327ca1fe6318e.js"],"default"]
2c:I[20378,["/_next/static/chunks/aa9509b769e08ea4.js","/_next/static/chunks/d738ad2970c413d7.js","/_next/static/chunks/e3cd90f8f0ef6591.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js","/_next/static/chunks/31b327ca1fe6318e.js"],"default"]
2d:I[42549,["/_next/static/chunks/aa9509b769e08ea4.js","/_next/static/chunks/d738ad2970c413d7.js","/_next/static/chunks/e3cd90f8f0ef6591.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js","/_next/static/chunks/31b327ca1fe6318e.js"],"default"]
2e:I[88275,["/_next/static/chunks/aa9509b769e08ea4.js","/_next/static/chunks/d738ad2970c413d7.js","/_next/static/chunks/e3cd90f8f0ef6591.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js","/_next/static/chunks/31b327ca1fe6318e.js"],"default"]
2f:I[52186,["/_next/static/chunks/aa9509b769e08ea4.js","/_next/static/chunks/d738ad2970c413d7.js","/_next/static/chunks/e3cd90f8f0ef6591.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js","/_next/static/chunks/31b327ca1fe6318e.js"],"default"]
1e:["$","$L2a",null,{}]
1f:["$","$L2b",null,{}]
20:["$","$L2c",null,{}]
21:["$","$L2d",null,{}]
22:["$","$L2e",null,{}]
23:["$","$L2f",null,{}]
27:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"}]]
29:[["$","title","0",{"children":"Web Development, SEO & Automation Agency | Team Nirosha"}],["$","meta","1",{"name":"description","content":"Team Nirosha is a trusted digital agency offering web development, SEO, automation, SaaS and IT solutions to help businesses grow securely."}],["$","meta","2",{"name":"author","content":"Team Nirosha"}],["$","meta","3",{"name":"keywords","content":"Nirosha Enterprises,Team Nirosha,web development company,digital agency,SEO services,local SEO services,website maintenance AMC,business automation,SaaS solutions,CRM automation,cloud hosting services,IT solutions provider"}],["$","meta","4",{"name":"creator","content":"Team Nirosha"}],["$","meta","5",{"name":"publisher","content":"Team Nirosha"}],["$","meta","6",{"name":"robots","content":"index, follow"}],["$","meta","7",{"name":"googlebot","content":"index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"}],["$","link","8",{"rel":"canonical","href":"https://nirosha.org"}],["$","meta","9",{"property":"og:title","content":"Web Development, SEO & Automation Agency | Team Nirosha"}],["$","meta","10",{"property":"og:description","content":"Team Nirosha is a trusted digital agency offering web development, SEO, automation, SaaS and IT solutions to help businesses grow securely."}],["$","meta","11",{"property":"og:url","content":"https://nirosha.org"}],["$","meta","12",{"property":"og:site_name","content":"Team Nirosha"}],["$","meta","13",{"property":"og:locale","content":"en_US"}],["$","meta","14",{"property":"og:image","content":"https://nirosha.org/logo.png"}],["$","meta","15",{"property":"og:image:width","content":"600"}],["$","meta","16",{"property":"og:image:height","content":"60"}],["$","meta","17",{"property":"og:image:alt","content":"Team Nirosha Logo"}],["$","meta","18",{"property":"og:type","content":"website"}],["$","meta","19",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","20",{"name":"twitter:site","content":"@niroshaorg"}],["$","meta","21",{"name":"twitter:creator","content":"@niroshaorg"}],["$","meta","22",{"name":"twitter:title","content":"Web Development, SEO & Automation Agency | Team Nirosha"}],["$","meta","23",{"name":"twitter:description","content":"Team Nirosha is a trusted digital agency offering web development, SEO, automation, SaaS and IT solutions."}],["$","meta","24",{"name":"twitter:image","content":"https://nirosha.org/logo.png"}]]
25:null
