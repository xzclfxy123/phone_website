"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [294], {
        86294: function(e, t, n) {
            n.d(t, {
                Eh: function() {
                    return tm
                },
                VY: function() {
                    return tg
                },
                zt: function() {
                    return td
                },
                fC: function() {
                    return tp
                },
                xz: function() {
                    return th
                }
            });
            var r = n(44194),
                o = n(74810),
                i = n(16779),
                l = n(72664),
                a = n(54513),
                s = n(26713);
            let u = ["top", "right", "bottom", "left"],
                c = Math.min,
                f = Math.max,
                d = Math.round,
                p = Math.floor,
                h = e => ({
                    x: e,
                    y: e
                }),
                g = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                m = {
                    start: "end",
                    end: "start"
                };

            function y(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function x(e) {
                return e.split("-")[0]
            }

            function w(e) {
                return e.split("-")[1]
            }

            function v(e) {
                return "x" === e ? "y" : "x"
            }

            function b(e) {
                return "y" === e ? "height" : "width"
            }

            function R(e) {
                return ["top", "bottom"].includes(x(e)) ? "y" : "x"
            }

            function T(e) {
                return e.replace(/start|end/g, e => m[e])
            }

            function C(e) {
                return e.replace(/left|right|bottom|top/g, e => g[e])
            }

            function E(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function A(e) {
                let {
                    x: t,
                    y: n,
                    width: r,
                    height: o
                } = e;
                return {
                    width: r,
                    height: o,
                    top: n,
                    left: t,
                    right: t + r,
                    bottom: n + o,
                    x: t,
                    y: n
                }
            }

            function L(e, t, n) {
                let r, {
                        reference: o,
                        floating: i
                    } = e,
                    l = R(t),
                    a = v(R(t)),
                    s = b(a),
                    u = x(t),
                    c = "y" === l,
                    f = o.x + o.width / 2 - i.width / 2,
                    d = o.y + o.height / 2 - i.height / 2,
                    p = o[s] / 2 - i[s] / 2;
                switch (u) {
                    case "top":
                        r = {
                            x: f,
                            y: o.y - i.height
                        };
                        break;
                    case "bottom":
                        r = {
                            x: f,
                            y: o.y + o.height
                        };
                        break;
                    case "right":
                        r = {
                            x: o.x + o.width,
                            y: d
                        };
                        break;
                    case "left":
                        r = {
                            x: o.x - i.width,
                            y: d
                        };
                        break;
                    default:
                        r = {
                            x: o.x,
                            y: o.y
                        }
                }
                switch (w(t)) {
                    case "start":
                        r[a] -= p * (n && c ? -1 : 1);
                        break;
                    case "end":
                        r[a] += p * (n && c ? -1 : 1)
                }
                return r
            }
            let P = async (e, t, n) => {
                let {
                    placement: r = "bottom",
                    strategy: o = "absolute",
                    middleware: i = [],
                    platform: l
                } = n, a = i.filter(Boolean), s = await (null == l.isRTL ? void 0 : l.isRTL(t)), u = await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }), {
                    x: c,
                    y: f
                } = L(u, r, s), d = r, p = {}, h = 0;
                for (let n = 0; n < a.length; n++) {
                    let {
                        name: i,
                        fn: g
                    } = a[n], {
                        x: m,
                        y: y,
                        data: x,
                        reset: w
                    } = await g({
                        x: c,
                        y: f,
                        initialPlacement: r,
                        placement: d,
                        strategy: o,
                        middlewareData: p,
                        rects: u,
                        platform: l,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    c = null != m ? m : c, f = null != y ? y : f, p = { ...p,
                        [i]: { ...p[i],
                            ...x
                        }
                    }, w && h <= 50 && (h++, "object" == typeof w && (w.placement && (d = w.placement), w.rects && (u = !0 === w.rects ? await l.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o
                    }) : w.rects), {
                        x: c,
                        y: f
                    } = L(u, d, s)), n = -1)
                }
                return {
                    x: c,
                    y: f,
                    placement: d,
                    strategy: o,
                    middlewareData: p
                }
            };
            async function k(e, t) {
                var n;
                void 0 === t && (t = {});
                let {
                    x: r,
                    y: o,
                    platform: i,
                    rects: l,
                    elements: a,
                    strategy: s
                } = e, {
                    boundary: u = "clippingAncestors",
                    rootBoundary: c = "viewport",
                    elementContext: f = "floating",
                    altBoundary: d = !1,
                    padding: p = 0
                } = y(t, e), h = E(p), g = a[d ? "floating" === f ? "reference" : "floating" : f], m = A(await i.getClippingRect({
                    element: null == (n = await (null == i.isElement ? void 0 : i.isElement(g))) || n ? g : g.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
                    boundary: u,
                    rootBoundary: c,
                    strategy: s
                })), x = "floating" === f ? {
                    x: r,
                    y: o,
                    width: l.floating.width,
                    height: l.floating.height
                } : l.reference, w = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)), v = await (null == i.isElement ? void 0 : i.isElement(w)) && await (null == i.getScale ? void 0 : i.getScale(w)) || {
                    x: 1,
                    y: 1
                }, b = A(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: a,
                    rect: x,
                    offsetParent: w,
                    strategy: s
                }) : x);
                return {
                    top: (m.top - b.top + h.top) / v.y,
                    bottom: (b.bottom - m.bottom + h.bottom) / v.y,
                    left: (m.left - b.left + h.left) / v.x,
                    right: (b.right - m.right + h.right) / v.x
                }
            }

            function O(e, t) {
                return {
                    top: e.top - t.height,
                    right: e.right - t.width,
                    bottom: e.bottom - t.height,
                    left: e.left - t.width
                }
            }

            function S(e) {
                return u.some(t => e[t] >= 0)
            }
            async function j(e, t) {
                let {
                    placement: n,
                    platform: r,
                    elements: o
                } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), l = x(n), a = w(n), s = "y" === R(n), u = ["left", "top"].includes(l) ? -1 : 1, c = i && s ? -1 : 1, f = y(t, e), {
                    mainAxis: d,
                    crossAxis: p,
                    alignmentAxis: h
                } = "number" == typeof f ? {
                    mainAxis: f,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: 0,
                    crossAxis: 0,
                    alignmentAxis: null,
                    ...f
                };
                return a && "number" == typeof h && (p = "end" === a ? -1 * h : h), s ? {
                    x: p * c,
                    y: d * u
                } : {
                    x: d * u,
                    y: p * c
                }
            }

            function M(e) {
                return W(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function H(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function D(e) {
                var t;
                return null == (t = (W(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function W(e) {
                return e instanceof Node || e instanceof H(e).Node
            }

            function F(e) {
                return e instanceof Element || e instanceof H(e).Element
            }

            function N(e) {
                return e instanceof HTMLElement || e instanceof H(e).HTMLElement
            }

            function V(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof H(e).ShadowRoot)
            }

            function _(e) {
                let {
                    overflow: t,
                    overflowX: n,
                    overflowY: r,
                    display: o
                } = Y(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
            }

            function z(e) {
                return [":popover-open", ":modal"].some(t => {
                    try {
                        return e.matches(t)
                    } catch (e) {
                        return !1
                    }
                })
            }

            function B(e) {
                let t = $(),
                    n = F(e) ? Y(e) : e;
                return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some(e => (n.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (n.contain || "").includes(e))
            }

            function $() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function I(e) {
                return ["html", "body", "#document"].includes(M(e))
            }

            function Y(e) {
                return H(e).getComputedStyle(e)
            }

            function X(e) {
                return F(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.scrollX,
                    scrollTop: e.scrollY
                }
            }

            function q(e) {
                if ("html" === M(e)) return e;
                let t = e.assignedSlot || e.parentNode || V(e) && e.host || D(e);
                return V(t) ? t.host : t
            }

            function G(e, t, n) {
                var r;
                void 0 === t && (t = []), void 0 === n && (n = !0);
                let o = function e(t) {
                        let n = q(t);
                        return I(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : N(n) && _(n) ? n : e(n)
                    }(e),
                    i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
                    l = H(o);
                if (i) {
                    let e = J(l);
                    return t.concat(l, l.visualViewport || [], _(o) ? o : [], e && n ? G(e) : [])
                }
                return t.concat(o, G(o, [], n))
            }

            function J(e) {
                return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
            }

            function K(e) {
                let t = Y(e),
                    n = parseFloat(t.width) || 0,
                    r = parseFloat(t.height) || 0,
                    o = N(e),
                    i = o ? e.offsetWidth : n,
                    l = o ? e.offsetHeight : r,
                    a = d(n) !== i || d(r) !== l;
                return a && (n = i, r = l), {
                    width: n,
                    height: r,
                    $: a
                }
            }

            function Q(e) {
                return F(e) ? e : e.contextElement
            }

            function U(e) {
                let t = Q(e);
                if (!N(t)) return h(1);
                let n = t.getBoundingClientRect(),
                    {
                        width: r,
                        height: o,
                        $: i
                    } = K(t),
                    l = (i ? d(n.width) : n.width) / r,
                    a = (i ? d(n.height) : n.height) / o;
                return l && Number.isFinite(l) || (l = 1), a && Number.isFinite(a) || (a = 1), {
                    x: l,
                    y: a
                }
            }
            let Z = h(0);

            function ee(e) {
                let t = H(e);
                return $() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : Z
            }

            function et(e, t, n, r) {
                var o;
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                let i = e.getBoundingClientRect(),
                    l = Q(e),
                    a = h(1);
                t && (r ? F(r) && (a = U(r)) : a = U(e));
                let s = (void 0 === (o = n) && (o = !1), r && (!o || r === H(l)) && o) ? ee(l) : h(0),
                    u = (i.left + s.x) / a.x,
                    c = (i.top + s.y) / a.y,
                    f = i.width / a.x,
                    d = i.height / a.y;
                if (l) {
                    let e = H(l),
                        t = r && F(r) ? H(r) : r,
                        n = e,
                        o = J(n);
                    for (; o && r && t !== n;) {
                        let e = U(o),
                            t = o.getBoundingClientRect(),
                            r = Y(o),
                            i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                            l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
                        u *= e.x, c *= e.y, f *= e.x, d *= e.y, u += i, c += l, o = J(n = H(o))
                    }
                }
                return A({
                    width: f,
                    height: d,
                    x: u,
                    y: c
                })
            }

            function en(e) {
                return et(D(e)).left + X(e).scrollLeft
            }

            function er(e, t, n) {
                let r;
                if ("viewport" === t) r = function(e, t) {
                    let n = H(e),
                        r = D(e),
                        o = n.visualViewport,
                        i = r.clientWidth,
                        l = r.clientHeight,
                        a = 0,
                        s = 0;
                    if (o) {
                        i = o.width, l = o.height;
                        let e = $();
                        (!e || e && "fixed" === t) && (a = o.offsetLeft, s = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: l,
                        x: a,
                        y: s
                    }
                }(e, n);
                else if ("document" === t) r = function(e) {
                    let t = D(e),
                        n = X(e),
                        r = e.ownerDocument.body,
                        o = f(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                        i = f(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
                        l = -n.scrollLeft + en(e),
                        a = -n.scrollTop;
                    return "rtl" === Y(r).direction && (l += f(t.clientWidth, r.clientWidth) - o), {
                        width: o,
                        height: i,
                        x: l,
                        y: a
                    }
                }(D(e));
                else if (F(t)) r = function(e, t) {
                    let n = et(e, !0, "fixed" === t),
                        r = n.top + e.clientTop,
                        o = n.left + e.clientLeft,
                        i = N(e) ? U(e) : h(1),
                        l = e.clientWidth * i.x;
                    return {
                        width: l,
                        height: e.clientHeight * i.y,
                        x: o * i.x,
                        y: r * i.y
                    }
                }(t, n);
                else {
                    let n = ee(e);
                    r = { ...t,
                        x: t.x - n.x,
                        y: t.y - n.y
                    }
                }
                return A(r)
            }

            function eo(e) {
                return "static" === Y(e).position
            }

            function ei(e, t) {
                return N(e) && "fixed" !== Y(e).position ? t ? t(e) : e.offsetParent : null
            }

            function el(e, t) {
                let n = H(e);
                if (z(e)) return n;
                if (!N(e)) {
                    let t = q(e);
                    for (; t && !I(t);) {
                        if (F(t) && !eo(t)) return t;
                        t = q(t)
                    }
                    return n
                }
                let r = ei(e, t);
                for (; r && ["table", "td", "th"].includes(M(r)) && eo(r);) r = ei(r, t);
                return r && I(r) && eo(r) && !B(r) ? n : r || function(e) {
                    let t = q(e);
                    for (; N(t) && !I(t);) {
                        if (B(t)) return t;
                        if (z(t)) break;
                        t = q(t)
                    }
                    return null
                }(e) || n
            }
            let ea = async function(e) {
                    let t = this.getOffsetParent || el,
                        n = this.getDimensions,
                        r = await n(e.floating);
                    return {
                        reference: function(e, t, n) {
                            let r = N(t),
                                o = D(t),
                                i = "fixed" === n,
                                l = et(e, !0, i, t),
                                a = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                s = h(0);
                            if (r || !r && !i) {
                                if (("body" !== M(t) || _(o)) && (a = X(t)), r) {
                                    let e = et(t, !0, i, t);
                                    s.x = e.x + t.clientLeft, s.y = e.y + t.clientTop
                                } else o && (s.x = en(o))
                            }
                            return {
                                x: l.left + a.scrollLeft - s.x,
                                y: l.top + a.scrollTop - s.y,
                                width: l.width,
                                height: l.height
                            }
                        }(e.reference, await t(e.floating), e.strategy),
                        floating: {
                            x: 0,
                            y: 0,
                            width: r.width,
                            height: r.height
                        }
                    }
                },
                es = {
                    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                        let {
                            elements: t,
                            rect: n,
                            offsetParent: r,
                            strategy: o
                        } = e, i = "fixed" === o, l = D(r), a = !!t && z(t.floating);
                        if (r === l || a && i) return n;
                        let s = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            u = h(1),
                            c = h(0),
                            f = N(r);
                        if ((f || !f && !i) && (("body" !== M(r) || _(l)) && (s = X(r)), N(r))) {
                            let e = et(r);
                            u = U(r), c.x = e.x + r.clientLeft, c.y = e.y + r.clientTop
                        }
                        return {
                            width: n.width * u.x,
                            height: n.height * u.y,
                            x: n.x * u.x - s.scrollLeft * u.x + c.x,
                            y: n.y * u.y - s.scrollTop * u.y + c.y
                        }
                    },
                    getDocumentElement: D,
                    getClippingRect: function(e) {
                        let {
                            element: t,
                            boundary: n,
                            rootBoundary: r,
                            strategy: o
                        } = e, i = [..."clippingAncestors" === n ? z(t) ? [] : function(e, t) {
                            let n = t.get(e);
                            if (n) return n;
                            let r = G(e, [], !1).filter(e => F(e) && "body" !== M(e)),
                                o = null,
                                i = "fixed" === Y(e).position,
                                l = i ? q(e) : e;
                            for (; F(l) && !I(l);) {
                                let t = Y(l),
                                    n = B(l);
                                n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position) || _(l) && !n && function e(t, n) {
                                    let r = q(t);
                                    return !(r === n || !F(r) || I(r)) && ("fixed" === Y(r).position || e(r, n))
                                }(e, l)) ? r = r.filter(e => e !== l) : o = t, l = q(l)
                            }
                            return t.set(e, r), r
                        }(t, this._c) : [].concat(n), r], l = i[0], a = i.reduce((e, n) => {
                            let r = er(t, n, o);
                            return e.top = f(r.top, e.top), e.right = c(r.right, e.right), e.bottom = c(r.bottom, e.bottom), e.left = f(r.left, e.left), e
                        }, er(t, l, o));
                        return {
                            width: a.right - a.left,
                            height: a.bottom - a.top,
                            x: a.left,
                            y: a.top
                        }
                    },
                    getOffsetParent: el,
                    getElementRects: ea,
                    getClientRects: function(e) {
                        return Array.from(e.getClientRects())
                    },
                    getDimensions: function(e) {
                        let {
                            width: t,
                            height: n
                        } = K(e);
                        return {
                            width: t,
                            height: n
                        }
                    },
                    getScale: U,
                    isElement: F,
                    isRTL: function(e) {
                        return "rtl" === Y(e).direction
                    }
                },
                eu = e => ({
                    name: "arrow",
                    options: e,
                    async fn(t) {
                        let {
                            x: n,
                            y: r,
                            placement: o,
                            rects: i,
                            platform: l,
                            elements: a,
                            middlewareData: s
                        } = t, {
                            element: u,
                            padding: d = 0
                        } = y(e, t) || {};
                        if (null == u) return {};
                        let p = E(d),
                            h = {
                                x: n,
                                y: r
                            },
                            g = v(R(o)),
                            m = b(g),
                            x = await l.getDimensions(u),
                            T = "y" === g,
                            C = T ? "clientHeight" : "clientWidth",
                            A = i.reference[m] + i.reference[g] - h[g] - i.floating[m],
                            L = h[g] - i.reference[g],
                            P = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(u)),
                            k = P ? P[C] : 0;
                        k && await (null == l.isElement ? void 0 : l.isElement(P)) || (k = a.floating[C] || i.floating[m]);
                        let O = k / 2 - x[m] / 2 - 1,
                            S = c(p[T ? "top" : "left"], O),
                            j = c(p[T ? "bottom" : "right"], O),
                            M = k - x[m] - j,
                            H = k / 2 - x[m] / 2 + (A / 2 - L / 2),
                            D = f(S, c(H, M)),
                            W = !s.arrow && null != w(o) && H !== D && i.reference[m] / 2 - (H < S ? S : j) - x[m] / 2 < 0,
                            F = W ? H < S ? H - S : H - M : 0;
                        return {
                            [g]: h[g] + F,
                            data: {
                                [g]: D,
                                centerOffset: H - D - F,
                                ...W && {
                                    alignmentOffset: F
                                }
                            },
                            reset: W
                        }
                    }
                }),
                ec = (e, t, n) => {
                    let r = new Map,
                        o = {
                            platform: es,
                            ...n
                        },
                        i = { ...o.platform,
                            _c: r
                        };
                    return P(e, t, { ...o,
                        platform: i
                    })
                };
            var ef = n(56321),
                ed = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;

            function ep(e, t) {
                let n, r, o;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((n = e.length) !== t.length) return !1;
                        for (r = n; 0 != r--;)
                            if (!ep(e[r], t[r])) return !1;
                        return !0
                    }
                    if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (r = n; 0 != r--;)
                        if (!({}).hasOwnProperty.call(t, o[r])) return !1;
                    for (r = n; 0 != r--;) {
                        let n = o[r];
                        if (("_owner" !== n || !e.$$typeof) && !ep(e[n], t[n])) return !1
                    }
                    return !0
                }
                return e != e && t != t
            }

            function eh(e) {
                return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function eg(e, t) {
                let n = eh(e);
                return Math.round(t * n) / n
            }

            function em(e) {
                let t = r.useRef(e);
                return ed(() => {
                    t.current = e
                }), t
            }
            let ey = e => ({
                    name: "arrow",
                    options: e,
                    fn(t) {
                        let {
                            element: n,
                            padding: r
                        } = "function" == typeof e ? e(t) : e;
                        return n && ({}).hasOwnProperty.call(n, "current") ? null != n.current ? eu({
                            element: n.current,
                            padding: r
                        }).fn(t) : {} : n ? eu({
                            element: n,
                            padding: r
                        }).fn(t) : {}
                    }
                }),
                ex = (e, t) => {
                    var n;
                    return { ...(void 0 === (n = e) && (n = 0), {
                            name: "offset",
                            options: n,
                            async fn(e) {
                                var t, r;
                                let {
                                    x: o,
                                    y: i,
                                    placement: l,
                                    middlewareData: a
                                } = e, s = await j(e, n);
                                return l === (null == (t = a.offset) ? void 0 : t.placement) && null != (r = a.arrow) && r.alignmentOffset ? {} : {
                                    x: o + s.x,
                                    y: i + s.y,
                                    data: { ...s,
                                        placement: l
                                    }
                                }
                            }
                        }),
                        options: [e, t]
                    }
                },
                ew = (e, t) => {
                    var n;
                    return { ...(void 0 === (n = e) && (n = {}), {
                            name: "shift",
                            options: n,
                            async fn(e) {
                                let {
                                    x: t,
                                    y: r,
                                    placement: o
                                } = e, {
                                    mainAxis: i = !0,
                                    crossAxis: l = !1,
                                    limiter: a = {
                                        fn: e => {
                                            let {
                                                x: t,
                                                y: n
                                            } = e;
                                            return {
                                                x: t,
                                                y: n
                                            }
                                        }
                                    },
                                    ...s
                                } = y(n, e), u = {
                                    x: t,
                                    y: r
                                }, d = await k(e, s), p = R(x(o)), h = v(p), g = u[h], m = u[p];
                                if (i) {
                                    let e = "y" === h ? "top" : "left",
                                        t = "y" === h ? "bottom" : "right",
                                        n = g + d[e],
                                        r = g - d[t];
                                    g = f(n, c(g, r))
                                }
                                if (l) {
                                    let e = "y" === p ? "top" : "left",
                                        t = "y" === p ? "bottom" : "right",
                                        n = m + d[e],
                                        r = m - d[t];
                                    m = f(n, c(m, r))
                                }
                                let w = a.fn({ ...e,
                                    [h]: g,
                                    [p]: m
                                });
                                return { ...w,
                                    data: {
                                        x: w.x - t,
                                        y: w.y - r
                                    }
                                }
                            }
                        }),
                        options: [e, t]
                    }
                },
                ev = (e, t) => {
                    var n;
                    return { ...(void 0 === (n = e) && (n = {}), {
                            options: n,
                            fn(e) {
                                let {
                                    x: t,
                                    y: r,
                                    placement: o,
                                    rects: i,
                                    middlewareData: l
                                } = e, {
                                    offset: a = 0,
                                    mainAxis: s = !0,
                                    crossAxis: u = !0
                                } = y(n, e), c = {
                                    x: t,
                                    y: r
                                }, f = R(o), d = v(f), p = c[d], h = c[f], g = y(a, e), m = "number" == typeof g ? {
                                    mainAxis: g,
                                    crossAxis: 0
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    ...g
                                };
                                if (s) {
                                    let e = "y" === d ? "height" : "width",
                                        t = i.reference[d] - i.floating[e] + m.mainAxis,
                                        n = i.reference[d] + i.reference[e] - m.mainAxis;
                                    p < t ? p = t : p > n && (p = n)
                                }
                                if (u) {
                                    var w, b;
                                    let e = "y" === d ? "width" : "height",
                                        t = ["top", "left"].includes(x(o)),
                                        n = i.reference[f] - i.floating[e] + (t && (null == (w = l.offset) ? void 0 : w[f]) || 0) + (t ? 0 : m.crossAxis),
                                        r = i.reference[f] + i.reference[e] + (t ? 0 : (null == (b = l.offset) ? void 0 : b[f]) || 0) - (t ? m.crossAxis : 0);
                                    h < n ? h = n : h > r && (h = r)
                                }
                                return {
                                    [d]: p,
                                    [f]: h
                                }
                            }
                        }),
                        options: [e, t]
                    }
                },
                eb = (e, t) => {
                    var n;
                    return { ...(void 0 === (n = e) && (n = {}), {
                            name: "flip",
                            options: n,
                            async fn(e) {
                                var t, r, o, i, l;
                                let {
                                    placement: a,
                                    middlewareData: s,
                                    rects: u,
                                    initialPlacement: c,
                                    platform: f,
                                    elements: d
                                } = e, {
                                    mainAxis: p = !0,
                                    crossAxis: h = !0,
                                    fallbackPlacements: g,
                                    fallbackStrategy: m = "bestFit",
                                    fallbackAxisSideDirection: E = "none",
                                    flipAlignment: A = !0,
                                    ...L
                                } = y(n, e);
                                if (null != (t = s.arrow) && t.alignmentOffset) return {};
                                let P = x(a),
                                    O = R(c),
                                    S = x(c) === c,
                                    j = await (null == f.isRTL ? void 0 : f.isRTL(d.floating)),
                                    M = g || (S || !A ? [C(c)] : function(e) {
                                        let t = C(e);
                                        return [T(e), t, T(t)]
                                    }(c)),
                                    H = "none" !== E;
                                !g && H && M.push(... function(e, t, n, r) {
                                    let o = w(e),
                                        i = function(e, t, n) {
                                            let r = ["left", "right"],
                                                o = ["right", "left"];
                                            switch (e) {
                                                case "top":
                                                case "bottom":
                                                    if (n) return t ? o : r;
                                                    return t ? r : o;
                                                case "left":
                                                case "right":
                                                    return t ? ["top", "bottom"] : ["bottom", "top"];
                                                default:
                                                    return []
                                            }
                                        }(x(e), "start" === n, r);
                                    return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(T)))), i
                                }(c, A, E, j));
                                let D = [c, ...M],
                                    W = await k(e, L),
                                    F = [],
                                    N = (null == (r = s.flip) ? void 0 : r.overflows) || [];
                                if (p && F.push(W[P]), h) {
                                    let e = function(e, t, n) {
                                        void 0 === n && (n = !1);
                                        let r = w(e),
                                            o = v(R(e)),
                                            i = b(o),
                                            l = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                                        return t.reference[i] > t.floating[i] && (l = C(l)), [l, C(l)]
                                    }(a, u, j);
                                    F.push(W[e[0]], W[e[1]])
                                }
                                if (N = [...N, {
                                        placement: a,
                                        overflows: F
                                    }], !F.every(e => e <= 0)) {
                                    let e = ((null == (o = s.flip) ? void 0 : o.index) || 0) + 1,
                                        t = D[e];
                                    if (t) return {
                                        data: {
                                            index: e,
                                            overflows: N
                                        },
                                        reset: {
                                            placement: t
                                        }
                                    };
                                    let n = null == (i = N.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : i.placement;
                                    if (!n) switch (m) {
                                        case "bestFit":
                                            {
                                                let e = null == (l = N.filter(e => {
                                                    if (H) {
                                                        let t = R(e.placement);
                                                        return t === O || "y" === t
                                                    }
                                                    return !0
                                                }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : l[0];e && (n = e);
                                                break
                                            }
                                        case "initialPlacement":
                                            n = c
                                    }
                                    if (a !== n) return {
                                        reset: {
                                            placement: n
                                        }
                                    }
                                }
                                return {}
                            }
                        }),
                        options: [e, t]
                    }
                },
                eR = (e, t) => {
                    var n;
                    return { ...(void 0 === (n = e) && (n = {}), {
                            name: "size",
                            options: n,
                            async fn(e) {
                                let t, r;
                                let {
                                    placement: o,
                                    rects: i,
                                    platform: l,
                                    elements: a
                                } = e, {
                                    apply: s = () => {},
                                    ...u
                                } = y(n, e), d = await k(e, u), p = x(o), h = w(o), g = "y" === R(o), {
                                    width: m,
                                    height: v
                                } = i.floating;
                                "top" === p || "bottom" === p ? (t = p, r = h === (await (null == l.isRTL ? void 0 : l.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (r = p, t = "end" === h ? "top" : "bottom");
                                let b = v - d.top - d.bottom,
                                    T = m - d.left - d.right,
                                    C = c(v - d[t], b),
                                    E = c(m - d[r], T),
                                    A = !e.middlewareData.shift,
                                    L = C,
                                    P = E;
                                if (g ? P = h || A ? c(E, T) : T : L = h || A ? c(C, b) : b, A && !h) {
                                    let e = f(d.left, 0),
                                        t = f(d.right, 0),
                                        n = f(d.top, 0),
                                        r = f(d.bottom, 0);
                                    g ? P = m - 2 * (0 !== e || 0 !== t ? e + t : f(d.left, d.right)) : L = v - 2 * (0 !== n || 0 !== r ? n + r : f(d.top, d.bottom))
                                }
                                await s({ ...e,
                                    availableWidth: P,
                                    availableHeight: L
                                });
                                let O = await l.getDimensions(a.floating);
                                return m !== O.width || v !== O.height ? {
                                    reset: {
                                        rects: !0
                                    }
                                } : {}
                            }
                        }),
                        options: [e, t]
                    }
                },
                eT = (e, t) => {
                    var n;
                    return { ...(void 0 === (n = e) && (n = {}), {
                            name: "hide",
                            options: n,
                            async fn(e) {
                                let {
                                    rects: t
                                } = e, {
                                    strategy: r = "referenceHidden",
                                    ...o
                                } = y(n, e);
                                switch (r) {
                                    case "referenceHidden":
                                        {
                                            let n = O(await k(e, { ...o,
                                                elementContext: "reference"
                                            }), t.reference);
                                            return {
                                                data: {
                                                    referenceHiddenOffsets: n,
                                                    referenceHidden: S(n)
                                                }
                                            }
                                        }
                                    case "escaped":
                                        {
                                            let n = O(await k(e, { ...o,
                                                altBoundary: !0
                                            }), t.floating);
                                            return {
                                                data: {
                                                    escapedOffsets: n,
                                                    escaped: S(n)
                                                }
                                            }
                                        }
                                    default:
                                        return {}
                                }
                            }
                        }),
                        options: [e, t]
                    }
                },
                eC = (e, t) => ({ ...ey(e),
                    options: [e, t]
                });
            var eE = n(16537),
                eA = n(31549),
                eL = r.forwardRef((e, t) => {
                    let {
                        children: n,
                        width: r = 10,
                        height: o = 5,
                        ...i
                    } = e;
                    return (0, eA.jsx)(eE.WV.svg, { ...i,
                        ref: t,
                        width: r,
                        height: o,
                        viewBox: "0 0 30 10",
                        preserveAspectRatio: "none",
                        children: e.asChild ? n : (0, eA.jsx)("polygon", {
                            points: "0,0 30,0 15,10"
                        })
                    })
                });
            eL.displayName = "Arrow";
            var eP = n(46638),
                ek = n(70422),
                eO = "Popper",
                [eS, ej] = (0, l.b)(eO),
                [eM, eH] = eS(eO),
                eD = e => {
                    let {
                        __scopePopper: t,
                        children: n
                    } = e, [o, i] = r.useState(null);
                    return (0, eA.jsx)(eM, {
                        scope: t,
                        anchor: o,
                        onAnchorChange: i,
                        children: n
                    })
                };
            eD.displayName = eO;
            var eW = "PopperAnchor",
                eF = r.forwardRef((e, t) => {
                    let {
                        __scopePopper: n,
                        virtualRef: o,
                        ...l
                    } = e, a = eH(eW, n), s = r.useRef(null), u = (0, i.e)(t, s);
                    return r.useEffect(() => {
                        a.onAnchorChange(o ? .current || s.current)
                    }), o ? null : (0, eA.jsx)(eE.WV.div, { ...l,
                        ref: u
                    })
                });
            eF.displayName = eW;
            var eN = "PopperContent",
                [eV, e_] = eS(eN),
                ez = r.forwardRef((e, t) => {
                    let {
                        __scopePopper: n,
                        side: o = "bottom",
                        sideOffset: l = 0,
                        align: a = "center",
                        alignOffset: s = 0,
                        arrowPadding: u = 0,
                        avoidCollisions: d = !0,
                        collisionBoundary: h = [],
                        collisionPadding: g = 0,
                        sticky: m = "partial",
                        hideWhenDetached: y = !1,
                        updatePositionStrategy: x = "optimized",
                        onPlaced: w,
                        ...v
                    } = e, b = eH(eN, n), [R, T] = r.useState(null), C = (0, i.e)(t, e => T(e)), [E, A] = r.useState(null), L = function(e) {
                        let [t, n] = r.useState(void 0);
                        return (0, ek.b)(() => {
                            if (e) {
                                n({
                                    width: e.offsetWidth,
                                    height: e.offsetHeight
                                });
                                let t = new ResizeObserver(t => {
                                    let r, o;
                                    if (!Array.isArray(t) || !t.length) return;
                                    let i = t[0];
                                    if ("borderBoxSize" in i) {
                                        let e = i.borderBoxSize,
                                            t = Array.isArray(e) ? e[0] : e;
                                        r = t.inlineSize, o = t.blockSize
                                    } else r = e.offsetWidth, o = e.offsetHeight;
                                    n({
                                        width: r,
                                        height: o
                                    })
                                });
                                return t.observe(e, {
                                    box: "border-box"
                                }), () => t.unobserve(e)
                            }
                            n(void 0)
                        }, [e]), t
                    }(E), P = L ? .width ? ? 0, k = L ? .height ? ? 0, O = "number" == typeof g ? g : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...g
                    }, S = Array.isArray(h) ? h : [h], j = S.length > 0, M = {
                        padding: O,
                        boundary: S.filter(eY),
                        altBoundary: j
                    }, {
                        refs: H,
                        floatingStyles: W,
                        placement: F,
                        isPositioned: N,
                        middlewareData: V
                    } = function(e) {
                        void 0 === e && (e = {});
                        let {
                            placement: t = "bottom",
                            strategy: n = "absolute",
                            middleware: o = [],
                            platform: i,
                            elements: {
                                reference: l,
                                floating: a
                            } = {},
                            transform: s = !0,
                            whileElementsMounted: u,
                            open: c
                        } = e, [f, d] = r.useState({
                            x: 0,
                            y: 0,
                            strategy: n,
                            placement: t,
                            middlewareData: {},
                            isPositioned: !1
                        }), [p, h] = r.useState(o);
                        ep(p, o) || h(o);
                        let [g, m] = r.useState(null), [y, x] = r.useState(null), w = r.useCallback(e => {
                            e !== T.current && (T.current = e, m(e))
                        }, []), v = r.useCallback(e => {
                            e !== C.current && (C.current = e, x(e))
                        }, []), b = l || g, R = a || y, T = r.useRef(null), C = r.useRef(null), E = r.useRef(f), A = null != u, L = em(u), P = em(i), k = r.useCallback(() => {
                            if (!T.current || !C.current) return;
                            let e = {
                                placement: t,
                                strategy: n,
                                middleware: p
                            };
                            P.current && (e.platform = P.current), ec(T.current, C.current, e).then(e => {
                                let t = { ...e,
                                    isPositioned: !0
                                };
                                O.current && !ep(E.current, t) && (E.current = t, ef.flushSync(() => {
                                    d(t)
                                }))
                            })
                        }, [p, t, n, P]);
                        ed(() => {
                            !1 === c && E.current.isPositioned && (E.current.isPositioned = !1, d(e => ({ ...e,
                                isPositioned: !1
                            })))
                        }, [c]);
                        let O = r.useRef(!1);
                        ed(() => (O.current = !0, () => {
                            O.current = !1
                        }), []), ed(() => {
                            if (b && (T.current = b), R && (C.current = R), b && R) {
                                if (L.current) return L.current(b, R, k);
                                k()
                            }
                        }, [b, R, k, L, A]);
                        let S = r.useMemo(() => ({
                                reference: T,
                                floating: C,
                                setReference: w,
                                setFloating: v
                            }), [w, v]),
                            j = r.useMemo(() => ({
                                reference: b,
                                floating: R
                            }), [b, R]),
                            M = r.useMemo(() => {
                                let e = {
                                    position: n,
                                    left: 0,
                                    top: 0
                                };
                                if (!j.floating) return e;
                                let t = eg(j.floating, f.x),
                                    r = eg(j.floating, f.y);
                                return s ? { ...e,
                                    transform: "translate(" + t + "px, " + r + "px)",
                                    ...eh(j.floating) >= 1.5 && {
                                        willChange: "transform"
                                    }
                                } : {
                                    position: n,
                                    left: t,
                                    top: r
                                }
                            }, [n, s, j.floating, f.x, f.y]);
                        return r.useMemo(() => ({ ...f,
                            update: k,
                            refs: S,
                            elements: j,
                            floatingStyles: M
                        }), [f, k, S, j, M])
                    }({
                        strategy: "fixed",
                        placement: o + ("center" !== a ? "-" + a : ""),
                        whileElementsMounted: (...e) => (function(e, t, n, r) {
                            let o;
                            void 0 === r && (r = {});
                            let {
                                ancestorScroll: i = !0,
                                ancestorResize: l = !0,
                                elementResize: a = "function" == typeof ResizeObserver,
                                layoutShift: s = "function" == typeof IntersectionObserver,
                                animationFrame: u = !1
                            } = r, d = Q(e), h = i || l ? [...d ? G(d) : [], ...G(t)] : [];
                            h.forEach(e => {
                                i && e.addEventListener("scroll", n, {
                                    passive: !0
                                }), l && e.addEventListener("resize", n)
                            });
                            let g = d && s ? function(e, t) {
                                    let n, r = null,
                                        o = D(e);

                                    function i() {
                                        var e;
                                        clearTimeout(n), null == (e = r) || e.disconnect(), r = null
                                    }
                                    return ! function l(a, s) {
                                        void 0 === a && (a = !1), void 0 === s && (s = 1), i();
                                        let {
                                            left: u,
                                            top: d,
                                            width: h,
                                            height: g
                                        } = e.getBoundingClientRect();
                                        if (a || t(), !h || !g) return;
                                        let m = p(d),
                                            y = p(o.clientWidth - (u + h)),
                                            x = {
                                                rootMargin: -m + "px " + -y + "px " + -p(o.clientHeight - (d + g)) + "px " + -p(u) + "px",
                                                threshold: f(0, c(1, s)) || 1
                                            },
                                            w = !0;

                                        function v(e) {
                                            let t = e[0].intersectionRatio;
                                            if (t !== s) {
                                                if (!w) return l();
                                                t ? l(!1, t) : n = setTimeout(() => {
                                                    l(!1, 1e-7)
                                                }, 1e3)
                                            }
                                            w = !1
                                        }
                                        try {
                                            r = new IntersectionObserver(v, { ...x,
                                                root: o.ownerDocument
                                            })
                                        } catch (e) {
                                            r = new IntersectionObserver(v, x)
                                        }
                                        r.observe(e)
                                    }(!0), i
                                }(d, n) : null,
                                m = -1,
                                y = null;
                            a && (y = new ResizeObserver(e => {
                                let [r] = e;
                                r && r.target === d && y && (y.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
                                    var e;
                                    null == (e = y) || e.observe(t)
                                })), n()
                            }), d && !u && y.observe(d), y.observe(t));
                            let x = u ? et(e) : null;
                            return u && function t() {
                                let r = et(e);
                                x && (r.x !== x.x || r.y !== x.y || r.width !== x.width || r.height !== x.height) && n(), x = r, o = requestAnimationFrame(t)
                            }(), n(), () => {
                                var e;
                                h.forEach(e => {
                                    i && e.removeEventListener("scroll", n), l && e.removeEventListener("resize", n)
                                }), null == g || g(), null == (e = y) || e.disconnect(), y = null, u && cancelAnimationFrame(o)
                            }
                        })(...e, {
                            animationFrame: "always" === x
                        }),
                        elements: {
                            reference: b.anchor
                        },
                        middleware: [ex({
                            mainAxis: l + k,
                            alignmentAxis: s
                        }), d && ew({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === m ? ev() : void 0,
                            ...M
                        }), d && eb({ ...M
                        }), eR({ ...M,
                            apply: ({
                                elements: e,
                                rects: t,
                                availableWidth: n,
                                availableHeight: r
                            }) => {
                                let {
                                    width: o,
                                    height: i
                                } = t.reference, l = e.floating.style;
                                l.setProperty("--radix-popper-available-width", `${n}px`), l.setProperty("--radix-popper-available-height", `${r}px`), l.setProperty("--radix-popper-anchor-width", `${o}px`), l.setProperty("--radix-popper-anchor-height", `${i}px`)
                            }
                        }), E && eC({
                            element: E,
                            padding: u
                        }), eX({
                            arrowWidth: P,
                            arrowHeight: k
                        }), y && eT({
                            strategy: "referenceHidden",
                            ...M
                        })]
                    }), [_, z] = eq(F), B = (0, eP.W)(w);
                    (0, ek.b)(() => {
                        N && B ? .()
                    }, [N, B]);
                    let $ = V.arrow ? .x,
                        I = V.arrow ? .y,
                        Y = V.arrow ? .centerOffset !== 0,
                        [X, q] = r.useState();
                    return (0, ek.b)(() => {
                        R && q(window.getComputedStyle(R).zIndex)
                    }, [R]), (0, eA.jsx)("div", {
                        ref: H.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: { ...W,
                            transform: N ? W.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: X,
                            "--radix-popper-transform-origin": [V.transformOrigin ? .x, V.transformOrigin ? .y].join(" "),
                            ...V.hide ? .referenceHidden && {
                                visibility: "hidden",
                                pointerEvents: "none"
                            }
                        },
                        dir: e.dir,
                        children: (0, eA.jsx)(eV, {
                            scope: n,
                            placedSide: _,
                            onArrowChange: A,
                            arrowX: $,
                            arrowY: I,
                            shouldHideArrow: Y,
                            children: (0, eA.jsx)(eE.WV.div, {
                                "data-side": _,
                                "data-align": z,
                                ...v,
                                ref: C,
                                style: { ...v.style,
                                    animation: N ? void 0 : "none"
                                }
                            })
                        })
                    })
                });
            ez.displayName = eN;
            var eB = "PopperArrow",
                e$ = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                eI = r.forwardRef(function(e, t) {
                    let {
                        __scopePopper: n,
                        ...r
                    } = e, o = e_(eB, n), i = e$[o.placedSide];
                    return (0, eA.jsx)("span", {
                        ref: o.onArrowChange,
                        style: {
                            position: "absolute",
                            left: o.arrowX,
                            top: o.arrowY,
                            [i]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            }[o.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            }[o.placedSide],
                            visibility: o.shouldHideArrow ? "hidden" : void 0
                        },
                        children: (0, eA.jsx)(eL, { ...r,
                            ref: t,
                            style: { ...r.style,
                                display: "block"
                            }
                        })
                    })
                });

            function eY(e) {
                return null !== e
            }
            eI.displayName = eB;
            var eX = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    let {
                        placement: n,
                        rects: r,
                        middlewareData: o
                    } = t, i = o.arrow ? .centerOffset !== 0, l = i ? 0 : e.arrowWidth, a = i ? 0 : e.arrowHeight, [s, u] = eq(n), c = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    }[u], f = (o.arrow ? .x ? ? 0) + l / 2, d = (o.arrow ? .y ? ? 0) + a / 2, p = "", h = "";
                    return "bottom" === s ? (p = i ? c : `${f}px`, h = `${-a}px`) : "top" === s ? (p = i ? c : `${f}px`, h = `${r.floating.height+a}px`) : "right" === s ? (p = `${-a}px`, h = i ? c : `${d}px`) : "left" === s && (p = `${r.floating.width+a}px`, h = i ? c : `${d}px`), {
                        data: {
                            x: p,
                            y: h
                        }
                    }
                }
            });

            function eq(e) {
                let [t, n = "center"] = e.split("-");
                return [t, n]
            }
            n(70322);
            var eG = n(34816),
                eJ = n(12628),
                eK = n(1504),
                eQ = r.forwardRef((e, t) => (0, eA.jsx)(eE.WV.span, { ...e,
                    ref: t,
                    style: {
                        position: "absolute",
                        border: 0,
                        width: 1,
                        height: 1,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        wordWrap: "normal",
                        ...e.style
                    }
                }));
            eQ.displayName = "VisuallyHidden";
            var [eU, eZ] = (0, l.b)("Tooltip", [ej]), e0 = ej(), e1 = "TooltipProvider", e2 = "tooltip.open", [e5, e4] = eU(e1), e3 = e => {
                let {
                    __scopeTooltip: t,
                    delayDuration: n = 700,
                    skipDelayDuration: o = 300,
                    disableHoverableContent: i = !1,
                    children: l
                } = e, [a, s] = r.useState(!0), u = r.useRef(!1), c = r.useRef(0);
                return r.useEffect(() => {
                    let e = c.current;
                    return () => window.clearTimeout(e)
                }, []), (0, eA.jsx)(e5, {
                    scope: t,
                    isOpenDelayed: a,
                    delayDuration: n,
                    onOpen: r.useCallback(() => {
                        window.clearTimeout(c.current), s(!1)
                    }, []),
                    onClose: r.useCallback(() => {
                        window.clearTimeout(c.current), c.current = window.setTimeout(() => s(!0), o)
                    }, [o]),
                    isPointerInTransitRef: u,
                    onPointerInTransitChange: r.useCallback(e => {
                        u.current = e
                    }, []),
                    disableHoverableContent: i,
                    children: l
                })
            };
            e3.displayName = e1;
            var e6 = "Tooltip",
                [e7, e9] = eU(e6),
                e8 = e => {
                    let {
                        __scopeTooltip: t,
                        children: n,
                        open: o,
                        defaultOpen: i = !1,
                        onOpenChange: l,
                        disableHoverableContent: a,
                        delayDuration: u
                    } = e, c = e4(e6, e.__scopeTooltip), f = e0(t), [d, p] = r.useState(null), h = (0, s.M)(), g = r.useRef(0), m = a ? ? c.disableHoverableContent, y = u ? ? c.delayDuration, x = r.useRef(!1), [w = !1, v] = (0, eK.T)({
                        prop: o,
                        defaultProp: i,
                        onChange: e => {
                            e ? (c.onOpen(), document.dispatchEvent(new CustomEvent(e2))) : c.onClose(), l ? .(e)
                        }
                    }), b = r.useMemo(() => w ? x.current ? "delayed-open" : "instant-open" : "closed", [w]), R = r.useCallback(() => {
                        window.clearTimeout(g.current), x.current = !1, v(!0)
                    }, [v]), T = r.useCallback(() => {
                        window.clearTimeout(g.current), v(!1)
                    }, [v]), C = r.useCallback(() => {
                        window.clearTimeout(g.current), g.current = window.setTimeout(() => {
                            x.current = !0, v(!0)
                        }, y)
                    }, [y, v]);
                    return r.useEffect(() => () => window.clearTimeout(g.current), []), (0, eA.jsx)(eD, { ...f,
                        children: (0, eA.jsx)(e7, {
                            scope: t,
                            contentId: h,
                            open: w,
                            stateAttribute: b,
                            trigger: d,
                            onTriggerChange: p,
                            onTriggerEnter: r.useCallback(() => {
                                c.isOpenDelayed ? C() : R()
                            }, [c.isOpenDelayed, C, R]),
                            onTriggerLeave: r.useCallback(() => {
                                m ? T() : window.clearTimeout(g.current)
                            }, [T, m]),
                            onOpen: R,
                            onClose: T,
                            disableHoverableContent: m,
                            children: n
                        })
                    })
                };
            e8.displayName = e6;
            var te = "TooltipTrigger",
                tt = r.forwardRef((e, t) => {
                    let {
                        __scopeTooltip: n,
                        ...l
                    } = e, a = e9(te, n), s = e4(te, n), u = e0(n), c = r.useRef(null), f = (0, i.e)(t, c, a.onTriggerChange), d = r.useRef(!1), p = r.useRef(!1), h = r.useCallback(() => d.current = !1, []);
                    return r.useEffect(() => () => document.removeEventListener("pointerup", h), [h]), (0, eA.jsx)(eF, {
                        asChild: !0,
                        ...u,
                        children: (0, eA.jsx)(eE.WV.button, {
                            "aria-describedby": a.open ? a.contentId : void 0,
                            "data-state": a.stateAttribute,
                            ...l,
                            ref: f,
                            onPointerMove: (0, o.M)(e.onPointerMove, e => {
                                "touch" === e.pointerType || p.current || s.isPointerInTransitRef.current || (a.onTriggerEnter(), p.current = !0)
                            }),
                            onPointerLeave: (0, o.M)(e.onPointerLeave, () => {
                                a.onTriggerLeave(), p.current = !1
                            }),
                            onPointerDown: (0, o.M)(e.onPointerDown, () => {
                                d.current = !0, document.addEventListener("pointerup", h, {
                                    once: !0
                                })
                            }),
                            onFocus: (0, o.M)(e.onFocus, () => {
                                d.current || a.onOpen()
                            }),
                            onBlur: (0, o.M)(e.onBlur, a.onClose),
                            onClick: (0, o.M)(e.onClick, a.onClose)
                        })
                    })
                });
            tt.displayName = te;
            var [tn, tr] = eU("TooltipPortal", {
                forceMount: void 0
            }), to = "TooltipContent", ti = r.forwardRef((e, t) => {
                let n = tr(to, e.__scopeTooltip),
                    {
                        forceMount: r = n.forceMount,
                        side: o = "top",
                        ...i
                    } = e,
                    l = e9(to, e.__scopeTooltip);
                return (0, eA.jsx)(eG.z, {
                    present: r || l.open,
                    children: l.disableHoverableContent ? (0, eA.jsx)(tu, {
                        side: o,
                        ...i,
                        ref: t
                    }) : (0, eA.jsx)(tl, {
                        side: o,
                        ...i,
                        ref: t
                    })
                })
            }), tl = r.forwardRef((e, t) => {
                let n = e9(to, e.__scopeTooltip),
                    o = e4(to, e.__scopeTooltip),
                    l = r.useRef(null),
                    a = (0, i.e)(t, l),
                    [s, u] = r.useState(null),
                    {
                        trigger: c,
                        onClose: f
                    } = n,
                    d = l.current,
                    {
                        onPointerInTransitChange: p
                    } = o,
                    h = r.useCallback(() => {
                        u(null), p(!1)
                    }, [p]),
                    g = r.useCallback((e, t) => {
                        let n = e.currentTarget,
                            r = {
                                x: e.clientX,
                                y: e.clientY
                            },
                            o = function(e, t) {
                                let n = Math.abs(t.top - e.y),
                                    r = Math.abs(t.bottom - e.y),
                                    o = Math.abs(t.right - e.x),
                                    i = Math.abs(t.left - e.x);
                                switch (Math.min(n, r, o, i)) {
                                    case i:
                                        return "left";
                                    case o:
                                        return "right";
                                    case n:
                                        return "top";
                                    case r:
                                        return "bottom";
                                    default:
                                        throw Error("unreachable")
                                }
                            }(r, n.getBoundingClientRect());
                        u(function(e) {
                            let t = e.slice();
                            return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0),
                                function(e) {
                                    if (e.length <= 1) return e.slice();
                                    let t = [];
                                    for (let n = 0; n < e.length; n++) {
                                        let r = e[n];
                                        for (; t.length >= 2;) {
                                            let e = t[t.length - 1],
                                                n = t[t.length - 2];
                                            if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
                                            else break
                                        }
                                        t.push(r)
                                    }
                                    t.pop();
                                    let n = [];
                                    for (let t = e.length - 1; t >= 0; t--) {
                                        let r = e[t];
                                        for (; n.length >= 2;) {
                                            let e = n[n.length - 1],
                                                t = n[n.length - 2];
                                            if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
                                            else break
                                        }
                                        n.push(r)
                                    }
                                    return (n.pop(), 1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y) ? t : t.concat(n)
                                }(t)
                        }([... function(e, t, n = 5) {
                            let r = [];
                            switch (t) {
                                case "top":
                                    r.push({
                                        x: e.x - n,
                                        y: e.y + n
                                    }, {
                                        x: e.x + n,
                                        y: e.y + n
                                    });
                                    break;
                                case "bottom":
                                    r.push({
                                        x: e.x - n,
                                        y: e.y - n
                                    }, {
                                        x: e.x + n,
                                        y: e.y - n
                                    });
                                    break;
                                case "left":
                                    r.push({
                                        x: e.x + n,
                                        y: e.y - n
                                    }, {
                                        x: e.x + n,
                                        y: e.y + n
                                    });
                                    break;
                                case "right":
                                    r.push({
                                        x: e.x - n,
                                        y: e.y - n
                                    }, {
                                        x: e.x - n,
                                        y: e.y + n
                                    })
                            }
                            return r
                        }(r, o), ... function(e) {
                            let {
                                top: t,
                                right: n,
                                bottom: r,
                                left: o
                            } = e;
                            return [{
                                x: o,
                                y: t
                            }, {
                                x: n,
                                y: t
                            }, {
                                x: n,
                                y: r
                            }, {
                                x: o,
                                y: r
                            }]
                        }(t.getBoundingClientRect())])), p(!0)
                    }, [p]);
                return r.useEffect(() => () => h(), [h]), r.useEffect(() => {
                    if (c && d) {
                        let e = e => g(e, d),
                            t = e => g(e, c);
                        return c.addEventListener("pointerleave", e), d.addEventListener("pointerleave", t), () => {
                            c.removeEventListener("pointerleave", e), d.removeEventListener("pointerleave", t)
                        }
                    }
                }, [c, d, g, h]), r.useEffect(() => {
                    if (s) {
                        let e = e => {
                            let t = e.target,
                                n = {
                                    x: e.clientX,
                                    y: e.clientY
                                },
                                r = c ? .contains(t) || d ? .contains(t),
                                o = ! function(e, t) {
                                    let {
                                        x: n,
                                        y: r
                                    } = e, o = !1;
                                    for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                                        let l = t[e].x,
                                            a = t[e].y,
                                            s = t[i].x,
                                            u = t[i].y;
                                        a > r != u > r && n < (s - l) * (r - a) / (u - a) + l && (o = !o)
                                    }
                                    return o
                                }(n, s);
                            r ? h() : o && (h(), f())
                        };
                        return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
                    }
                }, [c, d, s, f, h]), (0, eA.jsx)(tu, { ...e,
                    ref: a
                })
            }), [ta, ts] = eU(e6, {
                isInside: !1
            }), tu = r.forwardRef((e, t) => {
                let {
                    __scopeTooltip: n,
                    children: o,
                    "aria-label": i,
                    onEscapeKeyDown: l,
                    onPointerDownOutside: s,
                    ...u
                } = e, c = e9(to, n), f = e0(n), {
                    onClose: d
                } = c;
                return r.useEffect(() => (document.addEventListener(e2, d), () => document.removeEventListener(e2, d)), [d]), r.useEffect(() => {
                    if (c.trigger) {
                        let e = e => {
                            let t = e.target;
                            t ? .contains(c.trigger) && d()
                        };
                        return window.addEventListener("scroll", e, {
                            capture: !0
                        }), () => window.removeEventListener("scroll", e, {
                            capture: !0
                        })
                    }
                }, [c.trigger, d]), (0, eA.jsx)(a.XB, {
                    asChild: !0,
                    disableOutsidePointerEvents: !1,
                    onEscapeKeyDown: l,
                    onPointerDownOutside: s,
                    onFocusOutside: e => e.preventDefault(),
                    onDismiss: d,
                    children: (0, eA.jsxs)(ez, {
                        "data-state": c.stateAttribute,
                        ...f,
                        ...u,
                        ref: t,
                        style: { ...u.style,
                            "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                        },
                        children: [(0, eA.jsx)(eJ.A4, {
                            children: o
                        }), (0, eA.jsx)(ta, {
                            scope: n,
                            isInside: !0,
                            children: (0, eA.jsx)(eQ, {
                                id: c.contentId,
                                role: "tooltip",
                                children: i || o
                            })
                        })]
                    })
                })
            });
            ti.displayName = to;
            var tc = "TooltipArrow",
                tf = r.forwardRef((e, t) => {
                    let {
                        __scopeTooltip: n,
                        ...r
                    } = e, o = e0(n);
                    return ts(tc, n).isInside ? null : (0, eA.jsx)(eI, { ...o,
                        ...r,
                        ref: t
                    })
                });
            tf.displayName = tc;
            var td = e3,
                tp = e8,
                th = tt,
                tg = ti,
                tm = tf
        }
    }
]);