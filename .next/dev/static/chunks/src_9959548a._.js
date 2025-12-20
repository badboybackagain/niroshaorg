(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/utils/smoothScroll.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Smooth scroll utility functions
 * Provides smooth scrolling functionality for anchor links and programmatic scrolling
 * Works with GSAP ScrollSmoother when available
 */ /**
 * Get ScrollSmoother instance if available
 */ __turbopack_context__.s([
    "handleAnchorClick",
    ()=>handleAnchorClick,
    "scrollToSection",
    ()=>scrollToSection,
    "scrollToTop",
    ()=>scrollToTop,
    "smoothScrollTo",
    ()=>smoothScrollTo
]);
const getScrollSmoother = ()=>{
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.__scrollSmoother) {
        return window.__scrollSmoother;
    }
    return null;
};
const smoothScrollTo = (target, offset = 80, duration = 500)=>{
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (!element) {
        console.warn('Smooth scroll target not found:', target);
        return;
    }
    // Check if ScrollSmoother is active
    const smoother = getScrollSmoother();
    if (smoother) {
        // Use ScrollSmoother's scrollTo method
        smoother.scrollTo(element, true, `top top-=${offset}`);
        return;
    }
    // Fallback to native smooth scroll
    const startPosition = window.pageYOffset;
    const elementPosition = element.getBoundingClientRect().top;
    const targetPosition = elementPosition + startPosition - offset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    // Use native smooth scroll if available and user prefers motion
    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        return;
    }
    // Fallback: Manual animation for browsers that don't support smooth scroll
    const easeInOutCubic = (t)=>{
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };
    const animateScroll = (currentTime)=>{
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        window.scrollTo(0, startPosition + distance * ease);
        if (timeElapsed < duration) {
            requestAnimationFrame(animateScroll);
        }
    };
    requestAnimationFrame(animateScroll);
};
const scrollToTop = (duration = 500)=>{
    // Check if ScrollSmoother is active
    const smoother = getScrollSmoother();
    if (smoother) {
        // Use ScrollSmoother's scrollTo method
        smoother.scrollTo(0, true);
        return;
    }
    // Fallback to native scroll
    smoothScrollTo(document.body, 0, duration);
};
const scrollToSection = (sectionId, offset = 80)=>{
    const element = document.getElementById(sectionId);
    if (element) {
        smoothScrollTo(element, offset);
    } else {
        console.warn(`Section with ID "${sectionId}" not found`);
    }
};
const handleAnchorClick = (e, offset = 80)=>{
    const href = e.currentTarget.getAttribute('href');
    // Check if it's an anchor link (starts with #)
    if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            smoothScrollTo(targetElement, offset);
            // Update URL without triggering navigation
            window.history.pushState(null, '', href);
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ScrollToTopButton.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$smoothScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/smoothScroll.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const ScrollToTopButton = ()=>{
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollToTopButton.useEffect": ()=>{
            const toggleVisibility = {
                "ScrollToTopButton.useEffect.toggleVisibility": ()=>{
                    // Show button when user scrolls down 300px
                    if (window.pageYOffset > 300) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                }
            }["ScrollToTopButton.useEffect.toggleVisibility"];
            window.addEventListener('scroll', toggleVisibility);
            return ({
                "ScrollToTopButton.useEffect": ()=>{
                    window.removeEventListener('scroll', toggleVisibility);
                }
            })["ScrollToTopButton.useEffect"];
        }
    }["ScrollToTopButton.useEffect"], []);
    const handleClick = (e)=>{
        e.preventDefault();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$smoothScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToTop"])(500);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `scroll-to-top-btn ${isVisible ? 'visible' : ''}`,
        onClick: handleClick,
        "aria-label": "Scroll to top",
        title: "Scroll to top",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiArrowUp"], {}, void 0, false, {
            fileName: "[project]/src/components/ScrollToTopButton.jsx",
            lineNumber: 39,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ScrollToTopButton.jsx",
        lineNumber: 33,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ScrollToTopButton, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = ScrollToTopButton;
const __TURBOPACK__default__export__ = ScrollToTopButton;
var _c;
__turbopack_context__.k.register(_c, "ScrollToTopButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ScrollToTopButton.jsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/ScrollToTopButton.jsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_9959548a._.js.map