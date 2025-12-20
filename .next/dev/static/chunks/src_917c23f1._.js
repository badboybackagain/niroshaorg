(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/portfolioData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "portfolioCategories",
    ()=>portfolioCategories
]);
const portfolioCategories = [
    {
        slug: 'logos',
        title: 'Logo Design',
        description: 'Professional logo designs that capture brand identity',
        icon: '🎨',
        image: '/cache/portfolio/logos/1-thumbnail.webp'
    },
    {
        slug: 'business-card',
        title: 'Business Cards',
        description: 'Creative business card designs',
        icon: '💼',
        image: '/cache/portfolio/business-card/1-thumbnail.webp'
    },
    {
        slug: 'id-cards',
        title: 'ID Cards',
        description: 'Professional ID card designs',
        icon: '🪪',
        image: '/cache/portfolio/id-cards/front-thumbnail.webp'
    },
    {
        slug: 'brochure-cover',
        title: 'Brochure Covers',
        description: 'Eye-catching brochure and leaflet designs',
        icon: '📄',
        image: '/cache/portfolio/brochure-cover/front-thumbnail.webp'
    },
    {
        slug: 'posters',
        title: 'Posters',
        description: 'Creative poster designs',
        icon: '🖼️',
        image: '/cache/portfolio/posters/1-thumbnail.webp'
    },
    {
        slug: 'packaging',
        title: 'Packaging Design',
        description: 'Product packaging designs',
        icon: '📦',
        image: '/cache/portfolio/packaging/4-thumbnail.webp'
    },
    {
        slug: 'social-media-posts',
        title: 'Social Media Posts',
        description: 'Engaging social media designs',
        icon: '📱',
        image: '/cache/portfolio/social-media-posts/Bali-thumbnail.webp'
    },
    {
        slug: 'backdrop',
        title: 'Backdrops',
        description: 'Event backdrop designs',
        icon: '🎭',
        image: '/cache/portfolio/backdrop/20x20-thumbnail.webp'
    },
    {
        slug: 'magazine-ad',
        title: 'Magazine Ads',
        description: 'Print advertisement designs',
        icon: '📰',
        image: '/cache/portfolio/magazine-ad/Dr.Sachin_Patil-thumbnail.webp'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/page-components/PortfolioCategoryPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolioData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$gsapConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/utils/gsapConfig.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const PortfolioCategoryPage = ({ categorySlug, categoryTitle })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [imageList, setImageList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lightboxOpen, setLightboxOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Prevent body scroll when lightbox is open (proper modal approach)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioCategoryPage.useEffect": ()=>{
            if (lightboxOpen) {
                // Store current scroll position
                const scrollY = window.scrollY;
                // Add classes to body and html
                document.body.classList.add('lightbox-open');
                document.documentElement.classList.add('lightbox-open');
                // Preserve scroll position
                document.body.style.top = `-${scrollY}px`;
            } else {
                // Remove classes
                document.body.classList.remove('lightbox-open');
                document.documentElement.classList.remove('lightbox-open');
                // Restore scroll position
                const scrollY = document.body.style.top;
                document.body.style.top = '';
                if (scrollY) {
                    window.scrollTo(0, parseInt(scrollY || '0') * -1);
                }
            }
            return ({
                "PortfolioCategoryPage.useEffect": ()=>{
                    // Cleanup on unmount
                    document.body.classList.remove('lightbox-open');
                    document.documentElement.classList.remove('lightbox-open');
                    document.body.style.top = '';
                }
            })["PortfolioCategoryPage.useEffect"];
        }
    }["PortfolioCategoryPage.useEffect"], [
        lightboxOpen
    ]);
    // Load images for this category
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioCategoryPage.useEffect": ()=>{
            fetch(`/cache/portfolio/${categorySlug}/manifest.json`).then({
                "PortfolioCategoryPage.useEffect": (res)=>{
                    if (!res.ok) {
                        // Manifest not found - images haven't been processed yet
                        // This is expected if images haven't been processed
                        return null;
                    }
                    return res.json();
                }
            }["PortfolioCategoryPage.useEffect"]).then({
                "PortfolioCategoryPage.useEffect": (data)=>{
                    if (!data) {
                        // No manifest found - set empty list
                        setImageList([]);
                        return;
                    }
                    // Handle both 'images' and 'logos' keys for backward compatibility
                    const images = data.images || data.logos || [];
                    // Sort numerically if possible, otherwise alphabetically
                    const sorted = images.sort({
                        "PortfolioCategoryPage.useEffect.sorted": (a, b)=>{
                            const numA = parseInt(a.match(/\d+/)?.[0] || '0');
                            const numB = parseInt(b.match(/\d+/)?.[0] || '0');
                            if (numA && numB) return numA - numB;
                            return a.localeCompare(b);
                        }
                    }["PortfolioCategoryPage.useEffect.sorted"]);
                    setImageList(sorted);
                }
            }["PortfolioCategoryPage.useEffect"]).catch({
                "PortfolioCategoryPage.useEffect": ()=>{
                    // Silently handle errors - manifest might not exist yet
                    setImageList([]);
                }
            }["PortfolioCategoryPage.useEffect"]);
        }
    }["PortfolioCategoryPage.useEffect"], [
        categorySlug
    ]);
    // GSAP animations
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioCategoryPage.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "PortfolioCategoryPage.useEffect.ctx": ()=>{
                    if (gridRef.current) {
                        const items = gridRef.current.querySelectorAll('.portfolio-item');
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from(items, {
                            opacity: 0,
                            y: 30,
                            duration: 0.5,
                            stagger: 0.03,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: gridRef.current,
                                start: 'top 85%',
                                toggleActions: 'play none none none'
                            }
                        });
                    }
                }
            }["PortfolioCategoryPage.useEffect.ctx"], sectionRef);
            return ({
                "PortfolioCategoryPage.useEffect": ()=>ctx.revert()
            })["PortfolioCategoryPage.useEffect"];
        }
    }["PortfolioCategoryPage.useEffect"], [
        imageList
    ]);
    const openLightbox = (imageName)=>{
        setSelectedImage(imageName);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };
    const closeLightbox = ()=>{
        setLightboxOpen(false);
        setSelectedImage(null);
        document.body.style.overflow = '';
    };
    const navigateImage = (direction)=>{
        if (!selectedImage) return;
        const currentIndex = imageList.findIndex((img)=>img === selectedImage);
        const newIndex = (currentIndex + direction + imageList.length) % imageList.length;
        setSelectedImage(imageList[newIndex]);
    };
    const handleKeyDown = (e)=>{
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft' && lightboxOpen) {
            navigateImage(-1);
        } else if (e.key === 'ArrowRight' && lightboxOpen) {
            navigateImage(1);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioCategoryPage.useEffect": ()=>{
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "PortfolioCategoryPage.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["PortfolioCategoryPage.useEffect"];
        }
    }["PortfolioCategoryPage.useEffect"], [
        lightboxOpen,
        selectedImage
    ]);
    const handleContactClick = ()=>{
        router.push('/contact?service=Branding%20%26%20Design');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "portfolio-category-page",
        ref: sectionRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "portfolio-category-header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/portfolio",
                            className: "portfolio-back-link",
                            suppressHydrationWarning: true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronLeft"], {}, void 0, false, {
                                    fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Back to Portfolio"
                                }, void 0, false, {
                                    fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "portfolio-category-title",
                            children: categoryTitle
                        }, void 0, false, {
                            fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                lineNumber: 148,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "portfolio-category-gallery",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: imageList.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "portfolio-grid",
                        ref: gridRef,
                        children: imageList.map((imageName, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "portfolio-item",
                                onClick: ()=>openLightbox(imageName),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "portfolio-item-image",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                                    srcSet: `/cache/portfolio/${categorySlug}/${imageName}-thumbnail.webp 1x, /cache/portfolio/${categorySlug}/${imageName}-thumbnail@2x.webp 2x`,
                                                    type: "image/webp"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                                    lineNumber: 171,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: `/cache/portfolio/${categorySlug}/${imageName}-thumbnail.png`,
                                                    srcSet: `/cache/portfolio/${categorySlug}/${imageName}-thumbnail.png 1x, /cache/portfolio/${categorySlug}/${imageName}-thumbnail@2x.png 2x`,
                                                    alt: `${categoryTitle} - ${imageName.replace(/[-_]/g, ' ')}`,
                                                    loading: "lazy",
                                                    decoding: "async"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                                    lineNumber: 175,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                            lineNumber: 170,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "portfolio-item-overlay",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "portfolio-item-view",
                                                children: "View"
                                            }, void 0, false, {
                                                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                                lineNumber: 184,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                            lineNumber: 183,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                    lineNumber: 169,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, imageName, false, {
                                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                lineNumber: 164,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                        lineNumber: 162,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "portfolio-empty-state",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Images are being processed. Please run:"
                            }, void 0, false, {
                                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                lineNumber: 192,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                children: [
                                    "npm run process-images:portfolio-",
                                    categorySlug
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                lineNumber: 193,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                        lineNumber: 191,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                lineNumber: 159,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "portfolio-category-cta",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "portfolio-category-cta-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "portfolio-category-cta-text",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "Ready to Get Your Design?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Let's create something amazing together"
                                    }, void 0, false, {
                                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "portfolio-category-cta-button",
                                onClick: handleContactClick,
                                children: "Get Started"
                            }, void 0, false, {
                                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                lineNumber: 200,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            lightboxOpen && selectedImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "portfolio-lightbox",
                onClick: closeLightbox,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "portfolio-lightbox-close",
                        onClick: closeLightbox,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {}, void 0, false, {
                            fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    imageList.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "portfolio-lightbox-nav portfolio-lightbox-prev",
                        onClick: (e)=>{
                            e.stopPropagation();
                            navigateImage(-1);
                        },
                        "aria-label": "Previous image",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronLeft"], {}, void 0, false, {
                            fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                            lineNumber: 232,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                        lineNumber: 224,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "portfolio-lightbox-content",
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                        srcSet: `/cache/portfolio/${categorySlug}/${selectedImage}-large.webp 1x, /cache/portfolio/${categorySlug}/${selectedImage}-large@2x.webp 2x`,
                                        type: "image/webp"
                                    }, void 0, false, {
                                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: `/cache/portfolio/${categorySlug}/${selectedImage}-large.png`,
                                        srcSet: `/cache/portfolio/${categorySlug}/${selectedImage}-large.png 1x, /cache/portfolio/${categorySlug}/${selectedImage}-large@2x.png 2x`,
                                        alt: `${categoryTitle} - ${selectedImage.replace(/[-_]/g, ' ')}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                lineNumber: 236,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            imageList.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "portfolio-lightbox-info",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "portfolio-lightbox-counter",
                                    children: [
                                        imageList.findIndex((img)=>img === selectedImage) + 1,
                                        " / ",
                                        imageList.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                    lineNumber: 249,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                lineNumber: 248,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                        lineNumber: 235,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    imageList.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "portfolio-lightbox-nav portfolio-lightbox-next",
                        onClick: (e)=>{
                            e.stopPropagation();
                            navigateImage(1);
                        },
                        "aria-label": "Next image",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronRight"], {}, void 0, false, {
                            fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                            lineNumber: 264,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                        lineNumber: 256,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                lineNumber: 219,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
        lineNumber: 146,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PortfolioCategoryPage, "d59oFqYIOpbXuqhZ6Aregn4oF8s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = PortfolioCategoryPage;
const __TURBOPACK__default__export__ = PortfolioCategoryPage;
var _c;
__turbopack_context__.k.register(_c, "PortfolioCategoryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_917c23f1._.js.map