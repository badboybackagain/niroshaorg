module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/components/Logo.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const Logo = ({ size = 'default', className = '' })=>{
    const [imageError, setImageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Size presets for different use cases
    const sizes = {
        small: {
            width: 50,
            height: 50,
            logoName: 'logo-small'
        },
        default: {
            width: 60,
            height: 60,
            logoName: 'logo'
        },
        large: {
            width: 80,
            height: 80,
            logoName: 'logo-large'
        },
        xlarge: {
            width: 100,
            height: 100,
            logoName: 'logo-xlarge'
        }
    };
    const config = sizes[size] || sizes.default;
    const logoName = config.logoName;
    // If image fails to load, show text fallback
    if (imageError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: `logo-link logo-text-fallback ${className}`,
            "aria-label": "Team Nirosha Home",
            suppressHydrationWarning: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "logo-text",
                children: "Nirosha"
            }, void 0, false, {
                fileName: "[project]/src/components/Logo.jsx",
                lineNumber: 45,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Logo.jsx",
            lineNumber: 39,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Determine CSS class based on size
    const sizeClass = size === 'small' ? 'logo-small' : size === 'large' ? 'logo-large' : size === 'xlarge' ? 'logo-xlarge' : 'logo';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: "/",
        className: `logo-link logo-with-text ${className}`,
        "aria-label": "Team Nirosha Home",
        suppressHydrationWarning: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    srcSet: `/${logoName}.webp 1x, /${logoName}@2x.webp 2x`,
                    type: "image/webp"
                }, void 0, false, {
                    fileName: "[project]/src/components/Logo.jsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    srcSet: `/${logoName}.png 1x, /${logoName}@2x.png 2x`,
                    type: "image/png"
                }, void 0, false, {
                    fileName: "[project]/src/components/Logo.jsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: `/${logoName}.png`,
                    srcSet: `/${logoName}.png 1x, /${logoName}@2x.png 2x`,
                    alt: "Team Nirosha Logo",
                    width: config.width,
                    height: config.height,
                    loading: "eager",
                    fetchPriority: "high",
                    className: "logo-img",
                    onError: ()=>setImageError(true),
                    style: {
                        width: `${config.width}px`,
                        height: `${config.height}px`,
                        maxWidth: '100%',
                        display: 'block',
                        objectFit: 'contain'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Logo.jsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Logo.jsx",
            lineNumber: 62,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Logo.jsx",
        lineNumber: 56,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Logo;
}),
"[project]/src/data/servicesData.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "servicesData",
    ()=>servicesData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.esm.js [app-ssr] (ecmascript)");
;
;
;
const servicesData = {
    'web-development': {
        slug: 'web-development',
        title: 'Web Development',
        heroDescription: 'Custom websites and web applications that drive results. From simple business sites to complex web platforms, we build solutions that work.',
        description: [
            'In today\'s digital-first world, your website is often the first impression customers have of your business. A well-designed, fast, and functional website can be the difference between a visitor and a customer.',
            'At Team Nirosha, we specialize in creating custom web solutions that not only look great but perform exceptionally. Whether you need a simple business website, a complex web application, or an e-commerce platform, we have the expertise to bring your vision to life.',
            'Our web development services combine cutting-edge technology with proven strategies to deliver websites that convert visitors into customers and drive business growth.'
        ],
        benefits: [
            'Increased online visibility and brand presence',
            'Improved user experience leading to higher conversions',
            'Mobile-responsive design for all devices',
            'Fast loading times for better SEO rankings',
            'Secure and scalable architecture',
            'Ongoing support and maintenance'
        ],
        features: [
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiCode"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 44,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Custom Development',
                description: 'Tailored solutions built specifically for your business needs and goals'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiGlobe"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 49,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'WordPress Development',
                description: 'Powerful, flexible WordPress sites with custom themes and plugins'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiShoppingCart"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 54,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'E-commerce Solutions',
                description: 'Full-featured online stores with payment integration and inventory management'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiMonitor"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 59,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Responsive Design',
                description: 'Mobile-first approach ensuring perfect display on all devices'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiZap"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 64,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Performance Optimization',
                description: 'Lightning-fast load times for better user experience and SEO'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiShield"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 69,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Security Hardening',
                description: 'Enterprise-grade security to protect your website and customer data'
            }
        ],
        process: [
            {
                title: 'Discovery & Planning',
                description: 'We analyze your business goals, target audience, and requirements to create a comprehensive development plan'
            },
            {
                title: 'Design & Prototyping',
                description: 'Create wireframes and designs that align with your brand and user experience goals'
            },
            {
                title: 'Development & Testing',
                description: 'Build your website using best practices, with rigorous testing at every stage'
            },
            {
                title: 'Launch & Optimization',
                description: 'Deploy your site and optimize for performance, SEO, and conversions'
            },
            {
                title: 'Ongoing Support',
                description: 'Continuous maintenance, updates, and improvements to keep your site running smoothly'
            }
        ],
        seoKeywords: 'web development, custom website development, WordPress development, web application development, responsive web design, e-commerce development',
        faqs: [
            {
                question: 'How long does it take to develop a website?',
                answer: 'The timeline depends on the complexity and scope of your project. A simple business website typically takes 2-4 weeks, while a custom web application or e-commerce site can take 6-12 weeks. We provide a detailed timeline during our initial consultation based on your specific requirements.'
            },
            {
                question: 'Do you provide website maintenance after launch?',
                answer: 'Yes, we offer comprehensive website maintenance and support services. This includes regular updates, security patches, backups, performance monitoring, and technical support. We have flexible maintenance plans to suit your needs and budget.'
            },
            {
                question: 'Will my website be mobile-responsive?',
                answer: 'Absolutely! All websites we develop are fully responsive and mobile-friendly. We use a mobile-first approach, ensuring your site looks and functions perfectly on all devices including smartphones, tablets, and desktops.'
            },
            {
                question: 'What technologies do you use for web development?',
                answer: 'We work with a wide range of technologies including WordPress, React, Node.js, PHP, Python, and more. We choose the best technology stack based on your project requirements, scalability needs, and budget. We also specialize in headless CMS solutions and modern frameworks.'
            },
            {
                question: 'Can you help with website redesign?',
                answer: 'Yes, we specialize in website redesigns. We can modernize your existing website, improve its design, enhance user experience, optimize for SEO, and upgrade its functionality while maintaining your brand identity.'
            },
            {
                question: 'Do you provide hosting services?',
                answer: 'We can help you set up hosting on reliable cloud platforms or recommend trusted hosting providers. We also offer cloud hosting and server management services for businesses that need more control and scalability.'
            }
        ]
    },
    'branding-design': {
        slug: 'branding-design',
        title: 'Branding & Design',
        heroDescription: 'Create a memorable brand identity that resonates with your audience and sets you apart from competitors.',
        description: [
            'Your brand is more than just a logo - it\'s the complete visual and emotional experience your customers have with your business. A strong brand identity builds trust, creates recognition, and drives customer loyalty.',
            'Our branding and design services help you create a cohesive visual identity that tells your story and connects with your target audience. From logo design to complete brand guidelines, we ensure every touchpoint reflects your brand values.',
            'We combine creative design with strategic thinking to develop brands that not only look great but also drive business results.'
        ],
        benefits: [
            'Professional brand identity that stands out',
            'Consistent visual language across all touchpoints',
            'Increased brand recognition and recall',
            'Better customer connection and loyalty',
            'Competitive advantage in your market',
            'Complete brand guidelines for future use'
        ],
        features: [
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiImage"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 143,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Logo Design',
                description: 'Unique, memorable logos that capture your brand essence'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiLayers"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 148,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Brand Identity',
                description: 'Complete visual identity including colors, typography, and style guides'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiMonitor"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 153,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'UI/UX Design',
                description: 'User-centered design that creates exceptional digital experiences'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiFileText"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 158,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Graphic Design',
                description: 'Marketing materials, social media graphics, and promotional designs'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiSettings"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 163,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Print Design',
                description: 'Business cards, brochures, and other print materials'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiCheckCircle"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 168,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Brand Guidelines',
                description: 'Comprehensive style guide to maintain brand consistency'
            }
        ],
        process: [
            {
                title: 'Brand Research',
                description: 'Understand your business, market, competitors, and target audience'
            },
            {
                title: 'Concept Development',
                description: 'Create multiple design concepts that align with your brand vision'
            },
            {
                title: 'Refinement',
                description: 'Refine selected concepts based on feedback and brand strategy'
            },
            {
                title: 'Finalization',
                description: 'Complete the final brand identity with all required assets'
            },
            {
                title: 'Brand Guidelines',
                description: 'Deliver comprehensive guidelines for consistent brand application'
            }
        ],
        seoKeywords: 'logo design, brand identity design, UI UX design, graphic design services, branding agency, visual identity design',
        faqs: [
            {
                question: 'How many logo design concepts do you provide?',
                answer: 'We typically provide 3-5 initial logo concepts based on your brand requirements. After your feedback, we refine the selected concept through multiple revision rounds until you\'re completely satisfied with the final design.'
            },
            {
                question: 'What files will I receive with my logo design?',
                answer: 'You\'ll receive your logo in multiple formats including vector files (AI, EPS, SVG), raster files (PNG, JPG) in various sizes, and formats suitable for both print and digital use. We also provide a complete brand guidelines document.'
            },
            {
                question: 'Can you design a complete brand identity package?',
                answer: 'Yes! We offer comprehensive brand identity packages that include logo design, color palette, typography, brand guidelines, business cards, letterheads, and other marketing materials. This ensures consistent branding across all touchpoints.'
            },
            {
                question: 'How long does the branding process take?',
                answer: 'A complete branding project typically takes 4-8 weeks, depending on the scope. Logo design alone usually takes 2-3 weeks. We work closely with you throughout the process to ensure the final brand identity perfectly represents your business.'
            },
            {
                question: 'Do you incorporate numerology and astrology in logo design?',
                answer: 'Yes, we offer specialized logo design services that incorporate numerology and astrology principles. This unique approach can create deeper meaning and cosmic alignment in your brand identity, making it more resonant with your target audience.'
            },
            {
                question: 'Can you redesign an existing logo?',
                answer: 'Absolutely! We can modernize your existing logo while maintaining its core identity, or create a completely new design that better reflects your current brand values and market position.'
            }
        ]
    },
    'seo-services': {
        slug: 'seo-services',
        title: 'SEO Services',
        heroDescription: 'Improve your search engine rankings and drive organic traffic with our comprehensive SEO strategies.',
        description: [
            'Search Engine Optimization (SEO) is the foundation of online visibility. When done right, SEO brings qualified visitors to your website who are actively searching for what you offer.',
            'Our SEO services combine technical expertise with content strategy to improve your search rankings, increase organic traffic, and generate more leads and sales. We don\'t just optimize your website - we build a sustainable SEO strategy that delivers long-term results.',
            'With years of experience and proven methodologies, we help businesses rank higher on Google and other search engines, driving measurable growth in organic traffic and conversions.'
        ],
        benefits: [
            'Higher search engine rankings',
            'Increased organic website traffic',
            'Better visibility to potential customers',
            'Long-term, sustainable results',
            'Improved user experience',
            'Higher conversion rates from qualified traffic'
        ],
        features: [
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiCode"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 242,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Technical SEO',
                description: 'Optimize site structure, speed, mobile-friendliness, and crawlability'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiFileText"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 247,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'On-Page Optimization',
                description: 'Optimize content, meta tags, headings, and internal linking structure'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiTrendingUp"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 252,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Link Building',
                description: 'Build high-quality backlinks to improve domain authority and rankings'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiSearch"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 257,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Keyword Research',
                description: 'Identify high-value keywords that drive qualified traffic'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiBarChart"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 262,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'SEO Audits',
                description: 'Comprehensive analysis of your current SEO performance and opportunities'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiTarget"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 267,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Content Optimization',
                description: 'Optimize existing content and create SEO-friendly new content'
            }
        ],
        process: [
            {
                title: 'SEO Audit',
                description: 'Comprehensive analysis of your current SEO performance, technical issues, and opportunities'
            },
            {
                title: 'Strategy Development',
                description: 'Create a customized SEO strategy based on your goals and competitive landscape'
            },
            {
                title: 'Implementation',
                description: 'Execute technical fixes, on-page optimizations, and content improvements'
            },
            {
                title: 'Link Building',
                description: 'Build high-quality backlinks through outreach and content marketing'
            },
            {
                title: 'Monitoring & Reporting',
                description: 'Track rankings, traffic, and conversions with regular reporting and adjustments'
            }
        ],
        seoKeywords: 'SEO services, search engine optimization, technical SEO, on-page SEO, link building, SEO audit, keyword research',
        faqs: [
            {
                question: 'How long does it take to see SEO results?',
                answer: 'SEO is a long-term strategy, and results typically start appearing within 3-6 months. However, this varies based on your industry, competition, and current website status. We provide monthly reports to track progress and improvements.'
            },
            {
                question: 'Will you guarantee first page rankings?',
                answer: 'While we cannot guarantee specific rankings (as Google\'s algorithm is constantly evolving), we guarantee our work quality and commitment to improving your search visibility. We use proven SEO strategies and provide transparent reporting on all improvements.'
            },
            {
                question: 'What is included in your SEO services?',
                answer: 'Our SEO services include technical SEO audit, on-page optimization, keyword research, content optimization, link building, local SEO (if applicable), monthly reporting, and ongoing strategy adjustments based on performance data.'
            },
            {
                question: 'Do you work with local businesses?',
                answer: 'Yes! We have specialized local SEO services for businesses targeting local customers. This includes Google Business Profile optimization, local citations, NAP consistency, and location-based content strategies.'
            },
            {
                question: 'How often will you update my website for SEO?',
                answer: 'We continuously monitor and optimize your website. Updates are made as needed based on performance data, algorithm changes, and new opportunities. You\'ll receive monthly reports detailing all changes and improvements.'
            },
            {
                question: 'Can you help with existing websites?',
                answer: 'Absolutely! We start with a comprehensive SEO audit of your existing website to identify issues and opportunities. Then we create a customized optimization plan to improve your search rankings and organic traffic.'
            }
        ]
    },
    'local-seo': {
        slug: 'local-seo',
        title: 'Local SEO',
        heroDescription: 'Dominate local search results and attract customers in your area with proven local SEO strategies.',
        description: [
            'For local businesses, appearing in local search results is crucial. When someone searches for services "near me" or in your city, you want to be at the top of those results.',
            'Local SEO helps your business get found by customers in your geographic area. We optimize your Google Business Profile, build local citations, manage reviews, and create location-specific content to improve your local search visibility.',
            'Our local SEO services are designed specifically for businesses that serve customers in specific locations, helping you compete effectively in local markets and drive foot traffic and phone calls.'
        ],
        benefits: [
            'Appear in "near me" searches',
            'More visibility in Google Maps',
            'Increased local website traffic',
            'More phone calls and store visits',
            'Better online reputation',
            'Competitive advantage in local market'
        ],
        features: [
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiMapPin"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 341,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Google Business Profile',
                description: 'Optimize and manage your GMB listing for maximum visibility'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiFileText"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 346,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Local Citations',
                description: 'Build consistent NAP (Name, Address, Phone) citations across directories'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiTrendingUp"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 351,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Local Link Building',
                description: 'Acquire local backlinks from relevant local websites and directories'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiCheckCircle"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 356,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'NAP Consistency',
                description: 'Ensure consistent business information across all platforms'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiUsers"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 361,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Review Management',
                description: 'Strategies to get more positive reviews and manage your online reputation'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiTarget"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 366,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Local Content Strategy',
                description: 'Create location-specific content that ranks for local keywords'
            }
        ],
        process: [
            {
                title: 'Local SEO Audit',
                description: 'Analyze your current local presence, citations, and GMB optimization'
            },
            {
                title: 'GMB Optimization',
                description: 'Optimize your Google Business Profile with complete information and photos'
            },
            {
                title: 'Citation Building',
                description: 'Build consistent citations across major local directories and platforms'
            },
            {
                title: 'Review Strategy',
                description: 'Implement strategies to generate positive reviews and manage reputation'
            },
            {
                title: 'Local Content & Links',
                description: 'Create local content and build local backlinks to improve rankings'
            }
        ],
        seoKeywords: 'local SEO, Google Business Profile optimization, local search optimization, local citations, NAP consistency, local SEO services',
        faqs: [
            {
                question: 'What is local SEO and why do I need it?',
                answer: 'Local SEO helps your business appear in local search results when people search for services in your area. It\'s essential for businesses that serve customers in specific locations, as it helps you get found by nearby customers searching for your services.'
            },
            {
                question: 'How do you optimize my Google Business Profile?',
                answer: 'We optimize your Google Business Profile by ensuring complete and accurate information, adding high-quality photos, managing categories, optimizing descriptions, setting up attributes, and encouraging customer reviews. We also ensure your profile is verified and active.'
            },
            {
                question: 'What are local citations and why are they important?',
                answer: 'Local citations are mentions of your business name, address, and phone number (NAP) on other websites. Consistent citations across directories and local sites help Google verify your business information and improve your local search rankings.'
            },
            {
                question: 'How long does it take to see local SEO results?',
                answer: 'Local SEO results typically start appearing within 2-4 months, though this varies based on competition and your current local presence. We provide monthly reports tracking your local search visibility and rankings.'
            },
            {
                question: 'Do you help with Google reviews?',
                answer: 'Yes! We help you get more positive Google reviews through strategic approaches and provide review management services. We also help you respond to reviews professionally to maintain a positive online reputation.'
            },
            {
                question: 'Can local SEO help my business if I have multiple locations?',
                answer: 'Absolutely! We can optimize multiple Google Business Profiles for each location and create location-specific content and landing pages. This helps each location rank in its respective local area.'
            }
        ]
    },
    'social-media-marketing': {
        slug: 'social-media-marketing',
        title: 'Social Media Marketing',
        heroDescription: 'Build your brand, engage your audience, and drive sales through strategic social media marketing.',
        description: [
            'Social media has become an essential channel for businesses to connect with customers, build brand awareness, and drive sales. With billions of active users across platforms, social media offers unprecedented opportunities to reach and engage your target audience.',
            'Our social media marketing services help you build a strong social presence, create engaging content, and run effective paid campaigns that deliver real results. We develop strategies tailored to your business goals and execute them with consistency and creativity.',
            'From content creation to community management, from organic growth to paid advertising, we handle all aspects of your social media marketing so you can focus on running your business.'
        ],
        benefits: [
            'Increased brand awareness and visibility',
            'Better customer engagement and relationships',
            'More website traffic and leads',
            'Higher conversion rates',
            'Improved customer service',
            'Competitive market insights'
        ],
        features: [
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiTarget"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 440,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Social Media Strategy',
                description: 'Comprehensive strategy aligned with your business goals and target audience'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiFileText"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 445,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Content Creation',
                description: 'Engaging, shareable content that resonates with your audience'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiShare2"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 450,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Social Media Management',
                description: 'Daily posting, engagement, and community management across platforms'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiTrendingUp"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 455,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Paid Social Advertising',
                description: 'Targeted ad campaigns on Facebook, Instagram, LinkedIn, and more'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiUsers"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 460,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Community Management',
                description: 'Respond to comments, messages, and build relationships with followers'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiBarChart"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 465,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Analytics & Reporting',
                description: 'Track performance and optimize strategies based on data insights'
            }
        ],
        process: [
            {
                title: 'Strategy Development',
                description: 'Define goals, target audience, platform selection, and content themes'
            },
            {
                title: 'Content Planning',
                description: 'Create content calendar with mix of promotional, educational, and engaging posts'
            },
            {
                title: 'Content Creation',
                description: 'Design graphics, write captions, and create videos that align with your brand'
            },
            {
                title: 'Publishing & Engagement',
                description: 'Schedule and publish content, engage with audience, and manage community'
            },
            {
                title: 'Optimization',
                description: 'Analyze performance, test different strategies, and continuously improve results'
            }
        ],
        seoKeywords: 'social media marketing, SMM services, social media management, Facebook marketing, Instagram marketing, social media advertising',
        faqs: [
            {
                question: 'Which social media platforms should my business be on?',
                answer: 'The best platforms depend on your target audience and business type. We analyze your business, audience demographics, and goals to recommend the most effective platforms. Common choices include Facebook, Instagram, LinkedIn, Twitter, and TikTok.'
            },
            {
                question: 'How often should I post on social media?',
                answer: 'Posting frequency varies by platform and audience. Generally, we recommend 3-5 posts per week on Facebook, daily posts on Instagram, and 1-2 posts per day on Twitter. We create a customized content calendar based on your audience and goals.'
            },
            {
                question: 'Do you create all the content for social media?',
                answer: 'Yes! We handle complete content creation including graphics, captions, videos, and other visual content. We ensure all content aligns with your brand voice and engages your target audience effectively.'
            },
            {
                question: 'What is included in social media management?',
                answer: 'Our social media management includes content creation, posting, community management (responding to comments and messages), engagement strategies, performance tracking, and monthly reporting. We also handle paid advertising campaigns if needed.'
            },
            {
                question: 'How do you measure social media success?',
                answer: 'We track key metrics including follower growth, engagement rates, reach, website traffic from social media, lead generation, and conversions. We provide monthly reports showing performance and ROI.'
            },
            {
                question: 'Can you help with paid social media advertising?',
                answer: 'Yes! We create and manage paid advertising campaigns on Facebook, Instagram, LinkedIn, and other platforms. We optimize campaigns for your specific goals whether that\'s brand awareness, lead generation, or sales.'
            }
        ]
    },
    'digital-marketing': {
        slug: 'digital-marketing',
        title: 'Digital Marketing',
        heroDescription: 'Comprehensive digital marketing strategies that drive traffic, leads, and revenue for your business.',
        description: [
            'Digital marketing encompasses all online marketing efforts to promote your business, attract customers, and drive growth. In today\'s competitive landscape, a well-executed digital marketing strategy is essential for business success.',
            'Our digital marketing services combine multiple channels and tactics - from PPC advertising to email marketing, from content marketing to conversion optimization - to create integrated campaigns that deliver measurable results.',
            'We focus on data-driven strategies that maximize ROI, using analytics and testing to continuously improve performance and drive sustainable business growth.'
        ],
        benefits: [
            'Increased online visibility and traffic',
            'More qualified leads and conversions',
            'Better ROI on marketing spend',
            'Data-driven decision making',
            'Scalable marketing strategies',
            'Competitive advantage in digital space'
        ],
        features: [
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiTarget"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 539,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'PPC Advertising',
                description: 'Google Ads, Facebook Ads, and other paid campaigns that drive results'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiFileText"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 544,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Email Marketing',
                description: 'Automated email campaigns that nurture leads and drive sales'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiTrendingUp"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 549,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Content Marketing',
                description: 'Strategic content that attracts, engages, and converts your audience'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiZap"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 554,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Marketing Automation',
                description: 'Automate marketing workflows to nurture leads and improve efficiency'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiBarChart"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 559,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Conversion Optimization',
                description: 'Improve website and campaign performance to maximize conversions'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiUsers"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 564,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Analytics & Reporting',
                description: 'Comprehensive tracking and reporting to measure and improve ROI'
            }
        ],
        process: [
            {
                title: 'Strategy & Planning',
                description: 'Analyze your business, goals, and market to create comprehensive digital marketing strategy'
            },
            {
                title: 'Channel Setup',
                description: 'Set up and optimize advertising accounts, email platforms, and analytics'
            },
            {
                title: 'Campaign Execution',
                description: 'Launch and manage campaigns across multiple digital channels'
            },
            {
                title: 'Optimization',
                description: 'Continuously test, analyze, and optimize campaigns for better performance'
            },
            {
                title: 'Reporting & Growth',
                description: 'Regular reporting and strategic adjustments to drive continuous growth'
            }
        ],
        seoKeywords: 'digital marketing services, PPC advertising, email marketing, content marketing, marketing automation, conversion rate optimization',
        faqs: [
            {
                question: 'What is the difference between SEO and PPC?',
                answer: 'SEO (Search Engine Optimization) is organic, long-term visibility in search results, while PPC (Pay-Per-Click) is paid advertising that appears immediately. Both are valuable - SEO provides sustainable long-term results, while PPC delivers immediate traffic and leads.'
            },
            {
                question: 'How much should I budget for digital marketing?',
                answer: 'Digital marketing budgets vary based on your goals, industry, and competition. We work with businesses of all sizes and create customized strategies that fit your budget. Typically, businesses invest 5-15% of revenue in marketing.'
            },
            {
                question: 'What ROI can I expect from digital marketing?',
                answer: 'ROI varies by industry and strategy, but well-executed digital marketing typically delivers 3-5x return on investment. We track all campaigns and provide detailed ROI reporting to ensure you\'re getting value from your marketing spend.'
            },
            {
                question: 'Do you handle email marketing campaigns?',
                answer: 'Yes! We create and manage email marketing campaigns including newsletter design, automated email sequences, segmentation, A/B testing, and performance tracking. Email marketing is one of the most cost-effective digital marketing channels.'
            },
            {
                question: 'What is marketing automation?',
                answer: 'Marketing automation uses software to automate repetitive marketing tasks like email campaigns, social media posting, lead nurturing, and customer segmentation. It helps you scale your marketing efforts and improve efficiency.'
            },
            {
                question: 'How do you track and measure digital marketing results?',
                answer: 'We use comprehensive analytics tools to track website traffic, conversions, lead generation, campaign performance, and ROI. You\'ll receive regular reports showing exactly how your marketing investments are performing.'
            }
        ]
    },
    'content-services': {
        slug: 'content-services',
        title: 'Content Services',
        heroDescription: 'High-quality content that engages your audience, builds trust, and drives conversions.',
        description: [
            'Content is the foundation of modern marketing. Great content educates, entertains, and persuades - turning visitors into customers and customers into advocates.',
            'Our content services help you create compelling content that resonates with your audience, improves SEO rankings, and drives business results. From blog posts to videos, from copywriting to infographics, we create content that works.',
            'We combine creative writing with strategic thinking to produce content that not only looks great but also achieves your business objectives - whether that\'s generating leads, building brand awareness, or driving sales.'
        ],
        benefits: [
            'Improved SEO rankings',
            'Increased website traffic',
            'Better customer engagement',
            'Higher conversion rates',
            'Established thought leadership',
            'Cost-effective marketing'
        ],
        features: [
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiFileText"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 638,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Content Writing',
                description: 'Blog posts, articles, and web copy that engage and convert'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiCode"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 643,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Copywriting',
                description: 'Persuasive copy for landing pages, ads, and marketing materials'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiTrendingUp"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 648,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Blog Management',
                description: 'Complete blog strategy, writing, and management services'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiImage"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 653,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Video Production',
                description: 'Professional video content for marketing and engagement'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiUsers"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 658,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Photography',
                description: 'Professional photography for products, events, and brand content'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiTarget"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 663,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Content Strategy',
                description: 'Strategic content planning aligned with your business goals'
            }
        ],
        process: [
            {
                title: 'Content Strategy',
                description: 'Develop content strategy based on your goals, audience, and SEO opportunities'
            },
            {
                title: 'Content Planning',
                description: 'Create editorial calendar and content briefs for all content pieces'
            },
            {
                title: 'Content Creation',
                description: 'Write, design, and produce high-quality content across formats'
            },
            {
                title: 'Optimization',
                description: 'Optimize content for SEO, readability, and conversion'
            },
            {
                title: 'Distribution & Promotion',
                description: 'Publish and promote content across channels for maximum reach'
            }
        ],
        seoKeywords: 'content writing services, copywriting services, blog writing, video production, content marketing, content strategy',
        faqs: [
            {
                question: 'What types of content do you create?',
                answer: 'We create various types of content including blog posts, articles, web copy, social media content, email newsletters, video scripts, infographics, case studies, whitepapers, and more. We tailor content to your specific needs and goals.'
            },
            {
                question: 'How do you ensure content quality and SEO optimization?',
                answer: 'Our content is written by experienced writers who understand both SEO best practices and engaging writing. We research keywords, optimize for search engines, ensure readability, and create content that provides real value to your audience.'
            },
            {
                question: 'How long does it take to create content?',
                answer: 'Content creation timelines vary by type and complexity. A blog post typically takes 2-3 days, while a comprehensive article or video might take a week. We provide timelines during planning and can accommodate urgent requests when needed.'
            },
            {
                question: 'Do you provide content strategy and planning?',
                answer: 'Yes! We develop comprehensive content strategies based on your business goals, target audience, and SEO opportunities. This includes content calendars, topic planning, and distribution strategies to maximize your content\'s impact.'
            },
            {
                question: 'Can you help with video production?',
                answer: 'Yes! We offer video production services including planning, scripting, filming, editing, and post-production. We create professional videos for marketing, tutorials, testimonials, and more.'
            },
            {
                question: 'How do you ensure content aligns with my brand voice?',
                answer: 'We start by understanding your brand voice, tone, and messaging guidelines. We create a brand style guide and ensure all content consistently reflects your brand personality and values.'
            }
        ]
    },
    'ecommerce-solutions': {
        slug: 'ecommerce-solutions',
        title: 'E-commerce Solutions',
        heroDescription: 'Complete e-commerce platforms that drive online sales and grow your business.',
        description: [
            'E-commerce has become essential for businesses of all sizes. A well-designed, user-friendly online store can significantly expand your reach and increase sales.',
            'Our e-commerce solutions include everything from store setup to payment integration, from inventory management to marketing. We build online stores that not only look great but also convert visitors into customers.',
            'Whether you\'re starting a new online store or optimizing an existing one, we provide the expertise and support you need to succeed in the competitive e-commerce landscape.'
        ],
        benefits: [
            '24/7 online sales capability',
            'Expanded market reach',
            'Reduced operational costs',
            'Better customer experience',
            'Scalable business growth',
            'Data-driven insights'
        ],
        features: [
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiShoppingCart"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 737,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'E-commerce Development',
                description: 'Custom online stores built on WooCommerce, Shopify, or custom platforms'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiSettings"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 742,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Shopping Cart Integration',
                description: 'Seamless shopping cart and checkout experience'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiZap"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 747,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Payment Gateway Setup',
                description: 'Secure payment processing with multiple payment options'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiBarChart"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 752,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Inventory Management',
                description: 'Automated inventory tracking and management systems'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiTrendingUp"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 757,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'E-commerce SEO',
                description: 'Optimize product pages and store structure for search engines'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiTarget"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 762,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'E-commerce Marketing',
                description: 'Marketing strategies to drive traffic and increase sales'
            }
        ],
        process: [
            {
                title: 'Planning & Strategy',
                description: 'Define store structure, product catalog, and business requirements'
            },
            {
                title: 'Design & Development',
                description: 'Design user-friendly store interface and develop e-commerce platform'
            },
            {
                title: 'Integration & Setup',
                description: 'Set up payment gateways, shipping, inventory, and other integrations'
            },
            {
                title: 'Testing & Optimization',
                description: 'Test all functionality and optimize for performance and conversions'
            },
            {
                title: 'Launch & Support',
                description: 'Launch your store and provide ongoing support and optimization'
            }
        ],
        seoKeywords: 'e-commerce development, online store development, WooCommerce development, Shopify development, e-commerce solutions, online store setup',
        faqs: [
            {
                question: 'Which e-commerce platform is best for my business?',
                answer: 'The best platform depends on your business size, product catalog, budget, and specific needs. We work with WooCommerce, Shopify, Magento, and custom solutions. We help you choose the platform that best fits your requirements.'
            },
            {
                question: 'How long does it take to set up an e-commerce store?',
                answer: 'A basic e-commerce store typically takes 4-6 weeks, while a complex store with custom features can take 8-12 weeks. Timeline depends on product count, customizations, integrations, and design complexity.'
            },
            {
                question: 'What payment gateways do you integrate?',
                answer: 'We integrate with major payment gateways including Razorpay, Stripe, PayPal, PayU, and others. We can also set up multiple payment options including credit cards, UPI, net banking, and digital wallets based on your needs.'
            },
            {
                question: 'Do you handle inventory management?',
                answer: 'Yes! We set up inventory management systems that track stock levels, manage variants, handle low-stock alerts, and integrate with your operations. This helps prevent overselling and ensures accurate inventory tracking.'
            },
            {
                question: 'Can you help with e-commerce SEO?',
                answer: 'Absolutely! E-commerce SEO is crucial for online stores. We optimize product pages, category pages, site structure, and create SEO-friendly URLs. We also help with product descriptions, image optimization, and technical SEO.'
            },
            {
                question: 'Do you provide ongoing support for e-commerce stores?',
                answer: 'Yes! We offer ongoing support including updates, security patches, performance optimization, new feature additions, and technical support. We have flexible support plans to keep your store running smoothly.'
            }
        ]
    },
    'web-maintenance': {
        slug: 'web-maintenance',
        title: 'Web Maintenance & Support',
        heroDescription: 'Keep your website secure, fast, and up-to-date with our comprehensive maintenance services.',
        description: [
            'A website requires ongoing care to maintain performance, security, and functionality. Regular maintenance ensures your site stays fast, secure, and aligned with the latest web standards.',
            'Our web maintenance and support services take the hassle out of website management. We handle updates, backups, security monitoring, and performance optimization so you can focus on your business.',
            'With our maintenance plans, you get peace of mind knowing your website is in expert hands, with proactive monitoring and quick response times for any issues that arise.'
        ],
        benefits: [
            'Improved website security',
            'Better performance and speed',
            'Reduced downtime',
            'Regular backups and recovery',
            'Peace of mind',
            'Cost-effective maintenance'
        ],
        features: [
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiSettings"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 836,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Website Maintenance',
                description: 'Regular updates, content changes, and functionality improvements'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiShield"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 841,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Security Updates',
                description: 'Keep your site secure with regular security patches and monitoring'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiZap"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 846,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Performance Optimization',
                description: 'Continuous optimization for speed and performance improvements'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiCheckCircle"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 851,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Backup & Recovery',
                description: 'Automated backups and quick recovery in case of issues'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiUsers"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 856,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Technical Support',
                description: 'Quick response technical support for any website issues'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiFileText"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 861,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Content Updates',
                description: 'Regular content updates and website management'
            }
        ],
        process: [
            {
                title: 'Initial Assessment',
                description: 'Review your current website and identify maintenance needs'
            },
            {
                title: 'Maintenance Plan',
                description: 'Create customized maintenance plan based on your requirements'
            },
            {
                title: 'Regular Maintenance',
                description: 'Execute scheduled updates, backups, and optimizations'
            },
            {
                title: 'Monitoring',
                description: 'Monitor website performance, security, and uptime'
            },
            {
                title: 'Reporting',
                description: 'Regular reports on maintenance activities and website health'
            }
        ],
        seoKeywords: 'website maintenance, web maintenance services, website support, website updates, website security, website backup',
        faqs: [
            {
                question: 'What is included in website maintenance?',
                answer: 'Our maintenance services include regular updates (WordPress, plugins, themes), security monitoring and patches, performance optimization, regular backups, content updates, bug fixes, and technical support. We customize plans based on your needs.'
            },
            {
                question: 'How often do you update my website?',
                answer: 'Update frequency depends on your maintenance plan. We typically perform security updates immediately, plugin updates weekly, and major updates monthly. All updates are tested before deployment to ensure compatibility.'
            },
            {
                question: 'Do you provide website backups?',
                answer: 'Yes! We set up automated daily backups of your website and database. Backups are stored securely and can be restored quickly if needed. We also maintain backup retention policies based on your requirements.'
            },
            {
                question: 'What happens if my website goes down?',
                answer: 'We monitor your website uptime and respond immediately to any downtime issues. Our maintenance plans include quick response times (typically within 1-2 hours) to resolve issues and get your site back online.'
            },
            {
                question: 'Can you help with content updates?',
                answer: 'Yes! We can handle regular content updates including text changes, image updates, new page additions, blog post publishing, and other content modifications. This is included in most maintenance plans.'
            },
            {
                question: 'How much does website maintenance cost?',
                answer: 'Maintenance costs vary based on your website complexity and required services. We offer flexible plans starting from basic maintenance to comprehensive support. Contact us for a customized quote based on your needs.'
            }
        ]
    },
    'ui-ux-design': {
        slug: 'ui-ux-design',
        title: 'UI/UX Design',
        heroDescription: 'User-centered design that creates exceptional digital experiences and drives conversions.',
        description: [
            'Great design is more than aesthetics - it\'s about creating experiences that users love. UI/UX design focuses on understanding user needs and creating interfaces that are intuitive, engaging, and effective.',
            'Our UI/UX design services combine user research, design thinking, and creative execution to create digital experiences that not only look beautiful but also drive business results. We design with the user in mind, ensuring every interaction is smooth and purposeful.',
            'From wireframes to prototypes, from user testing to final designs, we follow a comprehensive design process that results in interfaces users love and businesses benefit from.'
        ],
        benefits: [
            'Improved user experience',
            'Higher conversion rates',
            'Reduced bounce rates',
            'Better user satisfaction',
            'Competitive advantage',
            'Data-driven design decisions'
        ],
        features: [
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiMonitor"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 935,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'User Interface Design',
                description: 'Beautiful, intuitive interfaces that align with your brand'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiUsers"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 940,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'User Experience Design',
                description: 'User-centered design that creates exceptional experiences'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiLayers"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 945,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Wireframing & Prototyping',
                description: 'Plan and test designs before development'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiSettings"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 950,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Design Systems',
                description: 'Create consistent design systems for scalable growth'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiCheckCircle"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 955,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Usability Testing',
                description: 'Test designs with real users to ensure effectiveness'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiBarChart"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 960,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Design Audit',
                description: 'Analyze and improve existing designs for better performance'
            }
        ],
        process: [
            {
                title: 'User Research',
                description: 'Understand your users, their needs, and pain points'
            },
            {
                title: 'Information Architecture',
                description: 'Structure content and functionality for optimal user flow'
            },
            {
                title: 'Wireframing',
                description: 'Create low-fidelity wireframes to plan layout and structure'
            },
            {
                title: 'Design & Prototyping',
                description: 'Design high-fidelity mockups and interactive prototypes'
            },
            {
                title: 'Testing & Refinement',
                description: 'Test with users and refine designs based on feedback'
            }
        ],
        seoKeywords: 'UI design, UX design, user interface design, user experience design, wireframing, prototyping, design services',
        faqs: [
            {
                question: 'What is the difference between UI and UX design?',
                answer: 'UI (User Interface) design focuses on the visual elements and aesthetics of a product, while UX (User Experience) design focuses on the overall user journey and how users interact with the product. Both work together to create great digital experiences.'
            },
            {
                question: 'How long does the UI/UX design process take?',
                answer: 'The design process typically takes 4-8 weeks depending on project scope. This includes research, wireframing, design, prototyping, and testing. Complex projects may take longer, and we provide timelines during initial planning.'
            },
            {
                question: 'Do you conduct user testing?',
                answer: 'Yes! User testing is an important part of our process. We conduct usability testing with real users to identify issues, validate design decisions, and ensure the final design meets user needs effectively.'
            },
            {
                question: 'What design tools do you use?',
                answer: 'We use industry-standard tools including Figma, Adobe XD, Sketch, and prototyping tools. We choose tools based on project requirements and ensure designs are delivered in formats compatible with development teams.'
            },
            {
                question: 'Can you redesign an existing website or app?',
                answer: 'Absolutely! We can redesign existing interfaces to improve usability, modernize the look, and enhance user experience. We start with a design audit to identify issues and opportunities for improvement.'
            },
            {
                question: 'Do you provide design systems and style guides?',
                answer: 'Yes! We create comprehensive design systems including color palettes, typography, component libraries, and style guides. This ensures consistency across your product and makes future design work more efficient.'
            }
        ]
    },
    'automation-saas': {
        slug: 'automation-saas',
        title: 'Automation & SaaS',
        heroDescription: 'Streamline operations and scale your business with custom automation and SaaS solutions.',
        description: [
            'Automation and SaaS solutions can transform how your business operates, reducing manual work, improving efficiency, and enabling scalable growth. From workflow automation to custom SaaS platforms, we help businesses leverage technology to work smarter.',
            'Our automation and SaaS services include CRM setup, workflow automation, custom SaaS development, and integration services. We build solutions that integrate seamlessly with your existing systems and processes.',
            'Whether you need to automate repetitive tasks, build a custom SaaS product, or create client portals, we have the expertise to deliver solutions that drive real business value.'
        ],
        benefits: [
            'Increased operational efficiency',
            'Reduced manual work and errors',
            'Scalable business processes',
            'Better data management',
            'Improved customer experience',
            'Competitive advantage through technology'
        ],
        features: [
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiZap"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 1034,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'CRM & Workflow Automation',
                description: 'Automate sales, marketing, and operational workflows'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiCloud"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 1039,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'SaaS Development',
                description: 'Custom SaaS platforms and whitelabel solutions'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiUsers"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 1044,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Client Portals',
                description: 'Secure portals for clients to access services and information'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiSettings"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 1049,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Payment & Subscriptions',
                description: 'Recurring payment and subscription management systems'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiCode"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 1054,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'API Integration',
                description: 'Integrate with third-party services and APIs'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiCheckCircle"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 1059,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'System Integration',
                description: 'Connect different systems for seamless data flow'
            }
        ],
        process: [
            {
                title: 'Requirements Analysis',
                description: 'Understand your business processes and automation needs'
            },
            {
                title: 'Solution Design',
                description: 'Design automation workflows and system architecture'
            },
            {
                title: 'Development & Integration',
                description: 'Build and integrate automation solutions with your systems'
            },
            {
                title: 'Testing & Training',
                description: 'Test thoroughly and train your team on new systems'
            },
            {
                title: 'Launch & Support',
                description: 'Deploy solutions and provide ongoing support and optimization'
            }
        ],
        seoKeywords: 'business automation, workflow automation, SaaS development, CRM automation, custom SaaS, automation services',
        faqs: [
            {
                question: 'What types of processes can be automated?',
                answer: 'We can automate various business processes including lead management, email marketing, data entry, reporting, customer onboarding, invoice generation, appointment scheduling, and more. We analyze your workflows to identify automation opportunities.'
            },
            {
                question: 'How long does it take to set up automation?',
                answer: 'Automation setup timelines vary based on complexity. Simple workflow automation can take 1-2 weeks, while comprehensive CRM automation or custom SaaS development can take 6-12 weeks. We provide detailed timelines during planning.'
            },
            {
                question: 'What CRM platforms do you work with?',
                answer: 'We work with popular CRM platforms including HubSpot, Salesforce, Zoho, and custom CRM solutions. We can also build custom CRM systems tailored to your specific business needs and processes.'
            },
            {
                question: 'Can you build a custom SaaS product?',
                answer: 'Yes! We specialize in custom SaaS development. We can build complete SaaS platforms with user management, subscription billing, admin dashboards, and all features needed for your SaaS business model.'
            },
            {
                question: 'Do you integrate with existing systems?',
                answer: 'Absolutely! We integrate automation solutions with your existing systems including accounting software, email platforms, payment gateways, and other business tools. This ensures seamless data flow across your operations.'
            },
            {
                question: 'What kind of support do you provide after automation setup?',
                answer: 'We provide ongoing support including system monitoring, troubleshooting, updates, user training, and optimization. We ensure your automation systems continue to work effectively as your business grows and evolves.'
            }
        ]
    },
    'cloud-infrastructure': {
        slug: 'cloud-infrastructure',
        title: 'Cloud & Infrastructure',
        heroDescription: 'Reliable, scalable cloud infrastructure that supports your business growth.',
        description: [
            'Cloud infrastructure provides the foundation for modern digital businesses. From hosting to server management, from CI/CD pipelines to monitoring, we ensure your infrastructure is reliable, secure, and scalable.',
            'Our cloud and infrastructure services help you migrate to the cloud, optimize existing infrastructure, and maintain systems that support your business operations. We handle the technical complexity so you can focus on your business.',
            'With expertise in cloud platforms, server management, and DevOps practices, we provide infrastructure solutions that are both powerful and cost-effective.'
        ],
        benefits: [
            'Improved reliability and uptime',
            'Scalable infrastructure',
            'Better security',
            'Cost optimization',
            'Faster deployments',
            'Expert infrastructure management'
        ],
        features: [
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiCloud"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 1133,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Cloud Hosting',
                description: 'Migrate to and manage cloud hosting on AWS, Azure, or Google Cloud'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiSettings"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 1138,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Server Management',
                description: 'Complete server administration and management services'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiZap"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 1143,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'CI/CD Pipelines',
                description: 'Automated deployment pipelines for faster releases'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiBarChart"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 1148,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Monitoring & Backup',
                description: '24/7 monitoring and automated backup systems'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiShield"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 1153,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'SSL & Security',
                description: 'SSL certificates and security hardening'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiGlobe"], {}, void 0, false, {
                    fileName: "[project]/src/data/servicesData.jsx",
                    lineNumber: 1158,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                title: 'Domain & DNS',
                description: 'Domain registration and DNS management'
            }
        ],
        process: [
            {
                title: 'Infrastructure Assessment',
                description: 'Evaluate current infrastructure and identify optimization opportunities'
            },
            {
                title: 'Migration Planning',
                description: 'Plan cloud migration or infrastructure improvements'
            },
            {
                title: 'Implementation',
                description: 'Set up cloud infrastructure, servers, and monitoring'
            },
            {
                title: 'Optimization',
                description: 'Optimize performance, costs, and security'
            },
            {
                title: 'Ongoing Management',
                description: 'Monitor, maintain, and optimize infrastructure continuously'
            }
        ],
        seoKeywords: 'cloud hosting, server management, cloud migration, CI/CD pipelines, infrastructure management, cloud services',
        faqs: [
            {
                question: 'What cloud platforms do you support?',
                answer: 'We work with major cloud platforms including AWS, Google Cloud, Azure, DigitalOcean, and others. We help you choose the best platform based on your needs, budget, and technical requirements.'
            },
            {
                question: 'Do you provide 24/7 server monitoring?',
                answer: 'Yes! We provide 24/7 monitoring of your servers and infrastructure. We monitor uptime, performance, security, and respond immediately to any issues to minimize downtime and ensure optimal performance.'
            },
            {
                question: 'Can you help migrate my website to the cloud?',
                answer: 'Absolutely! We handle complete cloud migrations including planning, data migration, DNS configuration, testing, and cutover. We ensure zero downtime during migration and provide post-migration support.'
            },
            {
                question: 'What is included in server management?',
                answer: 'Our server management includes server setup and configuration, security hardening, performance optimization, regular updates, backup management, monitoring, and technical support. We keep your servers secure and running smoothly.'
            },
            {
                question: 'Do you set up CI/CD pipelines?',
                answer: 'Yes! We set up continuous integration and deployment (CI/CD) pipelines that automate testing and deployment processes. This enables faster, more reliable deployments and reduces manual errors.'
            },
            {
                question: 'How do you ensure cloud security?',
                answer: 'We implement comprehensive security measures including firewalls, SSL certificates, regular security updates, access controls, intrusion detection, and security monitoring. We follow industry best practices to keep your infrastructure secure.'
            }
        ]
    }
};
}),
"[project]/src/components/Navbar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Logo.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicesData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/servicesData.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const Navbar = ()=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSearchFocused, setIsSearchFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileServicesOpen, setMobileServicesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dropdownPosition, setDropdownPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const servicesDropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const servicesLinkRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsOpen(false);
        setServicesDropdownOpen(false);
        setMobileServicesOpen(false);
    }, [
        pathname
    ]);
    // Calculate dropdown position when it opens or on scroll/resize
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updatePosition = ()=>{
            if (servicesDropdownOpen && servicesLinkRef.current) {
                const rect = servicesLinkRef.current.getBoundingClientRect();
                setDropdownPosition({
                    top: rect.bottom + 8,
                    left: rect.left
                });
            }
        };
        if (servicesDropdownOpen) {
            updatePosition();
            window.addEventListener('scroll', updatePosition, true);
            window.addEventListener('resize', updatePosition);
        }
        return ()=>{
            window.removeEventListener('scroll', updatePosition, true);
            window.removeEventListener('resize', updatePosition);
        };
    }, [
        servicesDropdownOpen
    ]);
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target) && servicesLinkRef.current && !servicesLinkRef.current.contains(event.target)) {
                setServicesDropdownOpen(false);
            }
        };
        if (servicesDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [
        servicesDropdownOpen
    ]);
    // Get all services for submenu
    const servicesList = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicesData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["servicesData"]).map(([slug, data])=>({
            slug,
            title: data.title
        }));
    // Prevent body scroll when menu is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
        return ()=>{
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [
        isOpen
    ]);
    // Prevent overflow when dropdown is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (servicesDropdownOpen) {
            // Ensure navbar and body don't create scrollbars
            const navbar = document.querySelector('.navbar');
            const navContent = document.querySelector('.nav-content');
            const navLinks = document.querySelector('.nav-links-desktop');
            if (navbar) {
                navbar.style.overflow = 'visible';
                navbar.style.overflowY = 'visible';
                navbar.style.overflowX = 'hidden';
            }
            if (navContent) {
                navContent.style.overflow = 'visible';
            }
            if (navLinks) {
                navLinks.style.overflow = 'visible';
            }
            document.body.style.overflowX = 'hidden';
            document.documentElement.style.overflowX = 'hidden';
        }
        return ()=>{
            const navbar = document.querySelector('.navbar');
            const navContent = document.querySelector('.nav-content');
            const navLinks = document.querySelector('.nav-links-desktop');
            if (navbar) {
                navbar.style.overflow = '';
                navbar.style.overflowY = '';
                navbar.style.overflowX = '';
            }
            if (navContent) {
                navContent.style.overflow = '';
            }
            if (navLinks) {
                navLinks.style.overflow = '';
            }
        };
    }, [
        servicesDropdownOpen
    ]);
    const handleSearch = (e)=>{
        e.preventDefault();
        if (searchQuery.trim()) {
            // Simple search implementation - can be enhanced later
            // For now, navigate to services page with search query
            router.push(`/services?search=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery('');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nav-brand",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    size: "default",
                                    className: "navbar-logo"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nav-links-desktop",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: `nav-link ${pathname === '/' ? 'active' : ''}`,
                                        suppressHydrationWarning: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "HOME"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 166,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about",
                                        className: `nav-link ${pathname === '/about' ? 'active' : ''}`,
                                        suppressHydrationWarning: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "ABOUT"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `nav-link-dropdown ${pathname?.startsWith('/services') ? 'active' : ''}`,
                                        onMouseEnter: ()=>{
                                            setServicesDropdownOpen(true);
                                        },
                                        onMouseLeave: (e)=>{
                                            // Only close if not moving to dropdown
                                            // Check if relatedTarget is a valid Node before using contains
                                            if (e.relatedTarget && e.relatedTarget instanceof Node) {
                                                if (!servicesDropdownRef.current?.contains(e.relatedTarget)) {
                                                    setServicesDropdownOpen(false);
                                                }
                                            } else {
                                                // If relatedTarget is null or not a Node, close the dropdown
                                                setServicesDropdownOpen(false);
                                            }
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/services",
                                            className: "nav-link",
                                            ref: servicesLinkRef,
                                            suppressHydrationWarning: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "SERVICES"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navbar.jsx",
                                                    lineNumber: 199,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiChevronDown"], {
                                                    className: "dropdown-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navbar.jsx",
                                                    lineNumber: 200,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    servicesDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "services-dropdown",
                                        ref: servicesDropdownRef,
                                        style: {
                                            position: 'fixed',
                                            top: `${dropdownPosition.top}px`,
                                            left: `${dropdownPosition.left}px`,
                                            zIndex: 10000
                                        },
                                        onMouseEnter: ()=>setServicesDropdownOpen(true),
                                        onMouseLeave: ()=>setServicesDropdownOpen(false),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/services",
                                                className: "services-dropdown-item services-dropdown-all",
                                                onClick: ()=>setServicesDropdownOpen(false),
                                                suppressHydrationWarning: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "All Services"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navbar.jsx",
                                                    lineNumber: 222,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.jsx",
                                                lineNumber: 216,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "services-dropdown-divider"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.jsx",
                                                lineNumber: 224,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            servicesList.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/services/${service.slug}`,
                                                    className: `services-dropdown-item ${pathname === `/services/${service.slug}` ? 'active' : ''}`,
                                                    onClick: ()=>setServicesDropdownOpen(false),
                                                    suppressHydrationWarning: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: service.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Navbar.jsx",
                                                        lineNumber: 233,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, service.slug, false, {
                                                    fileName: "[project]/src/components/Navbar.jsx",
                                                    lineNumber: 226,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 204,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)), document.body),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/blog",
                                        className: `nav-link ${pathname?.startsWith('/blog') ? 'active' : ''}`,
                                        suppressHydrationWarning: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "BLOG"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 244,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/portfolio",
                                        className: `nav-link ${pathname?.startsWith('/portfolio') ? 'active' : ''}`,
                                        suppressHydrationWarning: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "OUR WORK"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 251,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        className: `nav-link ${pathname === '/contact' ? 'active' : ''}`,
                                        suppressHydrationWarning: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "CONTACT"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 258,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                className: "nav-search",
                                onSubmit: handleSearch,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search....",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        onFocus: ()=>setIsSearchFocused(true),
                                        onBlur: ()=>setIsSearchFocused(false),
                                        className: `search-input ${isSearchFocused ? 'focused' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 262,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "search-button",
                                        "aria-label": "Search",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiSearch"], {}, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 272,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 261,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `menu-toggle ${isOpen ? 'active' : ''}`,
                                onClick: ()=>setIsOpen(!isOpen),
                                "aria-label": "Toggle menu",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "menu-icon",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiMenu"], {
                                            className: "menu-open"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 277,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiX"], {
                                            className: "menu-close"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 278,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 276,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.jsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.jsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 154,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mobile-menu-overlay ${isOpen ? 'active' : ''}`,
                onClick: ()=>setIsOpen(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `mobile-menu ${isOpen ? 'active' : ''}`,
                    onClick: (e)=>e.stopPropagation(),
                    suppressHydrationWarning: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: `mobile-menu-link ${pathname === '/' ? 'active' : ''}`,
                            onClick: ()=>setIsOpen(false),
                            suppressHydrationWarning: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 300,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/about",
                            className: `mobile-menu-link ${pathname === '/about' ? 'active' : ''}`,
                            onClick: ()=>setIsOpen(false),
                            suppressHydrationWarning: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "About"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 308,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 302,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mobile-menu-services",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `mobile-menu-link mobile-menu-services-toggle ${pathname?.startsWith('/services') ? 'active' : ''}`,
                                    onClick: ()=>setMobileServicesOpen(!mobileServicesOpen),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Services"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 315,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiChevronRight"], {
                                            className: `mobile-menu-chevron ${mobileServicesOpen ? 'open' : ''}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 316,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 311,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                mobileServicesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mobile-menu-services-submenu",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/services",
                                            className: `mobile-menu-link mobile-menu-submenu-item ${pathname === '/services' ? 'active' : ''}`,
                                            onClick: ()=>{
                                                setIsOpen(false);
                                                setMobileServicesOpen(false);
                                            },
                                            suppressHydrationWarning: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "All Services"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.jsx",
                                                lineNumber: 329,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 320,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        servicesList.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/services/${service.slug}`,
                                                className: `mobile-menu-link mobile-menu-submenu-item ${pathname === `/services/${service.slug}` ? 'active' : ''}`,
                                                onClick: ()=>{
                                                    setIsOpen(false);
                                                    setMobileServicesOpen(false);
                                                },
                                                suppressHydrationWarning: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: service.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navbar.jsx",
                                                    lineNumber: 342,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, service.slug, false, {
                                                fileName: "[project]/src/components/Navbar.jsx",
                                                lineNumber: 332,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 319,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 310,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/blog",
                            className: `mobile-menu-link ${pathname?.startsWith('/blog') ? 'active' : ''}`,
                            onClick: ()=>setIsOpen(false),
                            suppressHydrationWarning: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "BLOG"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 354,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 348,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/portfolio",
                            className: `mobile-menu-link ${pathname?.startsWith('/portfolio') ? 'active' : ''}`,
                            onClick: ()=>setIsOpen(false),
                            suppressHydrationWarning: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "OUR WORK"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 362,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 356,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            className: `mobile-menu-link ${pathname === '/contact' ? 'active' : ''}`,
                            onClick: ()=>setIsOpen(false),
                            suppressHydrationWarning: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "CONTACT"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 370,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 364,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "mobile-search",
                            onSubmit: handleSearch,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search....",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    className: "mobile-search-input"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 373,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "mobile-search-button",
                                    "aria-label": "Search",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiSearch"], {}, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 381,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 380,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 372,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            suppressHydrationWarning: true,
                            style: {
                                display: 'inline-block'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://calendly.com/nirosha-info/30min",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "btn btn-primary mobile-menu-cta",
                                onClick: ()=>setIsOpen(false),
                                suppressHydrationWarning: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Free Consultation"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 393,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 385,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 384,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.jsx",
                    lineNumber: 289,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 285,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Navbar;
}),
"[project]/src/components/Footer.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Logo.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicesData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/servicesData.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
// Register ScrollTrigger
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const Footer = ()=>{
    const footerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollTopRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Get top 6 services for footer
    const topServices = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicesData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["servicesData"]).slice(0, 6).map((service)=>({
            title: service.title,
            slug: `/services/${service.slug}`
        }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const footer = footerRef.current;
        if (!footer) return;
        // Animate scroll to top button
        const handleScroll = ()=>{
            if (window.scrollY > 300) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(scrollTopRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(scrollTopRef.current, {
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    const handleScrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                ref: footerRef,
                className: "footer-new",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "footer-bg-texture"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer.jsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "footer-content-new",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                size: "small",
                                                className: "footer-logo-new"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 71,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "footer-description-new",
                                                children: "Understanding client needs, defining goals, and designing tailored digital solutions that drive growth."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 72,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "footer-social",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://facebook.com",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "footer-social-icon",
                                                        "aria-label": "Facebook",
                                                        suppressHydrationWarning: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiFacebook"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.jsx",
                                                            lineNumber: 77,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.jsx",
                                                        lineNumber: 76,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://linkedin.com",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "footer-social-icon",
                                                        "aria-label": "LinkedIn",
                                                        suppressHydrationWarning: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiLinkedin"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.jsx",
                                                            lineNumber: 80,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.jsx",
                                                        lineNumber: 79,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://instagram.com",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "footer-social-icon",
                                                        "aria-label": "Instagram",
                                                        suppressHydrationWarning: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiInstagram"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.jsx",
                                                            lineNumber: 83,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.jsx",
                                                        lineNumber: 82,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://twitter.com",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "footer-social-icon",
                                                        "aria-label": "Twitter",
                                                        suppressHydrationWarning: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiTwitter"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.jsx",
                                                            lineNumber: 86,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.jsx",
                                                        lineNumber: 85,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 75,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "footer-heading-new",
                                                children: "Quick Links"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "footer-links-new",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "footer-link-bullet"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer.jsx",
                                                                lineNumber: 96,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/",
                                                                suppressHydrationWarning: true,
                                                                children: "Home"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer.jsx",
                                                                lineNumber: 97,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Footer.jsx",
                                                        lineNumber: 95,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "footer-link-bullet"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer.jsx",
                                                                lineNumber: 100,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/about",
                                                                suppressHydrationWarning: true,
                                                                children: "About Us"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer.jsx",
                                                                lineNumber: 101,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Footer.jsx",
                                                        lineNumber: 99,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "footer-link-bullet"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer.jsx",
                                                                lineNumber: 104,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/services",
                                                                suppressHydrationWarning: true,
                                                                children: "Services"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer.jsx",
                                                                lineNumber: 105,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Footer.jsx",
                                                        lineNumber: 103,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "footer-link-bullet"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer.jsx",
                                                                lineNumber: 108,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/blog",
                                                                suppressHydrationWarning: true,
                                                                children: "Blog"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer.jsx",
                                                                lineNumber: 109,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Footer.jsx",
                                                        lineNumber: 107,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "footer-link-bullet"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer.jsx",
                                                                lineNumber: 112,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/contact",
                                                                suppressHydrationWarning: true,
                                                                children: "Contact Us"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer.jsx",
                                                                lineNumber: 113,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Footer.jsx",
                                                        lineNumber: 111,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "footer-heading-new",
                                                children: "Our Services"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "footer-links-new",
                                                children: topServices.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "footer-link-bullet"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer.jsx",
                                                                lineNumber: 124,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: service.slug,
                                                                suppressHydrationWarning: true,
                                                                children: service.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer.jsx",
                                                                lineNumber: 125,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/src/components/Footer.jsx",
                                                        lineNumber: 123,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "footer-heading-new",
                                                children: "Contact Us"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 133,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "footer-contact-new",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "tel:+919403891938",
                                                            "aria-label": "Call Team Nirosha at +91-9403891938",
                                                            suppressHydrationWarning: true,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiPhone"], {}, void 0, false, {
                                                                    fileName: "[project]/src/components/Footer.jsx",
                                                                    lineNumber: 137,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "+91-9403891938"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Footer.jsx",
                                                                    lineNumber: 138,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Footer.jsx",
                                                            lineNumber: 136,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.jsx",
                                                        lineNumber: 135,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "https://wa.me/919403891938",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            "aria-label": "Contact Team Nirosha on WhatsApp",
                                                            suppressHydrationWarning: true,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiMessageCircle"], {}, void 0, false, {
                                                                    fileName: "[project]/src/components/Footer.jsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "WhatsApp: +91-9403891938"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Footer.jsx",
                                                                    lineNumber: 144,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Footer.jsx",
                                                            lineNumber: 142,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.jsx",
                                                        lineNumber: 141,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "mailto:info@nirosha.org",
                                                            "aria-label": "Email Team Nirosha at info@nirosha.org",
                                                            suppressHydrationWarning: true,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiMail"], {}, void 0, false, {
                                                                    fileName: "[project]/src/components/Footer.jsx",
                                                                    lineNumber: 149,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "info@nirosha.org"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Footer.jsx",
                                                                    lineNumber: 150,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Footer.jsx",
                                                            lineNumber: 148,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.jsx",
                                                        lineNumber: 147,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "footer-address-new",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiMapPin"], {}, void 0, false, {
                                                                    fileName: "[project]/src/components/Footer.jsx",
                                                                    lineNumber: 155,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Hadapsar, Pune, Maharashtra, India"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Footer.jsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Footer.jsx",
                                                            lineNumber: 154,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.jsx",
                                                        lineNumber: 153,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 134,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "footer-bottom-new",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "footer-copyright",
                                        children: [
                                            "© ",
                                            new Date().getFullYear(),
                                            " Team Nirosha. All rights reserved."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer-bottom-links",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/privacy",
                                                suppressHydrationWarning: true,
                                                children: "Privacy Policy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "footer-link-separator",
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/terms",
                                                suppressHydrationWarning: true,
                                                children: "Terms & Condition"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 171,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.jsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Footer.jsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: scrollTopRef,
                onClick: handleScrollToTop,
                className: "footer-scroll-top",
                "aria-label": "Scroll to top",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiArrowUp"], {}, void 0, false, {
                    fileName: "[project]/src/components/Footer.jsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.jsx",
                lineNumber: 178,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Footer;
}),
"[project]/src/components/CTA.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.esm.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
// Register ScrollTrigger
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const CTA = ()=>{
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const graphicRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const section = sectionRef.current;
        if (!section) return;
        // Set initial states
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set([
            titleRef.current,
            buttonRef.current
        ], {
            opacity: 0,
            y: 30
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(graphicRef.current, {
            opacity: 0,
            scale: 0.8,
            rotation: -10
        });
        // Create animation timeline
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
        tl.to(graphicRef.current, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: 'back.out(1.7)'
        }).to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.5').to(buttonRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.4');
        // Continuous floating animation for graphic
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(graphicRef.current, {
            y: '+=20',
            rotation: '+=5',
            duration: 3,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true
        });
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach((trigger)=>{
                if (trigger.vars.trigger === section) {
                    trigger.kill();
                }
            });
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "contact",
        className: "cta-banner",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cta-banner-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cta-banner-left",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            ref: titleRef,
                            className: "cta-banner-title",
                            children: "Ready to Elevate Your Business with Digital Solutions?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CTA.jsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/CTA.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: graphicRef,
                        className: "cta-banner-graphic",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cta-graphic-element"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CTA.jsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/CTA.jsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cta-banner-right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            ref: buttonRef,
                            href: "https://calendly.com/nirosha-info/30min",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "cta-banner-button",
                            suppressHydrationWarning: true,
                            children: [
                                "Get Started Today",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "cta-button-icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiArrowRight"], {}, void 0, false, {
                                        fileName: "[project]/src/components/CTA.jsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CTA.jsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CTA.jsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/CTA.jsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CTA.jsx",
                lineNumber: 79,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cta-wave-bottom"
            }, void 0, false, {
                fileName: "[project]/src/components/CTA.jsx",
                lineNumber: 106,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CTA.jsx",
        lineNumber: 78,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CTA;
}),
"[project]/src/utils/smoothScroll.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
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
}),
"[project]/src/components/ScrollToTopButton.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$smoothScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/smoothScroll.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const ScrollToTopButton = ()=>{
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const toggleVisibility = ()=>{
            // Show button when user scrolls down 300px
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return ()=>{
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    const handleClick = (e)=>{
        e.preventDefault();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$smoothScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollToTop"])(500);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `scroll-to-top-btn ${isVisible ? 'visible' : ''}`,
        onClick: handleClick,
        "aria-label": "Scroll to top",
        title: "Scroll to top",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiArrowUp"], {}, void 0, false, {
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
const __TURBOPACK__default__export__ = ScrollToTopButton;
}),
"[project]/src/components/ContactBubbles.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.esm.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const ContactBubbles = ()=>{
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const phoneNumber = '+919403891938';
    const whatsappNumber = '919403891938' // Without + for WhatsApp link
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "contact-bubbles-container",
                onMouseEnter: ()=>setIsHovered(true),
                onMouseLeave: ()=>setIsHovered(false),
                suppressHydrationWarning: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `https://wa.me/${whatsappNumber}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: `contact-bubble whatsapp-bubble ${isHovered ? 'expanded' : ''}`,
                        "aria-label": "Contact us on WhatsApp",
                        suppressHydrationWarning: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                                className: "bubble-icon"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactBubbles.jsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bubble-label",
                                children: "WhatsApp"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactBubbles.jsx",
                                lineNumber: 32,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactBubbles.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `tel:${phoneNumber}`,
                        className: `contact-bubble call-bubble ${isHovered ? 'expanded' : ''}`,
                        "aria-label": "Call us",
                        suppressHydrationWarning: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiPhone"], {
                                className: "bubble-icon"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactBubbles.jsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bubble-label",
                                children: "Call"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactBubbles.jsx",
                                lineNumber: 43,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactBubbles.jsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ContactBubbles.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "contact-mobile-bar",
                suppressHydrationWarning: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `https://wa.me/${whatsappNumber}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "contact-mobile-item whatsapp-item",
                        "aria-label": "Contact us on WhatsApp",
                        suppressHydrationWarning: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                                className: "contact-mobile-icon"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactBubbles.jsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "contact-mobile-label",
                                children: "WhatsApp"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactBubbles.jsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactBubbles.jsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `tel:${phoneNumber}`,
                        className: "contact-mobile-item call-item",
                        "aria-label": "Call us",
                        suppressHydrationWarning: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiPhone"], {
                                className: "contact-mobile-icon"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactBubbles.jsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "contact-mobile-label",
                                children: "Call"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactBubbles.jsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactBubbles.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ContactBubbles.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = ContactBubbles;
}),
"[project]/src/components/ScrollSmootherWrapper.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
// Register ScrollTrigger
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
/**
 * ScrollSmootherWrapper component
 * Initializes GSAP ScrollSmoother for smooth scrolling effects
 * This component doesn't render anything, it just initializes the smoother
 * 
 * Note: ScrollSmoother is a premium GSAP plugin (Club GreenSock membership required)
 * If you don't have access, you'll need to:
 * 1. Sign up for Club GreenSock at https://greensock.com/club/
 * 2. Download ScrollSmoother plugin
 * 3. Place it in your project and import it
 */ const ScrollSmootherWrapper = ()=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const smootherRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Kill existing smoother if it exists
        if (smootherRef.current) {
            smootherRef.current.kill();
            smootherRef.current = null;
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Dynamically import ScrollSmoother (premium plugin)
        const initSmoother = async ()=>{
            try {
                // Try to import ScrollSmoother
                const { ScrollSmoother } = await __turbopack_context__.A("[project]/node_modules/gsap/ScrollSmoother.js [app-ssr] (ecmascript, async loader)");
                if (!ScrollSmoother) {
                    console.warn('ScrollSmoother plugin not found. Using standard scrolling.');
                    return;
                }
                // Register the plugin
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(ScrollSmoother);
                // Check if wrapper and content elements exist
                const wrapper = document.getElementById('smooth-wrapper');
                const content = document.getElementById('smooth-content');
                if (!wrapper || !content) {
                    console.warn('ScrollSmoother: smooth-wrapper or smooth-content not found');
                    return;
                }
                // Create ScrollSmoother instance
                const smoother = ScrollSmoother.create({
                    wrapper: '#smooth-wrapper',
                    content: '#smooth-content',
                    smooth: 1,
                    effects: true,
                    smoothTouch: 0.1,
                    normalizeScroll: true,
                    ignoreMobileResize: true // Prevent jumps on mobile resize
                });
                smootherRef.current = smoother;
                // Store smoother instance globally for utility functions
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                // Refresh ScrollTrigger after smoother is created
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
                console.log('ScrollSmoother initialized successfully');
            } catch (error) {
                console.warn('ScrollSmoother plugin not available:', error.message);
                console.warn('To use ScrollSmoother, you need a GSAP Club GreenSock membership.');
                console.warn('Visit https://greensock.com/club/ to sign up.');
            }
        };
        // Small delay to ensure DOM is ready, then initialize
        const timeoutId = setTimeout(initSmoother, 100);
        return ()=>{
            clearTimeout(timeoutId);
            if (smootherRef.current) {
                smootherRef.current.kill();
                smootherRef.current = null;
            }
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        };
    }, [
        pathname
    ]); // Re-initialize on route change
    return null;
};
const __TURBOPACK__default__export__ = ScrollSmootherWrapper;
}),
"[project]/src/components/Layout.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CTA$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CTA.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScrollToTopButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ScrollToTopButton.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactBubbles$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ContactBubbles.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScrollSmootherWrapper$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ScrollSmootherWrapper.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
// Note: OrganizationSchema and WebsiteSchema are now in app/layout.jsx
// ScrollToTop is also in app/layout.jsx
const Layout = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "App",
        suppressHydrationWarning: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/Layout.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScrollSmootherWrapper$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/Layout.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "smooth-wrapper",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "smooth-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            id: "main-content",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/src/components/Layout.jsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CTA$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/Layout.jsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/Layout.jsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Layout.jsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Layout.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScrollToTopButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/Layout.jsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactBubbles$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/Layout.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Layout.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Layout;
}),
"[project]/src/components/OrganizationSchema.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
/**
 * Organization Schema component for Google SEO
 * Generates JSON-LD structured data for the organization/business
 * Includes LocalBusiness properties for local SEO
 */ const OrganizationSchema = ()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const schema = {
            '@context': 'https://schema.org',
            '@type': [
                'Organization',
                'LocalBusiness'
            ],
            name: 'Team Nirosha',
            alternateName: 'Nirosha Enterprises',
            url: 'https://nirosha.org',
            logo: 'https://nirosha.org/logo.png',
            image: 'https://nirosha.org/logo.png',
            description: 'Professional digital agency offering web development, SEO, digital marketing, branding, e-commerce solutions, automation, SaaS, and cloud infrastructure services. Expert team delivering results-driven solutions for businesses.',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Hadapsar',
                addressLocality: 'Pune',
                addressRegion: 'Maharashtra',
                addressCountry: 'IN'
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: '18.47906567043733',
                longitude: '73.9306516769688'
            },
            telephone: '+919403891938',
            email: 'info@nirosha.org',
            priceRange: '$$',
            areaServed: {
                '@type': 'Country',
                name: 'India'
            },
            serviceArea: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                    '@type': 'GeoCoordinates',
                    latitude: '18.47906567043733',
                    longitude: '73.9306516769688'
                },
                geoRadius: {
                    '@type': 'Distance',
                    name: 'Worldwide'
                }
            },
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Digital Services',
                itemListElement: [
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Web Development',
                            description: 'Custom websites and web applications that drive results',
                            url: 'https://nirosha.org/services/web-development'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'SEO Services',
                            description: 'Comprehensive SEO strategies to improve search rankings and drive organic traffic',
                            url: 'https://nirosha.org/services/seo-services'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Digital Marketing',
                            description: 'End-to-end digital marketing services including PPC, email marketing, and content marketing',
                            url: 'https://nirosha.org/services/digital-marketing'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Branding & Design',
                            description: 'Logo design, brand identity, UI/UX design, and graphic design services',
                            url: 'https://nirosha.org/services/branding-design'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Local SEO',
                            description: 'Local search optimization to dominate Google Maps and near me searches',
                            url: 'https://nirosha.org/services/local-seo'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Social Media Marketing',
                            description: 'Social media strategy, content creation, and management services',
                            url: 'https://nirosha.org/services/social-media-marketing'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'E-commerce Solutions',
                            description: 'Complete e-commerce development and optimization services',
                            url: 'https://nirosha.org/services/ecommerce-solutions'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Web Maintenance',
                            description: 'Website maintenance, security updates, and ongoing support services',
                            url: 'https://nirosha.org/services/web-maintenance'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'UI/UX Design',
                            description: 'User interface and user experience design services',
                            url: 'https://nirosha.org/services/ui-ux-design'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Automation & SaaS',
                            description: 'Business automation, SaaS development, and workflow optimization',
                            url: 'https://nirosha.org/services/automation-saas'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Cloud Infrastructure',
                            description: 'Cloud hosting, migration, and infrastructure management services',
                            url: 'https://nirosha.org/services/cloud-infrastructure'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Content Services',
                            description: 'Content writing, copywriting, video production, and content strategy',
                            url: 'https://nirosha.org/services/content-services'
                        }
                    }
                ]
            },
            sameAs: [
                'https://www.facebook.com/niroshaorg',
                'https://www.linkedin.com/company/niroshaorg',
                'https://twitter.com/niroshaorg',
                'https://www.instagram.com/niroshaorg'
            ],
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+919403891938',
                contactType: 'Customer Service',
                areaServed: 'IN',
                availableLanguage: [
                    'English',
                    'Hindi',
                    'Marathi'
                ]
            },
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                reviewCount: '145',
                bestRating: '5',
                worstRating: '1'
            }
        };
        // Remove existing organization schema if any
        const existingScript = document.querySelector('script[data-organization-schema]');
        if (existingScript) {
            existingScript.remove();
        }
        // Create and inject the schema script
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-organization-schema', 'true');
        script.text = JSON.stringify(schema);
        document.head.appendChild(script);
        // Cleanup function
        return ()=>{
            const scriptToRemove = document.querySelector('script[data-organization-schema]');
            if (scriptToRemove) {
                scriptToRemove.remove();
            }
        };
    }, []);
    return null;
};
const __TURBOPACK__default__export__ = OrganizationSchema;
}),
"[project]/src/components/WebsiteSchema.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
/**
 * Website Schema component for Google SEO
 * Generates JSON-LD structured data for the website
 */ const WebsiteSchema = ()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Team Nirosha',
            alternateName: 'Nirosha Enterprises',
            url: 'https://nirosha.org',
            description: 'Professional digital agency offering web development, SEO, digital marketing, branding, e-commerce solutions, automation, SaaS, and cloud infrastructure services.',
            publisher: {
                '@type': 'Organization',
                name: 'Team Nirosha',
                logo: {
                    '@type': 'ImageObject',
                    url: 'https://nirosha.org/logo.png'
                }
            },
            potentialAction: {
                '@type': 'SearchAction',
                target: {
                    '@type': 'EntryPoint',
                    urlTemplate: 'https://nirosha.org/services?search={search_term_string}'
                },
                'query-input': 'required name=search_term_string'
            },
            inLanguage: 'en-US',
            copyrightHolder: {
                '@type': 'Organization',
                name: 'Team Nirosha'
            },
            copyrightYear: new Date().getFullYear()
        };
        // Remove existing website schema if any
        const existingScript = document.querySelector('script[data-website-schema]');
        if (existingScript) {
            existingScript.remove();
        }
        // Create and inject the schema script
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-website-schema', 'true');
        script.text = JSON.stringify(schema);
        document.head.appendChild(script);
        // Cleanup function
        return ()=>{
            const scriptToRemove = document.querySelector('script[data-website-schema]');
            if (scriptToRemove) {
                scriptToRemove.remove();
            }
        };
    }, []);
    return null;
};
const __TURBOPACK__default__export__ = WebsiteSchema;
}),
"[project]/src/components/ScrollToTop.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
// Smooth scroll utility function
const smoothScrollTo = (target, offset = 0)=>{
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};
const ScrollToTop = ()=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const hash = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // If there's a hash in the URL, scroll to that element
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            // Otherwise, scroll to top smoothly
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }, [
        pathname,
        hash
    ]);
    // Handle anchor link clicks
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleAnchorClick = (e)=>{
            // Check if clicked element or its parent is an anchor link
            let anchor = e.target.closest('a[href^="#"]');
            if (anchor) {
                const href = anchor.getAttribute('href');
                // Check if it's an anchor link (starts with # and has content)
                if (href && href.startsWith('#') && href.length > 1) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        smoothScrollTo(targetElement, 80); // 80px offset for navbar
                        // Update URL without triggering navigation
                        window.history.pushState(null, '', href);
                    }
                }
            }
        };
        // Add click listener to document for event delegation
        document.addEventListener('click', handleAnchorClick);
        return ()=>{
            document.removeEventListener('click', handleAnchorClick);
        };
    }, []);
    return null;
};
const __TURBOPACK__default__export__ = ScrollToTop;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c361d0e6._.js.map