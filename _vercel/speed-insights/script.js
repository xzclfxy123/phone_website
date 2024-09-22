"use strict";
(() => {
    var e = (e, t) => () => (e && (t = e(e = 0)), t),
        t = (e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports);

    function n(e) {
        let t = location.href;
        if (e) {
            let n = new URL(t);
            if (n.pathname !== e) return n.pathname = e, n.search = "", n.href
        }
        return t
    }
    var r, i, a, o, u, c, s, l, f, d, v, m, p, h, g, y, T, S, E, b, L, w, C, M, x, k, A, F, I, B, D, P, R, N, q, O, H, V, U, _, j, J, $, z, G, K, Q, W, X, Y, Z, ee, et, en, er, ei, ea, eo, eu, ec, es, el = e(() => {}),
        ef = e(() => {
            c = function() {
                return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
            }, s = function(e) {
                if ("loading" === document.readyState) return "loading";
                var t = c();
                if (t) {
                    if (e < t.domInteractive) return "loading";
                    if (0 === t.domContentLoadedEventStart || e < t.domContentLoadedEventStart) return "dom-interactive";
                    if (0 === t.domComplete || e < t.domComplete) return "dom-content-loaded"
                }
                return "complete"
            }, l = function(e) {
                var t = e.nodeName;
                return 1 === e.nodeType ? t.toLowerCase() : t.toUpperCase().replace(/^#/, "")
            }, f = function(e, t) {
                var n = "";
                try {
                    for (; e && 9 !== e.nodeType;) {
                        var r = e,
                            i = r.id ? "#" + r.id : l(r) + (r.classList && r.classList.value && r.classList.value.trim() && r.classList.value.trim().length ? "." + r.classList.value.trim().replace(/\s+/g, ".") : "");
                        if (n.length + i.length > (t || 100) - 1) return n || i;
                        if (n = n ? i + ">" + n : i, r.id) break;
                        e = r.parentNode
                    }
                } catch (a) {}
                return n
            }, d = -1, v = function() {
                return d
            }, m = function(e) {
                addEventListener("pageshow", function(t) {
                    t.persisted && (d = t.timeStamp, e(t))
                }, !0)
            }, p = function() {
                var e = c();
                return e && e.activationStart || 0
            }, h = function(e, t) {
                var n = c(),
                    r = "navigate";
                return v() >= 0 ? r = "back-forward-cache" : n && (document.prerendering || p() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))), {
                    name: e,
                    value: void 0 === t ? -1 : t,
                    rating: "good",
                    delta: 0,
                    entries: [],
                    id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                    navigationType: r
                }
            }, g = function(e, t, n) {
                try {
                    if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                        var r = new PerformanceObserver(function(e) {
                            Promise.resolve().then(function() {
                                t(e.getEntries())
                            })
                        });
                        return r.observe(Object.assign({
                            type: e,
                            buffered: !0
                        }, n || {})), r
                    }
                } catch (i) {}
            }, y = function(e, t, n, r) {
                var i, a;
                return function(o) {
                    var u;
                    t.value >= 0 && (o || r) && ((a = t.value - (i || 0)) || void 0 === i) && (i = t.value, t.delta = a, t.rating = (u = t.value) > n[1] ? "poor" : u > n[0] ? "needs-improvement" : "good", e(t))
                }
            }, T = function(e) {
                requestAnimationFrame(function() {
                    return requestAnimationFrame(function() {
                        return e()
                    })
                })
            }, S = function(e) {
                var t = function(t) {
                    "pagehide" !== t.type && "hidden" !== document.visibilityState || e(t)
                };
                addEventListener("visibilitychange", t, !0), addEventListener("pagehide", t, !0)
            }, E = function(e) {
                var t = !1;
                return function(n) {
                    t || (e(n), t = !0)
                }
            }, b = -1, L = function() {
                return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
            }, w = function(e) {
                "hidden" === document.visibilityState && b > -1 && (b = "visibilitychange" === e.type ? e.timeStamp : 0, M())
            }, C = function() {
                addEventListener("visibilitychange", w, !0), addEventListener("prerenderingchange", w, !0)
            }, M = function() {
                removeEventListener("visibilitychange", w, !0), removeEventListener("prerenderingchange", w, !0)
            }, x = function() {
                return b < 0 && (b = L(), C(), m(function() {
                    setTimeout(function() {
                        b = L(), C()
                    }, 0)
                })), {
                    get firstHiddenTime() {
                        return b
                    }
                }
            }, k = function(e) {
                document.prerendering ? addEventListener("prerenderingchange", function() {
                    return e()
                }, !0) : e()
            }, A = [1800, 3e3], F = function(e, t) {
                t = t || {}, k(function() {
                    var n, r = x(),
                        i = h("FCP"),
                        a = g("paint", function(e) {
                            e.forEach(function(e) {
                                "first-contentful-paint" === e.name && (a.disconnect(), e.startTime < r.firstHiddenTime && (i.value = Math.max(e.startTime - p(), 0), i.entries.push(e), n(!0)))
                            })
                        });
                    a && (n = y(e, i, A, t.reportAllChanges), m(function(r) {
                        n = y(e, i = h("FCP"), A, t.reportAllChanges), T(function() {
                            i.value = performance.now() - r.timeStamp, n(!0)
                        })
                    }))
                })
            }, I = [.1, .25], B = function(e, t) {
                var n, r;
                n = function(t) {
                    (function(e) {
                        if (e.entries.length) {
                            var t, n = e.entries.reduce(function(e, t) {
                                return e && e.value > t.value ? e : t
                            });
                            if (n && n.sources && n.sources.length) {
                                var r = (t = n.sources).find(function(e) {
                                    return e.node && 1 === e.node.nodeType
                                }) || t[0];
                                if (r) return void(e.attribution = {
                                    largestShiftTarget: f(r.node),
                                    largestShiftTime: n.startTime,
                                    largestShiftValue: n.value,
                                    largestShiftSource: r,
                                    largestShiftEntry: n,
                                    loadState: s(n.startTime)
                                })
                            }
                        }
                        e.attribution = {}
                    })(t), e(t)
                }, r = (r = t) || {}, F(E(function() {
                    var e, t = h("CLS", 0),
                        i = 0,
                        a = [],
                        o = function(n) {
                            n.forEach(function(e) {
                                if (!e.hadRecentInput) {
                                    var t = a[0],
                                        n = a[a.length - 1];
                                    i && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (i += e.value, a.push(e)) : (i = e.value, a = [e])
                                }
                            }), i > t.value && (t.value = i, t.entries = a, e())
                        },
                        u = g("layout-shift", o);
                    u && (e = y(n, t, I, r.reportAllChanges), S(function() {
                        o(u.takeRecords()), e(!0)
                    }), m(function() {
                        i = 0, e = y(n, t = h("CLS", 0), I, r.reportAllChanges), T(function() {
                            return e()
                        })
                    }), setTimeout(e, 0))
                }))
            }, D = function(e, t) {
                F(function(t) {
                    (function(e) {
                        if (e.entries.length) {
                            var t = c(),
                                n = e.entries[e.entries.length - 1];
                            if (t) {
                                var r = t.activationStart || 0,
                                    i = Math.max(0, t.responseStart - r);
                                return void(e.attribution = {
                                    timeToFirstByte: i,
                                    firstByteToFCP: e.value - i,
                                    loadState: s(e.entries[0].startTime),
                                    navigationEntry: t,
                                    fcpEntry: n
                                })
                            }
                        }
                        e.attribution = {
                            timeToFirstByte: 0,
                            firstByteToFCP: e.value,
                            loadState: s(v())
                        }
                    })(t), e(t)
                }, t)
            }, P = {
                passive: !0,
                capture: !0
            }, R = new Date, N = function(e, t) {
                r || (r = t, i = e, a = new Date, H(removeEventListener), q())
            }, q = function() {
                if (i >= 0 && i < a - R) {
                    var e = {
                        entryType: "first-input",
                        name: r.type,
                        target: r.target,
                        cancelable: r.cancelable,
                        startTime: r.timeStamp,
                        processingStart: r.timeStamp + i
                    };
                    o.forEach(function(t) {
                        t(e)
                    }), o = []
                }
            }, O = function(e) {
                if (e.cancelable) {
                    var t, n, r, i = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
                    "pointerdown" == e.type ? (t = function() {
                        N(i, e), r()
                    }, n = function() {
                        r()
                    }, r = function() {
                        removeEventListener("pointerup", t, P), removeEventListener("pointercancel", n, P)
                    }, addEventListener("pointerup", t, P), addEventListener("pointercancel", n, P)) : N(i, e)
                }
            }, H = function(e) {
                ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(t) {
                    return e(t, O, P)
                })
            }, V = [100, 300], U = function(e, t) {
                t = t || {}, k(function() {
                    var n, a = x(),
                        u = h("FID"),
                        c = function(e) {
                            e.startTime < a.firstHiddenTime && (u.value = e.processingStart - e.startTime, u.entries.push(e), n(!0))
                        },
                        s = function(e) {
                            e.forEach(c)
                        },
                        l = g("first-input", s);
                    n = y(e, u, V, t.reportAllChanges), l && S(E(function() {
                        s(l.takeRecords()), l.disconnect()
                    })), l && m(function() {
                        n = y(e, u = h("FID"), V, t.reportAllChanges), o = [], i = -1, r = null, H(addEventListener), o.push(c), q()
                    })
                })
            }, _ = function(e, t) {
                U(function(t) {
                    var n, r;
                    r = (n = t).entries[0], n.attribution = {
                        eventTarget: f(r.target),
                        eventType: r.name,
                        eventTime: r.startTime,
                        eventEntry: r,
                        loadState: s(r.startTime)
                    }, e(t)
                }, t)
            }, j = 0, J = 1 / 0, $ = 0, z = function(e) {
                e.forEach(function(e) {
                    e.interactionId && (J = Math.min(J, e.interactionId), j = ($ = Math.max($, e.interactionId)) ? ($ - J) / 7 + 1 : 0)
                })
            }, G = function() {
                return u ? j : performance.interactionCount || 0
            }, K = function() {
                "interactionCount" in performance || u || (u = g("event", z, {
                    type: "event",
                    buffered: !0,
                    durationThreshold: 0
                }))
            }, Q = [200, 500], W = 0, X = function() {
                return G() - W
            }, Y = [], Z = {}, ee = function(e) {
                var t = Y[Y.length - 1],
                    n = Z[e.interactionId];
                if (n || Y.length < 10 || e.duration > t.latency) {
                    if (n) n.entries.push(e), n.latency = Math.max(n.latency, e.duration);
                    else {
                        var r = {
                            id: e.interactionId,
                            latency: e.duration,
                            entries: [e]
                        };
                        Z[r.id] = r, Y.push(r)
                    }
                    Y.sort(function(e, t) {
                        return t.latency - e.latency
                    }), Y.splice(10).forEach(function(e) {
                        delete Z[e.id]
                    })
                }
            }, et = function(e, t) {
                t = t || {}, k(function() {
                    K();
                    var n, r = h("INP"),
                        i = function(e) {
                            e.forEach(function(e) {
                                e.interactionId && ee(e), "first-input" !== e.entryType || Y.some(function(t) {
                                    return t.entries.some(function(t) {
                                        return e.duration === t.duration && e.startTime === t.startTime
                                    })
                                }) || ee(e)
                            });
                            var t = Y[Math.min(Y.length - 1, Math.floor(X() / 50))];
                            t && t.latency !== r.value && (r.value = t.latency, r.entries = t.entries, n())
                        },
                        a = g("event", i, {
                            durationThreshold: t.durationThreshold || 40
                        });
                    n = y(e, r, Q, t.reportAllChanges), a && (a.observe({
                        type: "first-input",
                        buffered: !0
                    }), S(function() {
                        i(a.takeRecords()), r.value < 0 && X() > 0 && (r.value = 0, r.entries = []), n(!0)
                    }), m(function() {
                        Y = [], W = G(), n = y(e, r = h("INP"), Q, t.reportAllChanges)
                    }))
                })
            }, en = function(e, t) {
                et(function(t) {
                    (function(e) {
                        if (e.entries.length) {
                            var t = e.entries.sort(function(e, t) {
                                return t.duration - e.duration || t.processingEnd - t.processingStart - (e.processingEnd - e.processingStart)
                            })[0];
                            e.attribution = {
                                eventTarget: f(t.target),
                                eventType: t.name,
                                eventTime: t.startTime,
                                eventEntry: t,
                                loadState: s(t.startTime)
                            }
                        } else e.attribution = {}
                    })(t), e(t)
                }, t)
            }, er = [2500, 4e3], ei = {}, ea = function(e, t) {
                var n, r;
                n = function(t) {
                    (function(e) {
                        if (e.entries.length) {
                            var t = c();
                            if (t) {
                                var n = t.activationStart || 0,
                                    r = e.entries[e.entries.length - 1],
                                    i = r.url && performance.getEntriesByType("resource").filter(function(e) {
                                        return e.name === r.url
                                    })[0],
                                    a = Math.max(0, t.responseStart - n),
                                    o = Math.max(a, i ? (i.requestStart || i.startTime) - n : 0),
                                    u = Math.max(o, i ? i.responseEnd - n : 0),
                                    s = Math.max(u, r ? r.startTime - n : 0),
                                    l = {
                                        element: f(r.element),
                                        timeToFirstByte: a,
                                        resourceLoadDelay: o - a,
                                        resourceLoadTime: u - o,
                                        elementRenderDelay: s - u,
                                        navigationEntry: t,
                                        lcpEntry: r
                                    };
                                return r.url && (l.url = r.url), i && (l.lcpResourceEntry = i), void(e.attribution = l)
                            }
                        }
                        e.attribution = {
                            timeToFirstByte: 0,
                            resourceLoadDelay: 0,
                            resourceLoadTime: 0,
                            elementRenderDelay: e.value
                        }
                    })(t), e(t)
                }, r = (r = t) || {}, k(function() {
                    var e, t = x(),
                        i = h("LCP"),
                        a = function(n) {
                            var r = n[n.length - 1];
                            r && r.startTime < t.firstHiddenTime && (i.value = Math.max(r.startTime - p(), 0), i.entries = [r], e())
                        },
                        o = g("largest-contentful-paint", a);
                    if (o) {
                        e = y(n, i, er, r.reportAllChanges);
                        var u = E(function() {
                            ei[i.id] || (a(o.takeRecords()), o.disconnect(), ei[i.id] = !0, e(!0))
                        });
                        ["keydown", "click"].forEach(function(e) {
                            addEventListener(e, u, !0)
                        }), S(u), m(function(t) {
                            e = y(n, i = h("LCP"), er, r.reportAllChanges), T(function() {
                                i.value = performance.now() - t.timeStamp, ei[i.id] = !0, e(!0)
                            })
                        })
                    }
                })
            }, eo = [800, 1800], eu = function e(t) {
                document.prerendering ? k(function() {
                    return e(t)
                }) : "complete" !== document.readyState ? addEventListener("load", function() {
                    return e(t)
                }, !0) : setTimeout(t, 0)
            }, ec = function(e, t) {
                t = t || {};
                var n = h("TTFB"),
                    r = y(e, n, eo, t.reportAllChanges);
                eu(function() {
                    var i = c();
                    if (i) {
                        var a = i.responseStart;
                        if (a <= 0 || a > performance.now()) return;
                        n.value = Math.max(a - p(), 0), n.entries = [i], r(!0), m(function() {
                            (r = y(e, n = h("TTFB", 0), eo, t.reportAllChanges))(!0)
                        })
                    }
                })
            }, es = function(e, t) {
                ec(function(t) {
                    (function(e) {
                        if (e.entries.length) {
                            var t = e.entries[0],
                                n = t.activationStart || 0,
                                r = Math.max(t.domainLookupStart - n, 0),
                                i = Math.max(t.connectStart - n, 0),
                                a = Math.max(t.requestStart - n, 0);
                            e.attribution = {
                                waitingTime: r,
                                dnsTime: i - r,
                                connectionTime: a - i,
                                requestTime: e.value - a,
                                navigationEntry: t
                            }
                        } else e.attribution = {
                            waitingTime: 0,
                            dnsTime: 0,
                            connectionTime: 0,
                            requestTime: 0
                        }
                    })(t), e(t)
                }, t)
            }
        });

    function ed() {
        let e = "";
        if ("connection" in navigator) {
            let t = navigator.connection;
            null != t && t.effectiveType && (e = t.effectiveType)
        }
        return e
    }

    function ev(e) {
        B(e), _(e), ea(e), D(e), en(e), es(e)
    }

    function em(e, t) {
        let n = new Blob([JSON.stringify(e)], {
            type: "text/plain"
        });
        try {
            "keepalive" in Request.prototype ? fetch(t, {
                method: "POST",
                body: n,
                keepalive: !0,
                mode: "no-cors"
            }).catch(() => {}) : "sendBeacon" in navigator && navigator.sendBeacon(t, n)
        } catch (r) {}
    }

    function ep(e) {
        try {
            if ("CLS" === e.name) return {
                eventTarget: e.attribution.largestShiftTarget
            };
            if ("FID" === e.name || "INP" === e.name) return {
                eventTarget: e.attribution.eventTarget,
                eventType: e.attribution.eventType
            };
            if ("element" in e.attribution) return {
                eventTarget: e.attribution.element
            }
        } catch (t) {}
    }

    function eh(e, t) {
        if (Number.isInteger(e)) return e;
        let n = Math.pow(10, t);
        return Math.floor(e * n) / n
    }

    function eg(e) {
        return "CLS" === e.name ? eh(e.value, 4) : "FID" === e.name ? eh(e.value, 2) : Math.round(e.value)
    }
    var ey = e(() => {
        ef()
    });
    t(() => {
        el(), ey(),
            function() {
                var e;
                let t = [],
                    r = e => e,
                    i = document.currentScript,
                    a = Number(null != (e = null == i ? void 0 : i.dataset.sampleRate) ? e : 1),
                    o = null == i ? void 0 : i.dataset.dsn,
                    u = (null == i ? void 0 : i.dataset.endpoint) || (o ? `https://vitals.vercel-insights.com/v2/vitals?dsn=${o}&ve=production` : "/_vercel/speed-insights/vitals"),
                    c = () => {
                        var e, n;
                        if (0 === t.length || 1 !== a && Math.random() > a) return;
                        let o = ed(),
                            c = t.map(e => ({
                                id: e.id,
                                type: e.name,
                                route: e.route,
                                href: e.href,
                                value: eg(e),
                                attribution: ep(e)
                            })).map(e => {
                                let t = r({
                                    type: "vital",
                                    url: e.href,
                                    route: e.route
                                });
                                return t ? { ...e,
                                    href: t.url
                                } : null
                            }).filter(e => null !== e);
                        0 !== c.length && (em({
                            speed: o,
                            metrics: c,
                            scriptVersion: "0.1.2",
                            sdkName: null != (e = null == i ? void 0 : i.getAttribute("data-sdkn")) ? e : void 0,
                            sdkVersion: null != (n = null == i ? void 0 : i.getAttribute("data-sdkv")) ? n : void 0
                        }, u), t = [])
                    },
                    s = () => {
                        var e;
                        window.si = function(e, t) {
                            "beforeSend" === e && (r = t)
                        }, null == (e = window.siq) || e.forEach(([e, t]) => {
                            window.si(e, t)
                        })
                    };
                (() => {
                    if (window.sil) return;
                    window.sil = !0, ev(e => {
                        t.push({ ...e,
                            href: n(null == i ? void 0 : i.dataset.path),
                            route: null == i ? void 0 : i.dataset.route
                        }), 6 === t.length && c()
                    }), addEventListener("visibilitychange", c), addEventListener("pagehide", c), addEventListener("popstate", c);
                    let e = history.pushState.bind(history);
                    history.pushState = function(...t) {
                        e(...t);
                        try {
                            c()
                        } catch (n) {}
                    }, s()
                })()
            }()
    })()
})();