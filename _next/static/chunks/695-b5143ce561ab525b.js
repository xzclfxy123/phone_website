(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [695], {
        34424: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return h
                }
            });
            var i = t(31549),
                a = t(44194),
                r = t(80385),
                o = t(51865),
                s = t.n(o),
                l = t(85277),
                c = t.n(l),
                d = t(68371),
                m = t.n(d);
            let u = e => {
                var n;
                return "".concat(e.value.toFixed(2), " ").concat(null !== (n = e.unit) && void 0 !== n ? n : "mm")
            };

            function h(e) {
                var n, t, o, l;
                let {
                    left: d,
                    right: h,
                    bottom: _,
                    top: p,
                    src: g,
                    className: f,
                    theme: y = "dark",
                    caption: b = "",
                    imageStyles: x = {},
                    linesStyle: v = {},
                    labelsStyle: w = {},
                    useResponsiveImage: j = !1,
                    lineDistance: P = 16
                } = e, q = (0, a.useMemo)(() => !!(p || _ || d || h), [_, d, h, p]);
                return (0, i.jsxs)("div", {
                    className: s()(m().grid, f),
                    children: [(0, i.jsx)("div", {}), (0, i.jsx)("div", {
                        className: m().widthTop,
                        style: {
                            width: "".concat(null !== (n = null == p ? void 0 : p.percentage) && void 0 !== n ? n : 0, "%")
                        },
                        children: p && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(r.ZT, {
                                variant: "label1",
                                theme: y,
                                css: {
                                    whiteSpace: "nowrap"
                                },
                                style: w.top,
                                children: u(p)
                            }), (0, i.jsx)("div", {
                                className: s()(m().lineTop, m()["lineTheme".concat(y)]),
                                style: {
                                    marginBottom: P,
                                    ...v.top
                                }
                            })]
                        })
                    }), (0, i.jsx)("div", {}), (0, i.jsx)("div", {
                        className: m().heightLeft,
                        style: {
                            height: "".concat(null !== (t = null == d ? void 0 : d.percentage) && void 0 !== t ? t : 0, "%")
                        },
                        children: d && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(r.ZT, {
                                variant: "label1",
                                theme: y,
                                css: {
                                    whiteSpace: "nowrap"
                                },
                                style: w.left,
                                children: u(d)
                            }), (0, i.jsx)("div", {
                                className: s()(m().lineLeft, m()["lineTheme".concat(y)]),
                                style: {
                                    marginRight: P,
                                    ...v.left
                                }
                            })]
                        })
                    }), (0, i.jsx)("div", {
                        className: m().imageContainer,
                        children: (0, i.jsx)(c(), {
                            src: g,
                            alt: "Product Image",
                            style: { ...j ? {
                                    width: "auto",
                                    height: "auto"
                                } : {},
                                ...x
                            },
                            placeholder: "blur",
                            sizes: j ? "100vw" : void 0
                        })
                    }), (0, i.jsx)("div", {
                        className: m().heightRight,
                        style: {
                            height: "".concat(null !== (o = null == h ? void 0 : h.percentage) && void 0 !== o ? o : 0, "%")
                        },
                        children: h && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                className: s()(m().lineRight, m()["lineTheme".concat(y)]),
                                style: {
                                    marginLeft: P,
                                    ...v.right
                                }
                            }), (0, i.jsx)(r.ZT, {
                                variant: "label1",
                                theme: y,
                                css: {
                                    whiteSpace: "nowrap"
                                },
                                style: w.right,
                                children: u(h)
                            })]
                        })
                    }), (0, i.jsx)("div", {}), (0, i.jsx)("div", {
                        className: m().widthBottom,
                        style: {
                            width: "".concat(null !== (l = null == _ ? void 0 : _.percentage) && void 0 !== l ? l : 0, "%")
                        },
                        children: _ && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                className: s()(m().lineBottom, m()["lineTheme".concat(y)]),
                                style: {
                                    marginTop: P,
                                    ...v.bottom
                                }
                            }), (0, i.jsx)(r.ZT, {
                                variant: "label1",
                                theme: y,
                                css: {
                                    whiteSpace: "nowrap"
                                },
                                style: w.bottom,
                                children: u(_)
                            })]
                        })
                    }), (0, i.jsx)("div", {}), q && (0, i.jsx)("div", {
                        className: m().mobileDimensions,
                        children: (0, i.jsxs)("div", {
                            children: [d && (0, i.jsxs)("div", {
                                className: m().mobileDimensionsItem,
                                children: [(0, i.jsx)("div", {
                                    className: s()(m().lineLeft, m().lineLeftMobile, m()["lineTheme".concat(y)])
                                }), (0, i.jsx)(r.ZT, {
                                    variant: "body1",
                                    theme: y,
                                    css: {
                                        whiteSpace: "nowrap"
                                    },
                                    children: u(d)
                                })]
                            }), p && (0, i.jsxs)("div", {
                                className: m().mobileDimensionsItem,
                                children: [(0, i.jsx)("div", {
                                    className: s()(m().lineTop, m().lineTopMobile, m()["lineTheme".concat(y)])
                                }), (0, i.jsx)(r.ZT, {
                                    variant: "body1",
                                    theme: y,
                                    css: {
                                        whiteSpace: "nowrap"
                                    },
                                    children: u(p)
                                })]
                            }), h && (0, i.jsxs)("div", {
                                className: m().mobileDimensionsItem,
                                children: [(0, i.jsx)("div", {
                                    className: s()(m().lineRight, m().lineRightMobile, m()["lineTheme".concat(y)])
                                }), (0, i.jsx)(r.ZT, {
                                    variant: "body1",
                                    theme: y,
                                    css: {
                                        whiteSpace: "nowrap"
                                    },
                                    children: u(h)
                                })]
                            }), _ && (0, i.jsxs)("div", {
                                className: m().mobileDimensionsItem,
                                children: [(0, i.jsx)("div", {
                                    className: s()(m().lineBottom, m().lineBottomMobile, m()["lineTheme".concat(y)])
                                }), (0, i.jsx)(r.ZT, {
                                    variant: "body1",
                                    theme: y,
                                    css: {
                                        whiteSpace: "nowrap"
                                    },
                                    children: u(_)
                                })]
                            })]
                        })
                    }), !!b && (0, i.jsx)("div", {
                        className: m().caption,
                        children: (0, i.jsx)(r.ZT, {
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
        76818: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return h
                }
            });
            var i = t(31549),
                a = t(44194),
                r = t(80385),
                o = t(51865),
                s = t.n(o),
                l = t(56342),
                c = t(36402),
                d = t(99857),
                m = t(35306),
                u = t.n(m);

            function h(e) {
                var n;
                let {
                    product: t,
                    selectedVariant: o,
                    dataTestId: m
                } = e, [h, _] = (0, a.useState)(!1), {
                    startCartMutation: p,
                    lines: g
                } = (0, c.Z)();
                if (!o) return null;
                let f = null == g ? void 0 : g.find(e => {
                        var n;
                        return (null == e ? void 0 : null === (n = e.merchandise) || void 0 === n ? void 0 : n.id) === (null == o ? void 0 : o.id)
                    }),
                    y = null !== (n = null == f ? void 0 : f.quantity) && void 0 !== n ? n : 0,
                    b = null == o ? void 0 : o.availableForSale,
                    x = y >= d.ci,
                    v = async () => {
                        if (!x) {
                            _(!0);
                            try {
                                await p(e => {
                                    let {
                                        linesAdd: n
                                    } = e;
                                    (null == o ? void 0 : o.id) && (n([{
                                        merchandiseId: null == o ? void 0 : o.id,
                                        quantity: 1
                                    }]), (0, l.Zt)("humane_shop_add_to_cart", {
                                        items: [{
                                            product: t,
                                            variant: o
                                        }]
                                    }))
                                })
                            } finally {
                                _(!1)
                            }
                        }
                    },
                    w = async () => {
                        if (y > 0) {
                            _(!0);
                            try {
                                await p(e => {
                                    let {
                                        linesUpdate: n
                                    } = e;
                                    (null == f ? void 0 : f.id) && (null == o ? void 0 : o.id) && (n([{
                                        id: f.id,
                                        merchandiseId: null == o ? void 0 : o.id,
                                        quantity: y - 1
                                    }]), (0, l.Zt)("humane_shop_remove_from_cart", {
                                        items: [{
                                            product: t,
                                            variant: o
                                        }]
                                    }))
                                })
                            } finally {
                                _(!1)
                            }
                        }
                    },
                    j = e => {
                        e.preventDefault(), v()
                    },
                    P = y >= 1;
                return b ? (0, i.jsx)("div", {
                    className: s()(u().wrapper, {
                        [u().disabled]: h
                    }),
                    "data-testid": m,
                    "data-quantity": y,
                    children: P ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            className: u().quantityButton,
                            role: "button",
                            tabIndex: 0,
                            "data-testid": "".concat(m, "-decrease"),
                            "data-quantity": y,
                            onKeyDown: w,
                            onClick: e => {
                                e.preventDefault(), w()
                            },
                            children: "-"
                        }), (0, i.jsx)("div", {
                            className: u().buttonText,
                            children: h ? (0, i.jsx)(r.TK, {
                                size: "small",
                                theme: "light"
                            }) : "".concat(y, " Added")
                        }), (0, i.jsx)("div", {
                            className: s()(u().quantityButton, {
                                [u().disabledArea]: x
                            }),
                            role: "button",
                            tabIndex: 0,
                            "data-testid": "".concat(m, "-increase"),
                            "data-quantity": y,
                            onKeyDown: v,
                            onClick: j,
                            children: "+"
                        })]
                    }) : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {}), (0, i.jsx)("div", {
                            role: "button",
                            tabIndex: 0,
                            "data-testid": "".concat(m, "-increase"),
                            "data-quantity": y,
                            className: u().clickable,
                            onKeyDown: v,
                            onClick: j,
                            children: h ? (0, i.jsx)(r.TK, {
                                size: "small",
                                theme: "light"
                            }) : "Add +"
                        }), (0, i.jsx)("div", {})]
                    })
                }) : null
            }
        },
        84450: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return h
                }
            });
            var i = t(31549),
                a = t(80385),
                r = t(78627),
                o = t(51865),
                s = t.n(o),
                l = t(64066),
                c = t(79449);
            let d = [{
                accordionTitle: "faq-subaccordion",
                accordionValue: "faq",
                buttonLabel: "Orders, Shipping & Returns",
                children: [{
                    accordionTitle: "a",
                    accordionValue: "a",
                    buttonLabel: "How long will it take for my order to ship?",
                    description: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("p", {
                            children: "Those who placed priority orders will receive their Ai Pins first when we begin shipping in March."
                        }), (0, i.jsx)("p", {
                            children: "We are shipping all orders in the order they were received, based on the date of purchase. After you have placed your order, to check the status, visit Orders within My Account. You’ll receive an email when your order is ready to ship."
                        })]
                    })
                }, {
                    accordionTitle: "a",
                    accordionValue: "a",
                    buttonLabel: "Do you ship internationally?",
                    description: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("p", {
                            children: "We are currently only selling and shipping our products in the United States. Within the US, we do not currently ship to PO boxes, military bases, or US territories."
                        }), (0, i.jsxs)("p", {
                            children: [(0, i.jsx)("a", {
                                href: "/subscribe",
                                children: "Sign up"
                            }), " ", "to be notified when AI Pin becomes available in your market."]
                        })]
                    })
                }, {
                    accordionTitle: "a",
                    accordionValue: "a",
                    buttonLabel: "How can I order Ai Pin as a gift?",
                    description: "You can purchase gift cards from our shop. Gift cards are delivered digitally."
                }, {
                    accordionTitle: "a",
                    accordionValue: "a",
                    buttonLabel: "Can I order more than one Ai Pin?",
                    description: "No. Each Ai Pin is associated with a single, corresponding Humane account."
                }, {
                    accordionTitle: "a",
                    accordionValue: "a",
                    buttonLabel: "Do you offer bulk orders?",
                    description: (0, i.jsxs)(i.Fragment, {
                        children: ["If you’re looking to purchase corporate gifts or bulk orders, submit your request", " ", (0, i.jsx)("a", {
                            href: "https://uercvbq7i8l.typeform.com/to/MP2PwPng",
                            rel: "noreferrer noopener",
                            children: "here"
                        }), " ", "and our sales team will follow up directly."]
                    })
                }, {
                    accordionTitle: "a",
                    accordionValue: "a",
                    buttonLabel: "Do you accept returns?",
                    description: (0, i.jsxs)(i.Fragment, {
                        children: ["We accept returns for a refund up to 30 days after your order ships. See our", " ", (0, i.jsx)("a", {
                            href: "/return-policy",
                            children: "Return Policy"
                        }), " ", "for more information."]
                    })
                }]
            }, {
                accordionTitle: "faq-subaccordion",
                accordionValue: "faq",
                buttonLabel: "Subscription",
                children: [{
                    accordionTitle: "b",
                    accordionValue: "b",
                    buttonLabel: "Can I use Ai Pin without paying for a subscription?",
                    description: (0, i.jsxs)(i.Fragment, {
                        children: ["You must purchase a monthly subscription in order to use Ai Pin. The Humane Subscription pays for your cloud data storage, access to Ai services, and a domestic cellular plan with talk, text, and data. We’ll guide you through the setup process before your Ai Pin ships.  More details on paid add-ons can be found", " ", (0, i.jsx)("a", {
                            href: "/subscription",
                            children: "here."
                        })]
                    })
                }, {
                    accordionTitle: "b",
                    accordionValue: "b",
                    buttonLabel: "How much does the Humane Subscription cost?",
                    description: "The Humane Subscription is $24/month plus taxes and fees"
                }, {
                    accordionTitle: "b",
                    accordionValue: "b",
                    buttonLabel: "What phone and wireless features are included in the Humane Subscription?",
                    description: (0, i.jsxs)(i.Fragment, {
                        children: ["The subscription includes:", (0, i.jsxs)("ul", {
                            children: [(0, i.jsx)("li", {
                                children: "A dedicated phone number for your Ai Pin"
                            }), (0, i.jsx)("li", {
                                children: "Unlimited talk, text, and data within the US"
                            }), (0, i.jsx)("li", {
                                children: "Unlimited texting to international numbers from the US"
                            }), (0, i.jsx)("li", {
                                children: "Voicemail and voicemail transcription"
                            }), (0, i.jsx)("li", {
                                children: "Three-way calling"
                            }), (0, i.jsx)("li", {
                                children: "Call waiting"
                            }), (0, i.jsx)("li", {
                                children: "Caller ID"
                            })]
                        }), "Humane operates its own wireless service, connected by T-Mobile\xae. We also offer paid add-ons for international long-distance calling and international roaming. More details on paid add-ons can be found", " ", (0, i.jsx)("a", {
                            href: "/subscription",
                            children: "here"
                        }), "."]
                    })
                }, {
                    accordionTitle: "b",
                    accordionValue: "b",
                    buttonLabel: "What is considered excessive roaming?",
                    description: "If your Roaming usage exceeds 50% of your total data usage in any 3 months within a 12-month period, you may be subject to suspension or disconnection of service."
                }]
            }, {
                accordionTitle: "faq-subaccordion",
                accordionValue: "faq",
                buttonLabel: "Product",
                children: [{
                    accordionTitle: "c",
                    accordionValue: "c",
                    buttonLabel: "What are the specs for Ai Pin?",
                    description: (0, i.jsxs)(i.Fragment, {
                        children: ["Detailed specifications for Ai Pin can be found", " ", (0, i.jsx)("a", {
                            href: "/aipin/tech-details",
                            children: "here"
                        }), "."]
                    })
                }, {
                    accordionTitle: "c",
                    accordionValue: "c",
                    buttonLabel: "Can I use Bluetooth headphones with Ai Pin?",
                    description: "Yes, Ai Pin has Bluetooth capabilities and can sync with wireless headphones."
                }, {
                    accordionTitle: "c",
                    accordionValue: "c",
                    buttonLabel: "Can I bring my own phone number to use with Ai Pin?",
                    description: "Your Humane Subscription provides you with a cell phone number for Ai Pin. There is currently no way to port over an existing phone number to your Ai Pin. We hope to offer this feature sometime in the future."
                }, {
                    accordionTitle: "c",
                    accordionValue: "c",
                    buttonLabel: "Can I travel outside of the United States with my Ai Pin?",
                    description: (0, i.jsxs)(i.Fragment, {
                        children: ["Yes. International roaming add-ons are available. More details on paid add-ons can be found", " ", (0, i.jsx)("a", {
                            href: "/subscription",
                            children: "here"
                        }), "."]
                    })
                }, {
                    accordionTitle: "c",
                    accordionValue: "c",
                    buttonLabel: "How do I know when the camera and microphone are on?",
                    description: "The Trust Light indicates when its input, optical, or audio sensors are active, ensuring full transparency. Additionally, any action that requires use of the camera or microphone requires a touch on the touchpad, so Ai Pin will never take a photo or listen unless you explicitly tell it to."
                }, {
                    accordionTitle: "c",
                    accordionValue: "c",
                    buttonLabel: "What music streaming services are available on Ai Pin?",
                    description: "You’ll need a subscription or trial of TIDAL Individual in order to listen to music on Ai Pin. Visit TIDAL.com for current pricing and offers."
                }, {
                    accordionTitle: "c",
                    accordionValue: "c",
                    buttonLabel: "How do I access TIDAL promotional offers available to Humane customers?",
                    description: "If you’re eligible to receive a promotion, a link to redeem the promotion will be available in the Services section of your Humane.Center account, under TIDAL."
                }, {
                    accordionTitle: "c",
                    accordionValue: "c",
                    buttonLabel: "Where does Ai Pin source its information?",
                    description: "Depending on your inquiry, Ai Pin uses various sources, including data partners (e.g., AccuWeather for weather information), to browse knowledge from across the web."
                }, {
                    accordionTitle: "c",
                    accordionValue: "c",
                    buttonLabel: "How durable is Ai Pin?",
                    description: (0, i.jsxs)(i.Fragment, {
                        children: ["Durability was a primary focus in the design and engineering of the Ai Pin, with rigorous laboratory testing undertaken to guarantee its resilience against the challenges of daily use. Ai Pin has undergone testing recreating real-world conditions, assessing its ability to endure accidental drops, impacts, and exposure to a variety of environmental conditions, ensuring it maintains both functionality and structural integrity.", (0, i.jsx)("br", {}), (0, i.jsx)("br", {}), "Ai Pin is water resistant, meaning it’s capable of withstanding water splashes from any direction. This makes it suitable for activities involving sweat or use in light rain."]
                    })
                }]
            }];
            var m = t(46270),
                u = t.n(m);

            function h(e) {
                let {
                    type: n = "default",
                    children: t,
                    transparent: o = !1,
                    disableOpenDefault: m = !1,
                    align: h
                } = e;
                return (0, i.jsx)(a.UQ, {
                    type: "multiple",
                    defaultValue: m ? [] : ["faq"],
                    children: (0, i.jsxs)(a.UQ.Item, {
                        "data-transparent": o,
                        align: h,
                        className: s()(u().accordionItem, "support" === n && u().support, "large" === n && u().large),
                        trigger: (0, i.jsx)(l.Dx, {
                            title: "Frequently Asked Questions"
                        }),
                        title: "faq",
                        value: "faq",
                        children: [(0, i.jsx)(l.VY, {
                            fullHeight: !0,
                            children: (0, i.jsx)(a.UQ, {
                                type: "multiple",
                                className: u().faqItemAccordion,
                                children: d.map((e, n) => {
                                    let {
                                        accordionTitle: t,
                                        accordionValue: s,
                                        buttonLabel: d,
                                        children: m
                                    } = e;
                                    return (0, i.jsx)(a.UQ.Item, {
                                        className: u().faqItem,
                                        "data-transparent": o,
                                        trigger: (0, i.jsx)(c.Z, {
                                            title: d
                                        }),
                                        title: "".concat(t, "-").concat(n),
                                        value: "".concat(s).concat(n),
                                        children: (0, i.jsx)(l.VY, {
                                            fullWidth: !0,
                                            fullHeight: !0,
                                            children: m.map((e, n) => (0, i.jsx)(a.UQ.Item, {
                                                className: u().faqSubItem,
                                                trigger: (0, i.jsx)(r.ZT, {
                                                    variant: "body",
                                                    children: e.buttonLabel
                                                }),
                                                title: "".concat(e.accordionTitle).concat(n),
                                                value: "".concat(e.accordionValue).concat(n),
                                                children: (0, i.jsx)(r.ZT, {
                                                    variant: "body",
                                                    className: u().faqSubDescription,
                                                    children: e.description
                                                })
                                            }, e.buttonLabel))
                                        })
                                    }, d)
                                })
                            })
                        }), t]
                    })
                })
            }
        },
        82128: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return f
                }
            });
            var i, a, r = t(31549),
                o = t(78627),
                s = t(84303);
            (i = a || (a = {})).h4 = "h4", i["h4-ac"] = "h4-ac", i["h4-boost"] = "h4-boost", i["h4-cc"] = "h4-cc", i["h4-cp"] = "h4-cp", i["h4-cl"] = "h4-cl", i["h4-la"] = "h4-la", i["h4-sh"] = "h4-sh";
            let l = (0, r.jsx)("a", {
                    href: "/warranty",
                    children: "https://humane.com/warranty"
                }),
                c = (0, r.jsx)("a", {
                    href: "/subscription",
                    children: "https://humane.com/subscription"
                }),
                d = ["‘Perpetual Power’ denotes the ability to extend battery life by swapping or replacing ‘Battery Boosters’; it does not imply an unlimited power source.", "The Ai Pin uses magnets for attachment to clothing or accessories. For detailed information on safety, regulatory compliance, and usage guidelines, consult the provided Product Safety Guide and/or available online documentation.", (0, r.jsxs)(r.Fragment, {
                    children: ["Humane disclaims liability for damage resulting from ordinary wear and tear or misuse/abuse of Humane products or any other products. For comprehensive warranty details, consult the provided Quick Guide or visit", " ", l, "."]
                }), "Ai Pin incorporates a rechargeable lithium ion battery. ", "Ai Pin's battery life is contingent on variables such as the usage environment, usage patterns, device settings, and other pertinent factors.", "Purchase of Humane products is currently limited to the United States. ", (0, r.jsxs)(r.Fragment, {
                    children: ["The price for the Ai Pin Complete System starts at $699. Taxes and fees not included. Ai Pin requires an active subscription. $24/month, taxes and fees not included, subscription automatically renews until cancelled. For more information, review", " ", c]
                }), "Ai Pin should not be considered a substitute for a health professional's advice; should not be used to diagnose, treat or cure a health condition.", "Ai Pin Complete System includes Ai Pin, Battery Booster, Charge Pad, USB-C Cable & Adapter + Charge Case & extra Booster.", "Features are subject to change.", "Applies to Humane Core Plan only. Premium Add-Ons and additional services not included."],
                m = ["The Ai Pin uses magnets for attachment to clothing or the wearer. For detailed information on safety, regulatory compliance, and usage guidelines, consult the provided Product Safety Guide and/or available online documentation.", (0, r.jsxs)(r.Fragment, {
                    children: ["Humane disclaims liability for damage resulting from ordinary wear and tear or misuse/abuse of Humane products or any other products. For comprehensive warranty details, consult the provided Quick Guide or visit", " ", l, "."]
                }), "Purchase of Humane products is currently limited to the United States. ", "Features are subject to change."],
                u = ["‘Perpetual Power’ denotes the ability to extend battery life by swapping or replacing ‘Battery Boosters’; it does not imply an unlimited power source.", "The Ai Pin uses magnets for attachment to clothing or the wearer. For detailed information on safety, regulatory compliance, and usage guidelines, consult the provided Product Safety Guide and/or available online documentation.", (0, r.jsxs)(r.Fragment, {
                    children: ["Humane disclaims liability for damage resulting from ordinary wear and tear or misuse/abuse of Humane products or any other products. For comprehensive warranty details, consult the provided Quick Guide or visit", " ", l, "."]
                }), "Ai Pin incorporates a rechargeable lithium ion battery. ", "Ai Pin's battery life is contingent on variables such as the usage environment, usage patterns, device settings, and other pertinent factors.", "Purchase of Humane products is currently limited to the United States. ", "Features are subject to change."],
                h = [(0, r.jsxs)(r.Fragment, {
                    children: ["Humane disclaims liability for damage resulting from ordinary wear and tear or misuse/abuse of Humane products or any other products. For comprehensive warranty details, consult the provided Quick Guide or visit", " ", l, "."]
                }), "Purchase of Humane products is currently limited to the United States."];
            var _ = {
                    h4: d,
                    "h4-ac": [(0, r.jsxs)(r.Fragment, {
                        children: ["Humane disclaims liability for damage resulting from ordinary wear and tear or misuse/abuse of Humane products or any other products. For comprehensive warranty details, consult the provided Quick Guide or visit", " ", l, "."]
                    }), "Purchase of Humane products is currently limited to the United States."],
                    "h4-boost": u,
                    "h4-cc": u,
                    "h4-cp": u,
                    "h4-cl": m,
                    "h4-la": m,
                    "h4-sh": h
                },
                p = t(58137),
                g = t.n(p),
                f = e => {
                    let {
                        type: n
                    } = e;
                    return (0, r.jsx)("div", {
                        className: g().footnoteWrapper,
                        children: (0, r.jsx)(s.Z, {
                            type: "narrow",
                            className: g().footnote,
                            children: _[n].map((e, n) => (0, r.jsx)(o.ZT, {
                                theme: "light",
                                variant: "bodyXs",
                                className: g().text,
                                children: e
                            }, n))
                        })
                    })
                }
        },
        79449: function(e, n, t) {
            "use strict";
            var i = t(31549),
                a = t(78627),
                r = t(42880),
                o = t.n(r);
            n.Z = e => {
                let {
                    title: n
                } = e;
                return (0, i.jsx)(a.ZT, {
                    variant: "body",
                    className: o().sectionTitle,
                    children: n
                })
            }
        },
        64066: function(e, n, t) {
            "use strict";
            t.d(n, {
                VY: function() {
                    return c
                },
                vd: function() {
                    return H
                },
                X2: function() {
                    return y
                },
                $0: function() {
                    return w
                },
                Dx: function() {
                    return q
                }
            });
            var i = t(31549),
                a = t(51865),
                r = t.n(a),
                o = t(84303),
                s = t(89683),
                l = t.n(s),
                c = e => {
                    let {
                        fullWidth: n = !1,
                        fullHeight: t = !1,
                        className: a,
                        children: s
                    } = e;
                    return (0, i.jsx)(o.Z, {
                        type: "normalNoPadding",
                        className: r()(l().content, a),
                        "data-fullwidth": n,
                        "data-fullHeight": t,
                        children: s
                    })
                },
                d = t(78627),
                m = t(17595),
                u = t.n(m);
            let h = e => {
                let {
                    text: n
                } = e;
                return (0, i.jsx)(d.ZT, {
                    variant: "body",
                    className: u().rowText,
                    children: n
                })
            };
            var _ = t(78936),
                p = t.n(_),
                g = t(44285),
                f = t.n(g),
                y = Object.assign(e => {
                    let {
                        children: n,
                        type: t = "default"
                    } = e;
                    return (0, i.jsx)("div", {
                        className: f()["row-".concat(t)],
                        children: n
                    })
                }, {
                    Title: e => {
                        let {
                            title: n
                        } = e;
                        return (0, i.jsx)(d.ZT, {
                            variant: "body",
                            className: p().rowTitle,
                            children: n
                        })
                    },
                    Text: e => {
                        let {
                            text: n
                        } = e;
                        return (0, i.jsx)(h, {
                            text: n
                        })
                    }
                }),
                b = t(79449),
                x = t(69299),
                v = t.n(x),
                w = Object.assign(e => {
                    let {
                        children: n,
                        title: t,
                        centered: a,
                        bigMarginBottom: r,
                        noBorder: o
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: v().section,
                        "data-centered": a,
                        "data-big-margin-bottom": r,
                        children: [t && (0, i.jsx)("div", {
                            className: v().titleWrapper,
                            "data-no-border": !!o,
                            children: (0, i.jsx)(b.Z, {
                                title: t
                            })
                        }), n]
                    })
                }, {
                    Title: b.Z
                }),
                j = t(45974),
                P = t.n(j),
                q = e => {
                    let {
                        title: n,
                        subtitle: t,
                        children: a
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: P().titleWrapper,
                        children: [(0, i.jsxs)("div", {
                            className: P().titleLeft,
                            children: [n && (0, i.jsx)(d.ZT, {
                                variant: "heading2",
                                className: P().title,
                                children: n
                            }), t && (0, i.jsx)(d.ZT, {
                                className: P().subtitle,
                                variant: "bodySm",
                                children: t
                            })]
                        }), a && (0, i.jsx)("div", {
                            className: P().titleRight,
                            children: a
                        })]
                    })
                },
                T = t(34424),
                M = t(65984),
                A = t(27990),
                L = t.n(A);
            let N = e => {
                let {
                    images: n
                } = e, t = (0, M.Z)(L()._lgMq, !0);
                return n.map((e, n) => {
                    var a;
                    let r = null !== (a = e.imageStyles) && void 0 !== a ? a : {};
                    return (0, i.jsx)("div", {
                        className: L().imageWrapper,
                        "data-fix-top": !e.top,
                        children: (0, i.jsx)(T.Z, { ...e,
                            theme: "light",
                            useResponsiveImage: !0,
                            imageStyles: {
                                height: "100vh",
                                ...t ? {
                                    maxHeight: "300px"
                                } : {
                                    maxHeight: "250px"
                                },
                                ...r
                            }
                        })
                    }, n)
                })
            };
            var H = e => {
                let {
                    groups: n
                } = e;
                return (0, i.jsx)("div", {
                    className: L().container,
                    children: n.map((e, t) => {
                        var a;
                        let r = t < (null == e ? void 0 : null === (a = e.children) || void 0 === a ? void 0 : a.length) && n.length > 1;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)("div", {
                                className: L().group,
                                children: [(0, i.jsx)("div", {
                                    className: L().imagesWrapper,
                                    children: (0, i.jsx)(N, {
                                        images: e.children
                                    })
                                }), (0, i.jsx)(d.ZT, {
                                    variant: "body",
                                    className: L().caption,
                                    children: e.caption
                                })]
                            }), r && (0, i.jsx)("div", {
                                className: L().divider
                            })]
                        })
                    })
                })
            }
        },
        36402: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return r
                }
            });
            var i = t(44194),
                a = t(43798);

            function r() {
                let {
                    status: e,
                    linesAdd: n,
                    linesRemove: t,
                    linesUpdate: r,
                    error: o,
                    lines: s
                } = (0, a.jD)(), l = (0, i.useRef)();
                (0, i.useEffect)(() => {
                    l.current && ("idle" === e || "uninitialized" === e) && (o ? l.current.reject() : l.current.resolve())
                }, [o, e]);
                let c = async i => {
                    let a, o;
                    if (l.current) throw Error("Cart mutation already in progress");
                    if ("idle" !== e && "uninitialized" !== e) throw Error("Cart is not idle.");
                    l.current = (a = () => {}, o = () => {}, Object.assign(new Promise((e, n) => {
                        a = e, o = n
                    }), {
                        resolve: a,
                        reject: o
                    })), await i({
                        linesAdd: n,
                        linesRemove: t,
                        linesUpdate: r,
                        lines: s
                    });
                    try {
                        await l.current
                    } finally {
                        l.current = void 0
                    }
                };
                return {
                    lines: s,
                    startCartMutation: c
                }
            }
        },
        25801: function(e, n, t) {
            "use strict";
            t.d(n, {
                w: function() {
                    return o
                }
            });
            let {
                getStorefrontApiUrl: i,
                getPublicTokenHeaders: a
            } = (0, t(7221).v)({
                storeDomain: "https://checkout.humane.com",
                storefrontApiVersion: "2024-01",
                publicStorefrontToken: "".concat("b4bfeef555f5411024f37a05f0a770dd")
            });
            async function r(e, n, t) {
                try {
                    let r = await fetch(i(), {
                            method: "POST",
                            headers: a(),
                            body: JSON.stringify({
                                query: e,
                                variables: n
                            })
                        }),
                        o = await r.json();
                    if (o && o.data) return t(o.data);
                    throw Error("No data in body!")
                } catch (e) {
                    throw Error("Failed to fetch the data: ".concat(e), {
                        cause: e
                    })
                }
            }
            async function o(e) {
                let n = await r("\nquery ($handle: String!) {\n  product(handle: $handle) {\n    id\n    title\n    featuredImage {\n      url\n      altText\n    }\n    description\n    descriptionHtml\n    availableForSale\n    isGiftCard\n    totalInventory\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    sellingPlanGroups(first: 100) {\n      edges {\n        node {\n          name\n          options {\n            name\n            values\n          }\n          sellingPlans(first: 100) {\n            edges {\n              node {\n                id\n                name\n                options {\n                  name\n                  value\n                }\n                recurringDeliveries\n                description\n                checkoutCharge {\n                  type\n                  value {\n                    ... on MoneyV2 {\n                      currencyCode\n                      amount\n                    }\n                    ... on SellingPlanCheckoutChargePercentageValue {\n                      percentage\n                    }\n                  }\n                }\n                priceAdjustments {\n                  adjustmentValue {\n                    ... on SellingPlanPercentagePriceAdjustment {\n                      __typename\n                      adjustmentPercentage\n                    }\n                    ... on SellingPlanFixedPriceAdjustment {\n                      __typename\n                      price {\n                        amount\n                        currencyCode\n                      }\n                    }\n                    ... on SellingPlanFixedAmountPriceAdjustment {\n                      __typename\n                      adjustmentAmount {\n                        amount\n                        currencyCode\n                      }\n                    }\n                  }\n                  orderCount\n                }\n              }\n            }\n          }\n          appName\n        }\n      }\n    }\n    requiresSellingPlan\n    totalInventory\n    handle\n    variants(first: 100) {\n      nodes {\n        availableForSale\n        sku\n        product {\n          id\n          handle\n        }\n        price {\n          amount\n          currencyCode\n        }\n        quantityAvailable\n        id\n        title\n        sellingPlanAllocations(first: 100) {\n          nodes {\n            checkoutChargeAmount {\n              amount\n              currencyCode\n            }\n            priceAdjustments {\n              compareAtPrice {\n                amount\n                currencyCode\n              }\n              perDeliveryPrice {\n                amount\n                currencyCode\n              }\n              price {\n                amount\n                currencyCode\n              }\n              unitPrice {\n                amount\n                currencyCode\n              }\n            }\n            sellingPlan {\n              id\n              name\n              description\n              recurringDeliveries\n              options {\n                name\n                value\n              }\n              priceAdjustments {\n                adjustmentValue {\n                  ... on SellingPlanFixedAmountPriceAdjustment {\n                    adjustmentAmount {\n                      amount\n                      currencyCode\n                    }\n                  }\n                  ... on SellingPlanFixedPriceAdjustment {\n                    price {\n                      amount\n                      currencyCode\n                    }\n                  }\n                  ... on SellingPlanPercentagePriceAdjustment {\n                    adjustmentPercentage\n                  }\n                }\n              }\n              checkoutCharge {\n                type\n                value {\n                  ... on MoneyV2 {\n                    amount\n                    currencyCode\n                  }\n                  ... on SellingPlanCheckoutChargePercentageValue {\n                    percentage\n                  }\n                }\n              }\n            }\n            remainingBalanceChargeAmount {\n              amount\n              currencyCode\n            }\n          }\n        }\n        selectedOptions {\n          name\n          value\n        }\n      }\n    }\n    seo {\n      description\n      title\n    }\n    tags\n    productType\n    options(first: 20) {\n      name\n      values\n    }\n    media(first: 10) {\n      edges {\n        node {\n          alt\n        }\n      }\n    }\n  }\n}\n", {
                    handle: e
                }, e => e.product);
                if (!n) throw console.error("Product not found - ", e), Error();
                return n
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
        35306: function(e) {
            e.exports = {
                wrapper: "styles_wrapper__xb4W0",
                disabled: "styles_disabled__xKBsL",
                buttonText: "styles_buttonText__V3213",
                clickable: "styles_clickable__5KWh2",
                sideControls: "styles_sideControls__K9Pbs",
                quantityButton: "styles_quantityButton__gwaYy",
                disabledArea: "styles_disabledArea__rrUpX"
            }
        },
        58137: function(e) {
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
                footnoteWrapper: "style_footnoteWrapper__uQF4Q",
                footnote: "style_footnote__qb8HM",
                text: "style_text__aEYLW"
            }
        },
        89683: function(e) {
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
                content: "style_content__U7iXA"
            }
        },
        27990: function(e) {
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
                container: "style_container__Hh785",
                divider: "style_divider__Di5Al",
                group: "style_group__uKCxK",
                imagesWrapper: "style_imagesWrapper__1gPHY",
                imageWrapper: "style_imageWrapper__tcr4Y",
                caption: "style_caption__lDvf4"
            }
        },
        17595: function(e) {
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
                rowText: "style_rowText__irarb"
            }
        },
        78936: function(e) {
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
                rowTitle: "style_rowTitle__C_dvS"
            }
        },
        44285: function(e) {
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
                "row-default": "style_row-default__rcxYK",
                "row-horizontalCenter": "style_row-horizontalCenter__QHZ1_",
                "row-horizontalCenterBottomAlignedCell": "style_row-horizontalCenterBottomAlignedCell__IKGvT",
                "row-center": "style_row-center__P2fEv"
            }
        },
        42880: function(e) {
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
                sectionTitle: "style_sectionTitle__nmAN4"
            }
        },
        69299: function(e) {
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
                section: "style_section__MJbbi",
                titleWrapper: "style_titleWrapper__EQUA3"
            }
        },
        45974: function(e) {
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
                titleWrapper: "style_titleWrapper__gaw5q",
                titleLeft: "style_titleLeft__0fTaZ",
                title: "style_title___sjfs",
                subtitle: "style_subtitle__cHw11",
                titleRight: "style_titleRight__yp36B"
            }
        },
        46270: function(e) {
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
                accordionItem: "style_accordionItem__68dI4",
                faqInitiateContactWrapper: "style_faqInitiateContactWrapper__hKe_g",
                faqInitiateContact: "style_faqInitiateContact__L0g8i",
                large: "style_large__SOXK_",
                support: "style_support__n7sZm",
                faqItemAccordion: "style_faqItemAccordion__41_lf",
                faqItem: "style_faqItem__okm_E",
                faqSubItem: "style_faqSubItem__quSaB",
                fixRecommendedAccessories: "style_fixRecommendedAccessories__XFAMi",
                backLink: "style_backLink__Z64i9",
                icon: "style_icon__UJ1Gn",
                backLinkText: "style_backLinkText__eZerV",
                faqSubDescription: "style_faqSubDescription__8M6b7"
            }
        }
    }
]);