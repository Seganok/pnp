function confirmPath(t, e) {
    confirm(e + "?") && (window.location = t)
}

function ttInfoBubble(t) {
    this.extend(ttInfoBubble, google.maps.OverlayView), this.pin = t, this.lat = t.lat, this.lng = t.lng, this.pos = new google.maps.LatLng(t.lat, t.lng), this.mode = t.mode || !1, this.element = !1, this.arrow = !1, this.content = !1, this.closeBtn = !1, this.width = 0, this.height = 0, this.opened = !1, this.switching = !1
}

function gotoPagePart(t) {
    typeof __PagePart__[t] != _un_ && __app__.scrollTo(Math.round(__PagePart__[t].element.offset().top - __app__.fMH))
}! function(t, e) {
    function i(t) {
        var e = fe[t] = {};
        return J.each(t.split(ee), function(t, i) {
            e[i] = !0
        }), e
    }

    function s(t, i, s) {
        if (s === e && 1 === t.nodeType) {
            var n = "data-" + i.replace(ge, "-$1").toLowerCase();
            if (s = t.getAttribute(n), "string" == typeof s) {
                try {
                    s = "true" === s ? !0 : "false" === s ? !1 : "null" === s ? null : +s + "" === s ? +s : me.test(s) ? J.parseJSON(s) : s
                } catch (o) {}
                J.data(t, i, s)
            } else s = e
        }
        return s
    }

    function n(t) {
        var e;
        for (e in t)
            if (("data" !== e || !J.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function o() {
        return !1
    }

    function a() {
        return !0
    }

    function r(t) {
        return !t || !t.parentNode || 11 === t.parentNode.nodeType
    }

    function h(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function l(t, e, i) {
        if (e = e || 0, J.isFunction(e)) return J.grep(t, function(t, s) {
            var n = !!e.call(t, s, t);
            return n === i
        });
        if (e.nodeType) return J.grep(t, function(t) {
            return t === e === i
        });
        if ("string" == typeof e) {
            var s = J.grep(t, function(t) {
                return 1 === t.nodeType
            });
            if (Ee.test(e)) return J.filter(e, s, !i);
            e = J.filter(e, s)
        }
        return J.grep(t, function(t) {
            return J.inArray(t, e) >= 0 === i
        })
    }

    function c(t) {
        var e = ze.split("|"),
            i = t.createDocumentFragment();
        if (i.createElement)
            for (; e.length;) i.createElement(e.pop());
        return i
    }

    function d(t, e) {
        return t.getElementsByTagName(e)[0] || t.appendChild(t.ownerDocument.createElement(e))
    }

    function p(t, e) {
        if (1 === e.nodeType && J.hasData(t)) {
            var i, s, n, o = J._data(t),
                a = J._data(e, o),
                r = o.events;
            if (r) {
                delete a.handle, a.events = {};
                for (i in r)
                    for (s = 0, n = r[i].length; n > s; s++) J.event.add(e, i, r[i][s])
            }
            a.data && (a.data = J.extend({}, a.data))
        }
    }

    function u(t, e) {
        var i;
        1 === e.nodeType && (e.clearAttributes && e.clearAttributes(), e.mergeAttributes && e.mergeAttributes(t), i = e.nodeName.toLowerCase(), "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), J.support.html5Clone && t.innerHTML && !J.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Ke.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.selected = t.defaultSelected : "input" === i || "textarea" === i ? e.defaultValue = t.defaultValue : "script" === i && e.text !== t.text && (e.text = t.text), e.removeAttribute(J.expando))
    }

    function f(t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName("*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll("*") : []
    }

    function m(t) {
        Ke.test(t.type) && (t.defaultChecked = t.checked)
    }

    function g(t, e) {
        if (e in t) return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), s = e, n = vi.length; n--;)
            if (e = vi[n] + i, e in t) return e;
        return s
    }

    function v(t, e) {
        return t = e || t, "none" === J.css(t, "display") || !J.contains(t.ownerDocument, t)
    }

    function y(t, e) {
        for (var i, s, n = [], o = 0, a = t.length; a > o; o++) i = t[o], i.style && (n[o] = J._data(i, "olddisplay"), e ? (!n[o] && "none" === i.style.display && (i.style.display = ""), "" === i.style.display && v(i) && (n[o] = J._data(i, "olddisplay", x(i.nodeName)))) : (s = ii(i, "display"), !n[o] && "none" !== s && J._data(i, "olddisplay", s)));
        for (o = 0; a > o; o++) i = t[o], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? n[o] || "" : "none"));
        return t
    }

    function b(t, e, i) {
        var s = ci.exec(e);
        return s ? Math.max(0, s[1] - (i || 0)) + (s[2] || "px") : e
    }

    function w(t, e, i, s) {
        for (var n = i === (s ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > n; n += 2) "margin" === i && (o += J.css(t, i + gi[n], !0)), s ? ("content" === i && (o -= parseFloat(ii(t, "padding" + gi[n])) || 0), "margin" !== i && (o -= parseFloat(ii(t, "border" + gi[n] + "Width")) || 0)) : (o += parseFloat(ii(t, "padding" + gi[n])) || 0, "padding" !== i && (o += parseFloat(ii(t, "border" + gi[n] + "Width")) || 0));
        return o
    }

    function _(t, e, i) {
        var s = "width" === e ? t.offsetWidth : t.offsetHeight,
            n = !0,
            o = J.support.boxSizing && "border-box" === J.css(t, "boxSizing");
        if (0 >= s || null == s) {
            if (s = ii(t, e), (0 > s || null == s) && (s = t.style[e]), di.test(s)) return s;
            n = o && (J.support.boxSizingReliable || s === t.style[e]), s = parseFloat(s) || 0
        }
        return s + w(t, e, i || (o ? "border" : "content"), n) + "px"
    }

    function x(t) {
        if (ui[t]) return ui[t];
        var e = J("<" + t + ">").appendTo(W.body),
            i = e.css("display");
        return e.remove(), ("none" === i || "" === i) && (si = W.body.appendChild(si || J.extend(W.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0
        })), ni && si.createElement || (ni = (si.contentWindow || si.contentDocument).document, ni.write("<!doctype html><html><body>"), ni.close()), e = ni.body.appendChild(ni.createElement(t)), i = ii(e, "display"), W.body.removeChild(si)), ui[t] = i, i
    }

    function k(t, e, i, s) {
        var n;
        if (J.isArray(e)) J.each(e, function(e, n) {
            i || wi.test(t) ? s(t, n) : k(t + "[" + ("object" == typeof n ? e : "") + "]", n, i, s)
        });
        else if (i || "object" !== J.type(e)) s(t, e);
        else
            for (n in e) k(t + "[" + n + "]", e[n], i, s)
    }

    function C(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var s, n, o, a = e.toLowerCase().split(ee),
                r = 0,
                h = a.length;
            if (J.isFunction(i))
                for (; h > r; r++) s = a[r], o = /^\+/.test(s), o && (s = s.substr(1) || "*"), n = t[s] = t[s] || [], n[o ? "unshift" : "push"](i)
        }
    }

    function M(t, i, s, n, o, a) {
        o = o || i.dataTypes[0], a = a || {}, a[o] = !0;
        for (var r, h = t[o], l = 0, c = h ? h.length : 0, d = t === Ei; c > l && (d || !r); l++) r = h[l](i, s, n), "string" == typeof r && (!d || a[r] ? r = e : (i.dataTypes.unshift(r), r = M(t, i, s, n, r, a)));
        return (d || !r) && !a["*"] && (r = M(t, i, s, n, "*", a)), r
    }

    function T(t, i) {
        var s, n, o = J.ajaxSettings.flatOptions || {};
        for (s in i) i[s] !== e && ((o[s] ? t : n || (n = {}))[s] = i[s]);
        n && J.extend(!0, t, n)
    }

    function P(t, i, s) {
        var n, o, a, r, h = t.contents,
            l = t.dataTypes,
            c = t.responseFields;
        for (o in c) o in s && (i[c[o]] = s[o]);
        for (;
            "*" === l[0];) l.shift(), n === e && (n = t.mimeType || i.getResponseHeader("content-type"));
        if (n)
            for (o in h)
                if (h[o] && h[o].test(n)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in s) a = l[0];
        else {
            for (o in s) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    a = o;
                    break
                }
                r || (r = o)
            }
            a = a || r
        }
        return a ? (a !== l[0] && l.unshift(a), s[a]) : void 0
    }

    function S(t, e) {
        var i, s, n, o, a = t.dataTypes.slice(),
            r = a[0],
            h = {},
            l = 0;
        if (t.dataFilter && (e = t.dataFilter(e, t.dataType)), a[1])
            for (i in t.converters) h[i.toLowerCase()] = t.converters[i];
        for (; n = a[++l];)
            if ("*" !== n) {
                if ("*" !== r && r !== n) {
                    if (i = h[r + " " + n] || h["* " + n], !i)
                        for (s in h)
                            if (o = s.split(" "), o[1] === n && (i = h[r + " " + o[0]] || h["* " + o[0]])) {
                                i === !0 ? i = h[s] : h[s] !== !0 && (n = o[0], a.splice(l--, 0, n));
                                break
                            }
                    if (i !== !0)
                        if (i && t["throws"]) e = i(e);
                        else try {
                            e = i(e)
                        } catch (c) {
                            return {
                                state: "parsererror",
                                error: i ? c : "No conversion from " + r + " to " + n
                            }
                        }
                }
                r = n
            }
        return {
            state: "success",
            data: e
        }
    }

    function O() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function j() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function F() {
        return setTimeout(function() {
            Gi = e
        }, 0), Gi = J.now()
    }

    function H(t, e) {
        J.each(e, function(e, i) {
            for (var s = (Zi[e] || []).concat(Zi["*"]), n = 0, o = s.length; o > n; n++)
                if (s[n].call(t, e, i)) return
        })
    }

    function B(t, e, i) {
        var s, n = 0,
            o = Ji.length,
            a = J.Deferred().always(function() {
                delete r.elem
            }),
            r = function() {
                for (var e = Gi || F(), i = Math.max(0, h.startTime + h.duration - e), s = 1 - (i / h.duration || 0), n = 0, o = h.tweens.length; o > n; n++) h.tweens[n].run(s);
                return a.notifyWith(t, [h, s, i]), 1 > s && o ? i : (a.resolveWith(t, [h]), !1)
            },
            h = a.promise({
                elem: t,
                props: J.extend({}, e),
                opts: J.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: Gi || F(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var s = J.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                    return h.tweens.push(s), s
                },
                stop: function(e) {
                    for (var i = 0, s = e ? h.tweens.length : 0; s > i; i++) h.tweens[i].run(1);
                    return e ? a.resolveWith(t, [h, e]) : a.rejectWith(t, [h, e]), this
                }
            }),
            l = h.props;
        for (I(l, h.opts.specialEasing); o > n; n++)
            if (s = Ji[n].call(h, t, l, h.opts)) return s;
        return H(h, l), J.isFunction(h.opts.start) && h.opts.start.call(t, h), J.fx.timer(J.extend(r, {
            anim: h,
            queue: h.opts.queue,
            elem: t
        })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    }

    function I(t, e) {
        var i, s, n, o, a;
        for (i in t)
            if (s = J.camelCase(i), n = e[s], o = t[i], J.isArray(o) && (n = o[1], o = t[i] = o[0]), i !== s && (t[s] = o, delete t[i]), a = J.cssHooks[s], a && "expand" in a) {
                o = a.expand(o), delete t[s];
                for (i in o) i in t || (t[i] = o[i], e[i] = n)
            } else e[s] = n
    }

    function N(t, e, i) {
        var s, n, o, a, r, h, l, c, d = this,
            p = t.style,
            u = {},
            f = [],
            m = t.nodeType && v(t);
        i.queue || (l = J._queueHooks(t, "fx"), null == l.unqueued && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() {
            l.unqueued || c()
        }), l.unqueued++, d.always(function() {
            d.always(function() {
                l.unqueued--, J.queue(t, "fx").length || l.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === J.css(t, "display") && "none" === J.css(t, "float") && (J.support.inlineBlockNeedsLayout && "inline" !== x(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", J.support.shrinkWrapBlocks || d.done(function() {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (s in e)
            if (o = e[s], Ki.exec(o)) {
                if (delete e[s], o === (m ? "hide" : "show")) continue;
                f.push(s)
            }
        if (a = f.length)
            for (r = J._data(t, "fxshow") || J._data(t, "fxshow", {}), m ? J(t).show() : d.done(function() {
                    J(t).hide()
                }), d.done(function() {
                    var e;
                    J.removeData(t, "fxshow", !0);
                    for (e in u) J.style(t, e, u[e])
                }), s = 0; a > s; s++) n = f[s], h = d.createTween(n, m ? r[n] : 0), u[n] = r[n] || J.style(t, n), n in r || (r[n] = h.start, m && (h.end = h.start, h.start = "width" === n || "height" === n ? 1 : 0))
    }

    function E(t, e, i, s, n) {
        return new E.prototype.init(t, e, i, s, n)
    }

    function $(t, e) {
        var i, s = {
                height: t
            },
            n = 0;
        for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = gi[n], s["margin" + i] = s["padding" + i] = t;
        return e && (s.opacity = s.width = t), s
    }

    function A(t) {
        return J.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var z, D, W = t.document,
        R = t.location,
        L = t.navigator,
        q = t.jQuery,
        V = t.$,
        X = Array.prototype.push,
        G = Array.prototype.slice,
        U = Array.prototype.indexOf,
        K = Object.prototype.toString,
        Y = Object.prototype.hasOwnProperty,
        Q = String.prototype.trim,
        J = function(t, e) {
            return new J.fn.init(t, e, z)
        },
        Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        te = /\S/,
        ee = /\s+/,
        ie = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        se = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        ne = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        oe = /^[\],:{}\s]*$/,
        ae = /(?:^|:|,)(?:\s*\[)+/g,
        re = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        he = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        le = /^-ms-/,
        ce = /-([\da-z])/gi,
        de = function(t, e) {
            return (e + "").toUpperCase()
        },
        pe = function() {
            W.addEventListener ? (W.removeEventListener("DOMContentLoaded", pe, !1), J.ready()) : "complete" === W.readyState && (W.detachEvent("onreadystatechange", pe), J.ready())
        },
        ue = {};
    J.fn = J.prototype = {
        constructor: J,
        init: function(t, i, s) {
            var n, o, a;
            if (!t) return this;
            if (t.nodeType) return this.context = this[0] = t, this.length = 1, this;
            if ("string" == typeof t) {
                if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : se.exec(t), n && (n[1] || !i)) {
                    if (n[1]) return i = i instanceof J ? i[0] : i, a = i && i.nodeType ? i.ownerDocument || i : W, t = J.parseHTML(n[1], a, !0), ne.test(n[1]) && J.isPlainObject(i) && this.attr.call(t, i, !0), J.merge(this, t);
                    if (o = W.getElementById(n[2]), o && o.parentNode) {
                        if (o.id !== n[2]) return s.find(t);
                        this.length = 1, this[0] = o
                    }
                    return this.context = W, this.selector = t, this
                }
                return !i || i.jquery ? (i || s).find(t) : this.constructor(i).find(t)
            }
            return J.isFunction(t) ? s.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), J.makeArray(t, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return G.call(this)
        },
        get: function(t) {
            return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
        },
        pushStack: function(t, e, i) {
            var s = J.merge(this.constructor(), t);
            return s.prevObject = this, s.context = this.context, "find" === e ? s.selector = this.selector + (this.selector ? " " : "") + i : e && (s.selector = this.selector + "." + e + "(" + i + ")"), s
        },
        each: function(t, e) {
            return J.each(this, t, e)
        },
        ready: function(t) {
            return J.ready.promise().done(t), this
        },
        eq: function(t) {
            return t = +t, -1 === t ? this.slice(t) : this.slice(t, t + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(G.apply(this, arguments), "slice", G.call(arguments).join(","))
        },
        map: function(t) {
            return this.pushStack(J.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: X,
        sort: [].sort,
        splice: [].splice
    }, J.fn.init.prototype = J.fn, J.extend = J.fn.extend = function() {
        var t, i, s, n, o, a, r = arguments[0] || {},
            h = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[1] || {}, h = 2), "object" != typeof r && !J.isFunction(r) && (r = {}), l === h && (r = this, --h); l > h; h++)
            if (null != (t = arguments[h]))
                for (i in t) s = r[i], n = t[i], r !== n && (c && n && (J.isPlainObject(n) || (o = J.isArray(n))) ? (o ? (o = !1, a = s && J.isArray(s) ? s : []) : a = s && J.isPlainObject(s) ? s : {}, r[i] = J.extend(c, a, n)) : n !== e && (r[i] = n));
        return r
    }, J.extend({
        noConflict: function(e) {
            return t.$ === J && (t.$ = V), e && t.jQuery === J && (t.jQuery = q), J
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? J.readyWait++ : J.ready(!0)
        },
        ready: function(t) {
            if (t === !0 ? !--J.readyWait : !J.isReady) {
                if (!W.body) return setTimeout(J.ready, 1);
                J.isReady = !0, t !== !0 && --J.readyWait > 0 || (D.resolveWith(W, [J]), J.fn.trigger && J(W).trigger("ready").off("ready"))
            }
        },
        isFunction: function(t) {
            return "function" === J.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === J.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        },
        type: function(t) {
            return null == t ? String(t) : ue[K.call(t)] || "object"
        },
        isPlainObject: function(t) {
            if (!t || "object" !== J.type(t) || t.nodeType || J.isWindow(t)) return !1;
            try {
                if (t.constructor && !Y.call(t, "constructor") && !Y.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (i) {
                return !1
            }
            var s;
            for (s in t);
            return s === e || Y.call(t, s)
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        error: function(t) {
            throw new Error(t)
        },
        parseHTML: function(t, e, i) {
            var s;
            return t && "string" == typeof t ? ("boolean" == typeof e && (i = e, e = 0), e = e || W, (s = ne.exec(t)) ? [e.createElement(s[1])] : (s = J.buildFragment([t], e, i ? null : []), J.merge([], (s.cacheable ? J.clone(s.fragment) : s.fragment).childNodes))) : null
        },
        parseJSON: function(e) {
            return e && "string" == typeof e ? (e = J.trim(e), t.JSON && t.JSON.parse ? t.JSON.parse(e) : oe.test(e.replace(re, "@").replace(he, "]").replace(ae, "")) ? new Function("return " + e)() : void J.error("Invalid JSON: " + e)) : null
        },
        parseXML: function(i) {
            var s, n;
            if (!i || "string" != typeof i) return null;
            try {
                t.DOMParser ? (n = new DOMParser, s = n.parseFromString(i, "text/xml")) : (s = new ActiveXObject("Microsoft.XMLDOM"), s.async = "false", s.loadXML(i))
            } catch (o) {
                s = e
            }
            return (!s || !s.documentElement || s.getElementsByTagName("parsererror").length) && J.error("Invalid XML: " + i), s
        },
        noop: function() {},
        globalEval: function(e) {
            e && te.test(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(le, "ms-").replace(ce, de)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, i, s) {
            var n, o = 0,
                a = t.length,
                r = a === e || J.isFunction(t);
            if (s)
                if (r) {
                    for (n in t)
                        if (i.apply(t[n], s) === !1) break
                } else
                    for (; a > o && i.apply(t[o++], s) !== !1;);
            else if (r) {
                for (n in t)
                    if (i.call(t[n], n, t[n]) === !1) break
            } else
                for (; a > o && i.call(t[o], o, t[o++]) !== !1;);
            return t
        },
        trim: Q && !Q.call(" ") ? function(t) {
            return null == t ? "" : Q.call(t)
        } : function(t) {
            return null == t ? "" : (t + "").replace(ie, "")
        },
        makeArray: function(t, e) {
            var i, s = e || [];
            return null != t && (i = J.type(t), null == t.length || "string" === i || "function" === i || "regexp" === i || J.isWindow(t) ? X.call(s, t) : J.merge(s, t)), s
        },
        inArray: function(t, e, i) {
            var s;
            if (e) {
                if (U) return U.call(e, t, i);
                for (s = e.length, i = i ? 0 > i ? Math.max(0, s + i) : i : 0; s > i; i++)
                    if (i in e && e[i] === t) return i
            }
            return -1
        },
        merge: function(t, i) {
            var s = i.length,
                n = t.length,
                o = 0;
            if ("number" == typeof s)
                for (; s > o; o++) t[n++] = i[o];
            else
                for (; i[o] !== e;) t[n++] = i[o++];
            return t.length = n, t
        },
        grep: function(t, e, i) {
            var s, n = [],
                o = 0,
                a = t.length;
            for (i = !!i; a > o; o++) s = !!e(t[o], o), i !== s && n.push(t[o]);
            return n
        },
        map: function(t, i, s) {
            var n, o, a = [],
                r = 0,
                h = t.length,
                l = t instanceof J || h !== e && "number" == typeof h && (h > 0 && t[0] && t[h - 1] || 0 === h || J.isArray(t));
            if (l)
                for (; h > r; r++) n = i(t[r], r, s), null != n && (a[a.length] = n);
            else
                for (o in t) n = i(t[o], o, s), null != n && (a[a.length] = n);
            return a.concat.apply([], a)
        },
        guid: 1,
        proxy: function(t, i) {
            var s, n, o;
            return "string" == typeof i && (s = t[i], i = t, t = s), J.isFunction(t) ? (n = G.call(arguments, 2), o = function() {
                return t.apply(i, n.concat(G.call(arguments)))
            }, o.guid = t.guid = t.guid || J.guid++, o) : e
        },
        access: function(t, i, s, n, o, a, r) {
            var h, l = null == s,
                c = 0,
                d = t.length;
            if (s && "object" == typeof s) {
                for (c in s) J.access(t, i, c, s[c], 1, a, n);
                o = 1
            } else if (n !== e) {
                if (h = r === e && J.isFunction(n), l && (h ? (h = i, i = function(t, e, i) {
                        return h.call(J(t), i)
                    }) : (i.call(t, n), i = null)), i)
                    for (; d > c; c++) i(t[c], s, h ? n.call(t[c], c, i(t[c], s)) : n, r);
                o = 1
            }
            return o ? t : l ? i.call(t) : d ? i(t[0], s) : a
        },
        now: function() {
            return (new Date).getTime()
        }
    }), J.ready.promise = function(e) {
        if (!D)
            if (D = J.Deferred(), "complete" === W.readyState) setTimeout(J.ready, 1);
            else if (W.addEventListener) W.addEventListener("DOMContentLoaded", pe, !1), t.addEventListener("load", J.ready, !1);
        else {
            W.attachEvent("onreadystatechange", pe), t.attachEvent("onload", J.ready);
            var i = !1;
            try {
                i = null == t.frameElement && W.documentElement
            } catch (s) {}
            i && i.doScroll && function n() {
                if (!J.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (t) {
                        return setTimeout(n, 50)
                    }
                    J.ready()
                }
            }()
        }
        return D.promise(e)
    }, J.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(t, e) {
        ue["[object " + e + "]"] = e.toLowerCase()
    }), z = J(W);
    var fe = {};
    J.Callbacks = function(t) {
        t = "string" == typeof t ? fe[t] || i(t) : J.extend({}, t);
        var s, n, o, a, r, h, l = [],
            c = !t.once && [],
            d = function(e) {
                for (s = t.memory && e, n = !0, h = a || 0, a = 0, r = l.length, o = !0; l && r > h; h++)
                    if (l[h].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                        s = !1;
                        break
                    }
                o = !1, l && (c ? c.length && d(c.shift()) : s ? l = [] : p.disable())
            },
            p = {
                add: function() {
                    if (l) {
                        var e = l.length;
                        ! function i(e) {
                            J.each(e, function(e, s) {
                                var n = J.type(s);
                                "function" !== n || t.unique && p.has(s) ? s && s.length && "string" !== n && i(s) : l.push(s)
                            })
                        }(arguments), o ? r = l.length : s && (a = e, d(s))
                    }
                    return this
                },
                remove: function() {
                    return l && J.each(arguments, function(t, e) {
                        for (var i;
                            (i = J.inArray(e, l, i)) > -1;) l.splice(i, 1), o && (r >= i && r--, h >= i && h--)
                    }), this
                },
                has: function(t) {
                    return J.inArray(t, l) > -1
                },
                empty: function() {
                    return l = [], this
                },
                disable: function() {
                    return l = c = s = e, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = e, s || p.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(t, e) {
                    return e = e || [], e = [t, e.slice ? e.slice() : e], l && (!n || c) && (o ? c.push(e) : d(e)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return p
    }, J.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", J.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", J.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", J.Callbacks("memory")]
                ],
                i = "pending",
                s = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return n.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return J.Deferred(function(i) {
                            J.each(e, function(e, s) {
                                var o = s[0],
                                    a = t[e];
                                n[s[1]](J.isFunction(a) ? function() {
                                    var t = a.apply(this, arguments);
                                    t && J.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o + "With"](this === n ? i : this, [t])
                                } : i[o])
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? J.extend(t, s) : s
                    }
                },
                n = {};
            return s.pipe = s.then, J.each(e, function(t, o) {
                var a = o[2],
                    r = o[3];
                s[o[1]] = a.add, r && a.add(function() {
                    i = r
                }, e[1 ^ t][2].disable, e[2][2].lock), n[o[0]] = a.fire, n[o[0] + "With"] = a.fireWith
            }), s.promise(n), t && t.call(n, n), n
        },
        when: function(t) {
            var e, i, s, n = 0,
                o = G.call(arguments),
                a = o.length,
                r = 1 !== a || t && J.isFunction(t.promise) ? a : 0,
                h = 1 === r ? t : J.Deferred(),
                l = function(t, i, s) {
                    return function(n) {
                        i[t] = this, s[t] = arguments.length > 1 ? G.call(arguments) : n, s === e ? h.notifyWith(i, s) : --r || h.resolveWith(i, s)
                    }
                };
            if (a > 1)
                for (e = new Array(a), i = new Array(a), s = new Array(a); a > n; n++) o[n] && J.isFunction(o[n].promise) ? o[n].promise().done(l(n, s, o)).fail(h.reject).progress(l(n, i, e)) : --r;
            return r || h.resolveWith(s, o), h.promise()
        }
    }), J.support = function() {
        var e, i, s, n, o, a, r, h, l, c, d, p = W.createElement("div");
        if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = p.getElementsByTagName("*"), s = p.getElementsByTagName("a")[0], s.style.cssText = "top:1px;float:left;opacity:.5", !i || !i.length) return {};
        n = W.createElement("select"), o = n.appendChild(W.createElement("option")), a = p.getElementsByTagName("input")[0], e = {
            leadingWhitespace: 3 === p.firstChild.nodeType,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(s.getAttribute("style")),
            hrefNormalized: "/a" === s.getAttribute("href"),
            opacity: /^0.5/.test(s.style.opacity),
            cssFloat: !!s.style.cssFloat,
            checkOn: "on" === a.value,
            optSelected: o.selected,
            getSetAttribute: "t" !== p.className,
            enctype: !!W.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== W.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === W.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, a.checked = !0, e.noCloneChecked = a.cloneNode(!0).checked, n.disabled = !0, e.optDisabled = !o.disabled;
        try {
            delete p.test
        } catch (u) {
            e.deleteExpando = !1
        }
        if (!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", d = function() {
                e.noCloneEvent = !1
            }), p.cloneNode(!0).fireEvent("onclick"), p.detachEvent("onclick", d)), a = W.createElement("input"), a.value = "t", a.setAttribute("type", "radio"), e.radioValue = "t" === a.value, a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), p.appendChild(a), r = W.createDocumentFragment(), r.appendChild(p.lastChild), e.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, e.appendChecked = a.checked, r.removeChild(a), r.appendChild(p), p.attachEvent)
            for (l in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) h = "on" + l, c = h in p, c || (p.setAttribute(h, "return;"), c = "function" == typeof p[h]), e[l + "Bubbles"] = c;
        return J(function() {
            var i, s, n, o, a = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                r = W.getElementsByTagName("body")[0];
            r && (i = W.createElement("div"), i.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", r.insertBefore(i, r.firstChild), s = W.createElement("div"), i.appendChild(s), s.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", n = s.getElementsByTagName("td"), n[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === n[0].offsetHeight, n[0].style.display = "", n[1].style.display = "none", e.reliableHiddenOffsets = c && 0 === n[0].offsetHeight, s.innerHTML = "", s.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", e.boxSizing = 4 === s.offsetWidth, e.doesNotIncludeMarginInBodyOffset = 1 !== r.offsetTop, t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(s, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(s, null) || {
                width: "4px"
            }).width, o = W.createElement("div"), o.style.cssText = s.style.cssText = a, o.style.marginRight = o.style.width = "0", s.style.width = "1px", s.appendChild(o), e.reliableMarginRight = !parseFloat((t.getComputedStyle(o, null) || {}).marginRight)), "undefined" != typeof s.style.zoom && (s.innerHTML = "", s.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === s.offsetWidth, s.style.display = "block", s.style.overflow = "visible", s.innerHTML = "<div></div>", s.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== s.offsetWidth, i.style.zoom = 1), r.removeChild(i), i = s = n = o = null)
        }), r.removeChild(p), i = s = n = o = a = r = p = null, e
    }();
    var me = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        ge = /([A-Z])/g;
    J.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (J.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(t) {
            return t = t.nodeType ? J.cache[t[J.expando]] : t[J.expando], !!t && !n(t)
        },
        data: function(t, i, s, n) {
            if (J.acceptData(t)) {
                var o, a, r = J.expando,
                    h = "string" == typeof i,
                    l = t.nodeType,
                    c = l ? J.cache : t,
                    d = l ? t[r] : t[r] && r;
                if (d && c[d] && (n || c[d].data) || !h || s !== e) return d || (l ? t[r] = d = J.deletedIds.pop() || J.guid++ : d = r), c[d] || (c[d] = {}, l || (c[d].toJSON = J.noop)), ("object" == typeof i || "function" == typeof i) && (n ? c[d] = J.extend(c[d], i) : c[d].data = J.extend(c[d].data, i)), o = c[d], n || (o.data || (o.data = {}), o = o.data), s !== e && (o[J.camelCase(i)] = s), h ? (a = o[i], null == a && (a = o[J.camelCase(i)])) : a = o, a
            }
        },
        removeData: function(t, e, i) {
            if (J.acceptData(t)) {
                var s, o, a, r = t.nodeType,
                    h = r ? J.cache : t,
                    l = r ? t[J.expando] : J.expando;
                if (h[l]) {
                    if (e && (s = i ? h[l] : h[l].data)) {
                        J.isArray(e) || (e in s ? e = [e] : (e = J.camelCase(e), e = e in s ? [e] : e.split(" ")));
                        for (o = 0, a = e.length; a > o; o++) delete s[e[o]];
                        if (!(i ? n : J.isEmptyObject)(s)) return
                    }(i || (delete h[l].data, n(h[l]))) && (r ? J.cleanData([t], !0) : J.support.deleteExpando || h != h.window ? delete h[l] : h[l] = null)
                }
            }
        },
        _data: function(t, e, i) {
            return J.data(t, e, i, !0)
        },
        acceptData: function(t) {
            var e = t.nodeName && J.noData[t.nodeName.toLowerCase()];
            return !e || e !== !0 && t.getAttribute("classid") === e
        }
    }), J.fn.extend({
        data: function(t, i) {
            var n, o, a, r, h, l = this[0],
                c = 0,
                d = null;
            if (t === e) {
                if (this.length && (d = J.data(l), 1 === l.nodeType && !J._data(l, "parsedAttrs"))) {
                    for (a = l.attributes, h = a.length; h > c; c++) r = a[c].name, r.indexOf("data-") || (r = J.camelCase(r.substring(5)), s(l, r, d[r]));
                    J._data(l, "parsedAttrs", !0)
                }
                return d
            }
            return "object" == typeof t ? this.each(function() {
                J.data(this, t)
            }) : (n = t.split(".", 2), n[1] = n[1] ? "." + n[1] : "", o = n[1] + "!", J.access(this, function(i) {
                return i === e ? (d = this.triggerHandler("getData" + o, [n[0]]), d === e && l && (d = J.data(l, t), d = s(l, t, d)), d === e && n[1] ? this.data(n[0]) : d) : (n[1] = i, void this.each(function() {
                    var e = J(this);
                    e.triggerHandler("setData" + o, n), J.data(this, t, i), e.triggerHandler("changeData" + o, n)
                }))
            }, null, i, arguments.length > 1, null, !1))
        },
        removeData: function(t) {
            return this.each(function() {
                J.removeData(this, t)
            })
        }
    }), J.extend({
        queue: function(t, e, i) {
            var s;
            return t ? (e = (e || "fx") + "queue", s = J._data(t, e), i && (!s || J.isArray(i) ? s = J._data(t, e, J.makeArray(i)) : s.push(i)), s || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = J.queue(t, e),
                s = i.length,
                n = i.shift(),
                o = J._queueHooks(t, e),
                a = function() {
                    J.dequeue(t, e)
                };
            "inprogress" === n && (n = i.shift(), s--), n && ("fx" === e && i.unshift("inprogress"), delete o.stop, n.call(t, a, o)), !s && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return J._data(t, i) || J._data(t, i, {
                empty: J.Callbacks("once memory").add(function() {
                    J.removeData(t, e + "queue", !0), J.removeData(t, i, !0)
                })
            })
        }
    }), J.fn.extend({
        queue: function(t, i) {
            var s = 2;
            return "string" != typeof t && (i = t, t = "fx", s--), arguments.length < s ? J.queue(this[0], t) : i === e ? this : this.each(function() {
                var e = J.queue(this, t, i);
                J._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && J.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                J.dequeue(this, t)
            })
        },
        delay: function(t, e) {
            return t = J.fx ? J.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                var s = setTimeout(e, t);
                i.stop = function() {
                    clearTimeout(s)
                }
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, i) {
            var s, n = 1,
                o = J.Deferred(),
                a = this,
                r = this.length,
                h = function() {
                    --n || o.resolveWith(a, [a])
                };
            for ("string" != typeof t && (i = t, t = e), t = t || "fx"; r--;) s = J._data(a[r], t + "queueHooks"), s && s.empty && (n++, s.empty.add(h));
            return h(), o.promise(i)
        }
    });
    var ve, ye, be, we = /[\t\r\n]/g,
        _e = /\r/g,
        xe = /^(?:button|input)$/i,
        ke = /^(?:button|input|object|select|textarea)$/i,
        Ce = /^a(?:rea|)$/i,
        Me = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Te = J.support.getSetAttribute;
    J.fn.extend({
        attr: function(t, e) {
            return J.access(this, J.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                J.removeAttr(this, t)
            })
        },
        prop: function(t, e) {
            return J.access(this, J.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = J.propFix[t] || t, this.each(function() {
                try {
                    this[t] = e, delete this[t]
                } catch (i) {}
            })
        },
        addClass: function(t) {
            var e, i, s, n, o, a, r;
            if (J.isFunction(t)) return this.each(function(e) {
                J(this).addClass(t.call(this, e, this.className))
            });
            if (t && "string" == typeof t)
                for (e = t.split(ee), i = 0, s = this.length; s > i; i++)
                    if (n = this[i], 1 === n.nodeType)
                        if (n.className || 1 !== e.length) {
                            for (o = " " + n.className + " ", a = 0, r = e.length; r > a; a++) o.indexOf(" " + e[a] + " ") < 0 && (o += e[a] + " ");
                            n.className = J.trim(o)
                        } else n.className = t;
            return this
        },
        removeClass: function(t) {
            var i, s, n, o, a, r, h;
            if (J.isFunction(t)) return this.each(function(e) {
                J(this).removeClass(t.call(this, e, this.className))
            });
            if (t && "string" == typeof t || t === e)
                for (i = (t || "").split(ee), r = 0, h = this.length; h > r; r++)
                    if (n = this[r], 1 === n.nodeType && n.className) {
                        for (s = (" " + n.className + " ").replace(we, " "), o = 0, a = i.length; a > o; o++)
                            for (; s.indexOf(" " + i[o] + " ") >= 0;) s = s.replace(" " + i[o] + " ", " ");
                        n.className = t ? J.trim(s) : ""
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t,
                s = "boolean" == typeof e;
            return this.each(J.isFunction(t) ? function(i) {
                J(this).toggleClass(t.call(this, i, this.className, e), e)
            } : function() {
                if ("string" === i)
                    for (var n, o = 0, a = J(this), r = e, h = t.split(ee); n = h[o++];) r = s ? r : !a.hasClass(n), a[r ? "addClass" : "removeClass"](n);
                else("undefined" === i || "boolean" === i) && (this.className && J._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : J._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", i = 0, s = this.length; s > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(we, " ").indexOf(e) >= 0) return !0;
            return !1
        },
        val: function(t) {
            var i, s, n, o = this[0]; {
                if (arguments.length) return n = J.isFunction(t), this.each(function(s) {
                    var o, a = J(this);
                    1 === this.nodeType && (o = n ? t.call(this, s, a.val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : J.isArray(o) && (o = J.map(o, function(t) {
                        return null == t ? "" : t + ""
                    })), i = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, o, "value") !== e || (this.value = o))
                });
                if (o) return i = J.valHooks[o.type] || J.valHooks[o.nodeName.toLowerCase()], i && "get" in i && (s = i.get(o, "value")) !== e ? s : (s = o.value, "string" == typeof s ? s.replace(_e, "") : null == s ? "" : s)
            }
        }
    }), J.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = t.attributes.value;
                    return !e || e.specified ? t.value : t.text
                }
            },
            select: {
                get: function(t) {
                    var e, i, s, n, o = t.selectedIndex,
                        a = [],
                        r = t.options,
                        h = "select-one" === t.type;
                    if (0 > o) return null;
                    for (i = h ? o : 0, s = h ? o + 1 : r.length; s > i; i++)
                        if (n = r[i], !(!n.selected || (J.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && J.nodeName(n.parentNode, "optgroup"))) {
                            if (e = J(n).val(), h) return e;
                            a.push(e)
                        }
                    return h && !a.length && r.length ? J(r[o]).val() : a
                },
                set: function(t, e) {
                    var i = J.makeArray(e);
                    return J(t).find("option").each(function() {
                        this.selected = J.inArray(J(this).val(), i) >= 0
                    }), i.length || (t.selectedIndex = -1), i
                }
            }
        },
        attrFn: {},
        attr: function(t, i, s, n) {
            var o, a, r, h = t.nodeType;
            if (t && 3 !== h && 8 !== h && 2 !== h) return n && J.isFunction(J.fn[i]) ? J(t)[i](s) : "undefined" == typeof t.getAttribute ? J.prop(t, i, s) : (r = 1 !== h || !J.isXMLDoc(t), r && (i = i.toLowerCase(), a = J.attrHooks[i] || (Me.test(i) ? ye : ve)), s !== e ? null === s ? void J.removeAttr(t, i) : a && "set" in a && r && (o = a.set(t, s, i)) !== e ? o : (t.setAttribute(i, s + ""), s) : a && "get" in a && r && null !== (o = a.get(t, i)) ? o : (o = t.getAttribute(i), null === o ? e : o))
        },
        removeAttr: function(t, e) {
            var i, s, n, o, a = 0;
            if (e && 1 === t.nodeType)
                for (s = e.split(ee); a < s.length; a++) n = s[a], n && (i = J.propFix[n] || n, o = Me.test(n), o || J.attr(t, n, ""), t.removeAttribute(Te ? n : i), o && i in t && (t[i] = !1))
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (xe.test(t.nodeName) && t.parentNode) J.error("type property can't be changed");
                    else if (!J.support.radioValue && "radio" === e && J.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            },
            value: {
                get: function(t, e) {
                    return ve && J.nodeName(t, "button") ? ve.get(t, e) : e in t ? t.value : null
                },
                set: function(t, e, i) {
                    return ve && J.nodeName(t, "button") ? ve.set(t, e, i) : void(t.value = e)
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(t, i, s) {
            var n, o, a, r = t.nodeType;
            if (t && 3 !== r && 8 !== r && 2 !== r) return a = 1 !== r || !J.isXMLDoc(t), a && (i = J.propFix[i] || i, o = J.propHooks[i]), s !== e ? o && "set" in o && (n = o.set(t, s, i)) !== e ? n : t[i] = s : o && "get" in o && null !== (n = o.get(t, i)) ? n : t[i]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var i = t.getAttributeNode("tabindex");
                    return i && i.specified ? parseInt(i.value, 10) : ke.test(t.nodeName) || Ce.test(t.nodeName) && t.href ? 0 : e
                }
            }
        }
    }), ye = {
        get: function(t, i) {
            var s, n = J.prop(t, i);
            return n === !0 || "boolean" != typeof n && (s = t.getAttributeNode(i)) && s.nodeValue !== !1 ? i.toLowerCase() : e
        },
        set: function(t, e, i) {
            var s;
            return e === !1 ? J.removeAttr(t, i) : (s = J.propFix[i] || i, s in t && (t[s] = !0), t.setAttribute(i, i.toLowerCase())), i
        }
    }, Te || (be = {
        name: !0,
        id: !0,
        coords: !0
    }, ve = J.valHooks.button = {
        get: function(t, i) {
            var s;
            return s = t.getAttributeNode(i), s && (be[i] ? "" !== s.value : s.specified) ? s.value : e
        },
        set: function(t, e, i) {
            var s = t.getAttributeNode(i);
            return s || (s = W.createAttribute(i), t.setAttributeNode(s)), s.value = e + ""
        }
    }, J.each(["width", "height"], function(t, e) {
        J.attrHooks[e] = J.extend(J.attrHooks[e], {
            set: function(t, i) {
                return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
            }
        })
    }), J.attrHooks.contenteditable = {
        get: ve.get,
        set: function(t, e, i) {
            "" === e && (e = "false"), ve.set(t, e, i)
        }
    }), J.support.hrefNormalized || J.each(["href", "src", "width", "height"], function(t, i) {
        J.attrHooks[i] = J.extend(J.attrHooks[i], {
            get: function(t) {
                var s = t.getAttribute(i, 2);
                return null === s ? e : s
            }
        })
    }), J.support.style || (J.attrHooks.style = {
        get: function(t) {
            return t.style.cssText.toLowerCase() || e
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    }), J.support.optSelected || (J.propHooks.selected = J.extend(J.propHooks.selected, {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    })), J.support.enctype || (J.propFix.enctype = "encoding"), J.support.checkOn || J.each(["radio", "checkbox"], function() {
        J.valHooks[this] = {
            get: function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            }
        }
    }), J.each(["radio", "checkbox"], function() {
        J.valHooks[this] = J.extend(J.valHooks[this], {
            set: function(t, e) {
                return J.isArray(e) ? t.checked = J.inArray(J(t).val(), e) >= 0 : void 0
            }
        })
    });
    var Pe = /^(?:textarea|input|select)$/i,
        Se = /^([^\.]*|)(?:\.(.+)|)$/,
        Oe = /(?:^|\s)hover(\.\S+|)\b/,
        je = /^key/,
        Fe = /^(?:mouse|contextmenu)|click/,
        He = /^(?:focusinfocus|focusoutblur)$/,
        Be = function(t) {
            return J.event.special.hover ? t : t.replace(Oe, "mouseenter$1 mouseleave$1")
        };
    J.event = {
            add: function(t, i, s, n, o) {
                var a, r, h, l, c, d, p, u, f, m, g;
                if (3 !== t.nodeType && 8 !== t.nodeType && i && s && (a = J._data(t))) {
                    for (s.handler && (f = s, s = f.handler, o = f.selector), s.guid || (s.guid = J.guid++), h = a.events, h || (a.events = h = {}), r = a.handle, r || (a.handle = r = function(t) {
                            return "undefined" == typeof J || t && J.event.triggered === t.type ? e : J.event.dispatch.apply(r.elem, arguments)
                        }, r.elem = t), i = J.trim(Be(i)).split(" "), l = 0; l < i.length; l++) c = Se.exec(i[l]) || [], d = c[1], p = (c[2] || "").split(".").sort(), g = J.event.special[d] || {}, d = (o ? g.delegateType : g.bindType) || d, g = J.event.special[d] || {}, u = J.extend({
                        type: d,
                        origType: c[1],
                        data: n,
                        handler: s,
                        guid: s.guid,
                        selector: o,
                        needsContext: o && J.expr.match.needsContext.test(o),
                        namespace: p.join(".")
                    }, f), m = h[d], m || (m = h[d] = [], m.delegateCount = 0, g.setup && g.setup.call(t, n, p, r) !== !1 || (t.addEventListener ? t.addEventListener(d, r, !1) : t.attachEvent && t.attachEvent("on" + d, r))), g.add && (g.add.call(t, u), u.handler.guid || (u.handler.guid = s.guid)), o ? m.splice(m.delegateCount++, 0, u) : m.push(u), J.event.global[d] = !0;
                    t = null
                }
            },
            global: {},
            remove: function(t, e, i, s, n) {
                var o, a, r, h, l, c, d, p, u, f, m, g = J.hasData(t) && J._data(t);
                if (g && (p = g.events)) {
                    for (e = J.trim(Be(e || "")).split(" "), o = 0; o < e.length; o++)
                        if (a = Se.exec(e[o]) || [], r = h = a[1], l = a[2], r) {
                            for (u = J.event.special[r] || {}, r = (s ? u.delegateType : u.bindType) || r, f = p[r] || [], c = f.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, d = 0; d < f.length; d++) m = f[d], !(!n && h !== m.origType || i && i.guid !== m.guid || l && !l.test(m.namespace) || s && s !== m.selector && ("**" !== s || !m.selector) || (f.splice(d--, 1), m.selector && f.delegateCount--, !u.remove || !u.remove.call(t, m)));
                            0 === f.length && c !== f.length && ((!u.teardown || u.teardown.call(t, l, g.handle) === !1) && J.removeEvent(t, r, g.handle), delete p[r])
                        } else
                            for (r in p) J.event.remove(t, r + e[o], i, s, !0);
                    J.isEmptyObject(p) && (delete g.handle, J.removeData(t, "events", !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(i, s, n, o) {
                if (!n || 3 !== n.nodeType && 8 !== n.nodeType) {
                    var a, r, h, l, c, d, p, u, f, m, g = i.type || i,
                        v = [];
                    if (He.test(g + J.event.triggered)) return;
                    if (g.indexOf("!") >= 0 && (g = g.slice(0, -1), r = !0), g.indexOf(".") >= 0 && (v = g.split("."), g = v.shift(), v.sort()), (!n || J.event.customEvent[g]) && !J.event.global[g]) return;
                    if (i = "object" == typeof i ? i[J.expando] ? i : new J.Event(g, i) : new J.Event(g), i.type = g, i.isTrigger = !0, i.exclusive = r, i.namespace = v.join("."), i.namespace_re = i.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, d = g.indexOf(":") < 0 ? "on" + g : "", !n) {
                        a = J.cache;
                        for (h in a) a[h].events && a[h].events[g] && J.event.trigger(i, s, a[h].handle.elem, !0);
                        return
                    }
                    if (i.result = e, i.target || (i.target = n), s = null != s ? J.makeArray(s) : [], s.unshift(i), p = J.event.special[g] || {}, p.trigger && p.trigger.apply(n, s) === !1) return;
                    if (f = [
                            [n, p.bindType || g]
                        ], !o && !p.noBubble && !J.isWindow(n)) {
                        for (m = p.delegateType || g, l = He.test(m + g) ? n : n.parentNode, c = n; l; l = l.parentNode) f.push([l, m]), c = l;
                        c === (n.ownerDocument || W) && f.push([c.defaultView || c.parentWindow || t, m])
                    }
                    for (h = 0; h < f.length && !i.isPropagationStopped(); h++) l = f[h][0], i.type = f[h][1], u = (J._data(l, "events") || {})[i.type] && J._data(l, "handle"), u && u.apply(l, s), u = d && l[d], u && J.acceptData(l) && u.apply && u.apply(l, s) === !1 && i.preventDefault();
                    return i.type = g, !(o || i.isDefaultPrevented() || p._default && p._default.apply(n.ownerDocument, s) !== !1 || "click" === g && J.nodeName(n, "a") || !J.acceptData(n) || !d || !n[g] || ("focus" === g || "blur" === g) && 0 === i.target.offsetWidth || J.isWindow(n) || (c = n[d], c && (n[d] = null), J.event.triggered = g, n[g](), J.event.triggered = e, !c || !(n[d] = c))), i.result
                }
            },
            dispatch: function(i) {
                i = J.event.fix(i || t.event);
                var s, n, o, a, r, h, l, c, d, p = (J._data(this, "events") || {})[i.type] || [],
                    u = p.delegateCount,
                    f = G.call(arguments),
                    m = !i.exclusive && !i.namespace,
                    g = J.event.special[i.type] || {},
                    v = [];
                if (f[0] = i, i.delegateTarget = this, !g.preDispatch || g.preDispatch.call(this, i) !== !1) {
                    if (u && (!i.button || "click" !== i.type))
                        for (o = i.target; o != this; o = o.parentNode || this)
                            if (o.disabled !== !0 || "click" !== i.type) {
                                for (r = {}, l = [], s = 0; u > s; s++) c = p[s], d = c.selector, r[d] === e && (r[d] = c.needsContext ? J(d, this).index(o) >= 0 : J.find(d, this, null, [o]).length), r[d] && l.push(c);
                                l.length && v.push({
                                    elem: o,
                                    matches: l
                                })
                            }
                    for (p.length > u && v.push({
                            elem: this,
                            matches: p.slice(u)
                        }), s = 0; s < v.length && !i.isPropagationStopped(); s++)
                        for (h = v[s], i.currentTarget = h.elem, n = 0; n < h.matches.length && !i.isImmediatePropagationStopped(); n++) c = h.matches[n], (m || !i.namespace && !c.namespace || i.namespace_re && i.namespace_re.test(c.namespace)) && (i.data = c.data, i.handleObj = c, a = ((J.event.special[c.origType] || {}).handle || c.handler).apply(h.elem, f), a !== e && (i.result = a, a === !1 && (i.preventDefault(), i.stopPropagation())));
                    return g.postDispatch && g.postDispatch.call(this, i), i.result
                }
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, i) {
                    var s, n, o, a = i.button,
                        r = i.fromElement;
                    return null == t.pageX && null != i.clientX && (s = t.target.ownerDocument || W, n = s.documentElement, o = s.body, t.pageX = i.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0), t.pageY = i.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)), !t.relatedTarget && r && (t.relatedTarget = r === t.target ? i.toElement : r), !t.which && a !== e && (t.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), t
                }
            },
            fix: function(t) {
                if (t[J.expando]) return t;
                var e, i, s = t,
                    n = J.event.fixHooks[t.type] || {},
                    o = n.props ? this.props.concat(n.props) : this.props;
                for (t = J.Event(s), e = o.length; e;) i = o[--e], t[i] = s[i];
                return t.target || (t.target = s.srcElement || W), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, n.filter ? n.filter(t, s) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(t, e, i) {
                        J.isWindow(this) && (this.onbeforeunload = i)
                    },
                    teardown: function(t, e) {
                        this.onbeforeunload === e && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(t, e, i, s) {
                var n = J.extend(new J.Event, i, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                s ? J.event.trigger(n, null, e) : J.event.dispatch.call(e, n), n.isDefaultPrevented() && i.preventDefault()
            }
        }, J.event.handle = J.event.dispatch, J.removeEvent = W.removeEventListener ? function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i, !1)
        } : function(t, e, i) {
            var s = "on" + e;
            t.detachEvent && ("undefined" == typeof t[s] && (t[s] = null), t.detachEvent(s, i))
        }, J.Event = function(t, e) {
            return this instanceof J.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? a : o) : this.type = t, e && J.extend(this, e), this.timeStamp = t && t.timeStamp || J.now(), this[J.expando] = !0, void 0) : new J.Event(t, e)
        }, J.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = a;
                var t = this.originalEvent;
                t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                this.isPropagationStopped = a;
                var t = this.originalEvent;
                t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = a, this.stopPropagation()
            },
            isDefaultPrevented: o,
            isPropagationStopped: o,
            isImmediatePropagationStopped: o
        }, J.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(t, e) {
            J.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    {
                        var i, s = this,
                            n = t.relatedTarget,
                            o = t.handleObj;
                        o.selector
                    }
                    return (!n || n !== s && !J.contains(s, n)) && (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), J.support.submitBubbles || (J.event.special.submit = {
            setup: function() {
                return J.nodeName(this, "form") ? !1 : void J.event.add(this, "click._submit keypress._submit", function(t) {
                    var i = t.target,
                        s = J.nodeName(i, "input") || J.nodeName(i, "button") ? i.form : e;
                    s && !J._data(s, "_submit_attached") && (J.event.add(s, "submit._submit", function(t) {
                        t._submit_bubble = !0
                    }), J._data(s, "_submit_attached", !0))
                })
            },
            postDispatch: function(t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && J.event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function() {
                return J.nodeName(this, "form") ? !1 : void J.event.remove(this, "._submit")
            }
        }), J.support.changeBubbles || (J.event.special.change = {
            setup: function() {
                return Pe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (J.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), J.event.add(this, "click._change", function(t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), J.event.simulate("change", this, t, !0)
                })), !1) : void J.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    Pe.test(e.nodeName) && !J._data(e, "_change_attached") && (J.event.add(e, "change._change", function(t) {
                        this.parentNode && !t.isSimulated && !t.isTrigger && J.event.simulate("change", this.parentNode, t, !0)
                    }), J._data(e, "_change_attached", !0))
                })
            },
            handle: function(t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return J.event.remove(this, "._change"), !Pe.test(this.nodeName)
            }
        }), J.support.focusinBubbles || J.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var i = 0,
                s = function(t) {
                    J.event.simulate(e, t.target, J.event.fix(t), !0)
                };
            J.event.special[e] = {
                setup: function() {
                    0 === i++ && W.addEventListener(t, s, !0)
                },
                teardown: function() {
                    0 === --i && W.removeEventListener(t, s, !0)
                }
            }
        }), J.fn.extend({
            on: function(t, i, s, n, a) {
                var r, h;
                if ("object" == typeof t) {
                    "string" != typeof i && (s = s || i, i = e);
                    for (h in t) this.on(h, i, s, t[h], a);
                    return this
                }
                if (null == s && null == n ? (n = i, s = i = e) : null == n && ("string" == typeof i ? (n = s, s = e) : (n = s, s = i, i = e)), n === !1) n = o;
                else if (!n) return this;
                return 1 === a && (r = n, n = function(t) {
                    return J().off(t), r.apply(this, arguments)
                }, n.guid = r.guid || (r.guid = J.guid++)), this.each(function() {
                    J.event.add(this, t, n, s, i)
                })
            },
            one: function(t, e, i, s) {
                return this.on(t, e, i, s, 1)
            },
            off: function(t, i, s) {
                var n, a;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, J(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (a in t) this.off(a, i, t[a]);
                    return this
                }
                return (i === !1 || "function" == typeof i) && (s = i, i = e), s === !1 && (s = o), this.each(function() {
                    J.event.remove(this, t, s, i)
                })
            },
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            live: function(t, e, i) {
                return J(this.context).on(t, this.selector, e, i), this
            },
            die: function(t, e) {
                return J(this.context).off(t, this.selector || "**", e), this
            },
            delegate: function(t, e, i, s) {
                return this.on(e, t, i, s)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            },
            trigger: function(t, e) {
                return this.each(function() {
                    J.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                return this[0] ? J.event.trigger(t, e, this[0], !0) : void 0
            },
            toggle: function(t) {
                var e = arguments,
                    i = t.guid || J.guid++,
                    s = 0,
                    n = function(i) {
                        var n = (J._data(this, "lastToggle" + t.guid) || 0) % s;
                        return J._data(this, "lastToggle" + t.guid, n + 1), i.preventDefault(), e[n].apply(this, arguments) || !1
                    };
                for (n.guid = i; s < e.length;) e[s++].guid = i;
                return this.click(n)
            },
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            J.fn[e] = function(t, i) {
                return null == i && (i = t, t = null), arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }, je.test(e) && (J.event.fixHooks[e] = J.event.keyHooks), Fe.test(e) && (J.event.fixHooks[e] = J.event.mouseHooks)
        }),
        function(t, e) {
            function i(t, e, i, s) {
                i = i || [], e = e || F;
                var n, o, a, r, h = e.nodeType;
                if (!t || "string" != typeof t) return i;
                if (1 !== h && 9 !== h) return [];
                if (a = _(e), !a && !s && (n = ie.exec(t)))
                    if (r = n[1]) {
                        if (9 === h) {
                            if (o = e.getElementById(r), !o || !o.parentNode) return i;
                            if (o.id === r) return i.push(o), i
                        } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(r)) && x(e, o) && o.id === r) return i.push(o), i
                    } else {
                        if (n[2]) return E.apply(i, $.call(e.getElementsByTagName(t), 0)), i;
                        if ((r = n[3]) && pe && e.getElementsByClassName) return E.apply(i, $.call(e.getElementsByClassName(r), 0)), i
                    }
                return m(t.replace(Q, "$1"), e, i, s, a)
            }

            function s(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return "input" === i && e.type === t
                }
            }

            function n(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function o(t) {
                return z(function(e) {
                    return e = +e, z(function(i, s) {
                        for (var n, o = t([], i.length, e), a = o.length; a--;) i[n = o[a]] && (i[n] = !(s[n] = i[n]))
                    })
                })
            }

            function a(t, e, i) {
                if (t === e) return i;
                for (var s = t.nextSibling; s;) {
                    if (s === e) return -1;
                    s = s.nextSibling
                }
                return 1
            }

            function r(t, e) {
                var s, n, o, a, r, h, l, c = R[O][t];
                if (c) return e ? 0 : c.slice(0);
                for (r = t, h = [], l = b.preFilter; r;) {
                    (!s || (n = Z.exec(r))) && (n && (r = r.slice(n[0].length)), h.push(o = [])), s = !1, (n = te.exec(r)) && (o.push(s = new j(n.shift())), r = r.slice(s.length), s.type = n[0].replace(Q, " "));
                    for (a in b.filter)(n = re[a].exec(r)) && (!l[a] || (n = l[a](n, F, !0))) && (o.push(s = new j(n.shift())), r = r.slice(s.length), s.type = a, s.matches = n);
                    if (!s) break
                }
                return e ? r.length : r ? i.error(t) : R(t, h).slice(0)
            }

            function h(t, e, i) {
                var s = e.dir,
                    n = i && "parentNode" === e.dir,
                    o = I++;
                return e.first ? function(e, i, o) {
                    for (; e = e[s];)
                        if (n || 1 === e.nodeType) return t(e, i, o)
                } : function(e, i, a) {
                    if (a) {
                        for (; e = e[s];)
                            if ((n || 1 === e.nodeType) && t(e, i, a)) return e
                    } else
                        for (var r, h = B + " " + o + " ", l = h + v; e = e[s];)
                            if (n || 1 === e.nodeType) {
                                if ((r = e[O]) === l) return e.sizset;
                                if ("string" == typeof r && 0 === r.indexOf(h)) {
                                    if (e.sizset) return e
                                } else {
                                    if (e[O] = l, t(e, i, a)) return e.sizset = !0, e;
                                    e.sizset = !1
                                }
                            }
                }
            }

            function l(t) {
                return t.length > 1 ? function(e, i, s) {
                    for (var n = t.length; n--;)
                        if (!t[n](e, i, s)) return !1;
                    return !0
                } : t[0]
            }

            function c(t, e, i, s, n) {
                for (var o, a = [], r = 0, h = t.length, l = null != e; h > r; r++)(o = t[r]) && (!i || i(o, s, n)) && (a.push(o), l && e.push(r));
                return a
            }

            function d(t, e, i, s, n, o) {
                return s && !s[O] && (s = d(s)), n && !n[O] && (n = d(n, o)), z(function(o, a, r, h) {
                    if (!o || !n) {
                        var l, d, p, u = [],
                            m = [],
                            g = a.length,
                            v = o || f(e || "*", r.nodeType ? [r] : r, [], o),
                            y = !t || !o && e ? v : c(v, u, t, r, h),
                            b = i ? n || (o ? t : g || s) ? [] : a : y;
                        if (i && i(y, b, r, h), s)
                            for (p = c(b, m), s(p, [], r, h), l = p.length; l--;)(d = p[l]) && (b[m[l]] = !(y[m[l]] = d));
                        if (o)
                            for (l = t && b.length; l--;)(d = b[l]) && (o[u[l]] = !(a[u[l]] = d));
                        else b = c(b === a ? b.splice(g, b.length) : b), n ? n(null, a, b, h) : E.apply(a, b)
                    }
                })
            }

            function p(t) {
                for (var e, i, s, n = t.length, o = b.relative[t[0].type], a = o || b.relative[" "], r = o ? 1 : 0, c = h(function(t) {
                        return t === e
                    }, a, !0), u = h(function(t) {
                        return A.call(e, t) > -1
                    }, a, !0), f = [function(t, i, s) {
                        return !o && (s || i !== T) || ((e = i).nodeType ? c(t, i, s) : u(t, i, s))
                    }]; n > r; r++)
                    if (i = b.relative[t[r].type]) f = [h(l(f), i)];
                    else {
                        if (i = b.filter[t[r].type].apply(null, t[r].matches), i[O]) {
                            for (s = ++r; n > s && !b.relative[t[s].type]; s++);
                            return d(r > 1 && l(f), r > 1 && t.slice(0, r - 1).join("").replace(Q, "$1"), i, s > r && p(t.slice(r, s)), n > s && p(t = t.slice(s)), n > s && t.join(""))
                        }
                        f.push(i)
                    }
                return l(f)
            }

            function u(t, e) {
                var s = e.length > 0,
                    n = t.length > 0,
                    o = function(a, r, h, l, d) {
                        var p, u, f, m = [],
                            g = 0,
                            y = "0",
                            w = a && [],
                            _ = null != d,
                            x = T,
                            k = a || n && b.find.TAG("*", d && r.parentNode || r),
                            C = B += null == x ? 1 : Math.E;
                        for (_ && (T = r !== F && r, v = o.el); null != (p = k[y]); y++) {
                            if (n && p) {
                                for (u = 0; f = t[u]; u++)
                                    if (f(p, r, h)) {
                                        l.push(p);
                                        break
                                    }
                                _ && (B = C, v = ++o.el)
                            }
                            s && ((p = !f && p) && g--, a && w.push(p))
                        }
                        if (g += y, s && y !== g) {
                            for (u = 0; f = e[u]; u++) f(w, m, r, h);
                            if (a) {
                                if (g > 0)
                                    for (; y--;) !w[y] && !m[y] && (m[y] = N.call(l));
                                m = c(m)
                            }
                            E.apply(l, m), _ && !a && m.length > 0 && g + e.length > 1 && i.uniqueSort(l)
                        }
                        return _ && (B = C, T = x), w
                    };
                return o.el = 0, s ? z(o) : o
            }

            function f(t, e, s, n) {
                for (var o = 0, a = e.length; a > o; o++) i(t, e[o], s, n);
                return s
            }

            function m(t, e, i, s, n) {
                {
                    var o, a, h, l, c, d = r(t);
                    d.length
                }
                if (!s && 1 === d.length) {
                    if (a = d[0] = d[0].slice(0), a.length > 2 && "ID" === (h = a[0]).type && 9 === e.nodeType && !n && b.relative[a[1].type]) {
                        if (e = b.find.ID(h.matches[0].replace(ae, ""), e, n)[0], !e) return i;
                        t = t.slice(a.shift().length)
                    }
                    for (o = re.POS.test(t) ? -1 : a.length - 1; o >= 0 && (h = a[o], !b.relative[l = h.type]); o--)
                        if ((c = b.find[l]) && (s = c(h.matches[0].replace(ae, ""), se.test(a[0].type) && e.parentNode || e, n))) {
                            if (a.splice(o, 1), t = s.length && a.join(""), !t) return E.apply(i, $.call(s, 0)), i;
                            break
                        }
                }
                return k(t, d)(s, e, n, i, se.test(t)), i
            }

            function g() {}
            var v, y, b, w, _, x, k, C, M, T, P = !0,
                S = "undefined",
                O = ("sizcache" + Math.random()).replace(".", ""),
                j = String,
                F = t.document,
                H = F.documentElement,
                B = 0,
                I = 0,
                N = [].pop,
                E = [].push,
                $ = [].slice,
                A = [].indexOf || function(t) {
                    for (var e = 0, i = this.length; i > e; e++)
                        if (this[e] === t) return e;
                    return -1
                },
                z = function(t, e) {
                    return t[O] = null == e || e, t
                },
                D = function() {
                    var t = {},
                        e = [];
                    return z(function(i, s) {
                        return e.push(i) > b.cacheLength && delete t[e.shift()], t[i] = s
                    }, t)
                },
                W = D(),
                R = D(),
                L = D(),
                q = "[\\x20\\t\\r\\n\\f]",
                V = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                X = V.replace("w", "w#"),
                G = "([*^$|!~]?=)",
                U = "\\[" + q + "*(" + V + ")" + q + "*(?:" + G + q + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + X + ")|)|)" + q + "*\\]",
                K = ":(" + V + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + U + ")|[^:]|\\\\.)*|.*))\\)|)",
                Y = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)",
                Q = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g"),
                Z = new RegExp("^" + q + "*," + q + "*"),
                te = new RegExp("^" + q + "*([\\x20\\t\\r\\n\\f>+~])" + q + "*"),
                ee = new RegExp(K),
                ie = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                se = /[\x20\t\r\n\f]*[+~]/,
                ne = /h\d/i,
                oe = /input|select|textarea|button/i,
                ae = /\\(?!\\)/g,
                re = {
                    ID: new RegExp("^#(" + V + ")"),
                    CLASS: new RegExp("^\\.(" + V + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + V + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + V.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + U),
                    PSEUDO: new RegExp("^" + K),
                    POS: new RegExp(Y, "i"),
                    CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)", "i"),
                    needsContext: new RegExp("^" + q + "*[>+~]|" + Y, "i")
                },
                he = function(t) {
                    var e = F.createElement("div");
                    try {
                        return t(e)
                    } catch (i) {
                        return !1
                    } finally {
                        e = null
                    }
                },
                le = he(function(t) {
                    return t.appendChild(F.createComment("")), !t.getElementsByTagName("*").length
                }),
                ce = he(function(t) {
                    return t.innerHTML = "<a href='#'></a>", t.firstChild && typeof t.firstChild.getAttribute !== S && "#" === t.firstChild.getAttribute("href")
                }),
                de = he(function(t) {
                    t.innerHTML = "<select></select>";
                    var e = typeof t.lastChild.getAttribute("multiple");
                    return "boolean" !== e && "string" !== e
                }),
                pe = he(function(t) {
                    return t.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", t.getElementsByClassName && t.getElementsByClassName("e").length ? (t.lastChild.className = "e", 2 === t.getElementsByClassName("e").length) : !1
                }),
                ue = he(function(t) {
                    t.id = O + 0, t.innerHTML = "<a name='" + O + "'></a><div name='" + O + "'></div>", H.insertBefore(t, H.firstChild);
                    var e = F.getElementsByName && F.getElementsByName(O).length === 2 + F.getElementsByName(O + 0).length;
                    return y = !F.getElementById(O), H.removeChild(t), e
                });
            try {
                $.call(H.childNodes, 0)[0].nodeType
            } catch (fe) {
                $ = function(t) {
                    for (var e, i = []; e = this[t]; t++) i.push(e);
                    return i
                }
            }
            i.matches = function(t, e) {
                return i(t, null, null, e)
            }, i.matchesSelector = function(t, e) {
                return i(e, null, null, [t]).length > 0
            }, w = i.getText = function(t) {
                var e, i = "",
                    s = 0,
                    n = t.nodeType;
                if (n) {
                    if (1 === n || 9 === n || 11 === n) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += w(t)
                    } else if (3 === n || 4 === n) return t.nodeValue
                } else
                    for (; e = t[s]; s++) i += w(e);
                return i
            }, _ = i.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, x = i.contains = H.contains ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    s = e && e.parentNode;
                return t === s || !!(s && 1 === s.nodeType && i.contains && i.contains(s))
            } : H.compareDocumentPosition ? function(t, e) {
                return e && !!(16 & t.compareDocumentPosition(e))
            } : function(t, e) {
                for (; e = e.parentNode;)
                    if (e === t) return !0;
                return !1
            }, i.attr = function(t, e) {
                var i, s = _(t);
                return s || (e = e.toLowerCase()), (i = b.attrHandle[e]) ? i(t) : s || de ? t.getAttribute(e) : (i = t.getAttributeNode(e), i ? "boolean" == typeof t[e] ? t[e] ? e : null : i.specified ? i.value : null : null)
            }, b = i.selectors = {
                cacheLength: 50,
                createPseudo: z,
                match: re,
                attrHandle: ce ? {} : {
                    href: function(t) {
                        return t.getAttribute("href", 2)
                    },
                    type: function(t) {
                        return t.getAttribute("type")
                    }
                },
                find: {
                    ID: y ? function(t, e, i) {
                        if (typeof e.getElementById !== S && !i) {
                            var s = e.getElementById(t);
                            return s && s.parentNode ? [s] : []
                        }
                    } : function(t, i, s) {
                        if (typeof i.getElementById !== S && !s) {
                            var n = i.getElementById(t);
                            return n ? n.id === t || typeof n.getAttributeNode !== S && n.getAttributeNode("id").value === t ? [n] : e : []
                        }
                    },
                    TAG: le ? function(t, e) {
                        return typeof e.getElementsByTagName !== S ? e.getElementsByTagName(t) : void 0
                    } : function(t, e) {
                        var i = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (var s, n = [], o = 0; s = i[o]; o++) 1 === s.nodeType && n.push(s);
                            return n
                        }
                        return i
                    },
                    NAME: ue && function(t, e) {
                        return typeof e.getElementsByName !== S ? e.getElementsByName(name) : void 0
                    },
                    CLASS: pe && function(t, e, i) {
                        return typeof e.getElementsByClassName === S || i ? void 0 : e.getElementsByClassName(t)
                    }
                },
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
                    ATTR: function(t) {
                        return t[1] = t[1].replace(ae, ""), t[3] = (t[4] || t[5] || "").replace(ae, ""), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1] ? (t[2] || i.error(t[0]), t[3] = +(t[3] ? t[4] + (t[5] || 1) : 2 * ("even" === t[2] || "odd" === t[2])), t[4] = +(t[6] + t[7] || "odd" === t[2])) : t[2] && i.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, i;
                        return re.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[3] : (e = t[4]) && (ee.test(e) && (i = r(e, !0)) && (i = e.indexOf(")", e.length - i) - e.length) && (e = e.slice(0, i), t[0] = t[0].slice(0, i)), t[2] = e), t.slice(0, 3))
                    }
                },
                filter: {
                    ID: y ? function(t) {
                        return t = t.replace(ae, ""),
                            function(e) {
                                return e.getAttribute("id") === t
                            }
                    } : function(t) {
                        return t = t.replace(ae, ""),
                            function(e) {
                                var i = typeof e.getAttributeNode !== S && e.getAttributeNode("id");
                                return i && i.value === t
                            }
                    },
                    TAG: function(t) {
                        return "*" === t ? function() {
                            return !0
                        } : (t = t.replace(ae, "").toLowerCase(), function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        })
                    },
                    CLASS: function(t) {
                        var e = W[O][t];
                        return e || (e = W(t, new RegExp("(^|" + q + ")" + t + "(" + q + "|$)"))),
                            function(t) {
                                return e.test(t.className || typeof t.getAttribute !== S && t.getAttribute("class") || "")
                            }
                    },
                    ATTR: function(t, e, s) {
                        return function(n) {
                            var o = i.attr(n, t);
                            return null == o ? "!=" === e : e ? (o += "", "=" === e ? o === s : "!=" === e ? o !== s : "^=" === e ? s && 0 === o.indexOf(s) : "*=" === e ? s && o.indexOf(s) > -1 : "$=" === e ? s && o.substr(o.length - s.length) === s : "~=" === e ? (" " + o + " ").indexOf(s) > -1 : "|=" === e ? o === s || o.substr(0, s.length + 1) === s + "-" : !1) : !0
                        }
                    },
                    CHILD: function(t, e, i, s) {
                        return "nth" === t ? function(t) {
                            var e, n, o = t.parentNode;
                            if (1 === i && 0 === s) return !0;
                            if (o)
                                for (n = 0, e = o.firstChild; e && (1 !== e.nodeType || (n++, t !== e)); e = e.nextSibling);
                            return n -= s, n === i || n % i === 0 && n / i >= 0
                        } : function(e) {
                            var i = e;
                            switch (t) {
                                case "only":
                                case "first":
                                    for (; i = i.previousSibling;)
                                        if (1 === i.nodeType) return !1;
                                    if ("first" === t) return !0;
                                    i = e;
                                case "last":
                                    for (; i = i.nextSibling;)
                                        if (1 === i.nodeType) return !1;
                                    return !0
                            }
                        }
                    },
                    PSEUDO: function(t, e) {
                        var s, n = b.pseudos[t] || b.setFilters[t.toLowerCase()] || i.error("unsupported pseudo: " + t);
                        return n[O] ? n(e) : n.length > 1 ? (s = [t, t, "", e], b.setFilters.hasOwnProperty(t.toLowerCase()) ? z(function(t, i) {
                            for (var s, o = n(t, e), a = o.length; a--;) s = A.call(t, o[a]), t[s] = !(i[s] = o[a])
                        }) : function(t) {
                            return n(t, 0, s)
                        }) : n
                    }
                },
                pseudos: {
                    not: z(function(t) {
                        var e = [],
                            i = [],
                            s = k(t.replace(Q, "$1"));
                        return s[O] ? z(function(t, e, i, n) {
                            for (var o, a = s(t, null, n, []), r = t.length; r--;)(o = a[r]) && (t[r] = !(e[r] = o))
                        }) : function(t, n, o) {
                            return e[0] = t, s(e, null, o, i), !i.pop()
                        }
                    }),
                    has: z(function(t) {
                        return function(e) {
                            return i(t, e).length > 0
                        }
                    }),
                    contains: z(function(t) {
                        return function(e) {
                            return (e.textContent || e.innerText || w(e)).indexOf(t) > -1
                        }
                    }),
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    parent: function(t) {
                        return !b.pseudos.empty(t)
                    },
                    empty: function(t) {
                        var e;
                        for (t = t.firstChild; t;) {
                            if (t.nodeName > "@" || 3 === (e = t.nodeType) || 4 === e) return !1;
                            t = t.nextSibling
                        }
                        return !0
                    },
                    header: function(t) {
                        return ne.test(t.nodeName)
                    },
                    text: function(t) {
                        var e, i;
                        return "input" === t.nodeName.toLowerCase() && "text" === (e = t.type) && (null == (i = t.getAttribute("type")) || i.toLowerCase() === e)
                    },
                    radio: s("radio"),
                    checkbox: s("checkbox"),
                    file: s("file"),
                    password: s("password"),
                    image: s("image"),
                    submit: n("submit"),
                    reset: n("reset"),
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    input: function(t) {
                        return oe.test(t.nodeName)
                    },
                    focus: function(t) {
                        var e = t.ownerDocument;
                        return !(t !== e.activeElement || e.hasFocus && !e.hasFocus() || !t.type && !t.href)
                    },
                    active: function(t) {
                        return t === t.ownerDocument.activeElement
                    },
                    first: o(function() {
                        return [0]
                    }),
                    last: o(function(t, e) {
                        return [e - 1]
                    }),
                    eq: o(function(t, e, i) {
                        return [0 > i ? i + e : i]
                    }),
                    even: o(function(t, e) {
                        for (var i = 0; e > i; i += 2) t.push(i);
                        return t
                    }),
                    odd: o(function(t, e) {
                        for (var i = 1; e > i; i += 2) t.push(i);
                        return t
                    }),
                    lt: o(function(t, e, i) {
                        for (var s = 0 > i ? i + e : i; --s >= 0;) t.push(s);
                        return t
                    }),
                    gt: o(function(t, e, i) {
                        for (var s = 0 > i ? i + e : i; ++s < e;) t.push(s);
                        return t
                    })
                }
            }, C = H.compareDocumentPosition ? function(t, e) {
                return t === e ? (M = !0, 0) : (t.compareDocumentPosition && e.compareDocumentPosition ? 4 & t.compareDocumentPosition(e) : t.compareDocumentPosition) ? -1 : 1
            } : function(t, e) {
                if (t === e) return M = !0, 0;
                if (t.sourceIndex && e.sourceIndex) return t.sourceIndex - e.sourceIndex;
                var i, s, n = [],
                    o = [],
                    r = t.parentNode,
                    h = e.parentNode,
                    l = r;
                if (r === h) return a(t, e);
                if (!r) return -1;
                if (!h) return 1;
                for (; l;) n.unshift(l), l = l.parentNode;
                for (l = h; l;) o.unshift(l), l = l.parentNode;
                i = n.length, s = o.length;
                for (var c = 0; i > c && s > c; c++)
                    if (n[c] !== o[c]) return a(n[c], o[c]);
                return c === i ? a(t, o[c], -1) : a(n[c], e, 1)
            }, [0, 0].sort(C), P = !M, i.uniqueSort = function(t) {
                var e, i = 1;
                if (M = P, t.sort(C), M)
                    for (; e = t[i]; i++) e === t[i - 1] && t.splice(i--, 1);
                return t
            }, i.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, k = i.compile = function(t, e) {
                var i, s = [],
                    n = [],
                    o = L[O][t];
                if (!o) {
                    for (e || (e = r(t)), i = e.length; i--;) o = p(e[i]), o[O] ? s.push(o) : n.push(o);
                    o = L(t, u(n, s))
                }
                return o
            }, F.querySelectorAll && function() {
                var t, e = m,
                    s = /'|\\/g,
                    n = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    o = [":focus"],
                    a = [":active", ":focus"],
                    h = H.matchesSelector || H.mozMatchesSelector || H.webkitMatchesSelector || H.oMatchesSelector || H.msMatchesSelector;
                he(function(t) {
                    t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || o.push("\\[" + q + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), t.querySelectorAll(":checked").length || o.push(":checked")
                }), he(function(t) {
                    t.innerHTML = "<p test=''></p>", t.querySelectorAll("[test^='']").length && o.push("[*^$]=" + q + "*(?:\"\"|'')"), t.innerHTML = "<input type='hidden'/>", t.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled")
                }), o = new RegExp(o.join("|")), m = function(t, i, n, a, h) {
                    if (!(a || h || o && o.test(t))) {
                        var l, c, d = !0,
                            p = O,
                            u = i,
                            f = 9 === i.nodeType && t;
                        if (1 === i.nodeType && "object" !== i.nodeName.toLowerCase()) {
                            for (l = r(t), (d = i.getAttribute("id")) ? p = d.replace(s, "\\$&") : i.setAttribute("id", p), p = "[id='" + p + "'] ", c = l.length; c--;) l[c] = p + l[c].join("");
                            u = se.test(t) && i.parentNode || i, f = l.join(",")
                        }
                        if (f) try {
                            return E.apply(n, $.call(u.querySelectorAll(f), 0)), n
                        } catch (m) {} finally {
                            d || i.removeAttribute("id")
                        }
                    }
                    return e(t, i, n, a, h)
                }, h && (he(function(e) {
                    t = h.call(e, "div");
                    try {
                        h.call(e, "[test!='']:sizzle"), a.push("!=", K)
                    } catch (i) {}
                }), a = new RegExp(a.join("|")), i.matchesSelector = function(e, s) {
                    if (s = s.replace(n, "='$1']"), !(_(e) || a.test(s) || o && o.test(s))) try {
                        var r = h.call(e, s);
                        if (r || t || e.document && 11 !== e.document.nodeType) return r
                    } catch (l) {}
                    return i(s, null, null, [e]).length > 0
                })
            }(), b.pseudos.nth = b.pseudos.eq, b.filters = g.prototype = b.pseudos, b.setFilters = new g, i.attr = J.attr, J.find = i, J.expr = i.selectors, J.expr[":"] = J.expr.pseudos, J.unique = i.uniqueSort, J.text = i.getText, J.isXMLDoc = i.isXML, J.contains = i.contains
        }(t);
    var Ie = /Until$/,
        Ne = /^(?:parents|prev(?:Until|All))/,
        Ee = /^.[^:#\[\.,]*$/,
        $e = J.expr.match.needsContext,
        Ae = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    J.fn.extend({
        find: function(t) {
            var e, i, s, n, o, a, r = this;
            if ("string" != typeof t) return J(t).filter(function() {
                for (e = 0, i = r.length; i > e; e++)
                    if (J.contains(r[e], this)) return !0
            });
            for (a = this.pushStack("", "find", t), e = 0, i = this.length; i > e; e++)
                if (s = a.length, J.find(t, this[e], a), e > 0)
                    for (n = s; n < a.length; n++)
                        for (o = 0; s > o; o++)
                            if (a[o] === a[n]) {
                                a.splice(n--, 1);
                                break
                            }
            return a
        },
        has: function(t) {
            var e, i = J(t, this),
                s = i.length;
            return this.filter(function() {
                for (e = 0; s > e; e++)
                    if (J.contains(this, i[e])) return !0
            })
        },
        not: function(t) {
            return this.pushStack(l(this, t, !1), "not", t)
        },
        filter: function(t) {
            return this.pushStack(l(this, t, !0), "filter", t)
        },
        is: function(t) {
            return !!t && ("string" == typeof t ? $e.test(t) ? J(t, this.context).index(this[0]) >= 0 : J.filter(t, this).length > 0 : this.filter(t).length > 0)
        },
        closest: function(t, e) {
            for (var i, s = 0, n = this.length, o = [], a = $e.test(t) || "string" != typeof t ? J(t, e || this.context) : 0; n > s; s++)
                for (i = this[s]; i && i.ownerDocument && i !== e && 11 !== i.nodeType;) {
                    if (a ? a.index(i) > -1 : J.find.matchesSelector(i, t)) {
                        o.push(i);
                        break
                    }
                    i = i.parentNode
                }
            return o = o.length > 1 ? J.unique(o) : o, this.pushStack(o, "closest", t)
        },
        index: function(t) {
            return t ? "string" == typeof t ? J.inArray(this[0], J(t)) : J.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(t, e) {
            var i = "string" == typeof t ? J(t, e) : J.makeArray(t && t.nodeType ? [t] : t),
                s = J.merge(this.get(), i);
            return this.pushStack(r(i[0]) || r(s[0]) ? s : J.unique(s))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), J.fn.andSelf = J.fn.addBack, J.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return J.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return J.dir(t, "parentNode", i)
        },
        next: function(t) {
            return h(t, "nextSibling")
        },
        prev: function(t) {
            return h(t, "previousSibling")
        },
        nextAll: function(t) {
            return J.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return J.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return J.dir(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return J.dir(t, "previousSibling", i)
        },
        siblings: function(t) {
            return J.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return J.sibling(t.firstChild)
        },
        contents: function(t) {
            return J.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : J.merge([], t.childNodes)
        }
    }, function(t, e) {
        J.fn[t] = function(i, s) {
            var n = J.map(this, e, i);
            return Ie.test(t) || (s = i), s && "string" == typeof s && (n = J.filter(s, n)), n = this.length > 1 && !Ae[t] ? J.unique(n) : n, this.length > 1 && Ne.test(t) && (n = n.reverse()), this.pushStack(n, t, G.call(arguments).join(","))
        }
    }), J.extend({
        filter: function(t, e, i) {
            return i && (t = ":not(" + t + ")"), 1 === e.length ? J.find.matchesSelector(e[0], t) ? [e[0]] : [] : J.find.matches(t, e)
        },
        dir: function(t, i, s) {
            for (var n = [], o = t[i]; o && 9 !== o.nodeType && (s === e || 1 !== o.nodeType || !J(o).is(s));) 1 === o.nodeType && n.push(o), o = o[i];
            return n
        },
        sibling: function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    });
    var ze = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        De = / jQuery\d+="(?:null|\d+)"/g,
        We = /^\s+/,
        Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Le = /<([\w:]+)/,
        qe = /<tbody/i,
        Ve = /<|&#?\w+;/,
        Xe = /<(?:script|style|link)/i,
        Ge = /<(?:script|object|embed|option|style)/i,
        Ue = new RegExp("<(?:" + ze + ")[\\s/>]", "i"),
        Ke = /^(?:checkbox|radio)$/,
        Ye = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Qe = /\/(java|ecma)script/i,
        Je = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        Ze = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        ti = c(W),
        ei = ti.appendChild(W.createElement("div"));
    Ze.optgroup = Ze.option, Ze.tbody = Ze.tfoot = Ze.colgroup = Ze.caption = Ze.thead, Ze.th = Ze.td, J.support.htmlSerialize || (Ze._default = [1, "X<div>", "</div>"]), J.fn.extend({
            text: function(t) {
                return J.access(this, function(t) {
                    return t === e ? J.text(this) : this.empty().append((this[0] && this[0].ownerDocument || W).createTextNode(t))
                }, null, t, arguments.length)
            },
            wrapAll: function(t) {
                if (J.isFunction(t)) return this.each(function(e) {
                    J(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = J(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                return this.each(J.isFunction(t) ? function(e) {
                    J(this).wrapInner(t.call(this, e))
                } : function() {
                    var e = J(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = J.isFunction(t);
                return this.each(function(i) {
                    J(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(t) {
                    (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(t)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(t) {
                    (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(t, this.firstChild)
                })
            },
            before: function() {
                if (!r(this[0])) return this.domManip(arguments, !1, function(t) {
                    this.parentNode.insertBefore(t, this)
                });
                if (arguments.length) {
                    var t = J.clean(arguments);
                    return this.pushStack(J.merge(t, this), "before", this.selector)
                }
            },
            after: function() {
                if (!r(this[0])) return this.domManip(arguments, !1, function(t) {
                    this.parentNode.insertBefore(t, this.nextSibling)
                });
                if (arguments.length) {
                    var t = J.clean(arguments);
                    return this.pushStack(J.merge(this, t), "after", this.selector)
                }
            },
            remove: function(t, e) {
                for (var i, s = 0; null != (i = this[s]); s++)(!t || J.filter(t, [i]).length) && (!e && 1 === i.nodeType && (J.cleanData(i.getElementsByTagName("*")), J.cleanData([i])), i.parentNode && i.parentNode.removeChild(i));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++)
                    for (1 === t.nodeType && J.cleanData(t.getElementsByTagName("*")); t.firstChild;) t.removeChild(t.firstChild);
                return this
            },
            clone: function(t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                    return J.clone(this, t, e)
                })
            },
            html: function(t) {
                return J.access(this, function(t) {
                    var i = this[0] || {},
                        s = 0,
                        n = this.length;
                    if (t === e) return 1 === i.nodeType ? i.innerHTML.replace(De, "") : e;
                    if (!("string" != typeof t || Xe.test(t) || !J.support.htmlSerialize && Ue.test(t) || !J.support.leadingWhitespace && We.test(t) || Ze[(Le.exec(t) || ["", ""])[1].toLowerCase()])) {
                        t = t.replace(Re, "<$1></$2>");
                        try {
                            for (; n > s; s++) i = this[s] || {}, 1 === i.nodeType && (J.cleanData(i.getElementsByTagName("*")), i.innerHTML = t);
                            i = 0
                        } catch (o) {}
                    }
                    i && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function(t) {
                return r(this[0]) ? this.length ? this.pushStack(J(J.isFunction(t) ? t() : t), "replaceWith", t) : this : J.isFunction(t) ? this.each(function(e) {
                    var i = J(this),
                        s = i.html();
                    i.replaceWith(t.call(this, e, s))
                }) : ("string" != typeof t && (t = J(t).detach()), this.each(function() {
                    var e = this.nextSibling,
                        i = this.parentNode;
                    J(this).remove(), e ? J(e).before(t) : J(i).append(t)
                }))
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, i, s) {
                t = [].concat.apply([], t);
                var n, o, a, r, h = 0,
                    l = t[0],
                    c = [],
                    p = this.length;
                if (!J.support.checkClone && p > 1 && "string" == typeof l && Ye.test(l)) return this.each(function() {
                    J(this).domManip(t, i, s)
                });
                if (J.isFunction(l)) return this.each(function(n) {
                    var o = J(this);
                    t[0] = l.call(this, n, i ? o.html() : e), o.domManip(t, i, s)
                });
                if (this[0]) {
                    if (n = J.buildFragment(t, this, c), a = n.fragment, o = a.firstChild, 1 === a.childNodes.length && (a = o), o)
                        for (i = i && J.nodeName(o, "tr"), r = n.cacheable || p - 1; p > h; h++) s.call(i && J.nodeName(this[h], "table") ? d(this[h], "tbody") : this[h], h === r ? a : J.clone(a, !0, !0));
                    a = o = null, c.length && J.each(c, function(t, e) {
                        e.src ? J.ajax ? J.ajax({
                            url: e.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        }) : J.error("no ajax") : J.globalEval((e.text || e.textContent || e.innerHTML || "").replace(Je, "")), e.parentNode && e.parentNode.removeChild(e)
                    })
                }
                return this
            }
        }), J.buildFragment = function(t, i, s) {
            var n, o, a, r = t[0];
            return i = i || W, i = !i.nodeType && i[0] || i, i = i.ownerDocument || i, 1 === t.length && "string" == typeof r && r.length < 512 && i === W && "<" === r.charAt(0) && !Ge.test(r) && (J.support.checkClone || !Ye.test(r)) && (J.support.html5Clone || !Ue.test(r)) && (o = !0, n = J.fragments[r], a = n !== e), n || (n = i.createDocumentFragment(), J.clean(t, i, n, s), o && (J.fragments[r] = a && n)), {
                fragment: n,
                cacheable: o
            }
        }, J.fragments = {}, J.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            J.fn[t] = function(i) {
                var s, n = 0,
                    o = [],
                    a = J(i),
                    r = a.length,
                    h = 1 === this.length && this[0].parentNode;
                if ((null == h || h && 11 === h.nodeType && 1 === h.childNodes.length) && 1 === r) return a[e](this[0]), this;
                for (; r > n; n++) s = (n > 0 ? this.clone(!0) : this).get(), J(a[n])[e](s), o = o.concat(s);
                return this.pushStack(o, t, a.selector)
            }
        }), J.extend({
            clone: function(t, e, i) {
                var s, n, o, a;
                if (J.support.html5Clone || J.isXMLDoc(t) || !Ue.test("<" + t.nodeName + ">") ? a = t.cloneNode(!0) : (ei.innerHTML = t.outerHTML, ei.removeChild(a = ei.firstChild)), !(J.support.noCloneEvent && J.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || J.isXMLDoc(t)))
                    for (u(t, a), s = f(t), n = f(a), o = 0; s[o]; ++o) n[o] && u(s[o], n[o]);
                if (e && (p(t, a), i))
                    for (s = f(t), n = f(a), o = 0; s[o]; ++o) p(s[o], n[o]);
                return s = n = null, a
            },
            clean: function(t, e, i, s) {
                var n, o, a, r, h, l, d, p, u, f, g, v = e === W && ti,
                    y = [];
                for (e && "undefined" != typeof e.createDocumentFragment || (e = W), n = 0; null != (a = t[n]); n++)
                    if ("number" == typeof a && (a += ""), a) {
                        if ("string" == typeof a)
                            if (Ve.test(a)) {
                                for (v = v || c(e), d = e.createElement("div"), v.appendChild(d), a = a.replace(Re, "<$1></$2>"), r = (Le.exec(a) || ["", ""])[1].toLowerCase(), h = Ze[r] || Ze._default, l = h[0], d.innerHTML = h[1] + a + h[2]; l--;) d = d.lastChild;
                                if (!J.support.tbody)
                                    for (p = qe.test(a), u = "table" !== r || p ? "<table>" !== h[1] || p ? [] : d.childNodes : d.firstChild && d.firstChild.childNodes, o = u.length - 1; o >= 0; --o) J.nodeName(u[o], "tbody") && !u[o].childNodes.length && u[o].parentNode.removeChild(u[o]);
                                !J.support.leadingWhitespace && We.test(a) && d.insertBefore(e.createTextNode(We.exec(a)[0]), d.firstChild), a = d.childNodes, d.parentNode.removeChild(d)
                            } else a = e.createTextNode(a);
                        a.nodeType ? y.push(a) : J.merge(y, a)
                    }
                if (d && (a = d = v = null), !J.support.appendChecked)
                    for (n = 0; null != (a = y[n]); n++) J.nodeName(a, "input") ? m(a) : "undefined" != typeof a.getElementsByTagName && J.grep(a.getElementsByTagName("input"), m);
                if (i)
                    for (f = function(t) {
                            return !t.type || Qe.test(t.type) ? s ? s.push(t.parentNode ? t.parentNode.removeChild(t) : t) : i.appendChild(t) : void 0
                        }, n = 0; null != (a = y[n]); n++) J.nodeName(a, "script") && f(a) || (i.appendChild(a), "undefined" != typeof a.getElementsByTagName && (g = J.grep(J.merge([], a.getElementsByTagName("script")), f), y.splice.apply(y, [n + 1, 0].concat(g)), n += g.length));
                return y
            },
            cleanData: function(t, e) {
                for (var i, s, n, o, a = 0, r = J.expando, h = J.cache, l = J.support.deleteExpando, c = J.event.special; null != (n = t[a]); a++)
                    if ((e || J.acceptData(n)) && (s = n[r], i = s && h[s])) {
                        if (i.events)
                            for (o in i.events) c[o] ? J.event.remove(n, o) : J.removeEvent(n, o, i.handle);
                        h[s] && (delete h[s], l ? delete n[r] : n.removeAttribute ? n.removeAttribute(r) : n[r] = null, J.deletedIds.push(s))
                    }
            }
        }),
        function() {
            var t, e;
            J.uaMatch = function(t) {
                t = t.toLowerCase();
                var e = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
                return {
                    browser: e[1] || "",
                    version: e[2] || "0"
                }
            }, t = J.uaMatch(L.userAgent), e = {}, t.browser && (e[t.browser] = !0, e.version = t.version), e.chrome ? e.webkit = !0 : e.webkit && (e.safari = !0), J.browser = e, J.sub = function() {
                function t(e, i) {
                    return new t.fn.init(e, i)
                }
                J.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function i(i, s) {
                    return s && s instanceof J && !(s instanceof t) && (s = t(s)), J.fn.init.call(this, i, s, e)
                }, t.fn.init.prototype = t.fn;
                var e = t(W);
                return t
            }
        }();
    var ii, si, ni, oi = /alpha\([^)]*\)/i,
        ai = /opacity=([^)]*)/,
        ri = /^(top|right|bottom|left)$/,
        hi = /^(none|table(?!-c[ea]).+)/,
        li = /^margin/,
        ci = new RegExp("^(" + Z + ")(.*)$", "i"),
        di = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
        pi = new RegExp("^([-+])=(" + Z + ")", "i"),
        ui = {},
        fi = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        mi = {
            letterSpacing: 0,
            fontWeight: 400
        },
        gi = ["Top", "Right", "Bottom", "Left"],
        vi = ["Webkit", "O", "Moz", "ms"],
        yi = J.fn.toggle;
    J.fn.extend({
        css: function(t, i) {
            return J.access(this, function(t, i, s) {
                return s !== e ? J.style(t, i, s) : J.css(t, i)
            }, t, i, arguments.length > 1)
        },
        show: function() {
            return y(this, !0)
        },
        hide: function() {
            return y(this)
        },
        toggle: function(t, e) {
            var i = "boolean" == typeof t;
            return J.isFunction(t) && J.isFunction(e) ? yi.apply(this, arguments) : this.each(function() {
                (i ? t : v(this)) ? J(this).show(): J(this).hide()
            })
        }
    }), J.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = ii(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": J.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, i, s, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, a, r, h = J.camelCase(i),
                    l = t.style;
                if (i = J.cssProps[h] || (J.cssProps[h] = g(l, h)), r = J.cssHooks[i] || J.cssHooks[h], s === e) return r && "get" in r && (o = r.get(t, !1, n)) !== e ? o : l[i];
                if (a = typeof s, "string" === a && (o = pi.exec(s)) && (s = (o[1] + 1) * o[2] + parseFloat(J.css(t, i)), a = "number"), !(null == s || "number" === a && isNaN(s) || ("number" === a && !J.cssNumber[h] && (s += "px"), r && "set" in r && (s = r.set(t, s, n)) === e))) try {
                    l[i] = s
                } catch (c) {}
            }
        },
        css: function(t, i, s, n) {
            var o, a, r, h = J.camelCase(i);
            return i = J.cssProps[h] || (J.cssProps[h] = g(t.style, h)), r = J.cssHooks[i] || J.cssHooks[h], r && "get" in r && (o = r.get(t, !0, n)), o === e && (o = ii(t, i)), "normal" === o && i in mi && (o = mi[i]), s || n !== e ? (a = parseFloat(o), s || J.isNumeric(a) ? a || 0 : o) : o
        },
        swap: function(t, e, i) {
            var s, n, o = {};
            for (n in e) o[n] = t.style[n], t.style[n] = e[n];
            s = i.call(t);
            for (n in e) t.style[n] = o[n];
            return s
        }
    }), t.getComputedStyle ? ii = function(e, i) {
        var s, n, o, a, r = t.getComputedStyle(e, null),
            h = e.style;
        return r && (s = r[i], "" === s && !J.contains(e.ownerDocument, e) && (s = J.style(e, i)), di.test(s) && li.test(i) && (n = h.width, o = h.minWidth, a = h.maxWidth, h.minWidth = h.maxWidth = h.width = s, s = r.width, h.width = n, h.minWidth = o, h.maxWidth = a)), s
    } : W.documentElement.currentStyle && (ii = function(t, e) {
        var i, s, n = t.currentStyle && t.currentStyle[e],
            o = t.style;
        return null == n && o && o[e] && (n = o[e]), di.test(n) && !ri.test(e) && (i = o.left, s = t.runtimeStyle && t.runtimeStyle.left, s && (t.runtimeStyle.left = t.currentStyle.left), o.left = "fontSize" === e ? "1em" : n, n = o.pixelLeft + "px", o.left = i, s && (t.runtimeStyle.left = s)), "" === n ? "auto" : n
    }), J.each(["height", "width"], function(t, e) {
        J.cssHooks[e] = {
            get: function(t, i, s) {
                return i ? 0 === t.offsetWidth && hi.test(ii(t, "display")) ? J.swap(t, fi, function() {
                    return _(t, e, s)
                }) : _(t, e, s) : void 0
            },
            set: function(t, i, s) {
                return b(t, i, s ? w(t, e, s, J.support.boxSizing && "border-box" === J.css(t, "boxSizing")) : 0)
            }
        }
    }), J.support.opacity || (J.cssHooks.opacity = {
        get: function(t, e) {
            return ai.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var i = t.style,
                s = t.currentStyle,
                n = J.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                o = s && s.filter || i.filter || "";
            i.zoom = 1, e >= 1 && "" === J.trim(o.replace(oi, "")) && i.removeAttribute && (i.removeAttribute("filter"), s && !s.filter) || (i.filter = oi.test(o) ? o.replace(oi, n) : o + " " + n)
        }
    }), J(function() {
        J.support.reliableMarginRight || (J.cssHooks.marginRight = {
            get: function(t, e) {
                return J.swap(t, {
                    display: "inline-block"
                }, function() {
                    return e ? ii(t, "marginRight") : void 0
                })
            }
        }), !J.support.pixelPosition && J.fn.position && J.each(["top", "left"], function(t, e) {
            J.cssHooks[e] = {
                get: function(t, i) {
                    if (i) {
                        var s = ii(t, e);
                        return di.test(s) ? J(t).position()[e] + "px" : s
                    }
                }
            }
        })
    }), J.expr && J.expr.filters && (J.expr.filters.hidden = function(t) {
        return 0 === t.offsetWidth && 0 === t.offsetHeight || !J.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || ii(t, "display"))
    }, J.expr.filters.visible = function(t) {
        return !J.expr.filters.hidden(t)
    }), J.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        J.cssHooks[t + e] = {
            expand: function(i) {
                var s, n = "string" == typeof i ? i.split(" ") : [i],
                    o = {};
                for (s = 0; 4 > s; s++) o[t + gi[s] + e] = n[s] || n[s - 2] || n[0];
                return o
            }
        }, li.test(t) || (J.cssHooks[t + e].set = b)
    });
    var bi = /%20/g,
        wi = /\[\]$/,
        _i = /\r?\n/g,
        xi = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        ki = /^(?:select|textarea)/i;
    J.fn.extend({
        serialize: function() {
            return J.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? J.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || ki.test(this.nodeName) || xi.test(this.type))
            }).map(function(t, e) {
                var i = J(this).val();
                return null == i ? null : J.isArray(i) ? J.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(_i, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(_i, "\r\n")
                }
            }).get()
        }
    }), J.param = function(t, i) {
        var s, n = [],
            o = function(t, e) {
                e = J.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (i === e && (i = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(t) || t.jquery && !J.isPlainObject(t)) J.each(t, function() {
            o(this.name, this.value)
        });
        else
            for (s in t) k(s, t[s], i, o);
        return n.join("&").replace(bi, "+")
    };
    var Ci, Mi, Ti = /#.*$/,
        Pi = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Si = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        Oi = /^(?:GET|HEAD)$/,
        ji = /^\/\//,
        Fi = /\?/,
        Hi = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Bi = /([?&])_=[^&]*/,
        Ii = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Ni = J.fn.load,
        Ei = {},
        $i = {},
        Ai = ["*/"] + ["*"];
    try {
        Mi = R.href
    } catch (zi) {
        Mi = W.createElement("a"), Mi.href = "", Mi = Mi.href
    }
    Ci = Ii.exec(Mi.toLowerCase()) || [], J.fn.load = function(t, i, s) {
        if ("string" != typeof t && Ni) return Ni.apply(this, arguments);
        if (!this.length) return this;
        var n, o, a, r = this,
            h = t.indexOf(" ");
        return h >= 0 && (n = t.slice(h, t.length), t = t.slice(0, h)), J.isFunction(i) ? (s = i, i = e) : i && "object" == typeof i && (o = "POST"), J.ajax({
            url: t,
            type: o,
            dataType: "html",
            data: i,
            complete: function(t, e) {
                s && r.each(s, a || [t.responseText, e, t])
            }
        }).done(function(t) {
            a = arguments, r.html(n ? J("<div>").append(t.replace(Hi, "")).find(n) : t)
        }), this
    }, J.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(t, e) {
        J.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), J.each(["get", "post"], function(t, i) {
        J[i] = function(t, s, n, o) {
            return J.isFunction(s) && (o = o || n, n = s, s = e), J.ajax({
                type: i,
                url: t,
                data: s,
                success: n,
                dataType: o
            })
        }
    }), J.extend({
        getScript: function(t, i) {
            return J.get(t, e, i, "script")
        },
        getJSON: function(t, e, i) {
            return J.get(t, e, i, "json")
        },
        ajaxSetup: function(t, e) {
            return e ? T(t, J.ajaxSettings) : (e = t, t = J.ajaxSettings), T(t, e), t
        },
        ajaxSettings: {
            url: Mi,
            isLocal: Si.test(Ci[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Ai
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": t.String,
                "text html": !0,
                "text json": J.parseJSON,
                "text xml": J.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: C(Ei),
        ajaxTransport: C($i),
        ajax: function(t, i) {
            function s(t, i, s, a) {
                var l, d, y, b, _, k = i;
                2 !== w && (w = 2, h && clearTimeout(h), r = e, o = a || "", x.readyState = t > 0 ? 4 : 0, s && (b = P(p, x, s)), t >= 200 && 300 > t || 304 === t ? (p.ifModified && (_ = x.getResponseHeader("Last-Modified"), _ && (J.lastModified[n] = _), _ = x.getResponseHeader("Etag"), _ && (J.etag[n] = _)), 304 === t ? (k = "notmodified", l = !0) : (l = S(p, b), k = l.state, d = l.data, y = l.error, l = !y)) : (y = k, (!k || t) && (k = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (i || k) + "", l ? m.resolveWith(u, [d, k, x]) : m.rejectWith(u, [x, k, y]), x.statusCode(v), v = e, c && f.trigger("ajax" + (l ? "Success" : "Error"), [x, p, l ? d : y]), g.fireWith(u, [x, k]), c && (f.trigger("ajaxComplete", [x, p]), --J.active || J.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (i = t, t = e), i = i || {};
            var n, o, a, r, h, l, c, d, p = J.ajaxSetup({}, i),
                u = p.context || p,
                f = u !== p && (u.nodeType || u instanceof J) ? J(u) : J.event,
                m = J.Deferred(),
                g = J.Callbacks("once memory"),
                v = p.statusCode || {},
                y = {},
                b = {},
                w = 0,
                _ = "canceled",
                x = {
                    readyState: 0,
                    setRequestHeader: function(t, e) {
                        if (!w) {
                            var i = t.toLowerCase();
                            t = b[i] = b[i] || t, y[t] = e
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? o : null
                    },
                    getResponseHeader: function(t) {
                        var i;
                        if (2 === w) {
                            if (!a)
                                for (a = {}; i = Pi.exec(o);) a[i[1].toLowerCase()] = i[2];
                            i = a[t.toLowerCase()]
                        }
                        return i === e ? null : i
                    },
                    overrideMimeType: function(t) {
                        return w || (p.mimeType = t), this
                    },
                    abort: function(t) {
                        return t = t || _, r && r.abort(t), s(0, t), this
                    }
                };
            if (m.promise(x), x.success = x.done, x.error = x.fail, x.complete = g.add, x.statusCode = function(t) {
                    if (t) {
                        var e;
                        if (2 > w)
                            for (e in t) v[e] = [v[e], t[e]];
                        else e = t[x.status], x.always(e)
                    }
                    return this
                }, p.url = ((t || p.url) + "").replace(Ti, "").replace(ji, Ci[1] + "//"), p.dataTypes = J.trim(p.dataType || "*").toLowerCase().split(ee), null == p.crossDomain && (l = Ii.exec(p.url.toLowerCase()) || !1, p.crossDomain = l && l.join(":") + (l[3] ? "" : "http:" === l[1] ? 80 : 443) !== Ci.join(":") + (Ci[3] ? "" : "http:" === Ci[1] ? 80 : 443)), p.data && p.processData && "string" != typeof p.data && (p.data = J.param(p.data, p.traditional)), M(Ei, p, i, x), 2 === w) return x;
            if (c = p.global, p.type = p.type.toUpperCase(), p.hasContent = !Oi.test(p.type), c && 0 === J.active++ && J.event.trigger("ajaxStart"), !p.hasContent && (p.data && (p.url += (Fi.test(p.url) ? "&" : "?") + p.data, delete p.data), n = p.url, p.cache === !1)) {
                var k = J.now(),
                    C = p.url.replace(Bi, "$1_=" + k);
                p.url = C + (C === p.url ? (Fi.test(p.url) ? "&" : "?") + "_=" + k : "")
            }(p.data && p.hasContent && p.contentType !== !1 || i.contentType) && x.setRequestHeader("Content-Type", p.contentType), p.ifModified && (n = n || p.url, J.lastModified[n] && x.setRequestHeader("If-Modified-Since", J.lastModified[n]), J.etag[n] && x.setRequestHeader("If-None-Match", J.etag[n])), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ai + "; q=0.01" : "") : p.accepts["*"]);
            for (d in p.headers) x.setRequestHeader(d, p.headers[d]);
            if (!p.beforeSend || p.beforeSend.call(u, x, p) !== !1 && 2 !== w) {
                _ = "abort";
                for (d in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[d](p[d]);
                if (r = M($i, p, i, x)) {
                    x.readyState = 1, c && f.trigger("ajaxSend", [x, p]), p.async && p.timeout > 0 && (h = setTimeout(function() {
                        x.abort("timeout")
                    }, p.timeout));
                    try {
                        w = 1, r.send(y, s)
                    } catch (T) {
                        if (!(2 > w)) throw T;
                        s(-1, T)
                    }
                } else s(-1, "No Transport");
                return x
            }
            return x.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Di = [],
        Wi = /\?/,
        Ri = /(=)\?(?=&|$)|\?\?/,
        Li = J.now();
    J.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Di.pop() || J.expando + "_" + Li++;
            return this[t] = !0, t
        }
    }), J.ajaxPrefilter("json jsonp", function(i, s, n) {
        var o, a, r, h = i.data,
            l = i.url,
            c = i.jsonp !== !1,
            d = c && Ri.test(l),
            p = c && !d && "string" == typeof h && !(i.contentType || "").indexOf("application/x-www-form-urlencoded") && Ri.test(h);
        return "jsonp" === i.dataTypes[0] || d || p ? (o = i.jsonpCallback = J.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback, a = t[o], d ? i.url = l.replace(Ri, "$1" + o) : p ? i.data = h.replace(Ri, "$1" + o) : c && (i.url += (Wi.test(l) ? "&" : "?") + i.jsonp + "=" + o), i.converters["script json"] = function() {
            return r || J.error(o + " was not called"), r[0]
        }, i.dataTypes[0] = "json", t[o] = function() {
            r = arguments
        }, n.always(function() {
            t[o] = a, i[o] && (i.jsonpCallback = s.jsonpCallback, Di.push(o)), r && J.isFunction(a) && a(r[0]), r = a = e
        }), "script") : void 0
    }), J.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(t) {
                return J.globalEval(t), t
            }
        }
    }), J.ajaxPrefilter("script", function(t) {
        t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), J.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var i, s = W.head || W.getElementsByTagName("head")[0] || W.documentElement;
            return {
                send: function(n, o) {
                    i = W.createElement("script"), i.async = "async", t.scriptCharset && (i.charset = t.scriptCharset), i.src = t.url, i.onload = i.onreadystatechange = function(t, n) {
                        (n || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, s && i.parentNode && s.removeChild(i), i = e, n || o(200, "success"))
                    }, s.insertBefore(i, s.firstChild)
                },
                abort: function() {
                    i && i.onload(0, 1)
                }
            }
        }
    });
    var qi, Vi = t.ActiveXObject ? function() {
            for (var t in qi) qi[t](0, 1)
        } : !1,
        Xi = 0;
    J.ajaxSettings.xhr = t.ActiveXObject ? function() {
            return !this.isLocal && O() || j()
        } : O,
        function(t) {
            J.extend(J.support, {
                ajax: !!t,
                cors: !!t && "withCredentials" in t
            })
        }(J.ajaxSettings.xhr()), J.support.ajax && J.ajaxTransport(function(i) {
            if (!i.crossDomain || J.support.cors) {
                var s;
                return {
                    send: function(n, o) {
                        var a, r, h = i.xhr();
                        if (i.username ? h.open(i.type, i.url, i.async, i.username, i.password) : h.open(i.type, i.url, i.async), i.xhrFields)
                            for (r in i.xhrFields) h[r] = i.xhrFields[r];
                        i.mimeType && h.overrideMimeType && h.overrideMimeType(i.mimeType), !i.crossDomain && !n["X-Requested-With"] && (n["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (r in n) h.setRequestHeader(r, n[r])
                        } catch (l) {}
                        h.send(i.hasContent && i.data || null), s = function(t, n) {
                            var r, l, c, d, p;
                            try {
                                if (s && (n || 4 === h.readyState))
                                    if (s = e, a && (h.onreadystatechange = J.noop, Vi && delete qi[a]), n) 4 !== h.readyState && h.abort();
                                    else {
                                        r = h.status, c = h.getAllResponseHeaders(), d = {}, p = h.responseXML, p && p.documentElement && (d.xml = p);
                                        try {
                                            d.text = h.responseText
                                        } catch (t) {}
                                        try {
                                            l = h.statusText
                                        } catch (u) {
                                            l = ""
                                        }
                                        r || !i.isLocal || i.crossDomain ? 1223 === r && (r = 204) : r = d.text ? 200 : 404
                                    }
                            } catch (f) {
                                n || o(-1, f)
                            }
                            d && o(r, l, d, c)
                        }, i.async ? 4 === h.readyState ? setTimeout(s, 0) : (a = ++Xi, Vi && (qi || (qi = {}, J(t).unload(Vi)), qi[a] = s), h.onreadystatechange = s) : s()
                    },
                    abort: function() {
                        s && s(0, 1)
                    }
                }
            }
        });
    var Gi, Ui, Ki = /^(?:toggle|show|hide)$/,
        Yi = new RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$", "i"),
        Qi = /queueHooks$/,
        Ji = [N],
        Zi = {
            "*": [function(t, e) {
                var i, s, n = this.createTween(t, e),
                    o = Yi.exec(e),
                    a = n.cur(),
                    r = +a || 0,
                    h = 1,
                    l = 20;
                if (o) {
                    if (i = +o[2], s = o[3] || (J.cssNumber[t] ? "" : "px"), "px" !== s && r) {
                        r = J.css(n.elem, t, !0) || i || 1;
                        do h = h || ".5", r /= h, J.style(n.elem, t, r + s); while (h !== (h = n.cur() / a) && 1 !== h && --l)
                    }
                    n.unit = s, n.start = r, n.end = o[1] ? r + (o[1] + 1) * i : i
                }
                return n
            }]
        };
    J.Animation = J.extend(B, {
        tweener: function(t, e) {
            J.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var i, s = 0, n = t.length; n > s; s++) i = t[s], Zi[i] = Zi[i] || [], Zi[i].unshift(e)
        },
        prefilter: function(t, e) {
            e ? Ji.unshift(t) : Ji.push(t)
        }
    }), J.Tween = E, E.prototype = {
        constructor: E,
        init: function(t, e, i, s, n, o) {
            this.elem = t, this.prop = i, this.easing = n || "swing", this.options = e, this.start = this.now = this.cur(), this.end = s, this.unit = o || (J.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = E.propHooks[this.prop];
            return t && t.get ? t.get(this) : E.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = E.propHooks[this.prop];
            return this.pos = e = this.options.duration ? J.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : E.propHooks._default.set(this), this
        }
    }, E.prototype.init.prototype = E.prototype, E.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = J.css(t.elem, t.prop, !1, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                J.fx.step[t.prop] ? J.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[J.cssProps[t.prop]] || J.cssHooks[t.prop]) ? J.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, E.propHooks.scrollTop = E.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, J.each(["toggle", "show", "hide"], function(t, e) {
        var i = J.fn[e];
        J.fn[e] = function(s, n, o) {
            return null == s || "boolean" == typeof s || !t && J.isFunction(s) && J.isFunction(n) ? i.apply(this, arguments) : this.animate($(e, !0), s, n, o)
        }
    }), J.fn.extend({
        fadeTo: function(t, e, i, s) {
            return this.filter(v).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, s)
        },
        animate: function(t, e, i, s) {
            var n = J.isEmptyObject(t),
                o = J.speed(e, i, s),
                a = function() {
                    var e = B(this, J.extend({}, t), o);
                    n && e.stop(!0)
                };
            return n || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(t, i, s) {
            var n = function(t) {
                var e = t.stop;
                delete t.stop, e(s)
            };
            return "string" != typeof t && (s = i, i = t, t = e), i && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                var e = !0,
                    i = null != t && t + "queueHooks",
                    o = J.timers,
                    a = J._data(this);
                if (i) a[i] && a[i].stop && n(a[i]);
                else
                    for (i in a) a[i] && a[i].stop && Qi.test(i) && n(a[i]);
                for (i = o.length; i--;) o[i].elem === this && (null == t || o[i].queue === t) && (o[i].anim.stop(s), e = !1, o.splice(i, 1));
                (e || !s) && J.dequeue(this, t)
            })
        }
    }), J.each({
        slideDown: $("show"),
        slideUp: $("hide"),
        slideToggle: $("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        J.fn[t] = function(t, i, s) {
            return this.animate(e, t, i, s)
        }
    }), J.speed = function(t, e, i) {
        var s = t && "object" == typeof t ? J.extend({}, t) : {
            complete: i || !i && e || J.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !J.isFunction(e) && e
        };
        return s.duration = J.fx.off ? 0 : "number" == typeof s.duration ? s.duration : s.duration in J.fx.speeds ? J.fx.speeds[s.duration] : J.fx.speeds._default, (null == s.queue || s.queue === !0) && (s.queue = "fx"), s.old = s.complete, s.complete = function() {
            J.isFunction(s.old) && s.old.call(this), s.queue && J.dequeue(this, s.queue)
        }, s
    }, J.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, J.timers = [], J.fx = E.prototype.init, J.fx.tick = function() {
        for (var t, e = J.timers, i = 0; i < e.length; i++) t = e[i], !t() && e[i] === t && e.splice(i--, 1);
        e.length || J.fx.stop()
    }, J.fx.timer = function(t) {
        t() && J.timers.push(t) && !Ui && (Ui = setInterval(J.fx.tick, J.fx.interval))
    }, J.fx.interval = 13, J.fx.stop = function() {
        clearInterval(Ui), Ui = null
    }, J.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, J.fx.step = {}, J.expr && J.expr.filters && (J.expr.filters.animated = function(t) {
        return J.grep(J.timers, function(e) {
            return t === e.elem
        }).length
    });
    var ts = /^(?:body|html)$/i;
    J.fn.offset = function(t) {
        if (arguments.length) return t === e ? this : this.each(function(e) {
            J.offset.setOffset(this, t, e)
        });
        var i, s, n, o, a, r, h, l = {
                top: 0,
                left: 0
            },
            c = this[0],
            d = c && c.ownerDocument;
        if (d) return (s = d.body) === c ? J.offset.bodyOffset(c) : (i = d.documentElement, J.contains(i, c) ? ("undefined" != typeof c.getBoundingClientRect && (l = c.getBoundingClientRect()), n = A(d), o = i.clientTop || s.clientTop || 0, a = i.clientLeft || s.clientLeft || 0, r = n.pageYOffset || i.scrollTop, h = n.pageXOffset || i.scrollLeft, {
            top: l.top + r - o,
            left: l.left + h - a
        }) : l)
    }, J.offset = {
        bodyOffset: function(t) {
            var e = t.offsetTop,
                i = t.offsetLeft;
            return J.support.doesNotIncludeMarginInBodyOffset && (e += parseFloat(J.css(t, "marginTop")) || 0, i += parseFloat(J.css(t, "marginLeft")) || 0), {
                top: e,
                left: i
            }
        },
        setOffset: function(t, e, i) {
            var s = J.css(t, "position");
            "static" === s && (t.style.position = "relative");
            var n, o, a = J(t),
                r = a.offset(),
                h = J.css(t, "top"),
                l = J.css(t, "left"),
                c = ("absolute" === s || "fixed" === s) && J.inArray("auto", [h, l]) > -1,
                d = {},
                p = {};
            c ? (p = a.position(), n = p.top, o = p.left) : (n = parseFloat(h) || 0, o = parseFloat(l) || 0), J.isFunction(e) && (e = e.call(t, i, r)), null != e.top && (d.top = e.top - r.top + n), null != e.left && (d.left = e.left - r.left + o), "using" in e ? e.using.call(t, d) : a.css(d)
        }
    }, J.fn.extend({
        position: function() {
            if (this[0]) {
                var t = this[0],
                    e = this.offsetParent(),
                    i = this.offset(),
                    s = ts.test(e[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : e.offset();
                return i.top -= parseFloat(J.css(t, "marginTop")) || 0, i.left -= parseFloat(J.css(t, "marginLeft")) || 0, s.top += parseFloat(J.css(e[0], "borderTopWidth")) || 0, s.left += parseFloat(J.css(e[0], "borderLeftWidth")) || 0, {
                    top: i.top - s.top,
                    left: i.left - s.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || W.body; t && !ts.test(t.nodeName) && "static" === J.css(t, "position");) t = t.offsetParent;
                return t || W.body
            })
        }
    }), J.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var s = /Y/.test(i);
        J.fn[t] = function(n) {
            return J.access(this, function(t, n, o) {
                var a = A(t);
                return o === e ? a ? i in a ? a[i] : a.document.documentElement[n] : t[n] : void(a ? a.scrollTo(s ? J(a).scrollLeft() : o, s ? o : J(a).scrollTop()) : t[n] = o)
            }, t, n, arguments.length, null)
        }
    }), J.each({
        Height: "height",
        Width: "width"
    }, function(t, i) {
        J.each({
            padding: "inner" + t,
            content: i,
            "": "outer" + t
        }, function(s, n) {
            J.fn[n] = function(n, o) {
                var a = arguments.length && (s || "boolean" != typeof n),
                    r = s || (n === !0 || o === !0 ? "margin" : "border");
                return J.access(this, function(i, s, n) {
                    var o;
                    return J.isWindow(i) ? i.document.documentElement["client" + t] : 9 === i.nodeType ? (o = i.documentElement, Math.max(i.body["scroll" + t], o["scroll" + t], i.body["offset" + t], o["offset" + t], o["client" + t])) : n === e ? J.css(i, s, n, r) : J.style(i, s, n, r)
                }, i, a ? n : e, a, null)
            }
        })
    }), t.jQuery = t.$ = J, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return J
    })
}(window),
function(t, e) {
    function i(t, e, i) {
        var s = d[e.type] || {};
        return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : s.max < t ? s.max : t)
    }

    function s(e) {
        var i = l(),
            s = i._rgba = [];
        return e = e.toLowerCase(), f(h, function(t, n) {
            var o, a = n.re.exec(e),
                r = a && n.parse(a),
                h = n.space || "rgba";
            return r ? (o = i[h](r), i[c[h].cache] = o[c[h].cache], s = i._rgba = o._rgba, !1) : void 0
        }), s.length ? ("0,0,0,0" === s.join() && t.extend(s, o.transparent), i) : o[e]
    }

    function n(t, e, i) {
        return i = (i + 1) % 1, 1 > 6 * i ? t + (e - t) * i * 6 : 1 > 2 * i ? e : 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t
    }
    var o, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
        r = /^([\-+])=\s*(\d+\.?\d*)/,
        h = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [t[1], t[2], t[3], t[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(t) {
                return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(t) {
                return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(t) {
                return [t[1], t[2] / 100, t[3] / 100, t[4]]
            }
        }],
        l = t.Color = function(e, i, s, n) {
            return new t.Color.fn.parse(e, i, s, n)
        },
        c = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        },
        d = {
            "byte": {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        },
        p = l.support = {},
        u = t("<p>")[0],
        f = t.each;
    u.style.cssText = "background-color:rgba(1,1,1,.5)", p.rgba = u.style.backgroundColor.indexOf("rgba") > -1, f(c, function(t, e) {
        e.cache = "_" + t, e.props.alpha = {
            idx: 3,
            type: "percent",
            def: 1
        }
    }), l.fn = t.extend(l.prototype, {
        parse: function(n, a, r, h) {
            if (n === e) return this._rgba = [null, null, null, null], this;
            (n.jquery || n.nodeType) && (n = t(n).css(a), a = e);
            var d = this,
                p = t.type(n),
                u = this._rgba = [];
            return a !== e && (n = [n, a, r, h], p = "array"), "string" === p ? this.parse(s(n) || o._default) : "array" === p ? (f(c.rgba.props, function(t, e) {
                u[e.idx] = i(n[e.idx], e)
            }), this) : "object" === p ? (n instanceof l ? f(c, function(t, e) {
                n[e.cache] && (d[e.cache] = n[e.cache].slice())
            }) : f(c, function(e, s) {
                var o = s.cache;
                f(s.props, function(t, e) {
                    if (!d[o] && s.to) {
                        if ("alpha" === t || null == n[t]) return;
                        d[o] = s.to(d._rgba)
                    }
                    d[o][e.idx] = i(n[t], e, !0)
                }), d[o] && t.inArray(null, d[o].slice(0, 3)) < 0 && (d[o][3] = 1, s.from && (d._rgba = s.from(d[o])))
            }), this) : void 0
        },
        is: function(t) {
            var e = l(t),
                i = !0,
                s = this;
            return f(c, function(t, n) {
                var o, a = e[n.cache];
                return a && (o = s[n.cache] || n.to && n.to(s._rgba) || [], f(n.props, function(t, e) {
                    return null != a[e.idx] ? i = a[e.idx] === o[e.idx] : void 0
                })), i
            }), i
        },
        _space: function() {
            var t = [],
                e = this;
            return f(c, function(i, s) {
                e[s.cache] && t.push(i)
            }), t.pop()
        },
        transition: function(t, e) {
            var s = l(t),
                n = s._space(),
                o = c[n],
                a = 0 === this.alpha() ? l("transparent") : this,
                r = a[o.cache] || o.to(a._rgba),
                h = r.slice();
            return s = s[o.cache], f(o.props, function(t, n) {
                var o = n.idx,
                    a = r[o],
                    l = s[o],
                    c = d[n.type] || {};
                null !== l && (null === a ? h[o] = l : (c.mod && (l - a > c.mod / 2 ? a += c.mod : a - l > c.mod / 2 && (a -= c.mod)), h[o] = i((l - a) * e + a, n)))
            }), this[n](h)
        },
        blend: function(e) {
            if (1 === this._rgba[3]) return this;
            var i = this._rgba.slice(),
                s = i.pop(),
                n = l(e)._rgba;
            return l(t.map(i, function(t, e) {
                return (1 - s) * n[e] + s * t
            }))
        },
        toRgbaString: function() {
            var e = "rgba(",
                i = t.map(this._rgba, function(t, e) {
                    return null == t ? e > 2 ? 1 : 0 : t
                });
            return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
        },
        toHslaString: function() {
            var e = "hsla(",
                i = t.map(this.hsla(), function(t, e) {
                    return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                });
            return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
        },
        toHexString: function(e) {
            var i = this._rgba.slice(),
                s = i.pop();
            return e && i.push(~~(255 * s)), "#" + t.map(i, function(t) {
                return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
            }).join("")
        },
        toString: function() {
            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
        }
    }), l.fn.parse.prototype = l.fn, c.hsla.to = function(t) {
        if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
        var e, i, s = t[0] / 255,
            n = t[1] / 255,
            o = t[2] / 255,
            a = t[3],
            r = Math.max(s, n, o),
            h = Math.min(s, n, o),
            l = r - h,
            c = r + h,
            d = .5 * c;
        return e = h === r ? 0 : s === r ? 60 * (n - o) / l + 360 : n === r ? 60 * (o - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= d ? l / c : l / (2 - c), [Math.round(e) % 360, i, d, null == a ? 1 : a]
    }, c.hsla.from = function(t) {
        if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
        var e = t[0] / 360,
            i = t[1],
            s = t[2],
            o = t[3],
            a = .5 >= s ? s * (1 + i) : s + i - s * i,
            r = 2 * s - a;
        return [Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o]
    }, f(c, function(s, n) {
        var o = n.props,
            a = n.cache,
            h = n.to,
            c = n.from;
        l.fn[s] = function(s) {
            if (h && !this[a] && (this[a] = h(this._rgba)), s === e) return this[a].slice();
            var n, r = t.type(s),
                d = "array" === r || "object" === r ? s : arguments,
                p = this[a].slice();
            return f(o, function(t, e) {
                var s = d["object" === r ? t : e.idx];
                null == s && (s = p[e.idx]), p[e.idx] = i(s, e)
            }), c ? (n = l(c(p)), n[a] = p, n) : l(p)
        }, f(o, function(e, i) {
            l.fn[e] || (l.fn[e] = function(n) {
                var o, a = t.type(n),
                    h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
                    l = this[h](),
                    c = l[i.idx];
                return "undefined" === a ? c : ("function" === a && (n = n.call(this, c), a = t.type(n)), null == n && i.empty ? this : ("string" === a && (o = r.exec(n), o && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), l[i.idx] = n, this[h](l)))
            })
        })
    }), l.hook = function(e) {
        var i = e.split(" ");
        f(i, function(e, i) {
            t.cssHooks[i] = {
                set: function(e, n) {
                    var o, a, r = "";
                    if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
                        if (n = l(o || n), !p.rgba && 1 !== n._rgba[3]) {
                            for (a = "backgroundColor" === i ? e.parentNode : e;
                                ("" === r || "transparent" === r) && a && a.style;) try {
                                r = t.css(a, "backgroundColor"), a = a.parentNode
                            } catch (h) {}
                            n = n.blend(r && "transparent" !== r ? r : "_default")
                        }
                        n = n.toRgbaString()
                    }
                    try {
                        e.style[i] = n
                    } catch (h) {}
                }
            }, t.fx.step[i] = function(e) {
                e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
            }
        })
    }, l.hook(a), t.cssHooks.borderColor = {
        expand: function(t) {
            var e = {};
            return f(["Top", "Right", "Bottom", "Left"], function(i, s) {
                e["border" + s + "Color"] = t
            }), e
        }
    }, o = t.Color.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        transparent: [null, null, null, 0],
        _default: "#ffffff"
    }
}(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(t, e, i, s, n) {
            return jQuery.easing[jQuery.easing.def](t, e, i, s, n)
        },
        easeInQuad: function(t, e, i, s, n) {
            return s * (e /= n) * e + i
        },
        easeOutQuad: function(t, e, i, s, n) {
            return -s * (e /= n) * (e - 2) + i
        },
        easeInOutQuad: function(t, e, i, s, n) {
            return (e /= n / 2) < 1 ? s / 2 * e * e + i : -s / 2 * (--e * (e - 2) - 1) + i
        },
        easeInCubic: function(t, e, i, s, n) {
            return s * (e /= n) * e * e + i
        },
        easeOutCubic: function(t, e, i, s, n) {
            return s * ((e = e / n - 1) * e * e + 1) + i
        },
        easeInOutCubic: function(t, e, i, s, n) {
            return (e /= n / 2) < 1 ? s / 2 * e * e * e + i : s / 2 * ((e -= 2) * e * e + 2) + i
        },
        easeInQuart: function(t, e, i, s, n) {
            return s * (e /= n) * e * e * e + i
        },
        easeOutQuart: function(t, e, i, s, n) {
            return -s * ((e = e / n - 1) * e * e * e - 1) + i
        },
        easeInOutQuart: function(t, e, i, s, n) {
            return (e /= n / 2) < 1 ? s / 2 * e * e * e * e + i : -s / 2 * ((e -= 2) * e * e * e - 2) + i
        },
        easeInQuint: function(t, e, i, s, n) {
            return s * (e /= n) * e * e * e * e + i
        },
        easeOutQuint: function(t, e, i, s, n) {
            return s * ((e = e / n - 1) * e * e * e * e + 1) + i
        },
        easeInOutQuint: function(t, e, i, s, n) {
            return (e /= n / 2) < 1 ? s / 2 * e * e * e * e * e + i : s / 2 * ((e -= 2) * e * e * e * e + 2) + i
        },
        easeInSine: function(t, e, i, s, n) {
            return -s * Math.cos(e / n * (Math.PI / 2)) + s + i
        },
        easeOutSine: function(t, e, i, s, n) {
            return s * Math.sin(e / n * (Math.PI / 2)) + i
        },
        easeInOutSine: function(t, e, i, s, n) {
            return -s / 2 * (Math.cos(Math.PI * e / n) - 1) + i
        },
        easeInExpo: function(t, e, i, s, n) {
            return 0 == e ? i : s * Math.pow(2, 10 * (e / n - 1)) + i
        },
        easeOutExpo: function(t, e, i, s, n) {
            return e == n ? i + s : s * (-Math.pow(2, -10 * e / n) + 1) + i
        },
        easeInOutExpo: function(t, e, i, s, n) {
            return 0 == e ? i : e == n ? i + s : (e /= n / 2) < 1 ? s / 2 * Math.pow(2, 10 * (e - 1)) + i : s / 2 * (-Math.pow(2, -10 * --e) + 2) + i
        },
        easeInCirc: function(t, e, i, s, n) {
            return -s * (Math.sqrt(1 - (e /= n) * e) - 1) + i
        },
        easeOutCirc: function(t, e, i, s, n) {
            return s * Math.sqrt(1 - (e = e / n - 1) * e) + i
        },
        easeInOutCirc: function(t, e, i, s, n) {
            return (e /= n / 2) < 1 ? -s / 2 * (Math.sqrt(1 - e * e) - 1) + i : s / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
        },
        easeInElastic: function(t, e, i, s, n) {
            var o = 1.70158,
                a = 0,
                r = s;
            if (0 == e) return i;
            if (1 == (e /= n)) return i + s;
            if (a || (a = .3 * n), r < Math.abs(s)) {
                r = s;
                var o = a / 4
            } else var o = a / (2 * Math.PI) * Math.asin(s / r);
            return -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * n - o) * Math.PI / a)) + i
        },
        easeOutElastic: function(t, e, i, s, n) {
            var o = 1.70158,
                a = 0,
                r = s;
            if (0 == e) return i;
            if (1 == (e /= n)) return i + s;
            if (a || (a = .3 * n), r < Math.abs(s)) {
                r = s;
                var o = a / 4
            } else var o = a / (2 * Math.PI) * Math.asin(s / r);
            return r * Math.pow(2, -10 * e) * Math.sin(2 * (e * n - o) * Math.PI / a) + s + i
        },
        easeInOutElastic: function(t, e, i, s, n) {
            var o = 1.70158,
                a = 0,
                r = s;
            if (0 == e) return i;
            if (2 == (e /= n / 2)) return i + s;
            if (a || (a = .3 * n * 1.5), r < Math.abs(s)) {
                r = s;
                var o = a / 4
            } else var o = a / (2 * Math.PI) * Math.asin(s / r);
            return 1 > e ? -.5 * r * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * n - o) * Math.PI / a) + i : r * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * n - o) * Math.PI / a) * .5 + s + i
        },
        easeInBack: function(t, e, i, s, n, o) {
            return void 0 == o && (o = 1.70158), s * (e /= n) * e * ((o + 1) * e - o) + i
        },
        easeOutBack: function(t, e, i, s, n, o) {
            return void 0 == o && (o = 1.70158), s * ((e = e / n - 1) * e * ((o + 1) * e + o) + 1) + i
        },
        easeInOutBack: function(t, e, i, s, n, o) {
            return void 0 == o && (o = 1.70158), (e /= n / 2) < 1 ? s / 2 * e * e * (((o *= 1.525) + 1) * e - o) + i : s / 2 * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + i
        },
        easeInBounce: function(t, e, i, s, n) {
            return s - jQuery.easing.easeOutBounce(t, n - e, 0, s, n) + i
        },
        easeOutBounce: function(t, e, i, s, n) {
            return (e /= n) < 1 / 2.75 ? 7.5625 * s * e * e + i : 2 / 2.75 > e ? s * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : 2.5 / 2.75 > e ? s * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : s * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
        },
        easeInOutBounce: function(t, e, i, s, n) {
            return n / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, s, n) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - n, 0, s, n) + .5 * s + i
        }
    }),
    function(t, e, i, s, n) {
        function o(e) {
            e = e.split(")");
            var i, n, o, a = t.trim,
                r = -1,
                h = e.length - 1,
                l = k ? new Float32Array(6) : [],
                c = k ? new Float32Array(6) : [],
                d = k ? new Float32Array(6) : [1, 0, 0, 1, 0, 0];
            for (l[0] = l[3] = d[0] = d[3] = 1, l[1] = l[2] = l[4] = l[5] = 0; ++r < h;) {
                switch (i = e[r].split("("), n = a(i[0]), o = i[1], c[0] = c[3] = 1, c[1] = c[2] = c[4] = c[5] = 0, n) {
                    case S + "X":
                        c[4] = parseInt(o, 10);
                        break;
                    case S + "Y":
                        c[5] = parseInt(o, 10);
                        break;
                    case S:
                        o = o.split(","), c[4] = parseInt(o[0], 10), c[5] = parseInt(o[1] || 0, 10);
                        break;
                    case O:
                        o = p(o), c[0] = s.cos(o), c[1] = s.sin(o), c[2] = -s.sin(o), c[3] = s.cos(o);
                        break;
                    case j + "X":
                        c[0] = +o;
                        break;
                    case j + "Y":
                        c[3] = o;
                        break;
                    case j:
                        o = o.split(","), c[0] = o[0], c[3] = o.length > 1 ? o[1] : o[0];
                        break;
                    case F + "X":
                        c[2] = s.tan(p(o));
                        break;
                    case F + "Y":
                        c[1] = s.tan(p(o));
                        break;
                    case H:
                        o = o.split(","), c[0] = o[0], c[1] = o[1], c[2] = o[2], c[3] = o[3], c[4] = parseInt(o[4], 10), c[5] = parseInt(o[5], 10)
                }
                d[0] = l[0] * c[0] + l[2] * c[1], d[1] = l[1] * c[0] + l[3] * c[1], d[2] = l[0] * c[2] + l[2] * c[3], d[3] = l[1] * c[2] + l[3] * c[3], d[4] = l[0] * c[4] + l[2] * c[5] + l[4], d[5] = l[1] * c[4] + l[3] * c[5] + l[5], l = [d[0], d[1], d[2], d[3], d[4], d[5]]
            }
            return d
        }

        function a(t) {
            var e, i, n, o = t[0],
                a = t[1],
                r = t[2],
                h = t[3];
            return o * h - a * r ? (e = s.sqrt(o * o + a * a), o /= e, a /= e, n = o * r + a * h, r -= o * n, h -= a * n, i = s.sqrt(r * r + h * h), r /= i, h /= i, n /= i, a * r > o * h && (o = -o, a = -a, n = -n, e = -e)) : e = i = n = 0, [
                [S, [+t[4], +t[5]]],
                [O, s.atan2(a, o)],
                [F + "X", s.atan(n)],
                [j, [e, i]]
            ]
        }

        function r(e, i) {
            var s, n, r, p, f = {
                    start: [],
                    end: []
                },
                m = -1;
            if (("none" == e || l(e)) && (e = ""), ("none" == i || l(i)) && (i = ""), e && i && !i.indexOf("matrix") && u(e).join() == u(i.split(")")[0]).join() && (f.origin = e, e = "", i = i.slice(i.indexOf(")") + 1)), e || i) {
                if (e && i && c(e) != c(i)) f.start = a(o(e)), f.end = a(o(i));
                else
                    for (e && (e = e.split(")")) && (s = e.length), i && (i = i.split(")")) && (s = i.length); ++m < s - 1;) e[m] && (n = e[m].split("(")), i[m] && (r = i[m].split("(")), p = t.trim((n || r)[0]), d(f.start, h(p, n ? n[1] : 0)), d(f.end, h(p, r ? r[1] : 0));
                return f
            }
        }

        function h(t, e) {
            var i, s = +!t.indexOf(j),
                n = t.replace(/e[XY]/, "e");
            switch (t) {
                case S + "Y":
                case j + "Y":
                    e = [s, e ? parseFloat(e) : s];
                    break;
                case S + "X":
                case S:
                case j + "X":
                    i = 1;
                case j:
                    e = e ? (e = e.split(",")) && [parseFloat(e[0]), parseFloat(e.length > 1 ? e[1] : t == j ? i || e[0] : s + "")] : [s, s];
                    break;
                case F + "X":
                case F + "Y":
                case O:
                    e = e ? p(e) : 0;
                    break;
                case H:
                    return a(e ? u(e) : [1, 0, 0, 1, 0, 0])
            }
            return [
                [n, e]
            ]
        }

        function l(t) {
            return M.test(t)
        }

        function c(t) {
            return t.replace(/(?:\([^)]*\))|\s/g, "")
        }

        function d(t, e, i) {
            for (; i = e.shift();) t.push(i)
        }

        function p(t) {
            return ~t.indexOf("deg") ? parseInt(t, 10) * (2 * s.PI / 360) : ~t.indexOf("grad") ? parseInt(t, 10) * (s.PI / 200) : parseFloat(t)
        }

        function u(t) {
            return t = /([^,]*),([^,]*),([^,]*),([^,]*),([^,p]*)(?:px)?,([^)p]*)(?:px)?/.exec(t), [t[1], t[2], t[3], t[4], t[5], t[6]]
        }
        for (var f, m, g, v, y = i.createElement("div"), b = y.style, w = "Transform", _ = ["O" + w, "ms" + w, "Webkit" + w, "Moz" + w], x = _.length, k = ("Float32Array" in e), C = /Matrix([^)]*)/, M = /^\s*matrix\(\s*1\s*,\s*0\s*,\s*0\s*,\s*1\s*(?:,\s*0(?:px)?\s*){2}\)\s*$/, T = "transform", P = "transformOrigin", S = "translate", O = "rotate", j = "scale", F = "skew", H = "matrix"; x--;) _[x] in b && (t.support[T] = f = _[x], t.support[P] = f + "Origin");
        f || (t.support.matrixFilter = m = "" === b.filter), t.cssNumber[T] = t.cssNumber[P] = !0, f && f != T ? (t.cssProps[T] = f, t.cssProps[P] = f + "Origin", f == "Moz" + w ? g = {
            get: function(e, i) {
                return i ? t.css(e, f).split("px").join("") : e.style[f]
            },
            set: function(t, e) {
                t.style[f] = /matrix\([^)p]*\)/.test(e) ? e.replace(/matrix((?:[^,]*,){4})([^,]*),([^)]*)/, H + "$1$2px,$3px") : e
            }
        } : /^1\.[0-5](?:\.|$)/.test(t.fn.jquery) && (g = {
            get: function(e, i) {
                return i ? t.css(e, f.replace(/^ms/, "Ms")) : e.style[f]
            }
        })) : m && (g = {
            get: function(e, i, s) {
                var o, a, r = i && e.currentStyle ? e.currentStyle : e.style;
                return r && C.test(r.filter) ? (o = RegExp.$1.split(","), o = [o[0].split("=")[1], o[2].split("=")[1], o[1].split("=")[1], o[3].split("=")[1]]) : o = [1, 0, 0, 1], t.cssHooks[P] ? (a = t._data(e, "transformTranslate", n), o[4] = a ? a[0] : 0, o[5] = a ? a[1] : 0) : (o[4] = r ? parseInt(r.left, 10) || 0 : 0, o[5] = r ? parseInt(r.top, 10) || 0 : 0), s ? o : H + "(" + o + ")"
            },
            set: function(e, i, s) {
                var n, a, r, h, l = e.style;
                s || (l.zoom = 1), i = o(i), a = ["Matrix(M11=" + i[0], "M12=" + i[2], "M21=" + i[1], "M22=" + i[3], "SizingMethod='auto expand'"].join(), r = (n = e.currentStyle) && n.filter || l.filter || "", l.filter = C.test(r) ? r.replace(C, a) : r + " progid:DXImageTransform.Microsoft." + a + ")", t.cssHooks[P] ? t.cssHooks[P].set(e, i) : ((h = t.transform.centerOrigin) && (l["margin" == h ? "marginLeft" : "left"] = -(e.offsetWidth / 2) + e.clientWidth / 2 + "px", l["margin" == h ? "marginTop" : "top"] = -(e.offsetHeight / 2) + e.clientHeight / 2 + "px"), l.left = i[4] + "px", l.top = i[5] + "px")
            }
        }), g && (t.cssHooks[T] = g), v = g && g.get || t.css, t.fx.step.transform = function(e) {
            var i, n, o, a, h = e.elem,
                l = e.start,
                c = e.end,
                d = e.pos,
                p = "",
                u = 1e5;
            for (l && "string" != typeof l || (l || (l = v(h, f)), m && (h.style.zoom = 1), c = c.split("+=").join(l), t.extend(e, r(l, c)), l = e.start, c = e.end), i = l.length; i--;) switch (n = l[i], o = c[i], a = 0, n[0]) {
                case S:
                    a = "px";
                case j:
                    a || (a = ""), p = n[0] + "(" + s.round((n[1][0] + (o[1][0] - n[1][0]) * d) * u) / u + a + "," + s.round((n[1][1] + (o[1][1] - n[1][1]) * d) * u) / u + a + ")" + p;
                    break;
                case F + "X":
                case F + "Y":
                case O:
                    p = n[0] + "(" + s.round((n[1] + (o[1] - n[1]) * d) * u) / u + "rad)" + p
            }
            e.origin && (p = e.origin + p), g && g.set ? g.set(h, p, 1) : h.style[f] = p
        }, t.transform = {
            centerOrigin: "margin"
        }
    }(jQuery, window, document, Math),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
    }(function(t) {
        function e(e) {
            var a = e || window.event,
                r = h.call(arguments, 1),
                l = 0,
                d = 0,
                p = 0,
                u = 0,
                f = 0,
                m = 0;
            if (e = t.event.fix(a), e.type = "mousewheel", "detail" in a && (p = -1 * a.detail), "wheelDelta" in a && (p = a.wheelDelta), "wheelDeltaY" in a && (p = a.wheelDeltaY), "wheelDeltaX" in a && (d = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (d = -1 * p, p = 0), l = 0 === p ? d : p, "deltaY" in a && (p = -1 * a.deltaY, l = p), "deltaX" in a && (d = a.deltaX, 0 === p && (l = -1 * d)), 0 !== p || 0 !== d) {
                if (1 === a.deltaMode) {
                    var g = t.data(this, "mousewheel-line-height");
                    l *= g, p *= g, d *= g
                } else if (2 === a.deltaMode) {
                    var v = t.data(this, "mousewheel-page-height");
                    l *= v, p *= v, d *= v
                }
                if (u = Math.max(Math.abs(p), Math.abs(d)), (!o || o > u) && (o = u, s(a, u) && (o /= 40)), s(a, u) && (l /= 40, d /= 40, p /= 40), l = Math[l >= 1 ? "floor" : "ceil"](l / o), d = Math[d >= 1 ? "floor" : "ceil"](d / o), p = Math[p >= 1 ? "floor" : "ceil"](p / o), c.settings.normalizeOffset && this.getBoundingClientRect) {
                    var y = this.getBoundingClientRect();
                    f = e.clientX - y.left, m = e.clientY - y.top
                }
                return e.deltaX = d, e.deltaY = p, e.deltaFactor = o, e.offsetX = f, e.offsetY = m, e.deltaMode = 0, r.unshift(e, l, d, p), n && clearTimeout(n), n = setTimeout(i, 200), (t.event.dispatch || t.event.handle).apply(this, r)
            }
        }

        function i() {
            o = null
        }

        function s(t, e) {
            return c.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 === 0
        }
        var n, o, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            r = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            h = Array.prototype.slice;
        if (t.event.fixHooks)
            for (var l = a.length; l;) t.event.fixHooks[a[--l]] = t.event.mouseHooks;
        var c = t.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var i = r.length; i;) this.addEventListener(r[--i], e, !1);
                else this.onmousewheel = e;
                t.data(this, "mousewheel-line-height", c.getLineHeight(this)), t.data(this, "mousewheel-page-height", c.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var i = r.length; i;) this.removeEventListener(r[--i], e, !1);
                else this.onmousewheel = null;
                t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(e) {
                var i = t(e),
                    s = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
                return s.length || (s = t("body")), parseInt(s.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
            },
            getPageHeight: function(e) {
                return t(e).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };
        t.fn.extend({
            mousewheel: function(t) {
                return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
            },
            unmousewheel: function(t) {
                return this.unbind("mousewheel", t)
            }
        })
    }), ! function() {
        function t(t, s, n) {
            if (t)
                for (var o in t) s[o] = "function" == typeof t[o] && "function" == typeof n[o] && i.test(t[o]) ? e(t[o], n[o]) : t[o]
        }

        function e(t, e) {
            return function() {
                var i = this._super;
                this._super = e;
                try {
                    return t.apply(this, arguments)
                } finally {
                    this._super = i
                }
            }
        }
        window.Class = function() {}, Class.extend = function(e, i) {
            function s() {
                this.init && this.init.apply(this, arguments)
            }
            var n = [];
            "[object Array]" == {}.toString.apply(arguments[0]) && (n = arguments[0], e = arguments[1], i = arguments[2]), s.prototype = Class.inherit(this.prototype), s.prototype.constructor = s, s.extend = Class.extend, t(i, s, this);
            for (var o = 0; o < n.length; o++) t(n[o], s.prototype, this.prototype);
            return t(e, s.prototype, this.prototype), s
        };
        var i = /xyz/.test(function() {
            xyz
        }) ? /\b_super\b/ : /./;
        Class.inherit = Object.create || function(t) {
            function e() {}
            return e.prototype = t, new e
        }
    }();
var _un_ = "undefined",
    _fn_ = "function";
window.YT_ready = function() {
    var t = [],
        e = !1;
    return function(i, s) {
        if (i === !0)
            for (e = !0; t.length;) t.shift()();
        else "function" == typeof i && (e ? i() : t[s ? "unshift" : "push"](i))
    }
}();
var tt = window.tt = {
    is: {},
    init: function() {
        return this.detectSupport(), this.youtubeRequest(), this
    },
    detectSupport: function() {
        var t = navigator.userAgent || navigator.vendor || window.opera;
        t = t.toLowerCase(), this.is.mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)), this.is.chrome = window.chrome || t.indexOf("chrome") > -1, this.is.firefox = t.indexOf("firefox") > -1, this.is.safari = t.indexOf("safari") > -1, this.is.opera = t.indexOf("opera") > -1, this.is.msie = t.indexOf("msie") > -1, this.is.webkit = /webkit/.test(t), this.is.iphone = -1 != navigator.platform.indexOf("iPhone") || -1 != navigator.platform.indexOf("iPod"), this.is.ipad = -1 != navigator.platform.indexOf("iPad"), this.is.ios = this.is.iphone || this.is.ipad, this.is.nomouse = this.is.ios || this.is.mobile, this.is.mouse = !this.is.nomouse, this.is.click = this.is.mobile ? "touchend" : "click", this.is.mouseEvents = this.is.mobile ? "touchend" : "click mouseenter mouseleave"
    },
    clrGM: function(t) {
        var e = $(t);
        if (e.length && !e.attr("clr")) {
            for (var t = e[0], i = 0; i < t.childNodes.length; i++)
                if ("DIV" == t.childNodes[i].tagName)
                    for (var s = t.childNodes[i], n = 0, o = 0; o < s.childNodes.length; o++) "DIV" == s.childNodes[o].tagName && (n++, (2 == n || 3 == n || 6 == n || 7 == n) && (s.childNodes[o].style.display = "none"));
            e.attr("clr", 1)
        }
    },
    cancelEvent: function(t) {
        var e = t ? t : window.event;
        e.stopPropagation && e.stopPropagation(), null != e.cancelBubble && (e.cancelBubble = !0), e.preventDefault()
    },
    trackURI: function(t) {
        "undefined" != typeof _gaq && _gaq.push(["_trackPageview", t])
    },
    js: function(t) {
        var e = document.createElement("script");
        e.setAttribute("type", "text/javascript"), e.setAttribute("src", t), document.getElementsByTagName("head")[0].appendChild(e)
    },
    GMapCallback: [],
    GMapRequested: !1,
    GMapRequest: function(t) {
        if (this.GMapCallback.push(t), typeof google == _un_) {
            if (this.GMapRequested) return;
            this.js("https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&language=ru_RU&callback=tt.GMapLoaded"), this.GMapRequested = !0
        } else this.GMapLoaded()
    },
    GMapLoaded: function() {
        for (var t = 0; t < this.GMapCallback.length; t++) typeof this.GMapCallback[t] == _fn_ && this.GMapCallback[t]();
        this.GMapCallback = []
    },
    yotubeReady: !1,
    youtubeRequest: function(t) {
        var e = this;
        window.onYouTubePlayerAPIReady = function() {
            e.yotubeReady = !0, window.YT_ready(!0), "function" == typeof t && t()
        };
        var i = document.createElement("script");
        i.src = "https://www.youtube.com/player_api";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(i, s)
    },
    css: function(t) {
        var e = document.createElement("link");
        e.setAttribute("rel", "stylesheet"), e.setAttribute("type", "text/css"), e.setAttribute("src", t), document.getElementsByTagName("head")[0].appendChild(e)
    },
    checkAllFiles: function(t) {
        var e = $(t).attr("handle");
        if (e.length) {
            var i = !1,
                s = $("#" + e + "-gallery");
            if (s) {
                var n = s.find("input.cb-del");
                n.each(function() {
                    i || this.checked && (i = !0)
                }), n.each(i ? function() {
                    this.checked = !1
                } : function() {
                    this.checked = !0
                })
            }
        }
    },
    deleteCheckedFiles: function(t) {
        var e = $(t).attr("handle"),
            i = $(t).attr("url");
        if (e.length && i.length) {
            var s = $("#" + e + "-gallery");
            if (s) {
                var n = [];
                s.find(".cb-del").each(function() {
                    this.checked && n.push(this.value)
                }), n.length ? $.ajax({
                    url: i + "." + e + "-delete",
                    data: {
                        cmd: e + "-delete",
                        ids: n,
                        ajax: 1
                    },
                    type: "POST",
                    dataType: "json"
                }).done(function() {}).always(function() {
                    $.ajax({
                        url: i + "." + e + "-filegallery",
                        dataType: "json",
                        type: "GET",
                        data: {
                            ajax: 1
                        }
                    }).done(function(t) {
                        $("#" + e + "-container").html(t.html)
                    })
                }) : wnd.alert("Не выбрано ни одного файла для удаления")
            }
        }
    },
    setTouchEvent: function(t) {
        var e = t.touchSurface;
        $(e).bind("touchstart", function(i) {
            if (touchEvent = i.originalEvent, t.distanceX = 0, t.distanceY = 0, 1 != touchEvent.touches.length) return !1;
            var s = Math.round($(window).width() / 2),
                n = startTouchPosition = {
                    top: touchEvent.touches[0].clientY,
                    left: touchEvent.touches[0].clientX
                },
                o = (new Date).getTime();
            t.onStart && t.onStart(t), $(e).bind("touchmove", function(e) {
                return touchEvent = e.originalEvent, 1 != touchEvent.touches.length ? !1 : (n = {
                    top: touchEvent.touches[0].clientY,
                    left: touchEvent.touches[0].clientX
                }, t.prevDistanceX = t.distanceX, t.prevDistanceY = t.distanceY, t.distanceX = n.left - startTouchPosition.left, t.distanceY = n.top - startTouchPosition.top, t.movedX = t.distanceX - t.prevDistanceX, t.movedY = t.distanceY - t.prevDistanceY, void(t.onMove && t.onMove(t)))
            }), $(e).bind("touchend", function(i) {
                touchEvent = i.originalEvent;
                var a = (new Date).getTime();
                t.onEnd && (t.dTime = a - o, t.prevDistanceX = t.distanceX || 0, t.prevDistanceY = t.distanceY || 0, t.distanceX = n.left - startTouchPosition.left, t.distanceY = n.top - startTouchPosition.top, t.movedX = t.distanceX - t.prevDistanceX, t.movedY = t.distanceY - t.prevDistanceY, t.maxDTime = t.maxDTime || 1200, t.minDistanceX = t.minDistanceX || 100, t.minDistanceY = t.minDistanceY || 100, t.moved = !1, t.click = !1, t.clickWH = !1, t.dTime < t.maxDTime && (t.distanceX < -t.minDistanceX ? t.moved = "left" : t.distanceX > t.minDistanceX ? t.moved = "right" : t.distanceY < -t.minDistanceY ? t.moved = "up" : t.distanceY > t.minDistanceY ? t.moved = "down" : Math.abs(t.distanceY) < t.minDistanceY && Math.abs(t.distanceX) < t.minDistanceX && (t.clickWH = startTouchPosition.left > s ? 1 : -1)), t.onEnd(t)), $(e).unbind("touchmove"), $(e).unbind("touchend"), t.distanceX = 0, t.distanceY = 0
            })
        })
    },
    mp: {
        item: [],
        active: !1,
        init: function() {
            for (var t = this, e = $(".videoPlayer"), i = 0, s = e.length; s > i; i++) {
                var n = $(e[i]),
                    o = e[i].id,
                    a = null,
                    r = {
                        id: o,
                        type: 0,
                        obj: e[i],
                        ready: !1,
                        player: null
                    };
                n.hasClass("vimeoMarker") ? (r.type = "vimeo", a = $f(e[i]), a.addEvent("ready", function(e) {
                    t.item[e].ready = !0, t.item[e].player.addEvent("play", function(e) {
                        t.pauseActivePlayer(), t.active = e
                    })
                })) : n.hasClass("youtubeMarker") && (r.type = "youtube", a = new YT.Player(o, {
                    events: {
                        onStateChange: function(e) {
                            switch (e.data) {
                                case -1:
                                    t.item[e.target.a.id].ready = !0;
                                    break;
                                case 1:
                                    t.pauseActivePlayer(), t.active = e.target.a.id
                            }
                        }
                    }
                })), r.player = a, this.item[o] = r
            }
        },
        pausePlayer: function(t) {
            var e = this.item[t];
            switch (e.type) {
                case "vimeo":
                    e.player.api("pause");
                    break;
                case "youtube":
                    e.player.pauseVideo()
            }
        },
        pauseActivePlayer: function() {
            this.active && (this.pausePlayer(this.active), this.active = !1)
        },
        pauseAllPlayers: function() {
            for (var t in this.item) this.pausePlayer(t)
        }
    },
    __class: {
        instances: {},
        put: function(t, e) {
            typeof this.instances[t] == _un_ && (this.instances[t] = ["null"]);
            var i = this.instances[t].length;
            return this.instances[t].push(e), typeof e.element != _un_ && e.element.attr(t, i), i
        },
        get: function(t, e) {
            if (typeof this.instances[t] != _un_) {
                var i = parseInt($(e).attr(t));
                return typeof this.instances[t][i] != _un_ ? this.instances[t][i] : null
            }
            return !1
        },
        rm: function(t) {
            var e = t._id || !1,
                i = t._className;
            return e && i && typeof this.instances[i][e] != _un_ ? (this.instances[i][e] = null, !0) : !1
        }
    },
    translit: function(t, e, i) {
        typeof e == _un_ && (e = !0), typeof i == _un_ && (i = !0);
        var s, n = {
            src: [" ", "А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ь", "Ъ", "Ы", "Э", "Ю", "Я", "а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ь", "ъ", "ы", "э", "ю", "я", "'", '"', "`", "«", "»", "‘", "’", "“", "”", ":", "/"],
            trg: ["-", "a", "b", "v", "g", "d", "e", "yo", "zh", "z", "i", "y", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "f", "kh", "c", "ch", "sh", "sh", "", "", "i", "e", "u", "ya", "a", "b", "v", "g", "d", "e", "yo", "zh", "z", "i", "y", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "f", "kh", "c", "ch", "sh", "sh", "y", "", "i", "e", "u", "ya", "", "", "", "", "", "", "", "", "", "", ""],
            remove: ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", ":", ";", "'", '"', ".", ",", "|", "/", "\\", "?", "<", ">", "{", "}", "=", "+"]
        };
        t = t.replace(/\?/g, ""), t = t.replace(/\!/g, "");
        for (var o = 0; o < n.src.length; o++) s = new RegExp(n.src[o], "g"), t = t.replace(s, n.trg[o]);
        if (i && (s = new RegExp("<[^>]*>", "g"), t = t.replace(s, "")), e)
            for (var o = 0; o < n.remove.length; o++) s = new RegExp("\\" + n.remove[o], "g"), t = t.replace(s, "");
        return t
    },
    mailtest: function(t) {
        var e = /^[a-zA-Z0-9\.\-_]{1,}\@([a-zA-Z0-9\-_]{1,}\.){1,2}[a-zA-Z]{2,4}$/.test(t);
        return e ? t : !1
    }
}.init();
! function(t) {
    t.caretTo = function(t, e) {
        if (t.createTextRange) {
            var i = t.createTextRange();
            i.move("character", e), i.select()
        } else null != t.selectionStart && (t.focus(), t.setSelectionRange(e, e))
    }, t.fn.caretTo = function(e, i) {
        return this.queue(function(s) {
            if (isNaN(e)) {
                var n = t(this).val().indexOf(e);
                i === !0 ? n += e.length : i && (n += i), t.caretTo(this, n)
            } else t.caretTo(this, e);
            s()
        })
    }, t.fn.caretToStart = function() {
        return this.caretTo(0)
    }, t.fn.caretToEnd = function() {
        return this.queue(function(e) {
            t.caretTo(this, t(this).val().length), e()
        })
    }
}(jQuery);
var __slice = Array.prototype.slice,
    BaseClass = Class.extend({
        __className: "BaseClass",
        setOption: function(t, e) {
            "element" == t ? this.element = e : "_" == t.substr(0, 1) && (t = t.substr(1), this[t] = e), this.opt[t] = e
        },
        setOptions: function(t) {
            if ("undefined" != typeof t)
                for (var e in t) this.setOption(e, t[e])
        },
        put: function() {
            return !this.element || this.element.attr(this.__className) ? !1 : (this._id = tt.__class.put(this.__className, this), this._id)
        },
        rm: function() {
            return tt.__class.rm(this)
        },
        find: function(t, e) {
            var i = t.find(e);
            return i.length ? i : !1
        },
        cancelEvent: function(t) {
            typeof t.preventDefault != _un_ && t.preventDefault(t), typeof t.stopPropagation != _un_ && t.stopPropagation(t)
        },
        reposObject: function(t, e) {
            var i = t.obj;
            e && (e.ww && (t.ww = e.ww), e.wh && (t.wh = e.wh)), typeof t.posmode == _un_ && (t.posmode = !1), typeof t.resizeMode == _un_ && (t.resizeMode = !1);
            var s = t.width,
                n = t.height,
                o = t.ww,
                a = t.wh,
                r = o,
                h = Math.round(r / s * n),
                l = Math.round((a - h) / 2),
                c = 0;
            switch (t.posmode) {
                case "top":
                    l = 0;
                    break;
                case "bottom":
                    l = a - h
            }(!t.resizeMode && a > h || t.resizeMode && h > a) && (h = a, r = Math.round(h / n * s), l = 0, c = Math.round((o - r) / 2)), t.cw = r, t.ch = h, i.css({
                position: "absolute",
                width: r,
                height: h,
                top: l,
                left: c
            })
        },
        isScrolledIntoView: function(t, e) {
            typeof e == _un_ && (e = 10);
            var i = $(window).scrollTop(),
                s = i + $(window).height(),
                n = $(t).offset().top,
                o = n + e;
            return s >= o && n >= i
        },
        rangeprc: function(t, e, i) {
            var s = 0,
                n = i - e;
            return t > e ? (t -= e, t > n && (t = n), s = t / n) : s = 0, s
        },
        _div: function(t, e, i) {
            typeof t == _un_ && (t = !1), typeof e == _un_ && (e = !1), typeof i == _un_ && (i = {});
            var s = $("<div></div>", i);
            return t && s.addClass(t), e && s.css(e), s
        },
        dumpObj: function(t) {
            if (window.console)
                for (var e in t) console.log(e + " = " + t[e])
        },
        ajaxFailFunction: function(t) {
            alert(t.responseText)
        },
        ajaxCheckStatus: function(t, e, i, s, n) {
            return t.status > 0 ? (alert(t.msg), typeof s == _fn_ && s(t, e, i), !1) : (typeof n == _fn_ && n(t, e, i), !0)
        },
        switchOpacity: function(t, e, i, s, n) {
            typeof s == _un_ && (s = 400), typeof n == _un_ && (n = "swing"), e ? t.css({
                opacity: 0,
                display: "block"
            }).animate({
                opacity: 1
            }, s, n, function() {
                typeof i == _fn_ && i()
            }) : t.animate({
                opacity: 0
            }).animate({
                opacity: 0
            }, s, n, function() {
                $(this).css({
                    display: "none"
                }), typeof i == _fn_ && i()
            })
        },
        addSourceToVideo: function(t, e, i) {
            var s = document.createElement("source");
            s.src = e, s.type = i, t.appendChild(s)
        },
        progressHandler: function(t, e, i) {
            try {
                if (e.duration) {
                    var s = e.buffered.end(0) / e.duration * 100;
                    return Math.floor(s) <= i && e.currentTime++, s
                }
            } catch (t) {}
            return 0
        },
        castLoader: function(t) {
            typeof t == _un_ && (t = 60);
            var e = $("<div><div>").addClass("Loader").css({
                width: t,
                hegiht: t
            });
            return $("<div></div>").addClass("r1").appendTo(e), $("<div></div>").addClass("r2").appendTo(e), e
        },
        querySelectorAll: function(t, e) {
            return __slice.call(e ? e.querySelectorAll(t) : document.querySelectorAll(t))
        },
        bindEvent: function(t, e, i) {
            e = e.split(" ");
            for (var s = 0; s < e.length; s++) t.addEventListener ? t.addEventListener(e[s], i, !1) : t.attachEvent("on" + e[s], i)
        },
        unbindEvent: function(t, e, i) {
            e = e.split(" ");
            for (var s = 0; s < e.length; s++) t.removeEventListener ? t.removeEventListener(e[s], i, !1) : t.detachEvent("on" + e[s], i)
        },
        hasClass: function(t, e) {
            return -1 === t.className.indexOf(e) ? !1 : !0
        },
        addClass: function(t, e) {
            this.hasClass(t, e) || (t.className += " " + e)
        },
        removeClass: function(t, e, i) {
            if ("undefined" == typeof i && (i = !0), this.hasClass(t, e))
                if (i) {
                    for (var s = [], n = t.className.split(" "), o = 0; o < n.length; o++) n[o].length && n[o] != e && s.push(n[o]);
                    t.className = s.join(" ")
                } else t.className = t.className.replace(e, "")
        },
        css: function(t, e) {
            var i, s;
            for (i in e) {
                switch (s = e[i], i) {
                    case "top":
                    case "left":
                    case "right":
                    case "bottom":
                    case "width":
                    case "height":
                        s += "px"
                }
                t.style[i] = s
            }
        },
        getCookie: function(t) {
            var e = document.cookie.match(new RegExp("(?:^|; )" + t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
            return e ? decodeURIComponent(e[1]) : void 0
        },
        setCookie: function(t, e, i) {
            i = i || {};
            var s = i.expires;
            if ("number" == typeof s && s) {
                var n = new Date;
                n.setTime(n.getTime() + 1e3 * s), s = i.expires = n
            }
            s && s.toUTCString && (i.expires = s.toUTCString()), e = encodeURIComponent(e);
            var o = t + "=" + e;
            for (var a in i) {
                o += "; " + a;
                var r = i[a];
                r !== !0 && (o += "=" + r)
            }
            document.cookie = o
        },
        deleteCookie: function(t) {
            this.setCookie(t, null, {
                expires: -1
            })
        }
    }),
    VideoPlayer = BaseClass.extend({
        __className: "VideoPlayer",
        init: function(t) {
            this._id = !1, this.inited = !1, this.externalResize = !1, this.iframe = !1, this.player_id = !1, this.player = !1, this.type = !1, this.ready = !1, this.loading = !1, this.playing = !1, this.active = !1, this.loader = !1, this.onReady = !1, this.videoWidth = !1, this.videoHeight = !1, this.width = 0, this.height = 0, this.element = !1, this.opt = {}, this.setOptions(t), this.create()
        },
        create: function() {
            var t = this;
            if (window.tt.yotubeReady) this.initVideoPlayer();
            else var e = setInterval(function() {
                window.tt.yotubeReady && (t.initVideoPlayer(), clearInterval(e), e = null)
            }, 100);
            this.getIFrame(), this._inited = !0
        },
        initVideoPlayer: function() {
            var t = this;
            if (this.player = null, this.autoplay = parseInt(this.element.getAttribute("autoplay")) || 0, this.poster = this.element.querySelector(".poster"), this.posterImage = !1, this.poster, this.playButton = this.element.querySelector(".play"), this.playButton && this.playButton.css({
                    opacity: 0
                }), this.hasClass(this.element, "vimeoMarker")) {
                if (!this.getIFrame()) return !1;
                this.type = "vimeo", this.player = $f(this.iframe[0]), this.player.addEvent("ready", function() {
                    t.imready(), t.player.api("pause"), t.player.addEvent("play", function() {
                        t.implaying()
                    }), t.player.addEvent("pause", function() {
                        t.impaused()
                    }), t.player.addEvent("finish", function() {
                        t.imstopped()
                    })
                })
            } else if (this.hasClass(this.element, "youtubeMarker")) {
                if (!this.getIFrame()) return !1;
                this.type = "youtube";
                var e = {
                    playerVars: {
                        showinfo: 0,
                        controls: 1,
                        modestbranding: 0,
                        wmode: "opaque"
                    },
                    events: {
                        onReady: function() {
                            t.imready()
                        },
                        onStateChange: function(e) {
                            switch (e.data) {
                                case 0:
                                    t.imstopped();
                                    break;
                                case 1:
                                    t.implaying();
                                    break;
                                case 2:
                                    t.impaused();
                                    break;
                                case 5:
                                    t.buffering()
                            }
                        }
                    }
                };
                e.videoId = this.iframe.getAttribute("video-id"), e.width = this.width ? this.width : "100%", e.height = this.height ? this.height : "100%", this.player = new YT.Player(this.player_id, e)
            } else if (this.element.querySelector(".html5video") && (this.type = "html5video", this.player = this.find(this.element, "video"), this.player)) {
                var i = this.player.getAttribute("id");
                this.player_id = i, this.videoWidth = parseInt(this.player.getAttribute("width") || 0), this.videoHeight = parseInt(this.player.getAttribute("height") || 0), this.player.bind("ended", function() {
                    t.stopped()
                })
            }
        },
        getIFrame: function() {
            if (this.iframe = this.element.querySelector("iframe"), !this.iframe && (this.iframe = this.element.querySelector(".iframe"), !this.iframe)) return !1;
            var t = this.iframe.getAttribute("id");
            return this.player_id = t, this.videoWidth = parseInt(this.iframe.getAttribute("width") || this.element.getAttribute("data-width") || 0), this.videoHeight = parseInt(this.iframe.getAttribute("height") || this.element.getAttribute("data-height") || 0), !0
        },
        toggleVideo: function() {
            return this.play()
        },
        play: function() {
            if (this.active) return !1;
            switch (this.playButton && this.css(this.playButton, {
                display: "none"
            }), this.poster && this.css(this.poster, {
                display: "none"
            }), this.type) {
                case "html5video":
                    this.player.play();
                    break;
                case "vimeo":
                    this.player.api("play");
                    break;
                case "youtube":
                    this.player.playVideo();
                    break;
                default:
                    return
            }
            return this.activate()
        },
        pause: function() {
            if (!this.active) return !1;
            switch (this.playButton && this.css(this.playButton, {
                display: "block"
            }), this.poster && this.css(this.poster, {
                display: "block"
            }), this.type) {
                case "html5video":
                    this.player.pause();
                    break;
                case "vimeo":
                    this.player.api("pause");
                    break;
                case "youtube":
                    this.player.pauseVideo();
                    break;
                default:
                    return
            }
            return this.deactivate()
        },
        imready: function() {
            this.loader && this.loader.stop();
            var t = this;
            this.playButton && (this.css(this.playButton, {
                opacity: 1
            }), this.bindEvent(this.playButton, "click", function() {
                t.toggleVideo()
            })), this.css(this.iframe, {
                opacity: 1
            }), this.resize(), this.bindEvent(window, "resize", function() {
                t.resize()
            }), this.ready = !0, this.autoplay && window.innerWidth > 900 && this.play(), "function" == typeof this.onReady && this.onReady()
        },
        implaying: function() {
            switch (this.type) {
                case "html5video":
                    break;
                case "vimeo":
                    break;
                case "youtube":
                    break;
                default:
                    return
            }
            return this.activate()
        },
        impaused: function() {
            switch (this.type) {
                case "html5video":
                    break;
                case "vimeo":
                    break;
                case "youtube":
                    break;
                default:
                    return
            }
            return this.deactivate()
        },
        imstopped: function() {
            switch (this.type) {
                case "html5video":
                    this.player.load();
                    break;
                case "vimeo":
                    break;
                case "youtube":
            }
            return this.deactivate()
        },
        imbuffering: function() {},
        activate: function() {
            return this.active ? !1 : (this.delegate && this.delegate.videoActivated && this.delegate.videoActivated(this), this.active = !0, !0)
        },
        deactivate: function() {
            return this.active ? (this.delegate && this.delegate.videoDeactivated && this.delegate.videoDeactivated(this), this.active = !1, !0) : !1
        },
        getWidthPadding: function() {
            return window.innerWidth >= 1440 ? 190 : window.innerWidth >= 1280 ? 160 : 130
        },
        getHeightPadding: function() {
            return window.innerWidth >= 1440 ? 115 : window.innerWidth >= 1280 ? 100 : 120
        },
        resize: function(t, e) {
            this.element.parentNode.getBoundingClientRect();
            if (!this.externalResize || t && e) {
                t = t || window.innerWidth - 2 * this.getWidthPadding(), e = e || window.innerHeight - 2 * this.getHeightPadding();
                var i = t,
                    s = e;
                switch (this.videoWidth && this.videoHeight && (s = Math.round(i / this.videoWidth * this.videoHeight), e && s > e && (s = e, i = Math.round(s / this.videoHeight * this.videoWidth))), this.css(this.element, {
                    width: i,
                    height: s
                }), this.width = i, this.height = s, this.posterImage && this.posterImage.resize(this.width, this.height), this.type) {
                    case "html5video":
                        this.player && this.css(this.player, {
                            width: this.width,
                            height: this.height
                        });
                        break;
                    case "youtube":
                        this.player && this.player.setSize(this.width, this.height);
                    case "vimeo":
                        this.iframe && this.css(this.iframe, {
                            width: this.width,
                            height: this.height
                        })
                }
                return {
                    width: this.width,
                    height: this.height
                }
            }
        },
        remove: function() {
            this.rm()
        }
    });
window.Modernizr = function(t, e, i) {
        function s(t) {
            b.cssText = t
        }

        function n(t, e) {
            return s(k.join(t + ";") + (e || ""))
        }

        function o(t, e) {
            return typeof t === e
        }

        function a(t, e) {
            return !!~("" + t).indexOf(e)
        }

        function r(t, e) {
            for (var s in t) {
                var n = t[s];
                if (!a(n, "-") && b[n] !== i) return "pfx" == e ? n : !0
            }
            return !1
        }

        function h(t, e, s) {
            for (var n in t) {
                var a = e[t[n]];
                if (a !== i) return s === !1 ? t[n] : o(a, "function") ? a.bind(s || e) : a
            }
            return !1
        }

        function l(t, e, i) {
            var s = t.charAt(0).toUpperCase() + t.slice(1),
                n = (t + " " + M.join(s + " ") + s).split(" ");
            return o(e, "string") || o(e, "undefined") ? r(n, e) : (n = (t + " " + T.join(s + " ") + s).split(" "), h(n, e, i))
        }

        function c() {
            f.input = function(i) {
                for (var s = 0, n = i.length; n > s; s++) j[i[s]] = !!(i[s] in w);
                return j.list && (j.list = !(!e.createElement("datalist") || !t.HTMLDataListElement)), j
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), f.inputtypes = function(t) {
                for (var s, n, o, a = 0, r = t.length; r > a; a++) w.setAttribute("type", n = t[a]), s = "text" !== w.type, s && (w.value = _, w.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(n) && w.style.WebkitAppearance !== i ? (g.appendChild(w), o = e.defaultView, s = o.getComputedStyle && "textfield" !== o.getComputedStyle(w, null).WebkitAppearance && 0 !== w.offsetHeight, g.removeChild(w)) : /^(search|tel)$/.test(n) || (s = /^(url|email)$/.test(n) ? w.checkValidity && w.checkValidity() === !1 : w.value != _)), O[t[a]] = !!s;
                return O
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var d, p, u = "2.8.2",
            f = {},
            m = !0,
            g = e.documentElement,
            v = "modernizr",
            y = e.createElement(v),
            b = y.style,
            w = e.createElement("input"),
            _ = ":)",
            x = {}.toString,
            k = " -webkit- -moz- -o- -ms- ".split(" "),
            C = "Webkit Moz O ms",
            M = C.split(" "),
            T = C.toLowerCase().split(" "),
            P = {
                svg: "http://www.w3.org/2000/svg"
            },
            S = {},
            O = {},
            j = {},
            F = [],
            H = F.slice,
            B = function(t, i, s, n) {
                var o, a, r, h, l = e.createElement("div"),
                    c = e.body,
                    d = c || e.createElement("body");
                if (parseInt(s, 10))
                    for (; s--;) r = e.createElement("div"), r.id = n ? n[s] : v + (s + 1), l.appendChild(r);
                return o = ["&#173;", '<style id="s', v, '">', t, "</style>"].join(""), l.id = v, (c ? l : d).innerHTML += o, d.appendChild(l), c || (d.style.background = "", d.style.overflow = "hidden", h = g.style.overflow, g.style.overflow = "hidden", g.appendChild(d)), a = i(l, t), c ? l.parentNode.removeChild(l) : (d.parentNode.removeChild(d), g.style.overflow = h), !!a
            },
            I = function(e) {
                var i = t.matchMedia || t.msMatchMedia;
                if (i) return i(e) && i(e).matches || !1;
                var s;
                return B("@media " + e + " { #" + v + " { position: absolute; } }", function(e) {
                    s = "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
                }), s
            },
            N = function() {
                function t(t, n) {
                    n = n || e.createElement(s[t] || "div"), t = "on" + t;
                    var a = t in n;
                    return a || (n.setAttribute || (n = e.createElement("div")), n.setAttribute && n.removeAttribute && (n.setAttribute(t, ""), a = o(n[t], "function"), o(n[t], "undefined") || (n[t] = i), n.removeAttribute(t))), n = null, a
                }
                var s = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return t
            }(),
            E = {}.hasOwnProperty;
        p = o(E, "undefined") || o(E.call, "undefined") ? function(t, e) {
            return e in t && o(t.constructor.prototype[e], "undefined")
        } : function(t, e) {
            return E.call(t, e)
        }, Function.prototype.bind || (Function.prototype.bind = function(t) {
            var e = this;
            if ("function" != typeof e) throw new TypeError;
            var i = H.call(arguments, 1),
                s = function() {
                    if (this instanceof s) {
                        var n = function() {};
                        n.prototype = e.prototype;
                        var o = new n,
                            a = e.apply(o, i.concat(H.call(arguments)));
                        return Object(a) === a ? a : o
                    }
                    return e.apply(t, i.concat(H.call(arguments)))
                };
            return s
        }), S.flexbox = function() {
            return l("flexWrap")
        }, S.flexboxlegacy = function() {
            return l("boxDirection")
        }, S.canvas = function() {
            var t = e.createElement("canvas");
            return !(!t.getContext || !t.getContext("2d"))
        }, S.canvastext = function() {
            return !(!f.canvas || !o(e.createElement("canvas").getContext("2d").fillText, "function"))
        }, S.webgl = function() {
            return !!t.WebGLRenderingContext
        }, S.touch = function() {
            var i;
            return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? i = !0 : B(["@media (", k.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
                i = 9 === t.offsetTop
            }), i
        }, S.geolocation = function() {
            return "geolocation" in navigator
        }, S.postmessage = function() {
            return !!t.postMessage
        }, S.websqldatabase = function() {
            return !!t.openDatabase
        }, S.indexedDB = function() {
            return !!l("indexedDB", t)
        }, S.hashchange = function() {
            return N("hashchange", t) && (e.documentMode === i || e.documentMode > 7)
        }, S.history = function() {
            return !(!t.history || !history.pushState)
        }, S.draganddrop = function() {
            var t = e.createElement("div");
            return "draggable" in t || "ondragstart" in t && "ondrop" in t
        }, S.websockets = function() {
            return "WebSocket" in t || "MozWebSocket" in t
        }, S.rgba = function() {
            return s("background-color:rgba(150,255,150,.5)"), a(b.backgroundColor, "rgba")
        }, S.hsla = function() {
            return s("background-color:hsla(120,40%,100%,.5)"), a(b.backgroundColor, "rgba") || a(b.backgroundColor, "hsla")
        }, S.multiplebgs = function() {
            return s("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
        }, S.backgroundsize = function() {
            return l("backgroundSize")
        }, S.borderimage = function() {
            return l("borderImage")
        }, S.borderradius = function() {
            return l("borderRadius")
        }, S.boxshadow = function() {
            return l("boxShadow")
        }, S.textshadow = function() {
            return "" === e.createElement("div").style.textShadow
        }, S.opacity = function() {
            return n("opacity:.55"), /^0.55$/.test(b.opacity)
        }, S.cssanimations = function() {
            return l("animationName")
        }, S.csscolumns = function() {
            return l("columnCount")
        }, S.cssgradients = function() {
            var t = "background-image:",
                e = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                i = "linear-gradient(left top,#9f9, white);";
            return s((t + "-webkit- ".split(" ").join(e + t) + k.join(i + t)).slice(0, -t.length)), a(b.backgroundImage, "gradient")
        }, S.cssreflections = function() {
            return l("boxReflect")
        }, S.csstransforms = function() {
            return !!l("transform")
        }, S.csstransforms3d = function() {
            var t = !!l("perspective");
            return t && "webkitPerspective" in g.style && B("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e) {
                t = 9 === e.offsetLeft && 3 === e.offsetHeight
            }), t
        }, S.csstransitions = function() {
            return l("transition")
        }, S.fontface = function() {
            var t;
            return B('@font-face {font-family:"font";src:url("https://")}', function(i, s) {
                var n = e.getElementById("smodernizr"),
                    o = n.sheet || n.styleSheet,
                    a = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
                t = /src/i.test(a) && 0 === a.indexOf(s.split(" ")[0])
            }), t
        }, S.generatedcontent = function() {
            var t;
            return B(["#", v, "{font:0/0 a}#", v, ':after{content:"', _, '";visibility:hidden;font:3px/1 a}'].join(""), function(e) {
                t = e.offsetHeight >= 3
            }), t
        }, S.video = function() {
            var t = e.createElement("video"),
                i = !1;
            try {
                (i = !!t.canPlayType) && (i = new Boolean(i), i.ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), i.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), i.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (s) {}
            return i
        }, S.audio = function() {
            var t = e.createElement("audio"),
                i = !1;
            try {
                (i = !!t.canPlayType) && (i = new Boolean(i), i.ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), i.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), i.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), i.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (s) {}
            return i
        }, S.localstorage = function() {
            try {
                return localStorage.setItem(v, v), localStorage.removeItem(v), !0
            } catch (t) {
                return !1
            }
        }, S.sessionstorage = function() {
            try {
                return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
            } catch (t) {
                return !1
            }
        }, S.webworkers = function() {
            return !!t.Worker
        }, S.applicationcache = function() {
            return !!t.applicationCache
        }, S.svg = function() {
            return !!e.createElementNS && !!e.createElementNS(P.svg, "svg").createSVGRect
        }, S.inlinesvg = function() {
            var t = e.createElement("div");
            return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == P.svg
        }, S.smil = function() {
            return !!e.createElementNS && /SVGAnimate/.test(x.call(e.createElementNS(P.svg, "animate")))
        }, S.svgclippaths = function() {
            return !!e.createElementNS && /SVGClipPath/.test(x.call(e.createElementNS(P.svg, "clipPath")))
        };
        for (var $ in S) p(S, $) && (d = $.toLowerCase(), f[d] = S[$](), F.push((f[d] ? "" : "no-") + d));
        return f.input || c(), f.addTest = function(t, e) {
                if ("object" == typeof t)
                    for (var s in t) p(t, s) && f.addTest(s, t[s]);
                else {
                    if (t = t.toLowerCase(), f[t] !== i) return f;
                    e = "function" == typeof e ? e() : e, "undefined" != typeof m && m && (g.className += " " + (e ? "" : "no-") + t), f[t] = e
                }
                return f
            }, s(""), y = w = null,
            function(t, e) {
                function i(t, e) {
                    var i = t.createElement("p"),
                        s = t.getElementsByTagName("head")[0] || t.documentElement;
                    return i.innerHTML = "x<style>" + e + "</style>", s.insertBefore(i.lastChild, s.firstChild)
                }

                function s() {
                    var t = y.elements;
                    return "string" == typeof t ? t.split(" ") : t
                }

                function n(t) {
                    var e = v[t[m]];
                    return e || (e = {}, g++, t[m] = g, v[g] = e), e
                }

                function o(t, i, s) {
                    if (i || (i = e), c) return i.createElement(t);
                    s || (s = n(i));
                    var o;
                    return o = s.cache[t] ? s.cache[t].cloneNode() : f.test(t) ? (s.cache[t] = s.createElem(t)).cloneNode() : s.createElem(t), !o.canHaveChildren || u.test(t) || o.tagUrn ? o : s.frag.appendChild(o)
                }

                function a(t, i) {
                    if (t || (t = e), c) return t.createDocumentFragment();
                    i = i || n(t);
                    for (var o = i.frag.cloneNode(), a = 0, r = s(), h = r.length; h > a; a++) o.createElement(r[a]);
                    return o
                }

                function r(t, e) {
                    e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function(i) {
                        return y.shivMethods ? o(i, t, e) : e.createElem(i)
                    }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + s().join().replace(/[\w\-]+/g, function(t) {
                        return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                    }) + ");return n}")(y, e.frag)
                }

                function h(t) {
                    t || (t = e);
                    var s = n(t);
                    return !y.shivCSS || l || s.hasCSS || (s.hasCSS = !!i(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), c || r(t, s), t
                }
                var l, c, d = "3.7.0",
                    p = t.html5 || {},
                    u = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    m = "_html5shiv",
                    g = 0,
                    v = {};
                ! function() {
                    try {
                        var t = e.createElement("a");
                        t.innerHTML = "<xyz></xyz>", l = "hidden" in t, c = 1 == t.childNodes.length || function() {
                            e.createElement("a");
                            var t = e.createDocumentFragment();
                            return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
                        }()
                    } catch (i) {
                        l = !0, c = !0
                    }
                }();
                var y = {
                    elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: d,
                    shivCSS: p.shivCSS !== !1,
                    supportsUnknownElements: c,
                    shivMethods: p.shivMethods !== !1,
                    type: "default",
                    shivDocument: h,
                    createElement: o,
                    createDocumentFragment: a
                };
                t.html5 = y, h(e)
            }(this, e), f._version = u, f._prefixes = k, f._domPrefixes = T, f._cssomPrefixes = M, f.mq = I, f.hasEvent = N, f.testProp = function(t) {
                return r([t])
            }, f.testAllProps = l, f.testStyles = B, f.prefixed = function(t, e, i) {
                return e ? l(t, e, i) : l(t, "pfx")
            }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + F.join(" ") : ""), f
    }(this, this.document),
    function(t, e, i) {
        function s(t) {
            return "[object Function]" == g.call(t)
        }

        function n(t) {
            return "string" == typeof t
        }

        function o() {}

        function a(t) {
            return !t || "loaded" == t || "complete" == t || "uninitialized" == t
        }

        function r() {
            var t = v.shift();
            y = 1, t ? t.t ? f(function() {
                ("c" == t.t ? p.injectCss : p.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
            }, 0) : (t(), r()) : y = 0
        }

        function h(t, i, s, n, o, h, l) {
            function c(e) {
                if (!u && a(d.readyState) && (b.r = u = 1, !y && r(), d.onload = d.onreadystatechange = null, e)) {
                    "img" != t && f(function() {
                        _.removeChild(d)
                    }, 50);
                    for (var s in T[i]) T[i].hasOwnProperty(s) && T[i][s].onload()
                }
            }
            var l = l || p.errorTimeout,
                d = e.createElement(t),
                u = 0,
                g = 0,
                b = {
                    t: s,
                    s: i,
                    e: o,
                    a: h,
                    x: l
                };
            1 === T[i] && (g = 1, T[i] = []), "object" == t ? d.data = i : (d.src = i, d.type = t), d.width = d.height = "0", d.onerror = d.onload = d.onreadystatechange = function() {
                c.call(this, g)
            }, v.splice(n, 0, b), "img" != t && (g || 2 === T[i] ? (_.insertBefore(d, w ? null : m), f(c, l)) : T[i].push(d))
        }

        function l(t, e, i, s, o) {
            return y = 0, e = e || "j", n(t) ? h("c" == e ? k : x, t, e, this.i++, i, s, o) : (v.splice(this.i++, 0, t), 1 == v.length && r()), this
        }

        function c() {
            var t = p;
            return t.loader = {
                load: l,
                i: 0
            }, t
        }
        var d, p, u = e.documentElement,
            f = t.setTimeout,
            m = e.getElementsByTagName("script")[0],
            g = {}.toString,
            v = [],
            y = 0,
            b = "MozAppearance" in u.style,
            w = b && !!e.createRange().compareNode,
            _ = w ? u : m.parentNode,
            u = t.opera && "[object Opera]" == g.call(t.opera),
            u = !!e.attachEvent && !u,
            x = b ? "object" : u ? "script" : "img",
            k = u ? "script" : x,
            C = Array.isArray || function(t) {
                return "[object Array]" == g.call(t)
            },
            M = [],
            T = {},
            P = {
                timeout: function(t, e) {
                    return e.length && (t.timeout = e[0]), t
                }
            };
        p = function(t) {
            function e(t) {
                var e, i, s, t = t.split("!"),
                    n = M.length,
                    o = t.pop(),
                    a = t.length,
                    o = {
                        url: o,
                        origUrl: o,
                        prefixes: t
                    };
                for (i = 0; a > i; i++) s = t[i].split("="), (e = P[s.shift()]) && (o = e(o, s));
                for (i = 0; n > i; i++) o = M[i](o);
                return o
            }

            function a(t, n, o, a, r) {
                var h = e(t),
                    l = h.autoCallback;
                h.url.split(".").pop().split("?").shift(), h.bypass || (n && (n = s(n) ? n : n[t] || n[a] || n[t.split("/").pop().split("?")[0]]), h.instead ? h.instead(t, n, o, a, r) : (T[h.url] ? h.noexec = !0 : T[h.url] = 1, o.load(h.url, h.forceCSS || !h.forceJS && "css" == h.url.split(".").pop().split("?").shift() ? "c" : i, h.noexec, h.attrs, h.timeout), (s(n) || s(l)) && o.load(function() {
                    c(), n && n(h.origUrl, r, a), l && l(h.origUrl, r, a), T[h.url] = 2
                })))
            }

            function r(t, e) {
                function i(t, i) {
                    if (t) {
                        if (n(t)) i || (d = function() {
                            var t = [].slice.call(arguments);
                            p.apply(this, t), u()
                        }), a(t, d, e, 0, l);
                        else if (Object(t) === t)
                            for (h in r = function() {
                                    var e, i = 0;
                                    for (e in t) t.hasOwnProperty(e) && i++;
                                    return i
                                }(), t) t.hasOwnProperty(h) && (!i && !--r && (s(d) ? d = function() {
                                var t = [].slice.call(arguments);
                                p.apply(this, t), u()
                            } : d[h] = function(t) {
                                return function() {
                                    var e = [].slice.call(arguments);
                                    t && t.apply(this, e), u()
                                }
                            }(p[h])), a(t[h], d, e, h, l))
                    } else !i && u()
                }
                var r, h, l = !!t.test,
                    c = t.load || t.both,
                    d = t.callback || o,
                    p = d,
                    u = t.complete || o;
                i(l ? t.yep : t.nope, !!c), c && i(c)
            }
            var h, l, d = this.yepnope.loader;
            if (n(t)) a(t, 0, d, 0);
            else if (C(t))
                for (h = 0; h < t.length; h++) l = t[h], n(l) ? a(l, 0, d, 0) : C(l) ? p(l) : Object(l) === l && r(l, d);
            else Object(t) === t && r(t, d)
        }, p.addPrefix = function(t, e) {
            P[t] = e
        }, p.addFilter = function(t) {
            M.push(t)
        }, p.errorTimeout = 1e4, null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", d = function() {
            e.removeEventListener("DOMContentLoaded", d, 0), e.readyState = "complete"
        }, 0)), t.yepnope = c(), t.yepnope.executeStack = r, t.yepnope.injectJs = function(t, i, s, n, h, l) {
            var c, d, u = e.createElement("script"),
                n = n || p.errorTimeout;
            u.src = t;
            for (d in s) u.setAttribute(d, s[d]);
            i = l ? r : i || o, u.onreadystatechange = u.onload = function() {
                !c && a(u.readyState) && (c = 1, i(), u.onload = u.onreadystatechange = null)
            }, f(function() {
                c || (c = 1, i(1))
            }, n), h ? u.onload() : m.parentNode.insertBefore(u, m)
        }, t.yepnope.injectCss = function(t, i, s, n, a, h) {
            var l, n = e.createElement("link"),
                i = h ? r : i || o;
            n.href = t, n.rel = "stylesheet", n.type = "text/css";
            for (l in s) n.setAttribute(l, s[l]);
            a || (m.parentNode.insertBefore(n, m), f(i, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    },
    function(t, e) {
        function i(t) {
            return function() {
                return this[t]
            }
        }

        function s(t, e) {
            var i = t.split("."),
                s = ne;
            !(i[0] in s) && s.execScript && s.execScript("var " + i[0]);
            for (var n; i.length && (n = i.shift());) i.length || e === te ? s = s[n] ? s[n] : s[n] = {} : s[n] = e
        }

        function n(t) {
            return t.call.apply(t.bind, arguments)
        }

        function o(t, e) {
            if (!t) throw Error();
            if (2 < arguments.length) {
                var i = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var s = Array.prototype.slice.call(arguments);
                    return Array.prototype.unshift.apply(s, i), t.apply(e, s)
                }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }

        function a() {
            return a = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? n : o, a.apply(ie, arguments)
        }

        function r(t, e) {
            this.G = t, this.u = e || t, this.z = this.u.document, this.R = te
        }

        function h(t, i, s) {
            t = t.z.getElementsByTagName(i)[0], t || (t = e.documentElement), t && t.lastChild && t.insertBefore(s, t.lastChild)
        }

        function l(t, e) {
            return t.createElement("link", {
                rel: "stylesheet",
                href: e
            })
        }

        function c(t, e) {
            return t.createElement("script", {
                src: e
            })
        }

        function d(t, e) {
            for (var i = t.className.split(/\s+/), s = 0, n = i.length; n > s; s++)
                if (i[s] == e) return;
            i.push(e), t.className = i.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
        }

        function p(t, e) {
            for (var i = t.className.split(/\s+/), s = [], n = 0, o = i.length; o > n; n++) i[n] != e && s.push(i[n]);
            t.className = s.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
        }

        function u(t, e) {
            for (var i = t.className.split(/\s+/), s = 0, n = i.length; n > s; s++)
                if (i[s] == e) return ee;
            return se
        }

        function f(t) {
            if (t.R === te) {
                var e = t.z.createElement("p");
                e.innerHTML = '<a style="top:1px;">w</a>', t.R = /top/.test(e.getElementsByTagName("a")[0].getAttribute("style"))
            }
            return t.R
        }

        function m(t) {
            var e = t.u.location.protocol;
            return "about:" == e && (e = t.G.location.protocol), "https:" == e ? "https:" : "http:"
        }

        function g(t, e, i) {
            this.w = t, this.T = e, this.Aa = i
        }

        function v(t, e, i, s) {
            this.e = t != ie ? t : ie, this.o = e != ie ? e : ie, this.ba = i != ie ? i : ie, this.f = s != ie ? s : ie
        }

        function y(t) {
            t = ae.exec(t);
            var e = ie,
                i = ie,
                s = ie,
                n = ie;
            return t && (t[1] !== ie && t[1] && (e = parseInt(t[1], 10)), t[2] !== ie && t[2] && (i = parseInt(t[2], 10)), t[3] !== ie && t[3] && (s = parseInt(t[3], 10)), t[4] !== ie && t[4] && (n = /^[0-9]+$/.test(t[4]) ? parseInt(t[4], 10) : t[4])), new v(e, i, s, n)
        }

        function b(t, e, i, s, n, o, a, r, h, l, c) {
            this.J = t, this.Ha = e, this.za = i, this.ga = s, this.Fa = n, this.fa = o, this.xa = a, this.Ga = r, this.wa = h, this.ea = l, this.k = c
        }

        function w(t, e) {
            this.a = t, this.H = e
        }

        function _(t) {
            var e = k(t.a, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
            return "" != e ? (/BB\d{2}/.test(e) && (e = "BlackBerry"), e) : (t = k(t.a, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/, 1), "" != t ? ("Mac_PowerPC" == t && (t = "Macintosh"), t) : "Unknown")
        }

        function x(t) {
            var e = k(t.a, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
            if (e || (e = k(t.a, /Windows Phone( OS)? ([^;)]+)/, 2)) || (e = k(t.a, /(iPhone )?OS ([\d_]+)/, 2))) return e;
            if (e = k(t.a, /(?:Linux|CrOS) ([^;)]+)/, 1))
                for (var e = e.split(/\s/), i = 0; i < e.length; i += 1)
                    if (/^[\d\._]+$/.test(e[i])) return e[i];
            return (t = k(t.a, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? t : "Unknown"
        }

        function k(t, e, i) {
            return (t = t.match(e)) && t[i] ? t[i] : ""
        }

        function C(t) {
            return t.documentMode ? t.documentMode : void 0
        }

        function M(t) {
            this.va = t || "-"
        }

        function T(t, e) {
            this.J = t, this.U = 4, this.K = "n";
            var i = (e || "n4").match(/^([nio])([1-9])$/i);
            i && (this.K = i[1], this.U = parseInt(i[2], 10))
        }

        function P(t) {
            return t.K + t.U
        }

        function S(t) {
            var e = 4,
                i = "n",
                s = ie;
            return t && ((s = t.match(/(normal|oblique|italic)/i)) && s[1] && (i = s[1].substr(0, 1).toLowerCase()), (s = t.match(/([1-9]00|normal|bold)/i)) && s[1] && (/bold/i.test(s[1]) ? e = 7 : /[1-9]00/.test(s[1]) && (e = parseInt(s[1].substr(0, 1), 10)))), i + e
        }

        function O(t, e, i) {
            this.c = t, this.h = e, this.M = i, this.j = "wf", this.g = new M("-")
        }

        function j(t) {
            d(t.h, t.g.f(t.j, "loading")), H(t, "loading")
        }

        function F(t) {
            p(t.h, t.g.f(t.j, "loading")), u(t.h, t.g.f(t.j, "active")) || d(t.h, t.g.f(t.j, "inactive")), H(t, "inactive")
        }

        function H(t, e, i) {
            t.M[e] && (i ? t.M[e](i.getName(), P(i)) : t.M[e]())
        }

        function B(t, e) {
            this.c = t, this.C = e, this.s = this.c.createElement("span", {
                "aria-hidden": "true"
            }, this.C)
        }

        function I(t, e) {
            var i, s = t.s;
            i = [];
            for (var n = e.J.split(/,\s*/), o = 0; o < n.length; o++) {
                var a = n[o].replace(/['"]/g, "");
                i.push(-1 == a.indexOf(" ") ? a : "'" + a + "'")
            }
            i = i.join(","), n = "normal", o = e.U + "00", "o" === e.K ? n = "oblique" : "i" === e.K && (n = "italic"), i = "position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + i + ";" + ("font-style:" + n + ";font-weight:" + o + ";"), f(t.c) ? s.setAttribute("style", i) : s.style.cssText = i
        }

        function N(t) {
            h(t.c, "body", t.s)
        }

        function E(t, e, i, s, n, o, a, r) {
            this.V = t, this.ta = e, this.c = i, this.q = s, this.C = r || "BESbswy", this.k = n, this.F = {}, this.S = o || 5e3, this.Z = a || ie, this.B = this.A = ie, t = new B(this.c, this.C), N(t);
            for (var h in he) he.hasOwnProperty(h) && (I(t, new T(he[h], P(this.q))), this.F[he[h]] = t.s.offsetWidth);
            t.remove()
        }

        function $(t, e, i) {
            for (var s in he)
                if (he.hasOwnProperty(s) && e === t.F[he[s]] && i === t.F[he[s]]) return ee;
            return se
        }

        function A(t) {
            var e = t.A.s.offsetWidth,
                i = t.B.s.offsetWidth;
            e === t.F.serif && i === t.F["sans-serif"] || t.k.T && $(t, e, i) ? oe() - t.ya >= t.S ? t.k.T && $(t, e, i) && (t.Z === ie || t.Z.hasOwnProperty(t.q.getName())) ? z(t, t.V) : z(t, t.ta) : setTimeout(a(function() {
                A(this)
            }, t), 25) : z(t, t.V)
        }

        function z(t, e) {
            t.A.remove(), t.B.remove(), e(t.q)
        }

        function D(t, e, i, s) {
            this.c = e, this.t = i, this.N = 0, this.ca = this.Y = se, this.S = s, this.k = t.k
        }

        function W(t, e, i, s, n) {
            if (0 === e.length && n) F(t.t);
            else
                for (t.N += e.length, n && (t.Y = n), n = 0; n < e.length; n++) {
                    var o = e[n],
                        r = i[o.getName()],
                        h = t.t,
                        l = o;
                    d(h.h, h.g.f(h.j, l.getName(), P(l).toString(), "loading")), H(h, "fontloading", l), new E(a(t.ha, t), a(t.ia, t), t.c, o, t.k, t.S, s, r).start()
                }
        }

        function R(t) {
            0 == --t.N && t.Y && (t.ca ? (t = t.t, p(t.h, t.g.f(t.j, "loading")), p(t.h, t.g.f(t.j, "inactive")), d(t.h, t.g.f(t.j, "active")), H(t, "active")) : F(t.t))
        }

        function L(t, e, i) {
            this.G = t, this.W = e, this.a = i, this.O = this.P = 0
        }

        function q(t, e) {
            de.W.$[t] = e
        }

        function V(t, e) {
            this.c = t, this.d = e
        }

        function X(t, e) {
            this.c = t, this.d = e
        }

        function G(t) {
            var e = t.split(":");
            if (t = e[0], e[1]) {
                for (var i = e[1].split(","), e = [], s = 0, n = i.length; n > s; s++) {
                    var o = i[s];
                    if (o) {
                        var a = pe[o];
                        e.push(a ? a : o)
                    }
                }
                for (i = [], s = 0; s < e.length; s += 1) i.push(new T(t, e[s]));
                return i
            }
            return [new T(t)]
        }

        function U(t, e, i) {
            this.a = t, this.c = e, this.d = i, this.m = []
        }

        function K(t, e) {
            this.c = t, this.d = e, this.m = []
        }

        function Y(t, e, i) {
            this.L = t ? t : e + ue, this.p = [], this.Q = [], this.da = i || ""
        }

        function Q(t) {
            this.p = t, this.aa = [], this.I = {}
        }

        function J(t, e, i) {
            this.a = t, this.c = e, this.d = i
        }

        function Z(t, e) {
            this.c = t, this.d = e, this.m = []
        }
        var te = void 0,
            ee = !0,
            ie = null,
            se = !1,
            ne = this;
        ne.Ba = ee;
        var oe = Date.now || function() {
            return +new Date
        };
        r.prototype.createElement = function(t, e, i) {
            if (t = this.z.createElement(t), e)
                for (var s in e)
                    if (e.hasOwnProperty(s))
                        if ("style" == s) {
                            var n = t,
                                o = e[s];
                            f(this) ? n.setAttribute("style", o) : n.style.cssText = o
                        } else t.setAttribute(s, e[s]);
            return i && t.appendChild(this.z.createTextNode(i)), t
        }, s("webfont.BrowserInfo", g), g.prototype.qa = i("w"), g.prototype.hasWebFontSupport = g.prototype.qa, g.prototype.ra = i("T"), g.prototype.hasWebKitFallbackBug = g.prototype.ra, g.prototype.sa = i("Aa"), g.prototype.hasWebKitMetricsBug = g.prototype.sa;
        var ae = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
        v.prototype.toString = function() {
            return [this.e, this.o || "", this.ba || "", this.f || ""].join("")
        }, s("webfont.UserAgent", b), b.prototype.getName = i("J"), b.prototype.getName = b.prototype.getName, b.prototype.pa = i("za"), b.prototype.getVersion = b.prototype.pa, b.prototype.la = i("ga"), b.prototype.getEngine = b.prototype.la, b.prototype.ma = i("fa"), b.prototype.getEngineVersion = b.prototype.ma, b.prototype.na = i("xa"), b.prototype.getPlatform = b.prototype.na, b.prototype.oa = i("wa"), b.prototype.getPlatformVersion = b.prototype.oa, b.prototype.ka = i("ea"), b.prototype.getDocumentMode = b.prototype.ka, b.prototype.ja = i("k"), b.prototype.getBrowserInfo = b.prototype.ja;
        var re = new b("Unknown", new v, "Unknown", "Unknown", new v, "Unknown", "Unknown", new v, "Unknown", te, new g(se, se, se));
        w.prototype.parse = function() {
            var t;
            if (-1 != this.a.indexOf("MSIE")) {
                t = _(this);
                var e = x(this),
                    i = y(e),
                    s = k(this.a, /MSIE ([\d\w\.]+)/, 1),
                    n = y(s);
                t = new b("MSIE", n, s, "MSIE", n, s, t, i, e, C(this.H), new g("Windows" == t && 6 <= n.e || "Windows Phone" == t && 8 <= i.e, se, se))
            } else if (-1 != this.a.indexOf("Opera")) t: {
                t = "Unknown";
                var e = k(this.a, /Presto\/([\d\w\.]+)/, 1),
                    i = y(e),
                    s = x(this),
                    n = y(s),
                    o = C(this.H);
                if (i.e !== ie ? t = "Presto" : (-1 != this.a.indexOf("Gecko") && (t = "Gecko"), e = k(this.a, /rv:([^\)]+)/, 1), i = y(e)), -1 != this.a.indexOf("Opera Mini/")) {
                    var a = k(this.a, /Opera Mini\/([\d\.]+)/, 1),
                        r = y(a);
                    t = new b("OperaMini", r, a, t, i, e, _(this), n, s, o, new g(se, se, se))
                } else {
                    if (-1 != this.a.indexOf("Version/") && (a = k(this.a, /Version\/([\d\.]+)/, 1), r = y(a), r.e !== ie)) {
                        t = new b("Opera", r, a, t, i, e, _(this), n, s, o, new g(10 <= r.e, se, se));
                        break t
                    }
                    a = k(this.a, /Opera[\/ ]([\d\.]+)/, 1), r = y(a), t = r.e !== ie ? new b("Opera", r, a, t, i, e, _(this), n, s, o, new g(10 <= r.e, se, se)) : new b("Opera", new v, "Unknown", t, i, e, _(this), n, s, o, new g(se, se, se))
                }
            }
            else if (/AppleWeb(K|k)it/.test(this.a)) {
                t = _(this);
                var e = x(this),
                    i = y(e),
                    s = k(this.a, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1),
                    n = y(s),
                    o = "Unknown",
                    a = new v,
                    r = "Unknown",
                    h = se; - 1 != this.a.indexOf("Chrome") || -1 != this.a.indexOf("CrMo") || -1 != this.a.indexOf("CriOS") ? o = "Chrome" : /Silk\/\d/.test(this.a) ? o = "Silk" : "BlackBerry" == t || "Android" == t ? o = "BuiltinBrowser" : -1 != this.a.indexOf("Safari") ? o = "Safari" : -1 != this.a.indexOf("AdobeAIR") && (o = "AdobeAIR"), "BuiltinBrowser" == o ? r = "Unknown" : "Silk" == o ? r = k(this.a, /Silk\/([\d\._]+)/, 1) : "Chrome" == o ? r = k(this.a, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -1 != this.a.indexOf("Version/") ? r = k(this.a, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == o && (r = k(this.a, /AdobeAIR\/([\d\.]+)/, 1)), a = y(r), h = "AdobeAIR" == o ? 2 < a.e || 2 == a.e && 5 <= a.o : "BlackBerry" == t ? 10 <= i.e : "Android" == t ? 2 < i.e || 2 == i.e && 1 < i.o : 526 <= n.e || 525 <= n.e && 13 <= n.o, t = new b(o, a, r, "AppleWebKit", n, s, t, i, e, C(this.H), new g(h, 536 > n.e || 536 == n.e && 11 > n.o, "iPhone" == t || "iPad" == t || "iPod" == t || "Macintosh" == t))
            } else -1 != this.a.indexOf("Gecko") ? (t = "Unknown", e = new v, i = "Unknown", s = x(this), n = y(s), o = se, -1 != this.a.indexOf("Firefox") ? (t = "Firefox", i = k(this.a, /Firefox\/([\d\w\.]+)/, 1), e = y(i), o = 3 <= e.e && 5 <= e.o) : -1 != this.a.indexOf("Mozilla") && (t = "Mozilla"), a = k(this.a, /rv:([^\)]+)/, 1), r = y(a), o || (o = 1 < r.e || 1 == r.e && 9 < r.o || 1 == r.e && 9 == r.o && 2 <= r.ba || a.match(/1\.9\.1b[123]/) != ie || a.match(/1\.9\.1\.[\d\.]+/) != ie), t = new b(t, e, i, "Gecko", r, a, _(this), n, s, C(this.H), new g(o, se, se))) : t = re;
            return t
        }, M.prototype.f = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t.push(arguments[e].replace(/[\W_]+/g, "").toLowerCase());
            return t.join(this.va)
        }, T.prototype.getName = i("J"), B.prototype.remove = function() {
            var t = this.s;
            t.parentNode && t.parentNode.removeChild(t)
        };
        var he = {
            Ea: "serif",
            Da: "sans-serif",
            Ca: "monospace"
        };
        E.prototype.start = function() {
            this.A = new B(this.c, this.C), N(this.A), this.B = new B(this.c, this.C), N(this.B), this.ya = oe(), I(this.A, new T(this.q.getName() + ",serif", P(this.q))), I(this.B, new T(this.q.getName() + ",sans-serif", P(this.q))), A(this)
        }, D.prototype.ha = function(t) {
            var e = this.t;
            p(e.h, e.g.f(e.j, t.getName(), P(t).toString(), "loading")), p(e.h, e.g.f(e.j, t.getName(), P(t).toString(), "inactive")), d(e.h, e.g.f(e.j, t.getName(), P(t).toString(), "active")), H(e, "fontactive", t), this.ca = ee, R(this)
        }, D.prototype.ia = function(t) {
            var e = this.t;
            p(e.h, e.g.f(e.j, t.getName(), P(t).toString(), "loading")), u(e.h, e.g.f(e.j, t.getName(), P(t).toString(), "active")) || d(e.h, e.g.f(e.j, t.getName(), P(t).toString(), "inactive")), H(e, "fontinactive", t), R(this)
        }, L.prototype.load = function(t) {
            var e = t.context || this.G;
            if (this.c = new r(this.G, e), e = new O(this.c, e.document.documentElement, t), this.a.k.w) {
                var i, s = this.W,
                    n = this.c,
                    o = [];
                for (i in t)
                    if (t.hasOwnProperty(i)) {
                        var h = s.$[i];
                        h && o.push(h(t[i], n))
                    }
                for (t = t.timeout, this.O = this.P = o.length, t = new D(this.a, this.c, e, t), i = 0, s = o.length; s > i; i++) n = o[i], n.v(this.a, a(this.ua, this, n, e, t))
            } else F(e)
        }, L.prototype.ua = function(t, e, i, s) {
            var n = this;
            s ? t.load(function(t, s, o) {
                var a = 0 == --n.P;
                a && j(e), setTimeout(function() {
                    W(i, t, s || {}, o || ie, a)
                }, 0)
            }) : (t = 0 == --this.P, this.O--, t && (0 == this.O ? F(e) : j(e)), W(i, [], {}, ie, t))
        };
        var le = t,
            ce = new w(navigator.userAgent, e).parse(),
            de = le.WebFont = new L(t, new function() {
                this.$ = {}
            }, ce);
        de.load = de.load, V.prototype.load = function(t) {
            var e, i, s = this.d.urls || [],
                n = this.d.families || [];
            for (e = 0, i = s.length; i > e; e++) h(this.c, "head", l(this.c, s[e]));
            for (s = [], e = 0, i = n.length; i > e; e++) {
                var o = n[e].split(":");
                if (o[1])
                    for (var a = o[1].split(","), r = 0; r < a.length; r += 1) s.push(new T(o[0], a[r]));
                else s.push(new T(o[0]))
            }
            t(s)
        }, V.prototype.v = function(t, e) {
            return e(t.k.w)
        }, q("custom", function(t, e) {
            return new V(e, t)
        });
        var pe = {
            regular: "n4",
            bold: "n7",
            italic: "i4",
            bolditalic: "i7",
            r: "n4",
            b: "n7",
            i: "i4",
            bi: "i7"
        };
        X.prototype.v = function(t, e) {
            return e(t.k.w)
        }, X.prototype.load = function(t) {
            h(this.c, "head", l(this.c, m(this.c) + "//webfonts.fontslive.com/css/" + this.d.key + ".css"));
            for (var e = this.d.families, i = [], s = 0, n = e.length; n > s; s++) i.push.apply(i, G(e[s]));
            t(i)
        }, q("ascender", function(t, e) {
            return new X(e, t)
        }), U.prototype.v = function(t, e) {
            var i = this,
                s = i.d.projectId,
                n = i.d.version;
            if (s) {
                var o = i.c.u,
                    a = i.c.createElement("script");
                a.id = "__MonotypeAPIScript__" + s;
                var r = se;
                a.onload = a.onreadystatechange = function() {
                    if (!(r || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState)) {
                        if (r = ee, o["__mti_fntLst" + s]) {
                            var n = o["__mti_fntLst" + s]();
                            if (n)
                                for (var h = 0; h < n.length; h++) i.m.push(new T(n[h].fontfamily))
                        }
                        e(t.k.w), a.onload = a.onreadystatechange = ie
                    }
                }, a.src = i.D(s, n), h(this.c, "head", a)
            } else e(ee)
        }, U.prototype.D = function(t, e) {
            var i = m(this.c),
                s = (this.d.api || "fast.fonts.com/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
            return i + "//" + s + "/" + t + ".js" + (e ? "?v=" + e : "")
        }, U.prototype.load = function(t) {
            t(this.m)
        }, q("monotype", function(t, i) {
            var s = new w(navigator.userAgent, e).parse();
            return new U(s, i, t)
        }), K.prototype.D = function(t) {
            var e = m(this.c);
            return (this.d.api || e + "//use.typekit.net") + "/" + t + ".js"
        }, K.prototype.v = function(t, e) {
            var i = this.d.id,
                s = this.d,
                n = this.c.u,
                o = this;
            i ? (n.__webfonttypekitmodule__ || (n.__webfonttypekitmodule__ = {}), n.__webfonttypekitmodule__[i] = function(i) {
                i(t, s, function(t, i, s) {
                    for (var n = 0; n < i.length; n += 1) {
                        var a = s[i[n]];
                        if (a)
                            for (var r = 0; r < a.length; r += 1) o.m.push(new T(i[n], a[r]));
                        else o.m.push(new T(i[n]))
                    }
                    e(t)
                })
            }, i = c(this.c, this.D(i)), h(this.c, "head", i)) : e(ee)
        }, K.prototype.load = function(t) {
            t(this.m)
        }, q("typekit", function(t, e) {
            return new K(e, t)
        });
        var ue = "//fonts.googleapis.com/css";
        Y.prototype.f = function() {
            if (0 == this.p.length) throw Error("No fonts to load !");
            if (-1 != this.L.indexOf("kit=")) return this.L;
            for (var t = this.p.length, e = [], i = 0; t > i; i++) e.push(this.p[i].replace(/ /g, "+"));
            return t = this.L + "?family=" + e.join("%7C"), 0 < this.Q.length && (t += "&subset=" + this.Q.join(",")), 0 < this.da.length && (t += "&text=" + encodeURIComponent(this.da)), t
        };
        var fe = {
                latin: "BESbswy",
                cyrillic: "&#1081;&#1103;&#1046;",
                greek: "&#945;&#946;&#931;",
                khmer: "&#x1780;&#x1781;&#x1782;",
                Hanuman: "&#x1780;&#x1781;&#x1782;"
            },
            me = {
                thin: "1",
                extralight: "2",
                "extra-light": "2",
                ultralight: "2",
                "ultra-light": "2",
                light: "3",
                regular: "4",
                book: "4",
                medium: "5",
                "semi-bold": "6",
                semibold: "6",
                "demi-bold": "6",
                demibold: "6",
                bold: "7",
                "extra-bold": "8",
                extrabold: "8",
                "ultra-bold": "8",
                ultrabold: "8",
                black: "9",
                heavy: "9",
                l: "3",
                r: "4",
                b: "7"
            },
            ge = {
                i: "i",
                italic: "i",
                n: "n",
                normal: "n"
            },
            ve = RegExp("^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$");
        Q.prototype.parse = function() {
            for (var t = this.p.length, e = 0; t > e; e++) {
                var i = this.p[e].split(":"),
                    s = i[0].replace(/\+/g, " "),
                    n = ["n4"];
                if (2 <= i.length) {
                    var o, a = i[1];
                    if (o = [], a)
                        for (var a = a.split(","), r = a.length, h = 0; r > h; h++) {
                            var l;
                            if (l = a[h], l.match(/^[\w]+$/)) {
                                l = ve.exec(l.toLowerCase());
                                var c = te;
                                if (l == ie) c = "";
                                else {
                                    if (c = te, c = l[1], c == ie || "" == c) c = "4";
                                    else var d = me[c],
                                        c = d ? d : isNaN(c) ? "4" : c.substr(0, 1);
                                    c = [l[2] == ie || "" == l[2] ? "n" : ge[l[2]], c].join("")
                                }
                                l = c
                            } else l = "";
                            l && o.push(l)
                        }
                    0 < o.length && (n = o), 3 == i.length && (i = i[2], o = [], i = i ? i.split(",") : o, 0 < i.length && (i = fe[i[0]]) && (this.I[s] = i))
                }
                for (this.I[s] || (i = fe[s]) && (this.I[s] = i), i = 0; i < n.length; i += 1) this.aa.push(new T(s, n[i]))
            }
        };
        var ye = {
            Arimo: ee,
            Cousine: ee,
            Tinos: ee
        };
        J.prototype.v = function(t, e) {
            e(t.k.w)
        }, J.prototype.load = function(t) {
            var e = this.c;
            if ("MSIE" == this.a.getName() && this.d.blocking != ee) {
                var i = a(this.X, this, t),
                    s = function() {
                        e.z.body ? i() : setTimeout(s, 0)
                    };
                s()
            } else this.X(t)
        }, J.prototype.X = function(t) {
            for (var e = this.c, i = new Y(this.d.api, m(e), this.d.text), s = this.d.families, n = s.length, o = 0; n > o; o++) {
                var a = s[o].split(":");
                3 == a.length && i.Q.push(a.pop());
                var r = "";
                2 == a.length && "" != a[1] && (r = ":"), i.p.push(a.join(r))
            }
            s = new Q(s), s.parse(), h(e, "head", l(e, i.f())), t(s.aa, s.I, ye)
        }, q("google", function(t, i) {
            var s = new w(navigator.userAgent, e).parse();
            return new J(s, i, t)
        }), Z.prototype.D = function(t) {
            return m(this.c) + (this.d.api || "//f.fontdeck.com/s/css/js/") + (this.c.u.location.hostname || this.c.G.location.hostname) + "/" + t + ".js"
        }, Z.prototype.v = function(t, e) {
            var i = this.d.id,
                s = this.c.u,
                n = this;
            i ? (s.__webfontfontdeckmodule__ || (s.__webfontfontdeckmodule__ = {}), s.__webfontfontdeckmodule__[i] = function(t, i) {
                for (var s = 0, o = i.fonts.length; o > s; ++s) {
                    var a = i.fonts[s];
                    n.m.push(new T(a.name, S("font-weight:" + a.weight + ";font-style:" + a.style)))
                }
                e(t)
            }, i = c(this.c, this.D(i)), h(this.c, "head", i)) : e(ee)
        }, Z.prototype.load = function(t) {
            t(this.m)
        }, q("fontdeck", function(t, e) {
            return new Z(e, t)
        }), t.WebFontConfig && de.load(t.WebFontConfig)
    }(this, document);
var Froogaloop = function() {
        function t(e) {
            return new t.fn.init(e)
        }

        function e(t, e, i) {
            if (!i.contentWindow.postMessage) return !1;
            var s = i.getAttribute("src").split("?")[0];
            t = JSON.stringify({
                method: t,
                value: e
            }), i.contentWindow.postMessage(t, s)
        }

        function i(t) {
            if (t.origin != playerDomain) return !1;
            var e = JSON.parse(t.data);
            t = e.value;
            var i = e.data,
                s = "" == s ? null : e.player_id;
            e = s ? n[s][e.event || e.method] : n[e.event || e.method];
            var o = [];
            return e ? (void 0 !== t && o.push(t), i && o.push(i), s && o.push(s), o.length > 0 ? e.apply(null, o) : e.call()) : !1
        }

        function s(t, e, i) {
            i ? (n[i] || (n[i] = {}), n[i][t] = e) : n[t] = e
        }
        var n = {},
            o = !1;
        return t.fn = t.prototype = {
            playerDomain: "",
            element: null,
            init: function(t) {
                return "string" == typeof t && (t = document.getElementById(t)), this.element = t, this
            },
            api: function(t, i) {
                if (!this.element || !t) return !1;
                var n = this.element,
                    o = "" != n.id ? n.id : null,
                    a = i && i.constructor && i.call && i.apply ? null : i,
                    r = i && i.constructor && i.call && i.apply ? i : null;
                return r && s(t, r, o), e(t, a, n), this
            },
            addEvent: function(t, n) {
                if (!this.element) return !1;
                var a = this.element;
                if (s(t, n, "" != a.id ? a.id : null), "ready" != t && e("addEventListener", t, a), o) return this;
                a = a.getAttribute("src").split("/");
                for (var r = "", h = 0, l = a.length; l > h && 3 > h; h++) r += a[h], 2 > h && (r += "/");
                return playerDomain = r, window.addEventListener ? window.addEventListener("message", i, !1) : window.attachEvent("onmessage", i, !1), o = !0, this
            },
            removeEvent: function(t) {
                if (!this.element) return !1;
                var i, s = this.element;
                t: {
                    if ((i = "" != s.id ? s.id : null) && n[i]) {
                        if (!n[i][t]) {
                            i = !1;
                            break t
                        }
                        n[i][t] = null
                    } else {
                        if (!n[t]) {
                            i = !1;
                            break t
                        }
                        n[t] = null
                    }
                    i = !0
                }
                "ready" != t && i && e("removeEventListener", t, s)
            }
        }, t.fn.init.prototype = t.fn, window.Froogaloop = window.$f = t
    }(),
    __indexPart = !1,
    __FOOTER__ = !1,
    __MainMenu__ = !1,
    __ServicesMenu__ = !1,
    JSApp = BaseClass.extend({
        init: function(t) {
            this.element = !1, this.opt = {}, this.setOptions(t), window.__app__ = this, this.mv = !1, this.scrollTop = 0, this.scrollTopDir = 0, this.contentFixedAt = -1, this.fixedContent = !1, this.pageHeight = 0, this.menuWidth = 240, this.contentWidth = 0, this.sizeMode = 0, this.pagepart = [], this.fMH = 80, this.fH = 80, this.afterRun = [], this.preloadTMR = !1, this.preloadItems = [], this.inited = !1, this.checkIfMobile()
        },
        placeForPreload: function(t) {
            this.preloadItems.push(t)
        },
        preload: function() {
            this.present()
        },
        ignite: function() {
            this.screen = $("#screen"), this.wrapper = $("#wrapper"), this.content = $("#content"), this.footer = $("#footer");
            var t = this,
                e = function() {
                    t.resize()
                };
            WebFont.load({
                custom: {
                    families: ["kievit", "kievit-medium", "FontAwesome", "Open Sans"]
                },
                active: e,
                inactive: e
            }), this.initialize()
        },
        checkIfMobile: function() {
        },
        windowWidth: function() {
            return $(window).width()
        },
        windowHeight: function() {
            return $(window).height()
        },
        recalc: function() {
            this.ww = this.windowWidth(), this.wh = this.windowHeight(), this.contentWidth = this.ww - this.menuWidth
        },
        initialize: function() {
            this.recalc();
            this.processElement(), this.run()
        },
        processElement: function(t) {
            typeof t == _un_ && (t = $(document.body));
            var e;
            if (e = t.find(".page-part"), e.length)
                for (var i = 0, s = e.length; s > i; i++) {
                    var n = $(e[i]),
                        o = n.attr("part-type");
                    typeof window["PagePart_" + o] == _un_ && (o = "default");
                    var a = new window["PagePart_" + o]({
                        _element: n,
                        type: o
                    });
                    a.inited ? this.pagepart.push(a) : a.remove()
                }
            if (new MainMenu({
                    _element: e
                }), e = this.find(t, ".scroll-action"))
                for (var i = 0; i < e.length; i++) new ScrollAction({
                    _element: $(e[i]),
                    _delegate: this
                })
        },
        execAfterRun: function(t) {
            typeof t == _fn_ && this.afterRun.push(t)
        },
        run: function() {
            for (; fn = this.afterRun.shift();) fn();
            this.preload(), this.resize(), this.inited = !0, new TransitVideo({}), new Lifehack({})
        },
        updateFooter: function() {
            this.wrapper.css({
                position: "relative",
                height: "auto"
            });
            var t = {
                    position: "relative"
                },
                e = {
                    position: "fixed",
                    bottom: 0,
                    left: 0
                };
            this.footer.css(this.wrapper.innerHeight() < this.wh ? e : t), this.wrapper.css({
                height: this.wh
            })
        },
        resize: function() {
            this.recalc();
            var t = this.ww;
            t > 1440 ? t = 1440 : 1e3 > t && (t = 1e3), this.mul = (t - 1e3) / 440, this.fMH = Modernizr.mq("(max-width: 1260px)") ? 60 : 80, $(window).trigger("appResize", [this.ww, this.wh]);
            var e = this;
            setTimeout(function() {
                e.pageHeight = e.content.outerHeight(!0)
            }, 5)
        },
        present: function() {
            var t = this;
            this.screen.css({
                height: "auto",
                overflow: "visible",
                display: "block"
            }), $(window).resize(function() {
                t.resize()
            }), $(window).scroll(function() {
                t.updateScroll()
            }), this.resize()
        },
        scrollTo: function(t, e, i) {
            typeof i == _un_ && (i = 500), $("html,body").animate({
                scrollTop: t
            }, {
                duration: i,
                easing: "swing",
                queue: !1,
                always: function() {
                    typeof e == _fn_ && e()
                }
            })
        },
        updateScroll: function() {
            var t = $(window).scrollTop();
            this.scrollTopDir = t > this.scrollTop, this.scrollTop = t, $(window).trigger("appScroll", [this.scrollTop, this.scrollTopDir])
        },
        setFixedContent: function(t) {
            return this.fixedContent == t ? !1 : (t ? (this.contentFixedAt = this.scrollTop, $("#screen").css({
                position: "fixed",
                top: 0,
                height: this.wh,
                display: "none"
            }), $("#wrapper").css({
                top: -this.contentFixedAt
            }), __Achievements__ && __Achievements__.element.css({
                display: "none"
            })) : ($("#screen").css({
                position: "relative",
                top: "auto",
                height: "auto",
                display: "block"
            }), $("#wrapper").css({
                top: 0
            }), window.scrollTo(0, this.contentFixedAt), this.contentFixedAt = -1, this.resize(), __Achievements__ && (__Achievements__.element.css({
                display: "block"
            }), __Achievements__.resize(this.ww, this.wh))), this.fixedContent = t, !0)
        },
        share: {
            windowParams: "menubar=no,location=no,resizable=yes,scrollbars=yes,status=yes,width=800,height=500",
            fb: function(t) {
                var e = "http://www.facebook.com/sharer.php?u=" + t.url;
                window.open(e, "Share", this.windowParams)
            },
            vk: function(t) {
                var e = "http://vkontakte.ru/share.php?url=" + t.url;
                window.open(e, "Share", this.windowParams)
            },
            twitter: function(t) {
                var e = "http://twitter.com/home/?status=" + t.ttl + "+" + t.url;
                window.open(e, "Share", this.windowParams)
            },
            lj: function(t) {
                var e = "http://www.livejournal.com/update.bml?subject=" + t.ttl + "&event=" + t.url;
                window.open(e, "Share", this.windowParams)
            },
            pin: function(t) {
                var e = "http://www.pinterest.com/pin/create/button/?url=" + t.url + "&media=" + t.img + "&description=" + t.ttl;
                window.open(e, "Share", this.windowParams)
            }
        },
        bookmark: function(t) {
            var e = $(t).attr("title"),
                i = $(t).attr("url");
            try {
                window.external.AddFavorite(i, e)
            } catch (s) {
                try {
                    window.sidebar.addPanel(e, i, "")
                } catch (s) {
                    if (tt.is.opera || tt.is.firefox) return !0;
                    alert("Нажмите Ctrl-D чтобы добавить страницу в закладки")
                }
            }
            return !1
        }
    }),
    BaseUploader = BaseClass.extend({
        init: function(t) {
            this.element = !1, this.opt = {
                mode: null,
                multiple: !0,
                url: null,
                cmd: null,
                handle: null,
                start: null,
                progress: null,
                complete: null,
                error: null,
                switcher: !1
            }, this.setOptions(t), this.create()
        },
        create: function() {
            if ("none" != this.opt.mode) {
                var t = this;
                if (this.input = this.element.find("input[type=file]")[0], !this.input) return void alert("ttFileUpload error: unable to find input");
                if (this.form = this.input.form, this.opt.url || (this.opt.url = $(this.form).attr("action")), !this.opt.url) return void alert("ttFileUpload error: unable to find uploadPath");
                this.opt.handle || (this.opt.handle = "file"), this.progress = this.element.find(".progress");
                var e = "iframe",
                    i = this.supportAjaxUploadWithProgress(),
                    s = !1,
                    n = this.supportFlash();
                switch (this.opt.mode || (e = window.tt.msie ? n ? "flash" : "shutdown" : i ? "ajax" : n ? "flash" : s ? "formData" : "iframe", this.opt.mode = e), this.normalMode = this.opt.mode, this.opt.mode) {
                    case "iframe":
                        $(this.input).bind("change", function(e) {
                            t.uploadIFrame(e)
                        });
                        break;
                    case "ajax":
                        $(this.input).bind("change", function(e) {
                            t.fileSelect(e)
                        });
                        break;
                    case "formData":
                        $(this.input).bind("change", function(e) {
                            return t.uploadForm(e)
                        });
                        break;
                    case "flash":
                        this.switchToFlashMode();
                        break;
                    case "shutdown":
                    default:
                        return
                }
                this.opt.switcher && n && "flash" != this.opt.mode && (this.switchModeURL = $("<span>").addClass("dashed").html("flash uploader").bind("click", function(e) {
                    t.switchMode(e)
                }).insertAfter(this.element)), this.opt.multiple ? $(this.input).attr("multiple", !0) : $(this.input).attr("multiple", !1)
            }
        },
        supportAjaxUploadWithProgress: function() {
            return this.supportFileAPI() && this.supportAjaxUploadProgressEvents()
        },
        supportFileAPI: function() {
            var t = document.createElement("INPUT");
            return t.type = "file", "files" in t
        },
        supportAjaxUploadProgressEvents: function() {
            var t = new XMLHttpRequest;
            return !!(t && "upload" in t && "onprogress" in t.upload)
        },
        supportFormData: function() {
            return !!window.FormData
        },
        supportFlash: function() {
            return "undefined" != typeof swfobject && swfobject.getFlashPlayerVersion().major >= 9
        },
        switchMode: function(t) {
            switch (this.opt.mode) {
                case "flash":
                    this.opt.mode = this.normalMode, this.flashContainer.css({
                        display: "none"
                    }), $(this.input).css({
                        display: "inline-block"
                    }), $(t.target).html("flash mode");
                    break;
                default:
                    this.opt.mode = "flash", this.switchToFlashMode(), $(t.target).html("normal uploader")
            }
        },
        switchToFlashMode: function() {
            if (ttUploader) {
                if (!this.flashContainer) {
                    this.flashContainer = $("<div>").css({
                        position: "relative"
                    }), this.flashObject = $("<div>").css({
                        position: "relative"
                    }).attr("id", "flashUploader"), this.flashContainer.append(this.flashObject).insertBefore(this.input);
                    var t = this;
                    this.flashUploader = new ttUploader({
                        id: "flashUploader",
                        vars: {
                            uploader: "flashUploader",
                            url: this.opt.url + "." + this.opt.cmd,
                            cmd: this.opt.cmd,
                            sid: sid,
                            handle: this.opt.handle
                        },
                        complete: function() {
                            t.uploadComplete('{"status":"0"}')
                        }
                    })
                }
                return $(this.input).css({
                    display: "none"
                }), this.flashContainer.css({
                    display: "inline-block"
                }), !0
            }
            return !1
        },
        initProgress: function() {},
        initForm: function() {
            this.pendingFiles = [], this.currentPendingFile = 0, this.iframeDIV && this.iframeDIV.remove(), this.iframeDIV = this.iframe = this.iframeID = null, this.initProgress(), this.progress && this.progress.css({
                display: "none"
            }), $(this.input).css({
                display: "block"
            }), this.activity && (this.activity.remove(), this.activity = null)
        },
        viewLoading: function() {
            $(this.input).css({
                display: "none"
            }), this.activity = $("<div>").addClass("ttFileUploadActivity").insertAfter(this.input)
        },
        uploadIFrame: function() {
            var t = this;
            this.iframeID = "f" + Math.floor(99999 * Math.random()), this.iframe = $("<iframe>").attr("id", this.iframeID).attr("name", this.iframeID).css({
                display: "none"
            }), this.iframeDIV = $("<div>").html(this.iframe), $(document.body).append(this.iframeDIV), $(this.form).attr("target", this.iframeID), this.iframe.bind("load", function(e) {
                t.iframeLoaded(e)
            }), this.opt.originalCmd = this.form.elements.cmd.value, this.form.elements.cmd.value = this.opt.cmd, $(this.form).submit(), this.viewLoading(), this.form.elements.cmd.value = this.opt.originalCmd, $(this.form).removeAttr("target")
        },
        iframeLoaded: function() {
            var t, e = $("#" + this.iframeID);
            t = e.contentDocument ? e.contentDocument : e.contentWindow ? e.contentWindow.document : window.frames[this.iframeID].document, this.uploadComplete($(t.body).html())
        },
        fileSelect: function(t) {
            var e = t.target.files || t.dataTransfer.files;
            this.pendingFiles = e, this.currentPendingFile = 0, this.viewLoading(), this.uploadNext()
        },
        uploadNext: function(t) {
            if ("undefined" != typeof this.pendingFiles.length) {
                var e = this.pendingFiles.length;
                this.currentPendingFile < e ? (this.uploadFile(this.pendingFiles[this.currentPendingFile]), this.currentPendingFile++) : this.uploadComplete(t.responseText)
            }
        },
        uploadFile: function(t) {
            var e = this,
                i = new XMLHttpRequest;
            i.upload.addEventListener("progress", function(t) {
                var i = parseInt(t.loaded / t.total * 100);
                e.updateProgress(i)
            }, !1), i.onreadystatechange = function() {
                4 == i.readyState && (200 == i.status ? e.uploadNext(i) : e.uploadError(i.responseText))
            }, i.open("POST", this.opt.url + "." + this.opt.cmd, !0), i.setRequestHeader("x-filename", t.name), i.setRequestHeader("x-filetype", t.type), i.setRequestHeader("x-filesize", t.size), i.setRequestHeader("x-requested-with", "XMLHttpRequest"), i.send(t)
        },
        uploadForm: function() {
            var t = this,
                e = new FormData(this.element[0]),
                i = new XMLHttpRequest;
            return i.open("POST", this.opt.url, !0), i.upload.addEventListener("progress", function(e) {
                var i = parseInt(e.loaded / e.total * 100);
                t.updateProgress(i)
            }, !1), i.onreadystatechange = function() {
                4 == i.readyState && (200 == i.status ? t.uploadComplete(i.responseText) : t.uploadError(i.responseText))
            }, i.open("POST", this.element.attr("action"), !0), i.send(e), this.viewLoading(), !1
        },
        updateProgress: function(t) {
            if (this.activity) {
                if (this.pendingFiles && this.pendingFiles.length > 1) {
                    var e = 100 / this.pendingFiles.length;
                    t = e * t / 100, this.currentPendingFile > 0 && (t += (this.currentPendingFile - 1) * e)
                }
                this.activity.html(Math.round(t) + "%")
            }
        },
        uploadComplete: function(t) {
            window.console && console.log(t), this.initForm(); {
                var e = t.match(/\{.*\}/)[0];
                jQuery.parseJSON(e)
            }
            "function" == typeof this.opt.complete && this.opt.complete(this, e)
        },
        uploadError: function(t) {
            this.initForm(), "function" == typeof this.opt.error && this.opt.error(this, t)
        }
    }),
    OverlapController = BaseClass.extend({
        init: function(t) {
            this.element = !1, this.opt = {
                opened: !1,
                bgOpacity: .8,
                duration: 400,
                easing: "swing",
                zIndex: 2e3,
                _arrows: !1
            }, this.setOptions(t), this.bg = this._div("ol-bg", {
                opacity: 0,
                display: "none",
                zIndex: this.opt.zIndex++
            }), this.container = this._div("ol-box", {
                opacity: 0,
                display: "none",
                zIndex: this.opt.zIndex++
            }), $(document.body).append(this.bg), $(document.body).append(this.container);
            var e = this;
            this.arrl = this._div("arr arrl").appendTo(this.container).css({
                opacity: 0,
                display: "none"
            }).bind(window.tt.is.mouseEvents, {
                dir: !1
            }, function(t) {
                e.m_arr(t)
            }), this.arrr = this._div("arr arrr").appendTo(this.container).css({
                opacity: 0,
                display: "none"
            }).bind(window.tt.is.mouseEvents, {
                dir: !0
            }, function(t) {
                e.m_arr(t)
            }), this.closeBtn = this._div("arr close").appendTo(this.container).bind(window.tt.is.mouseEvents, function(t) {
                e.m_close(t)
            }), this.container.bind(window.tt.is.click, function(t) {
                t.target == this && e.close()
            }), this.act = !1, this.overlap = [this], this.overlapByMode = [], this.history = []
        },
        processOverlaps: function(t) {
            typeof t == _un_ && (t = $(document.body));
            for (var e = $(".overlaps"), i = 0, s = e.length; s > i; i++) this.processOverlap($(e[i]))
        },
        processOverlap: function(t) {
            var e = t.attr("mode"),
                i = parseInt(t.attr("grp")),
                s = t.attr("tid"),
                n = parseInt(t.attr("modal")),
                o = parseInt(t.attr("nocycle")) ? !1 : !0,
                a = {
                    element: t,
                    mode: e,
                    modal: n,
                    grp: i,
                    tid: s,
                    cycle: o,
                    autocreate: !1,
                    autoshow: !1
                };
            return this.createOverlapWithData(a)
        },
        createOverlapWithData: function(t) {
            var e = this.overlap.length;
            return t._delegate = this, t.id = e, t.cycle && (typeof this.overlapByMode[t.mode] == _un_ && (this.overlapByMode[t.mode] = []), t.pos = this.overlapByMode[t.mode].length), this.overlap[e] = new Overlap(t), t.cycle && this.overlapByMode[t.mode].push(this.overlap[e]), this.overlap[e]
        },
        switchOverlap: function(t, e) {
            var i = this.overlap[this.act].opt.pos + (t ? 1 : -1),
                s = 0,
                n = this.overlapByMode[this.overlap[this.act].opt.mode].length - 1;
            s > i ? i = n : i > n && (i = s);
            var o = this.overlapByMode[this.overlap[this.act].opt.mode][i].opt.id;
            this.open(o, e)
        },
        switchArrows: function(t, e) {
            this.opt._arrows != t && (this.switchOpacity(this.arrl, t, !1), this.switchOpacity(this.arrr, t, e), this.opt._arrows = t)
        },
        revealStage: function() {
            return this.opt.opened ? !1 : (this.opt.opened = !0, __app__.setFixedContent(!0), this.bg.stop().css({
                display: "block",
                opacity: 0
            }).animate({
                opacity: this.opt.bgOpacity
            }, this.opt.duration, this.opt.easing), this.container.stop().css({
                display: "block",
                opacity: 0
            }).animate({
                opacity: 1
            }, this.opt.duration, this.opt.easing), !0)
        },
        open: function(t, e) {
            if (__app__ && __app__.WCPSlider && __app__.WCPSlider.stopAutoSwitch(), this.resize(), this.act != t) {
                var i = this.act;
                return this.close(null, !0), this.revealStage(), typeof this.overlap[t] !== _un_ ? (this.overlap[t].opt.modal && i !== !1 && this.history.push(i), this.act = t, this.switchArrows(this.overlap[t].opt.cycle && this.overlapByMode[this.overlap[t].opt.mode].length > 1), window.scrollTo(0, 0), this.overlap[t].open(e), !0) : void(window.console && console.log('Error showing "' + t + '" overlap.'))
            }
        },
        close: function(t, e, i) {
            return this.history.length ? (t = this.history.pop(), void this.open(t)) : (typeof t == _un_ && (t = this.act || !1), this.act && (this.overlap[this.act].close(e ? i : null), this.act = !1), void(e || (window.location.hash = "", this.bg.stop().animate({
                opacity: 0
            }, this.opt.duration, this.opt.easing, function() {
                $(this).css({
                    display: "none"
                })
            }), this.container.stop().animate({
                opacity: 0
            }, this.opt.duration, this.opt.easing, function() {
                $(this).css({
                    display: "none"
                }), __app__.setFixedContent(!1), typeof i == _fn_ && i()
            }), this.opt.opened = !1, this.history = [])))
        },
        resize: function() {
            var t = $(window).width(),
                e = ($(window).height(), 180);
            this.arrl.css({
                position: "fixed",
                top: e,
                left: Math.round(t / 2) - 480
            }), this.arrr.css({
                position: "fixed",
                top: e,
                left: Math.round(t / 2) - 58 + 480
            }), this.closeBtn.css({
                position: "fixed",
                top: 108,
                left: Math.round(t / 2) - 58 + 480
            })
        },
        m_arr: function(t) {
            {
                var e = t.data.dir;
                e ? this.arrr : this.arrl
            }
            switch (t.type) {
                case "click":
                    this.switchOverlap(e);
                    break;
                case "mouseenter":
                    break;
                case "mouseleave":
            }
        },
        m_close: function(t) {
            switch (t.type) {
                case "click":
                    this.close();
                    break;
                case "mouseenter":
                    break;
                case "mouseleave":
            }
        },
        hashHandler: function(t) {
            if ("#" == t.substr(0, 1) && (t = t.substr(1)), t.length) {
                var e = t.toString().split(":");
                switch (e[0]) {
                    case "book":
                    case "article":
                    case "event":
                    case "projectObject":
                        this.createOverlapWithData({
                            element: $("<div></div>"),
                            mode: e[0],
                            tid: e[1],
                            modal: !1,
                            cycle: !1,
                            autoload: !0,
                            autoshow: !0
                        })
                }
            }
        }
    }),
    Overlap = BaseClass.extend({
        init: function(t) {
            this.element = !1, this.delegate = !1, this.opt = {
                mode: !1,
                tid: !1,
                grp: !1,
                autoload: !1,
                autoshow: !0,
                created: !1,
                loaded: !1,
                loading: !1,
                opened: !1,
                duration: 400,
                easing: "swing",
                appendData: {}
            }, this.setOptions(t), this.element && (parseInt(this.element.attr("overlap-id")) || (this.element.attr("overlap-id", this.opt.id), this.element.hasClass("overlaps") && this.element.removeClass("overlaps"), "enqueue" == this.opt.mode && this.element.css({
                cursor: "pointer"
            }).bind(tt.is.click, {
                id: this.opt.id
            }, function(t) {
                window.overlaps.open(t.data.id)
            }), this.opt.autoload && this.create()))
        },
        create: function() {
            this.overlapElement = this._div("ol-w").appendTo(window.overlaps.container), this.page = this._div("ol-page").appendTo(this.overlapElement), this.opt.created = !0, this.opt.autoload && this.load()
        },
        load: function(t, e) {
            if (!this.opt.loading) {
                this.opt.loading = !0, this.opt.created || this.create(), this.page.empty();
                var i = {
                    grp: this.opt.grp,
                    tid: this.opt.tid,
                    cmd: "overlap",
                    ajax: 1
                };
                switch (this.opt.mode) {
                    case "event":
                        this.opt.url = "/events/" + this.opt.tid;
                        break;
                    case "project":
                        this.opt.url = "/projects/" + this.opt.tid;
                        break;
                    case "book":
                        this.opt.url = "/library/literature/" + this.opt.tid;
                        break;
                    case "article":
                        this.opt.url = "/library/publications/" + this.opt.tid;
                        break;
                    case "projectObject":
                        this.opt.url = "/projects/" + this.opt.tid, i.objectGrp = parseInt(this.element.attr("objectGrp"));
                        break;
                    case "enqueue":
                        this.opt.url = "/library/literature/" + this.opt.tid, i.cmd = "queue-enqueue", i.tid = this.opt.tid, i.grp = this.opt.grp, i.step = 1;
                        break;
                    default:
                        return
                }
                if (typeof e == _un_) e = {};
                else
                    for (var s in e) i[s] = e[s];
                this.contentBlocks = [], this.withHead = !1, this.headHTML = !1, this.overlapHeadCnt && this.overlapHeadCnt.remove(), $.ajax({
                    url: this.opt.url + "." + i.cmd,
                    data: i,
                    type: e.POST ? "POST" : "GET",
                    dataType: "json",
                    context: this
                }).done(function(e) {
                    if (!(e.status > 0)) {
                        for (var i = 0, s = e.blocks.length; s > i; i++) this.contentBlocks.push($(e.blocks[i]));
                        this.withHead = typeof e.head != _un_ && e.head.length, this.withHead && (this.headHTML = e.head || !1), this.loaded(t)
                    }
                }).fail(function() {
                    typeof t == _fn_ && t(this, !1), window.console && console.log("Error loading overlap content.")
                }).always(function() {
                    this.opt.loading = !1
                })
            }
        },
        loaded: function(t) {
            for (var e = 0, i = this.contentBlocks.length; i > e; e++) this.contentBlocks[e].appendTo(this.page);
            window.overlaps.processOverlaps(this.page), __app__.processElement(this.page), this.withHead && (this.overlapHeadCnt = $("<div></div>").addClass("ol-head-container").html(this.headHTML).appendTo(window.overlaps.container), this.setHeadEvents());
            var s, n = this;
            s = this.page.find(".btn4func");
            for (var e = 0, i = s.length; i > e; e++) {
                var o = $(s[e]),
                    a = o.attr("func");
                typeof n[a] == _fn_ && o.bind(window.tt.is.click, {
                    func: a
                }, function(t) {
                    n[t.data.func]()
                })
            }
            this.opt.loaded = !0, this.resize(), typeof t == _fn_ && t(this, !0), this.opt.autoshow && (this.opt.autoshow = !1, this.open())
        },
        setHeadEvents: function() {
            var t;
            t = this.overlapHeadCnt.find(".smaller"), t.length && t.bind(window.tt.is.click, function() {
                __app__.adjustFontSize(!1)
            }), t = this.overlapHeadCnt.find(".bigger"), t.length && t.bind(window.tt.is.click, function() {
                __app__.adjustFontSize(!0)
            }), t = this.overlapHeadCnt.find(".pdf"), t.length && t.bind(window.tt.is.click, {
                elm: t,
                url: this.opt.url
            }, function(t) {
                window.open(t.data.url + ".pdf", "_blank")
            }), t = this.overlapHeadCnt.find(".print"), t.length && t.bind(window.tt.is.click, {
                elm: t,
                url: this.opt.url
            }, function(t) {
                window.open(t.data.url + ".print", "_blank")
            }), t = this.overlapHeadCnt.find(".bookmark"), t.length && t.bind(window.tt.is.click, {
                elm: t
            }, function(t) {
                __app__.bookmark(t.data)
            })
        },
        resize: function() {
            var t = this.overlapElement.css("display");
            this.overlapElement.css({
                display: "block"
            });
            var e = this.overlapElement.outerHeight(!0);
            this.overlapElement.css(e < __app__.wh - 88 ? {
                position: "absolute",
                top: 0,
                left: Math.round((__app__.ww - 810) / 2)
            } : {
                position: "relative",
                top: "auto",
                left: "auto"
            }), this.overlapElement.css({
                display: t
            })
        },
        open: function(t) {
            var e = this,
                i = function() {
                    typeof t == _fn_ && t(e)
                };
            if (!this.opt.loaded) return this.opt.autoshow = !0, void this.load();
            switch (this.withHead && this.overlapHeadCnt.css({
                display: "block",
                opacity: 0
            }).animate({
                opacity: 1
            }, this.opt.duration, this.opt.easing, function() {}), this.opt.mode) {
                case "book":
                case "event":
                case "article":
                case "projectObject":
                    window.location.hash = this.opt.mode + ":" + this.opt.tid
            }
            this.opt.opened ? i() : (this.opt.opened = !0, this.overlapElement.stop().css({
                opacity: 0,
                display: "block"
            }).animate({
                opacity: 1
            }, this.opt.duration, this.opt.easing, function() {
                i()
            }))
        },
        close: function(t) {
            var e = this,
                i = function() {
                    typeof t == _fn_ && t(e)
                };
            this.withHead && this.overlapHeadCnt.animate({
                opacity: 0
            }, this.opt.duration, this.opt.easing, function() {
                $(this).css({
                    display: "none"
                })
            }), this.opt.opened ? (this.opt.opened = !1, this.overlapElement.stop().animate({
                opacity: 0
            }, this.opt.duration, this.opt.easing, function() {
                $(this).css({
                    display: "none"
                }), i()
            })) : i()
        },
        agreeWithRules: function() {
            this.load(null, {
                step: 2
            })
        },
        sendEnqueueForm: function() {
            var t = this.page.find(".enqueue-first_name"),
                e = this.page.find(".enqueue-second_name"),
                i = this.page.find(".enqueue-mail");
            if (t.val() < 2) return t.focus(), void alert("Вы не указали имя");
            if (e.val() < 2) return e.focus(), void alert("Вы не указали фамилию");
            if (!mailtest(i.val())) return i.focus(), void alert("Вы не указали имя");
            var s = {
                POST: !0,
                first_name: t.val(),
                second_name: e.val(),
                mail: i.val(),
                step: 3
            };
            s.first_name.length && s.second_name.length && s.mail.length && this.load(null, s)
        }
    }),
    RadioInput = BaseClass.extend({
        radioInputs: !1,
        init: function(t) {
            if (this.element = !1, this.opt = {
                    onChange: !1
                }, this.setOptions(t), RadioInput.radioInputs || (RadioInput.radioInputs = []), this.element) {
                this.opt.id = this.element.attr("data-id"), this.opt.id && (RadioInput.radioInputs[this.opt.id] = this);
                var e = this.element.find("label");
                if (this.label = e.length ? e : !1, this.radio = !1, this.checked = -1, this.cVal = 0, this.label)
                    for (var i = 0, s = this.label.length; s > i; i++) {
                        var n = $(this.label[i]),
                            e = n.find("input"),
                            o = e.length ? e : !1;
                        o && this.generateRadio(i, n, o)
                    }
            }
        },
        getById: function(t) {
            return RadioInput.radioInputs[t] ? RadioInput.radioInputs[t] : !1
        },
        onChange: function(t) {
            return this.opt.onChange = typeof t == _fn_ ? t : !1, !!this.opt.onChange
        },
        generateRadio: function(t, e, i) {
            this.radio || (this.radio = []);
            var s = {
                    id: t,
                    label: e,
                    radio: i,
                    value: i[0].value
                },
                n = $("<div></div>").css({
                    position: "relative",
                    width: 15,
                    height: 15,
                    margin: "5px 0px 5px 0px",
                    backgroundColor: "#b1c0c7",
                    borderRadius: 8,
                    cursor: "pointer"
                }).appendTo(this.element);
            s.fakeInput = n;
            var o = i.attr("checked");
            o && (this.checked = t, this.cVal = s.value);
            var a = $("<div></div>").css({
                position: "absolute",
                top: 5,
                left: 5,
                width: 5,
                height: 5,
                backgroundColor: "#ffffff",
                display: o ? "block" : "none"
            }).appendTo(n);
            s.fakeInputDot = a;
            var r = $("<div></div>").css({
                position: "absolute",
                top: -1,
                left: 20,
                color: "#a5b5c5"
            }).html(e.text()).appendTo(n);
            s.fakeInputText = r, e.css({
                display: "none"
            }), this.radio.push(s);
            var h = this;
            n.bind("click mouseenter mouseleave", {
                id: t
            }, function(t) {
                h.mouse(t)
            })
        },
        mouse: function(t) {
            var e = t.data.id,
                i = this.radio[e];
            switch (t.type) {
                case "click":
                    if (this.checked == e) return;
                    this.checked >= 0 && this.radio[this.checked].fakeInputDot.css({
                        display: "none"
                    }), this.radio[e].fakeInputDot.css({
                        display: "block"
                    }), this.checked = e, this.cVal = i.value, this.opt.onChange && this.opt.onChange(this, this.cVal);
                    break;
                case "mouseenter":
                    break;
                case "mouseleave":
            }
        }
    }),
    RadioInputClass = new RadioInput,
    Slider = BaseClass.extend({
        __className: "Slider",
        init: function(t) {
            this._id = !1, this.inited = !1, this.id = 0, this.element = !1, this.opt = {
                itemClass: "SliderItem",
                dotsClass: "SliderDots",
                arrsClass: "SliderArrows",
                stageSelector: ".stage",
                itemSelector: ".item",
                withResizeEvent: !0
            }, this.setOptions(t), this.put() && (this.pos = 0, this.item = [], this.count = 0, this.switching = !1, this.create())
        },
        create: function() {
            var t, e = this;
            if (this.stage = this.element.children(this.opt.stageSelector), this.stage.length) {
                if (this.stage = $(this.stage[0]), t = this.stage.children(this.opt.itemSelector))
                    for (var i = 0; i < t.length; i++) {
                        var s = $(t[i]),
                            n = new window[this.opt.itemClass]({
                                _id: i,
                                _element: s,
                                _delegate: this
                            });
                        n.inited ? (this.item.push(n), this.count++) : n.remove()
                    }
                this.count > 1 && this.stage.bind("click", function() {
                    e.nextItem()
                })
            }
            this.arrows = new window[this.opt.arrsClass]({
                _element: this.element,
                _delegate: this
            }), t = this.find(this.element, ".dots"), this.dots = t ? new window[this.opt.dotsClass]({
                _element: t,
                _delegate: this
            }) : !1, this.withResizeEvent && $(window).bind("appResize", function(t, i, s) {
                e.resize(i, s)
            }), this.resize(), this.inited = !0
        },
        nextItem: function() {
            var t = this.pos + 1;
            t >= this.count && (t = 0), this.switchItem(t, !0)
        },
        prevItem: function() {
            var t = this.pos - 1;
            0 > t && (t = this.count - 1), this.switchItem(t, !1)
        },
        switchItem: function(t, e, i) {
            if (!this.switching) {
                this.switching = !0;
                var s = this.item[this.pos],
                    n = this.item[t],
                    o = this;
                this.pos = t, s.hide(e, i), n.show(e, i, function() {
                    o.switching = !1
                })
            }
        },
        resize: function() {
            var t = this.stage.width(),
                e = this.stage.height();
            $(this.item).each(function() {
                this.resize(t, e)
            })
        },
        remove: function() {
            for (var t = 0; t < this.item.length; t++) this.item[t].remove();
            this.arrows && this.arrows.remove(), this.dots && this.dots.remove(), this.rm()
        }
    }),
    SliderSection = Slider.extend({
        resize: function(t, e) {
            this.width = t, this.height = e, this.stage.css({
                width: this.width,
                height: this.height
            }), $(this.item).each(function() {
                this.resize(this.width, this.height)
            })
        },
        show: function(t, e, i) {
            e ? (this.element.css({
                display: "block",
                left: 0
            }), typeof i == _fn_ && i()) : this.element.stop().css({
                left: t ? this.width : -this.width,
                display: "block"
            }).animate({
                left: 0
            }, this.opt.duration, this.opt.easing, function() {
                typeof i == _fn_ && i()
            })
        },
        hide: function(t, e, i) {
            e ? (this.element.css({
                left: t ? -this.width : this.width,
                display: "none"
            }), typeof i == _fn_ && i()) : this.element.stop().animate({
                left: t ? -this.width : this.width
            }, this.opt.duration, this.opt.easing, function() {
                $(this).css({
                    display: "none"
                }), typeof i == _fn_ && i()
            })
        }
    }),
    SliderItem = BaseClass.extend({
        __className: "SliderItem",
        init: function(t) {
            this._id = !1, this.inited = !1, this.id = 0, this.delegate = !1, this.element = !1, this.opt = {
                duration: 450,
                easing: "swing"
            }, this.setOptions(t), this.put() && (this.block = [], this.img = {
                obj: !1,
                width: 0,
                height: 0,
                loaded: !1
            }, this.width = 0, this.height = 0, this.create())
        },
        create: function() {
            var t, e = this;
            if (this.id != this.delegate.pos && this.element.css({
                    left: __app__.ww
                }), t = this.element.children("img"), t.length) {
                var i = t[0];
                this.img.obj = $(i), i.complete || i.height ? this.imgLoaded({
                    type: "load"
                }) : this.img.obj.bind("load error", function(t) {
                    e.imgLoaded(t)
                })
            } else this.img = !1;
            this.inited = !0
        },
        imgLoaded: function(t) {
            switch (t.type) {
                case "error":
                    this.img.obj && this.img.obj.remove(), this.img = !1;
                    break;
                case "load":
                    this.img.loaded = !0, this.img.width = this.img.obj[0].width, this.img.height = this.img.obj[0].height, this.resize()
            }
        },
        show: function(t, e, i) {
            e ? (this.element.css({
                display: "block",
                left: 0
            }), typeof i == _fn_ && i()) : this.element.stop().css({
                left: t ? this.width : -this.width,
                display: "block"
            }).animate({
                left: 0
            }, this.opt.duration, this.opt.easing, function() {
                typeof i == _fn_ && i()
            })
        },
        hide: function(t, e, i) {
            e ? (this.element.css({
                left: t ? -this.width : this.width,
                display: "none"
            }), typeof i == _fn_ && i()) : this.element.stop().animate({
                left: t ? -this.width : this.width
            }, this.opt.duration, this.opt.easing, function() {
                $(this).css({
                    display: "none"
                }), typeof i == _fn_ && i()
            })
        },
        resize: function(t, e) {
            this.width = t, this.height = e, this.element.css({
                width: this.width,
                height: this.height
            }), this.img && this.img.loaded && this.reposObject(this.img, {
                ww: this.width,
                wh: this.height
            })
        },
        remove: function() {
            this.rm()
        }
    }),
    SliderDots = BaseClass.extend({
        init: function(t) {
            this.delegate = !1, this.element = !1, this.opt = {}, this.setOptions(t), this.act = 0, this.dot = [], this.create()
        },
        create: function() {
            var t = this,
                e = this.find(this.element, ".dot");
            if (e)
                for (var i = 0; i < e.length; i++) {
                    var s = $(e[i]).bind("click", {
                        id: i,
                        dot: s
                    }, function(e) {
                        t.mouseDot(e)
                    });
                    this.dot.push(s)
                }
        },
        mouseDot: function(t) {
            var e = t.data.id,
                i = this.dot[e];
            switch (t.type) {
                case "click":
                    if (this.act == e) return;
                    this.dot[this.act].removeClass("act"), i.hasClass("act") || i.addClass("act"), this.act = e
            }
        },
        remove: function() {}
    }),
    SliderArrows = BaseClass.extend({
        init: function(t) {
            this.delegate = !1, this.element = !1, this.opt = {}, this.setOptions(t);
            var e;
            e = this.find(this.element, ".arrl"), this.arrl = e ? e : !1, e = this.find(this.element, ".arrr"), this.arrr = e ? e : !1, this.arrl && this.arrr && this.create()
        },
        create: function() {
            var t = this;
            this.arrl && this.arrl.bind("click mouseenter mouseleave", {
                dir: !1
            }, function(e) {
                t.mouseArrow(e)
            }), this.arrr && this.arrr.bind("click mouseenter mouseleave", {
                dir: !0
            }, function(e) {
                t.mouseArrow(e)
            })
        },
        mouseArrow: function(t) {
            {
                var e = t.data.dir;
                e ? this.arrr : this.arrl
            }
            switch (t.type) {
                case "click":
                    e ? this.delegate.nextItem() : this.delegate.prevItem();
                    break;
                case "mouseenter":
                    break;
                case "mouseleave":
            }
        },
        remove: function() {
            this.arrl && this.arrl.unbind("click mouseenter mouseleave"), this.arrr && this.arrr.unbind("click mouseenter mouseleave")
        }
    }),
    WNDController = BaseClass.extend({
        init: function(t) {
            this.element = !1, this.opt = {
                bgOpacity: .5,
                duration: 100,
                easing: "easeInOutQuint",
                minWidth: 300,
                maxWidth: 960
            }, this.setOptions(t), this.bg = $("<div></div>", {
                id: "WNDbg"
            }).css({
                opacity: this.opt.bgOpacity,
                display: "none"
            }), this.cnt = $("<div></div>", {
                id: "WNDCnt"
            }).css({
                display: "none"
            }), this.visible = !1, this.activeWnd = !1, this.wnd = [], this.ww = 0, this.wh = 0;
            var e = this;
            $(window).resize(function() {
                e.resize()
            }), this.cnt.bind("click touchend", function(t) {
                t.target == this && e.close()
            })
        },
        create: function() {
            return $(document.body).append(this.bg).append(this.cnt), this.resize(), this
        },
        resize: function() {
            this.ww = $(window).width(), this.wh = $(window).height(), this.ww < this.opt.maxWidth && (this.opt.maxWidth = this.ww - 40), this.bg.css({
                width: this.ww,
                height: this.wh
            }), this.cnt.css({
                width: this.ww,
                height: this.wh
            })
        },
        reg: function(t, e) {
            if (this.wnd[t]) return this.wnd[t];
            typeof e == _un_ && (e = {}), e._delegate = this, e._id = t;
            var i = new WNDItem(e);
            return this.wnd[t] = i, i
        },
        drop: function(t) {
            this.wnd[t] && (this.wnd[t] == this.activeWnd && (this.activeWnd = null), this.wnd[t].destroy(), this.wnd[t] = null, delete this.wnd[t])
        },
        show: function(t) {
            __app__.setFixedContent(!0);
            this.visible = !0, this.bg.css({
                opacity: 0,
                display: "block"
            }).animate({
                opacity: this.opt.bgOpacity
            }, this.opt.duration, this.opt.easing), this.cnt.css({
                opacity: 0,
                display: "block"
            }).animate({
                opacity: 1
            }, this.opt.duration, this.opt.easing, function() {
                typeof t == _fn_ && t()
            })
        },
        close: function(t) {
            var e = this;
            this.visible = !1, this.bg.animate({
                opacity: 0
            }, this.opt.duration, this.opt.easing, function() {
                e.bg.css({
                    display: "none"
                })
            }), this.cnt.animate({
                opacity: 0
            }, this.opt.duration, this.opt.easing, function() {
                e.cnt.css({
                    display: "none"
                }), __app__.setFixedContent(!1), typeof t == _fn_ && t()
            })
        },
        prepareToSwitch: function(t) {
            this.visible || this.cnt.css({
                display: "block"
            });
            for (var e = 0; e < t.length; e++) t[e].recalc();
            this.visible || this.cnt.css({
                display: "none"
            })
        },
        present: function(t) {
            var e = [];
            this.activeWnd && e.push(this.activeWnd), e.push(t), this.prepareToSwitch(e);
            var i = this;
            this.visible || this.show(function() {
                i.activeWnd && i.activeWnd.hide(), i.activeWnd = t, t.show()
            })
        }
    }),
    WNDItem = BaseClass.extend({
        init: function(t) {
            this.id = !1, this.delegate = !1, this.opt = {
                duration: 100,
                easing: "easeInOutQuint"
            }, this.setOptions(t), this.top = 0, this.left = 0, this.width = 0, this.height = 0, this.boxWidth = 0, this.boxHeight = 0, this.element = $("<div></div>").addClass("WND").css({
                display: "none"
            }).appendTo(this.delegate.cnt), this.box = $("<div></div>").addClass("WNDBox").appendTo(this.element), this.visible = !1, this.title = !1, this.WNDTitle = !1, this.WNDButtons = !1, this.buttons = []
        },
        recalc: function() {
            this.visible || this.element.css({
                display: "block"
            });
            var t = this.box.find("div");
            t && (t = $(t[0]), this.boxWidth = t.outerWidth(!0), this.boxHeight = t.outerHeight(!0), this.boxWidth > this.delegate.opt.maxWidth ? this.boxWidth = this.delegate.opt.maxWidth : this.boxWidth < this.delegate.opt.minWidth && (this.boxWidth = this.delegate.opt.minWidth), this.box.css({
                width: this.boxWidth,
                height: this.boxHeight
            }), this.width = this.element.outerWidth(!0), this.height = this.element.outerHeight(!0), this.top = Math.round((this.delegate.wh - this.height) / 2), this.left = Math.round((this.delegate.ww - this.width) / 2), (this.top < 0 || this.top + this.height > __app__.wh) && (this.top = 0), this.element.css({
                top: this.top,
                left: this.left
            })), this.visible || this.element.css({
                display: "none"
            })
        },
        setTitle: function(t) {
            return this.WNDTitle || (this.WNDTitle = $("<div><span></span></div>").addClass("WNDTitle").insertBefore(this.box)), this.title = t, this.WNDTitle.find("span").html(this.title), this
        },
        addButton: function(t, e, i) {
            this.WNDButtons || (this.WNDButtons = $("<div></div>").addClass("WNDButtons").appendTo(this.element));
            var s = this.buttons.length,
                n = $("<div></div>").addClass("button").html(t).appendTo(this.WNDButtons);
            typeof e == _fn_ && (typeof i == _un_ && (i = {}), i.id = s, i.wnd = this, n.bind("click", i, e)), this.buttons.push({
                id: s,
                cb: e,
                data: i,
                title: t,
                button: n
            })
        },
        loadHTML: function(t, e, i) {
            typeof e == _un_ && (e = {}), e.ajax = 1;
            var s = this;
            $.ajax({
                url: t,
                type: "POST",
                dataType: "json",
                data: e,
                beforeSend: function() {
                    s.html("Loading...")
                }
            }).done(function(t) {
                t.status > 0 || (s.html(t.html, i), s.delegate.present(s))
            }).fail(this.ajaxFailFunction).always(function() {})
        },
        html: function(t, e) {
            this.box.html(t), this.recalc(), typeof e == _fn_ && e(this)
        },
        show: function(t) {
            this.visible = !0, this.element.css({
                opacity: 0,
                display: "block",
                top: this.top,
                left: this.left
            }).animate({
                opacity: 1
            }, this.opt.duration, this.opt.easing, function() {
                typeof t == _fn_ && t()
            })
        },
        hide: function(t) {
            this.visible = !1, this.element.animate({
                opacity: 0
            }, this.opt.duration, this.opt.easing, function() {
                self.bg.css({
                    display: "none"
                }), typeof t == _fn_ && t()
            })
        },
        present: function(t) {
            this.delegate.present(this, t)
        },
        drop: function() {
            this.delegate.drop(this.id)
        },
        destroy: function() {
            for (var t = 0, e = this.buttons.length; e > t; t++) this.buttons[t].button.remove();
            delete this.buttons, this.WNDTitle && this.WNDTitle.remove(), this.box.remove(), this.element.remove()
        }
    }),
    contentBlockController = BaseClass.extend({
        __className: "contentBlockController",
        init: function(t) {
            if (this.element = !1, this.inWnd = !1, this.opt = {
                    url: _adminPath + "/content",
                    usr: 0,
                    grp: 0,
                    tools: !0,
                    destination: !1
                }, this.setOptions(t), this.element || (this.element = $(document.body)), this.put()) {
                var e = this.element.attr("ident").toString().split(".");
                this.opt.usr = e[0], this.opt.trg = e[1], this.opt.destination = this.element.attr("destination") || !1, this.opt.destination && (this.opt.url += "/" + this.opt.destination), this.editingBlock = !1, this.block = [], this.collector(), this.xhr = !1;
                var i = this;
                this.addButtons = $("<div></div>").addClass("addButtons").appendTo(this.element), this.addText = $("<div></div>", {
                    title: "добавить текст"
                }).addClass("addBlock icon icon-text").html(" <span>текст</span>").bind("click", function() {
                    i.addBlock(1)
                }).appendTo(this.addButtons), this.addPhoto = $("<div></div>", {
                    title: "добавить фото"
                }).addClass("addBlock icon icon-photo").html(" <span>фото</span>").bind("click", function() {
                    i.addBlock(2)
                }).appendTo(this.addButtons), this.addGallery = $("<div></div>", {
                    title: "добавить галерею"
                }).addClass("addBlock icon icon-gallery").html(" <span>галерея</span>").bind("click", function() {
                    i.addBlock(3)
                }).appendTo(this.addButtons), this.addVideo = $("<div></div>", {
                    title: "добавить видео"
                }).addClass("addBlock icon icon-video").html(" <span>видео</span>").bind("click", function() {
                    i.addBlock(4)
                }).appendTo(this.addButtons), this.reposing = !1, this.reposingBlock = !1, this.reposingBlockID = !1, this.reposMarker = !1, this.reposMarker || (this.reposMarker = $("<div></div>").addClass("reposMarker").css({
                    opacity: 0,
                    zIndex: 1e4
                }), this.element.append(this.reposMarker))
            }
        },
        setEditingBlock: function(t) {
            this.editingBlock != t && (this.editingBlock && this.editingBlock.view(), this.editingBlock = t)
        },
        unsetEditingBlock: function(t) {
            this.editingBlock == t && (this.editingBlock = !1)
        },
        collector: function() {
            for (var t = this.element.find(".cntBlk"), e = 0, i = t.length; i > e; e++) this.processElement($(t[e]))
        },
        processElement: function(t) {
            var e = t.attr("mode"),
                i = this.block.length;
            this.block.push(new window["contentBlock" + e]({
                _id: i,
                _delegate: this,
                element: t,
                mode: e,
                _inWnd: this.inWnd
            }))
        },
        addBlock: function(t) {
            t || (t = parseInt(prompt("Режим:"))), t && (this.xhr = $.ajax({
                url: this.opt.url + ".create",
                type: "GET",
                dataType: "json",
                data: {
                    cmd: "create",
                    usr: this.opt.usr,
                    trg: this.opt.trg,
                    mode: t,
                    ajax: 1
                },
                context: this
            }).done(function(t) {
                if (!(t.status > 0)) {
                    var e = $(t.html);
                    this.addButtons ? e.insertBefore(this.addButtons) : e.appendTo(this.element), this.processElement(e), this.inWnd && this.inWnd.recalc()
                }
            }).fail(this.ajaxFailFunction).always(function() {}))
        },
        __startRepos: function(t) {
            this.reposing = !0, this.reposingBlock = t, this.reposingBlockID = t.id;
            for (var e = 0; e < this.block.length; e++) this.block[e].id != t.id && this.block[e].element.css({
                opacity: .5
            })
        },
        __setReposMarkerTo: function(t, e) {
            var i = t.element.offset().top - this.element.offset().top + (e ? t.element.height() : 0);
            this.reposMarker.css({
                opacity: 1,
                top: i
            })
        },
        __swapBlocks: function(t, e) {
            this.block[t.id] = e, this.block[e.id] = t;
            var i = e.id;
            e.id = t.id, t.id = i
        },
        __reposBlockTo: function(t, e) {
            if (e && t.id + 1 == this.reposingBlockID || !e && t.id - 1 == this.reposingBlockID) return this.__stopRepos(), !1;
            e ? this.reposingBlock.element.insertAfter(t.element) : this.reposingBlock.element.insertBefore(t.element), this.__swapBlocks(this.reposingBlock, t), t.updateEvents();
            var i = t.collectAjaxData(t.collectData({
                cmd: "repos",
                from: t.grp,
                to: this.reposingBlock.grp
            }));
            $.ajax(i).done(function() {
                this.reposing = this.reposingBlock = this.reposingBlockID = !1
            }).fail(this.ajaxFailFunction).always(function() {}), this.__stopRepos()
        },
        __unsetReposMarker: function() {
            this.reposMarker.css({
                opacity: 0
            })
        },
        __stopRepos: function() {
            this.reposMarker.css({
                opacity: 0
            });
            for (var t = 0; t < this.block.length; t++) this.block[t].element.css({
                opacity: 1
            })
        }
    }),
    contentBlock = BaseClass.extend({
        __className: "contentBlock",
        init: function(t) {
            this.id = !1, this.element = !1, this.delegate = !1, this.inWnd = !1, this.state = 0, this.mo = !1, this.opt = {}, this.setOptions(t), this.xhr = !1, this.put() && this.process()
        },
        process: function() {
            var t = this.element.attr("ident").split(".");
            this.usr = t[0], this.trg = t[1], this.grp = t[2], this.mode = parseInt(this.element.attr("mode")), this.busy = !1, this.state || (this.state = parseInt(this.element.attr("state")) || 0), this.updateEvents()
        },
        processFileGallery: function() {
            var t = this,
                e = this.element.find(".form-gallery");
            this.fileGallery = e.length ? e : !1, this.fileGallery && (e = $("span.checkAllFiles"), this.checkAllFiles = e.length ? e : !1, e = $("span.deleteCheckedFiles"), this.deleteCheckedFiles = e.length ? e : !1, this.checkAllFiles && this.checkAllFiles.bind("click", function() {
                var e = !1,
                    i = t.fileGallery.find("input.cb-del");
                i.each(function() {
                    e || this.checked && (e = !0)
                }), i.each(e ? function() {
                    this.checked = !1
                } : function() {
                    this.checked = !0
                })
            }), this.deleteCheckedFiles && this.deleteCheckedFiles.bind("click", function() {
                var e = [];
                t.fileGallery.find(".cb-del").each(function() {
                    this.checked && e.push(this.value)
                }), e.length ? $.ajax(t.collectAjaxData(t.collectData({
                    cmd: "file-delete",
                    ids: e,
                    post: 1
                }))).done(function() {}).always(function() {
                    this.reloadFileGallery()
                }) : alert("Не выбрано ни одного файла для удаления")
            }));
            var i = this.element.find(".file-upload");
            i.length && new BaseUploader({
                _element: $(i[0]),
                handle: "file",
                url: this.delegate.opt.url + "/" + this.usr + "/" + this.trg + "/" + this.grp,
                cmd: "upload",
                complete: function() {
                    t.reloadFileGallery()
                }
            })
        },
        reloadFileGallery: function() {
            $.ajax(this.collectAjaxData(this.collectData({
                cmd: "file-filegallery"
            }))).done(function(t) {
                this.element.find(".fileUpload").html(t.html), this.processFileGallery()
            })
        },
        updateEvents: function() {
            var t = this;
            switch (this.element.unbind("click touchend mouseenter mouseleave mousemove"), this.state) {
                case 0:
                    if (this.delegate.opt.tools) {
                        var e = $("<div></div>").addClass("tool").html('<div class="icon icon-reload" title="обновить"></div> &nbsp; <div class="icon icon-repos" title="переместить"></div> &nbsp; <div class="icon icon-edit" title="редактировать"></div> &nbsp; <div class="icon icon-delete" title="удалить"></div>').appendTo(this.element);
                        e.find(".icon-reload").bind(tt.is.click, function() {
                            t.view()
                        }), e.find(".icon-repos").bind(tt.is.click, function(e) {
                            e.preventDefault(), e.stopPropagation(), t.delegate.__startRepos(t)
                        }), e.find(".icon-edit").bind(tt.is.click, function() {
                            t.edit()
                        }), e.find(".icon-delete").bind(tt.is.click, function() {
                            confirm("Удалить?") && t.drop()
                        })
                    }
                    this.element.bind("click touchend mouseenter mouseleave mousemove", function(e) {
                        t.mouseBlock(e)
                    });
                    var i = this.find(this.element, ".cntBlk-slider");
                    i && new GalleryViewer({
                        _delegate: this,
                        _element: i,
                        viewerMode: "slider"
                    });
                    break;
                case 1:
                    this.processFileGallery(), this.saveButton = this.element.find(".saveBlock").bind(tt.is.click, function() {
                        t.save()
                    }), this.element.find(".cnt-fld").redactor({
                        lang: "ru",
                        air: !1,
                        autoresize: !0,
                        buttons: ["html", "|", "bold", "italic", "|", "link"],
                        airButtons: ["html", "|", "bold", "italic", "|", "link"]
                    })
            }
        },
        collectData: function(t) {
            return typeof t == _un_ && (t = {}), t.usr = this.usr, t.trg = this.trg, t.grp = this.grp, t
        },
        collectAjaxData: function(t) {
            return t.ajax = 1, {
                url: this.delegate.opt.url + "/" + t.usr + "/" + t.trg + "/" + t.grp + "." + t.cmd,
                data: t,
                type: t.post ? "POST" : "GET",
                dataType: "json",
                context: this
            }
        },
        view: function() {
            if (!this.busy) {
                this.busy = !0, this.delegate.unsetEditingBlock(this);
                this.xhr = $.ajax(this.collectAjaxData(this.collectData({
                    cmd: "view"
                }))).done(function(t) {
                    this.state = 0;
                    var e = $(t.html);
                    this.element.replaceWith(e), this.element = $(e[0]), this.process(), this.inWnd && this.inWnd.recalc()
                }).fail(this.ajaxFailFunction).always(function() {
                    this.busy = !1
                })
            }
        },
        edit: function() {
            if (!this.busy) {
                this.busy = !0, this.delegate.setEditingBlock(this);
                this.xhr = $.ajax(this.collectAjaxData(this.collectData({
                    cmd: "edit"
                }))).done(function(t) {
                    this.busy = !1, this.state = 1, this.element.html(t.html), this.updateEvents(), this.inWnd && this.inWnd.recalc()
                }).fail(this.ajaxFailFunction).always(function() {
                    this.busy = !1
                })
            }
        },
        save: function() {
            if (!this.busy) {
                this.busy = !0;
                var t = this.collectData({
                        cmd: "save",
                        post: 1
                    }),
                    e = this.element.find(".style-fld"),
                    i = this.element.find(".align-fld"),
                    s = this.element.find(".cnt-fld"),
                    n = this.element.find(".code-fld");
                e.length && (t.style = e.val()), i.length && (t.align = i.val()), s.length && (t.cnt = s.val()), n.length && (t.code = n.val()), this.xhr = $.ajax(this.collectAjaxData(t)).done(function() {
                    this.busy = !1, this.view()
                }).fail(this.ajaxFailFunction).always(function() {
                    this.busy = !1
                })
            }
        },
        drop: function() {
            this.busy || (this.busy = !0, this.xhr = $.ajax(this.collectAjaxData(this.collectData({
                cmd: "drop",
                post: 1
            }))).done(function() {
                this.busy = !1, this.remove()
            }).fail(this.ajaxFailFunction).always(function() {
                this.busy = !1
            }))
        },
        remove: function() {
            this.element.remove()
        },
        mouseBlock: function(t) {
            if (this.delegate.reposing) switch (t.type) {
                case "click":
                case "touchend":
                    if (this == this.delegate.reposingBlock) return void this.delegate.__stopRepos();
                    var e = Math.round(this.element.offset().top + this.element.outerHeight() / 2) < t.pageY;
                    this.delegate.__reposBlockTo(this, e);
                    break;
                case "mousemove":
                    if (!this.mo) break;
                case "mouseenter":
                    if (this.mo = !0, this.delegate.reposingBlock == this) return;
                    var e = Math.round(this.element.offset().top + this.element.outerHeight() / 2) < t.pageY;
                    this.delegate.__setReposMarkerTo(this, e);
                    break;
                case "mouseleave":
                    if (this.mo = !1, this.delegate.reposingBlock == this) return;
                    this.delegate.__unsetReposMarker()
            }
        }
    }),
    contentBlock1 = contentBlock.extend({}),
    contentBlock2 = contentBlock.extend({}),
    contentBlock3 = contentBlock.extend({}),
    contentBlock4 = contentBlock.extend({}),
    contentBlockGallery = BaseClass.extend({
        __className: "contentBlockGallery",
        init: function(t) {
            this.element = !1, this.opt = {}, this.setOptions(t), this.put() && (this.act = -1, this.item = [], this.create())
        },
        create: function() {
            this.imgCnt = this._div(!1, {
                position: "relative",
                width: 736,
                height: 414,
                display: "none",
                clear: "both"
            }).insertAfter(this.element), this.img = $("<img></img>").appendTo(this.imgCnt);
            var t = this,
                e = this.element.find("div.cntBlkPV");
            if (e.length)
                for (var i = 0, s = e.length; s > i; i++) {
                    var n = $(e[i]),
                        o = {
                            id: i,
                            obj: n,
                            imageSrc: n.attr("img")
                        },
                        a = n.width(),
                        r = n.height(),
                        h = $("<div></div>").css({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            height: r - 10,
                            width: a - 10,
                            border: "5px #32516e solid",
                            display: "none"
                        }).appendTo(n);
                    n.bind(window.tt.is.mouseEvents, {
                        i: i,
                        border: h
                    }, function(e) {
                        t.click(e)
                    }), this.item.push(o)
                }
        },
        click: function(t) {
            switch (t.type) {
                case "click":
                case "touchend":
                    if (t.data.i == this.act) return this.imgCnt.slideUp(), void(this.act = -1);
                    this.imgCnt.css({
                        display: "block"
                    }), this.act = t.data.i;
                    var e = this.item[t.data.i];
                    this.img.attr("src", e.imageSrc), $("body,html").animate({
                        scrollTop: this.imgCnt.offset().top + this.imgCnt.height() - __app__.wh + 20
                    });
                    break;
                case "mouseenter":
                    t.data.border.css({
                        display: "block"
                    });
                    break;
                case "mouseleave":
                    t.data.border.css({
                        display: "none"
                    })
            }
        }
    }),
    MAP_STYLES = [{
        featureType: "administrative",
        elementType: "all",
        stylers: [{
            visibility: "on"
        }, {
            lightness: 33
        }]
    }, {
        featureType: "landscape",
        elementType: "all",
        stylers: [{
            color: "#f2e5d4"
        }]
    }, {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{
            color: "#c5dac6"
        }]
    }, {
        featureType: "poi.park",
        elementType: "labels",
        stylers: [{
            visibility: "on"
        }, {
            lightness: 20
        }]
    }, {
        featureType: "road",
        elementType: "all",
        stylers: [{
            lightness: 20
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{
            color: "#c5c6c6"
        }]
    }, {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{
            color: "#e4d7c6"
        }]
    }, {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [{
            color: "#fbfaf7"
        }]
    }, {
        featureType: "water",
        elementType: "all",
        stylers: [{
            visibility: "on"
        }, {
            color: "#acbcc9"
        }]
    }],
    Maps = BaseClass.extend({
        __className: "Maps",
        init: function(t) {
            this._id = !1, this.inited = !1, this.mobile = !1, this.element = !1, this.opt = {}, this.setOptions(t), this.put() && (this.pos = 0, this.item = [], this.count = 0, this.switching = !1, this.video = [], this.isPlaying = !1, this.ContactsVideoMode = !1, this.address = !1, this.create())
        },
        infoBubbleText: {
            gz: '<div class="infoBubbleCnt">21 F, Pearl River Tower, No. 15,<br> West Zhujiang Road, Tianhe District,<br> Guangzhou, 510623</div>',
            msk: '<div class="infoBubbleCnt">105064, Москва, Нижний Сусальный пер.,<br>дом 5, строение 17</div>',
            hk: '<div class="infoBubbleCnt">4210, Office Tower, Convention Plaza,<br>1 Harbor Road Wanchai, Hong Kong</div>',
            vld: '<div class="infoBubbleCnt">Офисы 408, 409, 411,<br>ул. Пологая 3, г. Владивосток</div>',
            bla: '<div class="infoBubbleCnt">675000, Амурская обл.,<br> г. Благовещенск, ул. Набережная реки Зея,<br> д. 32, литер А.</div>',
            khv: '<div class="infoBubbleCnt">Офис 1, ул. Ленинградская 62В,<br>г. Хабаровск</div>'
        },
        infoBubbleTextMobile: {
            gz: "Guangzhou city, Baiyun district,<br> Shijing ZhendaGang country,<br> Dagangxijie street 13",
            msk: "105064, Москва, Нижний Сусальный пер.,<br>дом 5, строение 17"
        },
        create: function() {
            var t, e = this;
            if (t = this.find(this.element, ".item"))
                for (var i = 0; i < t.length; i++) {
                    var s = $(t[i]),
                        n = s.attr("geo"),
                        o = {
                            id: i,
                            obj: s,
                            tid: s.attr("tid"),
                            lat: s.attr("lat"),
                            lng: s.attr("lng"),
                            zoom: parseInt(s.attr("zoom")) || 16,
                            geo: n,
                            china: "CN" == n
                        };
                    this.item.push(o)
                }
            if (this.mobile && (this.address = $("#map-address"), this.address.length || (this.address = !1)), t = $("#maps-video"), t.length && (this.mapsVideo = t, this.ContactsVideoMode = this.mapsVideo.hasClass("contacts-mode"), t = this.find(this.mapsVideo, "video")))
                for (var i = 0; i < t.length; i++) {
                    var s = $(t[i]),
                        a = {
                            obj: s,
                            width: 400,
                            height: 226,
                            isPlaying: !1
                        };
                    a.obj.css({
                        display: "none"
                    }), this.video.push(a)
                }
            this.count = this.item.length;
            var r = function(t, i) {
                if (!i.china) {
                    i.obj.css({
                        zIndex: t ? "auto" : 10
                    }), i.mapPosition = new google.maps.LatLng(i.lat, i.lng), i.map = new google.maps.Map(i.obj[0], {
                        zoom: i.zoom,
                        center: i.mapPosition,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        scrollwheel: !1,
                        panControl: !1,
                        zoomControl: !0,
                        scaleControl: !1,
                        mapTypeControl: !1,
                        streetViewControl: !1,
                        zoomControlOptions: {
                            style: google.maps.ZoomControlStyle.SMALL,
                            position: google.maps.ControlPosition.TOP_RIGHT
                        }
                    }), i.obj.css({
                        opacity: t ? 0 : 1
                    });
                    var s = e.mobile ? {
                        url: "/m/img/marker.png",
                        size: new google.maps.Size(40, 54),
                        scaledSize: new google.maps.Size(40, 54),
                        origin: new google.maps.Point(0, 0)
                    } : "/img/marker.png";
                    i.marker = new google.maps.Marker({
                        draggable: !1,
                        position: i.mapPosition,
                        animation: e.mobile ? !1 : google.maps.Animation.DROP,
                        icon: s
                    }), i.content = e.infoBubbleText[i.tid], google.maps.event.addListener(i.map, "tilesloaded", function() {
                        i.infoBubble = new ttInfoBubble(i), e.mobile ? i.marker.setMap(i.map) : (i.firstRun = t > 0, 0 == t && setTimeout(function() {
                            i.marker.setMap(i.map), i.infoBubble.open()
                        }, 500), google.maps.event.addListener(i.marker, "click", function() {
                            i.infoBubble.open()
                        })), tt.clrGM(i.obj), google.maps.event.clearListeners(i.map, "tilesloaded")
                    })
                }
            };
            window.tt.GMapRequest(function() {
                for (var t = 0; t < e.count; t++) r(t, e.item[t])
            });
            var h = 0;
            if (this.dots = $("#maps-menu"), this.dots.length && (t = this.dots.find("li"), t.length))
                for (var i = 0; i < t.length; i++) {
                    var s = $(t[i]);
                    s.hasClass("bull") || (s.bind("click", {
                        pos: h
                    }, function(t) {
                        e.switchMap(t.data.pos)
                    }), this.item[h].dot = s, h++)
                }
            $(window).bind("appScroll." + this.__className, function(t, i) {
                e.updateScroll(i)
            }), this.inited = !0
        },
        playVideo: function(t) {
            if (this.mapsVideo && this.video.length && typeof this.video[t] != _un_) {
                var e = this.video[t];
                e.isPlaying || (e.obj[0].play(), e.obj.css({
                    display: "block",
                    opacity: 0,
                    zIndex: 2
                }).animate({
                    opacity: 1
                }), e.isPlaying = !0)
            }
        },
        stopVideo: function(t) {
            if (this.mapsVideo && this.video.length && typeof this.video[t] != _un_) {
                var e = this.video[t];
                e.isPlaying && (e.obj.css({
                    zIndex: 1
                }).animate({
                    opacity: 0
                }, function() {
                    this.pause(), $(this).css({
                        display: "none"
                    })
                }), e.isPlaying = !1)
            }
        },
        switchMap: function(t) {
            if (t != this.pos && !this.switching) {
                this.switching = !0;
                var e = this,
                    i = this.item[this.pos],
                    s = this.item[t];
                this.isPlaying && (this.stopVideo(this.pos), this.playVideo(t)), this.pos = t, s.dot.hasClass("act") || s.dot.addClass("act"), i.dot.removeClass("act"), i.obj.stop().css({
                    zIndex: "auto"
                }).animate({
                    opacity: 0
                }, 500, "swing", function() {}), e.address && typeof this.infoBubbleTextMobile[s.tid] != _un_ && e.address.html(this.infoBubbleTextMobile[s.tid]), s.obj.stop().css({
                    zIndex: 10,
                    opacity: 0
                }).animate({
                    opacity: 1
                }, 500, "swing", function() {
                    e.switching = !1, s.firstRun && (s.china || e.mobile || s.infoBubble.open(), s.firstRun = !1)
                })
            }
        },
        resize: function(t) {
            var e = __app__.wh - __app__.fMH - this.dots.outerHeight(!0) - (__FOOTER__.miniFooter ? __FOOTER__.footerHeight : 0);
            this.element.css({
                width: t,
                height: e
            });
            for (var i = 0; i < this.item.length; i++) {
                var s = this.item[i];
                s.obj.css({
                    width: t,
                    height: e
                })
            }
            if (this.video.length)
                for (var i = 0; i < this.video.length; i++) {
                    var n = this.video[i];
                    n.ww = t, n.wh = __app__.contactsHeight, this.reposObject(n)
                }
            this.mapsVideoOffset = this.ContactsVideoMode ? this.mapsVideo ? __FOOTER__.contentHeight : 0 : this.mapsVideo ? this.mapsVideo.offset().top : 0, this.updateScroll(__app__.scrollTop)
        },
        updateScroll: function(t) {
            if (this.mapsVideo) {
                var e;
                if (e = this.ContactsVideoMode ? t + __app__.wh < this.mapsVideoOffset : t + __app__.wh < this.mapsVideoOffset || t > this.mapsVideoOffset + __app__.contactsHeight - __app__.fMH, e && this.isPlaying) {
                    for (var i = 0; i < this.video.length; i++) this.stopVideo(i);
                    this.isPlaying = !1
                } else e || this.isPlaying || (this.playVideo(this.pos), this.isPlaying = !0)
            }
        },
        remove: function() {
            $(window).unbind("appScroll." + this.__className), this.rm()
        }
    }),
    TransitVideo = BaseClass.extend({
        __className: "TransitVideo",
        init: function(t) {
            this._id = !1, this.inited = !1, this.element = !1, this.opt = {
                delay: 10
            }, this.setOptions(t), this.opened = !1, this.popup = !1, this.triggers = !1, this.videoPlayer = !1, this.viewingTrigger = !1, this.closeTriggerX = !1, this.closeTrigger = !1, this.create()
        },
        create: function() {
            var t = this;
            if (this.getCookie("hideTransitVideo")) return !1;
            if (this.opened = !1, this.popup = document.getElementById("transit-video-popup"), this.trigger = document.querySelector(".js-transit-video-trigger"), !this.popup || !this.trigger) return !1;
            var e = parseInt(this.trigger.getAttribute("trigger-delay"));
            if (e && (this.opt.delay = e), !this.trigger) return !1;
            var i = document.querySelector(".js-transit-video-player");
            if (this.videoPlayer = new VideoPlayer({
                    _element: i
                }), !this.videoPlayer._inited) return !1;
            if (this.videoPlayer.onReady = function() {
                    t.opened && t.videoPlayer.play()
                }, !this.popup) return !1;
            this.clickZone = this.trigger.querySelector(".click-zone"), this.clickZone && this.bindEvent(this.clickZone, "click", function(e) {
                e.target == this && t.openPopup()
            }), this.bindEvent(this.popup, "click", function(e) {
                this == e.target && t.closePopup()
            }), this.close = this.popup.querySelector(".js-close"), this.close && this.bindEvent(this.close, "click", function() {
                t.closePopup()
            });
            var s = function(e) {
                t.cancelEvent(e), t.hideTrigger()
            };
            this.closeTrigger = this.trigger.querySelector(".js-close-trigger"), this.closeTriggerX = this.trigger.querySelector(".js-close-trigger-x"), this.closeTrigger && this.bindEvent(this.closeTrigger, "click", s), this.closeTriggerX && this.bindEvent(this.closeTriggerX, "click", s), setTimeout(function() {
                t.addClass(t.trigger, "view"), t.viewingTrigger = !0
            }, 1e3 * this.opt.delay)
        },
        openPopup: function() {
            this.addClass(this.popup, "opened"), this.opened = !0, __app__.setFixedContent(!0), this.videoPlayer && this.videoPlayer.ready && (this.videoPlayer.resize(), this.videoPlayer.play()), this.removeClass(this.trigger, "view"), this.viewingTrigger = !1
        },
        closePopup: function() {
            this.removeClass(this.popup, "opened"), __app__.setFixedContent(!1), this.videoPlayer && this.videoPlayer.ready && this.videoPlayer.pause(), this.addClass(this.trigger, "view"), this.viewingTrigger = !0
        },
        hideTrigger: function() {
            this.closePopup(), this.removeClass(this.trigger, "view"), this.viewingTrigger = !1, this.setCookie("hideTransitVideo", !0, {
                expires: 1800
            })
        }
    });
ttInfoBubble.prototype.extend = function(t, e) {
    return function(t) {
        for (var e in t.prototype) this.prototype[e] = t.prototype[e];
        return this
    }.apply(t, [e])
}, ttInfoBubble.prototype.onRemove = function() {
    this.element.css({
        display: "none"
    })
}, ttInfoBubble.prototype.onAdd = function() {
    if (!this.element) {
        switch (this.element = $("<div></div>").addClass("ttInfoBubble"), this.mode) {
            case "warehouse":
                this.element.addClass("warehouse")
        }
        this.arrow = $("<div></div>").addClass("infoBubbleArrow").appendTo(this.element), this.content = $("<div></div>").addClass("infoBubbleCnt").appendTo(this.element), this.content.html(this.pin.content);
        var t = this;
        this.closeBtn = $("<div></div>").addClass("infoBubbleClose").appendTo(this.content).bind("click", function(e) {
            e.preventDefault(), t.close()
        });
        var e = this.getPanes();
        e.overlayImage.appendChild(this.element[0])
    }
    this.element.css({
        display: "block",
        transform: "scale(0)"
    }), this.width = this.content.outerWidth(!0), this.height = this.content.outerHeight(!0), this.arrow.css({
        left: Math.round(this.width / 2) - 15,
        top: this.height - 15
    }), this.height += 21
}, ttInfoBubble.prototype.draw = function() {
    var t = this.getProjection(),
        e = t.fromLatLngToDivPixel(this.pos),
        i = this.getPanes();
    i.overlayImage.style.left = e.x - Math.round(this.width / 2) + "px", i.overlayImage.style.top = e.y - this.height + "px"
}, ttInfoBubble.prototype.open = function() {
    if (this.opened || this.switching) return !1;
    this.opened = !0, this.switching = !0, this.setMap(this.pin.map), this.pin.marker.setMap(null);
    var t = this;
    return window.setTimeout(function() {
        t.open_()
    }, 100), !0
}, ttInfoBubble.prototype.open_ = function() {
    var t = this;
    this.element.css({
        transform: "scale(0)"
    }).animate({
        transform: "scale(1)"
    }, 200, "easeInOutQuint", function() {
        t.opened = !0, t.switching = !1
    })
}, ttInfoBubble.prototype.close = function(t) {
    if (!this.opened || this.switching) return typeof t == _fn_ && t(), !1;
    this.opened = !1, this.switching = !0;
    var e = this;
    return this.element.animate({
        transform: "scale(0)"
    }, 200, "easeInOutQuint", function() {
        e.pin.marker.setMap(e.pin.map), e.close_(t)
    }), !0
}, ttInfoBubble.prototype.close_ = function(t) {
    return this.setMap(null), this.opened = !1, this.switching = !1, typeof t == _fn_ && t(), !0
};
var __Achievements__ = !1,
    Achievements = BaseClass.extend({
        __className: "Achievements",
        init: function(t) {
            this._id = !1, this.inited = !1, this.element = !1, this.opt = {}, this.setOptions(t), this.put() && (this.item = [], this.dots = !1, this.dot = [], this.pos = -1, this.dotsFixed = !1, this.dotsHeight = 0, this.dotsAtTop = !0, this.scrollingToNext = !1, this.pageY = 0, this.height = 0, this.onceFixed = !0, this.positioned = !1, __Achievements__ = this, this.create())
        },
        create: function() {
            var t, e = this;
            if (this.stage = this.find(this.element, ".stage"), t = this.find(this.element, ".item"))
                for (var i = 0; i < t.length; i++) {
                    var s = $(t[i]),
                        n = s.find(".cnt"),
                        o = n.find(".h1"),
                        a = {
                            id: i,
                            obj: s,
                            cnt: n,
                            h1: o,
                            tmr: !1,
                            curVal: 0,
                            value: parseInt(o.attr("value")),
                            append: o.attr("append") || !1
                        };
                    this.initItem(a), a.obj.css({
                        opacity: 0
                    }), this.item.push(a)
                }
            if (this.dots = this.find(this.element, ".dots"), this.dots && (t = this.find(this.dots, ".dot")))
                for (var i = 0; i < t.length; i++) {
                    var s = $(t[i]),
                        r = {
                            id: i,
                            obj: s,
                            std: s.find(".std"),
                            ovr: s.find(".ovr"),
                            act: s.find(".act"),
                            active: !1
                        };
                    s.bind("click mouseenter mouseleave", {
                        pos: i
                    }, function(t) {
                        e.mouseDot(t)
                    }), this.dot.push(r)
                }
            this.element.bind("mousewheel", function(t) {
                if (!e.onceFixed) {
                    var i = Math.round(__app__.wh / 8);
                    if (!(__app__.scrollTop < e.fixStart + i || __app__.scrollTop > e.fixEnd - i)) {
                        if (e.scrollingToNext) return void e.cancelEvent(t);
                        if (t.deltaY > 0) {
                            var s = e.pos - 1;
                            if (0 > s) return;
                            __app__.scrollTo(e.pageY + s * e.itemHeight - __app__.fMH, function() {
                                e.scrollingToNext = !1
                            })
                        } else {
                            var s = e.pos + 1;
                            if (s > e.item.length - 1) return;
                            __app__.scrollTo(e.pageY + s * e.itemHeight - __app__.fMH, function() {
                                e.scrollingToNext = !1
                            })
                        }
                        e.scrollingToNext = !0, e.cancelEvent(t)
                    }
                }
            }), $(window).bind("appScroll." + this.__className + this._id, function(t, i) {
                e.updateScroll(i)
            }), this.inited = !0
        },
        resize: function(t, e) {
            this.itemHeight = e - __app__.fMH, this.height = this.itemHeight * this.item.length, this.pageY = this.delegate.element.offset().top, this.positioned || (this.positioned = !0, this.onceFixed = !1, this.element.css({
                display: "block",
                opacity: 1,
                zIndex: 995,
                top: this.pageY
            }), this.updateScroll(0)), this.fixStart = this.pageY - __app__.fMH, this.onceFixed ? (this.fixEnd = this.fixStart + this.itemHeight - e + __app__.fMH, this.delegate.element.css({
                width: t,
                height: this.itemHeight
            }), this.element.css({
                top: this.pageY
            })) : (this.fixEnd = this.fixStart + this.height - e + __app__.fMH, this.delegate.element.css({
                width: t,
                height: this.height
            })), this.element.css({
                width: t,
                height: this.itemHeight
            }), this.stage.css({
                width: t,
                height: this.itemHeight
            }), this.dotsHeight = this.dots.outerHeight(!0), this.dotsTop = Math.round((this.itemHeight - this.dotsHeight) / 2), this.dots.css({
                top: this.dotsTop
            });
            for (var i = 0; i < this.item.length; i++) {
                var s = this.item[i];
                s.obj.css({
                    display: "block"
                }), s.cntHeight = s.cnt.outerHeight(!0), s.cntTop = Math.round((this.itemHeight - s.cntHeight) / 2), s.cntPageTop = this.pageY + this.itemHeight * i + s.cntTop, s.obj.css({
                    width: t,
                    height: this.itemHeight,
                    display: this.pos == i ? "block" : "none"
                }), s.cnt.css({
                    top: s.cntTop
                })
            }
        },
        updateScroll: function(t) {
            if (!this.onceFixed) {
                t > this.fixStart && t < this.fixEnd ? this.dotsFixed || (this.element.css({
                    position: "fixed",
                    top: __app__.fMH
                }), this.dotsFixed = !0, this.dotsAtTop = 0) : t >= this.fixEnd ? this.dotsAtTop !== !1 && (this.element.css({
                    position: "absolute",
                    top: this.pageY + this.height - this.itemHeight
                }), this.dotsFixed = !1, this.dotsAtTop = !1) : this.dotsAtTop !== !0 && (this.element.css({
                    position: "absolute",
                    top: this.pageY
                }), this.dotsFixed = !1, this.dotsAtTop = !0);
                for (var e = -1, i = 0; i < this.item.length; i++) {
                    var s = this.item[i],
                        n = t + __app__.wh < s.cntPageTop || t > s.cntPageTop + s.cntHeight - __app__.fMH;
                    n ? this.initItem(s) : e = i
                }
                this.actDot(e)
            }
        },
        setOnceFixed: function() {
            if (!this.onceFixed) {
                var t = this;
                this.onceFixed = !0, this.element.unbind("mousewheel"), $(window).bind("mousewheel", function(e) {
                    t.cancelEvent(e)
                }), $("html,body").stop(), this.element.css({
                    position: "absolute",
                    top: this.pageY
                }), this.delegate.element.css({
                    height: this.itemHeight + 60
                }), window.scrollTo(0, this.pageY - __app__.fMH), __app__.resize()
            }
        },
        mouseDot: function(t) {
            var e = t.data.pos,
                i = (this.item[e], this.dot[e]);
            switch (t.type) {
                case "mouseenter":
                    if (i.active) return;
                    i.std.stop().animate({
                        opacity: 0
                    }, 500, "swing"), i.ovr.stop().animate({
                        opacity: 1
                    }, 500, "swing");
                    break;
                case "mouseleave":
                    if (i.active) return;
                    i.std.stop().animate({
                        opacity: 1
                    }, 500, "swing"), i.ovr.stop().animate({
                        opacity: 0
                    }, 500, "swing");
                    break;
                case "click":
                    this.onceFixed ? (__app__.scrollTo(this.pageY - __app__.fMH), this.initItem(this.item[e]), this.actDot(e)) : __app__.scrollTo(this.pageY + e * this.itemHeight - __app__.fMH)
            }
        },
        actDot: function(t) {
            if (__app__.inited && this.pos != t) {
                var e, i = (t > this.pos, this),
                    s = !1,
                    n = !1;
                t >= this.item.length - 1 && (this.setOnceFixed(), n = function() {
                    $(window).unbind("mousewheel"), i.scrollingToNext = !1
                }), this.pos >= 0 && (e = this.dot[this.pos], e.act.stop().animate({
                    opacity: 0
                }, 500, "swing"), e.std.stop().animate({
                    opacity: 1
                }, 500, "swing"), e.active = !1, e.obj.css({
                    cursor: "pointer"
                }), t >= 0 && (this.item[this.pos].h1.stop(), this.item[this.pos].obj.stop().animate({
                    opacity: 0
                }, 250, "swing", function() {
                    $(this).css({
                        display: "none"
                    })
                }), s = !0)); {
                    this.pos
                }
                this.pos = t, t >= 0 && (e = this.dot[this.pos], e.std.stop().animate({
                    opacity: 0
                }, 500, "swing"), e.ovr.stop().animate({
                    opacity: 0
                }, 500, "swing"), e.act.stop().animate({
                    opacity: 1
                }, 500, "swing"), e.active = !0, e.obj.css({
                    cursor: "default"
                }), this.item[t].obj.stop().css({
                    opacity: 0,
                    display: "block"
                }).animate({
                    opacity: 1
                }, 250, "swing"), this.animateItemValue(this.item[t], n))
            }
        },
        initItem: function(t) {
            t.inited || (t.curVal = 0, t.h1.html("0"), t.inited = !0)
        },
        animateItemValue: function(t, e) {
            if (t.inited) {
                t.inited = !1;
                var i = this;
                this.scrollingToNext = !0, t.h1.stop().css({
                    curVal: 0
                }).animate({
                    curVal: t.value
                }, {
                    duration: 500,
                    easing: "easeOutSine",
                    step: function(e) {
                        t.curVal = e;
                        for (var i = 0, s = "", n = Math.round(parseInt(e)).toString(), o = 0; o < n.length; o++) s = n.substr(n.length - o - 1, 1) + s, i++, i >= 3 && (s = "<div></div>" + s, i = 0);
                        t.append && (s += t.append), t.h1.html(s)
                    },
                    always: function() {
                        i.scrollingToNext = !1, typeof e == _fn_ && e()
                    }
                })
            }
        },
        remove: function() {
            $(window).unbind("appScroll." + this.__className + this._id), this.rm()
        }
    }),
    BlockSwitcher = BaseClass.extend({
        init: function(t) {
            this.element = !1, this.opt = {}, this.setOptions(t), this.actItem = !1, this.item = [], this.create()
        },
        create: function() {
            var t = this,
                e = this.find(this.element, ".item");
            if (e)
                for (var i = 0; i < e.length; i++) {
                    var s = $(e[i]),
                        n = {
                            id: i,
                            obj: s,
                            tid: s.attr("tid"),
                            act: s.hasClass("act"),
                            activate: function(t, e) {
                                this.act != t && (t ? (this.obj.hasClass("act") || this.obj.addClass("act").css({
                                    cursor: "default"
                                }), this.block && this.block.css({
                                    display: "block"
                                })) : (this.obj.removeClass("act").css({
                                    cursor: "pointer"
                                }), this.block && this.block.css({
                                    display: "none"
                                })), this.act = t, typeof e == _fn_ && e())
                            }
                        },
                        o = $("#" + n.tid);
                    n.block = o.length ? o : !1, n.act ? this.actItem = n : n.obj.css({
                        cursor: "pointer"
                    }), s.bind("click", {
                        id: i
                    }, function(e) {
                        t.mouseItem(e)
                    }), this.item.push(n)
                }
        },
        mouseItem: function(t) {
            var e = t.data.id,
                i = this.item[e];
            switch (t.type) {
                case "click":
                    this.switchBlock(i)
            }
        },
        switchBlock: function(t) {
            this.switching || this.actItem && t.id == this.actItem.id || (this.switching = !0, this.actItem.activate(!1), this.actItem = t, t.activate(!0), __ServicesMenu__.updatePosition(), this.switching = !1)
        },
        remove: function() {
            for (var t = 0; t < this.item.length; t++) this.item[t].obj.unbind("click")
        }
    }),
    Calculator = BaseClass.extend({
        init: function(t) {
            this.element = !1, this.opt = {}, this.setOptions(t), this.create()
        },
        create: function() {
            var t = this;
            this.sum = this.find(this.element, ".sum"), this.inp = this.find(this.sum, "input"), this.fee = this.find(this.element, ".fee"), this.feeSpan = this.find(this.fee, "span"), this.tester = $("<div></div>").css({
                position: "absolute",
                top: -9999,
                left: -9999,
                width: "auto",
                whiteSpace: "nowrap"
            }).appendTo(this.element);
            var e = this.find(this.element, ".value-slider");
            this.slider = e ? new ValueSlider({
                _element: $(e[0]),
                _delegate: this,
                _initPrc: 50,
                _startVal: 300,
                _endVal: 15e4,
                _updateFunction: function(e, i) {
                    t.updateValue(i)
                }
            }) : !1, this.inp.bind("change keyup", function() {
                t.updateValue(this.value), t.slider && t.slider.updateFromValue(t.inp.val())
            })
        },
        checkValue: function() {
            var t = this.inp.val(),
                e = t.replace(/[^0-9]/g, "");
            if (this.inp.val(e), !e.length) return this.inp.css({
                width: 80
            }), !1;
            var i = parseInt(e);
            if (100 > i) return this.inp.css({
                width: 80
            }), !1;
            i > 15e4 && (e = 15e4), this.tester.css({
                fontSize: this.inp.css("fontSize"),
                fontFamily: this.inp.css("fontFamily"),
                fontWeight: this.inp.css("fontWeight"),
                letterSpacing: this.inp.css("letterSpacing")
            }), this.tester.html(e), this.inp.val(e);
            var s = this.tester.width();
            return this.inp.css({
                width: s
            }), !0
        },
        updateValue: function(t) {
            if (this.inp.val(t), this.checkValue()) {
                var e;
                1e4 > t ? (e = Math.round(.1 * parseInt(this.inp.val())), 300 > e && (e = 300)) : e = Math.round(2e4 > t ? .07 * parseInt(this.inp.val()) : 5e4 > t ? .05 * parseInt(this.inp.val()) : .03 * parseInt(this.inp.val())), this.feeSpan.html(e + " $")
            }
        },
        resize: function() {
            this.checkValue()
        },
        remove: function() {
            this.slider && this.slider.remove()
        }
    }),
    CarAnimation = BaseClass.extend({
        init: function(t) {
            this.container = !1, this.element = !1, this.opt = {}, this.setOptions(t), this.containerWidth = 0, this.iconWidth = 0, this.create()
        },
        create: function() {
            this.icon = this.find(this.element, ".ico"), this.icon.css({
                position: "absolute",
                display: "block",
                top: 0,
                left: 0
            })
        },
        startAnimate: function() {
            this.resize();
            var t = (this.containerWidth + this.iconWidth) / 2;
            this.icon.stop().css({
                left: 0
            }).animate({
                left: t
            }, 450, "swing", function() {
                $(this).stop().css({
                    left: -t
                }).animate({
                    left: 0
                }, 450, "swing")
            })
        },
        stopAnimate: function() {
            this.icon.stop().css({
                left: 0
            })
        },
        resize: function() {
            this.containerWidth = this.container.width(), this.iconWidth = this.icon.width()
        },
        remove: function() {}
    }),
    Clients = BaseClass.extend({
        __className: "Clients",
        init: function(t) {
            this._id = !1, this.inited = !1, this.element = !1, this.opt = {}, this.setOptions(t), this.put() && (this.item = [], this.count = 0, this.actMenuItem = !1, this.menuItem = [], this.removeMode = !1, this.opt.clickable = this.element.hasClass("clickable"), this.vItem = [], this.vCount = 0, this.size = 0, this.opened = !1, this.clientsMenuFix = !1, this.clientsMenuFixHeight = 0, this.clientsMenuFixed = !1, this.clientsPerLine = __app__.mobile ? 2 : 4, this.create())
        },
        create: function() {
            var t, e = this;
            if (t = this.find(this.element, ".item")) {
                for (var i, s, n = 0, o = 0; o < t.length; o++) i = $(t[o]), s = {
                    id: o,
                    pos: o,
                    vpos: o,
                    obj: i,
                    section: parseInt(i.attr("section")),
                    clientID: i.attr("client-id"),
                    box: i.find(".box"),
                    img: i.find(".std"),
                    ovr: i.find(".ovr"),
                    opened: !1,
                    animated: !1,
                    active: !1,
                    shining: !1,
                    activate: function(t) {
                        this.active != t && (t ? (e.opt.clickable && this.obj.css({
                            cursor: "pointer"
                        }), this.obj.bind("click mouseenter mouseleave", {
                            id: this.pos
                        }, function(t) {
                            e.mouseItem(t)
                        }), e.removeMode ? this.obj.css({
                            display: "inline-block"
                        }) : this.obj.animate({
                            opacity: 1
                        })) : (e.opt.clickable && this.obj.css({
                            cursor: "default"
                        }), this.obj.unbind("click mouseenter mouseleave"), e.removeMode ? this.obj.css({
                            display: "none"
                        }) : this.obj.animate({
                            opacity: .2
                        }), this.shine(!1)), this.active = t)
                    },
                    shine: function(t) {
                        (e.opt.clickable || !__app__.mobile) && t != this.shining && (!this.opened || t) && (t ? (this.img.stop().animate({
                            opacity: 0
                        }, 500, "swing"), this.ovr.stop().animate({
                            opacity: 1
                        }, 500, "swing")) : (this.img.stop().animate({
                            opacity: 1
                        }, 500, "swing"), this.ovr.stop().animate({
                            opacity: 0
                        }, 500, "swing")), this.shining = t)
                    }
                }, s.imgSRC = s.img.attr("src"), s.ovrSRC = s.ovr.attr("src"), this.item.push(s), this.vItem.push(s), n++;
                if (this.clientsMenu = $("#clients-menu"), this.clientsMenu.length) {
                    this.clientsMenuFix = this.clientsMenu.find(".fix");
                    var a = this.clientsMenu.find(".item");
                    if (a.length)
                        for (var o = 0; o < a.length; o++) {
                            var i = $(a[o]),
                                r = {
                                    id: o,
                                    obj: i,
                                    act: i.hasClass("act"),
                                    section: parseInt(i.attr("section")),
                                    activate: function(t) {
                                        this.act != t && (t ? this.obj.hasClass("act") || this.obj.addClass("act") : this.obj.removeClass("act"), this.act = t)
                                    }
                                };
                            r.obj.bind("click", {
                                id: o
                            }, function(t) {
                                e.mouseMenuItem(t)
                            }), r.act && (this.actMenuItem = r), this.menuItem.push(r)
                        }
                } else this.clientsMenu = !1
            }
            this.count = this.item.length, this.vCount = this.vItem.length, t = this.find(this.element, ".presenter"), this.presenter = t ? new ClientsPresenter({
                _element: t,
                _delegate: this
            }) : !1, $(window).bind("appScroll." + this.__className + this._id, function(t, i) {
                e.updateScroll(i)
            }), this.inited = !0, this.selectItems(0)
        },
        mouseMenuItem: function(t) {
            var e = t.data.id,
                i = this.menuItem[e];
            i.section != this.actMenuItem.section && (this.actMenuItem && this.actMenuItem.activate(!1), this.actMenuItem = i, i.activate(!0), this.selectItems(i.section))
        },
        selectItems: function(t) {
            var e = this,
                i = (this.cli, function() {
                    var i = 0;
                    e.vItem = [];
                    for (var s = 0; s < e.item.length; s++) t && e.item[s].section != t ? e.item[s].activate(!1) : (e.item[s].vpos = i++, e.item[s].activate(!0), e.vItem.push(e.item[s]));
                    for (var n = e.count, o = Math.ceil(n / e.clientsPerLine), s = 0; n > s; s++) {
                        var a = e.item[s],
                            r = Math.ceil((a.pos + 1) / e.clientsPerLine);
                        a.arrAtBottom = !0, r == o && (r--, a.arrAtBottom = !1);
                        var h = 2 > o ? n : r * e.clientsPerLine;
                        h--, h >= n && (h = n - 1), a.insertAfterPos = h
                    }
                    e.vCount = e.vItem.length, t && e.vItem.length && __app__.scrollTo(e.vItem[0].obj.offset().top - __app__.fMH - e.clientsMenuFixHeight)
                });
            this.presenter && this.presenter.opened ? this.presenter.close(i, !0) : i()
        },
        mouseItem: function(t) {
            var e = this.item[t.data.id];
            switch (t.type) {
                case "mouseenter":
                    e.shine(!0);
                    break;
                case "mouseleave":
                    e.shine(!1);
                    break;
                case "click":
                    this.toggleClient(e)
            }
        },
        toggleClient: function(t) {
            this.opt.clickable && this.presenter && this.presenter.open(t.vpos)
        },
        updateScroll: function(t) {
            if (this.clientsMenuFix) {
                var e = t > __indexPart.height - __app__.fMH;
                e && !this.clientsMenuFixed ? (this.clientsMenuFix.css({
                    position: "fixed",
                    top: __app__.fMH,
                    zIndex: 999
                }), this.clientsMenuFixed = !0) : !e && this.clientsMenuFixed && (this.clientsMenuFix.css({
                    position: "relative",
                    top: "auto",
                    zIndex: "auto"
                }), this.clientsMenuFixed = !1)
            }
        },
        resize: function(t) {
            var e = this.clientsPerLine;
            this.size = Math.ceil(t / e), this.element.css({
                width: this.size * e,
                height: "auto"
            }), this.clientsMenuFixHeight = this.clientsMenu ? this.clientsMenu.height() : 0, this.elmTop = this.element.offset().top;
            for (var i = 0; i < this.item.length; i++) {
                var s = this.item[i];
                s.obj.css({
                    width: this.size,
                    height: this.size
                }), s.top = Math.round(this.elmTop + Math.floor(i / e) * this.size + this.size / e - __app__.wh)
            }
            this.clientsMenu && this.clientsMenuFixed && this.clientsMenuFix.css({
                top: __app__.fMH
            }), this.presenter && this.presenter.resize()
        },
        remove: function() {
            $(window).unbind("appScroll." + this.__className + this._id), this.rm()
        }
    }),
    ClientsPresenter = BaseClass.extend({
        init: function(t) {
            this.delegate = !1, this.element = !1, this.opt = {
                duration: __app__.mobile ? 0 : 400,
                easing: __app__.mobile ? "linear" : "swing"
            }, this.setOptions(t), this.pos = -1, this.activeItem = !1, this.switching = !1, this.insertedAfter = -1, this.opened = !1, this.item = !1, this.html = '<div class="presenter">' + this.element.html() + "</div>", this.remove()
        },
        create: function() {
            var t = this;
            this.arrlCnt = this.find(this.element, ".arrlCnt"), this.arrrCnt = this.find(this.element, ".arrrCnt"), this.logoCnt = this.find(this.element, ".logoCnt"), this.textCnt = this.find(this.element, ".textCnt"), this.arrl = this.arrlCnt ? this.find(this.arrlCnt, ".arrl") : !1, this.arrr = this.arrrCnt ? this.find(this.arrrCnt, ".arrr") : !1, this.arrr && this.arrr.bind("click", {
                dir: !0
            }, function(e) {
                t.mouseArrow(e)
            }), this.arrl && this.arrl.bind("click", {
                dir: !1
            }, function(e) {
                t.mouseArrow(e)
            }), this.box = this.logoCnt ? this.find(this.logoCnt, ".box") : !1, this.img = this.box ? this.find(this.box, "img") : !1, this.textBox = this.textCnt ? this.find(this.textCnt, ".box") : !1
        },
        resize: function() {
            if (this.element) {
                if (this.cellWidth = this.delegate.size, __app__.mobile) {
                    var t = this.element.css("display");
                    this.element.css({
                        display: "block",
                        height: "auto"
                    }), this.cellHeight = this.element.outerHeight(!0), this.element.css({
                        display: t
                    })
                } else this.cellHeight = this.delegate.size + 80;
                this.opened && this.element.css({
                    height: this.cellHeight
                }), __app__.mobile || (this.arrlCnt && this.arrlCnt.css({
                    width: this.cellWidth,
                    height: this.cellHeight
                }), this.arrrCnt && this.arrrCnt.css({
                    width: this.cellWidth,
                    height: this.cellHeight
                }), this.logoCnt && this.logoCnt.css({
                    width: this.cellWidth,
                    height: this.cellHeight
                }), this.box && this.box.css({
                    width: this.cellWidth,
                    height: this.cellWidth
                }), this.textCnt && this.textCnt.css({
                    width: this.cellWidth,
                    height: this.cellHeight
                }))
            }
        },
        mouseArrow: function(t) {
            var e = t.data.dir;
            switch (t.type) {
                case "click":
                    return e ? this.nextClient() : this.prevClient();
                case "mouseenter":
                    break;
                case "mouseleave":
            }
        },
        nextClient: function() {
            var t = this.pos + 1;
            t >= this.delegate.vCount && (t = 0), this.switchClient(t, !0, !1)
        },
        prevClient: function() {
            var t = this.pos - 1;
            0 > t && (t = this.delegate.vCount - 1), this.switchClient(t, !1, !1)
        },
        switchClient: function(t, e, i) {
            if (this.pos == t) return void this.close();
            if (!this.switching) {
                this.switching = !0;
                var s = this;
                this.activeItem && (this.activeItem.opened = !1, this.activeItem.shine(!1), this.activeItem.arr && (this.activeItem.arr.remove(), this.activeItem.arr = !1), this.activeItem = !1), this.pos = t;
                var n = this.delegate.vItem[this.pos];
                n.shine(!0), __app__.mobile && (n.arr = $("<div></div>").addClass("arr").css(n.arrAtBottom ? {
                    bottom: 0
                } : {
                    top: 0
                }).html('<img src="/m/img/cli' + (n.arrAtBottom ? "d" : "u") + '.png" alt="" />').appendTo(n.obj)), n.opened = !0, this.activeItem = n, i = i || __app__.mobile, i ? (this.textBox && this.textBox.html(n.box.html()), __app__.mobile && (this.resize(), this.element.css({
                    height: this.cellHeight
                })), this.img && this.img.attr("src", n.ovrSRC), this.switching = !1) : (this.textBox && this.textBox.animate({
                    opacity: 0
                }, this.opt.duration, this.opt.easing, function() {
                    $(this).html(n.box.html()).animate({
                        opacity: 1
                    }, s.opt.duration, s.opt.easing, function() {
                        s.switching = !1
                    })
                }), this.img && this.img.animate({
                    opacity: 0
                }, this.opt.duration, this.opt.easing, function() {
                    $(this).attr("src", n.ovrSRC).animate({
                        opacity: 1
                    }, s.opt.duration, s.opt.easing, function() {
                        s.switching = !1
                    })
                }), this.element.animate({
                    height: this.cellHeight
                }, this.opt.duration, this.opt.easing))
            }
        },
        open: function(t, e) {
            var i = this.delegate.vItem[t],
                s = this;
            this.insertedAfter >= 0 && this.insertedAfter != i.insertAfterPos ? this.close(function() {
                s.open(t, e)
            }, !1) : this.opened ? this.switchClient(t, !0, e || !1) : (this.insertedAfter = i.insertAfterPos, this.element = $(this.html).insertAfter(this.delegate.item[this.insertedAfter].obj), this.create(), this.resize(), this.switchClient(t, !0, !0), this.element.css({
                height: 0
            }).animate({
                height: this.cellHeight
            }, this.opt.duration, this.opt.easing, function() {
                s.opened = !0
            }), __app__.scrollTo(__app__.mobile ? i.arrAtBottom ? s.delegate.size + s.cellHeight + __app__.fMH > __app__.wh ? s.element.offset().top + s.cellHeight - __app__.wh : i.obj.offset().top - __app__.fMH - s.delegate.clientsMenuFixHeight : s.element.offset().top - __app__.fMH - s.delegate.clientsMenuFixHeight : i.obj.offset().top - __app__.fMH - s.delegate.clientsMenuFixHeight), this.opened = !0)
        },
        close: function(t, e) {
            var i = this,
                s = function() {
                    i.remove(), typeof t == _fn_ && t()
                };
            this.pos = -1, this.activeItem && (this.activeItem.opened = !1, this.activeItem.shine(!1), this.activeItem.arr && (this.activeItem.arr.remove(), this.activeItem.arr = !1), this.activeItem = !1), e = e || __app__.mobile, e ? s() : this.element.animate({
                height: 0
            }, this.opt.duration, this.opt.easing, s)
        },
        remove: function() {
            this.element.remove(), this.insertedAfter = -1, this.pos = -1, this.opened = !1, this.element = null
        }
    }),
    ComboBox = BaseClass.extend({
        openedComboBox: !1,
        eventSetted: !1,
        init: function(t) {
            this.element = !1, this.opt = {
                showingOptions: !1,
                type: "type1",
                onChange: !1
            }, this.setOptions(t), ComboBox.eventSetted || this.setEvent(), ComboBox.comboBoxes || (ComboBox.comboBoxes = []), this.element && (this.opt.id = this.element.attr("data-id"), this.opt.id && (ComboBox.comboBoxes[this.opt.id] = this), this.opt.name = this.element.attr("data-name"), this.opt.type = this.element.attr("data-type") || "type1", this.opt.width = parseInt(this.element.attr("data-width")) || !1, this.opts = [], this.mo = !1, this.active = 0, this.cVal = !1, this.cText = !1, this.disabled = !1, this.maxOptWidth = 0, this.generate())
        },
        setDisabled: function(t) {
            this.disabled != t && (this.disabled = t, this.disabled && !this.combox.hasClass("disabled") ? this.combox.addClass("disabled") : !this.disabled && this.combox.hasClass("disabled") && this.combox.removeClass("disabled"))
        },
        getById: function(t) {
            return ComboBox.comboBoxes[t] ? ComboBox.comboBoxes[t] : !1
        },
        setEvent: function() {
            var t = this;
            ComboBox.eventSetted = !0, $(window).bind("mousedown touchstart", function() {
                t.closeActiveComboBox()
            })
        },
        closeActiveComboBox: function() {
            ComboBox.openedComboBox && !ComboBox.openedComboBox.mo && ComboBox.openedComboBox.hideOptions()
        },
        generate: function() {
            this.hidden = $("<input></input>", {
                name: this.opt.name + "_hidden",
                value: "1"
            }).insertAfter("element"), this.combox = $("<div></div>").addClass("combox " + this.opt.type + " noselect").insertAfter(this.element), this.selected = $("<div></div>").addClass("selected").appendTo(this.combox), this.toggle = $("<div></div>").addClass("toggle").appendTo(this.combox), this.options = $("<div></div>").addClass("options noselect").appendTo(this.combox);
            var t = this,
                e = this.element.find("option");
            this.maxOptWidth = 0;
            for (var i = 0, s = e.length; s > i; i++) {
                var n = $("<div></div>", {
                    val: e[i].value
                }).addClass("opt").html(e[i].innerHTML).appendTo(this.options);
                n.bind("click mouseenter mouseleave", {
                    id: i,
                    opt: n,
                    val: e[i].value,
                    text: e[i].innerHTML
                }, function(e) {
                    t.selectOption(e)
                }), this.opts.push(n), i >= e.length - 1 && n.addClass("last");
                var o = n.width();
                this.maxOptWidth < o && (this.maxOptWidth = o), e[i].selected && (this.active = i)
            }
            this.opts[this.active].hasClass("act") || this.opts[this.active].addClass("act"), this.cVal = e[this.active].value, /^\d+$/.test(this.cVal) && (this.cVal = parseInt(this.cVal)), this.cText = e[this.active].innerHTML, this.selected.html(e[this.active].innerHTML), this.setSize(this.opt.width, 50);
            var t = this;
            this.combox.bind("mouseenter mouseleave", function(e) {
                switch (e.type) {
                    case "mouseenter":
                        t.mo = !0;
                        break;
                    case "mouseleave":
                        t.mo = !1
                }
            }), this.selected.bind("click mouseenter mouseleave", function(e) {
                t.m_selected(e)
            }), this.toggle.bind("click mouseenter mouseleave", function(e) {
                t.m_toggle(e)
            }), this.element.css({
                display: "none"
            }).bind("change", function(e) {
                if (e !== !0) {
                    var i = this.selectedIndex,
                        s = this.options[i];
                    t.selectOption({
                        type: "click",
                        data: {
                            id: i,
                            val: s.value,
                            text: s.innerHTML,
                            noretrig: !0
                        }
                    })
                }
            }), this.cVal ? this.selected.hasClass("active") || this.selected.addClass("active") : this.selected.hasClass("active") && this.selected.removeClass("active")
        },
        setSize: function(t, e) {
            var i = e ? e : this.selected.height(),
                s = i + this.maxOptWidth + 23,
                n = s,
                o = this.maxOptWidth,
                a = s;
            t && (a = t, o = a - i - 3, a > n && (n = a)), a -= 1, n -= 3, this.options.css({
                top: i + 2,
                width: n - 2,
                display: "none"
            }), this.combox.css({
                width: a,
                height: i + 4
            }), this.toggle.css({
                width: i,
                height: i
            }), this.selected.css({
                width: o,
                height: i,
                lineHeight: i + "px"
            })
        },
        m_selected: function(t) {
            if (!this.disabled) switch (t.type) {
                case "click":
                    this.toggleOptions(t);
                    break;
                case "mouseenter":
                    if (this.cVal) return;
                    this.selected.hasClass("active") || this.selected.addClass("active"), this.toggle.hasClass("active") || this.toggle.addClass("active");
                    break;
                case "mouseleave":
                    if (this.cVal) return;
                    this.selected.hasClass("active") && this.selected.removeClass("active"), this.toggle.hasClass("active") && this.toggle.removeClass("active")
            }
        },
        m_toggle: function(t) {
            if (!this.disabled) switch (t.type) {
                case "click":
                    this.toggleOptions(t);
                    break;
                case "mouseenter":
                    if (this.cVal) return;
                    this.selected.hasClass("active") || this.selected.addClass("active"), this.toggle.hasClass("active") || this.toggle.addClass("active");
                    break;
                case "mouseleave":
                    if (this.cVal) return;
                    this.selected.hasClass("active") && this.selected.removeClass("active"), this.toggle.hasClass("active") && this.toggle.removeClass("active")
            }
        },
        onChange: function(t) {
            return this.opt.onChange = typeof t == _fn_ ? t : !1, !!this.opt.onChange
        },
        selectOption: function(t) {
            switch (t.preventDefault && (t.preventDefault(), t.stopPropagation()), t.type) {
                case "click":
                    if (this.cVal == t.data.val) return this.hideOptions(), void(this.cVal ? this.selected.hasClass("active") || this.selected.addClass("active") : this.selected.hasClass("active") && this.selected.removeClass("active"));
                    this.element[0].options[t.data.id].selected = !0, this.cVal = t.data.val, /^\d+$/.test(this.cVal) && (this.cVal = parseInt(this.cVal)), this.cText = t.data.text, this.hidden.val(this.cVal), this.selected.html(this.cText), this.hideOptions(), typeof this.opt.onChange == _fn_ && this.opt.onChange(this, this.cVal, this.cText), this.opts[this.active].removeClass("act"), this.active = t.data.id, this.opts[this.active].addClass("act"), t.data.noretrig || this.element.trigger("change", ["true"]), this.cVal ? this.selected.hasClass("active") || this.selected.addClass("active") : this.selected.hasClass("active") && this.selected.removeClass("active");
                    break;
                case "mouseenter":
                    t.data.opt.hasClass("over") || t.data.opt.addClass("over");
                    break;
                case "mouseleave":
                    t.data.opt.hasClass("over") && t.data.opt.removeClass("over")
            }
        },
        toggleOptions: function(t) {
            t.preventDefault && (t.preventDefault(), t.stopPropagation()), this.opt.showingOptions ? this.hideOptions() : this.showOptions()
        },
        showOptions: function() {
            if (ComboBox.openedComboBox && ComboBox.openedComboBox.hideOptions(), !this.opt.showingOptions) {
                this.opt.showingOptions = !0, ComboBox.openedComboBox = this, this.combox.hasClass("opened") || this.combox.addClass("opened"), this.options.css({
                    display: "block",
                    opacity: 1
                })
            }
        },
        hideOptions: function() {
            this.opt.showingOptions && (this.opt.showingOptions = !1, ComboBox.openedComboBox = !1, this.combox.removeClass("opened"), this.options.css({
                display: "none",
                opacity: 0
            }))
        }
    }),
    ComboBoxClass = new ComboBox,
    Company = BaseClass.extend({
        __className: "Company",
        init: function(t) {
            this._id = !1, this.inited = !1, this.element = !1, this.opt = {}, this.setOptions(t), this.put() && (this.item = [], this.create())
        },
        create: function() {
            var t;
            if (t = this.find(this.element, ".item"))
                for (var e = 0; e < t.length; e++) {
                    var i = $(t[e]),
                        s = {
                            id: e,
                            obj: i
                        };
                    s.dw = i.hasClass("dw"), s.dh = i.hasClass("dh"), this.item.push(s)
                }
            this.inited = !0
        },
        resize: function(t) {
            var e = Math.ceil(t / 4),
                i = Math.round(e / 360 * 440);
            this.element.css({
                width: 4 * e,
                height: 2 * i
            });
            for (var s = 0; s < this.item.length; s++) {
                var n = this.item[s];
                n.obj.css({
                    width: e * (n.dw ? 2 : 1),
                    height: i * (n.dh ? 2 : 1)
                })
            }
        },
        remove: function() {
            this.rm()
        }
    }),
    FixedMenu = BaseClass.extend({
        __className: "FixedMenu",
        init: function(t) {
            this.delegate = !1, this.element = !1, this.opt = {
                showingFrom: 150,
                duration: 200,
                easing: "swing"
            }, this.setOptions(t), this.sizingRules = [], this.alwaysOnTop = "PagePart_Header" == __indexPart.__className, this.create()
        },
        create: function() {
            var t = this;
            if (this.element.css(this.alwaysOnTop ? {
                    top: 0,
                    opacity: 1,
                    display: "block"
                } : {
                    top: -85
                }), this.logo = this.find(this.element, ".logo"), this.logo) {
                var e = this.logo.find("a");
                e.length || this.logo.css({
                    cursor: "pointer"
                }).bind("click", function() {
                    __app__.scrollTo(0)
                })
            }
            this.toggle = this.find(this.element, ".toggle"), this.toggle && this.toggle.bind("click", function() {
                t.delegate.toggleOverlapMenu()
            }), this.right = this.find(this.element, ".right"), this.right && this.right.find(".btn").bind("click", function() {
                t.delegate.toggleRequestForm(!0)
            }), this.alwaysOnTop || ($(window).bind("appResize." + this.__className, function(e, i, s) {
                t.resize(i, s)
            }), $(window).bind("appScroll." + this.__className, function(e, i) {
                t.updateScroll(i)
            }))
        },
        resize: function() {},
        updateScroll: function(t) {
            var e = t > this.opt.showingFrom;
            e && !this.showing ? (this.element.stop().css({
                display: "block"
            }).animate({
                top: 0
            }, this.opt.duration, this.opt.easing), this.showing = !0) : !e && this.showing && (this.element.stop().animate({
                top: -85
            }, this.opt.duration, this.opt.easing, function() {
                $(this).css({
                    display: "none"
                })
            }), this.showing = !1)
        },
        remove: function() {
            $(window).unbind("appResize." + this.__className), $(window).unbind("appScroll." + this.__className)
        }
    }),
    GalleryViewer = BaseClass.extend({
        __className: "GalleryViewer",
        init: function(t) {
            this.delegate = !1, this.element = !1, this.pos = -1, this.opt = {
                duration: 200,
                easing: "swing",
                viewerMode: "gallery"
            }, this.setOptions(t), this.items = !1, this.item = [], this.showing = !1, this.width = 0, this.height = 0, this.create()
        },
        create: function() {
            var t = this;
            switch (this.opt.viewerMode) {
                case "gallery":
                    this.element = $("<div></div>").addClass("gallery-viewer").appendTo($(document.body)), this.stage = $("<div></div").addClass("stage").appendTo(this.element), this.arrl = $("<div></div>").addClass("arr arrl icon icon-arrl").appendTo(this.element).bind("click", function() {
                        t.prevSlide()
                    }), this.arrr = $("<div></div>").addClass("arr arrr icon icon-arrr").appendTo(this.element).bind("click", function() {
                        t.nextSlide()
                    }), this.close = $("<div></div>").addClass("arr close icon icon-close").appendTo(this.element).bind("click", function() {
                        t.closeGallery()
                    });
                    break;
                case "slider":
                    if (this.sliderType = this.element.attr("slider-type"), this.pos = 0, this.stage = this.find(this.element, ".stage"), this.stage) {
                        var e = this.find(this.stage, ".item"),
                            i = [];
                        if (e)
                            for (var s = 0; s < e.length; s++) {
                                var n = $(e[s]),
                                    o = {
                                        id: s,
                                        _element: n,
                                        src: n.attr("src"),
                                        viewerMode: this.opt.viewerMode
                                    };
                                i.push(o)
                            }
                        this.arrl = this.find(this.element, ".arrl"), this.arrl && this.arrl.bind("click", function() {
                            t.prevSlide()
                        }), this.arrr = this.find(this.element, ".arrr"), this.arrr && this.arrr.bind("click", function() {
                            t.nextSlide()
                        }), i.length && this.recreateItems(i), this.stage.bind("click", function() {
                            t.nextSlide()
                        })
                    }
            }
            tt.is.mobile && window.tt.setTouchEvent({
                touchSurface: this.stage,
                onEnd: function(e) {
                    switch (e.moved) {
                        case "left":
                            t.nextSlide();
                            break;
                        case "right":
                            t.prevSlide()
                    }
                }
            }), $(window).bind("appResize." + this.__className, function(e, i, s) {
                t.resize(i, s)
            }), this.resize()
        },
        removeItems: function() {
            switch (this.opt.viewerMode) {
                case "slider":
                    return
            }
            if (this.item.length)
                for (var t = 0; t < this.item.length; t++) this.item[t].remove()
        },
        recreateItems: function(t) {
            this.removeItems(), this.item = [];
            for (var e = 0; e < t.length; e++) {
                t[e]._delegate = this;
                var i = new GalleryViewerItem(t[e]);
                this.item.push(i)
            }
            switch (this.withArrows = this.item.length > 1, this.arrl && this.arrl.css({
                display: this.withArrows ? "block" : "none"
            }), this.arrr && this.arrr.css({
                display: this.withArrows ? "block" : "none"
            }), this.opt.viewerMode) {
                case "slider":
                    var s = this.item.length;
                    2 > s && (this.arrl && this.arrl.css({
                        display: "none"
                    }), this.arrr && this.arrr.css({
                        display: "none"
                    }));
                    for (var e = 0; s > e; e++) this.item[e].loadImage()
            }
        },
        open: function(t) {
            this.showing ? this.switchSlide(t, !0) : (this.showing = !0, this.switchSlide(t, !0, !0), this.element.stop().css({
                top: 0,
                left: 0,
                opacity: 0
            }).animate({
                opacity: 1
            }, this.opt.duration, this.opt.easing, function() {
                __app__.setFixedContent(!0)
            }))
        },
        closeGallery: function() {
            this.showing && (this.showing = !1, __app__.setFixedContent(!1), this.element.stop().animate({
                opacity: 0
            }, this.opt.duration, this.opt.easing, function() {
                $(this).css({
                    top: __app__.wh,
                    left: __app__.ww
                })
            }))
        },
        nextSlide: function(t, e) {
            var i = this.pos + 1;
            i >= this.item.length && (i = 0), this.switchSlide(i, !0, t, e)
        },
        prevSlide: function(t, e) {
            var i = this.pos - 1;
            0 > i && (i = this.item.length - 1), this.switchSlide(i, !1, t, e)
        },
        switchSlide: function(t, e, i, s) {
            if (this.pos != t && !this.switching) {
                this.switching = !0;
                var n = this,
                    o = !1,
                    a = !1;
                switch (this.pos >= 0 && (o = this.item[this.pos]), a = this.item[t], this.pos = t, this.opt.viewerMode) {
                    case "gallery":
                    case "slider":
                        o && o.hide(e, i), a.show(e, i, function() {
                            n.switching = !1, typeof s == _fn_ && s()
                        });
                        break;
                    case "stage":
                        this.stage.stop().animate({
                            left: -(this.pos * this.width)
                        }, {
                            duration: 1e3,
                            easing: "easeInOutQuint",
                            always: function() {
                                n.switching = !1
                            }
                        })
                }
            }
        },
        resize: function(t, e) {
            switch (this.opt.viewerMode) {
                case "gallery":
                    this.width = t, this.height = e, this.element.css({
                        width: this.width,
                        height: this.height
                    });
                    break;
                case "slider":
                    this.width = this.stage.width(), this.height = Math.round(this.width / 850 * 528)
            }
            if (this.withArrows) {
                var i;
                this.arrl ? i = Math.round((this.height - this.arrl.outerHeight(!0)) / 2) : this.arrr && (i = Math.round((this.height - this.arrr.outerHeight(!0)) / 2)), this.arrl && this.arrl.css({
                    top: i
                }), this.arrr && this.arrr.css({
                    top: i
                })
            }
            switch (this.stage.css({
                height: this.height
            }), this.element.css(this.showing || "slider" == this.opt.viewerMode ? {
                top: 0,
                left: 0,
                opacity: 1
            } : {
                top: this.height,
                left: this.width,
                opacity: 0
            }), this.opt.viewerMode) {
                case "gallery":
                case "slider":
                    break;
                case "stage":
                    this.stage.css({
                        left: -(this.pos * this.width)
                    })
            }
            for (var s = 0; s < this.item.length; s++) this.item[s].resize(this.width, this.height)
        }
    }),
    GalleryViewerItem = BaseClass.extend({
        init: function(t) {
            this.stage = !1, this.delegate = !1, this.element = !1, this.opt = {
                id: 1,
                obj: !1,
                src: !1,
                img: !1,
                width: 0,
                height: 0,
                loaded: !1,
                error: !1,
                onLoad: !1,
                duration: 1e3,
                easing: "easeInOutQuint",
                viewerMode: "gallery"
            }, this.setOptions(t), this.width = 0, this.height = 0, this.showing = !1, this.switching = !1, this.create()
        },
        create: function() {
            var t = this;
            switch (this.opt.viewerMode) {
                case "gallery":
                    this.element = $("<div></div>").addClass("item").appendTo(this.delegate.stage);
                    break;
                case "slider":
            }
            this.loader = this.castLoader().appendTo(this.element), this.opt.obj = $("<img></img>").appendTo(this.element).css({
                opacity: 0
            }).bind("load error", function(e) {
                t.imageLoaded(e)
            })
        },
        show: function(t, e, i) {
            var s = this;
            this.opt.loaded || (this.switching = !0, this.loadImage()), this.showing = !0, e ? (this.switching = !1, this.element.stop().css({
                left: 0
            }), typeof i == _fn_ && i()) : (this.switching = !0, this.element.stop().css({
                left: this.width * (t ? 1 : -1)
            }).animate({
                left: 0
            }, this.opt.duration, this.opt.easing, function() {
                s.switching = !1, typeof i == _fn_ && i()
            }))
        },
        hide: function(t, e, i) {
            if (this.showing = !1, e) this.element.stop().css({
                left: this.width * (t ? -1 : 1)
            }), typeof i == _fn_ && i();
            else {
                var s = this;
                this.switching = !0, this.element.stop().animate({
                    left: this.width * (t ? -1 : 1)
                }, this.opt.duration, this.opt.easing, function() {
                    s.switching = !1, typeof i == _fn_ && i()
                })
            }
        },
        loadImage: function(t) {
            return this.opt.loaded ? void(typeof t == _fn_ && t()) : (this.opt.onLoad = t, this.opt.obj.attr("src", this.opt.src), !0)
        },
        resize: function(t, e) {
            t && e && (this.width = this.opt.ww = t, this.height = this.opt.wh = e), this.loader.css({
                top: Math.round((this.height - this.loader.height()) / 2),
                left: Math.round((this.width - this.loader.width()) / 2)
            }), this.opt.loaded && !this.opt.error && this.reposObject(this.opt), this.showing || this.element.css({
                left: this.opt.id * this.width
            })
        },
        imageLoaded: function(t) {
            switch (this.opt.loaded = !0, t.type) {
                case "load":
                    this.opt.width = this.opt.obj[0].width, this.opt.height = this.opt.obj[0].height, this.resize(), this.loader && this.loader.stop().animate({
                        opacity: 0
                    }, 200, "swing", function() {
                        self.loader && (self.loader.remove(), self.loader = null)
                    }), this.opt.obj.stop().animate({
                        opacity: 1
                    }, 200, "swing"), typeof this.opt.onLoad == _fn_ && this.opt.onLoad();
                    break;
                case "error":
                    this.opt.error = !0
            }
        },
        remove: function() {
            this.element.remove()
        }
    }),
    H5Video = BaseClass.extend({
        init: function(t) {
            this.element = !1, this.opt = {}, this.setOptions(t), this.isPlaying = !1, this.create()
        },
        create: function() {
            if (this.element) {
                var t = this;
                this.play = this.find(this.element, ".play"), this.video = this.find(this.element, "video"), this.video && this.element.css({
                    cursor: "pointer"
                }).bind("click", function() {
                    t.toggleVideo()
                })
            }
        },
        toggleVideo: function() {
            this.isPlaying ? this.isPlaying && (this.play.css({
                display: "block"
            }), this.isPlaying = !1, this.video[0].load()) : (this.play.css({
                display: "none"
            }), this.isPlaying = !0, this.video[0].play())
        },
        resize: function() {},
        remove: function() {
            this.element && this.element.unbind("click")
        }
    }),
    IndexMouse = BaseClass.extend({
        init: function(t) {
            this.element = !1, this.opt = {}, this.setOptions(t), this.dotTop = 10, this.dotLeft = 11, this.dotTopTarget = 29, this.create()
        },
        create: function() {
            var t = this;
            this.element.bind("click", function(e) {
                t.mouseMouse(e)
            }), this.dot = this.find(this.element, ".dot"), this.resize()
        },
        mouseMouse: function(t) {
            switch (t.type) {
                case "click":
                    __app__.scrollTo(__indexPart.height - __app__.fMH)
            }
        },
        animate: function() {
            var t = this;
            this.dot.stop().css({
                top: this.dotTop,
                left: this.dotLeft,
                opacity: 1
            }).delay(200).animate({
                top: t.dotTopTarget,
                opacity: 0
            }, 1500, "swing", function() {
                $(this).css({
                    top: t.dotTop
                }).animate({
                    opacity: 1
                }, 500, "swing", function() {
                    t.animate()
                })
            })
        },
        resize: function() {
            this.width = this.element.width(), this.height = this.element.height(), 27 == this.width ? (this.dotTop = 10, this.dotLeft = 11, this.dotTopTarget = 29) : (this.dotTop = 6, this.dotLeft = 8, this.dotTopTarget = 24), this.animate()
        },
        remove: function() {
            this.element.unbind("click mouseenter mouseleave")
        }
    }),
    Lifehack = BaseClass.extend({
        __className: "RequestForm",
        init: function(t) {
            this._id = !1, this.inited = !1, this.element = !1, this.opt = {}, this.setOptions(t), this.returnFixedContent = !1, this.opened = !1, this.create()
        },
        create: function() {
            var t = this;
            this.element = $("#transit-lifehack"), this.form = this.find(this.element, "form"), this.form && this.form.bind("submit", function(e) {
                e.preventDefault(), t.sendForm(e)
            }), this.name = this.find(this.element, ".name"), this.email = this.find(this.element, ".email"), this.element.bind("click", function(e) {
                e.target == this && t.toggleLifeHackForm(!1)
            }), $(".lifehack-form-caller").bind("click", function() {
                t.toggleLifeHackForm(!0)
            }), this.email && this.email.bind("change keydown keyup", function(e) {
                switch (e.type) {
                    case "change":
                        window.tt.mailtest(this.value) || t.email.addClass("error").bind("focus.error", function() {
                            $(this).removeClass("error").unbind("focus.error")
                        })
                }
            }), this.inited = !0, setTimeout(function() {
                t.toggleLifeHackForm(!0)
            }, 2e3)
        },
        toggleLifeHackForm: function(t) {
            if ("undefined" == typeof t && (t = !this.opened), this.opened != t) {
                t ? (this.initForm(), this.element.addClass("opened")) : this.element.removeClass("opened"), this.opened = t
            }
        },
        initForm: function() {
            this.element.removeClass("loading"), this.element.removeClass("okay"), this.element.removeClass("error"), this.initFields()
        },
        initFields: function() {
            this.name && this.name.val("").removeClass("error"), this.phone && this.phone.val("").removeClass("error"), this.email && this.email.val("").removeClass("error"), this.comment && this.comment.val("").removeClass("error")
        },
        gatherData: function() {
            var t = {
                ajax: 1,
                name: this.name.val(),
                email: this.email.val()
            };
            return t
        },
        validateData: function(t) {
            return this.name && t.name.length < 2 ? (this.name.addClass("error").focus().bind("keydown.error", function() {
                $(this).removeClass("error").unbind("keydown.error")
            }), !1) : this.email && !window.tt.mailtest(t.email) ? (this.email.addClass("error").focus().bind("keydown.error", function() {
                $(this).removeClass("error").unbind("keydown.error")
            }), !1) : !0
        },
        sendForm: function() {
            if (!this.busy) {
                var t = this.gatherData();
                if (!this.validateData(t)) return !1;
                this.busy = !0, this.element.addClass("loading"), $.ajax({
                    url: "/services.lifehack",
                    dataType: "json",
                    type: "POST",
                    data: t,
                    context: this
                }).done(function(t) {
                    return t.status > 0 ? ("undefined" != typeof console.log && console.log(t), this.showError(t)) : (typeof ga != _un_ && ga("send", "event", "lifehack", "send_form", "lifehack"), typeof yaCounter16947997 != _un_ && yaCounter16947997.reachGoal("lifehack"), this.showOkay())
                }).fail(function() {
                    return this.showError()
                }).always(function() {
                    this.busy = !1, this.element.removeClass("loading")
                })
            }
        },
        showOkay: function() {
            this.element.addClass("okay");
            var t = this;
            setTimeout(function() {
                t.toggleLifeHackForm(!1)
            }, 3e3)
        },
        showError: function() {
            this.element.addClass("error");
            var t = this;
            setTimeout(function() {
                t.initForm()
            }, 3e3)
        }
    }),
    MainMenu = BaseClass.extend({
        __className: "MainMenu",
        init: function(t) {
            this.element = !1, this.opt = {}, this.setOptions(t), this.create()
        },
        create: function() {
            var t, e = this;
            __MainMenu__ = this, t = $("#main-menu"), this.element = t.length ? t : !1, t = $("#fixed-menu"), this.fixedmenu = t.length ? new FixedMenu({
                _element: t,
                _delegate: this
            }) : !1, t = $("#overlap-menu"), this.overlapMenu = t.length ? new OverlapMenu({
                _element: t,
                _delegate: this
            }) : !1, t = $("#request-form"), this.requestForm = t.length ? new RequestForm({
                _element: t,
                _delegate: this,
                _mode: "request"
            }) : !1, t = $("#meeting-form"), this.meetingForm = t.length ? new RequestForm({
                _element: t,
                _delegate: this,
                _mode: "meeting"
            }) : !1, t = $("#consult-form"), this.consultForm = t.length ? new RequestForm({
                _element: t,
                _delegate: this,
                _mode: "consult"
            }) : !1, this.element && (this.toggle = this.find(this.element, ".toggle"), this.toggle && this.toggle.bind("click", function() {
                e.toggleOverlapMenu()
            }), this.right = this.find(this.element, ".right"), this.right && this.requestForm && this.right.find(".mm-request-form-caller").bind("click", function() {
                e.toggleRequestForm(!0)
            })), $(window).bind("appResize." + this.__className, function(t, i, s) {
                e.resize(i, s)
            })
        },
        toggleOverlapMenu: function() {
            this.overlapMenu && this.overlapMenu.toggleMenu()
        },
        toggleRequestForm: function(t) {
            this.requestForm && this.requestForm.toggleRequestForm(t)
        },
        resize: function() {},
        remove: function() {
            $(window).unbind("appResize." + this.__className)
        }
    }),
    Members = BaseClass.extend({
        __className: "Members",
        init: function(t) {
            this._id = !1, this.inited = !1, this.element = !1, this.opt = {
                duration: 1e3,
                easing: "swing"
            }, this.setOptions(t), this.put() && (this.switching = !1, this.page = 0, this.pageCount = 0, this.item = [], this.isTeamPage = this.element.hasClass("team-page"), this.create())
        },
        create: function() {
            var t, e = this;
            if (this.plate = this.find(this.element, ".plate"), t = this.find(this.element, ".item")) {
                for (var i = 0; i < t.length; i++) {
                    var s = $(t[i]),
                        n = {
                            id: i,
                            obj: s,
                            info: s.find(".info"),
                            videoCnt: s.find(".video"),
                            video: s.find("video")
                        };
                    n.video.length && (n.videoCnt.bind("mouseenter mouseleave", {
                        id: i,
                        item: n,
                        video: n.video
                    }, function(t) {
                        switch (t.type) {
                            case "mouseenter":
                                t.data.video[0].play(0);
                                break;
                            case "mouseleave":
                        }
                    }), n.video.bind("ended", function() {
                        this.currentTime = 0
                    })), this.item.push(n)
                }
                this.pageCount = Math.ceil(this.item.length / 3)
            }
            this.arrl = this.find(this.element, ".arrl"), this.arrr = this.find(this.element, ".arrr"), this.arrl && this.arrr && (this.pageCount > 1 ? (this.arrl.bind("click", function() {
                e.prevPage()
            }), this.arrr.bind("click", function() {
                e.nextPage()
            })) : (this.arrl.css({
                display: "none"
            }), this.arrr.css({
                display: "none"
            }))), this.inited = !0
        },
        resize: function(t) {
            this.height = 0, this.itemWidth = 0, this.plateHeight = 0, this.arrWidth = 60, this.arrPadding = 60, this.isTeamPage, t > 1420 || (t > 1260 ? this.arrPadding = 50 : (this.arrWidth = 40, this.arrPadding = 40)), this.itemWidth = Math.round((t - 2 * this.arrWidth - 6 * this.arrPadding) / 3), this.itemStartOffset = 2 * this.arrPadding + this.arrWidth, this.itemWidthWithPadding = this.itemWidth + this.arrPadding;
            for (var e = 0; e < this.item.length; e++) {
                var i = this.item[e];
                i.obj.css({
                    width: this.itemWidth,
                    left: this.itemStartOffset + e * this.itemWidthWithPadding,
                    bottom: 0,
                    display: e > 2 ? "none" : "block"
                });
                var s = i.obj.outerHeight(!0);
                s > this.height && (this.height = s);
                var n = i.info.outerHeight(!0);
                n > this.plateHeight && (this.plateHeight = n)
            }
            this.plate && this.plate.css({
                height: this.plateHeight
            }), this.element.css({
                height: this.height
            })
        },
        prevPage: function() {
            var t = this.page - 1;
            0 > t && (t = this.pageCount - 1), this.switchPage(t, !1)
        },
        nextPage: function() {
            var t = this.page + 1;
            t >= this.pageCount && (t = 0), this.switchPage(t, !0)
        },
        switchPage: function(t, e) {
            if (this.page != t && !this.switching) {
                this.switching = !0, typeof e == _un_ && (e = !0);
                var i, s = this,
                    n = [],
                    o = [];
                i = 3 * this.page;
                for (var a = i; i + 3 > a; a++) typeof this.item[a] != _un_ && n.push(this.item[a]);
                i = 3 * t;
                for (var a = i; i + 3 > a; a++) typeof this.item[a] != _un_ && o.push(this.item[a]);
                this.page = t;
                for (var a = 0; a < n.length; a++) {
                    var r = n[a],
                        h = this.opt.duration + (e ? 300 - 100 * a : 100 * a);
                    r.obj.stop().animate({
                        left: this.itemStartOffset + a * this.itemWidthWithPadding + __app__.ww * (e ? -1 : 1)
                    }, h, this.opt.easing, function() {
                        $(this).css({
                            display: "none"
                        })
                    })
                }
                for (var a = 0; a < o.length; a++) {
                    var r = o[a],
                        l = this.itemStartOffset + a * this.itemWidthWithPadding,
                        c = a == o.length - 1,
                        d = e ? 100 * a : 300 - 100 * a;
                    r.obj.stop().css({
                        left: l + __app__.ww * (e ? 1 : -1),
                        display: "block"
                    }).delay(d).animate({
                        left: l
                    }, this.opt.duration, this.opt.easing, function() {
                        c && (s.switching = !1)
                    })
                }
            }
        },
        remove: function() {
            this.rm()
        }
    }),
    Members2 = BaseClass.extend({
        __className: "Members2",
        init: function(t) {
            this._id = !1, this.inited = !1, this.element = !1, this.opt = {
                duration: 1e3,
                easing: "swing"
            }, this.setOptions(t), this.put() && (this.switching = !1, this.page = 0, this.pageCount = 0, this.item = [], this.isTeamPage = this.element.hasClass("team-page"), this.create())
        },
        create: function() {
            var t, e = this;
            if (this.plate = this.find(this.element, ".plate"), t = this.find(this.element, ".item")) {
                for (var i = 0; i < t.length; i++) {
                    var s = $(t[i]),
                        n = {
                            id: i,
                            pos: i + 1,
                            obj: s,
                            info: s.find(".info"),
                            videoCnt: s.find(".video"),
                            video: s.find(".video-a"),
                            videoL: s.find(".video-l"),
                            videoR: s.find(".video-r"),
                            activate: function(t) {
                                switch (this.video.removeClass("active"), this.videoL.removeClass("active"), this.videoR.removeClass("active"), t) {
                                    case "l":
                                        this.videoL.addClass("active"), this.videoR[0].pause(), this.videoR[0].currentTime = 0, this.video[0].pause(), this.video[0].currentTime = 0, this.videoL[0].play(0);
                                        break;
                                    case "r":
                                        this.videoR.addClass("active"), this.videoL[0].pause(), this.videoL[0].currentTime = 0, this.video[0].pause(), this.video[0].currentTime = 0, this.videoR[0].play(0);
                                        break;
                                    default:
                                        this.video.addClass("active"), this.videoL[0].pause(), this.videoL[0].currentTime = 0, this.videoR[0].pause(), this.videoR[0].currentTime = 0, this.video[0].play(0);
                                        var i = 3 * e.page + 2 > e.item.length - 1 ? e.item.length - 1 - 3 * e.page : 0,
                                            s = (this.pos + i) % 3;
                                        switch (s) {
                                            case 1:
                                                "undefined" != typeof e.item[this.id + 1] && e.item[this.id + 1].activate("l");
                                                break;
                                            case 2:
                                                "undefined" != typeof e.item[this.id - 1] && e.item[this.id - 1].activate("r"), "undefined" != typeof e.item[this.id + 1] && e.item[this.id + 1].activate("l");
                                                break;
                                            case 0:
                                                "undefined" != typeof e.item[this.id - 1] && e.item[this.id - 1].activate("r")
                                        }
                                }
                            }
                        };
                    n.video.length && (n.videoCnt.bind("mouseenter mouseleave", {
                        id: i
                    }, function(t) {
                        var i = e.item[t.data.id];
                        switch (t.type) {
                            case "mouseenter":
                                i.activate()
                        }
                    }), n.video.bind("ended", function() {
                        this.currentTime = 0
                    })), this.item.push(n)
                }
                this.pageCount = Math.ceil(this.item.length / 3)
            }
            this.arrl = this.find(this.element, ".arrl"), this.arrr = this.find(this.element, ".arrr"), this.arrl && this.arrr && (this.pageCount > 1 ? (this.arrl.bind("click", function() {
                e.prevPage()
            }), this.arrr.bind("click", function() {
                e.nextPage()
            })) : (this.arrl.css({
                display: "none"
            }), this.arrr.css({
                display: "none"
            }))), this.inited = !0
        },
        resize: function(t) {
            this.height = 0, this.itemWidth = 0, this.plateHeight = 0, this.arrWidth = 60, this.arrPadding = 60, this.isTeamPage, t > 1420 || (t > 1260 ? this.arrPadding = 50 : (this.arrWidth = 40, this.arrPadding = 40)), this.itemWidth = Math.round((t - 2 * this.arrWidth - 6 * this.arrPadding) / 3), this.itemStartOffset = 2 * this.arrPadding + this.arrWidth, this.itemWidthWithPadding = this.itemWidth + this.arrPadding;
            for (var e = 0; e < this.item.length; e++) {
                var i = this.item[e];
                i.obj.css({
                    width: this.itemWidth,
                    left: this.itemStartOffset + e * this.itemWidthWithPadding,
                    bottom: 0,
                    display: e > 2 ? "none" : "block"
                });
                var s = i.obj.outerHeight(!0);
                s > this.height && (this.height = s);
                var n = i.info.outerHeight(!0);
                n > this.plateHeight && (this.plateHeight = n)
            }
            this.plate && this.plate.css({
                height: this.plateHeight
            }), this.element.css({
                height: this.height
            })
        },
        prevPage: function() {
            var t = this.page - 1;
            0 > t && (t = this.pageCount - 1), this.switchPage(t, !1)
        },
        nextPage: function() {
            var t = this.page + 1;
            t >= this.pageCount && (t = 0), this.switchPage(t, !0)
        },
        switchPage: function(t, e) {
            if (this.page != t && !this.switching) {
                this.switching = !0, typeof e == _un_ && (e = !0);
                var i, s = this,
                    n = [],
                    o = [];
                i = 3 * this.page, i + 3 > this.item.length - 1 && (i = this.item.length - 3);
                for (var a = i; i + 3 > a; a++) typeof this.item[a] != _un_ && n.push(this.item[a]);
                i = 3 * t, i + 3 > this.item.length - 1 && (i = this.item.length - 3);
                for (var a = i; i + 3 > a; a++) typeof this.item[a] != _un_ && o.push(this.item[a]);
                this.page = t;
                for (var a = 0; a < n.length; a++) {
                    var r = n[a],
                        h = this.opt.duration + (e ? 300 - 100 * a : 100 * a);
                    r.obj.stop().animate({
                        left: this.itemStartOffset + a * this.itemWidthWithPadding + __app__.ww * (e ? -1 : 1)
                    }, h, this.opt.easing, function() {
                        $(this).css({
                            display: "none"
                        })
                    })
                }
                for (var a = 0; a < o.length; a++) {
                    var r = o[a],
                        l = this.itemStartOffset + a * this.itemWidthWithPadding,
                        c = a == o.length - 1,
                        d = e ? 100 * a : 300 - 100 * a;
                    r.obj.stop().css({
                        left: l + __app__.ww * (e ? 1 : -1),
                        display: "block"
                    }).delay(d).animate({
                        left: l
                    }, this.opt.duration, this.opt.easing, function() {
                        c && (s.switching = !1)
                    })
                }
            }
        },
        remove: function() {
            this.rm()
        }
    }),
    OverlapMenu = BaseClass.extend({
        __className: "OverlapMenu",
        init: function(t) {
            this.delegate = !1, this.element = !1, this.opt = {}, this.setOptions(t), this.opened = !1, this.sizingRules = [], this.returnFixedContent = !1, this.create()
        },
        create: function() {
            var t = this;
            this.bg = this.find(this.element, ".bg"), this.bg && (this.bgImg = this.find(this.bg, "img")), this.cnt = this.find(this.element, ".cnt"), this.right = this.find(this.element, ".right"), this.right && this.right.find(".btn").bind("click", function() {
                t.delegate.toggleRequestForm(!0)
            }), this.toggle = this.find(this.element, ".toggle"), this.toggle && this.toggle.bind("click", function() {
                t.toggleMenu(!1)
            }), $(window).bind("appResize." + this.__className, function(e, i, s) {
                t.resize(i, s)
            })
        },
        resize: function(t, e) {
            var i = this.element.css("display");
            this.element.css({
                display: "block",
                paddingTop: 0
            }), this.cnt.css({
                paddingTop: Math.round((e - this.cnt.outerHeight(!0)) / 2)
            }), this.element.css({
                display: i
            }), this.bg && this.bgImg && this.reposObject({
                ww: t,
                wh: e,
                width: 1020,
                height: 660,
                obj: this.bgImg
            })
        },
        toggleMenu: function(t) {
            if (t != this.opened) {
                var e = this;
                this.opened ? (this.element.stop().animate({
                    top: -__app__.wh
                }, 500, "swing", function() {
                    $(this).css({
                        display: "none"
                    })
                }), this.returnFixedContent && __app__.setFixedContent(!1)) : this.element.stop().css({
                    display: "block",
                    top: -__app__.wh
                }).animate({
                    top: 0
                }, 500, "swing", function() {
                    e.returnFixedContent = __app__.setFixedContent(!0)
                }), this.opened = !this.opened
            }
        },
        remove: function() {
            $(window).unbind("appResize." + this.__className)
        }
    }),
    PXB = BaseClass.extend({
        __className: "PXB",
        init: function(t) {
            this._id = 0, this.inited = !1, this.element = !1, this.opt = {
                startIndex: 1
            }, this.setOptions(t), this.put() && (this.item = [], this.create())
        },
        create: function() {
            var t = this,
                e = this.find(this.element, ".pxb");
            if (e.length)
                for (var i = 0; i < e.length; i++) {
                    var s = $(e[i]).attr("pxb", i).css({
                        zIndex: this.opt.startIndex + i
                    });
                    this.item.push({
                        id: i,
                        obj: s,
                        fixed: !1,
                        top: 0
                    })
                }
            $(window).bind("appScroll." + this.__className + this._id, function(e, i) {
                t.updateScroll(i)
            }), $(window).bind("appResize." + this.__className + this._id, function(e, i, s) {
                t.resize(i, s)
            }), this.inited = !0
        },
        resize: function(t) {
            $(this.item).each(function() {
                var e = this.obj.offset();
                this.y = e.top, this.height = this.obj.outerHeight(!0), this.obj.css({
                    width: t
                })
            })
        },
        updateScroll: function(t) {
            for (var e = !1, i = this.item.length - 2; i >= 0; i--) {
                var s = this.item[i];
                s.y <= t ? s.fixed ? s.obj.css({
                    top: t
                }) : (e = !0, s.obj.css({
                    position: "absolute",
                    top: s.y
                }), s.fixed = !0, __app__.content.css({
                    paddingTop: s.y + s.height
                })) : s.fixed && (s.obj.css({
                    position: "relative",
                    top: "auto"
                }), s.fixed = !1, __app__.content.css({
                    paddingTop: s.y
                }))
            }
        },
        remove: function() {
            $(window).unbind("appScroll." + this.__className + this._id), this.rm()
        }
    }),
    __PagePart__ = {},
    PagePart = BaseClass.extend({
        __className: "PagePart",
        init: function(t) {
            this._id = !1, this.inited = !1, this.element = !1, this.opt = {
                type: "default",
                partHeadTop: 0,
                partHeadHeight: 0,
                partHeadAnimated: !1
            }, this.setOptions(t), this.put() && (this.item = [], this.USF = [], this.create())
        },
        create: function() {
            var t = this;
            this.partHead = this.find(this.element, ".part-head"), this.partHead && (this.ph_ttl = this.find(this.partHead, "h1"), this.ph_txt = this.find(this.partHead, "p"), this.USF.push(function(t, e) {
                !t.opt.partHeadAnimated && t.opt.partHeadTop && (e + __app__.wh > t.opt.partHeadTop ? t.opt.partHeadAnimated || (t.partHead.addClass("animate"), t.opt.partHeadAnimated = !0) : t.opt.partHeadAnimated && (t.partHead.removeClass("animate"), t.opt.partHeadAnimated = !1))
            })), this._create(), $(window).bind("appResize." + this.__className + this._id, function(e, i, s) {
                t.resize(i, s)
            }), $(window).bind("appScroll." + this.__className + this._id, function(e, i) {
                t.updateScroll(i)
            }), this.inited = !0, __PagePart__[this.opt.type] = this
        },
        resize: function(t, e) {
            this._resize(t, e), this.partHead && (this.opt.partHeadHeight = this.partHead.outerHeight(!0), this.opt.partHeadTop = this.partHead.offset().top + Math.round(this.opt.partHeadHeight / 2))
        },
        remove: function() {
            $(window).unbind("appResize." + this.__className + this._id), $(window).unbind("appScroll." + this.__className + this._id), this._remove(), this.rm()
        },
        updateScroll: function(t) {
            if (this.USF.length)
                for (var e = 0; e < this.USF.length; e++) this.USF[e](this, t);
            this._updateScroll()
        },
        _create: function() {},
        _resize: function() {},
        _remove: function() {},
        _updateScroll: function() {}
    }),
    PagePart_default = PagePart.extend({
        __className: "PagePart_default"
    }),
    PagePart_services = PagePart.extend({
        __className: "PagePart_services",
        _create: function() {
            var t = this.find(this.element, ".services");
            this.services = t ? new Services({
                _element: t,
                _delegate: this
            }) : !1
        },
        _resize: function(t, e) {
            this.services && this.services.resize(t, e)
        }
    }),
    PagePart_company = PagePart.extend({
        __className: "PagePart_company",
        _create: function() {
            this.company = this.find(this.element, ".company")
        },
        _resize: function(t, e) {
            if (this.company) {
                var i = this.partHead ? this.partHead.outerHeight(!0) : 0;
                this.company.css({
                    height: e - i - __app__.fMH
                })
            }
        }
    }),
    PagePart_achivements = PagePart.extend({
        __className: "PagePart_achivements",
        _create: function() {
            var t = $("#achievements");
            this.achievements = t.length ? new Achievements({
                _element: t,
                _delegate: this
            }) : !1
        },
        _resize: function(t, e) {
            this.achievements && this.achievements.resize(t, e)
        }
    }),
    PagePart_team = PagePart.extend({
        __className: "PagePart_team",
        _create: function() {
            this.team = this.find(this.element, ".team")
        },
        _resize: function(t, e) {
            if (this.team) {
                var i = this.partHead ? this.partHead.outerHeight(!0) : 0;
                this.team.css({
                    height: e - i - __app__.fMH
                })
            }
        }
    }),
    PagePart_members = PagePart.extend({
        __className: "PagePart_members",
        _create: function() {
            var t = this.find(this.element, ".members");
            this.members = t ? new Members({
                _element: t,
                _delegate: this
            }) : !1
        },
        _resize: function(t, e) {
            this.members && this.members.resize(t, e)
        }
    }),
    PagePart_members2 = PagePart.extend({
        __className: "PagePart_members2",
        _create: function() {
            var t = this.find(this.element, ".members2");
            this.members = t ? new Members2({
                _element: t,
                _delegate: this
            }) : !1
        },
        _resize: function(t, e) {
            this.members && this.members.resize(t, e)
        }
    }),
    PagePart_clients = PagePart.extend({
        __className: "PagePart_clients",
        _create: function() {
            var t = this.element.find(".clients");
            this.clients = t ? new Clients({
                _element: t,
                _delegate: this
            }) : !1
        },
        _resize: function(t, e) {
            this.clients && this.clients.resize(t, e)
        }
    }),
    PagePart_Company = PagePart.extend({
        __className: "PagePart_Company",
        _create: function() {
            var t = this,
                e = this.find(this.element, ".big-video");
            if (e)
                for (var i = 0; i < e.length; i++) new H5Video({
                    _element: $(e[i]),
                    _delegate: this
                });
            if (this.officeTriggers = [], this.officeTriggerPos = 0, this.officesSwitcher = this.find(this.element, ".js-offices-switcher"), this.officesSwitcher) {
                var s = this.find(this.officesSwitcher, ".js-office-trigger");
                if (s)
                    for (var i = 0; i < s.length; i++) ! function(e, i) {
                        var s = {
                            id: i,
                            obj: e,
                            office_id: e.attr("office_id"),
                            act: e.hasClass("act"),
                            activate: function(t) {
                                this.act != t && (t ? (this.obj.addClass("act"), s.officeObj && s.officeObj.css({
                                    display: "block"
                                })) : (this.obj.removeClass("act"), s.officeObj && s.officeObj.css({
                                    display: "none"
                                })), this.act = t)
                            }
                        };
                        s.officeObj = s.office_id ? $("#" + s.office_id) : !1, s.act && (t.officeTriggerPos = i), e.bind("click", function() {
                            s.act || (t.officeTriggers[t.officeTriggerPos].activate(!1), s.activate(!0), t.officeTriggerPos = i)
                        }), t.officeTriggers.push(s)
                    }($(s[i]), i)
            }
        },
        _resize: function() {}
    }),
    PagePart_CompanyNumbers = PagePart.extend({
        __className: "PagePart_CompanyNumbers",
        _create: function() {
            var t = this.find(this.element, ".CompanyNumbers");
            this.numbers = t ? new CompanyNumbers({
                _delegate: this,
                _element: t
            }) : !1, this.isPlaying = !0;
            var e = this;
            if (this.bgVideo = this.find(this.element, "video"), this.videoPreloadPrc = 0, this.bgVideo) {
                var i = this.bgVideo[0].poster.replace(".jpg", "");
                this.bgVideo.css({
                    opacity: 0
                }), this.bgVideo[0].addEventListener("loadedmetadata", function() {
                    e.preloadBGVideo()
                }), this.addSourceToVideo(this.bgVideo[0], i + ".mp4?v=2", "video/mp4"), this.addSourceToVideo(this.bgVideo[0], i + ".ogv?v=2", "video/ogv"), this.addSourceToVideo(this.bgVideo[0], i + ".webm?v=2", "video/webm")
            }
        },
        preloadBGVideo: function() {
            if (this.bgVideoLoaded) return this.bgVideo.css({
                opacity: 1
            }), void this.bgVideo[0].play(0);
            if (this.bgVideo) {
                var t = this,
                    e = this.bgVideo,
                    i = function(s) {
                        var n = t.progressHandler(s, e[0], 5);
                        t.videoPreloadPrc = n > 5 ? 1 : n / 5, n > 5 && (e[0].removeEventListener("progress", i, !1), t.bgVideo.animate({
                            opacity: 1
                        }, 500, "swing"), t.BGVideoLoaded())
                    };
                e[0].addEventListener("progress", i, !1), e[0].play()
            }
        },
        BGVideoLoaded: function() {
            this.bgVideoLoaded = !0, this.bgVideo[0].currentTime = 0, this.bgVideo[0].play()
        },
        _resize: function(t, e) {
            this.width = t, this.height = e - __app__.fMH, this.numbers && (this.height = Math.max(this.height, this.numbers.resize(this.width, this.height))), this.element.css({
                width: this.width,
                height: this.height
            }), this.bgVideo && this.reposObject({
                ww: this.width,
                wh: this.height,
                width: 1280,
                height: 720,
                obj: this.bgVideo
            })
        }
    }),
    CompanyNumbers = BaseClass.extend({
        __className: "CompanyNumbers",
        init: function(t) {
            this._id = 0, this._inited = !1, this.element = !1, this.delegate = !1, this.opt = {}, this.setOptions(t), this.put() && (this.item = [], this.count = 0, this.create())
        },
        create: function() {
            var t;
            if (t = this.find(this.element, ".number"))
                for (var e = 0; e < t.length; e++) {
                    var i = $(t[e]),
                        s = {
                            id: e,
                            obj: i,
                            dsc: this.find(i, ".dsc")
                        };
                    this.item.push(s), this.count++
                }
        },
        resize: function(t, e) {
            this.element.css({
                paddingTop: 0,
                paddingBottom: 0
            }), this.height = this.element.outerHeight(!0) + 80;
            var i = 0;
            return e > this.height && (i = Math.round((e - this.height) / 2), this.element.css({
                paddingTop: i,
                paddingBottom: i
            })), this.height + 2 * i
        }
    }),
    PagePart_DeliveryTariffs = PagePart.extend({
        __className: "PagePart_DeliveryTariffs",
        _create: function() {
            $(".lp-request-form-caller").bind("click", function() {
                $("body, html").animate({
                    scrollTop: $(".lp-request-form").offset().top
                })
            });
            var t = $("#lp-request-form");
            t.length && new ServiceRequestForm({
                _element: t,
                _delegate: this
            })
        },
        _resize: function() {}
    }),
    PagePart_Header = PagePart.extend({
        __className: "PagePart_Header",
        _create: function() {
            __indexPart = this
        },
        _resize: function() {
            this.height = this.element.height()
        }
    }),
    PagePart_Landing = PagePart.extend({
        __className: "PagePart_Landing",
        _create: function() {
            var t = this,
                e = this.find(this.element, ".request-form");
            this.requestForm = e ? new ServiceRequestForm({
                _element: e,
                _delegate: this
            }) : !1, this.vc = this.find(this.element, ".video-container"), this.vp = this.find(this.element, ".videoPlayer"), this.vc && this.vp && (this.vp = new VideoPlayer({
                _element: this.vp[0],
                _onReady: function() {
                    t.resize()
                },
                _externalResize: !0
            }), this.resize())
        },
        _resize: function() {
            if (this.vc && this.vp) {
                var t = this.vc[0].getBoundingClientRect().width,
                    e = Math.round(t / this.vp.videoWidth * this.vp.videoHeight);
                t && e && (this.vc.css({
                    height: e
                }), this.vp.resize(t, e))
            }
        }
    }),
    PagePart_LifePage = PagePart.extend({
        __className: "PagePart_LifePage",
        _create: function() {
            var t, e = this;
            this.lifeContent = this.find(this.element, ".life-content"), this.centerContent = this.find(this.element, ".center-content"), this.rightPanel = this.find(this.element, ".right-panel"), this.lifeContent = this.find(this.element, ".life-content");
            var i = $("#life-menu");
            this.servicesMenu = !1, i.length && (this.servicesMenu = new ServicesMenu({
                _element: i,
                _delegate: this
            })), t = $("#life-services"), this.lifeServices = t.length ? new ServicesOnLife({
                _element: t,
                _delegate: this
            }) : !1, t = $(".js-life-subscribe"), this.requestFormLife = t.length ? new RequestFormLife({
                _element: t,
                _delegate: this
            }) : !1, this.post = [], this.postOpened = !1;
            var s = this.find(this.element, ".request-form");
            if (this.requestForm = s ? new ServiceRequestForm({
                    _element: s,
                    _delegate: this
                }) : !1, t = this.find(this.element, ".post"))
                for (var n = 0; n < t.length; n++) {
                    var o = $(t[n]),
                        a = new LifePostSimple({
                            _delegate: this,
                            _element: o
                        });
                    this.post.push(a)
                }
            this.postBoxContainer = this.find(this.element, "#postbox-container"), this.postBoxContainer && (this.postBoxBusy = !1, this.postBoxPage = 1, this.postBoxMorePosts = this.find(this.element, "#postbox-more-posts"), this.postBoxMorePosts && this.postBoxMorePosts.bind("click", function() {
                if (!e.postBoxBusy) {
                    e.postBoxBusy = !0, e.postBoxPage++;
                    var t = window.location.pathname,
                        i = window.location.search;
                    /page\=\d+/.test(i) ? i = i.replace(/page\=\d+/, "page=" + e.postBoxPage) : (i.length ? i += "&" : i = "?", i += "page=" + e.postBoxPage);
                    var s = e.postBoxContainer.offset().top + e.postBoxContainer.outerHeight(!0) - 80;
                    $.ajax({
                        url: t + i,
                        type: "GET",
                        dataType: "json"
                    }).fail(function() {
                        e.postBoxMorePosts.remove()
                    }).done(function(t) {
                        e.postBoxContainer.append(t.html), $("html,body").animate({
                            scrollTop: s
                        }, 500), t.haveMore || e.postBoxMorePosts.remove()
                    }).always(function() {
                        e.postBoxBusy = !1
                    })
                }
            })), this.rightPanel && (this.lifeSearchForm = this.find(this.rightPanel, "#life-search-form"), this.lifeSearchForm && (this.lifeSearchFormInput = this.find(this.rightPanel, "#life-search-form-input"), this.lifeSearchFormSubmit = this.find(this.rightPanel, "#life-search-form-submit"), this.lifeSearchFormInput && this.lifeSearchFormSubmit && (this.lifeSearchFormSubmit.bind("click", function() {
                e.lifeSearchForm.submit()
            }), this.lifeSearchForm.bind("submit", function(t) {
                e.lifeSearchFormInput.val().length < 2 && e.cancelEvent(t)
            })))), t = this.find(this.element, ".post-opened"), t && (this.postOpened = new LifePostOpened({
                _delegate: this,
                _element: t
            }))
        },
        _resize: function() {
            if (this.post.length)
                for (var t = 0; t < this.post.length; t++) this.post[t].resize();
            var e = this.rightPanel ? 241 : 0,
                i = 2 * parseInt(this.centerContent.css("padding-left")),
                s = Math.min(__app__.ww - e - i, this.postOpened ? 850 : 1e3);
            s = Math.max(s, 500), this.centerContent.css({
                width: s
            }), this.postOpened && this.postOpened.resize(s), this.lifeServices && this.lifeServices.resize(), this.lifeContent.css({
                height: "auto"
            });
            var n = this.lifeContent.outerHeight(!0),
                o = __app__.wh - __app__.fMH - __FOOTER__.element.outerHeight(!0) - 120;
            o > n && this.lifeContent.css({
                height: o
            })
        }
    }),
    LifePostSimple = BaseClass.extend({
        __className: "LifePostSimple",
        init: function(t) {
            this.delegate = !1, this.element = !1, this.opt = {}, this.setOptions(t), this.create()
        },
        create: function() {
            var t = this;
            this.vc = this.find(this.element, ".video-cover"), this.vp = this.find(this.element, ".videoPlayer"), this.vc && this.vp && (this.vp = new VideoPlayer({
                _element: this.vp[0],
                _onReady: function() {
                    t.resize()
                },
                _externalResize: !0
            }), this.resize())
        },
        resize: function() {
            if (this.vc && this.vp) {
                var t = this.vc[0].getBoundingClientRect().width,
                    e = Math.round(t / this.vp.videoWidth * this.vp.videoHeight);
                t && e && (this.vc.css({
                    height: e
                }), this.vp.resize(t, e))
            }
        },
        remove: function() {
            this.rm()
        }
    }),
    LifePostOpened = BaseClass.extend({
        __className: "LifePostOpened",
        init: function(t) {
            this.delegate = !1, this.element = !1, this.opt = {}, this.setOptions(t), this.put() && (this.slider = [], this.postImage = [], this.postVideo = [], this.create())
        },
        create: function() {
            var t;
            if (t = this.find(this.element, ".cntBlk-slider")) {
                var e = new GalleryViewer({
                    _delegate: this,
                    _element: t,
                    viewerMode: "slider"
                });
                this.slider.push(e)
            }
            if (t = this.find(this.element, ".cntBlkImg"))
                for (var i = 0; i < t.length; i++) {
                    var s = $(t[i]);
                    this.postImage.push(new LifeImage({
                        _delegate: this,
                        _element: s
                    }))
                }
            if (t = this.find(this.element, ".videoPlayer"))
                for (var i = 0; i < t.length; i++) {
                    var s = $(t[i]);
                    this.postVideo.push(new LifeVideo({
                        _delegate: this,
                        _element: s
                    }))
                }
            if (t = this.find(this.element, ".social-buttons")) {
                var n = t,
                    o = {
                        url: n.attr("url"),
                        ttl: n.attr("ttl"),
                        img: n.attr("img")
                    };
                n.find(".lj").bind(tt.is.click, o, function(t) {
                    __app__.share.lj(t.data)
                })
            }
        },
        resize: function(t) {
            if (this.postImage.length)
                for (var e = 0; e < this.postImage.length; e++) this.postImage[e].resize(t);
            if (this.postVideo.length)
                for (var e = 0; e < this.postVideo.length; e++) this.postVideo[e].resize(t)
        },
        remove: function() {
            this.rm()
        }
    }),
    LifeImage = BaseClass.extend({
        init: function(t) {
            this.element = !1, this.opt = {}, this.setOptions(t), this.defW = parseInt(this.element.css("width")), this.defH = parseInt(this.element.css("height")), this.width = 0, this.height = 0, this.create()
        },
        create: function() {},
        resize: function(t) {
            this.width = t, this.height = Math.round(t / this.defW * this.defH), this.element.css({
                width: this.width,
                height: this.height
            })
        }
    }),
    LifeVideo = BaseClass.extend({
        init: function(t) {
            this.element = !1, this.opt = {}, this.setOptions(t), this.defW = parseInt(this.element.attr("width")), this.defH = parseInt(this.element.attr("height")), this.width = 0, this.height = 0, this.create()
        },
        create: function() {},
        resize: function(t) {
            this.width = t, this.height = Math.round(t / this.defW * this.defH), this.element.css({
                width: this.width,
                height: this.height
            })
        }
    }),
    PagePart_MarketingKit = PagePart.extend({
        __className: "PagePart_MarketingKit",
        _create: function() {
            function t() {
                $(".flipbook").turn({
                    page: 1,
                    width: 1200,
                    height: 600,
                    elevation: 50,
                    gradients: !0,
                    autoCenter: !0
                }).bind("click mousemove", function(t) {
                    var e = t.pageX > $(this).offset().left + $(this).width() / 2;
                    "click" == t.type && $(this).turn(e ? "next" : "previous")
                }).bind("turning", function(t, e) {
                    $(".flipbook-prev").css(2 > e ? {
                        display: "none"
                    } : {
                        display: "block"
                    })
                }), $(".flipbook-prev").bind("click", function() {
                    $(".flipbook").turn("previous")
                }), $(".flipbook-next").bind("click", function() {
                    var t = $(".flipbook").turn("page"),
                        e = $(".flipbook").turn("pages");
                    t >= e ? $(".flipbook").turn("page", 1) : $(".flipbook").turn("next")
                })
            }
            yepnope({
                test: Modernizr.csstransforms,
                yep: ["/mk/turn.js"],
                nope: ["/mk/turn.html4.min.js"],
                complete: t
            }), elm = $("#life-services"), this.lifeServices = elm.length ? new ServicesOnLife({
                _element: elm,
                _delegate: this
            }) : !1
        },
        _resize: function() {
            this.lifeServices && this.lifeServices.resize(), this.height = Math.max(650, window.innerHeight - 172), this.element.css({
                height: this.height
            })
        }
    }),
    PagePart_Minifooter = PagePart.extend({
        __className: "PagePart_Minifooter",
        _create: function() {
            __FOOTER__ = this, this.miniFooter = !0, this.showinghHeight = 0
        },
        _resize: function() {
            this.footerHeight = this.element.height(), this.contentHeight = __app__.content.outerHeight(!0), this.fullHeight = this.contentHeight
        },
        updateFooter: function() {
            return !1
        }
    }),
    PagePart_OfficeImage = PagePart.extend({
        __className: "PagePart_OfficeImage",
        _create: function() {
            this.container = this.find(this.element, ".container")
        },
        _resize: function() {
            if (this.container) {
                this.height = Math.round(Math.max(500, window.innerHeight / 3 * 2)), this.width = Math.min(window.innerWidth - 80, Math.round(2 * this.height)), this.height = Math.round(1120 / 1680 * this.width);
                for (var t = 0; t < this.container.length; t++) $(this.container[t]).css({
                    width: this.width,
                    height: this.height
                })
            }
        }
    }),
    PagePart_Papers = PagePart.extend({
        __className: "PagePart_Papers",
        _create: function() {
            this.papers = this.find(this.element, ".papers"), this.papers = this.papers ? new Papers({
                _element: this.papers
            }) : !1
        },
        _resize: function(t, e) {
            this.papers && this.papers.resize(t, e)
        }
    }),
    Papers = BaseClass.extend({
        init: function(t) {
            this.element = !1, this.opt = {}, this.setOptions(t), this.act = 1, this.section = [], this.menu = [], this.switching = !1, this.create()
        },
        create: function() {
            var t = this,
                e = $("#papers-menu");
            if (this.papersMenu = e ? e : !1, this.papersMenu) {
                var e = this.find(this.papersMenu, ".item");
                if (e.length)
                    for (var i = 0; i < e.length; i++) {
                        var s = $(e[i]),
                            n = {
                                id: i,
                                obj: s,
                                section: parseInt(s.attr("section")),
                                active: 0,
                                activate: function(e) {
                                    this.active !== e && (e ? (this.obj.unbind("click"), this.obj.hasClass("act") || this.obj.addClass("act")) : (this.obj.bind("click", {
                                        id: this.id,
                                        section: this.section
                                    }, function(e) {
                                        t.mouseMenu(e)
                                    }), this.obj.removeClass("act")), this.active = e)
                                }
                            };
                        n.activate(s.hasClass("act")), this.menu.push(n)
                    }
            }
            var o = this.find(this.element, ".section");
            if (o)
                for (var i = 0; i < o.length; i++) {
                    var a = $(o[i]),
                        r = {
                            id: i,
                            obj: a,
                            section: parseInt(a.attr("section")),
                            item: []
                        },
                        h = this.find(r.obj, ".item");
                    if (h)
                        for (var l = 0; l < h.length; l++) {
                            var c = $(h[l]),
                                n = {
                                    id: l,
                                    obj: c,
                                    section: r.section,
                                    img: {
                                        obj: !1,
                                        src: c.attr("src"),
                                        width: 0,
                                        height: 0,
                                        loaded: !1,
                                        resizeMode: !0
                                    }
                                };
                            n.obj.hasClass("smi") || n.obj.css({
                                cursor: "pointer"
                            }).bind("click", {
                                id: n.id,
                                section: n.section
                            }, function(e) {
                                t.openItem(e.data.section, e.data.id)
                            }), r.item.push(n)
                        }
                    this.section.push(r)
                }
            this.viewer = new PapersViewer({
                _delegate: this
            }), this.scrollToMe = $(".js-scrollto-papers"), this.scrollToMe.length && this.scrollToMe.bind("click", function() {
                $("html, body").animate({
                    scrollTop: t.element.offset().top - 150
                })
            })
        },
        resize: function(t, e) {
            this.viewer && this.viewer.resize(t, e)
        },
        mouseMenu: function(t) {
            switch (t.type) {
                case "click":
                    this.switchSection(t.data.section);
                    break;
                case "mouseenter":
                    break;
                case "mouseleave":
            }
        },
        getItem: function(t, e) {
            var t = this.getSection(t);
            if (t)
                for (var i = 0; i < t.item.length; i++)
                    if (t.item[i].id == e) return t.item[i];
            return !1
        },
        getMenuItem: function(t) {
            for (var e = 0; e < this.section.length; e++)
                if (this.menu[e].section == t) return this.menu[e];
            return !1
        },
        getSection: function(t) {
            for (var e = 0; e < this.section.length; e++)
                if (this.section[e].section == t) return this.section[e];
            return !1
        },
        switchSection: function(t) {
            if (this.act != t && !this.switching) {
                this.switching = !0;
                var e = this.getSection(this.act),
                    i = this.getMenuItem(this.act),
                    s = this.getSection(t),
                    n = this.getMenuItem(t),
                    o = this;
                e && s && i && n && (i.activate(!1), n.activate(!0), e.obj.stop().animate({
                    opacity: 0
                }, 500, "swing", function() {
                    $(this).css({
                        display: "none"
                    }), s.obj.stop().css({
                        display: "block",
                        opacity: 0
                    }).animate({
                        opacity: 1
                    }, 500, "swing", function() {
                        o.switching = !1
                    })
                }), this.act = t)
            }
        },
        openItem: function(t, e) {
            var i = this.getItem(t, e);
            i && i.img.src && this.viewer.open(i)
        },
        nextItem: function(t) {
            if (t) {
                var e = this.getSection(t.section),
                    i = t.id + 1;
                i >= e.item.length && (i = 0), this.viewer.open(e.item[i])
            }
        },
        prevItem: function(t) {
            if (t) {
                var e = this.getSection(t.section),
                    i = t.id - 1;
                0 > i && (i = e.item.length - 1), this.viewer.open(e.item[i])
            }
        }
    }),
    PapersViewer = BaseClass.extend({
        init: function(t) {
            this.delegate = !1, this.element = !1, this.opt = {}, this.setOptions(t), this.prevItem = !1, this.item = !1, this.switching = !1, this.showingArrows = !1, this.loader = !1, this.create()
        },
        create: function() {
            var t = this;
            this.element = $("<div></div>").addClass("papers-viewer").appendTo($(document.body)), this.loader = this.castLoader().appendTo(this.element).css({
                display: "none"
            }), this.arrl = $("<div></div>").addClass("arr arrl").css({
                display: "none"
            }).appendTo(this.element).bind("click mouseenter mouseleave", {
                dir: !1
            }, function(e) {
                t.mouseArrow(e)
            }), this.arrr = $("<div></div>").addClass("arr arrr").css({
                display: "none"
            }).appendTo(this.element).bind("click mouseenter mouseleave", {
                dir: !0
            }, function(e) {
                t.mouseArrow(e)
            }), this.toggle = $("<div></div>").addClass("toggle").appendTo(this.element).bind("click", function() {
                t.close()
            }), this.resize()
        },
        mouseArrow: function(t) {
            var e = t.data.dir;
            switch (t.type) {
                case "click":
                    return e ? this.delegate.nextItem(this.item) : this.delegate.prevItem(this.item);
                case "mouseenter":
                    break;
                case "mouseleave":
            }
        },
        slideDown: function(t) {
            this.element.stop().css({
                display: "block",
                opacity: 1,
                top: -__app__.wh
            }).animate({
                top: 0
            }, function() {
                typeof t == _fn_ && t()
            })
        },
        slideUp: function(t) {
            var e = this;
            this.element.stop().animate({
                top: -__app__.wh
            }, function() {
                e.element.css({
                    display: "none",
                    opacity: 0
                }), typeof t == _fn_ && t()
            })
        },
        showArrows: function() {},
        open: function(t) {
            if (!this.switching) {
                this.switching = !0;
                var e = this;
                this.prevItem = this.item, this.item = !1, this.prevItem || (this.repos(), this.slideDown()), t.img.obj || (t.img.obj = $("<img></img>")), t.img.obj.css({
                    top: 0,
                    opacity: 0
                }).appendTo(this.element), this.item = t, t.img.loaded ? this.show() : (this.loader.stop().css({
                    display: "block",
                    opacity: 0
                }).animate({
                    opacity: 1
                }), t.img.obj.bind("load error", function(t) {
                    e.loaded(t)
                }).attr("src", t.img.src)), __app__.setFixedContent(!0)
            }
        },
        loaded: function(t) {
            switch (t.type) {
                case "load":
                    this.item.img.width = this.item.img.obj[0].width, this.item.img.height = this.item.img.obj[0].height, this.item.img.loaded = !0, this.item.img.obj.unbind("load error"), this.show();
                    break;
                case "error":
                    alert("Ошибка загрузки изображения."), this.switching = !1
            }
            this.loader.stop().animate({
                opacity: 0
            }, function() {
                $(this).css({
                    display: "none"
                })
            })
        },
        show: function() {
            var t = this,
                e = function() {
                    t.showingArrows || (t.arrl.css({
                        display: "block",
                        opacity: 0
                    }).animate({
                        opacity: 1
                    }), t.arrr.css({
                        display: "block",
                        opacity: 0
                    }).animate({
                        opacity: 1
                    }), t.showingArrows = !0), t.item.img.obj.appendTo(this.element).css({
                        opacity: 0
                    }), t.repos(), t.item.img.obj.stop().animate({
                        opacity: 1
                    }, 500, function() {
                        t.switching = !1
                    })
                };
            this.prevItem ? (this.prevItem.img.obj.stop().animate({
                opacity: 0
            }, function() {
                $(this).remove(), e()
            }), this.prevItem = !1) : e()
        },
        close: function() {
            var t = this;
            this.slideUp(function() {
                t.item && (t.item.img.obj.remove(), t.item = !1), t.showingArrows = !1, t.arrl.css({
                    display: "none"
                }), t.arrr.css({
                    display: "none"
                }), t.switching = !1
            }), __app__.setFixedContent(!1)
        },
        resize: function() {
            this.element.css({
                width: __app__.ww,
                hegiht: __app__.wh
            });
            var t = Math.round((__app__.wh - this.arrl.outerHeight(!0)) / 2);
            this.loader.css({
                left: Math.round((__app__.ww - 60) / 2),
                top: Math.round((__app__.wh - 60) / 2)
            }), this.arrl.css({
                top: t
            }), this.arrr.css({
                top: t
            }), this.repos()
        },
        repos: function() {
            this.item && this.item.img.loaded && (this.item.img.ww = __app__.ww - 240, this.item.img.wh = __app__.wh - 120, this.reposObject(this.item.img), this.item.img.obj.css({
                top: Math.round((__app__.wh - this.item.img.ch) / 2),
                left: Math.round((__app__.ww - this.item.img.cw) / 2)
            }))
        }
    }),
    PagePart_Podcast = PagePart.extend({
        __className: "PagePart_Podcast",
        _create: function() {
            this.podcastContent = this.find(this.element, ".podcast-content"), this.centerContent = this.find(this.element, ".center-content")
        },
        _resize: function() {
            this.podcastContent.css({
                height: "auto"
            });
            var t = this.podcastContent.outerHeight(!0),
                e = __app__.wh - __app__.fMH - __FOOTER__.element.outerHeight(!0);
            e > t && this.podcastContent.css({
                height: e
            })
        }
    }),
    PagePart_ServicePage = PagePart.extend({
        __className: "PagePart_ServicePage",
        _create: function() {
            this.video = [], this.flagWidth = 0, this.paddingLeft = 0, this.centerContent = this.find(this.element, ".center-content");
            var t = (this.find(this.element, ".right-panel"), $("#services-menu"));
            this.servicesMenu = !1, t.length && (this.servicesMenu = new ServicesMenu({
                _element: t,
                _delegate: this
            }));
            var e = $(".js-life-subscribe");
            this.requestFormLife = e.length ? new RequestFormLife({
                _element: e,
                _delegate: this
            }) : !1;
            var i = $("#payment-menu");
            i.length && (this.paymentsMenu = new PaymentsMenu({
                _element: i,
                _delegate: this
            })), this.sliders = [], this.skipIndex = !1, "#skip" == window.location.hash && (this.skipIndex = !0), this.centerContent && this.initContent()
        },
        killContent: function() {
            if (this.requestButton && (this.requestButton.unbind("click"), this.requestButton = null), this.serviceMaps && (this.serviceMaps.remove(), this.servicesMaps = null), this.faq && (this.faq.remove(), this.faq = null), this.video.length) {
                for (var t = 0; t < this.video.length; t++) this.video[t].remove(), this.video[t] = null;
                this.video = []
            }
            if (this.sliders) {
                for (var t = 0; t < this.sliders.length; t++) this.sliders[t].remove();
                this.sliders[t] = !1, this.sliders = []
            }
            this.calculator && (this.calculator.remove(), this.calculator = null), this.requestForm && (this.requestForm.remove(), this.requestForm = null), this.blockSwitcher && (this.blockSwitcher.remove(), this.blockSwitcher = null)
        },
        initContent: function() {
            var t = this,
                e = this.find(this.element, ".service-maps");
            this.serviceMaps = e ? new ServiceMaps({
                _element: e
            }) : !1;
            var i = this.find(this.element, ".FAQ");
            this.faq = i ? new ServiceFAQ({
                _element: i
            }) : !1, this.video = [];
            var s = this.find(this.element, ".small-video");
            if (s)
                for (var n = 0; n < s.length; n++) this.video.push(new H5Video({
                    _element: $(s[n])
                }));
            this.sliders = [];
            var o = this.find(this.element, ".slider");
            if (o)
                for (var n = 0; n < o.length; n++) {
                    var a = new Slider({
                        _element: $(o[n]),
                        _delegate: this
                    });
                    this.sliders.push(a)
                }
            this.requestButton = this.find(this.element, ".request"), this.requestButton && this.requestButton.bind("click", function() {
                __app__.scrollTo(t.element.find(".request-form").offset().top - __app__.fMH - 40)
            });
            var r = this.find(this.element, ".calculator");
            this.calculator = r ? new Calculator({
                _element: r,
                _delegate: this
            }) : !1;
            var h = this.find(this.element, ".simple-request-form");
            this.simpleRequestForm = h ? new ServiceRequestForm({
                _element: h,
                _delegate: this,
                _simple: 1
            }) : !1;
            var l = this.find(this.element, ".service-request-form");
            this.requestForm = l ? new ServiceRequestForm({
                _element: l,
                _delegate: this
            }) : !1;
            var c = this.find(this.element, ".block-switcher");
            this.blockSwitcher = c ? new BlockSwitcher({
                _element: c,
                _delegate: this
            }) : !1, this.flag = this.find(t.element, ".flag"), __app__.scrollTo(__indexPart.height - __app__.fMH, function() {
                t.flag && (t._resize(__app__.ww, __app__.wh), t.flagWidth = t.flag.outerWidth(!0), t.flag.css({
                    left: -t.flagWidth,
                    opacity: 1
                }).animate({
                    left: 0,
                    paddingLeft: t.paddingLeft - 2
                }, 600, "swing"))
            }), this.skipIndex && (__app__.scrollTo(__app__.wh - __app__.fMH), this.skipIndex = !1)
        },
        _resize: function(t, e) {
            if (this.centerContent && (this.height = this.centerContent.outerHeight(!0)), this.servicesMenu && this.servicesMenu.resize(t, this.height), this.paymentsMenu && this.paymentsMenu.resize(t, this.height), this.calculator && this.calculator.resize(), this.requestForm && this.requestForm.resize(), this.simpleRequestForm && this.simpleRequestForm.resize(), this.sliders.length)
                for (var i = 0; i < this.sliders.length; i++) this.sliders[i].resize(t, e)
        },
        updateScroll: function() {}
    }),
    PagePart_Team = PagePart.extend({
        __className: "PagePart_Team",
        _create: function() {
            var t = this.find(this.element, ".team-slider");
            this.slider = t ? new Slider({
                _element: t,
                _delegate: this
            }) : !1
        },
        _resize: function(t, e) {
            this.slider && this.slider.resize(t, e)
        }
    }),
    PagePart_TeamMembers = PagePart.extend({
        __className: "PagePart_TeamMembers",
        _create: function() {
            this.members = this.find(this.element, ".team-members"), this.members = this.members ? new TeamMembers({
                _element: this.members
            }) : !1
        },
        _resize: function(t, e) {
            this.members && this.members.resize(t, e)
        }
    }),
    TeamMembers = BaseClass.extend({
        init: function(t) {
            this.element = !1, this.opt = {}, this.setOptions(t), this.item = [], this.create()
        },
        create: function() {
            var t = this,
                e = this.find(this.element, ".item");
            if (e)
                for (var i = 0; i < e.length; i++) {
                    var s = $(e[i]),
                        n = s.find("video"),
                        o = {
                            id: i,
                            obj: s,
                            tid: s.attr("tid"),
                            img: {
                                width: 0,
                                height: 0,
                                src: s.attr("src"),
                                obj: !1,
                                loaded: !1,
                                error: !1,
                                resizeMode: !1
                            },
                            video: n,
                            html: {
                                loaded: !1,
                                content: !1,
                                error: !1
                            }
                        };
                    o.obj.bind("click mouseenter mouseleave", {
                        id: o.id
                    }, function(e) {
                        t.openItem(e)
                    }), n.bind("ended", function() {
                        this.load()
                    }), this.item.push(o)
                }
            this.viewer = new TeamMemberViewer({
                _delegate: this
            })
        },
        resize: function(t, e) {
            this.viewer && this.viewer.resize(t, e)
        },
        openItem: function(t) {
            var e = t.data.id,
                i = this.item[e];
            if (i) switch (t.type) {
                case "click":
                    break;
                case "mouseenter":
                    i.video[0].play();
                    break;
                case "mouseleave":
            }
        },
        prevItem: function(t) {
            var e = t.pos - 1;
            0 > e && (e = this.item.length - 1), this.viewer.open(this.item[e])
        },
        nextItem: function(t) {
            var e = t.pos + 1;
            e >= this.item.length && (e = 0), this.viewer.open(this.item[e])
        }
    }),
    TeamMemberViewer = BaseClass.extend({
        init: function(t) {
            this.delegate = !1, this.element = !1, this.opt = {}, this.setOptions(t), this.item = !1, this.prevItem = !1, this.switching = !1, this.opened = !1, this.tmr = !1, this.create()
        },
        create: function() {
            var t = this;
            this.element = $("<div></div>").addClass("team-member-viewer").css({
                display: "none"
            }).appendTo($(document.body)), this.loader = this.castLoader().appendTo(this.element).css({
                display: "none"
            }), this.imgCnt = $("<div></div>").addClass("img").appendTo(this.element), this.textCnt = $("<div></div>").addClass("textCnt").appendTo(this.element), this.cnt = $("<div></div>").addClass("cnt").appendTo(this.textCnt), this.toggle = $("<div></div>").addClass("toggle").css({
                opacity: 0
            }).appendTo(this.element).bind("click", function() {
                t.close()
            })
        },
        open: function(t) {
            if (!this.switching) {
                this.switching = !0, this.prevItem = this.item, this.item = t;
                var e = this;
                this.prevItem || (this.element.stop().css({
                    position: "fixed",
                    display: "block",
                    opacity: 1,
                    top: -__app__.wh,
                    width: __app__.ww,
                    height: __app__.wh,
                    overflow: "hidden"
                }).animate({
                    top: 0
                }, 500, "swing", function() {
                    e.opened = !0
                }), this.toggle.animate({
                    opacity: 1
                }, 500, "swing")), this.item.img.error || (this.item.img.obj || (this.item.img.obj = $("<img></img>")), this.item.img.obj.appendTo(this.imgCnt).css({
                    opacity: 0
                }), t.img.loaded || e.item.img.obj.bind("load error", function(t) {
                    switch (e.item.img.loaded = !0, t.type) {
                        case "load":
                            e.item.img.width = e.item.img.obj[0].width, e.item.img.height = e.item.img.obj[0].height;
                            break;
                        case "error":
                            e.item.img.error = !0
                    }
                }).attr("src", this.item.img.src)), this.item.html.loaded || $.ajax({
                    url: "/team.member",
                    dataType: "json",
                    type: "POST",
                    data: {
                        tid: this.item.tid
                    }
                }).done(function(t) {
                    e.item.html.content = t.html
                }).fail(function() {
                    e.item.html.error = !0
                }).always(function() {
                    e.item.html.loaded = !0
                }), this.tmr = setInterval(function() {
                    e.checkIfLoaded()
                }, 100), this.loader.stop().css({
                    opacity: 0,
                    display: "block"
                }).animate({
                    opacity: 1
                })
            }
        },
        checkIfLoaded: function() {
            this.opened && this.item.html.loaded && this.item.img.loaded && (this.item.img.error && this.item.img.obj.remove(), clearInterval(this.tmr), this.tmr = null, this.loader.stop().animate({
                opacity: 0
            }, function() {
                $(this).css({
                    display: "none"
                })
            }), this.show())
        },
        show: function() {
            this.hide();
            var t = !this.item.html.error,
                e = !this.item.img.error;
            if (!t && !e) return void alert("Ошибка загрузки данных. [ image = " + e + " | html = " + t);
            t && this.cnt.html(this.item.html.content), this.resize();
            var i, s, n = this,
                o = function() {
                    n.element.css({
                        position: "absolute",
                        overflow: "visible"
                    }), n.resize(), __app__.setFixedContent(!0), window.scrollTo(0, 0), n.switching = !1
                };
            t ? i = o : s = o, t && this.textCnt.stop().animate({
                opacity: 1
            }, function() {
                typeof i == _fn_ && i()
            }), e && this.item.img.obj.stop().animate({
                opacity: 1
            }, function() {
                typeof s == _fn_ && s()
            })
        },
        hide: function() {
            this.prevItem && (this.prevItem.img.obj.stop().animate({
                opacity: 0
            }, function() {
                $(this).remove()
            }), this.textCnt.stop().animate({
                opacity: 0
            }), this.prevItem = !1)
        },
        close: function() {
            var t = this;
            this.element.stop().animate({
                opacity: 0
            }, function() {
                t.element.css({
                    display: "none"
                }), t.toggle.css({
                    opacity: 0
                }), t.opened = !1, t.item && (t.item.img.error || t.item.img.obj.remove(), t.textCnt.css({
                    opacity: 0
                }), t.item = !1)
            }), __app__.setFixedContent(!1)
        },
        resize: function(t, e) {
            typeof t == _un_ && (t = __app__.ww), typeof e == _un_ && (e = __app__.wh);
            var i = this.element.css("display");
            this.element.css({
                display: "block"
            });
            var s = Math.floor(t / 2);
            this.textCnt.css({
                paddingLeft: s,
                width: s
            });
            var n = this.cnt.outerHeight(!0),
                o = e;
            this.loader && this.loader.css({
                top: Math.round((e - 60) / 2),
                left: Math.round((t - 60) / 2)
            }), e > n ? this.textCnt.css({
                paddingTop: Math.floor((e - n) / 2)
            }) : (this.textCnt.css({
                paddingTop: 120,
                paddingBottom: 120
            }), o = n + 240), this.element.css({
                width: t,
                height: o,
                display: i
            }), this.repos(t, e)
        },
        repos: function(t, e) {
            var t = Math.round(t / 2);
            this.item && !this.item.img.error && this.item.img.loaded && (this.item.img.ww = t, this.item.img.wh = e, this.imgCnt.css({
                width: t,
                height: e
            }), this.reposObject(this.item.img))
        }
    }),
    PagePart_VT = PagePart.extend({
        __className: "PagePart_VT",
        _create: function() {
            function t() {
                {
                    var t = window.innerHeight ? window.innerHeight : jQuery(window).height();
                    window.innerWidth ? window.innerWidth : jQuery(window).width()
                }
                t && 0 != t || (t = "100%"), jQuery("html").css("height", t), window.scrollTo(0, 0)
            }
            jQuery(document).ready(function() {
                /(iphone|ipod|ipad|android|iemobile|webos|fennec|blackberry|kindle|series60|playbook|opera\smini|opera\smobi|opera\stablet|symbianos|palmsource|palmos|blazer|windows\sce|windows\sphone|wp7|bolt|doris|dorothy|gobrowser|iris|maemo|minimo|netfront|semc-browser|skyfire|teashark|teleca|uzardweb|avantgo|docomo|kddi|ddipocket|polaris|eudoraweb|opwv|plink|plucker|pie|xiino|benq|playbook|bb|cricket|dell|bb10|nintendo|up.browser|playstation|tear|mib|obigo|midp|mobile|tablet)/.test(navigator.userAgent.toLowerCase()) && (window.addEventListener && (window.addEventListener("load", t), window.addEventListener("resize", t), window.addEventListener("orientationchange", t)), setTimeout(function() {
                    t()
                }, 10))
            })
        },
        _resize: function() {
            this.height = Math.max(500, window.innerHeight / 3 * 2), this.width = Math.min(window.innerWidth - 80, Math.round(2 * this.height)), this.element.css({
                height: this.height
            }), this.element.find("#container").css({
                width: this.width,
                height: this.height
            })
        }
    }),
    PagePart_Warehouses = PagePart.extend({
        __className: "PagePart_Warehouses",
        _create: function() {
            var t;
            t = this.find(this.element, ".Warehouses"), this.warehouses = t ? new Warehouses({
                _element: t,
                _delegate: this
            }) : !1
        },
        _resize: function(t, e) {
            this.warehouses && this.warehouses.resize(t, e)
        }
    }),
    Warehouses = BaseClass.extend({
        __className: "Warehouses",
        position: {
            lat: 48.4735742,
            lng: 73.4963398,
            zoom: 3,
            position: !1
        },
        pins: [{
            lat: 23.1255978,
            lng: 113.2278442,
            content: "Гуанчжоу &mdash; 2000 м<sup>2</sup>",
            position: !1,
            pin: !1
        }, {
            lat: 39.9388838,
            lng: 116.3974589,
            content: "Пекин &mdash; 2000 м<sup>2</sup>",
            position: !1,
            pin: !1
        }, {
            lat: 31.2243489,
            lng: 121.4767528,
            content: "Шанхай &mdash; 500 м<sup>2</sup>",
            position: !1,
            pin: !1
        }, {
            lat: 43.788655,
            lng: 131.9688425,
            content: "Уссурийск &mdash; 500 м<sup>2</sup>",
            position: !1,
            pin: !1
        }, {
            lat: 50.2961695,
            lng: 127.5334025,
            content: "Благовещенск &mdash; 300 м<sup>2</sup>",
            position: !1,
            pin: !1
        }, {
            lat: 55.749792,
            lng: 37.6324949,
            content: "Москва &mdash; 300 м<sup>2</sup>",
            position: !1,
            pin: !1
        }],
        activePin: !1,
        init: function(t) {
            this._id = 0, this._inited = !1, this.element = !1, this.delegate = !1, this.opt = {}, this.setOptions(t), this.put() && this.create()
        },
        create: function() {
            var t = this;
            this.map = !1, this.mapElement = this.element.find(".map"), window.tt.GMapRequest(function() {
                t.processMap()
            })
        },
        processMap: function() {
            this.position.position = new google.maps.LatLng(this.position.lat, this.position.lng), this.map = new google.maps.Map(this.mapElement[0], {
                zoom: this.position.zoom,
                center: this.position.position,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: !1,
                panControl: !1,
                zoomControl: !0,
                scaleControl: !1,
                mapTypeControl: !1,
                streetViewControl: !1,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL,
                    position: google.maps.ControlPosition.TOP_RIGHT
                }
            });
            var t = new google.maps.StyledMapType(MAP_STYLES, {
                name: "Transitplus"
            });
            this.map.mapTypes.set("transitplus_style", t), this.map.setMapTypeId("transitplus_style");
            for (var e = tt.is.mobile ? {
                    url: "/m/img/marker.png",
                    size: new google.maps.Size(40, 54),
                    scaledSize: new google.maps.Size(40, 54),
                    origin: new google.maps.Point(0, 0)
                } : "/img/marker.png", i = 0; i < this.pins.length; i++) this.setupPin(i, e);
            var s = this;
            google.maps.event.addListener(this.map, "tilesloaded", function() {
                tt.clrGM(s.mapElement[0]), google.maps.event.clearListeners(s.map, "tilesloaded")
            })
        },
        setupPin: function(t, e) {
            var i = this,
                s = this.pins[t];
            s.position = new google.maps.LatLng(s.lat, s.lng), s.marker = new google.maps.Marker({
                icon: e,
                draggable: !1,
                position: s.position,
                animation: tt.is.mobile ? !1 : google.maps.Animation.DROP
            }), s.map = this.map, s.marker.setMap(this.map), s.mode = "warehouse", s.infoBubble = new ttInfoBubble(s), tt.is.mobile || google.maps.event.addListener(s.marker, "click", function() {
                i.openInfoBubble(s)
            })
        },
        openInfoBubble: function(t) {
            if (this.activePin) {
                var e = this;
                return this.activePin.infoBubble.close(function() {
                    t.infoBubble.open(), e.activePin = t
                }), void(this.activePin = !1)
            }
            t.infoBubble.open(), this.activePin = t
        },
        resize: function() {
            this.height = Math.max(370, Math.min(__app__.wh - 2 * __app__.fMH - this.delegate.opt.partHeadHeight, 620)), this.mapElement.css({
                height: this.height
            })
        },
        remove: function() {
            this.rm()
        }
    }),
    PagePart_contacts = PagePart.extend({
        __className: "PagePart_contacts",
        _create: function() {
            this.mode = this.element.attr("data-mode") || !1, this.contacts = this.find(this.element, ".contacts"), this.contacts && (this.cnt = this.find(this.contacts, ".cnt"));
            var t = this.find(this.element, "#index-request-form");
            this.requestForm = t ? new RequestForm({
                _element: t,
                _indexMode: !0
            }) : !1
        },
        _resize: function() {
            __app__.mul;
            if (this.requestForm && this.requestForm.resize(), this.contacts) {
                {
                    var t;
                    this.partHead ? this.partHead.outerHeight(!0) : 0
                }
                this.cnt.css({
                    padding: 0
                });
                var e = this.cnt.outerHeight(!0);
                switch (this.mode) {
                    case "index":
                        t = __app__.wh - __app__.fMH - __FOOTER__.footerHeight, e > t && (t = e + 60);
                        break;
                    default:
                        var i = __app__.wh - __app__.fMH - __FOOTER__.footerHeight - 60;
                        t = Math.max(e, i)
                }
                var s = Math.floor((t - this.cnt.outerHeight(!0)) / 2);
                this.cnt.css({
                    paddingTop: s,
                    paddingBottom: s
                }), this.contacts.css({
                    height: t
                }), this.height = __app__.contactsHeight = t
            }
        }
    }),
    PagePart_footer = PagePart.extend({
        __className: "PagePart_footer",
        _create: function() {
            __FOOTER__ = this, this.miniFooter = !1;
            var t = this;
            this.nullHeight = !0, this.footer = this.find(this.element, ".footer"), this.footer && (this.cnt = this.find(this.footer, ".cnt")), this.isPlaying = !0, this.video = this.find(this.element, "video.footer-video"), this.video && (this.video.css({
                opacity: 0
            }), this.addSourceToVideo(this.video[0], "/video/footer/footer.mp4", "video/mp4"), this.addSourceToVideo(this.video[0], "/video/footer/footer.ogv", "video/ogv"), this.addSourceToVideo(this.video[0], "/video/footer/footer.webm", "video/webm"), this.video[0].addEventListener("progress", function(e) {
                var i = t.progressHandler(e, t.video[0], 15);
                t.videoPreloadPrc = i > 15 ? 1 : i / 15, t.videoPreloadPrc >= 1 && t.video.animate({
                    opacity: 1
                }, 500, "swing")
            }, !1)), this.showinghHeight = 0
        },
        _resize: function(t) {
            __app__.content.css({
                "padding-bottom": 0
            }), this.contentHeight = __app__.content.outerHeight(!0), this.fullHeight = this.contentHeight, this.cnt && (this.footerHeight = this.cnt.outerHeight(!0), this.fullHeight += this.footerHeight, __app__.content.css({
                "padding-bottom": this.footerHeight
            }), this.width = t, this.height = this.footerHeight, this.video && this.reposObject({
                ww: this.width,
                wh: this.height,
                width: 1280,
                height: 720,
                obj: this.video
            }))
        },
        updateScroll: function(t) {
            if (this.video) {
                var e = t < this.contentHeight - __app__.fMH - __app__.wh;
                e && this.isPlaying ? (this.video.each(function() {
                    this.pause()
                }), this.isPlaying = !1) : e || this.isPlaying || (this.video.each(function() {
                    this.play()
                }), this.isPlaying = !0)
            }
        },
        updateFooter: function() {
            return !1
        }
    }),
    PagePart_index = PagePart.extend({
        __className: "PagePart_index",
        calcPreload: function() {
            return this.videoPreloadPrc
        },
        _create: function() {
            var t = this;
            __indexPart = this, this.isPlaying = !0, this.start = this.find(this.element, "#start"), this.start && this.start.css({
                cursor: "pointer"
            }).bind("click", function() {
                __app__.scrollTo(__app__.wh - __app__.fMH)
            }), this.index = this.find(this.element, ".index"), this.cnt = this.find(this.element, ".cnt"), this.h1 = this.find(this.cnt, "h1");
            var e = this.find(this.element, ".mouse");
            if (this.mouse = e ? new IndexMouse({
                    _element: e,
                    _delegate: this
                }) : !1, this.bgVideo = this.find(this.element, "video"), this.videoPreloadPrc = 0, this.bgVideo) {
                var i = this.bgVideo[0].poster.replace(".jpg", "");
                this.bgVideo.css({
                    opacity: 0
                }), this.bgVideo[0].addEventListener("loadedmetadata", function() {
                    t.preloadBGVideo()
                }), this.addSourceToVideo(this.bgVideo[0], i + ".mp4", "video/mp4"), this.addSourceToVideo(this.bgVideo[0], i + ".ogv", "video/ogv"), this.addSourceToVideo(this.bgVideo[0], i + ".webm", "video/webm")
            }
        },
        preloadBGVideo: function() {
            if (this.bgVideoLoaded) return this.bgVideo.css({
                opacity: 1
            }), void this.bgVideo[0].play(0);
            if (this.bgVideo) {
                var t = this,
                    e = this.bgVideo,
                    i = function(s) {
                        var n = t.progressHandler(s, e[0], 5);
                        t.videoPreloadPrc = n > 5 ? 1 : n / 5, n > 5 && (e[0].removeEventListener("progress", i, !1), t.bgVideo.animate({
                            opacity: 1
                        }, 500, "swing"), t.BGVideoLoaded())
                    };
                e[0].addEventListener("progress", i, !1), e[0].play()
            }
        },
        BGVideoLoaded: function() {
            this.bgVideoLoaded = !0, this.bgVideo[0].currentTime = 0, this.bgVideo[0].play()
        },
        _resize: function(t, e) {
            this.cnt.css({
                paddingTop: 0
            });
            var i = this.cnt.outerHeight();
            this.width = t, this.height = e, this.height < i && (this.height = i + 40), this.mouse && this.mouse.resize(), this.element.css({
                width: this.width,
                height: this.height
            }), this.index && this.index.css({
                width: this.width,
                height: this.height
            });
            var s = this.height - i;
            this.cnt.css({
                paddingTop: Math.round(s / 2) - (s > 120 ? 30 : 0)
            }), this.bgVideo && this.reposObject({
                ww: this.width,
                wh: this.height,
                obj: this.bgVideo
            })
        },
    }),
    PagePart_map = PagePart.extend({
        __className: "PagePart_map",
        _create: function() {
            var t = this.find(this.element, ".maps");
            this.maps = t ? new Maps({
                _element: t,
                _delegate: this
            }) : !1
        },
        _resize: function(t, e) {
            if (this.maps) {
                this.partHead.css({
                    padding: 0
                });
                var i = this.partHead ? this.partHead.outerHeight(!0) : 0;
                this.maps.resize(t, e - i - __app__.fMH)
            }
        }
    }),
    PaymentsMenu = BaseClass.extend({
        __className: "PaymentsMenu",
        init: function(t) {
            this.inited = !1, __PaymentsMenu__ = this, this.delegate = !1, this.element = !1, this.opt = {}, this.setOptions(t), this.actSection = -1, this.actItem = !1, this.section = [], this.fixedFrom = !1, this.fixedUntil = !1, this.fixed = !1, this.afterFix = !1, this.switching = !1, this.create()
        },
        create: function() {
            var t = this;
            this.delegate.centerContent && $(window).bind("appScroll." + this.__className, function(e, i) {
                t.updateScroll(i)
            })
        },
        updatePosition: function() {
            __FOOTER__.miniFooter || (__FOOTER__.resize(), window.scrollTo(0, __app__.scrollTop))
        },
        updateScroll: function(t) {
            if (this.fixedFrom) {
                var e = t + __app__.fMH >= this.fixedFrom;
                this.fixedUntil = __FOOTER__.contentHeight - (t + __app__.fMH) - (this.element.outerHeight(!0) + 60), e && !this.fixed ? (this.element.css({
                    position: "fixed",
                    top: __app__.fMH
                }), this.fixed = !0) : !e && this.fixed ? (this.element.css({
                    position: "absolute",
                    top: __indexPart.height
                }), this.fixed = !1) : this.fixed && (this.fixedUntil < 0 ? (this.element.css({
                    top: __app__.fMH + this.fixedUntil
                }), this.afterFix = !0) : this.afterFix && (this.element.css({
                    top: __app__.fMH
                }), this.afterFix = !1))
            }
        },
        resize: function() {
            this.fixedFrom = __indexPart.height, this.element.css(this.fixed ? {
                position: "fixed",
                top: __app__.fMH
            } : {
                position: "absolute",
                top: __indexPart.height
            }), __PaymentsMenu__.updatePosition()
        }
    }),
    RequestForm = BaseClass.extend({
        __className: "RequestForm",
        init: function(t) {
            this._id = !1, this.inited = !1, this.mode = "request", this.indexMode = !1, this.element = !1, this.opt = {
                duration: 500,
                easing: "swing"
            }, this.setOptions(t), this.put() && (this.opened = !1, this.returnFixedContent = !1, this.create())
        },
        create: function() {
            var t = this;
            this.mode || (this.mode = "request"), this.opt.inline = !!parseInt(this.element.attr("data-inline")), this.FORM = this.find(this.element, ".FORM"), this.FORM_TID = this.FORM.attr("tid") || "", this.OK = this.find(this.element, ".OK"), this.submit = this.find(this.FORM, ".submit"), this.submit && this.submit.bind("click", function(e) {
                t.sendForm(e)
            }), this.OKClose = this.find(this.OK, ".submit"), this.OKClose && this.OKClose.css({
                cursor: "pointer"
            }).bind("click", function() {
                t.toggleRequestForm(!1)
            }), this.OKHideMessage = this.find(this.OK, ".hide-message"), this.OKHideMessage && this.OKHideMessage.css({
                cursor: "pointer"
            }).bind("click", function() {
                t.hideMessage(!1)
            }), this.toggle = this.find(this.element, ".toggle"), this.toggle && this.toggle.bind("click", function() {
                t.toggleRequestForm(!1)
            }), this.name = this.find(this.element, ".name"), this.phone = this.find(this.element, ".phone"), this.email = this.find(this.element, ".email"), this.comment = this.find(this.element, ".comment"), $(window).bind("appResize." + this.__className, function(e, i, s) {
                t.resize(i, s)
            }), this.element.bind("click", function(e) {
                e.target == this && t.toggleRequestForm(!1)
            }), $("." + this.mode + "-form-caller").bind("click", function() {
                t.toggleRequestForm(!0)
            }), this.phone && this.phone.bind("change keydown keyup", function(e) {
                var i = e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105 || 8 == e.keyCode || 107 == e.keyCode || 109 == e.keyCode || 9 == e.keyCode || 37 == e.keyCode || 39 == e.keyCode || 16 == e.keyCode || 32 == e.keyCode || !e.shiftKey && 189 == e.keyCode || e.shiftKey && 187 == e.keyCode;
                switch (e.type) {
                    case "keyup":
                        i || t.cancelEvent(e);
                    case "change":
                        /^[^0-9\s\-\+\(\)]*$/g.test(this.value) || (this.value = this.value.replace(/[^0-9\s\-\+\(\)]/g, ""));
                        break;
                    case "keydown":
                        i || t.cancelEvent(e)
                }
            }), this.email && this.email.bind("change keydown keyup", function(e) {
                switch (e.type) {
                    case "change":
                        window.tt.mailtest(this.value) || t.email.addClass("error").bind("focus.error", function() {
                            $(this).removeClass("error").unbind("focus.error")
                        })
                }
            }), this.inited = !0
        },
        toggleRequestForm: function(t) {
            if (this.opened != t) {
                var e = this;
                this.opened ? (this.returnFixedContent && __app__.setFixedContent(!1), this.element.stop().css({
                    position: "fixed"
                }).animate({
                    top: -__app__.wh
                }, this.opt.duration, this.opt.easing, function() {
                    $(this).css({
                        display: "none"
                    }), e.resetFORM(), e.hideOK(!1, !0), e.showFORM(!1, !0)
                })) : (this.showFORM(!1, !0), this.element.stop().css({
                    display: "block",
                    top: -__app__.wh
                }).animate({
                    top: 0
                }, this.opt.duration, this.opt.easing, function() {
                    $(this).css({
                        position: "absolute"
                    }), e.returnFixedContent = __app__.setFixedContent(!0)
                })), this.opened = !this.opened
            }
        },
        hideMessage: function() {
            this.hideOK(), this.showFORM(), this.resetFORM()
        },
        resize: function(t, e) {
            if (!this.indexMode) {
                this.opened || this.element.css({
                    display: "block"
                });
                var i = this.FORM.css("display");
                this.FORM.css({
                    display: "block"
                });
                var s = this.OK.css("display");
                this.OK.css({
                    display: "block"
                }), this.element.css({
                    width: t
                });
                var n = e,
                    o = this.FORM.outerHeight(!0);
                o > n && (n = o);
                var a = this.OK.outerHeight(!0);
                a > n && (n = a), this.element.css({
                    height: n
                }), this.FORM.css({
                    top: Math.round((n - o) / 2),
                    left: Math.round((t - this.FORM.outerWidth(!0)) / 2)
                }), this.OK.css({
                    top: Math.round((n - a) / 2),
                    left: Math.round((t - this.OK.outerWidth(!0)) / 2)
                }), this.FORM.css({
                    display: i
                }), this.OK.css({
                    display: s
                }), this.opened || this.element.css({
                    display: "none"
                })
            }
        },
        gatherData: function() {
            var t = {
                ajax: 1,
                name: this.name.val(),
                phone: this.phone.val(),
                email: this.email.val(),
                comment: this.comment.val(),
                form_tid: this.FORM_TID
            };
            return t
        },
        validateData: function(t) {
            return this.name && t.name.length < 2 ? (this.name.addClass("error").focus().bind("keydown.error", function() {
                $(this).removeClass("error").unbind("keydown.error")
            }), !1) : this.phone && t.phone.length < 2 ? (this.phone.addClass("error").focus().bind("keydown.error", function() {
                $(this).removeClass("error").unbind("keydown.error")
            }), !1) : this.email && !window.tt.mailtest(t.email) ? (this.email.addClass("error").focus().bind("keydown.error", function() {
                $(this).removeClass("error").unbind("keydown.error")
            }), !1) : !0
        },
        sendForm: function() {
            if (!this.busy) {
                var t = this,
                    e = this.gatherData();
                if (!this.validateData(e)) return !1;
                this.busy = !0, this.loader || (this.loader = this.castLoader().appendTo(this.element)), this.loader.stop().css({
                    display: "block",
                    opacity: 1,
                    top: Math.round((this.element.outerHeight() - 60) / 2),
                    left: Math.round((this.element.outerWidth() - 60) / 2)
                }, 200, "swing"), this.hideFORM(function() {
                    $.ajax({
                        url: "/services.request",
                        dataType: "json",
                        type: "POST",
                        data: e,
                        context: t
                    }).done(function(t) {
                        if (t.status > 0) return void alert(t.message);
                        if (typeof ga != _un_ && ga("send", "event", "questions", "send_form", "questions"), typeof yaCounter16947997 != _un_ && yaCounter16947997.reachGoal("questions"), "undefined" != typeof window.console && console.log("Event: questions"), typeof Comagic != _un_) {
                            var i = {
                                name: e.name,
                                email: e.email,
                                phone: e.phone,
                                message: e.comment + "\n\nevent: questions" + (utm_source ? "\nutm_source: " + utm_source : "")
                            };
                            Comagic.addOfflineRequest(i), "undefined" != typeof window.console && console.log("Comagic: ", i)
                        }
                        this.resetFORM(), this.showOK()
                    }).fail(function() {
                        alert("Ошибка отправки формы."), this.showFORM()
                    }).always(function() {
                        var t = this;
                        this.loader.stop().animate({
                            opacity: 0
                        }, 200, "swing", function() {
                            t.loader.remove(), t.loader = null
                        }), this.busy = !1
                    })
                })
            }
        },
        showOK: function(t, e) {
            if (this.indexMode) return void(this.element.hasClass("message-sent") || this.element.addClass("message-sent"));
            var i = e ? 0 : 200;
            this.OK.stop().css({
                display: "block",
                opacity: 0
            }).animate({
                opacity: 1
            }, i, "swing", function() {
                typeof t == _fn_ && t()
            })
        },
        hideOK: function(t, e) {
            if (this.indexMode) return void this.element.removeClass("message-sent");
            var i = e ? 0 : 200;
            this.OK.stop().animate({
                opacity: 0
            }, i, "swing", function() {
                $(this).css({
                    display: "none"
                }), typeof t == _fn_ && t()
            })
        },
        showFORM: function(t, e) {
            var i = e ? 0 : 200;
            this.FORM.stop().css({
                display: "block",
                opacity: 0
            }).animate({
                opacity: 1
            }, i, "swing", function() {
                typeof t == _fn_ && t()
            })
        },
        hideFORM: function(t, e) {
            var i = e ? 0 : 200;
            this.FORM.stop().animate({
                opacity: 0
            }, i, "swing", function() {
                $(this).css({
                    display: "none"
                }), typeof t == _fn_ && t()
            })
        },
        resetFORM: function() {
            this.name && this.name.val("").removeClass("error"), this.phone && this.phone.val("").removeClass("error"), this.email && this.email.val("").removeClass("error"), this.comment && this.comment.val("").removeClass("error")
        },
        remove: function() {
            $(window).unbind("appResize." + this.__className)
        }
    }),
    RequestFormLife = BaseClass.extend({
        __className: "RequestFormLife",
        init: function(t) {
            this._id = !1, this.inited = !1, this.element = !1, this.opt = {}, this.setOptions(t), this.put() && this.create()
        },
        create: function() {
            var t = this;
            this.element.bind("submit", function(e) {
                return t.sendForm(e)
            }), this.OK = $("#request-form-life-message-sent"), this.OKHideMessage = this.find(this.OK, ".hide-message"), this.OKHideMessage && this.OKHideMessage.css({
                cursor: "pointer"
            }).bind("click", function() {
                t.hideMessage(!1)
            }), this.email = this.find(this.element, ".email"), this.email && this.email.bind("change keydown keyup", function(e) {
                switch (e.type) {
                    case "change":
                        window.tt.mailtest(this.value) || t.email.addClass("error").bind("focus.error", function() {
                            $(this).removeClass("error").unbind("focus.error")
                        })
                }
            }), this.inited = !0
        },
        hideMessage: function() {
            this.hideOK()
        },
        gatherData: function() {
            var t = {
                ajax: 1,
                email: this.email.val()
            };
            return t
        },
        validateData: function(t) {
            return this.email && !window.tt.mailtest(t.email) ? (this.email.addClass("error").focus().bind("keydown.error", function() {
                $(this).removeClass("error").unbind("keydown.error")
            }), !1) : !0
        },
        sendForm: function() {
            if (!this.busy) {
                var t = this,
                    e = this.gatherData();
                if (!this.validateData(e)) return !1;
                this.busy = !0, this.loader || (this.loader = this.castLoader().appendTo(this.OK).addClass("sc")), this.OK.addClass("active"), $.ajax({
                    url: "/life-subscribe.request",
                    dataType: "json",
                    type: "POST",
                    data: e,
                    context: t
                }).done(function(t) {
                    if (t.status > 0) return void alert(t.message);
                    if (typeof ga != _un_ && ga("send", "event", "questions", "send_form", "questions"), typeof yaCounter16947997 != _un_ && yaCounter16947997.reachGoal("questions"), "undefined" != typeof window.console && console.log("Event: questions"), typeof Comagic != _un_) {
                        var i = {
                            name: e.name,
                            email: e.email,
                            phone: e.phone,
                            message: e.comment + "\n\nevent: questions" + (utm_source ? "\nutm_source: " + utm_source : "")
                        };
                        Comagic.addOfflineRequest(i), "undefined" != typeof window.console && console.log("Comagic: ", i)
                    }
                    this.resetFORM(), this.showOK()
                }).fail(function() {
                    this.hideOK(), alert("Ошибка отправки формы.")
                }).always(function() {
                    this.busy = !1
                })
            }
        },
        showOK: function() {
            this.loader && (this.loader.remove(), this.loader = null), this.OK.addClass("message-sent")
        },
        hideOK: function() {
            this.loader && (this.loader.remove(), this.loader = null), this.OK.removeClass("message-sent"), this.OK.removeClass("active")
        },
        resetFORM: function() {
            this.email && this.email.val("").removeClass("error")
        }
    }),
    ScrollAction = BaseClass.extend({
        __className: "ScrollAction",
        init: function(t) {
            return this._id = 0, this._inited = !1, this.element = !1, this.delegate = !1, this.opt = {}, this.initScrollAction(), this.setOptions(t), this.put() ? void this.create() : !1
        },
        create: function() {
            var t = this;
            this.createScrollAction(), $(window).bind("appResize." + this.__className + this._id, function(e, i, s) {
                t.recalc(i, s)
            }), $(window).bind("appScroll." + this.__className + this._id, function(e, i, s) {
                t.updateScroll(i, s)
            }), this._inited = !0
        },
        createScrollAction: function() {
            switch (this.element.hasClass("scroll-action") || this.element.addClass("scroll-action"), this.tid = this.element.attr("tid") || !1, this.scrollType = this.opt.scrollType || this.element.attr("sa-type") || !1, this.exePrc = this.opt.exePrc || parseInt(this.element.attr("sa-exe-prc") || 15), this.noretrig = this.opt.noretrig || parseInt(this.element.attr("sa-noretrig")), this.scrollType) {
                case "svg-icon":
                    this.opt.svgIcon = this.element.attr("svg-icon")
            }
            this.initScroll(!0)
        },
        initScrollAction: function() {
            this.opt.scrollType = !1, this.opt.minPrc = !1, this.opt.exePrc = !1, this.opt.maxPrc = !1, this.opt.off = !1, this.opt.xoff = !1, this.opt.yoff = !1, this.opt.locked = !1, this.opt.initFunc = !1, this.opt.execFunc = !1, this.top = 0, this.left = 0, this.width = 0, this.height = 0, this.activeScroll = !1
        },
        initScroll: function(t) {
            if (!this.noretrig || t) {
                switch (this.scrollType) {
                    case "func":
                        this.opt.initFunc();
                        break;
                    case "svg-icon":
                        if (typeof SvgIcons == _un_) return;
                        SvgIcons.emit("reset", this.opt.svgIcon);
                        break;
                    default:
                        this.element.removeClass("atscroll")
                }
                return this.activeScroll = !1, !1
            }
        },
        lockScroll: function(t) {
            this.opt.locked != t && (this.opt.locked = t, t ? this.initFunc() : this.update())
        },
        update: function() {
            this.updateScroll(__app__.scrollTop, __app__.scrollTopDir)
        },
        updateScrollPrc: function(t) {
            var e = this.ht - __app__.wh,
                i = Math.min(this.hb, __app__.pageHeight - __app__.wh),
                s = i - e,
                n = 0;
            return n = e > t ? 0 : t > i ? 100 : (t - e) / s * 100
        },
        updateScroll: function(t) {
            if (!this.locked && !__app__.fixedContent) {
                var e = this.updateScrollPrc(t);
                if (!this.activeScroll && e >= this.exePrc) {
                    switch (this.scrollType) {
                        case "func":
                            this.opt.execFunc();
                            break;
                        case "svg-icon":
                            if (typeof SvgIcons == _un_) return;
                            SvgIcons.emit("animate", this.opt.svgIcon);
                            break;
                        default:
                            this.element.hasClass("atscroll") || this.element.addClass("atscroll")
                    }
                    this.activeScroll = !0
                } else if (100 > t) return !1
            }
        },
        resize: function() {},
        recalc: function() {
            var t = this.element.offset();
            this.top = t.top, this.left = t.left, this.width = this.element.outerWidth(!0), this.height = this.element.outerHeight(!0), this.ht = this.top, this.hc = Math.round(this.top + this.height / 2), this.hb = this.top + this.height
        },
        remove: function() {
            $(window).unbind("appResize." + this.__className + this._id), $(window).unbind("appScroll." + this.__className + this._id), this.rm()
        }
    }),
    ServiceFAQ = BaseClass.extend({
        __className: "ServiceFAQ",
        init: function(t) {
            this.element = !1, this.opt = {}, this.setOptions(t), this.act = -1, this.item = [], this.create()
        },
        create: function() {
            var t = this,
                e = this.find(this.element, "ol");
            if (e) {
                this.ol = e;
                var i = this.find(this.ol, "li");
                if (i)
                    for (var s = 0; s < i.length; s++) {
                        var n = $(i[s]),
                            o = {
                                id: s,
                                obj: n,
                                toggle: n.find(".toggle"),
                                ans: n.find(".ans"),
                                act: !1
                            };
                        o.toggle.length ? o.toggle.css({
                            cursor: "pointer"
                        }).bind("click", {
                            id: s
                        }, function(e) {
                            t.mouseToggle(e)
                        }) : o.toggle = !1, this.item.push(o)
                    }
            }
        },
        mouseToggle: function(t) {
            var e = this.item[t.data.id];
            switch (t.type) {
                case "click":
                    if (this.act == e.id) e.obj.removeClass("act"), e.ans.slideUp(500, "swing", function() {
                        __ServicesMenu__.updatePosition()
                    }), this.act = -1;
                    else {
                        if (this.act >= 0) {
                            var i = this.item[this.act];
                            i.obj.removeClass("act"), i.ans.slideUp(500, "swing", function() {
                                __ServicesMenu__.updatePosition()
                            }), this.act = -1
                        }
                        e.obj.hasClass("act") || e.obj.addClass("act"), e.ans.slideDown(500, "swing", function() {
                            __ServicesMenu__.updatePosition()
                        }), this.act = e.id
                    }
            }
        },
        remove: function() {
            for (var t = 0; t < this.item.length; t++) {
                var e = this.item[t];
                e.toggle && e.toggle.unbind("click")
            }
        }
    }),
    PlaceMarkers = function(t) {
        this.markerData = t, this.markers = [], this.openedIW = !1
    };
PlaceMarkers.prototype.closeIW = function() {
    this.openedIW && (this.openedIW.close(), this.openedIW = !1)
}, PlaceMarkers.prototype.processMaker = function(t, e) {
    e.map = t, e.position = new google.maps.LatLng(e.lat, e.lng);
    var i = this,
        s = new google.maps.Marker(e),
        n = new google.maps.InfoWindow({
            content: e.infoWindow
        });
    google.maps.event.addListener(s, "click", function() {
        i.closeIW(), n.open(t, s), i.openedIW = n
    }), this.markers.push({
        marker: s,
        infowindow: n
    })
}, PlaceMarkers.prototype.addMarkers = function(t) {
    for (var e = "FE7569", i = (new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + e, new google.maps.Size(21, 34), new google.maps.Point(0, 0), new google.maps.Point(10, 34)), new google.maps.MarkerImage("http://www.google.com/mapfiles/shadow50.png", new google.maps.Size(40, 37), new google.maps.Point(0, 0), new google.maps.Point(9, 34)), 0); i < this.markerData.length; i++) this.processMaker(t, this.markerData[i])
};
var ServiceMaps = BaseClass.extend({
        __className: "ServiceMaps",
        init: function(t) {
            this._id = !1, this.inited = !1, this.element = !1, this.opt = {}, this.setOptions(t), this.put() && (this.pos = 0, this.item = [], this.count = 0, this.switching = !1, this.createPlaceMarkers(), this.create())
        },
        createPlaceMarkers: function() {
            this.markers.otgruzka = new PlaceMarkers([{
                lat: 39.958175,
                lng: 116.399717,
                title: "Пекин",
                infoWindow: '<p class="map-city"><b>Пекин</b></p>'
            }, {
                lat: 23.185813,
                lng: 113.260374,
                title: "Гуанчжоу",
                infoWindow: '<p class="map-city"><b>Гуанчжоу</b></p>'
            }, {
                lat: 22.579779,
                lng: 114.054351,
                title: "Шэньчжень",
                infoWindow: '<p class="map-city"><b>Шэньчжень</b></p>'
            }, {
                lat: 23.025396,
                lng: 113.121307,
                title: "Фошань",
                infoWindow: '<p class="map-city"><b>Фошань</b></p>'
            }, {
                lat: 23.053198,
                lng: 113.752227,
                title: "Дуньгуань",
                infoWindow: '<p class="map-city"><b>Дуньгуань</b></p>'
            }, {
                lat: 30.297018,
                lng: 120.051727,
                title: "Иу",
                infoWindow: '<p class="map-city"><b>Иу</b></p>'
            }, {
                lat: 46.164614,
                lng: 126.537094,
                title: "Харбин",
                infoWindow: '<p class="map-city"><b>Харбин</b></p>'
            }, {
                lat: 24.495897,
                lng: 118.087814,
                title: "Сямень",
                infoWindow: '<p class="map-city"><b>Сямень</b></p>'
            }, {
                lat: 29.896615,
                lng: 121.542907,
                title: "Нинбо",
                infoWindow: '<p class="map-city"><b>Нинбо</b></p>'
            }, {
                lat: 30.401307,
                lng: 120.151119,
                title: "Ханчжоу",
                infoWindow: '<p class="map-city"><b>Ханчжоу</b></p>'
            }, {
                lat: 38.9279,
                lng: 121.614425,
                title: "Далянь",
                infoWindow: '<p class="map-city"><b>Далянь</b></p>'
            }, {
                lat: 36.096828,
                lng: 120.379729,
                title: "Циндао",
                infoWindow: '<p class="map-city"><b>Циндао</b></p>'
            }]), this.markers.containers1 = new PlaceMarkers([{
                lat: 23.195912,
                lng: 113.252106,
                title: "Гуанчжоу",
                infoWindow: '<p class="map-notation"><b>Склад приема груза в Гуанчжоу</b></p>'
            }, {
                lat: 22.570902,
                lng: 114.055724,
                title: "Шеньчжень(Яньтхянь)",
                infoWindow: '<p class="map-notation"><b>Склад приема груза в г. Шеньчжень (Яньтхянь)</b></p>'
            }, {
                lat: 24.495272,
                lng: 118.0885,
                title: "Сямэнь",
                infoWindow: '<p class="map-notation"><b>Склад приема груза в г. Сямэнь</b></p>'
            }, {
                lat: 39.134321,
                lng: 117.198973,
                title: "Тяньцзинь",
                infoWindow: '<p class="map-notation"><b>Склад приема груза в г. Тяньцзинь</b></p>'
            }, {
                lat: 31.28794,
                lng: 121.472626,
                title: "Шанхай",
                infoWindow: '<p class="map-notation"><b>Склад приема груза в Шанхае</b></p>'
            }, {
                lat: 29.895425,
                lng: 121.541533,
                title: "Нинбо",
                infoWindow: '<p class="map-notation"><b>Склад приема груза в г. Нинбо</b></p>'
            }, {
                lat: 36.094609,
                lng: 120.382476,
                title: "Циндао",
                infoWindow: '<p class="map-notation"><b>Склад приема груза в г. Циндао</b></p>'
            }, {
                lat: 38.927366,
                lng: 121.611679,
                title: "Далянь",
                infoWindow: '<p class="map-notation"><b>Склад приема груза в г. Далянь</b></p>'
            }, {
                lat: 23.358,
                lng: 116.677,
                title: "Шаньтоу",
                infoWindow: '<p class="map-notation"><b>Склад приема груза в г. Шаньтоу</b></p>'
            }]), this.markers.containers2 = new PlaceMarkers([{
                lat: 43.205176,
                lng: 131.928892,
                title: "Владивосток",
                infoWindow: '<p class="map-notation"><b>Владивосток</b></p>'
            }, {
                lat: 59.946071,
                lng: 30.331664,
                title: "Санкт-Петербург",
                infoWindow: '<p class="map-notation"><b>Санкт-Петербург</b></p>'
            }, {
                lat: 42.7538,
                lng: 133.0219,
                title: "Восточный",
                infoWindow: '<p class="map-notation"><b>Восточный</b></p>'
            }, {
                lat: 59.6651,
                lng: 28.2966,
                title: "Усть-Луга",
                infoWindow: '<p class="map-notation"><b>Усть-Луга</b></p>'
            }, {
                lat: 59.444377,
                lng: 24.753463,
                title: "Таллин",
                infoWindow: '<p class="map-notation"><b>Таллин</b></p>'
            }, {
                lat: 56.956,
                lng: 24.09,
                title: "Рига",
                infoWindow: '<p class="map-notation"><b>Таллин</b></p>'
            }]), this.markers.containers3 = new PlaceMarkers([{
                lat: 49.629,
                lng: 117.335,
                title: "Манчжурия-Забайкальск",
                infoWindow: '<p class="map-notation"><b>Манчжурия-Забайкальск</b></p>'
            }, {
                lat: 45.204,
                lng: 82.56,
                title: "Аланьшакоу -Достык (Казахстан)",
                infoWindow: '<p class="map-notation"><b>Аланьшакоу-Достык (Казахстан)</b></p>'
            }]), this.markers.sbornie1 = new PlaceMarkers([{
                lat: 44.425444,
                lng: 131.151245,
                title: "Суйфэньхэ — Уссурийск",
                infoWindow: '<p class="map-notation"><b>Пункт таможенного оформления Суйфэньхэ — Уссурийск</b></p>'
            }]), this.markers.sbornie2 = new PlaceMarkers([{
                lat: 50.255108,
                lng: 127.482605,
                title: "Хэйхэ — Благовещенск",
                infoWindow: '<p class="map-notation"><b>Пункт таможенного оформления Хэйхэ — Благовещенск</b></p>'
            }]), this.markers.sbornie3 = new PlaceMarkers([{
                lat: 43.285203,
                lng: 76.910949,
                title: "Урумчи — Алматы (Казахстан)",
                infoWindow: '<p class="map-notation"><b>Пункт таможенного оформления Урумчи — Алматы (Казахстан)</b></p>'
            }])
        },
        create: function() {
            var t, e = this;
            if (t = this.find(this.element, ".item"))
                for (var i = 0; i < t.length; i++) {
                    var s = $(t[i]),
                        n = {
                            id: i,
                            obj: s,
                            tid: s.attr("tid"),
                            lat: s.attr("lat"),
                            lng: s.attr("lng"),
                            zoom: parseInt(s.attr("zoom")) || 16
                        };
                    this.item.push(n)
                }
            this.count = this.item.length;
            var o = function(t, i) {
                i.obj.css({
                    zIndex: t ? "auto" : 10
                }), i.mapPosition = new google.maps.LatLng(i.lat, i.lng), i.map = new google.maps.Map(i.obj[0], {
                    zoom: i.zoom,
                    center: i.mapPosition,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    scrollwheel: !1,
                    panControl: !1,
                    zoomControl: !0,
                    scaleControl: !1,
                    mapTypeControl: !1,
                    streetViewControl: !1,
                    zoomControlOptions: {
                        style: google.maps.ZoomControlStyle.SMALL,
                        position: google.maps.ControlPosition.TOP_RIGHT
                    }
                }), i.obj.css({
                    opacity: t ? 0 : 1
                }), google.maps.event.addListener(i.map, "tilesloaded", function() {
                    tt.clrGM(i.obj), typeof e.markers[i.tid] != _un_ && e.markers[i.tid].addMarkers(i.map), google.maps.event.clearListeners(i.map, "tilesloaded")
                })
            };
            window.tt.GMapRequest(function() {
                for (var t = 0; t < e.count; t++) o(t, e.item[t])
            });
            var a = 0;
            if (this.dots = this.find(this.element, "ul"), this.dots && (t = this.dots.find("li"), t.length))
                for (var i = 0; i < t.length; i++) {
                    var s = $(t[i]);
                    s.hasClass("bull") || (s.bind("click", {
                        pos: a
                    }, function(t) {
                        e.switchMap(t.data.pos)
                    }), this.item[a].dot = s, a++)
                }
            this.inited = !0
        },
        switchMap: function(t) {
            if (t != this.pos && !this.switching) {
                this.switching = !0;
                var e = this,
                    i = this.item[this.pos],
                    s = this.item[t];
                this.pos = t, s.dot.hasClass("act") || s.dot.addClass("act"), i.dot.removeClass("act"), i.obj.stop().css({
                    zIndex: "auto"
                }).animate({
                    opacity: 0
                }, 500, "swing", function() {}), s.obj.stop().css({
                    zIndex: 10,
                    opacity: 0
                }).animate({
                    opacity: 1
                }, 500, "swing", function() {
                    e.switching = !1
                })
            }
        },
        resize: function() {},
        remove: function() {
            this.rm()
        },
        markers: {}
    }),
    ServiceRequestForm = BaseClass.extend({
        __className: "ServiceRequestForm",
        init: function(t) {
            this._id = !1, this.inited = !1, this.simple = 0, this.element = !1, this.opt = {
                fullScreen: !1,
                duration: 500,
                easing: "swing",
                assignToggleTo: ".request-form-caller"
            }, this.setOptions(t), this.put() && (this.busy = !1, this.opened = !1, this.returnFixedContent = !1, this.create())
        },
        create: function() {
            var t = this;
            if (this.FORM = this.find(this.element, ".FORM"), this.OK = this.find(this.element, ".OK"), this.FORMBtn = this.find(this.FORM, ".submit"), this.OKBtn = this.find(this.OK, ".submit"), this.FORMBtn && (this.FORMBtn.css({
                    cursor: "pointer"
                }).bind("click", function(e) {
                    t.submitForm(e)
                }), this.OKBtn)) {
                this.OKBtn.css({
                    cursor: "pointer"
                }).bind("click", function() {
                    t.hideOK(), t.resetFORM(), t.showFORM(), t.opt.fullScreen && t.toggleRequestForm(!1)
                }), this.toggle = this.find(this.element, ".toggle"), this.toggle && this.toggle.bind("click", function() {
                    t.toggleRequestForm(!1)
                }), this.formID = this.FORM.attr("tid"), this.formMode = this.FORM.attr("mode"), this.requestURL = this.formID ? this.requestURL = window.location.pathname.toString().replace(/\/$/g, "") + ".request" : "/services.request";
                var e = this.find(this.element, ".orgtype");
                this.orgtype = e ? new ComboBox({
                    _element: e,
                    _delegate: this
                }) : !1, this.cargo = this.find(this.element, ".cargo"), this.name = this.find(this.element, ".name"), this.phone = this.find(this.element, ".phone"), this.email = this.find(this.element, ".email"), this.comment = this.find(this.element, ".comment"), this.phone && this.phone.bind("change keydown keyup", function(e) {
                    var i = e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105 || 8 == e.keyCode || 107 == e.keyCode || 109 == e.keyCode || 9 == e.keyCode || 37 == e.keyCode || 39 == e.keyCode || 16 == e.keyCode || 32 == e.keyCode || e.shiftKey && 187 == e.keyCode || !e.shiftKey && 189 == e.keyCode;
                    switch (e.type) {
                        case "keyup":
                            i || t.cancelEvent(e);
                        case "change":
                            /^[^0-9\s\-\+\(\)]*$/g.test(this.value) && (this.value = this.value.replace(/[^0-9\s\-\+\(\)]/g, ""));
                            break;
                        case "keydown":
                            i || t.cancelEvent(e)
                    }
                }), this.email && this.email.bind("change keydown keyup", function(e) {
                    switch (e.type) {
                        case "change":
                            window.tt.mailtest(this.value) || t.email.addClass("error").bind("focus.error", function() {
                                $(this).removeClass("error").unbind("focus.error")
                            })
                    }
                }), $(window).bind("appResize." + this.__className, function(e, i, s) {
                    t.resize(i, s)
                }), this.opt.fullScreen && $(this.opt.assignToggleTo).css({
                    cursor: "pointer"
                }).bind("click", function() {
                    t.toggleRequestForm(!0)
                }), this._create()
            }
        },
        _create: function() {
            this.inited = !0
        },
        toggleRequestForm: function(t) {
            if (this.opened != t) {
                var e = this,
                    i = __app__.mobile ? 0 : this.opt.duration,
                    s = __app__.mobile ? "linear" : this.opt.easing;
                if (this.opened) {
                    this.returnFixedContent && __app__.setFixedContent(!1);
                    var n = function() {
                        e.element.css({
                            display: "none"
                        }), e.resetFORM(), e.hideOK(!1, !0), e.showFORM(!1, !0)
                    };
                    this.element.stop().css({
                        position: "fixed"
                    }), this.opened = !1, i > 0 ? this.element.animate({
                        top: -__app__.wh
                    }, i, s, n) : (this.element.css({
                        top: -__app__.wh
                    }), n())
                } else {
                    this.showFORM(!1, !0);
                    var n = function() {
                        e.element.css({
                            position: "absolute"
                        }), e.returnFixedContent = __app__.setFixedContent(!0)
                    };
                    this.element.stop().css({
                        display: "block",
                        top: -__app__.wh
                    }), this.opened = !0, i > 0 ? this.element.animate({
                        top: 0
                    }, i, s, n) : (this.element.css({
                        top: 0
                    }), n())
                }
            }
        },
        gatherData: function() {
            var t = {
                ajax: 1,
                tid: this.formID,
                orgtype: this.orgtype ? this.orgtype.cVal : 0,
                simple: this.simple
            };
            return this.cargo && this.cargo.val() && (t.cargo = this.cargo.val()), this.name && this.name.val() && (t.name = this.name.val()), this.phone && this.phone.val() && (t.phone = this.phone.val()), this.email && this.email.val() && (t.email = this.email.val()), this.comment && this.comment.val() && (t.comment = this.comment.val()), t = this._gatherData(t)
        },
        _gatherData: function(t) {
            return t
        },
        validateData: function(t) {
            return this.name && t.name.length < 2 ? (this.name.addClass("error").focus().bind("keydown.error", function() {
                $(this).removeClass("error").unbind("keydown.error")
            }), !1) : this.phone && t.phone.length < 2 ? (this.phone.addClass("error").focus().bind("keydown.error", function() {
                $(this).removeClass("error").unbind("keydown.error")
            }), !1) : this.simple || !this.email || window.tt.mailtest(t.email) ? !0 : (this.email.addClass("error").focus().bind("keydown.error", function() {
                $(this).removeClass("error").unbind("keydown.error")
            }), !1)
        },
        submitForm: function() {
            if (!this.busy) {
                var t = this,
                    e = this.gatherData();
                if (!this.validateData(e)) return !1;
                this.busy = !0, this.loader || (this.loader = this.castLoader().appendTo(this.element)), this.loader.stop().css({
                    display: "block",
                    opacity: 1,
                    top: Math.round((this.element.outerHeight() - 60) / 2),
                    left: Math.round((this.element.outerWidth() - 60) / 2)
                }, 200, "swing"), this.hideFORM(function() {
                    $.ajax({
                        url: t.requestURL,
                        dataType: "json",
                        type: "POST",
                        data: e,
                        context: t
                    }).done(function(i) {
                        if (i.status > 0) return void alert(i.message);
                        if (typeof ga != _un_ && ga("send", "event", t.formMode, "send_form", t.formMode), typeof yaCounter16947997 != _un_ && yaCounter16947997.reachGoal(t.formMode), "undefined" != typeof window.console && console.log("Event: " + t.formMode), typeof Comagic != _un_) {
                            var s = {
                                message: (e.comment ? e.comment + "\n\n" : "") + (e.cargo ? e.cargo + "\n\n" : "") + ("event: " + t.formMode) + (utm_source ? "\nutm_source: " + utm_source : "")
                            };
                            e.name && (s.name = e.name), e.phone && (s.phone = e.phone), e.email && (s.email = e.email), Comagic.addOfflineRequest(s), "undefined" != typeof window.console && console.log("Comagic: ", s)
                        }
                        t.resetFORM(), t.showOK()
                    }).fail(function() {
                        alert("Ошибка отправки формы."), t.showFORM()
                    }).always(function() {
                        t.loader.stop().animate({
                            opacity: 0
                        }, 200, "swing"), t.busy = !1
                    })
                })
            }
        },
        showOK: function(t, e) {
            var i = e ? 0 : 200;
            this.OK.stop().css({
                display: "block",
                opacity: 0
            });
            var s = this.element.width(),
                n = this.element.height(),
                o = this.OK.width(),
                a = this.OK.height();
            this.OK.css({
                left: this.simple ? 0 : Math.round((s - o) / 2),
                top: Math.round((n - a) / 2)
            }), this.OK.animate({
                opacity: 1
            }, i, "swing", function() {
                typeof t == _fn_ && t()
            })
        },
        hideOK: function(t, e) {
            var i = e ? 0 : 200;
            this.OK.stop().animate({
                opacity: 0
            }, i, "swing", function() {
                $(this).css({
                    display: "none"
                }), typeof t == _fn_ && t()
            })
        },
        showFORM: function(t, e) {
            var i = e ? 0 : 200;
            this.FORM.stop().css({
                display: "block",
                opacity: 0
            }).animate({
                opacity: 1
            }, i, "swing", function() {
                typeof t == _fn_ && t()
            })
        },
        hideFORM: function(t, e) {
            var i = e ? 0 : 200;
            this.FORM.stop().animate({
                opacity: 0
            }, i, "swing", function() {
                typeof t == _fn_ && t()
            })
        },
        resetFORM: function() {
            this.cargo && this.cargo.val(""), this.name && this.name.val(""), this.phone && this.phone.val(""), this.email && this.email.val(""), this.comment && this.comment.val("")
        },
        resize: function(t, e) {
            if (t = t || __app__.ww, e = e || __app__.wh, this.orgtype) {
                var i = this.name.outerWidth(!0),
                    s = 420 > i ? 36 : 46;
                this.orgtype.setSize(i + 1, s)
            }
            if (this.opt.fullScreen) {
                this.opened || this.element.css({
                    display: "block",
                    opacity: 0
                });
                var n = this.FORM.css("display");
                this.FORM.css({
                    display: "block"
                });
                var o = this.OK.css("display");
                this.OK.css({
                    display: "block"
                }), this.element.css({
                    width: t
                });
                var a = e,
                    r = this.FORM.outerHeight(!0);
                r > a && (a = r + 40);
                var h = this.OK.outerHeight(!0);
                h > a && (a = h + 40), this.element.css({
                    height: a
                }), this.FORM.css({
                    top: Math.round((a - r) / 2),
                    left: Math.round((t - this.FORM.outerWidth(!0)) / 2)
                }), this.OK.css({
                    top: Math.round((a - h) / 2),
                    left: this.simple ? 0 : Math.round((t - this.OK.outerWidth(!0)) / 2)
                }), this.FORM.css({
                    display: n
                }), this.OK.css({
                    display: o
                }), this.opened || this.element.css({
                    display: "none",
                    opacity: 1
                })
            }
        },
        remove: function() {
            this.opt.fullScreen && $(window).unbind("appResize." + this.__className), this.rm()
        }
    }),
    Services = BaseClass.extend({
        __className: "Services",
        init: function(t) {
            this._id = !1, this.inited = !1, this.element = !1, this.opt = {}, this.setOptions(t), this.put() && (this.item = [], this.iconOptions = [{
                cssAnimation: !0
            }, {
                cssAnimation: !0
            }, {
                frameWidth: 0,
                frameHeight: 0,
                frames: 10,
                speed: 50,
                goBack: !0
            }, {
                frameWidth: 0,
                frameHeight: 0,
                frames: 19,
                speed: 50,
                goBack: !0
            }, {
                frameWidth: 0,
                frameHeight: 0,
                frames: 7,
                speed: 50,
                goBack: !0
            }], this.create())
        },
        create: function() {
            var t = this,
                e = this.find(this.element, ".item");
            if (e)
                for (var i = 0; i < e.length; i++) {
                    var s = $(e[i]),
                        n = {
                            id: i,
                            obj: s,
                            cnt: s.find(".cnt"),
                            ico: s.find(".ico"),
                            animation: !1
                        };
                    this.iconOptions[i]._element = n.ico, n.animation = new SpriteAnimation(this.iconOptions[i]), n.obj.css({
                        cursor: "pointer"
                    }).bind("click mouseenter mouseleave", {
                        id: i
                    }, function(e) {
                        t.mouseItem(e)
                    }), this.item.push(n)
                }
            this.inited = !0
        },
        mouseItem: function(t) {
            var e = this.item[t.data.id];
            switch (t.type) {
                case "click":
                    break;
                case "mouseenter":
                    e.animation.startAnimate();
                    break;
                case "mouseleave":
                    e.animation.stopAnimate()
            }
        },
        resize: function(t, e) {
            var i = Math.ceil(t / 2);
            this.element.css({
                width: 2 * i
            });
            for (var s = 0; s < this.item.length; s++) {
                var n = this.item[s];
                n.obj.css({
                    width: i
                });
                var o = n.obj.outerHeight(!0),
                    a = n.ico.outerHeight(!0);
                n.cnt.css({
                    top: Math.round(o / 2 - a)
                }), n.animation && n.animation.resize()
            }
        },
        remove: function() {
            this.rm()
        }
    }),
    ServicesMenu = BaseClass.extend({
        __className: "ServicesMenu",
        init: function(t) {
            this.inited = !1, __ServicesMenu__ = this, this.delegate = !1, this.element = !1, this.opt = {}, this.setOptions(t), this.actSection = -1, this.actItem = !1, this.section = [], this.fixedFrom = !1, this.fixedUntil = !1, this.fixed = !1, this.afterFix = !1, this.switching = !1, this.height = 0, this.heightDiff = 0, this.currentHeightDiff = 0, this.prevScrollTop = 0, this.diffStartedAt = 0, this.scrollDir = !0, this.create()
        },
        create: function() {
            var t = this;
            if (this.delegate.centerContent) {
                var e = this.find(this.element, "li.section");
                if (e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = {
                            id: i,
                            obj: $(e[i]),
                            div: !1,
                            ul: !1,
                            item: [],
                            act: !1
                        };
                        if (s.act = s.obj.hasClass("act"), s.act && (this.actSection = s.id), s.ul = this.find(s.obj, "ul.section"), s.ul) {
                            s.div = this.find(s.obj, "div"), s.div && s.div.bind("click", {
                                section: i
                            }, function(e) {
                                t.mouseSection(e)
                            });
                            var n = this.find(s.ul, "li");
                            if (n)
                                for (var o = 0; o < n.length; o++) {
                                    var a = $(n[o]),
                                        r = {
                                            id: o,
                                            section: i,
                                            obj: a,
                                            tid: a.attr("tid"),
                                            a: !1,
                                            tid: !1,
                                            act: !1,
                                            href: !1,
                                            activate: function(t) {
                                                this.act != t && (this.act = t)
                                            }
                                        };
                                    r.tid = r.obj.attr("tid"), r.a = this.find(r.obj, "a"), r.a || (r.href = r.obj.attr("href"), r.text = r.obj.html(), this.actItem = r, r.act = !0), s.item.push(r)
                                }
                        }
                        this.section.push(s)
                    }
                    $(window).bind("appScroll." + this.__className, function(e, i) {
                        t.updateScroll(i)
                    })
                }
            }
        },
        updatePosition: function() {
            __FOOTER__.miniFooter || (__FOOTER__.resize(), window.scrollTo(0, __app__.scrollTop))
        },
        updateScroll: function(t) {
            if (this.fixedFrom) {
                var e = t + __app__.fMH >= this.fixedFrom;
                if (this.fixedUntil = __FOOTER__.contentHeight - (t + __app__.fMH) - (this.element.outerHeight(!0) + 60), e && !this.fixed) this.element.css({
                    position: "fixed",
                    top: __app__.fMH
                }), this.fixed = !0;
                else if (!e && this.fixed) this.element.css({
                    position: "absolute",
                    top: __indexPart.height
                }), this.fixed = !1;
                else if (this.fixed) {
                    var i = t > this.prevScrollTop;
                    i != this.scrollDir && (this.prevHeightDiff = this.currentHeightDiff, this.diffStartedAt = this.prevScrollTop, this.scrollDir = i), this.heightDiff > 0 && (this.scrollDir ? (this.currentHeightDiff = Math.min(this.heightDiff, t - this.diffStartedAt), this.element.css({
                        position: "fixed",
                        top: __app__.fMH - this.currentHeightDiff
                    })) : (this.currentHeightDiff = Math.min(0, this.diffStartedAt - t - this.prevHeightDiff), this.element.css({
                        position: "fixed",
                        top: __app__.fMH + this.currentHeightDiff
                    }))), this.prevScrollTop = t
                }
            }
        },
        resize: function() {
            this.fixedFrom = __indexPart.height, this.height = this.element.outerHeight(!0), this.heightDiff = this.height + __app__.fMH - $(window).height(), this.element.css(this.fixed ? {
                position: "fixed",
                top: __app__.fMH
            } : {
                position: "absolute",
                top: __indexPart.height
            }), __ServicesMenu__.updatePosition()
        },
        mouseSection: function(t) {
            var e = this.section[t.data.section];
            if (e.id == this.actSection) e.ul.slideUp(500, "swing", function() {
                __ServicesMenu__.resize()
            }), e.obj.removeClass("act"), this.actSection = -1;
            else {
                if (this.actSection >= 0) {
                    var i = this.section[this.actSection];
                    i.obj.removeClass("act"), this.actSection = -1, i.ul.slideUp(500, "swing", function() {
                        __ServicesMenu__.resize()
                    })
                }
                e.ul.slideDown(500, "swing", function() {
                    __ServicesMenu__.resize()
                }), e.obj.hasClass("act") || e.obj.addClass("act"), this.actSection = e.id
            }
        },
        activateItem: function(t) {
            this.actItem && this.actItem.activate(!1), this.actItem = t, t.activate(!0)
        },
        mouseItem: function(t) {
            var e = this.section[t.data.section],
                i = e.item[t.data.item],
                s = this;
            switch (t.type) {
                case "click":
                    if (i.tid) {
                        if (this.switching) return;
                        this.switching = !0, this.loader || (this.loader = this.castLoader().css({
                            position: "absolute",
                            opacity: 0
                        }).appendTo(this.delegate.centerContent.parent())); {
                            this.element.outerWidth(!0)
                        }
                        __app__.scrollTo(__indexPart.height - __app__.fMH, function() {
                            s.loader.css({
                                top: __app__.scrollTop + __app__.fMH + Math.round((__app__.wh - __app__.fMH - 60) / 2) - __indexPart.height,
                                left: Math.round((s.delegate.centerContent.width() - 60) / 2),
                                display: "block",
                                opacity: 0
                            }).animate({
                                opacity: 1
                            }, 500, "swing")
                        }, 500), this.delegate.centerContent.stop().animate({
                            opacity: 0
                        }, 1e3, "swing", function() {
                            $.ajax({
                                url: i.href,
                                type: "POST",
                                dataType: "json",
                                data: {
                                    ajax: 1,
                                    tid: i.tid
                                },
                                context: s
                            }).done(function(t) {
                                ga && ga("send", "pageview", {
                                    page: i.href,
                                    title: i.ttl
                                }), yaCounter16947997 && yaCounter16947997.hit(i.href, i.ttl, "http://www.transitplus.ru/");
                                var e = this;
                                this.activateItem(i), this.delegate.killContent(), e.loader.stop().animate({
                                    opacity: 0
                                }, 500, "swing", function() {
                                    $(this).css({
                                        display: "none"
                                    }), e.delegate.centerContent.html(t.html), e.delegate.initContent(), e.delegate.centerContent.stop().animate({
                                        opacity: 1
                                    }, 500, "swing"), window.history && window.history.pushState && window.history.pushState({
                                        html: e.delegate.centerContent.html(),
                                        pageTitle: i.ttl
                                    }, "", i.href)
                                })
                            }).fail(function() {
                                alert("Ошибка загрузки страницы.")
                            }).always(function() {
                                this.switching = !1
                            })
                        })
                    }
            }
        }
    }),
    ServicesOnLife = BaseClass.extend({
        __className: "Services",
        init: function(t) {
            this._id = !1, this.inited = !1, this.element = !1, this.opt = {}, this.setOptions(t), this.put() && (this.item = [], this.iconOptions = [{
                cssAnimation: !0,
                xoff: 9
            }, {
                cssAnimation: !0,
                xoff: 25
            }, {
                frameWidth: 0,
                frameHeight: 0,
                xoff: 24,
                frames: 10,
                speed: 50,
                goBack: !0
            }, {
                frameWidth: 86,
                frameHeight: 62,
                xoff: -20,
                yoff: -7,
                frames: 19,
                speed: 50,
                goBack: !0
            }, {
                frameWidth: 86,
                frameHeight: 62,
                xoff: -25,
                frames: 7,
                speed: 50,
                goBack: !0
            }], this.create())
        },
        create: function() {
            var t = this,
                e = this.find(this.element, ".item");
            if (e)
                for (var i = 0; i < e.length; i++) {
                    var s = $(e[i]),
                        n = {
                            id: i,
                            obj: s,
                            cnt: s.find(".cnt"),
                            ico: s.find(".ico"),
                            animation: !1
                        };
                    this.iconOptions[i]._element = n.ico, n.animation = new SpriteAnimation(this.iconOptions[i]), n.obj.css({
                        cursor: "pointer"
                    }).bind("click mouseenter mouseleave", {
                        id: i
                    }, function(e) {
                        t.mouseItem(e)
                    }), this.item.push(n)
                }
            this.inited = !0
        },
        mouseItem: function(t) {
            var e = this.item[t.data.id];
            switch (t.type) {
                case "click":
                    break;
                case "mouseenter":
                    e.animation.startAnimate();
                    break;
                case "mouseleave":
                    e.animation.stopAnimate()
            }
        },
        resize: function() {
            for (var t = 0, e = 0; e < this.item.length; e++) {
                var i = this.item[e];
                i.itemWidth = i.obj.outerWidth(!0), t += i.itemWidth
            }
            var s = Math.round((__app__.ww - t) / (this.item.length + 1));
            t = 0;
            for (var e = 0; e < this.item.length; e++) {
                var i = this.item[e];
                i.obj.css({
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: t + s
                }), t += s + i.itemWidth, i.animation && i.animation.resize()
            }
        },
        remove: function() {
            this.rm()
        }
    }),
    SizingRule = BaseClass.extend({
        init: function(t) {
            this.rule = !1, this.element = !1, this.opt = {}, this.setOptions(t)
        },
        resize: function(t) {
            if (this.element) {
                typeof t == _un_ && (t = __app__.mul);
                for (var e = {}, i = 0; i < this.rule.length; i++) {
                    var s = this.rule[i],
                        n = Math.round(s.min + (s.max - s.min) * t);
                    "line-height" == s.css && (n += "px"), e[s.css] = n
                }
                this.element.css(e)
            }
        }
    }),
    SpriteAnimation = BaseClass.extend({
        __className: "SpriteAnimation",
        init: function(t) {
            this.element = !1, this.opt = {
                frameWidth: 200,
                frameHeight: 144,
                xoff: 0,
                yoff: 0,
                goBack: !1,
                speed: 50,
                frames: 12,
                init: null
            }, this.setOptions(t), this.recalcWidth = !this.opt.frameWidth, this.recalcHeight = !this.opt.frameHeight, this.pos = 0, this.tmr = !1, this.animating = !1, this.goingBack = !1, this.repeatCount = 0, this.create()
        },
        create: function() {
            this.recalcWidth && (this.opt.frameWidth = this.element.width()), this.recalcHeight && (this.opt.frameHeight = this.element.height()), this._create();
            "function" == typeof this.opt.init && this.opt.init(this)
        },
        _create: function() {},
        stopAnimate: function(t) {
            return this.opt.cssAnimation ? void this.element.removeClass("animateServiceIcon") : (this.tmr && (clearInterval(this.tmr), this.tmr = null), void(t || (this.repeatCount = 0, this.pos = 0, this.goingBack = !1, this.element.css({
                "background-position": this.opt.xoff + "px " + this.opt.yoff + "px"
            }))))
        },
        startAnimate: function() {
            if (this.opt.cssAnimation) return void this.element.addClass("animateServiceIcon");
            this.stopAnimate(!1), this.pos = 0;
            var t = this;
            this.tmr = setInterval(function() {
                t.update()
            }, this.opt.speed)
        },
        resize: function() {
            this.recalcWidth && (this.opt.frameWidth = this.element.width()), this.recalcHeight && (this.opt.frameHeight = this.element.height()), this.element.css({
                "background-position": -(this.pos * this.opt.frameWidth) + this.opt.xoff + "px " + this.opt.yoff + "px"
            })
        },
        update: function() {
            if (this.goingBack && this.pos - 1 < 0) return this.goingBack = !1, this.stopAnimate(!0);
            if (!this.goingBack && this.pos + 1 >= this.opt.frames)
                if (this.opt.noOfRepeats && this.opt.noOfRepeats >= this.repeatCount) this.repeatCount++, this.pos = -1;
                else {
                    if (!this.opt.goBack) return this.stopAnimate(!0);
                    this.goingBack = !0
                }
            this.pos += this.goingBack ? -1 : 1, this.element.css({
                "background-position": -(this.pos * this.opt.frameWidth) + this.opt.xoff + "px " + this.opt.yoff + "px"
            })
        },
        remove: function() {
            this.stopAnimate(), this.rm()
        }
    }),
    SpriteAnimationCar = SpriteAnimation.extend({
        _create: function() {},
        update: function() {
            var t = !0;
            return this.pos < this.opt.repeatFrames[0] || this.pos > this.opt.repeatFrames[1] || (this.pos == this.opt.repeatFrames[0] ? this.repeatCount++ : this.pos == this.opt.repeatFrames[1] && (this.repeatCount < this.opt.noOfRepeats ? (this.pos = this.opt.repeatFrames[0], t = !1) : (this.repeatCount = 0, this.pos = this.opt.repeatFrames[0], this.goingBack = !0))), this.goingBack && this.pos - 1 < 0 ? (this.goingBack = !1, this.stopAnimate(!0)) : (t && (this.pos += this.goingBack ? -1 : 1), this.pos >= this.opt.frames ? this.stopAnimate(!0) : void this.element.css({
                "background-position": -(this.pos * this.opt.frameWidth + this.opt.xoff) + "px " + this.opt.yoff + "px"
            }))
        }
    }),
    ValueSlider = BaseClass.extend({
        __className: "ValueSlider",
        init: function(t) {
            this._id = !1, this.inited = !1, this.startVal = 0, this.endVal = 100, this.updateFunction = !1, this.delegate = !1, this.element = !1, this.opt = {}, this.setOptions(t), this.put() && (this.scroller = !1, this.progress = !1, this.poslim = {}, this.moving = !1, this.sx = 0, this.sy = 0, this.spos = !1, this.create())
        },
        create: function() {
            var t = this;
            this.progress = this.find(this.element, ".progress"), this.scroller = this.find(this.element, ".scroller"), this.progress && this.scroller && (this.scroller.bind("mousedown." + this.__className, function(e) {
                t.mouseSlider(e)
            }), this.element.bind("click." + this.__className, function(e) {
                t.clickSlider(e)
            }), this.resize(), this.initialize(), $(window).bind("appResize." + this.__className + this._id, function() {
                t.resize()
            })), tt.is.mobile && this.delegate && tt.setTouchEvent({
                touchSurface: this.delegate.element,
                onStart: function() {
                    t.spos = t.scroller.position(), t.moving = !0
                },
                onMove: function(e) {
                    t.onMouseMove(e.distanceX)
                },
                onEnd: function() {
                    t.moving = !1
                }
            })
        },
        initialize: function() {
            this.updateFromPrc(50)
        },
        resize: function() {
            this.opt.sliderWidth = this.element.width(), this.opt.sliderHeight = this.element.height(), this.opt.scrollerWidth = this.scroller.width(), this.opt.scrollerHeight = this.scroller.height(), this.poslim.xmin = -Math.round(this.opt.scrollerWidth / 2), this.poslim.xmax = this.opt.sliderWidth - Math.round(this.opt.scrollerWidth / 2), this.poslim.width = Math.abs(this.poslim.xmin - this.poslim.xmax)
        },
        clickSlider: function(t) {
            this.cancelEvent(t), this.sx = t.pageX, this.sy = t.pageY;
            var e = this.element.offset(),
                i = e.left - t.pageX,
                s = Math.round(Math.abs(this.poslim.xmin - i) / this.poslim.width * 100);
            this.scroller.css({
                left: Math.round(this.poslim.xmin + this.poslim.width / 100 * s)
            }), this.progress.css({
                width: Math.round(this.opt.sliderWidth / 100 * s)
            });
            var n = this.startVal + Math.round((this.endVal - this.startVal) / 100 * s);
            typeof this.updateFunction == _fn_ && this.updateFunction(s, n)
        },
        mouseSlider: function(t) {
            switch (this.cancelEvent(t), t.type) {
                case "mousedown":
                    this.sx = t.pageX, this.sy = t.pageY, this.spos = this.scroller.position();
                    var e = this;
                    $(window).bind("mousemove." + this.__className, function(t) {
                        e.mouseSlider(t)
                    }), $(window).bind("mouseup." + this.__className, function(t) {
                        e.mouseSlider(t)
                    }), this.moving = !1;
                    break;
                case "mousemove":
                    {
                        var i = t.pageX - this.sx;t.pageY - this.sy
                    }
                    this.onMouseMove(i);
                    break;
                case "mouseup":
                    $(window).unbind("mousemove." + this.__className), $(window).unbind("mouseup." + this.__className), this.moving = !1
            }
        },
        onMouseMove: function(t) {
            var e = this.spos.left + t;
            e < this.poslim.xmin ? e = this.poslim.xmin : e > this.poslim.xmax && (e = this.poslim.xmax), this.scroller.css({
                left: e
            });
            var i = Math.round(Math.abs(this.poslim.xmin - e) / this.poslim.width * 100);
            this.progress.css({
                width: Math.round(this.opt.sliderWidth / 100 * i)
            });
            var s = this.startVal + Math.round((this.endVal - this.startVal) / 100 * i);
            typeof this.updateFunction == _fn_ && this.updateFunction(i, s)
        },
        updateFromPrc: function(t, e) {
            this.scroller.css({
                left: this.poslim.xmin + Math.round(this.poslim.width / 100 * t)
            }), this.progress.css({
                width: Math.round(this.opt.sliderWidth / 100 * t)
            });
            var i = this.startVal + Math.round((this.endVal - this.startVal) / 100 * t);
            e || typeof this.updateFunction != _fn_ || this.updateFunction(t, i)
        },
        updateFromValue: function(t) {
            t = parseInt(t), t < this.startVal ? t = this.startVal : t > this.endVal && (t = this.endVal);
            var e = t / (this.endVal - this.startVal) * 100;
            this.updateFromPrc(e, !0)
        },
        remove: function() {
            this.element.unbind("click." + this.__className), this.scroller.unbind("mousedown." + this.__className), $(window).unbind("appResize." + this.__className + this._id), this.rm()
        }
    });