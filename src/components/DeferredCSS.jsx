/**
 * DeferredCSS component
 * Injects a script to convert render-blocking CSS to async loading
 * This prevents render-blocking and improves critical path latency
 * 
 * Uses MutationObserver to catch CSS links as Next.js injects them
 */
const DeferredCSS = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
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
        `,
      }}
    />
  )
}

export default DeferredCSS
