(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/themes/ChristmasTheme.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "christmasTheme": "ChristmasTheme-module__-oF9Uq__christmasTheme",
  "cityBanner": "ChristmasTheme-module__-oF9Uq__cityBanner",
  "skyCanvas": "ChristmasTheme-module__-oF9Uq__skyCanvas",
});
}),
"[project]/src/components/themes/ChristmasTheme.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$themes$2f$ChristmasTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/themes/ChristmasTheme.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const ChristmasTheme = ()=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const snowflakesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const santaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0,
        width: 150,
        height: 80,
        image: null,
        time: 0,
        speed: 0.5
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChristmasTheme.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") === 'undefined' || !canvasRef.current) return;
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            let width = window.innerWidth;
            let height = window.innerHeight;
            // Resize canvas
            const resize = {
                "ChristmasTheme.useEffect.resize": ()=>{
                    width = window.innerWidth;
                    height = window.innerHeight;
                    canvas.width = width;
                    canvas.height = height;
                }
            }["ChristmasTheme.useEffect.resize"];
            resize();
            window.addEventListener('resize', resize);
            // Initialize Santa image
            const santaImage = new Image();
            santaImage.crossOrigin = 'anonymous';
            santaImage.src = 'https://i.ibb.co/rbHJDQB/DALL-E-2024-12-02-23-37-removebg-preview.png';
            santaImage.onload = ({
                "ChristmasTheme.useEffect": ()=>{
                    santaRef.current.image = santaImage;
                    santaRef.current.x = width; // Start off-screen
                    santaRef.current.y = height * 0.1;
                }
            })["ChristmasTheme.useEffect"];
            santaImage.onerror = ({
                "ChristmasTheme.useEffect": ()=>{
                    // If image fails to load, Santa won't be drawn but snowflakes will still work
                    console.warn('Santa image failed to load, continuing without Santa animation');
                }
            })["ChristmasTheme.useEffect"];
            // Create snowflakes
            const createSnowflakes = {
                "ChristmasTheme.useEffect.createSnowflakes": ()=>{
                    snowflakesRef.current = [];
                    const count = Math.floor(width * height / 15000) // Adaptive count based on screen size
                    ;
                    for(let i = 0; i < count; i++){
                        snowflakesRef.current.push({
                            x: Math.random() * width,
                            y: Math.random() * height,
                            radius: Math.random() * 3 + 1,
                            speed: Math.random() * 2 + 0.5,
                            opacity: Math.random() * 0.5 + 0.5,
                            sway: Math.random() * 0.5 + 0.25
                        });
                    }
                }
            }["ChristmasTheme.useEffect.createSnowflakes"];
            createSnowflakes();
            // Draw snowflake
            const drawSnowflake = {
                "ChristmasTheme.useEffect.drawSnowflake": (snowflake)=>{
                    ctx.beginPath();
                    ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${snowflake.opacity})`;
                    ctx.fill();
                    // Add simple cross pattern
                    ctx.strokeStyle = `rgba(255, 255, 255, ${snowflake.opacity * 0.5})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(snowflake.x - snowflake.radius, snowflake.y);
                    ctx.lineTo(snowflake.x + snowflake.radius, snowflake.y);
                    ctx.moveTo(snowflake.x, snowflake.y - snowflake.radius);
                    ctx.lineTo(snowflake.x, snowflake.y + snowflake.radius);
                    ctx.stroke();
                }
            }["ChristmasTheme.useEffect.drawSnowflake"];
            // Draw Santa
            const drawSanta = {
                "ChristmasTheme.useEffect.drawSanta": ()=>{
                    const santa = santaRef.current;
                    if (!santa.image || !santa.image.complete) return;
                    // Sinusoidal movement for Santa
                    santa.y = height * 0.1 + Math.sin(santa.time) * 20;
                    santa.x -= santa.speed;
                    // Reset when off-screen
                    if (santa.x + santa.width < 0) {
                        santa.x = width;
                        santa.time = 0;
                    }
                    ctx.drawImage(santa.image, santa.x, santa.y, santa.width, santa.height);
                    santa.time += 0.02;
                }
            }["ChristmasTheme.useEffect.drawSanta"];
            // Animation loop
            const animate = {
                "ChristmasTheme.useEffect.animate": ()=>{
                    ctx.clearRect(0, 0, width, height);
                    // Update and draw snowflakes
                    snowflakesRef.current.forEach({
                        "ChristmasTheme.useEffect.animate": (snowflake)=>{
                            snowflake.y += snowflake.speed;
                            snowflake.x += Math.sin(snowflake.y * 0.01) * snowflake.sway;
                            // Reset when off-screen
                            if (snowflake.y > height) {
                                snowflake.y = -10;
                                snowflake.x = Math.random() * width;
                            }
                            if (snowflake.x < 0) snowflake.x = width;
                            if (snowflake.x > width) snowflake.x = 0;
                            drawSnowflake(snowflake);
                        }
                    }["ChristmasTheme.useEffect.animate"]);
                    // Draw Santa
                    drawSanta();
                    animationFrameRef.current = requestAnimationFrame(animate);
                }
            }["ChristmasTheme.useEffect.animate"];
            animate();
            // Cleanup
            return ({
                "ChristmasTheme.useEffect": ()=>{
                    window.removeEventListener('resize', resize);
                    if (animationFrameRef.current) {
                        cancelAnimationFrame(animationFrameRef.current);
                    }
                }
            })["ChristmasTheme.useEffect"];
        }
    }["ChristmasTheme.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$themes$2f$ChristmasTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].christmasTheme,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$themes$2f$ChristmasTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skyCanvas
            }, void 0, false, {
                fileName: "[project]/src/components/themes/ChristmasTheme.jsx",
                lineNumber: 145,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$themes$2f$ChristmasTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cityBanner
            }, void 0, false, {
                fileName: "[project]/src/components/themes/ChristmasTheme.jsx",
                lineNumber: 146,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/themes/ChristmasTheme.jsx",
        lineNumber: 144,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ChristmasTheme, "YcEOp5JlsQeKAH5ncR00OOyOyFM=");
_c = ChristmasTheme;
const __TURBOPACK__default__export__ = ChristmasTheme;
var _c;
__turbopack_context__.k.register(_c, "ChristmasTheme");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/themes/ChristmasTheme.jsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/themes/ChristmasTheme.jsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_themes_ae65363d._.js.map