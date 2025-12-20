(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/LightRaysBackground.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Renderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Program.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/extras/Triangle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Mesh.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const DEFAULT_COLOR = '#ffffff';
const hexToRgb = (hex)=>{
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return m ? [
        parseInt(m[1], 16) / 255,
        parseInt(m[2], 16) / 255,
        parseInt(m[3], 16) / 255
    ] : [
        1,
        1,
        1
    ];
};
const getAnchorAndDir = (origin, w, h)=>{
    const outside = 0.2;
    switch(origin){
        case 'top-left':
            return {
                anchor: [
                    0,
                    -outside * h
                ],
                dir: [
                    0,
                    1
                ]
            };
        case 'top-right':
            return {
                anchor: [
                    w,
                    -outside * h
                ],
                dir: [
                    0,
                    1
                ]
            };
        case 'left':
            return {
                anchor: [
                    -outside * w,
                    0.5 * h
                ],
                dir: [
                    1,
                    0
                ]
            };
        case 'right':
            return {
                anchor: [
                    (1 + outside) * w,
                    0.5 * h
                ],
                dir: [
                    -1,
                    0
                ]
            };
        case 'bottom-left':
            return {
                anchor: [
                    0,
                    (1 + outside) * h
                ],
                dir: [
                    0,
                    -1
                ]
            };
        case 'bottom-center':
            return {
                anchor: [
                    0.5 * w,
                    (1 + outside) * h
                ],
                dir: [
                    0,
                    -1
                ]
            };
        case 'bottom-right':
            return {
                anchor: [
                    w,
                    (1 + outside) * h
                ],
                dir: [
                    0,
                    -1
                ]
            };
        default:
            return {
                anchor: [
                    0.5 * w,
                    -outside * h
                ],
                dir: [
                    0,
                    1
                ]
            };
    }
};
const LightRaysBackground = ({ raysOrigin = 'top-center', raysColor = '#a8c0ff', raysSpeed = 0.8, lightSpread = 1.2, rayLength = 2, pulsating = true, fadeDistance = 1.0, saturation = 1.0, followMouse = true, mouseInfluence = 0.15, noiseAmount = 0.0, distortion = 0.1, className = '' })=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0.5,
        y: 0.5
    });
    const smoothMouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0.5,
        y: 0.5
    });
    const animationIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cleanupFunctionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const observerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LightRaysBackground.useEffect": ()=>{
            if (!containerRef.current) return;
            observerRef.current = new IntersectionObserver({
                "LightRaysBackground.useEffect": (entries)=>{
                    const entry = entries[0];
                    setIsVisible(entry.isIntersecting);
                }
            }["LightRaysBackground.useEffect"], {
                threshold: 0.1
            });
            observerRef.current.observe(containerRef.current);
            return ({
                "LightRaysBackground.useEffect": ()=>{
                    if (observerRef.current) {
                        observerRef.current.disconnect();
                        observerRef.current = null;
                    }
                }
            })["LightRaysBackground.useEffect"];
        }
    }["LightRaysBackground.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LightRaysBackground.useEffect": ()=>{
            if (!isVisible || !containerRef.current) return;
            if (cleanupFunctionRef.current) {
                cleanupFunctionRef.current();
                cleanupFunctionRef.current = null;
            }
            const initializeWebGL = {
                "LightRaysBackground.useEffect.initializeWebGL": async ()=>{
                    if (!containerRef.current) return;
                    await new Promise({
                        "LightRaysBackground.useEffect.initializeWebGL": (resolve)=>setTimeout(resolve, 10)
                    }["LightRaysBackground.useEffect.initializeWebGL"]);
                    if (!containerRef.current) return;
                    const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Renderer"]({
                        dpr: Math.min(window.devicePixelRatio, 2),
                        alpha: true
                    });
                    rendererRef.current = renderer;
                    const gl = renderer.gl;
                    gl.canvas.style.width = '100%';
                    gl.canvas.style.height = '100%';
                    while(containerRef.current.firstChild){
                        containerRef.current.removeChild(containerRef.current.firstChild);
                    }
                    containerRef.current.appendChild(gl.canvas);
                    const vert = `
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}`;
                    const frag = `precision highp float;

uniform float iTime;
uniform vec2  iResolution;

uniform vec2  rayPos;
uniform vec2  rayDir;
uniform vec3  raysColor;
uniform float raysSpeed;
uniform float lightSpread;
uniform float rayLength;
uniform float pulsating;
uniform float fadeDistance;
uniform float saturation;
uniform vec2  mousePos;
uniform float mouseInfluence;
uniform float noiseAmount;
uniform float distortion;

varying vec2 vUv;

float noise(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord,
                  float seedA, float seedB, float speed) {
  vec2 sourceToCoord = coord - raySource;
  vec2 dirNorm = normalize(sourceToCoord);
  float cosAngle = dot(dirNorm, rayRefDirection);

  float distortedAngle = cosAngle + distortion * sin(iTime * 2.0 + length(sourceToCoord) * 0.01) * 0.2;
  
  float spreadFactor = pow(max(distortedAngle, 0.0), 1.0 / max(lightSpread, 0.001));

  float distance = length(sourceToCoord);
  float maxDistance = iResolution.x * rayLength;
  float lengthFalloff = clamp((maxDistance - distance) / maxDistance, 0.0, 1.0);
  
  float fadeFalloff = clamp((iResolution.x * fadeDistance - distance) / (iResolution.x * fadeDistance), 0.5, 1.0);
  float pulse = pulsating > 0.5 ? (0.8 + 0.2 * sin(iTime * speed * 3.0)) : 1.0;

  float baseStrength = clamp(
    (0.45 + 0.15 * sin(distortedAngle * seedA + iTime * speed)) +
    (0.3 + 0.2 * cos(-distortedAngle * seedB + iTime * speed)),
    0.0, 1.0
  );

  return baseStrength * lengthFalloff * fadeFalloff * spreadFactor * pulse;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 coord = vec2(fragCoord.x, iResolution.y - fragCoord.y);
  
  vec2 finalRayDir = rayDir;
  if (mouseInfluence > 0.0) {
    vec2 mouseScreenPos = mousePos * iResolution.xy;
    vec2 mouseDirection = normalize(mouseScreenPos - rayPos);
    finalRayDir = normalize(mix(rayDir, mouseDirection, mouseInfluence));
  }

  vec4 rays1 = vec4(1.0) *
               rayStrength(rayPos, finalRayDir, coord, 36.2214, 21.11349,
                           1.5 * raysSpeed);
  vec4 rays2 = vec4(1.0) *
               rayStrength(rayPos, finalRayDir, coord, 22.3991, 18.0234,
                           1.1 * raysSpeed);

  fragColor = rays1 * 0.5 + rays2 * 0.4;

  if (noiseAmount > 0.0) {
    float n = noise(coord * 0.01 + iTime * 0.1);
    fragColor.rgb *= (1.0 - noiseAmount + noiseAmount * n);
  }

  float brightness = 1.0 - (coord.y / iResolution.y);
  fragColor.x *= 0.1 + brightness * 0.8;
  fragColor.y *= 0.3 + brightness * 0.6;
  fragColor.z *= 0.5 + brightness * 0.5;

  if (saturation != 1.0) {
    float gray = dot(fragColor.rgb, vec3(0.299, 0.587, 0.114));
    fragColor.rgb = mix(vec3(gray), fragColor.rgb, saturation);
  }

  fragColor.rgb *= raysColor;
}

void main() {
  vec4 color;
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor  = color;
}`;
                    const uniforms = {
                        iTime: {
                            value: 0
                        },
                        iResolution: {
                            value: [
                                1,
                                1
                            ]
                        },
                        rayPos: {
                            value: [
                                0,
                                0
                            ]
                        },
                        rayDir: {
                            value: [
                                0,
                                1
                            ]
                        },
                        raysColor: {
                            value: hexToRgb(raysColor)
                        },
                        raysSpeed: {
                            value: raysSpeed
                        },
                        lightSpread: {
                            value: lightSpread
                        },
                        rayLength: {
                            value: rayLength
                        },
                        pulsating: {
                            value: pulsating ? 1.0 : 0.0
                        },
                        fadeDistance: {
                            value: fadeDistance
                        },
                        saturation: {
                            value: saturation
                        },
                        mousePos: {
                            value: [
                                0.5,
                                0.5
                            ]
                        },
                        mouseInfluence: {
                            value: mouseInfluence
                        },
                        noiseAmount: {
                            value: noiseAmount
                        },
                        distortion: {
                            value: distortion
                        }
                    };
                    uniformsRef.current = uniforms;
                    const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Triangle"](gl);
                    const program = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Program"](gl, {
                        vertex: vert,
                        fragment: frag,
                        uniforms
                    });
                    const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](gl, {
                        geometry,
                        program
                    });
                    meshRef.current = mesh;
                    const updatePlacement = {
                        "LightRaysBackground.useEffect.initializeWebGL.updatePlacement": ()=>{
                            // Batch layout reads in requestAnimationFrame to avoid forced reflows
                            requestAnimationFrame({
                                "LightRaysBackground.useEffect.initializeWebGL.updatePlacement": ()=>{
                                    if (!containerRef.current || !renderer) return;
                                    renderer.dpr = Math.min(window.devicePixelRatio, 2);
                                    const { clientWidth: wCSS, clientHeight: hCSS } = containerRef.current;
                                    renderer.setSize(wCSS, hCSS);
                                    const dpr = renderer.dpr;
                                    const w = wCSS * dpr;
                                    const h = hCSS * dpr;
                                    uniforms.iResolution.value = [
                                        w,
                                        h
                                    ];
                                    const { anchor, dir } = getAnchorAndDir(raysOrigin, w, h);
                                    uniforms.rayPos.value = anchor;
                                    uniforms.rayDir.value = dir;
                                }
                            }["LightRaysBackground.useEffect.initializeWebGL.updatePlacement"]);
                        }
                    }["LightRaysBackground.useEffect.initializeWebGL.updatePlacement"];
                    const loop = {
                        "LightRaysBackground.useEffect.initializeWebGL.loop": (t)=>{
                            if (!rendererRef.current || !uniformsRef.current || !meshRef.current) {
                                return;
                            }
                            uniforms.iTime.value = t * 0.001;
                            if (followMouse && mouseInfluence > 0.0) {
                                const smoothing = 0.92;
                                smoothMouseRef.current.x = smoothMouseRef.current.x * smoothing + mouseRef.current.x * (1 - smoothing);
                                smoothMouseRef.current.y = smoothMouseRef.current.y * smoothing + mouseRef.current.y * (1 - smoothing);
                                uniforms.mousePos.value = [
                                    smoothMouseRef.current.x,
                                    smoothMouseRef.current.y
                                ];
                            }
                            try {
                                renderer.render({
                                    scene: mesh
                                });
                                animationIdRef.current = requestAnimationFrame(loop);
                            } catch (error) {
                                console.warn('WebGL rendering error:', error);
                                return;
                            }
                        }
                    }["LightRaysBackground.useEffect.initializeWebGL.loop"];
                    window.addEventListener('resize', updatePlacement);
                    updatePlacement();
                    animationIdRef.current = requestAnimationFrame(loop);
                    cleanupFunctionRef.current = ({
                        "LightRaysBackground.useEffect.initializeWebGL": ()=>{
                            if (animationIdRef.current) {
                                cancelAnimationFrame(animationIdRef.current);
                                animationIdRef.current = null;
                            }
                            window.removeEventListener('resize', updatePlacement);
                            if (renderer) {
                                try {
                                    const canvas = renderer.gl.canvas;
                                    const loseContextExt = renderer.gl.getExtension('WEBGL_lose_context');
                                    if (loseContextExt) {
                                        loseContextExt.loseContext();
                                    }
                                    if (canvas && canvas.parentNode) {
                                        canvas.parentNode.removeChild(canvas);
                                    }
                                } catch (error) {
                                    console.warn('Error during WebGL cleanup:', error);
                                }
                            }
                            rendererRef.current = null;
                            uniformsRef.current = null;
                            meshRef.current = null;
                        }
                    })["LightRaysBackground.useEffect.initializeWebGL"];
                }
            }["LightRaysBackground.useEffect.initializeWebGL"];
            initializeWebGL();
            return ({
                "LightRaysBackground.useEffect": ()=>{
                    if (cleanupFunctionRef.current) {
                        cleanupFunctionRef.current();
                        cleanupFunctionRef.current = null;
                    }
                }
            })["LightRaysBackground.useEffect"];
        }
    }["LightRaysBackground.useEffect"], [
        isVisible,
        raysOrigin,
        raysColor,
        raysSpeed,
        lightSpread,
        rayLength,
        pulsating,
        fadeDistance,
        saturation,
        followMouse,
        mouseInfluence,
        noiseAmount,
        distortion
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LightRaysBackground.useEffect": ()=>{
            if (!uniformsRef.current || !containerRef.current || !rendererRef.current) return;
            const u = uniformsRef.current;
            const renderer = rendererRef.current;
            u.raysColor.value = hexToRgb(raysColor);
            u.raysSpeed.value = raysSpeed;
            u.lightSpread.value = lightSpread;
            u.rayLength.value = rayLength;
            u.pulsating.value = pulsating ? 1.0 : 0.0;
            u.fadeDistance.value = fadeDistance;
            u.saturation.value = saturation;
            u.mouseInfluence.value = mouseInfluence;
            u.noiseAmount.value = noiseAmount;
            u.distortion.value = distortion;
            // Batch layout reads in requestAnimationFrame to avoid forced reflows
            requestAnimationFrame({
                "LightRaysBackground.useEffect": ()=>{
                    if (!containerRef.current || !renderer) return;
                    const { clientWidth: wCSS, clientHeight: hCSS } = containerRef.current;
                    const dpr = renderer.dpr;
                    const { anchor, dir } = getAnchorAndDir(raysOrigin, wCSS * dpr, hCSS * dpr);
                    u.rayPos.value = anchor;
                    u.rayDir.value = dir;
                }
            }["LightRaysBackground.useEffect"]);
        }
    }["LightRaysBackground.useEffect"], [
        raysColor,
        raysSpeed,
        lightSpread,
        raysOrigin,
        rayLength,
        pulsating,
        fadeDistance,
        saturation,
        mouseInfluence,
        noiseAmount,
        distortion
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LightRaysBackground.useEffect": ()=>{
            const handleMouseMove = {
                "LightRaysBackground.useEffect.handleMouseMove": (e)=>{
                    if (!containerRef.current || !rendererRef.current) return;
                    // Batch layout read in requestAnimationFrame to avoid forced reflows
                    requestAnimationFrame({
                        "LightRaysBackground.useEffect.handleMouseMove": ()=>{
                            if (!containerRef.current) return;
                            const rect = containerRef.current.getBoundingClientRect();
                            const x = (e.clientX - rect.left) / rect.width;
                            const y = (e.clientY - rect.top) / rect.height;
                            mouseRef.current = {
                                x,
                                y
                            };
                        }
                    }["LightRaysBackground.useEffect.handleMouseMove"]);
                }
            }["LightRaysBackground.useEffect.handleMouseMove"];
            if (followMouse) {
                window.addEventListener('mousemove', handleMouseMove);
                return ({
                    "LightRaysBackground.useEffect": ()=>window.removeEventListener('mousemove', handleMouseMove)
                })["LightRaysBackground.useEffect"];
            }
        }
    }["LightRaysBackground.useEffect"], [
        followMouse
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `light-rays-background ${className}`.trim()
    }, void 0, false, {
        fileName: "[project]/src/components/LightRaysBackground.jsx",
        lineNumber: 406,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LightRaysBackground, "gkxaG+awg9r85Ws+gbq3bog+yME=");
