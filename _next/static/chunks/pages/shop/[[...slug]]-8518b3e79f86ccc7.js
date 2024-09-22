(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [80], {
        7074: function(e, t, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/shop/[[...slug]]", function() {
                return i(91894)
            }])
        },
        91894: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                __N_SSP: function() {
                    return tw
                },
                default: function() {
                    return tj
                }
            });
            var a, s, A = i(31549),
                n = i(44194),
                r = i(73914),
                o = i(16112),
                l = i(51865),
                d = i.n(l),
                c = i(80385),
                m = i(33686),
                u = i(85277),
                h = i.n(u),
                _ = i(74687),
                g = i.n(_),
                p = {
                    src: "/_next/static/media/shield-hero.39cb6cb5.jpg",
                    height: 1126,
                    width: 2e3,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGnA//EABYQAAMAAAAAAAAAAAAAAAAAAAMREv/aAAgBAQABBQITj//EABYRAAMAAAAAAAAAAAAAAAAAAAACMf/aAAgBAwEBPwFqf//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/AY//xAAXEAADAQAAAAAAAAAAAAAAAAAAAQIR/9oACAEBAAY/Ap1n/8QAFxAAAwEAAAAAAAAAAAAAAAAAAAERIf/aAAgBAQABPyGlh4z/2gAMAwEAAgADAAAAEPP/xAAWEQADAAAAAAAAAAAAAAAAAAAAASH/2gAIAQMBAT8Qaz//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8QBl//xAAYEAEAAwEAAAAAAAAAAAAAAAABABFRof/aAAgBAQABPxBoaplocqf/2Q==",
                    blurWidth: 8,
                    blurHeight: 5
                },
                f = i(14910),
                x = i(65984);

            function v(e) {
                let {
                    mobile: t,
                    desktop: i,
                    children: a
                } = e, s = (0, x.Z)("(min-width: 67em)", !1);
                return t && !s || i && s ? a : null
            }
            var y = i(66685),
                b = i(76818),
                w = i(71130),
                j = i.n(w);
            (a = s || (s = {})).SHOP = "shop", a.ADD = "add";
            var B = e => {
                let {
                    actionType: t = "shop",
                    isOutOfStock: i = !1,
                    product: a
                } = e, {
                    isUSCountry: s
                } = (0, y.h)();
                return s ? i ? (0, A.jsx)(c.ZT, {
                    theme: "light",
                    className: j().shopButton,
                    "data-testid": "shop-accessories-detail-button",
                    children: "Details"
                }) : (0, A.jsxs)(A.Fragment, {
                    children: [(0, A.jsx)(v, {
                        desktop: !0,
                        children: (0, A.jsx)(c.ZT, {
                            theme: "light",
                            className: j().shopButton,
                            "data-testid": "shop-accessories-buy-button",
                            children: "Buy"
                        })
                    }), (0, A.jsx)(v, {
                        mobile: !0,
                        children: "add" === t ? (0, A.jsx)("div", {
                            className: j().quantity,
                            children: (0, A.jsx)(b.Z, {
                                product: a,
                                selectedVariant: { ...a.variants.nodes[0],
                                    availableForSale: !0
                                },
                                dataTestId: "pdp-add-btn-wall"
                            })
                        }) : (0, A.jsx)(c.ZT, {
                            theme: "light",
                            className: j().shopButton,
                            "data-testid": "shop-accessories-buy-button",
                            children: "Shop"
                        })
                    })]
                }) : (0, A.jsx)(c.ZT, {
                    theme: "light",
                    className: j().shopButton,
                    "data-testid": "shop-accessories-detail-button-non-us",
                    children: "Details"
                })
            };

            function D(e) {
                var t, i, a, n, r, o, l, u, _, x, v, y, b;
                let {
                    data: w,
                    isProtectShild: D,
                    showAddButton: I = !1
                } = e, E = Number(null === (i = w.shopData) || void 0 === i ? void 0 : null === (t = i.priceRange) || void 0 === t ? void 0 : t.minVariantPrice.amount) !== Number(null === (n = w.shopData) || void 0 === n ? void 0 : null === (a = n.priceRange) || void 0 === a ? void 0 : a.maxVariantPrice.amount), M = !(null === (r = w.shopData) || void 0 === r ? void 0 : r.availableForSale), N = (null === (o = w.staticData) || void 0 === o ? void 0 : o.handle) === f.oc.shield, P = I ? s.ADD : s.SHOP, k = null !== (b = null === (l = w.staticData) || void 0 === l ? void 0 : l.name) && void 0 !== b ? b : "unknown", Q = k.toLowerCase().replaceAll(" ", "-");
                return (0, A.jsxs)(g(), {
                    href: "/shop/product/".concat(null === (u = w.staticData) || void 0 === u ? void 0 : u.handle),
                    className: d()(j().accessoriesItem, D && j().protect),
                    "data-testid": "plp-accessory-item",
                    children: [D ? (0, A.jsx)(h(), {
                        src: p,
                        alt: "Protect shield",
                        placeholder: "blur",
                        className: j().heroImage,
                        loading: "eager"
                    }) : (0, A.jsx)("div", {
                        className: j().imageContainer,
                        children: (0, A.jsx)(h(), {
                            src: null === (x = w.staticData) || void 0 === x ? void 0 : null === (_ = x.images) || void 0 === _ ? void 0 : _.plp,
                            alt: k,
                            loading: "eager"
                        })
                    }), (0, A.jsxs)("div", {
                        className: d()(j().accessoryInfoWrapper, D && j().accessoryInfoWrapperProtect),
                        children: [(0, A.jsxs)("div", {
                            className: j().accessoryInfo,
                            children: [(0, A.jsx)(c.ZT, {
                                className: d()(j().name, N && j().shield),
                                children: N ? "Shields" : k
                            }), (0, A.jsxs)(c.ZT, {
                                className: j().price,
                                children: [!D && E && "Starting at ", M ? (0, A.jsx)("span", {
                                    "data-testid": "".concat(Q, "-out-of-stock"),
                                    children: "Out of stock"
                                }) : (0, A.jsx)("span", {
                                    "data-testid": "".concat(Q, "-product-price"),
                                    children: (0, A.jsx)(m.W, {
                                        as: "span",
                                        data: null === (y = w.shopData) || void 0 === y ? void 0 : null === (v = y.priceRange) || void 0 === v ? void 0 : v.minVariantPrice,
                                        withoutTrailingZeros: !0
                                    })
                                })]
                            })]
                        }), (0, A.jsx)(B, {
                            isOutOfStock: M,
                            actionType: P,
                            product: w.shopData
                        })]
                    })]
                })
            }
            var I = i(52861),
                E = e => {
                    let t = (0, n.useMemo)(() => ({
                            staticData: I.B.protect.find(e => e.handle === f.oc.shield),
                            shopData: e.find(e => e.handle === f.oc.shield)
                        }), [e]),
                        i = (0, n.useMemo)(() => ({
                            staticData: I.B.wear.find(e => e.handle === f.oc.clip),
                            shopData: e.find(e => e.handle === f.oc.clip)
                        }), [e]),
                        a = (0, n.useMemo)(() => ({
                            staticData: I.B.wear.find(e => e.handle === f.oc.latch),
                            shopData: e.find(e => e.handle === f.oc.latch)
                        }), [e]),
                        s = (0, n.useMemo)(() => ({
                            staticData: I.B.power.find(e => e.handle === f.oc.chargeCase),
                            shopData: e.find(e => e.handle === f.oc.chargeCase)
                        }), [e]);
                    return {
                        shieldPackedData: t,
                        clipPackedData: i,
                        latchPackedData: a,
                        chargeCasePackedData: s,
                        boosterPackedData: (0, n.useMemo)(() => ({
                            staticData: I.B.power.find(e => e.handle === f.oc.booster),
                            shopData: e.find(e => e.handle === f.oc.booster)
                        }), [e]),
                        chargePadPackedData: (0, n.useMemo)(() => ({
                            staticData: I.B.power.find(e => e.handle === f.oc.chargePad),
                            shopData: e.find(e => e.handle === f.oc.chargePad)
                        }), [e]),
                        adapterPackedData: (0, n.useMemo)(() => ({
                            staticData: I.B.power.find(e => e.handle === f.oc.adapter),
                            shopData: e.find(e => e.handle === f.oc.adapter)
                        }), [e])
                    }
                },
                M = i(84450),
                N = i(82128),
                P = i(47873),
                k = i.n(P);

            function Q(e) {
                let {
                    accessories: t
                } = e, {
                    shieldPackedData: i,
                    clipPackedData: a,
                    latchPackedData: s,
                    chargeCasePackedData: n,
                    boosterPackedData: r,
                    chargePadPackedData: o,
                    adapterPackedData: l
                } = E(t);
                return (0, A.jsxs)("div", {
                    className: k().accessoriesWallLayout,
                    children: [(0, A.jsx)("section", {
                        className: k().fullWidth,
                        children: (0, A.jsx)(D, {
                            data: i,
                            isProtectShild: !0
                        })
                    }), (0, A.jsxs)("section", {
                        className: d()(k().fullWidth, k().accessoriesGrid),
                        children: [(0, A.jsx)(D, {
                            data: a,
                            showAddButton: !0
                        }), (0, A.jsx)(D, {
                            data: s,
                            showAddButton: !0
                        }), (0, A.jsx)(D, {
                            data: o,
                            showAddButton: !0
                        }), (0, A.jsx)(D, {
                            data: n,
                            showAddButton: !0
                        }), (0, A.jsx)(D, {
                            data: l,
                            showAddButton: !0
                        }), (0, A.jsx)(D, {
                            data: r
                        })]
                    }), (0, A.jsxs)("section", {
                        className: k().fullWidth,
                        children: [(0, A.jsx)("div", {
                            className: k().faqWrapper,
                            children: (0, A.jsx)(M.Z, {
                                disableOpenDefault: !0,
                                transparent: !0
                            })
                        }), (0, A.jsx)(N.Z, {
                            type: "h4"
                        })]
                    })]
                })
            }
            var S = i(78627),
                q = i(43798),
                C = i(28e3),
                z = i(8036),
                O = i.n(z),
                T = i(56342);
            let L = (0, n.createContext)(void 0);

            function H(e) {
                let {
                    value: t,
                    children: i
                } = e;
                return (0, A.jsx)(L.Provider, {
                    value: t,
                    children: i
                })
            }
            var Z = i(36402),
                F = i(26616),
                R = i(25801);
            let W = (0, n.createContext)({
                selection: null,
                setSelection: () => {},
                initialSelectionFromCart: !1,
                setInitialSelectionFromCart: () => {},
                addProductToBag: async () => {},
                addProductToBagAndCheckout: async () => {},
                isSelectionInTheBag: !1,
                hasAiPinInTheBag: !1,
                bagSkuHistory: [],
                setSelectionSku: () => {}
            });

            function U(e) {
                let {
                    children: t,
                    variants: i,
                    product: a
                } = e, [s, r] = (0, n.useState)(null), [o, l] = (0, n.useState)(!1), d = (0, n.useRef)([]), {
                    startCartMutation: c
                } = (0, Z.Z)(), {
                    checkoutHandler: m
                } = (0, F.Z)(), u = (0, q.jD)(), h = (0, n.useContext)(L), _ = (0, n.useMemo)(() => {
                    var e;
                    let t = e => i.find(t => t.sku === e),
                        A = () => {
                            var e;
                            return t(null !== (e = null == s ? void 0 : s.sku) && void 0 !== e ? e : "")
                        },
                        n = function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.lines;
                            return null == e ? void 0 : e.find(e => {
                                var t;
                                return i.map(e => e.id).includes(null == e ? void 0 : null === (t = e.merchandise) || void 0 === t ? void 0 : t.id)
                            })
                        },
                        o = async () => {
                            await c(async e => {
                                let {
                                    lines: t,
                                    linesAdd: i,
                                    linesUpdate: s
                                } = e, r = A();
                                if (r) {
                                    let e = n(t);
                                    if (e) s([{
                                        id: e.id,
                                        merchandiseId: r.id
                                    }]);
                                    else {
                                        let e = [{
                                            merchandiseId: r.id,
                                            quantity: 1
                                        }];
                                        if (null == h ? void 0 : h.threeMonthsPromo) {
                                            var o, l, d;
                                            let t = await (0, R.w)(f.oc.threeMonthPromo),
                                                i = null == t ? void 0 : null === (d = t.variants) || void 0 === d ? void 0 : null === (l = d.nodes) || void 0 === l ? void 0 : null === (o = l[0]) || void 0 === o ? void 0 : o.id;
                                            i && e.push({
                                                merchandiseId: i,
                                                quantity: 3
                                            })
                                        }
                                        i(e)
                                    }(0, T.Zt)("humane_shop_add_to_cart", {
                                        items: [{
                                            product: a,
                                            variant: r
                                        }]
                                    })
                                }
                            })
                        },
                        l = async () => {
                            await o(), m()
                        },
                        _ = A(),
                        g = !!(null === (e = u.lines) || void 0 === e ? void 0 : e.some(e => {
                            var t;
                            return (null == e ? void 0 : null === (t = e.merchandise) || void 0 === t ? void 0 : t.id) === (null == _ ? void 0 : _.id)
                        })),
                        p = n(),
                        x = i.find(e => {
                            var t;
                            return e.id === (null == p ? void 0 : null === (t = p.merchandise) || void 0 === t ? void 0 : t.id)
                        }),
                        v = !!p,
                        y = d.current[d.current.length - 1];
                    if (x && y !== x.sku) {
                        d.current.push(x.sku);
                        let e = new Set(d.current);
                        d.current = [], e.forEach(e => d.current.push(e))
                    } else v || (d.current = []);
                    return {
                        addProductToBag: o,
                        addProductToBagAndCheckout: l,
                        bag: u,
                        bagSkuHistory: d.current,
                        findLineAiPin: n,
                        findSelectionAiPinVariant: A,
                        hasAiPinInTheBag: v,
                        isSelectionInTheBag: g,
                        setSelectionSku: e => {
                            if (e) {
                                var i;
                                let {
                                    price: a
                                } = null !== (i = t(e)) && void 0 !== i ? i : {};
                                r({
                                    sku: e,
                                    price: a
                                })
                            } else r(null)
                        }
                    }
                }, [u, m, a, s, h, c, i]), g = (0, n.useMemo)(() => ({
                    selection: s,
                    setSelection: r,
                    initialSelectionFromCart: o,
                    setInitialSelectionFromCart: l,
                    ..._
                }), [s, r, o, l, _]);
                return (0, A.jsx)(W.Provider, {
                    value: g,
                    children: t
                })
            }

            function G(e) {
                let {
                    css: t,
                    ...i
                } = e;
                return (0, A.jsx)(c.ZT, {
                    css: {
                        letterSpacing: "-0.75px",
                        fontSize: "16px",
                        fontWeight: "500",
                        ...t
                    },
                    ...i
                })
            }

            function V() {
                let {
                    products: e
                } = I.default, {
                    selection: t
                } = (0, n.useContext)(W), i = e.find(e => {
                    let {
                        sku: i
                    } = e;
                    return (null == t ? void 0 : t.sku) === i
                }), a = null == t ? void 0 : t.price;
                return i && (0, A.jsx)("div", {
                    className: O().summary,
                    children: (0, A.jsxs)("div", {
                        className: O().body,
                        children: [(0, A.jsx)(h(), {
                            src: null == i ? void 0 : i.images.front,
                            alt: i.name,
                            className: O().thumbnail
                        }), (0, A.jsxs)("span", {
                            className: O().productName,
                            children: [(0, A.jsxs)(G, {
                                variant: "body2",
                                children: ["", " "]
                            }), (0, A.jsx)(G, {
                                variant: "body2",
                                css: {
                                    color: "$craterGrey50"
                                },
                                children: i.label
                            })]
                        }), (0, A.jsx)(G, {
                            variant: "body2",
                            className: O().panePrice,
                            children: a && (0, A.jsx)(m.W, {
                                as: "span",
                                data: a,
                                withoutTrailingZeros: !0
                            })
                        })]
                    })
                })
            }
            var K = i(13067),
                Y = i(93757),
                J = i(67083),
                X = i(482),
                $ = i.n(X);

            function ee() {
                let [e, t] = (0, n.useState)(!1), {
                    selection: i,
                    addProductToBag: a,
                    hasAiPinInTheBag: s
                } = (0, n.useContext)(W), o = (0, C.useRouter)(), {
                    lines: l
                } = (0, q.jD)(), {
                    isUSCountry: m
                } = (0, y.h)(), u = (0, n.useMemo)(() => !!(null == l ? void 0 : l.some(e => {
                    var t, i;
                    return (null == e ? void 0 : null === (i = e.merchandise) || void 0 === i ? void 0 : null === (t = i.product) || void 0 === t ? void 0 : t.handle) === f.oc.h4
                })), [l]), {
                    hasPurchaseLimit: h
                } = (0, J.Z)(), _ = !(null == i ? void 0 : i.sku), g = (0, r.q_)({
                    opacity: _ ? 0 : 1,
                    y: _ ? "100%" : "0%",
                    immediate: _
                }), p = (0, r.q_)({
                    "--checkout-pointer-events": s ? "all" : "none",
                    opacity: s ? 1 : 0,
                    y: s ? "0%" : "100%",
                    immediate: !s
                }), x = (0, n.useCallback)(async () => {
                    t(!0);
                    try {
                        await a(), o.push("/shop/summary")
                    } finally {
                        t(!1)
                    }
                }, [a, o]);
                return (0, A.jsxs)(A.Fragment, {
                    children: [(0, A.jsx)(v, {
                        desktop: !0,
                        children: h ? (0, A.jsx)(r.q.div, {
                            className: d()($().navigation),
                            style: g,
                            children: (0, A.jsxs)("div", {
                                className: $().navigationBody,
                                children: [(0, A.jsx)(V, {}), m ? (0, A.jsxs)(S.zx, {
                                    className: $().button,
                                    type: "button",
                                    disabled: e,
                                    onClick: x,
                                    children: [(0, A.jsx)(c.ZT, {
                                        variant: "body2",
                                        className: $().buttonLabel,
                                        children: u ? "Update bag" : "Add to bag"
                                    }), (0, A.jsx)(c.ZT, {
                                        variant: "body2",
                                        className: $().buttonLabel,
                                        children: (0, A.jsx)(K.Ek, {
                                            width: 17,
                                            height: 20
                                        })
                                    })]
                                }) : (0, A.jsx)(S.AN, {
                                    className: $().notifyButton,
                                    href: "/subscribe",
                                    children: "Get notified"
                                })]
                            })
                        }) : null
                    }), (0, A.jsx)(v, {
                        mobile: !0,
                        children: (0, A.jsx)(r.q.div, {
                            className: d()($().navigation),
                            style: p,
                            children: (0, A.jsx)("div", {
                                className: $().checkoutCta,
                                children: (0, A.jsx)(Y.Z, {
                                    "data-testid": "header-checkout-button"
                                })
                            })
                        })
                    })]
                })
            }
            var et = i(31737),
                ei = i(64066),
                ea = i(8985),
                es = i.n(ea),
                eA = i(46270),
                en = i.n(eA);

            function er() {
                let e = (0, x.Z)(es()._lgMq, !0);
                return (0, A.jsx)(c.UQ, {
                    type: "single",
                    collapsible: !0,
                    children: (0, A.jsx)(c.UQ.Item, {
                        className: d()(en().accordionItem, en().large),
                        align: e ? "center" : "flex-start",
                        trigger: (0, A.jsx)(ei.Dx, {
                            title: "Humane Subscription Details",
                            subtitle: "$24/mo. + taxes & fees. Billing begins once you activate your Ai Pin."
                        }),
                        title: "faq",
                        value: "faq",
                        children: (0, A.jsx)(ei.VY, {
                            className: es().contentRoot,
                            children: (0, A.jsx)(et.Z, {})
                        })
                    })
                })
            }
            var eo = {
                    src: "/_next/static/media/battery-booster.c43c16a2.png",
                    height: 512,
                    width: 512,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEVMaXHr7e7z9Pb38/fu6/Hr7O7w8PLv8fLr7e/39/fWFrJdAAAACnRSTlMA9v4QE5PGypAKVh3UcwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC5JREFUeJxNi7ENACAMwxzSAv3/YQQDkMmSHbiriIgCUpISGE1q/Yej5q5t+31ZEjgAdAVySwUAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 8
                },
                el = {
                    src: "/_next/static/media/charge-case.bd1ee2d9.png",
                    height: 512,
                    width: 512,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEVMaXGcnKBgYGDi4+errLC+vryNkZGwsbXe6v+8v8jX2d/HwKmur7SPgl1ZXGMtpAYRAAAADHRSTlMAUwP+7v0gyh9Sye0/9dZbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAN0lEQVR4nDWLSQ4AIAwC6WZdqv9/rsFELkwmAACqeBlzDnZf+3gHIBFRQiizB83NvHEkmRT/fgEg9QDQe2NfWgAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 8
                },
                ed = {
                    src: "/_next/static/media/charge-pad.ea600446.png",
                    height: 512,
                    width: 512,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEX19vjT0+Lp6uzZ3OD09Pbq7O7q7O7z8/Ph4+Xu7/GHo8qrAAAACXRSTlP+AU9EMJ6ZLnybuFeIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nEWLQQoAIAzD0m0q/f+HZah4CyRByoiU0MBmisK2WcSB+HBVdQwdv30DJCIA9PIG+VcAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 8
                },
                ec = {
                    src: "/_next/static/media/usbc.efb4e36a.png",
                    height: 512,
                    width: 512,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEWKlZXh4uXr6+vg4uXk5ujb3eDo6u3v7/HV2Nro7e3f4uXj5Ofs7vFKnZBCAAAADHRSTlMBzQrz05v3XHkcUbBNs2jhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANklEQVR4nDXLuREAIRDEQM2+x0H+8VJrIEdWA5gxrZRygW2PKEGXTqmadp0K/yE9wr8xKc0fvx6CAM5lFD8wAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 8
                },
                em = {
                    src: "/_next/static/media/2xbooster.1b803a07.png",
                    height: 600,
                    width: 836,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAD1BMVEXs7u/t7u7s7e3n6ev09fbHTweLAAAAA3RSTlP+ranxj0PsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nEXKQQoAIBDDwNH2/2+WRcQcQg6xC11jonLxY0pSbz4JDwBbyh+qAQAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 6
                },
                eu = i(44624),
                eh = i(90810);
            let e_ = [{
                    itemImgSrc: eh.Z,
                    decorativeImgSrc: {
                        src: "/_next/static/media/shop-power-charge-pad.678cea84.jpg",
                        height: 1440,
                        width: 1440,
                        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oADAMBAAIQAxAAAAGYBp//xAAXEAADAQAAAAAAAAAAAAAAAAAAAQIS/9oACAEBAAEFAlmT/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwF//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAFhAAAwAAAAAAAAAAAAAAAAAAACGh/9oACAEBAAY/AlT/xAAYEAEBAAMAAAAAAAAAAAAAAAABEQAxQf/aAAgBAQABPyEsN3saz//aAAwDAQACAAMAAAAQ8//EABYRAAMAAAAAAAAAAAAAAAAAAAABIf/aAAgBAwEBPxBQ/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAECAQE/EE2//8QAGBAAAgMAAAAAAAAAAAAAAAAAASEAEcH/2gAIAQEAAT8QcF3gEOf/2Q==",
                        blurWidth: 8,
                        blurHeight: 8
                    },
                    name: "Charge Pad",
                    description: "Easily charge and sync your Ai Pin and your Boosters."
                }, {
                    itemImgSrc: eu.Z,
                    decorativeImgSrc: {
                        src: "/_next/static/media/shop-power-charge-case.e7efe7f4.jpg",
                        height: 1441,
                        width: 1416,
                        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABhBf/xAAXEAADAQAAAAAAAAAAAAAAAAAAAgMT/9oACAEBAAEFAmhkf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/AY//xAAYEAACAwAAAAAAAAAAAAAAAAACEQABEv/aAAgBAQAGPwLJiytz/8QAGBABAQADAAAAAAAAAAAAAAAAEQEAMVH/2gAIAQEAAT8hiVmF0cz/2gAMAwEAAgADAAAAEPP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPxCv/8QAFREBAQAAAAAAAAAAAAAAAAAAADH/2gAIAQIBAT8Qh//EABgQAQEBAQEAAAAAAAAAAAAAAAERIQAx/9oACAEBAAE/EIIWEogJRjREd97/2Q==",
                        blurWidth: 8,
                        blurHeight: 8
                    },
                    name: "Charge Case",
                    description: "On-the-go power that provides 360\xb0 protection.",
                    outOfStock: !0
                }, {
                    itemImgSrc: {
                        src: "/_next/static/media/cable-and-adapter.dcb53439.png",
                        height: 714,
                        width: 827,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAPFBMVEW60dHP0dTl5eXU1trn6OrKzdHT1NjQ09ff4OPY2t319ffMztHm5+ra2uHf4eHN0NTJy9Hg4eTT1dno6eyOSDGXAAAAE3RSTlMBxhTn9+yX4Lqz1aTtOy/Yi8juL6fr7AAAAAlwSFlzAAALEwAACxMBAJqcGAAAADhJREFUeJwFwYkBwCAIALFDQcC3rfvv2gT2OKdtWG4i9i3SXtW0YHq/t8vk8VCNOiA9oiZQmnsr/DqsAaklITdDAAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 7
                    },
                    decorativeImgSrc: {
                        src: "/_next/static/media/shop-power-usb-c-adapter-and-cable.23ad601f.jpg",
                        height: 1440,
                        width: 1440,
                        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABmEP/xAAVEAEBAAAAAAAAAAAAAAAAAAACA//aAAgBAQABBQK10R//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPwGv/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Bj//EABgQAQADAQAAAAAAAAAAAAAAAAEAAiED/9oACAEBAAY/Am9O+poVn//EABcQAQEBAQAAAAAAAAAAAAAAAAERAGH/2gAIAQEAAT8hSkw0A7d//9oADAMBAAIAAwAAABAP/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Qp//EABYRAAMAAAAAAAAAAAAAAAAAAAABIf/aAAgBAgEBPxBYf//EABkQAAIDAQAAAAAAAAAAAAAAAAERACExQf/aAAgBAQABPxA3CC1NFiB41P/Z",
                        blurWidth: 8,
                        blurHeight: 8
                    },
                    name: "USB-C Adapter and Cable",
                    description: "Plug into any AC outlet to power your Charge Pad and Charge Case."
                }, {
                    itemImgSrc: em,
                    decorativeImgSrc: {
                        src: "/_next/static/media/shop-power-booster.1ba19dce.jpg",
                        height: 1440,
                        width: 1440,
                        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oADAMBAAIQAxAAAAGMGn//xAAWEAEBAQAAAAAAAAAAAAAAAAACAAP/2gAIAQEAAQUCLwv/xAAVEQEBAAAAAAAAAAAAAAAAAAARAP/aAAgBAwEBPwEb/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAGhABAAEFAAAAAAAAAAAAAAAAAREAAjFBYf/aAAgBAQAGPwJkW2cmu1//xAAZEAEAAgMAAAAAAAAAAAAAAAABABExQbH/2gAIAQEAAT8hrIzXEvfE/9oADAMBAAIAAwAAABD/AP/EABcRAAMBAAAAAAAAAAAAAAAAAAABESH/2gAIAQMBAT8QnTP/xAAVEQEBAAAAAAAAAAAAAAAAAAAxAP/aAAgBAgEBPxAL/8QAGBABAQADAAAAAAAAAAAAAAAAEQEAYbH/2gAIAQEAAT8QGA1vYQm+M//Z",
                        blurWidth: 8,
                        blurHeight: 8
                    },
                    name: "2x Battery Boosters",
                    description: "Powers your Ai Pin while securing it to what you wear."
                }],
                eg = [{
                    itemImgSrc: el,
                    decorativeImgSrc: el,
                    name: "Charge Case",
                    description: "On-the-go power that provides 360\xb0 protection.",
                    outOfStock: !0
                }, {
                    itemImgSrc: ed,
                    decorativeImgSrc: ed,
                    name: "Charge Pad",
                    description: "Easily charge and sync your Ai Pin and your Boosters."
                }, {
                    itemImgSrc: ec,
                    decorativeImgSrc: ec,
                    name: "USB-C Adapter and Cable",
                    description: "Plug into any AC outlet to power your Charge Pad and Charge Case."
                }, {
                    itemImgSrc: eo,
                    decorativeImgSrc: eo,
                    name: "2x Battery Boosters",
                    description: "Powers your Ai Pin while securing it to what you wear."
                }];
            var ep = i(71792),
                ef = i.n(ep);

            function ex(e) {
                let {
                    children: t,
                    ...i
                } = e, {
                    handleScroll: a
                } = function(e) {
                    let {
                        onScroll: t,
                        threshold: i
                    } = e, a = (0, n.useRef)(void 0), s = (0, n.useCallback)(e => {
                        var s;
                        a.current || (a.current = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                i = e.childNodes,
                                a = function(e) {
                                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                                    return Array.from(e).map(e => {
                                        let i = e.offsetLeft + e.offsetWidth / 2;
                                        return [i - t, i + t]
                                    })
                                }(i, t);
                            return {
                                carouselElement: e,
                                carouselItemsElement: i,
                                carouselItemsPosition: a
                            }
                        }(e.currentTarget, i));
                        let A = (s = a.current.carouselElement).scrollLeft + s.offsetWidth / 2,
                            n = a.current.carouselItemsPosition.findIndex(e => {
                                let [t, i] = e;
                                return A >= t && A <= i
                            });
                        null == t || t({
                            pos: A,
                            item: n
                        })
                    }, [t, i]);
                    return (0, n.useEffect)(() => {
                        if (a.current) {
                            let e = () => {
                                a.current = void 0
                            };
                            return window.addEventListener("resize", e), () => {
                                window.removeEventListener("resize", e)
                            }
                        }
                        return () => {}
                    }, [i]), {
                        handleScroll: s
                    }
                }(i);
                return (0, A.jsx)("div", {
                    className: ef().carousel,
                    onScroll: a,
                    children: t
                })
            }
            ex.Item = function(e) {
                let {
                    children: t
                } = e;
                return (0, A.jsx)("div", {
                    className: ef().carouselItem,
                    children: t
                })
            };
            var ev = i(54544),
                ey = i(73950),
                eb = i(19640),
                ew = i(85521),
                ej = i.n(ew);
            let eB = e => {
                let {
                    src: t,
                    isSmall: i
                } = e;
                return (0, A.jsx)(h(), {
                    src: t,
                    alt: "Ai Pin - what's included",
                    sizes: "100vh",
                    style: {
                        width: "auto",
                        height: i ? "34px" : "56px"
                    }
                })
            };
            var eD = () => (0, A.jsxs)("div", {
                    className: ej().iconsWrapper,
                    children: [(0, A.jsx)(eB, {
                        src: ey.Z,
                        isSmall: !0
                    }), (0, A.jsxs)(v, {
                        desktop: !0,
                        children: [(0, A.jsx)(S.ZT, {
                            children: "+"
                        }), (0, A.jsx)(eB, {
                            src: eb.Z
                        }), (0, A.jsx)(eB, {
                            src: em,
                            isSmall: !0
                        }), (0, A.jsx)(eB, {
                            src: eh.Z
                        }), (0, A.jsx)(eB, {
                            src: ev.Z
                        })]
                    }), (0, A.jsxs)(v, {
                        mobile: !0,
                        children: [(0, A.jsx)(S.ZT, {
                            className: ej().plus,
                            children: "+"
                        }), (0, A.jsx)(eB, {
                            src: el
                        }), (0, A.jsx)(eB, {
                            src: ed
                        }), (0, A.jsx)(eB, {
                            src: ec
                        }), (0, A.jsx)(eB, {
                            src: eo
                        })]
                    })]
                }),
                eI = i(45285),
                eE = i.n(eI);

            function eM() {
                let e = (0, x.Z)(eE()._lgMq, !0),
                    t = "What’s in the Complete System",
                    i = (0, n.useRef)(!1),
                    [a, s] = (0, n.useState)(0),
                    [r, o] = (0, n.useState)(!1);
                return (0, A.jsx)(c.UQ, {
                    type: "single",
                    collapsible: !0,
                    children: (0, A.jsxs)(c.UQ.Item, {
                        "data-transparent": !0,
                        className: d()(en().accordionItem, en().large),
                        align: e ? "center" : "flex-start",
                        trigger: (0, A.jsx)(ei.Dx, {
                            title: t,
                            children: (0, A.jsx)(eD, {})
                        }),
                        title: t,
                        value: t,
                        children: [(0, A.jsx)(v, {
                            desktop: !0,
                            children: (0, A.jsx)(ei.VY, {
                                className: eE().items,
                                children: (0, A.jsx)("div", {
                                    className: eE().boxItem,
                                    children: e_.map(e => {
                                        let {
                                            name: t,
                                            description: i,
                                            itemImgSrc: a,
                                            outOfStock: s
                                        } = e;
                                        return (0, A.jsxs)("div", {
                                            className: eE().boxItemProduct,
                                            children: [s && (0, A.jsxs)(S.ZT, {
                                                as: "p",
                                                className: eE().boxItemProductOutOfStock,
                                                children: ["Out of stock.", (0, A.jsx)("br", {}), "Will ship separately when available."]
                                            }), (0, A.jsx)("div", {
                                                className: eE().boxItemProductImage,
                                                children: (0, A.jsx)(h(), {
                                                    src: a,
                                                    alt: "Image of ".concat(t),
                                                    loading: "eager"
                                                })
                                            }), (0, A.jsxs)("div", {
                                                className: eE().boxItemProductInfo,
                                                children: [(0, A.jsx)(S.ZT, {
                                                    weight: "bold",
                                                    children: t
                                                }), (0, A.jsx)(S.ZT, {
                                                    style: {
                                                        color: "#898989"
                                                    },
                                                    children: i
                                                })]
                                            })]
                                        }, t)
                                    })
                                })
                            })
                        }), (0, A.jsx)(v, {
                            mobile: !0,
                            children: (0, A.jsxs)("div", {
                                className: eE().imageGallery,
                                "data-testid": "aipin-images-section",
                                children: [(0, A.jsx)(ex, {
                                    onScroll: e => {
                                        let {
                                            item: t
                                        } = e;
                                        i.current ? -1 !== t ? (s(t), o(!1)) : o(!0) : i.current = !0
                                    },
                                    children: eg.map((e, t) => (0, A.jsx)(ex.Item, {
                                        children: (0, A.jsx)(h(), {
                                            "data-testid": "aipin-image",
                                            src: e.itemImgSrc,
                                            alt: "Image of ".concat(e.name),
                                            sizes: "100vh",
                                            style: {
                                                width: "auto",
                                                maxHeight: "250px"
                                            },
                                            loading: "eager"
                                        })
                                    }, t))
                                }), (0, A.jsxs)("div", {
                                    className: eE().imageDescription,
                                    "data-scrolling": r,
                                    children: [(0, A.jsx)(S.ZT, {
                                        weight: "bold",
                                        children: eg[a].name
                                    }), (0, A.jsx)(S.ZT, {
                                        style: {
                                            color: "#898989"
                                        },
                                        children: eg[a].description
                                    }), eg[a].outOfStock && (0, A.jsxs)(S.ZT, {
                                        as: "p",
                                        className: eE().boxItemProductOutOfStock,
                                        children: ["Out of stock.", (0, A.jsx)("br", {}), "Will ship separately when available."]
                                    })]
                                })]
                            })
                        })]
                    })
                })
            }
            var eN = i(81794),
                eP = i.n(eN),
                ek = Object.assign(function(e) {
                    let {
                        children: t
                    } = e;
                    return (0, A.jsx)("div", {
                        children: t
                    })
                }, {
                    CompleteSystem: function() {
                        return (0, A.jsx)(eM, {})
                    },
                    Faq: function() {
                        return (0, A.jsx)(M.Z, {
                            type: "large",
                            transparent: !0,
                            disableOpenDefault: !0
                        })
                    },
                    Subscription: function() {
                        return (0, A.jsx)(er, {})
                    },
                    Legal: function() {
                        return (0, A.jsx)("div", {
                            className: eP().legalFootnotes,
                            children: (0, A.jsxs)("div", {
                                className: eP().legalFootnotesContent,
                                children: [(0, A.jsx)(S.ZT, {
                                    as: "h3",
                                    variant: "body",
                                    css: {
                                        fontWeight: 500
                                    },
                                    children: "Legal footnotes"
                                }), (0, A.jsx)(S.ZT, {
                                    as: "p",
                                    variant: "body",
                                    css: {
                                        color: "$craterGrey"
                                    },
                                    children: "Tempora ut aspernatur temporibus et et voluptas expedita laudantium laborum. Ipsa eaque est aut ex et autem tempore saepe quaerat. Amet ipsa suscipit vitae magnam enim et at dolorem dicta quam. Porro ab odio fuga consequatur sed voluptatem molestiae qui. Qui maiores vitae autem ea facere placeat voluptatibus dolorem dolor quibusdam."
                                }), (0, A.jsx)(S.ZT, {
                                    as: "p",
                                    variant: "body",
                                    css: {
                                        color: "$craterGrey"
                                    },
                                    children: "Aperiam rerum quia dolore harum est corporis distinctio amet recusandae dolorum fuga officia. Eum repellendus doloremque nihil voluptas occaecati repellat reprehenderit rem doloribus labore placeat velit. Omnis debitis necessitatibus aut. Vero et aspernatur molestias sint consectetur architecto minima ut corrupti consequuntur laudantium enim doloremque."
                                }), (0, A.jsx)(S.ZT, {
                                    as: "p",
                                    variant: "body",
                                    css: {
                                        color: "$craterGrey"
                                    },
                                    children: "Distinctio consequatur voluptatum incidunt non quos dolorum consectetur molestiae eos veniam fuga et dolorem nam unde."
                                }), (0, A.jsx)(S.ZT, {
                                    as: "p",
                                    variant: "body",
                                    css: {
                                        color: "$craterGrey"
                                    },
                                    children: "Porro quasi aut molestiae qui dolores doloremque dolorem blanditiis incidunt repudiandae illum sapiente dolor. Sed totam ex fugit libero exercitationem et pariatur quis sint eveniet voluptatibus aspernatur aspernatur. Provident occaecati dolorem non aut accusamus et quidem laboriosam consequuntur voluptates sed fugit cum recusandae. Quisquam pariatur quo fuga veritatis temporibus ut sed aperiam est perferendis. Quae harum soluta ipsa ut odit sunt omnis rerum."
                                })]
                            })
                        })
                    }
                }),
                eQ = i(87385),
                eS = i.n(eQ);

            function eq(e) {
                let {
                    className: t
                } = e;
                return (0, A.jsx)("div", {
                    className: eS().header,
                    children: (0, A.jsxs)("div", {
                        className: d()(eS().headerBody, t),
                        children: [(0, A.jsxs)(S.ZT, {
                            variant: "body",
                            weight: "bold",
                            className: eS().headerLogo,
                            children: ["", " ", (0, A.jsx)("span", {
                                className: eS().headerLogoText,
                                children: "complete system"
                            })]
                        }), (0, A.jsxs)(S.ZT, {
                            variant: "body",
                            weight: "bold",
                            className: eS().headerMeta,
                            children: ["Includes Ai Pin, Battery Booster, Charge Pad, USB-C\nCable & Adapter + Charge Case & extra Booster", (0, A.jsx)("br", {}), "Along with unlimited Ai queries, unlimited talk, text, data & cloud storage"]
                        })]
                    })
                })
            }
            var eC = i(88013),
                ez = i.n(eC),
                eO = (0, n.forwardRef)((e, t) => {
                    let {
                        children: i,
                        className: a
                    } = e;
                    return (0, A.jsx)("div", {
                        ref: t,
                        className: d()(ez().section, a),
                        children: i
                    })
                }),
                eT = i(63540),
                eL = i(58923),
                eH = i.n(eL),
                eZ = function() {
                    let {
                        addProductToBag: e,
                        isSelectionInTheBag: t,
                        hasAiPinInTheBag: i,
                        selection: a,
                        setSelection: s,
                        bagSkuHistory: r
                    } = (0, n.useContext)(W), [o, l] = (0, n.useState)(!1), d = (0, n.useCallback)(async () => {
                        l(!0);
                        try {
                            await e(), s(a)
                        } finally {
                            l(!1)
                        }
                    }, [e, a, s]), m = (0, n.useMemo)(() => t && r.length > 1 ? "Updated bag" : t ? "Added to bag" : i ? "Update bag" : "Add to bag", [t, r, i]), u = t ? (0, A.jsx)("svg", {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "none",
                        children: (0, A.jsx)("path", {
                            d: "M1 6.35484L4.78882 11L11 1",
                            stroke: "black",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    }) : (0, A.jsx)(K.Ek, {
                        width: 17,
                        height: 20
                    });
                    return (0, A.jsxs)(S.zx, {
                        className: eH().button,
                        type: "button",
                        disabled: t || o,
                        onClick: d,
                        children: [(0, A.jsx)(c.ZT, {
                            variant: "body2",
                            className: eH().buttonLabel,
                            children: m
                        }), (0, A.jsx)(c.ZT, {
                            variant: "body2",
                            className: eH().buttonLabel,
                            children: u
                        })]
                    })
                },
                eF = i(48706),
                eR = i.n(eF),
                eW = function(e) {
                    let {
                        alt: t,
                        src: i
                    } = e;
                    return (0, A.jsx)(h(), {
                        className: eR()["aipin-thumb"],
                        "data-testid": "aipin-thumb",
                        src: i,
                        alt: t,
                        sizes: "64w",
                        loading: "eager"
                    })
                },
                eU = i(86999),
                eG = i.n(eU);

            function eV(e) {
                let {
                    children: t,
                    label: i
                } = e;
                return (0, A.jsx)("div", {
                    className: eG()["picture-radio-group"],
                    role: "radiogroup",
                    "aria-label": i,
                    children: t
                })
            }

            function eK(e) {
                let {
                    checked: t,
                    children: i,
                    label: a,
                    marked: s,
                    onCheck: r,
                    quantity: o,
                    value: l
                } = e, d = (0, n.useCallback)(() => {
                    null == r || r(l)
                }, [r, l]);
                return (0, A.jsxs)("div", {
                    className: eG()["picture-radio"],
                    role: "radio",
                    "aria-checked": t,
                    "aria-label": a,
                    tabIndex: 0,
                    "data-value": l,
                    "data-marked": s && void 0 === o,
                    "data-quantity": o || null,
                    onClick: d,
                    onKeyDown: d,
                    children: [(0, A.jsx)("div", {
                        className: eG()["picture-radio-content"],
                        children: (0, A.jsx)("picture", {
                            children: i
                        })
                    }), (0, A.jsx)("div", {
                        className: eG()["picture-radio-style"]
                    })]
                })
            }
            var eY = i(95326),
                eJ = i.n(eY);

            function eX(e) {
                var t;
                let {
                    data: i,
                    selectedSku: a,
                    addedToBagSku: s,
                    onSelect: r
                } = e, {
                    staticData: o,
                    shopData: l,
                    product: c
                } = (0, n.useMemo)(() => i.find(e => e.staticData.sku === a), [i, a]), {
                    lines: u
                } = (0, Z.Z)(), {
                    hasPurchaseLimit: _
                } = (0, J.Z)(), {
                    isUSCountry: g
                } = (0, y.h)(), p = (0, n.useCallback)(() => g ? _ ? (0, A.jsx)(eZ, {}) : (0, A.jsx)("div", {
                    className: eJ().quantity,
                    children: (0, A.jsx)(b.Z, {
                        product: c,
                        selectedVariant: { ...l,
                            availableForSale: !0
                        },
                        dataTestId: "pdp-add-btn"
                    })
                }) : (0, A.jsx)(S.AN, {
                    className: eJ().notifyButton,
                    href: "/subscribe",
                    children: "Get notified"
                }), [_, g, c, l]);
                return (0, A.jsxs)("div", {
                    className: d()(eJ().item),
                    "data-testid": "pdp-aipin-product-box",
                    children: [(0, A.jsx)(ex, {
                        children: o.images.list.map((e, t) => (0, A.jsx)(ex.Item, {
                            children: (0, A.jsx)(h(), {
                                "data-testid": "aipin-image",
                                src: e,
                                alt: "".concat(null == c ? void 0 : c.title, " ").concat(o.name, " ").concat(t + 1),
                                sizes: "100vh",
                                style: {
                                    width: "auto",
                                    maxHeight: "250px"
                                },
                                loading: "eager"
                            })
                        }, t))
                    }), (0, A.jsx)(eV, {
                        label: "".concat(null == c ? void 0 : c.title, " colors"),
                        children: i.map(e => {
                            var t, i, n;
                            let o = null == u ? void 0 : u.find(t => {
                                    var i, a;
                                    return (null == t ? void 0 : null === (i = t.merchandise) || void 0 === i ? void 0 : i.id) === (null === (a = e.shopData) || void 0 === a ? void 0 : a.id)
                                }),
                                l = null !== (n = null == o ? void 0 : o.quantity) && void 0 !== n ? n : 0;
                            return (0, A.jsx)(eK, {
                                label: "".concat(null === (t = e.product) || void 0 === t ? void 0 : t.title, " ").concat(e.staticData.label),
                                value: e.staticData.sku,
                                checked: e.staticData.sku === a,
                                marked: e.staticData.sku === s,
                                quantity: _ ? void 0 : l,
                                onCheck: () => {
                                    e.staticData.sku !== a && ((0, T.Zt)("humane_shop_select_item", {
                                        items: [{
                                            product: e.product,
                                            variant: e.shopData
                                        }]
                                    }), r(e.staticData.sku))
                                },
                                children: (0, A.jsx)(eW, {
                                    src: e.staticData.images.list[1],
                                    alt: "".concat(null === (i = e.product) || void 0 === i ? void 0 : i.title, " ").concat(e.staticData.label)
                                }, e.staticData.sku)
                            }, e.staticData.sku)
                        })
                    }), (0, A.jsxs)("div", {
                        className: eJ().productInfo,
                        children: [(0, A.jsxs)("div", {
                            className: eJ().productInfoDescription,
                            children: [(0, A.jsx)(S.ZT, {
                                "data-testid": "aipin-product-name",
                                variant: "heading1",
                                weight: "bold",
                                children: (0, A.jsx)("span", {
                                    children: o.name
                                })
                            }), (0, A.jsx)("div", {
                                className: eJ().productInfoDescriptionList,
                                children: null === (t = o.description) || void 0 === t ? void 0 : t.map(e => (0, A.jsx)(S.ZT, {
                                    "data-testid": "aipin-product-description",
                                    className: eJ().productInfoDescriptionListItem,
                                    variant: "body",
                                    children: e
                                }, e))
                            })]
                        }), (0, A.jsxs)("div", {
                            className: eJ().productInfoDetails,
                            children: [(0, A.jsxs)("div", {
                                className: eJ().productInfoDetailsPrice,
                                children: [(0, A.jsx)(S.ZT, {
                                    variant: "heading1",
                                    weight: "bold",
                                    children: (null == l ? void 0 : l.price) && (0, A.jsx)(m.W, {
                                        as: "span",
                                        data: l.price,
                                        "data-testid": "aipin-price-tag",
                                        withoutTrailingZeros: !0
                                    })
                                }), p()]
                            }), g && o.paymentDisclaimer && (0, A.jsx)(S.ZT, {
                                variant: "body",
                                className: eJ().productInfoDetailsDelivery,
                                children: "At this time, only one device can be tied to a subscription and account."
                            }), g && o.deliveryNote ? (0, A.jsxs)(S.ZT, {
                                "data-testid": "aipin-delivery-note",
                                variant: "body",
                                className: eJ().productInfoDetailsDelivery,
                                children: [o.paymentDisclaimer, (0, A.jsx)("br", {}), o.deliveryNote, o.shippingNotes ? (0, A.jsxs)(A.Fragment, {
                                    children: [(0, A.jsx)("br", {}), o.shippingNotes]
                                }) : null]
                            }) : (0, A.jsx)(S.ZT, {
                                className: eJ().productInfoDetailsDelivery,
                                children: "Shipping limited to US only"
                            })]
                        })]
                    })]
                })
            }

            function e$(e) {
                let {
                    mergedProductData: t,
                    selectedSku: i,
                    addedToBagSku: a,
                    onSelect: s
                } = e;
                return (0, A.jsx)("div", {
                    className: eJ().root,
                    "data-id": "pdp-aipin-picker",
                    "data-testid": "pdp-aipin-picker",
                    children: (0, A.jsx)("div", {
                        className: d()(eJ().items),
                        children: (0, A.jsx)(eX, {
                            data: t,
                            selectedSku: i,
                            addedToBagSku: a,
                            onSelect: s
                        })
                    })
                })
            }
            var e0 = i(34383),
                e1 = i(77300),
                e7 = i.n(e1);

            function e2(e) {
                let {
                    images: t,
                    index: i,
                    onNextClick: a,
                    onPrevClick: s,
                    onIndexChange: o
                } = e, l = (0, n.useRef)(), [c, m] = (0, n.useState)(!1), [u, _] = (0, n.useState)(!1), g = (0, n.useCallback)(e => {
                    l.current && l.current.jumpTo(e)
                }, []);
                return (0, n.useEffect)(() => {
                    g(i), m(0 === i), _(i === t.length - 1)
                }, [g, t.length, i]), (0, A.jsxs)("div", {
                    className: e7().imageGallery,
                    "data-testid": "aipin-images-section",
                    children: [(0, A.jsxs)("div", {
                        className: e7().desktopNavigation,
                        children: [(0, A.jsx)("button", {
                            type: "button",
                            className: d()({
                                [e7().hidden]: c
                            }),
                            "aria-label": "previousGallery",
                            onClick: s,
                            children: (0, A.jsx)(K.tP, {
                                className: d()(e7().arrow, e7().arrowLeft)
                            })
                        }), (0, A.jsx)("button", {
                            type: "button",
                            className: d()({
                                [e7().hidden]: u
                            }),
                            "aria-label": "advanceGallery",
                            onClick: a,
                            children: (0, A.jsx)(K.tP, {
                                className: d()(e7().arrow, e7().arrowRight)
                            })
                        })]
                    }), (0, A.jsx)(e0.Z, {
                        ref: l,
                        className: e7().navigation,
                        itemsNumber: t.length,
                        threshold: 300,
                        axis: "x",
                        dotsInteractive: !0,
                        onChange: o,
                        children: e => {
                            let {
                                springs: i,
                                axis: a
                            } = e;
                            return (0, A.jsxs)(A.Fragment, {
                                children: [i.map((e, i) => {
                                    let {
                                        position: s
                                    } = e;
                                    return (0, A.jsx)(r.q.div, {
                                        className: e7().item,
                                        style: {
                                            [a]: s.to([-1.1, -1, 0, 1, 1.1], ["100%", "100%", "0.0001%", "-100%", "-100%"]),
                                            display: s.to(e => Math.abs(e) >= 2 ? "none" : "")
                                        },
                                        children: (0, A.jsx)(h(), {
                                            "data-testid": "aipin-image",
                                            className: e7().image,
                                            src: t[i],
                                            alt: "Product image",
                                            sizes: "100vh",
                                            style: {
                                                width: "100%",
                                                height: "auto"
                                            },
                                            loading: "eager"
                                        }, i)
                                    }, i)
                                }), (0, A.jsx)(e0.Z.Dots, {
                                    className: e7().dots,
                                    color: "black"
                                })]
                            })
                        }
                    })]
                })
            }
            var e8 = i(39357),
                e6 = i(6986),
                e3 = i.n(e6);

            function e5(e) {
                var t;
                let {
                    data: i,
                    selectedSku: a,
                    onSelect: s,
                    imageIndex: r,
                    setImageIndex: o
                } = e, {
                    staticData: l,
                    shopData: c,
                    product: u
                } = i, h = a === l.sku, _ = (0, x.Z)(e8.t$, !0), {
                    isUSCountry: g
                } = (0, y.h)(), p = (0, n.useCallback)(() => {
                    (0, T.Zt)("humane_shop_select_item", {
                        items: [{
                            product: u,
                            variant: c
                        }]
                    }), s(l.sku)
                }, [s, u, c, l.sku]), {
                    hasPurchaseLimit: f
                } = (0, J.Z)();
                return (0, A.jsxs)("div", {
                    className: d()(e3().item),
                    "data-testid": "pdp-aipin-product-box",
                    children: [(0, A.jsx)(e2, {
                        images: l.images.list,
                        index: r,
                        onPrevClick: () => o(r > 0 ? r - 1 : r),
                        onNextClick: () => o(r < l.images.list.length - 1 ? r + 1 : r),
                        onIndexChange: e => _ && o(e)
                    }), (0, A.jsxs)("div", {
                        className: e3().productInfo,
                        children: [(0, A.jsxs)("div", {
                            className: e3().productInfoDescription,
                            children: [(0, A.jsx)(S.ZT, {
                                "data-testid": "aipin-product-name",
                                variant: "body",
                                weight: "bold",
                                children: (0, A.jsx)("span", {
                                    children: l.name
                                })
                            }), (0, A.jsx)("div", {
                                className: e3().productInfoDescriptionList,
                                children: null === (t = l.description) || void 0 === t ? void 0 : t.map(e => (0, A.jsx)(S.ZT, {
                                    "data-testid": "aipin-product-description",
                                    className: e3().productInfoDescriptionListItem,
                                    variant: "body",
                                    children: e
                                }, e))
                            })]
                        }), (0, A.jsxs)("div", {
                            className: e3().productInfoDetails,
                            children: [(0, A.jsxs)("div", {
                                className: e3().productInfoDetailsPrice,
                                children: [(0, A.jsx)(S.ZT, {
                                    variant: "body",
                                    weight: "bold",
                                    children: (null == c ? void 0 : c.price) && (0, A.jsx)(m.W, {
                                        as: "span",
                                        data: c.price,
                                        "data-testid": "aipin-price-tag",
                                        withoutTrailingZeros: !0
                                    })
                                }), f ? (0, A.jsx)(S.zx, {
                                    "data-testid": "aipin-select-button",
                                    buttonStyle: h ? "primary" : "secondary",
                                    size: "small",
                                    className: d()(e3().productInfoDetailsPriceSelect, h && e3().productInfoDetailsPriceSelectActive),
                                    onClick: p,
                                    children: h ? "Selected" : "Select"
                                }) : (0, A.jsx)("div", {
                                    className: e3().quantity,
                                    children: (0, A.jsx)(b.Z, {
                                        product: u,
                                        selectedVariant: { ...c,
                                            availableForSale: !0
                                        },
                                        dataTestId: "pdp-add-btn"
                                    })
                                })]
                            }), g && l.paymentDisclaimer && (0, A.jsx)(S.ZT, {
                                variant: "bodyXs",
                                className: e3().productInfoDetailsDelivery,
                                children: l.paymentDisclaimer
                            }), g && l.deliveryNote && (0, A.jsx)(S.ZT, {
                                "data-testid": "aipin-delivery-note",
                                variant: "bodyXs",
                                className: e3().productInfoDetailsDelivery,
                                children: l.deliveryNote
                            }), g && l.shippingNotes && (0, A.jsx)(S.ZT, {
                                "data-testid": "aipin-delivery-note",
                                variant: "bodyXs",
                                className: e3().productInfoDetailsDelivery,
                                children: l.shippingNotes
                            })]
                        }), !g && (0, A.jsx)(S.ZT, {
                            variant: "bodyXs",
                            className: d()(e3().productInfoDetailsDelivery, e3().productInfoDetailsDeliveryUSOnly),
                            children: "Shipping limited to US only"
                        })]
                    })]
                })
            }

            function e4(e) {
                let {
                    mergedProductData: t,
                    selectedSku: i,
                    onSelect: a
                } = e, [s, r] = (0, n.useState)(0);
                return (0, A.jsx)("div", {
                    className: e3().root,
                    "data-id": "pdp-aipin-picker",
                    "data-testid": "pdp-aipin-picker",
                    children: (0, A.jsx)("div", {
                        className: d()(e3().items),
                        children: t.map(e => (0, A.jsx)(e5, {
                            imageIndex: s,
                            setImageIndex: r,
                            data: e,
                            selectedSku: i,
                            onSelect: a
                        }, e.staticData.name))
                    })
                })
            }
            var e9 = i(84072),
                te = i.n(e9);

            function tt(e) {
                var t, i;
                let {
                    aipinProduct: a,
                    variants: s
                } = e, {
                    selection: r,
                    setSelection: o,
                    setSelectionSku: l,
                    initialSelectionFromCart: d,
                    setInitialSelectionFromCart: c
                } = (0, n.useContext)(W), {
                    lines: m,
                    status: u
                } = (0, q.jD)(), h = (0, n.useCallback)(e => {
                    l((null == r ? void 0 : r.sku) === e ? null : e)
                }, [a.variants.nodes, r, o]), _ = (0, n.useMemo)(() => {
                    var e;
                    let t = null == m ? void 0 : m.find(e => {
                        var t, i;
                        return a.id === (null == e ? void 0 : null === (i = e.merchandise) || void 0 === i ? void 0 : null === (t = i.product) || void 0 === t ? void 0 : t.id)
                    });
                    return t ? { ...t,
                        merchandise: { ...null == t ? void 0 : t.merchandise,
                            sku: null === (e = s.find(e => {
                                var i;
                                return e.id === (null == t ? void 0 : null === (i = t.merchandise) || void 0 === i ? void 0 : i.id)
                            })) || void 0 === e ? void 0 : e.sku
                        }
                    } : void 0
                }, [m]);
                (0, n.useEffect)(() => {
                    if (!d && "idle" === u && _) {
                        var e;
                        let t = null === (e = s.find(e => {
                            var t;
                            return e.id === (null === (t = _.merchandise) || void 0 === t ? void 0 : t.id)
                        })) || void 0 === e ? void 0 : e.sku;
                        t && h(t), c(!0)
                    }
                }, [_, d, c, h, u, s]),
                function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        i = (0, x.Z)("(min-width: 67em)", !1),
                        {
                            effectCallback: a,
                            effectDeps: s
                        } = (0, n.useMemo)(() => ({
                            effectCallback: () => {
                                i || e()
                            },
                            effectDeps: [e, ...t]
                        }), [i, e, t]);
                    (0, n.useEffect)(a, s)
                }(() => {
                    r || l(s.find(e => "eclipse" === e.title.toLowerCase()).sku)
                }, [r, s]);
                let g = (0, n.useMemo)(() => I.default.products.map(e => ({
                    staticData: e,
                    shopData: a.variants.nodes.find(t => t.sku === e.sku),
                    product: a
                })), [a]);
                return (0, A.jsx)("div", {
                    className: te().root,
                    children: (0, A.jsxs)(eO, {
                        children: [(0, A.jsx)(v, {
                            desktop: !0,
                            children: (0, A.jsx)(e4, {
                                mergedProductData: g,
                                selectedSku: null == r ? void 0 : r.sku,
                                onSelect: h
                            })
                        }), (0, A.jsx)(v, {
                            mobile: !0,
                            children: (0, A.jsx)(e$, {
                                mergedProductData: g,
                                selectedSku: null !== (i = null == r ? void 0 : r.sku) && void 0 !== i ? i : g[0].staticData.sku,
                                addedToBagSku: null == _ ? void 0 : null === (t = _.merchandise) || void 0 === t ? void 0 : t.sku,
                                onSelect: l
                            })
                        })]
                    })
                })
            }
            eO.Product = function(e) {
                let {
                    orderedSku: t,
                    ...i
                } = e;
                return (0, A.jsxs)(A.Fragment, {
                    children: [!t && (0, A.jsx)(eq, {}), (0, A.jsx)(eT.Z, {
                        variant: "shop"
                    }), (0, A.jsx)(tt, { ...i
                    }), (0, A.jsxs)(ek, {
                        children: [(0, A.jsx)(ek.CompleteSystem, {}), (0, A.jsx)(ek.Subscription, {}), (0, A.jsx)(ek.Faq, {}), (0, A.jsx)(N.Z, {
                            type: "h4"
                        })]
                    })]
                })
            };
            var ti = (0, n.memo)(function(e) {
                    let {
                        aipinProduct: t,
                        variants: i,
                        orderedSku: a
                    } = e;
                    return (0, A.jsxs)(A.Fragment, {
                        children: [(0, A.jsx)(ee, {}), (0, A.jsx)(eO.Product, {
                            aipinProduct: t,
                            variants: i,
                            orderedSku: a
                        })]
                    })
                }),
                ta = i(41940),
                ts = i(74707),
                tA = i(17744),
                tn = i(90906),
                tr = i(5394),
                to = {
                    src: "/_next/static/media/cover.cc9ebea5.jpg",
                    height: 1120,
                    width: 2880,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAADAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGXB//EABYQAAMAAAAAAAAAAAAAAAAAAAERE//aAAgBAQABBQJCX//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABUQAQEAAAAAAAAAAAAAAAAAAACB/9oACAEBAAY/Aq//xAAWEAEBAQAAAAAAAAAAAAAAAAABEQD/2gAIAQEAAT8ho2FDN//aAAwDAQACAAMAAAAQA//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABkQAQEAAwEAAAAAAAAAAAAAAAERACExcf/aAAgBAQABPxAYpIpuI33hn//Z",
                    blurWidth: 8,
                    blurHeight: 3
                },
                tl = i(49983),
                td = i.n(tl);
            let tc = tr.z.object({
                    name: tr.z.string().min(1),
                    email: tr.z.string().email(),
                    emailConfirmation: tr.z.string().email(),
                    message: tr.z.string().max(200).optional(),
                    sendOn: tr.z.string().optional()
                }).refine(e => e.email === e.emailConfirmation, {
                    message: "Emails must match.",
                    path: ["emailConfirmation"]
                }),
                tm = (0, tA.WU)(new Date, "yyyy-MM-dd");

            function tu() {
                var e, t, i, a, s;
                let [r, l] = (0, n.useState)(!1), [c, m] = (0, n.useState)(!1), {
                    product: u,
                    options: _,
                    setSelectedOption: g,
                    selectedOptions: p,
                    selectedVariant: x
                } = (0, o.i)(), {
                    register: v,
                    handleSubmit: y,
                    formState: {
                        errors: b,
                        isValid: w
                    }
                } = (0, tn.cI)({
                    defaultValues: {},
                    resolver: (0, ts.F)(tc),
                    mode: "onBlur"
                }), {
                    startCartMutation: j,
                    lines: B
                } = (0, Z.Z)(), D = !!(null == B ? void 0 : B.find(e => {
                    var t, i;
                    return (null == e ? void 0 : null === (i = e.merchandise) || void 0 === i ? void 0 : null === (t = i.product) || void 0 === t ? void 0 : t.handle) === f.oc.giftCard
                })), I = null == _ ? void 0 : _.filter(e => ["Title"].includes(null == e ? void 0 : e.name));
                if (!(null == u ? void 0 : u.isGiftCard)) return console.error("Provided product is not a gift card!"), null;
                let E = async e => {
                    var t, i;
                    let a = [{
                        key: "Recipient email",
                        value: e.email
                    }, {
                        key: "Recipient name",
                        value: e.name
                    }, {
                        key: "__shopify_send_gift_card_to_recipient",
                        value: "true"
                    }];
                    if (e.message && a.push({
                            key: "Message",
                            value: null !== (t = e.message) && void 0 !== t ? t : ""
                        }), c && e.sendOn && a.push({
                            key: "Send on",
                            value: null !== (i = e.sendOn) && void 0 !== i ? i : ""
                        }), (null == x ? void 0 : x.id) && !r) try {
                        l(!0), await j(async e => {
                            let {
                                linesAdd: t
                            } = e;
                            t([{
                                merchandiseId: x.id,
                                attributes: a
                            }]), (0, T.Zt)("humane_shop_add_to_cart", {
                                items: [{
                                    product: u,
                                    variant: x
                                }]
                            })
                        })
                    } finally {
                        l(!1)
                    }
                };
                return (0, A.jsxs)("div", {
                    className: td().root,
                    children: [(0, A.jsx)("div", {
                        className: td().headerImage,
                        children: (0, A.jsx)(h(), {
                            src: to,
                            alt: "Cover image",
                            fill: !0
                        })
                    }), (0, A.jsxs)("div", {
                        className: td().main,
                        children: [(0, A.jsxs)("div", {
                            className: td().headerCopy,
                            children: [(0, A.jsx)(S.ZT, {
                                variant: "heading1",
                                as: "h1",
                                children: "Give the gift of choice and let them pick their style."
                            }), (0, A.jsx)(S.ZT, {
                                variant: "body",
                                as: "p",
                                children: "Choose any amount between $25 and $799, let us know who it’s for, and when they should receive it. Note that gift cards won’t work for the Humane Subscription."
                            })]
                        }), (0, A.jsxs)("div", {
                            className: td().price,
                            children: [(0, A.jsx)(S.ZT, {
                                variant: "heading2",
                                as: "h2",
                                children: "Price"
                            }), (0, A.jsx)("div", {
                                className: td().priceOptions,
                                children: null == I ? void 0 : I.map(e => {
                                    var t;
                                    return (0, A.jsx)(n.Fragment, {
                                        children: null == e ? void 0 : null === (t = e.values) || void 0 === t ? void 0 : t.map(t => (0, A.jsx)("button", {
                                            "data-testid": "gift-value-button",
                                            type: "button",
                                            style: {
                                                display: "block"
                                            },
                                            className: d()(td().priceOptionsItem, (null == p ? void 0 : p[e.name]) === t && td().priceOptionsItemActive),
                                            onClick: () => {
                                                var i, a;
                                                g(e.name, t), (0, T.Zt)("humane_shop_select_item", {
                                                    items: [{
                                                        product: u,
                                                        variant: null === (a = u.variants) || void 0 === a ? void 0 : null === (i = a.nodes) || void 0 === i ? void 0 : i.find(e => (null == e ? void 0 : e.title) === t)
                                                    }]
                                                })
                                            },
                                            children: (0, A.jsx)(S.ZT, {
                                                style: {
                                                    fontWeight: 500
                                                },
                                                children: t
                                            })
                                        }, t))
                                    }, null == e ? void 0 : e.name)
                                })
                            })]
                        }), (0, A.jsxs)("form", {
                            className: td().form,
                            onSubmit: y(E),
                            children: [(0, A.jsxs)("div", {
                                children: [(0, A.jsx)(S.ZT, {
                                    variant: "heading2",
                                    as: "h2",
                                    className: td().formHeading,
                                    children: "Recipient"
                                }), (0, A.jsx)(S.oi, {
                                    label: "Enter recipient's name*",
                                    "data-testid": "gifts-recipient-name",
                                    type: "text",
                                    ...v("name"),
                                    errorMessage: null == b ? void 0 : null === (e = b.name) || void 0 === e ? void 0 : e.message
                                }), (0, A.jsx)(S.oi, {
                                    label: "Enter recipient's email address*",
                                    "data-testid": "gifts-recipient-email",
                                    type: "email",
                                    ...v("email"),
                                    errorMessage: null == b ? void 0 : null === (t = b.email) || void 0 === t ? void 0 : t.message
                                }), (0, A.jsx)(S.oi, {
                                    label: "Re-enter recipient's email address*",
                                    "data-testid": "gifts-recipient-email-repeat",
                                    type: "text",
                                    ...v("emailConfirmation"),
                                    errorMessage: null == b ? void 0 : null === (i = b.emailConfirmation) || void 0 === i ? void 0 : i.message
                                })]
                            }), (0, A.jsxs)("div", {
                                children: [(0, A.jsx)(S.ZT, {
                                    variant: "heading2",
                                    as: "h2",
                                    className: td().formHeading,
                                    children: "Delivery time"
                                }), (0, A.jsxs)("div", {
                                    className: td().deliveryTime,
                                    children: [(0, A.jsxs)("div", {
                                        className: td().deliveryTimePicker,
                                        children: [(0, A.jsxs)("label", {
                                            htmlFor: "sendInstantly",
                                            "data-testid": "gifts-send-instantly",
                                            className: d()(td().deliveryTimeItem, !c && td().deliveryTimeItemActive),
                                            children: [(0, A.jsx)("input", {
                                                id: "sendInstantly",
                                                type: "checkbox",
                                                checked: !c,
                                                onClick: () => m(!1)
                                            }), c ? (0, A.jsx)(K.HK, {}) : (0, A.jsx)(K.fU, {}), (0, A.jsx)(S.ZT, {
                                                children: "Send instantly"
                                            })]
                                        }), (0, A.jsxs)("label", {
                                            htmlFor: "sendAtTime",
                                            "data-testid": "gifts-send-on-future-date",
                                            className: d()(td().deliveryTimeItem, c && td().deliveryTimeItemActive),
                                            children: [(0, A.jsx)("input", {
                                                id: "sendAtTime",
                                                type: "checkbox",
                                                checked: c,
                                                onClick: () => m(!0)
                                            }), c ? (0, A.jsx)(K.fU, {}) : (0, A.jsx)(K.HK, {}), (0, A.jsx)(S.ZT, {
                                                children: "Send on a future date"
                                            })]
                                        })]
                                    }), c && (0, A.jsx)(S.oi, {
                                        label: "",
                                        "data-testid": "gifts-send-on-future-date-date-picker",
                                        type: "date",
                                        min: tm,
                                        ...v("sendOn"),
                                        errorMessage: null == b ? void 0 : null === (a = b.sendOn) || void 0 === a ? void 0 : a.message
                                    })]
                                })]
                            }), (0, A.jsxs)("div", {
                                children: [(0, A.jsx)(S.ZT, {
                                    variant: "heading2",
                                    as: "h2",
                                    className: td().formHeading,
                                    style: {
                                        marginBottom: "14px"
                                    },
                                    children: "Write a message"
                                }), (0, A.jsx)(S.ZT, {
                                    variant: "body",
                                    as: "p",
                                    className: td().formHeading,
                                    style: {
                                        color: "#A9ABAB"
                                    },
                                    children: "Optional"
                                }), (0, A.jsx)(S.Kx, {
                                    label: "Your message",
                                    "data-testid": "optional-message-textarea",
                                    rows: 4,
                                    style: {
                                        resize: "none"
                                    },
                                    ...v("message"),
                                    errorMessage: null == b ? void 0 : null === (s = b.message) || void 0 === s ? void 0 : s.message
                                }), (0, A.jsx)(S.ZT, {
                                    style: {
                                        color: "#727679"
                                    },
                                    variant: "bodySm",
                                    as: "p",
                                    children: "200 characters maximum"
                                })]
                            }), (0, A.jsxs)(S.zx, {
                                type: "submit",
                                disabled: !w || r,
                                "data-testid": "gifts-add-to-bag-button",
                                className: td().submitButton,
                                children: [D ? "Added to bag" : "Add to bag", " ", (0, A.jsx)(K.Ek, {
                                    width: 17,
                                    height: 20
                                })]
                            })]
                        }), (0, A.jsxs)(S.ZT, {
                            as: "p",
                            style: {
                                color: "#505355",
                                fontVariantLigatures: "none"
                            },
                            variant: "bodySm",
                            children: ["If you’re looking for corporate gifts or bulk orders,", " ", (0, A.jsx)("a", {
                                href: "https://uercvbq7i8l.typeform.com/to/MP2PwPng",
                                "data-testid": "gifts-bulk-orders-links",
                                target: "_blank",
                                style: {
                                    textDecoration: "underline"
                                },
                                children: "click here"
                            })]
                        })]
                    }), (0, A.jsx)("div", {
                        style: {
                            backgroundColor: "#f4f6f6",
                            padding: "80px 24px 80px 24px"
                        },
                        children: (0, A.jsxs)(S.ZT, {
                            as: "p",
                            style: {
                                color: "#505355",
                                fontVariantLigatures: "none",
                                maxWidth: "900px",
                                textAlign: "left",
                                marginRight: "auto",
                                marginLeft: "auto",
                                backgroundColor: "#f4f6f6",
                                fontSize: "12px"
                            },
                            variant: "bodySm",
                            children: ["By purchasing or using this gift card, you accept the following terms and conditions: Gift cards can be redeemed on the Humane website for merchandise, in the US only. Gift cards cannot be used towards the purchase of the Humane Network subscription, which is required for use of Ai Pin. Gift cards cannot be refunded, returned or redeemed for cash (unless required by law). Providing a secondary payment method is required to redeem gift card. Gift Cards can only be redeemed once. Gift cards can only be applied to new orders. Humane is not responsible for lost or stolen gift cards. If you need assistance please contact", " ", (0, A.jsx)("a", {
                                href: "/support",
                                target: "_blank",
                                style: {
                                    textDecoration: "underline"
                                },
                                children: "Humane support."
                            })]
                        })
                    })]
                })
            }
            var th = i(35209),
                t_ = i(13691),
                tg = i(10374),
                tp = i.n(tg);

            function tf(e) {
                let {
                    items: t,
                    activeItem: i,
                    setActiveItem: a
                } = e;
                return (0, A.jsx)("div", {
                    className: tp().tabSwitcher,
                    children: (0, A.jsx)("div", {
                        className: tp().tabSwitcherInner,
                        children: t.map(e => {
                            let {
                                label: t,
                                value: s
                            } = e;
                            return (0, A.jsx)("button", {
                                type: "button",
                                className: d()(tp().tabSwitcherButton, i === s && tp().tabSwitcherButtonActive),
                                onClick: () => a(s),
                                children: (0, A.jsx)(S.ZT, {
                                    as: "span",
                                    variant: "body",
                                    children: t
                                })
                            }, s)
                        })
                    })
                })
            }
            var tx = i(13619),
                tv = i(76187),
                ty = i.n(tv);
            let tb = {
                aipin: "/shop",
                accessories: "/shop/accessories",
                gifts: "/shop/gifts"
            };
            var tw = !0,
                tj = (0, n.forwardRef)(function(e, t) {
                    let {
                        className: i,
                        style: a,
                        aipinProduct: s,
                        accessories: l,
                        tab: c,
                        variants: m,
                        giftCardProduct: u,
                        shopEdgeConfig: h
                    } = e, _ = (0, n.useRef)();
                    (0, n.useImperativeHandle)(t, () => _.current);
                    let [g, p] = (0, n.useState)(c), {
                        isUSCountry: f
                    } = (0, y.h)(), x = (0, n.useCallback)(() => {
                        if (_.current) {
                            let e = document.querySelector('[data-id="pdp-aipin-picker"]');
                            if (e) {
                                let {
                                    bottom: t
                                } = e.getBoundingClientRect();
                                _.current.classList.toggle(ty().scrolled, t < 72)
                            }
                        }
                    }, []), v = (0, n.useCallback)(() => {
                        var e;
                        null === (e = _.current) || void 0 === e || e.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    }, []), b = e => {
                        window.history.replaceState({ ...window.history.state,
                            as: tb[e],
                            url: tb[e]
                        }, "", tb[e]), p(e), v()
                    }, w = (0, t_.X0)();
                    (0, t_.uK)(e => {
                        var t;
                        null === (t = _.current) || void 0 === t || t.jumpTo(e)
                    }), (0, tx.Z)(() => {
                        _.current && w(_.current.scrollTop)
                    });
                    let j = (0, r.Yz)(g, {
                            from: {
                                opacity: 0
                            },
                            enter: {
                                opacity: 1
                            },
                            leave: {
                                opacity: 0
                            },
                            exitBeforeEnter: !0,
                            config: { ...r.vc.stiff,
                                duration: 150
                            }
                        }),
                        B = (0, n.useRef)("");
                    return (0, n.useEffect)(() => {
                        B.current !== g && ("accessories" === g ? (0, T.Zt)("humane_shop_view_item_list", {
                            listId: String(g).replaceAll(" ", "_").toLowerCase(),
                            listName: String(g).replace(/\b\w/g, e => e.toUpperCase()),
                            items: l.slice(1, l.length).map(e => ({
                                product: e,
                                variant: e.variants.nodes[0]
                            }))
                        }) : (0, T.Zt)("humane_shop_view_item", {
                            items: "aipin" === g ? m.map(e => ({
                                product: s,
                                variant: e
                            })) : u.variants.nodes.map(e => ({
                                product: u,
                                variant: e
                            }))
                        }), B.current = g)
                    }, [g, l, u, s, m]), (0, A.jsxs)(th.Z, {
                        ref: _,
                        className: d()(ty().main, i),
                        style: a,
                        onScroll: x,
                        children: [(0, A.jsx)(H, {
                            value: h,
                            children: (0, A.jsxs)(U, {
                                variants: m,
                                product: s,
                                children: [(0, A.jsx)(tf, {
                                    items: f ? [{
                                        label: "Ai Pin",
                                        value: "aipin"
                                    }, {
                                        label: "Accessories",
                                        value: "accessories"
                                    }, {
                                        label: "Gifts",
                                        value: "gifts"
                                    }] : [{
                                        label: "Ai Pin",
                                        value: "aipin"
                                    }, {
                                        label: "Accessories",
                                        value: "accessories"
                                    }],
                                    activeItem: g,
                                    setActiveItem: e => b(e)
                                }), j((e, t) => {
                                    let i = null;
                                    return "aipin" === t && (i = (0, A.jsx)(ti, {
                                        aipinProduct: s,
                                        variants: m
                                    })), "accessories" === t && (i = (0, A.jsx)(Q, {
                                        accessories: l
                                    })), "gifts" === t && (i = (0, A.jsx)(o.G, {
                                        data: u,
                                        children: (0, A.jsx)(tu, {})
                                    })), (0, A.jsxs)(r.q.div, {
                                        style: e,
                                        children: [i, (0, A.jsx)(ta.Z, {})]
                                    })
                                })]
                            })
                        }), (0, A.jsx)(th.Z.Scrollbar, {
                            color: "black"
                        })]
                    })
                })
        },
        71130: function(e) {
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
                heroImage: "styles_heroImage__r3btA",
                accessoriesItem: "styles_accessoriesItem__NBAqc",
                protect: "styles_protect__pdXK2",
                imageContainer: "styles_imageContainer__1KKyR",
                accessoryInfoWrapper: "styles_accessoryInfoWrapper__Vv_CE",
                accessoryInfoWrapperProtect: "styles_accessoryInfoWrapperProtect__mSqPR",
                accessoryInfo: "styles_accessoryInfo__WWMZz",
                name: "styles_name__XgkO0",
                shield: "styles_shield__gNacV",
                price: "styles_price__ooGJu",
                shopBtn: "styles_shopBtn__c_qyr",
                outOfStock: "styles_outOfStock__tcHGF",
                protectItem: "styles_protectItem__r0dvu",
                protectImageContainer: "styles_protectImageContainer__1S0K_",
                shopButton: "styles_shopButton__NlCd_",
                quantity: "styles_quantity__5fSxj"
            }
        },
        47873: function(e) {
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
                accessoriesWallLayout: "styles_accessoriesWallLayout__5w_fT",
                content: "styles_content__7pxoM",
                fullWidth: "styles_fullWidth__XexdR",
                accessoriesGrid: "styles_accessoriesGrid__gCHNA",
                faqWrapper: "styles_faqWrapper__yA_FZ"
            }
        },
        58923: function(e) {
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
                button: "style_button___8jdw",
                buttonLabel: "style_buttonLabel__mPHcS",
                checkoutCta: "style_checkoutCta__By6fk"
            }
        },
        81794: function(e) {
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
                root: "style_root__iMiyC",
                boxItem: "style_boxItem___DORw",
                boxItemAlt: "style_boxItemAlt__R09BI",
                boxItemProduct: "style_boxItemProduct__i6YaM",
                boxItemProductImage: "style_boxItemProductImage__a7c1z",
                boxItemProductInfo: "style_boxItemProductInfo__wS41Q",
                boxItemDecorativeImg: "style_boxItemDecorativeImg__0m06v",
                faq: "style_faq__N830w",
                faqSection: "style_faqSection__bN31u",
                faqItemTypography: "style_faqItemTypography__lB71U",
                legalFootnotes: "style_legalFootnotes__O1sJm",
                legalFootnotesContent: "style_legalFootnotesContent__3eQez"
            }
        },
        87385: function(e) {
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
                header: "style_header__NkW_W",
                headerBody: "style_headerBody__6bKXp",
                headerLogo: "style_headerLogo__mgfqc",
                headerLogoText: "style_headerLogoText__29DRa",
                headerMeta: "style_headerMeta__6dPTO"
            }
        },
        482: function(e) {
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
                navigation: "style_navigation__R0MY1",
                navigationBody: "style_navigationBody__JqrfS",
                button: "style_button__yjnjQ",
                buttonLabel: "style_buttonLabel__9S8_F",
                checkoutCta: "style_checkoutCta__1OWFw"
            }
        },
        48706: function(e) {
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
                "aipin-thumb": "style_aipin-thumb__au5vb"
            }
        },
        86999: function(e) {
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
                "picture-radio-group": "style_picture-radio-group__H7zer",
                "picture-radio": "style_picture-radio__kgCLd",
                "picture-radio-content": "style_picture-radio-content__P46f7",
                "picture-radio-style": "style_picture-radio-style__2MYwT"
            }
        },
        95326: function(e) {
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
                root: "style_root__RKpJZ",
                items: "style_items__EE2A_",
                item: "style_item__CWHGb",
                productInfo: "style_productInfo__Q8vmz",
                productInfoDescription: "style_productInfoDescription__ewXfR",
                productInfoDescriptionList: "style_productInfoDescriptionList__0hm44",
                productInfoDescriptionListItem: "style_productInfoDescriptionListItem__Q84U8",
                productInfoDetails: "style_productInfoDetails__L_lOw",
                productInfoDetailsPrice: "style_productInfoDetailsPrice__a66Zf",
                productInfoDetailsPriceSelect: "style_productInfoDetailsPriceSelect__lJNun",
                productInfoDetailsPriceSelectActive: "style_productInfoDetailsPriceSelectActive__uVGVT",
                productInfoDetailsDelivery: "style_productInfoDetailsDelivery__yMIg_",
                notifyButton: "style_notifyButton__Or2ck"
            }
        },
        77300: function(e) {
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
                imageGallery: "style_imageGallery__nMQ40",
                navigation: "style_navigation___9oLZ",
                item: "style_item__I9yHK",
                dots: "style_dots__AT2nh",
                image: "style_image__Akn6S",
                desktopNavigation: "style_desktopNavigation__Dx4Jp",
                arrow: "style_arrow__b_e8d",
                arrowRight: "style_arrowRight__1b8jg",
                hidden: "style_hidden__lWpVn"
            }
        },
        6986: function(e) {
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
                root: "style_root__frSJa",
                items: "style_items__GTYmS",
                item: "style_item__pbXCH",
                productInfo: "style_productInfo__EgV1K",
                productInfoDescription: "style_productInfoDescription__Tf4ot",
                productInfoDescriptionList: "style_productInfoDescriptionList__TQB02",
                productInfoDescriptionListItem: "style_productInfoDescriptionListItem__gz2lH",
                productInfoDetails: "style_productInfoDetails__SBgp3",
                productInfoDetailsPrice: "style_productInfoDetailsPrice__rzGck",
                productInfoDetailsPriceSelect: "style_productInfoDetailsPriceSelect__8FIgb",
                productInfoDetailsPriceSelectActive: "style_productInfoDetailsPriceSelectActive__ZrPv5",
                productInfoDetailsDelivery: "style_productInfoDetailsDelivery__fMN7x",
                quantity: "style_quantity__LoZok"
            }
        },
        84072: function(e) {
            e.exports = {
                root: "styles_root__Laf5q"
            }
        },
        88013: function(e) {
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
                section: "style_section__xuuOZ"
            }
        },
        8036: function(e) {
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
                summary: "style_summary__lfn1G",
                body: "style_body__HR2le",
                thumbnail: "style_thumbnail__myhPc",
                productName: "style_productName__Fx8NH",
                panePrice: "style_panePrice__PNKPN"
            }
        },
        49983: function(e) {
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
                root: "style_root__Lk8WG",
                headerImage: "style_headerImage__8gIz9",
                main: "style_main__IxJ3e",
                headerCopy: "style_headerCopy__BMjYK",
                price: "style_price__YxTrf",
                priceOptions: "style_priceOptions__vtsim",
                priceOptionsItem: "style_priceOptionsItem__7Rsei",
                priceOptionsItemActive: "style_priceOptionsItemActive__LSS_8",
                form: "style_form__KPsq5",
                formHeading: "style_formHeading__MtD9C",
                deliveryTime: "style_deliveryTime__2ZpPy",
                deliveryTimePicker: "style_deliveryTimePicker__l5ip1",
                deliveryTimeItem: "style_deliveryTimeItem__y6a6M",
                deliveryTimeItemActive: "style_deliveryTimeItemActive__A_4BF",
                submitButton: "style_submitButton__7saPW"
            }
        },
        71792: function(e) {
            e.exports = {
                carousel: "style_carousel__hm_e1",
                carouselItem: "style_carouselItem__kwbpB"
            }
        },
        10374: function(e) {
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
                tabSwitcher: "style_tabSwitcher__xiszG",
                tabSwitcherInner: "style_tabSwitcherInner__GaKdx",
                tabSwitcherButton: "style_tabSwitcherButton__QlOKS",
                tabSwitcherButtonActive: "style_tabSwitcherButtonActive__B4sH1"
            }
        },
        8985: function(e) {
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
                contentRoot: "style_contentRoot__Q8rch"
            }
        },
        85521: function(e) {
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
                iconsWrapper: "style_iconsWrapper__7kyBO",
                plus: "style_plus__Ltyo9"
            }
        },
        45285: function(e) {
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
                items: "style_items__R7kBX",
                boxItem: "style_boxItem__mWCt9",
                boxItemAlt: "style_boxItemAlt__sOWS0",
                boxItemProduct: "style_boxItemProduct__pYw3s",
                boxItemProductOutOfStock: "style_boxItemProductOutOfStock__Sv9VE",
                boxItemProductImage: "style_boxItemProductImage__WGeu5",
                boxItemProductInfo: "style_boxItemProductInfo__iQkWs",
                boxItemDecorativeImg: "style_boxItemDecorativeImg__0RMHS",
                imageGallery: "style_imageGallery___Qhif",
                navigation: "style_navigation__5Hp25",
                item: "style_item__zhqIJ",
                image: "style_image__hB9hQ",
                imageDescription: "style_imageDescription__ASLqD"
            }
        }
    },
    function(e) {
        e.O(0, [845, 416, 695, 737, 888, 774, 179], function() {
            return e(e.s = 7074)
        }), _N_E = e.O()
    }
]);