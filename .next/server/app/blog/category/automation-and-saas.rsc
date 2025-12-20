1:"$Sreact.fragment"
12:I[68027,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"default"]
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
        3:T7ef,*{margin:0;padding:0;box-sizing:border-box}html,body{overflow-x:hidden;overflow-y:auto;width:100%;max-width:100vw}#root,.App{width:100%;overflow-x:hidden;max-width:100vw}:root{--primary-color:#000;--primary-dark:#1a1a1a;--accent-color:#2563eb;--accent-hover:#1e40af;--text-dark:#1a1a1a;--text-light:#666;--text-white:#fff;--bg-dark:#000;--bg-dark-secondary:#0a0a0a;--bg-light:#f5f5f5;--bg-white:#fff;--border-color:#e5e5e5}html{scroll-behavior:smooth;overflow-x:hidden;width:100%;max-width:100vw;scroll-padding-top:80px}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--text-dark);line-height:1.6;background:var(--bg-white);overflow-x:hidden;position:relative;width:100%;max-width:100vw}.container{max-width:1400px;margin:0 auto;padding:0 40px;position:relative;z-index:1;width:100%;box-sizing:border-box}@media (max-width:768px){.container{padding:0 20px}}.navbar{position:fixed;top:0;left:0;right:0;width:100%;max-width:100vw;background:#ffffffd9;backdrop-filter:blur(30px) saturate(180%);-webkit-backdrop-filter:blur(30px) saturate(180%);z-index:1000;transition:all .4s cubic-bezier(.4,0,.2,1);box-shadow:0 1px 3px #0000000d;border-bottom:1px solid rgba(0,0,0,.06)}.hero{position:relative;min-height:100vh;display:flex;align-items:center;padding:120px 0 80px;overflow:hidden}.hero-content{position:relative;z-index:2}.hero-title{font-size:clamp(2.5rem,5vw,4.5rem);font-weight:800;line-height:1.1;margin-bottom:1.5rem;color:var(--text-dark)}.hero-subtitle{font-size:clamp(1rem,2vw,1.25rem);color:var(--text-light);line-height:1.8;margin-bottom:2rem}.btn{display:inline-flex;align-items:center;padding:16px 40px;min-height:48px;font-size:1rem;font-weight:600;text-decoration:none;border-radius:4px;transition:all .4s cubic-bezier(.4,0,.2,1);cursor:pointer;border:none}.btn-white{background-color:#fff;color:var(--text-dark);border:1px solid rgba(255,255,255,.3)}0:{"P":null,"b":"tg5bqu-c73LJJ_98iZ7SJ","c":["","blog","category","automation-and-saas"],"q":"","i":false,"f":[[["",{"children":["blog",{"children":["category",{"children":[["slug","automation-and-saas","d"],{"children":["__PAGE__",{}]}]}]}]},"$undefined","$undefined",true],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/f5334eba2bf94ce2.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/163f657a16afbe5e.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/aa9509b769e08ea4.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/d738ad2970c413d7.js","async":true,"nonce":"$undefined"}],["$","script","script-2",{"src":"/_next/static/chunks/e3cd90f8f0ef6591.js","async":true,"nonce":"$undefined"}],["$","script","script-3",{"src":"/_next/static/chunks/ea9b783e323d6cb9.js","async":true,"nonce":"$undefined"}],["$","script","script-4",{"src":"/_next/static/chunks/b92e25d5c087748f.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"en","suppressHydrationWarning":true,"children":[["$","head",null,{"children":[["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$2"}}],["$","style",null,{"dangerouslySetInnerHTML":{"__html":"$3"}}],"$L4","$L5","$L6","$L7","$L8","$L9","$La","$Lb"]}],"$Lc"]}]]}],{"children":["$Ld",{"children":["$Le",{"children":["$Lf",{"children":["$L10",{},null,false,false]},null,false,false]},null,false,false]},null,false,false]},null,false,false],"$L11",false]],"m":"$undefined","G":["$12",[]],"S":true}