_c = LightRaysBackground;
const __TURBOPACK__default__export__ = LightRaysBackground;
var _c;
__turbopack_context__.k.register(_c, "LightRaysBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/page-components/NotFoundPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LightRaysBackground$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LightRaysBackground.jsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const NotFoundPage = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "not-found-section",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LightRaysBackground$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    raysOrigin: "top-center",
                    raysColor: "#a8c0ff",
                    raysSpeed: 0.8,
                    lightSpread: 1.2,
                    pulsating: true,
                    followMouse: true,
                    mouseInfluence: 0.15
                }, void 0, false, {
                    fileName: "[project]/src/page-components/NotFoundPage.jsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "not-found-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "not-found-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glitch-wrapper",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glitch",
                                    "data-text": "404",
                                    children: "404"
                                }, void 0, false, {
                                    fileName: "[project]/src/page-components/NotFoundPage.jsx",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/page-components/NotFoundPage.jsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "not-found-title",
                                children: "Page Not Found"
                            }, void 0, false, {
                                fileName: "[project]/src/page-components/NotFoundPage.jsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "not-found-description",
                                children: "Oops! The page you're looking for seems to have vanished into the digital void. It might have been moved, deleted, or perhaps it never existed in the first place."
                            }, void 0, false, {
                                fileName: "[project]/src/page-components/NotFoundPage.jsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "not-found-subdescription",
                                children: "Don't worry though - we're here to help you get back on track. Let's take you home where you can explore our services, read our blog, or get in touch with us."
                            }, void 0, false, {
                                fileName: "[project]/src/page-components/NotFoundPage.jsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "not-found-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "btn btn-primary btn-home",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiHome"], {
                                                style: {
                                                    marginRight: '8px'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/page-components/NotFoundPage.jsx",
                                                lineNumber: 46,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Go to Homepage"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/page-components/NotFoundPage.jsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/services",
                                        className: "btn btn-secondary",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiArrowLeft"], {
                                                style: {
                                                    marginRight: '8px'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/page-components/NotFoundPage.jsx",
                                                lineNumber: 51,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Browse Services"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/page-components/NotFoundPage.jsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/page-components/NotFoundPage.jsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "not-found-links",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Or try these popular pages:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/page-components/NotFoundPage.jsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "quick-links",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about",
                                                children: "About Us"
                                            }, void 0, false, {
                                                fileName: "[project]/src/page-components/NotFoundPage.jsx",
                                                lineNumber: 59,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/blog",
                                                children: "Blog"
                                            }, void 0, false, {
                                                fileName: "[project]/src/page-components/NotFoundPage.jsx",
                                                lineNumber: 60,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                children: "Contact"
                                            }, void 0, false, {
                                                fileName: "[project]/src/page-components/NotFoundPage.jsx",
                                                lineNumber: 61,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/page-components/NotFoundPage.jsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/page-components/NotFoundPage.jsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/page-components/NotFoundPage.jsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/page-components/NotFoundPage.jsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/page-components/NotFoundPage.jsx",
            lineNumber: 13,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
_c = NotFoundPage;
const __TURBOPACK__default__export__ = NotFoundPage;
var _c;
__turbopack_context__.k.register(_c, "NotFoundPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_11aea389._.js.map