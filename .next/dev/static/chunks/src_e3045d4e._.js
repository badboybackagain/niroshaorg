(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/useScrollAnimation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollAnimation",
    ()=>useScrollAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useScrollAnimation = (options = {})=>{
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollAnimation.useEffect": ()=>{
            // Check if IntersectionObserver is available
            if (typeof IntersectionObserver === 'undefined') {
                setIsVisible(true);
                return;
            }
            const observer = new IntersectionObserver({
                "useScrollAnimation.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        if (options.once !== false) {
                            observer.unobserve(entry.target);
                        }
                    } else if (!options.once) {
                        setIsVisible(false);
                    }
                }
            }["useScrollAnimation.useEffect"], {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px'
            });
            const currentElement = elementRef.current;
            if (currentElement) {
                observer.observe(currentElement);
            }
            return ({
                "useScrollAnimation.useEffect": ()=>{
                    if (currentElement) {
                        observer.unobserve(currentElement);
                    }
                }
            })["useScrollAnimation.useEffect"];
        }
    }["useScrollAnimation.useEffect"], [
        options.threshold,
        options.rootMargin,
        options.once
    ]);
    return [
        elementRef,
        isVisible
    ];
};
_s(useScrollAnimation, "ars/gJ7qRrRI4qdM8DRo1FWAkKE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SquaresBackground.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const SquaresBackground = ({ direction = 'right', speed = 0.5, borderColor = 'rgba(150, 150, 150, 0.2)', squareSize = 50, hoverFillColor = 'rgba(100, 100, 100, 0.1)' })=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const requestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const numSquaresX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const numSquaresY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const gridOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const hoveredSquareRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SquaresBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            const resizeCanvas = {
                "SquaresBackground.useEffect.resizeCanvas": ()=>{
                    // Batch layout reads in requestAnimationFrame to avoid forced reflows
                    requestAnimationFrame({
                        "SquaresBackground.useEffect.resizeCanvas": ()=>{
                            if (!canvas || !ctx) return;
                            // Ensure canvas fills the full parent container
                            const parent = canvas.parentElement;
                            let displayWidth, displayHeight;
                            if (parent) {
                                const rect = parent.getBoundingClientRect();
                                displayWidth = rect.width;
                                displayHeight = rect.height;
                            } else {
                                displayWidth = canvas.offsetWidth || window.innerWidth;
                                displayHeight = canvas.offsetHeight || window.innerHeight;
                            }
                            // Use actual pixel dimensions for crisp rendering
                            const dpr = window.devicePixelRatio || 1;
                            canvas.width = displayWidth * dpr;
                            canvas.height = displayHeight * dpr;
                            // Set display size
                            canvas.style.width = displayWidth + 'px';
                            canvas.style.height = displayHeight + 'px';
                            // Reset transform and scale for high DPI
                            ctx.setTransform(1, 0, 0, 1, 0, 0);
                            ctx.scale(dpr, dpr);
                            // Recalculate grid based on display size
                            numSquaresX.current = Math.ceil(displayWidth / squareSize) + 1;
                            numSquaresY.current = Math.ceil(displayHeight / squareSize) + 1;
                        }
                    }["SquaresBackground.useEffect.resizeCanvas"]);
                }
            }["SquaresBackground.useEffect.resizeCanvas"];
            // Use ResizeObserver for better resize detection
            const resizeObserver = new ResizeObserver({
                "SquaresBackground.useEffect": ()=>{
                    resizeCanvas();
                }
            }["SquaresBackground.useEffect"]);
            if (canvas.parentElement) {
                resizeObserver.observe(canvas.parentElement);
            }
            window.addEventListener('resize', resizeCanvas);
            // Initial resize with a small delay to ensure parent is sized
            setTimeout(resizeCanvas, 0);
            const drawGrid = {
                "SquaresBackground.useEffect.drawGrid": ()=>{
                    if (!ctx || !canvas) return;
                    // Use cached dimensions or canvas dimensions to avoid forced reflows
                    // Calculate from canvas.width/height which are already set, avoiding layout reads
                    const dpr = window.devicePixelRatio || 1;
                    const displayWidth = canvas.width / dpr;
                    const displayHeight = canvas.height / dpr;
                    ctx.clearRect(0, 0, displayWidth, displayHeight);
                    const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
                    const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;
                    for(let x = startX; x < displayWidth + squareSize; x += squareSize){
                        for(let y = startY; y < displayHeight + squareSize; y += squareSize){
                            const squareX = x - gridOffset.current.x % squareSize;
                            const squareY = y - gridOffset.current.y % squareSize;
                            if (hoveredSquareRef.current && Math.floor((x - startX) / squareSize) === hoveredSquareRef.current.x && Math.floor((y - startY) / squareSize) === hoveredSquareRef.current.y) {
                                ctx.fillStyle = hoverFillColor;
                                ctx.fillRect(squareX, squareY, squareSize, squareSize);
                            }
                            ctx.strokeStyle = borderColor;
                            ctx.strokeRect(squareX, squareY, squareSize, squareSize);
                        }
                    }
                }
            }["SquaresBackground.useEffect.drawGrid"];
            const updateAnimation = {
                "SquaresBackground.useEffect.updateAnimation": ()=>{
                    const effectiveSpeed = Math.max(speed, 0.1);
                    switch(direction){
                        case 'right':
                            gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
                            break;
                        case 'left':
                            gridOffset.current.x = (gridOffset.current.x + effectiveSpeed + squareSize) % squareSize;
                            break;
                        case 'up':
                            gridOffset.current.y = (gridOffset.current.y + effectiveSpeed + squareSize) % squareSize;
                            break;
                        case 'down':
                            gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
                            break;
                        case 'diagonal':
                            gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
                            gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
                            break;
                        default:
                            break;
                    }
                    drawGrid();
                    requestRef.current = requestAnimationFrame(updateAnimation);
                }
            }["SquaresBackground.useEffect.updateAnimation"];
            const handleMouseMove = {
                "SquaresBackground.useEffect.handleMouseMove": (event)=>{
                    // Batch layout read in requestAnimationFrame to avoid forced reflows
                    requestAnimationFrame({
                        "SquaresBackground.useEffect.handleMouseMove": ()=>{
                            if (!canvas) return;
                            const rect = canvas.getBoundingClientRect();
                            const mouseX = event.clientX - rect.left;
                            const mouseY = event.clientY - rect.top;
                            const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
                            const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;
                            const hoveredSquareX = Math.floor((mouseX + gridOffset.current.x - startX) / squareSize);
                            const hoveredSquareY = Math.floor((mouseY + gridOffset.current.y - startY) / squareSize);
                            if (!hoveredSquareRef.current || hoveredSquareRef.current.x !== hoveredSquareX || hoveredSquareRef.current.y !== hoveredSquareY) {
                                hoveredSquareRef.current = {
                                    x: hoveredSquareX,
                                    y: hoveredSquareY
                                };
                            }
                        }
                    }["SquaresBackground.useEffect.handleMouseMove"]);
                }
            }["SquaresBackground.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "SquaresBackground.useEffect.handleMouseLeave": ()=>{
                    hoveredSquareRef.current = null;
                }
            }["SquaresBackground.useEffect.handleMouseLeave"];
            canvas.addEventListener('mousemove', handleMouseMove);
            canvas.addEventListener('mouseleave', handleMouseLeave);
            requestRef.current = requestAnimationFrame(updateAnimation);
            return ({
                "SquaresBackground.useEffect": ()=>{
                    resizeObserver.disconnect();
                    window.removeEventListener('resize', resizeCanvas);
                    if (requestRef.current) cancelAnimationFrame(requestRef.current);
                    canvas.removeEventListener('mousemove', handleMouseMove);
                    canvas.removeEventListener('mouseleave', handleMouseLeave);
                }
            })["SquaresBackground.useEffect"];
        }
    }["SquaresBackground.useEffect"], [
        direction,
        speed,
        borderColor,
        hoverFillColor,
        squareSize
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "squares-background"
    }, void 0, false, {
        fileName: "[project]/src/components/SquaresBackground.jsx",
        lineNumber: 177,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SquaresBackground, "6EBHvOs3JyRZ/MuFPzJ6+egGOZU=");