13:I[85526,["/_next/static/chunks/aa9509b769e08ea4.js","/_next/static/chunks/d738ad2970c413d7.js","/_next/static/chunks/e3cd90f8f0ef6591.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js"],"default"]
14:I[16749,["/_next/static/chunks/aa9509b769e08ea4.js","/_next/static/chunks/d738ad2970c413d7.js","/_next/static/chunks/e3cd90f8f0ef6591.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js"],"default"]
15:I[88497,["/_next/static/chunks/aa9509b769e08ea4.js","/_next/static/chunks/d738ad2970c413d7.js","/_next/static/chunks/e3cd90f8f0ef6591.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js"],"default"]
16:I[78875,["/_next/static/chunks/aa9509b769e08ea4.js","/_next/static/chunks/d738ad2970c413d7.js","/_next/static/chunks/e3cd90f8f0ef6591.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js"],"default"]
17:I[96681,["/_next/static/chunks/aa9509b769e08ea4.js","/_next/static/chunks/d738ad2970c413d7.js","/_next/static/chunks/e3cd90f8f0ef6591.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js"],"default"]
18:I[39756,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"default"]
19:I[37457,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"default"]
1a:I[12604,["/_next/static/chunks/aa9509b769e08ea4.js","/_next/static/chunks/d738ad2970c413d7.js","/_next/static/chunks/e3cd90f8f0ef6591.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js","/_next/static/chunks/2273281691a5bf6b.js"],"default"]
1c:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"OutletBoundary"]
1d:"$Sreact.suspense"
1f:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"ViewportBoundary"]
21:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"MetadataBoundary"]
:HL["/logo.webp","image",{"type":"image/webp","fetchPriority":"high"}]
:HL["/_next/static/chunks/2d745c736d77b66b.css","style"]
4:["$","link",null,{"rel":"preconnect","href":"https://www.googletagmanager.com","crossOrigin":"anonymous"}]
5:["$","link",null,{"rel":"preconnect","href":"https://www.google-analytics.com","crossOrigin":"anonymous"}]
6:["$","link",null,{"rel":"dns-prefetch","href":"https://www.googletagmanager.com"}]
7:["$","link",null,{"rel":"dns-prefetch","href":"https://www.google-analytics.com"}]
8:["$","link",null,{"rel":"preload","href":"/logo.webp","as":"image","type":"image/webp","fetchPriority":"high"}]
9:["$","$L13",null,{}]
a:["$","$L14",null,{}]
b:["$","$L15",null,{}]
c:["$","body",null,{"suppressHydrationWarning":true,"children":[["$","$L16",null,{}],["$","$L17",null,{"children":["$","$L18",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L19",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","$L1a",null,{}],[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/2d745c736d77b66b.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]]}]
d:["$","$1","c",{"children":[null,["$","$L18",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L19",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
e:["$","$1","c",{"children":[null,["$","$L18",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L19",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
f:["$","$1","c",{"children":[null,["$","$L18",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L19",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
10:["$","$1","c",{"children":["$L1b",[["$","script","script-0",{"src":"/_next/static/chunks/b514352f26b16623.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/4e4242d13b5863a5.js","async":true,"nonce":"$undefined"}]],["$","$L1c",null,{"children":["$","$1d",null,{"name":"Next.MetadataOutlet","children":"$@1e"}]}]]}]
11:["$","$1","h",{"children":[null,["$","$L1f",null,{"children":"$@20"}],["$","div",null,{"hidden":true,"children":["$","$L21",null,{"children":["$","$1d",null,{"name":"Next.Metadata","children":"$@22"}]}]}],null]}]
23:I[8560,["/_next/static/chunks/aa9509b769e08ea4.js","/_next/static/chunks/d738ad2970c413d7.js","/_next/static/chunks/e3cd90f8f0ef6591.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js","/_next/static/chunks/b514352f26b16623.js","/_next/static/chunks/4e4242d13b5863a5.js"],"default"]
1b:["$","$1d",null,{"fallback":["$","div",null,{"style":{"padding":"2rem","textAlign":"center"},"children":"Loading blog posts..."}],"children":["$","$L23",null,{"initialCategory":"Automation & SaaS"}]}]
20:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"}]]
22:[["$","title","0",{"children":"Automation & SaaS Blog Posts - Team Nirosha | Digital Marketing Insights"}],["$","meta","1",{"name":"description","content":"Explore our Automation & SaaS blog posts. Expert insights, tips, and strategies for automation & saas to help grow your digital presence."}],["$","meta","2",{"name":"author","content":"Team Nirosha"}],["$","meta","3",{"name":"keywords","content":"automation & saas,blog,digital marketing,SEO,web development"}],["$","meta","4",{"name":"robots","content":"index, follow"}],["$","meta","5",{"name":"googlebot","content":"index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"}],["$","link","6",{"rel":"canonical","href":"https://nirosha.org/blog/category/automation-and-saas"}],["$","meta","7",{"property":"og:title","content":"Automation & SaaS Blog Posts - Team Nirosha"}],["$","meta","8",{"property":"og:description","content":"Expert insights and strategies for automation & saas."}],["$","meta","9",{"property":"og:url","content":"https://nirosha.org/blog/category/automation-and-saas"}],["$","meta","10",{"property":"og:site_name","content":"Team Nirosha"}],["$","meta","11",{"property":"og:locale","content":"en_US"}],["$","meta","12",{"property":"og:image","content":"https://nirosha.org/logo.png"}],["$","meta","13",{"property":"og:image:width","content":"600"}],["$","meta","14",{"property":"og:image:height","content":"60"}],["$","meta","15",{"property":"og:image:alt","content":"Automation & SaaS Blog Posts"}],["$","meta","16",{"property":"og:type","content":"website"}],["$","meta","17",{"name":"twitter:card","content":"summary"}],["$","meta","18",{"name":"twitter:site","content":"@niroshaorg"}],["$","meta","19",{"name":"twitter:creator","content":"@niroshaorg"}],["$","meta","20",{"name":"twitter:title","content":"Automation & SaaS Blog Posts - Team Nirosha"}],["$","meta","21",{"name":"twitter:description","content":"Expert insights and strategies for automation & saas."}],["$","meta","22",{"name":"twitter:image","content":"https://nirosha.org/logo.png"}]]
1e:null
