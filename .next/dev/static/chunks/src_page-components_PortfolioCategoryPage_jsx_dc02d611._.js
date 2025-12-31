(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/page-components/PortfolioCategoryPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const ITEMS_PER_PAGE = 12;
const PortfolioCategoryPage = ({ categorySlug, categoryTitle })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [imageList, setImageList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lightboxOpen, setLightboxOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadedImages, setLoadedImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lightboxContentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const touchStartX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const touchEndX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Load images for this category
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioCategoryPage.useEffect": ()=>{
            setIsLoading(true);
            setCurrentPage(1); // Reset page on category change
            fetch(`/cache/portfolio/${categorySlug}/manifest.json`).then({
                "PortfolioCategoryPage.useEffect": (res)=>{
                    if (!res.ok) return null;
                    return res.json();
                }
            }["PortfolioCategoryPage.useEffect"]).then({
                "PortfolioCategoryPage.useEffect": (data)=>{
                    if (!data) {
                        setImageList([]);
                        return;
                    }
                    const images = data.images || data.logos || [];
                    const sorted = images.sort({
                        "PortfolioCategoryPage.useEffect.sorted": (a, b)=>{
                            const numA = parseInt(a.match(/\d+/)?.[0] || '0');
                            const numB = parseInt(b.match(/\d+/)?.[0] || '0');
                            if (numA && numB) return numA - numB;
                            return a.localeCompare(b);
                        }
                    }["PortfolioCategoryPage.useEffect.sorted"]);
                    setImageList(sorted);
                    setIsLoading(false);
                }
            }["PortfolioCategoryPage.useEffect"]).catch({
                "PortfolioCategoryPage.useEffect": ()=>{
                    setImageList([]);
                    setIsLoading(false);
                }
            }["PortfolioCategoryPage.useEffect"]);
        }
    }["PortfolioCategoryPage.useEffect"], [
        categorySlug
    ]);
    // Lazy loading with Intersection Observer - loads images when they're about to enter viewport
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioCategoryPage.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") === 'undefined' || !gridRef.current) return;
            const observer = new IntersectionObserver({
                "PortfolioCategoryPage.useEffect": (entries)=>{
                    entries.forEach({
                        "PortfolioCategoryPage.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                const item = entry.target.closest('.portfolio-item-modern');
                                if (item) {
                                    const imageName = item.dataset.imageName;
                                    if (imageName && !loadedImages.has(imageName)) {
                                        setLoadedImages({
                                            "PortfolioCategoryPage.useEffect": (prev)=>new Set([
                                                    ...prev,
                                                    imageName
                                                ])
                                        }["PortfolioCategoryPage.useEffect"]);
                                    }
                                }
                            }
                        }
                    }["PortfolioCategoryPage.useEffect"]);
                }
            }["PortfolioCategoryPage.useEffect"], {
                rootMargin: '100px',
                threshold: 0.01
            });
            const items = gridRef.current.querySelectorAll('.portfolio-item-modern');
            const imageWrappers = Array.from(items).map({
                "PortfolioCategoryPage.useEffect.imageWrappers": (item)=>item.querySelector('.portfolio-item-image-modern')
            }["PortfolioCategoryPage.useEffect.imageWrappers"]).filter(Boolean);
            imageWrappers.forEach({
                "PortfolioCategoryPage.useEffect": (wrapper)=>observer.observe(wrapper)
            }["PortfolioCategoryPage.useEffect"]);
            return ({
                "PortfolioCategoryPage.useEffect": ()=>{
                    imageWrappers.forEach({
                        "PortfolioCategoryPage.useEffect": (wrapper)=>observer.unobserve(wrapper)
                    }["PortfolioCategoryPage.useEffect"]);
                }
            })["PortfolioCategoryPage.useEffect"];
        }
    }["PortfolioCategoryPage.useEffect"], [
        imageList,
        loadedImages,
        currentPage
    ]); // Re-run observer when page changes
    // Prevent body scroll when lightbox is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioCategoryPage.useEffect": ()=>{
            if (lightboxOpen) {
                const scrollY = window.scrollY;
                document.body.classList.add('lightbox-open');
                document.documentElement.classList.add('lightbox-open');
                document.body.style.top = `-${scrollY}px`;
                document.body.style.position = 'fixed';
                document.body.style.width = '100%';
            } else {
                const scrollY = document.body.style.top;
                document.body.classList.remove('lightbox-open');
                document.documentElement.classList.remove('lightbox-open');
                document.body.style.top = '';
                document.body.style.position = '';
                document.body.style.width = '';
                if (scrollY) {
                    window.scrollTo(0, parseInt(scrollY || '0') * -1);
                }
            }
            return ({
                "PortfolioCategoryPage.useEffect": ()=>{
                    document.body.classList.remove('lightbox-open');
                    document.documentElement.classList.remove('lightbox-open');
                    document.body.style.top = '';
                    document.body.style.position = '';
                    document.body.style.width = '';
                }
            })["PortfolioCategoryPage.useEffect"];
        }
    }["PortfolioCategoryPage.useEffect"], [
        lightboxOpen
    ]);
    // Preload next/previous images in lightbox
    const preloadAdjacentImages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortfolioCategoryPage.useCallback[preloadAdjacentImages]": (currentIndex)=>{
            if (!imageList.length) return;
            const preloadIndexes = [
                (currentIndex - 1 + imageList.length) % imageList.length,
                (currentIndex + 1) % imageList.length
            ];
            preloadIndexes.forEach({
                "PortfolioCategoryPage.useCallback[preloadAdjacentImages]": (index)=>{
                    const imageName = imageList[index];
                    const img = new Image();
                    img.src = `/cache/portfolio/${categorySlug}/${imageName}-large.webp`;
                }
            }["PortfolioCategoryPage.useCallback[preloadAdjacentImages]"]);
        }
    }["PortfolioCategoryPage.useCallback[preloadAdjacentImages]"], [
        imageList,
        categorySlug
    ]);
    const openLightbox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortfolioCategoryPage.useCallback[openLightbox]": (imageName)=>{
            setSelectedImage(imageName);
            setLightboxOpen(true);
            const index = imageList.findIndex({
                "PortfolioCategoryPage.useCallback[openLightbox].index": (img)=>img === imageName
            }["PortfolioCategoryPage.useCallback[openLightbox].index"]);
            preloadAdjacentImages(index);
        }
    }["PortfolioCategoryPage.useCallback[openLightbox]"], [
        imageList,
        preloadAdjacentImages
    ]);
    const closeLightbox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortfolioCategoryPage.useCallback[closeLightbox]": ()=>{
            setLightboxOpen(false);
            setTimeout({
                "PortfolioCategoryPage.useCallback[closeLightbox]": ()=>setSelectedImage(null)
            }["PortfolioCategoryPage.useCallback[closeLightbox]"], 300);
        }
    }["PortfolioCategoryPage.useCallback[closeLightbox]"], []);
    const navigateImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortfolioCategoryPage.useCallback[navigateImage]": (direction)=>{
            if (!selectedImage || !imageList.length) return;
            const currentIndex = imageList.findIndex({
                "PortfolioCategoryPage.useCallback[navigateImage].currentIndex": (img)=>img === selectedImage
            }["PortfolioCategoryPage.useCallback[navigateImage].currentIndex"]);
            const newIndex = (currentIndex + direction + imageList.length) % imageList.length;
            setSelectedImage(imageList[newIndex]);
            preloadAdjacentImages(newIndex);
        }
    }["PortfolioCategoryPage.useCallback[navigateImage]"], [
        selectedImage,
        imageList,
        preloadAdjacentImages
    ]);
    // Keyboard navigation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioCategoryPage.useEffect": ()=>{
            const handleKeyDown = {
                "PortfolioCategoryPage.useEffect.handleKeyDown": (e)=>{
                    if (!lightboxOpen) return;
                    if (e.key === 'Escape') {
                        closeLightbox();
                    } else if (e.key === 'ArrowLeft') {
                        navigateImage(-1);
                    } else if (e.key === 'ArrowRight') {
                        navigateImage(1);
                    }
                }
            }["PortfolioCategoryPage.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "PortfolioCategoryPage.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["PortfolioCategoryPage.useEffect"];
        }
    }["PortfolioCategoryPage.useEffect"], [
        lightboxOpen,
        closeLightbox,
        navigateImage
    ]);
    // Touch gestures for mobile lightbox
    const handleTouchStart = (e)=>{
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchMove = (e)=>{
        touchEndX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = ()=>{
        if (!touchStartX.current || !touchEndX.current) return;
        const distance = touchStartX.current - touchEndX.current;
        const minSwipeDistance = 50;
        if (Math.abs(distance) > minSwipeDistance) {
            if (distance > 0) {
                navigateImage(1); // Swipe left - next
            } else {
                navigateImage(-1); // Swipe right - previous
            }
        }
        touchStartX.current = 0;
        touchEndX.current = 0;
    };
    const handleContactClick = ()=>{
        router.push('/contact?service=Branding%20%26%20Design');
    };
    const currentIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PortfolioCategoryPage.useMemo[currentIndex]": ()=>{
            if (!selectedImage) return -1;
            return imageList.findIndex({
                "PortfolioCategoryPage.useMemo[currentIndex]": (img)=>img === selectedImage
            }["PortfolioCategoryPage.useMemo[currentIndex]"]);
        }
    }["PortfolioCategoryPage.useMemo[currentIndex]"], [
        selectedImage,
        imageList
    ]);
    // Pagination Logic
    const totalItems = imageList.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const visibleImages = imageList.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
    const handlePageChange = (newPage)=>{
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            // Scroll to top of grid
            if (gridRef.current) {
                const yOffset = -100 // Offset for header/nav
                ;
                const y = gridRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({
                    top: y,
                    behavior: 'smooth'
                });
            }
        }
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
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Back to Portfolio"
                                }, void 0, false, {
                                    fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "portfolio-category-title",
                            children: categoryTitle
                        }, void 0, false, {
                            fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "portfolio-category-description",
                            children: [
                                "Browse through our collection of professional ",
                                categoryTitle.toLowerCase(),
                                " designs"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                lineNumber: 228,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "portfolio-category-gallery",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "portfolio-loading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "portfolio-loading-spinner"
                            }, void 0, false, {
                                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                lineNumber: 246,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Loading portfolio..."
                            }, void 0, false, {
                                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                lineNumber: 247,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                        lineNumber: 245,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : visibleImages.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: gridRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "portfolio-grid-modern",
                                children: visibleImages.map((imageName, index)=>{
                                    const isLoaded = loadedImages.has(imageName);
                                    // Calculate actual index for animation delay
                                    const actualIndex = (currentPage - 1) * ITEMS_PER_PAGE + index;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "portfolio-item-modern",
                                        "data-image-name": imageName,
                                        onClick: ()=>openLightbox(imageName),
                                        style: {
                                            animationDelay: `${Math.min(actualIndex * 30, 500)}ms`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "portfolio-item-image-modern",
                                            children: [
                                                isLoaded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                                            srcSet: `/cache/portfolio/${categorySlug}/${imageName}-thumbnail.webp 1x, /cache/portfolio/${categorySlug}/${imageName}-thumbnail@2x.webp 2x`,
                                                            type: "image/webp"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                                            lineNumber: 267,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: `/cache/portfolio/${categorySlug}/${imageName}-thumbnail.png`,
                                                            srcSet: `/cache/portfolio/${categorySlug}/${imageName}-thumbnail.png 1x, /cache/portfolio/${categorySlug}/${imageName}-thumbnail@2x.png 2x`,
                                                            alt: `${categoryTitle} - ${imageName.replace(/[-_]/g, ' ')}`,
                                                            loading: "lazy",
                                                            decoding: "async",
                                                            fetchPriority: index < 12 ? 'high' : 'low'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                                            lineNumber: 271,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                                    lineNumber: 266,
                                                    columnNumber: 27
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "portfolio-item-placeholder",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiZoomIn"], {}, void 0, false, {
                                                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                                        lineNumber: 282,
                                                        columnNumber: 29
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                                    lineNumber: 281,
                                                    columnNumber: 27
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "portfolio-item-overlay-modern",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "portfolio-item-overlay-content",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiZoomIn"], {
                                                                className: "portfolio-item-icon"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                                                lineNumber: 287,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "portfolio-item-view-text",
                                                                children: "View Full Size"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                                                lineNumber: 288,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                                        lineNumber: 286,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                                    lineNumber: 285,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                            lineNumber: 264,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, imageName, false, {
                                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                        lineNumber: 257,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                lineNumber: 251,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pagination-container",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "pagination-btn",
                                        disabled: currentPage === 1,
                                        onClick: ()=>handlePageChange(currentPage - 1),
                                        "aria-label": "Previous page",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronLeft"], {}, void 0, false, {
                                            fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                            lineNumber: 306,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                        lineNumber: 300,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pagination-numbers",
                                        children: Array.from({
                                            length: totalPages
                                        }, (_, i)=>i + 1).map((pageNum)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `pagination-number ${currentPage === pageNum ? 'active' : ''}`,
                                                onClick: ()=>handlePageChange(pageNum),
                                                "aria-label": `Page ${pageNum}`,
                                                children: pageNum
                                            }, pageNum, false, {
                                                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                                lineNumber: 311,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                        lineNumber: 309,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "pagination-btn",
                                        disabled: currentPage === totalPages,
                                        onClick: ()=>handlePageChange(currentPage + 1),
                                        "aria-label": "Next page",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronRight"], {}, void 0, false, {
                                            fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                            lineNumber: 328,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                        lineNumber: 322,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                lineNumber: 299,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                        lineNumber: 250,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "portfolio-empty-state",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Images are being processed. Please run:"
                            }, void 0, false, {
                                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                lineNumber: 335,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                children: [
                                    "npm run process-images:portfolio-",
                                    categorySlug
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                lineNumber: 336,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                        lineNumber: 334,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                    lineNumber: 243,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                lineNumber: 242,
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
                                        lineNumber: 347,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Let's create something amazing together"
                                    }, void 0, false, {
                                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                        lineNumber: 348,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                lineNumber: 346,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "portfolio-category-cta-button",
                                onClick: handleContactClick,
                                children: "Get Started"
                            }, void 0, false, {
                                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                lineNumber: 350,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                        lineNumber: 345,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                    lineNumber: 344,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                lineNumber: 343,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            lightboxOpen && selectedImage && ("TURBOPACK compile-time value", "object") !== 'undefined' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "portfolio-lightbox-modern",
                onClick: closeLightbox,
                onTouchStart: handleTouchStart,
                onTouchMove: handleTouchMove,
                onTouchEnd: handleTouchEnd,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "portfolio-lightbox-close-modern",
                        onClick: closeLightbox,
                        "aria-label": "Close lightbox",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {}, void 0, false, {
                            fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                            lineNumber: 374,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                        lineNumber: 369,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    imageList.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "portfolio-lightbox-nav-modern portfolio-lightbox-prev-modern",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    navigateImage(-1);
                                },
                                "aria-label": "Previous image",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronLeft"], {}, void 0, false, {
                                    fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                    lineNumber: 387,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                lineNumber: 379,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "portfolio-lightbox-nav-modern portfolio-lightbox-next-modern",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    navigateImage(1);
                                },
                                "aria-label": "Next image",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronRight"], {}, void 0, false, {
                                    fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                    lineNumber: 397,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                lineNumber: 389,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "portfolio-lightbox-content-modern",
                        onClick: (e)=>e.stopPropagation(),
                        ref: lightboxContentRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "portfolio-lightbox-image-wrapper",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                            srcSet: `/cache/portfolio/${categorySlug}/${selectedImage}-large.webp 1x, /cache/portfolio/${categorySlug}/${selectedImage}-large@2x.webp 2x`,
                                            type: "image/webp"
                                        }, void 0, false, {
                                            fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                            lineNumber: 409,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: `/cache/portfolio/${categorySlug}/${selectedImage}-large.png`,
                                            srcSet: `/cache/portfolio/${categorySlug}/${selectedImage}-large.png 1x, /cache/portfolio/${categorySlug}/${selectedImage}-large@2x.png 2x`,
                                            alt: `${categoryTitle} - ${selectedImage.replace(/[-_]/g, ' ')}`,
                                            loading: "eager",
                                            decoding: "sync"
                                        }, void 0, false, {
                                            fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                            lineNumber: 413,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                    lineNumber: 408,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                lineNumber: 407,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            imageList.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "portfolio-lightbox-footer-modern",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "portfolio-lightbox-counter-modern",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: currentIndex + 1
                                            }, void 0, false, {
                                                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                                lineNumber: 426,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "portfolio-lightbox-counter-separator",
                                                children: "/"
                                            }, void 0, false, {
                                                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                                lineNumber: 427,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: imageList.length
                                            }, void 0, false, {
                                                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                                lineNumber: 428,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                        lineNumber: 425,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "portfolio-lightbox-title-modern",
                                        children: selectedImage.replace(/[-_]/g, ' ')
                                    }, void 0, false, {
                                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                        lineNumber: 430,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `/cache/portfolio/${categorySlug}/${selectedImage}-large.webp`,
                                        download: `${selectedImage}.webp`,
                                        className: "portfolio-lightbox-download",
                                        onClick: (e)=>e.stopPropagation(),
                                        "aria-label": "Download image",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiDownload"], {}, void 0, false, {
                                            fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                            lineNumber: 440,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                        lineNumber: 433,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                lineNumber: 424,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                        lineNumber: 402,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    imageList.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "portfolio-lightbox-thumbnails",
                        children: imageList.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `portfolio-lightbox-thumbnail ${selectedImage === img ? 'active' : ''}`,
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    setSelectedImage(img);
                                    preloadAdjacentImages(idx);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                            srcSet: `/cache/portfolio/${categorySlug}/${img}-thumbnail.webp`,
                                            type: "image/webp"
                                        }, void 0, false, {
                                            fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                            lineNumber: 460,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: `/cache/portfolio/${categorySlug}/${img}-thumbnail.png`,
                                            alt: `Thumbnail ${idx + 1}`,
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                            lineNumber: 464,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                    lineNumber: 459,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, img, false, {
                                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                                lineNumber: 450,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                        lineNumber: 448,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
                lineNumber: 362,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)), document.body)
        ]
    }, void 0, true, {
        fileName: "[project]/src/page-components/PortfolioCategoryPage.jsx",
        lineNumber: 226,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PortfolioCategoryPage, "2vRSFIvrJxMo7hdXkLh537+T26o=", false, function() {
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

//# sourceMappingURL=src_page-components_PortfolioCategoryPage_jsx_dc02d611._.js.map