_c = SquaresBackground;
const __TURBOPACK__default__export__ = SquaresBackground;
var _c;
__turbopack_context__.k.register(_c, "SquaresBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/page-components/AboutPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useScrollAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SquaresBackground$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SquaresBackground.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// Team member data
const teamMembers = [
    {
        name: 'Nisha Tiwari',
        role: 'Founder',
        imageSlug: 'nisha-tiwari',
        description: 'Leading Team Nirosha with a vision to deliver exceptional digital solutions'
    },
    {
        name: 'Ajay Pankhaniya',
        role: 'Development Lead',
        imageSlug: 'ajay-pankhaniya',
        description: 'Driving innovation and strategic growth'
    },
    {
        name: 'Komal Vaviya',
        role: 'Sr. Developer',
        imageSlug: 'komal-vaviya',
        description: 'Expert in modern web technologies and cloud solutions'
    },
    {
        name: 'Chirag Patel',
        role: 'Sr. Developer',
        imageSlug: 'chirag-patel',
        description: 'Building scalable and secure digital solutions'
    },
    {
        name: 'Dev Prajapati',
        role: 'Sr. Developer',
        imageSlug: 'dev-prajapati',
        description: 'Creating beautiful and functional web experiences'
    },
    {
        name: 'Vilas Dhadse',
        role: 'Sr. Designer - UI / UX',
        imageSlug: 'vilas-dhadse',
        description: 'Crafting intuitive and engaging user experiences'
    },
    {
        name: 'Avinash Dubal',
        role: 'Sr. Designer & Developer',
        imageSlug: 'avinash-dubal',
        description: 'Transforming ideas into digital reality'
    },
    {
        name: 'Abhishek Mishra',
        role: 'SEO Specialist',
        imageSlug: 'abhishek-mishra',
        description: 'Driving digital marketing and brand growth'
    },
    {
        name: 'Kunal Gaikwad',
        role: 'Digital Marketing Manager',
        imageSlug: 'kunal-gaikwad',
        description: 'Expert in enterprise solutions and automation'
    }
];
const TeamMemberCard = ({ member, index })=>{
    _s();
    const [ref, isVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"])({
        threshold: 0.2
    });
    const [imageError, setImageError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `about-page-team-member-card ${isVisible ? 'animate-fadeInUp' : ''}`,
        style: {
            animationDelay: `${index * 100}ms`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "about-page-team-member-image-wrapper",
                children: !imageError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                    className: "about-page-team-member-picture",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                            srcSet: `/cache/team/${member.imageSlug}.webp 1x, /cache/team/${member.imageSlug}@2x.webp 2x`,
                            type: "image/webp"
                        }, void 0, false, {
                            fileName: "[project]/src/page-components/AboutPage.jsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: `/cache/team/${member.imageSlug}.png`,
                            srcSet: `/cache/team/${member.imageSlug}.png 1x, /cache/team/${member.imageSlug}@2x.png 2x`,
                            alt: member.name,
                            className: "about-page-team-member-image",
                            onError: ()=>setImageError(true)
                        }, void 0, false, {
                            fileName: "[project]/src/page-components/AboutPage.jsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/page-components/AboutPage.jsx",
                    lineNumber: 79,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "about-page-team-member-placeholder",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "about-page-team-member-initials",
                        children: member.name.split(' ').map((n)=>n.charAt(0)).join('')
                    }, void 0, false, {
                        fileName: "[project]/src/page-components/AboutPage.jsx",
                        lineNumber: 94,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/page-components/AboutPage.jsx",
                    lineNumber: 93,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/page-components/AboutPage.jsx",
                lineNumber: 77,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "about-page-team-member-name",
                children: member.name
            }, void 0, false, {
                fileName: "[project]/src/page-components/AboutPage.jsx",
                lineNumber: 100,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "about-page-team-member-designation",
                children: member.role
            }, void 0, false, {
                fileName: "[project]/src/page-components/AboutPage.jsx",
                lineNumber: 101,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/page-components/AboutPage.jsx",
        lineNumber: 72,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TeamMemberCard, "pn5Ae1iX1GMFARMGBS4qVXVq1s4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"]
    ];
});
_c = TeamMemberCard;
const ValueCard = ({ icon, title, description, delay })=>{
    _s1();
    const [ref, isVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"])({
        threshold: 0.2
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `about-page-value-card ${isVisible ? 'animate-fadeInUp' : ''}`,
        style: {
            animationDelay: `${delay}ms`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "about-page-value-icon",
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/page-components/AboutPage.jsx",
                lineNumber: 115,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "about-page-value-title",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/page-components/AboutPage.jsx",
                lineNumber: 116,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "about-page-value-description",
                children: description
            }, void 0, false, {
                fileName: "[project]/src/page-components/AboutPage.jsx",
                lineNumber: 117,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/page-components/AboutPage.jsx",
        lineNumber: 110,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ValueCard, "9bzfpXYnG30yGj0ARWuBbJCUP+Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"]
    ];
});
_c1 = ValueCard;
const AboutPage = ()=>{
    _s2();
    const [heroRef, heroVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"])({
        threshold: 0.2
    });
    const [contentRef, contentVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"])({
        threshold: 0.2
    });
    const [valuesRef, valuesVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"])({
        threshold: 0.2
    });
    const values = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiTarget"], {}, void 0, false, {
                fileName: "[project]/src/page-components/AboutPage.jsx",
                lineNumber: 129,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            title: 'Mission-Driven',
            description: 'We focus on delivering solutions that drive real business results and growth.'
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAward"], {}, void 0, false, {
                fileName: "[project]/src/page-components/AboutPage.jsx",
                lineNumber: 134,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            title: 'Quality First',
            description: 'Every project is built with attention to detail and commitment to excellence.'
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUsers"], {}, void 0, false, {
                fileName: "[project]/src/page-components/AboutPage.jsx",
                lineNumber: 139,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            title: 'Client-Centric',
            description: 'Your success is our success. We build long-term partnerships, not just projects.'
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiZap"], {}, void 0, false, {
                fileName: "[project]/src/page-components/AboutPage.jsx",
                lineNumber: 144,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            title: 'Innovation',
            description: 'We stay ahead of the curve with modern technologies and best practices.'
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiShield"], {}, void 0, false, {
                fileName: "[project]/src/page-components/AboutPage.jsx",
                lineNumber: 149,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            title: 'Reliability',
            description: 'Secure, scalable solutions you can trust to support your business growth.'
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiTrendingUp"], {}, void 0, false, {
                fileName: "[project]/src/page-components/AboutPage.jsx",
                lineNumber: 154,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            title: 'Growth-Oriented',
            description: 'We build systems that scale with your business, not against it.'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "about-page-hero-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "iridescence-background"
                    }, void 0, false, {
                        fileName: "[project]/src/page-components/AboutPage.jsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "iridescence-overlay"
                    }, void 0, false, {
                        fileName: "[project]/src/page-components/AboutPage.jsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "about-hero-content",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: heroRef,
                                className: `about-hero-text ${heroVisible ? 'animate-fadeInUp' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "about-hero-badge",
                                        children: "About Team Nirosha"
                                    }, void 0, false, {
                                        fileName: "[project]/src/page-components/AboutPage.jsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "about-hero-headline",
                                        children: "About Team Nirosha - Digital Agency | Web Development & SEO Experts"
                                    }, void 0, false, {
                                        fileName: "[project]/src/page-components/AboutPage.jsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "about-hero-subheadline",
                                        children: "We don't just build websites - we build secure, scalable digital systems that support real business growth."
                                    }, void 0, false, {
                                        fileName: "[project]/src/page-components/AboutPage.jsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/page-components/AboutPage.jsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/page-components/AboutPage.jsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/page-components/AboutPage.jsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/page-components/AboutPage.jsx",
                lineNumber: 163,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "about-page",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: contentRef,
                            className: `about-page-content ${contentVisible ? 'animate-fadeInUp' : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "about-page-lead",
                                    children: "Team Nirosha is a trusted digital agency in India, providing comprehensive web development, SEO, automation, and cloud services. We focus on quality, transparency, and results - technology that works while you sleep."
                                }, void 0, false, {
                                    fileName: "[project]/src/page-components/AboutPage.jsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "about-page-body",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Our business-first approach means we understand your goals before we write a single line of code. We're hands-on, responsive, and accountable - trusted by businesses, startups, and educational institutions across India. We solve real problems with scalable solutions that grow with your business."
                                        }, void 0, false, {
                                            fileName: "[project]/src/page-components/AboutPage.jsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "With years of combined experience, our team brings expertise in modern web technologies, cloud infrastructure, SEO optimization, and business automation. We're not just developers - we're your partners in digital transformation."
                                        }, void 0, false, {
                                            fileName: "[project]/src/page-components/AboutPage.jsx",
                                            lineNumber: 200,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/page-components/AboutPage.jsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/page-components/AboutPage.jsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: valuesRef,
                            className: `about-page-values ${valuesVisible ? 'animate-fadeInUp' : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "about-page-section-title",
                                    children: "Our Core Values"
                                }, void 0, false, {
                                    fileName: "[project]/src/page-components/AboutPage.jsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "about-page-values-grid",
                                    children: values.map((value, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValueCard, {
                                            icon: value.icon,
                                            title: value.title,
                                            description: value.description,
                                            delay: index * 100
                                        }, index, false, {
                                            fileName: "[project]/src/page-components/AboutPage.jsx",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/page-components/AboutPage.jsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/page-components/AboutPage.jsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "about-page-team animate-fadeInUp",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SquaresBackground$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    direction: "diagonal",
                                    speed: 0.5,
                                    borderColor: "rgba(150, 150, 150, 0.15)",
                                    squareSize: 60,
                                    hoverFillColor: "rgba(100, 100, 100, 0.08)"
                                }, void 0, false, {
                                    fileName: "[project]/src/page-components/AboutPage.jsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'relative',
                                        zIndex: 1,
                                        pointerEvents: 'none'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "about-page-section-title",
                                            style: {
                                                pointerEvents: 'auto'
                                            },
                                            children: "Meet Our Team"
                                        }, void 0, false, {
                                            fileName: "[project]/src/page-components/AboutPage.jsx",
                                            lineNumber: 236,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "about-page-team-intro",
                                            style: {
                                                pointerEvents: 'auto'
                                            },
                                            children: "We're a team of passionate professionals dedicated to delivering exceptional digital solutions. Each member brings unique expertise and a commitment to excellence."
                                        }, void 0, false, {
                                            fileName: "[project]/src/page-components/AboutPage.jsx",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "about-page-team-members-grid",
                                            style: {
                                                pointerEvents: 'auto'
                                            },
                                            children: teamMembers.map((member, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TeamMemberCard, {
                                                    member: member,
                                                    index: index
                                                }, index, false, {
                                                    fileName: "[project]/src/page-components/AboutPage.jsx",
                                                    lineNumber: 243,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/page-components/AboutPage.jsx",
                                            lineNumber: 241,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "about-page-team-closing",
                                            style: {
                                                pointerEvents: 'auto'
                                            },
                                            children: "Together, we're building the future of digital solutions, one project at a time."
                                        }, void 0, false, {
                                            fileName: "[project]/src/page-components/AboutPage.jsx",
                                            lineNumber: 246,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/page-components/AboutPage.jsx",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/page-components/AboutPage.jsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "about-page-cta",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "btn btn-primary btn-large",
                                children: [
                                    "Get in Touch",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiArrowRight"], {
                                        style: {
                                            marginLeft: '8px'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/page-components/AboutPage.jsx",
                                        lineNumber: 256,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/page-components/AboutPage.jsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/page-components/AboutPage.jsx",
                            lineNumber: 253,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/page-components/AboutPage.jsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/page-components/AboutPage.jsx",
                lineNumber: 183,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s2(AboutPage, "gYMXdQz4YCpz3YwiZWdPj2DMJ4A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"]
    ];
});
_c2 = AboutPage;
const __TURBOPACK__default__export__ = AboutPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "TeamMemberCard");
__turbopack_context__.k.register(_c1, "ValueCard");
__turbopack_context__.k.register(_c2, "AboutPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e3045d4e._.js.map