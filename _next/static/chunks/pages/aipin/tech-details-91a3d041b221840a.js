(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [38], {
        93232: function(e, i, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/aipin/tech-details", function() {
                return t(90860)
            }])
        },
        34424: function(e, i, t) {
            "use strict";
            t.d(i, {
                Z: function() {
                    return g
                }
            });
            var A = t(31549),
                a = t(44194),
                n = t(80385),
                s = t(51865),
                r = t.n(s),
                l = t(85277),
                o = t.n(l),
                d = t(68371),
                m = t.n(d);
            let c = e => {
                var i;
                return "".concat(e.value.toFixed(2), " ").concat(null !== (i = e.unit) && void 0 !== i ? i : "mm")
            };

            function g(e) {
                var i, t, s, l;
                let {
                    left: d,
                    right: g,
                    bottom: h,
                    top: p,
                    src: u,
                    className: _,
                    theme: x = "dark",
                    caption: b = "",
                    imageStyles: w = {},
                    linesStyle: f = {},
                    labelsStyle: y = {},
                    useResponsiveImage: v = !1,
                    lineDistance: B = 16
                } = e, M = (0, a.useMemo)(() => !!(p || h || d || g), [h, d, g, p]);
                return (0, A.jsxs)("div", {
                    className: r()(m().grid, _),
                    children: [(0, A.jsx)("div", {}), (0, A.jsx)("div", {
                        className: m().widthTop,
                        style: {
                            width: "".concat(null !== (i = null == p ? void 0 : p.percentage) && void 0 !== i ? i : 0, "%")
                        },
                        children: p && (0, A.jsxs)(A.Fragment, {
                            children: [(0, A.jsx)(n.ZT, {
                                variant: "label1",
                                theme: x,
                                css: {
                                    whiteSpace: "nowrap"
                                },
                                style: y.top,
                                children: c(p)
                            }), (0, A.jsx)("div", {
                                className: r()(m().lineTop, m()["lineTheme".concat(x)]),
                                style: {
                                    marginBottom: B,
                                    ...f.top
                                }
                            })]
                        })
                    }), (0, A.jsx)("div", {}), (0, A.jsx)("div", {
                        className: m().heightLeft,
                        style: {
                            height: "".concat(null !== (t = null == d ? void 0 : d.percentage) && void 0 !== t ? t : 0, "%")
                        },
                        children: d && (0, A.jsxs)(A.Fragment, {
                            children: [(0, A.jsx)(n.ZT, {
                                variant: "label1",
                                theme: x,
                                css: {
                                    whiteSpace: "nowrap"
                                },
                                style: y.left,
                                children: c(d)
                            }), (0, A.jsx)("div", {
                                className: r()(m().lineLeft, m()["lineTheme".concat(x)]),
                                style: {
                                    marginRight: B,
                                    ...f.left
                                }
                            })]
                        })
                    }), (0, A.jsx)("div", {
                        className: m().imageContainer,
                        children: (0, A.jsx)(o(), {
                            src: u,
                            alt: "Product Image",
                            style: { ...v ? {
                                    width: "auto",
                                    height: "auto"
                                } : {},
                                ...w
                            },
                            placeholder: "blur",
                            sizes: v ? "100vw" : void 0
                        })
                    }), (0, A.jsx)("div", {
                        className: m().heightRight,
                        style: {
                            height: "".concat(null !== (s = null == g ? void 0 : g.percentage) && void 0 !== s ? s : 0, "%")
                        },
                        children: g && (0, A.jsxs)(A.Fragment, {
                            children: [(0, A.jsx)("div", {
                                className: r()(m().lineRight, m()["lineTheme".concat(x)]),
                                style: {
                                    marginLeft: B,
                                    ...f.right
                                }
                            }), (0, A.jsx)(n.ZT, {
                                variant: "label1",
                                theme: x,
                                css: {
                                    whiteSpace: "nowrap"
                                },
                                style: y.right,
                                children: c(g)
                            })]
                        })
                    }), (0, A.jsx)("div", {}), (0, A.jsx)("div", {
                        className: m().widthBottom,
                        style: {
                            width: "".concat(null !== (l = null == h ? void 0 : h.percentage) && void 0 !== l ? l : 0, "%")
                        },
                        children: h && (0, A.jsxs)(A.Fragment, {
                            children: [(0, A.jsx)("div", {
                                className: r()(m().lineBottom, m()["lineTheme".concat(x)]),
                                style: {
                                    marginTop: B,
                                    ...f.bottom
                                }
                            }), (0, A.jsx)(n.ZT, {
                                variant: "label1",
                                theme: x,
                                css: {
                                    whiteSpace: "nowrap"
                                },
                                style: y.bottom,
                                children: c(h)
                            })]
                        })
                    }), (0, A.jsx)("div", {}), M && (0, A.jsx)("div", {
                        className: m().mobileDimensions,
                        children: (0, A.jsxs)("div", {
                            children: [d && (0, A.jsxs)("div", {
                                className: m().mobileDimensionsItem,
                                children: [(0, A.jsx)("div", {
                                    className: r()(m().lineLeft, m().lineLeftMobile, m()["lineTheme".concat(x)])
                                }), (0, A.jsx)(n.ZT, {
                                    variant: "body1",
                                    theme: x,
                                    css: {
                                        whiteSpace: "nowrap"
                                    },
                                    children: c(d)
                                })]
                            }), p && (0, A.jsxs)("div", {
                                className: m().mobileDimensionsItem,
                                children: [(0, A.jsx)("div", {
                                    className: r()(m().lineTop, m().lineTopMobile, m()["lineTheme".concat(x)])
                                }), (0, A.jsx)(n.ZT, {
                                    variant: "body1",
                                    theme: x,
                                    css: {
                                        whiteSpace: "nowrap"
                                    },
                                    children: c(p)
                                })]
                            }), g && (0, A.jsxs)("div", {
                                className: m().mobileDimensionsItem,
                                children: [(0, A.jsx)("div", {
                                    className: r()(m().lineRight, m().lineRightMobile, m()["lineTheme".concat(x)])
                                }), (0, A.jsx)(n.ZT, {
                                    variant: "body1",
                                    theme: x,
                                    css: {
                                        whiteSpace: "nowrap"
                                    },
                                    children: c(g)
                                })]
                            }), h && (0, A.jsxs)("div", {
                                className: m().mobileDimensionsItem,
                                children: [(0, A.jsx)("div", {
                                    className: r()(m().lineBottom, m().lineBottomMobile, m()["lineTheme".concat(x)])
                                }), (0, A.jsx)(n.ZT, {
                                    variant: "body1",
                                    theme: x,
                                    css: {
                                        whiteSpace: "nowrap"
                                    },
                                    children: c(h)
                                })]
                            })]
                        })
                    }), !!b && (0, A.jsx)("div", {
                        className: m().caption,
                        children: (0, A.jsx)(n.ZT, {
                            variant: "body1",
                            style: {
                                fontSize: "16px"
                            },
                            children: b
                        })
                    })]
                })
            }
        },
        77943: function(e, i, t) {
            "use strict";
            t.d(i, {
                Z: function() {
                    return c
                },
                N: function() {
                    return d
                }
            });
            var A = t(31549),
                a = t(24625),
                n = t(7872),
                s = t(52515),
                r = t(65984),
                l = t(13339),
                o = t.n(l);
            let d = [{
                    color: "green",
                    label: "Capture",
                    src: {
                        src: "/_next/static/media/aipin-trust-photo.f1566159.png",
                        height: 497,
                        width: 372,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAADFBMVEUDAwMzJggQKg9vUQAbBySlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFUlEQVR4nGNggAJGJiYQxcwIE8APAAG8AAriyd/xAAAAAElFTkSuQmCC",
                        blurWidth: 6,
                        blurHeight: 8
                    }
                }, {
                    color: "pink",
                    label: "Phone",
                    src: {
                        src: "/_next/static/media/aipin-trust-phone.b11f6f8e.png",
                        height: 497,
                        width: 372,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAElBMVEUCAQILDAwLBQsyJggyEylvUQAstWc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAH0lEQVR4nGNgYGBiYmBgYGRmYWFkZGBkZWZgAPEJAQAFOAAe4+1aqQAAAABJRU5ErkJggg==",
                        blurWidth: 6,
                        blurHeight: 8
                    }
                }, {
                    color: "orange",
                    label: "Mic",
                    src: {
                        src: "/_next/static/media/aipin-trust-mic.e96aefc5.png",
                        height: 497,
                        width: 372,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAADFBMVEUDAwM1JQkpFwpvUQAN/4sYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFUlEQVR4nGNggAJGRiYQxcwIE8APAAGOAAnQ8jCcAAAAAElFTkSuQmCC",
                        blurWidth: 6,
                        blurHeight: 8
                    }
                }, {
                    color: "blueLight",
                    label: "Scan",
                    src: {
                        src: "/_next/static/media/aipin-trust-scan.a84b337b.png",
                        height: 497,
                        width: 372,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAD1BMVEUBAQILCwwyKhQhJylvUQA6yaCwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAH0lEQVR4nGNgYGBkZGBgYGRiYmZkZGBkYWJgAPEJAQADpAAV7hhHqQAAAABJRU5ErkJggg==",
                        blurWidth: 6,
                        blurHeight: 8
                    }
                }, {
                    color: "gradiantOn",
                    label: "Powering On",
                    src: {
                        src: "/_next/static/media/aipin-trust-powering-on.b94c449d.png",
                        height: 497,
                        width: 372,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAADFBMVEUDAwMwJgogDw9vUQC4Tq6QAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFUlEQVR4nGNggAJGRiYQxcwIE8APAAGOAAnQ8jCcAAAAAElFTkSuQmCC",
                        blurWidth: 6,
                        blurHeight: 8
                    }
                }],
                m = [{
                    title: "Trust Light",
                    description: "Light bar with 3 RGB LEDs, allowing for an array of colors."
                }];

            function c() {
                let e = (0, r.Z)(o()._lgMq, !0);
                return (0, A.jsxs)(s.Z, {
                    heading: "Trust Light: Casting light on courtesy.",
                    description: "Thoughtfully placed and transparently positioned, Ai Pin’s Trust Light was designed to let you and those around you, confidently know when Ai Pin is in use.",
                    descriptionStyle: {
                        maxWidth: "571px"
                    },
                    children: [(0, A.jsx)("div", {
                        className: o().worldLed,
                        children: (0, A.jsx)(n.Z, {
                            items: d,
                            useVertical: !e
                        })
                    }), (0, A.jsx)(a.Z, {
                        tableData: m
                    })]
                })
            }
        },
        24625: function(e, i, t) {
            "use strict";
            t.d(i, {
                Z: function() {
                    return o
                }
            });
            var A = t(31549),
                a = t(80385),
                n = t(78627),
                s = t(65984),
                r = t(80330),
                l = t.n(r);

            function o(e) {
                let {
                    tableData: i
                } = e, t = (0, s.Z)(l()._lgMq, !0), r = t ? "heading2" : "bodySm", o = t ? "body" : "heading2";
                return (0, A.jsx)("div", {
                    className: l().tableInfo,
                    children: i.map(e => (0, A.jsxs)("div", {
                        className: l().tableRow,
                        children: [(0, A.jsx)(n.ZT, {
                            theme: "dark",
                            variant: r,
                            className: l().tableRowTitle,
                            children: e.title
                        }), (0, A.jsxs)(n.ZT, {
                            theme: "dark",
                            variant: o,
                            className: l().tableRowDescription,
                            children: [(0, A.jsxs)("span", {
                                children: [e.description, (0, A.jsx)("span", {
                                    style: {
                                        color: "#52FF00",
                                        display: "block"
                                    },
                                    children: e.special
                                })]
                            }), e.cta && (0, A.jsx)(a.zx, {
                                theme: "dark",
                                buttonStyle: "outlined",
                                css: {
                                    borderColor: "$beam",
                                    color: "$beam",
                                    padding: "8px 16px",
                                    fontSize: "12px"
                                },
                                onClick: e.ctaClick,
                                children: e.cta
                            })]
                        })]
                    }, e.title))
                })
            }
        },
        7872: function(e, i, t) {
            "use strict";
            t.d(i, {
                Z: function() {
                    return c
                }
            });
            var A = t(31549),
                a = t(44194),
                n = t(78627),
                s = t(85277),
                r = t.n(s),
                l = {
                    green: "#1ED23C",
                    greenBeam: "var(--colors-beam)",
                    greenLight: "#1ED23C",
                    red: "#DC0500",
                    pink: "#FF41F0",
                    orange: "#EB7D23",
                    blueLight: "#DCF3ED",
                    gradiantOn: "linear-gradient(90deg, #89E7BD 0%, #5D9CD5 23%, #BD4BB9 47%, #DE7337 73%, #D6F47E 100%)",
                    gradiantThermal: "linear-gradient(90deg, #DE7337 20%, #D6F47E 100%)"
                },
                o = t(91970),
                d = t.n(o);
            let m = e => {
                let {
                    item: i,
                    active: t,
                    onClick: a
                } = e;
                return (0, A.jsxs)("button", {
                    type: "button",
                    className: d().menuItem,
                    "data-active": t,
                    onClick: () => {
                        a(i)
                    },
                    children: [(0, A.jsx)("span", {
                        className: d().menuItemCircle,
                        style: {
                            background: l[i.color]
                        }
                    }), (0, A.jsx)(n.ZT, {
                        variant: "heading2",
                        theme: "dark",
                        className: d().menuItemLabel,
                        children: i.label
                    })]
                })
            };
            var c = e => {
                let {
                    items: i,
                    useVertical: t,
                    imageStyle: s,
                    imageLabelStyle: l,
                    ...o
                } = e, [c, g] = (0, a.useState)(i[0]), h = e => {
                    g(e)
                };
                return (0, A.jsxs)("div", {
                    className: d().wrapper,
                    "data-is-vertical-view": !!t,
                    ...o,
                    children: [(0, A.jsx)("div", {
                        className: d().menu,
                        children: i.map(e => (0, A.jsx)(m, {
                            item: e,
                            active: c.label === e.label,
                            onClick: h
                        }, e.label))
                    }), t && (0, A.jsx)(n.ZT, {
                        variant: "heading2",
                        theme: "dark",
                        className: d().imageLabel,
                        style: l,
                        children: c.label
                    }), (0, A.jsx)("div", {
                        className: d().imageWrapper,
                        style: s,
                        children: (0, A.jsx)(r(), {
                            src: c.src,
                            alt: c.label,
                            sizes: "100vw",
                            style: {
                                width: "auto",
                                height: "clamp(10dvh, 30dvh, 50dvh)",
                                ...s
                            }
                        })
                    })]
                })
            }
        },
        52515: function(e, i, t) {
            "use strict";
            t.d(i, {
                Z: function() {
                    return c
                }
            });
            var A = t(31549),
                a = t(78627),
                n = t(51865),
                s = t.n(n),
                r = t(80385);

            function l(e) {
                let {
                    children: i,
                    as: t = "h1",
                    css: a = {},
                    ...n
                } = e;
                return (0, A.jsx)(r.ZT, {
                    variant: "headline1",
                    theme: "dark",
                    as: t,
                    css: {
                        fontWeight: 500,
                        fontSize: "42px",
                        lineHeight: "48px",
                        letterSpacing: "-1px",
                        "@md": {
                            fontSize: "56px",
                            lineHeight: "64px",
                            letterSpacing: "-2px"
                        },
                        ...a
                    },
                    ...n,
                    children: i
                })
            }
            var o = t(65984),
                d = t(95236),
                m = t.n(d);

            function c(e) {
                let {
                    title: i,
                    heading: t,
                    description: n,
                    topBorder: r = !0,
                    children: d,
                    descriptionStyle: c = {}
                } = e, g = (0, o.Z)(m()._lgMq, !0);
                return (0, A.jsxs)("div", {
                    className: s()(m().root, {
                        [m().topBorder]: r
                    }),
                    children: [(0, A.jsxs)("div", {
                        className: m().typography,
                        children: [i && (0, A.jsx)(a.ZT, {
                            as: "p",
                            theme: "dark",
                            variant: "bodySm",
                            className: m().title,
                            children: i
                        }), (0, A.jsx)(l, {
                            className: m().title,
                            children: t
                        }), n && (0, A.jsx)("div", {
                            style: {
                                maxWidth: "600px",
                                ...c
                            },
                            children: (0, A.jsx)(a.ZT, {
                                as: "p",
                                theme: "dark",
                                variant: g ? "heading2" : "body",
                                className: m().description,
                                children: n
                            })
                        })]
                    }), d]
                })
            }
        },
        90860: function(e, i, t) {
            "use strict";
            t.r(i), t.d(i, {
                __N_SSG: function() {
                    return is
                },
                default: function() {
                    return ir
                }
            });
            var A = t(31549),
                a = t(44194),
                n = t(84303),
                s = t(41940),
                r = t(35209),
                l = t(78627),
                o = t(28638);

            function d(e) {
                return o.j.jsx("svg", {
                    viewBox: "0 0 11 7",
                    fill: "none",
                    ...e,
                    children: o.j.jsx("path", {
                        d: "M9.04785 1.83887L5.04785 5.83887L1.04785 1.83887",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                })
            }

            function m(e) {
                return o.j.jsxs("svg", {
                    viewBox: "0 0 22 22",
                    fill: "none",
                    ...e,
                    children: [o.j.jsx("circle", {
                        cx: "11",
                        cy: "11",
                        r: "11",
                        fill: "currentColor"
                    }), o.j.jsx("path", {
                        d: "M10.1199 13.4254H12.0099V12.6604C12.0099 12.4904 12.0199 12.3604 12.0399 12.2704C12.0599 12.1704 12.1049 12.0754 12.1749 11.9854C12.2449 11.8954 12.3549 11.7804 12.5049 11.6404L13.2849 10.8604C13.6449 10.5204 13.9049 10.1604 14.0649 9.78039C14.2349 9.40039 14.3199 8.95039 14.3199 8.43039C14.3199 7.90039 14.1949 7.40539 13.9449 6.94539C13.6949 6.48539 13.3249 6.11539 12.8349 5.83539C12.3449 5.54539 11.7449 5.40039 11.0349 5.40039C10.3749 5.40039 9.77992 5.53539 9.24992 5.80539C8.72992 6.06539 8.30992 6.45039 7.98992 6.96039C7.67992 7.47039 7.48992 8.09539 7.41992 8.83539H9.39992C9.44992 8.29539 9.60992 7.89039 9.87992 7.62039C10.1499 7.35039 10.5049 7.21539 10.9449 7.21539C11.4149 7.21539 11.7549 7.34539 11.9649 7.60539C12.1849 7.85539 12.2949 8.17039 12.2949 8.55039C12.2949 8.85039 12.2399 9.11539 12.1299 9.34539C12.0199 9.57539 11.8449 9.80539 11.6049 10.0354L10.8849 10.6954C10.6749 10.8854 10.5149 11.0604 10.4049 11.2204C10.2949 11.3704 10.2199 11.5354 10.1799 11.7154C10.1399 11.8954 10.1199 12.1254 10.1199 12.4054V13.4254Z",
                        fill: "#0F0F0F"
                    }), o.j.jsx("path", {
                        d: "M12.1149 14.4754H10.0149V16.6504H12.1149V14.4754Z",
                        fill: "#0F0F0F"
                    })]
                })
            }
            var c = t(28461),
                g = t(73914),
                h = t(80385),
                p = t(51865),
                u = t.n(p),
                _ = t(46058),
                x = t.n(_);

            function b(e) {
                let {
                    navItems: i,
                    onSelect: t,
                    activeItem: a,
                    children: n
                } = e, s = e => {
                    e.stopPropagation()
                }, r = e => i => {
                    s(i), t(e)
                };
                return (0, A.jsxs)("nav", {
                    className: x().sidebar,
                    role: "none",
                    onClick: s,
                    children: [n, (0, A.jsx)("ul", {
                        children: i.map(e => e.subItems ? (0, A.jsxs)("li", {
                            children: [(0, A.jsx)(h.ZT, {
                                className: x().hasSubManu,
                                onClick: s,
                                children: e.name
                            }), (0, A.jsx)("ul", {
                                children: e.subItems.map(e => (0, A.jsx)("li", {
                                    id: "nav-".concat(e.id),
                                    children: (0, A.jsx)(h.ZT, {
                                        className: u()({
                                            [x().active]: e.id === a.id
                                        }),
                                        theme: "dark",
                                        onClick: r(e),
                                        children: e.name
                                    })
                                }, e.id))
                            })]
                        }, e.id) : (0, A.jsx)("li", {
                            id: "nav-".concat(e.id),
                            children: (0, A.jsx)(h.ZT, {
                                className: u()({
                                    [x().active]: e.id === a.id
                                }),
                                theme: "dark",
                                onClick: r(e),
                                children: e.name
                            })
                        }, e.id))
                    })]
                })
            }
            var w = t(65984),
                f = t(88487),
                y = t.n(f);
            let v = (0, g.q)("div");
            var B = e => {
                    let {
                        open: i,
                        navItems: t,
                        activeItem: a,
                        onOpen: s,
                        onClose: r,
                        onSelect: m
                    } = e, h = (0, w.Z)(y()._lgMq, !0), p = (0, g.Yz)(i, {
                        from: {
                            backdropFilter: "blur(0px)"
                        },
                        enter: {
                            backdropFilter: "blur(4px)"
                        },
                        leave: {
                            backdropFilter: "blur(0px)"
                        },
                        config: {
                            mass: 1,
                            friction: 28,
                            tension: 200,
                            precision: .001
                        }
                    }), u = (0, g.Yz)(i, {
                        from: {
                            opacity: 0,
                            top: h ? "20px" : "-1000px"
                        },
                        enter: {
                            opacity: 1,
                            top: h ? "20px" : "0px"
                        },
                        leave: {
                            opacity: 0,
                            top: h ? "20px" : "-1000px"
                        },
                        config: {
                            mass: 1,
                            friction: 28,
                            tension: 200,
                            precision: .001
                        }
                    });
                    return (0, A.jsxs)(c.fC, {
                        modal: !1,
                        open: i,
                        onOpenChange: s,
                        children: [(0, A.jsx)(c.xz, {
                            asChild: !0,
                            children: (0, A.jsxs)(l.zx, {
                                buttonStyle: "primary",
                                className: y().navButton,
                                size: "small",
                                children: [null == a ? void 0 : a.name, (0, A.jsx)(d, {
                                    width: 11,
                                    height: 7
                                })]
                            })
                        }), (0, A.jsx)(c.h_, {
                            forceMount: !0,
                            children: p((e, i) => i ? (0, A.jsx)(v, {
                                role: "none",
                                className: y().overlay,
                                style: e,
                                onClick: r,
                                children: (0, A.jsx)(n.Z, {
                                    role: "region",
                                    type: "normalNoPadding",
                                    children: (0, A.jsx)(n.Z, {
                                        role: "region",
                                        children: u((e, i) => i ? (0, A.jsx)(g.q.div, {
                                            className: y().menuWrapper,
                                            style: e,
                                            children: (0, A.jsxs)(b, {
                                                navItems: t,
                                                activeItem: a,
                                                onSelect: m,
                                                children: [(0, A.jsx)(l.zx, {
                                                    buttonStyle: "secondary",
                                                    className: y().closeButton,
                                                    tabIndex: -1,
                                                    onClick: r,
                                                    children: (0, A.jsx)(o.b, {
                                                        width: "15px",
                                                        height: "15px"
                                                    })
                                                }), (0, A.jsx)("div", {
                                                    className: y().navTitleWrapper,
                                                    children: (0, A.jsx)(l.ZT, {
                                                        theme: "dark",
                                                        variant: "heading2",
                                                        children: "Sections"
                                                    })
                                                })]
                                            })
                                        }) : null)
                                    })
                                })
                            }) : null)
                        })]
                    })
                },
                M = t(85277),
                E = t.n(M),
                C = t(24625),
                j = t(52515),
                R = {
                    src: "/_next/static/media/aimic.c9718edf.png",
                    height: 327,
                    width: 1024,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAKlBMVEWeoKWztroWFxmlp6sbHB3BxMZTQRQvLzOLaQ83MBrKw62prK+7ubO0trmBnc7VAAAAC3RSTlP77v754O7+UP3c/nWy5IwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAjSURBVHicY+DkYGNiYmJhZ+Dh4mHm5uZlZWBkYGBgYGZkBAAH6AB8LLqsvAAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 3
                },
                D = t(56121),
                S = t.n(D);
            let L = [{
                    title: "Input",
                    description: "Dual microphone array"
                }, {
                    title: "Audio Calling",
                    description: "Voice over LTE (VoLTE), 3G"
                }],
                T = (0, a.forwardRef)((e, i) => {
                    let t = (0, w.Z)(S()._lgMq, !0);
                    return (0, A.jsx)("section", {
                        ref: i,
                        id: "aimic",
                        children: (0, A.jsxs)(j.Z, {
                            heading: "Ai Mic",
                            description: "Ai Pin’s microphone array senses the context of your input, determines what you need and routes to the appropriate Ai process.",
                            descriptionStyle: {
                                maxWidth: "557px"
                            },
                            children: [(0, A.jsx)(E(), {
                                src: R,
                                className: S().imageRight,
                                alt: "Ai Mic",
                                sizes: "100vw",
                                style: {
                                    width: "100%",
                                    height: "auto",
                                    maxWidth: t ? "353px" : "234px"
                                }
                            }), (0, A.jsx)(C.Z, {
                                tableData: L
                            })]
                        })
                    })
                });
            var U = {
                src: "/_next/static/media/personic-speaker.c1553038.png",
                height: 354,
                width: 1024,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEXR0tbJy87W2dylp6q5ur3j5OXY2Nu4ur2Zm578/f5jU82dAAAAB3RSTlP+/eH+vspPo5KePwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACFJREFUeJwFwYEBADAIwrCiU/D/h5dQIFHLYVs3uJPE7wMEZQBvARCX9wAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 3
            };
            let N = [{
                    title: "Output",
                    description: "Built-in Speaker"
                }, {
                    title: "Audio Codec",
                    description: "AAC"
                }, {
                    title: "Audio Calling",
                    description: "Voice over LTE (VoLTE), 3G"
                }],
                k = (0, a.forwardRef)((e, i) => {
                    let t = (0, w.Z)(S()._lgMq, !0);
                    return (0, A.jsx)("section", {
                        ref: i,
                        id: "airwavespeaker",
                        children: (0, A.jsxs)(j.Z, {
                            heading: "Personic Speaker",
                            description: "Ai Pin’s speaker system uses a Head Related Transfer Function (HRTF) to create a personally optimized bubble of sound, at a fixed distance, regardless of how soft or loud.",
                            descriptionStyle: {
                                maxWidth: "685px"
                            },
                            children: [(0, A.jsx)(E(), {
                                src: U,
                                alt: "Personic Speaker",
                                sizes: "100vw",
                                style: {
                                    width: "100%",
                                    height: "auto",
                                    maxWidth: t ? "353px" : "234px"
                                },
                                className: S().imageRight
                            }), (0, A.jsx)(C.Z, {
                                tableData: N
                            })]
                        })
                    })
                });
            var F = {
                    src: "/_next/static/media/aipin-side.e017834d.png",
                    height: 370,
                    width: 119,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAICAMAAAALMbVOAAAAKlBMVEXCxMhMaXHn6OvT1trCxMjQ1NeQkpXV19ng4eW/v7+1uLuEhojz9vnT1tk/uC8/AAAACnRSTlP9AKesqeOp+owU4ioWVAAAAAlwSFlzAAALEwAACxMBAJqcGAAAACRJREFUeJxjYODhYOBi5WRgYGZk4GZjZOBiYQSzeZkYGdiZGAEIDgBwtgrh7gAAAABJRU5ErkJggg==",
                    blurWidth: 3,
                    blurHeight: 8
                },
                G = {
                    src: "/_next/static/media/battery-icon.6a52bac3.png",
                    height: 49,
                    width: 50,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEX/2Cz/2Cf/3Sj/3ij/3Cn/4Sn/3Cj/3ij/3ij/7iz/7Sv+2yj/3Cj/+y9tNZPBAAAADXRSTlMEJ4OQduas+O6yrmUsCBczzQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADdJREFUeJwli1sOwCAMwxzaAnvk/tedyiQrP45Bc60pUHlvl7gcKHyToxl59iGylWilcp0z759/LBoBQdqbI7sAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 8
                },
                H = {
                    src: "/_next/static/media/battery-side.c0fd397a.png",
                    height: 370,
                    width: 64,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAICAMAAAAPxGVzAAAAD1BMVEUYGRoqKywsLi9GRklGSEjtUYmVAAAABXRSTlPy2theW+JtwF8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAARSURBVHicY2BmYGSAASYGFgAAVAAL02CO1QAAAABJRU5ErkJggg==",
                    blurWidth: 1,
                    blurHeight: 8
                },
                V = t(24413),
                I = t.n(V);
            let Q = [{
                    title: "Battery",
                    description: "Built-in rechargeable lithium-ion battery"
                }, {
                    title: "Charging",
                    description: "Wireless power charging method designed for Ai Pin"
                }],
                q = (0, a.forwardRef)((e, i) => (0, A.jsx)("section", {
                    ref: i,
                    id: "battery",
                    children: (0, A.jsxs)(j.Z, {
                        heading: "Charge ahead.",
                        description: "Made to keep you moving, Ai Pin’s rechargeable lithium-ion polymer batteries give you extra hours of battery life through our perpetual power system.",
                        descriptionStyle: {
                            maxWidth: "641px"
                        },
                        children: [(0, A.jsx)("div", {
                            children: (0, A.jsxs)("div", {
                                className: I().imgWrapper,
                                children: [(0, A.jsx)(E(), {
                                    src: H,
                                    alt: "About battery",
                                    sizes: "100vh",
                                    style: {
                                        width: "auto",
                                        height: "100%"
                                    }
                                }), (0, A.jsx)(E(), {
                                    src: G,
                                    alt: "About battery",
                                    sizes: "100vh",
                                    style: {
                                        width: "auto",
                                        height: "15%",
                                        maxHeight: "48px"
                                    }
                                }), (0, A.jsx)(E(), {
                                    src: F,
                                    alt: "About battery",
                                    placeholder: "blur",
                                    sizes: "100vh",
                                    style: {
                                        width: "auto",
                                        height: "100%"
                                    }
                                })]
                            })
                        }), (0, A.jsx)(C.Z, {
                            tableData: Q
                        })]
                    })
                }));
            var W = {
                src: "/_next/static/media/compute.bda962c3.jpg",
                height: 1372,
                width: 1600,
                blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAHAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABkhH/xAAVEAEBAAAAAAAAAAAAAAAAAAAAEv/aAAgBAQABBQK3/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwF//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAFhAAAwAAAAAAAAAAAAAAAAAAAAEx/9oACAEBAAY/Aoj/xAAWEAADAAAAAAAAAAAAAAAAAAAAMcH/2gAIAQEAAT8hWR//2gAMAwEAAgADAAAAEAv/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPxCv/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8Qj//EABcQAQEBAQAAAAAAAAAAAAAAAAERACH/2gAIAQEAAT8QlhLkIN//2Q==",
                blurWidth: 8,
                blurHeight: 7
            };
            let O = [{
                    title: "Processor",
                    description: "Octa-core Qualcomm\xae Snapdragon™"
                }, {
                    title: "Speed",
                    description: "2.1 GHz (Accelerated on-device AI for enhanced performance)"
                }, {
                    title: "Memory",
                    description: "4GB RAM"
                }, {
                    title: "Storage",
                    description: "32GB eMMC"
                }],
                P = (0, a.forwardRef)((e, i) => {
                    let t = (0, w.Z)(S()._lgMq, !0);
                    return (0, A.jsx)("section", {
                        ref: i,
                        id: "compute",
                        children: (0, A.jsxs)(j.Z, {
                            heading: "Compute",
                            children: [(0, A.jsx)(E(), {
                                src: W,
                                alt: "Ai Pin Compute",
                                sizes: "100vw",
                                style: {
                                    width: "100%",
                                    height: "auto",
                                    maxWidth: t ? "393px" : "284px"
                                },
                                className: u()(S().imageRight, S().big)
                            }), (0, A.jsx)(C.Z, {
                                tableData: O
                            })]
                        })
                    })
                }),
                Z = [{
                    title: "Cellular",
                    description: "Dual Antenna MIMO\n    FDD‑LTE (Bands 1, 2, 3, 4, 5, 7, 8, 12, 17, 20, 26, 66, 71)\n    TDD‑LTE (Bands 38, 41)\n    UMTS/HSPA+/DC-HSDPA (850, 900, 1700/2100, 1900, 2100 MHz)\n    eSim"
                }, {
                    title: "Wi-Fi",
                    description: "Wi-Fi 5 (802.11ac) with 2.4GHz + 5GHz"
                }, {
                    title: "Bluetooth",
                    description: "Bluetooth 5.1\n    Codecs: SBC, AAC, LDAC, aptX™ HD\n    Supports common Bluetooth headsets and speakers"
                }, {
                    title: "Location",
                    description: "GPS, GLONASS, Galileo, and BeiDou\n    Wi-Fi Positioning System, Assisted GPS"
                }, {
                    title: "Network",
                    description: "Humane Wireless Service, Connected by T-Mobile\xae"
                }],
                J = (0, a.forwardRef)((e, i) => (0, A.jsx)("section", {
                    ref: i,
                    id: "connectivity",
                    children: (0, A.jsx)(j.Z, {
                        heading: "Connectivity",
                        children: (0, A.jsx)(C.Z, {
                            tableData: Z
                        })
                    })
                })),
                z = [{
                    title: "Operating Temperatures",
                    description: "5\xb0C to 35\xb0C, 41\xb0F to 95\xb0F"
                }, {
                    title: "Operating Altitude",
                    description: "Land-based operating elevation: up to 10,000 feet (3,000 meters)\n    Suitable for use in pressurized aircraft cabins"
                }],
                Y = (0, a.forwardRef)((e, i) => (0, A.jsx)("section", {
                    ref: i,
                    id: "envspecifications",
                    children: (0, A.jsx)(j.Z, {
                        heading: "Environmental Specifications",
                        children: (0, A.jsx)(C.Z, {
                            tableData: z
                        })
                    })
                }));
            var X = t(7872),
                K = t(13339),
                $ = t.n(K);
            let ee = [{
                    color: "pink",
                    label: "Trusted Contact Call",
                    src: {
                        src: "/_next/static/media/aipin-beacon-call.9b388f02.png",
                        height: 243,
                        width: 768,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAPFBMVEXAwMdiYma3ur5tb3IbHR2Fi4zO0dWLjpGHgo1rbnEWFhbGy8xxc3Vub3JQUFN/eoOkqK3JytOQk5ePkZafPqiKAAAAEHRSTlP+OenKnNzcrvTdqrx3so/yh2HlLQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACNJREFUeJxjYGBi4+blYuFjEBBgEBQUEBZiYObk52Bl52EEAAxfAPCJcYVCAAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 3
                    }
                }, {
                    color: "red",
                    label: "Area Alert",
                    src: {
                        src: "/_next/static/media/aipin-beacon-alert.97b83769.png",
                        height: 243,
                        width: 768,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAOVBMVEVsb3KLjpG3ur0WGBgbHR1iYmbAwseCe33O0taFi47Hy89xc3Vub3JQUFOkqK3Jyc+/u8CQk5ePkZZqOF6WAAAADnRSTlPUrumqnDn889zcvHeyjxhg0AsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAjSURBVHicY2Bj4uDiYWbhZeDjE+Dn5xMSZGBgYGfnZORmBQAMFwDeRjpQfAAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 3
                    }
                }, {
                    color: "greenBeam",
                    label: "Trusted Contact Message",
                    src: {
                        src: "/_next/static/media/aipin-beacon-message.6a703a66.png",
                        height: 243,
                        width: 768,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAANlBMVEW8w8i3ur57h42LjpFxc3VucXTQ0NRtbnEYGRmHiYzIysxiYmZQUFNzf4OQkpeoq7DFzdOfoqeXNnHTAAAADnRSTlP+6fSud7Lc1KPcvDmP8vnhLZoAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAjSURBVHicY2BgZONi5eDgYRDkZxAQ4OfjY2Bn52XiZGbhBgAK4ADW/reOIQAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 3
                    }
                }, {
                    color: "gradiantThermal",
                    label: "Thermal Alert",
                    src: {
                        src: "/_next/static/media/aipin-beacon-thermal.b5abbadb.png",
                        height: 243,
                        width: 768,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAOVBMVEXBwsXO0NaAgHxtcHJxc3VrbXKIiIQYGRm3ur5ucXKLjpHGys5iYmZQUFOFiI3KzdCnq7CQkpefoqe+pvScAAAAD3RSTlP+3PLKd930o+myrrw5j9wfsOxWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNg4GDk5mRn52UQEmDg5xcQFGRgZmVi4+Ni4QEAC48A420ml3wAAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 3
                    }
                }, {
                    color: "blueLight",
                    label: "Services Message",
                    src: {
                        src: "/_next/static/media/aipin-beacon-service.ac64e567.png",
                        height: 243,
                        width: 768,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAM1BMVEXAxMhucXTO0NSLjpG3ur5xc3WFiIyChooYGRlsbnDHysxiYmZQUFOQkpfJzdOnq7CfoqcsNIfuAAAADXRSTlP+styu6Xfc86PUvDmPySLYRgAAAAlwSFlzAAALEwAACxMBAJqcGAAAACNJREFUeJxjYGBh4mLk4OBhEOBn4OPj5+Vl4ORkZ2djZuUGAAogAMuvZOcvAAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 3
                    }
                }, {
                    color: "gradiantOn",
                    label: "Booster Powering Up",
                    src: {
                        src: "/_next/static/media/aipin-beacon-boot.d23c0ce5.png",
                        height: 243,
                        width: 768,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAANlBMVEW+wcjP0dW3ur6LjpFxc3WDg4pub3JsbnEYGRmGiYzHys5iYmZQUFN6fIOlqK3Iy9KPkZaQk5dtsv1wAAAADnRSTlP+3Omud/Sy1KPcvDmP8hnpV7AAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAjSURBVHicY2BgYuRi4+DgYeDjY+Dn5xMQZGBn52XlZGbhBgAKcADUw3ztvQAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 3
                    }
                }],
                ei = [{
                    title: "Beacon",
                    description: "Single RGB LED"
                }];

            function et() {
                let e = (0, w.Z)($()._lgMq, !0);
                return (0, A.jsxs)(j.Z, {
                    heading: "Beacon: The subtlest of pulses.",
                    description: "Offering the subtlest of pulses, Ai Pin’s ultra-private Beacon quietly informs you of incoming messages and important alerts.",
                    topBorder: !1,
                    descriptionStyle: {
                        maxWidth: "552px"
                    },
                    children: [(0, A.jsx)("div", {
                        className: $().userLed,
                        children: (0, A.jsx)(X.Z, {
                            items: ee,
                            useVertical: !e,
                            imageStyle: {
                                maxWidth: e ? "444px" : "274px",
                                marginRight: e ? "4%" : 0,
                                height: "auto"
                            }
                        })
                    }), (0, A.jsx)(C.Z, {
                        tableData: ei
                    })]
                })
            }
            var eA = t(77943);
            let ea = (0, a.forwardRef)((e, i) => (0, A.jsxs)("section", {
                ref: i,
                id: "leds",
                className: $().ledWrapper,
                children: [(0, A.jsx)(eA.Z, {}), (0, A.jsx)(et, {})]
            }));
            var en = t(54839),
                es = t.n(en);
            let er = [{
                    name: "Eclipse",
                    price: 599,
                    image: {
                        src: "/_next/static/media/aipin-eclipse.a3550638.png",
                        height: 547,
                        width: 512,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAG1BMVEUTFBQiJCQUFRYkJSdwUgQPEBAICAw6LgyYcADIdRktAAAABXRSTlP9+vR8/vBWVnMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAsSURBVHicLYdBDgAwCIPQrrr/v3hxsQegKGYi7qmqhG7bxjUynzYb5F4lkHob9wDZ4pPFlgAAAABJRU5ErkJggg==",
                        blurWidth: 7,
                        blurHeight: 8
                    },
                    rows: [{
                        title: "Housing",
                        items: ["Super Matte Black Anodized", "High Strength Aluminum"]
                    }, {
                        title: "Touchpad",
                        items: ["Corning Gorilla Glass Victus", "Finely Textured", "Black"]
                    }, {
                        title: "Optical Sensing Capsule",
                        items: ["Corning Gorilla Glass Victus", "Polished with Optical coatings"]
                    }]
                }, {
                    name: "Equinox",
                    image: {
                        src: "/_next/static/media/aipin-equinox.a01d7909.png",
                        height: 546,
                        width: 512,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEUbHB0iIyM/Pz8fIiE5OzxBQ0V5XAwmJyleYWUgISI8PDwSEhMGCA4NDA4dGxRmURaZcAT652bwAAAADnRSTlP8pSii7fr9/MLFJv///tlXcCIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAzSURBVHicbcZBFsAQEETBnyBI9+D+p/Xsrapo8xtSbTDXcLiCLUnA4Z6usEOd98ml5PRvVHcCMBFrz58AAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 8
                    },
                    price: 699,
                    rows: [{
                        title: "Housing",
                        items: ["Polished Silver Finish", "High Strength Aluminum"]
                    }, {
                        title: "Touchpad",
                        items: ["Corning Gorilla Glass Victus", "Finely Textured", "Black"]
                    }, {
                        title: "Optical Sensing Capsule",
                        items: ["Corning Gorilla Glass Victus", "Polished with Optical coatings"]
                    }]
                }, {
                    name: "Lunar",
                    image: {
                        src: "/_next/static/media/aipin-lunar.53ecb7cb.png",
                        height: 546,
                        width: 512,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEXj5ee3urzS0tKwtLzIy9Hd4OLj5efZ296sjDdDQDvQ0NbR09np6+3m6e3t7/FLSkssLDH+//9ycXXT2+2wnmxciDTQAAAADnRSTlP9wSjD+aTF9P7+JvP//kYJYpgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA9SURBVHicHcZbEoAgDMXQqEDBaS8P3f9aHcnPCddbe2/rINXaxugJ4gkPAZK7O/CzJ3ZQpiTNwpnNzPL9AVwhAnhmbVJ4AAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 8
                    },
                    price: 699,
                    rows: [{
                        title: "Housing",
                        items: ["Polished Silver Finish", "High Strength Aluminum"]
                    }, {
                        title: "Touchpad",
                        items: ["Corning Gorilla Glass Victus", "Finely Textured", "White"]
                    }, {
                        title: "Optical Sensing Capsule",
                        items: ["Corning Gorilla Glass Victus", "Polished with Optical coatings"]
                    }]
                }],
                el = (0, a.forwardRef)((e, i) => (0, A.jsx)("section", {
                    ref: i,
                    id: "lookfeel",
                    children: (0, A.jsx)(j.Z, {
                        heading: "Think Sleek.",
                        description: "Crafted with intention, Ai Pin boasts elegant finishes and smooth glass surfaces in its compact and lightweight design.",
                        topBorder: !1,
                        descriptionStyle: {
                            maxWidth: "700px"
                        },
                        children: (0, A.jsx)("div", {
                            className: es().root,
                            children: er.map(e => (0, A.jsxs)("div", {
                                className: es().column,
                                children: [(0, A.jsx)("div", {
                                    className: es().imageWrapper,
                                    style: {
                                        aspectRatio: "1/1"
                                    },
                                    children: (0, A.jsx)(E(), {
                                        src: e.image,
                                        alt: "".concat(e.name, " Product Image"),
                                        style: {
                                            objectFit: "fill",
                                            maxWidth: "187px",
                                            maxHeight: "200px"
                                        }
                                    })
                                }), (0, A.jsx)(h.ZT, {
                                    theme: "dark",
                                    variant: "body1",
                                    css: {
                                        fontWeight: 500
                                    },
                                    children: e.name
                                }), (0, A.jsx)("div", {
                                    className: es().divider
                                }), (0, A.jsx)("div", {
                                    className: es().rows,
                                    children: e.rows.map((i, t) => (0, A.jsxs)("div", {
                                        className: es().row,
                                        children: [(0, A.jsx)(h.ZT, {
                                            className: es().rowTitle,
                                            theme: "dark",
                                            variant: "body1",
                                            children: i.title
                                        }), i.items.map(e => (0, A.jsx)(h.ZT, {
                                            theme: "dark",
                                            variant: "body1",
                                            className: es().rowItem,
                                            children: e
                                        }, e)), t < e.rows.length - 1 && (0, A.jsx)("div", {
                                            className: es().divider
                                        })]
                                    }, i.title))
                                })]
                            }, e.name))
                        })
                    })
                }));
            var eo = t(84741),
                ed = t.n(eo);

            function em(e) {
                let {
                    items: i,
                    active: t,
                    onClick: n
                } = e, s = (0, a.useRef)(null), r = (0, a.useRef)(null), o = (0, a.useRef)(null), [d, m] = (0, g.q_)(() => ({
                    position: 0,
                    config: {
                        mass: 1,
                        tension: 300,
                        friction: 30
                    }
                }));
                (0, a.useEffect)(() => {
                    let e = r.current,
                        A = i.indexOf(t);
                    e && m.start({
                        position: A
                    })
                }, [t, i]);
                let [
                    [c, h, p], u
                ] = (0, a.useState)(() => [0, 0, []]);
                (0, a.useEffect)(() => {
                    let e = () => {
                        if (s.current) {
                            let e = s.current.offsetWidth,
                                t = e / i.length,
                                A = i.map((e, i) => t * i);
                            u([e, t, A])
                        }
                    };
                    return e(), window.addEventListener("resize", e), () => {
                        window.removeEventListener("resize", e)
                    }
                }, [i]);
                let [_, x, b] = (0, a.useMemo)(() => {
                    let e = 0,
                        t = 0,
                        A = h / 2,
                        a = i => Math.min(Math.max(0, t + i - e), c - h),
                        s = function(e) {
                            let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            m.start({
                                position: e / h,
                                immediate: i
                            })
                        };
                    return [i => {
                        e = i, t = d.position.get() * h
                    }, e => {
                        let t = a(e);
                        for (let e = 0; e < p.length; e++) Math.abs(t - p[e]) < A && n(i[e]);
                        s(t, !0)
                    }, e => {
                        let t = Math.round(a(e) / h);
                        s(t * h), n(i[t])
                    }]
                }, [h, c]);
                return ! function(e, i) {
                    let {
                        onDragStart: t,
                        onDrag: A,
                        onDragEnd: n
                    } = i;
                    (0, a.useEffect)(() => {
                        let i = !1,
                            a = e.current,
                            s = e => {
                                switch (e.type) {
                                    case "mousedown":
                                        i = !0, t(e.clientX);
                                        break;
                                    case "mousemove":
                                        i && A(e.clientX);
                                        break;
                                    case "mouseup":
                                        i && (i = !1, n(e.clientX))
                                }
                            },
                            r = e => {
                                var a, s;
                                let r = (null === (a = e.changedTouches[0]) || void 0 === a ? void 0 : a.clientX) || (null === (s = e.touches[0]) || void 0 === s ? void 0 : s.clientX);
                                switch (e.type) {
                                    case "touchstart":
                                        i = !0, t(r);
                                        break;
                                    case "touchmove":
                                        i && (e.preventDefault(), A(r));
                                        break;
                                    case "touchend":
                                        i && (i = !1, n(r))
                                }
                            };
                        return null == a || a.addEventListener("mousedown", s), window.addEventListener("mousemove", s), window.addEventListener("mouseup", s), null == a || a.addEventListener("touchstart", r, {
                            passive: !1
                        }), window.addEventListener("touchmove", r, {
                            passive: !1
                        }), window.addEventListener("touchend", r, {
                            passive: !1
                        }), () => {
                            null == a || a.removeEventListener("mousedown", s), window.removeEventListener("mousemove", s), window.removeEventListener("mouseup", s), null == a || a.removeEventListener("touchstart", r), window.removeEventListener("touchmove", r), window.removeEventListener("touchend", r)
                        }
                    }, [A, n, t])
                }(o, {
                    onDragStart: _,
                    onDrag: x,
                    onDragEnd: b
                }), (0, A.jsxs)("div", {
                    ref: s,
                    className: ed().main,
                    children: [(0, A.jsx)("ul", {
                        className: ed().list,
                        children: i.map(e => (0, A.jsxs)("li", {
                            "data-active": e.name === t.name,
                            children: [(0, A.jsx)("div", {
                                className: ed().bullet,
                                role: "button",
                                tabIndex: 0,
                                "aria-label": "Bullet",
                                onClick: () => n(e),
                                onKeyDown: () => n(e)
                            }), (0, A.jsx)("div", {
                                className: ed().line
                            }), (0, A.jsx)("div", {
                                className: ed().liContent,
                                role: "button",
                                tabIndex: 0,
                                onClick: () => n(e),
                                onKeyDown: () => n(e),
                                children: (0, A.jsx)(l.ZT, {
                                    className: ed().label,
                                    theme: "dark",
                                    variant: "body",
                                    children: e.name
                                })
                            })]
                        }, e.name))
                    }), (0, A.jsx)(g.q.div, {
                        ref: r,
                        className: ed().cursorWrapper,
                        style: {
                            width: "".concat(100 / i.length, "%"),
                            x: d.position.to(e => "".concat(100 * e, "%"))
                        },
                        children: (0, A.jsx)("div", {
                            ref: o,
                            className: ed().cursor
                        })
                    })]
                })
            }
            var ec = t(34383),
                eg = t(78224),
                eh = t.n(eg);
            let ep = e => {
                let {
                    images: i,
                    activeGroup: t
                } = e;
                return i.map(e => {
                    let i = t === e.activeGroup;
                    return (0, A.jsx)("div", {
                        className: eh().item,
                        "data-is-active": i,
                        children: (0, A.jsx)("div", {
                            className: eh().imageWrapper,
                            children: (0, A.jsx)(E(), {
                                src: e.src,
                                alt: "test",
                                layout: "fill",
                                objectFit: "contain"
                            })
                        })
                    }, e.activeGroup)
                })
            };
            var eu = e => {
                    let {
                        group: i,
                        activeGroup: t
                    } = e, n = i.images.map(e => e.activeGroup), [s, r] = (0, a.useState)(!1);
                    return (0, a.useEffect)(() => {
                        r(n.includes(t))
                    }, [t, n]), (0, A.jsxs)("div", {
                        className: eh().group,
                        "data-is-active": s,
                        children: [(0, A.jsx)("div", {
                            className: eh().images,
                            children: (0, A.jsx)(ep, { ...i,
                                activeGroup: t
                            })
                        }), (0, A.jsxs)("div", {
                            className: eh().labelsWrapper,
                            children: [(0, A.jsx)(l.ZT, {
                                theme: "dark",
                                variant: "heading2",
                                children: i.label
                            }), (0, A.jsx)(l.ZT, {
                                theme: "dark",
                                variant: "bodySm",
                                children: i.description
                            }), (0, A.jsx)(l.ZT, {
                                theme: "dark",
                                variant: "bodySm",
                                style: {
                                    color: "#A9ABAB"
                                },
                                children: i.footnote
                            })]
                        })]
                    })
                },
                e_ = t(26866),
                ex = t.n(e_),
                eb = e => {
                    let {
                        imageGroups: i,
                        activeGroup: t
                    } = e, a = i.map(e => e.images.some(e => e.activeGroup === t) ? 1 : 0).reduce((e, i) => e + i, "");
                    return (0, A.jsx)("div", {
                        className: ex().wrapperGroups,
                        "data-position": a,
                        children: i.map(e => (0, A.jsx)(eu, {
                            group: e,
                            activeGroup: t
                        }, e.label))
                    })
                },
                ew = t(6659),
                ef = t.n(ew);
            let ey = [{
                    id: "ultrathin",
                    name: "Ultrathin"
                }, {
                    id: "thin",
                    name: "Thin"
                }, {
                    id: "normal",
                    name: "Normal"
                }, {
                    id: "thick",
                    name: "Thick"
                }, {
                    id: "thicker",
                    name: "Thicker"
                }],
                ev = [{
                    label: "Latch",
                    description: "For lightweight clothing and fabrics.",
                    footnote: "Available accessory.",
                    images: [{
                        activeGroup: "ultrathin",
                        src: {
                            src: "/_next/static/media/ultrathin-latch.4f5aefcd.png",
                            height: 1024,
                            width: 348,
                            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAICAMAAAALMbVOAAAALVBMVEWLi6OutLuIiIG3uLmPjoiBgHhxcWrExciCg4Ooqau+vsWWj4KfoKKyoXfExcWm57DvAAAADnRSTlMHDc/h0amvyez0byfsHhQPe4AAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAkSURBVHicY2DiY2dg4uNiYOVkZGDjYGBg5WFgYGFmBGNebgYACW8AiL4u6QIAAAAASUVORK5CYII=",
                            blurWidth: 3,
                            blurHeight: 8
                        }
                    }, {
                        activeGroup: "thin",
                        src: {
                            src: "/_next/static/media/thin-latch.b0537e4f.png",
                            height: 1024,
                            width: 354,
                            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAICAMAAAALMbVOAAAALVBMVEWEjZeKiYGosrijpaamnXu/wMDFxseRkIm2t7i9wcZzcmm0trSBf3eCgXmBgoL7AmEIAAAAD3RSTlMJwhDxHv3GyOh5pdmgnu7sA6VnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nAXBiQEAIAgDsWsBf91/XBNUDdXkhFnP3IA+jLbJ5AMIYAB+na34VgAAAABJRU5ErkJggg==",
                            blurWidth: 3,
                            blurHeight: 8
                        }
                    }, {
                        activeGroup: "normal",
                        src: {
                            src: "/_next/static/media/normal-latch.4851d191.png",
                            height: 1024,
                            width: 365,
                            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAICAMAAAALMbVOAAAALVBMVEWzs7yKiXyYk3yMjo94dmq0tLGQjoWwsLeysszAwcHP0NSur7Ctrq+0tLDNzs4wTPxXAAAADnRSTlMVnlTtkGDARArkwPjohZiko7QAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAkSURBVHicY2DiZWVg4+NiYORmZ2BhZgBjRh4GBjZOBgYmVg4ACPwAf9xDw58AAAAASUVORK5CYII=",
                            blurWidth: 3,
                            blurHeight: 8
                        }
                    }]
                }, {
                    label: "Battery Booster",
                    description: "For powering your Ai Pin.",
                    footnote: "Included accessory.",
                    images: [{
                        activeGroup: "thin",
                        src: {
                            src: "/_next/static/media/thin-booster.9590890b.png",
                            height: 1024,
                            width: 435,
                            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAICAMAAAALMbVOAAAAKlBMVEWmpqMLCwnBwsiWmqA8PCOhno2mprGJiocNDgy6vMKlopOEhIAVFRLT1NYVxLhsAAAADnRSTlPx8khNFUoX672GWOu25aNr4Q4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAkSURBVHicBcGJAQAgCAOxa0HBb/91TchtmodYqAKdQJiLyTE/Bx4AasJAaaMAAAAASUVORK5CYII=",
                            blurWidth: 3,
                            blurHeight: 8
                        }
                    }, {
                        activeGroup: "normal",
                        src: {
                            src: "/_next/static/media/normal-booster.a3321718.png",
                            height: 1024,
                            width: 447,
                            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAICAMAAAALMbVOAAAAJ1BMVEWnqKObm5YMCga/wMaJiYXBwcSep6cNDQkUFA41NR9QQxq6u8DS1NdlskRlAAAADXRSTlPlVedX4EYdt7IYE5TuyLcfFQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACNJREFUeJxj4GRkZWBn4GFgYuBmYGJhhGAGZgYOBmYGLkY2AAZkAF/6tXi6AAAAAElFTkSuQmCC",
                            blurWidth: 3,
                            blurHeight: 8
                        }
                    }, {
                        activeGroup: "thick",
                        src: {
                            src: "/_next/static/media/thick-booster.815a35f2.png",
                            height: 1024,
                            width: 460,
                            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAMAAADp7a43AAAAM1BMVEWAhIQDAwGalJSxoly+wMJgXlEDAwFUUkUDAwF/f39JSDmlp6uGiIuvsbXFxse7u7/NztB7SWydAAAAEHRSTlMKbzAh5MjexesByeTl68Jtx8TjkAAAAAlwSFlzAAALEwAACxMBAJqcGAAAACpJREFUeJwVxLcRACAMALE3wYHo/aflUCHE8qCWF7cNPha4TdDeQH5RSzwT+wDXtmwnfwAAAABJRU5ErkJggg==",
                            blurWidth: 4,
                            blurHeight: 8
                        }
                    }]
                }, {
                    label: "Clip",
                    description: "For thicker apparel, straps, bags and more.",
                    footnote: "Available accessory.",
                    images: [{
                        activeGroup: "normal",
                        src: {
                            src: "/_next/static/media/normal-clip.d8d118d4.png",
                            height: 1024,
                            width: 552,
                            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAMAAADp7a43AAAAP1BMVEV6eFtjYFVWVkqQkH+nqqySkpkyLyXPz9DV1YkmJiAyMScxLid/f3+dnaAsLi6jo6bExsjW19qen6N+gIOvr7Km9WGKAAAAEnRSTlMVRUEuPEuoPAPB0M9iWZpOdtYiXxaSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAK0lEQVR4nAXBBwIAEAwAsTNbm/L/t0pQhrDmO/Rim1BuxNUb8c0EsglK4gManwEt3KXb4AAAAABJRU5ErkJggg==",
                            blurWidth: 4,
                            blurHeight: 8
                        }
                    }, {
                        activeGroup: "thick",
                        src: {
                            src: "/_next/static/media/thick-clip.122c8a31.png",
                            height: 1024,
                            width: 552,
                            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAMAAADp7a43AAAAOVBMVEXU19emqqqoqKuQlJdiYU81MicoJyHg4GyPj4h9bjc1NCZ+fn6alHouLi3CxsjX2Nmdn6N9gISvsLGf+6SSAAAAEHRSTlM5O0tKRNPCBBIbq2MwmXbUIQhkTAAAAAlwSFlzAAALEwAACxMBAJqcGAAAACxJREFUeJxjYOdgYmJg4hXiZ+BmE+Bj4GETZGRgYQUTAgwMnFwCDAzsnMwcABWbAQm/B3h0AAAAAElFTkSuQmCC",
                            blurWidth: 4,
                            blurHeight: 8
                        }
                    }, {
                        activeGroup: "thicker",
                        src: {
                            src: "/_next/static/media/thicker-clip.9de65fae.png",
                            height: 1024,
                            width: 552,
                            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAMAAADp7a43AAAAPFBMVEWGfmQlJR/W29swLiaZmZ4tLSjHycnt7WNmY0SWj1YvLiaEgn2amp2eoqKurrLCxsjW19ifoKR/gYSvsbLlnqVzAAAAEXRSTlMUxjnUTKI7B0ko0GZZOjx21f7Ou4cAAAAJcEhZcwAACxMAAAsTAQCanBgAAAArSURBVHicBcGJAQAQDACxQ6t+yv67SjBGRvQdevBNDXdR0p2U5pmqHjGEDxeHARs5JypQAAAAAElFTkSuQmCC",
                            blurWidth: 4,
                            blurHeight: 8
                        }
                    }]
                }];
            var eB = () => {
                let [e, i] = (0, a.useState)(ey[2]);
                return (0, A.jsx)(ec.Z, {
                    isActive: !1,
                    className: ef().wrapper,
                    itemsNumber: ey.length,
                    threshold: 300,
                    axis: "x",
                    initialIndex: 2,
                    onScroll: e => {
                        let t = ey[Math.round(e)];
                        t && i(t)
                    },
                    children: t => {
                        let {
                            jumpTo: a
                        } = t;
                        return (0, A.jsxs)(A.Fragment, {
                            children: [(0, A.jsx)(eb, {
                                imageGroups: ev,
                                activeGroup: null == e ? void 0 : e.id
                            }), (0, A.jsx)("div", {
                                className: ef().bulletNavigationWrapper,
                                children: (0, A.jsx)(em, {
                                    items: ey,
                                    active: e,
                                    onClick: e => {
                                        a(ey.findIndex(i => i.id === e.id)), i(e)
                                    }
                                })
                            })]
                        })
                    }
                })
            };
            let eM = [{
                    title: "Details",
                    description: "Custom designed magnetic array self-aligns to allow for wearability"
                }],
                eE = (0, a.forwardRef)((e, i) => (0, A.jsx)("section", {
                    ref: i,
                    id: "magnet",
                    children: (0, A.jsxs)(j.Z, {
                        heading: "Serious clasp.",
                        description: "Designed for apparel ranging from shirts to jackets, and everything in between, Ai Pin’s magnet arrays securely attach with just one latch.",
                        descriptionStyle: {
                            maxWidth: "635px"
                        },
                        children: [(0, A.jsx)(eB, {}), (0, A.jsx)(C.Z, {
                            tableData: eM
                        })]
                    })
                }));
            var eC = {
                    src: "/_next/static/media/ai-camera-lens.9d3d8396.jpg",
                    height: 534,
                    width: 854,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGVB//EABUQAQEAAAAAAAAAAAAAAAAAABIj/9oACAEBAAEFAnH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAVEAEBAAAAAAAAAAAAAAAAAAARAP/aAAgBAQAGPwIL/8QAFhABAQEAAAAAAAAAAAAAAAAAAQAR/9oACAEBAAE/IQav/9oADAMBAAIAAwAAABDz/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAGRABAAIDAAAAAAAAAAAAAAAAEQABITGh/9oACAEBAAE/EKGQSl1yf//Z",
                    blurWidth: 8,
                    blurHeight: 5
                },
                ej = t(18179),
                eR = t.n(ej);
            let eD = [{
                    title: "Photo Resolution",
                    description: "13MP, 4160X3120 px"
                }, {
                    title: "Video Resolution",
                    description: "30fps, 1080p"
                }, {
                    title: "Optical Specs",
                    description: "Ultra Wide Camera 120\xb0 FOV, f/2.4 aperture, 5 Element lens with single glass element"
                }, {
                    title: "Focal Distance",
                    description: "40cm~Infinite"
                }],
                eS = (0, a.forwardRef)((e, i) => (0, A.jsx)("section", {
                    ref: i,
                    id: "aicamera",
                    children: (0, A.jsxs)(j.Z, {
                        heading: "More than point and shoot.",
                        description: "Its wide-angled optical sensors allow Ai Pin to capture moments you want and the information you need about the world around you.",
                        descriptionStyle: {
                            maxWidth: "552px"
                        },
                        children: [(0, A.jsx)("div", {
                            className: eR().imgWrapper,
                            children: (0, A.jsx)(E(), {
                                src: eC,
                                alt: "About camera",
                                placeholder: "blur",
                                sizes: "100vw",
                                style: {
                                    width: "100%",
                                    height: "auto"
                                }
                            })
                        }), (0, A.jsx)(C.Z, {
                            tableData: eD
                        })]
                    })
                }));
            var eL = t(86294),
                eT = {
                    src: "/_next/static/media/laser-display-hero.9c70763e.png",
                    height: 328,
                    width: 392,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAMFBMVEUA7uQA994A/+IA/+4Ar5kAf28A/+4A+94AHxsAp5MApJEAKyUAMyYAIBwA/N8AKSPaTdVPAAAAEHRSTlMBCRAlMic9akS3tXwU1mj5DD9dvgAAAAlwSFlzAAALEwAACxMBAJqcGAAAADVJREFUeJw1ykEOgDAMxEDvpmlDC+X/v0UIcfFhZJAlAfwx7kFrhMfYMQ+EXklwVn33uq8THg/VALWmIFSyAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 7
                },
                eU = t(19963),
                eN = t.n(eU);
            let ek = () => {
                    let e = (0, w.Z)(eN()._lgMq, !0),
                        [i, t] = (0, a.useState)(!1),
                        n = () => t(e => !e);
                    return (0, A.jsxs)("div", {
                        className: eN().tooltip,
                        children: [(0, A.jsx)(l.ZT, {
                            theme: "dark",
                            variant: e ? "body" : "heading2",
                            children: "Class 2 per IEC60825-1:2014"
                        }), (0, A.jsx)(eL.zt, {
                            children: (0, A.jsxs)(eL.fC, {
                                delayDuration: 10,
                                open: i,
                                onOpenChange: n,
                                children: [(0, A.jsx)(eL.xz, {
                                    style: {
                                        borderRadius: "50%"
                                    },
                                    onClick: n,
                                    children: (0, A.jsx)(m, {
                                        className: eN().icon,
                                        width: 22,
                                        height: 22
                                    })
                                }), (0, A.jsxs)(eL.VY, {
                                    align: "center",
                                    side: "top",
                                    sideOffset: 10,
                                    children: [(0, A.jsxs)("div", {
                                        className: eN().tooltipContent,
                                        children: [(0, A.jsx)(l.ZT, {
                                            theme: "dark",
                                            variant: "bodySm",
                                            children: "Other Class 2 lasers:"
                                        }), (0, A.jsxs)("div", {
                                            children: [(0, A.jsx)(l.ZT, {
                                                theme: "dark",
                                                variant: "bodySm",
                                                children: "Barcode scanners"
                                            }), (0, A.jsx)(l.ZT, {
                                                theme: "dark",
                                                variant: "bodySm",
                                                children: "Alignment tools"
                                            }), (0, A.jsx)(l.ZT, {
                                                theme: "dark",
                                                variant: "bodySm",
                                                children: "Presentation pointers"
                                            })]
                                        })]
                                    }), (0, A.jsx)(eL.Eh, {
                                        width: 14,
                                        height: 10,
                                        fill: "#1F2121"
                                    })]
                                })]
                            })
                        })]
                    })
                },
                eF = (0, a.forwardRef)((e, i) => {
                    let t = (0, a.useMemo)(() => [{
                        title: "Details",
                        description: "Considered safe for normal operation. Equipped with a multi-layer protection system for enhanced operational safety and fault detection."
                    }, {
                        title: "Technology",
                        description: "Laser beam scanning projection system"
                    }, {
                        title: "Laser Source",
                        description: "Custom-Color Single-Diode Laser"
                    }, {
                        title: "Laser Safety Classification",
                        description: (0, A.jsx)(ek, {}),
                        cta: "Learn more about laser safety",
                        ctaClick: () => window.open("/aipin/lasersafety", "_blank")
                    }, {
                        title: "Resolution",
                        description: "720p Resolution"
                    }, {
                        title: "Operating Distance",
                        description: "20 cm to 40 cm"
                    }, {
                        title: "Field of View",
                        description: "18.2\xb0 wide, 13.3\xb0 tall, 22.4\xb0 diagonal (7 cm x 9.6 cm at 30 cm distance)"
                    }], []);
                    return (0, A.jsx)("section", {
                        ref: i,
                        id: "laserdisplay",
                        children: (0, A.jsxs)(j.Z, {
                            heading: "The bright side of screen free.",
                            description: "Revolutionary in design, Ai Pin's Laser Ink Display is designed to track exclusively to your palm. It safely transforms your hand into a vibrant canvas of text, graphics and UI elements.",
                            descriptionStyle: {
                                maxWidth: "552px"
                            },
                            children: [(0, A.jsx)("div", {
                                className: eN().imgWrapper,
                                children: (0, A.jsx)(E(), {
                                    src: eT,
                                    alt: "About camera",
                                    placeholder: "blur",
                                    sizes: "100vh",
                                    style: {
                                        width: "30%",
                                        height: "auto",
                                        maxWidth: "369px",
                                        minWidth: "260px"
                                    }
                                })
                            }), (0, A.jsx)(C.Z, {
                                tableData: t
                            })]
                        })
                    })
                });
            var eG = {
                src: "/_next/static/media/sensors.5c1b50f2.png",
                height: 275,
                width: 1024,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAIVBMVEW3ubu3ubz////v7/Srq6xcXWKXmJlkX1CYmJiMjY59bT7/lFsGAAAACnRSTlP+7Tsx+tz58YTRebB00wAAAAlwSFlzAAALEwAACxMBAJqcGAAAABpJREFUeJxj4ORiZ+VgYmJmYGRjYWBgYGAEAAL5ADv/TnNlAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 2
            };
            let eH = [{
                    title: "Light",
                    description: "Ambient light sensor"
                }, {
                    title: "Motion",
                    description: "Accelerometer and gyroscope"
                }, {
                    title: "Position",
                    description: "Magnetometer + GPS"
                }, {
                    title: "3D Depth Sensor",
                    description: "Indirect Time of Flight Camera\n    125\xb0FOV, f/1.4 aperture, 4 Element Lens\n    640x480 px VGA resolution"
                }],
                eV = (0, a.forwardRef)((e, i) => {
                    let t = (0, w.Z)(S()._lgMq, !0);
                    return (0, A.jsx)("section", {
                        ref: i,
                        id: "sensors",
                        children: (0, A.jsxs)(j.Z, {
                            heading: "Sensors",
                            children: [(0, A.jsx)(E(), {
                                src: eG,
                                alt: "Ai Pin Sensors",
                                sizes: "100vw",
                                style: {
                                    width: "100%",
                                    height: "auto",
                                    maxWidth: t ? "353px" : "234px"
                                },
                                className: S().imageRight
                            }), (0, A.jsx)(C.Z, {
                                tableData: eH
                            })]
                        })
                    })
                });
            var eI = t(34424),
                eQ = {
                    src: "/_next/static/media/aipin-dimensions-front.0d81351d.png",
                    height: 201,
                    width: 190,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEUYGRouMjusegB7e3snKSudoaQaGxsWFxgYGRpfYWE4Ojt2eHoREhIEAgY8MRNwUwQpIxE12Am2AAAADHRSTlPz4v7yaWTX4fr+1vMK2xGqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nG3GQRKAIAwEwVGCSXAj/v+1lOWVUze9ZWbenWOeqqoB7yNJDh/7+J8LIyICW1RfAkuV0SaFAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 8
                },
                eq = {
                    src: "/_next/static/media/aipin-dimensions-side.3c2aa306.png",
                    height: 201,
                    width: 63,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAICAMAAAALMbVOAAAAMFBMVEVMaXHU19rv8fSYm52xtLfo6ezOztbS1djS1NjT1djDxcnKztDo6u2oq679//+UlpiiLXwLAAAACnRSTlMA/aenqMI/p8GmySxUKAAAAAlwSFlzAAALEwAACxMBAJqcGAAAACJJREFUeJwFwQUBACAAACDs1v9vBeEWM1SzczIvsRprsKMPCXwAj2tlvnEAAAAASUVORK5CYII=",
                    blurWidth: 3,
                    blurHeight: 8
                },
                eW = {
                    src: "/_next/static/media/battery-booster-front.dc85ba3c.png",
                    height: 183,
                    width: 169,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAADFBMVEUBAQEcHB0PDxAuLjGs/LdvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nGNgZAYBRgZGBhBgZGAC00wgmhGNhomDaUYIAAAHMAAxusqZQQAAAABJRU5ErkJggg==",
                    blurWidth: 7,
                    blurHeight: 8
                },
                eO = {
                    src: "/_next/static/media/battery-booster-side.b0548b8e.png",
                    height: 182,
                    width: 34,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAICAMAAAAPxGVzAAAADFBMVEUXGBkmJig+PkJEREQzDIFSAAAABHRSTlOVjk1Ldn/o1gAAAAlwSFlzAAALEwAACxMBAJqcGAAAABFJREFUeJxjYGZgZIABRgYmAABPAAiOizToAAAAAElFTkSuQmCC",
                    blurWidth: 1,
                    blurHeight: 8
                },
                eP = {
                    src: "/_next/static/media/gummy-bear.d93e3366.png",
                    height: 88,
                    width: 55,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAM1BMVEWVdgZOOQFdTA8hGAKOchIrIQGlgQk0JwN8YwpcRQAAAABfSwkZEgBUQAS8jwdBLwCeegPn0BLEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALElEQVR4nAXBhwEAIAjAsCIbx//nmpBW5jiGc3q3sqJZPJkMJEcvFVmGUPQHFW4A5UFgN6IAAAAASUVORK5CYII=",
                    blurWidth: 5,
                    blurHeight: 8
                },
                eZ = t(66131),
                eJ = t.n(eZ);
            let ez = (0, a.forwardRef)((e, i) => {
                let t = (0, w.Z)(eJ()._lgMq, !0),
                    a = {
                        borderColor: "#505355"
                    };
                return (0, A.jsx)("section", {
                    ref: i,
                    id: "sizeweight",
                    children: (0, A.jsx)(j.Z, {
                        heading: "Fit for living.",
                        description: "With a simple screen-free design, Ai Pin is small in size, light in weight, and tailor-made for hand gestures.",
                        descriptionStyle: {
                            maxWidth: "620px"
                        },
                        children: (0, A.jsxs)("div", {
                            className: eJ().root,
                            children: [(0, A.jsx)("div", {
                                className: u()(eJ().line, eJ().fullwidth, eJ().top)
                            }), (0, A.jsx)("div", {
                                className: u()(eJ().line, eJ().fullwidth, eJ().bottom)
                            }), (0, A.jsx)("div", {
                                className: u()(eJ().line, eJ().booster, eJ().top)
                            }), (0, A.jsx)("div", {
                                className: u()(eJ().line, eJ().booster, eJ().bottom)
                            }), (0, A.jsx)("div", {
                                className: u()(eJ().line, eJ().gummybear)
                            }), (0, A.jsxs)("div", {
                                className: u()(eJ().item, eJ().aiPin),
                                children: [(0, A.jsxs)("div", {
                                    className: eJ().itemHeading,
                                    children: [(0, A.jsx)(h.ZT, {
                                        theme: "dark",
                                        variant: "body1",
                                        weight: "bold",
                                        children: "Ai Pin"
                                    }), (0, A.jsx)(h.ZT, {
                                        className: "item-subtitle",
                                        theme: "dark",
                                        variant: "body2",
                                        children: "34.2 g"
                                    })]
                                }), (0, A.jsxs)("div", {
                                    className: eJ().measurements,
                                    children: [(0, A.jsx)(eI.Z, {
                                        src: eQ,
                                        top: {
                                            percentage: 100,
                                            value: 44.5
                                        },
                                        left: {
                                            percentage: 100,
                                            value: 47.5
                                        },
                                        linesStyle: {
                                            left: { ...a,
                                                marginTop: "-3px"
                                            },
                                            top: { ...a,
                                                marginBottom: "18px"
                                            }
                                        }
                                    }), (0, A.jsx)(eI.Z, {
                                        src: eq,
                                        top: {
                                            percentage: 100,
                                            value: 14.98
                                        },
                                        bottom: {
                                            percentage: 55,
                                            value: 8.25
                                        },
                                        linesStyle: {
                                            top: { ...a,
                                                marginBottom: "18px"
                                            },
                                            bottom: { ...a
                                            }
                                        }
                                    })]
                                })]
                            }), (0, A.jsx)("div", {
                                className: u()(eJ().item, eJ().gummybear),
                                children: (0, A.jsx)("div", {
                                    className: eJ().measurements,
                                    children: (0, A.jsx)(eI.Z, {
                                        src: eP,
                                        left: {
                                            percentage: 100,
                                            value: 19.33
                                        },
                                        bottom: {
                                            percentage: 100,
                                            value: 9.42
                                        },
                                        linesStyle: {
                                            left: { ...a,
                                                marginTop: "-5px"
                                            },
                                            bottom: { ...a,
                                                marginTop: "14px"
                                            }
                                        }
                                    })
                                })
                            }), (0, A.jsxs)("div", {
                                className: u()(eJ().item, eJ().booster),
                                children: [(0, A.jsxs)("div", {
                                    className: eJ().itemHeading,
                                    children: [(0, A.jsx)(h.ZT, {
                                        theme: "dark",
                                        variant: "body1",
                                        weight: "bold",
                                        children: "Battery Booster"
                                    }), (0, A.jsx)(h.ZT, {
                                        theme: "dark",
                                        variant: "body2",
                                        children: "20.5 g"
                                    })]
                                }), (0, A.jsxs)("div", {
                                    className: eJ().measurements,
                                    children: [(0, A.jsx)(eI.Z, {
                                        src: eW,
                                        top: {
                                            percentage: 100,
                                            value: 45.2
                                        },
                                        left: {
                                            percentage: 100,
                                            value: 47.16
                                        },
                                        linesStyle: {
                                            top: {
                                                marginBottom: "28px",
                                                ...a
                                            },
                                            left: {
                                                marginTop: "-4px",
                                                ...a
                                            }
                                        }
                                    }), (0, A.jsx)(eI.Z, {
                                        src: eO,
                                        top: {
                                            percentage: 74,
                                            value: 8.25
                                        },
                                        linesStyle: {
                                            top: { ...a,
                                                marginBottom: "27px",
                                                marginLeft: "-16px"
                                            }
                                        },
                                        labelsStyle: {
                                            top: {
                                                marginLeft: t ? "-12px" : "-2px"
                                            }
                                        }
                                    })]
                                })]
                            })]
                        })
                    })
                })
            });
            var eY = t(17313),
                eX = t.n(eY);

            function eK(e) {
                let {
                    title: i,
                    gestureTypes: t,
                    style: n
                } = e, [s, r] = (0, a.useState)(t[0]);
                return (0, A.jsxs)("div", {
                    className: eX().gestureTypes,
                    style: n,
                    children: [(0, A.jsxs)("div", {
                        className: eX().gesturePicker,
                        children: [(0, A.jsx)(l.ZT, {
                            theme: "dark",
                            className: eX().title,
                            children: i
                        }), t.map(e => (0, A.jsxs)(l.ZT, {
                            className: u()(eX().gesturePickerItem, {
                                [eX().selected]: s === e
                            }),
                            theme: "dark",
                            onClick: () => r(e),
                            children: [(0, A.jsx)(E(), {
                                src: e.icon.url,
                                alt: e.altText,
                                width: e.icon.width,
                                height: e.icon.height,
                                className: eX()[e.class]
                            }), (0, A.jsx)("span", {
                                children: e.name
                            })]
                        }, e.name))]
                    }), (0, A.jsx)("figure", {
                        className: eX().gestureImage,
                        children: (0, A.jsx)(E(), {
                            src: s.url,
                            alt: s.altText || "Gesture type",
                            width: 364,
                            height: 390
                        })
                    })]
                })
            }
            var e$ = t(19302),
                e0 = t.n(e$);

            function e1(e) {
                let {
                    gestureTypes: i
                } = e;
                return (0, A.jsx)("div", {
                    className: e0().visual,
                    children: (0, A.jsx)(ec.Z, {
                        className: e0().main,
                        itemsNumber: i.length,
                        threshold: 300,
                        axis: "x",
                        dotsSize: "large",
                        dotsInteractive: !0,
                        children: e => {
                            let {
                                springs: t,
                                axis: a
                            } = e;
                            return (0, A.jsxs)(A.Fragment, {
                                children: [t.map((e, t) => {
                                    var n, s, r, o, d, m, c, h, p, u, _, x;
                                    let {
                                        position: b
                                    } = e, w = null !== (u = i[t].nameMobile) && void 0 !== u ? u : i[t].name, f = null !== (_ = null === (n = i[t]) || void 0 === n ? void 0 : n.classMobile) && void 0 !== _ ? _ : null === (s = i[t]) || void 0 === s ? void 0 : s.class, y = null !== (x = null === (r = i[t]) || void 0 === r ? void 0 : r.icon.urlMobile) && void 0 !== x ? x : null === (o = i[t]) || void 0 === o ? void 0 : o.icon.url;
                                    return (0, A.jsxs)(g.q.div, {
                                        className: e0().item,
                                        style: {
                                            [a]: b.to([-1.1, -1, 0, 1, 1.1], ["100%", "100%", "0.0001%", "-100%", "-100%"]),
                                            display: b.to(e => Math.abs(e) >= 2 ? "none" : "")
                                        },
                                        children: [(0, A.jsx)(E(), {
                                            src: null === (d = i[t]) || void 0 === d ? void 0 : d.url,
                                            alt: (null === (m = i[t]) || void 0 === m ? void 0 : m.altText) || "Gesture type",
                                            width: 208,
                                            height: 227
                                        }), (0, A.jsxs)("div", {
                                            className: e0().itemBody,
                                            children: [(0, A.jsx)("div", {
                                                className: e0().iconWrapper,
                                                children: (0, A.jsx)(E(), {
                                                    src: y,
                                                    alt: null === (c = i[t]) || void 0 === c ? void 0 : c.altText,
                                                    width: null === (h = i[t]) || void 0 === h ? void 0 : h.icon.width,
                                                    height: null === (p = i[t]) || void 0 === p ? void 0 : p.icon.height,
                                                    className: e0()[f]
                                                })
                                            }), (0, A.jsx)(l.ZT, {
                                                theme: "dark",
                                                style: {
                                                    whiteSpace: "pre-line",
                                                    textAlign: "center"
                                                },
                                                children: w
                                            })]
                                        })]
                                    }, t)
                                }), (0, A.jsx)(ec.Z.Dots, {
                                    className: e0().dots,
                                    color: "white"
                                })]
                            })
                        }
                    })
                })
            }
            var e2 = {
                    src: "/_next/static/media/gesture-one-finger.ab03d3e2.png",
                    height: 518,
                    width: 483,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAM1BMVEUDAwN5f39qamoWFhZ1fX0PDw8MDAxMaXEwMTGhpaUNDQ1HR0cJCQkGBgYAAAAFBQUAAACzkACoAAAAEXRSTlP9FyRWDJqvACAe20Tmz75jpLg+FY0AAAAJcEhZcwAACxMAAAsTAQCanBgAAAA1SURBVHicLcVBEoAgDATBAZJsIoL+/7WWln1pJFlVIalVz2/3d4tjdjROwsQASBH/l997pR4qBwFRvMiplQAAAABJRU5ErkJggg==",
                    blurWidth: 7,
                    blurHeight: 8
                },
                e3 = {
                    src: "/_next/static/media/gesture-two-finger.06fd044c.png",
                    height: 506,
                    width: 494,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEVMaXEEBASfoKAqKioREhJFQkIUFBQFBQUJCQkGBgZFSkoMDAwKCgoAAAAAAABCgxD8AAAAD3RSTlMA/hsVrCd2zediMPLRNY3Fr6PXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nB3GxxHAMBADsSV5Sk79l6uxXgAAtv2LL7eTftdJl8qQkkagTUlPYEnSDORd3yjYFQgAwB/5B/QAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 8
                },
                e4 = t(44956),
                e8 = t.n(e4);
            let e5 = [{
                    name: "Tap & hold\nfor Voice Input",
                    nameMobile: "One-finger\ntap & hold for Voice Input",
                    url: e2,
                    altText: "Tap and hold mic",
                    icon: {
                        url: {
                            src: "/_next/static/media/one-finger-tap-and-hold.49d96e03.png",
                            height: 64,
                            width: 64,
                            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEX////+/v5MaXH///////////////91BuduAAAAB3RSTlP96QC0sC8u+ALpdAAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAACdJREFUeJxjYGJjZmBgZmNiYGVkYGBgYGRlYAHRDDAKBcCl4Iph2gEMGABVq7C+BAAAAABJRU5ErkJggg==",
                            blurWidth: 8,
                            blurHeight: 8
                        },
                        width: 32,
                        height: 32
                    },
                    class: "tapAndHold"
                }, {
                    name: "Double tap to\nAnswer/End call or\nStart/Stop Music",
                    nameMobile: "One-finger\ndouble tap to Answer/End call\nor Start/Stop Music",
                    url: e2,
                    altText: "Double tap call",
                    icon: {
                        url: {
                            src: "/_next/static/media/one-finger-double-tap.7a4bd7f7.png",
                            height: 64,
                            width: 64,
                            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEX///////////////9MaXH////+/v7///////+ucYM6AAAACXRSTlN2gxAbADk4XVzpNfCUAAAACXBIWXMAABYlAAAWJQFJUiTwAAAALklEQVR4nEWLyQkAMBCEnNkr/VccCIT9CSrZAnVScoRVyAPHgiCTYOGpsTb++wUWaACeiEAJ3wAAAABJRU5ErkJggg==",
                            blurWidth: 8,
                            blurHeight: 8
                        },
                        width: 32,
                        height: 32
                    },
                    class: "doubleTap"
                }, {
                    name: "Swipe Left/Right\nfor Previous/Next Track",
                    nameMobile: "One-finger\nSwipe Left/Right\nfor Previous/Next Track",
                    url: e2,
                    altText: "Swipe left or right track",
                    icon: {
                        url: {
                            src: "/_next/static/media/one-finger-swipe-left-right.7e2b88a0.png",
                            height: 64,
                            width: 64,
                            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEX///////9MaXH///////////////////////+T/IaxAAAACXRSTlN+DwA2eGsWzcp4zfOZAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAL0lEQVR4nEXLsQEAIAzDMCdNKf9fzATMlnGRUKaQLQqWJS+IdvdWiKZ7lJ8evvsBF6kAp/EGEXIAAAAASUVORK5CYII=",
                            blurWidth: 8,
                            blurHeight: 8
                        },
                        width: 32,
                        height: 32
                    },
                    class: "swipeLeftRight"
                }, {
                    name: "Drag Up/Down\nfor Volume",
                    nameMobile: "One-finger\nDrag Up/Down for Volume",
                    url: e2,
                    altText: "Drag up or down volume",
                    icon: {
                        url: {
                            src: "/_next/static/media/one-finger-drag-up-down.72f73813.png",
                            height: 64,
                            width: 64,
                            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEX///////9MaXH///////////////+zmgtdAAAAB3RSTlODEwA6bb04zyhC3wAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAC5JREFUeJxNi1EKACAUg9z22v2PHBFBf4KKC1BTJImCvJYFWDPyD0/lxsE5e7wBEUwAcXX9/gAAAAAASUVORK5CYII=",
                            blurWidth: 8,
                            blurHeight: 8
                        },
                        width: 32,
                        height: 32
                    },
                    class: "swipeUpDown"
                }],
                e7 = [{
                    name: "Tap & Hold\nfor Translation",
                    nameMobile: "Two-finger\nTap & Hold for Translation",
                    url: e3,
                    altText: "Tap and hold translation",
                    icon: {
                        url: {
                            src: "/_next/static/media/two-finger-tap-and-hold.68a77cbb.png",
                            height: 64,
                            width: 138,
                            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAFVBMVEX///////////9MaXH///////////+tVghgAAAABnRSTlPZ8HYATDQgjxHXAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAHUlEQVR4nGNgYGNiZmJjYGVgY2NkYWRjY0AwYFIAB8oAbfrvW5EAAAAASUVORK5CYII=",
                            blurWidth: 8,
                            blurHeight: 4
                        },
                        width: 69,
                        height: 32
                    },
                    class: "tapAndHold",
                    classMobile: "tapAndHoldMobile"
                }, {
                    name: "Double Tap\nfor Photo",
                    nameMobile: "Two-finger\ndouble Tap for Photo",
                    url: e3,
                    altText: "Double tap photo",
                    icon: {
                        url: {
                            src: "/_next/static/media/two-finger-double-tap.8f1934f4.png",
                            height: 64,
                            width: 138,
                            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAElBMVEX///////////////////////+65XQCAAAABnRSTlM1VkIFJmQzld/cAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAHUlEQVR4nGNgZGRiZmJkZGFgYGBiYGJgYEUwYFIAA1QAMeNiNA0AAAAASUVORK5CYII=",
                            blurWidth: 8,
                            blurHeight: 4
                        },
                        width: 69,
                        height: 32
                    },
                    class: "doubleTap"
                }, {
                    name: "Double Tap & Hold\nfor Video",
                    nameMobile: "Two-finger\nDouble Tap & Hold for Video",
                    url: e3,
                    altText: "Double Tap and hold video",
                    icon: {
                        url: {
                            src: "/_next/static/media/two-finger-double-tap-and-hold.cc0908ee.png",
                            height: 64,
                            width: 138,
                            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAFVBMVEX////////////////+/v7///////8a7p64AAAAB3RSTlNQOuefByahy8fLxgAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAB9JREFUeJxjYGBgZGFkYGBlYGZiYGRgYmZgYIMxYFIAA10AMHdvh+IAAAAASUVORK5CYII=",
                            blurWidth: 8,
                            blurHeight: 4
                        },
                        width: 69,
                        height: 32
                    },
                    class: "doubleTap"
                }],
                e6 = (0, a.forwardRef)((e, i) => {
                    let t = (0, w.Z)(e8()._lgMq, !0);
                    return (0, A.jsx)("section", {
                        ref: i,
                        id: "touchpad",
                        children: (0, A.jsx)(j.Z, {
                            heading: "Touchpad + Gestures",
                            description: "Ai Pin’s touchpad understands a range of finger gestures to allow for simple and accelerated access to Ai experiences.",
                            descriptionStyle: {
                                maxWidth: "552px"
                            },
                            children: t ? (0, A.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "30px",
                                    marginTop: "70px"
                                },
                                children: [(0, A.jsx)(eK, {
                                    title: "One-Finger Gestures:",
                                    gestureTypes: e5
                                }), (0, A.jsx)(eK, {
                                    title: "Two-Finger Gestures:",
                                    gestureTypes: e7
                                })]
                            }) : (0, A.jsx)(e1, {
                                gestureTypes: [...e5, ...e7]
                            })
                        })
                    })
                }),
                e9 = [{
                    id: "lookfeel",
                    name: "Look & Feel"
                }, {
                    id: "sizeweight",
                    name: "Size & Weight"
                }, {
                    id: "magnet",
                    name: "Magnet"
                }, {
                    id: "battery",
                    name: "Battery"
                }, {
                    id: "aicamera",
                    name: "Ai Camera"
                }, {
                    id: "laserdisplay",
                    name: "Laser Display"
                }, {
                    id: "leds",
                    name: "LEDs"
                }, {
                    id: "aimic",
                    name: "Ai Mic"
                }, {
                    id: "airwavespeaker",
                    name: "Personic Speaker"
                }, {
                    id: "touchpad",
                    name: "Touchpad + Gestures"
                }, {
                    id: "sensors",
                    name: "Sensors"
                }, {
                    id: "compute",
                    name: "Compute"
                }, {
                    id: "connectivity",
                    name: "Connectivity"
                }, {
                    id: "envspecifications",
                    name: "Environmental Specifications"
                }],
                ie = (e, i) => {
                    let t = null;
                    for (let a = 0; a < i.length; a += 1) {
                        var A;
                        let n = i[a];
                        if (n.id === e) {
                            t = n;
                            break
                        }
                        if (!t && (null === (A = n.subItems) || void 0 === A ? void 0 : A.length)) {
                            let i = ie(e, n.subItems);
                            if (i) {
                                t = i;
                                break
                            }
                        }
                    }
                    return t
                };

            function ii(e) {
                let {
                    scrollableElRef: i
                } = e, t = (0, w.Z)(S()._lgMq, !0), [s, r] = (0, a.useState)(!1), l = (0, a.useMemo)(() => ({
                    lookfeel: (0, a.createRef)(),
                    magnet: (0, a.createRef)(),
                    sizeweight: (0, a.createRef)(),
                    battery: (0, a.createRef)(),
                    aicamera: (0, a.createRef)(),
                    laserdisplay: (0, a.createRef)(),
                    leds: (0, a.createRef)(),
                    aimic: (0, a.createRef)(),
                    airwavespeaker: (0, a.createRef)(),
                    touchpad: (0, a.createRef)(),
                    sensors: (0, a.createRef)(),
                    compute: (0, a.createRef)(),
                    connectivity: (0, a.createRef)(),
                    envspecifications: (0, a.createRef)()
                }), []), [o, d] = (0, a.useState)(e9[0]), [m, c] = (0, a.useState)([]), g = () => {
                    r(!1)
                }, h = async e => {
                    var i, t;
                    null === (t = l[e.id]) || void 0 === t || null === (i = t.current) || void 0 === i || i.scrollIntoView(), g()
                };
                return (0, a.useEffect)(() => {
                    c(Object.keys(l).reduce((e, i) => {
                        let t = l[i].current,
                            A = t.offsetTop,
                            a = Math.min(.5 * t.offsetHeight, .5 * window.innerHeight);
                        return [...e, [A, t.offsetTop + t.offsetHeight - a, i]]
                    }, []).sort((e, i) => e[0] - i[1]))
                }, [l, t]), (0, a.useEffect)(() => {
                    let e = i.current,
                        A = () => {
                            let i = e.scrollTop === e.scrollHeight - e.offsetHeight,
                                A = window.innerHeight * (t ? .7 : .2),
                                a = e.scrollTop + (i ? A : 55);
                            for (let e = 0; e < m.length; e += 1) {
                                let [i, t, A] = m[e];
                                if (a > i && a < t) {
                                    d(ie(A, e9));
                                    break
                                }
                            }
                        };
                    return e.addEventListener("scroll", A), e.addEventListener("resize", A), () => {
                        e.removeEventListener("scroll", A), e.removeEventListener("resize", A)
                    }
                }, [t, i, m]), (0, A.jsxs)(n.Z, {
                    role: "region",
                    children: [(0, A.jsx)(B, {
                        open: s,
                        navItems: e9,
                        activeItem: o,
                        onSelect: h,
                        onOpen: () => {
                            r(!0)
                        },
                        onClose: g
                    }), (0, A.jsxs)("div", {
                        className: S().sections,
                        children: [(0, A.jsx)(el, {
                            ref: l.lookfeel
                        }), (0, A.jsx)(ez, {
                            ref: l.sizeweight
                        }), (0, A.jsx)(eE, {
                            ref: l.magnet
                        }), (0, A.jsx)(q, {
                            ref: l.battery
                        }), (0, A.jsx)(eS, {
                            ref: l.aicamera
                        }), (0, A.jsx)(eF, {
                            ref: l.laserdisplay
                        }), (0, A.jsx)(ea, {
                            ref: l.leds
                        }), (0, A.jsx)(T, {
                            ref: l.aimic
                        }), (0, A.jsx)(k, {
                            ref: l.airwavespeaker
                        }), (0, A.jsx)(e6, {
                            ref: l.touchpad
                        }), (0, A.jsx)(eV, {
                            ref: l.sensors
                        }), (0, A.jsx)(P, {
                            ref: l.compute
                        }), (0, A.jsx)(J, {
                            ref: l.connectivity
                        }), (0, A.jsx)(Y, {
                            ref: l.envspecifications
                        })]
                    })]
                })
            }
            var it = t(51926),
                iA = t.n(it);

            function ia() {
                let e = (0, a.useRef)(null);
                return (0, A.jsxs)(r.Z, {
                    ref: e,
                    className: iA().main,
                    children: [(0, A.jsxs)(n.Z, {
                        type: "normalNoPadding",
                        role: "region",
                        children: [(0, A.jsx)(ii, {
                            scrollableElRef: e
                        }), (0, A.jsx)(s.Z, {})]
                    }), (0, A.jsx)(r.Z.Scrollbar, {
                        className: iA().scrollbar,
                        color: "white"
                    })]
                })
            }
            var is = !0,
                ir = (0, a.forwardRef)(function(e, i) {
                    let {
                        className: t,
                        style: a
                    } = e;
                    return (0, A.jsx)("div", {
                        ref: i,
                        className: t,
                        style: a,
                        children: (0, A.jsx)(ia, {})
                    })
                })
        },
        88487: function(e) {
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
                navButton: "style_navButton__44ATg",
                navTitleWrapper: "style_navTitleWrapper__qM1GM",
                overlay: "style_overlay__7eI1w",
                menuWrapper: "style_menuWrapper__1yFRW",
                closeButton: "style_closeButton__xQOFd"
            }
        },
        68371: function(e) {
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
                grid: "style_grid__xVDul",
                imageContainer: "style_imageContainer__9MQRL",
                heightRight: "style_heightRight__vzWL5",
                heightLeft: "style_heightLeft__QWw84",
                widthTop: "style_widthTop__kwyvu",
                widthBottom: "style_widthBottom__VpZS2",
                lineThemelight: "style_lineThemelight__Or8fi",
                lineThemedark: "style_lineThemedark__gpdz2",
                lineTop: "style_lineTop__ufeF_",
                lineTopMobile: "style_lineTopMobile__B6tjR",
                lineBottom: "style_lineBottom__fxcxT",
                lineBottomMobile: "style_lineBottomMobile__wQm1W",
                lineLeft: "style_lineLeft___QQMf",
                lineLeftMobile: "style_lineLeftMobile__7OpkS",
                lineRight: "style_lineRight__FFChx",
                lineRightMobile: "style_lineRightMobile__Hkf7s",
                caption: "style_caption__rsOu9",
                mobileDimensions: "style_mobileDimensions__XjMea",
                mobileDimensionsItem: "style_mobileDimensionsItem__QKV9z"
            }
        },
        46058: function(e) {
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
                sidebar: "style_sidebar__BTP_B",
                active: "style_active__ox3r3",
                hasSubManu: "style_hasSubManu__e68s_"
            }
        },
        24413: function(e) {
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
                imgWrapper: "style_imgWrapper__wUd3u"
            }
        },
        13339: function(e) {
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
                ledWrapper: "style_ledWrapper__9H0zp",
                worldLed: "style_worldLed__6rd1w",
                userLed: "style_userLed__ngSgq"
            }
        },
        54839: function(e) {
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
                root: "style_root__kU7ts",
                column: "style_column__CIEh2",
                imageWrapper: "style_imageWrapper__JvwuR",
                rows: "style_rows__ZqaC8",
                row: "style_row__yJyMA",
                rowTitle: "style_rowTitle__56SYr",
                rowItem: "style_rowItem__drh4y",
                price: "style_price__nfSvD",
                divider: "style_divider__GmW9i"
            }
        },
        78224: function(e) {
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
                group: "style_group__fEu5W",
                labelsWrapper: "style_labelsWrapper__OSM2i",
                images: "style_images__94mEw",
                item: "style_item__6B5NO",
                imageWrapper: "style_imageWrapper__2PGhT"
            }
        },
        26866: function(e) {
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
                wrapperGroups: "style_wrapperGroups__1sLT3"
            }
        },
        6659: function(e) {
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
                wrapper: "style_wrapper__G3gUj",
                bulletNavigationWrapper: "style_bulletNavigationWrapper__C1_Sl"
            }
        },
        18179: function(e) {
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
                imgWrapper: "style_imgWrapper__AWqSh"
            }
        },
        19963: function(e) {
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
                imgWrapper: "style_imgWrapper__GvePL",
                skinTones: "style_skinTones__hIGyw",
                tooltip: "style_tooltip__HAmxb",
                icon: "style_icon__gJCfo",
                tooltipContent: "style_tooltipContent__u1ruJ"
            }
        },
        66131: function(e) {
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
                root: "style_root__4zGYf",
                line: "style_line__rkDKr",
                fullwidth: "style_fullwidth__QTQGp",
                top: "style_top__p7RzJ",
                bottom: "style_bottom__7Gpgw",
                gummybear: "style_gummybear__x_w9R",
                booster: "style_booster__3gBQm",
                item: "style_item__XUYsY",
                itemHeading: "style_itemHeading__vmcZD",
                measurements: "style_measurements__qdhSj"
            }
        },
        17313: function(e) {
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
                gestureTypes: "style_gestureTypes__FDjR8",
                gestureImage: "style_gestureImage__ZSRCR",
                gesturePicker: "style_gesturePicker__6Kpo7",
                title: "style_title__XZXmM",
                gesturePickerItem: "style_gesturePickerItem__vfe3W",
                "tap-and-hold": "style_tap-and-hold__foI7m",
                "double-tap": "style_double-tap__WanR1",
                "swipe-left-right": "style_swipe-left-right__tF5aT",
                "swipe-up-down": "style_swipe-up-down__IRZof",
                "double-tap-and-hold": "style_double-tap-and-hold__UtayB"
            }
        },
        19302: function(e) {
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
                visual: "style_visual__JsjlD",
                item: "style_item__xR__Q",
                container: "style_container__Dw2Pp",
                main: "style_main__PW51X",
                itemBody: "style_itemBody__bsmcX",
                dots: "style_dots__D6aHF",
                "tap-and-hold": "style_tap-and-hold__ZO4xR",
                "double-tap": "style_double-tap__d01f4",
                "swipe-left-right": "style_swipe-left-right__dsSHO",
                "swipe-up-down": "style_swipe-up-down__CFShg",
                "double-tap-and-hold": "style_double-tap-and-hold__SbagJ"
            }
        },
        44956: function(e) {
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
                "tap-and-hold": "style_tap-and-hold__vHwUN",
                "double-tap": "style_double-tap__a6paf",
                "swipe-left-right": "style_swipe-left-right__LRqs_",
                "swipe-up-down": "style_swipe-up-down__YpCSI",
                "double-tap-and-hold": "style_double-tap-and-hold__JnW4_"
            }
        },
        56121: function(e) {
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
                sections: "style_sections__ygaVi",
                imageRight: "style_imageRight__XQqWa",
                big: "style_big__KC5Te"
            }
        },
        80330: function(e) {
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
                tableInfo: "style_tableInfo__vHF9E",
                tableRow: "style_tableRow__n3Vww",
                tableRowTitle: "style_tableRowTitle__rSJCU",
                tableRowDescription: "style_tableRowDescription__848XW"
            }
        },
        51926: function(e) {
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
                main: "style_main__6vfm5"
            }
        },
        84741: function(e) {
            e.exports = {
                main: "style_main__HfBVH",
                list: "style_list__R2ymw",
                bullet: "style_bullet__Hrx9T",
                line: "style_line__45L09",
                liContent: "style_liContent__x2mAH",
                label: "style_label__eMqAJ",
                cursorWrapper: "style_cursorWrapper__9ywFn",
                cursor: "style_cursor__DgDO8"
            }
        },
        91970: function(e) {
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
                wrapper: "style_wrapper__o_Vv2",
                menu: "style_menu__TcCgd",
                menuItem: "style_menuItem__G3FlK",
                menuItemCircle: "style_menuItemCircle__76XrW",
                menuItemLabel: "style_menuItemLabel__IMc4V",
                imageLabel: "style_imageLabel__B4Bm_",
                imageWrapper: "style_imageWrapper__I7DDv"
            }
        },
        95236: function(e) {
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
                root: "style_root__wdyIg",
                topBorder: "style_topBorder__8vODv",
                typography: "style_typography__CBO0J",
                title: "style_title__eHybt",
                heading: "style_heading__vviST",
                description: "style_description__sO_e_"
            }
        }
    },
    function(e) {
        e.O(0, [294, 888, 774, 179], function() {
            return e(e.s = 93232)
        }), _N_E = e.O()
    }
]);