1:"$Sreact.fragment"
2:I[79520,["/_next/static/chunks/87f96b3d474c7c83.js","/_next/static/chunks/d00bf5dffe6d4034.js","/_next/static/chunks/1eaa683564898b5d.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js"],""]
11:I[68027,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"default"]
:HL["/_next/static/chunks/3b0a39d6f6083176.css","style"]
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
        4:T7ef,*{margin:0;padding:0;box-sizing:border-box}html,body{overflow-x:hidden;overflow-y:auto;width:100%;max-width:100vw}#root,.App{width:100%;overflow-x:hidden;max-width:100vw}:root{--primary-color:#000;--primary-dark:#1a1a1a;--accent-color:#2563eb;--accent-hover:#1e40af;--text-dark:#1a1a1a;--text-light:#666;--text-white:#fff;--bg-dark:#000;--bg-dark-secondary:#0a0a0a;--bg-light:#f5f5f5;--bg-white:#fff;--border-color:#e5e5e5}html{scroll-behavior:smooth;overflow-x:hidden;width:100%;max-width:100vw;scroll-padding-top:80px}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--text-dark);line-height:1.6;background:var(--bg-white);overflow-x:hidden;position:relative;width:100%;max-width:100vw}.container{max-width:1400px;margin:0 auto;padding:0 40px;position:relative;z-index:1;width:100%;box-sizing:border-box}@media (max-width:768px){.container{padding:0 20px}}.navbar{position:fixed;top:0;left:0;right:0;width:100%;max-width:100vw;background:#ffffffd9;backdrop-filter:blur(30px) saturate(180%);-webkit-backdrop-filter:blur(30px) saturate(180%);z-index:1000;transition:all .4s cubic-bezier(.4,0,.2,1);box-shadow:0 1px 3px #0000000d;border-bottom:1px solid rgba(0,0,0,.06)}.hero{position:relative;min-height:100vh;display:flex;align-items:center;padding:120px 0 80px;overflow:hidden}.hero-content{position:relative;z-index:2}.hero-title{font-size:clamp(2.5rem,5vw,4.5rem);font-weight:800;line-height:1.1;margin-bottom:1.5rem;color:var(--text-dark)}.hero-subtitle{font-size:clamp(1rem,2vw,1.25rem);color:var(--text-light);line-height:1.8;margin-bottom:2rem}.btn{display:inline-flex;align-items:center;padding:16px 40px;min-height:48px;font-size:1rem;font-weight:600;text-decoration:none;border-radius:4px;transition:all .4s cubic-bezier(.4,0,.2,1);cursor:pointer;border:none}.btn-white{background-color:#fff;color:var(--text-dark);border:1px solid rgba(255,255,255,.3)}0:{"P":null,"b":"aWreStUF71QEQZJsa4SK0","c":["","services","wordpress-website-development"],"q":"","i":false,"f":[[["",{"children":["services",{"children":["wordpress-website-development",{"children":["__PAGE__",{}]}]}]},"$undefined","$undefined",true],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/3b0a39d6f6083176.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/163f657a16afbe5e.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/87f96b3d474c7c83.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/d00bf5dffe6d4034.js","async":true,"nonce":"$undefined"}],["$","script","script-2",{"src":"/_next/static/chunks/1eaa683564898b5d.js","async":true,"nonce":"$undefined"}],["$","script","script-3",{"src":"/_next/static/chunks/ea9b783e323d6cb9.js","async":true,"nonce":"$undefined"}],["$","script","script-4",{"src":"/_next/static/chunks/b92e25d5c087748f.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"en","suppressHydrationWarning":true,"children":[["$","head",null,{"children":[[["$","$L2",null,{"src":"https://www.googletagmanager.com/gtag/js?id=G-F4SER380S1","strategy":"afterInteractive"}],["$","$L2",null,{"id":"google-analytics","strategy":"afterInteractive","children":"\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n                gtag('config', 'G-F4SER380S1');\n              "}]],["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$3"}}],["$","style",null,{"dangerouslySetInnerHTML":{"__html":"$4"}}],"$L5","$L6","$L7","$L8","$L9","$La","$Lb"]}],"$Lc"]}]]}],{"children":["$Ld",{"children":["$Le",{"children":["$Lf",{},null,false,false]},null,false,false]},null,false,false]},null,false,false],"$L10",false]],"m":"$undefined","G":["$11",[]],"S":true}
