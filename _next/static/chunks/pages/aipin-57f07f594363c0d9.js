(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[462], {
    48142: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/aipin", function() {
            return n(19484)
        }
        ])
    },
    19484: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            __N_SSG: function() {
                return t3
            },
            default: function() {
                return t7
            }
        });
        var i, a, r = n(31549), o = n(44194), s = n(73914), l = n(51865), c = n.n(l), m = n(81396), d = n(80385), u = n(34383), g = n(65984), p = n(69587), h = n.n(p), v = n(85277), f = n.n(v), _ = n(4693), x = n.n(_);
        function y(e) {
            let {className: t, data: n, style: i, loading: a="lazy", ...o} = e;
            return (0,
            r.jsx)(f(), {
                className: c()(x().main, t),
                fill: !0,
                src: n.src,
                alt: n.alt,
                style: {
                    ...n.objectPosition ? {
                        objectPosition: n.objectPosition
                    } : {},
                    ...i
                },
                ...o,
                loading: a
            })
        }
        var b = n(97514)
          , w = n.n(b)
          , P = Object.assign(function(e) {
            let {className: t, children: n, ...i} = e;
            return (0,
            r.jsx)(d.ZT, {
                className: c()(w().eyebrow, t),
                theme: "dark",
                variant: "body2",
                ...i,
                children: n
            })
        }, {
            Label: function(e) {
                let {children: t} = e;
                return (0,
                r.jsx)(d.ZT, {
                    as: "div",
                    theme: "dark",
                    className: w().label,
                    css: {
                        fontSize: "12px",
                        fontWeight: "300",
                        lineHeight: "12px"
                    },
                    children: t
                })
            }
        })
          , j = JSON.parse('{"Cg":{"B":{"mass":1.5,"tension":180,"friction":26},"T":{"mass":1,"tension":180,"friction":28}},"jT":{"g":4500},"AR":{"MO":{"syncTouch":true,"smoothTouch":true,"smoothWheel":true,"lerp":0.1,"touchInertiaMultiplier":25,"touchMultiplier":1},"pR":2000,"Ur":1000,"xR":2,"tO":500,"R3":[500,2000,0.08,0.05]}}')
          , T = n(23168)
          , M = n(77153)
          , N = n.n(M)
          , A = n(50110);
        let q = (0,
        s.q)(f());
        function I(e) {
            let {aiPinImageFront: t, aiPinImageBack: n, animation: i, ...a} = e
              , {isPageEntered: l} = (0,
            m.T8)()
              , [c,d] = (0,
            s.q_)( () => ({
                y: i ? 1 : 0,
                config: {
                    duration: 400,
                    easing: T.Q9
                }
            }))
              , u = (0,
            o.useMemo)( () => l ? 600 : 300, []);
            return (0,
            o.useEffect)( () => {
                if (l && i) {
                    let e = setTimeout( () => {
                        d.start({
                            y: 0
                        })
                    }
                    , u);
                    return () => {
                        clearTimeout(e)
                    }
                }
                return () => {}
            }
            , [l]),
            (0,
            r.jsxs)("div", {
                className: N().aiPinContainer,
                ...a,
                children: [(0,
                r.jsxs)("div", {
                    className: N().aiPin,
                    children: [(0,
                    r.jsx)(q, {
                        className: N().image,
                        src: t.src,
                        alt: t.alt,
                        style: {
                            y: c.y.to([1, 0], ["-15%", "0%"])
                        },
                        loading: "eager",
                        fill: !0
                    }), (0,
                    r.jsx)(q, {
                        className: N().image,
                        src: n.src,
                        alt: n.alt,
                        style: {
                            y: c.y.to([1, 0], ["15%", "0%"])
                        },
                        loading: "eager",
                        fill: !0
                    })]
                }), (0,
                r.jsx)(A.Z, {
                    className: N().videoThumbnailButton
                })]
            })
        }
        var S = n(97914);
        let k = (0,
        s.q)(S.Z);
        function R(e) {
            let {textData: t, animation: n, ...i} = e
              , {isPageEntered: a} = (0,
            m.T8)()
              , [l,c] = (0,
            s.bY)(3, () => ({
                progress: n ? 1 : 0,
                config: {
                    mass: 1.5,
                    tension: 160,
                    friction: 22
                }
            }))
              , u = (0,
            o.useMemo)( () => a ? 600 : 300, []);
            return (0,
            o.useEffect)( () => {
                if (a && n) {
                    let e = setTimeout( () => {
                        c.start(e => ({
                            progress: 0,
                            delay: 150 * e
                        }))
                    }
                    , u + 400);
                    return () => {
                        clearTimeout(e)
                    }
                }
                return () => {}
            }
            , [a]),
            (0,
            r.jsxs)(s.q.div, {
                className: N().copy,
                ...i,
                children: [(0,
                r.jsx)("div", {
                    className: N().aipinLogo,
                    children: (0,
                    r.jsx)(k, {
                        className: N().line,
                        style: {
                            y: l[0].progress.to([1, 0], ["100%", "0%"]),
                            scale: l[0].progress.to([1, 0], [.9, 1]),
                            opacity: l[0].progress.to([1, 0], [0, 1])
                        }
                    })
                }), (0,
                r.jsx)(d.ZT, {
                    as: "div",
                    variant: "headline3",
                    className: N().price,
                    children: (0,
                    r.jsx)(s.q.div, {
                        className: N().line,
                        style: {
                            y: l[1].progress.to([1, 0], ["100%", "0%"]),
                            scale: l[1].progress.to([1, 0], [.9, 1]),
                            opacity: l[1].progress.to([1, 0], [0, 1])
                        },
                        children: t.price
                    })
                })]
            })
        }
        let D = (0,
        s.q)(P)
          , E = (0,
        s.q)(d.ZT)
          , C = (0,
        s.q)(R);
        var B = (0,
        o.forwardRef)(function(e, t) {
            let {data: n, isActive: i, modeSpring: a, onExit: l, children: m} = e
              , d = (0,
            o.useRef)(null);
            (0,
            o.useImperativeHandle)(t, () => ({
                jumpTo: e => {
                    d.current.jumpTo(e)
                }
                ,
                getCurrentSectionIndex: () => d.current.getCurrentIndex()
            }));
            let p = (0,
            o.useRef)(null)
              , v = () => {
                p.current = setTimeout(l, j.jT.g)
            }
              , f = () => {
                p.current && clearTimeout(p.current)
            }
            ;
            (0,
            o.useEffect)( () => {
                i && v()
            }
            , [i]);
            let _ = (0,
            g.Z)(h()._navbarMq, !0);
            return (0,
            r.jsx)(u.Z, {
                ref: d,
                className: c()(h().accelerator, {
                    [h().active]: i
                }),
                isActive: i,
                itemsNumber: n.length,
                threshold: 200,
                "data-lenis-prevent": !0,
                onChange: v,
                onScroll: f,
                onClick: () => {
                    f(),
                    l()
                }
                ,
                children: e => {
                    let {springs: t} = e;
                    return (0,
                    r.jsxs)(r.Fragment, {
                        children: [n.map( (e, n) => {
                            var i;
                            let {config: o, hero: l, content: m} = e
                              , d = t[n].position.to([-2, -1, 0, 1, 2], [-1, -1, 0, 1, 1])
                              , u = t[n].position.to([-4, -3, -2, -1, 0, 1, 2, 3, 4], [-1.515, -1.515, -1.015, -.515, 0, .515, 1.015, 1.515, 1.515])
                              , g = t[n].position.to([-2, -1, 0, 1, 2], [-.15, -.15, 0, .15, .15]);
                            return (0,
                            r.jsxs)(s.q.div, {
                                className: c()(h().item, {
                                    [h()["acceleratorVariant".concat(l.acceleratorVariant)]]: l.acceleratorVariant
                                }),
                                style: {
                                    y: (0,
                                    s.to)([d, u, a], (e, t, n) => "".concat(-((e * (1 - n) + t * n) * 100), "%")),
                                    scale: a.to([0, 1], [1, .5]),
                                    opacity: (0,
                                    s.to)([d.to([-1, 0, 1], [.5, 1, .5]), a.to(e => e > 0 ? 1 : 0)], (e, t) => e * t),
                                    display: a.to(e => e > 0 ? "" : "none")
                                },
                                children: [(0,
                                r.jsx)(s.q.div, {
                                    className: h().body,
                                    style: {
                                        scale: a.to([0, 1], [1, .7]).to(e => 1 / e),
                                        y: (0,
                                        s.to)([g, a], (e, t) => "".concat(e * t * 100, "%"))
                                    },
                                    children: o.isIntro ? (0,
                                    r.jsx)(I, {
                                        aiPinImageFront: m[0].data.aiPinImageFront,
                                        aiPinImageBack: m[0].data.aiPinImageBack
                                    }) : (0,
                                    r.jsx)(y, {
                                        className: h().image,
                                        data: {
                                            src: _ ? l.background.src : null !== (i = l.background.mobileSrc) && void 0 !== i ? i : l.background.src,
                                            alt: l.background.alt,
                                            objectPosition: l.background.objectPosition
                                        }
                                    })
                                }), o.isIntro ? (0,
                                r.jsx)(C, {
                                    textData: m[0].data.textData,
                                    style: {
                                        opacity: a.to([0, .5, 1], [1, 0, 0])
                                    }
                                }) : (0,
                                r.jsxs)(r.Fragment, {
                                    children: [(0,
                                    r.jsx)(D, {
                                        className: h().eyebrow,
                                        style: {
                                            opacity: a.to([0, .5, 1], [1, 0, 0])
                                        },
                                        children: l.eyebrow
                                    }), (0,
                                    r.jsx)(E, {
                                        className: h().headline,
                                        theme: "dark",
                                        variant: "title3",
                                        style: {
                                            opacity: t[n].position.to([-1, 0, 1], [0, 1, 0]),
                                            y: (0,
                                            s.to)([d, a], (e, t) => "".concat(e * t * 2, "em"))
                                        },
                                        children: l.headline.map( (e, t) => (0,
                                        r.jsx)("span", {
                                            children: e
                                        }, t))
                                    })]
                                })]
                            }, n)
                        }
                        ), m(t)]
                    })
                }
            })
        })
          , F = n(49831)
          , L = n(3665)
          , z = n(92955)
          , H = n(72766)
          , O = n(32903);
        function V() {
            let e = (0,
            o.useRef)(null)
              , t = (0,
            o.useMemo)( () => ({
                uTime: {
                    value: 0
                }
            }), []);
            return (0,
            z.F)(n => {
                let {clock: i} = n;
                e.current && (t.uTime.value = i.elapsedTime)
            }
            ),
            (0,
            r.jsxs)("mesh", {
                ref: e,
                children: [(0,
                r.jsx)("planeGeometry", {
                    args: [2, 2]
                }), (0,
                r.jsx)("shaderMaterial", {
                    depthWrite: !1,
                    fragmentShader: "\n  precision mediump float;\n\n  varying vec2 vUv;\n\n  uniform float uTime;\n\n  vec2 randomGradient(vec2 p) {\n    p = p + 0.02;\n    float x = dot(p, vec2(123.4, 234.5));\n    float y = dot(p, vec2(234.5, 345.6));\n    vec2 gradient = vec2(x, y);\n    gradient = sin(gradient);\n    gradient = gradient * 43758.5453;\n    gradient = sin(gradient + uTime * 1.5);\n    return gradient;\n  }\n\n  vec2 cubic(vec2 p) {\n    return p * p * (3.0 - p * 2.0);\n  }\n\n  vec2 quintic(vec2 p) {\n    return p * p * p * (10.0 + p * (-15.0 + p * 6.0));\n  }\n\n  void main() {\n    vec2 uv = vUv;\n    vec3 color = vec3(0.0);\n\n    // set up a grid of cells\n    uv = uv * 4.0;\n    vec2 gridId = floor(uv);\n    vec2 gridUv = fract(uv);\n    color = vec3(gridId, 0.0);\n    color = vec3(gridUv, 0.0);\n\n    // start by finding the coords of grid corners\n    vec2 bl = gridId + vec2(0.0, 0.0);\n    vec2 br = gridId + vec2(1.0, 0.0);\n    vec2 tl = gridId + vec2(0.0, 1.0);\n    vec2 tr = gridId + vec2(1.0, 1.0);\n\n    // find random gradient for each grid corner\n    vec2 gradBl = randomGradient(bl);\n    vec2 gradBr = randomGradient(br);\n    vec2 gradTl = randomGradient(tl);\n    vec2 gradTr = randomGradient(tr);\n\n    // find distance from current pixel to each grid corner\n    vec2 distFromPixelToBl = gridUv - vec2(0.0, 0.0);\n    vec2 distFromPixelToBr = gridUv - vec2(1.0, 0.0);\n    vec2 distFromPixelToTl = gridUv - vec2(0.0, 1.0);\n    vec2 distFromPixelToTr = gridUv - vec2(1.0, 1.0);\n\n    // calculate the dot products of gradients + distances\n    float dotBl = dot(gradBl, distFromPixelToBl);\n    float dotBr = dot(gradBr, distFromPixelToBr);\n    float dotTl = dot(gradTl, distFromPixelToTl);\n    float dotTr = dot(gradTr, distFromPixelToTr);\n\n    // smooth out gridUvs\n    // gridUv = smoothstep(0.0, 1.0, gridUv);\n    // gridUv = cubic(gridUv);\n    gridUv = quintic(gridUv);\n\n    // perform linear interpolation between 4 dot products\n    float b = mix(dotBl, dotBr, gridUv.x);\n    float t = mix(dotTl, dotTr, gridUv.x);\n    float perlin = mix(b, t, gridUv.y);\n\n    // display perlin noise\n    color = vec3(perlin + 0.2);\n\n    // billow noise\n    // float billow = abs(perlin);\n    // color = vec3(billow);\n\n    // ridged noise\n    // float ridgedNoise = 1.0 - abs(perlin);\n    // ridgedNoise = ridgedNoise * ridgedNoise;\n    // color = vec3(ridgedNoise);\n\n    gl_FragColor = vec4(color, 1.0);\n  }\n",
                    vertexShader: "\n  varying vec2 vUv;\n\n  void main() {\n    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n\n    vUv = uv;\n\n    gl_Position = projectedPosition;\n  }\n",
                    uniforms: t
                })]
            })
        }
        var U = n(31986)
          , G = n.n(U);
        (i = a || (a = {}))[i.Scroll = 0] = "Scroll",
        i[i.Frozen = 1] = "Frozen",
        i[i.Accelerator = 2] = "Accelerator";
        let K = (0,
        o.createContext)({
            mode: 0
        });
        function Z(e) {
            let {mode: t, children: n} = e
              , i = (0,
            o.useMemo)( () => ({
                mode: t
            }), [t]);
            return (0,
            r.jsx)(K.Provider, {
                value: i,
                children: n
            })
        }
        let W = o.useLayoutEffect
          , Y = (0,
        o.createContext)({
            isCanvasActive: !1,
            canvasChildren: [],
            setCanvasActive: () => {}
            ,
            addCanvasChildren: () => {}
            ,
            onFrame: () => {}
            ,
            onFrameCallbacksRef: {
                current: []
            }
        });
        function J(e) {
            let {children: t} = e
              , [n,i] = (0,
            o.useState)(!1)
              , [a,s] = (0,
            o.useState)([])
              , l = e => (s(t => [...t, e]),
            () => {
                s(t => t.filter(t => t !== e))
            }
            )
              , c = (0,
            o.useRef)([])
              , m = e => {
                let {current: t} = c;
                return t.push(e),
                () => {
                    let n = t.indexOf(e);
                    n > -1 && t.splice(n, 1)
                }
            }
              , d = (0,
            o.useMemo)( () => ({
                isCanvasActive: n,
                canvasChildren: a,
                setCanvasActive: i,
                addCanvasChildren: l,
                onFrame: m,
                onFrameCallbacksRef: c
            }), [n, a]);
            return (0,
            r.jsx)(Y.Provider, {
                value: d,
                children: t
            })
        }
        function Q(e) {
            let {isActive: t, children: n} = e
              , {setCanvasActive: i, addCanvasChildren: a} = (0,
            o.useContext)(Y)
              , s = (0,
            o.useRef)(null);
            return (0,
            o.useEffect)( () => {
                i(t),
                s.current && (s.current.visible = t)
            }
            , [t]),
            W( () => a((0,
            r.jsx)("group", {
                ref: s,
                children: n
            })), []),
            null
        }
        function X(e) {
            let {onFrame: t} = (0,
            o.useContext)(Y);
            (0,
            o.useEffect)( () => t(e), [t, e])
        }
        function $() {
            let {onFrameCallbacksRef: e} = (0,
            o.useContext)(Y);
            return (0,
            z.F)(t => {
                for (let n = e.current.length; n--; )
                    e.current[n](t)
            }
            ),
            null
        }
        let ee = new O.Scene;
        function et() {
            let e = (0,
            o.useContext)(K)
              , {isCanvasActive: t, canvasChildren: n} = (0,
            o.useContext)(Y)
              , [i,s] = (0,
            o.useState)(1)
              , l = e.mode === a.Scroll;
            return (0,
            r.jsx)("div", {
                className: G().main,
                children: (0,
                r.jsxs)(H.Xz, {
                    dpr: t ? i : .1,
                    frameloop: l ? "always" : "demand",
                    children: [(0,
                    r.jsx)(L.A, {
                        onIncline: () => s(2),
                        onDecline: () => s(1)
                    }), !1, (0,
                    r.jsx)($, {}), (0,
                    z.h)((0,
                    r.jsx)(V, {}), ee), (0,
                    r.jsx)("group", {
                        visible: l,
                        children: n
                    })]
                })
            })
        }
        var en = n(84602)
          , ei = n.n(en)
          , ea = n(85898)
          , er = n.n(ea);
        let eo = (0,
        s.q)(d.ZT)
          , es = (0,
        s.q)(f())
          , el = e => {
            let t = Math.floor(e / 2) + e % 2
              , n = 1 / e / 6
              , i = e % 2 != 0
              , a = []
              , r = []
              , o = (e, t) => {
                a.push(e),
                r.push(t)
            }
              , s = 0;
            o(0, 0);
            for (let e = 0; e < t; e += 1)
                o(s += n, 0),
                o(s += n, 0),
                i && e === t - 1 ? (o(s += n, 0),
                o(s += n, 0),
                o(s += n, 0)) : (o(s += n, 1),
                o(s += n, 1),
                o(s += n, 1),
                o(s += n, 1));
            let l = r.map( () => 1);
            return {
                transitionDuration: n,
                timings: [a, r, l]
            }
        }
        ;
        function ec(e) {
            let {items: t, progress: n, dimmingProgress: i} = e
              , {timings: [a,o,l], transitionDuration: c} = el(t.length)
              , m = t.filter(e => "human" === e.type)
              , d = t.filter(e => "aipin" === e.type);
            return (0,
            r.jsxs)(s.q.div, {
                className: er().root,
                style: {
                    opacity: i
                },
                children: [(0,
                r.jsx)("div", {
                    className: er().text,
                    children: d.map( (e, t) => (0,
                    r.jsxs)(eo, {
                        as: "div",
                        variant: "body1",
                        style: {
                            width: "100%",
                            textAlign: "center",
                            fontWeight: "500",
                            color: "var(--hu-colors-beam-base)",
                            alignSelf: "center",
                            display: n.to([(6 * t + 2) * c, (6 * t + 5) * c, (6 * t + 7) * c], [0, 1, 0]).to(e => e > 0 ? "block" : "none")
                        },
                        children: [e.text, (0,
                        r.jsx)(s.q.div, {
                            style: {
                                y: n.to([(6 * t + 2) * c, (6 * t + 5) * c, (6 * t + 7) * c], ["0%", "-50%", "-75%"])
                            },
                            className: er().textGradient
                        })]
                    }, e.text))
                }), (0,
                r.jsxs)("div", {
                    className: er().images,
                    children: [(0,
                    r.jsx)(es, {
                        src: "/aipin/overview/ai-pin-mic/aipin-mic-on.png",
                        alt: "",
                        fill: !0,
                        style: {
                            objectFit: "contain",
                            opacity: n.to(a, l)
                        }
                    }), (0,
                    r.jsx)(es, {
                        src: "/aipin/overview/ai-pin-mic/aipin-mic-off.png",
                        alt: "",
                        fill: !0,
                        style: {
                            objectFit: "contain",
                            opacity: n.to(a, o)
                        }
                    })]
                }), (0,
                r.jsx)("div", {
                    className: er().text,
                    children: m.map( (e, t) => (0,
                    r.jsxs)(eo, {
                        as: "div",
                        variant: "body1",
                        style: {
                            fontWeight: "500",
                            color: "#fff",
                            alignSelf: "flex-start",
                            display: n.to([(6 * t + 0) * c, (6 * t + 2) * c, (6 * t + 6) * c], [0, 1, 0]).to(e => e > 0 ? "block" : "none")
                        },
                        children: [e.text, (0,
                        r.jsx)(s.q.div, {
                            style: {
                                y: n.to([(6 * t + 0) * c, (6 * t + 2) * c, (6 * t + 6) * c], ["0%", "-50%", "-75%"])
                            },
                            className: er().textGradient
                        })]
                    }, e.text))
                })]
            })
        }
        var em = n(72576)
          , ed = n.n(em);
        let eu = (0,
        s.q)(d.ZT)
          , eg = (e, t) => {
            let n = 1 / e;
            return [n * t, n * t + n]
        }
          , ep = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3
              , i = 1 / (e + 1 + n)
              , a = i * t
              , r = a + i
              , o = r + n * i;
            return [a, r, o, o + i]
        };
        function eh(e) {
            let {items: t, progress: n, dimmingProgress: i, style: a} = e
              , o = (0,
            g.Z)(ed()._navbarMq, !0);
            return (0,
            r.jsx)(s.q.div, {
                className: ed().root,
                style: {
                    opacity: i
                },
                children: (0,
                r.jsx)(s.q.div, {
                    className: ed().textContainer,
                    style: {
                        y: n.to([0, 0, 1, 1], [o ? "50%" : "100%", o ? "50%" : "100%", o ? "0%" : "-50%", o ? "0%" : "-50%"]),
                        ...a
                    },
                    children: t.map( (e, i) => {
                        let {type: a, text: l} = e;
                        return (0,
                        r.jsx)(s.q.div, {
                            style: {
                                maxWidth: "80%",
                                alignSelf: "aipin" === a ? "flex-end" : "flex-start"
                            },
                            children: (0,
                            r.jsx)(eu, {
                                css: {
                                    position: "relative",
                                    fontWeight: 500,
                                    color: "aipin" === a ? "var(--hu-colors-beam-base)" : "#fff",
                                    "@navbar": {
                                        fontSize: "24px"
                                    }
                                },
                                variant: "body1",
                                as: "div",
                                style: {
                                    opacity: o ? n.to(eg(t.length, i), [0, 1, 1]) : n.to(ep(t.length, i), [0, 1, 1, 0])
                                },
                                children: l
                            })
                        }, "".concat(a, "-").concat(l))
                    }
                    )
                })
            })
        }
        var ev = n(98570)
          , ef = n.n(ev)
          , e_ = n(97270)
          , ex = n.n(e_);
        let ey = (0,
        s.q)(d.ZT);
        function eb(e) {
            let {className: t, style: n, data: i, enteringProgress: a, ...o} = e;
            return (0,
            r.jsx)(ey, {
                className: c()(ex().main, t),
                theme: "dark",
                variant: "title3",
                style: {
                    opacity: a.to([0, .4, 1], [0, 0, 1]),
                    y: a.to([0, .4, 1], [200, 200, 0]),
                    ...n
                },
                ...o,
                children: i.map( (e, t) => (0,
                r.jsx)("span", {
                    children: e
                }, t))
            })
        }
        var ew = n(35613)
          , eP = n.n(ew);
        let ej = (0,
        s.q)(y);
        function eT(e) {
            let {className: t, style: n, data: i, enteringProgress: a, dimmingProgress: o} = e
              , {isPageEntered: l} = (0,
            m.T8)();
            return (0,
            r.jsx)(s.q.div, {
                className: eP().main,
                style: {
                    opacity: o,
                    ...n
                },
                children: (0,
                r.jsx)(ej, {
                    className: c()(eP().image, t),
                    data: i,
                    style: {
                        scale: a.to(e => (0,
                        T.Ge)(e)).to([0, 1], [4, 1]),
                        opacity: a.to([0, .1, 1], [0, 0, 1])
                    },
                    loading: l ? "eager" : "lazy"
                })
            })
        }
        var eM = n(99934)
          , eN = n.n(eM);
        let eA = {
            subheadline: "headline1",
            paragraph: "headline3"
        };
        function eq(e) {
            let {className: t, style: n, data: i, progress: a, ...l} = e
              , m = (0,
            o.useMemo)( () => {
                let e = 1 / ((i.length + 1) * .6);
                return i.map( (t, n) => a.to([0, e * n * .6, e * (.6 * n + 1), 1], [0, 0, 1, 1]))
            }
            , [i, a]);
            return (0,
            r.jsx)(s.q.div, {
                className: c()(eN().main, t),
                style: {
                    display: a.to(e => e >= 0 && e <= 1 ? "" : "none"),
                    ...n
                },
                ...l,
                children: i.map( (e, t) => {
                    let {type: n, text: i, component: a} = e;
                    return (0,
                    r.jsx)(s.q.div, {
                        className: c()(eN().item, n && eN()[n]),
                        style: {
                            y: m[t].to([0, 1], ["0%", "-100%"]),
                            scale: m[t].to([0, .4, 1], [1, 1, .9]),
                            opacity: m[t].to([0, .3, .5, .8, 1], [0 === t ? 1 : 0, 1, 1, 0, 0]),
                            filter: m[t].to([0, .5, .7, 1], [0, 0, 12, 12]).to(e => "blur(".concat(e, "px)"))
                        },
                        children: a || (0,
                        r.jsx)(d.ZT, {
                            variant: n && eA[n],
                            theme: "dark",
                            children: i
                        })
                    }, t)
                }
                )
            })
        }
        let eI = (0,
        s.q)(y);
        var eS = n(41940)
          , ek = n(94115)
          , eR = n.n(ek);
        function eD(e) {
            let {progress: t} = e;
            return (0,
            r.jsxs)(s.q.div, {
                className: eR().root,
                style: {
                    opacity: t.to([0, .01, .2, 1], [0, 0, 1, 1]),
                    y: t.to([0, 1, 1], ["100%", "0%"])
                },
                children: [(0,
                r.jsx)(s.q.div, {
                    className: eR().gradient
                }), (0,
                r.jsxs)("div", {
                    className: eR().main,
                    children: [(0,
                    r.jsxs)("div", {
                        className: eR().text,
                        children: [(0,
                        r.jsx)(d.ZT, {
                            theme: "dark",
                            css: {
                                fontSize: "20px",
                                lineHeight: "30px",
                                fontWeight: 500,
                                margin: 0,
                                "@navbar": {
                                    fontSize: "32px",
                                    lineHeight: "40px"
                                }
                            },
                            as: "h2",
                            children: "Everything that belongs to you"
                        }), (0,
                        r.jsx)(d.ZT, {
                            theme: "dark",
                            variant: "body1",
                            css: {
                                margin: 0
                            },
                            as: "p",
                            children: ".Center is home to your photos, notes, lists, and more. To relive your memories, organize your stuff, or manage your preferences, visit .Center using any web browser."
                        })]
                    }), (0,
                    r.jsx)("div", {
                        className: eR().centerImage,
                        children: (0,
                        r.jsx)(f(), {
                            src: "/aipin/overview/photographer/footer/memories-tab-center.jpg",
                            alt: "An image of .Center on the web",
                            fill: !0
                        })
                    })]
                }), (0,
                r.jsx)(d.ZT, {
                    as: "div",
                    variant: "label2",
                    theme: "dark",
                    className: eR().disclaimer,
                    children: "Features are subject to change. A subscription is required to use Ai Pin. Ai Pin should not be used to diagnose, prevent, treat or cure a health condition or for any other medical purpose. Applies to Humane Core Plan only. Premium Add-Ons and additional services not included."
                }), (0,
                r.jsx)(eS.Z, {
                    className: eR().websiteFooter
                })]
            })
        }
        var eE = n(38688)
          , eC = n.n(eE);
        let eB = (0,
        s.q)(f())
          , eF = e => "/aipin/overview/photographer/".concat(e)
          , eL = {
            imgSrc: eF("d-1-2.jpg"),
            className: eC().b,
            desktop: {
                x: 0,
                y: 0
            },
            mobile: {
                row: 1,
                col: 1
            },
            central: !0,
            preload: !0
        }
          , ez = [{
            imgSrc: eF("d-1-1.jpg"),
            className: eC().a,
            desktop: {
                x: -1,
                y: 0
            },
            mobile: {
                row: 1,
                col: 1
            },
            preload: !0
        }, eL, {
            imgSrc: eF("d-1-3.jpg"),
            className: eC().c,
            desktop: {
                x: 1,
                y: 0
            },
            mobile: {
                row: 1,
                col: 3
            },
            preload: !0
        }, {
            imgSrc: eF("d-2-1.jpg"),
            className: eC().d,
            desktop: {
                x: -2,
                y: 2
            },
            mobile: {
                row: 2,
                col: 1
            }
        }, {
            imgSrc: eF("d-2-2.jpg"),
            className: eC().e,
            desktop: {
                x: -1.5,
                y: 2
            },
            mobile: {
                row: 2,
                col: 1
            }
        }, {
            imgSrc: eF("d-2-3.jpg"),
            className: eC().f,
            desktop: {
                x: 0,
                y: 2
            },
            mobile: {
                row: 2,
                col: 2
            }
        }, {
            imgSrc: eF("d-2-4.jpg"),
            className: eC().g,
            desktop: {
                x: 1.5,
                y: 2
            },
            mobile: {
                row: 2,
                col: 3
            }
        }, {
            imgSrc: eF("d-3-1.jpg"),
            className: eC().h,
            desktop: {
                x: -2,
                y: 4
            },
            mobile: {
                row: 3,
                col: 2
            }
        }, {
            imgSrc: eF("d-3-2.jpg"),
            className: eC().i,
            desktop: {
                x: -1.5,
                y: 4
            },
            mobile: {
                row: 3,
                col: 1
            }
        }, {
            imgSrc: eF("d-3-3.jpg"),
            className: eC().j,
            desktop: {
                x: -1.5,
                y: 5
            },
            mobile: {
                row: 3,
                col: 1
            }
        }, {
            imgSrc: eF("d-3-4.jpg"),
            className: eC().k,
            desktop: {
                x: 1.5,
                y: 4
            },
            mobile: {
                row: 3,
                col: 1
            }
        }, {
            imgSrc: eF("d-3-5.jpg"),
            className: eC().l,
            desktop: {
                x: 2,
                y: 4
            },
            mobile: {
                row: 3,
                col: 3
            }
        }, {
            imgSrc: eF("d-4-1.jpg"),
            className: eC().m,
            desktop: {
                x: -5,
                y: 6
            },
            mobile: {
                row: 4,
                col: 1
            }
        }, {
            imgSrc: eF("d-4-2.jpg"),
            className: eC().n,
            desktop: {
                x: 0,
                y: 6
            },
            mobile: {
                row: 4,
                col: 2
            }
        }, {
            imgSrc: eF("d-4-3.jpg"),
            className: eC().o,
            desktop: {
                x: 5,
                y: 6
            },
            mobile: {
                row: 4,
                col: 3
            }
        }, {
            imgSrc: eF("d-5-1.jpg"),
            className: eC().p,
            desktop: {
                x: -6,
                y: 8
            },
            mobile: {
                row: 5,
                col: 1
            }
        }, {
            imgSrc: eF("d-5-2.jpg"),
            className: eC().q,
            desktop: {
                x: -5,
                y: 8
            },
            mobile: {
                row: 5,
                col: 1
            }
        }, {
            imgSrc: eF("d-5-3.jpg"),
            className: eC().r,
            desktop: {
                x: 0,
                y: 8
            },
            mobile: {
                row: 5,
                col: 2
            }
        }, {
            imgSrc: eF("d-5-4.jpg"),
            className: eC().s,
            desktop: {
                x: 5,
                y: 8
            },
            mobile: {
                row: 5,
                col: 3
            }
        }, {
            imgSrc: eF("d-5-5.png"),
            className: eC().t,
            desktop: {
                x: 5,
                y: 8
            },
            mobile: {
                row: 5,
                col: 3
            }
        }, {
            imgSrc: eF("d-5-6.jpg"),
            className: eC().u,
            desktop: {
                x: 6,
                y: 8
            },
            mobile: {
                row: 5,
                col: 3
            }
        }];
        function eH(e) {
            let {progress: t, heroImageObjectPosition: n} = e
              , i = Math.ceil(1.5)
              , a = (0,
            o.useRef)(null)
              , l = (0,
            o.useRef)(null)
              , m = (0,
            o.useRef)(null)
              , d = (0,
            g.Z)(eC()._navbarMq, !0);
            return (0,
            r.jsxs)(s.q.div, {
                ref: a,
                className: eC().main,
                style: {
                    y: t.to([0, .5, 1, 1], [0, 0, 1, 1]).to(e => {
                        var t, n, i;
                        let r = null === (n = a.current) || void 0 === n ? void 0 : null === (t = n.parentElement) || void 0 === t ? void 0 : t.clientHeight
                          , o = null === (i = a.current) || void 0 === i ? void 0 : i.clientHeight;
                        if (o && r) {
                            let t = o - r;
                            if (t > 0)
                                return "-".concat(e * t, "px")
                        }
                        return "0px"
                    }
                    )
                },
                children: [(0,
                r.jsx)("div", {
                    className: eC().grid,
                    children: ez.map(e => {
                        let {mobile: {col: n, row: a}} = e;
                        return e.central ? (0,
                        r.jsx)("div", {
                            ref: l,
                            className: c()(e.className),
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        }, e.imgSrc) : d ? (0,
                        r.jsx)(eB, {
                            src: e.imgSrc,
                            alt: "alt",
                            className: c()(e.className, eC().gridImage),
                            style: {
                                x: t.to([0, .5, 1], [0, 1, 1]).to(t => "".concat(100 * e.desktop.x * (1 - t), "vw")),
                                y: t.to([0, .5, 1], [0, 1, 1]).to(t => "".concat(100 * e.desktop.y * (1 - t), "vh")),
                                scale: t.to([0, .5, 1], [2, 1, 1]),
                                opacity: t.to([0, .375, .5, 1], [0, 0, 1, 1]),
                                transformOrigin: "50% 0%"
                            },
                            loading: e.preload ? "eager" : "lazy",
                            fill: !0
                        }, e.imgSrc) : (0,
                        r.jsx)(eB, {
                            src: e.imgSrc,
                            alt: "alt",
                            className: c()(e.className, eC().gridImage),
                            style: {
                                x: t.to([0, .375, 1], [0, 0, 1]).to([.2 * (a - 1), .2 * a, 1], [0, 1, 1]).to(e => "".concat((n - i) * (1 - e) * 50, "%")),
                                y: t.to([0, .375, 1], [0, 0, 1]).to([0, .2 * (a - 1), .2 * a, 1], [0, 0, 1, 1]).to(e => 1 === a ? "0%" : "".concat((1 - e) * 50, "%")),
                                opacity: t.to([0, .375, 1], [0, 0, 1]).to([.2 * (a - 1), .2 * (a - 0), 1], [0, 1, 1]),
                                transformOrigin: "50% 0%"
                            },
                            loading: e.preload ? "eager" : "lazy",
                            fill: !0
                        }, e.imgSrc)
                    }
                    )
                }), (0,
                r.jsx)(s.q.div, {
                    ref: m,
                    className: eC().centralImageContainer,
                    style: {
                        y: t.to([0, .5, 1], [0, 1, 1]).to(e => {
                            if (l.current && m.current) {
                                let {top: t} = l.current.getBoundingClientRect();
                                return (t - (d ? 0 : 72)) * e
                            }
                            return 0
                        }
                        ),
                        x: t.to([0, .5, 1], [0, 1, 1]).to(e => {
                            if (l.current && m.current) {
                                let {left: t} = l.current.getBoundingClientRect();
                                return t * e
                            }
                            return 0
                        }
                        ),
                        width: t.to([0, .5, 1], [0, 1, 1]).to(e => {
                            var t, n;
                            let i = null === (n = l.current) || void 0 === n ? void 0 : null === (t = n.getBoundingClientRect()) || void 0 === t ? void 0 : t.width
                              , a = window.innerWidth;
                            return i ? i + (a - i) * (1 - e) : a
                        }
                        ),
                        height: t.to([0, .5, 1], [0, 1, 1]).to(e => {
                            var t, n;
                            let i = null === (n = l.current) || void 0 === n ? void 0 : null === (t = n.getBoundingClientRect()) || void 0 === t ? void 0 : t.height
                              , a = window.innerHeight - 72;
                            return i ? i + (a - i) * (1 - e) : a
                        }
                        )
                    },
                    children: (0,
                    r.jsx)(eB, {
                        src: eL.imgSrc,
                        alt: "alt",
                        style: {
                            borderRadius: t.to([0, .5, 1], [0, 40, 40]),
                            objectPosition: n
                        },
                        fill: !0
                    })
                })]
            })
        }
        var eO = n(45232)
          , eV = n(62239)
          , eU = n.n(eV)
          , eG = n(30088)
          , eK = n.n(eG);
        let eZ = parseFloat(eK()._navbarHeight);
        function eW(e) {
            let {id: t, progress: n} = e
              , [[i,a],l] = (0,
            o.useState)([0, 0]);
            (0,
            o.useEffect)( () => {
                let e = () => {
                    l([window.innerWidth, window.innerHeight])
                }
                ;
                return e(),
                window.addEventListener("resize", e),
                () => {
                    window.removeEventListener("resize", e)
                }
            }
            , []);
            let c = a - eZ
              , m = .2 * i;
            return (0,
            r.jsx)("svg", {
                className: eK().sectionMask,
                viewBox: "0 0 ".concat(i, " ").concat(a),
                children: (0,
                r.jsx)("clipPath", {
                    id: t,
                    children: (0,
                    r.jsx)(s.q.path, {
                        d: (0,
                        s.to)([n.to([0, .95, 1], [c + m, 0, 0]), n.to([0, .95, 1], [c, -m, -m])], (e, t) => "\n            M0 ".concat(c, "\n            L").concat(i, " ").concat(c, "\n            L").concat(i, " ").concat(e, "\n            Q").concat(.5 * i, " ").concat(t, "\n            ", 0, " ").concat(e, "\n            Z\n          "))
                    })
                })
            })
        }
        var eY = n(95434)
          , eJ = n.n(eY)
          , eQ = n(56321)
          , eX = n(8105);
        function e$(e) {
            return (0,
            o.forwardRef)(function(t, n) {
                var i;
                let {data: a, scrollingElementsContainer: l, config: c, onEnter: m, onProgress: d, onLeave: u} = t
                  , g = (0,
                o.useRef)(null)
                  , p = (0,
                o.useRef)(null);
                (0,
                o.useImperativeHandle)(n, () => p.current);
                let[h,v] = (0,
                s.q_)( () => ({
                    totalProgress: -1,
                    activeProgress: 0,
                    enteringProgress: 0,
                    leavingProgress: 0,
                    onChange: e => {
                        let {value: t} = e;
                        null == d || d(t)
                    }
                }))
                  , f = (0,
                o.useRef)(1)
                  , _ = (e, t) => {
                    let n = p.current;
                    if (!n || !c.snapping)
                        return;
                    let {animatedScroll: i, targetScroll: a} = e
                      , r = t || Math.sign(a - i);
                    0 === r ? r = f.current : f.current = r;
                    let o = t => {
                        e.options.lerp = function(e, t) {
                            let[n,i,a,r] = t
                              , o = (r - a) / (i - n);
                            return o * e + (a - o * n)
                        }(Math.abs(a - t), j.AR.R3),
                        e.scrollTo(t, {
                            offset: j.AR.xR * r
                        })
                    }
                      , {offsetTop: s} = n
                      , l = s + c.overlap[0];
                    a > s && a < l ? 1 === r ? o(l) : -1 === r && o(s - 1) : e.options.lerp = j.AR.MO.lerp
                }
                  , x = (0,
                o.useRef)(!1)
                  , y = (0,
                F.LZ)( () => {
                    if (p.current && g.current) {
                        let {top: e, height: t} = p.current.getBoundingClientRect()
                          , n = -e / t
                          , i = 0
                          , a = 0
                          , r = 0;
                        n > 1 ? (i = 1,
                        a = 1,
                        r = 1) : n >= 0 && n <= 1 && (i = eJ()(-(e + c.overlap[0]) / (t - c.overlap[0] - c.overlap[1]), 0, 1),
                        a = c.overlap[0] > 0 ? eJ()(-e / c.overlap[0], 0, 1) : 1,
                        r = c.overlap[1] > 0 ? eJ()(-(e + t - c.overlap[1]) / c.overlap[1], 0, 1) : 0),
                        1 !== a || 0 !== r || x.current || (x.current = !0,
                        null == m || m()),
                        (0 === a || 1 === r) && x.current && (x.current = !1,
                        null == u || u()),
                        v.set({
                            totalProgress: n,
                            activeProgress: i,
                            enteringProgress: a,
                            leavingProgress: r
                        })
                    }
                }
                , [m, u, l]);
                (0,
                o.useEffect)( () => {
                    if (c.snapping) {
                        let e = () => {
                            _(y)
                        }
                        ;
                        return window.addEventListener("wheel", e, {
                            passive: !1
                        }),
                        window.addEventListener("touchend", e, {
                            passive: !1
                        }),
                        () => {
                            window.removeEventListener("wheel", e),
                            window.removeEventListener("touchend", e)
                        }
                    }
                    return () => {}
                }
                , [c]),
                (0,
                eX.Z)({
                    prev: () => _(y, -1),
                    next: () => _(y, 1),
                    preventDefault: !1
                });
                let[b,w] = (0,
                o.useState)(null);
                return (0,
                o.useEffect)( () => {
                    w(p.current)
                }
                , [l]),
                (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)(s.q.div, {
                        ref: g,
                        className: eK().fixedElement,
                        style: {
                            display: (0,
                            s.to)([h.enteringProgress.to(e => e > 0 ? 1 : 0), h.leavingProgress.to(e => e < 1 ? 1 : 0)], (e, t) => e * t).to(e => 0 !== e ? "" : "none")
                        },
                        children: (0,
                        r.jsx)(e, {
                            data: a,
                            config: c,
                            scrollingElement: b,
                            progress: {
                                total: h.totalProgress,
                                active: h.activeProgress,
                                entering: h.enteringProgress,
                                leaving: h.leavingProgress
                            }
                        })
                    }), l && (0,
                    eQ.createPortal)((0,
                    r.jsx)("div", {
                        ref: p,
                        className: eK().scrollingElement,
                        style: {
                            "--height": "".concat(100 * c.height, "vh"),
                            "--height-mobile": "".concat((null !== (i = c.heightMobile) && void 0 !== i ? i : c.height / 2) * 100, "vh"),
                            "--overlap-top": "".concat(c.overlap[0], "px"),
                            "--overlap-bottom": "".concat(c.overlap[1], "px")
                        }
                    }), l)]
                })
            })
        }
        let e0 = (0,
        s.q)(d.ZT)
          , e1 = [1, .5, 1, .5, 1, .5]
          , e2 = () => {
            let e = []
              , t = Math.random();
            for (let n = 0; n < e1.length; n += 1)
                (t += .1) > 1 && (t -= 1),
                e.push(t);
            return e.sort(),
            e
        }
        ;
        function e5(e) {
            let {lines: t, progress: n} = e
              , i = (0,
            o.useCallback)( () => t.map(e => {
                let t = e.split(" ").map(e => e.split(""));
                return (0,
                r.jsx)("div", {
                    children: t.map( (e, i) => (0,
                    r.jsxs)("span", {
                        children: [e.map( (e, t) => (0,
                        r.jsx)(s.q.span, {
                            style: {
                                opacity: n.to(e2(), e1),
                                textShadow: "0px 0px 40px #008676"
                            },
                            children: e
                        }, "".concat(e, "-").concat(t))), i < t.length - 1 && " "]
                    }, "".concat(e, "-").concat(i)))
                }, e)
            }
            ), [n, t]);
            return (0,
            r.jsx)(e0, {
                as: "div",
                variant: "headline1",
                css: {
                    color: "$beam"
                },
                style: {
                    opacity: n.to([0, .05, .95, 1], [0, 1, 1, 0]),
                    textAlign: "center",
                    position: "absolute",
                    inset: "0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 500
                },
                children: i()
            })
        }
        var e3 = n(69960)
          , e7 = n.n(e3);
        let e8 = (0,
        s.q)(y)
          , e6 = (0,
        s.q)(d.ZT);
        var e4 = n(93763)
          , e9 = n.n(e4);
        let te = (0,
        s.q)(y);
        var tt = n(93315)
          , tn = n(72064);
        function ti(e) {
            let {aiPinSrc: t, progress: n} = e
              , i = (0,
            tn.mE)(t);
            (0,
            o.useEffect)( () => {
                i.colorSpace = O.LinearSRGBColorSpace,
                i.needsUpdate = !0
            }
            , [i]);
            let a = (0,
            o.useMemo)( () => ({
                uTexture: {
                    value: new O.Texture
                },
                uViewport: {
                    value: [0, 0]
                },
                uSize: {
                    value: [0, 0]
                },
                uActiveProgress: {
                    value: 0
                }
            }), [])
              , {size: s, viewport: l} = (0,
            z.D)();
            return (0,
            r.jsxs)("mesh", {
                onBeforeRender: () => {
                    a.uSize.value = [s.width, s.height],
                    a.uViewport.value = [l.width, l.height],
                    a.uActiveProgress.value = n.calc(n.source.get())
                }
                ,
                children: [(0,
                r.jsx)("planeGeometry", {
                    args: [2, 2]
                }), (0,
                r.jsx)("shaderMaterial", {
                    transparent: !0,
                    fragmentShader: "\n  uniform vec2 uViewport;\n  uniform sampler2D uTexture;\n\n  varying vec2 vUv;\n  varying vec3 vPosition;\n\n  void main() {\n    vec4 texture = texture2D(uTexture, vUv);\n\n    float alpha = 1.0 - smoothstep(uViewport.y * 0.35, uViewport.y * 0.5, vPosition.y * -1.0);\n\n    gl_FragColor = vec4(mix(vec3(0.0), texture.rgb, alpha), texture.a);\n  }\n",
                    vertexShader: "\n  uniform vec2 uSize;\n  uniform vec2 uViewport;\n  uniform float uActiveProgress;\n\n  varying vec2 vUv;\n  varying vec3 vPosition;\n\n  const float BREAKPOINT1_START = 0.7;\n  const float BREAKPOINT1_END = 0.75;\n\n  const float BREAKPOINT2_START = 0.7;\n  const float BREAKPOINT2_END = 1.0;\n\n  void main() {\n    vec3 pos = position;\n\n    float progress1 = smoothstep(BREAKPOINT1_START, BREAKPOINT1_END, uActiveProgress);\n    float progress2 = smoothstep(BREAKPOINT2_START, BREAKPOINT2_END, uActiveProgress);\n\n    pos.y -= uViewport.y * 0.5 * (1.0 - progress2) + (1.0 - progress1);\n\n    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n\n    vUv = uv;\n    vPosition = pos;\n\n    gl_Position = projectedPosition;\n  }\n",
                    uniforms: a,
                    "uniforms-uTexture-value": i
                })]
            })
        }
        var ta = n(85892)
          , tr = n.n(ta);
        let to = (0,
        s.q)(d.ZT)
          , ts = {
            mass: 1.5,
            friction: 15,
            tension: 120
        }
          , tl = {
            mass: 1,
            friction: 20,
            tension: 180
        };
        function tc(e) {
            let {index: t, data: n, bubblesPositions: i, progress: a, isInViewRef: l} = e
              , c = (0,
            o.useRef)(null)
              , [m] = (0,
            s.q_)( () => ({
                x: 0,
                y: 0,
                scale: 1
            }))
              , [{bubbleInOut: d},u] = (0,
            s.q_)( () => ({
                bubbleInOut: 0
            }))
              , g = (0,
            o.useRef)(null)
              , p = () => {
                u.start({
                    from: {
                        bubbleInOut: 0
                    },
                    to: async e => {
                        await new Promise(e => {
                            g.current = setTimeout(e, 600 * t)
                        }
                        ),
                        await e({
                            bubbleInOut: 1,
                            config: ts
                        }),
                        await new Promise(e => {
                            g.current = setTimeout(e, 1e3)
                        }
                        ),
                        await e({
                            bubbleInOut: 0,
                            config: tl
                        }),
                        await new Promise(e => {
                            g.current = setTimeout(e, (i.length - 1 - t) * 600)
                        }
                        )
                    }
                    ,
                    loop: !0
                })
            }
              , h = (0,
            o.useRef)(!1);
            return X(e => {
                let {size: n} = e;
                if (l.current) {
                    let e = a.calc(a.source.get());
                    e >= .35 && e <= .7 ? (m.x.set(i[t].x * n.width),
                    m.y.set(i[t].y * n.height),
                    m.scale.set((1.15 * i[t].z) ** 3),
                    h.current || (h.current = !0,
                    p())) : h.current && (h.current = !1,
                    g.current && clearTimeout(g.current),
                    u.stop(),
                    d.start(0, {
                        config: tl
                    }))
                }
            }
            ),
            (0,
            r.jsxs)(s.q.div, {
                ref: c,
                className: tr().bubble,
                style: {
                    x: m.x,
                    y: m.y,
                    scale: (0,
                    s.to)([m.scale, d.to([0, 1], [.5, 1])], (e, t) => e * t),
                    display: a.to(e => e < .35 || e > .7 ? "none" : "")
                },
                children: [(0,
                r.jsx)(to, {
                    as: "div",
                    className: tr().bubbleContact,
                    variant: "label2",
                    style: {
                        opacity: d
                    },
                    children: n.contact
                }), (0,
                r.jsx)(to, {
                    as: "div",
                    className: tr().bubbleMessage,
                    variant: "body2",
                    style: {
                        opacity: d
                    },
                    children: n.text
                })]
            })
        }
        function tm(e) {
            let {data: t, bubblesPositions: n, progress: i, isInViewRef: a} = e
              , {size: s, camera: l} = (0,
            z.D)()
              , [c,m] = (0,
            o.useState)(1);
            (0,
            o.useEffect)( () => {
                let e = 1
                  , t = s.width / s.height;
                t < 1.05 && (e = t / 1.05),
                m(e)
            }
            , [s]);
            let d = (0,
            o.useRef)(null)
              , u = (0,
            o.useMemo)( () => new O.Vector3, []);
            return (0,
            z.F)( () => {
                if (a.current) {
                    let e = d.current;
                    if (e) {
                        let {geometry: a} = e;
                        if (e.rotation.y = i.calc(i.source.get()),
                        a) {
                            let i = a.getAttribute("position");
                            for (let a = t.length; a--; )
                                u.fromBufferAttribute(i, t[a].position).applyMatrix4(e.matrix),
                                n[a].z = (u.z / 3.28 + 1) * .5,
                                u.applyMatrix4(l.matrixWorldInverse).applyMatrix4(l.projectionMatrix),
                                n[a].x = (u.x + 1) * .5,
                                n[a].y = 1 - (u.y + 1) * .5
                        }
                    }
                }
            }
            ),
            (0,
            r.jsx)("object3D", {
                ref: d,
                scale: [c, .6 * c, c],
                position: [0, 0, 0],
                children: (0,
                r.jsx)("sphereGeometry", {
                    args: [3.28, 32, 32]
                })
            })
        }
        var td = n(53797);
        let tu = new O.OrthographicCamera(-1,1,1,-1,1 / 9007199254740992,1);
        function tg(e) {
            let {catchMeUpTextSrc: t, noiseScene: n, progress: i} = e
              , a = (0,
            o.useRef)(null)
              , s = (0,
            tn.mE)(t)
              , l = (0,
            o.useMemo)( () => ({
                uTime: {
                    value: 0
                },
                uViewport: {
                    value: [0, 0, 0, 0]
                },
                uRatio: {
                    value: 8
                },
                uNoiseTexture: {
                    value: new O.Texture
                },
                uCatchMeUpTexture: {
                    value: new O.Texture
                },
                uActiveProgress: {
                    value: 0
                },
                uCameraDistance: {
                    value: 0
                }
            }), [])
              , c = (0,
            td.R)(128, 128)
              , {gl: m, camera: d, clock: u, viewport: g} = (0,
            z.D)()
              , p = (0,
            o.useMemo)( () => {
                let e = new Float32Array(98304);
                for (let t = 0; t < 32768; t += 1)
                    e.set([t % 512 / 64, t / 64 / 512, 0], 3 * t);
                return e
            }
            , [])
              , h = (0,
            o.useMemo)( () => {
                let e = new Float32Array(98304);
                for (let t = 0; t < 32768; t += 1)
                    e.set([Math.random(), Math.random(), Math.random()], 3 * t);
                return e
            }
            , []);
            return (0,
            r.jsxs)("points", {
                ref: a,
                onBeforeRender: () => {
                    m.setRenderTarget(c),
                    m.clear(),
                    m.render(n, tu),
                    m.setRenderTarget(null),
                    l.uTime.value = u.elapsedTime,
                    l.uViewport.value = [g.width, g.height, g.dpr, g.factor],
                    l.uNoiseTexture.value = c.texture,
                    l.uCameraDistance.value = d.position.z,
                    l.uActiveProgress.value = i.calc(i.source.get())
                }
                ,
                children: [(0,
                r.jsxs)("bufferGeometry", {
                    children: [(0,
                    r.jsx)("bufferAttribute", {
                        attach: "attributes-position",
                        count: 32768,
                        array: p,
                        itemSize: 3
                    }), (0,
                    r.jsx)("bufferAttribute", {
                        attach: "attributes-random",
                        count: 32768,
                        array: h,
                        itemSize: 3
                    })]
                }), (0,
                r.jsx)("shaderMaterial", {
                    blending: 2,
                    depthWrite: !1,
                    fragmentShader: "\n  varying vec2 vIndex;\n  varying float vDistance;\n  varying float vNoise;\n  varying float vAlpha;\n  varying float vColor;\n\n  uniform sampler2D uCatchMeUpTexture;\n  uniform vec4 uViewport;\n\n  void main() {\n    vec3 colorWhite = vec3(1.0);\n    vec3 colorBeam = vec3(0.0, 1.0, 0.8784313725);\n\n    float strength = distance(gl_PointCoord, vec2(0.5));\n\n    strength = smoothstep(0.35, 0.55, strength);\n\n    // Initial alpha value\n    float alpha = 1.0;\n\n    // Fade out top and bottom dots based on vertical position.\n    alpha *= 1.0 - pow(abs(vIndex.y * 2.0 - 1.0), 1.5);\n\n    // Add noise to alpha channel based on vNoise.\n    alpha -= (alpha * 0.6) * (1.0 - vNoise);\n\n    // Adjust alpha based on distance to make distant dots less visible.\n    alpha *= clamp(vDistance + 0.4, 0.0, 1.0);\n\n    // Apply vAlpha\n    alpha *= vAlpha;\n\n    alpha = clamp(alpha, 0.0, 1.0);\n\n    float alphaBean = alpha * 2.0;\n\n    alpha *= 1.0 - strength;\n    alphaBean *= 1.0 - strength;\n\n    // Ensure alpha range is 0.0 to 0.8\n    alpha = mix(0.0, 0.8, alpha);\n\n    gl_FragColor = mix(vec4(colorWhite, alpha), vec4(colorBeam, alphaBean), vColor);\n  }\n",
                    vertexShader: "\n  attribute vec3 random;\n\n  uniform sampler2D uNoiseTexture;\n  uniform sampler2D uCatchMeUpTexture;\n  uniform float uRatio;\n  uniform float uTime;\n  uniform vec4 uViewport;\n  uniform float uActiveProgress;\n  uniform float uCameraDistance;\n\n  varying vec2 vIndex;\n  varying float vDistance;\n  varying float vNoise;\n  varying float vAlpha;\n  varying float vColor;\n\n  const float PI = 3.141592653589793;\n  const float HALF_PI = PI * 0.5;\n\n  const float BREAKPOINT_TEXT_START = 0.0;\n  const float BREAKPOINT_TEXT_END = 0.3;\n\n  const float BREAKPOINT_MORPING_START = 0.12;\n  const float BREAKPOINT_MORPING_END = 0.4;\n\n  const float BREAKPOINT_TWIST_START = 0.7;\n  const float BREAKPOINT_TWIST_END = 1.0;\n\n  float sineInOut(float t) {\n    return -0.5 * (cos(PI * t) - 1.0);\n  }\n\n  float sineIn(float t) {\n    return sin((t - 1.0) * HALF_PI) + 1.0;\n  }\n\n  mat2 scale(vec2 value){\n    return mat2(value.x, 0.0, 0.0, value.y);\n  }\n\n  mat3 scale3D(vec3 value){\n    return mat3(\n      vec3(value.x, 0.0, 0.0),\n      vec3(0.0, value.y, 0.0),\n      vec3(0.0, 0.0, value.z)\n    );\n  }\n\n  float getScaleValue() {\n    float objectAspectRatio = 1.05;\n    float scaleValue = 1.0;\n\n    float viewportRatio = uViewport.x / uViewport.y;\n\n    if (viewportRatio < objectAspectRatio) {\n      scaleValue = viewportRatio / objectAspectRatio;\n    }\n\n    return scaleValue;\n  }\n\n  float getNoise(vec2 pos) {\n    float noiseFrequency = uRatio;\n    float x = 0.5 * (1.0 + sin(noiseFrequency * PI * (pos.x / uRatio)));\n    return texture2D(uNoiseTexture, vec2(x, pos.y)).x;\n  }\n\n  float getText(vec2 pos, vec2 index) {\n    float noiseFrequency = uRatio;\n    vec2 coord = pos;\n    coord.x -= (uRatio * 0.5) - 0.5;\n\n    coord = coord * 2.0 - 1.0;\n    coord *= scale(vec2(0.3));\n    coord = coord * 0.5 + 0.5;\n\n    float text = texture2D(uCatchMeUpTexture, coord).a;\n\n    // text initial animation\n    text += 0.2 * random.x * (1.0 - sineInOut(smoothstep(max(index.x - 0.5, 0.0), index.x, smoothstep(BREAKPOINT_TEXT_START, BREAKPOINT_TEXT_END, uActiveProgress))));\n\n    return text;\n  }\n\n  vec3 getBubble(vec3 pos, vec2 index, float noise, float twistAnimationProgress, float twistAnimationProgression) {\n    float twist =  0.5;\n\n    // rotation animation\n    float rotationAnimationProgress = uActiveProgress;\n\n    // create ring\n    float angle = index.x * PI * 2.0;\n\n    angle += PI; // make the text on the front\n    angle += rotationAnimationProgress; // rotation\n    angle -= twist * index.y; // twist\n    angle += twistAnimationProgression * 2.0; // increase twist on animation progression\n\n    pos.x = sin(angle);\n    pos.z += cos(angle);\n\n    // scale up\n    pos *= 2.5;\n\n    // compute direction\n    vec3 direction = pos - vec3(0.0);\n    vec3 normalizedDirection = normalize(direction);\n\n    // add curvature based Y axis\n    pos *= 1.0 + sin(index.y * PI) * 0.3;\n\n    // add noise\n    pos += normalizedDirection * noise * 0.25;\n\n    return pos;\n  }\n\n  vec3 getStarfield(vec3 pos, vec2 index, float noise, float text) {\n    pos += (random * 2.0 - 1.0) * 6.0 * (1.0 - text);\n\n    // reduce the distance\n    pos.z += 2.0;\n\n    // scale up\n    pos *= 1.4;\n\n    // compute direction\n    vec3 direction = pos - vec3(0.0);\n    vec3 normalizedDirection = normalize(direction);\n\n    // add noise on text\n    pos += normalizedDirection * noise * mix(0.0, 0.05, text);\n\n    // add noise on random particles\n    pos += normalizedDirection * noise * mix(0.15, 0.0, text);\n\n    return pos;\n  }\n\n  void main() {\n    vec3 pos = position;\n\n    // index factors\n    vec2 index = vec2(pos.x / uRatio, pos.y);\n\n    // get noise\n    float noise = getNoise(pos.xy);\n\n    // get text\n    float text = getText(pos.xy, index);\n\n    // center everything orizontally and vertically\n    pos.y -= 0.5;\n    pos.x -= uRatio * 0.5;\n\n    // move dots to create some randomness\n    pos.xy += random.xy * 0.015;\n\n    // get starfield\n    vec3 starfield = getStarfield(pos, index, noise, text);\n\n    // twist animation progress\n    float twistAnimationProgress = smoothstep(BREAKPOINT_TWIST_START, BREAKPOINT_TWIST_END, uActiveProgress);\n\n    // twist animation progression based on index.y position\n    float twistAnimationProgression = smoothstep(0.0, index.y, twistAnimationProgress);\n\n    // get bubbles\n    vec3 bubble = getBubble(pos, index, noise, twistAnimationProgress, twistAnimationProgression);\n\n    pos = mix(starfield, bubble, sineInOut(smoothstep(BREAKPOINT_MORPING_START, BREAKPOINT_MORPING_END, uActiveProgress)));\n\n    // scale the object according to the viewport size\n    float scaleValue = getScaleValue();\n    pos *= scale3D(vec3(scaleValue));\n\n    // twist animation\n    float targetY = uViewport.y * 0.4;\n    targetY -= targetY * twistAnimationProgress;\n    pos.y += uViewport.y * 2.0 * sineIn(twistAnimationProgress);\n    pos *= sineIn(1.0 - twistAnimationProgression);\n    pos.y -= twistAnimationProgression * (targetY + pos.y);\n    pos += (random * 2.0 - 1.0) * 0.2 * twistAnimationProgression;\n\n    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n\n    vIndex = index;\n    vNoise = noise;\n    vDistance = (viewPosition.z + uCameraDistance) / uCameraDistance;\n\n    // reduce alpha at the end of the cone during twist animation\n    vAlpha = 1.0 - smoothstep(0.99, 1.0, twistAnimationProgression);\n\n    // initial fade-in\n    vAlpha *= smoothstep(0.0, mix(0.1, 1.0, random.z), smoothstep(BREAKPOINT_TEXT_START, BREAKPOINT_TEXT_END, uActiveProgress));\n\n    // set the beam color randomly\n    vColor = smoothstep(0.96, 1.0, (sin((random.x * 10.0 + uTime * 0.2) * PI) + 1.0) * 0.5);\n\n    // set beam color based on noise\n    vColor += (1.0 - vColor) * smoothstep(0.3, 1.0, noise);\n\n    // shift to second color during twist animation progression\n    vColor += smoothstep(0.0, index.y, smoothstep(BREAKPOINT_TWIST_START, BREAKPOINT_TWIST_END, uActiveProgress));\n\n    gl_Position = projectedPosition;\n\n    // set point size based on viewport factor\n    float pointSizeFactor = uViewport.w * 0.026;\n\n    // set random sizes\n    gl_PointSize = pointSizeFactor + pointSizeFactor * 0.5 * random.x;\n\n    // make far points smaller\n    gl_PointSize *= (5.0 / -viewPosition.z);\n\n    // adjust point size based on dpr\n    gl_PointSize *= uViewport.z * 0.5;\n  }\n",
                    uniforms: l,
                    "uniforms-uCatchMeUpTexture-value": s
                })]
            })
        }
        function tp(e) {
            let {data: t, activeProgress: n} = e
              , i = (0,
            o.useRef)(null)
              , [a,l] = (0,
            o.useState)(!1);
            (0,
            o.useEffect)( () => {
                try {
                    return (0,
                    tt.Z)(i.current, l)
                } catch (e) {
                    l(!0)
                }
                return () => {}
            }
            , []);
            let c = (0,
            o.useMemo)( () => Array(t.bubbles.length).fill(0).map( () => new O.Vector3), [t.bubbles.length])
              , m = (0,
            o.useRef)(!1);
            return m.current = a,
            (0,
            r.jsxs)(s.q.div, {
                ref: i,
                className: tr().main,
                style: {
                    display: n.to(e => e > 0 ? "" : "none")
                },
                children: [(0,
                r.jsxs)(Q, {
                    isActive: a,
                    children: [(0,
                    r.jsx)(tg, {
                        catchMeUpTextSrc: t.catchMeUpTextSrc,
                        noiseScene: ee,
                        progress: n
                    }), (0,
                    r.jsx)(tm, {
                        data: t.bubbles,
                        bubblesPositions: c,
                        progress: n,
                        isInViewRef: m
                    }), (0,
                    r.jsx)(ti, {
                        aiPinSrc: t.aiPinSrc,
                        progress: n
                    })]
                }), t.bubbles.map( (e, t) => (0,
                r.jsx)(tc, {
                    index: t,
                    data: e,
                    bubblesPositions: c,
                    progress: n,
                    isInViewRef: m
                }, t))]
            })
        }
        var th = n(93289)
          , tv = n(11858)
          , tf = n(70630)
          , t_ = n.n(tf);
        function tx(e) {
            let {className: t, data: n, ...i} = e
              , [a,s] = (0,
            tv.Z)()
              , l = (0,
            th.Z)();
            return (0,
            o.useEffect)( () => {
                s.load();
                try {
                    return (0,
                    tt.Z)(a.current, s.toggle)
                } catch (e) {
                    l || s.play()
                }
                return () => {}
            }
            , []),
            (0,
            r.jsx)("video", {
                ref: a,
                className: c()(t_().main, t),
                src: n.src,
                poster: n.poster,
                preload: "none",
                playsInline: !0,
                muted: !0,
                loop: !0,
                ...i
            })
        }
        var ty = n(74568)
          , tb = n.n(ty);
        let tw = (0,
        s.q)(y);
        function tP(e) {
            let {className: t, src: n, progress: i, progressStart: a, progressEnd: s, ...l} = e
              , [c,m] = (0,
            tv.Z)()
              , d = (0,
            o.useRef)(!1)
              , u = (0,
            th.Z)();
            return (0,
            o.useEffect)( () => {
                m.load();
                let e = () => {
                    let t = i.to([0, a, s, 1], [0, 0, 1, 1]).get();
                    t > 0 && t < 1 && d.current ? u || m.play() : m.pause(),
                    d.current && requestAnimationFrame(e)
                }
                ;
                try {
                    return (0,
                    tt.Z)(c.current, t => {
                        d.current = t,
                        t && requestAnimationFrame(e)
                    }
                    )
                } catch (e) {
                    u || m.play()
                }
                return () => {}
            }
            , [i, s, a, u, m, c]),
            (0,
            r.jsx)("video", {
                ref: c,
                className: t,
                src: n,
                preload: "none",
                playsInline: !0,
                muted: !0,
                loop: !0,
                ...l
            })
        }
        var tj = n(84154)
          , tT = n.n(tj)
          , tM = n(96870)
          , tN = n.n(tM)
          , tA = n(77069)
          , tq = n.n(tA)
          , tI = n(74137)
          , tS = n.n(tI)
          , tk = n(46223)
          , tR = n.n(tk);
        function tD() {
            return (0,
            g.Z)(tR()._mediaDesktopMq, !0)
        }
        function tE() {
            let[e,t] = (0,
            o.useState)(1);
            return (0,
            o.useEffect)( () => {
                let e = 1
                  , n = () => {
                    let n = window.innerWidth / window.innerHeight;
                    n < .85 && (e = n / .85),
                    t(e)
                }
                ;
                return n(),
                window.addEventListener("resize", n),
                () => {
                    window.removeEventListener("resize", n)
                }
            }
            , []),
            e
        }
        function tC(e) {
            let {aiPinSrc: t, progress: n} = e
              , i = (0,
            tn.mE)(t)
              , a = tD()
              , s = tE();
            (0,
            o.useEffect)( () => {
                i.colorSpace = O.LinearSRGBColorSpace,
                i.needsUpdate = !0
            }
            , [i]);
            let l = (0,
            o.useMemo)( () => ({
                uTexture: {
                    value: new O.Texture
                },
                uViewport: {
                    value: [0, 0]
                },
                uActiveProgress: {
                    value: 0
                },
                uCenter: {
                    value: [.75, .5]
                },
                uScaleValue: {
                    value: 0
                }
            }), [])
              , {viewport: c} = (0,
            z.D)();
            return (0,
            r.jsxs)("mesh", {
                onBeforeRender: () => {
                    l.uViewport.value = [c.width, c.height],
                    l.uActiveProgress.value = n.calc(n.source.get())
                }
                ,
                children: [(0,
                r.jsx)("planeGeometry", {
                    args: [2, 2]
                }), (0,
                r.jsx)("shaderMaterial", {
                    transparent: !0,
                    fragmentShader: "\n  uniform sampler2D uTexture;\n\n  varying vec2 vUv;\n  varying float vAlpha;\n\n  void main() {\n    vec4 texture = texture2D(uTexture, vUv);\n\n    gl_FragColor = mix(vec4(0.0), texture, vAlpha);\n  }\n",
                    vertexShader: "\n  uniform vec2 uViewport;\n  uniform float uActiveProgress;\n  uniform vec2 uCenter;\n  uniform float uScaleValue;\n\n  varying vec2 vUv;\n  varying float vAlpha;\n\n  const float PI = 3.141592653589793;\n  const float HALF_PI = PI * 0.5;\n\n  const float BREAKPOINT_ENTERING_START = 0.0;\n  const float BREAKPOINT_ENTERING_END = 0.15;\n\n  const float BREAKPOINT_LEAVING_START = 0.8;\n  const float BREAKPOINT_LEAVING_END = 0.95;\n\n  float sineOut(float t) {\n    return sin(t * HALF_PI);\n  }\n\n  float sineIn(float t) {\n    return sin((t - 1.0) * HALF_PI) + 1.0;\n  }\n\n  mat3 scale3D(vec3 value){\n    return mat3(\n      vec3(value.x, 0.0, 0.0),\n      vec3(0.0, value.y, 0.0),\n      vec3(0.0, 0.0, value.z)\n    );\n  }\n\n  void main() {\n    vec3 pos = position;\n\n    // entering animation progress\n    float enteringAnimationProgress = smoothstep(BREAKPOINT_ENTERING_START, BREAKPOINT_ENTERING_END, uActiveProgress);\n\n    enteringAnimationProgress = sineOut(enteringAnimationProgress);\n\n    // leaving animation progress\n    float leavingAnimationProgress = smoothstep(BREAKPOINT_LEAVING_START, BREAKPOINT_LEAVING_END, uActiveProgress);\n\n    leavingAnimationProgress = sineIn(leavingAnimationProgress);\n\n    pos *= scale3D(vec3(0.3 + 0.7 * enteringAnimationProgress - 0.7 * leavingAnimationProgress));\n\n    // place the shape in the right side of the viewport\n    pos.xy += uViewport.xy * (uCenter.xy - 0.5);\n\n    // scale the object according to the viewport size\n    pos *= scale3D(vec3(uScaleValue));\n\n    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n\n    vUv = uv;\n\n    vAlpha = enteringAnimationProgress - (1.0 * leavingAnimationProgress);\n\n    gl_Position = projectedPosition;\n  }\n",
                    uniforms: l,
                    "uniforms-uTexture-value": i,
                    "uniforms-uCenter-value": a ? [.75, .5] : [.5, .7],
                    "uniforms-uScaleValue-value": s
                })]
            })
        }
        let tB = (0,
        s.q)(d.ZT)
          , tF = {
            mass: 1.5,
            friction: 15,
            tension: 120
        }
          , tL = {
            mass: 1,
            friction: 20,
            tension: 180
        };
        function tz(e) {
            let {index: t, order: n, total: i, name: a, isTrusted: l, progress: c, isInViewRef: m} = e
              , u = tE()
              , [{contactInOut: g},p] = (0,
            s.q_)( () => ({
                contactInOut: 0
            }))
              , h = (0,
            o.useRef)(null)
              , v = () => {
                p.start({
                    from: {
                        contactInOut: 0
                    },
                    to: async e => {
                        await new Promise(e => {
                            h.current = setTimeout(e, 500 * n)
                        }
                        ),
                        await e({
                            contactInOut: 1,
                            config: tF
                        }),
                        await new Promise(e => {
                            h.current = setTimeout(e, 1e3)
                        }
                        ),
                        await e({
                            contactInOut: 0,
                            config: tL
                        }),
                        await new Promise(e => {
                            h.current = setTimeout(e, 500 * n)
                        }
                        )
                    }
                    ,
                    loop: !0
                })
            }
              , f = (0,
            o.useRef)(!1);
            X( () => {
                if (m.current) {
                    let e = c.calc(c.source.get());
                    e >= .2 && e <= .8 ? f.current || (f.current = !0,
                    v()) : f.current && (f.current = !1,
                    h.current && clearTimeout(h.current),
                    p.stop(),
                    g.start(0, {
                        config: tL
                    }))
                }
            }
            );
            let _ = l ? 35 : 45
              , x = l ? [d.Q2.colors.beam.value, "#007062"] : [d.Q2.colors.craterGrey.value, d.Q2.colors.craterGrey200.value]
              , y = (0,
            o.useMemo)( () => Math.random() * (_ - (_ - 10)) + (_ - 10), [_])
              , b = (0,
            o.useMemo)( () => 2 * Math.PI * t / i + .5 * Math.random(), [t, i])
              , w = .14999999999999997 / i
              , P = w * n
              , j = c.to([0, .2 + P, .2 + P + w, .8 - w, .8, 1], [0, 0, 1, 1, 0, 0]);
            return (0,
            r.jsx)(tB, {
                as: "div",
                className: tR().contact,
                style: {
                    x: c.to(e => "".concat(Math.cos(b + e) * y * u, "vh")),
                    y: c.to(e => "".concat(Math.sin(b + e) * y * u, "vh")),
                    opacity: j,
                    color: c.to([0, .35, .4, 1], [x[0], x[0], x[1], x[1]]),
                    scale: j.to([0, 1], [.5, 1]).to(e => e * u)
                },
                children: a
            })
        }
        let tH = new O.OrthographicCamera(-1,1,1,-1,1 / 9007199254740992,1);
        function tO(e) {
            let {noiseScene: t, progress: n} = e
              , i = (0,
            o.useRef)(null)
              , a = tD()
              , s = tE()
              , l = (0,
            o.useMemo)( () => ({
                uTime: {
                    value: 0
                },
                uViewport: {
                    value: [0, 0, 0, 0]
                },
                uNoiseTexture: {
                    value: new O.Texture
                },
                uActiveProgress: {
                    value: 0
                },
                uCameraDistance: {
                    value: 0
                },
                uCenter: {
                    value: [.75, .5]
                },
                uScaleValue: {
                    value: []
                }
            }), [])
              , c = (0,
            td.R)(128, 128)
              , {gl: m, camera: d, clock: u, viewport: g} = (0,
            z.D)()
              , p = (0,
            o.useMemo)( () => {
                let e = new Float32Array(7500)
                  , t = Math.round(2 * Math.sqrt(2500))
                  , n = (Math.sqrt(5) + 1) / 2;
                for (let i = 0; i < 2500; i += 1) {
                    let a = .5;
                    i <= 2500 - t && (a = Math.sqrt(i - .5) / Math.sqrt(2500 - (t + 1) / 2) * .5);
                    let r = Math.PI * i * 2 / n ** 2;
                    e.set([.5 + a * Math.cos(r), .5 + a * Math.sin(r), 0], 3 * i)
                }
                return e
            }
            , [])
              , h = (0,
            o.useMemo)( () => {
                let e = new Float32Array(7500);
                for (let t = 0; t < 2500; t += 1)
                    e.set([Math.random(), Math.random(), Math.random()], 3 * t);
                return e
            }
            , []);
            return (0,
            r.jsxs)("points", {
                ref: i,
                onBeforeRender: () => {
                    m.setRenderTarget(c),
                    m.clear(),
                    m.render(t, tH),
                    m.setRenderTarget(null),
                    l.uTime.value = u.elapsedTime,
                    l.uViewport.value = [g.width, g.height, g.dpr, g.factor],
                    l.uNoiseTexture.value = c.texture,
                    l.uCameraDistance.value = d.position.z,
                    l.uActiveProgress.value = n.calc(n.source.get())
                }
                ,
                children: [(0,
                r.jsxs)("bufferGeometry", {
                    children: [(0,
                    r.jsx)("bufferAttribute", {
                        attach: "attributes-position",
                        count: 2500,
                        array: p,
                        itemSize: 3
                    }), (0,
                    r.jsx)("bufferAttribute", {
                        attach: "attributes-random",
                        count: 2500,
                        array: h,
                        itemSize: 3
                    })]
                }), (0,
                r.jsx)("shaderMaterial", {
                    blending: 2,
                    depthWrite: !1,
                    fragmentShader: "\n  varying vec2 vIndex;\n  varying float vDistance;\n  varying float vNoise;\n  varying float vAlpha;\n  varying float vColor;\n\n  uniform sampler2D uCatchMeUpTexture;\n  uniform vec4 uViewport;\n\n  void main() {\n    vec3 colorWhite = vec3(1.0);\n    vec3 colorBeam = vec3(0.0, 1.0, 0.8784313725);\n\n    float strength = distance(gl_PointCoord, vec2(0.5));\n\n    strength = smoothstep(0.35, 0.55, strength);\n\n    // Initial alpha value\n    float alpha = 1.0;\n\n    // Add noise to alpha channel based on vNoise.\n    alpha -= (alpha * 0.6) * (1.0 - vNoise);\n\n    // Adjust alpha based on distance to make distant dots less visible.\n    alpha *= clamp(vDistance + 0.4, 0.0, 1.0);\n\n    // Apply vAlpha\n    alpha *= vAlpha;\n\n    alpha = clamp(alpha, 0.0, 1.0);\n\n    float alphaBean = alpha * 2.0;\n\n    alpha *= 1.0 - strength;\n    alphaBean *= 1.0 - strength;\n\n    // Ensure alpha range is 0.0 to 0.8\n    alpha = mix(0.0, 0.8, alpha);\n\n    gl_FragColor = mix(vec4(colorWhite, alpha), vec4(colorBeam, alphaBean), vColor);\n  }\n",
                    vertexShader: "\n  attribute vec3 random;\n\n  uniform sampler2D uNoiseTexture;\n  uniform sampler2D uCatchMeUpTexture;\n  uniform float uTime;\n  uniform vec4 uViewport;\n  uniform float uActiveProgress;\n  uniform float uCameraDistance;\n  uniform vec2 uCenter;\n  uniform float uScaleValue;\n\n  varying vec2 vIndex;\n  varying float vDistance;\n  varying float vNoise;\n  varying float vAlpha;\n  varying float vColor;\n\n  const float PI = 3.141592653589793;\n  const float HALF_PI = PI * 0.5;\n\n  const float BREAKPOINT_ENTERING_START = 0.0;\n  const float BREAKPOINT_ENTERING_END = 0.3;\n\n  const float BREAKPOINT_LEAVING_START = 0.8;\n  const float BREAKPOINT_LEAVING_END = 1.0;\n\n  float sineInOut(float t) {\n    return -0.5 * (cos(PI * t) - 1.0);\n  }\n\n  mat3 scale3D(vec3 value){\n    return mat3(\n      vec3(value.x, 0.0, 0.0),\n      vec3(0.0, value.y, 0.0),\n      vec3(0.0, 0.0, value.z)\n    );\n  }\n\n  mat3 rotation3dZ(float angle) {\n    float s = sin(angle);\n    float c = cos(angle);\n\n    return mat3(\n      c, s, 0.0,\n      -s, c, 0.0,\n      0.0, 0.0, 1.0\n    );\n  }\n\n  void main() {\n    vec3 pos = position;\n\n    // index factors\n    vec2 index = pos.xy;\n\n    // get noise\n    float noise = texture2D(uNoiseTexture, pos.xy).x;\n\n    // center everything orizontally and vertically\n    pos.xy -= 0.5;\n\n    // get normalizedDirection\n    vec2 direction = pos.xy - vec2(0.0);\n    vec2 normalizedDirection = normalize(direction);\n\n    // get distance from center from 0 to 1\n    float distanceFromCenter = distance(pos.xy, vec2(0.0)) * 2.0;\n\n    // move dots to create some randomness\n    pos.xy += random.xy * 0.01;\n\n    // scale up\n    pos.xy *= 8.0;\n\n    // add noise\n    pos.xy += normalizedDirection * noise * 0.3;\n\n    // entering animation progress\n    float enteringAnimationProgress = smoothstep(BREAKPOINT_ENTERING_START, BREAKPOINT_ENTERING_END, uActiveProgress);\n    float enteringAnimationProgression = sineInOut(smoothstep(0.0, distanceFromCenter, enteringAnimationProgress));\n\n    // leaving animation progress\n    float leavingAnimationProgress = smoothstep(BREAKPOINT_LEAVING_START, BREAKPOINT_LEAVING_END, uActiveProgress);\n    float leavingAnimationProgression = sineInOut(smoothstep(0.0, 1.0 - distanceFromCenter, leavingAnimationProgress));\n\n    // apply entering and leaving animation\n    vec2 initialPosition = pos.xy - (distanceFromCenter * 0.5 * normalizedDirection);\n    pos.xy = mix(initialPosition, pos.xy, enteringAnimationProgression);\n    pos.xy = mix(pos.xy, initialPosition, leavingAnimationProgression);\n    pos *= rotation3dZ(enteringAnimationProgression * 0.1);\n    pos *= rotation3dZ(leavingAnimationProgression * 0.1);\n    vAlpha = enteringAnimationProgression * (1.0 - leavingAnimationProgression);\n\n    // rotate animation\n    pos *= rotation3dZ(uActiveProgress);\n\n    // place the shape in the right side of the viewport\n    pos.xy += uViewport.xy * (uCenter.xy - 0.5);\n\n    // scale the object according to the viewport size\n    pos *= scale3D(vec3(uScaleValue));\n\n    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n\n    vIndex = index;\n    vNoise = noise;\n    vDistance = (viewPosition.z + uCameraDistance) / uCameraDistance;\n\n    // create a hole in the middle\n    vAlpha *= step(0.2, distanceFromCenter);\n    vAlpha *= smoothstep(0.3, 0.5, distanceFromCenter);\n    vAlpha *= 1.0 - smoothstep(0.8, 1.0, distanceFromCenter);\n\n    // fade out dots at the edges\n    vAlpha *= smoothstep(1.0, 0.9, distanceFromCenter);\n\n    // set the beam color randomly\n    vColor = smoothstep(0.96, 1.0, (sin((random.x * 10.0 + uTime * 0.2) * PI) + 1.0) * 0.5);\n\n    // set beam color based on noise\n    vColor += (1.0 - vColor) * smoothstep(0.2, 1.0, noise);\n\n    gl_Position = projectedPosition;\n\n    // set point size based on viewport factor\n    float pointSizeFactor = uViewport.w * 0.075 * uScaleValue;\n\n    // set random sizes\n    gl_PointSize = pointSizeFactor + pointSizeFactor * random.x;\n\n    // make far points smaller\n    gl_PointSize *= (5.0 / -viewPosition.z);\n\n    // adjust point size based on dpr\n    gl_PointSize *= uViewport.z * 0.5;\n  }\n",
                    uniforms: l,
                    "uniforms-uCenter-value": a ? [.75, .5] : [.5, .7],
                    "uniforms-uScaleValue-value": s
                })]
            })
        }
        var tV = n(86565);
        let tU = new O.Vector3(.765,.1,0);
        function tG(e) {
            return e.source ? e.calc(tG(e.source)) : e.get()
        }
        function tK(e) {
            let {index: t, initialPosition: n, src: i, progress: a, isInViewRef: s} = e
              , l = tD()
              , c = tE()
              , m = (0,
            tn.mE)(i);
            (0,
            o.useEffect)( () => {
                m.colorSpace = O.LinearSRGBColorSpace,
                m.needsUpdate = !0
            }
            , [m]);
            let {viewport: d, gl: u, scene: g, camera: p} = (0,
            z.D)()
              , h = (0,
            o.useRef)(null)
              , v = (0,
            o.useRef)(null)
              , f = (0,
            o.useRef)(null)
              , _ = (0,
            o.useRef)(null)
              , x = (0,
            td.R)()
              , y = (0,
            td.R)()
              , b = (0,
            o.useRef)({
                write: x,
                read: y
            })
              , w = () => {
                let e = b.current.write;
                b.current.write = b.current.read,
                b.current.read = e
            }
              , P = (0,
            o.useMemo)( () => ({
                uTexture: {
                    value: new O.Texture
                }
            }), [])
              , j = (0,
            o.useMemo)( () => ({
                uPulse: {
                    value: 0
                },
                uTime: {
                    value: 0
                },
                uOpacity: {
                    value: 0
                }
            }), [])
              , M = (0,
            o.useMemo)( () => ({
                uTexture: {
                    value: new O.Texture
                },
                uOpacity: {
                    value: 0
                }
            }), [])
              , N = a.to([0, .65, 1], [0, 1, 1])
              , A = N.to([0, .1, 1], [0, .5, 1])
              , q = N.to([0, .99, 1], [0, 0, 1])
              , I = a.to([0, .99, 1], [1, 1, 0])
              , S = N.to([0, .1, .2, .95, 1], [0, 0, 1, 1, 0])
              , k = (0,
            o.useMemo)( () => new O.Vector3, [])
              , R = (0,
            o.useMemo)( () => t + 1, [t]);
            (0,
            z.F)(e => {
                let {clock: t} = e;
                if (s.current && h.current && v.current && f.current && _.current) {
                    let e = tG(a)
                      , i = (0,
                    T.Fs)(tG(N));
                    k.x = (0,
                    tV.t7)(n.x, tU.x, i),
                    k.y = (0,
                    tV.t7)(n.y, tU.y, (0,
                    T.Mg)(i)),
                    k.multiplyScalar(c),
                    v.current.position.lerp(k, .3),
                    v.current.scale.setScalar(tG(A)).multiplyScalar(c),
                    f.current.scale.set(1 + .3 * tG(q), 1, 1),
                    j.uPulse.value = e > .65 ? 1 : 0,
                    j.uOpacity.value = tG(I),
                    M.uOpacity.value = tG(S),
                    h.current.layers.set(R),
                    f.current.layers.set(R),
                    p.layers.disableAll(),
                    p.layers.enable(R),
                    u.setRenderTarget(b.current.write),
                    u.render(g, p),
                    u.setRenderTarget(null),
                    p.layers.enableAll(),
                    w(),
                    P.uTexture.value = b.current.read.texture,
                    j.uTime.value = t.elapsedTime
                }
            }
            );
            let D = l ? [.75, .5] : [.5, .7];
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsxs)("mesh", {
                    ref: h,
                    children: [(0,
                    r.jsx)("planeGeometry", {
                        args: [d.width, d.height]
                    }), (0,
                    r.jsx)("shaderMaterial", {
                        fragmentShader: "\n  uniform sampler2D uTexture;\n\n  varying vec2 vUv;\n\n  void main() {\n    vec3 colorBeam = vec3(0.0, 1.0, 0.8784313725);\n\n    vec4 texture = texture2D(uTexture, vUv);\n\n    texture.a *= 0.7;\n\n    gl_FragColor = mix(vec4(colorBeam, 0.0), vec4(colorBeam, 1.0), texture.a);\n  }\n",
                        vertexShader: "\n  varying vec2 vUv;\n\n  void main() {\n    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n\n    vUv = uv;\n\n    gl_Position = projectedPosition;\n  }\n",
                        uniforms: P,
                        transparent: !0
                    })]
                }), (0,
                r.jsx)("group", {
                    position: [d.width * (D[0] - .5) * c, d.height * (D[1] - .5) * c, .001],
                    children: (0,
                    r.jsxs)("group", {
                        ref: v,
                        children: [(0,
                        r.jsxs)("mesh", {
                            ref: f,
                            children: [(0,
                            r.jsx)("planeGeometry", {
                                args: [.2, .2]
                            }), (0,
                            r.jsx)("shaderMaterial", {
                                fragmentShader: "\n  uniform sampler2D uTexture;\n  uniform float uPulse;\n  uniform float uTime;\n  uniform float uOpacity;\n\n  varying vec2 vUv;\n\n  const float PI = 3.141592653589793;\n\n  float sineInOut(float t) {\n    return -0.5 * (cos(PI * t) - 1.0);\n  }\n\n  void main() {\n    vec3 colorBeam = vec3(0.0, 1.0, 0.8784313725);\n\n    float distanceFromCenter = distance(vUv, vec2(0.5));\n\n    float alpha = 1.0 - smoothstep(0.14, 0.19, distanceFromCenter);\n\n    float pulse = sineInOut(sin(uTime * 6.0) * 0.5 + 0.5);\n    float bloom = smoothstep(0.2, 1.0, pulse);\n\n    alpha += (1.0 - smoothstep(0.0, 0.6, distanceFromCenter)) * 0.12 * bloom * uPulse;\n\n    alpha *= mix(1.0, pulse, uPulse);\n\n    gl_FragColor = vec4(colorBeam, alpha * uOpacity);\n  }\n",
                                vertexShader: "\n  varying vec2 vUv;\n\n  void main() {\n    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n\n    vUv = uv;\n\n    gl_Position = projectedPosition;\n  }\n",
                                uniforms: j,
                                transparent: !0
                            })]
                        }), (0,
                        r.jsxs)("mesh", {
                            ref: _,
                            position: [.9, .01, 0],
                            children: [(0,
                            r.jsx)("planeGeometry", {
                                args: [1.5, 1.5]
                            }), (0,
                            r.jsx)("shaderMaterial", {
                                fragmentShader: "\n  uniform sampler2D uTexture;\n  uniform float uOpacity;\n\n  varying vec2 vUv;\n\n  void main() {\n    vec4 texture = texture2D(uTexture, vUv);\n\n    texture.a *= uOpacity;\n\n    gl_FragColor = texture;\n  }\n",
                                vertexShader: "\n  varying vec2 vUv;\n\n  void main() {\n    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n\n    vUv = uv;\n\n    gl_Position = projectedPosition;\n  }\n",
                                uniforms: M,
                                "uniforms-uTexture-value": m,
                                transparent: !0
                            })]
                        })]
                    })
                })]
            })
        }
        function tZ(e) {
            let {type: t, text: n, label: i, iconSrc: a, progress: o} = e
              , l = tE();
            return (0,
            r.jsxs)(s.q.div, {
                className: c()(tR().trustedContactsNotification, tR()[t]),
                style: {
                    x: "-50%",
                    y: "-50%",
                    scale: o.to([0, .8, 1], [.9, 1, .9]).to(e => e * l),
                    opacity: o.to([0, .2, .8, 1], [0, 1, 1, 0]),
                    display: o.to(e => e > 0 ? "" : "none")
                },
                children: [(0,
                r.jsx)("div", {
                    className: tR().trustedContactsNotificationIcon,
                    children: (0,
                    r.jsx)(f(), {
                        className: tR().trustedContactsNotificationIconImage,
                        src: a,
                        alt: "",
                        width: 25,
                        height: 25
                    })
                }), (0,
                r.jsx)(d.ZT, {
                    className: tR().trustedContactsNotificationText,
                    variant: "headline2",
                    children: n
                }), i && (0,
                r.jsx)(d.ZT, {
                    className: tR().trustedContactsNotificationLabel,
                    variant: "body2",
                    children: i
                })]
            })
        }
        function tW(e) {
            let {data: t, activeProgress: n} = e
              , i = (0,
            o.useRef)(null)
              , a = tD()
              , l = tE()
              , [c,m] = (0,
            o.useState)(!1);
            (0,
            o.useEffect)( () => {
                try {
                    return (0,
                    tt.Z)(i.current, m)
                } catch (e) {
                    m(!0)
                }
                return () => {}
            }
            , []);
            let d = (0,
            o.useRef)(!1);
            d.current = c;
            let u = (0,
            o.useMemo)( () => tS()(Array.from(Array(t.contacts.length).keys())), [t.contacts.length]);
            return (0,
            r.jsxs)(s.q.div, {
                ref: i,
                className: tR().main,
                style: {
                    "--scale-value": l,
                    "--center-x": a ? "75%" : "50%",
                    "--center-y": a ? "50%" : "30%",
                    display: n.to(e => e > 0 ? "" : "none")
                },
                children: [(0,
                r.jsxs)(Q, {
                    isActive: c,
                    children: [(0,
                    r.jsx)(tO, {
                        noiseScene: ee,
                        progress: n
                    }), (0,
                    r.jsx)(tC, {
                        aiPinSrc: t.aiPinSrc,
                        progress: n
                    }), t.trustedContacts.map( (e, t) => {
                        let {position: i, startAt: a, nameSrc: o} = e;
                        return (0,
                        r.jsx)(tK, {
                            index: t,
                            initialPosition: new O.Vector3().fromArray(i),
                            src: o,
                            progress: n.to([0, a, a + .25, 1], [0, 0, 1, 1]),
                            isInViewRef: d
                        }, t)
                    }
                    )]
                }), t.contacts.map( (e, i) => {
                    let {name: a, isTrusted: o} = e;
                    return (0,
                    r.jsx)(tz, {
                        index: i,
                        order: u[i],
                        total: t.contacts.length,
                        name: a,
                        isTrusted: o,
                        progress: n,
                        isInViewRef: d
                    }, i)
                }
                ), t.trustedContacts.map( (e, t) => {
                    let {type: i, text: a, label: o, startAt: s, iconSrc: l} = e;
                    return (0,
                    r.jsx)(tZ, {
                        type: i,
                        text: a,
                        label: o,
                        iconSrc: l,
                        progress: n.to([0, s + .165, s + .25, 1], [0, 0, 1, 1])
                    }, t)
                }
                ), (0,
                r.jsx)(s.q.div, {
                    className: tR().gradientLayer,
                    style: {
                        opacity: n.to([0, .1, 1], [0, 1, 1])
                    }
                })]
            })
        }
        let tY = {
            intro: e$(function(e) {
                let {data: t} = e;
                return (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)(I, {
                        aiPinImageFront: t.aiPinImageFront,
                        aiPinImageBack: t.aiPinImageBack,
                        animation: !0
                    }), (0,
                    r.jsx)(R, {
                        textData: t.textData,
                        animation: !0
                    })]
                })
            }),
            newinteractions: e$(function(e) {
                let {data: t, progress: n} = e
                  , i = (0,
                s.zk)(1)
                  , a = (0,
                s.zk)(0);
                return (0,
                r.jsxs)("div", {
                    className: tN().main,
                    children: [(0,
                    r.jsx)("div", {
                        className: tN().visualContainer,
                        children: (0,
                        r.jsx)(eT, {
                            className: tN().visual,
                            data: {
                                src: t.hero.background.src,
                                alt: t.hero.background.alt
                            },
                            enteringProgress: n.entering,
                            dimmingProgress: i
                        })
                    }), (0,
                    r.jsx)(eq, {
                        data: [{
                            component: (0,
                            r.jsx)(eb, {
                                data: t.hero.headline,
                                enteringProgress: n.entering
                            })
                        }],
                        progress: a
                    })]
                })
            }),
            newinteractionsframe: e$(function(e) {
                let {data: t, progress: n} = e;
                return (0,
                r.jsxs)(s.q.div, {
                    className: c()(tq().main, tq()[t.type]),
                    style: {
                        opacity: n.entering
                    },
                    children: [(0,
                    r.jsx)(f(), {
                        className: c()(tq().image, {
                            [tq().horizontal]: !!t.frame.srcVertical
                        }),
                        src: t.frame.src,
                        alt: t.frame.alt,
                        fill: !0,
                        quality: 100
                    }), t.frame.srcVertical && (0,
                    r.jsx)(f(), {
                        className: c()(tq().image, tq().vertical),
                        src: t.frame.srcVertical,
                        alt: t.frame.alt,
                        fill: !0,
                        quality: 100
                    }), (0,
                    r.jsxs)(s.q.div, {
                        className: tq().copy,
                        style: {
                            opacity: (0,
                            s.to)([n.entering.to([0, .5, 1], [0, 0, 1]), n.leaving.to([0, .5, 1], [1, 0, 0])], (e, t) => e * t)
                        },
                        children: [t.text.title && (0,
                        r.jsx)(d.ZT, {
                            theme: "dark",
                            variant: "headline1",
                            children: t.text.title
                        }), t.text.paragraph && (0,
                        r.jsx)(d.ZT, {
                            theme: "dark",
                            variant: "body1",
                            children: t.text.paragraph
                        })]
                    })]
                })
            }),
            aimic: e$(function(e) {
                var t;
                let {data: n, progress: i} = e
                  , a = (0,
                g.Z)(ef()._navbarMq, !0)
                  , o = n.textScroll.filter( (e, t) => t < n.textScroll.length - 1)
                  , s = [n.textScroll.at(0), {
                    type: "paragraph",
                    text: ""
                }, n.textScroll.at(-1)];
                return (0,
                r.jsxs)("div", {
                    className: ef().main,
                    children: [a ? (0,
                    r.jsxs)(r.Fragment, {
                        children: [(0,
                        r.jsx)(eT, {
                            data: n.hero.background,
                            enteringProgress: i.entering,
                            dimmingProgress: i.active.to([0, .2], [1, 0])
                        }), (0,
                        r.jsx)(eI, {
                            data: {
                                src: "/aipin/overview/ai-pin-mic/traveller1.jpg",
                                alt: "A traveller looking through the window"
                            },
                            style: {
                                opacity: i.active.to([.2, .3, .7, .8], [0, .55, .55, 0])
                            }
                        })]
                    }) : (0,
                    r.jsx)(eT, {
                        data: {
                            ...n.hero.background,
                            src: null !== (t = n.hero.background.mobileSrc) && void 0 !== t ? t : n.hero.background.src
                        },
                        enteringProgress: i.entering,
                        dimmingProgress: i.active.to([0, .55], [1, 0])
                    }), a ? (0,
                    r.jsxs)(r.Fragment, {
                        children: [(0,
                        r.jsx)(eh, {
                            progress: i.active.to([.3, .45], [0, 1]),
                            items: n.conversations.exhibit,
                            dimmingProgress: i.active.to([.3, .45, .55], [1, 1, 0])
                        }), (0,
                        r.jsx)(eh, {
                            progress: i.active.to([.55, .65], [0, 1]),
                            items: n.conversations.vintagePhoto,
                            dimmingProgress: i.active.to([0, .65, .75], [1, 1, 0])
                        })]
                    }) : (0,
                    r.jsxs)(r.Fragment, {
                        children: [(0,
                        r.jsx)(ec, {
                            progress: i.active.to([.2, .75], [0, 1]),
                            items: n.conversations.exhibit,
                            dimmingProgress: i.active.to([.15, .25, .65, .75], [0, 1, 1, 0])
                        }), (0,
                        r.jsx)(ec, {
                            progress: i.active.to([.5, .95], [0, 1]),
                            items: n.conversations.vintagePhoto,
                            dimmingProgress: i.active.to([.45, .55, .75, .85], [0, 1, 1, 0])
                        })]
                    }), (0,
                    r.jsx)(eI, {
                        data: {
                            src: "/aipin/overview/ai-pin-mic/aimic-laser.jpg",
                            alt: "A hand displaying a projected laser"
                        },
                        style: {
                            opacity: i.active.to([.75, .85, 1], [0, 1, 1])
                        }
                    }), (0,
                    r.jsx)(eq, {
                        data: [{
                            component: (0,
                            r.jsx)(eb, {
                                data: n.hero.headline,
                                enteringProgress: i.entering
                            })
                        }, ...a ? s : o],
                        progress: i.active.to([0, a ? .48 : .3], [0, 1])
                    })]
                })
            }),
            aidj: e$(function(e) {
                let {data: t, progress: n} = e
                  , i = (0,
                g.Z)(e7()._navbarMq, !0);
                return (0,
                r.jsxs)("div", {
                    className: e7().main,
                    children: [(0,
                    r.jsx)(eT, {
                        data: t.hero.background,
                        enteringProgress: n.entering,
                        dimmingProgress: n.active.to([0, .2, .3, .8, 1], [1, .2, .2, 0, 0])
                    }), (0,
                    r.jsx)(e8, {
                        data: {
                            src: "/aipin/overview/3-ai-dj/skater-hand.jpg",
                            alt: "An image of a hand showing the Ai Pin laser in action"
                        },
                        style: {
                            opacity: n.active.to([0, .8, .9, .95, 1], [0, 0, 1, 1, 1])
                        }
                    }), (0,
                    r.jsx)(e6, {
                        as: "div",
                        variant: "headline1",
                        style: {
                            color: "white",
                            opacity: n.active.to([.25, .3, .4, .45], [0, 1, 1, 0]),
                            textAlign: "center",
                            position: "absolute",
                            inset: "0",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            fontWeight: 500
                        },
                        children: (i ? ["Play Hip Hop songs that", "talk about skating."] : ["Play Hip Hop songs", "that talk about", "skating."]).map(e => (0,
                        r.jsx)("span", {
                            children: e
                        }, e))
                    }), (0,
                    r.jsx)(eq, {
                        data: [{
                            component: (0,
                            r.jsx)(eb, {
                                data: t.hero.headline,
                                enteringProgress: n.entering
                            })
                        }, ...t.textScroll],
                        progress: n.active.to([0, .4], [0, 1])
                    }), (0,
                    r.jsx)(e5, {
                        lines: i ? ["generating a Hip Hop playlist", "about skating"] : ["generating", "a Hip Hop playlist", "about skating"],
                        progress: n.active.to([.45, .85], [0, 1])
                    })]
                })
            }),
            aimessaging: e$(function(e) {
                let {data: t, progress: n} = e
                  , i = (0,
                g.Z)(e9()._navbarMq, !0)
                  , a = {
                    intro: [t.textScroll.at(0)],
                    followup: [{
                        text: "",
                        type: "paragraph"
                    }, t.textScroll.at(1)]
                }
                  , o = {
                    intro: [t.textScroll.at(0)],
                    followup: [{
                        text: "",
                        type: "paragraph"
                    }, t.textScroll.at(1)]
                };
                return (0,
                r.jsxs)("div", {
                    className: e9().main,
                    children: [(0,
                    r.jsx)(eT, {
                        data: t.hero.background,
                        enteringProgress: n.entering,
                        dimmingProgress: n.active.to([0, .2, .3], [1, 0, 0])
                    }), (0,
                    r.jsx)(te, {
                        data: {
                            src: "/aipin/overview/5-ai-messaging/gesture.jpg",
                            alt: "Ai Pin activation gesture"
                        },
                        style: {
                            opacity: n.active.to([.2, .3, .8, 1], [0, 1, 1, 0])
                        }
                    }), (0,
                    r.jsx)(te, {
                        data: {
                            src: "/aipin/overview/5-ai-messaging/hike-laser.jpg",
                            alt: "Ai Pin activation gesture"
                        },
                        style: {
                            opacity: n.active.to([.8, .9, 1], [0, 1, 1])
                        }
                    }), i ? (0,
                    r.jsx)(eh, {
                        progress: n.active.to([.3, .7], [0, 1]),
                        dimmingProgress: n.active.to([.2, .3, .7, .8], [0, 1, 1, 0]),
                        items: t.conversation
                    }) : (0,
                    r.jsxs)(r.Fragment, {
                        children: [(0,
                        r.jsx)(eh, {
                            progress: n.active.to([.3, .5], [0, 1]),
                            dimmingProgress: n.active.to([.2, .3, .7, .8], [0, 1, 1, 0]),
                            items: [t.conversation[0], t.conversation[1]],
                            style: {
                                top: "-64px"
                            }
                        }), (0,
                        r.jsx)(eh, {
                            progress: n.active.to([.6, .7], [0, 1]),
                            dimmingProgress: n.active.to([.2, .3, .7, .8], [0, 1, 1, 0]),
                            items: [t.conversation[2]]
                        })]
                    }), i ? (0,
                    r.jsxs)(r.Fragment, {
                        children: [(0,
                        r.jsx)(eq, {
                            data: [{
                                component: (0,
                                r.jsx)(eb, {
                                    data: t.hero.headline,
                                    enteringProgress: n.entering
                                })
                            }, ...a.intro],
                            progress: n.active.to([0, .3], [0, 1])
                        }), (0,
                        r.jsx)(eq, {
                            data: a.followup,
                            progress: n.active.to([.42, .72], [0, 1])
                        })]
                    }) : (0,
                    r.jsxs)(r.Fragment, {
                        children: [(0,
                        r.jsx)(eq, {
                            data: [{
                                component: (0,
                                r.jsx)(eb, {
                                    data: t.hero.headline,
                                    enteringProgress: n.entering
                                })
                            }, ...o.intro],
                            progress: n.active.to([0, .3], [0, 1])
                        }), (0,
                        r.jsx)(eq, {
                            data: o.followup,
                            progress: n.active.to([.35, .75], [0, 1])
                        })]
                    })]
                })
            }),
            catchmeup: e$(function(e) {
                let {data: t, progress: n} = e;
                return (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)(eT, {
                        data: t.hero.background,
                        enteringProgress: n.entering,
                        dimmingProgress: n.active.to([0, .1, .24, 1], [1, .5, 0, 0])
                    }), (0,
                    r.jsx)(eq, {
                        data: [{
                            component: (0,
                            r.jsx)(eb, {
                                data: t.hero.headline,
                                enteringProgress: n.entering
                            })
                        }, ...t.textScroll],
                        progress: n.active.to([0, .375, 1], [0, 1, 1])
                    }), (0,
                    r.jsx)(tp, {
                        data: t.animation,
                        activeProgress: n.active.to([0, .235, 1], [0, 0, 1])
                    })]
                })
            }),
            health: e$(function(e) {
                let {data: t, progress: n} = e
                  , i = (0,
                g.Z)(tb()._navbarMq, !0)
                  , a = [t.textScroll.at(0), t.textScroll.at(1)]
                  , o = [{
                    text: "",
                    type: "paragraph"
                }, t.textScroll.at(2)];
                return (0,
                r.jsxs)("div", {
                    className: tb().main,
                    children: [(0,
                    r.jsx)(eT, {
                        data: t.hero.background,
                        enteringProgress: n.entering,
                        dimmingProgress: n.active.to([0, .15, .25], [1, 1, 0])
                    }), (0,
                    r.jsx)(s.q.div, {
                        className: tb().video,
                        style: {
                            opacity: n.active.to([.3, .4, 1], [0, 1, 1])
                        },
                        children: (0,
                        r.jsx)(tx, {
                            data: {
                                src: "https://player.vimeo.com/progressive_redirect/playback/937890199/rendition/1440p/file.mp4?loc=external&signature=559b9a03363fa8bbf3272d4d67531b1330538e6deb2c93bf847fb95bc3a3d171",
                                poster: ""
                            },
                            className: tb().videoElement
                        })
                    }), (0,
                    r.jsx)(eh, {
                        items: t.conversations.initial,
                        progress: n.active.to([.4, .6], [0, 1]),
                        dimmingProgress: n.active.to([0, .2, .6, .7], [0, 1, 1, 0])
                    }), (0,
                    r.jsx)(eh, {
                        items: t.conversations.followup,
                        progress: n.active.to([.7, 1], [0, 1]),
                        dimmingProgress: n.active.to([0, .6, .7, 1], [0, 1, 1, 1])
                    }), (0,
                    r.jsx)(eq, {
                        data: [{
                            component: (0,
                            r.jsx)(eb, {
                                data: t.hero.headline,
                                enteringProgress: n.entering
                            })
                        }, ...a],
                        progress: n.active.to([0, .4], [0, 1])
                    }), (0,
                    r.jsx)(eq, {
                        data: o,
                        progress: i ? n.active.to([.4, .9], [0, 1]) : n.active.to([.4, 1], [0, 1])
                    })]
                })
            }),
            interpreter: e$(function(e) {
                let {data: t, progress: n} = e
                  , i = (0,
                g.Z)(tT()._navbarMq, !0)
                  , a = t.textScroll
                  , o = [t.textScroll[0]];
                return (0,
                r.jsxs)("div", {
                    className: tT().main,
                    children: [(0,
                    r.jsx)(eT, {
                        data: t.hero.background,
                        enteringProgress: n.entering,
                        dimmingProgress: n.active.to(i ? [0, .65, .75] : [0, .55, .65], [1, 1, 0])
                    }), (0,
                    r.jsx)(s.q.div, {
                        style: {
                            opacity: n.active.to(i ? [.75, .8, 1] : [.65, .7, 1], [0, 1, 1])
                        },
                        children: (0,
                        r.jsx)(tP, {
                            src: "https://player.vimeo.com/progressive_redirect/playback/937889882/rendition/1080p/file.mp4?loc=external&signature=e01cf4bf2197092ce0ac73260bb98ca35952029c15a848e63f2a81c867e10e85",
                            progress: n.active,
                            progressStart: i ? .75 : .65,
                            progressEnd: 1,
                            className: tT().video
                        })
                    }), i ? (0,
                    r.jsx)(eq, {
                        data: [{
                            component: (0,
                            r.jsx)(eb, {
                                data: t.hero.headline,
                                enteringProgress: n.entering
                            })
                        }, ...a],
                        progress: n.active
                    }) : (0,
                    r.jsx)(eq, {
                        data: [{
                            component: (0,
                            r.jsx)(eb, {
                                data: t.hero.headline,
                                enteringProgress: n.entering
                            })
                        }, ...o],
                        progress: n.active
                    })]
                })
            }),
            trustedcontacts: e$(function(e) {
                let {data: t, progress: n} = e;
                return (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)(eT, {
                        data: t.hero.background,
                        enteringProgress: n.entering,
                        dimmingProgress: n.active.to([0, .1, .4, 1], [1, .5, 0, 0])
                    }), (0,
                    r.jsx)(tW, {
                        data: t.animation,
                        activeProgress: n.active.to([0, .38, 1], [0, 0, 1])
                    }), (0,
                    r.jsx)(eq, {
                        data: [{
                            component: (0,
                            r.jsx)(eb, {
                                data: t.hero.headline,
                                enteringProgress: n.entering
                            })
                        }, ...t.textScroll],
                        progress: n.active
                    })]
                })
            }),
            aiphotographer: e$(function(e) {
                let {data: t, progress: n} = e;
                return (0,
                r.jsxs)("div", {
                    className: eU().main,
                    children: [(0,
                    r.jsx)(eO.Z, {
                        children: (0,
                        r.jsx)(s.q.div, {
                            className: eU().body,
                            style: {
                                scale: n.entering.to(e => (0,
                                T.Ge)(e)).to([0, 1], [4, 1]),
                                opacity: n.entering.to([0, .1, 1], [0, 0, 1])
                            },
                            children: (0,
                            r.jsx)(eH, {
                                progress: n.active.to([0, .6], [0, 1]),
                                heroImageObjectPosition: t.hero.background.objectPosition
                            })
                        })
                    }), (0,
                    r.jsx)(eq, {
                        data: [{
                            component: (0,
                            r.jsx)(eb, {
                                data: t.hero.headline,
                                enteringProgress: n.entering
                            })
                        }, ...t.textScroll],
                        progress: n.active.to([0, .5], [0, 1])
                    }), (0,
                    r.jsx)(eD, {
                        progress: n.active.to([0, .4, 1], [0, 0, 1])
                    })]
                })
            }),
            imageframe: e$(function(e) {
                let {data: t, progress: n} = e;
                return (0,
                r.jsx)(tw, {
                    data: t,
                    style: {
                        opacity: n.entering
                    }
                })
            })
        };
        var tJ = e$(function(e) {
            let {data: t, config: n, scrollingElement: i, progress: a} = e
              , l = (0,
            o.useMemo)( () => "section-mask-".concat(ei()(t.hero.eyebrow)), []);
            return (0,
            r.jsxs)(s.q.div, {
                className: c()(eK().section, {
                    [eK().transparent]: t.config.isTransparent
                }),
                style: {
                    clipPath: a.active.to(e => e > 0 ? "none" : "url(#".concat(l, ")")),
                    y: a.leaving.to([0, 1], ["0%", "-30%"]),
                    scale: a.leaving.to([0, 1], [1, .7]),
                    opacity: a.leaving.to([0, .5, 1], [1, .3, 0]),
                    willChange: a.active.to(e => e > 0 && e < 1 ? "auto" : "transform, opacity")
                },
                children: [(0,
                r.jsx)(eW, {
                    id: l,
                    progress: a.entering
                }), t.content.map( (e, a) => {
                    let o = tY[e.component]
                      , s = 0 === a
                      , l = a === t.content.length - 1;
                    return (0,
                    r.jsx)(o, {
                        data: {
                            hero: t.hero,
                            ...e.data
                        },
                        config: {
                            height: e.height,
                            heightMobile: e.heightMobile,
                            overlap: [s ? n.overlap[0] : j.AR.Ur, l ? n.overlap[1] : j.AR.Ur],
                            snapping: !0
                        },
                        scrollingElementsContainer: i
                    }, a)
                }
                ), !t.config.isIntro && (0,
                r.jsxs)(P, {
                    children: [t.hero.eyebrow, t.hero.label && (0,
                    r.jsx)(P.Label, {
                        children: t.hero.label
                    })]
                })]
            })
        })
          , tQ = (0,
        o.forwardRef)(function(e, t) {
            let {data: n, isActive: i, modeSpring: a, scrollBarRef: l} = e
              , m = (0,
            F.LZ)();
            (0,
            o.useEffect)( () => {
                i ? null == m || m.start() : null == m || m.stop()
            }
            , [m, i]);
            let[d,u] = (0,
            o.useMemo)( () => {
                let e = 0;
                return [t => {
                    e = t
                }
                , () => e]
            }
            , [])
              , g = (0,
            o.useRef)(Array(n.length).fill(null))
              , p = e => {
                var t;
                let n = (null === (t = g.current[e]) || void 0 === t ? void 0 : t.offsetTop) || 0;
                0 !== e && (n += j.AR.pR),
                d(e),
                null == m || m.scrollTo(n, {
                    offset: j.AR.xR,
                    immediate: !0,
                    force: !0
                })
            }
            ;
            (0,
            o.useImperativeHandle)(t, () => ({
                getCurrentSectionIndex: u,
                scrollToSection: p
            }));
            let h = (0,
            o.useRef)(null)
              , [v,f] = (0,
            o.useState)(null);
            (0,
            o.useEffect)( () => {
                f(h.current)
            }
            , []);
            let[_,x] = (0,
            o.useMemo)( () => {
                let e = Array(n.length).fill(null)
                  , t = t => {
                    var n;
                    i && (clearTimeout(e[t]),
                    null === (n = l.current) || void 0 === n || n.hideLabel(t))
                }
                  , a = async n => {
                    var a;
                    i && (await (null === (a = l.current) || void 0 === a ? void 0 : a.showLabel(n)),
                    e[n] = setTimeout( () => t(n), j.AR.tO))
                }
                ;
                return [t, a]
            }
            , [i, n.length]);
            return (0,
            r.jsx)(F.pi, {
                root: !0,
                options: j.AR.MO,
                children: (0,
                r.jsxs)(J, {
                    children: [(0,
                    r.jsx)(et, {}), (0,
                    r.jsx)(s.q.div, {
                        className: c()(eK().content, {
                            [eK().active]: i
                        }),
                        style: {
                            opacity: a.to([0, .1, 1], [1, 0, 0]),
                            display: a.to(e => e < 1 ? "block" : "none")
                        },
                        children: (0,
                        r.jsx)(s.q.div, {
                            className: eK().contentBody,
                            style: {
                                scale: a.to([0, 1], [1, .5])
                            },
                            children: n.map( (e, t) => {
                                let i = 0 === t
                                  , a = t === n.length - 1;
                                return (0,
                                r.jsx)(tJ, {
                                    ref: e => {
                                        g.current[t] = e
                                    }
                                    ,
                                    data: e,
                                    scrollingElementsContainer: v,
                                    config: {
                                        height: 0,
                                        overlap: [i ? 0 : j.AR.pR, a ? 0 : j.AR.pR],
                                        snapping: !1
                                    },
                                    onEnter: () => {
                                        d(t),
                                        x(t)
                                    }
                                    ,
                                    onProgress: e => {
                                        var n;
                                        let {enteringProgress: i, activeProgress: a, leavingProgress: r} = e;
                                        null === (n = l.current) || void 0 === n || n.update(t, {
                                            enteringProgress: i,
                                            activeProgress: a,
                                            leavingProgress: r
                                        })
                                    }
                                    ,
                                    onLeave: () => {
                                        _(t)
                                    }
                                }, t)
                            }
                            )
                        })
                    }), (0,
                    r.jsx)("div", {
                        ref: h,
                        className: eK().scrollingElements
                    })]
                })
            })
        })
          , tX = JSON.parse('[{"config":{"isIntro":true,"isTransparent":false,"isDisabled":false},"hero":{"headline":["Ai Pin"],"eyebrow":"Ai Pin","background":{"src":"","alt":"","objectPosition":"50% 50%"}},"content":[{"component":"intro","height":0,"data":{"aiPinImageFront":{"src":"/aipin/overview/0-intro/aipin-1.png","alt":""},"aiPinImageBack":{"src":"/aipin/overview/0-intro/aipin-2.png","alt":""},"textData":{"price":"Starting at $699","label":"Order today, pay over time."}}}]},{"config":{"isTransparent":false,"isDisabled":false},"hero":{"headline":["Beyond touch,","beyond screens."],"eyebrow":"New Interactions","background":{"src":"/aipin/overview/7-interactions/frame-1.jpg","alt":"New Interactions","objectPosition":"0% 50%"},"acceleratorVariant":"newinteractions"},"content":[{"component":"newinteractions","height":0,"data":{}},{"component":"newinteractionsframe","height":0,"data":{"type":"hand","frame":{"src":"/aipin/overview/7-interactions/frame-2.jpg","alt":""},"text":{"title":"Laser Ink Display","paragraph":"Watch your hand become a display for menus, experiences, and more simply by lifting and tilting your palm using the Laser Ink Display."}}},{"component":"newinteractionsframe","height":0,"data":{"type":"hand","frame":{"src":"/aipin/overview/7-interactions/frame-3.jpg","alt":""},"text":{"title":"","paragraph":"Tilt and roll your hand to interact with the display."}}},{"component":"newinteractionsframe","height":0,"data":{"type":"hand","frame":{"src":"/aipin/overview/7-interactions/frame-4.jpg","alt":""},"text":{"title":"","paragraph":"Close your fingers to make a selection."}}},{"component":"newinteractionsframe","height":0,"data":{"type":"hand","frame":{"src":"/aipin/overview/7-interactions/frame-5.jpg","alt":""},"text":{"title":"","paragraph":""}}},{"component":"newinteractionsframe","height":0,"data":{"type":"touch","frame":{"src":"/aipin/overview/7-interactions/frame-6.jpg","srcVertical":"/aipin/overview/7-interactions/frame-6-vertical.jpg","alt":""},"text":{"title":"Touch and hold","paragraph":"Ask your Ai Pin anything anywhere and at anytime–using just your voice while holding the touchpad. Holding down the touchpad with two-fingers enables Interpreter."}}},{"component":"newinteractionsframe","height":0,"data":{"type":"touch","frame":{"src":"/aipin/overview/7-interactions/frame-7.jpg","srcVertical":"/aipin/overview/7-interactions/frame-7-vertical.jpg","alt":""},"text":{"title":"Familiar gestures","paragraph":"Navigate experiences effortlessly, using familiar gestures like touch, tap, and swipe to answer calls, control the volume and more. Capture the moment by double tapping the touchpad with two-fingers."}}}]},{"config":{"isTransparent":false,"isDisabled":false},"hero":{"headline":["Think out loud."],"eyebrow":"Ai Mic","background":{"src":"/aipin/overview/ai-pin-mic/traveller0.jpg","mobileSrc":"/aipin/overview/ai-pin-mic/traveller1.jpg","alt":"A person interacting with the Ai Pin","objectPosition":"50% 65%"}},"content":[{"component":"aimic","height":5,"heightMobile":5,"data":{"textScroll":[{"type":"subheadline","text":"Designed to handle the simple and the complex, Ai Mic quickly finds what you’re looking for."},{"type":"paragraph","text":"Ai Mic even steps in to remember important information you don’t want to forget."}],"conversations":{"exhibit":[{"type":"human","text":"What\'s that exhibit Ava texted me to go see while I’m here?"},{"type":"aipin","text":"Ava recommended Moon Phases: A New Understanding."},{"type":"human","text":"Can I still see it?"},{"type":"aipin","text":"Yes, it’s open Monday through Saturday from 10am to 7pm"},{"type":"human","text":"Remember that I want to go there before I leave."}],"vintagePhoto":[{"type":"human","text":"How much is a vintage photograph of a total eclipse going for?"},{"type":"aipin","text":"Vintage photographs of total eclipses range in price from $12.99 to $23.90 on your favorite auction site."}]}}}]},{"config":{"isTransparent":true,"isDisabled":false},"hero":{"headline":["Important rings.","Fewer pings."],"eyebrow":"Trusted Contacts","background":{"src":"/aipin/overview/1-trusted-contacts/hero.jpg","alt":"Trusted Contacts","objectPosition":"50% 20%"}},"content":[{"component":"trustedcontacts","height":6,"data":{"textScroll":[{"type":"subheadline","text":"Ai Pin is extra mindful of you — and your time."},{"type":"paragraph","text":"Choose who can reach you — from close family and friends to your favorite coworkers — eliminating unnecessary notifications."},{"type":"paragraph","text":""},{"type":"paragraph","text":"Your Ai Pin will let you know when your trusted contacts reach out."},{"type":"paragraph","text":"Your Ai Pin learns what takes priority."},{"type":"paragraph","text":"Important calls or texts from those outside of your trusted contacts can still come through as needed. Your Ai Pin is informed by your interactions of what takes priority and lets you know when those non-trusted contacts have reached out to you."}],"animation":{"aiPinSrc":"/aipin/overview/1-trusted-contacts/aipin.png","aiPinLightSrc":"/aipin/overview/1-trusted-contacts/aipin-light.png","contacts":[{"name":"Lorenzo","isTrusted":true},{"name":"Steven","isTrusted":false},{"name":"Jenna","isTrusted":true},{"name":"Paul","isTrusted":true},{"name":"Nick","isTrusted":true},{"name":"Charles","isTrusted":false},{"name":"Cami","isTrusted":true},{"name":"Ali","isTrusted":true},{"name":"David","isTrusted":false},{"name":"Steph","isTrusted":true},{"name":"Brian","isTrusted":false},{"name":"Michelle","isTrusted":true},{"name":"George","isTrusted":false}],"trustedContacts":[{"type":"call","text":"Mom","label":"","position":[-1.3,1.4,0],"startAt":0.35,"nameSrc":"/aipin/overview/1-trusted-contacts/mom.png","iconSrc":"/aipin/overview/1-trusted-contacts/icon-phone.png"},{"type":"message","text":"987-654-3210","label":"food-delivery","position":[1.5,1.4,0],"startAt":0.55,"nameSrc":"/aipin/overview/1-trusted-contacts/food-delivery.png","iconSrc":"/aipin/overview/1-trusted-contacts/icon-message.png"}]}}},{"component":"imageframe","height":0,"data":{"src":"/aipin/overview/1-trusted-contacts/final.jpg","alt":""}}]},{"config":{"isTransparent":true,"isDisabled":false},"hero":{"headline":["Get caught up in","moments, not minutes."],"eyebrow":"Catch Me Up","background":{"src":"/aipin/overview/2-catch-me-up/hero.jpg","alt":"Catch me up","objectPosition":"50% 60%"}},"content":[{"component":"catchmeup","height":8,"data":{"textScroll":[{"type":"subheadline","text":"Quickly catch up on the people and things you may have missed—with just one prompt."},{"type":"paragraph","text":"Simply say “Catch me up,” and your Ai Pin does all the work of sifting your texts and calls to give you the essence of what you need to know—and saving you precious time for what’s important."}],"animation":{"catchMeUpTextSrc":"/aipin/overview/2-catch-me-up/catch-me-up-text.png","aiPinSrc":"/aipin/overview/2-catch-me-up/aipin.png","bubbles":[{"position":369,"contact":"Jenna","text":"Hi! Anyone want to get ramen tomorrow night?"},{"position":465,"contact":"Lorenzo","text":"No – been wanting to."},{"position":632,"contact":"Cami","text":"Yes! Have you been to Ramen House?"},{"position":662,"contact":"Jenna","text":"Let’s go at 6?"},{"position":334,"contact":"Nick","text":"7:30?"}]}}},{"component":"imageframe","height":0,"data":{"src":"/aipin/overview/2-catch-me-up/final.jpg","alt":""}}]},{"config":{"isTransparent":false,"isDisabled":false},"hero":{"headline":["The soundtrack","for your life."],"eyebrow":"Ai DJ","background":{"src":"/aipin/overview/3-ai-dj/hero.jpg","alt":"Ai dj","objectPosition":"50% 0%"}},"content":[{"component":"aidj","height":6,"heightMobile":3,"data":{"textScroll":[{"type":"subheadline","text":"Your Ai Pin crafts the perfect soundtrack for every moment."}]}}]},{"config":{"isTransparent":false,"isDisabled":false},"hero":{"headline":["Wholesome nutrition,","one step at a time."],"eyebrow":"Health","label":"coming soon","background":{"src":"/aipin/overview/4-health/hero.jpg","alt":"Health","objectPosition":"50% 80%"}},"content":[{"component":"health","height":6,"data":{"textScroll":[{"type":"subheadline","text":"Your Ai will be there to help keep your health on track."},{"type":"paragraph","text":"Tell your Ai about what your activity and nutrition goals are, and it will keep tabs on your progress, helping you understand the energy you’re taking in and the energy you’re putting out."},{"type":"paragraph","text":"Ask if a food—whether an orange, candy snack, or energy bar—is ‘okay’ to eat by holding up the food and asking, “Can I eat this?”"}],"conversations":{"initial":[{"type":"human","text":"How much sugar is in this?"},{"type":"aipin","text":"A whole dragonfruit contains 7.31 grams of sugar."}],"followup":[{"type":"human","text":"Can I eat this?"},{"type":"aipin","text":"Eating a whole Dragonfruit would exceed your sugar goal."}]}}}]},{"config":{"isTransparent":false,"isDisabled":false},"hero":{"headline":["Just say it,","we\'ll display it."],"eyebrow":"Ai Messaging","background":{"src":"/aipin/overview/5-ai-messaging/hiker.jpg","alt":"Ai messaging","objectPosition":"50% 50%"}},"content":[{"component":"aimessaging","height":6,"data":{"textScroll":[{"type":"subheadline","text":"With your Ai, you can compose messages while saving time and skipping the keyboard."},{"type":"paragraph","text":"Your Ai instantly crafts messages that sound like you. To send a message in your style, say who you want to reach and what you want to say. Your Ai will fill in the rest."}],"conversation":[{"type":"human","text":"Tell Paul from work I just finished the hike, the view is incredible and thanks for the great suggestion."},{"type":"aipin","text":"Hi Paul, hope you’re doing well. Your hike suggestion was great. Just got to the top and the view is incredible."},{"type":"human","text":"Actually, just make it more grateful and casual."}]}}]},{"config":{"isTransparent":false,"isDisabled":false},"hero":{"headline":["Breaking barriers,","in your own voice."],"eyebrow":"Interpreter","background":{"src":"/aipin/overview/6-interpreter/hero.jpg","alt":"Interpreter","objectPosition":"50% 80%"}},"content":[{"component":"interpreter","height":3,"data":{"textScroll":[{"type":"subheadline","text":"Fluent in many languages — Ai Pin steps in as an interpreter when you need one most."},{"type":"paragraph","text":"Automatically detecting what language is being spoken around you — Ai Pin translates your words into the local dialect so that you can communicate with ease."}]}}]},{"config":{"isTransparent":false,"isDisabled":false},"hero":{"headline":["Capture the moment","while staying in the moment."],"eyebrow":"Ai Photographer","background":{"src":"/aipin/overview/photographer/d-1-2.jpg","alt":"Ai Photographer section hero image","objectPosition":"50% 65%"}},"content":[{"component":"aiphotographer","height":5,"heightMobile":4,"data":{"textScroll":[{"type":"subheadline","text":"Simply use Ai Mic or double tap with two-fingers to capture the moment, just as you see it."}]}}]}]')
          , t$ = n(77257)
          , t0 = n.n(t$);
        let t1 = (0,
        s.q)(d.ZT);
        var t2 = (0,
        o.forwardRef)(function(e, t) {
            let {data: n, modeSpring: i, acceleratorSprings: a, onEnterAccelerator: l, onItemSelection: c} = e
              , [m] = (0,
            s.bY)(n.length, () => ({
                progress: 0,
                height: 0,
                label: 0
            }))
              , d = (e, t) => {
                m[e].progress.set(t.activeProgress),
                m[e].height.set(t.enteringProgress - t.leavingProgress)
            }
              , u = e => {
                n.forEach( (t, n) => {
                    m[n].progress.set(n < e ? 1 : 0),
                    m[n].height.set(n === e ? 1 : 0)
                }
                )
            }
              , g = e => m[e].label.start(0)
              , p = async function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return m[e].label.start(1, {
                    immediate: t
                })
            };
            return (0,
            o.useImperativeHandle)(t, () => ({
                update: d,
                reset: u,
                showLabel: p,
                hideLabel: g
            })),
            (0,
            r.jsx)(s.q.div, {
                className: t0().scrollBar,
                style: {
                    scale: i.to([0, 1], [1, 1.5]),
                    y: "-50%"
                },
                onTouchStart: () => {
                    l()
                }
                ,
                onTouchEnd: e => {
                    e.preventDefault()
                }
                ,
                onMouseEnter: l,
                onMouseMove: l,
                children: n.map( (e, t) => (0,
                r.jsxs)("div", {
                    className: t0().scrollBarItem,
                    "aria-hidden": "true",
                    onMouseMove: () => c(t),
                    children: [(0,
                    r.jsx)(s.q.div, {
                        className: t0().scrollBarItemInner,
                        style: {
                            "--translateY": (0,
                            s.to)([i, m[t].progress.to([0, 1], [-24, 0])], (e, t) => "".concat((1 - e) * t, "px")),
                            "--opacity": (0,
                            s.to)([i, a[t].position.to([-2, -1, 0, 1, 2], [1, 1, 0, 1, 1])], (e, t) => 1 - e * t),
                            "--height": (0,
                            s.to)([i, m[t].height, a[t].position.to([-2, -1, 0, 1, 2], [0, 0, 1, 0, 0])], (e, t, n) => "".concat(6 + 24 * (t * (1 - e) + n * e), "px")),
                            "--height-mobile": (0,
                            s.to)([i, m[t].height, a[t].position.to([-2, -1, 0, 1, 2], [0, 0, 1, 0, 0])], (e, t, n) => "".concat(6 + 24 * (t * (1 - e) + n * e), "px"))
                        }
                    }), (0,
                    r.jsx)(t1, {
                        className: t0().scrollBarItemLabel,
                        variant: "label1",
                        theme: "dark",
                        style: {
                            opacity: (0,
                            s.to)([i.to([0, .75, 1], [0, 0, 1]), m[t].label, a[t].position.to([-1, -.5, 0, .5, 1], [0, 0, 1, 0, 0])], (e, t, n) => t * (1 - e) + n * e),
                            x: (0,
                            s.to)([i, m[t].label.to(e => (1 - e) * 7)], (e, t) => (1 - e) * t),
                            y: "-50%"
                        },
                        children: e.hero.eyebrow
                    })]
                }, t))
            })
        })
          , t5 = (0,
        o.memo)(function() {
            let[e,t] = (0,
            o.useState)(a.Scroll)
              , n = (0,
            o.useRef)(null)
              , i = (0,
            o.useRef)(null)
              , l = (0,
            o.useRef)(null)
              , [d] = (0,
            s.q_)( () => ({
                progress: 0
            }))
              , u = () => {
                e === a.Scroll && (t(a.Frozen),
                setTimeout(async () => {
                    var e, r;
                    let o = (null === (e = n.current) || void 0 === e ? void 0 : e.getCurrentSectionIndex()) || 0;
                    null === (r = i.current) || void 0 === r || r.jumpTo(o),
                    setTimeout( () => {
                        t(a.Accelerator)
                    }
                    , 500),
                    await d.progress.start(1, {
                        config: j.Cg.B
                    })
                }
                , 20))
            }
              , g = async () => {
                var r, o, s, c;
                if (e !== a.Accelerator)
                    return;
                t(a.Frozen);
                let m = (null === (r = i.current) || void 0 === r ? void 0 : r.getCurrentSectionIndex()) || 0;
                null === (o = l.current) || void 0 === o || o.showLabel(m, !0),
                null === (s = n.current) || void 0 === s || s.scrollToSection(m),
                null === (c = l.current) || void 0 === c || c.reset(m),
                await d.progress.start(0, {
                    config: j.Cg.T
                }),
                t(a.Scroll),
                setTimeout( () => {
                    var e;
                    null === (e = l.current) || void 0 === e || e.hideLabel(m)
                }
                , j.AR.tO)
            }
            ;
            (0,
            o.useEffect)( () => (document.body.classList.add(t0().hideScrollBar),
            () => {
                document.body.classList.remove(t0().hideScrollBar)
            }
            ), []);
            let {isPageEntered: p, isPageLeaving: h} = (0,
            m.T8)()
              , v = p || h;
            (0,
            o.useEffect)( () => v ? (window.scrollTo(0, 0),
            document.documentElement.style.overflow = "hidden",
            document.body.style.overflow = "hidden",
            () => {
                document.documentElement.style.overflow = "",
                document.body.style.overflow = ""
            }
            ) : () => {}
            , [v]);
            let f = tX.filter(e => {
                let {config: t} = e;
                return !0 !== t.isDisabled
            }
            );
            return (0,
            r.jsx)(Z, {
                mode: e,
                children: (0,
                r.jsxs)("div", {
                    className: c()(t0().main, {
                        [t0().active]: v
                    }),
                    children: [(0,
                    r.jsx)(tQ, {
                        ref: n,
                        data: f,
                        modeSpring: d.progress,
                        isActive: e === a.Scroll,
                        scrollBarRef: l
                    }), (0,
                    r.jsx)(B, {
                        ref: i,
                        data: f,
                        modeSpring: d.progress,
                        isActive: e === a.Accelerator,
                        onExit: g,
                        children: t => (0,
                        r.jsx)(t2, {
                            ref: l,
                            data: f,
                            modeSpring: d.progress,
                            acceleratorSprings: t,
                            onEnterAccelerator: u,
                            onItemSelection: t => {
                                if (e === a.Accelerator) {
                                    var n;
                                    null === (n = i.current) || void 0 === n || n.jumpTo(t)
                                }
                            }
                        })
                    })]
                })
            })
        })
          , t3 = !0
          , t7 = (0,
        o.forwardRef)(function(e, t) {
            let {className: n, style: i} = e;
            return (0,
            r.jsx)("div", {
                ref: t,
                className: n,
                style: i,
                children: (0,
                r.jsx)(t5, {})
            })
        })
    },
    69587: function(e) {
        e.exports = {
            _grey: "#838383",
            _grey2: "#727679",
            _greyDark: "#5e5e5e",
            _greyLight1: "#b1b1b1",
            _greyLight2: "#fafafa",
            _greyLight3: "#dfdfdf",
            _red: "#ff6262",
            _lgMq: "(min-width: 60em)",
            _mdMq: "(min-width: 48em)",
            _mediaDesktopMq: "(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",
            _navbarMq: "(min-width: 67em)",
            _smMq: "(min-width: 36em)",
            _xlMq: "(min-width: 80em)",
            _xxlMq: "(min-width: 100em)",
            _baseTransition: ".15s ease-in-out",
            _fontFamily: '"Humane",sans-serif',
            _marginBottomPage: "30px",
            _marginFromNavbar: "120px",
            _navbarHeight: "72px",
            _accountPanelHorizontalPadding: "27px",
            item: "style_item__svoeP",
            body: "style_body__QtwPI",
            accelerator: "style_accelerator__1GM0g",
            active: "style_active__sp0K6",
            eyebrow: "style_eyebrow__J29Gc",
            headline: "style_headline__SEr_T",
            acceleratorVariantnewinteractions: "style_acceleratorVariantnewinteractions__OkbRH",
            image: "style_image__eSk9s"
        }
    },
    31986: function(e) {
        e.exports = {
            _grey: "#838383",
            _grey2: "#727679",
            _greyDark: "#5e5e5e",
            _greyLight1: "#b1b1b1",
            _greyLight2: "#fafafa",
            _greyLight3: "#dfdfdf",
            _red: "#ff6262",
            _lgMq: "(min-width: 60em)",
            _mdMq: "(min-width: 48em)",
            _mediaDesktopMq: "(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",
            _navbarMq: "(min-width: 67em)",
            _smMq: "(min-width: 36em)",
            _xlMq: "(min-width: 80em)",
            _xxlMq: "(min-width: 100em)",
            _baseTransition: ".15s ease-in-out",
            _fontFamily: '"Humane",sans-serif',
            _marginBottomPage: "30px",
            _marginFromNavbar: "120px",
            _navbarHeight: "72px",
            _accountPanelHorizontalPadding: "27px",
            main: "style_main__ISazy"
        }
    },
    30088: function(e) {
        e.exports = {
            _grey: "#838383",
            _grey2: "#727679",
            _greyDark: "#5e5e5e",
            _greyLight1: "#b1b1b1",
            _greyLight2: "#fafafa",
            _greyLight3: "#dfdfdf",
            _red: "#ff6262",
            _lgMq: "(min-width: 60em)",
            _mdMq: "(min-width: 48em)",
            _mediaDesktopMq: "(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",
            _navbarMq: "(min-width: 67em)",
            _smMq: "(min-width: 36em)",
            _xlMq: "(min-width: 80em)",
            _xxlMq: "(min-width: 100em)",
            _baseTransition: ".15s ease-in-out",
            _fontFamily: '"Humane",sans-serif',
            _marginBottomPage: "30px",
            _marginFromNavbar: "120px",
            _navbarHeight: "72px",
            _accountPanelHorizontalPadding: "27px",
            fixedElement: "style_fixedElement__M_awc",
            section: "style_section__M1Qyx",
            contentBody: "style_contentBody__r0Po1",
            content: "style_content__5gDEP",
            active: "style_active__7Jaet",
            transparent: "style_transparent__1Uudw",
            scrollingElements: "style_scrollingElements__CLDEi",
            scrollingElement: "style_scrollingElement__3URLl"
        }
    },
    4693: function(e) {
        e.exports = {
            _grey: "#838383",
            _grey2: "#727679",
            _greyDark: "#5e5e5e",
            _greyLight1: "#b1b1b1",
            _greyLight2: "#fafafa",
            _greyLight3: "#dfdfdf",
            _red: "#ff6262",
            _lgMq: "(min-width: 60em)",
            _mdMq: "(min-width: 48em)",
            _mediaDesktopMq: "(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",
            _navbarMq: "(min-width: 67em)",
            _smMq: "(min-width: 36em)",
            _xlMq: "(min-width: 80em)",
            _xxlMq: "(min-width: 100em)",
            _baseTransition: ".15s ease-in-out",
            _fontFamily: '"Humane",sans-serif',
            _marginBottomPage: "30px",
            _marginFromNavbar: "120px",
            _navbarHeight: "72px",
            _accountPanelHorizontalPadding: "27px",
            main: "style_main__2oDCz"
        }
    },
    70630: function(e) {
        e.exports = {
            _grey: "#838383",
            _grey2: "#727679",
            _greyDark: "#5e5e5e",
            _greyLight1: "#b1b1b1",
            _greyLight2: "#fafafa",
            _greyLight3: "#dfdfdf",
            _red: "#ff6262",
            _lgMq: "(min-width: 60em)",
            _mdMq: "(min-width: 48em)",
            _mediaDesktopMq: "(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",
            _navbarMq: "(min-width: 67em)",
            _smMq: "(min-width: 36em)",
            _xlMq: "(min-width: 80em)",
            _xxlMq: "(min-width: 100em)",
            _baseTransition: ".15s ease-in-out",
            _fontFamily: '"Humane",sans-serif',
            _marginBottomPage: "30px",
            _marginFromNavbar: "120px",
            _navbarHeight: "72px",
            _accountPanelHorizontalPadding: "27px",
            main: "style_main__kte6_"
        }
    },
    85898: function(e) {
        e.exports = {
            _grey: "#838383",
            _grey2: "#727679",
            _greyDark: "#5e5e5e",
            _greyLight1: "#b1b1b1",
            _greyLight2: "#fafafa",
            _greyLight3: "#dfdfdf",
            _red: "#ff6262",
            _lgMq: "(min-width: 60em)",
            _mdMq: "(min-width: 48em)",
            _mediaDesktopMq: "(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",
            _navbarMq: "(min-width: 67em)",
            _smMq: "(min-width: 36em)",
            _xlMq: "(min-width: 80em)",
            _xxlMq: "(min-width: 100em)",
            _baseTransition: ".15s ease-in-out",
            _fontFamily: '"Humane",sans-serif',
            _marginBottomPage: "30px",
            _marginFromNavbar: "120px",
            _navbarHeight: "72px",
            _accountPanelHorizontalPadding: "27px",
            root: "style_root__Bt9R1",
            text: "style_text__lBvBw",
            textGradient: "style_textGradient__Kdzxr",
            images: "style_images__Wpu9H"
        }
    },
    72576: function(e) {
        e.exports = {
            _grey: "#838383",
            _grey2: "#727679",
            _greyDark: "#5e5e5e",
            _greyLight1: "#b1b1b1",
            _greyLight2: "#fafafa",
            _greyLight3: "#dfdfdf",
            _red: "#ff6262",
            _lgMq: "(min-width: 60em)",
            _mdMq: "(min-width: 48em)",
            _mediaDesktopMq: "(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",
            _navbarMq: "(min-width: 67em)",
            _smMq: "(min-width: 36em)",
            _xlMq: "(min-width: 80em)",
            _xxlMq: "(min-width: 100em)",
            _baseTransition: ".15s ease-in-out",
            _fontFamily: '"Humane",sans-serif',
            _marginBottomPage: "30px",
            _marginFromNavbar: "120px",
            _navbarHeight: "72px",
            _accountPanelHorizontalPadding: "27px",
            root: "style_root__lEI9v",
            textContainer: "style_textContainer__3xxBI"
        }
    },
    97514: function(e) {
        e.exports = {
            eyebrow: "style_eyebrow__oUuU8",
            label: "style_label__tDHPW"
        }
    },
    97270: function(e) {
        e.exports = {
            main: "style_main__gWJct"
        }
    },
    35613: function(e) {
        e.exports = {
            _grey: "#838383",
            _grey2: "#727679",
            _greyDark: "#5e5e5e",
            _greyLight1: "#b1b1b1",
            _greyLight2: "#fafafa",
            _greyLight3: "#dfdfdf",
            _red: "#ff6262",
            _lgMq: "(min-width: 60em)",
            _mdMq: "(min-width: 48em)",
            _mediaDesktopMq: "(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",
            _navbarMq: "(min-width: 67em)",
            _smMq: "(min-width: 36em)",
            _xlMq: "(min-width: 80em)",
            _xxlMq: "(min-width: 100em)",
            _baseTransition: ".15s ease-in-out",
            _fontFamily: '"Humane",sans-serif',
            _marginBottomPage: "30px",
            _marginFromNavbar: "120px",
            _navbarHeight: "72px",
            _accountPanelHorizontalPadding: "27px",
            main: "style_main__8sYc4",
            image: "style_image__pTCaX"
        }
    },
    99934: function(e) {
        e.exports = {
            _grey: "#838383",
            _grey2: "#727679",
            _greyDark: "#5e5e5e",
            _greyLight1: "#b1b1b1",
            _greyLight2: "#fafafa",
            _greyLight3: "#dfdfdf",
            _red: "#ff6262",
            _lgMq: "(min-width: 60em)",
            _mdMq: "(min-width: 48em)",
            _mediaDesktopMq: "(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",
            _navbarMq: "(min-width: 67em)",
            _smMq: "(min-width: 36em)",
            _xlMq: "(min-width: 80em)",
            _xxlMq: "(min-width: 100em)",
            _baseTransition: ".15s ease-in-out",
            _fontFamily: '"Humane",sans-serif',
            _marginBottomPage: "30px",
            _marginFromNavbar: "120px",
            _navbarHeight: "72px",
            _accountPanelHorizontalPadding: "27px",
            main: "style_main__msLYc",
            item: "style_item__SvLWv",
            subheadline: "style_subheadline__l5GhF",
            paragraph: "style_paragraph__LG94H"
        }
    },
    69960: function(e) {
        e.exports = {
            _grey: "#838383",
            _grey2: "#727679",
            _greyDark: "#5e5e5e",
            _greyLight1: "#b1b1b1",
            _greyLight2: "#fafafa",
            _greyLight3: "#dfdfdf",
            _red: "#ff6262",
            _lgMq: "(min-width: 60em)",
            _mdMq: "(min-width: 48em)",
            _mediaDesktopMq: "(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",
            _navbarMq: "(min-width: 67em)",
            _smMq: "(min-width: 36em)",
            _xlMq: "(min-width: 80em)",
            _xxlMq: "(min-width: 100em)",
            _baseTransition: ".15s ease-in-out",
            _fontFamily: '"Humane",sans-serif',
            _marginBottomPage: "30px",
            _marginFromNavbar: "120px",
            _navbarHeight: "72px",
            _accountPanelHorizontalPadding: "27px",
            main: "style_main__51U4C"
        }
    },
    93763: function(e) {
        e.exports = {
            _grey: "#838383",
            _grey2: "#727679",
            _greyDark: "#5e5e5e",
            _greyLight1: "#b1b1b1",
            _greyLight2: "#fafafa",
            _greyLight3: "#dfdfdf",
            _red: "#ff6262",
            _lgMq: "(min-width: 60em)",
            _mdMq: "(min-width: 48em)",
            _mediaDesktopMq: "(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",
            _navbarMq: "(min-width: 67em)",
            _smMq: "(min-width: 36em)",
            _xlMq: "(min-width: 80em)",
            _xxlMq: "(min-width: 100em)",
            _baseTransition: ".15s ease-in-out",
            _fontFamily: '"Humane",sans-serif',
            _marginBottomPage: "30px",
            _marginFromNavbar: "120px",
            _navbarHeight: "72px",
            _accountPanelHorizontalPadding: "27px",
            main: "style_main__QtcZf"
        }
    },
    98570: function(e) {
        e.exports = {
            _grey: "#838383",
            _grey2: "#727679",
            _greyDark: "#5e5e5e",
            _greyLight1: "#b1b1b1",
            _greyLight2: "#fafafa",
            _greyLight3: "#dfdfdf",
            _red: "#ff6262",
            _lgMq: "(min-width: 60em)",
            _mdMq: "(min-width: 48em)",
            _mediaDesktopMq: "(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",
            _navbarMq: "(min-width: 67em)",
            _smMq: "(min-width: 36em)",
            _xlMq: "(min-width: 80em)",
            _xxlMq: "(min-width: 100em)",
            _baseTransition: ".15s ease-in-out",
            _fontFamily: '"Humane",sans-serif',
            _marginBottomPage: "30px",
            _marginFromNavbar: "120px",
            _navbarHeight: "72px",
            _accountPanelHorizontalPadding: "27px",
            main: "style_main__8MRZc"
        }
    },
    94115: function(e) {
        e.exports = {
            _grey: "#838383",
            _grey2: "#727679",
            _greyDark: "#5e5e5e",
            _greyLight1: "#b1b1b1",
            _greyLight2: "#fafafa",
            _greyLight3: "#dfdfdf",
            _red: "#ff6262",
            _lgMq: "(min-width: 60em)",
            _mdMq: "(min-width: 48em)",
            _mediaDesktopMq: "(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",
            _navbarMq: "(min-width: 67em)",
            _smMq: "(min-width: 36em)",
            _xlMq: "(min-width: 80em)",
            _xxlMq: "(min-width: 100em)",
            _baseTransition: ".15s ease-in-out",
            _fontFamily: '"Humane",sans-serif',
            _marginBottomPage: "30px",
            _marginFromNavbar: "120px",
            _navbarHeight: "72px",
            _accountPanelHorizontalPadding: "27px",
            root: "style_root__V4mCy",
            main: "style_main___ruKf",
            text: "style_text__3ayIb",
            centerImage: "style_centerImage__0pm4k",
            gradient: "style_gradient__wCNbr",
            disclaimer: "style_disclaimer__GKcn8"
        }
    },
    38688: function(e) {
        e.exports = {
            _grey: "#838383",
            _grey2: "#727679",
            _greyDark: "#5e5e5e",
            _greyLight1: "#b1b1b1",
            _greyLight2: "#fafafa",
            _greyLight3: "#dfdfdf",
            _red: "#ff6262",
            _lgMq: "(min-width: 60em)",
            _mdMq: "(min-width: 48em)",
            _mediaDesktopMq: "(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",
            _navbarMq: "(min-width: 67em)",
            _smMq: "(min-width: 36em)",
            _xlMq: "(min-width: 80em)",
            _xxlMq: "(min-width: 100em)",
            _baseTransition: ".15s ease-in-out",
            _fontFamily: '"Humane",sans-serif',
            _marginBottomPage: "30px",
            _marginFromNavbar: "120px",
            _navbarHeight: "72px",
            _accountPanelHorizontalPadding: "27px",
            main: "style_main__q7Zlk",
            grid: "style_grid__zT_RQ",
            gridImage: "style_gridImage__pFzAx",
            a: "style_a__AEqoL",
            b: "style_b__IE5ak",
            c: "style_c___qPjw",
            d: "style_d__qrQ0q",
            e: "style_e__5CLEX",
            f: "style_f__UWEfc",
            g: "style_g__omaZ0",
            h: "style_h__q8iKH",
            i: "style_i__9upIE",
            j: "style_j__qHZxH",
            k: "style_k___1HKW",
            l: "style_l__Y1ywJ",
            m: "style_m__UHLlX",
            n: "style_n__0MFa3",
            o: "style_o__q7mUf",
            p: "style_p__iUSw5",
            q: "style_q__QcQiF",
            r: "style_r__YlnUv",
            s: "style_s__cFs22",
            t: "style_t__o1irE",
            u: "style_u__00_ZK",
            centralImageContainer: "style_centralImageContainer__J3Xll"
        }
    },
    62239: function(e) {
        e.exports = {
            _grey: "#838383",
            _grey2: "#727679",
            _greyDark: "#5e5e5e",
            _greyLight1: "#b1b1b1",
            _greyLight2: "#fafafa",
            _greyLight3: "#dfdfdf",
            _red: "#ff6262",
            _lgMq: "(min-width: 60em)",
            _mdMq: "(min-width: 48em)",
            _mediaDesktopMq: "(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",
            _navbarMq: "(min-width: 67em)",
            _smMq: "(min-width: 36em)",
            _xlMq: "(min-width: 80em)",
            _xxlMq: "(min-width: 100em)",
            _baseTransition: ".15s ease-in-out",
            _fontFamily: '"Humane",sans-serif',
            _marginBottomPage: "30px",
            _marginFromNavbar: "120px",
            _navbarHeight: "72px",
            _accountPanelHorizontalPadding: "27px",
            body: "style_body__Pt8bG",
            main: "style_main__61AfD",
            videoContainer: "style_videoContainer__sism3",
            video: "style_video__6bukU"
        }
    },
    85892: function(e) {
        e.exports = {
            _grey: "#838383",
            _grey2: "#727679",
            _greyDark: "#5e5e5e",
            _greyLight1: "#b1b1b1",
            _greyLight2: "#fafafa",
            _greyLight3: "#dfdfdf",
            _red: "#ff6262",
            _lgMq: "(min-width: 60em)",
            _mdMq: "(min-width: 48em)",
            _mediaDesktopMq: "(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",
            _navbarMq: "(min-width: 67em)",
            _smMq: "(min-width: 36em)",
            _xlMq: "(min-width: 80em)",
            _xxlMq: "(min-width: 100em)",
            _baseTransition: ".15s ease-in-out",
            _fontFamily: '"Humane",sans-serif',
            _marginBottomPage: "30px",
            _marginFromNavbar: "120px",
            _navbarHeight: "72px",
            _accountPanelHorizontalPadding: "27px",
            main: "style_main__KBWyM",
            bubble: "style_bubble__Tiu_K",
            bubbleContact: "style_bubbleContact__pRoxv",
            dot: "style_dot__CC7bK",
            bubbleMessage: "style_bubbleMessage__oFyqI"
        }
    },
    74568: function(e) {
        e.exports = {
            _grey: "#838383",
            _grey2: "#727679",
            _greyDark: "#5e5e5e",
            _greyLight1: "#b1b1b1",
            _greyLight2: "#fafafa",
            _greyLight3: "#dfdfdf",
            _red: "#ff6262",
            _lgMq: "(min-width: 60em)",
            _mdMq: "(min-width: 48em)",
            _mediaDesktopMq: "(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",
            _navbarMq: "(min-width: 67em)",
            _smMq: "(min-width: 36em)",
            _xlMq: "(min-width: 80em)",
            _xxlMq: "(min-width: 100em)",
            _baseTransition: ".15s ease-in-out",
            _fontFamily: '"Humane",sans-serif',
            _marginBottomPage: "30px",
            _marginFromNavbar: "120px",
            _navbarHeight: "72px",
            _accountPanelHorizontalPadding: "27px",
            video: "style_video__Bht6A",
            main: "style_main__pLQdl",
            videoElement: "style_videoElement__OE70e"
        }
    },
    84154: function(e) {
        e.exports = {
            _grey: "#838383",
            _grey2: "#727679",
            _greyDark: "#5e5e5e",
            _greyLight1: "#b1b1b1",
            _greyLight2: "#fafafa",
            _greyLight3: "#dfdfdf",
            _red: "#ff6262",
            _lgMq: "(min-width: 60em)",
            _mdMq: "(min-width: 48em)",
            _mediaDesktopMq: "(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",
            _navbarMq: "(min-width: 67em)",
            _smMq: "(min-width: 36em)",
            _xlMq: "(min-width: 80em)",
            _xxlMq: "(min-width: 100em)",
            _baseTransition: ".15s ease-in-out",
            _fontFamily: '"Humane",sans-serif',
            _marginBottomPage: "30px",
            _marginFromNavbar: "120px",
            _navbarHeight: "72px",
            _accountPanelHorizontalPadding: "27px",
            main: "style_main__V8zx2",
            video: "style_video__DyGDK"
        }
    },
    77153: function(e) {
        e.exports = {
            _grey: "#838383",
            _grey2: "#727679",
            _greyDark: "#5e5e5e",
            _greyLight1: "#b1b1b1",
            _greyLight2: "#fafafa",
            _greyLight3: "#dfdfdf",
            _red: "#ff6262",
            _lgMq: "(min-width: 60em)",
            _mdMq: "(min-width: 48em)",
            _mediaDesktopMq: "(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",
            _navbarMq: "(min-width: 67em)",
            _smMq: "(min-width: 36em)",
            _xlMq: "(min-width: 80em)",
            _xxlMq: "(min-width: 100em)",
            _baseTransition: ".15s ease-in-out",
            _fontFamily: '"Humane",sans-serif',
            _marginBottomPage: "30px",
            _marginFromNavbar: "120px",
            _navbarHeight: "72px",
            _accountPanelHorizontalPadding: "27px",
            image: "style_image__i8U2z",
            aiPinContainer: "style_aiPinContainer__ty3zL",
            aiPin: "style_aiPin__tBZKl",
            copy: "style_copy__ulwWU",
            aipinLogo: "style_aipinLogo__13oh_",
            price: "style_price__GzShG",
            label: "style_label__ANMT6",
            line: "style_line__JR7aY",
            videoThumbnailButton: "style_videoThumbnailButton__xztAH"
        }
    },
    96870: function(e) {
        e.exports = {
            _grey: "#838383",
            _grey2: "#727679",
            _greyDark: "#5e5e5e",
            _greyLight1: "#b1b1b1",
            _greyLight2: "#fafafa",
            _greyLight3: "#dfdfdf",
            _red: "#ff6262",
            _lgMq: "(min-width: 60em)",
            _mdMq: "(min-width: 48em)",
            _mediaDesktopMq: "(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",
            _navbarMq: "(min-width: 67em)",
            _smMq: "(min-width: 36em)",
            _xlMq: "(min-width: 80em)",
            _xxlMq: "(min-width: 100em)",
            _baseTransition: ".15s ease-in-out",
            _fontFamily: '"Humane",sans-serif',
            _marginBottomPage: "30px",
            _marginFromNavbar: "120px",
            _navbarHeight: "72px",
            _accountPanelHorizontalPadding: "27px",
            visualContainer: "style_visualContainer__Kmop4",
            main: "style_main__R0T4K",
            visual: "style_visual__obY4e"
        }
    },
    77069: function(e) {
        e.exports = {
            _grey: "#838383",
            _grey2: "#727679",
            _greyDark: "#5e5e5e",
            _greyLight1: "#b1b1b1",
            _greyLight2: "#fafafa",
            _greyLight3: "#dfdfdf",
            _red: "#ff6262",
            _lgMq: "(min-width: 60em)",
            _mdMq: "(min-width: 48em)",
            _mediaDesktopMq: "(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",
            _navbarMq: "(min-width: 67em)",
            _smMq: "(min-width: 36em)",
            _xlMq: "(min-width: 80em)",
            _xxlMq: "(min-width: 100em)",
            _baseTransition: ".15s ease-in-out",
            _fontFamily: '"Humane",sans-serif',
            _marginBottomPage: "30px",
            _marginFromNavbar: "120px",
            _navbarHeight: "72px",
            _accountPanelHorizontalPadding: "27px",
            main: "style_main__Ro9hx",
            touch: "style_touch__nlnkK",
            image: "style_image__LNudg",
            vertical: "style_vertical__AvQl_",
            horizontal: "style_horizontal__yVzKm",
            hand: "style_hand__Ni5VO",
            copy: "style_copy__wCqct"
        }
    },
    46223: function(e) {
        e.exports = {
            _grey: "#838383",
            _grey2: "#727679",
            _greyDark: "#5e5e5e",
            _greyLight1: "#b1b1b1",
            _greyLight2: "#fafafa",
            _greyLight3: "#dfdfdf",
            _red: "#ff6262",
            _lgMq: "(min-width: 60em)",
            _mdMq: "(min-width: 48em)",
            _mediaDesktopMq: "(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",
            _navbarMq: "(min-width: 67em)",
            _smMq: "(min-width: 36em)",
            _xlMq: "(min-width: 80em)",
            _xxlMq: "(min-width: 100em)",
            _baseTransition: ".15s ease-in-out",
            _fontFamily: '"Humane",sans-serif',
            _marginBottomPage: "30px",
            _marginFromNavbar: "120px",
            _navbarHeight: "72px",
            _accountPanelHorizontalPadding: "27px",
            trustedContactsNotificationIcon: "style_trustedContactsNotificationIcon__97CWv",
            gradientLayer: "style_gradientLayer__J3S54",
            main: "style_main__d68u1",
            contact: "style_contact__4S4Md",
            dot: "style_dot__bVC3L",
            trustedContactsNotification: "style_trustedContactsNotification__93bFK",
            pulse: "style_pulse__Wuunu",
            trustedContactsNotificationIconImage: "style_trustedContactsNotificationIconImage___RyIy",
            call: "style_call__WOGMg",
            "call-icon-animation": "style_call-icon-animation__Ks5m1",
            trustedContactsNotificationText: "style_trustedContactsNotificationText__cwwmL",
            "call-text-animation": "style_call-text-animation__oTRC_",
            trustedContactsNotificationLabel: "style_trustedContactsNotificationLabel__PZiEh"
        }
    },
    77257: function(e) {
        e.exports = {
            _grey: "#838383",
            _grey2: "#727679",
            _greyDark: "#5e5e5e",
            _greyLight1: "#b1b1b1",
            _greyLight2: "#fafafa",
            _greyLight3: "#dfdfdf",
            _red: "#ff6262",
            _lgMq: "(min-width: 60em)",
            _mdMq: "(min-width: 48em)",
            _mediaDesktopMq: "(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",
            _navbarMq: "(min-width: 67em)",
            _smMq: "(min-width: 36em)",
            _xlMq: "(min-width: 80em)",
            _xxlMq: "(min-width: 100em)",
            _baseTransition: ".15s ease-in-out",
            _fontFamily: '"Humane",sans-serif',
            _marginBottomPage: "30px",
            _marginFromNavbar: "120px",
            _navbarHeight: "72px",
            _accountPanelHorizontalPadding: "27px",
            hideScrollBar: "style_hideScrollBar__2I6Py",
            main: "style_main__kjfwe",
            active: "style_active__2yVxg",
            scrollBar: "style_scrollBar__nAb43",
            scrollBarItem: "style_scrollBarItem__qgVma",
            scrollBarItemInner: "style_scrollBarItemInner__rpHYz",
            scrollBarItemLabel: "style_scrollBarItemLabel__TtIdb"
        }
    }
}, function(e) {
    e.O(0, [138, 254, 888, 774, 179], function() {
        return e(e.s = 48142)
    }),
    _N_E = e.O()
}
]);
