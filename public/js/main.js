!function () {
    var e, t, n;
    !function (r) {
        function i(e, t) {
            return x.call(e, t)
        }

        function o(e, t) {
            var n, r, i, o, s, a, u, l, c, f, p, d = t && t.split("/"),
                h = y.map,
                g = h && h["*"] || {};
            if (e && "." === e.charAt(0))
                if (t) {
                    for (d = d.slice(0, d.length - 1), e = e.split("/"), s = e.length - 1, y.nodeIdCompat && C.test(e[s]) && (e[s] = e[s].replace(C, "")), e = d.concat(e), c = 0; c < e.length; c += 1)
                        if (p = e[c], "." === p) e.splice(c, 1), c -= 1;
                        else if (".." === p) {
                            if (1 === c && (".." === e[2] || ".." === e[0])) break;
                            c > 0 && (e.splice(c - 1, 2), c -= 2)
                        }
                    e = e.join("/")
                } else 0 === e.indexOf("./") && (e = e.substring(2));
            if ((d || g) && h) {
                for (n = e.split("/"), c = n.length; c > 0; c -= 1) {
                    if (r = n.slice(0, c).join("/"), d)
                        for (f = d.length; f > 0; f -= 1)
                            if (i = h[d.slice(0, f).join("/")], i && (i = i[r])) {
                                o = i, a = c;
                                break
                            }
                    if (o) break;
                    !u && g && g[r] && (u = g[r], l = c)
                }
                !o && u && (o = u, a = l), o && (n.splice(0, a, o), e = n.join("/"))
            }
            return e
        }

        function s(e, t) {
            return function () {
                return d.apply(r, w.call(arguments, 0).concat([e, t]))
            }
        }

        function a(e) {
            return function (t) {
                return o(t, e)
            }
        }

        function u(e) {
            return function (t) {
                m[e] = t
            }
        }

        function l(e) {
            if (i(v, e)) {
                var t = v[e];
                delete v[e], b[e] = !0, p.apply(r, t)
            }
            if (!i(m, e) && !i(b, e)) throw new Error("No " + e);
            return m[e]
        }

        function c(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
        }

        function f(e) {
            return function () {
                return y && y.config && y.config[e] || {}
            }
        }

        var p, d, h, g, m = {},
            v = {},
            y = {},
            b = {},
            x = Object.prototype.hasOwnProperty,
            w = [].slice,
            C = /\.js$/;
        h = function (e, t) {
            var n, r = c(e),
                i = r[0];
            return e = r[1], i && (i = o(i, t), n = l(i)), i ? e = n && n.normalize ? n.normalize(e, a(t)) : o(e, t) : (e = o(e, t), r = c(e), i = r[0], e = r[1], i && (n = l(i))), {
                f: i ? i + "!" + e : e,
                n: e,
                pr: i,
                p: n
            }
        }, g = {
            require: function (e) {
                return s(e)
            },
            exports: function (e) {
                var t = m[e];
                return "undefined" != typeof t ? t : m[e] = {}
            },
            module: function (e) {
                return {
                    id: e,
                    uri: "",
                    exports: m[e],
                    config: f(e)
                }
            }
        }, p = function (e, t, n, o) {
            var a, c, f, p, d, y, x = [],
                w = typeof n;
            if (o = o || e, "undefined" === w || "function" === w) {
                for (t = !t.length && n.length ? ["require", "exports", "module"] : t, d = 0; d < t.length; d += 1)
                    if (p = h(t[d], o), c = p.f, "require" === c) x[d] = g.require(e);
                    else if ("exports" === c) x[d] = g.exports(e), y = !0;
                    else if ("module" === c) a = x[d] = g.module(e);
                    else if (i(m, c) || i(v, c) || i(b, c)) x[d] = l(c);
                    else {
                        if (!p.p) throw new Error(e + " missing " + c);
                        p.p.load(p.n, s(o, !0), u(c), {}), x[d] = m[c]
                    }
                f = n ? n.apply(m[e], x) : void 0, e && (a && a.exports !== r && a.exports !== m[e] ? m[e] = a.exports : f === r && y || (m[e] = f))
            } else e && (m[e] = n)
        }, e = t = d = function (e, t, n, i, o) {
            if ("string" == typeof e) return g[e] ? g[e](t) : l(h(e, t).f);
            if (!e.splice) {
                if (y = e, y.deps && d(y.deps, y.callback), !t) return;
                t.splice ? (e = t, t = n, n = null) : e = r
            }
            return t = t || function () {
            }, "function" == typeof n && (n = i, i = o), i ? p(r, e, t, n) : setTimeout(function () {
                p(r, e, t, n)
            }, 4), d
        }, d.config = function (e) {
            return d(e)
        }, e._defined = m, n = function (e, t, n) {
            t.splice || (n = t, t = []), i(m, e) || i(v, e) || (v[e] = [e, t, n])
        }, n.amd = {
            jQuery: !0
        }
    }(), n("../bower_components/almond/almond", function () {
    }),
        function (e, t) {
            "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return t(e)
            } : t(e)
        }("undefined" != typeof window ? window : this, function (e, t) {
            function r(e) {
                var t = e.length,
                    n = tt.type(e);
                return "function" === n || tt.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
            }

            function i(e, t, n) {
                if (tt.isFunction(t)) return tt.grep(e, function (e, r) {
                    return !!t.call(e, r, e) !== n
                });
                if (t.nodeType) return tt.grep(e, function (e) {
                    return e === t !== n
                });
                if ("string" == typeof t) {
                    if (ut.test(t)) return tt.filter(t, e, n);
                    t = tt.filter(t, e)
                }
                return tt.grep(e, function (e) {
                    return V.call(t, e) >= 0 !== n
                })
            }

            function o(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;) ;
                return e
            }

            function s(e) {
                var t = gt[e] = {};
                return tt.each(e.match(ht) || [], function (e, n) {
                    t[n] = !0
                }), t
            }

            function a() {
                Z.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), tt.ready()
            }

            function u() {
                Object.defineProperty(this.cache = {}, 0, {
                    get: function () {
                        return {}
                    }
                }), this.expando = tt.expando + Math.random()
            }

            function l(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(wt, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                        try {
                            n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : xt.test(n) ? tt.parseJSON(n) : n
                        } catch (i) {
                        }
                        bt.set(e, t, n)
                    } else n = void 0;
                return n
            }

            function c() {
                return !0
            }

            function f() {
                return !1
            }

            function p() {
                try {
                    return Z.activeElement
                } catch (e) {
                }
            }

            function d(e, t) {
                return tt.nodeName(e, "table") && tt.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }

            function h(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function g(e) {
                var t = Ht.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function m(e, t) {
                for (var n = 0, r = e.length; r > n; n++) yt.set(e[n], "globalEval", !t || yt.get(t[n], "globalEval"))
            }

            function v(e, t) {
                var n, r, i, o, s, a, u, l;
                if (1 === t.nodeType) {
                    if (yt.hasData(e) && (o = yt.access(e), s = yt.set(t, o), l = o.events)) {
                        delete s.handle, s.events = {};
                        for (i in l)
                            for (n = 0, r = l[i].length; r > n; n++) tt.event.add(t, i, l[i][n])
                    }
                    bt.hasData(e) && (a = bt.access(e), u = tt.extend({}, a), bt.set(t, u))
                }
            }

            function y(e, t) {
                var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || t && tt.nodeName(e, t) ? tt.merge([e], n) : n
            }

            function b(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && kt.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }

            function x(t, n) {
                var r = tt(n.createElement(t)).appendTo(n.body),
                    i = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(r[0]).display : tt.css(r[0], "display");
                return r.detach(), i
            }

            function w(e) {
                var t = Z,
                    n = It[e];
                return n || (n = x(e, t), "none" !== n && n || (Rt = (Rt || tt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Rt[0].contentDocument, t.write(), t.close(), n = x(e, t), Rt.detach()), It[e] = n), n
            }

            function C(e, t, n) {
                var r, i, o, s, a = e.style;
                return n = n || zt(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || tt.contains(e.ownerDocument, e) || (s = tt.style(e, t)), Bt.test(s) && Wt.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
            }

            function T(e, t) {
                return {
                    get: function () {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }

            function j(e, t) {
                if (t in e) return t;
                for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Gt.length; i--;)
                    if (t = Gt[i] + n, t in e) return t;
                return r
            }

            function k(e, t, n) {
                var r = Ut.exec(t);
                return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
            }

            function E(e, t, n, r, i) {
                for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += tt.css(e, n + Tt[o], !0, i)), r ? ("content" === n && (s -= tt.css(e, "padding" + Tt[o], !0, i)), "margin" !== n && (s -= tt.css(e, "border" + Tt[o] + "Width", !0, i))) : (s += tt.css(e, "padding" + Tt[o], !0, i), "padding" !== n && (s += tt.css(e, "border" + Tt[o] + "Width", !0, i)));
                return s
            }

            function N(e, t, n) {
                var r = !0,
                    i = "width" === t ? e.offsetWidth : e.offsetHeight,
                    o = zt(e),
                    s = "border-box" === tt.css(e, "boxSizing", !1, o);
                if (0 >= i || null == i) {
                    if (i = C(e, t, o), (0 > i || null == i) && (i = e.style[t]), Bt.test(i)) return i;
                    r = s && (K.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
                }
                return i + E(e, t, n || (s ? "border" : "content"), r, o) + "px"
            }

            function D(e, t) {
                for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++) r = e[s], r.style && (o[s] = yt.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && jt(r) && (o[s] = yt.access(r, "olddisplay", w(r.nodeName)))) : o[s] || (i = jt(r), (n && "none" !== n || !i) && yt.set(r, "olddisplay", i ? n : tt.css(r, "display"))));
                for (s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
                return e
            }

            function A(e, t, n, r, i) {
                return new A.prototype.init(e, t, n, r, i)
            }

            function S() {
                return setTimeout(function () {
                    Jt = void 0
                }), Jt = tt.now()
            }

            function q(e, t) {
                var n, r = 0,
                    i = {
                        height: e
                    };
                for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Tt[r], i["margin" + n] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i
            }

            function L(e, t, n) {
                for (var r, i = (rn[t] || []).concat(rn["*"]), o = 0, s = i.length; s > o; o++)
                    if (r = i[o].call(n, t, e)) return r
            }

            function O(e, t, n) {
                var r, i, o, s, a, u, l, c = this,
                    f = {},
                    p = e.style,
                    d = e.nodeType && jt(e),
                    h = yt.get(e, "fxshow");
                n.queue || (a = tt._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
                    a.unqueued || u()
                }), a.unqueued++, c.always(function () {
                    c.always(function () {
                        a.unqueued--, tt.queue(e, "fx").length || a.empty.fire()
                    })
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = tt.css(e, "display"), "none" === l && (l = w(e.nodeName)), "inline" === l && "none" === tt.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", c.always(function () {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                }));
                for (r in t)
                    if (i = t[r], Zt.exec(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
                            if ("show" !== i || !h || void 0 === h[r]) continue;
                            d = !0
                        }
                        f[r] = h && h[r] || tt.style(e, r)
                    }
                if (!tt.isEmptyObject(f)) {
                    h ? "hidden" in h && (d = h.hidden) : h = yt.access(e, "fxshow", {}), o && (h.hidden = !d), d ? tt(e).show() : c.done(function () {
                        tt(e).hide()
                    }), c.done(function () {
                        var t;
                        yt.remove(e, "fxshow");
                        for (t in f) tt.style(e, t, f[t])
                    });
                    for (r in f) s = L(d ? h[r] : 0, r, c), r in h || (h[r] = s.start, d && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
                }
            }

            function $(e, t) {
                var n, r, i, o, s;
                for (n in e)
                    if (r = tt.camelCase(n), i = t[r], o = e[n], tt.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = tt.cssHooks[r], s && "expand" in s) {
                        o = s.expand(o), delete e[r];
                        for (n in o) n in e || (e[n] = o[n], t[n] = i)
                    } else t[r] = i
            }

            function _(e, t, n) {
                var r, i, o = 0,
                    s = nn.length,
                    a = tt.Deferred().always(function () {
                        delete u.elem
                    }),
                    u = function () {
                        if (i) return !1;
                        for (var t = Jt || S(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++) l.tweens[s].run(o);
                        return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1)
                    },
                    l = a.promise({
                        elem: e,
                        props: tt.extend({}, t),
                        opts: tt.extend(!0, {
                            specialEasing: {}
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: Jt || S(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function (t, n) {
                            var r = tt.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                            return l.tweens.push(r), r
                        },
                        stop: function (t) {
                            var n = 0,
                                r = t ? l.tweens.length : 0;
                            if (i) return this;
                            for (i = !0; r > n; n++) l.tweens[n].run(1);
                            return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
                        }
                    }),
                    c = l.props;
                for ($(c, l.opts.specialEasing); s > o; o++)
                    if (r = nn[o].call(l, e, c, l.opts)) return r;
                return tt.map(c, L, l), tt.isFunction(l.opts.start) && l.opts.start.call(e, l), tt.fx.timer(tt.extend(u, {
                    elem: e,
                    anim: l,
                    queue: l.opts.queue
                })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
            }

            function F(e) {
                return function (t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, i = 0,
                        o = t.toLowerCase().match(ht) || [];
                    if (tt.isFunction(n))
                        for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function H(e, t, n, r) {
                function i(a) {
                    var u;
                    return o[a] = !0, tt.each(e[a] || [], function (e, a) {
                        var l = a(t, n, r);
                        return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
                    }), u
                }

                var o = {},
                    s = e === Tn;
                return i(t.dataTypes[0]) || !o["*"] && i("*")
            }

            function M(e, t) {
                var n, r, i = tt.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && tt.extend(!0, e, r), e
            }

            function P(e, t, n) {
                for (var r, i, o, s, a = e.contents, u = e.dataTypes;
                     "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                    for (i in a)
                        if (a[i] && a[i].test(r)) {
                            u.unshift(i);
                            break
                        }
                if (u[0] in n) o = u[0];
                else {
                    for (i in n) {
                        if (!u[0] || e.converters[i + " " + u[0]]) {
                            o = i;
                            break
                        }
                        s || (s = i)
                    }
                    o = o || s
                }
                return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
            }

            function R(e, t, n, r) {
                var i, o, s, a, u, l = {},
                    c = e.dataTypes.slice();
                if (c[1])
                    for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
                for (o = c.shift(); o;)
                    if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                        if ("*" === o) o = u;
                        else if ("*" !== u && u !== o) {
                            if (s = l[u + " " + o] || l["* " + o], !s)
                                for (i in l)
                                    if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                        s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                                        break
                                    }
                            if (s !== !0)
                                if (s && e["throws"]) t = s(t);
                                else try {
                                    t = s(t)
                                } catch (f) {
                                    return {
                                        state: "parsererror",
                                        error: s ? f : "No conversion from " + u + " to " + o
                                    }
                                }
                        }
                return {
                    state: "success",
                    data: t
                }
            }

            function I(e, t, n, r) {
                var i;
                if (tt.isArray(t)) tt.each(t, function (t, i) {
                    n || Nn.test(e) ? r(e, i) : I(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
                });
                else if (n || "object" !== tt.type(t)) r(e, t);
                else
                    for (i in t) I(e + "[" + i + "]", t[i], n, r)
            }

            function W(e) {
                return tt.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
            }

            var B = [],
                z = B.slice,
                X = B.concat,
                U = B.push,
                V = B.indexOf,
                Q = {},
                Y = Q.toString,
                G = Q.hasOwnProperty,
                J = "".trim,
                K = {},
                Z = e.document,
                et = "2.1.0",
                tt = function (e, t) {
                    return new tt.fn.init(e, t)
                },
                nt = /^-ms-/,
                rt = /-([\da-z])/gi,
                it = function (e, t) {
                    return t.toUpperCase()
                };
            tt.fn = tt.prototype = {
                jquery: et,
                constructor: tt,
                selector: "",
                length: 0,
                toArray: function () {
                    return z.call(this)
                },
                get: function (e) {
                    return null != e ? 0 > e ? this[e + this.length] : this[e] : z.call(this)
                },
                pushStack: function (e) {
                    var t = tt.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                },
                each: function (e, t) {
                    return tt.each(this, e, t)
                },
                map: function (e) {
                    return this.pushStack(tt.map(this, function (t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function () {
                    return this.pushStack(z.apply(this, arguments))
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                eq: function (e) {
                    var t = this.length,
                        n = +e + (0 > e ? t : 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: U,
                sort: B.sort,
                splice: B.splice
            }, tt.extend = tt.fn.extend = function () {
                var e, t, n, r, i, o, s = arguments[0] || {},
                    a = 1,
                    u = arguments.length,
                    l = !1;
                for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || tt.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++)
                    if (null != (e = arguments[a]))
                        for (t in e) n = s[t], r = e[t], s !== r && (l && r && (tt.isPlainObject(r) || (i = tt.isArray(r))) ? (i ? (i = !1, o = n && tt.isArray(n) ? n : []) : o = n && tt.isPlainObject(n) ? n : {}, s[t] = tt.extend(l, o, r)) : void 0 !== r && (s[t] = r));
                return s
            }, tt.extend({
                expando: "jQuery" + (et + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (e) {
                    throw new Error(e)
                },
                noop: function () {
                },
                isFunction: function (e) {
                    return "function" === tt.type(e)
                },
                isArray: Array.isArray,
                isWindow: function (e) {
                    return null != e && e === e.window
                },
                isNumeric: function (e) {
                    return e - parseFloat(e) >= 0
                },
                isPlainObject: function (e) {
                    if ("object" !== tt.type(e) || e.nodeType || tt.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (t) {
                        return !1
                    }
                    return !0
                },
                isEmptyObject: function (e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                type: function (e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Q[Y.call(e)] || "object" : typeof e
                },
                globalEval: function (e) {
                    var t, n = eval;
                    e = tt.trim(e), e && (1 === e.indexOf("use strict") ? (t = Z.createElement("script"), t.text = e, Z.head.appendChild(t).parentNode.removeChild(t)) : n(e))
                },
                camelCase: function (e) {
                    return e.replace(nt, "ms-").replace(rt, it)
                },
                nodeName: function (e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function (e, t, n) {
                    var i, o = 0,
                        s = e.length,
                        a = r(e);
                    if (n) {
                        if (a)
                            for (; s > o && (i = t.apply(e[o], n), i !== !1); o++) ;
                        else
                            for (o in e)
                                if (i = t.apply(e[o], n), i === !1) break
                    } else if (a)
                        for (; s > o && (i = t.call(e[o], o, e[o]), i !== !1); o++) ;
                    else
                        for (o in e)
                            if (i = t.call(e[o], o, e[o]), i === !1) break;
                    return e
                },
                trim: function (e) {
                    return null == e ? "" : J.call(e)
                },
                makeArray: function (e, t) {
                    var n = t || [];
                    return null != e && (r(Object(e)) ? tt.merge(n, "string" == typeof e ? [e] : e) : U.call(n, e)), n
                },
                inArray: function (e, t, n) {
                    return null == t ? -1 : V.call(t, e, n)
                },
                merge: function (e, t) {
                    for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
                    return e.length = i, e
                },
                grep: function (e, t, n) {
                    for (var r, i = [], o = 0, s = e.length, a = !n; s > o; o++) r = !t(e[o], o), r !== a && i.push(e[o]);
                    return i
                },
                map: function (e, t, n) {
                    var i, o = 0,
                        s = e.length,
                        a = r(e),
                        u = [];
                    if (a)
                        for (; s > o; o++) i = t(e[o], o, n), null != i && u.push(i);
                    else
                        for (o in e) i = t(e[o], o, n), null != i && u.push(i);
                    return X.apply([], u)
                },
                guid: 1,
                proxy: function (e, t) {
                    var n, r, i;
                    return "string" == typeof t && (n = e[t], t = e, e = n), tt.isFunction(e) ? (r = z.call(arguments, 2), i = function () {
                        return e.apply(t || this, r.concat(z.call(arguments)))
                    }, i.guid = e.guid = e.guid || tt.guid++, i) : void 0
                },
                now: Date.now,
                support: K
            }), tt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
                Q["[object " + t + "]"] = t.toLowerCase()
            });
            var ot = function (e) {
                function t(e, t, n, r) {
                    var i, o, s, a, u, l, f, h, g, m;
                    if ((t ? t.ownerDocument || t : R) !== L && q(t), t = t || L, n = n || [], !e || "string" != typeof e) return n;
                    if (1 !== (a = t.nodeType) && 9 !== a) return [];
                    if ($ && !r) {
                        if (i = yt.exec(e))
                            if (s = i[1]) {
                                if (9 === a) {
                                    if (o = t.getElementById(s), !o || !o.parentNode) return n;
                                    if (o.id === s) return n.push(o), n
                                } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && M(t, o) && o.id === s) return n.push(o), n
                            } else {
                                if (i[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                                if ((s = i[3]) && T.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(s)), n
                            }
                        if (T.qsa && (!_ || !_.test(e))) {
                            if (h = f = P, g = t, m = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                                for (l = p(e), (f = t.getAttribute("id")) ? h = f.replace(xt, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", u = l.length; u--;) l[u] = h + d(l[u]);
                                g = bt.test(e) && c(t.parentNode) || t, m = l.join(",")
                            }
                            if (m) try {
                                return Z.apply(n, g.querySelectorAll(m)), n
                            } catch (v) {
                            } finally {
                                f || t.removeAttribute("id")
                            }
                        }
                    }
                    return w(e.replace(ut, "$1"), t, n, r)
                }

                function n() {
                    function e(n, r) {
                        return t.push(n + " ") > j.cacheLength && delete e[t.shift()], e[n + " "] = r
                    }

                    var t = [];
                    return e
                }

                function r(e) {
                    return e[P] = !0, e
                }

                function i(e) {
                    var t = L.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function o(e, t) {
                    for (var n = e.split("|"), r = e.length; r--;) j.attrHandle[n[r]] = t
                }

                function s(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function a(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function u(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function l(e) {
                    return r(function (t) {
                        return t = +t, r(function (n, r) {
                            for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function c(e) {
                    return e && typeof e.getElementsByTagName !== V && e
                }

                function f() {
                }

                function p(e, n) {
                    var r, i, o, s, a, u, l, c = z[e + " "];
                    if (c) return n ? 0 : c.slice(0);
                    for (a = e, u = [], l = j.preFilter; a;) {
                        (!r || (i = lt.exec(a))) && (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = ct.exec(a)) && (r = i.shift(), o.push({
                            value: r,
                            type: i[0].replace(ut, " ")
                        }), a = a.slice(r.length));
                        for (s in j.filter) !(i = ht[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
                            value: r,
                            type: s,
                            matches: i
                        }), a = a.slice(r.length));
                        if (!r) break
                    }
                    return n ? a.length : a ? t.error(e) : z(e, u).slice(0)
                }

                function d(e) {
                    for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                    return r
                }

                function h(e, t, n) {
                    var r = t.dir,
                        i = n && "parentNode" === r,
                        o = W++;
                    return t.first ? function (t, n, o) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || i) return e(t, n, o)
                    } : function (t, n, s) {
                        var a, u, l = [I, o];
                        if (s) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || i) && e(t, n, s)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || i) {
                                    if (u = t[P] || (t[P] = {}), (a = u[r]) && a[0] === I && a[1] === o) return l[2] = a[2];
                                    if (u[r] = l, l[2] = e(t, n, s)) return !0
                                }
                    }
                }

                function g(e) {
                    return e.length > 1 ? function (t, n, r) {
                        for (var i = e.length; i--;)
                            if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function m(e, t, n, r, i) {
                    for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++) (o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
                    return s
                }

                function v(e, t, n, i, o, s) {
                    return i && !i[P] && (i = v(i)), o && !o[P] && (o = v(o, s)), r(function (r, s, a, u) {
                        var l, c, f, p = [],
                            d = [],
                            h = s.length,
                            g = r || x(t || "*", a.nodeType ? [a] : a, []),
                            v = !e || !r && t ? g : m(g, p, e, a, u),
                            y = n ? o || (r ? e : h || i) ? [] : s : v;
                        if (n && n(v, y, a, u), i)
                            for (l = m(y, d), i(l, [], a, u), c = l.length; c--;) (f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
                        if (r) {
                            if (o || e) {
                                if (o) {
                                    for (l = [], c = y.length; c--;) (f = y[c]) && l.push(v[c] = f);
                                    o(null, y = [], l, u)
                                }
                                for (c = y.length; c--;) (f = y[c]) && (l = o ? tt.call(r, f) : p[c]) > -1 && (r[l] = !(s[l] = f))
                            }
                        } else y = m(y === s ? y.splice(h, y.length) : y), o ? o(null, s, y, u) : Z.apply(s, y)
                    })
                }

                function y(e) {
                    for (var t, n, r, i = e.length, o = j.relative[e[0].type], s = o || j.relative[" "], a = o ? 1 : 0, u = h(function (e) {
                        return e === t
                    }, s, !0), l = h(function (e) {
                        return tt.call(t, e) > -1
                    }, s, !0), c = [function (e, n, r) {
                        return !o && (r || n !== D) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
                    }]; i > a; a++)
                        if (n = j.relative[e[a].type]) c = [h(g(c), n)];
                        else {
                            if (n = j.filter[e[a].type].apply(null, e[a].matches), n[P]) {
                                for (r = ++a; i > r && !j.relative[e[r].type]; r++) ;
                                return v(a > 1 && g(c), a > 1 && d(e.slice(0, a - 1).concat({
                                    value: " " === e[a - 2].type ? "*" : ""
                                })).replace(ut, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && d(e))
                            }
                            c.push(n)
                        }
                    return g(c)
                }

                function b(e, n) {
                    var i = n.length > 0,
                        o = e.length > 0,
                        s = function (r, s, a, u, l) {
                            var c, f, p, d = 0,
                                h = "0",
                                g = r && [],
                                v = [],
                                y = D,
                                b = r || o && j.find.TAG("*", l),
                                x = I += null == y ? 1 : Math.random() || .1,
                                w = b.length;
                            for (l && (D = s !== L && s); h !== w && null != (c = b[h]); h++) {
                                if (o && c) {
                                    for (f = 0; p = e[f++];)
                                        if (p(c, s, a)) {
                                            u.push(c);
                                            break
                                        }
                                    l && (I = x)
                                }
                                i && ((c = !p && c) && d--, r && g.push(c))
                            }
                            if (d += h, i && h !== d) {
                                for (f = 0; p = n[f++];) p(g, v, s, a);
                                if (r) {
                                    if (d > 0)
                                        for (; h--;) g[h] || v[h] || (v[h] = J.call(u));
                                    v = m(v)
                                }
                                Z.apply(u, v), l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                            }
                            return l && (I = x, D = y), g
                        };
                    return i ? r(s) : s
                }

                function x(e, n, r) {
                    for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
                    return r
                }

                function w(e, t, n, r) {
                    var i, o, s, a, u, l = p(e);
                    if (!r && 1 === l.length) {
                        if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && T.getById && 9 === t.nodeType && $ && j.relative[o[1].type]) {
                            if (t = (j.find.ID(s.matches[0].replace(wt, Ct), t) || [])[0], !t) return n;
                            e = e.slice(o.shift().value.length)
                        }
                        for (i = ht.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !j.relative[a = s.type]);)
                            if ((u = j.find[a]) && (r = u(s.matches[0].replace(wt, Ct), bt.test(o[0].type) && c(t.parentNode) || t))) {
                                if (o.splice(i, 1), e = r.length && d(o), !e) return Z.apply(n, r), n;
                                break
                            }
                    }
                    return N(e, l)(r, t, !$, n, bt.test(e) && c(t.parentNode) || t), n
                }

                var C, T, j, k, E, N, D, A, S, q, L, O, $, _, F, H, M, P = "sizzle" + -new Date,
                    R = e.document,
                    I = 0,
                    W = 0,
                    B = n(),
                    z = n(),
                    X = n(),
                    U = function (e, t) {
                        return e === t && (S = !0), 0
                    },
                    V = "undefined",
                    Q = 1 << 31,
                    Y = {}.hasOwnProperty,
                    G = [],
                    J = G.pop,
                    K = G.push,
                    Z = G.push,
                    et = G.slice,
                    tt = G.indexOf || function (e) {
                        for (var t = 0, n = this.length; n > t; t++)
                            if (this[t] === e) return t;
                        return -1
                    },
                    nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    rt = "[\\x20\\t\\r\\n\\f]",
                    it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    ot = it.replace("w", "w#"),
                    st = "\\[" + rt + "*(" + it + ")" + rt + "*(?:([*^$|!~]?=)" + rt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ot + ")|)|)" + rt + "*\\]",
                    at = ":(" + it + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + st.replace(3, 8) + ")*)|.*)\\)|)",
                    ut = new RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"),
                    lt = new RegExp("^" + rt + "*," + rt + "*"),
                    ct = new RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
                    ft = new RegExp("=" + rt + "*([^\\]'\"]*?)" + rt + "*\\]", "g"),
                    pt = new RegExp(at),
                    dt = new RegExp("^" + ot + "$"),
                    ht = {
                        ID: new RegExp("^#(" + it + ")"),
                        CLASS: new RegExp("^\\.(" + it + ")"),
                        TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + st),
                        PSEUDO: new RegExp("^" + at),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + nt + ")$", "i"),
                        needsContext: new RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
                    },
                    gt = /^(?:input|select|textarea|button)$/i,
                    mt = /^h\d$/i,
                    vt = /^[^{]+\{\s*\[native \w/,
                    yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    bt = /[+~]/,
                    xt = /'|\\/g,
                    wt = new RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"),
                    Ct = function (e, t, n) {
                        var r = "0x" + t - 65536;
                        return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    };
                try {
                    Z.apply(G = et.call(R.childNodes), R.childNodes), G[R.childNodes.length].nodeType
                } catch (Tt) {
                    Z = {
                        apply: G.length ? function (e, t) {
                            K.apply(e, et.call(t))
                        } : function (e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];) ;
                            e.length = n - 1
                        }
                    }
                }
                T = t.support = {}, E = t.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }, q = t.setDocument = function (e) {
                    var t, n = e ? e.ownerDocument || e : R,
                        r = n.defaultView;
                    return n !== L && 9 === n.nodeType && n.documentElement ? (L = n, O = n.documentElement, $ = !E(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function () {
                        q()
                    }, !1) : r.attachEvent && r.attachEvent("onunload", function () {
                        q()
                    })), T.attributes = i(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), T.getElementsByTagName = i(function (e) {
                        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                    }), T.getElementsByClassName = vt.test(n.getElementsByClassName) && i(function (e) {
                        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                    }), T.getById = i(function (e) {
                        return O.appendChild(e).id = P, !n.getElementsByName || !n.getElementsByName(P).length
                    }), T.getById ? (j.find.ID = function (e, t) {
                        if (typeof t.getElementById !== V && $) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, j.filter.ID = function (e) {
                        var t = e.replace(wt, Ct);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete j.find.ID, j.filter.ID = function (e) {
                        var t = e.replace(wt, Ct);
                        return function (e) {
                            var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), j.find.TAG = T.getElementsByTagName ? function (e, t) {
                        return typeof t.getElementsByTagName !== V ? t.getElementsByTagName(e) : void 0
                    } : function (e, t) {
                        var n, r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }, j.find.CLASS = T.getElementsByClassName && function (e, t) {
                        return typeof t.getElementsByClassName !== V && $ ? t.getElementsByClassName(e) : void 0
                    }, F = [], _ = [], (T.qsa = vt.test(n.querySelectorAll)) && (i(function (e) {
                        e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && _.push("[*^$]=" + rt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || _.push("\\[" + rt + "*(?:value|" + nt + ")"), e.querySelectorAll(":checked").length || _.push(":checked")
                    }), i(function (e) {
                        var t = n.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && _.push("name" + rt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || _.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), _.push(",.*:")
                    })), (T.matchesSelector = vt.test(H = O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && i(function (e) {
                        T.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), F.push("!=", at)
                    }), _ = _.length && new RegExp(_.join("|")), F = F.length && new RegExp(F.join("|")), t = vt.test(O.compareDocumentPosition), M = t || vt.test(O.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function (e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, U = t ? function (e, t) {
                        if (e === t) return S = !0, 0;
                        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !T.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === R && M(R, e) ? -1 : t === n || t.ownerDocument === R && M(R, t) ? 1 : A ? tt.call(A, e) - tt.call(A, t) : 0 : 4 & r ? -1 : 1)
                    } : function (e, t) {
                        if (e === t) return S = !0, 0;
                        var r, i = 0,
                            o = e.parentNode,
                            a = t.parentNode,
                            u = [e],
                            l = [t];
                        if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : A ? tt.call(A, e) - tt.call(A, t) : 0;
                        if (o === a) return s(e, t);
                        for (r = e; r = r.parentNode;) u.unshift(r);
                        for (r = t; r = r.parentNode;) l.unshift(r);
                        for (; u[i] === l[i];) i++;
                        return i ? s(u[i], l[i]) : u[i] === R ? -1 : l[i] === R ? 1 : 0
                    }, n) : L
                }, t.matches = function (e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function (e, n) {
                    if ((e.ownerDocument || e) !== L && q(e), n = n.replace(ft, "='$1']"), !(!T.matchesSelector || !$ || F && F.test(n) || _ && _.test(n))) try {
                        var r = H.call(e, n);
                        if (r || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                    } catch (i) {
                    }
                    return t(n, L, null, [e]).length > 0
                }, t.contains = function (e, t) {
                    return (e.ownerDocument || e) !== L && q(e), M(e, t)
                }, t.attr = function (e, t) {
                    (e.ownerDocument || e) !== L && q(e);
                    var n = j.attrHandle[t.toLowerCase()],
                        r = n && Y.call(j.attrHandle, t.toLowerCase()) ? n(e, t, !$) : void 0;
                    return void 0 !== r ? r : T.attributes || !$ ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }, t.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function (e) {
                    var t, n = [],
                        r = 0,
                        i = 0;
                    if (S = !T.detectDuplicates, A = !T.sortStable && e.slice(0), e.sort(U), S) {
                        for (; t = e[i++];) t === e[i] && (r = n.push(i));
                        for (; r--;) e.splice(n[r], 1)
                    }
                    return A = null, e
                }, k = t.getText = function (e) {
                    var t, n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                        } else if (3 === i || 4 === i) return e.nodeValue
                    } else
                        for (; t = e[r++];) n += k(t);
                    return n
                }, j = t.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: ht,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(wt, Ct), e[3] = (e[4] || e[5] || "").replace(wt, Ct), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        },
                        PSEUDO: function (e) {
                            var t, n = !e[5] && e[2];
                            return ht.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && pt.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(wt, Ct).toLowerCase();
                            return "*" === e ? function () {
                                return !0
                            } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function (e) {
                            var t = B[e + " "];
                            return t || (t = new RegExp("(^|" + rt + ")" + e + "(" + rt + "|$)")) && B(e, function (e) {
                                return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function (e, n, r) {
                            return function (i) {
                                var o = t.attr(i, e);
                                return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                            }
                        },
                        CHILD: function (e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3),
                                s = "last" !== e.slice(-4),
                                a = "of-type" === t;
                            return 1 === r && 0 === i ? function (e) {
                                return !!e.parentNode
                            } : function (t, n, u) {
                                var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling",
                                    m = t.parentNode,
                                    v = a && t.nodeName.toLowerCase(),
                                    y = !u && !a;
                                if (m) {
                                    if (o) {
                                        for (; g;) {
                                            for (f = t; f = f[g];)
                                                if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                        for (c = m[P] || (m[P] = {}), l = c[e] || [], d = l[0] === I && l[1], p = l[0] === I && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();)
                                            if (1 === f.nodeType && ++p && f === t) {
                                                c[e] = [I, d, p];
                                                break
                                            }
                                    } else if (y && (l = (t[P] || (t[P] = {}))[e]) && l[0] === I) p = l[1];
                                    else
                                        for (;
                                            (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[P] || (f[P] = {}))[e] = [I, p]), f !== t));) ;
                                    return p -= i, p === r || p % r === 0 && p / r >= 0
                                }
                            }
                        },
                        PSEUDO: function (e, n) {
                            var i,
                                o = j.pseudos[e] || j.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return o[P] ? o(n) : o.length > 1 ? (i = [e, e, "", n], j.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                                for (var r, i = o(e, n), s = i.length; s--;) r = tt.call(e, i[s]), e[r] = !(t[r] = i[s])
                            }) : function (e) {
                                return o(e, 0, i)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: r(function (e) {
                            var t = [],
                                n = [],
                                i = N(e.replace(ut, "$1"));
                            return i[P] ? r(function (e, t, n, r) {
                                for (var o, s = i(e, null, r, []), a = e.length; a--;) (o = s[a]) && (e[a] = !(t[a] = o))
                            }) : function (e, r, o) {
                                return t[0] = e, i(t, null, o, n), !n.pop()
                            }
                        }),
                        has: r(function (e) {
                            return function (n) {
                                return t(e, n).length > 0
                            }
                        }),
                        contains: r(function (e) {
                            return function (t) {
                                return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                            }
                        }),
                        lang: r(function (e) {
                            return dt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(wt, Ct).toLowerCase(),
                                function (t) {
                                    var n;
                                    do
                                        if (n = $ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                    while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function (e) {
                            return e === O
                        },
                        focus: function (e) {
                            return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function (e) {
                            return e.disabled === !1
                        },
                        disabled: function (e) {
                            return e.disabled === !0
                        },
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function (e) {
                            return !j.pseudos.empty(e)
                        },
                        header: function (e) {
                            return mt.test(e.nodeName)
                        },
                        input: function (e) {
                            return gt.test(e.nodeName)
                        },
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: l(function () {
                            return [0]
                        }),
                        last: l(function (e, t) {
                            return [t - 1]
                        }),
                        eq: l(function (e, t, n) {
                            return [0 > n ? n + t : n]
                        }),
                        even: l(function (e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e
                        }),
                        odd: l(function (e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e
                        }),
                        lt: l(function (e, t, n) {
                            for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                            return e
                        }),
                        gt: l(function (e, t, n) {
                            for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }, j.pseudos.nth = j.pseudos.eq;
                for (C in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) j.pseudos[C] = a(C);
                for (C in {
                    submit: !0,
                    reset: !0
                }) j.pseudos[C] = u(C);
                return f.prototype = j.filters = j.pseudos, j.setFilters = new f, N = t.compile = function (e, t) {
                    var n, r = [],
                        i = [],
                        o = X[e + " "];
                    if (!o) {
                        for (t || (t = p(e)), n = t.length; n--;) o = y(t[n]), o[P] ? r.push(o) : i.push(o);
                        o = X(e, b(i, r))
                    }
                    return o
                }, T.sortStable = P.split("").sort(U).join("") === P, T.detectDuplicates = !!S, q(), T.sortDetached = i(function (e) {
                    return 1 & e.compareDocumentPosition(L.createElement("div"))
                }), i(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function (e, t, n) {
                    return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), T.attributes && i(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || o("value", function (e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                }), i(function (e) {
                    return null == e.getAttribute("disabled")
                }) || o(nt, function (e, t, n) {
                    var r;
                    return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), t
            }(e);
            tt.find = ot, tt.expr = ot.selectors, tt.expr[":"] = tt.expr.pseudos, tt.unique = ot.uniqueSort, tt.text = ot.getText, tt.isXMLDoc = ot.isXML, tt.contains = ot.contains;
            var st = tt.expr.match.needsContext,
                at = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                ut = /^.[^:#\[\.,]*$/;
            tt.filter = function (e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? tt.find.matchesSelector(r, e) ? [r] : [] : tt.find.matches(e, tt.grep(t, function (e) {
                    return 1 === e.nodeType
                }))
            }, tt.fn.extend({
                find: function (e) {
                    var t, n = this.length,
                        r = [],
                        i = this;
                    if ("string" != typeof e) return this.pushStack(tt(e).filter(function () {
                        for (t = 0; n > t; t++)
                            if (tt.contains(i[t], this)) return !0
                    }));
                    for (t = 0; n > t; t++) tt.find(e, i[t], r);
                    return r = this.pushStack(n > 1 ? tt.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
                },
                filter: function (e) {
                    return this.pushStack(i(this, e || [], !1))
                },
                not: function (e) {
                    return this.pushStack(i(this, e || [], !0))
                },
                is: function (e) {
                    return !!i(this, "string" == typeof e && st.test(e) ? tt(e) : e || [], !1).length
                }
            });
            var lt, ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                ft = tt.fn.init = function (e, t) {
                    var n, r;
                    if (!e) return this;
                    if ("string" == typeof e) {
                        if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ct.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || lt).find(e) : this.constructor(t).find(e);
                        if (n[1]) {
                            if (t = t instanceof tt ? t[0] : t, tt.merge(this, tt.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)), at.test(n[1]) && tt.isPlainObject(t))
                                for (n in t) tt.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                            return this
                        }
                        return r = Z.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Z, this.selector = e, this
                    }
                    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : tt.isFunction(e) ? "undefined" != typeof lt.ready ? lt.ready(e) : e(tt) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), tt.makeArray(e, this))
                };
            ft.prototype = tt.fn, lt = tt(Z);
            var pt = /^(?:parents|prev(?:Until|All))/,
                dt = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            tt.extend({
                dir: function (e, t, n) {
                    for (var r = [], i = void 0 !== n;
                         (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (i && tt(e).is(n)) break;
                            r.push(e)
                        }
                    return r
                },
                sibling: function (e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
            }), tt.fn.extend({
                has: function (e) {
                    var t = tt(e, this),
                        n = t.length;
                    return this.filter(function () {
                        for (var e = 0; n > e; e++)
                            if (tt.contains(this, t[e])) return !0
                    })
                },
                closest: function (e, t) {
                    for (var n, r = 0, i = this.length, o = [], s = st.test(e) || "string" != typeof e ? tt(e, t || this.context) : 0; i > r; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && tt.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            }
                    return this.pushStack(o.length > 1 ? tt.unique(o) : o)
                },
                index: function (e) {
                    return e ? "string" == typeof e ? V.call(tt(e), this[0]) : V.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function (e, t) {
                    return this.pushStack(tt.unique(tt.merge(this.get(), tt(e, t))))
                },
                addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), tt.each({
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function (e) {
                    return tt.dir(e, "parentNode")
                },
                parentsUntil: function (e, t, n) {
                    return tt.dir(e, "parentNode", n)
                },
                next: function (e) {
                    return o(e, "nextSibling")
                },
                prev: function (e) {
                    return o(e, "previousSibling")
                },
                nextAll: function (e) {
                    return tt.dir(e, "nextSibling")
                },
                prevAll: function (e) {
                    return tt.dir(e, "previousSibling")
                },
                nextUntil: function (e, t, n) {
                    return tt.dir(e, "nextSibling", n)
                },
                prevUntil: function (e, t, n) {
                    return tt.dir(e, "previousSibling", n)
                },
                siblings: function (e) {
                    return tt.sibling((e.parentNode || {}).firstChild, e)
                },
                children: function (e) {
                    return tt.sibling(e.firstChild)
                },
                contents: function (e) {
                    return e.contentDocument || tt.merge([], e.childNodes)
                }
            }, function (e, t) {
                tt.fn[e] = function (n, r) {
                    var i = tt.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = tt.filter(r, i)), this.length > 1 && (dt[e] || tt.unique(i), pt.test(e) && i.reverse()), this.pushStack(i)
                }
            });
            var ht = /\S+/g,
                gt = {};
            tt.Callbacks = function (e) {
                e = "string" == typeof e ? gt[e] || s(e) : tt.extend({}, e);
                var t, n, r, i, o, a, u = [],
                    l = !e.once && [],
                    c = function (s) {
                        for (t = e.memory && s, n = !0, a = i || 0, i = 0, o = u.length, r = !0; u && o > a; a++)
                            if (u[a].apply(s[0], s[1]) === !1 && e.stopOnFalse) {
                                t = !1;
                                break
                            }
                        r = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
                    },
                    f = {
                        add: function () {
                            if (u) {
                                var n = u.length;
                                !function s(t) {
                                    tt.each(t, function (t, n) {
                                        var r = tt.type(n);
                                        "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && s(n)
                                    })
                                }(arguments), r ? o = u.length : t && (i = n, c(t))
                            }
                            return this
                        },
                        remove: function () {
                            return u && tt.each(arguments, function (e, t) {
                                for (var n;
                                     (n = tt.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (o >= n && o--, a >= n && a--)
                            }), this
                        },
                        has: function (e) {
                            return e ? tt.inArray(e, u) > -1 : !(!u || !u.length)
                        },
                        empty: function () {
                            return u = [], o = 0, this
                        },
                        disable: function () {
                            return u = l = t = void 0, this
                        },
                        disabled: function () {
                            return !u
                        },
                        lock: function () {
                            return l = void 0, t || f.disable(), this
                        },
                        locked: function () {
                            return !l
                        },
                        fireWith: function (e, t) {
                            return !u || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)), this
                        },
                        fire: function () {
                            return f.fireWith(this, arguments), this
                        },
                        fired: function () {
                            return !!n
                        }
                    };
                return f
            }, tt.extend({
                Deferred: function (e) {
                    var t = [
                            ["resolve", "done", tt.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", tt.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", tt.Callbacks("memory")]
                        ],
                        n = "pending",
                        r = {
                            state: function () {
                                return n
                            },
                            always: function () {
                                return i.done(arguments).fail(arguments), this
                            },
                            then: function () {
                                var e = arguments;
                                return tt.Deferred(function (n) {
                                    tt.each(t, function (t, o) {
                                        var s = tt.isFunction(e[t]) && e[t];
                                        i[o[1]](function () {
                                            var e = s && s.apply(this, arguments);
                                            e && tt.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            promise: function (e) {
                                return null != e ? tt.extend(e, r) : r
                            }
                        },
                        i = {};
                    return r.pipe = r.then, tt.each(t, function (e, o) {
                        var s = o[2],
                            a = o[3];
                        r[o[1]] = s.add, a && s.add(function () {
                            n = a
                        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                            return i[o[0] + "With"](this === i ? r : this, arguments), this
                        }, i[o[0] + "With"] = s.fireWith
                    }), r.promise(i), e && e.call(i, i), i
                },
                when: function (e) {
                    var t, n, r, i = 0,
                        o = z.call(arguments),
                        s = o.length,
                        a = 1 !== s || e && tt.isFunction(e.promise) ? s : 0,
                        u = 1 === a ? e : tt.Deferred(),
                        l = function (e, n, r) {
                            return function (i) {
                                n[e] = this, r[e] = arguments.length > 1 ? z.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                            }
                        };
                    if (s > 1)
                        for (t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++) o[i] && tt.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
                    return a || u.resolveWith(r, o), u.promise()
                }
            });
            var mt;
            tt.fn.ready = function (e) {
                return tt.ready.promise().done(e), this
            }, tt.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function (e) {
                    e ? tt.readyWait++ : tt.ready(!0)
                },
                ready: function (e) {
                    (e === !0 ? --tt.readyWait : tt.isReady) || (tt.isReady = !0, e !== !0 && --tt.readyWait > 0 || (mt.resolveWith(Z, [tt]), tt.fn.trigger && tt(Z).trigger("ready").off("ready")))
                }
            }), tt.ready.promise = function (t) {
                return mt || (mt = tt.Deferred(), "complete" === Z.readyState ? setTimeout(tt.ready) : (Z.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), mt.promise(t)
            }, tt.ready.promise();
            var vt = tt.access = function (e, t, n, r, i, o, s) {
                var a = 0,
                    u = e.length,
                    l = null == n;
                if ("object" === tt.type(n)) {
                    i = !0;
                    for (a in n) tt.access(e, t, a, n[a], !0, o, s)
                } else if (void 0 !== r && (i = !0, tt.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                        return l.call(tt(e), n)
                    })), t))
                    for (; u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
                return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
            };
            tt.acceptData = function (e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            }, u.uid = 1, u.accepts = tt.acceptData, u.prototype = {
                key: function (e) {
                    if (!u.accepts(e)) return 0;
                    var t = {},
                        n = e[this.expando];
                    if (!n) {
                        n = u.uid++;
                        try {
                            t[this.expando] = {
                                value: n
                            }, Object.defineProperties(e, t)
                        } catch (r) {
                            t[this.expando] = n, tt.extend(e, t)
                        }
                    }
                    return this.cache[n] || (this.cache[n] = {}), n
                },
                set: function (e, t, n) {
                    var r, i = this.key(e),
                        o = this.cache[i];
                    if ("string" == typeof t) o[t] = n;
                    else if (tt.isEmptyObject(o)) tt.extend(this.cache[i], t);
                    else
                        for (r in t) o[r] = t[r];
                    return o
                },
                get: function (e, t) {
                    var n = this.cache[this.key(e)];
                    return void 0 === t ? n : n[t]
                },
                access: function (e, t, n) {
                    var r;
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, tt.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function (e, t) {
                    var n, r, i, o = this.key(e),
                        s = this.cache[o];
                    if (void 0 === t) this.cache[o] = {};
                    else {
                        tt.isArray(t) ? r = t.concat(t.map(tt.camelCase)) : (i = tt.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(ht) || [])), n = r.length;
                        for (; n--;) delete s[r[n]]
                    }
                },
                hasData: function (e) {
                    return !tt.isEmptyObject(this.cache[e[this.expando]] || {})
                },
                discard: function (e) {
                    e[this.expando] && delete this.cache[e[this.expando]]
                }
            };
            var yt = new u,
                bt = new u,
                xt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                wt = /([A-Z])/g;
            tt.extend({
                hasData: function (e) {
                    return bt.hasData(e) || yt.hasData(e)
                },
                data: function (e, t, n) {
                    return bt.access(e, t, n)
                },
                removeData: function (e, t) {
                    bt.remove(e, t)
                },
                _data: function (e, t, n) {
                    return yt.access(e, t, n)
                },
                _removeData: function (e, t) {
                    yt.remove(e, t)
                }
            }), tt.fn.extend({
                data: function (e, t) {
                    var n, r, i, o = this[0],
                        s = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (i = bt.get(o), 1 === o.nodeType && !yt.get(o, "hasDataAttrs"))) {
                            for (n = s.length; n--;) r = s[n].name, 0 === r.indexOf("data-") && (r = tt.camelCase(r.slice(5)), l(o, r, i[r]));
                            yt.set(o, "hasDataAttrs", !0)
                        }
                        return i
                    }
                    return "object" == typeof e ? this.each(function () {
                        bt.set(this, e)
                    }) : vt(this, function (t) {
                        var n, r = tt.camelCase(e);
                        if (o && void 0 === t) {
                            if (n = bt.get(o, e), void 0 !== n) return n;
                            if (n = bt.get(o, r), void 0 !== n) return n;
                            if (n = l(o, r, void 0), void 0 !== n) return n
                        } else this.each(function () {
                            var n = bt.get(this, r);
                            bt.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && bt.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function (e) {
                    return this.each(function () {
                        bt.remove(this, e)
                    })
                }
            }), tt.extend({
                queue: function (e, t, n) {
                    var r;
                    return e ? (t = (t || "fx") + "queue", r = yt.get(e, t), n && (!r || tt.isArray(n) ? r = yt.access(e, t, tt.makeArray(n)) : r.push(n)), r || []) : void 0
                },
                dequeue: function (e, t) {
                    t = t || "fx";
                    var n = tt.queue(e, t),
                        r = n.length,
                        i = n.shift(),
                        o = tt._queueHooks(e, t),
                        s = function () {
                            tt.dequeue(e, t)
                        };
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
                },
                _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return yt.get(e, n) || yt.access(e, n, {
                        empty: tt.Callbacks("once memory").add(function () {
                            yt.remove(e, [t + "queue", n])
                        })
                    })
                }
            }), tt.fn.extend({
                queue: function (e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? tt.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                        var n = tt.queue(this, e, t);
                        tt._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && tt.dequeue(this, e)
                    })
                },
                dequeue: function (e) {
                    return this.each(function () {
                        tt.dequeue(this, e)
                    })
                },
                clearQueue: function (e) {
                    return this.queue(e || "fx", [])
                },
                promise: function (e, t) {
                    var n, r = 1,
                        i = tt.Deferred(),
                        o = this,
                        s = this.length,
                        a = function () {
                            --r || i.resolveWith(o, [o])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = yt.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
                    return a(), i.promise(t)
                }
            });
            var Ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                Tt = ["Top", "Right", "Bottom", "Left"],
                jt = function (e, t) {
                    return e = t || e, "none" === tt.css(e, "display") || !tt.contains(e.ownerDocument, e)
                },
                kt = /^(?:checkbox|radio)$/i;
            !function () {
                var e = Z.createDocumentFragment(),
                    t = e.appendChild(Z.createElement("div"));
                t.innerHTML = "<input type='radio' checked='checked' name='t'/>", K.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", K.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
            }();
            var Et = "undefined";
            K.focusinBubbles = "onfocusin" in e;
            var Nt = /^key/,
                Dt = /^(?:mouse|contextmenu)|click/,
                At = /^(?:focusinfocus|focusoutblur)$/,
                St = /^([^.]*)(?:\.(.+)|)$/;
            tt.event = {
                global: {},
                add: function (e, t, n, r, i) {
                    var o, s, a, u, l, c, f, p, d, h, g, m = yt.get(e);
                    if (m)
                        for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = tt.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
                            return typeof tt !== Et && tt.event.triggered !== t.type ? tt.event.dispatch.apply(e, arguments) : void 0
                        }), t = (t || "").match(ht) || [""], l = t.length; l--;) a = St.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d && (f = tt.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = tt.event.special[d] || {}, c = tt.extend({
                            type: d,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && tt.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(d, s, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), tt.event.global[d] = !0)
                },
                remove: function (e, t, n, r, i) {
                    var o, s, a, u, l, c, f, p, d, h, g, m = yt.hasData(e) && yt.get(e);
                    if (m && (u = m.events)) {
                        for (t = (t || "").match(ht) || [""], l = t.length; l--;)
                            if (a = St.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
                                for (f = tt.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                                s && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || tt.removeEvent(e, d, m.handle), delete u[d])
                            } else
                                for (d in u) tt.event.remove(e, d + t[l], n, r, !0);
                        tt.isEmptyObject(u) && (delete m.handle, yt.remove(e, "events"))
                    }
                },
                trigger: function (t, n, r, i) {
                    var o, s, a, u, l, c, f, p = [r || Z],
                        d = G.call(t, "type") ? t.type : t,
                        h = G.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (s = a = r = r || Z, 3 !== r.nodeType && 8 !== r.nodeType && !At.test(d + tt.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[tt.expando] ? t : new tt.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : tt.makeArray(n, [t]), f = tt.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                        if (!i && !f.noBubble && !tt.isWindow(r)) {
                            for (u = f.delegateType || d, At.test(u + d) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                            a === (r.ownerDocument || Z) && p.push(a.defaultView || a.parentWindow || e)
                        }
                        for (o = 0;
                             (s = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || d, c = (yt.get(s, "events") || {})[t.type] && yt.get(s, "handle"), c && c.apply(s, n), c = l && s[l], c && c.apply && tt.acceptData(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
                        return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !tt.acceptData(r) || l && tt.isFunction(r[d]) && !tt.isWindow(r) && (a = r[l], a && (r[l] = null), tt.event.triggered = d, r[d](), tt.event.triggered = void 0, a && (r[l] = a)), t.result
                    }
                },
                dispatch: function (e) {
                    e = tt.event.fix(e);
                    var t, n, r, i, o, s = [],
                        a = z.call(arguments),
                        u = (yt.get(this, "events") || {})[e.type] || [],
                        l = tt.event.special[e.type] || {};
                    if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                        for (s = tt.event.handlers.call(this, e, u), t = 0;
                             (i = s[t++]) && !e.isPropagationStopped();)
                            for (e.currentTarget = i.elem, n = 0;
                                 (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((tt.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                        return l.postDispatch && l.postDispatch.call(this, e), e.result
                    }
                },
                handlers: function (e, t) {
                    var n, r, i, o, s = [],
                        a = t.delegateCount,
                        u = e.target;
                    if (a && u.nodeType && (!e.button || "click" !== e.type))
                        for (; u !== this; u = u.parentNode || this)
                            if (u.disabled !== !0 || "click" !== e.type) {
                                for (r = [], n = 0; a > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? tt(i, this).index(u) >= 0 : tt.find(i, this, null, [u]).length), r[i] && r.push(o);
                                r.length && s.push({
                                    elem: u,
                                    handlers: r
                                })
                            }
                    return a < t.length && s.push({
                        elem: this,
                        handlers: t.slice(a)
                    }), s
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function (e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function (e, t) {
                        var n, r, i, o = t.button;
                        return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Z, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                    }
                },
                fix: function (e) {
                    if (e[tt.expando]) return e;
                    var t, n, r, i = e.type,
                        o = e,
                        s = this.fixHooks[i];
                    for (s || (this.fixHooks[i] = s = Dt.test(i) ? this.mouseHooks : Nt.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new tt.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
                    return e.target || (e.target = Z), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function () {
                            return this !== p() && this.focus ? (this.focus(), !1) : void 0
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function () {
                            return this === p() && this.blur ? (this.blur(), !1) : void 0
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function () {
                            return "checkbox" === this.type && this.click && tt.nodeName(this, "input") ? (this.click(), !1) : void 0
                        },
                        _default: function (e) {
                            return tt.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function (e, t, n, r) {
                    var i = tt.extend(new tt.Event, n, {
                        type: e,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    r ? tt.event.trigger(i, null, t) : tt.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
                }
            }, tt.removeEvent = function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1)
            }, tt.Event = function (e, t) {
                return this instanceof tt.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.getPreventDefault && e.getPreventDefault() ? c : f) : this.type = e, t && tt.extend(this, t), this.timeStamp = e && e.timeStamp || tt.now(), void(this[tt.expando] = !0)) : new tt.Event(e, t)
            }, tt.Event.prototype = {
                isDefaultPrevented: f,
                isPropagationStopped: f,
                isImmediatePropagationStopped: f,
                preventDefault: function () {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = c, e && e.preventDefault && e.preventDefault()
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    this.isPropagationStopped = c, e && e.stopPropagation && e.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    this.isImmediatePropagationStopped = c, this.stopPropagation()
                }
            }, tt.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, function (e, t) {
                tt.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                        var n, r = this,
                            i = e.relatedTarget,
                            o = e.handleObj;
                        return (!i || i !== r && !tt.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), K.focusinBubbles || tt.each({
                focus: "focusin",
                blur: "focusout"
            }, function (e, t) {
                var n = function (e) {
                    tt.event.simulate(t, e.target, tt.event.fix(e), !0)
                };
                tt.event.special[t] = {
                    setup: function () {
                        var r = this.ownerDocument || this,
                            i = yt.access(r, t);
                        i || r.addEventListener(e, n, !0), yt.access(r, t, (i || 0) + 1)
                    },
                    teardown: function () {
                        var r = this.ownerDocument || this,
                            i = yt.access(r, t) - 1;
                        i ? yt.access(r, t, i) : (r.removeEventListener(e, n, !0), yt.remove(r, t))
                    }
                }
            }), tt.fn.extend({
                on: function (e, t, n, r, i) {
                    var o, s;
                    if ("object" == typeof e) {
                        "string" != typeof t && (n = n || t, t = void 0);
                        for (s in e) this.on(s, t, n, e[s], i);
                        return this
                    }
                    if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = f;
                    else if (!r) return this;
                    return 1 === i && (o = r, r = function (e) {
                        return tt().off(e), o.apply(this, arguments)
                    }, r.guid = o.guid || (o.guid = tt.guid++)), this.each(function () {
                        tt.event.add(this, e, r, n, t)
                    })
                },
                one: function (e, t, n, r) {
                    return this.on(e, t, n, r, 1)
                },
                off: function (e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, tt(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof e) {
                        for (i in e) this.off(i, t, e[i]);
                        return this
                    }
                    return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = f), this.each(function () {
                        tt.event.remove(this, e, n, t)
                    })
                },
                trigger: function (e, t) {
                    return this.each(function () {
                        tt.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function (e, t) {
                    var n = this[0];
                    return n ? tt.event.trigger(e, t, n, !0) : void 0
                }
            });
            var qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                Lt = /<([\w:]+)/,
                Ot = /<|&#?\w+;/,
                $t = /<(?:script|style|link)/i,
                _t = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Ft = /^$|\/(?:java|ecma)script/i,
                Ht = /^true\/(.*)/,
                Mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                Pt = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            Pt.optgroup = Pt.option, Pt.tbody = Pt.tfoot = Pt.colgroup = Pt.caption = Pt.thead, Pt.th = Pt.td, tt.extend({
                clone: function (e, t, n) {
                    var r, i, o, s, a = e.cloneNode(!0),
                        u = tt.contains(e.ownerDocument, e);
                    if (!(K.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || tt.isXMLDoc(e)))
                        for (s = y(a), o = y(e), r = 0, i = o.length; i > r; r++) b(o[r], s[r]);
                    if (t)
                        if (n)
                            for (o = o || y(e), s = s || y(a), r = 0, i = o.length; i > r; r++) v(o[r], s[r]);
                        else v(e, a);
                    return s = y(a, "script"), s.length > 0 && m(s, !u && y(e, "script")), a
                },
                buildFragment: function (e, t, n, r) {
                    for (var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; d > p; p++)
                        if (i = e[p], i || 0 === i)
                            if ("object" === tt.type(i)) tt.merge(f, i.nodeType ? [i] : i);
                            else if (Ot.test(i)) {
                                for (o = o || c.appendChild(t.createElement("div")), s = (Lt.exec(i) || ["", ""])[1].toLowerCase(), a = Pt[s] || Pt._default, o.innerHTML = a[1] + i.replace(qt, "<$1></$2>") + a[2], l = a[0]; l--;) o = o.lastChild;
                                tt.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
                            } else f.push(t.createTextNode(i));
                    for (c.textContent = "", p = 0; i = f[p++];)
                        if ((!r || -1 === tt.inArray(i, r)) && (u = tt.contains(i.ownerDocument, i), o = y(c.appendChild(i), "script"), u && m(o), n))
                            for (l = 0; i = o[l++];) Ft.test(i.type || "") && n.push(i);
                    return c
                },
                cleanData: function (e) {
                    for (var t, n, r, i, o, s, a = tt.event.special, u = 0; void 0 !== (n = e[u]); u++) {
                        if (tt.acceptData(n) && (o = n[yt.expando], o && (t = yt.cache[o]))) {
                            if (r = Object.keys(t.events || {}), r.length)
                                for (s = 0; void 0 !== (i = r[s]); s++) a[i] ? tt.event.remove(n, i) : tt.removeEvent(n, i, t.handle);
                            yt.cache[o] && delete yt.cache[o]
                        }
                        delete bt.cache[n[bt.expando]]
                    }
                }
            }), tt.fn.extend({
                text: function (e) {
                    return vt(this, function (e) {
                        return void 0 === e ? tt.text(this) : this.empty().each(function () {
                            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function () {
                    return this.domManip(arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = d(this, e);
                            t.appendChild(e)
                        }
                    })
                },
                prepend: function () {
                    return this.domManip(arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = d(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function () {
                    return this.domManip(arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function () {
                    return this.domManip(arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                remove: function (e, t) {
                    for (var n, r = e ? tt.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || tt.cleanData(y(n)), n.parentNode && (t && tt.contains(n.ownerDocument, n) && m(y(n, "script")), n.parentNode.removeChild(n));
                    return this
                },
                empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (tt.cleanData(y(e, !1)), e.textContent = "");
                    return this
                },
                clone: function (e, t) {
                    return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                        return tt.clone(this, e, t)
                    })
                },
                html: function (e) {
                    return vt(this, function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !$t.test(e) && !Pt[(Lt.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = e.replace(qt, "<$1></$2>");
                            try {
                                for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (tt.cleanData(y(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (i) {
                            }
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function () {
                    var e = arguments[0];
                    return this.domManip(arguments, function (t) {
                        e = this.parentNode, tt.cleanData(y(this)), e && e.replaceChild(t, this)
                    }), e && (e.length || e.nodeType) ? this : this.remove()
                },
                detach: function (e) {
                    return this.remove(e, !0)
                },
                domManip: function (e, t) {
                    e = X.apply([], e);
                    var n, r, i, o, s, a, u = 0,
                        l = this.length,
                        c = this,
                        f = l - 1,
                        p = e[0],
                        d = tt.isFunction(p);
                    if (d || l > 1 && "string" == typeof p && !K.checkClone && _t.test(p)) return this.each(function (n) {
                        var r = c.eq(n);
                        d && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
                    });
                    if (l && (n = tt.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                        for (i = tt.map(y(n, "script"), h), o = i.length; l > u; u++) s = n, u !== f && (s = tt.clone(s, !0, !0), o && tt.merge(i, y(s, "script"))), t.call(this[u], s, u);
                        if (o)
                            for (a = i[i.length - 1].ownerDocument, tt.map(i, g), u = 0; o > u; u++) s = i[u], Ft.test(s.type || "") && !yt.access(s, "globalEval") && tt.contains(a, s) && (s.src ? tt._evalUrl && tt._evalUrl(s.src) : tt.globalEval(s.textContent.replace(Mt, "")))
                    }
                    return this
                }
            }), tt.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (e, t) {
                tt.fn[e] = function (e) {
                    for (var n, r = [], i = tt(e), o = i.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), tt(i[s])[t](n), U.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var Rt, It = {},
                Wt = /^margin/,
                Bt = new RegExp("^(" + Ct + ")(?!px)[a-z%]+$", "i"),
                zt = function (e) {
                    return e.ownerDocument.defaultView.getComputedStyle(e, null)
                };
            !function () {
                function t() {
                    a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", o.appendChild(s);
                    var t = e.getComputedStyle(a, null);
                    n = "1%" !== t.top, r = "4px" === t.width, o.removeChild(s)
                }

                var n, r,
                    i = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
                    o = Z.documentElement,
                    s = Z.createElement("div"),
                    a = Z.createElement("div");
                a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", K.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(a), e.getComputedStyle && tt.extend(K, {
                    pixelPosition: function () {
                        return t(), n
                    },
                    boxSizingReliable: function () {
                        return null == r && t(), r
                    },
                    reliableMarginRight: function () {
                        var t, n = a.appendChild(Z.createElement("div"));
                        return n.style.cssText = a.style.cssText = i, n.style.marginRight = n.style.width = "0", a.style.width = "1px", o.appendChild(s), t = !parseFloat(e.getComputedStyle(n, null).marginRight), o.removeChild(s), a.innerHTML = "", t
                    }
                })
            }(), tt.swap = function (e, t, n, r) {
                var i, o, s = {};
                for (o in t) s[o] = e.style[o], e.style[o] = t[o];
                i = n.apply(e, r || []);
                for (o in t) e.style[o] = s[o];
                return i
            };
            var Xt = /^(none|table(?!-c[ea]).+)/,
                Ut = new RegExp("^(" + Ct + ")(.*)$", "i"),
                Vt = new RegExp("^([+-])=(" + Ct + ")", "i"),
                Qt = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Yt = {
                    letterSpacing: 0,
                    fontWeight: 400
                },
                Gt = ["Webkit", "O", "Moz", "ms"];
            tt.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = C(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": "cssFloat"
                },
                style: function (e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, o, s, a = tt.camelCase(t),
                            u = e.style;
                        return t = tt.cssProps[a] || (tt.cssProps[a] = j(u, a)), s = tt.cssHooks[t] || tt.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Vt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(tt.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || tt.cssNumber[a] || (n += "px"), K.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = "", u[t] = n)), void 0)
                    }
                },
                css: function (e, t, n, r) {
                    var i, o, s, a = tt.camelCase(t);
                    return t = tt.cssProps[a] || (tt.cssProps[a] = j(e.style, a)), s = tt.cssHooks[t] || tt.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = C(e, t, r)), "normal" === i && t in Yt && (i = Yt[t]), "" === n || n ? (o = parseFloat(i), n === !0 || tt.isNumeric(o) ? o || 0 : i) : i
                }
            }), tt.each(["height", "width"], function (e, t) {
                tt.cssHooks[t] = {
                    get: function (e, n, r) {
                        return n ? 0 === e.offsetWidth && Xt.test(tt.css(e, "display")) ? tt.swap(e, Qt, function () {
                            return N(e, t, r)
                        }) : N(e, t, r) : void 0
                    },
                    set: function (e, n, r) {
                        var i = r && zt(e);
                        return k(e, n, r ? E(e, t, r, "border-box" === tt.css(e, "boxSizing", !1, i), i) : 0)
                    }
                }
            }), tt.cssHooks.marginRight = T(K.reliableMarginRight, function (e, t) {
                return t ? tt.swap(e, {
                    display: "inline-block"
                }, C, [e, "marginRight"]) : void 0
            }), tt.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function (e, t) {
                tt.cssHooks[e + t] = {
                    expand: function (n) {
                        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Tt[r] + t] = o[r] || o[r - 2] || o[0];
                        return i
                    }
                }, Wt.test(e) || (tt.cssHooks[e + t].set = k)
            }), tt.fn.extend({
                css: function (e, t) {
                    return vt(this, function (e, t, n) {
                        var r, i, o = {},
                            s = 0;
                        if (tt.isArray(t)) {
                            for (r = zt(e), i = t.length; i > s; s++) o[t[s]] = tt.css(e, t[s], !1, r);
                            return o
                        }
                        return void 0 !== n ? tt.style(e, t, n) : tt.css(e, t)
                    }, e, t, arguments.length > 1)
                },
                show: function () {
                    return D(this, !0)
                },
                hide: function () {
                    return D(this)
                },
                toggle: function (e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                        jt(this) ? tt(this).show() : tt(this).hide()
                    })
                }
            }), tt.Tween = A, A.prototype = {
                constructor: A,
                init: function (e, t, n, r, i, o) {
                    this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (tt.cssNumber[n] ? "" : "px")
                },
                cur: function () {
                    var e = A.propHooks[this.prop];
                    return e && e.get ? e.get(this) : A.propHooks._default.get(this)
                },
                run: function (e) {
                    var t, n = A.propHooks[this.prop];
                    return this.pos = t = this.options.duration ? tt.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : A.propHooks._default.set(this), this
                }
            }, A.prototype.init.prototype = A.prototype, A.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = tt.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                    },
                    set: function (e) {
                        tt.fx.step[e.prop] ? tt.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[tt.cssProps[e.prop]] || tt.cssHooks[e.prop]) ? tt.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                    }
                }
            }, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, tt.easing = {
                linear: function (e) {
                    return e
                },
                swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }
            }, tt.fx = A.prototype.init, tt.fx.step = {};
            var Jt, Kt, Zt = /^(?:toggle|show|hide)$/,
                en = new RegExp("^(?:([+-])=|)(" + Ct + ")([a-z%]*)$", "i"),
                tn = /queueHooks$/,
                nn = [O],
                rn = {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t),
                            r = n.cur(),
                            i = en.exec(t),
                            o = i && i[3] || (tt.cssNumber[e] ? "" : "px"),
                            s = (tt.cssNumber[e] || "px" !== o && +r) && en.exec(tt.css(n.elem, e)),
                            a = 1,
                            u = 20;
                        if (s && s[3] !== o) {
                            o = o || s[3], i = i || [], s = +r || 1;
                            do a = a || ".5", s /= a, tt.style(n.elem, e, s + o); while (a !== (a = n.cur() / r) && 1 !== a && --u)
                        }
                        return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
                    }]
                };
            tt.Animation = tt.extend(_, {
                tweener: function (e, t) {
                    tt.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, r = 0, i = e.length; i > r; r++) n = e[r], rn[n] = rn[n] || [], rn[n].unshift(t)
                },
                prefilter: function (e, t) {
                    t ? nn.unshift(e) : nn.push(e)
                }
            }), tt.speed = function (e, t, n) {
                var r = e && "object" == typeof e ? tt.extend({}, e) : {
                    complete: n || !n && t || tt.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !tt.isFunction(t) && t
                };
                return r.duration = tt.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in tt.fx.speeds ? tt.fx.speeds[r.duration] : tt.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                    tt.isFunction(r.old) && r.old.call(this), r.queue && tt.dequeue(this, r.queue)
                }, r
            }, tt.fn.extend({
                fadeTo: function (e, t, n, r) {
                    return this.filter(jt).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function (e, t, n, r) {
                    var i = tt.isEmptyObject(e),
                        o = tt.speed(t, n, r),
                        s = function () {
                            var t = _(this, tt.extend({}, e), o);
                            (i || yt.get(this, "finish")) && t.stop(!0)
                        };
                    return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
                },
                stop: function (e, t, n) {
                    var r = function (e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            o = tt.timers,
                            s = yt.get(this);
                        if (i) s[i] && s[i].stop && r(s[i]);
                        else
                            for (i in s) s[i] && s[i].stop && tn.test(i) && r(s[i]);
                        for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                        (t || !n) && tt.dequeue(this, e)
                    })
                },
                finish: function (e) {
                    return e !== !1 && (e = e || "fx"), this.each(function () {
                        var t, n = yt.get(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = tt.timers,
                            s = r ? r.length : 0;
                        for (n.finish = !0, tt.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), tt.each(["toggle", "show", "hide"], function (e, t) {
                var n = tt.fn[t];
                tt.fn[t] = function (e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(q(t, !0), e, r, i)
                }
            }), tt.each({
                slideDown: q("show"),
                slideUp: q("hide"),
                slideToggle: q("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (e, t) {
                tt.fn[e] = function (e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), tt.timers = [], tt.fx.tick = function () {
                var e, t = 0,
                    n = tt.timers;
                for (Jt = tt.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
                n.length || tt.fx.stop(), Jt = void 0
            }, tt.fx.timer = function (e) {
                tt.timers.push(e), e() ? tt.fx.start() : tt.timers.pop()
            }, tt.fx.interval = 13, tt.fx.start = function () {
                Kt || (Kt = setInterval(tt.fx.tick, tt.fx.interval))
            }, tt.fx.stop = function () {
                clearInterval(Kt), Kt = null
            }, tt.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, tt.fn.delay = function (e, t) {
                return e = tt.fx ? tt.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function () {
                        clearTimeout(r)
                    }
                })
            },
                function () {
                    var e = Z.createElement("input"),
                        t = Z.createElement("select"),
                        n = t.appendChild(Z.createElement("option"));
                    e.type = "checkbox", K.checkOn = "" !== e.value, K.optSelected = n.selected, t.disabled = !0, K.optDisabled = !n.disabled, e = Z.createElement("input"), e.value = "t", e.type = "radio", K.radioValue = "t" === e.value
                }();
            var on, sn, an = tt.expr.attrHandle;
            tt.fn.extend({
                attr: function (e, t) {
                    return vt(this, tt.attr, e, t, arguments.length > 1)
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        tt.removeAttr(this, e)
                    })
                }
            }), tt.extend({
                attr: function (e, t, n) {
                    var r, i, o = e.nodeType;
                    if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Et ? tt.prop(e, t, n) : (1 === o && tt.isXMLDoc(e) || (t = t.toLowerCase(), r = tt.attrHooks[t] || (tt.expr.match.bool.test(t) ? sn : on)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = tt.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void tt.removeAttr(e, t))
                },
                removeAttr: function (e, t) {
                    var n, r, i = 0,
                        o = t && t.match(ht);
                    if (o && 1 === e.nodeType)
                        for (; n = o[i++];) r = tt.propFix[n] || n, tt.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
                },
                attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!K.radioValue && "radio" === t && tt.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                }
            }), sn = {
                set: function (e, t, n) {
                    return t === !1 ? tt.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, tt.each(tt.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var n = an[t] || tt.find.attr;
                an[t] = function (e, t, r) {
                    var i, o;
                    return r || (o = an[t], an[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, an[t] = o), i
                }
            });
            var un = /^(?:input|select|textarea|button)$/i;
            tt.fn.extend({
                prop: function (e, t) {
                    return vt(this, tt.prop, e, t, arguments.length > 1)
                },
                removeProp: function (e) {
                    return this.each(function () {
                        delete this[tt.propFix[e] || e]
                    })
                }
            }), tt.extend({
                propFix: {
                    "for": "htmlFor",
                    "class": "className"
                },
                prop: function (e, t, n) {
                    var r, i, o, s = e.nodeType;
                    if (e && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !tt.isXMLDoc(e), o && (t = tt.propFix[t] || t, i = tt.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function (e) {
                            return e.hasAttribute("tabindex") || un.test(e.nodeName) || e.href ? e.tabIndex : -1
                        }
                    }
                }
            }), K.optSelected || (tt.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                }
            }), tt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                tt.propFix[this.toLowerCase()] = this
            });
            var ln = /[\t\r\n\f]/g;
            tt.fn.extend({
                addClass: function (e) {
                    var t, n, r, i, o, s, a = "string" == typeof e && e,
                        u = 0,
                        l = this.length;
                    if (tt.isFunction(e)) return this.each(function (t) {
                        tt(this).addClass(e.call(this, t, this.className))
                    });
                    if (a)
                        for (t = (e || "").match(ht) || []; l > u; u++)
                            if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : " ")) {
                                for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                                s = tt.trim(r), n.className !== s && (n.className = s)
                            }
                    return this
                },
                removeClass: function (e) {
                    var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e,
                        u = 0,
                        l = this.length;
                    if (tt.isFunction(e)) return this.each(function (t) {
                        tt(this).removeClass(e.call(this, t, this.className))
                    });
                    if (a)
                        for (t = (e || "").match(ht) || []; l > u; u++)
                            if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : "")) {
                                for (o = 0; i = t[o++];)
                                    for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                                s = e ? tt.trim(r) : "", n.className !== s && (n.className = s)
                            }
                    return this
                },
                toggleClass: function (e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(tt.isFunction(e) ? function (n) {
                        tt(this).toggleClass(e.call(this, n, this.className, t), t)
                    } : function () {
                        if ("string" === n)
                            for (var t, r = 0, i = tt(this), o = e.match(ht) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                        else (n === Et || "boolean" === n) && (this.className && yt.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : yt.get(this, "__className__") || "")
                    })
                },
                hasClass: function (e) {
                    for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ln, " ").indexOf(t) >= 0) return !0;
                    return !1
                }
            });
            var cn = /\r/g;
            tt.fn.extend({
                val: function (e) {
                    var t, n, r, i = this[0];
                    {
                        if (arguments.length) return r = tt.isFunction(e), this.each(function (n) {
                            var i;
                            1 === this.nodeType && (i = r ? e.call(this, n, tt(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : tt.isArray(i) && (i = tt.map(i, function (e) {
                                return null == e ? "" : e + ""
                            })), t = tt.valHooks[this.type] || tt.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                        });
                        if (i) return t = tt.valHooks[i.type] || tt.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(cn, "") : null == n ? "" : n)
                    }
                }
            }), tt.extend({
                valHooks: {
                    select: {
                        get: function (e) {
                            for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++)
                                if (n = r[u], !(!n.selected && u !== i || (K.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && tt.nodeName(n.parentNode, "optgroup"))) {
                                    if (t = tt(n).val(), o) return t;
                                    s.push(t)
                                }
                            return s
                        },
                        set: function (e, t) {
                            for (var n, r, i = e.options, o = tt.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = tt.inArray(tt(r).val(), o) >= 0) && (n = !0);
                            return n || (e.selectedIndex = -1), o
                        }
                    }
                }
            }), tt.each(["radio", "checkbox"], function () {
                tt.valHooks[this] = {
                    set: function (e, t) {
                        return tt.isArray(t) ? e.checked = tt.inArray(tt(e).val(), t) >= 0 : void 0
                    }
                }, K.checkOn || (tt.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            }), tt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
                tt.fn[t] = function (e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), tt.fn.extend({
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                },
                bind: function (e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function (e, t) {
                    return this.off(e, null, t)
                },
                delegate: function (e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            });
            var fn = tt.now(),
                pn = /\?/;
            tt.parseJSON = function (e) {
                return JSON.parse(e + "")
            }, tt.parseXML = function (e) {
                var t, n;
                if (!e || "string" != typeof e) return null;
                try {
                    n = new DOMParser, t = n.parseFromString(e, "text/xml")
                } catch (r) {
                    t = void 0
                }
                return (!t || t.getElementsByTagName("parsererror").length) && tt.error("Invalid XML: " + e), t
            };
            var dn, hn, gn = /#.*$/,
                mn = /([?&])_=[^&]*/,
                vn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                yn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                bn = /^(?:GET|HEAD)$/,
                xn = /^\/\//,
                wn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                Cn = {},
                Tn = {},
                jn = "*/".concat("*");
            try {
                hn = location.href
            } catch (kn) {
                hn = Z.createElement("a"), hn.href = "", hn = hn.href
            }
            dn = wn.exec(hn.toLowerCase()) || [], tt.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: hn,
                    type: "GET",
                    isLocal: yn.test(dn[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": jn,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": tt.parseJSON,
                        "text xml": tt.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function (e, t) {
                    return t ? M(M(e, tt.ajaxSettings), t) : M(tt.ajaxSettings, e)
                },
                ajaxPrefilter: F(Cn),
                ajaxTransport: F(Tn),
                ajax: function (e, t) {
                    function n(e, t, n, s) {
                        var u, c, v, y, x, C = t;
                        2 !== b && (b = 2, a && clearTimeout(a), r = void 0, o = s || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (y = P(f, w, n)), y = R(f, y, w, u), u ? (f.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (tt.lastModified[i] = x), x = w.getResponseHeader("etag"), x && (tt.etag[i] = x)), 204 === e || "HEAD" === f.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = y.state, c = y.data, v = y.error, u = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || C) + "", u ? h.resolveWith(p, [c, C, w]) : h.rejectWith(p, [w, C, v]), w.statusCode(m), m = void 0, l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]), g.fireWith(p, [w, C]), l && (d.trigger("ajaxComplete", [w, f]), --tt.active || tt.event.trigger("ajaxStop")))
                    }

                    "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var r, i, o, s, a, u, l, c, f = tt.ajaxSetup({}, t),
                        p = f.context || f,
                        d = f.context && (p.nodeType || p.jquery) ? tt(p) : tt.event,
                        h = tt.Deferred(),
                        g = tt.Callbacks("once memory"),
                        m = f.statusCode || {},
                        v = {},
                        y = {},
                        b = 0,
                        x = "canceled",
                        w = {
                            readyState: 0,
                            getResponseHeader: function (e) {
                                var t;
                                if (2 === b) {
                                    if (!s)
                                        for (s = {}; t = vn.exec(o);) s[t[1].toLowerCase()] = t[2];
                                    t = s[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function () {
                                return 2 === b ? o : null
                            },
                            setRequestHeader: function (e, t) {
                                var n = e.toLowerCase();
                                return b || (e = y[n] = y[n] || e, v[e] = t), this
                            },
                            overrideMimeType: function (e) {
                                return b || (f.mimeType = e), this
                            },
                            statusCode: function (e) {
                                var t;
                                if (e)
                                    if (2 > b)
                                        for (t in e) m[t] = [m[t], e[t]];
                                    else w.always(e[w.status]);
                                return this
                            },
                            abort: function (e) {
                                var t = e || x;
                                return r && r.abort(t), n(0, t), this
                            }
                        };
                    if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || hn) + "").replace(gn, "").replace(xn, dn[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = tt.trim(f.dataType || "*").toLowerCase().match(ht) || [""], null == f.crossDomain && (u = wn.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === dn[1] && u[2] === dn[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (dn[3] || ("http:" === dn[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = tt.param(f.data, f.traditional)), H(Cn, f, t, w), 2 === b) return w;
                    l = f.global, l && 0 === tt.active++ && tt.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !bn.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (pn.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = mn.test(i) ? i.replace(mn, "$1_=" + fn++) : i + (pn.test(i) ? "&" : "?") + "_=" + fn++)), f.ifModified && (tt.lastModified[i] && w.setRequestHeader("If-Modified-Since", tt.lastModified[i]), tt.etag[i] && w.setRequestHeader("If-None-Match", tt.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + jn + "; q=0.01" : "") : f.accepts["*"]);
                    for (c in f.headers) w.setRequestHeader(c, f.headers[c]);
                    if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === b)) return w.abort();
                    x = "abort";
                    for (c in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[c](f[c]);
                    if (r = H(Tn, f, t, w)) {
                        w.readyState = 1, l && d.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (a = setTimeout(function () {
                            w.abort("timeout")
                        }, f.timeout));
                        try {
                            b = 1, r.send(v, n)
                        } catch (C) {
                            if (!(2 > b)) throw C;
                            n(-1, C)
                        }
                    } else n(-1, "No Transport");
                    return w
                },
                getJSON: function (e, t, n) {
                    return tt.get(e, t, n, "json")
                },
                getScript: function (e, t) {
                    return tt.get(e, void 0, t, "script")
                }
            }), tt.each(["get", "post"], function (e, t) {
                tt[t] = function (e, n, r, i) {
                    return tt.isFunction(n) && (i = i || r, r = n, n = void 0), tt.ajax({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    })
                }
            }), tt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                tt.fn[t] = function (e) {
                    return this.on(t, e)
                }
            }), tt._evalUrl = function (e) {
                return tt.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }, tt.fn.extend({
                wrapAll: function (e) {
                    var t;
                    return tt.isFunction(e) ? this.each(function (t) {
                        tt(this).wrapAll(e.call(this, t))
                    }) : (this[0] && (t = tt(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this)
                },
                wrapInner: function (e) {
                    return this.each(tt.isFunction(e) ? function (t) {
                        tt(this).wrapInner(e.call(this, t))
                    } : function () {
                        var t = tt(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function (e) {
                    var t = tt.isFunction(e);
                    return this.each(function (n) {
                        tt(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function () {
                    return this.parent().each(function () {
                        tt.nodeName(this, "body") || tt(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), tt.expr.filters.hidden = function (e) {
                return e.offsetWidth <= 0 && e.offsetHeight <= 0
            }, tt.expr.filters.visible = function (e) {
                return !tt.expr.filters.hidden(e)
            };
            var En = /%20/g,
                Nn = /\[\]$/,
                Dn = /\r?\n/g,
                An = /^(?:submit|button|image|reset|file)$/i,
                Sn = /^(?:input|select|textarea|keygen)/i;
            tt.param = function (e, t) {
                var n, r = [],
                    i = function (e, t) {
                        t = tt.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                    };
                if (void 0 === t && (t = tt.ajaxSettings && tt.ajaxSettings.traditional), tt.isArray(e) || e.jquery && !tt.isPlainObject(e)) tt.each(e, function () {
                    i(this.name, this.value)
                });
                else
                    for (n in e) I(n, e[n], t, i);
                return r.join("&").replace(En, "+")
            }, tt.fn.extend({
                serialize: function () {
                    return tt.param(this.serializeArray())
                },
                serializeArray: function () {
                    return this.map(function () {
                        var e = tt.prop(this, "elements");
                        return e ? tt.makeArray(e) : this
                    }).filter(function () {
                        var e = this.type;
                        return this.name && !tt(this).is(":disabled") && Sn.test(this.nodeName) && !An.test(e) && (this.checked || !kt.test(e))
                    }).map(function (e, t) {
                        var n = tt(this).val();
                        return null == n ? null : tt.isArray(n) ? tt.map(n, function (e) {
                            return {
                                name: t.name,
                                value: e.replace(Dn, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(Dn, "\r\n")
                        }
                    }).get()
                }
            }), tt.ajaxSettings.xhr = function () {
                try {
                    return new XMLHttpRequest
                } catch (e) {
                }
            };
            var qn = 0,
                Ln = {},
                On = {
                    0: 200,
                    1223: 204
                },
                $n = tt.ajaxSettings.xhr();
            e.ActiveXObject && tt(e).on("unload", function () {
                for (var e in Ln) Ln[e]()
            }), K.cors = !!$n && "withCredentials" in $n, K.ajax = $n = !!$n, tt.ajaxTransport(function (e) {
                var t;
                return K.cors || $n && !e.crossDomain ? {
                    send: function (n, r) {
                        var i, o = e.xhr(),
                            s = ++qn;
                        if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (i in e.xhrFields) o[i] = e.xhrFields[i];
                        e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (i in n) o.setRequestHeader(i, n[i]);
                        t = function (e) {
                            return function () {
                                t && (delete Ln[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(On[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                                    text: o.responseText
                                } : void 0, o.getAllResponseHeaders()))
                            }
                        }, o.onload = t(), o.onerror = t("error"), t = Ln[s] = t("abort"), o.send(e.hasContent && e.data || null)
                    },
                    abort: function () {
                        t && t()
                    }
                } : void 0
            }), tt.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    "text script": function (e) {
                        return tt.globalEval(e), e
                    }
                }
            }), tt.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), tt.ajaxTransport("script", function (e) {
                if (e.crossDomain) {
                    var t, n;
                    return {
                        send: function (r, i) {
                            t = tt("<script>").prop({
                                async: !0,
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function (e) {
                                t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                            }), Z.head.appendChild(t[0])
                        },
                        abort: function () {
                            n && n()
                        }
                    }
                }
            });
            var _n = [],
                Fn = /(=)\?(?=&|$)|\?\?/;
            tt.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = _n.pop() || tt.expando + "_" + fn++;
                    return this[e] = !0, e
                }
            }), tt.ajaxPrefilter("json jsonp", function (t, n, r) {
                var i, o, s,
                    a = t.jsonp !== !1 && (Fn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Fn.test(t.data) && "data");
                return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = tt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Fn, "$1" + i) : t.jsonp !== !1 && (t.url += (pn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
                    return s || tt.error(i + " was not called"), s[0]
                }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
                    s = arguments
                }, r.always(function () {
                    e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, _n.push(i)), s && tt.isFunction(o) && o(s[0]), s = o = void 0
                }), "script") : void 0
            }), tt.parseHTML = function (e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || Z;
                var r = at.exec(e),
                    i = !n && [];
                return r ? [t.createElement(r[1])] : (r = tt.buildFragment([e], t, i), i && i.length && tt(i).remove(), tt.merge([], r.childNodes))
            };
            var Hn = tt.fn.load;
            tt.fn.load = function (e, t, n) {
                if ("string" != typeof e && Hn) return Hn.apply(this, arguments);
                var r, i, o, s = this,
                    a = e.indexOf(" ");
                return a >= 0 && (r = e.slice(a), e = e.slice(0, a)), tt.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && tt.ajax({
                    url: e,
                    type: i,
                    dataType: "html",
                    data: t
                }).done(function (e) {
                    o = arguments, s.html(r ? tt("<div>").append(tt.parseHTML(e)).find(r) : e)
                }).complete(n && function (e, t) {
                    s.each(n, o || [e.responseText, t, e])
                }), this
            }, tt.expr.filters.animated = function (e) {
                return tt.grep(tt.timers, function (t) {
                    return e === t.elem
                }).length
            };
            var Mn = e.document.documentElement;
            tt.offset = {
                setOffset: function (e, t, n) {
                    var r, i, o, s, a, u, l, c = tt.css(e, "position"),
                        f = tt(e),
                        p = {};
                    "static" === c && (e.style.position = "relative"), a = f.offset(), o = tt.css(e, "top"), u = tt.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), tt.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
                }
            }, tt.fn.extend({
                offset: function (e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                        tt.offset.setOffset(this, e, t)
                    });
                    var t, n, r = this[0],
                        i = {
                            top: 0,
                            left: 0
                        },
                        o = r && r.ownerDocument;
                    if (o) return t = o.documentElement, tt.contains(t, r) ? (typeof r.getBoundingClientRect !== Et && (i = r.getBoundingClientRect()), n = W(o), {
                        top: i.top + n.pageYOffset - t.clientTop,
                        left: i.left + n.pageXOffset - t.clientLeft
                    }) : i
                },
                position: function () {
                    if (this[0]) {
                        var e, t, n = this[0],
                            r = {
                                top: 0,
                                left: 0
                            };
                        return "fixed" === tt.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), tt.nodeName(e[0], "html") || (r = e.offset()), r.top += tt.css(e[0], "borderTopWidth", !0), r.left += tt.css(e[0], "borderLeftWidth", !0)), {
                            top: t.top - r.top - tt.css(n, "marginTop", !0),
                            left: t.left - r.left - tt.css(n, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var e = this.offsetParent || Mn; e && !tt.nodeName(e, "html") && "static" === tt.css(e, "position");) e = e.offsetParent;
                        return e || Mn
                    })
                }
            }), tt.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function (t, n) {
                var r = "pageYOffset" === n;
                tt.fn[t] = function (i) {
                    return vt(this, function (t, i, o) {
                        var s = W(t);
                        return void 0 === o ? s ? s[n] : t[i] : void(s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
                    }, t, i, arguments.length, null)
                }
            }), tt.each(["top", "left"], function (e, t) {
                tt.cssHooks[t] = T(K.pixelPosition, function (e, n) {
                    return n ? (n = C(e, t), Bt.test(n) ? tt(e).position()[t] + "px" : n) : void 0
                })
            }), tt.each({
                Height: "height",
                Width: "width"
            }, function (e, t) {
                tt.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function (n, r) {
                    tt.fn[r] = function (r, i) {
                        var o = arguments.length && (n || "boolean" != typeof r),
                            s = n || (r === !0 || i === !0 ? "margin" : "border");
                        return vt(this, function (t, n, r) {
                            var i;
                            return tt.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? tt.css(t, n, s) : tt.style(t, n, r, s)
                        }, t, o ? r : void 0, o, null)
                    }
                })
            }), tt.fn.size = function () {
                return this.length
            }, tt.fn.andSelf = tt.fn.addBack, "function" == typeof n && n.amd && n("jquery", [], function () {
                return tt
            });
            var Pn = e.jQuery,
                Rn = e.$;
            return tt.noConflict = function (t) {
                return e.$ === tt && (e.$ = Rn), t && e.jQuery === tt && (e.jQuery = Pn), tt
            }, typeof t === Et && (e.jQuery = e.$ = tt), tt
        }),
        function () {
            var e = this,
                t = e._,
                r = {},
                i = Array.prototype,
                o = Object.prototype,
                s = Function.prototype,
                a = i.push,
                u = i.slice,
                l = i.concat,
                c = o.toString,
                f = o.hasOwnProperty,
                p = i.forEach,
                d = i.map,
                h = i.reduce,
                g = i.reduceRight,
                m = i.filter,
                v = i.every,
                y = i.some,
                b = i.indexOf,
                x = i.lastIndexOf,
                w = Array.isArray,
                C = Object.keys,
                T = s.bind,
                j = function (e) {
                    return e instanceof j ? e : this instanceof j ? void(this._wrapped = e) : new j(e)
                };
            "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = j), exports._ = j) : e._ = j, j.VERSION = "1.6.0";
            var k = j.each = j.forEach = function (e, t, n) {
                if (null == e) return e;
                if (p && e.forEach === p) e.forEach(t, n);
                else if (e.length === +e.length) {
                    for (var i = 0, o = e.length; o > i; i++)
                        if (t.call(n, e[i], i, e) === r) return
                } else
                    for (var s = j.keys(e), i = 0, o = s.length; o > i; i++)
                        if (t.call(n, e[s[i]], s[i], e) === r) return;
                return e
            };
            j.map = j.collect = function (e, t, n) {
                var r = [];
                return null == e ? r : d && e.map === d ? e.map(t, n) : (k(e, function (e, i, o) {
                    r.push(t.call(n, e, i, o))
                }), r)
            };
            var E = "Reduce of empty array with no initial value";
            j.reduce = j.foldl = j.inject = function (e, t, n, r) {
                var i = arguments.length > 2;
                if (null == e && (e = []), h && e.reduce === h) return r && (t = j.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
                if (k(e, function (e, o, s) {
                        i ? n = t.call(r, n, e, o, s) : (n = e, i = !0)
                    }), !i) throw new TypeError(E);
                return n
            }, j.reduceRight = j.foldr = function (e, t, n, r) {
                var i = arguments.length > 2;
                if (null == e && (e = []), g && e.reduceRight === g) return r && (t = j.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
                var o = e.length;
                if (o !== +o) {
                    var s = j.keys(e);
                    o = s.length
                }
                if (k(e, function (a, u, l) {
                        u = s ? s[--o] : --o, i ? n = t.call(r, n, e[u], u, l) : (n = e[u], i = !0)
                    }), !i) throw new TypeError(E);
                return n
            }, j.find = j.detect = function (e, t, n) {
                var r;
                return N(e, function (e, i, o) {
                    return t.call(n, e, i, o) ? (r = e, !0) : void 0
                }), r
            }, j.filter = j.select = function (e, t, n) {
                var r = [];
                return null == e ? r : m && e.filter === m ? e.filter(t, n) : (k(e, function (e, i, o) {
                    t.call(n, e, i, o) && r.push(e)
                }), r)
            }, j.reject = function (e, t, n) {
                return j.filter(e, function (e, r, i) {
                    return !t.call(n, e, r, i)
                }, n)
            }, j.every = j.all = function (e, t, n) {
                t || (t = j.identity);
                var i = !0;
                return null == e ? i : v && e.every === v ? e.every(t, n) : (k(e, function (e, o, s) {
                    return (i = i && t.call(n, e, o, s)) ? void 0 : r
                }), !!i)
            };
            var N = j.some = j.any = function (e, t, n) {
                t || (t = j.identity);
                var i = !1;
                return null == e ? i : y && e.some === y ? e.some(t, n) : (k(e, function (e, o, s) {
                    return i || (i = t.call(n, e, o, s)) ? r : void 0
                }), !!i)
            };
            j.contains = j.include = function (e, t) {
                return null == e ? !1 : b && e.indexOf === b ? -1 != e.indexOf(t) : N(e, function (e) {
                    return e === t
                })
            }, j.invoke = function (e, t) {
                var n = u.call(arguments, 2),
                    r = j.isFunction(t);
                return j.map(e, function (e) {
                    return (r ? t : e[t]).apply(e, n)
                })
            }, j.pluck = function (e, t) {
                return j.map(e, j.property(t))
            }, j.where = function (e, t) {
                return j.filter(e, j.matches(t))
            }, j.findWhere = function (e, t) {
                return j.find(e, j.matches(t))
            }, j.max = function (e, t, n) {
                if (!t && j.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
                var r = -1 / 0,
                    i = -1 / 0;
                return k(e, function (e, o, s) {
                    var a = t ? t.call(n, e, o, s) : e;
                    a > i && (r = e, i = a)
                }), r
            }, j.min = function (e, t, n) {
                if (!t && j.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
                var r = 1 / 0,
                    i = 1 / 0;
                return k(e, function (e, o, s) {
                    var a = t ? t.call(n, e, o, s) : e;
                    i > a && (r = e, i = a)
                }), r
            }, j.shuffle = function (e) {
                var t, n = 0,
                    r = [];
                return k(e, function (e) {
                    t = j.random(n++), r[n - 1] = r[t], r[t] = e
                }), r
            }, j.sample = function (e, t, n) {
                return null == t || n ? (e.length !== +e.length && (e = j.values(e)), e[j.random(e.length - 1)]) : j.shuffle(e).slice(0, Math.max(0, t))
            };
            var D = function (e) {
                return null == e ? j.identity : j.isFunction(e) ? e : j.property(e)
            };
            j.sortBy = function (e, t, n) {
                return t = D(t), j.pluck(j.map(e, function (e, r, i) {
                    return {
                        value: e,
                        index: r,
                        criteria: t.call(n, e, r, i)
                    }
                }).sort(function (e, t) {
                    var n = e.criteria,
                        r = t.criteria;
                    if (n !== r) {
                        if (n > r || void 0 === n) return 1;
                        if (r > n || void 0 === r) return -1
                    }
                    return e.index - t.index
                }), "value")
            };
            var A = function (e) {
                return function (t, n, r) {
                    var i = {};
                    return n = D(n), k(t, function (o, s) {
                        var a = n.call(r, o, s, t);
                        e(i, a, o)
                    }), i
                }
            };
            j.groupBy = A(function (e, t, n) {
                j.has(e, t) ? e[t].push(n) : e[t] = [n]
            }), j.indexBy = A(function (e, t, n) {
                e[t] = n
            }), j.countBy = A(function (e, t) {
                j.has(e, t) ? e[t]++ : e[t] = 1
            }), j.sortedIndex = function (e, t, n, r) {
                n = D(n);
                for (var i = n.call(r, t), o = 0, s = e.length; s > o;) {
                    var a = o + s >>> 1;
                    n.call(r, e[a]) < i ? o = a + 1 : s = a
                }
                return o
            }, j.toArray = function (e) {
                return e ? j.isArray(e) ? u.call(e) : e.length === +e.length ? j.map(e, j.identity) : j.values(e) : []
            }, j.size = function (e) {
                return null == e ? 0 : e.length === +e.length ? e.length : j.keys(e).length
            }, j.first = j.head = j.take = function (e, t, n) {
                return null == e ? void 0 : null == t || n ? e[0] : 0 > t ? [] : u.call(e, 0, t)
            }, j.initial = function (e, t, n) {
                return u.call(e, 0, e.length - (null == t || n ? 1 : t))
            }, j.last = function (e, t, n) {
                return null == e ? void 0 : null == t || n ? e[e.length - 1] : u.call(e, Math.max(e.length - t, 0))
            }, j.rest = j.tail = j.drop = function (e, t, n) {
                return u.call(e, null == t || n ? 1 : t)
            }, j.compact = function (e) {
                return j.filter(e, j.identity)
            };
            var S = function (e, t, n) {
                return t && j.every(e, j.isArray) ? l.apply(n, e) : (k(e, function (e) {
                    j.isArray(e) || j.isArguments(e) ? t ? a.apply(n, e) : S(e, t, n) : n.push(e)
                }), n)
            };
            j.flatten = function (e, t) {
                return S(e, t, [])
            }, j.without = function (e) {
                return j.difference(e, u.call(arguments, 1))
            }, j.partition = function (e, t) {
                var n = [],
                    r = [];
                return k(e, function (e) {
                    (t(e) ? n : r).push(e)
                }), [n, r]
            }, j.uniq = j.unique = function (e, t, n, r) {
                j.isFunction(t) && (r = n, n = t, t = !1);
                var i = n ? j.map(e, n, r) : e,
                    o = [],
                    s = [];
                return k(i, function (n, r) {
                    (t ? r && s[s.length - 1] === n : j.contains(s, n)) || (s.push(n), o.push(e[r]))
                }), o
            }, j.union = function () {
                return j.uniq(j.flatten(arguments, !0))
            }, j.intersection = function (e) {
                var t = u.call(arguments, 1);
                return j.filter(j.uniq(e), function (e) {
                    return j.every(t, function (t) {
                        return j.contains(t, e)
                    })
                })
            }, j.difference = function (e) {
                var t = l.apply(i, u.call(arguments, 1));
                return j.filter(e, function (e) {
                    return !j.contains(t, e)
                })
            }, j.zip = function () {
                for (var e = j.max(j.pluck(arguments, "length").concat(0)), t = new Array(e), n = 0; e > n; n++) t[n] = j.pluck(arguments, "" + n);
                return t
            }, j.object = function (e, t) {
                if (null == e) return {};
                for (var n = {}, r = 0, i = e.length; i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
                return n
            }, j.indexOf = function (e, t, n) {
                if (null == e) return -1;
                var r = 0,
                    i = e.length;
                if (n) {
                    if ("number" != typeof n) return r = j.sortedIndex(e, t), e[r] === t ? r : -1;
                    r = 0 > n ? Math.max(0, i + n) : n
                }
                if (b && e.indexOf === b) return e.indexOf(t, n);
                for (; i > r; r++)
                    if (e[r] === t) return r;
                return -1
            }, j.lastIndexOf = function (e, t, n) {
                if (null == e) return -1;
                var r = null != n;
                if (x && e.lastIndexOf === x) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
                for (var i = r ? n : e.length; i--;)
                    if (e[i] === t) return i;
                return -1
            }, j.range = function (e, t, n) {
                arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
                for (var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, o = new Array(r); r > i;) o[i++] = e, e += n;
                return o
            };
            var q = function () {
            };
            j.bind = function (e, t) {
                var n, r;
                if (T && e.bind === T) return T.apply(e, u.call(arguments, 1));
                if (!j.isFunction(e)) throw new TypeError;
                return n = u.call(arguments, 2), r = function () {
                    if (!(this instanceof r)) return e.apply(t, n.concat(u.call(arguments)));
                    q.prototype = e.prototype;
                    var i = new q;
                    q.prototype = null;
                    var o = e.apply(i, n.concat(u.call(arguments)));
                    return Object(o) === o ? o : i
                }
            }, j.partial = function (e) {
                var t = u.call(arguments, 1);
                return function () {
                    for (var n = 0, r = t.slice(), i = 0, o = r.length; o > i; i++) r[i] === j && (r[i] = arguments[n++]);
                    for (; n < arguments.length;) r.push(arguments[n++]);
                    return e.apply(this, r)
                }
            }, j.bindAll = function (e) {
                var t = u.call(arguments, 1);
                if (0 === t.length) throw new Error("bindAll must be passed function names");
                return k(t, function (t) {
                    e[t] = j.bind(e[t], e)
                }), e
            }, j.memoize = function (e, t) {
                var n = {};
                return t || (t = j.identity),
                    function () {
                        var r = t.apply(this, arguments);
                        return j.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
                    }
            }, j.delay = function (e, t) {
                var n = u.call(arguments, 2);
                return setTimeout(function () {
                    return e.apply(null, n)
                }, t)
            }, j.defer = function (e) {
                return j.delay.apply(j, [e, 1].concat(u.call(arguments, 1)))
            }, j.throttle = function (e, t, n) {
                var r, i, o, s = null,
                    a = 0;
                n || (n = {});
                var u = function () {
                    a = n.leading === !1 ? 0 : j.now(), s = null, o = e.apply(r, i), r = i = null
                };
                return function () {
                    var l = j.now();
                    a || n.leading !== !1 || (a = l);
                    var c = t - (l - a);
                    return r = this, i = arguments, 0 >= c ? (clearTimeout(s), s = null, a = l, o = e.apply(r, i), r = i = null) : s || n.trailing === !1 || (s = setTimeout(u, c)), o
                }
            }, j.debounce = function (e, t, n) {
                var r, i, o, s, a, u = function () {
                    var l = j.now() - s;
                    t > l ? r = setTimeout(u, t - l) : (r = null, n || (a = e.apply(o, i), o = i = null))
                };
                return function () {
                    o = this, i = arguments, s = j.now();
                    var l = n && !r;
                    return r || (r = setTimeout(u, t)), l && (a = e.apply(o, i), o = i = null), a
                }
            }, j.once = function (e) {
                var t, n = !1;
                return function () {
                    return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
                }
            }, j.wrap = function (e, t) {
                return j.partial(t, e)
            }, j.compose = function () {
                var e = arguments;
                return function () {
                    for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
                    return t[0]
                }
            }, j.after = function (e, t) {
                return function () {
                    return --e < 1 ? t.apply(this, arguments) : void 0
                }
            }, j.keys = function (e) {
                if (!j.isObject(e)) return [];
                if (C) return C(e);
                var t = [];
                for (var n in e) j.has(e, n) && t.push(n);
                return t
            }, j.values = function (e) {
                for (var t = j.keys(e), n = t.length, r = new Array(n), i = 0; n > i; i++) r[i] = e[t[i]];
                return r
            }, j.pairs = function (e) {
                for (var t = j.keys(e), n = t.length, r = new Array(n), i = 0; n > i; i++) r[i] = [t[i], e[t[i]]];
                return r
            }, j.invert = function (e) {
                for (var t = {}, n = j.keys(e), r = 0, i = n.length; i > r; r++) t[e[n[r]]] = n[r];
                return t
            }, j.functions = j.methods = function (e) {
                var t = [];
                for (var n in e) j.isFunction(e[n]) && t.push(n);
                return t.sort()
            }, j.extend = function (e) {
                return k(u.call(arguments, 1), function (t) {
                    if (t)
                        for (var n in t) e[n] = t[n]
                }), e
            }, j.pick = function (e) {
                var t = {},
                    n = l.apply(i, u.call(arguments, 1));
                return k(n, function (n) {
                    n in e && (t[n] = e[n])
                }), t
            }, j.omit = function (e) {
                var t = {},
                    n = l.apply(i, u.call(arguments, 1));
                for (var r in e) j.contains(n, r) || (t[r] = e[r]);
                return t
            }, j.defaults = function (e) {
                return k(u.call(arguments, 1), function (t) {
                    if (t)
                        for (var n in t) void 0 === e[n] && (e[n] = t[n])
                }), e
            }, j.clone = function (e) {
                return j.isObject(e) ? j.isArray(e) ? e.slice() : j.extend({}, e) : e
            }, j.tap = function (e, t) {
                return t(e), e
            };
            var L = function (e, t, n, r) {
                if (e === t) return 0 !== e || 1 / e == 1 / t;
                if (null == e || null == t) return e === t;
                e instanceof j && (e = e._wrapped), t instanceof j && (t = t._wrapped);
                var i = c.call(e);
                if (i != c.call(t)) return !1;
                switch (i) {
                    case "[object String]":
                        return e == String(t);
                    case "[object Number]":
                        return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +e == +t;
                    case "[object RegExp]":
                        return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
                }
                if ("object" != typeof e || "object" != typeof t) return !1;
                for (var o = n.length; o--;)
                    if (n[o] == e) return r[o] == t;
                var s = e.constructor,
                    a = t.constructor;
                if (s !== a && !(j.isFunction(s) && s instanceof s && j.isFunction(a) && a instanceof a) && "constructor" in e && "constructor" in t) return !1;
                n.push(e), r.push(t);
                var u = 0,
                    l = !0;
                if ("[object Array]" == i) {
                    if (u = e.length, l = u == t.length)
                        for (; u-- && (l = L(e[u], t[u], n, r));) ;
                } else {
                    for (var f in e)
                        if (j.has(e, f) && (u++, !(l = j.has(t, f) && L(e[f], t[f], n, r)))) break;
                    if (l) {
                        for (f in t)
                            if (j.has(t, f) && !u--) break;
                        l = !u
                    }
                }
                return n.pop(), r.pop(), l
            };
            j.isEqual = function (e, t) {
                return L(e, t, [], [])
            }, j.isEmpty = function (e) {
                if (null == e) return !0;
                if (j.isArray(e) || j.isString(e)) return 0 === e.length;
                for (var t in e)
                    if (j.has(e, t)) return !1;
                return !0
            }, j.isElement = function (e) {
                return !(!e || 1 !== e.nodeType)
            }, j.isArray = w || function (e) {
                return "[object Array]" == c.call(e)
            }, j.isObject = function (e) {
                return e === Object(e)
            }, k(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
                j["is" + e] = function (t) {
                    return c.call(t) == "[object " + e + "]"
                }
            }), j.isArguments(arguments) || (j.isArguments = function (e) {
                return !(!e || !j.has(e, "callee"))
            }), "function" != typeof /./ && (j.isFunction = function (e) {
                return "function" == typeof e
            }), j.isFinite = function (e) {
                return isFinite(e) && !isNaN(parseFloat(e))
            }, j.isNaN = function (e) {
                return j.isNumber(e) && e != +e
            }, j.isBoolean = function (e) {
                return e === !0 || e === !1 || "[object Boolean]" == c.call(e)
            }, j.isNull = function (e) {
                return null === e
            }, j.isUndefined = function (e) {
                return void 0 === e
            }, j.has = function (e, t) {
                return f.call(e, t)
            }, j.noConflict = function () {
                return e._ = t, this
            }, j.identity = function (e) {
                return e
            }, j.constant = function (e) {
                return function () {
                    return e
                }
            }, j.property = function (e) {
                return function (t) {
                    return t[e]
                }
            }, j.matches = function (e) {
                return function (t) {
                    if (t === e) return !0;
                    for (var n in e)
                        if (e[n] !== t[n]) return !1;
                    return !0
                }
            }, j.times = function (e, t, n) {
                for (var r = Array(Math.max(0, e)), i = 0; e > i; i++) r[i] = t.call(n, i);
                return r
            }, j.random = function (e, t) {
                return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
            }, j.now = Date.now || function () {
                return (new Date).getTime()
            };
            var O = {
                escape: {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;"
                }
            };
            O.unescape = j.invert(O.escape);
            var $ = {
                escape: new RegExp("[" + j.keys(O.escape).join("") + "]", "g"),
                unescape: new RegExp("(" + j.keys(O.unescape).join("|") + ")", "g")
            };
            j.each(["escape", "unescape"], function (e) {
                j[e] = function (t) {
                    return null == t ? "" : ("" + t).replace($[e], function (t) {
                        return O[e][t]
                    })
                }
            }), j.result = function (e, t) {
                if (null == e) return void 0;
                var n = e[t];
                return j.isFunction(n) ? n.call(e) : n
            }, j.mixin = function (e) {
                k(j.functions(e), function (t) {
                    var n = j[t] = e[t];
                    j.prototype[t] = function () {
                        var e = [this._wrapped];
                        return a.apply(e, arguments), P.call(this, n.apply(j, e))
                    }
                })
            };
            var _ = 0;
            j.uniqueId = function (e) {
                var t = ++_ + "";
                return e ? e + t : t
            }, j.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var F = /(.)^/,
                H = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "	": "t",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                M = /\\|'|\r|\n|\t|\u2028|\u2029/g;
            j.template = function (e, t, n) {
                var r;
                n = j.defaults({}, n, j.templateSettings);
                var i = new RegExp([(n.escape || F).source, (n.interpolate || F).source, (n.evaluate || F).source].join("|") + "|$", "g"),
                    o = 0,
                    s = "__p+='";
                e.replace(i, function (t, n, r, i, a) {
                    return s += e.slice(o, a).replace(M, function (e) {
                        return "\\" + H[e]
                    }), n && (s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (s += "';\n" + i + "\n__p+='"), o = a + t.length, t
                }), s += "';\n", n.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
                try {
                    r = new Function(n.variable || "obj", "_", s)
                } catch (a) {
                    throw a.source = s, a
                }
                if (t) return r(t, j);
                var u = function (e) {
                    return r.call(this, e, j)
                };
                return u.source = "function(" + (n.variable || "obj") + "){\n" + s + "}", u
            }, j.chain = function (e) {
                return j(e).chain()
            };
            var P = function (e) {
                return this._chain ? j(e).chain() : e
            };
            j.mixin(j), k(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
                var t = i[e];
                j.prototype[e] = function () {
                    var n = this._wrapped;
                    return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], P.call(this, n)
                }
            }), k(["concat", "join", "slice"], function (e) {
                var t = i[e];
                j.prototype[e] = function () {
                    return P.call(this, t.apply(this._wrapped, arguments))
                }
            }), j.extend(j.prototype, {
                chain: function () {
                    return this._chain = !0, this
                },
                value: function () {
                    return this._wrapped
                }
            }), "function" == typeof n && n.amd && n("underscore", [], function () {
                return j
            })
        }.call(this), +function (e) {
        "use strict";

        function t() {
            var e = document.createElement("bootstrap"),
                t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in t)
                if (void 0 !== e.style[n]) return {
                    end: t[n]
                }
        }

        e.fn.emulateTransitionEnd = function (t) {
            var n = !1,
                r = this;
            e(this).one(e.support.transition.end, function () {
                n = !0
            });
            var i = function () {
                n || e(r).trigger(e.support.transition.end)
            };
            return setTimeout(i, t), this
        }, e(function () {
            e.support.transition = t()
        })
    }(jQuery), n("bootstrapTransition", ["jquery"], function () {
    }), +function (e) {
        "use strict";
        var t = function (n, r) {
            this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, r), this.transitioning = null, this.options.parent && (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle()
        };
        t.DEFAULTS = {
            toggle: !0
        }, t.prototype.dimension = function () {
            var e = this.$element.hasClass("width");
            return e ? "width" : "height"
        }, t.prototype.show = function () {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var t = e.Event("show.bs.collapse");
                if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                    var n = this.$parent && this.$parent.find("> .panel > .in");
                    if (n && n.length) {
                        var r = n.data("bs.collapse");
                        if (r && r.transitioning) return;
                        n.collapse("hide"), r || n.data("bs.collapse", null)
                    }
                    var i = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[i](0), this.transitioning = 1;
                    var o = function () {
                        this.$element.removeClass("collapsing").addClass("in")[i]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!e.support.transition) return o.call(this);
                    var s = e.camelCase(["scroll", i].join("-"));
                    this.$element.one(e.support.transition.end, e.proxy(o, this)).emulateTransitionEnd(350)[i](this.$element[0][s])
                }
            }
        }, t.prototype.hide = function () {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var t = e.Event("hide.bs.collapse");
                if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                    var n = this.dimension();
                    this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                    var r = function () {
                        this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                    };
                    return e.support.transition ? void this.$element[n](0).one(e.support.transition.end, e.proxy(r, this)).emulateTransitionEnd(350) : r.call(this)
                }
            }
        }, t.prototype.toggle = function () {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        };
        var n = e.fn.collapse;
        e.fn.collapse = function (n) {
            return this.each(function () {
                var r = e(this),
                    i = r.data("bs.collapse"),
                    o = e.extend({}, t.DEFAULTS, r.data(), "object" == typeof n && n);
                i || r.data("bs.collapse", i = new t(this, o)), "string" == typeof n && i[n]()
            })
        }, e.fn.collapse.Constructor = t, e.fn.collapse.noConflict = function () {
            return e.fn.collapse = n, this
        }, e(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function (t) {
            var n, r = e(this),
                i = r.attr("data-target") || t.preventDefault() || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""),
                o = e(i),
                s = o.data("bs.collapse"),
                a = s ? "toggle" : r.data(),
                u = r.attr("data-parent"),
                l = u && e(u);
            s && s.transitioning || (l && l.find('[data-toggle=collapse][data-parent="' + u + '"]').not(r).addClass("collapsed"), r[o.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), o.collapse(a)
        })
    }(jQuery), n("bootstrapCollapse", ["jquery", "bootstrapTransition"], function () {
    }), n("searchMode", ["jquery"], function (e) {
        e(".js--toggle-search-mode").on("click", function (t) {
            t.preventDefault(), e("body").toggleClass("search-mode"), e("body").hasClass("search-mode") ? (setTimeout(function () {
                e(".js--search-panel-text").focus()
            }, 10), e(document).on("keyup.searchMode", function (t) {
                t.preventDefault(), 27 === t.keyCode && (e("body").toggleClass("search-mode"), e(document).off("keyup.searchMode"))
            })) : e(document).off("keyup.searchMode")
        })
    }), +function (e) {
        "use strict";
        var t = function (t) {
            this.element = e(t)
        };
        t.prototype.show = function () {
            var t = this.element,
                n = t.closest("ul:not(.dropdown-menu)"),
                r = t.data("target");
            if (r || (r = t.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
                var i = n.find(".active:last a")[0],
                    o = e.Event("show.bs.tab", {
                        relatedTarget: i
                    });
                if (t.trigger(o), !o.isDefaultPrevented()) {
                    var s = e(r);
                    this.activate(t.parent("li"), n), this.activate(s, s.parent(), function () {
                        t.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: i
                        })
                    })
                }
            }
        }, t.prototype.activate = function (t, n, r) {
            function i() {
                o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), r && r()
            }

            var o = n.find("> .active"),
                s = r && e.support.transition && o.hasClass("fade");
            s ? o.one(e.support.transition.end, i).emulateTransitionEnd(150) : i(), o.removeClass("in")
        };
        var n = e.fn.tab;
        e.fn.tab = function (n) {
            return this.each(function () {
                var r = e(this),
                    i = r.data("bs.tab");
                i || r.data("bs.tab", i = new t(this)), "string" == typeof n && i[n]()
            })
        }, e.fn.tab.Constructor = t, e.fn.tab.noConflict = function () {
            return e.fn.tab = n, this
        }, e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (t) {
            t.preventDefault(), e(this).tab("show")
        })
    }(jQuery), n("bootstrapTab", ["jquery"], function () {
    }), +function (e) {
        "use strict";
        var t = function (t, n) {
            this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this))
        };
        t.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0
        }, t.prototype.cycle = function (t) {
            return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
        }, t.prototype.getActiveIndex = function () {
            return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
        }, t.prototype.to = function (t) {
            var n = this,
                r = this.getActiveIndex();
            return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid", function () {
                n.to(t)
            }) : r == t ? this.pause().cycle() : this.slide(t > r ? "next" : "prev", e(this.$items[t]))
        }, t.prototype.pause = function (t) {
            return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition.end && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, t.prototype.next = function () {
            return this.sliding ? void 0 : this.slide("next")
        }, t.prototype.prev = function () {
            return this.sliding ? void 0 : this.slide("prev")
        }, t.prototype.slide = function (t, n) {
            var r = this.$element.find(".item.active"),
                i = n || r[t](),
                o = this.interval,
                s = "next" == t ? "left" : "right",
                a = "next" == t ? "first" : "last",
                u = this;
            if (!i.length) {
                if (!this.options.wrap) return;
                i = this.$element.find(".item")[a]()
            }
            this.sliding = !0, o && this.pause();
            var l = e.Event("slide.bs.carousel", {
                relatedTarget: i[0],
                direction: s
            });
            if (!i.hasClass("active")) {
                if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function () {
                        var t = e(u.$indicators.children()[u.getActiveIndex()]);
                        t && t.addClass("active")
                    })), e.support.transition && this.$element.hasClass("slide")) {
                    if (this.$element.trigger(l), l.isDefaultPrevented()) return;
                    i.addClass(t), i[0].offsetWidth, r.addClass(s), i.addClass(s), r.one(e.support.transition.end, function () {
                        i.removeClass([t, s].join(" ")).addClass("active"), r.removeClass(["active", s].join(" ")), u.sliding = !1, setTimeout(function () {
                            u.$element.trigger("slid")
                        }, 0)
                    }).emulateTransitionEnd(600)
                } else {
                    if (this.$element.trigger(l), l.isDefaultPrevented()) return;
                    r.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
                }
                return o && this.cycle(), this
            }
        };
        var n = e.fn.carousel;
        e.fn.carousel = function (n) {
            return this.each(function () {
                var r = e(this),
                    i = r.data("bs.carousel"),
                    o = e.extend({}, t.DEFAULTS, r.data(), "object" == typeof n && n),
                    s = "string" == typeof n ? n : o.slide;
                i || r.data("bs.carousel", i = new t(this, o)), "number" == typeof n ? i.to(n) : s ? i[s]() : o.interval && i.pause().cycle()
            })
        }, e.fn.carousel.Constructor = t, e.fn.carousel.noConflict = function () {
            return e.fn.carousel = n, this
        }, e(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (t) {
            var n, r = e(this),
                i = e(r.attr("data-target") || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
                o = e.extend({}, i.data(), r.data()),
                s = r.attr("data-slide-to");
            s && (o.interval = !1), i.carousel(o), (s = r.attr("data-slide-to")) && i.data("bs.carousel").to(s), t.preventDefault()
        }), e(window).on("load", function () {
            e('[data-ride="carousel"]').each(function () {
                var t = e(this);
                t.carousel(t.data())
            })
        })
    }(jQuery), n("bootstrapCarousel", ["jquery"], function () {
    }),
        function (e) {
            function t(t, i) {
                this.element = t, this.options = e.extend({}, r, i), this._defaults = r, this._name = n, this.init()
            }

            var n = "smartVimeoEmbed",
                r = {
                    idSelectorName: "vimeo-id",
                    vimeoPatternUrl: "http://vimeo.com/api/oembed.json?url=http%3A%2F%2Fvimeo.com/",
                    autoplay: !0,
                    width: 640,
                    onComplete: function () {
                    },
                    onError: function () {
                    }
                };
            t.prototype = {
                init: function () {
                    var t = this.options;
                    e(this.element).each(function (n, r) {
                        var i = e(r),
                            o = i.data(t.idSelectorName);
                        if (o && !/VIMEO/i.test(i.attr("src"))) {
                            var s = t.vimeoPatternUrl + o + "&autoplay=" + t.autoplay + "&width=" + t.width + "&callback=?";
                            e.ajax({
                                url: s,
                                dataType: "jsonp",
                                success: function (n) {
                                    e("#output").text(JSON.stringify(n)), i.wrap('<div class="vimeo-wrapper" />'), i.attr("src", n.thumbnail_url), i.parent().prepend('<span class="play-icon"/>').on("click", function () {
                                        var r = e(this);
                                        r.find("iframe").length || r.append(n.html).find("img, .play-icon").hide(), t.onComplete && "function" == typeof t.onComplete && t.onComplete.call(this)
                                    })
                                },
                                error: function () {
                                    t.onError && "function" == typeof t.onError && t.onError.call(this)
                                }
                            })
                        }
                    })
                }
            }, e.fn[n] = function (r) {
                return this.each(function () {
                    e.data(this, "plugin_" + n) || e.data(this, "plugin_" + n, new t(this, r))
                })
            }
        }(jQuery, window, document), n("jqueryVimeoEmbed", ["jquery"], function () {
    }), t.config({
        paths: {
            jquery: "../bower_components/jquery/dist/jquery",
            underscore: "../bower_components/underscore/underscore",
            bootstrapAffix: "../bower_components/sass-bootstrap/js/affix",
            bootstrapAlert: "../bower_components/sass-bootstrap/js/alert",
            bootstrapButton: "../bower_components/sass-bootstrap/js/button",
            bootstrapCarousel: "../bower_components/sass-bootstrap/js/carousel",
            bootstrapCollapse: "../bower_components/sass-bootstrap/js/collapse",
            bootstrapDropdown: "../bower_components/sass-bootstrap/js/dropdown",
            bootstrapModal: "../bower_components/sass-bootstrap/js/modal",
            bootstrapPopover: "../bower_components/sass-bootstrap/js/popover",
            bootstrapScrollspy: "../bower_components/sass-bootstrap/js/scrollspy",
            bootstrapTab: "../bower_components/sass-bootstrap/js/tab",
            bootstrapTooltip: "../bower_components/sass-bootstrap/js/tooltip",
            bootstrapTransition: "../bower_components/sass-bootstrap/js/transition",
            jqueryVimeoEmbed: "../bower_components/jquery-smart-vimeo-embed/jquery-smartvimeoembed"
        },
        shim: {
            bootstrapAffix: {
                deps: ["jquery"]
            },
            bootstrapAlert: {
                deps: ["jquery"]
            },
            bootstrapButton: {
                deps: ["jquery"]
            },
            bootstrapCarousel: {
                deps: ["jquery"]
            },
            bootstrapCollapse: {
                deps: ["jquery", "bootstrapTransition"]
            },
            bootstrapDropdown: {
                deps: ["jquery"]
            },
            bootstrapPopover: {
                deps: ["jquery"]
            },
            bootstrapScrollspy: {
                deps: ["jquery"]
            },
            bootstrapTab: {
                deps: ["jquery"]
            },
            bootstrapTooltip: {
                deps: ["jquery"]
            },
            bootstrapTransition: {
                deps: ["jquery"]
            },
            jqueryVimeoEmbed: {
                deps: ["jquery"]
            }
        }
    }), t(["jquery", "underscore", "bootstrapTransition", "bootstrapCollapse", "searchMode", "bootstrapTab", "bootstrapCarousel", "jqueryVimeoEmbed"], function (e, t) {
        "use strict";
        e(".vimeo-thumb").each(function () {
            e(this).smartVimeoEmbed(t({
                width: e(this).data("width"),
                vimeoPatternUrl: "//vimeo.com/api/oembed.json?url=http%3A%2F%2Fvimeo.com/"
            }).defaults({
                width: 640
            }))
        });
        var n = function () {
            return window.innerWidth > 0 ? window.innerWidth : screen.width
        };
        e(window).on("resize", t.debounce(function () {
            n() > 991 && e("#readable-navbar-collapse").removeAttr("style").removeClass("in")
        }, 500))
    }), n("main", function () {
    })
}();
$(document).ready(function () {
    $('.get_auth_form').click(function (e) {
        $('.auth_toggle').slideToggle(100);
        e.preventDefault();
    })
});