12:I[85526,["/_next/static/chunks/87f96b3d474c7c83.js","/_next/static/chunks/d00bf5dffe6d4034.js","/_next/static/chunks/1eaa683564898b5d.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js"],"default"]
13:I[16749,["/_next/static/chunks/87f96b3d474c7c83.js","/_next/static/chunks/d00bf5dffe6d4034.js","/_next/static/chunks/1eaa683564898b5d.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js"],"default"]
14:I[88497,["/_next/static/chunks/87f96b3d474c7c83.js","/_next/static/chunks/d00bf5dffe6d4034.js","/_next/static/chunks/1eaa683564898b5d.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js"],"default"]
15:I[91782,["/_next/static/chunks/87f96b3d474c7c83.js","/_next/static/chunks/d00bf5dffe6d4034.js","/_next/static/chunks/1eaa683564898b5d.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js"],"default"]
16:I[96681,["/_next/static/chunks/87f96b3d474c7c83.js","/_next/static/chunks/d00bf5dffe6d4034.js","/_next/static/chunks/1eaa683564898b5d.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js"],"default"]
17:I[39756,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"default"]
18:I[37457,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"default"]
19:I[12604,["/_next/static/chunks/87f96b3d474c7c83.js","/_next/static/chunks/d00bf5dffe6d4034.js","/_next/static/chunks/1eaa683564898b5d.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js","/_next/static/chunks/2273281691a5bf6b.js"],"default"]
1b:I[59914,["/_next/static/chunks/87f96b3d474c7c83.js","/_next/static/chunks/d00bf5dffe6d4034.js","/_next/static/chunks/1eaa683564898b5d.js","/_next/static/chunks/ea9b783e323d6cb9.js","/_next/static/chunks/b92e25d5c087748f.js","/_next/static/chunks/7c3e64c8505fa4a6.js"],"default"]
1c:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"OutletBoundary"]
1d:"$Sreact.suspense"
1f:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"ViewportBoundary"]
21:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"MetadataBoundary"]
:HL["/logo.webp","image",{"type":"image/webp","fetchPriority":"high"}]
:HL["/_next/static/chunks/2d745c736d77b66b.css","style"]
5:[["$","link",null,{"rel":"preconnect","href":"https://www.googletagmanager.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://www.google-analytics.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"dns-prefetch","href":"https://www.googletagmanager.com"}],["$","link",null,{"rel":"dns-prefetch","href":"https://www.google-analytics.com"}]]
6:[["$","link",null,{"rel":"preconnect","href":"https://www.clarity.ms","crossOrigin":"anonymous"}],["$","link",null,{"rel":"dns-prefetch","href":"https://www.clarity.ms"}]]
7:["$","link",null,{"rel":"preload","href":"/logo.webp","as":"image","type":"image/webp","fetchPriority":"high"}]
8:["$","$L2",null,{"id":"microsoft-clarity","strategy":"afterInteractive","dangerouslySetInnerHTML":{"__html":"\n                (function(c,l,a,r,i,t,y){\n                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};\n                  t=l.createElement(r);t.async=1;t.src=\"https://www.clarity.ms/tag/\"+i;\n                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);\n                })(window, document, \"clarity\", \"script\", \"ut70ln5wh3\");\n              "}}]
9:["$","$L12",null,{}]
a:["$","$L13",null,{}]
b:["$","$L14",null,{}]
c:["$","body",null,{"suppressHydrationWarning":true,"children":[false,["$","$L15",null,{"children":["$","$L16",null,{"children":["$","$L17",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L18",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","$L19",null,{}],[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/2d745c736d77b66b.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]}]]}]
d:["$","$1","c",{"children":[null,["$","$L17",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L18",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
e:["$","$1","c",{"children":[null,["$","$L17",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L18",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
1a:T4bf,{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "WordPress Website Development Services",
  "description": "Transform your online presence with our expert WordPress development services. From custom website design to performance optimization, plugin development, and third-party integrations - we deliver scalable WordPress solutions that drive results.",
  "provider": {
    "@type": "Organization",
    "name": "Team Nirosha",
    "url": "https://nirosha.org",
    "logo": "https://nirosha.org/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hadapsar",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "telephone": "+919403891938",
    "email": "info@nirosha.org"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "serviceType": "WordPress Website Development",
  "url": "https://nirosha.org/services/wordpress-website-development",
  "offers": {
    "@type": "Offer",
    "url": "https://nirosha.org/services/wordpress-website-development",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "validFrom": "2025-12-31T06:09:11.089Z"
  }
}f:["$","$1","c",{"children":[[["$","script",null,{"type":"application/ld+json","dangerouslySetInnerHTML":{"__html":"$1a"}}],["$","script",null,{"type":"application/ld+json","dangerouslySetInnerHTML":{"__html":"{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"BreadcrumbList\",\n  \"itemListElement\": [\n    {\n      \"@type\": \"ListItem\",\n      \"position\": 1,\n      \"name\": \"Home\",\n      \"item\": \"https://nirosha.org\"\n    },\n    {\n      \"@type\": \"ListItem\",\n      \"position\": 2,\n      \"name\": \"Services\",\n      \"item\": \"https://nirosha.org/services\"\n    },\n    {\n      \"@type\": \"ListItem\",\n      \"position\": 3,\n      \"name\": \"WordPress Website Development\",\n      \"item\": \"https://nirosha.org/services/wordpress-website-development\"\n    }\n  ]\n}"}}],["$","$L1b",null,{}]],[["$","script","script-0",{"src":"/_next/static/chunks/7c3e64c8505fa4a6.js","async":true,"nonce":"$undefined"}]],["$","$L1c",null,{"children":["$","$1d",null,{"name":"Next.MetadataOutlet","children":"$@1e"}]}]]}]
10:["$","$1","h",{"children":[null,["$","$L1f",null,{"children":"$@20"}],["$","div",null,{"hidden":true,"children":["$","$L21",null,{"children":["$","$1d",null,{"name":"Next.Metadata","children":"$@22"}]}]}],null]}]
20:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"}]]
22:[["$","title","0",{"children":"WordPress Website Development Services | Expert WordPress Developers | Team Nirosha"}],["$","meta","1",{"name":"description","content":"Transform your online presence with our expert WordPress development services. From Figma design conversion to custom development, performance optimization (PageSpeed scores near 90), plugin development, and third-party integrations - we deliver high-quality, timely WordPress solutions."}],["$","meta","2",{"name":"author","content":"Team Nirosha"}],["$","meta","3",{"name":"keywords","content":"WordPress development,WordPress website development,Custom WordPress development,WordPress website design,Figma to WordPress conversion,WordPress performance optimization,WordPress plugin development,WordPress third-party integration,WordPress website revamp,WordPress maintenance,WordPress customization,High PageSpeed WordPress,Fast WordPress development,WordPress developers,WordPress agency,WordPress e-commerce development,WooCommerce development"}],["$","meta","4",{"name":"creator","content":"Team Nirosha"}],["$","meta","5",{"name":"publisher","content":"Team Nirosha"}],["$","meta","6",{"name":"robots","content":"index, follow"}],["$","meta","7",{"name":"googlebot","content":"index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"}],["$","link","8",{"rel":"canonical","href":"https://nirosha.org/services/wordpress-website-development"}],["$","meta","9",{"property":"og:title","content":"WordPress Website Development Services | Expert WordPress Developers | Team Nirosha"}],["$","meta","10",{"property":"og:description","content":"Transform your online presence with our expert WordPress development services. From Figma design conversion to custom development, performance optimization (PageSpeed scores near 90), plugin development, and third-party integrations."}],["$","meta","11",{"property":"og:url","content":"https://nirosha.org/services/wordpress-website-development"}],["$","meta","12",{"property":"og:site_name","content":"Team Nirosha"}],["$","meta","13",{"property":"og:locale","content":"en_US"}],["$","meta","14",{"property":"og:image","content":"https://nirosha.org/logo.png"}],["$","meta","15",{"property":"og:image:width","content":"600"}],["$","meta","16",{"property":"og:image:height","content":"60"}],["$","meta","17",{"property":"og:image:alt","content":"WordPress Website Development Services"}],["$","meta","18",{"property":"og:type","content":"website"}],["$","meta","19",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","20",{"name":"twitter:site","content":"@niroshaorg"}],["$","meta","21",{"name":"twitter:creator","content":"@niroshaorg"}],["$","meta","22",{"name":"twitter:title","content":"WordPress Website Development Services | Team Nirosha"}],["$","meta","23",{"name":"twitter:description","content":"Expert WordPress development with PageSpeed scores near 90. Figma to WordPress conversion, custom development, and more."}],["$","meta","24",{"name":"twitter:image","content":"https://nirosha.org/logo.png"}]]
1e:null
