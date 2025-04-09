( () => {
    var Ga = Object.defineProperty
      , Wp = Object.defineProperties;
    var Gp = Object.getOwnPropertyDescriptors;
    var Wa = Object.getOwnPropertySymbols;
    var Xp = Object.prototype.hasOwnProperty
      , Kp = Object.prototype.propertyIsEnumerable;
    var ds = (t, e, r) => e in t ? Ga(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r
      , st = (t, e) => {
        for (var r in e || (e = {}))
            Xp.call(e, r) && ds(t, r, e[r]);
        if (Wa)
            for (var r of Wa(e))
                Kp.call(e, r) && ds(t, r, e[r]);
        return t
    }
      , Xa = (t, e) => Wp(t, Gp(e));
    var R = (t, e) => () => (t && (e = t(t = 0)),
    e);
    var Qp = (t, e) => () => (e || t((e = {
        exports: {}
    }).exports, e),
    e.exports)
      , Ka = (t, e) => {
        for (var r in e)
            Ga(t, r, {
                get: e[r],
                enumerable: !0
            })
    }
    ;
    var nt = (t, e, r) => (ds(t, typeof e != "symbol" ? e + "" : e, r),
    r)
      , ps = (t, e, r) => {
        if (!e.has(t))
            throw TypeError("Cannot " + r)
    }
    ;
    var Q = (t, e, r) => (ps(t, e, "read from private field"),
    r ? r.call(t) : e.get(t))
      , ve = (t, e, r) => {
        if (e.has(t))
            throw TypeError("Cannot add the same private member more than once");
        e instanceof WeakSet ? e.add(t) : e.set(t, r)
    }
      , _r = (t, e, r, i) => (ps(t, e, "write to private field"),
    i ? i.call(t, r) : e.set(t, r),
    r);
    var Ue = (t, e, r) => (ps(t, e, "access private method"),
    r);
    var he = (t, e, r) => new Promise( (i, s) => {
        var n = l => {
            try {
                a(r.next(l))
            } catch (c) {
                s(c)
            }
        }
          , o = l => {
            try {
                a(r.throw(l))
            } catch (c) {
                s(c)
            }
        }
          , a = l => l.done ? i(l.value) : Promise.resolve(l.value).then(n, o);
        a((r = r.apply(t, e)).next())
    }
    );
    function je(t, e, r) {
        return Math.min(Math.max(t, e), r)
    }
    function yr(t, e) {
        return t.indexOf(e) > -1
    }
    function fs(t, e) {
        return t.apply(null, e)
    }
    function il(t) {
        var e = /\(([^)]+)\)/.exec(t);
        return e ? e[1].split(",").map(function(r) {
            return parseFloat(r)
        }) : []
    }
    function sl(t, e) {
        var r = il(t)
          , i = je(A.und(r[0]) ? 1 : r[0], .1, 100)
          , s = je(A.und(r[1]) ? 100 : r[1], .1, 100)
          , n = je(A.und(r[2]) ? 10 : r[2], .1, 100)
          , o = je(A.und(r[3]) ? 0 : r[3], .1, 100)
          , a = Math.sqrt(s / i)
          , l = n / (2 * Math.sqrt(s * i))
          , c = l < 1 ? a * Math.sqrt(1 - l * l) : 0
          , h = 1
          , u = l < 1 ? (l * a + -o) / c : -o + a;
        function d(p) {
            var m = e ? e * p / 1e3 : p;
            return l < 1 ? m = Math.exp(-m * l * a) * (h * Math.cos(c * m) + u * Math.sin(c * m)) : m = (h + u * m) * Math.exp(-m * a),
            p === 0 || p === 1 ? p : 1 - m
        }
        function f() {
            var p = ai.springs[t];
            if (p)
                return p;
            for (var m = 1 / 6, v = 0, w = 0; ; )
                if (v += m,
                d(v) === 1) {
                    if (w++,
                    w >= 16)
                        break
                } else
                    w = 0;
            var C = v * m * 1e3;
            return ai.springs[t] = C,
            C
        }
        return e ? d : f
    }
    function Jp(t) {
        return t === void 0 && (t = 10),
        function(e) {
            return Math.ceil(je(e, 1e-6, 1) * t) * (1 / t)
        }
    }
    function bs(t, e) {
        if (A.fnc(t))
            return t;
        var r = t.split("(")[0]
          , i = nl[r]
          , s = il(t);
        switch (r) {
        case "spring":
            return sl(t, e);
        case "cubicBezier":
            return fs(ef, s);
        case "steps":
            return fs(Jp, s);
        default:
            return fs(i, s)
        }
    }
    function ol(t) {
        try {
            var e = document.querySelectorAll(t);
            return e
        } catch (r) {
            return
        }
    }
    function li(t, e) {
        for (var r = t.length, i = arguments.length >= 2 ? arguments[1] : void 0, s = [], n = 0; n < r; n++)
            if (n in t) {
                var o = t[n];
                e.call(i, o, n, t) && s.push(o)
            }
        return s
    }
    function ci(t) {
        return t.reduce(function(e, r) {
            return e.concat(A.arr(r) ? ci(r) : r)
        }, [])
    }
    function Qa(t) {
        return A.arr(t) ? t : (A.str(t) && (t = ol(t) || t),
        t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t])
    }
    function ws(t, e) {
        return t.some(function(r) {
            return r === e
        })
    }
    function _s(t) {
        var e = {};
        for (var r in t)
            e[r] = t[r];
        return e
    }
    function ms(t, e) {
        var r = _s(t);
        for (var i in t)
            r[i] = e.hasOwnProperty(i) ? e[i] : t[i];
        return r
    }
    function hi(t, e) {
        var r = _s(t);
        for (var i in e)
            r[i] = A.und(t[i]) ? e[i] : t[i];
        return r
    }
    function tf(t) {
        var e = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t);
        return e ? "rgba(" + e[1] + ",1)" : t
    }
    function rf(t) {
        var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
          , r = t.replace(e, function(a, l, c, h) {
            return l + l + c + c + h + h
        })
          , i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r)
          , s = parseInt(i[1], 16)
          , n = parseInt(i[2], 16)
          , o = parseInt(i[3], 16);
        return "rgba(" + s + "," + n + "," + o + ",1)"
    }
    function sf(t) {
        var e = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t)
          , r = parseInt(e[1], 10) / 360
          , i = parseInt(e[2], 10) / 100
          , s = parseInt(e[3], 10) / 100
          , n = e[4] || 1;
        function o(d, f, p) {
            return p < 0 && (p += 1),
            p > 1 && (p -= 1),
            p < 1 / 6 ? d + (f - d) * 6 * p : p < 1 / 2 ? f : p < 2 / 3 ? d + (f - d) * (2 / 3 - p) * 6 : d
        }
        var a, l, c;
        if (i == 0)
            a = l = c = s;
        else {
            var h = s < .5 ? s * (1 + i) : s + i - s * i
              , u = 2 * s - h;
            a = o(u, h, r + 1 / 3),
            l = o(u, h, r),
            c = o(u, h, r - 1 / 3)
        }
        return "rgba(" + a * 255 + "," + l * 255 + "," + c * 255 + "," + n + ")"
    }
    function nf(t) {
        if (A.rgb(t))
            return tf(t);
        if (A.hex(t))
            return rf(t);
        if (A.hsl(t))
            return sf(t)
    }
    function ot(t) {
        var e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);
        if (e)
            return e[1]
    }
    function of(t) {
        if (yr(t, "translate") || t === "perspective")
            return "px";
        if (yr(t, "rotate") || yr(t, "skew"))
            return "deg"
    }
    function vs(t, e) {
        return A.fnc(t) ? t(e.target, e.id, e.total) : t
    }
    function He(t, e) {
        return t.getAttribute(e)
    }
    function ys(t, e, r) {
        var i = ot(e);
        if (ws([r, "deg", "rad", "turn"], i))
            return e;
        var s = ai.CSS[e + r];
        if (!A.und(s))
            return s;
        var n = 100
          , o = document.createElement(t.tagName)
          , a = t.parentNode && t.parentNode !== document ? t.parentNode : document.body;
        a.appendChild(o),
        o.style.position = "absolute",
        o.style.width = n + r;
        var l = n / o.offsetWidth;
        a.removeChild(o);
        var c = l * parseFloat(e);
        return ai.CSS[e + r] = c,
        c
    }
    function al(t, e, r) {
        if (e in t.style) {
            var i = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
              , s = t.style[e] || getComputedStyle(t).getPropertyValue(i) || "0";
            return r ? ys(t, s, r) : s
        }
    }
    function xs(t, e) {
        if (A.dom(t) && !A.inp(t) && (!A.nil(He(t, e)) || A.svg(t) && t[e]))
            return "attribute";
        if (A.dom(t) && ws(Zp, e))
            return "transform";
        if (A.dom(t) && e !== "transform" && al(t, e))
            return "css";
        if (t[e] != null)
            return "object"
    }
    function ll(t) {
        if (A.dom(t)) {
            for (var e = t.style.transform || "", r = /(\w+)\(([^)]*)\)/g, i = new Map, s; s = r.exec(e); )
                i.set(s[1], s[2]);
            return i
        }
    }
    function af(t, e, r, i) {
        var s = yr(e, "scale") ? 1 : 0 + of(e)
          , n = ll(t).get(e) || s;
        return r && (r.transforms.list.set(e, n),
        r.transforms.last = e),
        i ? ys(t, n, i) : n
    }
    function Es(t, e, r, i) {
        switch (xs(t, e)) {
        case "transform":
            return af(t, e, i, r);
        case "css":
            return al(t, e, r);
        case "attribute":
            return He(t, e);
        default:
            return t[e] || 0
        }
    }
    function Cs(t, e) {
        var r = /^(\*=|\+=|-=)/.exec(t);
        if (!r)
            return t;
        var i = ot(t) || 0
          , s = parseFloat(e)
          , n = parseFloat(t.replace(r[0], ""));
        switch (r[0][0]) {
        case "+":
            return s + n + i;
        case "-":
            return s - n + i;
        case "*":
            return s * n + i
        }
    }
    function cl(t, e) {
        if (A.col(t))
            return nf(t);
        if (/\s/g.test(t))
            return t;
        var r = ot(t)
          , i = r ? t.substr(0, t.length - r.length) : t;
        return e ? i + e : i
    }
    function Ss(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
    }
    function lf(t) {
        return Math.PI * 2 * He(t, "r")
    }
    function cf(t) {
        return He(t, "width") * 2 + He(t, "height") * 2
    }
    function hf(t) {
        return Ss({
            x: He(t, "x1"),
            y: He(t, "y1")
        }, {
            x: He(t, "x2"),
            y: He(t, "y2")
        })
    }
    function hl(t) {
        for (var e = t.points, r = 0, i, s = 0; s < e.numberOfItems; s++) {
            var n = e.getItem(s);
            s > 0 && (r += Ss(i, n)),
            i = n
        }
        return r
    }
    function uf(t) {
        var e = t.points;
        return hl(t) + Ss(e.getItem(e.numberOfItems - 1), e.getItem(0))
    }
    function ul(t) {
        if (t.getTotalLength)
            return t.getTotalLength();
        switch (t.tagName.toLowerCase()) {
        case "circle":
            return lf(t);
        case "rect":
            return cf(t);
        case "line":
            return hf(t);
        case "polyline":
            return hl(t);
        case "polygon":
            return uf(t)
        }
    }
    function df(t) {
        var e = ul(t);
        return t.setAttribute("stroke-dasharray", e),
        e
    }
    function pf(t) {
        for (var e = t.parentNode; A.svg(e) && A.svg(e.parentNode); )
            e = e.parentNode;
        return e
    }
    function dl(t, e) {
        var r = e || {}
          , i = r.el || pf(t)
          , s = i.getBoundingClientRect()
          , n = He(i, "viewBox")
          , o = s.width
          , a = s.height
          , l = r.viewBox || (n ? n.split(" ") : [0, 0, o, a]);
        return {
            el: i,
            viewBox: l,
            x: l[0] / 1,
            y: l[1] / 1,
            w: o,
            h: a,
            vW: l[2],
            vH: l[3]
        }
    }
    function ff(t, e) {
        var r = A.str(t) ? ol(t)[0] : t
          , i = e || 100;
        return function(s) {
            return {
                property: s,
                el: r,
                svg: dl(r),
                totalLength: ul(r) * (i / 100)
            }
        }
    }
    function mf(t, e, r) {
        function i(h) {
            h === void 0 && (h = 0);
            var u = e + h >= 1 ? e + h : 0;
            return t.el.getPointAtLength(u)
        }
        var s = dl(t.el, t.svg)
          , n = i()
          , o = i(-1)
          , a = i(1)
          , l = r ? 1 : s.w / s.vW
          , c = r ? 1 : s.h / s.vH;
        switch (t.property) {
        case "x":
            return (n.x - s.x) * l;
        case "y":
            return (n.y - s.y) * c;
        case "angle":
            return Math.atan2(a.y - o.y, a.x - o.x) * 180 / Math.PI
        }
    }
    function Za(t, e) {
        var r = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g
          , i = cl(A.pth(t) ? t.totalLength : t, e) + "";
        return {
            original: i,
            numbers: i.match(r) ? i.match(r).map(Number) : [0],
            strings: A.str(t) || e ? i.split(r) : []
        }
    }
    function Ps(t) {
        var e = t ? ci(A.arr(t) ? t.map(Qa) : Qa(t)) : [];
        return li(e, function(r, i, s) {
            return s.indexOf(r) === i
        })
    }
    function pl(t) {
        var e = Ps(t);
        return e.map(function(r, i) {
            return {
                target: r,
                id: i,
                total: e.length,
                transforms: {
                    list: ll(r)
                }
            }
        })
    }
    function vf(t, e) {
        var r = _s(e);
        if (/^spring/.test(r.easing) && (r.duration = sl(r.easing)),
        A.arr(t)) {
            var i = t.length
              , s = i === 2 && !A.obj(t[0]);
            s ? t = {
                value: t
            } : A.fnc(e.duration) || (r.duration = e.duration / i)
        }
        var n = A.arr(t) ? t : [t];
        return n.map(function(o, a) {
            var l = A.obj(o) && !A.pth(o) ? o : {
                value: o
            };
            return A.und(l.delay) && (l.delay = a ? 0 : e.delay),
            A.und(l.endDelay) && (l.endDelay = a === n.length - 1 ? e.endDelay : 0),
            l
        }).map(function(o) {
            return hi(o, r)
        })
    }
    function gf(t) {
        for (var e = li(ci(t.map(function(n) {
            return Object.keys(n)
        })), function(n) {
            return A.key(n)
        }).reduce(function(n, o) {
            return n.indexOf(o) < 0 && n.push(o),
            n
        }, []), r = {}, i = function(n) {
            var o = e[n];
            r[o] = t.map(function(a) {
                var l = {};
                for (var c in a)
                    A.key(c) ? c == o && (l.value = a[c]) : l[c] = a[c];
                return l
            })
        }, s = 0; s < e.length; s++)
            i(s);
        return r
    }
    function bf(t, e) {
        var r = []
          , i = e.keyframes;
        i && (e = hi(gf(i), e));
        for (var s in e)
            A.key(s) && r.push({
                name: s,
                tweens: vf(e[s], t)
            });
        return r
    }
    function wf(t, e) {
        var r = {};
        for (var i in t) {
            var s = vs(t[i], e);
            A.arr(s) && (s = s.map(function(n) {
                return vs(n, e)
            }),
            s.length === 1 && (s = s[0])),
            r[i] = s
        }
        return r.duration = parseFloat(r.duration),
        r.delay = parseFloat(r.delay),
        r
    }
    function _f(t, e) {
        var r;
        return t.tweens.map(function(i) {
            var s = wf(i, e)
              , n = s.value
              , o = A.arr(n) ? n[1] : n
              , a = ot(o)
              , l = Es(e.target, t.name, a, e)
              , c = r ? r.to.original : l
              , h = A.arr(n) ? n[0] : c
              , u = ot(h) || ot(l)
              , d = a || u;
            return A.und(o) && (o = c),
            s.from = Za(h, d),
            s.to = Za(Cs(o, h), d),
            s.start = r ? r.end : 0,
            s.end = s.start + s.delay + s.duration + s.endDelay,
            s.easing = bs(s.easing, s.duration),
            s.isPath = A.pth(n),
            s.isPathTargetInsideSVG = s.isPath && A.svg(e.target),
            s.isColor = A.col(s.from.original),
            s.isColor && (s.round = 1),
            r = s,
            s
        })
    }
    function ml(t, e) {
        var r = pl(t);
        r.forEach(function(i) {
            for (var s in e) {
                var n = vs(e[s], i)
                  , o = i.target
                  , a = ot(n)
                  , l = Es(o, s, a, i)
                  , c = a || ot(l)
                  , h = Cs(cl(n, c), l)
                  , u = xs(o, s);
                fl[u](o, s, h, i.transforms, !0)
            }
        })
    }
    function yf(t, e) {
        var r = xs(t.target, e.name);
        if (r) {
            var i = _f(e, t)
              , s = i[i.length - 1];
            return {
                type: r,
                property: e.name,
                animatable: t,
                tweens: i,
                duration: s.end,
                delay: i[0].delay,
                endDelay: s.endDelay
            }
        }
    }
    function xf(t, e) {
        return li(ci(t.map(function(r) {
            return e.map(function(i) {
                return yf(r, i)
            })
        })), function(r) {
            return !A.und(r)
        })
    }
    function vl(t, e) {
        var r = t.length
          , i = function(n) {
            return n.timelineOffset ? n.timelineOffset : 0
        }
          , s = {};
        return s.duration = r ? Math.max.apply(Math, t.map(function(n) {
            return i(n) + n.duration
        })) : e.duration,
        s.delay = r ? Math.min.apply(Math, t.map(function(n) {
            return i(n) + n.delay
        })) : e.delay,
        s.endDelay = r ? s.duration - Math.max.apply(Math, t.map(function(n) {
            return i(n) + n.duration - n.endDelay
        })) : e.endDelay,
        s
    }
    function Ef(t) {
        var e = ms(rl, t)
          , r = ms(gs, t)
          , i = bf(r, t)
          , s = pl(t.targets)
          , n = xf(s, i)
          , o = vl(n, r)
          , a = Ja;
        return Ja++,
        hi(e, {
            id: a,
            children: [],
            animatables: s,
            animations: n,
            duration: o.duration,
            delay: o.delay,
            endDelay: o.endDelay
        })
    }
    function el() {
        return !!document && document.hidden
    }
    function ie(t) {
        t === void 0 && (t = {});
        var e = 0, r = 0, i = 0, s, n = 0, o = null;
        function a(g) {
            var b = window.Promise && new Promise(function(y) {
                return o = y
            }
            );
            return g.finished = b,
            b
        }
        var l = Ef(t)
          , c = a(l);
        function h() {
            var g = l.direction;
            g !== "alternate" && (l.direction = g !== "normal" ? "normal" : "reverse"),
            l.reversed = !l.reversed,
            s.forEach(function(b) {
                return b.reversed = l.reversed
            })
        }
        function u(g) {
            return l.reversed ? l.duration - g : g
        }
        function d() {
            e = 0,
            r = u(l.currentTime) * (1 / ie.speed)
        }
        function f(g, b) {
            b && b.seek(g - b.timelineOffset)
        }
        function p(g) {
            if (l.reversePlayback)
                for (var y = n; y--; )
                    f(g, s[y]);
            else
                for (var b = 0; b < n; b++)
                    f(g, s[b])
        }
        function m(g) {
            for (var b = 0, y = l.animations, E = y.length; b < E; ) {
                var S = y[b]
                  , L = S.animatable
                  , D = S.tweens
                  , F = D.length - 1
                  , T = D[F];
                F && (T = li(D, function(X) {
                    return g < X.end
                })[0] || T);
                for (var z = je(g - T.start - T.delay, 0, T.duration) / T.duration, I = isNaN(z) ? 1 : T.easing(z), k = T.to.strings, W = T.round, pe = [], re = T.to.numbers.length, ne = void 0, oe = 0; oe < re; oe++) {
                    var ce = void 0
                      , Me = T.to.numbers[oe]
                      , O = T.from.numbers[oe] || 0;
                    T.isPath ? ce = mf(T.value, I * Me, T.isPathTargetInsideSVG) : ce = O + I * (Me - O),
                    W && (T.isColor && oe > 2 || (ce = Math.round(ce * W) / W)),
                    pe.push(ce)
                }
                var ke = k.length;
                if (!ke)
                    ne = pe[0];
                else {
                    ne = k[0];
                    for (var fe = 0; fe < ke; fe++) {
                        var xt = k[fe]
                          , Y = k[fe + 1]
                          , J = pe[fe];
                        isNaN(J) || (Y ? ne += J + Y : ne += J + " ")
                    }
                }
                fl[S.type](L.target, S.property, ne, L.transforms),
                S.currentValue = ne,
                b++
            }
        }
        function v(g) {
            l[g] && !l.passThrough && l[g](l)
        }
        function w() {
            l.remaining && l.remaining !== !0 && l.remaining--
        }
        function C(g) {
            var b = l.duration
              , y = l.delay
              , E = b - l.endDelay
              , S = u(g);
            l.progress = je(S / b * 100, 0, 100),
            l.reversePlayback = S < l.currentTime,
            s && p(S),
            !l.began && l.currentTime > 0 && (l.began = !0,
            v("begin")),
            !l.loopBegan && l.currentTime > 0 && (l.loopBegan = !0,
            v("loopBegin")),
            S <= y && l.currentTime !== 0 && m(0),
            (S >= E && l.currentTime !== b || !b) && m(b),
            S > y && S < E ? (l.changeBegan || (l.changeBegan = !0,
            l.changeCompleted = !1,
            v("changeBegin")),
            v("change"),
            m(S)) : l.changeBegan && (l.changeCompleted = !0,
            l.changeBegan = !1,
            v("changeComplete")),
            l.currentTime = je(S, 0, b),
            l.began && v("update"),
            g >= b && (r = 0,
            w(),
            l.remaining ? (e = i,
            v("loopComplete"),
            l.loopBegan = !1,
            l.direction === "alternate" && h()) : (l.paused = !0,
            l.completed || (l.completed = !0,
            v("loopComplete"),
            v("complete"),
            !l.passThrough && "Promise"in window && (o(),
            c = a(l)))))
        }
        return l.reset = function() {
            var g = l.direction;
            l.passThrough = !1,
            l.currentTime = 0,
            l.progress = 0,
            l.paused = !0,
            l.began = !1,
            l.loopBegan = !1,
            l.changeBegan = !1,
            l.completed = !1,
            l.changeCompleted = !1,
            l.reversePlayback = !1,
            l.reversed = g === "reverse",
            l.remaining = l.loop,
            s = l.children,
            n = s.length;
            for (var b = n; b--; )
                l.children[b].reset();
            (l.reversed && l.loop !== !0 || g === "alternate" && l.loop === 1) && l.remaining++,
            m(l.reversed ? l.duration : 0)
        }
        ,
        l._onDocumentVisibility = d,
        l.set = function(g, b) {
            return ml(g, b),
            l
        }
        ,
        l.tick = function(g) {
            i = g,
            e || (e = i),
            C((i + (r - e)) * ie.speed)
        }
        ,
        l.seek = function(g) {
            C(u(g))
        }
        ,
        l.pause = function() {
            l.paused = !0,
            d()
        }
        ,
        l.play = function() {
            l.paused && (l.completed && l.reset(),
            l.paused = !1,
            ze.push(l),
            d(),
            gl())
        }
        ,
        l.reverse = function() {
            h(),
            l.completed = !l.reversed,
            d()
        }
        ,
        l.restart = function() {
            l.reset(),
            l.play()
        }
        ,
        l.remove = function(g) {
            var b = Ps(g);
            bl(b, l)
        }
        ,
        l.reset(),
        l.autoplay && l.play(),
        l
    }
    function tl(t, e) {
        for (var r = e.length; r--; )
            ws(t, e[r].animatable.target) && e.splice(r, 1)
    }
    function bl(t, e) {
        var r = e.animations
          , i = e.children;
        tl(t, r);
        for (var s = i.length; s--; ) {
            var n = i[s]
              , o = n.animations;
            tl(t, o),
            !o.length && !n.children.length && i.splice(s, 1)
        }
        !r.length && !i.length && e.pause()
    }
    function Cf(t) {
        for (var e = Ps(t), r = ze.length; r--; ) {
            var i = ze[r];
            bl(e, i)
        }
    }
    function Sf(t, e) {
        e === void 0 && (e = {});
        var r = e.direction || "normal"
          , i = e.easing ? bs(e.easing) : null
          , s = e.grid
          , n = e.axis
          , o = e.from || 0
          , a = o === "first"
          , l = o === "center"
          , c = o === "last"
          , h = A.arr(t)
          , u = parseFloat(h ? t[0] : t)
          , d = h ? parseFloat(t[1]) : 0
          , f = ot(h ? t[1] : t) || 0
          , p = e.start || 0 + (h ? u : 0)
          , m = []
          , v = 0;
        return function(w, C, g) {
            if (a && (o = 0),
            l && (o = (g - 1) / 2),
            c && (o = g - 1),
            !m.length) {
                for (var b = 0; b < g; b++) {
                    if (!s)
                        m.push(Math.abs(o - b));
                    else {
                        var y = l ? (s[0] - 1) / 2 : o % s[0]
                          , E = l ? (s[1] - 1) / 2 : Math.floor(o / s[0])
                          , S = b % s[0]
                          , L = Math.floor(b / s[0])
                          , D = y - S
                          , F = E - L
                          , T = Math.sqrt(D * D + F * F);
                        n === "x" && (T = -D),
                        n === "y" && (T = -F),
                        m.push(T)
                    }
                    v = Math.max.apply(Math, m)
                }
                i && (m = m.map(function(I) {
                    return i(I / v) * v
                })),
                r === "reverse" && (m = m.map(function(I) {
                    return n ? I < 0 ? I * -1 : -I : Math.abs(v - I)
                }))
            }
            var z = h ? (d - u) / v : u;
            return p + z * (Math.round(m[C] * 100) / 100) + f
        }
    }
    function Pf(t) {
        t === void 0 && (t = {});
        var e = ie(t);
        return e.duration = 0,
        e.add = function(r, i) {
            var s = ze.indexOf(e)
              , n = e.children;
            s > -1 && ze.splice(s, 1);
            function o(d) {
                d.passThrough = !0
            }
            for (var a = 0; a < n.length; a++)
                o(n[a]);
            var l = hi(r, ms(gs, t));
            l.targets = l.targets || t.targets;
            var c = e.duration;
            l.autoplay = !1,
            l.direction = e.direction,
            l.timelineOffset = A.und(i) ? c : Cs(i, c),
            o(e),
            e.seek(l.timelineOffset);
            var h = ie(l);
            o(h),
            n.push(h);
            var u = vl(n, t);
            return e.delay = u.delay,
            e.endDelay = u.endDelay,
            e.duration = u.duration,
            e.seek(0),
            e.reset(),
            e.autoplay && e.play(),
            e
        }
        ,
        e
    }
    var rl, gs, Zp, ai, A, ef, nl, fl, Ja, ze, gl, x, ui = R( () => {
        rl = {
            update: null,
            begin: null,
            loopBegin: null,
            changeBegin: null,
            change: null,
            changeComplete: null,
            loopComplete: null,
            complete: null,
            loop: 1,
            direction: "normal",
            autoplay: !0,
            timelineOffset: 0
        },
        gs = {
            duration: 1e3,
            delay: 0,
            endDelay: 0,
            easing: "easeOutElastic(1, .5)",
            round: 0
        },
        Zp = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"],
        ai = {
            CSS: {},
            springs: {}
        };
        A = {
            arr: function(t) {
                return Array.isArray(t)
            },
            obj: function(t) {
                return yr(Object.prototype.toString.call(t), "Object")
            },
            pth: function(t) {
                return A.obj(t) && t.hasOwnProperty("totalLength")
            },
            svg: function(t) {
                return t instanceof SVGElement
            },
            inp: function(t) {
                return t instanceof HTMLInputElement
            },
            dom: function(t) {
                return t.nodeType || A.svg(t)
            },
            str: function(t) {
                return typeof t == "string"
            },
            fnc: function(t) {
                return typeof t == "function"
            },
            und: function(t) {
                return typeof t == "undefined"
            },
            nil: function(t) {
                return A.und(t) || t === null
            },
            hex: function(t) {
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
            },
            rgb: function(t) {
                return /^rgb/.test(t)
            },
            hsl: function(t) {
                return /^hsl/.test(t)
            },
            col: function(t) {
                return A.hex(t) || A.rgb(t) || A.hsl(t)
            },
            key: function(t) {
                return !rl.hasOwnProperty(t) && !gs.hasOwnProperty(t) && t !== "targets" && t !== "keyframes"
            }
        };
        ef = function() {
            var t = 11
              , e = 1 / (t - 1);
            function r(h, u) {
                return 1 - 3 * u + 3 * h
            }
            function i(h, u) {
                return 3 * u - 6 * h
            }
            function s(h) {
                return 3 * h
            }
            function n(h, u, d) {
                return ((r(u, d) * h + i(u, d)) * h + s(u)) * h
            }
            function o(h, u, d) {
                return 3 * r(u, d) * h * h + 2 * i(u, d) * h + s(u)
            }
            function a(h, u, d, f, p) {
                var m, v, w = 0;
                do
                    v = u + (d - u) / 2,
                    m = n(v, f, p) - h,
                    m > 0 ? d = v : u = v;
                while (Math.abs(m) > 1e-7 && ++w < 10);
                return v
            }
            function l(h, u, d, f) {
                for (var p = 0; p < 4; ++p) {
                    var m = o(u, d, f);
                    if (m === 0)
                        return u;
                    var v = n(u, d, f) - h;
                    u -= v / m
                }
                return u
            }
            function c(h, u, d, f) {
                if (!(0 <= h && h <= 1 && 0 <= d && d <= 1))
                    return;
                var p = new Float32Array(t);
                if (h !== u || d !== f)
                    for (var m = 0; m < t; ++m)
                        p[m] = n(m * e, h, d);
                function v(w) {
                    for (var C = 0, g = 1, b = t - 1; g !== b && p[g] <= w; ++g)
                        C += e;
                    --g;
                    var y = (w - p[g]) / (p[g + 1] - p[g])
                      , E = C + y * e
                      , S = o(E, h, d);
                    return S >= .001 ? l(w, E, h, d) : S === 0 ? E : a(w, C, C + e, h, d)
                }
                return function(w) {
                    return h === u && d === f || w === 0 || w === 1 ? w : n(v(w), u, f)
                }
            }
            return c
        }(),
        nl = function() {
            var t = {
                linear: function() {
                    return function(i) {
                        return i
                    }
                }
            }
              , e = {
                Sine: function() {
                    return function(i) {
                        return 1 - Math.cos(i * Math.PI / 2)
                    }
                },
                Expo: function() {
                    return function(i) {
                        return i ? Math.pow(2, 10 * i - 10) : 0
                    }
                },
                Circ: function() {
                    return function(i) {
                        return 1 - Math.sqrt(1 - i * i)
                    }
                },
                Back: function() {
                    return function(i) {
                        return i * i * (3 * i - 2)
                    }
                },
                Bounce: function() {
                    return function(i) {
                        for (var s, n = 4; i < ((s = Math.pow(2, --n)) - 1) / 11; )
                            ;
                        return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((s * 3 - 2) / 22 - i, 2)
                    }
                },
                Elastic: function(i, s) {
                    i === void 0 && (i = 1),
                    s === void 0 && (s = .5);
                    var n = je(i, 1, 10)
                      , o = je(s, .1, 2);
                    return function(a) {
                        return a === 0 || a === 1 ? a : -n * Math.pow(2, 10 * (a - 1)) * Math.sin((a - 1 - o / (Math.PI * 2) * Math.asin(1 / n)) * (Math.PI * 2) / o)
                    }
                }
            }
              , r = ["Quad", "Cubic", "Quart", "Quint"];
            return r.forEach(function(i, s) {
                e[i] = function() {
                    return function(n) {
                        return Math.pow(n, s + 2)
                    }
                }
            }),
            Object.keys(e).forEach(function(i) {
                var s = e[i];
                t["easeIn" + i] = s,
                t["easeOut" + i] = function(n, o) {
                    return function(a) {
                        return 1 - s(n, o)(1 - a)
                    }
                }
                ,
                t["easeInOut" + i] = function(n, o) {
                    return function(a) {
                        return a < .5 ? s(n, o)(a * 2) / 2 : 1 - s(n, o)(a * -2 + 2) / 2
                    }
                }
                ,
                t["easeOutIn" + i] = function(n, o) {
                    return function(a) {
                        return a < .5 ? (1 - s(n, o)(1 - a * 2)) / 2 : (s(n, o)(a * 2 - 1) + 1) / 2
                    }
                }
            }),
            t
        }();
        fl = {
            css: function(t, e, r) {
                return t.style[e] = r
            },
            attribute: function(t, e, r) {
                return t.setAttribute(e, r)
            },
            object: function(t, e, r) {
                return t[e] = r
            },
            transform: function(t, e, r, i, s) {
                if (i.list.set(e, r),
                e === i.last || s) {
                    var n = "";
                    i.list.forEach(function(o, a) {
                        n += a + "(" + o + ") "
                    }),
                    t.style.transform = n
                }
            }
        };
        Ja = 0;
        ze = [],
        gl = function() {
            var t;
            function e() {
                !t && (!el() || !ie.suspendWhenDocumentHidden) && ze.length > 0 && (t = requestAnimationFrame(r))
            }
            function r(s) {
                for (var n = ze.length, o = 0; o < n; ) {
                    var a = ze[o];
                    a.paused ? (ze.splice(o, 1),
                    n--) : (a.tick(s),
                    o++)
                }
                t = o > 0 ? requestAnimationFrame(r) : void 0
            }
            function i() {
                ie.suspendWhenDocumentHidden && (el() ? t = cancelAnimationFrame(t) : (ze.forEach(function(s) {
                    return s._onDocumentVisibility()
                }),
                gl()))
            }
            return typeof document != "undefined" && document.addEventListener("visibilitychange", i),
            e
        }();
        ie.version = "3.2.1";
        ie.speed = 1;
        ie.suspendWhenDocumentHidden = !0;
        ie.running = ze;
        ie.remove = Cf;
        ie.get = Es;
        ie.set = ml;
        ie.convertPx = ys;
        ie.path = ff;
        ie.setDashoffset = df;
        ie.stagger = Sf;
        ie.timeline = Pf;
        ie.easing = bs;
        ie.penner = nl;
        ie.random = function(t, e) {
            return Math.floor(Math.random() * (e - t + 1)) + t
        }
        ;
        x = ie
    }
    );
    function _l(t, e, r) {
        return Math.max(t, Math.min(e, r))
    }
    var Ms, ks, Ts, di, wl, As, yl, xl = R( () => {
        Ms = function() {
            return Ms = Object.assign || function(e) {
                for (var r, i = 1, s = arguments.length; i < s; i++)
                    for (var n in r = arguments[i])
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                return e
            }
            ,
            Ms.apply(this, arguments)
        }
        ;
        ks = class {
            advance(e) {
                var i;
                if (!this.isRunning)
                    return;
                let r = !1;
                if (this.lerp)
                    this.value = function(n, o, a, l) {
                        return function(h, u, d) {
                            return (1 - d) * h + d * u
                        }(n, o, 1 - Math.exp(-a * l))
                    }(this.value, this.to, 60 * this.lerp, e),
                    Math.round(this.value) === this.to && (this.value = this.to,
                    r = !0);
                else {
                    this.currentTime += e;
                    let s = _l(0, this.currentTime / this.duration, 1);
                    r = s >= 1;
                    let n = r ? 1 : this.easing(s);
                    this.value = this.from + (this.to - this.from) * n
                }
                r && this.stop(),
                (i = this.onUpdate) == null || i.call(this, this.value, r)
            }
            stop() {
                this.isRunning = !1
            }
            fromTo(e, r, {lerp: i=.1, duration: s=1, easing: n=l => l, onStart: o, onUpdate: a}) {
                this.from = this.value = e,
                this.to = r,
                this.lerp = i,
                this.duration = s,
                this.easing = n,
                this.currentTime = 0,
                this.isRunning = !0,
                o == null || o(),
                this.onUpdate = a
            }
        }
        ,
        Ts = class {
            constructor({wrapper: e, content: r, autoResize: i=!0, debounce: s=250}={}) {
                nt(this, "resize", () => {
                    this.onWrapperResize(),
                    this.onContentResize()
                }
                );
                nt(this, "onWrapperResize", () => {
                    this.wrapper === window ? (this.width = window.innerWidth,
                    this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth,
                    this.height = this.wrapper.clientHeight)
                }
                );
                nt(this, "onContentResize", () => {
                    this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight,
                    this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight,
                    this.scrollWidth = this.wrapper.scrollWidth)
                }
                );
                this.wrapper = e,
                this.content = r,
                i && (this.debouncedResize = function(o, a) {
                    let l;
                    return function() {
                        let c = arguments
                          , h = this;
                        clearTimeout(l),
                        l = setTimeout(function() {
                            o.apply(h, c)
                        }, a)
                    }
                }(this.resize, s),
                this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize),
                this.wrapperResizeObserver.observe(this.wrapper)),
                this.contentResizeObserver = new ResizeObserver(this.debouncedResize),
                this.contentResizeObserver.observe(this.content)),
                this.resize()
            }
            destroy() {
                var e, r;
                (e = this.wrapperResizeObserver) == null || e.disconnect(),
                (r = this.contentResizeObserver) == null || r.disconnect(),
                window.removeEventListener("resize", this.debouncedResize, !1)
            }
            get limit() {
                return {
                    x: this.scrollWidth - this.width,
                    y: this.scrollHeight - this.height
                }
            }
        }
        ,
        di = class {
            constructor() {
                this.events = {}
            }
            emit(e, ...r) {
                let i = this.events[e] || [];
                for (let s = 0, n = i.length; s < n; s++)
                    i[s](...r)
            }
            on(e, r) {
                var i;
                return (i = this.events[e]) != null && i.push(r) || (this.events[e] = [r]),
                () => {
                    var s;
                    this.events[e] = (s = this.events[e]) == null ? void 0 : s.filter(n => r !== n)
                }
            }
            off(e, r) {
                var i;
                this.events[e] = (i = this.events[e]) == null ? void 0 : i.filter(s => r !== s)
            }
            destroy() {
                this.events = {}
            }
        }
        ,
        wl = 100 / 6,
        As = class {
            constructor(e, {wheelMultiplier: r=1, touchMultiplier: i=1}) {
                nt(this, "onTouchStart", e => {
                    let {clientX: r, clientY: i} = e.targetTouches ? e.targetTouches[0] : e;
                    this.touchStart.x = r,
                    this.touchStart.y = i,
                    this.lastDelta = {
                        x: 0,
                        y: 0
                    },
                    this.emitter.emit("scroll", {
                        deltaX: 0,
                        deltaY: 0,
                        event: e
                    })
                }
                );
                nt(this, "onTouchMove", e => {
                    let {clientX: r, clientY: i} = e.targetTouches ? e.targetTouches[0] : e
                      , s = -(r - this.touchStart.x) * this.touchMultiplier
                      , n = -(i - this.touchStart.y) * this.touchMultiplier;
                    this.touchStart.x = r,
                    this.touchStart.y = i,
                    this.lastDelta = {
                        x: s,
                        y: n
                    },
                    this.emitter.emit("scroll", {
                        deltaX: s,
                        deltaY: n,
                        event: e
                    })
                }
                );
                nt(this, "onTouchEnd", e => {
                    this.emitter.emit("scroll", {
                        deltaX: this.lastDelta.x,
                        deltaY: this.lastDelta.y,
                        event: e
                    })
                }
                );
                nt(this, "onWheel", e => {
                    let {deltaX: r, deltaY: i, deltaMode: s} = e;
                    r *= s === 1 ? wl : s === 2 ? this.windowWidth : 1,
                    i *= s === 1 ? wl : s === 2 ? this.windowHeight : 1,
                    r *= this.wheelMultiplier,
                    i *= this.wheelMultiplier,
                    this.emitter.emit("scroll", {
                        deltaX: r,
                        deltaY: i,
                        event: e
                    })
                }
                );
                nt(this, "onWindowResize", () => {
                    this.windowWidth = window.innerWidth,
                    this.windowHeight = window.innerHeight
                }
                );
                this.element = e,
                this.wheelMultiplier = r,
                this.touchMultiplier = i,
                this.touchStart = {
                    x: null,
                    y: null
                },
                this.emitter = new di,
                window.addEventListener("resize", this.onWindowResize, !1),
                this.onWindowResize(),
                this.element.addEventListener("wheel", this.onWheel, {
                    passive: !1
                }),
                this.element.addEventListener("touchstart", this.onTouchStart, {
                    passive: !1
                }),
                this.element.addEventListener("touchmove", this.onTouchMove, {
                    passive: !1
                }),
                this.element.addEventListener("touchend", this.onTouchEnd, {
                    passive: !1
                })
            }
            on(e, r) {
                return this.emitter.on(e, r)
            }
            destroy() {
                this.emitter.destroy(),
                window.removeEventListener("resize", this.onWindowResize, !1),
                this.element.removeEventListener("wheel", this.onWheel, {
                    passive: !1
                }),
                this.element.removeEventListener("touchstart", this.onTouchStart, {
                    passive: !1
                }),
                this.element.removeEventListener("touchmove", this.onTouchMove, {
                    passive: !1
                }),
                this.element.removeEventListener("touchend", this.onTouchEnd, {
                    passive: !1
                })
            }
        }
        ,
        yl = function() {
            function t(e) {
                var r = e === void 0 ? {} : e
                  , i = r.wrapper
                  , s = i === void 0 ? window : i
                  , n = r.content
                  , o = n === void 0 ? document.documentElement : n
                  , a = r.wheelEventsTarget
                  , l = a === void 0 ? s : a
                  , c = r.eventsTarget
                  , h = c === void 0 ? l : c
                  , u = r.smoothWheel
                  , d = u === void 0 || u
                  , f = r.syncTouch
                  , p = f !== void 0 && f
                  , m = r.syncTouchLerp
                  , v = m === void 0 ? .075 : m
                  , w = r.touchInertiaMultiplier
                  , C = w === void 0 ? 35 : w
                  , g = r.duration
                  , b = r.easing
                  , y = b === void 0 ? function(ke) {
                    return Math.min(1, 1.001 - Math.pow(2, -10 * ke))
                }
                : b
                  , E = r.lerp
                  , S = E === void 0 ? !g && .1 : E
                  , L = r.infinite
                  , D = L !== void 0 && L
                  , F = r.orientation
                  , T = F === void 0 ? "vertical" : F
                  , z = r.gestureOrientation
                  , I = z === void 0 ? "vertical" : z
                  , k = r.touchMultiplier
                  , W = k === void 0 ? 1 : k
                  , pe = r.wheelMultiplier
                  , re = pe === void 0 ? 1 : pe
                  , ne = r.autoResize
                  , oe = ne === void 0 || ne
                  , ce = r.__experimental__naiveDimensions
                  , Me = ce !== void 0 && ce
                  , O = this;
                this.__isSmooth = !1,
                this.__isScrolling = !1,
                this.__isStopped = !1,
                this.__isLocked = !1,
                this.onVirtualScroll = function(ke) {
                    var fe = ke.deltaX
                      , xt = ke.deltaY
                      , Y = ke.event;
                    if (!Y.ctrlKey) {
                        var J = Y.type.includes("touch")
                          , X = Y.type.includes("wheel");
                        if (O.options.syncTouch && J && Y.type === "touchstart" && !O.isStopped && !O.isLocked)
                            O.reset();
                        else {
                            var ue = fe === 0 && xt === 0
                              , rt = O.options.gestureOrientation === "vertical" && xt === 0 || O.options.gestureOrientation === "horizontal" && fe === 0;
                            if (!ue && !rt) {
                                var Ve = Y.composedPath();
                                if (!(Ve = Ve.slice(0, Ve.indexOf(O.rootElement))).find(function(me) {
                                    var Le, Zt, wr, it, Jt;
                                    return ((Le = me.hasAttribute) === null || Le === void 0 ? void 0 : Le.call(me, "data-lenis-prevent")) || J && ((Zt = me.hasAttribute) === null || Zt === void 0 ? void 0 : Zt.call(me, "data-lenis-prevent-touch")) || X && ((wr = me.hasAttribute) === null || wr === void 0 ? void 0 : wr.call(me, "data-lenis-prevent-wheel")) || ((it = me.classList) === null || it === void 0 ? void 0 : it.contains("lenis")) && !(!((Jt = me.classList) === null || Jt === void 0) && Jt.contains("lenis-stopped"))
                                }))
                                    if (O.isStopped || O.isLocked)
                                        Y.preventDefault();
                                    else {
                                        if (O.isSmooth = O.options.syncTouch && J || O.options.smoothWheel && X,
                                        !O.isSmooth)
                                            return O.isScrolling = !1,
                                            void O.animate.stop();
                                        Y.preventDefault();
                                        var Ie = xt;
                                        O.options.gestureOrientation === "both" ? Ie = Math.abs(xt) > Math.abs(fe) ? xt : fe : O.options.gestureOrientation === "horizontal" && (Ie = fe);
                                        var Et = J && O.options.syncTouch
                                          , Re = J && Y.type === "touchend" && Math.abs(Ie) > 5;
                                        Re && (Ie = O.velocity * O.options.touchInertiaMultiplier),
                                        O.scrollTo(O.targetScroll + Ie, Ms({
                                            programmatic: !1
                                        }, Et ? {
                                            lerp: Re ? O.options.syncTouchLerp : 1
                                        } : {
                                            lerp: O.options.lerp,
                                            duration: O.options.duration,
                                            easing: O.options.easing
                                        }))
                                    }
                            }
                        }
                    }
                }
                ,
                this.onNativeScroll = function() {
                    if (!O.__preventNextScrollEvent && !O.isScrolling) {
                        var ke = O.animatedScroll;
                        O.animatedScroll = O.targetScroll = O.actualScroll,
                        O.velocity = 0,
                        O.direction = Math.sign(O.animatedScroll - ke),
                        O.emit()
                    }
                }
                ,
                window.lenisVersion = "1.0.45",
                s !== document.documentElement && s !== document.body || (s = window),
                this.options = {
                    wrapper: s,
                    content: o,
                    wheelEventsTarget: l,
                    eventsTarget: h,
                    smoothWheel: d,
                    syncTouch: p,
                    syncTouchLerp: v,
                    touchInertiaMultiplier: C,
                    duration: g,
                    easing: y,
                    lerp: S,
                    infinite: D,
                    gestureOrientation: I,
                    orientation: T,
                    touchMultiplier: W,
                    wheelMultiplier: re,
                    autoResize: oe,
                    __experimental__naiveDimensions: Me
                },
                this.animate = new ks,
                this.emitter = new di,
                this.dimensions = new Ts({
                    wrapper: s,
                    content: o,
                    autoResize: oe
                }),
                this.toggleClassName("lenis", !0),
                this.velocity = 0,
                this.isLocked = !1,
                this.isStopped = !1,
                this.isSmooth = p || d,
                this.isScrolling = !1,
                this.targetScroll = this.animatedScroll = this.actualScroll,
                this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1),
                this.virtualScroll = new As(h,{
                    touchMultiplier: W,
                    wheelMultiplier: re
                }),
                this.virtualScroll.on("scroll", this.onVirtualScroll)
            }
            return t.prototype.destroy = function() {
                this.emitter.destroy(),
                this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1),
                this.virtualScroll.destroy(),
                this.dimensions.destroy(),
                this.toggleClassName("lenis", !1),
                this.toggleClassName("lenis-smooth", !1),
                this.toggleClassName("lenis-scrolling", !1),
                this.toggleClassName("lenis-stopped", !1),
                this.toggleClassName("lenis-locked", !1)
            }
            ,
            t.prototype.on = function(e, r) {
                return this.emitter.on(e, r)
            }
            ,
            t.prototype.off = function(e, r) {
                return this.emitter.off(e, r)
            }
            ,
            t.prototype.setScroll = function(e) {
                this.isHorizontal ? this.rootElement.scrollLeft = e : this.rootElement.scrollTop = e
            }
            ,
            t.prototype.resize = function() {
                this.dimensions.resize()
            }
            ,
            t.prototype.emit = function() {
                this.emitter.emit("scroll", this)
            }
            ,
            t.prototype.reset = function() {
                this.isLocked = !1,
                this.isScrolling = !1,
                this.animatedScroll = this.targetScroll = this.actualScroll,
                this.velocity = 0,
                this.animate.stop()
            }
            ,
            t.prototype.start = function() {
                this.isStopped && (this.isStopped = !1,
                this.reset())
            }
            ,
            t.prototype.stop = function() {
                this.isStopped || (this.isStopped = !0,
                this.animate.stop(),
                this.reset())
            }
            ,
            t.prototype.raf = function(e) {
                var r = e - (this.time || e);
                this.time = e,
                this.animate.advance(.001 * r)
            }
            ,
            t.prototype.scrollTo = function(e, r) {
                var i = this
                  , s = r === void 0 ? {} : r
                  , n = s.offset
                  , o = n === void 0 ? 0 : n
                  , a = s.immediate
                  , l = a !== void 0 && a
                  , c = s.lock
                  , h = c !== void 0 && c
                  , u = s.duration
                  , d = u === void 0 ? this.options.duration : u
                  , f = s.easing
                  , p = f === void 0 ? this.options.easing : f
                  , m = s.lerp
                  , v = m === void 0 ? !d && this.options.lerp : m
                  , w = s.onComplete
                  , C = s.force
                  , g = C !== void 0 && C
                  , b = s.programmatic
                  , y = b === void 0 || b;
                if (!this.isStopped && !this.isLocked || g) {
                    if (["top", "left", "start"].includes(e))
                        e = 0;
                    else if (["bottom", "right", "end"].includes(e))
                        e = this.limit;
                    else {
                        var E = void 0;
                        if (typeof e == "string" ? E = document.querySelector(e) : e != null && e.nodeType && (E = e),
                        E) {
                            if (this.options.wrapper !== window) {
                                var S = this.options.wrapper.getBoundingClientRect();
                                o -= this.isHorizontal ? S.left : S.top
                            }
                            var L = E.getBoundingClientRect();
                            e = (this.isHorizontal ? L.left : L.top) + this.animatedScroll
                        }
                    }
                    if (typeof e == "number") {
                        if (e += o,
                        e = Math.round(e),
                        this.options.infinite ? y && (this.targetScroll = this.animatedScroll = this.scroll) : e = _l(0, e, this.limit),
                        l)
                            return this.animatedScroll = this.targetScroll = e,
                            this.setScroll(this.scroll),
                            this.reset(),
                            void (w == null || w(this));
                        if (!y) {
                            if (e === this.targetScroll)
                                return;
                            this.targetScroll = e
                        }
                        this.animate.fromTo(this.animatedScroll, e, {
                            duration: d,
                            easing: p,
                            lerp: v,
                            onStart: function() {
                                h && (i.isLocked = !0),
                                i.isScrolling = !0
                            },
                            onUpdate: function(D, F) {
                                i.isScrolling = !0,
                                i.velocity = D - i.animatedScroll,
                                i.direction = Math.sign(i.velocity),
                                i.animatedScroll = D,
                                i.setScroll(i.scroll),
                                y && (i.targetScroll = D),
                                F || i.emit(),
                                F && (i.reset(),
                                i.emit(),
                                w == null || w(i),
                                i.__preventNextScrollEvent = !0,
                                requestAnimationFrame(function() {
                                    delete i.__preventNextScrollEvent
                                }))
                            }
                        })
                    }
                }
            }
            ,
            Object.defineProperty(t.prototype, "rootElement", {
                get: function() {
                    return this.options.wrapper === window ? document.documentElement : this.options.wrapper
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "limit", {
                get: function() {
                    return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isHorizontal", {
                get: function() {
                    return this.options.orientation === "horizontal"
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "actualScroll", {
                get: function() {
                    return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "scroll", {
                get: function() {
                    return this.options.infinite ? function(r, i) {
                        return (r % i + i) % i
                    }(this.animatedScroll, this.limit) : this.animatedScroll
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "progress", {
                get: function() {
                    return this.limit === 0 ? 1 : this.scroll / this.limit
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isSmooth", {
                get: function() {
                    return this.__isSmooth
                },
                set: function(e) {
                    this.__isSmooth !== e && (this.__isSmooth = e,
                    this.toggleClassName("lenis-smooth", e))
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isScrolling", {
                get: function() {
                    return this.__isScrolling
                },
                set: function(e) {
                    this.__isScrolling !== e && (this.__isScrolling = e,
                    this.toggleClassName("lenis-scrolling", e))
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isStopped", {
                get: function() {
                    return this.__isStopped
                },
                set: function(e) {
                    this.__isStopped !== e && (this.__isStopped = e,
                    this.toggleClassName("lenis-stopped", e))
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isLocked", {
                get: function() {
                    return this.__isLocked
                },
                set: function(e) {
                    this.__isLocked !== e && (this.__isLocked = e,
                    this.toggleClassName("lenis-locked", e))
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "className", {
                get: function() {
                    var e = "lenis";
                    return this.isStopped && (e += " lenis-stopped"),
                    this.isLocked && (e += " lenis-locked"),
                    this.isScrolling && (e += " lenis-scrolling"),
                    this.isSmooth && (e += " lenis-smooth"),
                    e
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.toggleClassName = function(e, r) {
                this.rootElement.classList.toggle(e, r),
                this.emitter.emit("className change", this)
            }
            ,
            t
        }()
    }
    );
    function Os() {
        return Os = Object.assign ? Object.assign.bind() : function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
            }
            return t
        }
        ,
        Os.apply(this, arguments)
    }
    function El(t, e, r, i, s) {
        return r + ((s - t) / (e - t) * (i - r) || 0)
    }
    function Cl(t, e) {
        return t.reduce( (r, i) => Math.abs(i - e) < Math.abs(r - e) ? i : r)
    }
    var pi, Rs, Mf, Ls, Fs, Sl, fi, Pl = R( () => {
        xl();
        pi = class {
            constructor({scrollElements: e, rootMargin: r="-1px -1px -1px -1px", IORaf: i}) {
                this.scrollElements = void 0,
                this.rootMargin = void 0,
                this.IORaf = void 0,
                this.observer = void 0,
                this.scrollElements = e,
                this.rootMargin = r,
                this.IORaf = i,
                this._init()
            }
            _init() {
                this.observer = new IntersectionObserver(e => {
                    e.forEach(r => {
                        let i = this.scrollElements.find(s => s.$el === r.target);
                        r.isIntersecting ? (i && (i.isAlreadyIntersected = !0),
                        this._setInview(r)) : i && i.isAlreadyIntersected && this._setOutOfView(r)
                    }
                    )
                }
                ,{
                    rootMargin: this.rootMargin
                });
                for (let e of this.scrollElements)
                    this.observe(e.$el)
            }
            destroy() {
                this.observer.disconnect()
            }
            observe(e) {
                e && this.observer.observe(e)
            }
            unobserve(e) {
                e && this.observer.unobserve(e)
            }
            _setInview(e) {
                let r = this.scrollElements.find(i => i.$el === e.target);
                this.IORaf && (r == null || r.setInteractivityOn()),
                !this.IORaf && (r == null || r.setInview())
            }
            _setOutOfView(e) {
                let r = this.scrollElements.find(i => i.$el === e.target);
                this.IORaf && (r == null || r.setInteractivityOff()),
                !this.IORaf && (r == null || r.setOutOfView()),
                r != null && r.attributes.scrollRepeat || this.IORaf || this.unobserve(e.target)
            }
        }
        ;
        Rs = class {
            constructor({$el: e, id: r, modularInstance: i, subscribeElementUpdateFn: s, unsubscribeElementUpdateFn: n, needRaf: o, scrollOrientation: a}) {
                var l, c, h, u, d;
                this.$el = void 0,
                this.id = void 0,
                this.needRaf = void 0,
                this.attributes = void 0,
                this.scrollOrientation = void 0,
                this.isAlreadyIntersected = void 0,
                this.intersection = void 0,
                this.metrics = void 0,
                this.currentScroll = void 0,
                this.translateValue = void 0,
                this.progress = void 0,
                this.lastProgress = void 0,
                this.modularInstance = void 0,
                this.progressModularModules = void 0,
                this.isInview = void 0,
                this.isInteractive = void 0,
                this.isInFold = void 0,
                this.isFirstResize = void 0,
                this.subscribeElementUpdateFn = void 0,
                this.unsubscribeElementUpdateFn = void 0,
                this.$el = e,
                this.id = r,
                this.needRaf = o,
                this.scrollOrientation = a,
                this.modularInstance = i,
                this.subscribeElementUpdateFn = s,
                this.unsubscribeElementUpdateFn = n,
                this.attributes = {
                    scrollClass: (l = this.$el.dataset.scrollClass) != null ? l : "is-inview",
                    scrollOffset: (c = this.$el.dataset.scrollOffset) != null ? c : "0,0",
                    scrollPosition: (h = this.$el.dataset.scrollPosition) != null ? h : "start,end",
                    scrollModuleProgress: this.$el.dataset.scrollModuleProgress != null,
                    scrollCssProgress: this.$el.dataset.scrollCssProgress != null,
                    scrollEventProgress: (u = this.$el.dataset.scrollEventProgress) != null ? u : null,
                    scrollSpeed: this.$el.dataset.scrollSpeed != null ? parseFloat(this.$el.dataset.scrollSpeed) : null,
                    scrollRepeat: this.$el.dataset.scrollRepeat != null,
                    scrollCall: (d = this.$el.dataset.scrollCall) != null ? d : null,
                    scrollCallSelf: this.$el.dataset.scrollCallSelf != null,
                    scrollIgnoreFold: this.$el.dataset.scrollIgnoreFold != null,
                    scrollEnableTouchSpeed: this.$el.dataset.scrollEnableTouchSpeed != null
                },
                this.intersection = {
                    start: 0,
                    end: 0
                },
                this.metrics = {
                    offsetStart: 0,
                    offsetEnd: 0,
                    bcr: {}
                },
                this.currentScroll = this.scrollOrientation === "vertical" ? window.scrollY : window.scrollX,
                this.translateValue = 0,
                this.progress = 0,
                this.lastProgress = null,
                this.progressModularModules = [],
                this.isInview = !1,
                this.isInteractive = !1,
                this.isAlreadyIntersected = !1,
                this.isInFold = !1,
                this.isFirstResize = !0,
                this._init()
            }
            _init() {
                this.needRaf && (this.modularInstance && this.attributes.scrollModuleProgress && this._getProgressModularModules(),
                this._resize())
            }
            onResize({currentScroll: e}) {
                this.currentScroll = e,
                this._resize()
            }
            onRender({currentScroll: e, smooth: r}) {
                let i = this.scrollOrientation === "vertical" ? window.innerHeight : window.innerWidth;
                if (this.currentScroll = e,
                this._computeProgress(),
                this.attributes.scrollSpeed && !isNaN(this.attributes.scrollSpeed))
                    if (this.attributes.scrollEnableTouchSpeed || r) {
                        if (this.isInFold) {
                            let s = Math.max(0, this.progress);
                            this.translateValue = s * i * this.attributes.scrollSpeed * -1
                        } else {
                            let s = El(0, 1, -1, 1, this.progress);
                            this.translateValue = s * i * this.attributes.scrollSpeed * -1
                        }
                        this.$el.style.transform = this.scrollOrientation === "vertical" ? `translate3d(0, ${this.translateValue}px, 0)` : `translate3d(${this.translateValue}px, 0, 0)`
                    } else
                        this.translateValue && (this.$el.style.transform = "translate3d(0, 0, 0)"),
                        this.translateValue = 0
            }
            setInview() {
                if (this.isInview)
                    return;
                this.isInview = !0,
                this.$el.classList.add(this.attributes.scrollClass);
                let e = this._getScrollCallFrom();
                this.attributes.scrollCall && this._dispatchCall("enter", e)
            }
            setOutOfView() {
                if (!this.isInview || !this.attributes.scrollRepeat)
                    return;
                this.isInview = !1,
                this.$el.classList.remove(this.attributes.scrollClass);
                let e = this._getScrollCallFrom();
                this.attributes.scrollCall && this._dispatchCall("leave", e)
            }
            setInteractivityOn() {
                this.isInteractive || (this.isInteractive = !0,
                this.subscribeElementUpdateFn(this))
            }
            setInteractivityOff() {
                this.isInteractive && (this.isInteractive = !1,
                this.unsubscribeElementUpdateFn(this),
                this.lastProgress != null && this._computeProgress(Cl([0, 1], this.lastProgress)))
            }
            _resize() {
                this.metrics.bcr = this.$el.getBoundingClientRect(),
                this._computeMetrics(),
                this._computeIntersection(),
                this.isFirstResize && (this.isFirstResize = !1,
                this.isInFold && this.setInview())
            }
            _computeMetrics() {
                let {top: e, left: r, height: i, width: s} = this.metrics.bcr
                  , n = this.scrollOrientation === "vertical" ? window.innerHeight : window.innerWidth
                  , o = this.scrollOrientation === "vertical" ? i : s;
                this.metrics.offsetStart = this.currentScroll + (this.scrollOrientation === "vertical" ? e : r) - this.translateValue,
                this.metrics.offsetEnd = this.metrics.offsetStart + o,
                this.isInFold = this.metrics.offsetStart < n && !this.attributes.scrollIgnoreFold
            }
            _computeIntersection() {
                let e = this.scrollOrientation === "vertical" ? window.innerHeight : window.innerWidth
                  , r = this.scrollOrientation === "vertical" ? this.metrics.bcr.height : this.metrics.bcr.width
                  , i = this.attributes.scrollOffset.split(",")
                  , s = i[0] != null ? i[0].trim() : "0"
                  , n = i[1] != null ? i[1].trim() : "0"
                  , o = this.attributes.scrollPosition.split(",")
                  , a = o[0] != null ? o[0].trim() : "start"
                  , l = o[1] != null ? o[1].trim() : "end"
                  , c = s.includes("%") ? e * parseInt(s.replace("%", "").trim()) * .01 : parseInt(s)
                  , h = n.includes("%") ? e * parseInt(n.replace("%", "").trim()) * .01 : parseInt(n);
                switch (this.isInFold && (a = "fold"),
                a) {
                case "start":
                default:
                    this.intersection.start = this.metrics.offsetStart - e + c;
                    break;
                case "middle":
                    this.intersection.start = this.metrics.offsetStart - e + c + .5 * r;
                    break;
                case "end":
                    this.intersection.start = this.metrics.offsetStart - e + c + r;
                    break;
                case "fold":
                    this.intersection.start = 0
                }
                switch (l) {
                case "start":
                    this.intersection.end = this.metrics.offsetStart - h;
                    break;
                case "middle":
                    this.intersection.end = this.metrics.offsetStart - h + .5 * r;
                    break;
                default:
                    this.intersection.end = this.metrics.offsetStart - h + r
                }
                if (this.intersection.end <= this.intersection.start)
                    switch (l) {
                    case "start":
                    default:
                        this.intersection.end = this.intersection.start + 1;
                        break;
                    case "middle":
                        this.intersection.end = this.intersection.start + .5 * r;
                        break;
                    case "end":
                        this.intersection.end = this.intersection.start + r
                    }
            }
            _computeProgress(e) {
                let r = e != null ? e : (i = El(this.intersection.start, this.intersection.end, 0, 1, this.currentScroll)) < 0 ? 0 : i > 1 ? 1 : i;
                var i;
                if (this.progress = r,
                r != this.lastProgress) {
                    if (this.lastProgress = r,
                    this.attributes.scrollCssProgress && this._setCssProgress(r),
                    this.attributes.scrollEventProgress && this._setCustomEventProgress(r),
                    this.attributes.scrollModuleProgress)
                        for (let s of this.progressModularModules)
                            this.modularInstance && this.modularInstance.call("onScrollProgress", r, s.moduleName, s.moduleId);
                    r > 0 && r < 1 && this.setInview(),
                    r === 0 && this.setOutOfView(),
                    r === 1 && this.setOutOfView()
                }
            }
            _setCssProgress(e=0) {
                this.$el.style.setProperty("--progress", e.toString())
            }
            _setCustomEventProgress(e=0) {
                let r = this.attributes.scrollEventProgress;
                if (!r)
                    return;
                let i = new CustomEvent(r,{
                    detail: {
                        target: this.$el,
                        progress: e
                    }
                });
                window.dispatchEvent(i)
            }
            _getProgressModularModules() {
                if (!this.modularInstance)
                    return;
                let e = Object.keys(this.$el.dataset).filter(i => i.includes("module"))
                  , r = Object.entries(this.modularInstance.modules);
                if (e.length)
                    for (let i of e) {
                        let s = this.$el.dataset[i];
                        if (!s)
                            return;
                        for (let n of r) {
                            let[o,a] = n;
                            s in a && this.progressModularModules.push({
                                moduleName: o,
                                moduleId: s
                            })
                        }
                    }
            }
            _getScrollCallFrom() {
                let e = Cl([this.intersection.start, this.intersection.end], this.currentScroll);
                return this.intersection.start === e ? "start" : "end"
            }
            _dispatchCall(e, r) {
                var i, s;
                let n = (i = this.attributes.scrollCall) == null ? void 0 : i.split(",")
                  , o = (s = this.attributes) == null ? void 0 : s.scrollCallSelf;
                if (n && n.length > 1) {
                    var a;
                    let[l,c,h] = n, u;
                    u = o ? this.$el.dataset[`module${c.trim()}`] : h,
                    this.modularInstance && this.modularInstance.call(l.trim(), {
                        target: this.$el,
                        way: e,
                        from: r
                    }, c.trim(), (a = u) == null ? void 0 : a.trim())
                } else if (n) {
                    let[l] = n
                      , c = new CustomEvent(l,{
                        detail: {
                            target: this.$el,
                            way: e,
                            from: r
                        }
                    });
                    window.dispatchEvent(c)
                }
            }
        }
        ,
        Mf = ["scrollOffset", "scrollPosition", "scrollModuleProgress", "scrollCssProgress", "scrollEventProgress", "scrollSpeed"],
        Ls = class {
            constructor({$el: e, modularInstance: r, triggerRootMargin: i, rafRootMargin: s, scrollOrientation: n}) {
                this.$scrollContainer = void 0,
                this.modularInstance = void 0,
                this.triggerRootMargin = void 0,
                this.rafRootMargin = void 0,
                this.scrollElements = void 0,
                this.triggeredScrollElements = void 0,
                this.RAFScrollElements = void 0,
                this.scrollElementsToUpdate = void 0,
                this.IOTriggerInstance = void 0,
                this.IORafInstance = void 0,
                this.scrollOrientation = void 0,
                e ? (this.$scrollContainer = e,
                this.modularInstance = r,
                this.scrollOrientation = n,
                this.triggerRootMargin = i != null ? i : "-1px -1px -1px -1px",
                this.rafRootMargin = s != null ? s : "100% 100% 100% 100%",
                this.scrollElements = [],
                this.triggeredScrollElements = [],
                this.RAFScrollElements = [],
                this.scrollElementsToUpdate = [],
                this._init()) : console.error("Please provide a DOM Element as scrollContainer")
            }
            _init() {
                let e = this.$scrollContainer.querySelectorAll("[data-scroll]")
                  , r = Array.from(e);
                this._subscribeScrollElements(r),
                this.IOTriggerInstance = new pi({
                    scrollElements: [...this.triggeredScrollElements],
                    rootMargin: this.triggerRootMargin,
                    IORaf: !1
                }),
                this.IORafInstance = new pi({
                    scrollElements: [...this.RAFScrollElements],
                    rootMargin: this.rafRootMargin,
                    IORaf: !0
                })
            }
            destroy() {
                this.IOTriggerInstance.destroy(),
                this.IORafInstance.destroy(),
                this._unsubscribeAllScrollElements()
            }
            onResize({currentScroll: e}) {
                for (let r of this.RAFScrollElements)
                    r.onResize({
                        currentScroll: e
                    })
            }
            onRender({currentScroll: e, smooth: r}) {
                for (let i of this.scrollElementsToUpdate)
                    i.onRender({
                        currentScroll: e,
                        smooth: r
                    })
            }
            removeScrollElements(e) {
                let r = e.querySelectorAll("[data-scroll]");
                if (r.length) {
                    for (let i = 0; i < this.triggeredScrollElements.length; i++) {
                        let s = this.triggeredScrollElements[i];
                        Array.from(r).indexOf(s.$el) > -1 && (this.IOTriggerInstance.unobserve(s.$el),
                        this.triggeredScrollElements.splice(i, 1))
                    }
                    for (let i = 0; i < this.RAFScrollElements.length; i++) {
                        let s = this.RAFScrollElements[i];
                        Array.from(r).indexOf(s.$el) > -1 && (this.IORafInstance.unobserve(s.$el),
                        this.RAFScrollElements.splice(i, 1))
                    }
                    r.forEach(i => {
                        let s = this.scrollElementsToUpdate.find(o => o.$el === i)
                          , n = this.scrollElements.find(o => o.$el === i);
                        s && this._unsubscribeElementUpdate(s),
                        n && (this.scrollElements = this.scrollElements.filter(o => o.id != n.id))
                    }
                    )
                }
            }
            addScrollElements(e) {
                let r = e.querySelectorAll("[data-scroll]")
                  , i = [];
                this.scrollElements.forEach(o => {
                    i.push(o.id)
                }
                );
                let s = Math.max(...i) + 1
                  , n = Array.from(r);
                this._subscribeScrollElements(n, s, !0)
            }
            _subscribeScrollElements(e, r=0, i=!1) {
                for (let s = 0; s < e.length; s++) {
                    let n = e[s]
                      , o = this._checkRafNeeded(n)
                      , a = new Rs({
                        $el: n,
                        id: r + s,
                        scrollOrientation: this.scrollOrientation,
                        modularInstance: this.modularInstance,
                        subscribeElementUpdateFn: this._subscribeElementUpdate.bind(this),
                        unsubscribeElementUpdateFn: this._unsubscribeElementUpdate.bind(this),
                        needRaf: o
                    });
                    this.scrollElements.push(a),
                    o ? (this.RAFScrollElements.push(a),
                    i && (this.IORafInstance.scrollElements.push(a),
                    this.IORafInstance.observe(a.$el))) : (this.triggeredScrollElements.push(a),
                    i && (this.IOTriggerInstance.scrollElements.push(a),
                    this.IOTriggerInstance.observe(a.$el)))
                }
            }
            _unsubscribeAllScrollElements() {
                this.scrollElements = [],
                this.RAFScrollElements = [],
                this.triggeredScrollElements = [],
                this.scrollElementsToUpdate = []
            }
            _subscribeElementUpdate(e) {
                this.scrollElementsToUpdate.push(e)
            }
            _unsubscribeElementUpdate(e) {
                this.scrollElementsToUpdate = this.scrollElementsToUpdate.filter(r => r.id != e.id)
            }
            _checkRafNeeded(e) {
                let r = [...Mf]
                  , i = s => {
                    r = r.filter(n => n != s)
                }
                ;
                if (e.dataset.scrollOffset) {
                    if (e.dataset.scrollOffset.split(",").map(s => s.replace("%", "").trim()).join(",") != "0,0")
                        return !0;
                    i("scrollOffset")
                } else
                    i("scrollOffset");
                if (e.dataset.scrollPosition) {
                    if (e.dataset.scrollPosition.trim() != "top,bottom")
                        return !0;
                    i("scrollPosition")
                } else
                    i("scrollPosition");
                if (e.dataset.scrollSpeed && !isNaN(parseFloat(e.dataset.scrollSpeed)))
                    return !0;
                i("scrollSpeed");
                for (let s of r)
                    if (s in e.dataset)
                        return !0;
                return !1
            }
        }
        ,
        Fs = class {
            constructor({resizeElements: e, resizeCallback: r= () => {}
            }) {
                this.$resizeElements = void 0,
                this.isFirstObserve = void 0,
                this.observer = void 0,
                this.resizeCallback = void 0,
                this.$resizeElements = e,
                this.resizeCallback = r,
                this.isFirstObserve = !0,
                this._init()
            }
            _init() {
                this.observer = new ResizeObserver(e => {
                    var r;
                    !this.isFirstObserve && ((r = this.resizeCallback) == null || r.call(this)),
                    this.isFirstObserve = !1
                }
                );
                for (let e of this.$resizeElements)
                    this.observer.observe(e)
            }
            destroy() {
                this.observer.disconnect()
            }
        }
        ,
        Sl = {
            wrapper: window,
            content: document.documentElement,
            wheelEventsTarget: window,
            eventsTarget: window,
            smoothWheel: !0,
            syncTouch: !1,
            syncTouchLerp: .075,
            touchInertiaMultiplier: 35,
            duration: .75,
            easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            lerp: .1,
            infinite: !1,
            orientation: "vertical",
            gestureOrientation: "vertical",
            touchMultiplier: 1,
            wheelMultiplier: 1,
            autoResize: !0
        },
        fi = class {
            constructor({lenisOptions: e={}, modularInstance: r, triggerRootMargin: i, rafRootMargin: s, autoResize: n=!0, autoStart: o=!0, scrollCallback: a= () => {}
            , initCustomTicker: l, destroyCustomTicker: c}={}) {
                this.rafPlaying = void 0,
                this.lenisInstance = void 0,
                this.coreInstance = void 0,
                this.lenisOptions = void 0,
                this.modularInstance = void 0,
                this.triggerRootMargin = void 0,
                this.rafRootMargin = void 0,
                this.rafInstance = void 0,
                this.autoResize = void 0,
                this.autoStart = void 0,
                this.ROInstance = void 0,
                this.initCustomTicker = void 0,
                this.destroyCustomTicker = void 0,
                this._onRenderBind = void 0,
                this._onResizeBind = void 0,
                this._onScrollToBind = void 0,
                this.lenisOptions = Os({}, Sl, e),
                Object.assign(this, {
                    lenisOptions: e,
                    modularInstance: r,
                    triggerRootMargin: i,
                    rafRootMargin: s,
                    autoResize: n,
                    autoStart: o,
                    scrollCallback: a,
                    initCustomTicker: l,
                    destroyCustomTicker: c
                }),
                this._onRenderBind = this._onRender.bind(this),
                this._onScrollToBind = this._onScrollTo.bind(this),
                this._onResizeBind = this._onResize.bind(this),
                this.rafPlaying = !1,
                this._init()
            }
            _init() {
                var e;
                this.lenisInstance = new yl({
                    wrapper: this.lenisOptions.wrapper,
                    content: this.lenisOptions.content,
                    eventsTarget: this.lenisOptions.eventsTarget,
                    lerp: this.lenisOptions.lerp,
                    duration: this.lenisOptions.duration,
                    orientation: this.lenisOptions.orientation,
                    gestureOrientation: this.lenisOptions.gestureOrientation,
                    smoothWheel: this.lenisOptions.smoothWheel,
                    syncTouch: this.lenisOptions.syncTouch,
                    syncTouchLerp: this.lenisOptions.syncTouchLerp,
                    touchInertiaMultiplier: this.lenisOptions.touchInertiaMultiplier,
                    wheelMultiplier: this.lenisOptions.wheelMultiplier,
                    touchMultiplier: this.lenisOptions.touchMultiplier,
                    easing: this.lenisOptions.easing
                }),
                (e = this.lenisInstance) == null || e.on("scroll", this.scrollCallback),
                document.documentElement.setAttribute("data-scroll-orientation", this.lenisInstance.options.orientation),
                requestAnimationFrame( () => {
                    this.coreInstance = new Ls({
                        $el: this.lenisInstance.rootElement,
                        modularInstance: this.modularInstance,
                        triggerRootMargin: this.triggerRootMargin,
                        rafRootMargin: this.rafRootMargin,
                        scrollOrientation: this.lenisInstance.options.orientation
                    }),
                    this._bindEvents(),
                    this.initCustomTicker && !this.destroyCustomTicker ? console.warn("initCustomTicker callback is declared, but destroyCustomTicker is not. Please pay attention. It could cause trouble.") : !this.initCustomTicker && this.destroyCustomTicker && console.warn("destroyCustomTicker callback is declared, but initCustomTicker is not. Please pay attention. It could cause trouble."),
                    this.autoStart && this.start()
                }
                )
            }
            destroy() {
                var e;
                this.stop(),
                this._unbindEvents(),
                this.lenisInstance.destroy(),
                (e = this.coreInstance) == null || e.destroy(),
                requestAnimationFrame( () => {
                    var r;
                    (r = this.coreInstance) == null || r.destroy()
                }
                )
            }
            _bindEvents() {
                this._bindScrollToEvents(),
                this.autoResize && ("ResizeObserver"in window ? this.ROInstance = new Fs({
                    resizeElements: [document.body],
                    resizeCallback: this._onResizeBind
                }) : window.addEventListener("resize", this._onResizeBind))
            }
            _unbindEvents() {
                this._unbindScrollToEvents(),
                this.autoResize && ("ResizeObserver"in window ? this.ROInstance && this.ROInstance.destroy() : window.removeEventListener("resize", this._onResizeBind))
            }
            _bindScrollToEvents(e) {
                let r = e || this.lenisInstance.rootElement
                  , i = r == null ? void 0 : r.querySelectorAll("[data-scroll-to]");
                i != null && i.length && i.forEach(s => {
                    s.addEventListener("click", this._onScrollToBind, !1)
                }
                )
            }
            _unbindScrollToEvents(e) {
                let r = e || this.lenisInstance.rootElement
                  , i = r == null ? void 0 : r.querySelectorAll("[data-scroll-to]");
                i != null && i.length && i.forEach(s => {
                    s.removeEventListener("click", this._onScrollToBind, !1)
                }
                )
            }
            _onResize() {
                requestAnimationFrame( () => {
                    var e;
                    (e = this.coreInstance) == null || e.onResize({
                        currentScroll: this.lenisInstance.scroll
                    })
                }
                )
            }
            _onRender() {
                var e, r;
                (e = this.lenisInstance) == null || e.raf(Date.now()),
                (r = this.coreInstance) == null || r.onRender({
                    currentScroll: this.lenisInstance.scroll,
                    smooth: this.lenisInstance.isSmooth
                })
            }
            _onScrollTo(e) {
                var r;
                e.preventDefault();
                let i = (r = e.currentTarget) != null ? r : null;
                if (!i)
                    return;
                let s = i.getAttribute("data-scroll-to-href") || i.getAttribute("href")
                  , n = i.getAttribute("data-scroll-to-offset") || 0
                  , o = i.getAttribute("data-scroll-to-duration") || this.lenisOptions.duration || Sl.duration;
                s && this.scrollTo(s, {
                    offset: typeof n == "string" ? parseInt(n) : n,
                    duration: typeof o == "string" ? parseInt(o) : o
                })
            }
            start() {
                var e;
                this.rafPlaying || ((e = this.lenisInstance) == null || e.start(),
                this.rafPlaying = !0,
                this.initCustomTicker ? this.initCustomTicker(this._onRenderBind) : this._raf())
            }
            stop() {
                var e;
                this.rafPlaying && ((e = this.lenisInstance) == null || e.stop(),
                this.rafPlaying = !1,
                this.destroyCustomTicker ? this.destroyCustomTicker(this._onRenderBind) : this.rafInstance && cancelAnimationFrame(this.rafInstance))
            }
            removeScrollElements(e) {
                var r;
                e ? (this._unbindScrollToEvents(e),
                (r = this.coreInstance) == null || r.removeScrollElements(e)) : console.error("Please provide a DOM Element as $oldContainer")
            }
            addScrollElements(e) {
                var r;
                e ? ((r = this.coreInstance) == null || r.addScrollElements(e),
                requestAnimationFrame( () => {
                    this._bindScrollToEvents(e)
                }
                )) : console.error("Please provide a DOM Element as $newContainer")
            }
            resize() {
                this._onResizeBind()
            }
            scrollTo(e, r) {
                var i;
                (i = this.lenisInstance) == null || i.scrollTo(e, {
                    offset: r == null ? void 0 : r.offset,
                    lerp: r == null ? void 0 : r.lerp,
                    duration: r == null ? void 0 : r.duration,
                    immediate: r == null ? void 0 : r.immediate,
                    lock: r == null ? void 0 : r.lock,
                    force: r == null ? void 0 : r.force,
                    easing: r == null ? void 0 : r.easing,
                    onComplete: r == null ? void 0 : r.onComplete
                })
            }
            _raf() {
                this._onRenderBind(),
                this.rafInstance = requestAnimationFrame( () => this._raf())
            }
        }
    }
    );
    function kf(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function Ml(t, e) {
        for (var r = 0; r < e.length; r++) {
            var i = e[r];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    function kl(t, e, r) {
        return e && Ml(t.prototype, e),
        r && Ml(t, r),
        t
    }
    function Tf(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r,
        t
    }
    function Tl(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter(function(s) {
                return Object.getOwnPropertyDescriptor(t, s).enumerable
            })),
            r.push.apply(r, i)
        }
        return r
    }
    function Al(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e] != null ? arguments[e] : {};
            e % 2 ? Tl(Object(r), !0).forEach(function(i) {
                Tf(t, i, r[i])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Tl(Object(r)).forEach(function(i) {
                Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(r, i))
            })
        }
        return t
    }
    function Rl(t, e) {
        return Of(t) || Lf(t, e) || Ll(t, e) || Df()
    }
    function ge(t) {
        return Af(t) || Rf(t) || Ll(t) || Ff()
    }
    function Af(t) {
        if (Array.isArray(t))
            return Ds(t)
    }
    function Of(t) {
        if (Array.isArray(t))
            return t
    }
    function Rf(t) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(t))
            return Array.from(t)
    }
    function Lf(t, e) {
        if (!(typeof Symbol == "undefined" || !(Symbol.iterator in Object(t)))) {
            var r = []
              , i = !0
              , s = !1
              , n = void 0;
            try {
                for (var o = t[Symbol.iterator](), a; !(i = (a = o.next()).done) && (r.push(a.value),
                !(e && r.length === e)); i = !0)
                    ;
            } catch (l) {
                s = !0,
                n = l
            } finally {
                try {
                    !i && o.return != null && o.return()
                } finally {
                    if (s)
                        throw n
                }
            }
            return r
        }
    }
    function Ll(t, e) {
        if (t) {
            if (typeof t == "string")
                return Ds(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            if (r === "Object" && t.constructor && (r = t.constructor.name),
            r === "Map" || r === "Set")
                return Array.from(t);
            if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                return Ds(t, e)
        }
    }
    function Ds(t, e) {
        (e == null || e > t.length) && (e = t.length);
        for (var r = 0, i = new Array(e); r < e; r++)
            i[r] = t[r];
        return i
    }
    function Ff() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    function Df() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    function Rt(t, e) {
        return Object.getOwnPropertyNames(Object(t)).reduce(function(r, i) {
            var s = Object.getOwnPropertyDescriptor(Object(t), i)
              , n = Object.getOwnPropertyDescriptor(Object(e), i);
            return Object.defineProperty(r, i, n || s)
        }, {})
    }
    function xr(t) {
        return typeof t == "string"
    }
    function Bs(t) {
        return Array.isArray(t)
    }
    function mi() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = Rt(t), r;
        return e.types !== void 0 ? r = e.types : e.split !== void 0 && (r = e.split),
        r !== void 0 && (e.types = (xr(r) || Bs(r) ? String(r) : "").split(",").map(function(i) {
            return String(i).trim()
        }).filter(function(i) {
            return /((line)|(word)|(char))/i.test(i)
        })),
        (e.absolute || e.position) && (e.absolute = e.absolute || /absolute/.test(t.position)),
        e
    }
    function qs(t) {
        var e = xr(t) || Bs(t) ? String(t) : "";
        return {
            none: !e,
            lines: /line/i.test(e),
            words: /word/i.test(e),
            chars: /char/i.test(e)
        }
    }
    function gi(t) {
        return t !== null && typeof t == "object"
    }
    function Vf(t) {
        return gi(t) && /^(1|3|11)$/.test(t.nodeType)
    }
    function If(t) {
        return typeof t == "number" && t > -1 && t % 1 === 0
    }
    function zf(t) {
        return gi(t) && If(t.length)
    }
    function Ft(t) {
        return Bs(t) ? t : t == null ? [] : zf(t) ? Array.prototype.slice.call(t) : [t]
    }
    function Ol(t) {
        var e = t;
        return xr(t) && (/^(#[a-z]\w+)$/.test(t.trim()) ? e = document.getElementById(t.trim().slice(1)) : e = document.querySelectorAll(t)),
        Ft(e).reduce(function(r, i) {
            return [].concat(ge(r), ge(Ft(i).filter(Vf)))
        }, [])
    }
    function $e(t, e, r) {
        if (!gi(t))
            return console.warn("[data.set] owner is not an object"),
            null;
        var i = t[vi] || (t[vi] = ++qf)
          , s = Be[i] || (Be[i] = {});
        return r === void 0 ? e && Object.getPrototypeOf(e) === Object.prototype && (Be[i] = Al(Al({}, s), e)) : e !== void 0 && (s[e] = r),
        r
    }
    function Lt(t, e) {
        var r = gi(t) ? t[vi] : null
          , i = r && Be[r] || {};
        return e === void 0 ? i : i[e]
    }
    function Fl(t) {
        var e = t && t[vi];
        e && (delete t[e],
        delete Be[e])
    }
    function Nf() {
        Object.keys(Be).forEach(function(t) {
            delete Be[t]
        })
    }
    function Uf() {
        Bf(Be).forEach(function(t) {
            var e = Rl(t, 2)
              , r = e[0]
              , i = e[1]
              , s = i.isRoot
              , n = i.isSplit;
            (!s || !n) && (Be[r] = null,
            delete Be[r])
        })
    }
    function jf(t) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " "
          , r = t ? String(t) : "";
        return r.trim().replace(/\s+/g, " ").split(e)
    }
    function Zf(t) {
        return t.split("")
    }
    function Hl(t) {
        return Qf.test(t)
    }
    function Jf(t) {
        return t.match(Xf) || []
    }
    function em(t) {
        return Hl(t) ? Jf(t) : Zf(t)
    }
    function tm(t) {
        return t == null ? "" : String(t)
    }
    function rm(t) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        return t = tm(t),
        t && xr(t) && !e && Hl(t) ? em(t) : t.split(e)
    }
    function zs(t, e) {
        var r = document.createElement(t);
        return e && Object.keys(e).forEach(function(i) {
            var s = e[i]
              , n = xr(s) ? s.trim() : s;
            n === null || n === "" || (i === "children" ? r.append.apply(r, ge(Ft(n))) : r.setAttribute(i, n))
        }),
        r
    }
    function im(t, e) {
        e = Rt(Us, e);
        var r = qs(e.types)
          , i = e.tagName
          , s = t.nodeValue
          , n = document.createDocumentFragment()
          , o = []
          , a = [];
        return /^\s/.test(s) && n.append(" "),
        o = jf(s).reduce(function(l, c, h, u) {
            var d, f;
            return r.chars && (f = rm(c).map(function(p) {
                var m = zs(i, {
                    class: "".concat(e.splitClass, " ").concat(e.charClass),
                    style: "display: inline-block;",
                    children: p
                });
                return $e(m, "isChar", !0),
                a = [].concat(ge(a), [m]),
                m
            })),
            r.words || r.lines ? (d = zs(i, {
                class: "".concat(e.wordClass, " ").concat(e.splitClass),
                style: "display: inline-block; ".concat(r.words && e.absolute ? "position: relative;" : ""),
                children: r.chars ? f : c
            }),
            $e(d, {
                isWord: !0,
                isWordStart: !0,
                isWordEnd: !0
            }),
            n.appendChild(d)) : f.forEach(function(p) {
                n.appendChild(p)
            }),
            h < u.length - 1 && n.append(" "),
            r.words ? l.concat(d) : l
        }, []),
        /\s$/.test(s) && n.append(" "),
        t.replaceWith(n),
        {
            words: o,
            chars: a
        }
    }
    function $l(t, e) {
        var r = t.nodeType
          , i = {
            words: [],
            chars: []
        };
        if (!/(1|3|11)/.test(r))
            return i;
        if (r === 3 && /\S/.test(t.nodeValue))
            return im(t, e);
        var s = Ft(t.childNodes);
        if (s.length && ($e(t, "isSplit", !0),
        !Lt(t).isRoot)) {
            t.style.display = "inline-block",
            t.style.position = "relative";
            var n = t.nextSibling
              , o = t.previousSibling
              , a = t.textContent || ""
              , l = n ? n.textContent : " "
              , c = o ? o.textContent : " ";
            $e(t, {
                isWordEnd: /\s$/.test(a) || /^\s/.test(l),
                isWordStart: /^\s/.test(a) || /\s$/.test(c)
            })
        }
        return s.reduce(function(h, u) {
            var d = $l(u, e)
              , f = d.words
              , p = d.chars;
            return {
                words: [].concat(ge(h.words), ge(f)),
                chars: [].concat(ge(h.chars), ge(p))
            }
        }, i)
    }
    function sm(t, e, r, i) {
        if (!r.absolute)
            return {
                top: e ? t.offsetTop : null
            };
        var s = t.offsetParent
          , n = Rl(i, 2)
          , o = n[0]
          , a = n[1]
          , l = 0
          , c = 0;
        if (s && s !== document.body) {
            var h = s.getBoundingClientRect();
            l = h.x + o,
            c = h.y + a
        }
        var u = t.getBoundingClientRect()
          , d = u.width
          , f = u.height
          , p = u.x
          , m = u.y
          , v = m + a - c
          , w = p + o - l;
        return {
            width: d,
            height: f,
            top: v,
            left: w
        }
    }
    function Yl(t) {
        Lt(t).isWord ? (Fl(t),
        t.replaceWith.apply(t, ge(t.childNodes))) : Ft(t.children).forEach(function(e) {
            return Yl(e)
        })
    }
    function om(t, e, r) {
        var i = qs(e.types), s = e.tagName, n = t.getElementsByTagName("*"), o = [], a = [], l = null, c, h, u, d = [], f = t.parentElement, p = t.nextElementSibling, m = nm(), v = window.getComputedStyle(t), w = v.textAlign, C = parseFloat(v.fontSize), g = C * .2;
        return e.absolute && (u = {
            left: t.offsetLeft,
            top: t.offsetTop,
            width: t.offsetWidth
        },
        h = t.offsetWidth,
        c = t.offsetHeight,
        $e(t, {
            cssWidth: t.style.width,
            cssHeight: t.style.height
        })),
        Ft(n).forEach(function(b) {
            var y = b.parentElement === t
              , E = sm(b, y, e, r)
              , S = E.width
              , L = E.height
              , D = E.top
              , F = E.left;
            /^br$/i.test(b.nodeName) || (i.lines && y && ((l === null || D - l >= g) && (l = D,
            o.push(a = [])),
            a.push(b)),
            e.absolute && $e(b, {
                top: D,
                left: F,
                width: S,
                height: L
            }))
        }),
        f && f.removeChild(t),
        i.lines && (d = o.map(function(b) {
            var y = zs(s, {
                class: "".concat(e.splitClass, " ").concat(e.lineClass),
                style: "display: block; text-align: ".concat(w, "; width: 100%;")
            });
            $e(y, "isLine", !0);
            var E = {
                height: 0,
                top: 1e4
            };
            return m.appendChild(y),
            b.forEach(function(S, L, D) {
                var F = Lt(S)
                  , T = F.isWordEnd
                  , z = F.top
                  , I = F.height
                  , k = D[L + 1];
                E.height = Math.max(E.height, I),
                E.top = Math.min(E.top, z),
                y.appendChild(S),
                T && Lt(k).isWordStart && y.append(" ")
            }),
            e.absolute && $e(y, {
                height: E.height,
                top: E.top
            }),
            y
        }),
        i.words || Yl(m),
        t.replaceChildren(m)),
        e.absolute && (t.style.width = "".concat(t.style.width || h, "px"),
        t.style.height = "".concat(c, "px"),
        Ft(n).forEach(function(b) {
            var y = Lt(b)
              , E = y.isLine
              , S = y.top
              , L = y.left
              , D = y.width
              , F = y.height
              , T = Lt(b.parentElement)
              , z = !E && T.isLine;
            b.style.top = "".concat(z ? S - T.top : S, "px"),
            b.style.left = E ? "".concat(u.left, "px") : "".concat(L - (z ? u.left : 0), "px"),
            b.style.height = "".concat(F, "px"),
            b.style.width = E ? "".concat(u.width, "px") : "".concat(D, "px"),
            b.style.position = "absolute"
        })),
        f && (p ? f.insertBefore(t, p) : f.appendChild(t)),
        d
    }
    var Bf, vi, Be, qf, Ns, Dl, Vl, Il, Hf, Vs, Is, $f, zl, Bl, ql, Nl, Ul, jl, Yf, Wf, Gf, Xf, Kf, Qf, Us, nm, er, js, Wl = R( () => {
        (function() {
            function t() {
                for (var i = arguments.length, s = 0; s < i; s++) {
                    var n = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                    n.nodeType === 1 || n.nodeType === 11 ? this.appendChild(n) : this.appendChild(document.createTextNode(String(n)))
                }
            }
            function e() {
                for (; this.lastChild; )
                    this.removeChild(this.lastChild);
                arguments.length && this.append.apply(this, arguments)
            }
            function r() {
                for (var i = this.parentNode, s = arguments.length, n = new Array(s), o = 0; o < s; o++)
                    n[o] = arguments[o];
                var a = n.length;
                if (i)
                    for (a || i.removeChild(this); a--; ) {
                        var l = n[a];
                        typeof l != "object" ? l = this.ownerDocument.createTextNode(l) : l.parentNode && l.parentNode.removeChild(l),
                        a ? i.insertBefore(this.previousSibling, l) : i.replaceChild(l, this)
                    }
            }
            typeof Element != "undefined" && (Element.prototype.append || (Element.prototype.append = t,
            DocumentFragment.prototype.append = t),
            Element.prototype.replaceChildren || (Element.prototype.replaceChildren = e,
            DocumentFragment.prototype.replaceChildren = e),
            Element.prototype.replaceWith || (Element.prototype.replaceWith = r,
            DocumentFragment.prototype.replaceWith = r))
        }
        )();
        Bf = Object.entries,
        vi = "_splittype",
        Be = {},
        qf = 0;
        Ns = "\\ud800-\\udfff",
        Dl = "\\u0300-\\u036f\\ufe20-\\ufe23",
        Vl = "\\u20d0-\\u20f0",
        Il = "\\ufe0e\\ufe0f",
        Hf = "[".concat(Ns, "]"),
        Vs = "[".concat(Dl).concat(Vl, "]"),
        Is = "\\ud83c[\\udffb-\\udfff]",
        $f = "(?:".concat(Vs, "|").concat(Is, ")"),
        zl = "[^".concat(Ns, "]"),
        Bl = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        ql = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        Nl = "\\u200d",
        Ul = "".concat($f, "?"),
        jl = "[".concat(Il, "]?"),
        Yf = "(?:" + Nl + "(?:" + [zl, Bl, ql].join("|") + ")" + jl + Ul + ")*",
        Wf = jl + Ul + Yf,
        Gf = "(?:".concat(["".concat(zl).concat(Vs, "?"), Vs, Bl, ql, Hf].join("|"), `
)`),
        Xf = RegExp("".concat(Is, "(?=").concat(Is, ")|").concat(Gf).concat(Wf), "g"),
        Kf = [Nl, Ns, Dl, Vl, Il],
        Qf = RegExp("[".concat(Kf.join(""), "]"));
        Us = {
            splitClass: "",
            lineClass: "line",
            wordClass: "word",
            charClass: "char",
            types: ["lines", "words", "chars"],
            absolute: !1,
            tagName: "div"
        };
        nm = function() {
            return document.createDocumentFragment()
        }
        ;
        er = Rt(Us, {}),
        js = function() {
            kl(t, null, [{
                key: "clearData",
                value: function() {
                    Nf()
                }
            }, {
                key: "setDefaults",
                value: function(r) {
                    return er = Rt(er, mi(r)),
                    Us
                }
            }, {
                key: "revert",
                value: function(r) {
                    Ol(r).forEach(function(i) {
                        var s = Lt(i)
                          , n = s.isSplit
                          , o = s.html
                          , a = s.cssWidth
                          , l = s.cssHeight;
                        n && (i.innerHTML = o,
                        i.style.width = a || "",
                        i.style.height = l || "",
                        Fl(i))
                    })
                }
            }, {
                key: "create",
                value: function(r, i) {
                    return new t(r,i)
                }
            }, {
                key: "data",
                get: function() {
                    return Be
                }
            }, {
                key: "defaults",
                get: function() {
                    return er
                },
                set: function(r) {
                    er = Rt(er, mi(r))
                }
            }]);
            function t(e, r) {
                kf(this, t),
                this.isSplit = !1,
                this.settings = Rt(er, mi(r)),
                this.elements = Ol(e),
                this.split()
            }
            return kl(t, [{
                key: "split",
                value: function(r) {
                    var i = this;
                    this.revert(),
                    this.elements.forEach(function(o) {
                        $e(o, "html", o.innerHTML)
                    }),
                    this.lines = [],
                    this.words = [],
                    this.chars = [];
                    var s = [window.pageXOffset, window.pageYOffset];
                    r !== void 0 && (this.settings = Rt(this.settings, mi(r)));
                    var n = qs(this.settings.types);
                    n.none || (this.elements.forEach(function(o) {
                        $e(o, "isRoot", !0);
                        var a = $l(o, i.settings)
                          , l = a.words
                          , c = a.chars;
                        i.words = [].concat(ge(i.words), ge(l)),
                        i.chars = [].concat(ge(i.chars), ge(c))
                    }),
                    this.elements.forEach(function(o) {
                        if (n.lines || i.settings.absolute) {
                            var a = om(o, i.settings, s);
                            i.lines = [].concat(ge(i.lines), ge(a))
                        }
                    }),
                    this.isSplit = !0,
                    window.scrollTo(s[0], s[1]),
                    Uf())
                }
            }, {
                key: "revert",
                value: function() {
                    this.isSplit && (this.lines = null,
                    this.words = null,
                    this.chars = null,
                    this.isSplit = !1),
                    t.revert(this.elements)
                }
            }]),
            t
        }()
    }
    );
    function Dt(t) {
        let e = t[0]
          , r = t[1]
          , i = t[2];
        return Math.sqrt(e * e + r * r + i * i)
    }
    function bi(t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t
    }
    function Gl(t, e, r, i) {
        return t[0] = e,
        t[1] = r,
        t[2] = i,
        t
    }
    function Hs(t, e, r) {
        return t[0] = e[0] + r[0],
        t[1] = e[1] + r[1],
        t[2] = e[2] + r[2],
        t
    }
    function $s(t, e, r) {
        return t[0] = e[0] - r[0],
        t[1] = e[1] - r[1],
        t[2] = e[2] - r[2],
        t
    }
    function Xl(t, e, r) {
        return t[0] = e[0] * r[0],
        t[1] = e[1] * r[1],
        t[2] = e[2] * r[2],
        t
    }
    function Kl(t, e, r) {
        return t[0] = e[0] / r[0],
        t[1] = e[1] / r[1],
        t[2] = e[2] / r[2],
        t
    }
    function _i(t, e, r) {
        return t[0] = e[0] * r,
        t[1] = e[1] * r,
        t[2] = e[2] * r,
        t
    }
    function Ql(t, e) {
        let r = e[0] - t[0]
          , i = e[1] - t[1]
          , s = e[2] - t[2];
        return Math.sqrt(r * r + i * i + s * s)
    }
    function Zl(t, e) {
        let r = e[0] - t[0]
          , i = e[1] - t[1]
          , s = e[2] - t[2];
        return r * r + i * i + s * s
    }
    function Ys(t) {
        let e = t[0]
          , r = t[1]
          , i = t[2];
        return e * e + r * r + i * i
    }
    function Jl(t, e) {
        return t[0] = -e[0],
        t[1] = -e[1],
        t[2] = -e[2],
        t
    }
    function ec(t, e) {
        return t[0] = 1 / e[0],
        t[1] = 1 / e[1],
        t[2] = 1 / e[2],
        t
    }
    function wi(t, e) {
        let r = e[0]
          , i = e[1]
          , s = e[2]
          , n = r * r + i * i + s * s;
        return n > 0 && (n = 1 / Math.sqrt(n)),
        t[0] = e[0] * n,
        t[1] = e[1] * n,
        t[2] = e[2] * n,
        t
    }
    function Ws(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
    }
    function Gs(t, e, r) {
        let i = e[0]
          , s = e[1]
          , n = e[2]
          , o = r[0]
          , a = r[1]
          , l = r[2];
        return t[0] = s * l - n * a,
        t[1] = n * o - i * l,
        t[2] = i * a - s * o,
        t
    }
    function tc(t, e, r, i) {
        let s = e[0]
          , n = e[1]
          , o = e[2];
        return t[0] = s + i * (r[0] - s),
        t[1] = n + i * (r[1] - n),
        t[2] = o + i * (r[2] - o),
        t
    }
    function rc(t, e, r) {
        let i = e[0]
          , s = e[1]
          , n = e[2]
          , o = r[3] * i + r[7] * s + r[11] * n + r[15];
        return o = o || 1,
        t[0] = (r[0] * i + r[4] * s + r[8] * n + r[12]) / o,
        t[1] = (r[1] * i + r[5] * s + r[9] * n + r[13]) / o,
        t[2] = (r[2] * i + r[6] * s + r[10] * n + r[14]) / o,
        t
    }
    function ic(t, e, r) {
        let i = e[0]
          , s = e[1]
          , n = e[2]
          , o = r[3] * i + r[7] * s + r[11] * n + r[15];
        return o = o || 1,
        t[0] = (r[0] * i + r[4] * s + r[8] * n) / o,
        t[1] = (r[1] * i + r[5] * s + r[9] * n) / o,
        t[2] = (r[2] * i + r[6] * s + r[10] * n) / o,
        t
    }
    function sc(t, e, r) {
        let i = e[0]
          , s = e[1]
          , n = e[2];
        return t[0] = i * r[0] + s * r[3] + n * r[6],
        t[1] = i * r[1] + s * r[4] + n * r[7],
        t[2] = i * r[2] + s * r[5] + n * r[8],
        t
    }
    function nc(t, e, r) {
        let i = e[0]
          , s = e[1]
          , n = e[2]
          , o = r[0]
          , a = r[1]
          , l = r[2]
          , c = r[3]
          , h = a * n - l * s
          , u = l * i - o * n
          , d = o * s - a * i
          , f = a * d - l * u
          , p = l * h - o * d
          , m = o * u - a * h
          , v = c * 2;
        return h *= v,
        u *= v,
        d *= v,
        f *= 2,
        p *= 2,
        m *= 2,
        t[0] = i + h + f,
        t[1] = s + u + p,
        t[2] = n + d + m,
        t
    }
    function ac(t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2]
    }
    var oc, Xs = R( () => {
        oc = function() {
            let t = [0, 0, 0]
              , e = [0, 0, 0];
            return function(r, i) {
                bi(t, r),
                bi(e, i),
                wi(t, t),
                wi(e, e);
                let s = Ws(t, e);
                return s > 1 ? 0 : s < -1 ? Math.PI : Math.acos(s)
            }
        }()
    }
    );
    var ye, yi = R( () => {
        Xs();
        ye = class t extends Array {
            constructor(e=0, r=e, i=e) {
                return super(e, r, i),
                this
            }
            get x() {
                return this[0]
            }
            get y() {
                return this[1]
            }
            get z() {
                return this[2]
            }
            set x(e) {
                this[0] = e
            }
            set y(e) {
                this[1] = e
            }
            set z(e) {
                this[2] = e
            }
            set(e, r=e, i=e) {
                return e.length ? this.copy(e) : (Gl(this, e, r, i),
                this)
            }
            copy(e) {
                return bi(this, e),
                this
            }
            add(e, r) {
                return r ? Hs(this, e, r) : Hs(this, this, e),
                this
            }
            sub(e, r) {
                return r ? $s(this, e, r) : $s(this, this, e),
                this
            }
            multiply(e) {
                return e.length ? Xl(this, this, e) : _i(this, this, e),
                this
            }
            divide(e) {
                return e.length ? Kl(this, this, e) : _i(this, this, 1 / e),
                this
            }
            inverse(e=this) {
                return ec(this, e),
                this
            }
            len() {
                return Dt(this)
            }
            distance(e) {
                return e ? Ql(this, e) : Dt(this)
            }
            squaredLen() {
                return Ys(this)
            }
            squaredDistance(e) {
                return e ? Zl(this, e) : Ys(this)
            }
            negate(e=this) {
                return Jl(this, e),
                this
            }
            cross(e, r) {
                return r ? Gs(this, e, r) : Gs(this, this, e),
                this
            }
            scale(e) {
                return _i(this, this, e),
                this
            }
            normalize() {
                return wi(this, this),
                this
            }
            dot(e) {
                return Ws(this, e)
            }
            equals(e) {
                return ac(this, e)
            }
            applyMatrix3(e) {
                return sc(this, this, e),
                this
            }
            applyMatrix4(e) {
                return rc(this, this, e),
                this
            }
            scaleRotateMatrix4(e) {
                return ic(this, this, e),
                this
            }
            applyQuaternion(e) {
                return nc(this, this, e),
                this
            }
            angle(e) {
                return oc(this, e)
            }
            lerp(e, r) {
                return tc(this, this, e, r),
                this
            }
            clone() {
                return new t(this[0],this[1],this[2])
            }
            fromArray(e, r=0) {
                return this[0] = e[r],
                this[1] = e[r + 1],
                this[2] = e[r + 2],
                this
            }
            toArray(e=[], r=0) {
                return e[r] = this[0],
                e[r + 1] = this[1],
                e[r + 2] = this[2],
                e
            }
            transformDirection(e) {
                let r = this[0]
                  , i = this[1]
                  , s = this[2];
                return this[0] = e[0] * r + e[4] * i + e[8] * s,
                this[1] = e[1] * r + e[5] * i + e[9] * s,
                this[2] = e[2] * r + e[6] * i + e[10] * s,
                this.normalize()
            }
        }
    }
    );
    var cc, am, lm, hc, xi, uc = R( () => {
        yi();
        cc = new ye,
        am = 1,
        lm = 1,
        hc = !1,
        xi = class {
            constructor(e, r={}) {
                e.canvas || console.error("gl not passed as first argument to Geometry"),
                this.gl = e,
                this.attributes = r,
                this.id = am++,
                this.VAOs = {},
                this.drawRange = {
                    start: 0,
                    count: 0
                },
                this.instancedCount = 0,
                this.gl.renderer.bindVertexArray(null),
                this.gl.renderer.currentGeometry = null,
                this.glState = this.gl.renderer.state;
                for (let i in r)
                    this.addAttribute(i, r[i])
            }
            addAttribute(e, r) {
                if (this.attributes[e] = r,
                r.id = lm++,
                r.size = r.size || 1,
                r.type = r.type || (r.data.constructor === Float32Array ? this.gl.FLOAT : r.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT),
                r.target = e === "index" ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER,
                r.normalized = r.normalized || !1,
                r.stride = r.stride || 0,
                r.offset = r.offset || 0,
                r.count = r.count || (r.stride ? r.data.byteLength / r.stride : r.data.length / r.size),
                r.divisor = r.instanced || 0,
                r.needsUpdate = !1,
                r.usage = r.usage || this.gl.STATIC_DRAW,
                r.buffer || this.updateAttribute(r),
                r.divisor) {
                    if (this.isInstanced = !0,
                    this.instancedCount && this.instancedCount !== r.count * r.divisor)
                        return console.warn("geometry has multiple instanced buffers of different length"),
                        this.instancedCount = Math.min(this.instancedCount, r.count * r.divisor);
                    this.instancedCount = r.count * r.divisor
                } else
                    e === "index" ? this.drawRange.count = r.count : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, r.count))
            }
            updateAttribute(e) {
                let r = !e.buffer;
                r && (e.buffer = this.gl.createBuffer()),
                this.glState.boundBuffer !== e.buffer && (this.gl.bindBuffer(e.target, e.buffer),
                this.glState.boundBuffer = e.buffer),
                r ? this.gl.bufferData(e.target, e.data, e.usage) : this.gl.bufferSubData(e.target, 0, e.data),
                e.needsUpdate = !1
            }
            setIndex(e) {
                this.addAttribute("index", e)
            }
            setDrawRange(e, r) {
                this.drawRange.start = e,
                this.drawRange.count = r
            }
            setInstancedCount(e) {
                this.instancedCount = e
            }
            createVAO(e) {
                this.VAOs[e.attributeOrder] = this.gl.renderer.createVertexArray(),
                this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),
                this.bindAttributes(e)
            }
            bindAttributes(e) {
                e.attributeLocations.forEach( (r, {name: i, type: s}) => {
                    if (!this.attributes[i]) {
                        console.warn(`active attribute ${i} not being supplied`);
                        return
                    }
                    let n = this.attributes[i];
                    this.gl.bindBuffer(n.target, n.buffer),
                    this.glState.boundBuffer = n.buffer;
                    let o = 1;
                    s === 35674 && (o = 2),
                    s === 35675 && (o = 3),
                    s === 35676 && (o = 4);
                    let a = n.size / o
                      , l = o === 1 ? 0 : o * o * 4
                      , c = o === 1 ? 0 : o * 4;
                    for (let h = 0; h < o; h++)
                        this.gl.vertexAttribPointer(r + h, a, n.type, n.normalized, n.stride + l, n.offset + h * c),
                        this.gl.enableVertexAttribArray(r + h),
                        this.gl.renderer.vertexAttribDivisor(r + h, n.divisor)
                }
                ),
                this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer)
            }
            draw({program: e, mode: r=this.gl.TRIANGLES}) {
                var s;
                this.gl.renderer.currentGeometry !== `${this.id}_${e.attributeOrder}` && (this.VAOs[e.attributeOrder] || this.createVAO(e),
                this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),
                this.gl.renderer.currentGeometry = `${this.id}_${e.attributeOrder}`),
                e.attributeLocations.forEach( (n, {name: o}) => {
                    let a = this.attributes[o];
                    a.needsUpdate && this.updateAttribute(a)
                }
                );
                let i = 2;
                ((s = this.attributes.index) == null ? void 0 : s.type) === this.gl.UNSIGNED_INT && (i = 4),
                this.isInstanced ? this.attributes.index ? this.gl.renderer.drawElementsInstanced(r, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * i, this.instancedCount) : this.gl.renderer.drawArraysInstanced(r, this.drawRange.start, this.drawRange.count, this.instancedCount) : this.attributes.index ? this.gl.drawElements(r, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * i) : this.gl.drawArrays(r, this.drawRange.start, this.drawRange.count)
            }
            getPosition() {
                let e = this.attributes.position;
                if (e.data)
                    return e;
                if (!hc)
                    return console.warn("No position buffer data found to compute bounds"),
                    hc = !0
            }
            computeBoundingBox(e) {
                e || (e = this.getPosition());
                let r = e.data
                  , i = e.size;
                this.bounds || (this.bounds = {
                    min: new ye,
                    max: new ye,
                    center: new ye,
                    scale: new ye,
                    radius: 1 / 0
                });
                let s = this.bounds.min
                  , n = this.bounds.max
                  , o = this.bounds.center
                  , a = this.bounds.scale;
                s.set(1 / 0),
                n.set(-1 / 0);
                for (let l = 0, c = r.length; l < c; l += i) {
                    let h = r[l]
                      , u = r[l + 1]
                      , d = r[l + 2];
                    s.x = Math.min(h, s.x),
                    s.y = Math.min(u, s.y),
                    s.z = Math.min(d, s.z),
                    n.x = Math.max(h, n.x),
                    n.y = Math.max(u, n.y),
                    n.z = Math.max(d, n.z)
                }
                a.sub(n, s),
                o.add(s, n).divide(2)
            }
            computeBoundingSphere(e) {
                e || (e = this.getPosition());
                let r = e.data
                  , i = e.size;
                this.bounds || this.computeBoundingBox(e);
                let s = 0;
                for (let n = 0, o = r.length; n < o; n += i)
                    cc.fromArray(r, n),
                    s = Math.max(s, this.bounds.center.squaredDistance(cc));
                this.bounds.radius = Math.sqrt(s)
            }
            remove() {
                for (let e in this.VAOs)
                    this.gl.renderer.deleteVertexArray(this.VAOs[e]),
                    delete this.VAOs[e];
                for (let e in this.attributes)
                    this.gl.deleteBuffer(this.attributes[e].buffer),
                    delete this.attributes[e]
            }
        }
    }
    );
    function Ks(t, e, r, i) {
        i = i.length ? hm(i) : i;
        let s = t.renderer.state.uniformLocations.get(r);
        if (i.length)
            if (s === void 0 || s.length !== i.length)
                t.renderer.state.uniformLocations.set(r, i.slice(0));
            else {
                if (um(s, i))
                    return;
                s.set ? s.set(i) : dm(s, i),
                t.renderer.state.uniformLocations.set(r, s)
            }
        else {
            if (s === i)
                return;
            t.renderer.state.uniformLocations.set(r, i)
        }
        switch (e) {
        case 5126:
            return i.length ? t.uniform1fv(r, i) : t.uniform1f(r, i);
        case 35664:
            return t.uniform2fv(r, i);
        case 35665:
            return t.uniform3fv(r, i);
        case 35666:
            return t.uniform4fv(r, i);
        case 35670:
        case 5124:
        case 35678:
        case 36306:
        case 35680:
            return i.length ? t.uniform1iv(r, i) : t.uniform1i(r, i);
        case 35671:
        case 35667:
            return t.uniform2iv(r, i);
        case 35672:
        case 35668:
            return t.uniform3iv(r, i);
        case 35673:
        case 35669:
            return t.uniform4iv(r, i);
        case 35674:
            return t.uniformMatrix2fv(r, !1, i);
        case 35675:
            return t.uniformMatrix3fv(r, !1, i);
        case 35676:
            return t.uniformMatrix4fv(r, !1, i)
        }
    }
    function pc(t) {
        let e = t.split(`
`);
        for (let r = 0; r < e.length; r++)
            e[r] = r + 1 + ": " + e[r];
        return e.join(`
`)
    }
    function hm(t) {
        let e = t.length
          , r = t[0].length;
        if (r === void 0)
            return t;
        let i = e * r
          , s = dc[i];
        s || (dc[i] = s = new Float32Array(i));
        for (let n = 0; n < e; n++)
            s.set(t[n], n * r);
        return s
    }
    function um(t, e) {
        if (t.length !== e.length)
            return !1;
        for (let r = 0, i = t.length; r < i; r++)
            if (t[r] !== e[r])
                return !1;
        return !0
    }
    function dm(t, e) {
        for (let r = 0, i = t.length; r < i; r++)
            t[r] = e[r]
    }
    function fc(t) {
        Qs > 100 || (console.warn(t),
        Qs++,
        Qs > 100 && console.warn("More than 100 program warnings - stopping logs."))
    }
    var cm, dc, xe, Qs, mc = R( () => {
        cm = 1,
        dc = {},
        xe = class {
            constructor(e, {vertex: r, fragment: i, uniforms: s={}, transparent: n=!1, cullFace: o=e.BACK, frontFace: a=e.CCW, depthTest: l=!0, depthWrite: c=!0, depthFunc: h=e.LEQUAL}={}) {
                e.canvas || console.error("gl not passed as first argument to Program"),
                this.gl = e,
                this.uniforms = s,
                this.id = cm++,
                r || console.warn("vertex shader not supplied"),
                i || console.warn("fragment shader not supplied"),
                this.transparent = n,
                this.cullFace = o,
                this.frontFace = a,
                this.depthTest = l,
                this.depthWrite = c,
                this.depthFunc = h,
                this.blendFunc = {},
                this.blendEquation = {},
                this.transparent && !this.blendFunc.src && (this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)),
                this.vertexShader = e.createShader(e.VERTEX_SHADER),
                this.fragmentShader = e.createShader(e.FRAGMENT_SHADER),
                this.program = e.createProgram(),
                e.attachShader(this.program, this.vertexShader),
                e.attachShader(this.program, this.fragmentShader),
                this.setShaders({
                    vertex: r,
                    fragment: i
                })
            }
            setShaders({vertex: e, fragment: r}) {
                if (e && (this.gl.shaderSource(this.vertexShader, e),
                this.gl.compileShader(this.vertexShader),
                this.gl.getShaderInfoLog(this.vertexShader) !== "" && console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${pc(e)}`)),
                r && (this.gl.shaderSource(this.fragmentShader, r),
                this.gl.compileShader(this.fragmentShader),
                this.gl.getShaderInfoLog(this.fragmentShader) !== "" && console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${pc(r)}`)),
                this.gl.linkProgram(this.program),
                !this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS))
                    return console.warn(this.gl.getProgramInfoLog(this.program));
                this.uniformLocations = new Map;
                let i = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS);
                for (let o = 0; o < i; o++) {
                    let a = this.gl.getActiveUniform(this.program, o);
                    this.uniformLocations.set(a, this.gl.getUniformLocation(this.program, a.name));
                    let l = a.name.match(/(\w+)/g);
                    a.uniformName = l[0],
                    a.nameComponents = l.slice(1)
                }
                this.attributeLocations = new Map;
                let s = []
                  , n = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES);
                for (let o = 0; o < n; o++) {
                    let a = this.gl.getActiveAttrib(this.program, o)
                      , l = this.gl.getAttribLocation(this.program, a.name);
                    l !== -1 && (s[l] = a.name,
                    this.attributeLocations.set(a, l))
                }
                this.attributeOrder = s.join("")
            }
            setBlendFunc(e, r, i, s) {
                this.blendFunc.src = e,
                this.blendFunc.dst = r,
                this.blendFunc.srcAlpha = i,
                this.blendFunc.dstAlpha = s,
                e && (this.transparent = !0)
            }
            setBlendEquation(e, r) {
                this.blendEquation.modeRGB = e,
                this.blendEquation.modeAlpha = r
            }
            applyState() {
                this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST),
                this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE),
                this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND),
                this.cullFace && this.gl.renderer.setCullFace(this.cullFace),
                this.gl.renderer.setFrontFace(this.frontFace),
                this.gl.renderer.setDepthMask(this.depthWrite),
                this.gl.renderer.setDepthFunc(this.depthFunc),
                this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha),
                this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha)
            }
            use({flipFaces: e=!1}={}) {
                let r = -1;
                this.gl.renderer.state.currentProgram === this.id || (this.gl.useProgram(this.program),
                this.gl.renderer.state.currentProgram = this.id),
                this.uniformLocations.forEach( (s, n) => {
                    let o = this.uniforms[n.uniformName];
                    for (let a of n.nameComponents) {
                        if (!o)
                            break;
                        if (a in o)
                            o = o[a];
                        else {
                            if (Array.isArray(o.value))
                                break;
                            o = void 0;
                            break
                        }
                    }
                    if (!o)
                        return fc(`Active uniform ${n.name} has not been supplied`);
                    if (o && o.value === void 0)
                        return fc(`${n.name} uniform is missing a value parameter`);
                    if (o.value.texture)
                        return r = r + 1,
                        o.value.update(r),
                        Ks(this.gl, n.type, s, r);
                    if (o.value.length && o.value[0].texture) {
                        let a = [];
                        return o.value.forEach(l => {
                            r = r + 1,
                            l.update(r),
                            a.push(r)
                        }
                        ),
                        Ks(this.gl, n.type, s, a)
                    }
                    Ks(this.gl, n.type, s, o.value)
                }
                ),
                this.applyState(),
                e && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW)
            }
            remove() {
                this.gl.deleteProgram(this.program)
            }
        }
        ;
        Qs = 0
    }
    );
    var Zs, pm, Er, vc = R( () => {
        yi();
        Zs = new ye,
        pm = 1,
        Er = class {
            constructor({canvas: e=document.createElement("canvas"), width: r=300, height: i=150, dpr: s=1, alpha: n=!1, depth: o=!0, stencil: a=!1, antialias: l=!1, premultipliedAlpha: c=!1, preserveDrawingBuffer: h=!1, powerPreference: u="default", autoClear: d=!0, webgl: f=2}={}) {
                let p = {
                    alpha: n,
                    depth: o,
                    stencil: a,
                    antialias: l,
                    premultipliedAlpha: c,
                    preserveDrawingBuffer: h,
                    powerPreference: u
                };
                this.dpr = s,
                this.alpha = n,
                this.color = !0,
                this.depth = o,
                this.stencil = a,
                this.premultipliedAlpha = c,
                this.autoClear = d,
                this.id = pm++,
                f === 2 && (this.gl = e.getContext("webgl2", p)),
                this.isWebgl2 = !!this.gl,
                this.gl || (this.gl = e.getContext("webgl", p)),
                this.gl || console.error("unable to create webgl context"),
                this.gl.renderer = this,
                this.setSize(r, i),
                this.state = {},
                this.state.blendFunc = {
                    src: this.gl.ONE,
                    dst: this.gl.ZERO
                },
                this.state.blendEquation = {
                    modeRGB: this.gl.FUNC_ADD
                },
                this.state.cullFace = !1,
                this.state.frontFace = this.gl.CCW,
                this.state.depthMask = !0,
                this.state.depthFunc = this.gl.LEQUAL,
                this.state.premultiplyAlpha = !1,
                this.state.flipY = !1,
                this.state.unpackAlignment = 4,
                this.state.framebuffer = null,
                this.state.viewport = {
                    x: 0,
                    y: 0,
                    width: null,
                    height: null
                },
                this.state.textureUnits = [],
                this.state.activeTextureUnit = 0,
                this.state.boundBuffer = null,
                this.state.uniformLocations = new Map,
                this.state.currentProgram = null,
                this.extensions = {},
                this.isWebgl2 ? (this.getExtension("EXT_color_buffer_float"),
                this.getExtension("OES_texture_float_linear")) : (this.getExtension("OES_texture_float"),
                this.getExtension("OES_texture_float_linear"),
                this.getExtension("OES_texture_half_float"),
                this.getExtension("OES_texture_half_float_linear"),
                this.getExtension("OES_element_index_uint"),
                this.getExtension("OES_standard_derivatives"),
                this.getExtension("EXT_sRGB"),
                this.getExtension("WEBGL_depth_texture"),
                this.getExtension("WEBGL_draw_buffers")),
                this.getExtension("WEBGL_compressed_texture_astc"),
                this.getExtension("EXT_texture_compression_bptc"),
                this.getExtension("WEBGL_compressed_texture_s3tc"),
                this.getExtension("WEBGL_compressed_texture_etc1"),
                this.getExtension("WEBGL_compressed_texture_pvrtc"),
                this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
                this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE"),
                this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE"),
                this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE"),
                this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES"),
                this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES"),
                this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES"),
                this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL"),
                this.parameters = {},
                this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
            }
            setSize(e, r) {
                this.width = e,
                this.height = r,
                this.gl.canvas.width = e * this.dpr,
                this.gl.canvas.height = r * this.dpr,
                this.gl.canvas.style && Object.assign(this.gl.canvas.style, {
                    width: e + "px",
                    height: r + "px"
                })
            }
            setViewport(e, r, i=0, s=0) {
                this.state.viewport.width === e && this.state.viewport.height === r || (this.state.viewport.width = e,
                this.state.viewport.height = r,
                this.state.viewport.x = i,
                this.state.viewport.y = s,
                this.gl.viewport(i, s, e, r))
            }
            setScissor(e, r, i=0, s=0) {
                this.gl.scissor(i, s, e, r)
            }
            enable(e) {
                this.state[e] !== !0 && (this.gl.enable(e),
                this.state[e] = !0)
            }
            disable(e) {
                this.state[e] !== !1 && (this.gl.disable(e),
                this.state[e] = !1)
            }
            setBlendFunc(e, r, i, s) {
                this.state.blendFunc.src === e && this.state.blendFunc.dst === r && this.state.blendFunc.srcAlpha === i && this.state.blendFunc.dstAlpha === s || (this.state.blendFunc.src = e,
                this.state.blendFunc.dst = r,
                this.state.blendFunc.srcAlpha = i,
                this.state.blendFunc.dstAlpha = s,
                i !== void 0 ? this.gl.blendFuncSeparate(e, r, i, s) : this.gl.blendFunc(e, r))
            }
            setBlendEquation(e, r) {
                e = e || this.gl.FUNC_ADD,
                !(this.state.blendEquation.modeRGB === e && this.state.blendEquation.modeAlpha === r) && (this.state.blendEquation.modeRGB = e,
                this.state.blendEquation.modeAlpha = r,
                r !== void 0 ? this.gl.blendEquationSeparate(e, r) : this.gl.blendEquation(e))
            }
            setCullFace(e) {
                this.state.cullFace !== e && (this.state.cullFace = e,
                this.gl.cullFace(e))
            }
            setFrontFace(e) {
                this.state.frontFace !== e && (this.state.frontFace = e,
                this.gl.frontFace(e))
            }
            setDepthMask(e) {
                this.state.depthMask !== e && (this.state.depthMask = e,
                this.gl.depthMask(e))
            }
            setDepthFunc(e) {
                this.state.depthFunc !== e && (this.state.depthFunc = e,
                this.gl.depthFunc(e))
            }
            activeTexture(e) {
                this.state.activeTextureUnit !== e && (this.state.activeTextureUnit = e,
                this.gl.activeTexture(this.gl.TEXTURE0 + e))
            }
            bindFramebuffer({target: e=this.gl.FRAMEBUFFER, buffer: r=null}={}) {
                this.state.framebuffer !== r && (this.state.framebuffer = r,
                this.gl.bindFramebuffer(e, r))
            }
            getExtension(e, r, i) {
                return r && this.gl[r] ? this.gl[r].bind(this.gl) : (this.extensions[e] || (this.extensions[e] = this.gl.getExtension(e)),
                r ? this.extensions[e] ? this.extensions[e][i].bind(this.extensions[e]) : null : this.extensions[e])
            }
            sortOpaque(e, r) {
                return e.renderOrder !== r.renderOrder ? e.renderOrder - r.renderOrder : e.program.id !== r.program.id ? e.program.id - r.program.id : e.zDepth !== r.zDepth ? e.zDepth - r.zDepth : r.id - e.id
            }
            sortTransparent(e, r) {
                return e.renderOrder !== r.renderOrder ? e.renderOrder - r.renderOrder : e.zDepth !== r.zDepth ? r.zDepth - e.zDepth : r.id - e.id
            }
            sortUI(e, r) {
                return e.renderOrder !== r.renderOrder ? e.renderOrder - r.renderOrder : e.program.id !== r.program.id ? e.program.id - r.program.id : r.id - e.id
            }
            getRenderList({scene: e, camera: r, frustumCull: i, sort: s}) {
                let n = [];
                if (r && i && r.updateFrustum(),
                e.traverse(o => {
                    if (!o.visible)
                        return !0;
                    o.draw && (i && o.frustumCulled && r && !r.frustumIntersectsMesh(o) || n.push(o))
                }
                ),
                s) {
                    let o = []
                      , a = []
                      , l = [];
                    n.forEach(c => {
                        c.program.transparent ? c.program.depthTest ? a.push(c) : l.push(c) : o.push(c),
                        c.zDepth = 0,
                        !(c.renderOrder !== 0 || !c.program.depthTest || !r) && (c.worldMatrix.getTranslation(Zs),
                        Zs.applyMatrix4(r.projectionViewMatrix),
                        c.zDepth = Zs.z)
                    }
                    ),
                    o.sort(this.sortOpaque),
                    a.sort(this.sortTransparent),
                    l.sort(this.sortUI),
                    n = o.concat(a, l)
                }
                return n
            }
            render({scene: e, camera: r, target: i=null, update: s=!0, sort: n=!0, frustumCull: o=!0, clear: a}) {
                i === null ? (this.bindFramebuffer(),
                this.setViewport(this.width * this.dpr, this.height * this.dpr)) : (this.bindFramebuffer(i),
                this.setViewport(i.width, i.height)),
                (a || this.autoClear && a !== !1) && (this.depth && (!i || i.depth) && (this.enable(this.gl.DEPTH_TEST),
                this.setDepthMask(!0)),
                this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0))),
                s && e.updateMatrixWorld(),
                r && r.updateMatrixWorld(),
                this.getRenderList({
                    scene: e,
                    camera: r,
                    frustumCull: o,
                    sort: n
                }).forEach(c => {
                    c.draw({
                        camera: r
                    })
                }
                )
            }
        }
    }
    );
    function gc(t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[3],
        t
    }
    function bc(t, e, r, i, s) {
        return t[0] = e,
        t[1] = r,
        t[2] = i,
        t[3] = s,
        t
    }
    function wc(t, e) {
        let r = e[0]
          , i = e[1]
          , s = e[2]
          , n = e[3]
          , o = r * r + i * i + s * s + n * n;
        return o > 0 && (o = 1 / Math.sqrt(o)),
        t[0] = r * o,
        t[1] = i * o,
        t[2] = s * o,
        t[3] = n * o,
        t
    }
    function _c(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
    }
    var yc = R( () => {}
    );
    function xc(t) {
        return t[0] = 0,
        t[1] = 0,
        t[2] = 0,
        t[3] = 1,
        t
    }
    function Ec(t, e, r) {
        r = r * .5;
        let i = Math.sin(r);
        return t[0] = i * e[0],
        t[1] = i * e[1],
        t[2] = i * e[2],
        t[3] = Math.cos(r),
        t
    }
    function Js(t, e, r) {
        let i = e[0]
          , s = e[1]
          , n = e[2]
          , o = e[3]
          , a = r[0]
          , l = r[1]
          , c = r[2]
          , h = r[3];
        return t[0] = i * h + o * a + s * c - n * l,
        t[1] = s * h + o * l + n * a - i * c,
        t[2] = n * h + o * c + i * l - s * a,
        t[3] = o * h - i * a - s * l - n * c,
        t
    }
    function Cc(t, e, r) {
        r *= .5;
        let i = e[0]
          , s = e[1]
          , n = e[2]
          , o = e[3]
          , a = Math.sin(r)
          , l = Math.cos(r);
        return t[0] = i * l + o * a,
        t[1] = s * l + n * a,
        t[2] = n * l - s * a,
        t[3] = o * l - i * a,
        t
    }
    function Sc(t, e, r) {
        r *= .5;
        let i = e[0]
          , s = e[1]
          , n = e[2]
          , o = e[3]
          , a = Math.sin(r)
          , l = Math.cos(r);
        return t[0] = i * l - n * a,
        t[1] = s * l + o * a,
        t[2] = n * l + i * a,
        t[3] = o * l - s * a,
        t
    }
    function Pc(t, e, r) {
        r *= .5;
        let i = e[0]
          , s = e[1]
          , n = e[2]
          , o = e[3]
          , a = Math.sin(r)
          , l = Math.cos(r);
        return t[0] = i * l + s * a,
        t[1] = s * l - i * a,
        t[2] = n * l + o * a,
        t[3] = o * l - n * a,
        t
    }
    function Mc(t, e, r, i) {
        let s = e[0], n = e[1], o = e[2], a = e[3], l = r[0], c = r[1], h = r[2], u = r[3], d, f, p, m, v;
        return f = s * l + n * c + o * h + a * u,
        f < 0 && (f = -f,
        l = -l,
        c = -c,
        h = -h,
        u = -u),
        1 - f > 1e-6 ? (d = Math.acos(f),
        p = Math.sin(d),
        m = Math.sin((1 - i) * d) / p,
        v = Math.sin(i * d) / p) : (m = 1 - i,
        v = i),
        t[0] = m * s + v * l,
        t[1] = m * n + v * c,
        t[2] = m * o + v * h,
        t[3] = m * a + v * u,
        t
    }
    function kc(t, e) {
        let r = e[0]
          , i = e[1]
          , s = e[2]
          , n = e[3]
          , o = r * r + i * i + s * s + n * n
          , a = o ? 1 / o : 0;
        return t[0] = -r * a,
        t[1] = -i * a,
        t[2] = -s * a,
        t[3] = n * a,
        t
    }
    function Tc(t, e) {
        return t[0] = -e[0],
        t[1] = -e[1],
        t[2] = -e[2],
        t[3] = e[3],
        t
    }
    function Ac(t, e) {
        let r = e[0] + e[4] + e[8], i;
        if (r > 0)
            i = Math.sqrt(r + 1),
            t[3] = .5 * i,
            i = .5 / i,
            t[0] = (e[5] - e[7]) * i,
            t[1] = (e[6] - e[2]) * i,
            t[2] = (e[1] - e[3]) * i;
        else {
            let s = 0;
            e[4] > e[0] && (s = 1),
            e[8] > e[s * 3 + s] && (s = 2);
            let n = (s + 1) % 3
              , o = (s + 2) % 3;
            i = Math.sqrt(e[s * 3 + s] - e[n * 3 + n] - e[o * 3 + o] + 1),
            t[s] = .5 * i,
            i = .5 / i,
            t[3] = (e[n * 3 + o] - e[o * 3 + n]) * i,
            t[n] = (e[n * 3 + s] + e[s * 3 + n]) * i,
            t[o] = (e[o * 3 + s] + e[s * 3 + o]) * i
        }
        return t
    }
    function Oc(t, e, r="YXZ") {
        let i = Math.sin(e[0] * .5)
          , s = Math.cos(e[0] * .5)
          , n = Math.sin(e[1] * .5)
          , o = Math.cos(e[1] * .5)
          , a = Math.sin(e[2] * .5)
          , l = Math.cos(e[2] * .5);
        return r === "XYZ" ? (t[0] = i * o * l + s * n * a,
        t[1] = s * n * l - i * o * a,
        t[2] = s * o * a + i * n * l,
        t[3] = s * o * l - i * n * a) : r === "YXZ" ? (t[0] = i * o * l + s * n * a,
        t[1] = s * n * l - i * o * a,
        t[2] = s * o * a - i * n * l,
        t[3] = s * o * l + i * n * a) : r === "ZXY" ? (t[0] = i * o * l - s * n * a,
        t[1] = s * n * l + i * o * a,
        t[2] = s * o * a + i * n * l,
        t[3] = s * o * l - i * n * a) : r === "ZYX" ? (t[0] = i * o * l - s * n * a,
        t[1] = s * n * l + i * o * a,
        t[2] = s * o * a - i * n * l,
        t[3] = s * o * l + i * n * a) : r === "YZX" ? (t[0] = i * o * l + s * n * a,
        t[1] = s * n * l + i * o * a,
        t[2] = s * o * a - i * n * l,
        t[3] = s * o * l - i * n * a) : r === "XZY" && (t[0] = i * o * l - s * n * a,
        t[1] = s * n * l - i * o * a,
        t[2] = s * o * a + i * n * l,
        t[3] = s * o * l + i * n * a),
        t
    }
    var Rc, Lc, Fc, Dc, Vc = R( () => {
        yc();
        Rc = gc,
        Lc = bc,
        Fc = _c,
        Dc = wc
    }
    );
    var Ei, Ic = R( () => {
        Vc();
        Ei = class extends Array {
            constructor(e=0, r=0, i=0, s=1) {
                super(e, r, i, s),
                this.onChange = () => {}
                ,
                this._target = this;
                let n = ["0", "1", "2", "3"];
                return new Proxy(this,{
                    set(o, a) {
                        let l = Reflect.set(...arguments);
                        return l && n.includes(a) && o.onChange(),
                        l
                    }
                })
            }
            get x() {
                return this[0]
            }
            get y() {
                return this[1]
            }
            get z() {
                return this[2]
            }
            get w() {
                return this[3]
            }
            set x(e) {
                this._target[0] = e,
                this.onChange()
            }
            set y(e) {
                this._target[1] = e,
                this.onChange()
            }
            set z(e) {
                this._target[2] = e,
                this.onChange()
            }
            set w(e) {
                this._target[3] = e,
                this.onChange()
            }
            identity() {
                return xc(this._target),
                this.onChange(),
                this
            }
            set(e, r, i, s) {
                return e.length ? this.copy(e) : (Lc(this._target, e, r, i, s),
                this.onChange(),
                this)
            }
            rotateX(e) {
                return Cc(this._target, this._target, e),
                this.onChange(),
                this
            }
            rotateY(e) {
                return Sc(this._target, this._target, e),
                this.onChange(),
                this
            }
            rotateZ(e) {
                return Pc(this._target, this._target, e),
                this.onChange(),
                this
            }
            inverse(e=this._target) {
                return kc(this._target, e),
                this.onChange(),
                this
            }
            conjugate(e=this._target) {
                return Tc(this._target, e),
                this.onChange(),
                this
            }
            copy(e) {
                return Rc(this._target, e),
                this.onChange(),
                this
            }
            normalize(e=this._target) {
                return Dc(this._target, e),
                this.onChange(),
                this
            }
            multiply(e, r) {
                return r ? Js(this._target, e, r) : Js(this._target, this._target, e),
                this.onChange(),
                this
            }
            dot(e) {
                return Fc(this._target, e)
            }
            fromMatrix3(e) {
                return Ac(this._target, e),
                this.onChange(),
                this
            }
            fromEuler(e, r) {
                return Oc(this._target, e, e.order),
                r || this.onChange(),
                this
            }
            fromAxisAngle(e, r) {
                return Ec(this._target, e, r),
                this.onChange(),
                this
            }
            slerp(e, r) {
                return Mc(this._target, this._target, e, r),
                this.onChange(),
                this
            }
            fromArray(e, r=0) {
                return this._target[0] = e[r],
                this._target[1] = e[r + 1],
                this._target[2] = e[r + 2],
                this._target[3] = e[r + 3],
                this.onChange(),
                this
            }
            toArray(e=[], r=0) {
                return e[r] = this[0],
                e[r + 1] = this[1],
                e[r + 2] = this[2],
                e[r + 3] = this[3],
                e
            }
        }
    }
    );
    function zc(t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[3],
        t[4] = e[4],
        t[5] = e[5],
        t[6] = e[6],
        t[7] = e[7],
        t[8] = e[8],
        t[9] = e[9],
        t[10] = e[10],
        t[11] = e[11],
        t[12] = e[12],
        t[13] = e[13],
        t[14] = e[14],
        t[15] = e[15],
        t
    }
    function Bc(t, e, r, i, s, n, o, a, l, c, h, u, d, f, p, m, v) {
        return t[0] = e,
        t[1] = r,
        t[2] = i,
        t[3] = s,
        t[4] = n,
        t[5] = o,
        t[6] = a,
        t[7] = l,
        t[8] = c,
        t[9] = h,
        t[10] = u,
        t[11] = d,
        t[12] = f,
        t[13] = p,
        t[14] = m,
        t[15] = v,
        t
    }
    function qc(t) {
        return t[0] = 1,
        t[1] = 0,
        t[2] = 0,
        t[3] = 0,
        t[4] = 0,
        t[5] = 1,
        t[6] = 0,
        t[7] = 0,
        t[8] = 0,
        t[9] = 0,
        t[10] = 1,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        t
    }
    function Nc(t, e) {
        let r = e[0]
          , i = e[1]
          , s = e[2]
          , n = e[3]
          , o = e[4]
          , a = e[5]
          , l = e[6]
          , c = e[7]
          , h = e[8]
          , u = e[9]
          , d = e[10]
          , f = e[11]
          , p = e[12]
          , m = e[13]
          , v = e[14]
          , w = e[15]
          , C = r * a - i * o
          , g = r * l - s * o
          , b = r * c - n * o
          , y = i * l - s * a
          , E = i * c - n * a
          , S = s * c - n * l
          , L = h * m - u * p
          , D = h * v - d * p
          , F = h * w - f * p
          , T = u * v - d * m
          , z = u * w - f * m
          , I = d * w - f * v
          , k = C * I - g * z + b * T + y * F - E * D + S * L;
        return k ? (k = 1 / k,
        t[0] = (a * I - l * z + c * T) * k,
        t[1] = (s * z - i * I - n * T) * k,
        t[2] = (m * S - v * E + w * y) * k,
        t[3] = (d * E - u * S - f * y) * k,
        t[4] = (l * F - o * I - c * D) * k,
        t[5] = (r * I - s * F + n * D) * k,
        t[6] = (v * b - p * S - w * g) * k,
        t[7] = (h * S - d * b + f * g) * k,
        t[8] = (o * z - a * F + c * L) * k,
        t[9] = (i * F - r * z - n * L) * k,
        t[10] = (p * E - m * b + w * C) * k,
        t[11] = (u * b - h * E - f * C) * k,
        t[12] = (a * D - o * T - l * L) * k,
        t[13] = (r * T - i * D + s * L) * k,
        t[14] = (m * g - p * y - v * C) * k,
        t[15] = (h * y - u * g + d * C) * k,
        t) : null
    }
    function en(t) {
        let e = t[0]
          , r = t[1]
          , i = t[2]
          , s = t[3]
          , n = t[4]
          , o = t[5]
          , a = t[6]
          , l = t[7]
          , c = t[8]
          , h = t[9]
          , u = t[10]
          , d = t[11]
          , f = t[12]
          , p = t[13]
          , m = t[14]
          , v = t[15]
          , w = e * o - r * n
          , C = e * a - i * n
          , g = e * l - s * n
          , b = r * a - i * o
          , y = r * l - s * o
          , E = i * l - s * a
          , S = c * p - h * f
          , L = c * m - u * f
          , D = c * v - d * f
          , F = h * m - u * p
          , T = h * v - d * p
          , z = u * v - d * m;
        return w * z - C * T + g * F + b * D - y * L + E * S
    }
    function tn(t, e, r) {
        let i = e[0]
          , s = e[1]
          , n = e[2]
          , o = e[3]
          , a = e[4]
          , l = e[5]
          , c = e[6]
          , h = e[7]
          , u = e[8]
          , d = e[9]
          , f = e[10]
          , p = e[11]
          , m = e[12]
          , v = e[13]
          , w = e[14]
          , C = e[15]
          , g = r[0]
          , b = r[1]
          , y = r[2]
          , E = r[3];
        return t[0] = g * i + b * a + y * u + E * m,
        t[1] = g * s + b * l + y * d + E * v,
        t[2] = g * n + b * c + y * f + E * w,
        t[3] = g * o + b * h + y * p + E * C,
        g = r[4],
        b = r[5],
        y = r[6],
        E = r[7],
        t[4] = g * i + b * a + y * u + E * m,
        t[5] = g * s + b * l + y * d + E * v,
        t[6] = g * n + b * c + y * f + E * w,
        t[7] = g * o + b * h + y * p + E * C,
        g = r[8],
        b = r[9],
        y = r[10],
        E = r[11],
        t[8] = g * i + b * a + y * u + E * m,
        t[9] = g * s + b * l + y * d + E * v,
        t[10] = g * n + b * c + y * f + E * w,
        t[11] = g * o + b * h + y * p + E * C,
        g = r[12],
        b = r[13],
        y = r[14],
        E = r[15],
        t[12] = g * i + b * a + y * u + E * m,
        t[13] = g * s + b * l + y * d + E * v,
        t[14] = g * n + b * c + y * f + E * w,
        t[15] = g * o + b * h + y * p + E * C,
        t
    }
    function Uc(t, e, r) {
        let i = r[0], s = r[1], n = r[2], o, a, l, c, h, u, d, f, p, m, v, w;
        return e === t ? (t[12] = e[0] * i + e[4] * s + e[8] * n + e[12],
        t[13] = e[1] * i + e[5] * s + e[9] * n + e[13],
        t[14] = e[2] * i + e[6] * s + e[10] * n + e[14],
        t[15] = e[3] * i + e[7] * s + e[11] * n + e[15]) : (o = e[0],
        a = e[1],
        l = e[2],
        c = e[3],
        h = e[4],
        u = e[5],
        d = e[6],
        f = e[7],
        p = e[8],
        m = e[9],
        v = e[10],
        w = e[11],
        t[0] = o,
        t[1] = a,
        t[2] = l,
        t[3] = c,
        t[4] = h,
        t[5] = u,
        t[6] = d,
        t[7] = f,
        t[8] = p,
        t[9] = m,
        t[10] = v,
        t[11] = w,
        t[12] = o * i + h * s + p * n + e[12],
        t[13] = a * i + u * s + m * n + e[13],
        t[14] = l * i + d * s + v * n + e[14],
        t[15] = c * i + f * s + w * n + e[15]),
        t
    }
    function jc(t, e, r) {
        let i = r[0]
          , s = r[1]
          , n = r[2];
        return t[0] = e[0] * i,
        t[1] = e[1] * i,
        t[2] = e[2] * i,
        t[3] = e[3] * i,
        t[4] = e[4] * s,
        t[5] = e[5] * s,
        t[6] = e[6] * s,
        t[7] = e[7] * s,
        t[8] = e[8] * n,
        t[9] = e[9] * n,
        t[10] = e[10] * n,
        t[11] = e[11] * n,
        t[12] = e[12],
        t[13] = e[13],
        t[14] = e[14],
        t[15] = e[15],
        t
    }
    function Hc(t, e, r, i) {
        let s = i[0], n = i[1], o = i[2], a = Math.hypot(s, n, o), l, c, h, u, d, f, p, m, v, w, C, g, b, y, E, S, L, D, F, T, z, I, k, W;
        return Math.abs(a) < vm ? null : (a = 1 / a,
        s *= a,
        n *= a,
        o *= a,
        l = Math.sin(r),
        c = Math.cos(r),
        h = 1 - c,
        u = e[0],
        d = e[1],
        f = e[2],
        p = e[3],
        m = e[4],
        v = e[5],
        w = e[6],
        C = e[7],
        g = e[8],
        b = e[9],
        y = e[10],
        E = e[11],
        S = s * s * h + c,
        L = n * s * h + o * l,
        D = o * s * h - n * l,
        F = s * n * h - o * l,
        T = n * n * h + c,
        z = o * n * h + s * l,
        I = s * o * h + n * l,
        k = n * o * h - s * l,
        W = o * o * h + c,
        t[0] = u * S + m * L + g * D,
        t[1] = d * S + v * L + b * D,
        t[2] = f * S + w * L + y * D,
        t[3] = p * S + C * L + E * D,
        t[4] = u * F + m * T + g * z,
        t[5] = d * F + v * T + b * z,
        t[6] = f * F + w * T + y * z,
        t[7] = p * F + C * T + E * z,
        t[8] = u * I + m * k + g * W,
        t[9] = d * I + v * k + b * W,
        t[10] = f * I + w * k + y * W,
        t[11] = p * I + C * k + E * W,
        e !== t && (t[12] = e[12],
        t[13] = e[13],
        t[14] = e[14],
        t[15] = e[15]),
        t)
    }
    function $c(t, e) {
        return t[0] = e[12],
        t[1] = e[13],
        t[2] = e[14],
        t
    }
    function rn(t, e) {
        let r = e[0]
          , i = e[1]
          , s = e[2]
          , n = e[4]
          , o = e[5]
          , a = e[6]
          , l = e[8]
          , c = e[9]
          , h = e[10];
        return t[0] = Math.hypot(r, i, s),
        t[1] = Math.hypot(n, o, a),
        t[2] = Math.hypot(l, c, h),
        t
    }
    function Yc(t) {
        let e = t[0]
          , r = t[1]
          , i = t[2]
          , s = t[4]
          , n = t[5]
          , o = t[6]
          , a = t[8]
          , l = t[9]
          , c = t[10]
          , h = e * e + r * r + i * i
          , u = s * s + n * n + o * o
          , d = a * a + l * l + c * c;
        return Math.sqrt(Math.max(h, u, d))
    }
    function Wc(t, e, r, i) {
        let s = Dt([t[0], t[1], t[2]])
          , n = Dt([t[4], t[5], t[6]])
          , o = Dt([t[8], t[9], t[10]]);
        en(t) < 0 && (s = -s),
        r[0] = t[12],
        r[1] = t[13],
        r[2] = t[14];
        let l = t.slice()
          , c = 1 / s
          , h = 1 / n
          , u = 1 / o;
        l[0] *= c,
        l[1] *= c,
        l[2] *= c,
        l[4] *= h,
        l[5] *= h,
        l[6] *= h,
        l[8] *= u,
        l[9] *= u,
        l[10] *= u,
        sn(e, l),
        i[0] = s,
        i[1] = n,
        i[2] = o
    }
    function Gc(t, e, r, i) {
        let s = t
          , n = e[0]
          , o = e[1]
          , a = e[2]
          , l = e[3]
          , c = n + n
          , h = o + o
          , u = a + a
          , d = n * c
          , f = n * h
          , p = n * u
          , m = o * h
          , v = o * u
          , w = a * u
          , C = l * c
          , g = l * h
          , b = l * u
          , y = i[0]
          , E = i[1]
          , S = i[2];
        return s[0] = (1 - (m + w)) * y,
        s[1] = (f + b) * y,
        s[2] = (p - g) * y,
        s[3] = 0,
        s[4] = (f - b) * E,
        s[5] = (1 - (d + w)) * E,
        s[6] = (v + C) * E,
        s[7] = 0,
        s[8] = (p + g) * S,
        s[9] = (v - C) * S,
        s[10] = (1 - (d + m)) * S,
        s[11] = 0,
        s[12] = r[0],
        s[13] = r[1],
        s[14] = r[2],
        s[15] = 1,
        s
    }
    function Xc(t, e) {
        let r = e[0]
          , i = e[1]
          , s = e[2]
          , n = e[3]
          , o = r + r
          , a = i + i
          , l = s + s
          , c = r * o
          , h = i * o
          , u = i * a
          , d = s * o
          , f = s * a
          , p = s * l
          , m = n * o
          , v = n * a
          , w = n * l;
        return t[0] = 1 - u - p,
        t[1] = h + w,
        t[2] = d - v,
        t[3] = 0,
        t[4] = h - w,
        t[5] = 1 - c - p,
        t[6] = f + m,
        t[7] = 0,
        t[8] = d + v,
        t[9] = f - m,
        t[10] = 1 - c - u,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        t
    }
    function Kc(t, e, r, i, s) {
        let n = 1 / Math.tan(e / 2)
          , o = 1 / (i - s);
        return t[0] = n / r,
        t[1] = 0,
        t[2] = 0,
        t[3] = 0,
        t[4] = 0,
        t[5] = n,
        t[6] = 0,
        t[7] = 0,
        t[8] = 0,
        t[9] = 0,
        t[10] = (s + i) * o,
        t[11] = -1,
        t[12] = 0,
        t[13] = 0,
        t[14] = 2 * s * i * o,
        t[15] = 0,
        t
    }
    function Qc(t, e, r, i, s, n, o) {
        let a = 1 / (e - r)
          , l = 1 / (i - s)
          , c = 1 / (n - o);
        return t[0] = -2 * a,
        t[1] = 0,
        t[2] = 0,
        t[3] = 0,
        t[4] = 0,
        t[5] = -2 * l,
        t[6] = 0,
        t[7] = 0,
        t[8] = 0,
        t[9] = 0,
        t[10] = 2 * c,
        t[11] = 0,
        t[12] = (e + r) * a,
        t[13] = (s + i) * l,
        t[14] = (o + n) * c,
        t[15] = 1,
        t
    }
    function Zc(t, e, r, i) {
        let s = e[0]
          , n = e[1]
          , o = e[2]
          , a = i[0]
          , l = i[1]
          , c = i[2]
          , h = s - r[0]
          , u = n - r[1]
          , d = o - r[2]
          , f = h * h + u * u + d * d;
        f === 0 ? d = 1 : (f = 1 / Math.sqrt(f),
        h *= f,
        u *= f,
        d *= f);
        let p = l * d - c * u
          , m = c * h - a * d
          , v = a * u - l * h;
        return f = p * p + m * m + v * v,
        f === 0 && (c ? a += 1e-6 : l ? c += 1e-6 : l += 1e-6,
        p = l * d - c * u,
        m = c * h - a * d,
        v = a * u - l * h,
        f = p * p + m * m + v * v),
        f = 1 / Math.sqrt(f),
        p *= f,
        m *= f,
        v *= f,
        t[0] = p,
        t[1] = m,
        t[2] = v,
        t[3] = 0,
        t[4] = u * v - d * m,
        t[5] = d * p - h * v,
        t[6] = h * m - u * p,
        t[7] = 0,
        t[8] = h,
        t[9] = u,
        t[10] = d,
        t[11] = 0,
        t[12] = s,
        t[13] = n,
        t[14] = o,
        t[15] = 1,
        t
    }
    function nn(t, e, r) {
        return t[0] = e[0] + r[0],
        t[1] = e[1] + r[1],
        t[2] = e[2] + r[2],
        t[3] = e[3] + r[3],
        t[4] = e[4] + r[4],
        t[5] = e[5] + r[5],
        t[6] = e[6] + r[6],
        t[7] = e[7] + r[7],
        t[8] = e[8] + r[8],
        t[9] = e[9] + r[9],
        t[10] = e[10] + r[10],
        t[11] = e[11] + r[11],
        t[12] = e[12] + r[12],
        t[13] = e[13] + r[13],
        t[14] = e[14] + r[14],
        t[15] = e[15] + r[15],
        t
    }
    function on(t, e, r) {
        return t[0] = e[0] - r[0],
        t[1] = e[1] - r[1],
        t[2] = e[2] - r[2],
        t[3] = e[3] - r[3],
        t[4] = e[4] - r[4],
        t[5] = e[5] - r[5],
        t[6] = e[6] - r[6],
        t[7] = e[7] - r[7],
        t[8] = e[8] - r[8],
        t[9] = e[9] - r[9],
        t[10] = e[10] - r[10],
        t[11] = e[11] - r[11],
        t[12] = e[12] - r[12],
        t[13] = e[13] - r[13],
        t[14] = e[14] - r[14],
        t[15] = e[15] - r[15],
        t
    }
    function Jc(t, e, r) {
        return t[0] = e[0] * r,
        t[1] = e[1] * r,
        t[2] = e[2] * r,
        t[3] = e[3] * r,
        t[4] = e[4] * r,
        t[5] = e[5] * r,
        t[6] = e[6] * r,
        t[7] = e[7] * r,
        t[8] = e[8] * r,
        t[9] = e[9] * r,
        t[10] = e[10] * r,
        t[11] = e[11] * r,
        t[12] = e[12] * r,
        t[13] = e[13] * r,
        t[14] = e[14] * r,
        t[15] = e[15] * r,
        t
    }
    var vm, sn, eh = R( () => {
        Xs();
        vm = 1e-6;
        sn = function() {
            let t = [1, 1, 1];
            return function(e, r) {
                let i = t;
                rn(i, r);
                let s = 1 / i[0]
                  , n = 1 / i[1]
                  , o = 1 / i[2]
                  , a = r[0] * s
                  , l = r[1] * n
                  , c = r[2] * o
                  , h = r[4] * s
                  , u = r[5] * n
                  , d = r[6] * o
                  , f = r[8] * s
                  , p = r[9] * n
                  , m = r[10] * o
                  , v = a + u + m
                  , w = 0;
                return v > 0 ? (w = Math.sqrt(v + 1) * 2,
                e[3] = .25 * w,
                e[0] = (d - p) / w,
                e[1] = (f - c) / w,
                e[2] = (l - h) / w) : a > u && a > m ? (w = Math.sqrt(1 + a - u - m) * 2,
                e[3] = (d - p) / w,
                e[0] = .25 * w,
                e[1] = (l + h) / w,
                e[2] = (f + c) / w) : u > m ? (w = Math.sqrt(1 + u - a - m) * 2,
                e[3] = (f - c) / w,
                e[0] = (l + h) / w,
                e[1] = .25 * w,
                e[2] = (d + p) / w) : (w = Math.sqrt(1 + m - a - u) * 2,
                e[3] = (l - h) / w,
                e[0] = (f + c) / w,
                e[1] = (d + p) / w,
                e[2] = .25 * w),
                e
            }
        }()
    }
    );
    var at, Ci = R( () => {
        eh();
        at = class extends Array {
            constructor(e=1, r=0, i=0, s=0, n=0, o=1, a=0, l=0, c=0, h=0, u=1, d=0, f=0, p=0, m=0, v=1) {
                return super(e, r, i, s, n, o, a, l, c, h, u, d, f, p, m, v),
                this
            }
            get x() {
                return this[12]
            }
            get y() {
                return this[13]
            }
            get z() {
                return this[14]
            }
            get w() {
                return this[15]
            }
            set x(e) {
                this[12] = e
            }
            set y(e) {
                this[13] = e
            }
            set z(e) {
                this[14] = e
            }
            set w(e) {
                this[15] = e
            }
            set(e, r, i, s, n, o, a, l, c, h, u, d, f, p, m, v) {
                return e.length ? this.copy(e) : (Bc(this, e, r, i, s, n, o, a, l, c, h, u, d, f, p, m, v),
                this)
            }
            translate(e, r=this) {
                return Uc(this, r, e),
                this
            }
            rotate(e, r, i=this) {
                return Hc(this, i, e, r),
                this
            }
            scale(e, r=this) {
                return jc(this, r, typeof e == "number" ? [e, e, e] : e),
                this
            }
            add(e, r) {
                return r ? nn(this, e, r) : nn(this, this, e),
                this
            }
            sub(e, r) {
                return r ? on(this, e, r) : on(this, this, e),
                this
            }
            multiply(e, r) {
                return e.length ? r ? tn(this, e, r) : tn(this, this, e) : Jc(this, this, e),
                this
            }
            identity() {
                return qc(this),
                this
            }
            copy(e) {
                return zc(this, e),
                this
            }
            fromPerspective({fov: e, aspect: r, near: i, far: s}={}) {
                return Kc(this, e, r, i, s),
                this
            }
            fromOrthogonal({left: e, right: r, bottom: i, top: s, near: n, far: o}) {
                return Qc(this, e, r, i, s, n, o),
                this
            }
            fromQuaternion(e) {
                return Xc(this, e),
                this
            }
            setPosition(e) {
                return this.x = e[0],
                this.y = e[1],
                this.z = e[2],
                this
            }
            inverse(e=this) {
                return Nc(this, e),
                this
            }
            compose(e, r, i) {
                return Gc(this, e, r, i),
                this
            }
            decompose(e, r, i) {
                return Wc(this, e, r, i),
                this
            }
            getRotation(e) {
                return sn(e, this),
                this
            }
            getTranslation(e) {
                return $c(e, this),
                this
            }
            getScaling(e) {
                return rn(e, this),
                this
            }
            getMaxScaleOnAxis() {
                return Yc(this)
            }
            lookAt(e, r, i) {
                return Zc(this, e, r, i),
                this
            }
            determinant() {
                return en(this)
            }
            fromArray(e, r=0) {
                return this[0] = e[r],
                this[1] = e[r + 1],
                this[2] = e[r + 2],
                this[3] = e[r + 3],
                this[4] = e[r + 4],
                this[5] = e[r + 5],
                this[6] = e[r + 6],
                this[7] = e[r + 7],
                this[8] = e[r + 8],
                this[9] = e[r + 9],
                this[10] = e[r + 10],
                this[11] = e[r + 11],
                this[12] = e[r + 12],
                this[13] = e[r + 13],
                this[14] = e[r + 14],
                this[15] = e[r + 15],
                this
            }
            toArray(e=[], r=0) {
                return e[r] = this[0],
                e[r + 1] = this[1],
                e[r + 2] = this[2],
                e[r + 3] = this[3],
                e[r + 4] = this[4],
                e[r + 5] = this[5],
                e[r + 6] = this[6],
                e[r + 7] = this[7],
                e[r + 8] = this[8],
                e[r + 9] = this[9],
                e[r + 10] = this[10],
                e[r + 11] = this[11],
                e[r + 12] = this[12],
                e[r + 13] = this[13],
                e[r + 14] = this[14],
                e[r + 15] = this[15],
                e
            }
        }
    }
    );
    function th(t, e, r="YXZ") {
        return r === "XYZ" ? (t[1] = Math.asin(Math.min(Math.max(e[8], -1), 1)),
        Math.abs(e[8]) < .99999 ? (t[0] = Math.atan2(-e[9], e[10]),
        t[2] = Math.atan2(-e[4], e[0])) : (t[0] = Math.atan2(e[6], e[5]),
        t[2] = 0)) : r === "YXZ" ? (t[0] = Math.asin(-Math.min(Math.max(e[9], -1), 1)),
        Math.abs(e[9]) < .99999 ? (t[1] = Math.atan2(e[8], e[10]),
        t[2] = Math.atan2(e[1], e[5])) : (t[1] = Math.atan2(-e[2], e[0]),
        t[2] = 0)) : r === "ZXY" ? (t[0] = Math.asin(Math.min(Math.max(e[6], -1), 1)),
        Math.abs(e[6]) < .99999 ? (t[1] = Math.atan2(-e[2], e[10]),
        t[2] = Math.atan2(-e[4], e[5])) : (t[1] = 0,
        t[2] = Math.atan2(e[1], e[0]))) : r === "ZYX" ? (t[1] = Math.asin(-Math.min(Math.max(e[2], -1), 1)),
        Math.abs(e[2]) < .99999 ? (t[0] = Math.atan2(e[6], e[10]),
        t[2] = Math.atan2(e[1], e[0])) : (t[0] = 0,
        t[2] = Math.atan2(-e[4], e[5]))) : r === "YZX" ? (t[2] = Math.asin(Math.min(Math.max(e[1], -1), 1)),
        Math.abs(e[1]) < .99999 ? (t[0] = Math.atan2(-e[9], e[5]),
        t[1] = Math.atan2(-e[2], e[0])) : (t[0] = 0,
        t[1] = Math.atan2(e[8], e[10]))) : r === "XZY" && (t[2] = Math.asin(-Math.min(Math.max(e[4], -1), 1)),
        Math.abs(e[4]) < .99999 ? (t[0] = Math.atan2(e[6], e[5]),
        t[1] = Math.atan2(e[8], e[0])) : (t[0] = Math.atan2(-e[9], e[10]),
        t[1] = 0)),
        t
    }
    var rh = R( () => {}
    );
    var ih, Si, sh = R( () => {
        rh();
        Ci();
        ih = new at,
        Si = class extends Array {
            constructor(e=0, r=e, i=e, s="YXZ") {
                super(e, r, i),
                this.order = s,
                this.onChange = () => {}
                ,
                this._target = this;
                let n = ["0", "1", "2"];
                return new Proxy(this,{
                    set(o, a) {
                        let l = Reflect.set(...arguments);
                        return l && n.includes(a) && o.onChange(),
                        l
                    }
                })
            }
            get x() {
                return this[0]
            }
            get y() {
                return this[1]
            }
            get z() {
                return this[2]
            }
            set x(e) {
                this._target[0] = e,
                this.onChange()
            }
            set y(e) {
                this._target[1] = e,
                this.onChange()
            }
            set z(e) {
                this._target[2] = e,
                this.onChange()
            }
            set(e, r=e, i=e) {
                return e.length ? this.copy(e) : (this._target[0] = e,
                this._target[1] = r,
                this._target[2] = i,
                this.onChange(),
                this)
            }
            copy(e) {
                return this._target[0] = e[0],
                this._target[1] = e[1],
                this._target[2] = e[2],
                this.onChange(),
                this
            }
            reorder(e) {
                return this._target.order = e,
                this.onChange(),
                this
            }
            fromRotationMatrix(e, r=this.order) {
                return th(this._target, e, r),
                this.onChange(),
                this
            }
            fromQuaternion(e, r=this.order, i) {
                return ih.fromQuaternion(e),
                this._target.fromRotationMatrix(ih, r),
                i || this.onChange(),
                this
            }
            fromArray(e, r=0) {
                return this._target[0] = e[r],
                this._target[1] = e[r + 1],
                this._target[2] = e[r + 2],
                this
            }
            toArray(e=[], r=0) {
                return e[r] = this[0],
                e[r + 1] = this[1],
                e[r + 2] = this[2],
                e
            }
        }
    }
    );
    var Pi, nh = R( () => {
        yi();
        Ic();
        Ci();
        sh();
        Pi = class {
            constructor() {
                this.parent = null,
                this.children = [],
                this.visible = !0,
                this.matrix = new at,
                this.worldMatrix = new at,
                this.matrixAutoUpdate = !0,
                this.worldMatrixNeedsUpdate = !1,
                this.position = new ye,
                this.quaternion = new Ei,
                this.scale = new ye(1),
                this.rotation = new Si,
                this.up = new ye(0,1,0),
                this.rotation._target.onChange = () => this.quaternion.fromEuler(this.rotation, !0),
                this.quaternion._target.onChange = () => this.rotation.fromQuaternion(this.quaternion, void 0, !0)
            }
            setParent(e, r=!0) {
                this.parent && e !== this.parent && this.parent.removeChild(this, !1),
                this.parent = e,
                r && e && e.addChild(this, !1)
            }
            addChild(e, r=!0) {
                ~this.children.indexOf(e) || this.children.push(e),
                r && e.setParent(this, !1)
            }
            removeChild(e, r=!0) {
                ~this.children.indexOf(e) && this.children.splice(this.children.indexOf(e), 1),
                r && e.setParent(null, !1)
            }
            updateMatrixWorld(e) {
                this.matrixAutoUpdate && this.updateMatrix(),
                (this.worldMatrixNeedsUpdate || e) && (this.parent === null ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix),
                this.worldMatrixNeedsUpdate = !1,
                e = !0);
                for (let r = 0, i = this.children.length; r < i; r++)
                    this.children[r].updateMatrixWorld(e)
            }
            updateMatrix() {
                this.matrix.compose(this.quaternion, this.position, this.scale),
                this.worldMatrixNeedsUpdate = !0
            }
            traverse(e) {
                if (!e(this))
                    for (let r = 0, i = this.children.length; r < i; r++)
                        this.children[r].traverse(e)
            }
            decompose() {
                this.matrix.decompose(this.quaternion._target, this.position, this.scale),
                this.rotation.fromQuaternion(this.quaternion)
            }
            lookAt(e, r=!1) {
                r ? this.matrix.lookAt(this.position, e, this.up) : this.matrix.lookAt(e, this.position, this.up),
                this.matrix.getRotation(this.quaternion._target),
                this.rotation.fromQuaternion(this.quaternion)
            }
        }
    }
    );
    function oh(t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[4],
        t[4] = e[5],
        t[5] = e[6],
        t[6] = e[8],
        t[7] = e[9],
        t[8] = e[10],
        t
    }
    function ah(t, e) {
        let r = e[0]
          , i = e[1]
          , s = e[2]
          , n = e[3]
          , o = r + r
          , a = i + i
          , l = s + s
          , c = r * o
          , h = i * o
          , u = i * a
          , d = s * o
          , f = s * a
          , p = s * l
          , m = n * o
          , v = n * a
          , w = n * l;
        return t[0] = 1 - u - p,
        t[3] = h - w,
        t[6] = d + v,
        t[1] = h + w,
        t[4] = 1 - c - p,
        t[7] = f - m,
        t[2] = d - v,
        t[5] = f + m,
        t[8] = 1 - c - u,
        t
    }
    function lh(t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[3],
        t[4] = e[4],
        t[5] = e[5],
        t[6] = e[6],
        t[7] = e[7],
        t[8] = e[8],
        t
    }
    function ch(t, e, r, i, s, n, o, a, l, c) {
        return t[0] = e,
        t[1] = r,
        t[2] = i,
        t[3] = s,
        t[4] = n,
        t[5] = o,
        t[6] = a,
        t[7] = l,
        t[8] = c,
        t
    }
    function hh(t) {
        return t[0] = 1,
        t[1] = 0,
        t[2] = 0,
        t[3] = 0,
        t[4] = 1,
        t[5] = 0,
        t[6] = 0,
        t[7] = 0,
        t[8] = 1,
        t
    }
    function uh(t, e) {
        let r = e[0]
          , i = e[1]
          , s = e[2]
          , n = e[3]
          , o = e[4]
          , a = e[5]
          , l = e[6]
          , c = e[7]
          , h = e[8]
          , u = h * o - a * c
          , d = -h * n + a * l
          , f = c * n - o * l
          , p = r * u + i * d + s * f;
        return p ? (p = 1 / p,
        t[0] = u * p,
        t[1] = (-h * i + s * c) * p,
        t[2] = (a * i - s * o) * p,
        t[3] = d * p,
        t[4] = (h * r - s * l) * p,
        t[5] = (-a * r + s * n) * p,
        t[6] = f * p,
        t[7] = (-c * r + i * l) * p,
        t[8] = (o * r - i * n) * p,
        t) : null
    }
    function an(t, e, r) {
        let i = e[0]
          , s = e[1]
          , n = e[2]
          , o = e[3]
          , a = e[4]
          , l = e[5]
          , c = e[6]
          , h = e[7]
          , u = e[8]
          , d = r[0]
          , f = r[1]
          , p = r[2]
          , m = r[3]
          , v = r[4]
          , w = r[5]
          , C = r[6]
          , g = r[7]
          , b = r[8];
        return t[0] = d * i + f * o + p * c,
        t[1] = d * s + f * a + p * h,
        t[2] = d * n + f * l + p * u,
        t[3] = m * i + v * o + w * c,
        t[4] = m * s + v * a + w * h,
        t[5] = m * n + v * l + w * u,
        t[6] = C * i + g * o + b * c,
        t[7] = C * s + g * a + b * h,
        t[8] = C * n + g * l + b * u,
        t
    }
    function dh(t, e, r) {
        let i = e[0]
          , s = e[1]
          , n = e[2]
          , o = e[3]
          , a = e[4]
          , l = e[5]
          , c = e[6]
          , h = e[7]
          , u = e[8]
          , d = r[0]
          , f = r[1];
        return t[0] = i,
        t[1] = s,
        t[2] = n,
        t[3] = o,
        t[4] = a,
        t[5] = l,
        t[6] = d * i + f * o + c,
        t[7] = d * s + f * a + h,
        t[8] = d * n + f * l + u,
        t
    }
    function ph(t, e, r) {
        let i = e[0]
          , s = e[1]
          , n = e[2]
          , o = e[3]
          , a = e[4]
          , l = e[5]
          , c = e[6]
          , h = e[7]
          , u = e[8]
          , d = Math.sin(r)
          , f = Math.cos(r);
        return t[0] = f * i + d * o,
        t[1] = f * s + d * a,
        t[2] = f * n + d * l,
        t[3] = f * o - d * i,
        t[4] = f * a - d * s,
        t[5] = f * l - d * n,
        t[6] = c,
        t[7] = h,
        t[8] = u,
        t
    }
    function fh(t, e, r) {
        let i = r[0]
          , s = r[1];
        return t[0] = i * e[0],
        t[1] = i * e[1],
        t[2] = i * e[2],
        t[3] = s * e[3],
        t[4] = s * e[4],
        t[5] = s * e[5],
        t[6] = e[6],
        t[7] = e[7],
        t[8] = e[8],
        t
    }
    function mh(t, e) {
        let r = e[0]
          , i = e[1]
          , s = e[2]
          , n = e[3]
          , o = e[4]
          , a = e[5]
          , l = e[6]
          , c = e[7]
          , h = e[8]
          , u = e[9]
          , d = e[10]
          , f = e[11]
          , p = e[12]
          , m = e[13]
          , v = e[14]
          , w = e[15]
          , C = r * a - i * o
          , g = r * l - s * o
          , b = r * c - n * o
          , y = i * l - s * a
          , E = i * c - n * a
          , S = s * c - n * l
          , L = h * m - u * p
          , D = h * v - d * p
          , F = h * w - f * p
          , T = u * v - d * m
          , z = u * w - f * m
          , I = d * w - f * v
          , k = C * I - g * z + b * T + y * F - E * D + S * L;
        return k ? (k = 1 / k,
        t[0] = (a * I - l * z + c * T) * k,
        t[1] = (l * F - o * I - c * D) * k,
        t[2] = (o * z - a * F + c * L) * k,
        t[3] = (s * z - i * I - n * T) * k,
        t[4] = (r * I - s * F + n * D) * k,
        t[5] = (i * F - r * z - n * L) * k,
        t[6] = (m * S - v * E + w * y) * k,
        t[7] = (v * b - p * S - w * g) * k,
        t[8] = (p * E - m * b + w * C) * k,
        t) : null
    }
    var vh = R( () => {}
    );
    var Mi, gh = R( () => {
        vh();
        Mi = class extends Array {
            constructor(e=1, r=0, i=0, s=0, n=1, o=0, a=0, l=0, c=1) {
                return super(e, r, i, s, n, o, a, l, c),
                this
            }
            set(e, r, i, s, n, o, a, l, c) {
                return e.length ? this.copy(e) : (ch(this, e, r, i, s, n, o, a, l, c),
                this)
            }
            translate(e, r=this) {
                return dh(this, r, e),
                this
            }
            rotate(e, r=this) {
                return ph(this, r, e),
                this
            }
            scale(e, r=this) {
                return fh(this, r, e),
                this
            }
            multiply(e, r) {
                return r ? an(this, e, r) : an(this, this, e),
                this
            }
            identity() {
                return hh(this),
                this
            }
            copy(e) {
                return lh(this, e),
                this
            }
            fromMatrix4(e) {
                return oh(this, e),
                this
            }
            fromQuaternion(e) {
                return ah(this, e),
                this
            }
            fromBasis(e, r, i) {
                return this.set(e[0], e[1], e[2], r[0], r[1], r[2], i[0], i[1], i[2]),
                this
            }
            inverse(e=this) {
                return uh(this, e),
                this
            }
            getNormalMatrix(e) {
                return mh(this, e),
                this
            }
        }
    }
    );
    var _m, Ee, bh = R( () => {
        nh();
        gh();
        Ci();
        _m = 0,
        Ee = class extends Pi {
            constructor(e, {geometry: r, program: i, mode: s=e.TRIANGLES, frustumCulled: n=!0, renderOrder: o=0}={}) {
                super(),
                e.canvas || console.error("gl not passed as first argument to Mesh"),
                this.gl = e,
                this.id = _m++,
                this.geometry = r,
                this.program = i,
                this.mode = s,
                this.frustumCulled = n,
                this.renderOrder = o,
                this.modelViewMatrix = new at,
                this.normalMatrix = new Mi,
                this.beforeRenderCallbacks = [],
                this.afterRenderCallbacks = []
            }
            onBeforeRender(e) {
                return this.beforeRenderCallbacks.push(e),
                this
            }
            onAfterRender(e) {
                return this.afterRenderCallbacks.push(e),
                this
            }
            draw({camera: e}={}) {
                e && (this.program.uniforms.modelMatrix || Object.assign(this.program.uniforms, {
                    modelMatrix: {
                        value: null
                    },
                    viewMatrix: {
                        value: null
                    },
                    modelViewMatrix: {
                        value: null
                    },
                    normalMatrix: {
                        value: null
                    },
                    projectionMatrix: {
                        value: null
                    },
                    cameraPosition: {
                        value: null
                    }
                }),
                this.program.uniforms.projectionMatrix.value = e.projectionMatrix,
                this.program.uniforms.cameraPosition.value = e.worldPosition,
                this.program.uniforms.viewMatrix.value = e.viewMatrix,
                this.modelViewMatrix.multiply(e.viewMatrix, this.worldMatrix),
                this.normalMatrix.getNormalMatrix(this.modelViewMatrix),
                this.program.uniforms.modelMatrix.value = this.worldMatrix,
                this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix,
                this.program.uniforms.normalMatrix.value = this.normalMatrix),
                this.beforeRenderCallbacks.forEach(i => i && i({
                    mesh: this,
                    camera: e
                }));
                let r = this.program.cullFace && this.worldMatrix.determinant() < 0;
                this.program.use({
                    flipFaces: r
                }),
                this.geometry.draw({
                    mode: this.mode,
                    program: this.program
                }),
                this.afterRenderCallbacks.forEach(i => i && i({
                    mesh: this,
                    camera: e
                }))
            }
        }
    }
    );
    function _h(t) {
        return (t & t - 1) === 0
    }
    var wh, ym, lt, ln = R( () => {
        wh = new Uint8Array(4);
        ym = 1,
        lt = class {
            constructor(e, {image: r, target: i=e.TEXTURE_2D, type: s=e.UNSIGNED_BYTE, format: n=e.RGBA, internalFormat: o=n, wrapS: a=e.CLAMP_TO_EDGE, wrapT: l=e.CLAMP_TO_EDGE, generateMipmaps: c=!0, minFilter: h=c ? e.NEAREST_MIPMAP_LINEAR : e.LINEAR, magFilter: u=e.LINEAR, premultiplyAlpha: d=!1, unpackAlignment: f=4, flipY: p=i == e.TEXTURE_2D, anisotropy: m=0, level: v=0, width: w, height: C=w}={}) {
                this.gl = e,
                this.id = ym++,
                this.image = r,
                this.target = i,
                this.type = s,
                this.format = n,
                this.internalFormat = o,
                this.minFilter = h,
                this.magFilter = u,
                this.wrapS = a,
                this.wrapT = l,
                this.generateMipmaps = c,
                this.premultiplyAlpha = d,
                this.unpackAlignment = f,
                this.flipY = p,
                this.anisotropy = Math.min(m, this.gl.renderer.parameters.maxAnisotropy),
                this.level = v,
                this.width = w,
                this.height = C,
                this.texture = this.gl.createTexture(),
                this.store = {
                    image: null
                },
                this.glState = this.gl.renderer.state,
                this.state = {},
                this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR,
                this.state.magFilter = this.gl.LINEAR,
                this.state.wrapS = this.gl.REPEAT,
                this.state.wrapT = this.gl.REPEAT,
                this.state.anisotropy = 0
            }
            bind() {
                this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id && (this.gl.bindTexture(this.target, this.texture),
                this.glState.textureUnits[this.glState.activeTextureUnit] = this.id)
            }
            update(e=0) {
                let r = !(this.image === this.store.image && !this.needsUpdate);
                if ((r || this.glState.textureUnits[e] !== this.id) && (this.gl.renderer.activeTexture(e),
                this.bind()),
                !!r) {
                    if (this.needsUpdate = !1,
                    this.flipY !== this.glState.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY),
                    this.glState.flipY = this.flipY),
                    this.premultiplyAlpha !== this.glState.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha),
                    this.glState.premultiplyAlpha = this.premultiplyAlpha),
                    this.unpackAlignment !== this.glState.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment),
                    this.glState.unpackAlignment = this.unpackAlignment),
                    this.minFilter !== this.state.minFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter),
                    this.state.minFilter = this.minFilter),
                    this.magFilter !== this.state.magFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter),
                    this.state.magFilter = this.magFilter),
                    this.wrapS !== this.state.wrapS && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS),
                    this.state.wrapS = this.wrapS),
                    this.wrapT !== this.state.wrapT && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT),
                    this.state.wrapT = this.wrapT),
                    this.anisotropy && this.anisotropy !== this.state.anisotropy && (this.gl.texParameterf(this.target, this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropy),
                    this.state.anisotropy = this.anisotropy),
                    this.image) {
                        if (this.image.width && (this.width = this.image.width,
                        this.height = this.image.height),
                        this.target === this.gl.TEXTURE_CUBE_MAP)
                            for (let i = 0; i < 6; i++)
                                this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, this.level, this.internalFormat, this.format, this.type, this.image[i]);
                        else if (ArrayBuffer.isView(this.image))
                            this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
                        else if (this.image.isCompressedTexture)
                            for (let i = 0; i < this.image.length; i++)
                                this.gl.compressedTexImage2D(this.target, i, this.internalFormat, this.image[i].width, this.image[i].height, 0, this.image[i].data);
                        else
                            this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
                        this.generateMipmaps && (!this.gl.renderer.isWebgl2 && (!_h(this.image.width) || !_h(this.image.height)) ? (this.generateMipmaps = !1,
                        this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE,
                        this.minFilter = this.gl.LINEAR) : this.gl.generateMipmap(this.target)),
                        this.onUpdate && this.onUpdate()
                    } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
                        for (let i = 0; i < 6; i++)
                            this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, wh);
                    else
                        this.width ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null) : this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, wh);
                    this.store.image = this.image
                }
            }
        }
    }
    );
    var Ct, yh = R( () => {
        ln();
        Ct = class {
            constructor(e, {width: r=e.canvas.width, height: i=e.canvas.height, target: s=e.FRAMEBUFFER, color: n=1, depth: o=!0, stencil: a=!1, depthTexture: l=!1, wrapS: c=e.CLAMP_TO_EDGE, wrapT: h=e.CLAMP_TO_EDGE, minFilter: u=e.LINEAR, magFilter: d=u, type: f=e.UNSIGNED_BYTE, format: p=e.RGBA, internalFormat: m=p, unpackAlignment: v, premultiplyAlpha: w}={}) {
                this.gl = e,
                this.width = r,
                this.height = i,
                this.depth = o,
                this.buffer = this.gl.createFramebuffer(),
                this.target = s,
                this.gl.renderer.bindFramebuffer(this),
                this.textures = [];
                let C = [];
                for (let g = 0; g < n; g++)
                    this.textures.push(new lt(e,{
                        width: r,
                        height: i,
                        wrapS: c,
                        wrapT: h,
                        minFilter: u,
                        magFilter: d,
                        type: f,
                        format: p,
                        internalFormat: m,
                        unpackAlignment: v,
                        premultiplyAlpha: w,
                        flipY: !1,
                        generateMipmaps: !1
                    })),
                    this.textures[g].update(),
                    this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + g, this.gl.TEXTURE_2D, this.textures[g].texture, 0),
                    C.push(this.gl.COLOR_ATTACHMENT0 + g);
                C.length > 1 && this.gl.renderer.drawBuffers(C),
                this.texture = this.textures[0],
                l && (this.gl.renderer.isWebgl2 || this.gl.renderer.getExtension("WEBGL_depth_texture")) ? (this.depthTexture = new lt(e,{
                    width: r,
                    height: i,
                    minFilter: this.gl.NEAREST,
                    magFilter: this.gl.NEAREST,
                    format: this.gl.DEPTH_COMPONENT,
                    internalFormat: e.renderer.isWebgl2 ? this.gl.DEPTH_COMPONENT16 : this.gl.DEPTH_COMPONENT,
                    type: this.gl.UNSIGNED_INT
                }),
                this.depthTexture.update(),
                this.gl.framebufferTexture2D(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0)) : (o && !a && (this.depthBuffer = this.gl.createRenderbuffer(),
                this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer),
                this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, r, i),
                this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.depthBuffer)),
                a && !o && (this.stencilBuffer = this.gl.createRenderbuffer(),
                this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer),
                this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, r, i),
                this.gl.framebufferRenderbuffer(this.target, this.gl.STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.stencilBuffer)),
                o && a && (this.depthStencilBuffer = this.gl.createRenderbuffer(),
                this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer),
                this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, r, i),
                this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.depthStencilBuffer))),
                this.gl.renderer.bindFramebuffer({
                    target: this.target
                })
            }
            setSize(e, r) {
                if (!(this.width === e && this.height === r)) {
                    this.width = e,
                    this.height = r,
                    this.gl.renderer.bindFramebuffer(this);
                    for (let i = 0; i < this.textures.length; i++)
                        this.textures[i].width = e,
                        this.textures[i].height = r,
                        this.textures[i].needsUpdate = !0,
                        this.textures[i].update(),
                        this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + i, this.gl.TEXTURE_2D, this.textures[i].texture, 0);
                    this.depthTexture ? (this.depthTexture.width = e,
                    this.depthTexture.height = r,
                    this.depthTexture.needsUpdate = !0,
                    this.depthTexture.update(),
                    this.gl.framebufferTexture2D(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0)) : (this.depthBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer),
                    this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, e, r)),
                    this.stencilBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer),
                    this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, e, r)),
                    this.depthStencilBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer),
                    this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, e, r))),
                    this.gl.renderer.bindFramebuffer({
                        target: this.target
                    })
                }
            }
        }
    }
    );
    function Eh(t) {
        t.length === 4 && (t = t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]);
        let e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        return e || console.warn(`Unable to convert hex string ${t} to rgb values`),
        [parseInt(e[1], 16) / 255, parseInt(e[2], 16) / 255, parseInt(e[3], 16) / 255]
    }
    function xm(t) {
        return t = parseInt(t),
        [(t >> 16 & 255) / 255, (t >> 8 & 255) / 255, (t & 255) / 255]
    }
    function cn(t) {
        return t === void 0 ? [0, 0, 0] : arguments.length === 3 ? arguments : isNaN(t) ? t[0] === "#" ? Eh(t) : xh[t.toLowerCase()] ? Eh(xh[t.toLowerCase()]) : (console.warn("Color format not recognised"),
        [0, 0, 0]) : xm(t)
    }
    var xh, Ch = R( () => {
        xh = {
            black: "#000000",
            white: "#ffffff",
            red: "#ff0000",
            green: "#00ff00",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            cyan: "#00ffff",
            yellow: "#ffff00",
            orange: "#ff8000"
        }
    }
    );
    var Vt, Sh = R( () => {
        Ch();
        Vt = class extends Array {
            constructor(e) {
                return Array.isArray(e) ? super(...e) : super(...cn(...arguments))
            }
            get r() {
                return this[0]
            }
            get g() {
                return this[1]
            }
            get b() {
                return this[2]
            }
            set r(e) {
                this[0] = e
            }
            set g(e) {
                this[1] = e
            }
            set b(e) {
                this[2] = e
            }
            set(e) {
                return Array.isArray(e) ? this.copy(e) : this.copy(cn(...arguments))
            }
            copy(e) {
                return this[0] = e[0],
                this[1] = e[1],
                this[2] = e[2],
                this
            }
        }
    }
    );
    function Ph(t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t
    }
    function Mh(t, e, r) {
        return t[0] = e,
        t[1] = r,
        t
    }
    function hn(t, e, r) {
        return t[0] = e[0] + r[0],
        t[1] = e[1] + r[1],
        t
    }
    function un(t, e, r) {
        return t[0] = e[0] - r[0],
        t[1] = e[1] - r[1],
        t
    }
    function kh(t, e, r) {
        return t[0] = e[0] * r[0],
        t[1] = e[1] * r[1],
        t
    }
    function Th(t, e, r) {
        return t[0] = e[0] / r[0],
        t[1] = e[1] / r[1],
        t
    }
    function ki(t, e, r) {
        return t[0] = e[0] * r,
        t[1] = e[1] * r,
        t
    }
    function Ah(t, e) {
        var r = e[0] - t[0]
          , i = e[1] - t[1];
        return Math.sqrt(r * r + i * i)
    }
    function Oh(t, e) {
        var r = e[0] - t[0]
          , i = e[1] - t[1];
        return r * r + i * i
    }
    function dn(t) {
        var e = t[0]
          , r = t[1];
        return Math.sqrt(e * e + r * r)
    }
    function Rh(t) {
        var e = t[0]
          , r = t[1];
        return e * e + r * r
    }
    function Lh(t, e) {
        return t[0] = -e[0],
        t[1] = -e[1],
        t
    }
    function Fh(t, e) {
        return t[0] = 1 / e[0],
        t[1] = 1 / e[1],
        t
    }
    function Dh(t, e) {
        var r = e[0]
          , i = e[1]
          , s = r * r + i * i;
        return s > 0 && (s = 1 / Math.sqrt(s)),
        t[0] = e[0] * s,
        t[1] = e[1] * s,
        t
    }
    function Vh(t, e) {
        return t[0] * e[0] + t[1] * e[1]
    }
    function pn(t, e) {
        return t[0] * e[1] - t[1] * e[0]
    }
    function Ih(t, e, r, i) {
        var s = e[0]
          , n = e[1];
        return t[0] = s + i * (r[0] - s),
        t[1] = n + i * (r[1] - n),
        t
    }
    function zh(t, e, r) {
        var i = e[0]
          , s = e[1];
        return t[0] = r[0] * i + r[3] * s + r[6],
        t[1] = r[1] * i + r[4] * s + r[7],
        t
    }
    function Bh(t, e, r) {
        let i = e[0]
          , s = e[1];
        return t[0] = r[0] * i + r[4] * s + r[12],
        t[1] = r[1] * i + r[5] * s + r[13],
        t
    }
    function qh(t, e) {
        return t[0] === e[0] && t[1] === e[1]
    }
    var Nh = R( () => {}
    );
    var Ye, Uh = R( () => {
        Nh();
        Ye = class t extends Array {
            constructor(e=0, r=e) {
                return super(e, r),
                this
            }
            get x() {
                return this[0]
            }
            get y() {
                return this[1]
            }
            set x(e) {
                this[0] = e
            }
            set y(e) {
                this[1] = e
            }
            set(e, r=e) {
                return e.length ? this.copy(e) : (Mh(this, e, r),
                this)
            }
            copy(e) {
                return Ph(this, e),
                this
            }
            add(e, r) {
                return r ? hn(this, e, r) : hn(this, this, e),
                this
            }
            sub(e, r) {
                return r ? un(this, e, r) : un(this, this, e),
                this
            }
            multiply(e) {
                return e.length ? kh(this, this, e) : ki(this, this, e),
                this
            }
            divide(e) {
                return e.length ? Th(this, this, e) : ki(this, this, 1 / e),
                this
            }
            inverse(e=this) {
                return Fh(this, e),
                this
            }
            len() {
                return dn(this)
            }
            distance(e) {
                return e ? Ah(this, e) : dn(this)
            }
            squaredLen() {
                return this.squaredDistance()
            }
            squaredDistance(e) {
                return e ? Oh(this, e) : Rh(this)
            }
            negate(e=this) {
                return Lh(this, e),
                this
            }
            cross(e, r) {
                return r ? pn(e, r) : pn(this, e)
            }
            scale(e) {
                return ki(this, this, e),
                this
            }
            normalize() {
                return Dh(this, this),
                this
            }
            dot(e) {
                return Vh(this, e)
            }
            equals(e) {
                return qh(this, e)
            }
            applyMatrix3(e) {
                return zh(this, this, e),
                this
            }
            applyMatrix4(e) {
                return Bh(this, this, e),
                this
            }
            lerp(e, r) {
                return Ih(this, this, e, r),
                this
            }
            clone() {
                return new t(this[0],this[1])
            }
            fromArray(e, r=0) {
                return this[0] = e[r],
                this[1] = e[r + 1],
                this
            }
            toArray(e=[], r=0) {
                return e[r] = this[0],
                e[r + 1] = this[1],
                e
            }
        }
    }
    );
    var Cr, jh = R( () => {
        uc();
        Cr = class extends xi {
            constructor(e, {attributes: r={}}={}) {
                Object.assign(r, {
                    position: {
                        size: 2,
                        data: new Float32Array([-1, -1, 3, -1, -1, 3])
                    },
                    uv: {
                        size: 2,
                        data: new Float32Array([0, 0, 2, 0, 0, 2])
                    }
                }),
                super(e, r)
            }
        }
    }
    );
    var Ti = R( () => {
        mc();
        vc();
        bh();
        ln();
        yh();
        Sh();
        Uh();
        jh()
    }
    );
    var Sm, ct, Hh = R( () => {
        Sm = `# version 300 es

precision highp float;

in vec2 position;
in vec2 uv;

out vec2 vUv;
out vec2 vL;
out vec2 vR;
out vec2 vT;
out vec2 vB;

uniform vec2 texelSize;

void main () {
  vUv = uv;

  vL = vUv - vec2(texelSize.x, 0.0);
  vR = vUv + vec2(texelSize.x, 0.0);
  vT = vUv + vec2(0.0, texelSize.y);
  vB = vUv - vec2(0.0, texelSize.y);

  gl_Position = vec4(position, 0.0, 1.0);
}
`,
        ct = Sm
    }
    );
    var Pm, $h, Yh = R( () => {
        Pm = `# version 300 es

precision mediump float;
precision mediump sampler2D;

in highp vec2 vUv;

uniform sampler2D uTexture;
uniform float uClearValue;

out vec4 outColor;

void main () {
  outColor = uClearValue * texture(uTexture, vUv);
}
`,
        $h = Pm
    }
    );
    var Mm, Wh, Gh = R( () => {
        Mm = `# version 300 es

precision highp float;
precision highp sampler2D;

in vec2 vUv;

uniform sampler2D uTarget;
uniform float aspectRatio;
uniform vec3 uColor;
uniform vec2 uPointer;
uniform float uRadius;

out vec4 outColor;

void main () {
  vec2 p = vUv - uPointer.xy;

  p.x *= aspectRatio;

  vec3 splat = exp(-dot(p, p) / uRadius) * uColor;
  vec3 base = texture(uTarget, vUv).xyz;

  outColor = vec4(base + splat, 1.0);
}
`,
        Wh = Mm
    }
    );
    var km, Xh, Kh = R( () => {
        km = `# version 300 es

precision highp float;
precision highp sampler2D;

in vec2 vUv;

uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 texelSize;
uniform vec2 dyeTexelSize;
uniform float dt;
uniform float dissipation;

out vec4 outColor;

vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
  vec2 st = uv / tsize - 0.5;
  vec2 iuv = floor(st);
  vec2 fuv = fract(st);
  vec4 a = texture(sam, (iuv + vec2(0.5, 0.5)) * tsize);
  vec4 b = texture(sam, (iuv + vec2(1.5, 0.5)) * tsize);
  vec4 c = texture(sam, (iuv + vec2(0.5, 1.5)) * tsize);
  vec4 d = texture(sam, (iuv + vec2(1.5, 1.5)) * tsize);

  return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
}

void main () {
  vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
  outColor = dissipation * bilerp(uSource, coord, dyeTexelSize);
  outColor.a = 1.0;
}
`,
        Xh = km
    }
    );
    var Tm, Qh, Zh = R( () => {
        Tm = `# version 300 es

precision highp float;
precision highp sampler2D;

in vec2 vUv;

uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 texelSize;
uniform float dt;
uniform float uDissipation;

out vec4 outColor;

void main () {
  vec2 coord = vUv - dt * texture(uVelocity, vUv).xy * texelSize;

  outColor = uDissipation * texture(uSource, coord);
  outColor.a = 1.0;
}
`,
        Qh = Tm
    }
    );
    var Am, Jh, eu = R( () => {
        Am = `# version 300 es

precision mediump float;
precision mediump sampler2D;

in highp vec2 vUv;
in highp vec2 vL;
in highp vec2 vR;
in highp vec2 vT;
in highp vec2 vB;

uniform sampler2D uVelocity;

out vec4 outColor;

void main () {
  float L = texture(uVelocity, vL).x;
  float R = texture(uVelocity, vR).x;
  float T = texture(uVelocity, vT).y;
  float B = texture(uVelocity, vB).y;
  vec2 C = texture(uVelocity, vUv).xy;

  if (vL.x < 0.0) { L = -C.x; }
  if (vR.x > 1.0) { R = -C.x; }
  if (vT.y > 1.0) { T = -C.y; }
  if (vB.y < 0.0) { B = -C.y; }

  float div = 0.5 * (R - L + T - B);

  outColor = vec4(div, 0.0, 0.0, 1.0);
}
`,
        Jh = Am
    }
    );
    var Om, tu, ru = R( () => {
        Om = `# version 300 es

precision mediump float;
precision mediump sampler2D;

in highp vec2 vUv;
in highp vec2 vL;
in highp vec2 vR;
in highp vec2 vT;
in highp vec2 vB;

uniform sampler2D uVelocity;

out vec4 outColor;

void main () {
  float L = texture(uVelocity, vL).y;
  float R = texture(uVelocity, vR).y;
  float T = texture(uVelocity, vT).x;
  float B = texture(uVelocity, vB).x;

  float vorticity = R - L - T + B;

  // Multiplying 'vorticity' by 0.5 looks to be diminishing the swirl effect
  outColor = vec4(vorticity, 0.0, 0.0, 1.0);
}
`,
        tu = Om
    }
    );
    var Rm, iu, su = R( () => {
        Rm = `# version 300 es

precision highp float;
precision highp sampler2D;

in vec2 vUv;
in vec2 vL;
in vec2 vR;
in vec2 vT;
in vec2 vB;

uniform sampler2D uVelocity;
uniform sampler2D uCurl;
uniform float uCurlValue;
uniform float dt;

uniform float uSprinkle;

out vec4 outColor;

void main () {
  float L = texture(uCurl, vL).x;
  float R = texture(uCurl, vR).x;
  float T = texture(uCurl, vT).x;
  float B = texture(uCurl, vB).x;
  float C = texture(uCurl, vUv).x;

  vec2 force = vec2(abs(T) - abs(B), abs(R) - abs(L)) * 0.5;

  force /= length(force) + uSprinkle;
  force *= uCurlValue * C;
  force.y *= -1.0;

  vec2 vel = texture(uVelocity, vUv).xy;

  outColor = vec4(vel + force * dt, 0.0, 1.0);
}
`,
        iu = Rm
    }
    );
    var Lm, nu, ou = R( () => {
        Lm = `# version 300 es

precision mediump float;
precision mediump sampler2D;

in highp vec2 vUv;
in highp vec2 vL;
in highp vec2 vR;
in highp vec2 vT;
in highp vec2 vB;

uniform sampler2D uPressure;
uniform sampler2D uDivergence;

out vec4 outColor;

void main () {
  float L = texture(uPressure, vL).x;
  float R = texture(uPressure, vR).x;
  float T = texture(uPressure, vT).x;
  float B = texture(uPressure, vB).x;
  float C = texture(uPressure, vUv).x;

  float divergence = texture(uDivergence, vUv).x;
  float pressure = (L + R + B + T - divergence) * 0.25;

  outColor = vec4(pressure, 0.0, 0.0, 1.0);
}
`,
        nu = Lm
    }
    );
    var Fm, au, lu = R( () => {
        Fm = `# version 300 es

precision mediump float;
precision mediump sampler2D;

in highp vec2 vUv;
in highp vec2 vL;
in highp vec2 vR;
in highp vec2 vT;
in highp vec2 vB;

uniform sampler2D uPressure;
uniform sampler2D uVelocity;

out vec4 outColor;

void main () {
  float L = texture(uPressure, vL).x;
  float R = texture(uPressure, vR).x;
  float T = texture(uPressure, vT).x;
  float B = texture(uPressure, vB).x;
  vec2 velocity = texture(uVelocity, vUv).xy;

  velocity.xy -= vec2(R - L, T - B);

  outColor = vec4(velocity, 0.0, 1.0);
}
`,
        au = Fm
    }
    );
    var Sr, cu = R( () => {
        Ti();
        Hh();
        Yh();
        Gh();
        Kh();
        Zh();
        eu();
        ru();
        su();
        ou();
        lu();
        fn();
        Sr = class {
            constructor(e) {
                this.gl = e,
                this.params = {
                    simRes: 128,
                    dyeRes: 512,
                    mouseVelocityForce: 5,
                    sprinkle: 1,
                    swirl: 1,
                    densityDissipation: .939,
                    velocityDissipation: .975,
                    pressureDissipation: .8,
                    curlStrength: 4,
                    radius: .06
                },
                this.lastMouse = new Ye,
                this.texelSize = {
                    value: new Ye(1 / this.params.simRes)
                },
                this.splats = [],
                this.createRenderTargets(),
                this.createPrograms()
            }
            createRenderTargets() {
                this.supportLinearFiltering = this.gl.renderer.extensions.OES_texture_float_linear;
                let e = this.supportLinearFiltering ? this.gl.LINEAR : this.gl.NEAREST
                  , r = this.getSupportedFormat(this.gl, this.gl.RGBA16F, this.gl.RGBA, this.gl.HALF_FLOAT)
                  , i = this.getSupportedFormat(this.gl, this.gl.RG16F, this.gl.RG, this.gl.HALF_FLOAT)
                  , s = this.getSupportedFormat(this.gl, this.gl.R16F, this.gl.RED, this.gl.HALF_FLOAT);
                this.renderTargets = {
                    density: this.createDoubleFBO(this.gl, {
                        width: this.params.dyeRes,
                        height: this.params.dyeRes,
                        type: this.gl.HALF_FLOAT,
                        format: r == null ? void 0 : r.format,
                        internalFormat: r == null ? void 0 : r.internalFormat,
                        minFilter: e,
                        depth: !1
                    }),
                    velocity: this.createDoubleFBO(this.gl, {
                        width: this.params.simRes,
                        height: this.params.simRes,
                        type: this.gl.HALF_FLOAT,
                        format: i == null ? void 0 : i.format,
                        internalFormat: i == null ? void 0 : i.internalFormat,
                        minFilter: e,
                        depth: !1
                    }),
                    pressure: this.createDoubleFBO(this.gl, {
                        width: this.params.simRes,
                        height: this.params.simRes,
                        type: this.gl.HALF_FLOAT,
                        format: s == null ? void 0 : s.format,
                        internalFormat: s == null ? void 0 : s.internalFormat,
                        minFilter: this.gl.NEAREST,
                        depth: !1
                    }),
                    divergence: new Ct(this.gl,{
                        width: this.params.simRes,
                        height: this.params.simRes,
                        type: this.gl.HALF_FLOAT,
                        format: s == null ? void 0 : s.format,
                        internalFormat: s == null ? void 0 : s.internalFormat,
                        minFilter: this.gl.NEAREST,
                        depth: !1
                    }),
                    curl: new Ct(this.gl,{
                        width: this.params.simRes,
                        height: this.params.simRes,
                        type: this.gl.HALF_FLOAT,
                        format: s == null ? void 0 : s.format,
                        internalFormat: s == null ? void 0 : s.internalFormat,
                        minFilter: this.gl.NEAREST,
                        depth: !1
                    })
                }
            }
            createDoubleFBO(e, {width: r, height: i, wrapS: s, wrapT: n, minFilter: o=e.LINEAR, magFilter: a=o, type: l, format: c, internalFormat: h, depth: u}={}) {
                let d = {
                    width: r,
                    height: i,
                    wrapS: s,
                    wrapT: n,
                    minFilter: o,
                    magFilter: a,
                    type: l,
                    format: c,
                    internalFormat: h,
                    depth: u
                }
                  , f = {
                    read: new Ct(e,d),
                    write: new Ct(e,d),
                    swap: () => {
                        let p = f.read;
                        f.read = f.write,
                        f.write = p
                    }
                };
                return f
            }
            getSupportedFormat(e, r, i, s) {
                if (!this.supportRenderTextureFormat(e, r, i, s))
                    switch (r) {
                    case e.R16F:
                        return this.getSupportedFormat(e, e.RG16F, e.RG, s);
                    case e.RG16F:
                        return this.getSupportedFormat(e, e.RGBA16F, e.RGBA, s);
                    default:
                        return null
                    }
                return {
                    internalFormat: r,
                    format: i
                }
            }
            supportRenderTextureFormat(e, r, i, s) {
                let n = e.createTexture();
                e.bindTexture(e.TEXTURE_2D, n),
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST),
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST),
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
                e.texImage2D(e.TEXTURE_2D, 0, r, 4, 4, 0, i, s, null);
                let o = e.createFramebuffer();
                return e.bindFramebuffer(e.FRAMEBUFFER, o),
                e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, n, 0),
                e.checkFramebufferStatus(e.FRAMEBUFFER) == e.FRAMEBUFFER_COMPLETE
            }
            createPrograms() {
                this.meshes = {
                    clear: new Ee(this.gl,{
                        geometry: Ce.triangle,
                        program: new xe(this.gl,{
                            vertex: ct,
                            fragment: $h,
                            uniforms: {
                                texelSize: this.texelSize,
                                uTexture: {
                                    value: null
                                },
                                uClearValue: {
                                    value: this.params.pressureDissipation
                                }
                            },
                            depthTest: !1,
                            depthWrite: !1
                        })
                    }),
                    splat: new Ee(this.gl,{
                        geometry: Ce.triangle,
                        program: new xe(this.gl,{
                            vertex: ct,
                            fragment: Wh,
                            uniforms: {
                                texelSize: this.texelSize,
                                uTarget: {
                                    value: null
                                },
                                aspectRatio: {
                                    value: this.gl.renderer.width / this.gl.renderer.height
                                },
                                uColor: {
                                    value: new Vt
                                },
                                uPointer: {
                                    value: new Ye
                                },
                                uRadius: {
                                    value: this.params.radius / 100
                                }
                            },
                            depthTest: !1,
                            depthWrite: !1
                        })
                    }),
                    advection: new Ee(this.gl,{
                        geometry: Ce.triangle,
                        program: new xe(this.gl,{
                            vertex: ct,
                            fragment: this.supportLinearFiltering ? Qh : Xh,
                            uniforms: {
                                texelSize: this.texelSize,
                                dyeTexelSize: {
                                    value: new Ye(1 / this.params.dyeRes)
                                },
                                uVelocity: {
                                    value: null
                                },
                                uSource: {
                                    value: null
                                },
                                dt: {
                                    value: .016
                                },
                                uDissipation: {
                                    value: 1
                                }
                            },
                            depthTest: !1,
                            depthWrite: !1
                        })
                    }),
                    divergence: new Ee(this.gl,{
                        geometry: Ce.triangle,
                        program: new xe(this.gl,{
                            vertex: ct,
                            fragment: Jh,
                            uniforms: {
                                texelSize: this.texelSize,
                                uVelocity: {
                                    value: null
                                }
                            },
                            depthTest: !1,
                            depthWrite: !1
                        })
                    }),
                    curl: new Ee(this.gl,{
                        geometry: Ce.triangle,
                        program: new xe(this.gl,{
                            vertex: ct,
                            fragment: tu,
                            uniforms: {
                                texelSize: this.texelSize,
                                uVelocity: {
                                    value: null
                                }
                            },
                            depthTest: !1,
                            depthWrite: !1
                        })
                    }),
                    vorticity: new Ee(this.gl,{
                        geometry: Ce.triangle,
                        program: new xe(this.gl,{
                            vertex: ct,
                            fragment: iu,
                            uniforms: {
                                texelSize: this.texelSize,
                                uVelocity: {
                                    value: null
                                },
                                uCurl: {
                                    value: null
                                },
                                uCurlValue: {
                                    value: this.params.curlStrength
                                },
                                dt: {
                                    value: .016
                                },
                                uSprinkle: {
                                    value: Math.max(30 * (1 - this.params.sprinkle), 1e-4)
                                }
                            },
                            depthTest: !1,
                            depthWrite: !1
                        })
                    }),
                    pressure: new Ee(this.gl,{
                        geometry: Ce.triangle,
                        program: new xe(this.gl,{
                            vertex: ct,
                            fragment: nu,
                            uniforms: {
                                texelSize: this.texelSize,
                                uPressure: {
                                    value: null
                                },
                                uDivergence: {
                                    value: null
                                }
                            },
                            depthTest: !1,
                            depthWrite: !1
                        })
                    }),
                    gradientSubtract: new Ee(this.gl,{
                        geometry: Ce.triangle,
                        program: new xe(this.gl,{
                            vertex: ct,
                            fragment: au,
                            uniforms: {
                                texelSize: this.texelSize,
                                uPressure: {
                                    value: null
                                },
                                uVelocity: {
                                    value: null
                                }
                            },
                            depthTest: !1,
                            depthWrite: !1
                        })
                    })
                }
            }
            onPointerMove(e, r) {
                this.lastMouse.isInit || (this.lastMouse.isInit = !0,
                this.lastMouse.set(e, r));
                let i = e - this.lastMouse.x
                  , s = r - this.lastMouse.y;
                this.lastMouse.set(e, r),
                (Math.abs(i) || Math.abs(s)) && this.splats.push({
                    x: e / this.gl.renderer.width,
                    y: 1 - r / this.gl.renderer.height,
                    dx: i * this.params.mouseVelocityForce,
                    dy: -s * this.params.mouseVelocityForce
                })
            }
            splat({x: e, y: r, dx: i, dy: s}) {
                this.meshes.splat.program.uniforms.uTarget.value = this.renderTargets.velocity.read.texture,
                this.meshes.splat.program.uniforms.uPointer.value.set(e, r),
                this.meshes.splat.program.uniforms.uColor.value.set(i, s, 1),
                this.gl.renderer.render({
                    scene: this.meshes.splat,
                    target: this.renderTargets.velocity.write,
                    sort: !1,
                    update: !1
                }),
                this.renderTargets.velocity.swap(),
                this.meshes.splat.program.uniforms.uTarget.value = this.renderTargets.density.read.texture,
                this.gl.renderer.render({
                    scene: this.meshes.splat,
                    target: this.renderTargets.density.write,
                    sort: !1,
                    update: !1
                }),
                this.renderTargets.density.swap()
            }
            render() {
                this.gl.renderer.autoClear = !1;
                for (let e = this.splats.length - 1; e >= 0; e--)
                    this.splat(this.splats.splice(e, 1)[0]);
                this.meshes.curl.program.uniforms.uVelocity.value = this.renderTargets.velocity.read.texture,
                this.gl.renderer.render({
                    scene: this.meshes.curl,
                    target: this.renderTargets.curl,
                    sort: !1,
                    update: !1
                }),
                this.meshes.vorticity.program.uniforms.uVelocity.value = this.renderTargets.velocity.read.texture,
                this.meshes.vorticity.program.uniforms.uCurl.value = this.renderTargets.curl.texture,
                this.gl.renderer.render({
                    scene: this.meshes.vorticity,
                    target: this.renderTargets.velocity.write,
                    sort: !1,
                    update: !1
                }),
                this.renderTargets.velocity.swap(),
                this.meshes.divergence.program.uniforms.uVelocity.value = this.renderTargets.velocity.read.texture,
                this.gl.renderer.render({
                    scene: this.meshes.divergence,
                    target: this.renderTargets.divergence,
                    sort: !1,
                    update: !1
                }),
                this.meshes.clear.program.uniforms.uTexture.value = this.renderTargets.pressure.read.texture,
                this.gl.renderer.render({
                    scene: this.meshes.clear,
                    target: this.renderTargets.pressure.write,
                    sort: !1,
                    update: !1
                }),
                this.renderTargets.pressure.swap(),
                this.meshes.pressure.program.uniforms.uDivergence.value = this.renderTargets.divergence.texture;
                for (let e = 0; e < this.params.swirl; e++)
                    this.meshes.pressure.program.uniforms.uPressure.value = this.renderTargets.pressure.read.texture,
                    this.gl.renderer.render({
                        scene: this.meshes.pressure,
                        target: this.renderTargets.pressure.write,
                        sort: !1,
                        update: !1
                    }),
                    this.renderTargets.pressure.swap();
                this.meshes.gradientSubtract.program.uniforms.uPressure.value = this.renderTargets.pressure.read.texture,
                this.meshes.gradientSubtract.program.uniforms.uVelocity.value = this.renderTargets.velocity.read.texture,
                this.gl.renderer.render({
                    scene: this.meshes.gradientSubtract,
                    target: this.renderTargets.velocity.write,
                    sort: !1,
                    update: !1
                }),
                this.renderTargets.velocity.swap(),
                this.meshes.advection.program.uniforms.dyeTexelSize.value.set(1 / this.params.simRes),
                this.meshes.advection.program.uniforms.uVelocity.value = this.renderTargets.velocity.read.texture,
                this.meshes.advection.program.uniforms.uSource.value = this.renderTargets.velocity.read.texture,
                this.meshes.advection.program.uniforms.uDissipation.value = this.params.velocityDissipation,
                this.gl.renderer.render({
                    scene: this.meshes.advection,
                    target: this.renderTargets.velocity.write,
                    sort: !1,
                    update: !1
                }),
                this.renderTargets.velocity.swap(),
                this.meshes.advection.program.uniforms.dyeTexelSize.value.set(1 / this.params.dyeRes),
                this.meshes.advection.program.uniforms.uVelocity.value = this.renderTargets.velocity.read.texture,
                this.meshes.advection.program.uniforms.uSource.value = this.renderTargets.density.read.texture,
                this.meshes.advection.program.uniforms.uDissipation.value = this.params.densityDissipation,
                this.gl.renderer.render({
                    scene: this.meshes.advection,
                    target: this.renderTargets.density.write,
                    sort: !1,
                    update: !1
                }),
                this.renderTargets.density.swap(),
                this.gl.renderer.autoClear = !0
            }
            resize({width: e, height: r}) {
                this.meshes.splat.program.uniforms.aspectRatio.value = e / r
            }
            debugMode(e) {
                e == null || e.addBinding(this.params, "mouseVelocityForce", {
                    min: 0,
                    max: 20,
                    step: .01
                }),
                e == null || e.addBinding(this.params, "sprinkle", {
                    min: 0,
                    max: 1,
                    step: .01
                }).on("change", ({value: r}) => {
                    this.meshes.vorticity.program.uniforms.uSprinkle.value = Math.max(30 * (1 - r), 1e-4)
                }
                ),
                e == null || e.addBinding(this.params, "swirl", {
                    min: 0,
                    max: 10,
                    step: 1
                }),
                e == null || e.addBinding(this.params, "densityDissipation", {
                    min: 0,
                    max: 1,
                    step: .001
                }),
                e == null || e.addBinding(this.params, "velocityDissipation", {
                    min: 0,
                    max: 1,
                    step: .001
                }),
                e == null || e.addBinding(this.params, "pressureDissipation", {
                    min: 0,
                    max: 1,
                    step: .001
                }).on("change", ({value: r}) => {
                    this.meshes.clear.program.uniforms.uClearValue.value = r
                }
                ),
                e == null || e.addBinding(this.params, "curlStrength", {
                    min: 0,
                    max: 50,
                    step: .1
                }).on("change", ({value: r}) => {
                    this.meshes.vorticity.program.uniforms.uCurlValue.value = r
                }
                ),
                e == null || e.addBinding(this.params, "radius", {
                    min: 0,
                    max: 1,
                    step: .01
                }).on("change", ({value: r}) => {
                    this.meshes.splat.program.uniforms.uRadius.value = r / 100
                }
                )
            }
        }
    }
    );
    var It, hu, uu = R( () => {
        It = {
            files: {},
            add: (t, e) => It.files[t] = e,
            get: t => It.files[t],
            remove: t => delete It.files[t],
            clear: () => It.files = {},
            load: t => new Promise(e => {
                let r = It.get(t);
                if (r)
                    return e(r);
                let i = new Image;
                i.onload = () => {
                    It.add(t, i),
                    e(i)
                }
                ,
                i.src = t
            }
            )
        },
        hu = It
    }
    );
    function mn(t, e, r) {
        return Math.min(Math.max(t, e), r)
    }
    function vn(t) {
        return mn(t, 0, 1)
    }
    function du(t) {
        return t * (Math.PI / 180)
    }
    var pu = R( () => {}
    );
    var Dm, fu, mu = R( () => {
        Dm = `# version 300 es

precision highp float;
precision highp sampler2D;

// Image textures
uniform sampler2D tMapA;
uniform sampler2D tMapB;
// Fluid texture
uniform sampler2D tFluid;

// Screen resolution
uniform vec2 uResolution;

// Fluid distortion
uniform float uDistort;
// Fluid visibility
uniform float uIntensity;
// Fluid color
uniform vec3 uColor;

// Image morph transition inputs
uniform float uStrength;
uniform float uProgress;
uniform float uLateral;
// Image fade transition
uniform float uFadeProgress;
// Transition mode (0.0 = morph, 1.0 = fade)
uniform float uMode;

// Fade transition parameters
uniform float uZoomFrom;
uniform float uRotationFrom;

in vec2 vUv;

out vec4 outColor;

/**
 * A morph transition between two images
 * 'uvA' and 'uvB' are the fullscreen distorted UVs for each texture
 */
vec4 transitionMorph(vec2 uvA, vec2 uvB) {
  vec4 ca = texture(tMapA, uvA);
  vec4 cb = texture(tMapB, uvB);
  vec2 oa = (((ca.rg + ca.b) * 0.5) * 2.0 - uLateral);
  vec2 ob = (((cb.rg + cb.b) * 0.5) * 2.0 - uLateral);
  vec2 oc = mix(oa, ob, 0.5) * uStrength;

  float invertedProgress = 1.0 - uProgress;

  return mix(texture(tMapA, uvA + oc * uProgress), texture(tMapB, uvB - oc * invertedProgress), uProgress);
}

float easeQuadraticOut(float t) {
  return -t * (t - 2.0);
}

vec2 zoom(vec2 uv, float progress) {
  float zoomFactor = mix(uZoomFrom, 1.0, easeQuadraticOut(progress));

  return 0.5 + ((uv - 0.5) * zoomFactor);
}

vec2 rotateUV(vec2 uv, float rotation) {
  float cosAngle = cos(rotation);
  float sinAngle = sin(rotation);
  vec2 p = uv - vec2(0.5);

  return vec2(
    cosAngle * p.x + sinAngle * p.y + 0.5,
    cosAngle * p.y - sinAngle * p.x + 0.5
  );
}

vec2 zoomAndRotate(vec2 uv, float progress) {
  vec2 zoomedUV = zoom(uv, progress);

  // In radians
  float rotation = mix(uRotationFrom, 0.0, easeQuadraticOut(progress));

  return rotateUV(zoomedUV, rotation);
}

vec4 transitionFade(vec2 uvA, vec2 uvB) {
  vec4 ca = texture(tMapA, uvA);

  vec2 zoomedUvB = zoomAndRotate(uvB, uFadeProgress);
  vec4 cb = texture(tMapB, zoomedUvB);

  return mix(ca, cb, uFadeProgress);
}

/**
 * Make the UVs behave as 'object-fit: cover'
 * Used to make the images fit in fullscreen
 *
 * Source: https://gist.github.com/raphaelameaume/d1731132ef01efd948e67c0778770981
 */
vec2 uvCover (vec2 uv, vec2 size, vec2 resolution) {
  vec2 coverUv = uv;
  vec2 s = resolution; // Screen
  vec2 i = size; // Image

  float rs = s.x / s.y;
  float ri = i.x / i.y;
  vec2 new = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
  vec2 offset = (rs < ri ? vec2((new.x - s.x) / 2.0, 0.0) : vec2(0.0, (new.y - s.y) / 2.0)) / new;

  coverUv = coverUv * s / new + offset;

  return coverUv;
}

void main() {
  // Create the computed fluid texture
  vec3 fluid = texture(tFluid, vUv).rgb;

  // Fit the UVs to cover fullscreen
  vec2 coverUvA = uvCover(vUv, vec2(textureSize(tMapA, 0)), uResolution);
  vec2 coverUvB = uvCover(vUv, vec2(textureSize(tMapB, 0)), uResolution);
  // Distort the fullscreen UVs using the fluid texture
  vec2 distortedUvA = coverUvA - fluid.rg * uDistort;
  vec2 distortedUvB = coverUvB - fluid.rg * uDistort;

  // Create the texture from the distorted fullscreen
  vec4 texture = mix(transitionMorph(distortedUvA, distortedUvB), transitionFade(distortedUvA, distortedUvB), step(0.5, uMode));

  // Apply the given color to the fluid
  vec3 selectedColor = uColor * length(fluid);
  vec4 colorForFluidEffect = vec4(selectedColor, 1.0);

  float intensity = length(fluid) * uIntensity;

  // Mix the distorted image with the fluid color depending on the intensity
  outColor = mix(texture, colorForFluidEffect, intensity);
}
`,
        fu = Dm
    }
    );
    var Vm, vu, gu = R( () => {
        Vm = `# version 300 es

precision highp float;

in vec2 position;
in vec2 uv;

out vec2 vUv;

void main() {
  vUv = uv;

  gl_Position = vec4(position, 0.0, 1.0);
}
`,
        vu = Vm
    }
    );
    var Ce, fn = R( () => {
        Ti();
        ui();
        cu();
        uu();
        pu();
        mu();
        gu();
        Ce = class t {
            constructor(e, r, i="desktop") {
                this.gl = e,
                this.steps = this.createSteps(r),
                this.mode = i,
                this.state = {
                    progress: 0,
                    fromKey: this.steps.length ? this.steps[0].key : "",
                    toKey: this.steps.length > 1 ? this.steps[1].key : ""
                },
                this.params = {
                    alpha: .05,
                    distortion: .02
                };
                let s = new Cr(e);
                t.triangle = s;
                let n = new lt(e);
                this.fluid = new Sr(e),
                this.mesh = new Ee(e,{
                    geometry: s,
                    program: new xe(e,{
                        vertex: vu,
                        fragment: fu,
                        uniforms: {
                            tMapA: {
                                value: n
                            },
                            tMapB: {
                                value: n
                            },
                            tFluid: {
                                value: null
                            },
                            uResolution: {
                                value: new Ye(e.renderer.width,e.renderer.height)
                            },
                            uIntensity: {
                                value: this.params.alpha * 1e-4
                            },
                            uDistort: {
                                value: this.params.distortion * .001
                            },
                            uColor: {
                                value: new Vt(2105376)
                            },
                            uStrength: {
                                value: .1
                            },
                            uProgress: {
                                value: 0
                            },
                            uLateral: {
                                value: .5
                            },
                            uFadeProgress: {
                                value: 0
                            },
                            uMode: {
                                value: 0
                            },
                            uZoomFrom: {
                                value: 1
                            },
                            uRotationFrom: {
                                value: 0
                            }
                        }
                    })
                })
            }
            createSteps(e) {
                return e.map(i => {
                    let s = {
                        key: i.key,
                        desktop: {
                            sources: Array.isArray(i.desktop) ? i.desktop : [i.desktop],
                            loaded: !1,
                            textures: []
                        },
                        mobile: {
                            sources: Array.isArray(i.mobile) ? i.mobile : [i.mobile],
                            loaded: !1,
                            textures: []
                        }
                    };
                    return Array.isArray(i.desktop) && (s.currentIndex = 0),
                    s
                }
                )
            }
            prepare() {
                return he(this, null, function*() {
                    if (!this.steps.length)
                        return;
                    let e = [this.loadStep(this.steps[0].key, "a")];
                    this.steps.length > 1 && e.push(this.loadStep(this.steps[1].key, "b")),
                    yield Promise.all(e)
                })
            }
            loadStep(e, r=null) {
                return he(this, null, function*() {
                    let i = this.steps.find(n => n.key === e);
                    if (!i || i[this.mode].loaded)
                        return;
                    let s = [];
                    for (let n = 0; n < i[this.mode].sources.length; n++) {
                        let o = i[this.mode].sources[n];
                        if (i[this.mode].textures[n]) {
                            if (r) {
                                let c = i.currentIndex === void 0 ? 0 : i.currentIndex;
                                r && n === c && (this.mesh.program.uniforms[r === "b" ? "tMapB" : "tMapA"].value = i[this.mode].textures[n])
                            }
                            continue
                        }
                        let a = new lt(this.gl);
                        i[this.mode].textures.push(a);
                        let l = hu.load(o).then(c => {
                            if (a.image = c,
                            r) {
                                let h = i.currentIndex === void 0 ? 0 : i.currentIndex;
                                r && n === h && (this.mesh.program.uniforms[r === "b" ? "tMapB" : "tMapA"].value = a)
                            }
                        }
                        );
                        s.push(l)
                    }
                    yield Promise.all(s),
                    i[this.mode].loaded = !0
                })
            }
            onProgress(e, r, i) {
                let s = this.steps.find(a => a.key === r)
                  , n = this.steps.find(a => a.key === i);
                if (s[this.mode].loaded) {
                    let a = s[this.mode].textures[s.currentIndex === void 0 ? 0 : s.currentIndex];
                    this.mesh.program.uniforms.tMapA.value !== a && (this.mesh.program.uniforms.tMapA.value = a)
                } else
                    this.loadStep(r, "a");
                if (n[this.mode].loaded) {
                    let a = n[this.mode].textures[n.currentIndex === void 0 ? 0 : n.currentIndex];
                    this.mesh.program.uniforms.tMapB.value !== a && (this.mesh.program.uniforms.tMapB.value = a)
                } else
                    this.loadStep(i, "b");
                let o = vn(e);
                if (this.mesh.program.uniforms.uProgress.value = o,
                o === 1) {
                    let a = this.steps.findIndex(l => l.key === i);
                    a + 1 <= this.steps.length - 1 && this.loadStep(this.steps[a + 1].key)
                }
                this.state.progress = o,
                this.state.fromKey = r,
                this.state.toKey = i
            }
            getCurrentStep() {
                let e = this.state.progress === 0 ? this.state.fromKey : this.state.toKey;
                return this.steps.find(i => i.key === e)
            }
            changeSlide(e, r, i="linear", s=1, n=0) {
                return he(this, null, function*() {
                    return new Promise(o => {
                        if (this.state.progress !== 0 && this.state.progress !== 1)
                            return console.warn("[Experience] changeSlide only works when morph progress is equal to 0 or 1 (currently " + this.state.progress + ")"),
                            o();
                        let a = this.getCurrentStep()
                          , l = mn(e, 0, a[this.mode].textures.length - 1);
                        if (a.currentIndex === void 0)
                            return console.warn("[Experience] This step does not have multiple images"),
                            o();
                        if (a.currentIndex === l)
                            return console.warn("[Experience] Index not changing"),
                            o();
                        let c = this.mesh.program.uniforms.tMapA.value
                          , h = this.mesh.program.uniforms.tMapB.value;
                        this.state.progress === 1 && (this.mesh.program.uniforms.tMapA.value = h);
                        let u = a[this.mode].textures[l];
                        this.mesh.program.uniforms.tMapB.value = u,
                        this.mesh.program.uniforms.uMode.value = 1,
                        a.currentIndex = l,
                        this.mesh.program.uniforms.uZoomFrom.value = vn(s),
                        this.mesh.program.uniforms.uRotationFrom.value = du(n),
                        x({
                            targets: this.mesh.program.uniforms.uFadeProgress,
                            value: [0, 1],
                            duration: r,
                            easing: i,
                            complete: () => {
                                this.state.progress === 0 ? (this.mesh.program.uniforms.tMapA.value = u,
                                this.mesh.program.uniforms.tMapB.value = h) : this.mesh.program.uniforms.tMapA.value = c,
                                this.mesh.program.uniforms.uMode.value = 0,
                                this.mesh.program.uniforms.uFadeProgress.value = 0,
                                o()
                            }
                        })
                    }
                    )
                })
            }
            setMode(e) {
                if (e === this.mode)
                    return;
                this.mode = e;
                let r = this.steps.find(s => s.key === this.state.fromKey)
                  , i = this.steps.find(s => s.key === this.state.toKey);
                r[this.mode].loaded ? this.mesh.program.uniforms.tMapA.value = r[this.mode].textures[r.currentIndex === void 0 ? 0 : r.currentIndex] : this.loadStep(r.key, "a"),
                i[this.mode].loaded ? this.mesh.program.uniforms.tMapB.value = i[this.mode].textures[i.currentIndex === void 0 ? 0 : i.currentIndex] : this.loadStep(i.key, "b")
            }
            onPointerMove(e, r) {
                var i;
                (i = this.fluid) == null || i.onPointerMove(e, r)
            }
            render() {
                this.fluid.render(),
                this.mesh.program.uniforms.tFluid.value = this.fluid.renderTargets.density.read.texture
            }
            resize({width: e, height: r}) {
                var i, s;
                (i = this.mesh) == null || i.program.uniforms.uResolution.value.set(e, r),
                (s = this.fluid) == null || s.resize({
                    width: e,
                    height: r
                })
            }
            debugMode(e) {
                e == null || e.addBinding(this.params, "alpha", {
                    min: 0,
                    max: 1,
                    step: .001
                }).on("change", ({value: s}) => {
                    this.mesh.program.uniforms.uIntensity.value = s * 1e-4
                }
                ),
                e == null || e.addBinding(this.params, "distortion", {
                    min: 0,
                    max: 2,
                    step: .001
                }).on("change", ({value: s}) => {
                    this.mesh.program.uniforms.uDistort.value = s * .001
                }
                ),
                e == null || e.addBinding(this.mesh.program.uniforms.uColor, "value", {
                    title: "color",
                    color: {
                        type: "float"
                    }
                }),
                e == null || e.addBlade({
                    view: "separator"
                }),
                this.fluid.debugMode(e),
                e == null || e.addBlade({
                    view: "separator"
                }),
                e == null || e.addBinding(this.mesh.program.uniforms.uStrength, "value", {
                    label: "Morph Strength",
                    min: 0,
                    max: 1
                }),
                e == null || e.addBinding(this.mesh.program.uniforms.uLateral, "value", {
                    label: "Morph Lateral",
                    min: 0,
                    max: 1
                }),
                e == null || e.addBlade({
                    view: "separator"
                });
                let r = {
                    index: 0
                };
                e == null || e.addBinding(r, "index", {
                    label: "Fade to index",
                    min: 0,
                    max: 10,
                    step: 1
                }),
                (e == null ? void 0 : e.addButton({
                    title: "Start fade"
                })).on("click", () => he(this, null, function*() {
                    yield this.changeSlide(r.index, 1e3)
                }))
            }
        }
    }
    );
    function K(t) {
        return t == null
    }
    function Qo(t) {
        return t !== null && typeof t == "object"
    }
    function Sn(t) {
        return t !== null && typeof t == "object"
    }
    function Im(t, e) {
        if (t.length !== e.length)
            return !1;
        for (let r = 0; r < t.length; r++)
            if (t[r] !== e[r])
                return !1;
        return !0
    }
    function qt(t, e) {
        return Array.from(new Set([...Object.keys(t), ...Object.keys(e)])).reduce( (i, s) => {
            let n = t[s]
              , o = e[s];
            return Sn(n) && Sn(o) ? Object.assign(Object.assign({}, i), {
                [s]: qt(n, o)
            }) : Object.assign(Object.assign({}, i), {
                [s]: s in e ? o : n
            })
        }
        , {})
    }
    function Zo(t) {
        return Qo(t) ? "target"in t : !1
    }
    function Z(t, e) {
        let r = e == null ? void 0 : e.constraint
          , i = e == null ? void 0 : e.equals;
        return !r && !i ? new Mn(t) : new Pn(t,e)
    }
    function Bm(t) {
        return [new kn(t), (e, r) => {
            t.setRawValue(e, r)
        }
        ]
    }
    function Jo(t) {
        return (e, r) => {
            for (let i = 0; i < t.length; i++) {
                let s = t[i](e, r);
                if (s !== "")
                    return s
            }
            return ""
        }
    }
    function Ar(t, e) {
        var r;
        let i = t.substr(e).match(/^\s+/);
        return (r = i && i[0]) !== null && r !== void 0 ? r : ""
    }
    function Um(t, e) {
        let r = t.substr(e, 1);
        return r.match(/^[1-9]$/) ? r : ""
    }
    function Or(t, e) {
        var r;
        let i = t.substr(e).match(/^[0-9]+/);
        return (r = i && i[0]) !== null && r !== void 0 ? r : ""
    }
    function jm(t, e) {
        let r = Or(t, e);
        if (r !== "")
            return r;
        let i = t.substr(e, 1);
        if (e += 1,
        i !== "-" && i !== "+")
            return "";
        let s = Or(t, e);
        return s === "" ? "" : i + s
    }
    function ea(t, e) {
        let r = t.substr(e, 1);
        if (e += 1,
        r.toLowerCase() !== "e")
            return "";
        let i = jm(t, e);
        return i === "" ? "" : r + i
    }
    function Uu(t, e) {
        let r = t.substr(e, 1);
        if (r === "0")
            return r;
        let i = Um(t, e);
        return e += i.length,
        i === "" ? "" : i + Or(t, e)
    }
    function Hm(t, e) {
        let r = Uu(t, e);
        if (e += r.length,
        r === "")
            return "";
        let i = t.substr(e, 1);
        if (e += i.length,
        i !== ".")
            return "";
        let s = Or(t, e);
        return e += s.length,
        r + i + s + ea(t, e)
    }
    function $m(t, e) {
        let r = t.substr(e, 1);
        if (e += r.length,
        r !== ".")
            return "";
        let i = Or(t, e);
        return e += i.length,
        i === "" ? "" : r + i + ea(t, e)
    }
    function Ym(t, e) {
        let r = Uu(t, e);
        return e += r.length,
        r === "" ? "" : r + ea(t, e)
    }
    function Gm(t, e) {
        var r;
        let i = t.substr(e).match(/^[01]+/);
        return (r = i && i[0]) !== null && r !== void 0 ? r : ""
    }
    function Xm(t, e) {
        let r = t.substr(e, 2);
        if (e += r.length,
        r.toLowerCase() !== "0b")
            return "";
        let i = Gm(t, e);
        return i === "" ? "" : r + i
    }
    function Km(t, e) {
        var r;
        let i = t.substr(e).match(/^[0-7]+/);
        return (r = i && i[0]) !== null && r !== void 0 ? r : ""
    }
    function Qm(t, e) {
        let r = t.substr(e, 2);
        if (e += r.length,
        r.toLowerCase() !== "0o")
            return "";
        let i = Km(t, e);
        return i === "" ? "" : r + i
    }
    function Zm(t, e) {
        var r;
        let i = t.substr(e).match(/^[0-9a-f]+/i);
        return (r = i && i[0]) !== null && r !== void 0 ? r : ""
    }
    function Jm(t, e) {
        let r = t.substr(e, 2);
        if (e += r.length,
        r.toLowerCase() !== "0x")
            return "";
        let i = Zm(t, e);
        return i === "" ? "" : r + i
    }
    function rv(t, e) {
        let r = tv(t, e);
        return e += r.length,
        r === "" ? null : {
            evaluable: new On(r),
            cursor: e
        }
    }
    function iv(t, e) {
        let r = t.substr(e, 1);
        if (e += r.length,
        r !== "(")
            return null;
        let i = Hu(t, e);
        if (!i)
            return null;
        e = i.cursor,
        e += Ar(t, e).length;
        let s = t.substr(e, 1);
        return e += s.length,
        s !== ")" ? null : {
            evaluable: i.evaluable,
            cursor: e
        }
    }
    function sv(t, e) {
        var r;
        return (r = rv(t, e)) !== null && r !== void 0 ? r : iv(t, e)
    }
    function ju(t, e) {
        let r = sv(t, e);
        if (r)
            return r;
        let i = t.substr(e, 1);
        if (e += i.length,
        i !== "+" && i !== "-" && i !== "~")
            return null;
        let s = ju(t, e);
        return s ? (e = s.cursor,
        {
            cursor: e,
            evaluable: new Ln(i,s.evaluable)
        }) : null
    }
    function nv(t, e, r) {
        r += Ar(e, r).length;
        let i = t.filter(s => e.startsWith(s, r))[0];
        return i ? (r += i.length,
        r += Ar(e, r).length,
        {
            cursor: r,
            operator: i
        }) : null
    }
    function ov(t, e) {
        return (r, i) => {
            let s = t(r, i);
            if (!s)
                return null;
            i = s.cursor;
            let n = s.evaluable;
            for (; ; ) {
                let o = nv(e, r, i);
                if (!o)
                    break;
                i = o.cursor;
                let a = t(r, i);
                if (!a)
                    return null;
                i = a.cursor,
                n = new Rn(o.operator,n,a.evaluable)
            }
            return n ? {
                cursor: i,
                evaluable: n
            } : null
        }
    }
    function Hu(t, e) {
        return e += Ar(t, e).length,
        av(t, e)
    }
    function lv(t) {
        let e = Hu(t, 0);
        return !e || e.cursor + Ar(t, e.cursor).length !== t.length ? null : e.evaluable
    }
    function pt(t) {
        var e;
        let r = lv(t);
        return (e = r == null ? void 0 : r.evaluate()) !== null && e !== void 0 ? e : null
    }
    function $u(t) {
        if (typeof t == "number")
            return t;
        if (typeof t == "string") {
            let e = pt(t);
            if (!K(e))
                return e
        }
        return 0
    }
    function cv(t) {
        return String(t)
    }
    function Pe(t) {
        return e => e.toFixed(Math.max(Math.min(t, 20), 0))
    }
    function $(t, e, r, i, s) {
        let n = (t - e) / (r - e);
        return i + n * (s - i)
    }
    function bu(t) {
        return String(t.toFixed(10)).split(".")[1].replace(/0+$/, "").length
    }
    function ae(t, e, r) {
        return Math.min(Math.max(t, e), r)
    }
    function Yu(t, e) {
        return (t % e + e) % e
    }
    function hv(t, e) {
        return K(t.step) ? Math.max(bu(e), 2) : bu(t.step)
    }
    function Wu(t) {
        var e;
        return (e = t.step) !== null && e !== void 0 ? e : 1
    }
    function Gu(t, e) {
        var r;
        let i = Math.abs((r = t.step) !== null && r !== void 0 ? r : e);
        return i === 0 ? .1 : Math.pow(10, Math.floor(Math.log10(i)) - 1)
    }
    function Xu(t, e) {
        return K(t.step) ? null : new An(t.step,e)
    }
    function Ku(t) {
        return !K(t.max) && !K(t.min) ? new Nt({
            max: t.max,
            min: t.min
        }) : !K(t.max) || !K(t.min) ? new Tn({
            max: t.max,
            min: t.min
        }) : null
    }
    function Qu(t, e) {
        var r, i, s;
        return {
            formatter: (r = t.format) !== null && r !== void 0 ? r : Pe(hv(t, e)),
            keyScale: (i = t.keyScale) !== null && i !== void 0 ? i : Wu(t),
            pointerScale: (s = t.pointerScale) !== null && s !== void 0 ? s : Gu(t, e)
        }
    }
    function Zu(t) {
        return {
            format: t.optional.function,
            keyScale: t.optional.number,
            max: t.optional.number,
            min: t.optional.number,
            pointerScale: t.optional.number,
            step: t.optional.number
        }
    }
    function ta(t) {
        return {
            constraint: t.constraint,
            textProps: B.fromObject(Qu(t.params, t.initialValue))
        }
    }
    function uv(t) {
        if (!("binding"in t))
            return !1;
        let e = t.binding;
        return Zo(e) && "read"in e && "write"in e
    }
    function dv(t, e) {
        let i = Object.keys(e).reduce( (s, n) => {
            if (s === void 0)
                return;
            let o = e[n]
              , a = o(t[n]);
            return a.succeeded ? Object.assign(Object.assign({}, s), {
                [n]: a.value
            }) : void 0
        }
        , {});
        return i
    }
    function pv(t, e) {
        return t.reduce( (r, i) => {
            if (r === void 0)
                return;
            let s = e(i);
            if (!(!s.succeeded || s.value === void 0))
                return [...r, s.value]
        }
        , [])
    }
    function fv(t) {
        return t === null ? !1 : typeof t == "object"
    }
    function ht(t) {
        return e => r => {
            if (!e && r === void 0)
                return {
                    succeeded: !1,
                    value: void 0
                };
            if (e && r === void 0)
                return {
                    succeeded: !0,
                    value: void 0
                };
            let i = t(r);
            return i !== void 0 ? {
                succeeded: !0,
                value: i
            } : {
                succeeded: !1,
                value: void 0
            }
        }
    }
    function wu(t) {
        return {
            custom: e => ht(e)(t),
            boolean: ht(e => typeof e == "boolean" ? e : void 0)(t),
            number: ht(e => typeof e == "number" ? e : void 0)(t),
            string: ht(e => typeof e == "string" ? e : void 0)(t),
            function: ht(e => typeof e == "function" ? e : void 0)(t),
            constant: e => ht(r => r === e ? e : void 0)(t),
            raw: ht(e => e)(t),
            object: e => ht(r => {
                if (fv(r))
                    return dv(r, e)
            }
            )(t),
            array: e => ht(r => {
                if (Array.isArray(r))
                    return pv(r, e)
            }
            )(t)
        }
    }
    function ee(t, e) {
        let r = e(zn)
          , i = zn.required.object(r)(t);
        return i.succeeded ? i.value : void 0
    }
    function Te(t, e, r, i) {
        if (e && !e(t))
            return !1;
        let s = ee(t, r);
        return s ? i(s) : !1
    }
    function Ae(t, e) {
        var r;
        return qt((r = t == null ? void 0 : t()) !== null && r !== void 0 ? r : {}, e)
    }
    function Bt(t) {
        return "value"in t
    }
    function Ju(t) {
        if (!Qo(t) || !("binding"in t))
            return !1;
        let e = t.binding;
        return Zo(e)
    }
    function Fi(t) {
        t.offsetHeight
    }
    function mv(t, e) {
        let r = t.style.transition;
        t.style.transition = "none",
        e(),
        t.style.transition = r
    }
    function ra(t) {
        return t.ontouchstart !== void 0
    }
    function vv() {
        return globalThis
    }
    function gv() {
        return vv().document
    }
    function bv(t) {
        let e = t.ownerDocument.defaultView;
        return e && "document"in e ? t.getContext("2d", {
            willReadFrequently: !0
        }) : null
    }
    function Gi(t, e) {
        let r = t.createElementNS(We, "svg");
        return r.innerHTML = wv[e],
        r
    }
    function ed(t, e, r) {
        t.insertBefore(e, t.children[r])
    }
    function ia(t) {
        t.parentElement && t.parentElement.removeChild(t)
    }
    function td(t) {
        for (; t.children.length > 0; )
            t.removeChild(t.children[0])
    }
    function _v(t) {
        for (; t.childNodes.length > 0; )
            t.removeChild(t.childNodes[0])
    }
    function rd(t) {
        return t.relatedTarget ? t.relatedTarget : "explicitOriginalTarget"in t ? t.explicitOriginalTarget : null
    }
    function dt(t, e) {
        t.emitter.on("change", r => {
            e(r.rawValue)
        }
        ),
        e(t.rawValue)
    }
    function Xe(t, e, r) {
        dt(t.value(e), r)
    }
    function N(t) {
        return (r, i) => [yv, "-", t, "v", r ? `_${r}` : "", i ? `-${i}` : ""].join("")
    }
    function xv(t, e) {
        let r = t.createDocumentFragment();
        return e.split(`
`).map(s => t.createTextNode(s)).forEach( (s, n) => {
            n > 0 && r.appendChild(t.createElement("br")),
            r.appendChild(s)
        }
        ),
        r
    }
    function Ev() {
        return ["veryfirst", "first", "last", "verylast"]
    }
    function xu(t) {
        let e = Object.assign({}, t);
        return delete e.value,
        e
    }
    function Cv(t) {
        return Bt(t) && Ju(t.value)
    }
    function Sv(t) {
        return Bt(t) && uv(t.value)
    }
    function id(t, e) {
        for (; t.length < e; )
            t.push(void 0)
    }
    function Pv(t) {
        let e = [];
        return id(e, t),
        e
    }
    function Mv(t) {
        let e = t.indexOf(void 0);
        return e < 0 ? t : t.slice(0, e)
    }
    function kv(t, e) {
        let r = [...Mv(t), e];
        return r.length > t.length ? r.splice(0, r.length - t.length) : id(r, t.length),
        r
    }
    function Tv(t) {
        if (!("binding"in t))
            return !1;
        let e = t.binding;
        return Zo(e) && "read"in e && !("write"in e)
    }
    function Av(t) {
        return Bt(t) && Tv(t.value)
    }
    function Ov(t, e, r) {
        r ? t.classList.add(e) : t.classList.remove(e)
    }
    function ar(t, e) {
        return r => {
            Ov(t, e, r)
        }
    }
    function sa(t, e) {
        dt(t, r => {
            e.textContent = r != null ? r : ""
        }
        )
    }
    function we(t) {
        return Object.assign({
            core: lr
        }, t)
    }
    function Lv(t, e) {
        return t.addBlade(Object.assign(Object.assign({}, e), {
            view: "button"
        }))
    }
    function Fv(t, e) {
        return t.addBlade(Object.assign(Object.assign({}, e), {
            view: "folder"
        }))
    }
    function Dv(t, e) {
        return t.addBlade(Object.assign(Object.assign({}, e), {
            view: "tab"
        }))
    }
    function Vv(t) {
        return Qo(t) ? "refresh"in t && typeof t.refresh == "function" : !1
    }
    function Iv(t, e) {
        if (!Li.isBindable(t))
            throw le.notBindable();
        return new Li(t,e)
    }
    function Yn(t) {
        return "rackController"in t
    }
    function zv(t, e) {
        for (let r = 0; r < t.length; r++) {
            let i = t[r];
            if (Bt(i) && i.value === e)
                return i
        }
        return null
    }
    function Bv(t) {
        return Yn(t) ? t.rackController.rack.bcSet_ : null
    }
    function cr() {
        return new B({
            positions: Z([], {
                equals: Im
            })
        })
    }
    function qv(t, e) {
        let r = 0;
        return mv(e, () => {
            t.set("expandedHeight", null),
            t.set("temporaryExpanded", !0),
            Fi(e),
            r = e.clientHeight,
            t.set("temporaryExpanded", null),
            Fi(e)
        }
        ),
        r
    }
    function Eu(t, e) {
        e.style.height = t.styleHeight
    }
    function na(t, e) {
        t.value("expanded").emitter.on("beforechange", () => {
            if (t.set("completed", !1),
            K(t.get("expandedHeight"))) {
                let r = qv(t, e);
                r > 0 && t.set("expandedHeight", r)
            }
            t.set("shouldFixHeight", !0),
            Fi(e)
        }
        ),
        t.emitter.on("change", () => {
            Eu(t, e)
        }
        ),
        Eu(t, e),
        e.addEventListener("transitionend", r => {
            r.propertyName === "height" && t.cleanUpTransition()
        }
        )
    }
    function Cu(t, e) {
        return ar(t, Uv(void 0, e))
    }
    function jv(t, e) {
        let r = t.accept(e.params);
        if (!r)
            return null;
        let i = ee(e.params, s => ({
            disabled: s.optional.boolean,
            hidden: s.optional.boolean
        }));
        return t.controller({
            blade: cr(),
            document: e.document,
            params: Object.assign(Object.assign({}, r.params), {
                disabled: i == null ? void 0 : i.disabled,
                hidden: i == null ? void 0 : i.hidden
            }),
            viewProps: vt.create({
                disabled: i == null ? void 0 : i.disabled,
                hidden: i == null ? void 0 : i.hidden
            })
        })
    }
    function Ui(t, e) {
        if (t instanceof e)
            return t;
        if (t instanceof Ht) {
            let r = t.constraints.reduce( (i, s) => i || (s instanceof e ? s : null), null);
            if (r)
                return r
        }
        return null
    }
    function Wr(t) {
        var e;
        let r = zn;
        if (Array.isArray(t))
            return (e = ee({
                items: t
            }, i => ({
                items: i.required.array(i.required.object({
                    text: i.required.string,
                    value: i.required.raw
                }))
            }))) === null || e === void 0 ? void 0 : e.items;
        if (typeof t == "object")
            return r.required.raw(t).value
    }
    function oa(t) {
        if (Array.isArray(t))
            return t;
        let e = [];
        return Object.keys(t).forEach(r => {
            e.push({
                text: r,
                value: t[r]
            })
        }
        ),
        e
    }
    function aa(t) {
        return K(t) ? null : new $t(oa(t))
    }
    function Hv(t) {
        return String(t)
    }
    function od(t) {
        return t === "false" ? !1 : !!t
    }
    function Tu(t) {
        return Hv(t)
    }
    function $v(t) {
        return e => t.reduce( (r, i) => r !== null ? r : i(e), null)
    }
    function Hi(t) {
        return Yv(t) + "%"
    }
    function ad(t) {
        return String(t)
    }
    function lo(t) {
        return t
    }
    function hr({primary: t, secondary: e, forward: r, backward: i}) {
        let s = !1;
        function n(o) {
            s || (s = !0,
            o(),
            s = !1)
        }
        t.emitter.on("change", o => {
            n( () => {
                e.setRawValue(r(t.rawValue, e.rawValue), o.options)
            }
            )
        }
        ),
        e.emitter.on("change", o => {
            n( () => {
                t.setRawValue(i(t.rawValue, e.rawValue), o.options)
            }
            ),
            n( () => {
                e.setRawValue(r(t.rawValue, e.rawValue), o.options)
            }
            )
        }
        ),
        n( () => {
            e.setRawValue(r(t.rawValue, e.rawValue), {
                forceEmit: !1,
                last: !0
            })
        }
        )
    }
    function Se(t, e) {
        let r = t * (e.altKey ? .1 : 1) * (e.shiftKey ? 10 : 1);
        return e.upKey ? +r : e.downKey ? -r : 0
    }
    function Br(t) {
        return {
            altKey: t.altKey,
            downKey: t.key === "ArrowDown",
            shiftKey: t.shiftKey,
            upKey: t.key === "ArrowUp"
        }
    }
    function gt(t) {
        return {
            altKey: t.altKey,
            downKey: t.key === "ArrowLeft",
            shiftKey: t.shiftKey,
            upKey: t.key === "ArrowRight"
        }
    }
    function Wv(t) {
        return t === "ArrowUp" || t === "ArrowDown"
    }
    function ld(t) {
        return Wv(t) || t === "ArrowLeft" || t === "ArrowRight"
    }
    function wn(t, e) {
        var r, i;
        let s = e.ownerDocument.defaultView
          , n = e.getBoundingClientRect();
        return {
            x: t.pageX - (((r = s && s.scrollX) !== null && r !== void 0 ? r : 0) + n.left),
            y: t.pageY - (((i = s && s.scrollY) !== null && i !== void 0 ? i : 0) + n.top)
        }
    }
    function cd(t) {
        return {
            sliderProps: new B({
                keyScale: t.keyScale,
                max: t.max,
                min: t.min
            }),
            textProps: new B({
                formatter: Z(t.formatter),
                keyScale: t.keyScale,
                pointerScale: Z(t.pointerScale)
            })
        }
    }
    function hd(t) {
        return `--${Gv[t]}`
    }
    function qr(t) {
        return Zu(t)
    }
    function kt(t) {
        if (Sn(t))
            return ee(t, qr)
    }
    function ut(t, e) {
        if (!t)
            return;
        let r = []
          , i = Xu(t, e);
        i && r.push(i);
        let s = Ku(t);
        return s && r.push(s),
        new Ht(r)
    }
    function Xv(t) {
        return t ? t.major === lr.major : !1
    }
    function ud(t) {
        if (t === "inline" || t === "popup")
            return t
    }
    function Gr(t, e) {
        t.write(e)
    }
    function Kv(t) {
        let e = []
          , r = aa(t.options);
        return r && e.push(r),
        new Ht(e)
    }
    function Zv(t, e, r) {
        let i = ae(t / 255, 0, 1)
          , s = ae(e / 255, 0, 1)
          , n = ae(r / 255, 0, 1)
          , o = Math.max(i, s, n)
          , a = Math.min(i, s, n)
          , l = o - a
          , c = 0
          , h = 0
          , u = (a + o) / 2;
        return l !== 0 && (h = l / (1 - Math.abs(o + a - 1)),
        i === o ? c = (s - n) / l : s === o ? c = 2 + (n - i) / l : c = 4 + (i - s) / l,
        c = c / 6 + (c < 0 ? 1 : 0)),
        [c * 360, h * 100, u * 100]
    }
    function Jv(t, e, r) {
        let i = (t % 360 + 360) % 360, s = ae(e / 100, 0, 1), n = ae(r / 100, 0, 1), o = (1 - Math.abs(2 * n - 1)) * s, a = o * (1 - Math.abs(i / 60 % 2 - 1)), l = n - o / 2, c, h, u;
        return i >= 0 && i < 60 ? [c,h,u] = [o, a, 0] : i >= 60 && i < 120 ? [c,h,u] = [a, o, 0] : i >= 120 && i < 180 ? [c,h,u] = [0, o, a] : i >= 180 && i < 240 ? [c,h,u] = [0, a, o] : i >= 240 && i < 300 ? [c,h,u] = [a, 0, o] : [c,h,u] = [o, 0, a],
        [(c + l) * 255, (h + l) * 255, (u + l) * 255]
    }
    function eg(t, e, r) {
        let i = ae(t / 255, 0, 1), s = ae(e / 255, 0, 1), n = ae(r / 255, 0, 1), o = Math.max(i, s, n), a = Math.min(i, s, n), l = o - a, c;
        l === 0 ? c = 0 : o === i ? c = 60 * (((s - n) / l % 6 + 6) % 6) : o === s ? c = 60 * ((n - i) / l + 2) : c = 60 * ((i - s) / l + 4);
        let h = o === 0 ? 0 : l / o
          , u = o;
        return [c, h * 100, u * 100]
    }
    function dd(t, e, r) {
        let i = Yu(t, 360), s = ae(e / 100, 0, 1), n = ae(r / 100, 0, 1), o = n * s, a = o * (1 - Math.abs(i / 60 % 2 - 1)), l = n - o, c, h, u;
        return i >= 0 && i < 60 ? [c,h,u] = [o, a, 0] : i >= 60 && i < 120 ? [c,h,u] = [a, o, 0] : i >= 120 && i < 180 ? [c,h,u] = [0, o, a] : i >= 180 && i < 240 ? [c,h,u] = [0, a, o] : i >= 240 && i < 300 ? [c,h,u] = [a, 0, o] : [c,h,u] = [o, 0, a],
        [(c + l) * 255, (h + l) * 255, (u + l) * 255]
    }
    function tg(t, e, r) {
        let i = r + e * (100 - Math.abs(2 * r - 100)) / 200;
        return [t, i !== 0 ? e * (100 - Math.abs(2 * r - 100)) / i : 0, r + e * (100 - Math.abs(2 * r - 100)) / (2 * 100)]
    }
    function rg(t, e, r) {
        let i = 100 - Math.abs(r * (200 - e) / 100 - 100);
        return [t, i !== 0 ? e * r / i : 0, r * (200 - e) / (2 * 100)]
    }
    function Qe(t) {
        return [t[0], t[1], t[2]]
    }
    function Xi(t, e) {
        return [t[0], t[1], t[2], e]
    }
    function or(t, e) {
        return [e === "float" ? 1 : t === "rgb" ? 255 : 360, e === "float" ? 1 : t === "rgb" ? 255 : 100, e === "float" ? 1 : t === "rgb" ? 255 : 100]
    }
    function sg(t, e) {
        return t === e ? e : Yu(t, e)
    }
    function pd(t, e, r) {
        var i;
        let s = or(e, r);
        return [e === "rgb" ? ae(t[0], 0, s[0]) : sg(t[0], s[0]), ae(t[1], 0, s[1]), ae(t[2], 0, s[2]), ae((i = t[3]) !== null && i !== void 0 ? i : 1, 0, 1)]
    }
    function Au(t, e, r, i) {
        let s = or(e, r)
          , n = or(e, i);
        return t.map( (o, a) => o / s[a] * n[a])
    }
    function fd(t, e, r) {
        let i = Au(t, e.mode, e.type, "int")
          , s = ig[e.mode][r.mode](...i);
        return Au(s, r.mode, "int", r.type)
    }
    function ng(t) {
        return t === "int" ? "int" : t === "float" ? "float" : void 0
    }
    function la(t) {
        return ee(t, e => ({
            color: e.optional.object({
                alpha: e.optional.boolean,
                type: e.optional.custom(ng)
            }),
            expanded: e.optional.boolean,
            picker: e.optional.custom(ud),
            readonly: e.optional.constant(!1)
        }))
    }
    function Gt(t) {
        return t ? .1 : 1
    }
    function md(t) {
        var e;
        return (e = t.color) === null || e === void 0 ? void 0 : e.type
    }
    function ca(t, e, r) {
        return og[r](t, e)
    }
    function ag(t) {
        return t.type === "float"
    }
    function lg(t) {
        return t.type === "int"
    }
    function cg(t) {
        let e = t.getComponents()
          , r = or(t.mode, "int");
        return new j([Math.round($(e[0], 0, 1, 0, r[0])), Math.round($(e[1], 0, 1, 0, r[1])), Math.round($(e[2], 0, 1, 0, r[2])), e[3]],t.mode)
    }
    function hg(t) {
        let e = t.getComponents()
          , r = or(t.mode, "int");
        return new Nr([$(e[0], 0, r[0], 0, 1), $(e[1], 0, r[1], 0, 1), $(e[2], 0, r[2], 0, 1), e[3]],t.mode)
    }
    function be(t, e) {
        if (t.type === e)
            return t;
        if (lg(t) && e === "float")
            return hg(t);
        if (ag(t) && e === "int")
            return cg(t);
        throw le.shouldNeverHappen()
    }
    function ug(t, e) {
        return t.alpha === e.alpha && t.mode === e.mode && t.notation === e.notation && t.type === e.type
    }
    function De(t, e) {
        let r = t.match(/^(.+)%$/);
        return Math.min(r ? parseFloat(r[1]) * .01 * e : parseFloat(t), e)
    }
    function vd(t) {
        let e = t.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);
        if (!e)
            return parseFloat(t);
        let r = parseFloat(e[1])
          , i = e[2];
        return dg[i](r)
    }
    function gd(t) {
        let e = t.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
        if (!e)
            return null;
        let r = [De(e[1], 255), De(e[2], 255), De(e[3], 255)];
        return isNaN(r[0]) || isNaN(r[1]) || isNaN(r[2]) ? null : r
    }
    function pg(t) {
        let e = gd(t);
        return e ? new j(e,"rgb") : null
    }
    function bd(t) {
        let e = t.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
        if (!e)
            return null;
        let r = [De(e[1], 255), De(e[2], 255), De(e[3], 255), De(e[4], 1)];
        return isNaN(r[0]) || isNaN(r[1]) || isNaN(r[2]) || isNaN(r[3]) ? null : r
    }
    function fg(t) {
        let e = bd(t);
        return e ? new j(e,"rgb") : null
    }
    function wd(t) {
        let e = t.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
        if (!e)
            return null;
        let r = [vd(e[1]), De(e[2], 100), De(e[3], 100)];
        return isNaN(r[0]) || isNaN(r[1]) || isNaN(r[2]) ? null : r
    }
    function mg(t) {
        let e = wd(t);
        return e ? new j(e,"hsl") : null
    }
    function _d(t) {
        let e = t.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
        if (!e)
            return null;
        let r = [vd(e[1]), De(e[2], 100), De(e[3], 100), De(e[4], 1)];
        return isNaN(r[0]) || isNaN(r[1]) || isNaN(r[2]) || isNaN(r[3]) ? null : r
    }
    function vg(t) {
        let e = _d(t);
        return e ? new j(e,"hsl") : null
    }
    function yd(t) {
        let e = t.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
        if (e)
            return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)];
        let r = t.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
        return r ? [parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16)] : null
    }
    function gg(t) {
        let e = yd(t);
        return e ? new j(e,"rgb") : null
    }
    function xd(t) {
        let e = t.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
        if (e)
            return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16), $(parseInt(e[4] + e[4], 16), 0, 255, 0, 1)];
        let r = t.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
        return r ? [parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16), $(parseInt(r[4], 16), 0, 255, 0, 1)] : null
    }
    function bg(t) {
        let e = xd(t);
        return e ? new j(e,"rgb") : null
    }
    function Ed(t) {
        let e = t.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
        if (!e)
            return null;
        let r = [parseFloat(e[1]), parseFloat(e[2]), parseFloat(e[3])];
        return isNaN(r[0]) || isNaN(r[1]) || isNaN(r[2]) ? null : r
    }
    function Ou(t) {
        return e => {
            let r = Ed(e);
            return r ? ca(r, "rgb", t) : null
        }
    }
    function Cd(t) {
        let e = t.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
        if (!e)
            return null;
        let r = [parseFloat(e[1]), parseFloat(e[2]), parseFloat(e[3]), parseFloat(e[4])];
        return isNaN(r[0]) || isNaN(r[1]) || isNaN(r[2]) || isNaN(r[3]) ? null : r
    }
    function Ru(t) {
        return e => {
            let r = Cd(e);
            return r ? ca(r, "rgb", t) : null
        }
    }
    function _g(t) {
        return wg.reduce( (e, {parser: r, result: i}) => e || (r(t) ? i : null), null)
    }
    function yg(t, e="int") {
        let r = _g(t);
        return r ? r.notation === "hex" && e !== "float" ? Object.assign(Object.assign({}, r), {
            type: "int"
        }) : r.notation === "func" ? Object.assign(Object.assign({}, r), {
            type: e
        }) : null : null
    }
    function Xr(t) {
        let e = [gg, bg, pg, fg, mg, vg];
        t === "int" && e.push(Ou("int"), Ru("int")),
        t === "float" && e.push(Ou("float"), Ru("float"));
        let r = $v(e);
        return i => {
            let s = r(i);
            return s ? be(s, t) : null
        }
    }
    function xg(t) {
        let e = Xr("int");
        if (typeof t != "string")
            return j.black();
        let r = e(t);
        return r != null ? r : j.black()
    }
    function Sd(t) {
        let e = ae(Math.floor(t), 0, 255).toString(16);
        return e.length === 1 ? `0${e}` : e
    }
    function ha(t, e="#") {
        let r = Qe(t.getComponents("rgb")).map(Sd).join("");
        return `${e}${r}`
    }
    function ua(t, e="#") {
        let r = t.getComponents("rgb")
          , i = [r[0], r[1], r[2], r[3] * 255].map(Sd).join("");
        return `${e}${i}`
    }
    function Pd(t) {
        let e = Pe(0)
          , r = be(t, "int");
        return `rgb(${Qe(r.getComponents("rgb")).map(s => e(s)).join(", ")})`
    }
    function Oi(t) {
        let e = Pe(2)
          , r = Pe(0);
        return `rgba(${be(t, "int").getComponents("rgb").map( (n, o) => (o === 3 ? e : r)(n)).join(", ")})`
    }
    function Eg(t) {
        let e = [Pe(0), Hi, Hi]
          , r = be(t, "int");
        return `hsl(${Qe(r.getComponents("hsl")).map( (s, n) => e[n](s)).join(", ")})`
    }
    function Cg(t) {
        let e = [Pe(0), Hi, Hi, Pe(2)];
        return `hsla(${be(t, "int").getComponents("hsl").map( (s, n) => e[n](s)).join(", ")})`
    }
    function Md(t, e) {
        let r = Pe(e === "float" ? 2 : 0)
          , i = ["r", "g", "b"]
          , s = be(t, e);
        return `{${Qe(s.getComponents("rgb")).map( (o, a) => `${i[a]}: ${r(o)}`).join(", ")}}`
    }
    function Sg(t) {
        return e => Md(e, t)
    }
    function kd(t, e) {
        let r = Pe(2)
          , i = Pe(e === "float" ? 2 : 0)
          , s = ["r", "g", "b", "a"];
        return `{${be(t, e).getComponents("rgb").map( (a, l) => {
            let c = l === 3 ? r : i;
            return `${s[l]}: ${c(a)}`
        }
        ).join(", ")}}`
    }
    function Pg(t) {
        return e => kd(e, t)
    }
    function Td(t) {
        return Mg.reduce( (e, r) => e || (ug(r.format, t) ? r.stringifier : null), null)
    }
    function kg(t) {
        let e = t.createElement("select")
          , r = [{
            text: "RGB",
            value: "rgb"
        }, {
            text: "HSL",
            value: "hsl"
        }, {
            text: "HSV",
            value: "hsv"
        }, {
            text: "HEX",
            value: "hex"
        }];
        return e.appendChild(r.reduce( (i, s) => {
            let n = t.createElement("option");
            return n.textContent = s.text,
            n.value = s.value,
            i.appendChild(n),
            i
        }
        , t.createDocumentFragment())),
        e
    }
    function Tg(t) {
        return Pe(t === "float" ? 2 : 0)
    }
    function Ag(t, e, r) {
        let i = or(t, e)[r];
        return new Nt({
            min: 0,
            max: i
        })
    }
    function Og(t, e, r) {
        return new Wt(t,{
            arrayPosition: r === 0 ? "fst" : r === 2 ? "lst" : "mid",
            parser: e.parser,
            props: B.fromObject({
                formatter: Tg(e.colorType),
                keyScale: Gt(!1),
                pointerScale: e.colorType === "float" ? .01 : 1
            }),
            value: Z(0, {
                constraint: Ag(e.colorMode, e.colorType, r)
            }),
            viewProps: e.viewProps
        })
    }
    function Rg(t, e) {
        let r = {
            colorMode: e.colorMode,
            colorType: e.colorType,
            parser: pt,
            viewProps: e.viewProps
        };
        return [0, 1, 2].map(i => {
            let s = Og(t, r, i);
            return hr({
                primary: e.value,
                secondary: s.value,
                forward(n) {
                    return be(n, e.colorType).getComponents(e.colorMode)[i]
                },
                backward(n, o) {
                    let a = e.colorMode
                      , c = be(n, e.colorType).getComponents(a);
                    c[i] = o;
                    let h = ca(Xi(Qe(c), c[3]), a, e.colorType);
                    return be(h, "int")
                }
            }),
            s
        }
        )
    }
    function Lg(t, e) {
        let r = new Yt(t,{
            parser: Xr("int"),
            props: B.fromObject({
                formatter: ha
            }),
            value: Z(j.black()),
            viewProps: e.viewProps
        });
        return hr({
            primary: e.value,
            secondary: r.value,
            forward: i => new j(Qe(i.getComponents()),i.mode),
            backward: (i, s) => new j(Xi(Qe(s.getComponents(i.mode)), i.getComponents()[3]),i.mode)
        }),
        [r]
    }
    function Fg(t) {
        return t !== "hex"
    }
    function Dg(t) {
        return Qe(t.getComponents("rgb")).reduce( (e, r) => e << 8 | Math.floor(r) & 255, 0)
    }
    function Vg(t) {
        return t.getComponents("rgb").reduce( (e, r, i) => {
            let s = Math.floor(i === 3 ? r * 255 : r) & 255;
            return e << 8 | s
        }
        , 0) >>> 0
    }
    function Ig(t) {
        return new j([t >> 16 & 255, t >> 8 & 255, t & 255],"rgb")
    }
    function zg(t) {
        return new j([t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, $(t & 255, 0, 255, 0, 1)],"rgb")
    }
    function Bg(t) {
        return typeof t != "number" ? j.black() : Ig(t)
    }
    function qg(t) {
        return typeof t != "number" ? j.black() : zg(t)
    }
    function Ri(t, e) {
        return typeof t != "object" || K(t) ? !1 : e in t && typeof t[e] == "number"
    }
    function Ad(t) {
        return Ri(t, "r") && Ri(t, "g") && Ri(t, "b")
    }
    function Od(t) {
        return Ad(t) && Ri(t, "a")
    }
    function Rd(t) {
        return Ad(t)
    }
    function da(t, e) {
        if (t.mode !== e.mode || t.type !== e.type)
            return !1;
        let r = t.getComponents()
          , i = e.getComponents();
        for (let s = 0; s < r.length; s++)
            if (r[s] !== i[s])
                return !1;
        return !0
    }
    function Fu(t) {
        return "a"in t ? [t.r, t.g, t.b, t.a] : [t.r, t.g, t.b]
    }
    function Ng(t) {
        let e = Td(t);
        return e ? (r, i) => {
            Gr(r, e(i))
        }
        : null
    }
    function Ug(t) {
        let e = t ? Vg : Dg;
        return (r, i) => {
            Gr(r, e(i))
        }
    }
    function jg(t, e, r) {
        let s = be(e, r).toRgbaObject();
        t.writeProperty("r", s.r),
        t.writeProperty("g", s.g),
        t.writeProperty("b", s.b),
        t.writeProperty("a", s.a)
    }
    function Hg(t, e, r) {
        let s = be(e, r).toRgbaObject();
        t.writeProperty("r", s.r),
        t.writeProperty("g", s.g),
        t.writeProperty("b", s.b)
    }
    function $g(t, e) {
        return (r, i) => {
            t ? jg(r, i, e) : Hg(r, i, e)
        }
    }
    function Yg(t) {
        var e;
        return !!(!((e = t == null ? void 0 : t.color) === null || e === void 0) && e.alpha)
    }
    function Wg(t) {
        return t ? e => ua(e, "0x") : e => ha(e, "0x")
    }
    function Gg(t) {
        return "color"in t || t.view === "color"
    }
    function Kg(t, e) {
        if (!Rd(t))
            return be(j.black(), e);
        if (e === "int") {
            let r = Fu(t);
            return new j(r,"rgb")
        }
        if (e === "float") {
            let r = Fu(t);
            return new Nr(r,"rgb")
        }
        return be(j.black(), "int")
    }
    function Qg(t) {
        return Od(t)
    }
    function Zg(t) {
        return e => {
            let r = Kg(e, t);
            return be(r, "int")
        }
    }
    function Jg(t, e) {
        return r => t ? kd(r, e) : Md(r, e)
    }
    function r0(t, e, r) {
        return new Wt(t,{
            arrayPosition: r === 0 ? "fst" : r === e.axes.length - 1 ? "lst" : "mid",
            parser: e.parser,
            props: e.axes[r].textProps,
            value: Z(0, {
                constraint: e.axes[r].constraint
            }),
            viewProps: e.viewProps
        })
    }
    function i0(t, e) {
        let r = []
          , i = Xu(t, e);
        i && r.push(i);
        let s = Ku(t);
        s && r.push(s);
        let n = aa(t.options);
        return n && r.push(n),
        new Ht(r)
    }
    function Vu(t, e, r) {
        return [Se(e[0], gt(t)), Se(e[1], Br(t)) * (r ? 1 : -1)]
    }
    function n0(t) {
        return Ge.isObject(t) ? new Ge(t.x,t.y) : new Ge
    }
    function o0(t, e) {
        t.writeProperty("x", e.x),
        t.writeProperty("y", e.y)
    }
    function a0(t, e) {
        return new jr({
            assembly: Ld,
            components: [ut(Object.assign(Object.assign({}, t), t.x), e.x), ut(Object.assign(Object.assign({}, t), t.y), e.y)]
        })
    }
    function Iu(t, e) {
        var r, i;
        if (!K(t.min) || !K(t.max))
            return Math.max(Math.abs((r = t.min) !== null && r !== void 0 ? r : 0), Math.abs((i = t.max) !== null && i !== void 0 ? i : 0));
        let s = Wu(t);
        return Math.max(Math.abs(s) * 10, Math.abs(e) * 10)
    }
    function l0(t, e) {
        var r, i;
        let s = Iu(qt(t, (r = t.x) !== null && r !== void 0 ? r : {}), e.x)
          , n = Iu(qt(t, (i = t.y) !== null && i !== void 0 ? i : {}), e.y);
        return Math.max(s, n)
    }
    function c0(t) {
        if (!("y"in t))
            return !1;
        let e = t.y;
        return e && "inverted"in e ? !!e.inverted : !1
    }
    function u0(t) {
        return Tt.isObject(t) ? new Tt(t.x,t.y,t.z) : new Tt
    }
    function d0(t, e) {
        t.writeProperty("x", e.x),
        t.writeProperty("y", e.y),
        t.writeProperty("z", e.z)
    }
    function p0(t, e) {
        return new jr({
            assembly: Fd,
            components: [ut(Object.assign(Object.assign({}, t), t.x), e.x), ut(Object.assign(Object.assign({}, t), t.y), e.y), ut(Object.assign(Object.assign({}, t), t.z), e.z)]
        })
    }
    function m0(t) {
        return At.isObject(t) ? new At(t.x,t.y,t.z,t.w) : new At
    }
    function v0(t, e) {
        t.writeProperty("x", e.x),
        t.writeProperty("y", e.y),
        t.writeProperty("z", e.z),
        t.writeProperty("w", e.w)
    }
    function g0(t, e) {
        return new jr({
            assembly: Dd,
            components: [ut(Object.assign(Object.assign({}, t), t.x), e.x), ut(Object.assign(Object.assign({}, t), t.y), e.y), ut(Object.assign(Object.assign({}, t), t.z), e.z), ut(Object.assign(Object.assign({}, t), t.w), e.w)]
        })
    }
    function w0(t) {
        let e = []
          , r = aa(t.options);
        return r && e.push(r),
        new Ht(e)
    }
    function Bo(t) {
        return K(t.format) ? Pe(2) : t.format
    }
    function x0(t) {
        var e;
        return t.value.rawValue.length === 1 ? new Yr(t.document,{
            formatter: Bo(t.params),
            value: t.value,
            viewProps: t.viewProps
        }) : new $r(t.document,{
            formatter: Bo(t.params),
            rows: (e = t.params.rows) !== null && e !== void 0 ? e : Kr.monitor.defaultRows,
            value: t.value,
            viewProps: t.viewProps
        })
    }
    function E0(t) {
        var e, r, i;
        return new $i(t.document,{
            formatter: Bo(t.params),
            rows: (e = t.params.rows) !== null && e !== void 0 ? e : Kr.monitor.defaultRows,
            props: B.fromObject({
                max: (r = t.params.max) !== null && r !== void 0 ? r : 100,
                min: (i = t.params.min) !== null && i !== void 0 ? i : 0
            }),
            value: t.value,
            viewProps: t.viewProps
        })
    }
    function qu(t) {
        return t.view === "graph"
    }
    function P0(t, e) {
        var r;
        let i = t.accept(e.target.read(), e.params);
        if (K(i))
            return null;
        let s = {
            target: e.target,
            initialValue: i.initialValue,
            params: i.params
        }
          , n = ee(e.params, u => ({
            disabled: u.optional.boolean,
            hidden: u.optional.boolean,
            label: u.optional.string,
            tag: u.optional.string
        }))
          , o = t.binding.reader(s)
          , a = t.binding.constraint ? t.binding.constraint(s) : void 0
          , l = new No({
            reader: o,
            target: e.target,
            writer: t.binding.writer(s)
        })
          , c = new In(Z(o(i.initialValue), {
            constraint: a,
            equals: t.binding.equals
        }),l)
          , h = t.controller({
            constraint: a,
            document: e.document,
            initialValue: i.initialValue,
            params: i.params,
            value: c,
            viewProps: vt.create({
                disabled: n == null ? void 0 : n.disabled,
                hidden: n == null ? void 0 : n.hidden
            })
        });
        return new Bn(e.document,{
            blade: cr(),
            props: B.fromObject({
                label: "label"in e.params ? (r = n == null ? void 0 : n.label) !== null && r !== void 0 ? r : null : e.target.key
            }),
            tag: n == null ? void 0 : n.tag,
            value: c,
            valueController: h
        })
    }
    function M0(t, e) {
        return e === 0 ? new io : new so(t,e != null ? e : Kr.monitor.defaultInterval)
    }
    function k0(t, e) {
        var r, i, s;
        let n = t.accept(e.target.read(), e.params);
        if (K(n))
            return null;
        let o = {
            target: e.target,
            initialValue: n.initialValue,
            params: n.params
        }
          , a = ee(e.params, d => ({
            bufferSize: d.optional.number,
            disabled: d.optional.boolean,
            hidden: d.optional.boolean,
            interval: d.optional.number,
            label: d.optional.string
        }))
          , l = t.binding.reader(o)
          , c = (i = (r = a == null ? void 0 : a.bufferSize) !== null && r !== void 0 ? r : t.binding.defaultBufferSize && t.binding.defaultBufferSize(n.params)) !== null && i !== void 0 ? i : 1
          , h = new qn({
            binding: new Uo({
                reader: l,
                target: e.target
            }),
            bufferSize: c,
            ticker: M0(e.document, a == null ? void 0 : a.interval)
        })
          , u = t.controller({
            document: e.document,
            params: n.params,
            value: h,
            viewProps: vt.create({
                disabled: a == null ? void 0 : a.disabled,
                hidden: a == null ? void 0 : a.hidden
            })
        });
        return u.viewProps.bindDisabled(h.ticker),
        u.viewProps.handleDispose( () => {
            h.ticker.dispose()
        }
        ),
        new Nn(e.document,{
            blade: cr(),
            props: B.fromObject({
                label: "label"in e.params ? (s = a == null ? void 0 : a.label) !== null && s !== void 0 ? s : null : e.target.key
            }),
            value: h,
            valueController: u
        })
    }
    function A0() {
        let t = new jo(T0);
        return [h0, f0, b0, _0, s0, t0, e0, Xg, Qv, y0, S0, C0, Rv, Nv, nd].forEach(e => {
            t.register("core", e)
        }
        ),
        t
    }
    function D0(t) {
        let e = t.createElement("div");
        return e.classList.add(N("dfw")()),
        t.body && t.body.appendChild(e),
        e
    }
    function V0(t, e, r) {
        if (t.querySelector(`style[data-tp-style=${e}]`))
            return;
        let i = t.createElement("style");
        i.dataset.tpStyle = e,
        i.textContent = r,
        t.head.appendChild(i)
    }
    var zm, le, Li, se, Pn, Mn, kn, B, Nt, Tn, An, On, qm, Rn, Nm, Ln, Wm, ev, tv, av, ft, ir, Ut, Fn, Dn, Vn, jt, In, zn, We, wv, yv, Pr, Di, Vi, _u, yu, sr, mt, Ii, Bn, qn, Nn, Un, gn, jn, Hn, zi, Bi, lr, Rv, $n, Rr, Lr, Wn, Gn, Fr, Dr, qi, sd, Xn, Vr, Nv, Uv, vt, Su, Kn, Mr, Qn, Zn, Ir, Jn, eo, Pu, to, kr, ro, Ni, nd, zr, io, so, Ht, $t, bn, no, Ke, Mu, oo, ji, ku, ao, Yt, Yv, bt, Fe, co, Wt, _n, ho, uo, yn, po, nr, Gv, Ai, fo, mo, Qv, zt, vo, ig, j, St, go, Nr, og, dg, wg, Mg, Tr, bo, wo, tr, _o, yo, xn, xo, Eo, En, Lu, Co, So, Po, Cn, Mo, ko, Ur, Xg, e0, t0, jr, Du, To, Hr, Ao, s0, Ge, Ld, rr, Oo, Pt, Ro, Lo, Fo, h0, Tt, Fd, f0, At, Dd, b0, _0, Kr, zu, Do, $r, Bu, Vo, Yr, y0, Io, Mt, zo, $i, C0, S0, qo, No, Uo, jo, T0, Ho, $o, Yo, Wo, O0, Go, Xo, Nu, Ko, Yi, R0, L0, F0, Wi, Nw, Vd = R( () => {
        zm = {
            alreadydisposed: () => "View has been already disposed",
            invalidparams: t => `Invalid parameters for '${t.name}'`,
            nomatchingcontroller: t => `No matching controller for '${t.key}'`,
            nomatchingview: t => `No matching view for '${JSON.stringify(t.params)}'`,
            notbindable: () => "Value is not bindable",
            notcompatible: t => `Not compatible with  plugin '${t.id}'`,
            propertynotfound: t => `Property '${t.name}' not found`,
            shouldneverhappen: () => "This error should never happen"
        },
        le = class t {
            static alreadyDisposed() {
                return new t({
                    type: "alreadydisposed"
                })
            }
            static notBindable() {
                return new t({
                    type: "notbindable"
                })
            }
            static notCompatible(e, r) {
                return new t({
                    type: "notcompatible",
                    context: {
                        id: `${e}.${r}`
                    }
                })
            }
            static propertyNotFound(e) {
                return new t({
                    type: "propertynotfound",
                    context: {
                        name: e
                    }
                })
            }
            static shouldNeverHappen() {
                return new t({
                    type: "shouldneverhappen"
                })
            }
            constructor(e) {
                var r;
                this.message = (r = zm[e.type](e.context)) !== null && r !== void 0 ? r : "Unexpected error",
                this.name = this.constructor.name,
                this.stack = new Error(this.message).stack,
                this.type = e.type
            }
            toString() {
                return this.message
            }
        }
        ,
        Li = class t {
            constructor(e, r) {
                this.obj_ = e,
                this.key = r
            }
            static isBindable(e) {
                return !(e === null || typeof e != "object" && typeof e != "function")
            }
            read() {
                return this.obj_[this.key]
            }
            write(e) {
                this.obj_[this.key] = e
            }
            writeProperty(e, r) {
                let i = this.read();
                if (!t.isBindable(i))
                    throw le.notBindable();
                if (!(e in i))
                    throw le.propertyNotFound(e);
                i[e] = r
            }
        }
        ,
        se = class {
            constructor() {
                this.observers_ = {}
            }
            on(e, r, i) {
                var s;
                let n = this.observers_[e];
                return n || (n = this.observers_[e] = []),
                n.push({
                    handler: r,
                    key: (s = i == null ? void 0 : i.key) !== null && s !== void 0 ? s : r
                }),
                this
            }
            off(e, r) {
                let i = this.observers_[e];
                return i && (this.observers_[e] = i.filter(s => s.key !== r)),
                this
            }
            emit(e, r) {
                let i = this.observers_[e];
                i && i.forEach(s => {
                    s.handler(r)
                }
                )
            }
        }
        ,
        Pn = class {
            constructor(e, r) {
                var i;
                this.constraint_ = r == null ? void 0 : r.constraint,
                this.equals_ = (i = r == null ? void 0 : r.equals) !== null && i !== void 0 ? i : (s, n) => s === n,
                this.emitter = new se,
                this.rawValue_ = e
            }
            get constraint() {
                return this.constraint_
            }
            get rawValue() {
                return this.rawValue_
            }
            set rawValue(e) {
                this.setRawValue(e, {
                    forceEmit: !1,
                    last: !0
                })
            }
            setRawValue(e, r) {
                let i = r != null ? r : {
                    forceEmit: !1,
                    last: !0
                }
                  , s = this.constraint_ ? this.constraint_.constrain(e) : e
                  , n = this.rawValue_;
                this.equals_(n, s) && !i.forceEmit || (this.emitter.emit("beforechange", {
                    sender: this
                }),
                this.rawValue_ = s,
                this.emitter.emit("change", {
                    options: i,
                    previousRawValue: n,
                    rawValue: s,
                    sender: this
                }))
            }
        }
        ,
        Mn = class {
            constructor(e) {
                this.emitter = new se,
                this.value_ = e
            }
            get rawValue() {
                return this.value_
            }
            set rawValue(e) {
                this.setRawValue(e, {
                    forceEmit: !1,
                    last: !0
                })
            }
            setRawValue(e, r) {
                let i = r != null ? r : {
                    forceEmit: !1,
                    last: !0
                }
                  , s = this.value_;
                s === e && !i.forceEmit || (this.emitter.emit("beforechange", {
                    sender: this
                }),
                this.value_ = e,
                this.emitter.emit("change", {
                    options: i,
                    previousRawValue: s,
                    rawValue: this.value_,
                    sender: this
                }))
            }
        }
        ,
        kn = class {
            constructor(e) {
                this.emitter = new se,
                this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this),
                this.onValueChange_ = this.onValueChange_.bind(this),
                this.value_ = e,
                this.value_.emitter.on("beforechange", this.onValueBeforeChange_),
                this.value_.emitter.on("change", this.onValueChange_)
            }
            get rawValue() {
                return this.value_.rawValue
            }
            onValueBeforeChange_(e) {
                this.emitter.emit("beforechange", Object.assign(Object.assign({}, e), {
                    sender: this
                }))
            }
            onValueChange_(e) {
                this.emitter.emit("change", Object.assign(Object.assign({}, e), {
                    sender: this
                }))
            }
        }
        ;
        B = class t {
            constructor(e) {
                this.emitter = new se,
                this.valMap_ = e;
                for (let r in this.valMap_)
                    this.valMap_[r].emitter.on("change", () => {
                        this.emitter.emit("change", {
                            key: r,
                            sender: this
                        })
                    }
                    )
            }
            static createCore(e) {
                return Object.keys(e).reduce( (i, s) => Object.assign(i, {
                    [s]: Z(e[s])
                }), {})
            }
            static fromObject(e) {
                let r = this.createCore(e);
                return new t(r)
            }
            get(e) {
                return this.valMap_[e].rawValue
            }
            set(e, r) {
                this.valMap_[e].rawValue = r
            }
            value(e) {
                return this.valMap_[e]
            }
        }
        ,
        Nt = class {
            constructor(e) {
                this.values = B.fromObject({
                    max: e.max,
                    min: e.min
                })
            }
            constrain(e) {
                let r = this.values.get("max")
                  , i = this.values.get("min");
                return Math.min(Math.max(e, i), r)
            }
        }
        ,
        Tn = class {
            constructor(e) {
                this.values = B.fromObject({
                    max: e.max,
                    min: e.min
                })
            }
            constrain(e) {
                let r = this.values.get("max")
                  , i = this.values.get("min")
                  , s = e;
                return K(i) || (s = Math.max(s, i)),
                K(r) || (s = Math.min(s, r)),
                s
            }
        }
        ,
        An = class {
            constructor(e, r=0) {
                this.step = e,
                this.origin = r
            }
            constrain(e) {
                let r = this.origin % this.step
                  , i = Math.round((e - r) / this.step);
                return r + i * this.step
            }
        }
        ,
        On = class {
            constructor(e) {
                this.text = e
            }
            evaluate() {
                return Number(this.text)
            }
            toString() {
                return this.text
            }
        }
        ,
        qm = {
            "**": (t, e) => Math.pow(t, e),
            "*": (t, e) => t * e,
            "/": (t, e) => t / e,
            "%": (t, e) => t % e,
            "+": (t, e) => t + e,
            "-": (t, e) => t - e,
            "<<": (t, e) => t << e,
            ">>": (t, e) => t >> e,
            ">>>": (t, e) => t >>> e,
            "&": (t, e) => t & e,
            "^": (t, e) => t ^ e,
            "|": (t, e) => t | e
        },
        Rn = class {
            constructor(e, r, i) {
                this.left = r,
                this.operator = e,
                this.right = i
            }
            evaluate() {
                let e = qm[this.operator];
                if (!e)
                    throw new Error(`unexpected binary operator: '${this.operator}`);
                return e(this.left.evaluate(), this.right.evaluate())
            }
            toString() {
                return ["b(", this.left.toString(), this.operator, this.right.toString(), ")"].join(" ")
            }
        }
        ,
        Nm = {
            "+": t => t,
            "-": t => -t,
            "~": t => ~t
        },
        Ln = class {
            constructor(e, r) {
                this.operator = e,
                this.expression = r
            }
            evaluate() {
                let e = Nm[this.operator];
                if (!e)
                    throw new Error(`unexpected unary operator: '${this.operator}`);
                return e(this.expression.evaluate())
            }
            toString() {
                return ["u(", this.operator, this.expression.toString(), ")"].join(" ")
            }
        }
        ;
        Wm = Jo([Hm, $m, Ym]);
        ev = Jo([Xm, Qm, Jm]),
        tv = Jo([ev, Wm]);
        av = [["**"], ["*", "/", "%"], ["+", "-"], ["<<", ">>>", ">>"], ["&"], ["^"], ["|"]].reduce( (t, e) => ov(t, e), ju);
        ft = class {
            constructor(e) {
                this.controller = e
            }
            get element() {
                return this.controller.view.element
            }
            get disabled() {
                return this.controller.viewProps.get("disabled")
            }
            set disabled(e) {
                this.controller.viewProps.set("disabled", e)
            }
            get hidden() {
                return this.controller.viewProps.get("hidden")
            }
            set hidden(e) {
                this.controller.viewProps.set("hidden", e)
            }
            dispose() {
                this.controller.viewProps.set("disposed", !0)
            }
            importState(e) {
                return this.controller.importState(e)
            }
            exportState() {
                return this.controller.exportState()
            }
        }
        ,
        ir = class {
            constructor(e) {
                this.target = e
            }
        }
        ,
        Ut = class extends ir {
            constructor(e, r, i) {
                super(e),
                this.value = r,
                this.last = i != null ? i : !0
            }
        }
        ,
        Fn = class extends ir {
            constructor(e, r) {
                super(e),
                this.expanded = r
            }
        }
        ,
        Dn = class extends ir {
            constructor(e, r) {
                super(e),
                this.index = r
            }
        }
        ,
        Vn = class extends ir {
            constructor(e, r) {
                super(e),
                this.native = r
            }
        }
        ,
        jt = class extends ft {
            constructor(e) {
                super(e),
                this.onValueChange_ = this.onValueChange_.bind(this),
                this.emitter_ = new se,
                this.controller.value.emitter.on("change", this.onValueChange_)
            }
            get label() {
                return this.controller.labelController.props.get("label")
            }
            set label(e) {
                this.controller.labelController.props.set("label", e)
            }
            get key() {
                return this.controller.value.binding.target.key
            }
            get tag() {
                return this.controller.tag
            }
            set tag(e) {
                this.controller.tag = e
            }
            on(e, r) {
                let i = r.bind(this);
                return this.emitter_.on(e, s => {
                    i(s)
                }
                , {
                    key: r
                }),
                this
            }
            off(e, r) {
                return this.emitter_.off(e, r),
                this
            }
            refresh() {
                this.controller.value.fetch()
            }
            onValueChange_(e) {
                let r = this.controller.value;
                this.emitter_.emit("change", new Ut(this,r.binding.target.read(),e.options.last))
            }
        }
        ,
        In = class {
            constructor(e, r) {
                this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this),
                this.onValueChange_ = this.onValueChange_.bind(this),
                this.binding = r,
                this.value_ = e,
                this.value_.emitter.on("beforechange", this.onValueBeforeChange_),
                this.value_.emitter.on("change", this.onValueChange_),
                this.emitter = new se
            }
            get rawValue() {
                return this.value_.rawValue
            }
            set rawValue(e) {
                this.value_.rawValue = e
            }
            setRawValue(e, r) {
                this.value_.setRawValue(e, r)
            }
            fetch() {
                this.value_.rawValue = this.binding.read()
            }
            push() {
                this.binding.write(this.value_.rawValue)
            }
            onValueBeforeChange_(e) {
                this.emitter.emit("beforechange", Object.assign(Object.assign({}, e), {
                    sender: this
                }))
            }
            onValueChange_(e) {
                this.push(),
                this.emitter.emit("change", Object.assign(Object.assign({}, e), {
                    sender: this
                }))
            }
        }
        ;
        zn = {
            optional: wu(!0),
            required: wu(!1)
        };
        We = "http://www.w3.org/2000/svg";
        wv = {
            check: '<path d="M2 8l4 4l8 -8"/>',
            dropdown: '<path d="M5 7h6l-3 3 z"/>',
            p2dpad: '<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'
        };
        yv = "tp";
        Pr = N("lbl");
        Di = class {
            constructor(e, r) {
                this.element = e.createElement("div"),
                this.element.classList.add(Pr()),
                r.viewProps.bindClassModifiers(this.element);
                let i = e.createElement("div");
                i.classList.add(Pr("l")),
                Xe(r.props, "label", n => {
                    K(n) ? this.element.classList.add(Pr(void 0, "nol")) : (this.element.classList.remove(Pr(void 0, "nol")),
                    _v(i),
                    i.appendChild(xv(e, n)))
                }
                ),
                this.element.appendChild(i),
                this.labelElement = i;
                let s = e.createElement("div");
                s.classList.add(Pr("v")),
                this.element.appendChild(s),
                this.valueElement = s
            }
        }
        ,
        Vi = class {
            constructor(e, r) {
                this.props = r.props,
                this.valueController = r.valueController,
                this.viewProps = r.valueController.viewProps,
                this.view = new Di(e,{
                    props: r.props,
                    viewProps: this.viewProps
                }),
                this.view.valueElement.appendChild(this.valueController.view.element)
            }
            importProps(e) {
                return Te(e, null, r => ({
                    label: r.optional.string
                }), r => (this.props.set("label", r.label),
                !0))
            }
            exportProps() {
                return Ae(null, {
                    label: this.props.get("label")
                })
            }
        }
        ;
        _u = N(""),
        yu = {
            veryfirst: "vfst",
            first: "fst",
            last: "lst",
            verylast: "vlst"
        },
        sr = class {
            constructor(e) {
                this.parent_ = null,
                this.blade = e.blade,
                this.view = e.view,
                this.viewProps = e.viewProps;
                let r = this.view.element;
                this.blade.value("positions").emitter.on("change", () => {
                    Ev().forEach(i => {
                        r.classList.remove(_u(void 0, yu[i]))
                    }
                    ),
                    this.blade.get("positions").forEach(i => {
                        r.classList.add(_u(void 0, yu[i]))
                    }
                    )
                }
                ),
                this.viewProps.handleDispose( () => {
                    ia(r)
                }
                )
            }
            get parent() {
                return this.parent_
            }
            set parent(e) {
                this.parent_ = e,
                this.viewProps.set("parent", this.parent_ ? this.parent_.viewProps : null)
            }
            importState(e) {
                return Te(e, null, r => ({
                    disabled: r.required.boolean,
                    hidden: r.required.boolean
                }), r => (this.viewProps.importState(r),
                !0))
            }
            exportState() {
                return Ae(null, Object.assign({}, this.viewProps.exportState()))
            }
        }
        ,
        mt = class extends sr {
            constructor(e, r) {
                if (r.value !== r.valueController.value)
                    throw le.shouldNeverHappen();
                let i = r.valueController.viewProps
                  , s = new Vi(e,{
                    blade: r.blade,
                    props: r.props,
                    valueController: r.valueController
                });
                super(Object.assign(Object.assign({}, r), {
                    view: new Di(e,{
                        props: r.props,
                        viewProps: i
                    }),
                    viewProps: i
                })),
                this.labelController = s,
                this.value = r.value,
                this.valueController = r.valueController,
                this.view.valueElement.appendChild(this.valueController.view.element)
            }
            importState(e) {
                return Te(e, r => {
                    var i, s, n;
                    return super.importState(r) && this.labelController.importProps(r) && ((n = (s = (i = this.valueController).importProps) === null || s === void 0 ? void 0 : s.call(i, e)) !== null && n !== void 0 ? n : !0)
                }
                , r => ({
                    value: r.optional.raw
                }), r => (r.value && (this.value.rawValue = r.value),
                !0))
            }
            exportState() {
                var e, r, i;
                return Ae( () => super.exportState(), Object.assign(Object.assign({
                    value: this.value.rawValue
                }, this.labelController.exportProps()), (i = (r = (e = this.valueController).exportProps) === null || r === void 0 ? void 0 : r.call(e)) !== null && i !== void 0 ? i : {}))
            }
        }
        ;
        Ii = class extends mt {
            constructor(e, r) {
                super(e, r),
                this.tag = r.tag
            }
            importState(e) {
                return Te(e, r => super.importState(xu(e)), r => ({
                    tag: r.optional.string
                }), r => (this.tag = r.tag,
                !0))
            }
            exportState() {
                return Ae( () => xu(super.exportState()), {
                    binding: {
                        key: this.value.binding.target.key,
                        value: this.value.binding.target.read()
                    },
                    tag: this.tag
                })
            }
        }
        ;
        Bn = class extends Ii {
            importState(e) {
                return Te(e, r => super.importState(r), r => ({
                    binding: r.required.object({
                        value: r.required.raw
                    })
                }), r => (this.value.binding.inject(r.binding.value),
                this.value.fetch(),
                !0))
            }
        }
        ;
        qn = class {
            constructor(e) {
                this.emitter = new se,
                this.onTick_ = this.onTick_.bind(this),
                this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this),
                this.onValueChange_ = this.onValueChange_.bind(this),
                this.binding = e.binding,
                this.value_ = Z(Pv(e.bufferSize)),
                this.value_.emitter.on("beforechange", this.onValueBeforeChange_),
                this.value_.emitter.on("change", this.onValueChange_),
                this.ticker = e.ticker,
                this.ticker.emitter.on("tick", this.onTick_),
                this.fetch()
            }
            get rawValue() {
                return this.value_.rawValue
            }
            set rawValue(e) {
                this.value_.rawValue = e
            }
            setRawValue(e, r) {
                this.value_.setRawValue(e, r)
            }
            fetch() {
                this.value_.rawValue = kv(this.value_.rawValue, this.binding.read())
            }
            onTick_() {
                this.fetch()
            }
            onValueBeforeChange_(e) {
                this.emitter.emit("beforechange", Object.assign(Object.assign({}, e), {
                    sender: this
                }))
            }
            onValueChange_(e) {
                this.emitter.emit("change", Object.assign(Object.assign({}, e), {
                    sender: this
                }))
            }
        }
        ;
        Nn = class extends Ii {
            exportState() {
                return Ae( () => super.exportState(), {
                    binding: {
                        readonly: !0
                    }
                })
            }
        }
        ;
        Un = class extends ft {
            get label() {
                return this.controller.labelController.props.get("label")
            }
            set label(e) {
                this.controller.labelController.props.set("label", e)
            }
            get title() {
                var e;
                return (e = this.controller.buttonController.props.get("title")) !== null && e !== void 0 ? e : ""
            }
            set title(e) {
                this.controller.buttonController.props.set("title", e)
            }
            on(e, r) {
                let i = r.bind(this);
                return this.controller.buttonController.emitter.on(e, n => {
                    i(new Vn(this,n.nativeEvent))
                }
                ),
                this
            }
            off(e, r) {
                return this.controller.buttonController.emitter.off(e, r),
                this
            }
        }
        ;
        gn = N("btn"),
        jn = class {
            constructor(e, r) {
                this.element = e.createElement("div"),
                this.element.classList.add(gn()),
                r.viewProps.bindClassModifiers(this.element);
                let i = e.createElement("button");
                i.classList.add(gn("b")),
                r.viewProps.bindDisabled(i),
                this.element.appendChild(i),
                this.buttonElement = i;
                let s = e.createElement("div");
                s.classList.add(gn("t")),
                sa(r.props.value("title"), s),
                this.buttonElement.appendChild(s)
            }
        }
        ,
        Hn = class {
            constructor(e, r) {
                this.emitter = new se,
                this.onClick_ = this.onClick_.bind(this),
                this.props = r.props,
                this.viewProps = r.viewProps,
                this.view = new jn(e,{
                    props: this.props,
                    viewProps: this.viewProps
                }),
                this.view.buttonElement.addEventListener("click", this.onClick_)
            }
            importProps(e) {
                return Te(e, null, r => ({
                    title: r.optional.string
                }), r => (this.props.set("title", r.title),
                !0))
            }
            exportProps() {
                return Ae(null, {
                    title: this.props.get("title")
                })
            }
            onClick_(e) {
                this.emitter.emit("click", {
                    nativeEvent: e,
                    sender: this
                })
            }
        }
        ,
        zi = class extends sr {
            constructor(e, r) {
                let i = new Hn(e,{
                    props: r.buttonProps,
                    viewProps: r.viewProps
                })
                  , s = new Vi(e,{
                    blade: r.blade,
                    props: r.labelProps,
                    valueController: i
                });
                super({
                    blade: r.blade,
                    view: s.view,
                    viewProps: r.viewProps
                }),
                this.buttonController = i,
                this.labelController = s
            }
            importState(e) {
                return Te(e, r => super.importState(r) && this.buttonController.importProps(r) && this.labelController.importProps(r), () => ({}), () => !0)
            }
            exportState() {
                return Ae( () => super.exportState(), Object.assign(Object.assign({}, this.buttonController.exportProps()), this.labelController.exportProps()))
            }
        }
        ,
        Bi = class {
            constructor(e) {
                let[r,i] = e.split("-")
                  , s = r.split(".");
                this.major = parseInt(s[0], 10),
                this.minor = parseInt(s[1], 10),
                this.patch = parseInt(s[2], 10),
                this.prerelease = i != null ? i : null
            }
            toString() {
                let e = [this.major, this.minor, this.patch].join(".");
                return this.prerelease !== null ? [e, this.prerelease].join("-") : e
            }
        }
        ,
        lr = new Bi("2.0.4");
        Rv = we({
            id: "button",
            type: "blade",
            accept(t) {
                let e = ee(t, r => ({
                    title: r.required.string,
                    view: r.required.constant("button"),
                    label: r.optional.string
                }));
                return e ? {
                    params: e
                } : null
            },
            controller(t) {
                return new zi(t.document,{
                    blade: t.blade,
                    buttonProps: B.fromObject({
                        title: t.params.title
                    }),
                    labelProps: B.fromObject({
                        label: t.params.label
                    }),
                    viewProps: t.viewProps
                })
            },
            api(t) {
                return t.controller instanceof zi ? new Un(t.controller) : null
            }
        });
        $n = class {
            constructor(e, r) {
                this.onRackValueChange_ = this.onRackValueChange_.bind(this),
                this.controller_ = e,
                this.emitter_ = new se,
                this.pool_ = r,
                this.controller_.rack.emitter.on("valuechange", this.onRackValueChange_)
            }
            get children() {
                return this.controller_.rack.children.map(e => this.pool_.createApi(e))
            }
            addBinding(e, r, i) {
                let s = i != null ? i : {}
                  , n = this.controller_.element.ownerDocument
                  , o = this.pool_.createBinding(n, Iv(e, r), s)
                  , a = this.pool_.createBindingApi(o);
                return this.add(a, s.index)
            }
            addFolder(e) {
                return Fv(this, e)
            }
            addButton(e) {
                return Lv(this, e)
            }
            addTab(e) {
                return Dv(this, e)
            }
            add(e, r) {
                let i = e.controller;
                return this.controller_.rack.add(i, r),
                e
            }
            remove(e) {
                this.controller_.rack.remove(e.controller)
            }
            addBlade(e) {
                let r = this.controller_.element.ownerDocument
                  , i = this.pool_.createBlade(r, e)
                  , s = this.pool_.createApi(i);
                return this.add(s, e.index)
            }
            on(e, r) {
                let i = r.bind(this);
                return this.emitter_.on(e, s => {
                    i(s)
                }
                , {
                    key: r
                }),
                this
            }
            off(e, r) {
                return this.emitter_.off(e, r),
                this
            }
            refresh() {
                this.children.forEach(e => {
                    Vv(e) && e.refresh()
                }
                )
            }
            onRackValueChange_(e) {
                let r = e.bladeController
                  , i = this.pool_.createApi(r)
                  , s = Ju(r.value) ? r.value.binding : null;
                this.emitter_.emit("change", new Ut(i,s ? s.target.read() : r.value.rawValue,e.options.last))
            }
        }
        ,
        Rr = class extends ft {
            constructor(e, r) {
                super(e),
                this.rackApi_ = new $n(e.rackController,r)
            }
            refresh() {
                this.rackApi_.refresh()
            }
        }
        ,
        Lr = class extends sr {
            constructor(e) {
                super({
                    blade: e.blade,
                    view: e.view,
                    viewProps: e.rackController.viewProps
                }),
                this.rackController = e.rackController
            }
            importState(e) {
                return Te(e, r => super.importState(r), r => ({
                    children: r.required.array(r.required.raw)
                }), r => this.rackController.rack.children.every( (i, s) => i.importState(r.children[s])))
            }
            exportState() {
                return Ae( () => super.exportState(), {
                    children: this.rackController.rack.children.map(e => e.exportState())
                })
            }
        }
        ;
        Wn = class {
            constructor(e) {
                this.emitter = new se,
                this.items_ = [],
                this.cache_ = new Set,
                this.onSubListAdd_ = this.onSubListAdd_.bind(this),
                this.onSubListRemove_ = this.onSubListRemove_.bind(this),
                this.extract_ = e
            }
            get items() {
                return this.items_
            }
            allItems() {
                return Array.from(this.cache_)
            }
            find(e) {
                for (let r of this.allItems())
                    if (e(r))
                        return r;
                return null
            }
            includes(e) {
                return this.cache_.has(e)
            }
            add(e, r) {
                if (this.includes(e))
                    throw le.shouldNeverHappen();
                let i = r !== void 0 ? r : this.items_.length;
                this.items_.splice(i, 0, e),
                this.cache_.add(e);
                let s = this.extract_(e);
                s && (s.emitter.on("add", this.onSubListAdd_),
                s.emitter.on("remove", this.onSubListRemove_),
                s.allItems().forEach(n => {
                    this.cache_.add(n)
                }
                )),
                this.emitter.emit("add", {
                    index: i,
                    item: e,
                    root: this,
                    target: this
                })
            }
            remove(e) {
                let r = this.items_.indexOf(e);
                if (r < 0)
                    return;
                this.items_.splice(r, 1),
                this.cache_.delete(e);
                let i = this.extract_(e);
                i && (i.allItems().forEach(s => {
                    this.cache_.delete(s)
                }
                ),
                i.emitter.off("add", this.onSubListAdd_),
                i.emitter.off("remove", this.onSubListRemove_)),
                this.emitter.emit("remove", {
                    index: r,
                    item: e,
                    root: this,
                    target: this
                })
            }
            onSubListAdd_(e) {
                this.cache_.add(e.item),
                this.emitter.emit("add", {
                    index: e.index,
                    item: e.item,
                    root: this,
                    target: e.target
                })
            }
            onSubListRemove_(e) {
                this.cache_.delete(e.item),
                this.emitter.emit("remove", {
                    index: e.index,
                    item: e.item,
                    root: this,
                    target: e.target
                })
            }
        }
        ;
        Gn = class {
            constructor(e) {
                var r, i;
                this.emitter = new se,
                this.onBladePositionsChange_ = this.onBladePositionsChange_.bind(this),
                this.onSetAdd_ = this.onSetAdd_.bind(this),
                this.onSetRemove_ = this.onSetRemove_.bind(this),
                this.onChildDispose_ = this.onChildDispose_.bind(this),
                this.onChildPositionsChange_ = this.onChildPositionsChange_.bind(this),
                this.onChildValueChange_ = this.onChildValueChange_.bind(this),
                this.onChildViewPropsChange_ = this.onChildViewPropsChange_.bind(this),
                this.onRackLayout_ = this.onRackLayout_.bind(this),
                this.onRackValueChange_ = this.onRackValueChange_.bind(this),
                this.blade_ = (r = e.blade) !== null && r !== void 0 ? r : null,
                (i = this.blade_) === null || i === void 0 || i.value("positions").emitter.on("change", this.onBladePositionsChange_),
                this.viewProps = e.viewProps,
                this.bcSet_ = new Wn(Bv),
                this.bcSet_.emitter.on("add", this.onSetAdd_),
                this.bcSet_.emitter.on("remove", this.onSetRemove_)
            }
            get children() {
                return this.bcSet_.items
            }
            add(e, r) {
                var i;
                (i = e.parent) === null || i === void 0 || i.remove(e),
                e.parent = this,
                this.bcSet_.add(e, r)
            }
            remove(e) {
                e.parent = null,
                this.bcSet_.remove(e)
            }
            find(e) {
                return this.bcSet_.allItems().filter(e)
            }
            onSetAdd_(e) {
                this.updatePositions_();
                let r = e.target === e.root;
                if (this.emitter.emit("add", {
                    bladeController: e.item,
                    index: e.index,
                    root: r,
                    sender: this
                }),
                !r)
                    return;
                let i = e.item;
                if (i.viewProps.emitter.on("change", this.onChildViewPropsChange_),
                i.blade.value("positions").emitter.on("change", this.onChildPositionsChange_),
                i.viewProps.handleDispose(this.onChildDispose_),
                Bt(i))
                    i.value.emitter.on("change", this.onChildValueChange_);
                else if (Yn(i)) {
                    let s = i.rackController.rack;
                    if (s) {
                        let n = s.emitter;
                        n.on("layout", this.onRackLayout_),
                        n.on("valuechange", this.onRackValueChange_)
                    }
                }
            }
            onSetRemove_(e) {
                this.updatePositions_();
                let r = e.target === e.root;
                if (this.emitter.emit("remove", {
                    bladeController: e.item,
                    root: r,
                    sender: this
                }),
                !r)
                    return;
                let i = e.item;
                if (Bt(i))
                    i.value.emitter.off("change", this.onChildValueChange_);
                else if (Yn(i)) {
                    let s = i.rackController.rack;
                    if (s) {
                        let n = s.emitter;
                        n.off("layout", this.onRackLayout_),
                        n.off("valuechange", this.onRackValueChange_)
                    }
                }
            }
            updatePositions_() {
                let e = this.bcSet_.items.filter(s => !s.viewProps.get("hidden"))
                  , r = e[0]
                  , i = e[e.length - 1];
                this.bcSet_.items.forEach(s => {
                    let n = [];
                    s === r && (n.push("first"),
                    (!this.blade_ || this.blade_.get("positions").includes("veryfirst")) && n.push("veryfirst")),
                    s === i && (n.push("last"),
                    (!this.blade_ || this.blade_.get("positions").includes("verylast")) && n.push("verylast")),
                    s.blade.set("positions", n)
                }
                )
            }
            onChildPositionsChange_() {
                this.updatePositions_(),
                this.emitter.emit("layout", {
                    sender: this
                })
            }
            onChildViewPropsChange_(e) {
                this.updatePositions_(),
                this.emitter.emit("layout", {
                    sender: this
                })
            }
            onChildDispose_() {
                this.bcSet_.items.filter(r => r.viewProps.get("disposed")).forEach(r => {
                    this.bcSet_.remove(r)
                }
                )
            }
            onChildValueChange_(e) {
                let r = zv(this.find(Bt), e.sender);
                if (!r)
                    throw le.alreadyDisposed();
                this.emitter.emit("valuechange", {
                    bladeController: r,
                    options: e.options,
                    sender: this
                })
            }
            onRackLayout_(e) {
                this.updatePositions_(),
                this.emitter.emit("layout", {
                    sender: this
                })
            }
            onRackValueChange_(e) {
                this.emitter.emit("valuechange", {
                    bladeController: e.bladeController,
                    options: e.options,
                    sender: this
                })
            }
            onBladePositionsChange_() {
                this.updatePositions_()
            }
        }
        ,
        Fr = class {
            constructor(e) {
                this.onRackAdd_ = this.onRackAdd_.bind(this),
                this.onRackRemove_ = this.onRackRemove_.bind(this),
                this.element = e.element,
                this.viewProps = e.viewProps;
                let r = new Gn({
                    blade: e.root ? void 0 : e.blade,
                    viewProps: e.viewProps
                });
                r.emitter.on("add", this.onRackAdd_),
                r.emitter.on("remove", this.onRackRemove_),
                this.rack = r,
                this.viewProps.handleDispose( () => {
                    for (let i = this.rack.children.length - 1; i >= 0; i--)
                        this.rack.children[i].viewProps.set("disposed", !0)
                }
                )
            }
            onRackAdd_(e) {
                e.root && ed(this.element, e.bladeController.view.element, e.index)
            }
            onRackRemove_(e) {
                e.root && ia(e.bladeController.view.element)
            }
        }
        ;
        Dr = class t extends B {
            constructor(e) {
                super(e)
            }
            static create(e) {
                let r = {
                    completed: !0,
                    expanded: e,
                    expandedHeight: null,
                    shouldFixHeight: !1,
                    temporaryExpanded: null
                }
                  , i = B.createCore(r);
                return new t(i)
            }
            get styleExpanded() {
                var e;
                return (e = this.get("temporaryExpanded")) !== null && e !== void 0 ? e : this.get("expanded")
            }
            get styleHeight() {
                if (!this.styleExpanded)
                    return "0";
                let e = this.get("expandedHeight");
                return this.get("shouldFixHeight") && !K(e) ? `${e}px` : "auto"
            }
            bindExpandedClass(e, r) {
                let i = () => {
                    this.styleExpanded ? e.classList.add(r) : e.classList.remove(r)
                }
                ;
                Xe(this, "expanded", i),
                Xe(this, "temporaryExpanded", i)
            }
            cleanUpTransition() {
                this.set("shouldFixHeight", !1),
                this.set("expandedHeight", null),
                this.set("completed", !0)
            }
        }
        ;
        qi = class extends Rr {
            constructor(e, r) {
                super(e, r),
                this.emitter_ = new se,
                this.controller.foldable.value("expanded").emitter.on("change", i => {
                    this.emitter_.emit("fold", new Fn(this,i.sender.rawValue))
                }
                ),
                this.rackApi_.on("change", i => {
                    this.emitter_.emit("change", i)
                }
                )
            }
            get expanded() {
                return this.controller.foldable.get("expanded")
            }
            set expanded(e) {
                this.controller.foldable.set("expanded", e)
            }
            get title() {
                return this.controller.props.get("title")
            }
            set title(e) {
                this.controller.props.set("title", e)
            }
            get children() {
                return this.rackApi_.children
            }
            addBinding(e, r, i) {
                return this.rackApi_.addBinding(e, r, i)
            }
            addFolder(e) {
                return this.rackApi_.addFolder(e)
            }
            addButton(e) {
                return this.rackApi_.addButton(e)
            }
            addTab(e) {
                return this.rackApi_.addTab(e)
            }
            add(e, r) {
                return this.rackApi_.add(e, r)
            }
            remove(e) {
                this.rackApi_.remove(e)
            }
            addBlade(e) {
                return this.rackApi_.addBlade(e)
            }
            on(e, r) {
                let i = r.bind(this);
                return this.emitter_.on(e, s => {
                    i(s)
                }
                , {
                    key: r
                }),
                this
            }
            off(e, r) {
                return this.emitter_.off(e, r),
                this
            }
        }
        ,
        sd = N("cnt"),
        Xn = class {
            constructor(e, r) {
                var i;
                this.className_ = N((i = r.viewName) !== null && i !== void 0 ? i : "fld"),
                this.element = e.createElement("div"),
                this.element.classList.add(this.className_(), sd()),
                r.viewProps.bindClassModifiers(this.element),
                this.foldable_ = r.foldable,
                this.foldable_.bindExpandedClass(this.element, this.className_(void 0, "expanded")),
                Xe(this.foldable_, "completed", ar(this.element, this.className_(void 0, "cpl")));
                let s = e.createElement("button");
                s.classList.add(this.className_("b")),
                Xe(r.props, "title", c => {
                    K(c) ? this.element.classList.add(this.className_(void 0, "not")) : this.element.classList.remove(this.className_(void 0, "not"))
                }
                ),
                r.viewProps.bindDisabled(s),
                this.element.appendChild(s),
                this.buttonElement = s;
                let n = e.createElement("div");
                n.classList.add(this.className_("i")),
                this.element.appendChild(n);
                let o = e.createElement("div");
                o.classList.add(this.className_("t")),
                sa(r.props.value("title"), o),
                this.buttonElement.appendChild(o),
                this.titleElement = o;
                let a = e.createElement("div");
                a.classList.add(this.className_("m")),
                this.buttonElement.appendChild(a);
                let l = e.createElement("div");
                l.classList.add(this.className_("c")),
                this.element.appendChild(l),
                this.containerElement = l
            }
        }
        ,
        Vr = class extends Lr {
            constructor(e, r) {
                var i;
                let s = Dr.create((i = r.expanded) !== null && i !== void 0 ? i : !0)
                  , n = new Xn(e,{
                    foldable: s,
                    props: r.props,
                    viewName: r.root ? "rot" : void 0,
                    viewProps: r.viewProps
                });
                super(Object.assign(Object.assign({}, r), {
                    rackController: new Fr({
                        blade: r.blade,
                        element: n.containerElement,
                        root: r.root,
                        viewProps: r.viewProps
                    }),
                    view: n
                })),
                this.onTitleClick_ = this.onTitleClick_.bind(this),
                this.props = r.props,
                this.foldable = s,
                na(this.foldable, this.view.containerElement),
                this.rackController.rack.emitter.on("add", () => {
                    this.foldable.cleanUpTransition()
                }
                ),
                this.rackController.rack.emitter.on("remove", () => {
                    this.foldable.cleanUpTransition()
                }
                ),
                this.view.buttonElement.addEventListener("click", this.onTitleClick_)
            }
            get document() {
                return this.view.element.ownerDocument
            }
            importState(e) {
                return Te(e, r => super.importState(r), r => ({
                    expanded: r.required.boolean,
                    title: r.optional.string
                }), r => (this.foldable.set("expanded", r.expanded),
                this.props.set("title", r.title),
                !0))
            }
            exportState() {
                return Ae( () => super.exportState(), {
                    expanded: this.foldable.get("expanded"),
                    title: this.props.get("title")
                })
            }
            onTitleClick_() {
                this.foldable.set("expanded", !this.foldable.get("expanded"))
            }
        }
        ,
        Nv = we({
            id: "folder",
            type: "blade",
            accept(t) {
                let e = ee(t, r => ({
                    title: r.required.string,
                    view: r.required.constant("folder"),
                    expanded: r.optional.boolean
                }));
                return e ? {
                    params: e
                } : null
            },
            controller(t) {
                return new Vr(t.document,{
                    blade: t.blade,
                    expanded: t.params.expanded,
                    props: B.fromObject({
                        title: t.params.title
                    }),
                    viewProps: t.viewProps
                })
            },
            api(t) {
                return t.controller instanceof Vr ? new qi(t.controller,t.pool) : null
            }
        }),
        Uv = N("");
        vt = class t extends B {
            constructor(e) {
                var r;
                super(e),
                this.onDisabledChange_ = this.onDisabledChange_.bind(this),
                this.onParentChange_ = this.onParentChange_.bind(this),
                this.onParentGlobalDisabledChange_ = this.onParentGlobalDisabledChange_.bind(this),
                [this.globalDisabled_,this.setGlobalDisabled_] = Bm(Z(this.getGlobalDisabled_())),
                this.value("disabled").emitter.on("change", this.onDisabledChange_),
                this.value("parent").emitter.on("change", this.onParentChange_),
                (r = this.get("parent")) === null || r === void 0 || r.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_)
            }
            static create(e) {
                var r, i, s;
                let n = e != null ? e : {};
                return new t(B.createCore({
                    disabled: (r = n.disabled) !== null && r !== void 0 ? r : !1,
                    disposed: !1,
                    hidden: (i = n.hidden) !== null && i !== void 0 ? i : !1,
                    parent: (s = n.parent) !== null && s !== void 0 ? s : null
                }))
            }
            get globalDisabled() {
                return this.globalDisabled_
            }
            bindClassModifiers(e) {
                dt(this.globalDisabled_, Cu(e, "disabled")),
                Xe(this, "hidden", Cu(e, "hidden"))
            }
            bindDisabled(e) {
                dt(this.globalDisabled_, r => {
                    e.disabled = r
                }
                )
            }
            bindTabIndex(e) {
                dt(this.globalDisabled_, r => {
                    e.tabIndex = r ? -1 : 0
                }
                )
            }
            handleDispose(e) {
                this.value("disposed").emitter.on("change", r => {
                    r && e()
                }
                )
            }
            importState(e) {
                this.set("disabled", e.disabled),
                this.set("hidden", e.hidden)
            }
            exportState() {
                return {
                    disabled: this.get("disabled"),
                    hidden: this.get("hidden")
                }
            }
            getGlobalDisabled_() {
                let e = this.get("parent");
                return (e ? e.globalDisabled.rawValue : !1) || this.get("disabled")
            }
            updateGlobalDisabled_() {
                this.setGlobalDisabled_(this.getGlobalDisabled_())
            }
            onDisabledChange_() {
                this.updateGlobalDisabled_()
            }
            onParentGlobalDisabledChange_() {
                this.updateGlobalDisabled_()
            }
            onParentChange_(e) {
                var r;
                let i = e.previousRawValue;
                i == null || i.globalDisabled.emitter.off("change", this.onParentGlobalDisabledChange_),
                (r = this.get("parent")) === null || r === void 0 || r.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_),
                this.updateGlobalDisabled_()
            }
        }
        ,
        Su = N("tbp"),
        Kn = class {
            constructor(e, r) {
                this.element = e.createElement("div"),
                this.element.classList.add(Su()),
                r.viewProps.bindClassModifiers(this.element);
                let i = e.createElement("div");
                i.classList.add(Su("c")),
                this.element.appendChild(i),
                this.containerElement = i
            }
        }
        ,
        Mr = N("tbi"),
        Qn = class {
            constructor(e, r) {
                this.element = e.createElement("div"),
                this.element.classList.add(Mr()),
                r.viewProps.bindClassModifiers(this.element),
                Xe(r.props, "selected", n => {
                    n ? this.element.classList.add(Mr(void 0, "sel")) : this.element.classList.remove(Mr(void 0, "sel"))
                }
                );
                let i = e.createElement("button");
                i.classList.add(Mr("b")),
                r.viewProps.bindDisabled(i),
                this.element.appendChild(i),
                this.buttonElement = i;
                let s = e.createElement("div");
                s.classList.add(Mr("t")),
                sa(r.props.value("title"), s),
                this.buttonElement.appendChild(s),
                this.titleElement = s
            }
        }
        ,
        Zn = class {
            constructor(e, r) {
                this.emitter = new se,
                this.onClick_ = this.onClick_.bind(this),
                this.props = r.props,
                this.viewProps = r.viewProps,
                this.view = new Qn(e,{
                    props: r.props,
                    viewProps: r.viewProps
                }),
                this.view.buttonElement.addEventListener("click", this.onClick_)
            }
            onClick_() {
                this.emitter.emit("click", {
                    sender: this
                })
            }
        }
        ,
        Ir = class extends Lr {
            constructor(e, r) {
                let i = new Kn(e,{
                    viewProps: r.viewProps
                });
                super(Object.assign(Object.assign({}, r), {
                    rackController: new Fr({
                        blade: r.blade,
                        element: i.containerElement,
                        viewProps: r.viewProps
                    }),
                    view: i
                })),
                this.onItemClick_ = this.onItemClick_.bind(this),
                this.ic_ = new Zn(e,{
                    props: r.itemProps,
                    viewProps: vt.create()
                }),
                this.ic_.emitter.on("click", this.onItemClick_),
                this.props = r.props,
                Xe(this.props, "selected", s => {
                    this.itemController.props.set("selected", s),
                    this.viewProps.set("hidden", !s)
                }
                )
            }
            get itemController() {
                return this.ic_
            }
            importState(e) {
                return Te(e, r => super.importState(r), r => ({
                    selected: r.required.boolean,
                    title: r.required.string
                }), r => (this.ic_.props.set("selected", r.selected),
                this.ic_.props.set("title", r.title),
                !0))
            }
            exportState() {
                return Ae( () => super.exportState(), {
                    selected: this.ic_.props.get("selected"),
                    title: this.ic_.props.get("title")
                })
            }
            onItemClick_() {
                this.props.set("selected", !0)
            }
        }
        ,
        Jn = class extends Rr {
            constructor(e, r) {
                super(e, r),
                this.emitter_ = new se,
                this.onSelect_ = this.onSelect_.bind(this),
                this.pool_ = r,
                this.rackApi_.on("change", i => {
                    this.emitter_.emit("change", i)
                }
                ),
                this.controller.tab.selectedIndex.emitter.on("change", this.onSelect_)
            }
            get pages() {
                return this.rackApi_.children
            }
            addPage(e) {
                let r = this.controller.view.element.ownerDocument
                  , i = new Ir(r,{
                    blade: cr(),
                    itemProps: B.fromObject({
                        selected: !1,
                        title: e.title
                    }),
                    props: B.fromObject({
                        selected: !1
                    }),
                    viewProps: vt.create()
                })
                  , s = this.pool_.createApi(i);
                return this.rackApi_.add(s, e.index)
            }
            removePage(e) {
                this.rackApi_.remove(this.rackApi_.children[e])
            }
            on(e, r) {
                let i = r.bind(this);
                return this.emitter_.on(e, s => {
                    i(s)
                }
                , {
                    key: r
                }),
                this
            }
            off(e, r) {
                return this.emitter_.off(e, r),
                this
            }
            onSelect_(e) {
                this.emitter_.emit("select", new Dn(this,e.rawValue))
            }
        }
        ,
        eo = class extends Rr {
            get title() {
                var e;
                return (e = this.controller.itemController.props.get("title")) !== null && e !== void 0 ? e : ""
            }
            set title(e) {
                this.controller.itemController.props.set("title", e)
            }
            get selected() {
                return this.controller.props.get("selected")
            }
            set selected(e) {
                this.controller.props.set("selected", e)
            }
            get children() {
                return this.rackApi_.children
            }
            addButton(e) {
                return this.rackApi_.addButton(e)
            }
            addFolder(e) {
                return this.rackApi_.addFolder(e)
            }
            addTab(e) {
                return this.rackApi_.addTab(e)
            }
            add(e, r) {
                this.rackApi_.add(e, r)
            }
            remove(e) {
                this.rackApi_.remove(e)
            }
            addBinding(e, r, i) {
                return this.rackApi_.addBinding(e, r, i)
            }
            addBlade(e) {
                return this.rackApi_.addBlade(e)
            }
        }
        ,
        Pu = -1,
        to = class {
            constructor() {
                this.onItemSelectedChange_ = this.onItemSelectedChange_.bind(this),
                this.empty = Z(!0),
                this.selectedIndex = Z(Pu),
                this.items_ = []
            }
            add(e, r) {
                let i = r != null ? r : this.items_.length;
                this.items_.splice(i, 0, e),
                e.emitter.on("change", this.onItemSelectedChange_),
                this.keepSelection_()
            }
            remove(e) {
                let r = this.items_.indexOf(e);
                r < 0 || (this.items_.splice(r, 1),
                e.emitter.off("change", this.onItemSelectedChange_),
                this.keepSelection_())
            }
            keepSelection_() {
                if (this.items_.length === 0) {
                    this.selectedIndex.rawValue = Pu,
                    this.empty.rawValue = !0;
                    return
                }
                let e = this.items_.findIndex(r => r.rawValue);
                e < 0 ? (this.items_.forEach( (r, i) => {
                    r.rawValue = i === 0
                }
                ),
                this.selectedIndex.rawValue = 0) : (this.items_.forEach( (r, i) => {
                    r.rawValue = i === e
                }
                ),
                this.selectedIndex.rawValue = e),
                this.empty.rawValue = !1
            }
            onItemSelectedChange_(e) {
                if (e.rawValue) {
                    let r = this.items_.findIndex(i => i === e.sender);
                    this.items_.forEach( (i, s) => {
                        i.rawValue = s === r
                    }
                    ),
                    this.selectedIndex.rawValue = r
                } else
                    this.keepSelection_()
            }
        }
        ,
        kr = N("tab"),
        ro = class {
            constructor(e, r) {
                this.element = e.createElement("div"),
                this.element.classList.add(kr(), sd()),
                r.viewProps.bindClassModifiers(this.element),
                dt(r.empty, ar(this.element, kr(void 0, "nop")));
                let i = e.createElement("div");
                i.classList.add(kr("t")),
                this.element.appendChild(i),
                this.itemsElement = i;
                let s = e.createElement("div");
                s.classList.add(kr("i")),
                this.element.appendChild(s);
                let n = e.createElement("div");
                n.classList.add(kr("c")),
                this.element.appendChild(n),
                this.contentsElement = n
            }
        }
        ,
        Ni = class extends Lr {
            constructor(e, r) {
                let i = new to
                  , s = new ro(e,{
                    empty: i.empty,
                    viewProps: r.viewProps
                });
                super({
                    blade: r.blade,
                    rackController: new Fr({
                        blade: r.blade,
                        element: s.contentsElement,
                        viewProps: r.viewProps
                    }),
                    view: s
                }),
                this.onRackAdd_ = this.onRackAdd_.bind(this),
                this.onRackRemove_ = this.onRackRemove_.bind(this);
                let n = this.rackController.rack;
                n.emitter.on("add", this.onRackAdd_),
                n.emitter.on("remove", this.onRackRemove_),
                this.tab = i
            }
            add(e, r) {
                this.rackController.rack.add(e, r)
            }
            remove(e) {
                this.rackController.rack.remove(this.rackController.rack.children[e])
            }
            onRackAdd_(e) {
                if (!e.root)
                    return;
                let r = e.bladeController;
                ed(this.view.itemsElement, r.itemController.view.element, e.index),
                r.itemController.viewProps.set("parent", this.viewProps),
                this.tab.add(r.props.value("selected"))
            }
            onRackRemove_(e) {
                if (!e.root)
                    return;
                let r = e.bladeController;
                ia(r.itemController.view.element),
                r.itemController.viewProps.set("parent", null),
                this.tab.remove(r.props.value("selected"))
            }
        }
        ,
        nd = we({
            id: "tab",
            type: "blade",
            accept(t) {
                let e = ee(t, r => ({
                    pages: r.required.array(r.required.object({
                        title: r.required.string
                    })),
                    view: r.required.constant("tab")
                }));
                return !e || e.pages.length === 0 ? null : {
                    params: e
                }
            },
            controller(t) {
                let e = new Ni(t.document,{
                    blade: t.blade,
                    viewProps: t.viewProps
                });
                return t.params.pages.forEach(r => {
                    let i = new Ir(t.document,{
                        blade: cr(),
                        itemProps: B.fromObject({
                            selected: !1,
                            title: r.title
                        }),
                        props: B.fromObject({
                            selected: !1
                        }),
                        viewProps: vt.create()
                    });
                    e.add(i)
                }
                ),
                e
            },
            api(t) {
                return t.controller instanceof Ni ? new Jn(t.controller,t.pool) : t.controller instanceof Ir ? new eo(t.controller,t.pool) : null
            }
        });
        zr = class extends jt {
            get options() {
                return this.controller.valueController.props.get("options")
            }
            set options(e) {
                this.controller.valueController.props.set("options", e)
            }
        }
        ,
        io = class {
            constructor() {
                this.disabled = !1,
                this.emitter = new se
            }
            dispose() {}
            tick() {
                this.disabled || this.emitter.emit("tick", {
                    sender: this
                })
            }
        }
        ,
        so = class {
            constructor(e, r) {
                this.disabled_ = !1,
                this.timerId_ = null,
                this.onTick_ = this.onTick_.bind(this),
                this.doc_ = e,
                this.emitter = new se,
                this.interval_ = r,
                this.setTimer_()
            }
            get disabled() {
                return this.disabled_
            }
            set disabled(e) {
                this.disabled_ = e,
                this.disabled_ ? this.clearTimer_() : this.setTimer_()
            }
            dispose() {
                this.clearTimer_()
            }
            clearTimer_() {
                if (this.timerId_ === null)
                    return;
                let e = this.doc_.defaultView;
                e && e.clearInterval(this.timerId_),
                this.timerId_ = null
            }
            setTimer_() {
                if (this.clearTimer_(),
                this.interval_ <= 0)
                    return;
                let e = this.doc_.defaultView;
                e && (this.timerId_ = e.setInterval(this.onTick_, this.interval_))
            }
            onTick_() {
                this.disabled_ || this.emitter.emit("tick", {
                    sender: this
                })
            }
        }
        ,
        Ht = class {
            constructor(e) {
                this.constraints = e
            }
            constrain(e) {
                return this.constraints.reduce( (r, i) => i.constrain(r), e)
            }
        }
        ;
        $t = class {
            constructor(e) {
                this.values = B.fromObject({
                    options: e
                })
            }
            constrain(e) {
                let r = this.values.get("options");
                return r.length === 0 || r.filter(s => s.value === e).length > 0 ? e : r[0].value
            }
        }
        ;
        bn = N("lst"),
        no = class {
            constructor(e, r) {
                this.onValueChange_ = this.onValueChange_.bind(this),
                this.props_ = r.props,
                this.element = e.createElement("div"),
                this.element.classList.add(bn()),
                r.viewProps.bindClassModifiers(this.element);
                let i = e.createElement("select");
                i.classList.add(bn("s")),
                r.viewProps.bindDisabled(i),
                this.element.appendChild(i),
                this.selectElement = i;
                let s = e.createElement("div");
                s.classList.add(bn("m")),
                s.appendChild(Gi(e, "dropdown")),
                this.element.appendChild(s),
                r.value.emitter.on("change", this.onValueChange_),
                this.value_ = r.value,
                Xe(this.props_, "options", n => {
                    td(this.selectElement),
                    n.forEach(o => {
                        let a = e.createElement("option");
                        a.textContent = o.text,
                        this.selectElement.appendChild(a)
                    }
                    ),
                    this.update_()
                }
                )
            }
            update_() {
                let e = this.props_.get("options").map(r => r.value);
                this.selectElement.selectedIndex = e.indexOf(this.value_.rawValue)
            }
            onValueChange_() {
                this.update_()
            }
        }
        ,
        Ke = class {
            constructor(e, r) {
                this.onSelectChange_ = this.onSelectChange_.bind(this),
                this.props = r.props,
                this.value = r.value,
                this.viewProps = r.viewProps,
                this.view = new no(e,{
                    props: this.props,
                    value: this.value,
                    viewProps: this.viewProps
                }),
                this.view.selectElement.addEventListener("change", this.onSelectChange_)
            }
            onSelectChange_(e) {
                let r = e.currentTarget;
                this.value.rawValue = this.props.get("options")[r.selectedIndex].value
            }
            importProps(e) {
                return Te(e, null, r => ({
                    options: r.required.custom(Wr)
                }), r => (this.props.set("options", oa(r.options)),
                !0))
            }
            exportProps() {
                return Ae(null, {
                    options: this.props.get("options")
                })
            }
        }
        ,
        Mu = N("pop"),
        oo = class {
            constructor(e, r) {
                this.element = e.createElement("div"),
                this.element.classList.add(Mu()),
                r.viewProps.bindClassModifiers(this.element),
                dt(r.shows, ar(this.element, Mu(void 0, "v")))
            }
        }
        ,
        ji = class {
            constructor(e, r) {
                this.shows = Z(!1),
                this.viewProps = r.viewProps,
                this.view = new oo(e,{
                    shows: this.shows,
                    viewProps: this.viewProps
                })
            }
        }
        ,
        ku = N("txt"),
        ao = class {
            constructor(e, r) {
                this.onChange_ = this.onChange_.bind(this),
                this.element = e.createElement("div"),
                this.element.classList.add(ku()),
                r.viewProps.bindClassModifiers(this.element),
                this.props_ = r.props,
                this.props_.emitter.on("change", this.onChange_);
                let i = e.createElement("input");
                i.classList.add(ku("i")),
                i.type = "text",
                r.viewProps.bindDisabled(i),
                this.element.appendChild(i),
                this.inputElement = i,
                r.value.emitter.on("change", this.onChange_),
                this.value_ = r.value,
                this.refresh()
            }
            refresh() {
                let e = this.props_.get("formatter");
                this.inputElement.value = e(this.value_.rawValue)
            }
            onChange_() {
                this.refresh()
            }
        }
        ,
        Yt = class {
            constructor(e, r) {
                this.onInputChange_ = this.onInputChange_.bind(this),
                this.parser_ = r.parser,
                this.props = r.props,
                this.value = r.value,
                this.viewProps = r.viewProps,
                this.view = new ao(e,{
                    props: r.props,
                    value: this.value,
                    viewProps: this.viewProps
                }),
                this.view.inputElement.addEventListener("change", this.onInputChange_)
            }
            onInputChange_(e) {
                let i = e.currentTarget.value
                  , s = this.parser_(i);
                K(s) || (this.value.rawValue = s),
                this.view.refresh()
            }
        }
        ;
        Yv = Pe(0);
        bt = class {
            constructor(e) {
                this.lastTouch_ = null,
                this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this),
                this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this),
                this.onMouseDown_ = this.onMouseDown_.bind(this),
                this.onTouchEnd_ = this.onTouchEnd_.bind(this),
                this.onTouchMove_ = this.onTouchMove_.bind(this),
                this.onTouchStart_ = this.onTouchStart_.bind(this),
                this.elem_ = e,
                this.emitter = new se,
                e.addEventListener("touchstart", this.onTouchStart_, {
                    passive: !1
                }),
                e.addEventListener("touchmove", this.onTouchMove_, {
                    passive: !0
                }),
                e.addEventListener("touchend", this.onTouchEnd_),
                e.addEventListener("mousedown", this.onMouseDown_)
            }
            computePosition_(e) {
                let r = this.elem_.getBoundingClientRect();
                return {
                    bounds: {
                        width: r.width,
                        height: r.height
                    },
                    point: e ? {
                        x: e.x,
                        y: e.y
                    } : null
                }
            }
            onMouseDown_(e) {
                var r;
                e.preventDefault(),
                (r = e.currentTarget) === null || r === void 0 || r.focus();
                let i = this.elem_.ownerDocument;
                i.addEventListener("mousemove", this.onDocumentMouseMove_),
                i.addEventListener("mouseup", this.onDocumentMouseUp_),
                this.emitter.emit("down", {
                    altKey: e.altKey,
                    data: this.computePosition_(wn(e, this.elem_)),
                    sender: this,
                    shiftKey: e.shiftKey
                })
            }
            onDocumentMouseMove_(e) {
                this.emitter.emit("move", {
                    altKey: e.altKey,
                    data: this.computePosition_(wn(e, this.elem_)),
                    sender: this,
                    shiftKey: e.shiftKey
                })
            }
            onDocumentMouseUp_(e) {
                let r = this.elem_.ownerDocument;
                r.removeEventListener("mousemove", this.onDocumentMouseMove_),
                r.removeEventListener("mouseup", this.onDocumentMouseUp_),
                this.emitter.emit("up", {
                    altKey: e.altKey,
                    data: this.computePosition_(wn(e, this.elem_)),
                    sender: this,
                    shiftKey: e.shiftKey
                })
            }
            onTouchStart_(e) {
                e.preventDefault();
                let r = e.targetTouches.item(0)
                  , i = this.elem_.getBoundingClientRect();
                this.emitter.emit("down", {
                    altKey: e.altKey,
                    data: this.computePosition_(r ? {
                        x: r.clientX - i.left,
                        y: r.clientY - i.top
                    } : void 0),
                    sender: this,
                    shiftKey: e.shiftKey
                }),
                this.lastTouch_ = r
            }
            onTouchMove_(e) {
                let r = e.targetTouches.item(0)
                  , i = this.elem_.getBoundingClientRect();
                this.emitter.emit("move", {
                    altKey: e.altKey,
                    data: this.computePosition_(r ? {
                        x: r.clientX - i.left,
                        y: r.clientY - i.top
                    } : void 0),
                    sender: this,
                    shiftKey: e.shiftKey
                }),
                this.lastTouch_ = r
            }
            onTouchEnd_(e) {
                var r;
                let i = (r = e.targetTouches.item(0)) !== null && r !== void 0 ? r : this.lastTouch_
                  , s = this.elem_.getBoundingClientRect();
                this.emitter.emit("up", {
                    altKey: e.altKey,
                    data: this.computePosition_(i ? {
                        x: i.clientX - s.left,
                        y: i.clientY - s.top
                    } : void 0),
                    sender: this,
                    shiftKey: e.shiftKey
                })
            }
        }
        ,
        Fe = N("txt"),
        co = class {
            constructor(e, r) {
                this.onChange_ = this.onChange_.bind(this),
                this.props_ = r.props,
                this.props_.emitter.on("change", this.onChange_),
                this.element = e.createElement("div"),
                this.element.classList.add(Fe(), Fe(void 0, "num")),
                r.arrayPosition && this.element.classList.add(Fe(void 0, r.arrayPosition)),
                r.viewProps.bindClassModifiers(this.element);
                let i = e.createElement("input");
                i.classList.add(Fe("i")),
                i.type = "text",
                r.viewProps.bindDisabled(i),
                this.element.appendChild(i),
                this.inputElement = i,
                this.onDraggingChange_ = this.onDraggingChange_.bind(this),
                this.dragging_ = r.dragging,
                this.dragging_.emitter.on("change", this.onDraggingChange_),
                this.element.classList.add(Fe()),
                this.inputElement.classList.add(Fe("i"));
                let s = e.createElement("div");
                s.classList.add(Fe("k")),
                this.element.appendChild(s),
                this.knobElement = s;
                let n = e.createElementNS(We, "svg");
                n.classList.add(Fe("g")),
                this.knobElement.appendChild(n);
                let o = e.createElementNS(We, "path");
                o.classList.add(Fe("gb")),
                n.appendChild(o),
                this.guideBodyElem_ = o;
                let a = e.createElementNS(We, "path");
                a.classList.add(Fe("gh")),
                n.appendChild(a),
                this.guideHeadElem_ = a;
                let l = e.createElement("div");
                l.classList.add(N("tt")()),
                this.knobElement.appendChild(l),
                this.tooltipElem_ = l,
                r.value.emitter.on("change", this.onChange_),
                this.value = r.value,
                this.refresh()
            }
            onDraggingChange_(e) {
                if (e.rawValue === null) {
                    this.element.classList.remove(Fe(void 0, "drg"));
                    return
                }
                this.element.classList.add(Fe(void 0, "drg"));
                let r = e.rawValue / this.props_.get("pointerScale")
                  , i = r + (r > 0 ? -1 : r < 0 ? 1 : 0)
                  , s = ae(-i, -4, 4);
                this.guideHeadElem_.setAttributeNS(null, "d", [`M ${i + s},0 L${i},4 L${i + s},8`, `M ${r},-1 L${r},9`].join(" ")),
                this.guideBodyElem_.setAttributeNS(null, "d", `M 0,4 L${r},4`);
                let n = this.props_.get("formatter");
                this.tooltipElem_.textContent = n(this.value.rawValue),
                this.tooltipElem_.style.left = `${r}px`
            }
            refresh() {
                let e = this.props_.get("formatter");
                this.inputElement.value = e(this.value.rawValue)
            }
            onChange_() {
                this.refresh()
            }
        }
        ,
        Wt = class {
            constructor(e, r) {
                var i;
                this.originRawValue_ = 0,
                this.onInputChange_ = this.onInputChange_.bind(this),
                this.onInputKeyDown_ = this.onInputKeyDown_.bind(this),
                this.onInputKeyUp_ = this.onInputKeyUp_.bind(this),
                this.onPointerDown_ = this.onPointerDown_.bind(this),
                this.onPointerMove_ = this.onPointerMove_.bind(this),
                this.onPointerUp_ = this.onPointerUp_.bind(this),
                this.parser_ = r.parser,
                this.props = r.props,
                this.sliderProps_ = (i = r.sliderProps) !== null && i !== void 0 ? i : null,
                this.value = r.value,
                this.viewProps = r.viewProps,
                this.dragging_ = Z(null),
                this.view = new co(e,{
                    arrayPosition: r.arrayPosition,
                    dragging: this.dragging_,
                    props: this.props,
                    value: this.value,
                    viewProps: this.viewProps
                }),
                this.view.inputElement.addEventListener("change", this.onInputChange_),
                this.view.inputElement.addEventListener("keydown", this.onInputKeyDown_),
                this.view.inputElement.addEventListener("keyup", this.onInputKeyUp_);
                let s = new bt(this.view.knobElement);
                s.emitter.on("down", this.onPointerDown_),
                s.emitter.on("move", this.onPointerMove_),
                s.emitter.on("up", this.onPointerUp_)
            }
            constrainValue_(e) {
                var r, i;
                let s = (r = this.sliderProps_) === null || r === void 0 ? void 0 : r.get("min")
                  , n = (i = this.sliderProps_) === null || i === void 0 ? void 0 : i.get("max")
                  , o = e;
                return s !== void 0 && (o = Math.max(o, s)),
                n !== void 0 && (o = Math.min(o, n)),
                o
            }
            onInputChange_(e) {
                let i = e.currentTarget.value
                  , s = this.parser_(i);
                K(s) || (this.value.rawValue = this.constrainValue_(s)),
                this.view.refresh()
            }
            onInputKeyDown_(e) {
                let r = Se(this.props.get("keyScale"), Br(e));
                r !== 0 && this.value.setRawValue(this.constrainValue_(this.value.rawValue + r), {
                    forceEmit: !1,
                    last: !1
                })
            }
            onInputKeyUp_(e) {
                Se(this.props.get("keyScale"), Br(e)) !== 0 && this.value.setRawValue(this.value.rawValue, {
                    forceEmit: !0,
                    last: !0
                })
            }
            onPointerDown_() {
                this.originRawValue_ = this.value.rawValue,
                this.dragging_.rawValue = 0
            }
            computeDraggingValue_(e) {
                if (!e.point)
                    return null;
                let r = e.point.x - e.bounds.width / 2;
                return this.constrainValue_(this.originRawValue_ + r * this.props.get("pointerScale"))
            }
            onPointerMove_(e) {
                let r = this.computeDraggingValue_(e.data);
                r !== null && (this.value.setRawValue(r, {
                    forceEmit: !1,
                    last: !1
                }),
                this.dragging_.rawValue = this.value.rawValue - this.originRawValue_)
            }
            onPointerUp_(e) {
                let r = this.computeDraggingValue_(e.data);
                r !== null && (this.value.setRawValue(r, {
                    forceEmit: !0,
                    last: !0
                }),
                this.dragging_.rawValue = null)
            }
        }
        ,
        _n = N("sld"),
        ho = class {
            constructor(e, r) {
                this.onChange_ = this.onChange_.bind(this),
                this.props_ = r.props,
                this.props_.emitter.on("change", this.onChange_),
                this.element = e.createElement("div"),
                this.element.classList.add(_n()),
                r.viewProps.bindClassModifiers(this.element);
                let i = e.createElement("div");
                i.classList.add(_n("t")),
                r.viewProps.bindTabIndex(i),
                this.element.appendChild(i),
                this.trackElement = i;
                let s = e.createElement("div");
                s.classList.add(_n("k")),
                this.trackElement.appendChild(s),
                this.knobElement = s,
                r.value.emitter.on("change", this.onChange_),
                this.value = r.value,
                this.update_()
            }
            update_() {
                let e = ae($(this.value.rawValue, this.props_.get("min"), this.props_.get("max"), 0, 100), 0, 100);
                this.knobElement.style.width = `${e}%`
            }
            onChange_() {
                this.update_()
            }
        }
        ,
        uo = class {
            constructor(e, r) {
                this.onKeyDown_ = this.onKeyDown_.bind(this),
                this.onKeyUp_ = this.onKeyUp_.bind(this),
                this.onPointerDownOrMove_ = this.onPointerDownOrMove_.bind(this),
                this.onPointerUp_ = this.onPointerUp_.bind(this),
                this.value = r.value,
                this.viewProps = r.viewProps,
                this.props = r.props,
                this.view = new ho(e,{
                    props: this.props,
                    value: this.value,
                    viewProps: this.viewProps
                }),
                this.ptHandler_ = new bt(this.view.trackElement),
                this.ptHandler_.emitter.on("down", this.onPointerDownOrMove_),
                this.ptHandler_.emitter.on("move", this.onPointerDownOrMove_),
                this.ptHandler_.emitter.on("up", this.onPointerUp_),
                this.view.trackElement.addEventListener("keydown", this.onKeyDown_),
                this.view.trackElement.addEventListener("keyup", this.onKeyUp_)
            }
            handlePointerEvent_(e, r) {
                e.point && this.value.setRawValue($(ae(e.point.x, 0, e.bounds.width), 0, e.bounds.width, this.props.get("min"), this.props.get("max")), r)
            }
            onPointerDownOrMove_(e) {
                this.handlePointerEvent_(e.data, {
                    forceEmit: !1,
                    last: !1
                })
            }
            onPointerUp_(e) {
                this.handlePointerEvent_(e.data, {
                    forceEmit: !0,
                    last: !0
                })
            }
            onKeyDown_(e) {
                let r = Se(this.props.get("keyScale"), gt(e));
                r !== 0 && this.value.setRawValue(this.value.rawValue + r, {
                    forceEmit: !1,
                    last: !1
                })
            }
            onKeyUp_(e) {
                Se(this.props.get("keyScale"), gt(e)) !== 0 && this.value.setRawValue(this.value.rawValue, {
                    forceEmit: !0,
                    last: !0
                })
            }
        }
        ,
        yn = N("sldtxt"),
        po = class {
            constructor(e, r) {
                this.element = e.createElement("div"),
                this.element.classList.add(yn());
                let i = e.createElement("div");
                i.classList.add(yn("s")),
                this.sliderView_ = r.sliderView,
                i.appendChild(this.sliderView_.element),
                this.element.appendChild(i);
                let s = e.createElement("div");
                s.classList.add(yn("t")),
                this.textView_ = r.textView,
                s.appendChild(this.textView_.element),
                this.element.appendChild(s)
            }
        }
        ,
        nr = class {
            constructor(e, r) {
                this.value = r.value,
                this.viewProps = r.viewProps,
                this.sliderC_ = new uo(e,{
                    props: r.sliderProps,
                    value: r.value,
                    viewProps: this.viewProps
                }),
                this.textC_ = new Wt(e,{
                    parser: r.parser,
                    props: r.textProps,
                    sliderProps: r.sliderProps,
                    value: r.value,
                    viewProps: r.viewProps
                }),
                this.view = new po(e,{
                    sliderView: this.sliderC_.view,
                    textView: this.textC_.view
                })
            }
            get sliderController() {
                return this.sliderC_
            }
            get textController() {
                return this.textC_
            }
            importProps(e) {
                return Te(e, null, r => ({
                    max: r.required.number,
                    min: r.required.number
                }), r => {
                    let i = this.sliderC_.props;
                    return i.set("max", r.max),
                    i.set("min", r.min),
                    !0
                }
                )
            }
            exportProps() {
                let e = this.sliderC_.props;
                return Ae(null, {
                    max: e.get("max"),
                    min: e.get("min")
                })
            }
        }
        ;
        Gv = {
            containerUnitSize: "cnt-usz"
        };
        Ai = N("ckb"),
        fo = class {
            constructor(e, r) {
                this.onValueChange_ = this.onValueChange_.bind(this),
                this.element = e.createElement("div"),
                this.element.classList.add(Ai()),
                r.viewProps.bindClassModifiers(this.element);
                let i = e.createElement("label");
                i.classList.add(Ai("l")),
                this.element.appendChild(i),
                this.labelElement = i;
                let s = e.createElement("input");
                s.classList.add(Ai("i")),
                s.type = "checkbox",
                this.labelElement.appendChild(s),
                this.inputElement = s,
                r.viewProps.bindDisabled(this.inputElement);
                let n = e.createElement("div");
                n.classList.add(Ai("w")),
                this.labelElement.appendChild(n);
                let o = Gi(e, "check");
                n.appendChild(o),
                r.value.emitter.on("change", this.onValueChange_),
                this.value = r.value,
                this.update_()
            }
            update_() {
                this.inputElement.checked = this.value.rawValue
            }
            onValueChange_() {
                this.update_()
            }
        }
        ,
        mo = class {
            constructor(e, r) {
                this.onInputChange_ = this.onInputChange_.bind(this),
                this.onLabelMouseDown_ = this.onLabelMouseDown_.bind(this),
                this.value = r.value,
                this.viewProps = r.viewProps,
                this.view = new fo(e,{
                    value: this.value,
                    viewProps: this.viewProps
                }),
                this.view.inputElement.addEventListener("change", this.onInputChange_),
                this.view.labelElement.addEventListener("mousedown", this.onLabelMouseDown_)
            }
            onInputChange_(e) {
                let r = e.currentTarget;
                this.value.rawValue = r.checked,
                e.preventDefault(),
                e.stopPropagation()
            }
            onLabelMouseDown_(e) {
                e.preventDefault()
            }
        }
        ;
        Qv = we({
            id: "input-bool",
            type: "input",
            accept: (t, e) => {
                if (typeof t != "boolean")
                    return null;
                let r = ee(e, i => ({
                    options: i.optional.custom(Wr),
                    readonly: i.optional.constant(!1)
                }));
                return r ? {
                    initialValue: t,
                    params: r
                } : null
            }
            ,
            binding: {
                reader: t => od,
                constraint: t => Kv(t.params),
                writer: t => Gr
            },
            controller: t => {
                let e = t.document
                  , r = t.value
                  , i = t.constraint
                  , s = i && Ui(i, $t);
                return s ? new Ke(e,{
                    props: new B({
                        options: s.values.value("options")
                    }),
                    value: r,
                    viewProps: t.viewProps
                }) : new mo(e,{
                    value: r,
                    viewProps: t.viewProps
                })
            }
            ,
            api(t) {
                return typeof t.controller.value.rawValue != "boolean" ? null : t.controller.valueController instanceof Ke ? new zr(t.controller) : null
            }
        }),
        zt = N("col"),
        vo = class {
            constructor(e, r) {
                this.element = e.createElement("div"),
                this.element.classList.add(zt()),
                r.foldable.bindExpandedClass(this.element, zt(void 0, "expanded")),
                Xe(r.foldable, "completed", ar(this.element, zt(void 0, "cpl")));
                let i = e.createElement("div");
                i.classList.add(zt("h")),
                this.element.appendChild(i);
                let s = e.createElement("div");
                s.classList.add(zt("s")),
                i.appendChild(s),
                this.swatchElement = s;
                let n = e.createElement("div");
                if (n.classList.add(zt("t")),
                i.appendChild(n),
                this.textElement = n,
                r.pickerLayout === "inline") {
                    let o = e.createElement("div");
                    o.classList.add(zt("p")),
                    this.element.appendChild(o),
                    this.pickerElement = o
                } else
                    this.pickerElement = null
            }
        }
        ;
        ig = {
            hsl: {
                hsl: (t, e, r) => [t, e, r],
                hsv: tg,
                rgb: Jv
            },
            hsv: {
                hsl: rg,
                hsv: (t, e, r) => [t, e, r],
                rgb: dd
            },
            rgb: {
                hsl: Zv,
                hsv: eg,
                rgb: (t, e, r) => [t, e, r]
            }
        };
        j = class t {
            static black() {
                return new t([0, 0, 0],"rgb")
            }
            constructor(e, r) {
                this.type = "int",
                this.mode = r,
                this.comps_ = pd(e, r, this.type)
            }
            getComponents(e) {
                return Xi(fd(Qe(this.comps_), {
                    mode: this.mode,
                    type: this.type
                }, {
                    mode: e != null ? e : this.mode,
                    type: this.type
                }), this.comps_[3])
            }
            toRgbaObject() {
                let e = this.getComponents("rgb");
                return {
                    r: e[0],
                    g: e[1],
                    b: e[2],
                    a: e[3]
                }
            }
        }
        ,
        St = N("colp"),
        go = class {
            constructor(e, r) {
                this.alphaViews_ = null,
                this.element = e.createElement("div"),
                this.element.classList.add(St()),
                r.viewProps.bindClassModifiers(this.element);
                let i = e.createElement("div");
                i.classList.add(St("hsv"));
                let s = e.createElement("div");
                s.classList.add(St("sv")),
                this.svPaletteView_ = r.svPaletteView,
                s.appendChild(this.svPaletteView_.element),
                i.appendChild(s);
                let n = e.createElement("div");
                n.classList.add(St("h")),
                this.hPaletteView_ = r.hPaletteView,
                n.appendChild(this.hPaletteView_.element),
                i.appendChild(n),
                this.element.appendChild(i);
                let o = e.createElement("div");
                if (o.classList.add(St("rgb")),
                this.textsView_ = r.textsView,
                o.appendChild(this.textsView_.element),
                this.element.appendChild(o),
                r.alphaViews) {
                    this.alphaViews_ = {
                        palette: r.alphaViews.palette,
                        text: r.alphaViews.text
                    };
                    let a = e.createElement("div");
                    a.classList.add(St("a"));
                    let l = e.createElement("div");
                    l.classList.add(St("ap")),
                    l.appendChild(this.alphaViews_.palette.element),
                    a.appendChild(l);
                    let c = e.createElement("div");
                    c.classList.add(St("at")),
                    c.appendChild(this.alphaViews_.text.element),
                    a.appendChild(c),
                    this.element.appendChild(a)
                }
            }
            get allFocusableElements() {
                let e = [this.svPaletteView_.element, this.hPaletteView_.element, this.textsView_.modeSelectElement, ...this.textsView_.inputViews.map(r => r.inputElement)];
                return this.alphaViews_ && e.push(this.alphaViews_.palette.element, this.alphaViews_.text.inputElement),
                e
            }
        }
        ;
        Nr = class {
            constructor(e, r) {
                this.type = "float",
                this.mode = r,
                this.comps_ = pd(e, r, this.type)
            }
            getComponents(e) {
                return Xi(fd(Qe(this.comps_), {
                    mode: this.mode,
                    type: this.type
                }, {
                    mode: e != null ? e : this.mode,
                    type: this.type
                }), this.comps_[3])
            }
            toRgbaObject() {
                let e = this.getComponents("rgb");
                return {
                    r: e[0],
                    g: e[1],
                    b: e[2],
                    a: e[3]
                }
            }
        }
        ,
        og = {
            int: (t, e) => new j(t,e),
            float: (t, e) => new Nr(t,e)
        };
        dg = {
            deg: t => t,
            grad: t => t * 360 / 400,
            rad: t => t * 360 / (2 * Math.PI),
            turn: t => t * 360
        };
        wg = [{
            parser: yd,
            result: {
                alpha: !1,
                mode: "rgb",
                notation: "hex"
            }
        }, {
            parser: xd,
            result: {
                alpha: !0,
                mode: "rgb",
                notation: "hex"
            }
        }, {
            parser: gd,
            result: {
                alpha: !1,
                mode: "rgb",
                notation: "func"
            }
        }, {
            parser: bd,
            result: {
                alpha: !0,
                mode: "rgb",
                notation: "func"
            }
        }, {
            parser: wd,
            result: {
                alpha: !1,
                mode: "hsl",
                notation: "func"
            }
        }, {
            parser: _d,
            result: {
                alpha: !0,
                mode: "hsl",
                notation: "func"
            }
        }, {
            parser: Ed,
            result: {
                alpha: !1,
                mode: "rgb",
                notation: "object"
            }
        }, {
            parser: Cd,
            result: {
                alpha: !0,
                mode: "rgb",
                notation: "object"
            }
        }];
        Mg = [{
            format: {
                alpha: !1,
                mode: "rgb",
                notation: "hex",
                type: "int"
            },
            stringifier: ha
        }, {
            format: {
                alpha: !0,
                mode: "rgb",
                notation: "hex",
                type: "int"
            },
            stringifier: ua
        }, {
            format: {
                alpha: !1,
                mode: "rgb",
                notation: "func",
                type: "int"
            },
            stringifier: Pd
        }, {
            format: {
                alpha: !0,
                mode: "rgb",
                notation: "func",
                type: "int"
            },
            stringifier: Oi
        }, {
            format: {
                alpha: !1,
                mode: "hsl",
                notation: "func",
                type: "int"
            },
            stringifier: Eg
        }, {
            format: {
                alpha: !0,
                mode: "hsl",
                notation: "func",
                type: "int"
            },
            stringifier: Cg
        }, ...["int", "float"].reduce( (t, e) => [...t, {
            format: {
                alpha: !1,
                mode: "rgb",
                notation: "object",
                type: e
            },
            stringifier: Sg(e)
        }, {
            format: {
                alpha: !0,
                mode: "rgb",
                notation: "object",
                type: e
            },
            stringifier: Pg(e)
        }], [])];
        Tr = N("apl"),
        bo = class {
            constructor(e, r) {
                this.onValueChange_ = this.onValueChange_.bind(this),
                this.value = r.value,
                this.value.emitter.on("change", this.onValueChange_),
                this.element = e.createElement("div"),
                this.element.classList.add(Tr()),
                r.viewProps.bindClassModifiers(this.element),
                r.viewProps.bindTabIndex(this.element);
                let i = e.createElement("div");
                i.classList.add(Tr("b")),
                this.element.appendChild(i);
                let s = e.createElement("div");
                s.classList.add(Tr("c")),
                i.appendChild(s),
                this.colorElem_ = s;
                let n = e.createElement("div");
                n.classList.add(Tr("m")),
                this.element.appendChild(n),
                this.markerElem_ = n;
                let o = e.createElement("div");
                o.classList.add(Tr("p")),
                this.markerElem_.appendChild(o),
                this.previewElem_ = o,
                this.update_()
            }
            update_() {
                let e = this.value.rawValue
                  , r = e.getComponents("rgb")
                  , i = new j([r[0], r[1], r[2], 0],"rgb")
                  , s = new j([r[0], r[1], r[2], 255],"rgb")
                  , n = ["to right", Oi(i), Oi(s)];
                this.colorElem_.style.background = `linear-gradient(${n.join(",")})`,
                this.previewElem_.style.backgroundColor = Oi(e);
                let o = $(r[3], 0, 1, 0, 100);
                this.markerElem_.style.left = `${o}%`
            }
            onValueChange_() {
                this.update_()
            }
        }
        ,
        wo = class {
            constructor(e, r) {
                this.onKeyDown_ = this.onKeyDown_.bind(this),
                this.onKeyUp_ = this.onKeyUp_.bind(this),
                this.onPointerDown_ = this.onPointerDown_.bind(this),
                this.onPointerMove_ = this.onPointerMove_.bind(this),
                this.onPointerUp_ = this.onPointerUp_.bind(this),
                this.value = r.value,
                this.viewProps = r.viewProps,
                this.view = new bo(e,{
                    value: this.value,
                    viewProps: this.viewProps
                }),
                this.ptHandler_ = new bt(this.view.element),
                this.ptHandler_.emitter.on("down", this.onPointerDown_),
                this.ptHandler_.emitter.on("move", this.onPointerMove_),
                this.ptHandler_.emitter.on("up", this.onPointerUp_),
                this.view.element.addEventListener("keydown", this.onKeyDown_),
                this.view.element.addEventListener("keyup", this.onKeyUp_)
            }
            handlePointerEvent_(e, r) {
                if (!e.point)
                    return;
                let i = e.point.x / e.bounds.width
                  , s = this.value.rawValue
                  , [n,o,a] = s.getComponents("hsv");
                this.value.setRawValue(new j([n, o, a, i],"hsv"), r)
            }
            onPointerDown_(e) {
                this.handlePointerEvent_(e.data, {
                    forceEmit: !1,
                    last: !1
                })
            }
            onPointerMove_(e) {
                this.handlePointerEvent_(e.data, {
                    forceEmit: !1,
                    last: !1
                })
            }
            onPointerUp_(e) {
                this.handlePointerEvent_(e.data, {
                    forceEmit: !0,
                    last: !0
                })
            }
            onKeyDown_(e) {
                let r = Se(Gt(!0), gt(e));
                if (r === 0)
                    return;
                let i = this.value.rawValue
                  , [s,n,o,a] = i.getComponents("hsv");
                this.value.setRawValue(new j([s, n, o, a + r],"hsv"), {
                    forceEmit: !1,
                    last: !1
                })
            }
            onKeyUp_(e) {
                Se(Gt(!0), gt(e)) !== 0 && this.value.setRawValue(this.value.rawValue, {
                    forceEmit: !0,
                    last: !0
                })
            }
        }
        ,
        tr = N("coltxt");
        _o = class {
            constructor(e, r) {
                this.element = e.createElement("div"),
                this.element.classList.add(tr()),
                r.viewProps.bindClassModifiers(this.element);
                let i = e.createElement("div");
                i.classList.add(tr("m")),
                this.modeElem_ = kg(e),
                this.modeElem_.classList.add(tr("ms")),
                i.appendChild(this.modeSelectElement),
                r.viewProps.bindDisabled(this.modeElem_);
                let s = e.createElement("div");
                s.classList.add(tr("mm")),
                s.appendChild(Gi(e, "dropdown")),
                i.appendChild(s),
                this.element.appendChild(i);
                let n = e.createElement("div");
                n.classList.add(tr("w")),
                this.element.appendChild(n),
                this.inputsElem_ = n,
                this.inputViews_ = r.inputViews,
                this.applyInputViews_(),
                dt(r.mode, o => {
                    this.modeElem_.value = o
                }
                )
            }
            get modeSelectElement() {
                return this.modeElem_
            }
            get inputViews() {
                return this.inputViews_
            }
            set inputViews(e) {
                this.inputViews_ = e,
                this.applyInputViews_()
            }
            applyInputViews_() {
                td(this.inputsElem_);
                let e = this.element.ownerDocument;
                this.inputViews_.forEach(r => {
                    let i = e.createElement("div");
                    i.classList.add(tr("c")),
                    i.appendChild(r.element),
                    this.inputsElem_.appendChild(i)
                }
                )
            }
        }
        ;
        yo = class {
            constructor(e, r) {
                this.onModeSelectChange_ = this.onModeSelectChange_.bind(this),
                this.colorType_ = r.colorType,
                this.value = r.value,
                this.viewProps = r.viewProps,
                this.colorMode = Z(this.value.rawValue.mode),
                this.ccs_ = this.createComponentControllers_(e),
                this.view = new _o(e,{
                    mode: this.colorMode,
                    inputViews: [this.ccs_[0].view, this.ccs_[1].view, this.ccs_[2].view],
                    viewProps: this.viewProps
                }),
                this.view.modeSelectElement.addEventListener("change", this.onModeSelectChange_)
            }
            createComponentControllers_(e) {
                let r = this.colorMode.rawValue;
                return Fg(r) ? Rg(e, {
                    colorMode: r,
                    colorType: this.colorType_,
                    value: this.value,
                    viewProps: this.viewProps
                }) : Lg(e, {
                    value: this.value,
                    viewProps: this.viewProps
                })
            }
            onModeSelectChange_(e) {
                let r = e.currentTarget;
                this.colorMode.rawValue = r.value,
                this.ccs_ = this.createComponentControllers_(this.view.element.ownerDocument),
                this.view.inputViews = this.ccs_.map(i => i.view)
            }
        }
        ,
        xn = N("hpl"),
        xo = class {
            constructor(e, r) {
                this.onValueChange_ = this.onValueChange_.bind(this),
                this.value = r.value,
                this.value.emitter.on("change", this.onValueChange_),
                this.element = e.createElement("div"),
                this.element.classList.add(xn()),
                r.viewProps.bindClassModifiers(this.element),
                r.viewProps.bindTabIndex(this.element);
                let i = e.createElement("div");
                i.classList.add(xn("c")),
                this.element.appendChild(i);
                let s = e.createElement("div");
                s.classList.add(xn("m")),
                this.element.appendChild(s),
                this.markerElem_ = s,
                this.update_()
            }
            update_() {
                let e = this.value.rawValue
                  , [r] = e.getComponents("hsv");
                this.markerElem_.style.backgroundColor = Pd(new j([r, 100, 100],"hsv"));
                let i = $(r, 0, 360, 0, 100);
                this.markerElem_.style.left = `${i}%`
            }
            onValueChange_() {
                this.update_()
            }
        }
        ,
        Eo = class {
            constructor(e, r) {
                this.onKeyDown_ = this.onKeyDown_.bind(this),
                this.onKeyUp_ = this.onKeyUp_.bind(this),
                this.onPointerDown_ = this.onPointerDown_.bind(this),
                this.onPointerMove_ = this.onPointerMove_.bind(this),
                this.onPointerUp_ = this.onPointerUp_.bind(this),
                this.value = r.value,
                this.viewProps = r.viewProps,
                this.view = new xo(e,{
                    value: this.value,
                    viewProps: this.viewProps
                }),
                this.ptHandler_ = new bt(this.view.element),
                this.ptHandler_.emitter.on("down", this.onPointerDown_),
                this.ptHandler_.emitter.on("move", this.onPointerMove_),
                this.ptHandler_.emitter.on("up", this.onPointerUp_),
                this.view.element.addEventListener("keydown", this.onKeyDown_),
                this.view.element.addEventListener("keyup", this.onKeyUp_)
            }
            handlePointerEvent_(e, r) {
                if (!e.point)
                    return;
                let i = $(ae(e.point.x, 0, e.bounds.width), 0, e.bounds.width, 0, 360)
                  , s = this.value.rawValue
                  , [,n,o,a] = s.getComponents("hsv");
                this.value.setRawValue(new j([i, n, o, a],"hsv"), r)
            }
            onPointerDown_(e) {
                this.handlePointerEvent_(e.data, {
                    forceEmit: !1,
                    last: !1
                })
            }
            onPointerMove_(e) {
                this.handlePointerEvent_(e.data, {
                    forceEmit: !1,
                    last: !1
                })
            }
            onPointerUp_(e) {
                this.handlePointerEvent_(e.data, {
                    forceEmit: !0,
                    last: !0
                })
            }
            onKeyDown_(e) {
                let r = Se(Gt(!1), gt(e));
                if (r === 0)
                    return;
                let i = this.value.rawValue
                  , [s,n,o,a] = i.getComponents("hsv");
                this.value.setRawValue(new j([s + r, n, o, a],"hsv"), {
                    forceEmit: !1,
                    last: !1
                })
            }
            onKeyUp_(e) {
                Se(Gt(!1), gt(e)) !== 0 && this.value.setRawValue(this.value.rawValue, {
                    forceEmit: !0,
                    last: !0
                })
            }
        }
        ,
        En = N("svp"),
        Lu = 64,
        Co = class {
            constructor(e, r) {
                this.onValueChange_ = this.onValueChange_.bind(this),
                this.value = r.value,
                this.value.emitter.on("change", this.onValueChange_),
                this.element = e.createElement("div"),
                this.element.classList.add(En()),
                r.viewProps.bindClassModifiers(this.element),
                r.viewProps.bindTabIndex(this.element);
                let i = e.createElement("canvas");
                i.height = Lu,
                i.width = Lu,
                i.classList.add(En("c")),
                this.element.appendChild(i),
                this.canvasElement = i;
                let s = e.createElement("div");
                s.classList.add(En("m")),
                this.element.appendChild(s),
                this.markerElem_ = s,
                this.update_()
            }
            update_() {
                let e = bv(this.canvasElement);
                if (!e)
                    return;
                let i = this.value.rawValue.getComponents("hsv")
                  , s = this.canvasElement.width
                  , n = this.canvasElement.height
                  , o = e.getImageData(0, 0, s, n)
                  , a = o.data;
                for (let h = 0; h < n; h++)
                    for (let u = 0; u < s; u++) {
                        let d = $(u, 0, s, 0, 100)
                          , f = $(h, 0, n, 100, 0)
                          , p = dd(i[0], d, f)
                          , m = (h * s + u) * 4;
                        a[m] = p[0],
                        a[m + 1] = p[1],
                        a[m + 2] = p[2],
                        a[m + 3] = 255
                    }
                e.putImageData(o, 0, 0);
                let l = $(i[1], 0, 100, 0, 100);
                this.markerElem_.style.left = `${l}%`;
                let c = $(i[2], 0, 100, 100, 0);
                this.markerElem_.style.top = `${c}%`
            }
            onValueChange_() {
                this.update_()
            }
        }
        ,
        So = class {
            constructor(e, r) {
                this.onKeyDown_ = this.onKeyDown_.bind(this),
                this.onKeyUp_ = this.onKeyUp_.bind(this),
                this.onPointerDown_ = this.onPointerDown_.bind(this),
                this.onPointerMove_ = this.onPointerMove_.bind(this),
                this.onPointerUp_ = this.onPointerUp_.bind(this),
                this.value = r.value,
                this.viewProps = r.viewProps,
                this.view = new Co(e,{
                    value: this.value,
                    viewProps: this.viewProps
                }),
                this.ptHandler_ = new bt(this.view.element),
                this.ptHandler_.emitter.on("down", this.onPointerDown_),
                this.ptHandler_.emitter.on("move", this.onPointerMove_),
                this.ptHandler_.emitter.on("up", this.onPointerUp_),
                this.view.element.addEventListener("keydown", this.onKeyDown_),
                this.view.element.addEventListener("keyup", this.onKeyUp_)
            }
            handlePointerEvent_(e, r) {
                if (!e.point)
                    return;
                let i = $(e.point.x, 0, e.bounds.width, 0, 100)
                  , s = $(e.point.y, 0, e.bounds.height, 100, 0)
                  , [n,,,o] = this.value.rawValue.getComponents("hsv");
                this.value.setRawValue(new j([n, i, s, o],"hsv"), r)
            }
            onPointerDown_(e) {
                this.handlePointerEvent_(e.data, {
                    forceEmit: !1,
                    last: !1
                })
            }
            onPointerMove_(e) {
                this.handlePointerEvent_(e.data, {
                    forceEmit: !1,
                    last: !1
                })
            }
            onPointerUp_(e) {
                this.handlePointerEvent_(e.data, {
                    forceEmit: !0,
                    last: !0
                })
            }
            onKeyDown_(e) {
                ld(e.key) && e.preventDefault();
                let[r,i,s,n] = this.value.rawValue.getComponents("hsv")
                  , o = Gt(!1)
                  , a = Se(o, gt(e))
                  , l = Se(o, Br(e));
                a === 0 && l === 0 || this.value.setRawValue(new j([r, i + a, s + l, n],"hsv"), {
                    forceEmit: !1,
                    last: !1
                })
            }
            onKeyUp_(e) {
                let r = Gt(!1)
                  , i = Se(r, gt(e))
                  , s = Se(r, Br(e));
                i === 0 && s === 0 || this.value.setRawValue(this.value.rawValue, {
                    forceEmit: !0,
                    last: !0
                })
            }
        }
        ,
        Po = class {
            constructor(e, r) {
                this.value = r.value,
                this.viewProps = r.viewProps,
                this.hPaletteC_ = new Eo(e,{
                    value: this.value,
                    viewProps: this.viewProps
                }),
                this.svPaletteC_ = new So(e,{
                    value: this.value,
                    viewProps: this.viewProps
                }),
                this.alphaIcs_ = r.supportsAlpha ? {
                    palette: new wo(e,{
                        value: this.value,
                        viewProps: this.viewProps
                    }),
                    text: new Wt(e,{
                        parser: pt,
                        props: B.fromObject({
                            pointerScale: .01,
                            keyScale: .1,
                            formatter: Pe(2)
                        }),
                        value: Z(0, {
                            constraint: new Nt({
                                min: 0,
                                max: 1
                            })
                        }),
                        viewProps: this.viewProps
                    })
                } : null,
                this.alphaIcs_ && hr({
                    primary: this.value,
                    secondary: this.alphaIcs_.text.value,
                    forward: i => i.getComponents()[3],
                    backward: (i, s) => {
                        let n = i.getComponents();
                        return n[3] = s,
                        new j(n,i.mode)
                    }
                }),
                this.textsC_ = new yo(e,{
                    colorType: r.colorType,
                    value: this.value,
                    viewProps: this.viewProps
                }),
                this.view = new go(e,{
                    alphaViews: this.alphaIcs_ ? {
                        palette: this.alphaIcs_.palette.view,
                        text: this.alphaIcs_.text.view
                    } : null,
                    hPaletteView: this.hPaletteC_.view,
                    supportsAlpha: r.supportsAlpha,
                    svPaletteView: this.svPaletteC_.view,
                    textsView: this.textsC_.view,
                    viewProps: this.viewProps
                })
            }
            get textsController() {
                return this.textsC_
            }
        }
        ,
        Cn = N("colsw"),
        Mo = class {
            constructor(e, r) {
                this.onValueChange_ = this.onValueChange_.bind(this),
                r.value.emitter.on("change", this.onValueChange_),
                this.value = r.value,
                this.element = e.createElement("div"),
                this.element.classList.add(Cn()),
                r.viewProps.bindClassModifiers(this.element);
                let i = e.createElement("div");
                i.classList.add(Cn("sw")),
                this.element.appendChild(i),
                this.swatchElem_ = i;
                let s = e.createElement("button");
                s.classList.add(Cn("b")),
                r.viewProps.bindDisabled(s),
                this.element.appendChild(s),
                this.buttonElement = s,
                this.update_()
            }
            update_() {
                let e = this.value.rawValue;
                this.swatchElem_.style.backgroundColor = ua(e)
            }
            onValueChange_() {
                this.update_()
            }
        }
        ,
        ko = class {
            constructor(e, r) {
                this.value = r.value,
                this.viewProps = r.viewProps,
                this.view = new Mo(e,{
                    value: this.value,
                    viewProps: this.viewProps
                })
            }
        }
        ,
        Ur = class {
            constructor(e, r) {
                this.onButtonBlur_ = this.onButtonBlur_.bind(this),
                this.onButtonClick_ = this.onButtonClick_.bind(this),
                this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this),
                this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this),
                this.value = r.value,
                this.viewProps = r.viewProps,
                this.foldable_ = Dr.create(r.expanded),
                this.swatchC_ = new ko(e,{
                    value: this.value,
                    viewProps: this.viewProps
                });
                let i = this.swatchC_.view.buttonElement;
                i.addEventListener("blur", this.onButtonBlur_),
                i.addEventListener("click", this.onButtonClick_),
                this.textC_ = new Yt(e,{
                    parser: r.parser,
                    props: B.fromObject({
                        formatter: r.formatter
                    }),
                    value: this.value,
                    viewProps: this.viewProps
                }),
                this.view = new vo(e,{
                    foldable: this.foldable_,
                    pickerLayout: r.pickerLayout
                }),
                this.view.swatchElement.appendChild(this.swatchC_.view.element),
                this.view.textElement.appendChild(this.textC_.view.element),
                this.popC_ = r.pickerLayout === "popup" ? new ji(e,{
                    viewProps: this.viewProps
                }) : null;
                let s = new Po(e,{
                    colorType: r.colorType,
                    supportsAlpha: r.supportsAlpha,
                    value: this.value,
                    viewProps: this.viewProps
                });
                s.view.allFocusableElements.forEach(n => {
                    n.addEventListener("blur", this.onPopupChildBlur_),
                    n.addEventListener("keydown", this.onPopupChildKeydown_)
                }
                ),
                this.pickerC_ = s,
                this.popC_ ? (this.view.element.appendChild(this.popC_.view.element),
                this.popC_.view.element.appendChild(s.view.element),
                hr({
                    primary: this.foldable_.value("expanded"),
                    secondary: this.popC_.shows,
                    forward: n => n,
                    backward: (n, o) => o
                })) : this.view.pickerElement && (this.view.pickerElement.appendChild(this.pickerC_.view.element),
                na(this.foldable_, this.view.pickerElement))
            }
            get textController() {
                return this.textC_
            }
            onButtonBlur_(e) {
                if (!this.popC_)
                    return;
                let r = this.view.element
                  , i = e.relatedTarget;
                (!i || !r.contains(i)) && (this.popC_.shows.rawValue = !1)
            }
            onButtonClick_() {
                this.foldable_.set("expanded", !this.foldable_.get("expanded")),
                this.foldable_.get("expanded") && this.pickerC_.view.allFocusableElements[0].focus()
            }
            onPopupChildBlur_(e) {
                if (!this.popC_)
                    return;
                let r = this.popC_.view.element
                  , i = rd(e);
                i && r.contains(i) || i && i === this.swatchC_.view.buttonElement && !ra(r.ownerDocument) || (this.popC_.shows.rawValue = !1)
            }
            onPopupChildKeydown_(e) {
                this.popC_ ? e.key === "Escape" && (this.popC_.shows.rawValue = !1) : this.view.pickerElement && e.key === "Escape" && this.swatchC_.view.buttonElement.focus()
            }
        }
        ;
        Xg = we({
            id: "input-color-number",
            type: "input",
            accept: (t, e) => {
                if (typeof t != "number" || !Gg(e))
                    return null;
                let r = la(e);
                return r ? {
                    initialValue: t,
                    params: Object.assign(Object.assign({}, r), {
                        supportsAlpha: Yg(e)
                    })
                } : null
            }
            ,
            binding: {
                reader: t => t.params.supportsAlpha ? qg : Bg,
                equals: da,
                writer: t => Ug(t.params.supportsAlpha)
            },
            controller: t => {
                var e, r;
                return new Ur(t.document,{
                    colorType: "int",
                    expanded: (e = t.params.expanded) !== null && e !== void 0 ? e : !1,
                    formatter: Wg(t.params.supportsAlpha),
                    parser: Xr("int"),
                    pickerLayout: (r = t.params.picker) !== null && r !== void 0 ? r : "popup",
                    supportsAlpha: t.params.supportsAlpha,
                    value: t.value,
                    viewProps: t.viewProps
                })
            }
        });
        e0 = we({
            id: "input-color-object",
            type: "input",
            accept: (t, e) => {
                var r;
                if (!Rd(t))
                    return null;
                let i = la(e);
                return i ? {
                    initialValue: t,
                    params: Object.assign(Object.assign({}, i), {
                        colorType: (r = md(e)) !== null && r !== void 0 ? r : "int"
                    })
                } : null
            }
            ,
            binding: {
                reader: t => Zg(t.params.colorType),
                equals: da,
                writer: t => $g(Qg(t.initialValue), t.params.colorType)
            },
            controller: t => {
                var e, r;
                let i = Od(t.initialValue);
                return new Ur(t.document,{
                    colorType: t.params.colorType,
                    expanded: (e = t.params.expanded) !== null && e !== void 0 ? e : !1,
                    formatter: Jg(i, t.params.colorType),
                    parser: Xr("int"),
                    pickerLayout: (r = t.params.picker) !== null && r !== void 0 ? r : "popup",
                    supportsAlpha: i,
                    value: t.value,
                    viewProps: t.viewProps
                })
            }
        }),
        t0 = we({
            id: "input-color-string",
            type: "input",
            accept: (t, e) => {
                if (typeof t != "string" || e.view === "text")
                    return null;
                let r = yg(t, md(e));
                if (!r)
                    return null;
                let i = Td(r);
                if (!i)
                    return null;
                let s = la(e);
                return s ? {
                    initialValue: t,
                    params: Object.assign(Object.assign({}, s), {
                        format: r,
                        stringifier: i
                    })
                } : null
            }
            ,
            binding: {
                reader: () => xg,
                equals: da,
                writer: t => {
                    let e = Ng(t.params.format);
                    if (!e)
                        throw le.notBindable();
                    return e
                }
            },
            controller: t => {
                var e, r;
                return new Ur(t.document,{
                    colorType: t.params.format.type,
                    expanded: (e = t.params.expanded) !== null && e !== void 0 ? e : !1,
                    formatter: t.params.stringifier,
                    parser: Xr("int"),
                    pickerLayout: (r = t.params.picker) !== null && r !== void 0 ? r : "popup",
                    supportsAlpha: t.params.format.alpha,
                    value: t.value,
                    viewProps: t.viewProps
                })
            }
        }),
        jr = class {
            constructor(e) {
                this.components = e.components,
                this.asm_ = e.assembly
            }
            constrain(e) {
                let r = this.asm_.toComponents(e).map( (i, s) => {
                    var n, o;
                    return (o = (n = this.components[s]) === null || n === void 0 ? void 0 : n.constrain(i)) !== null && o !== void 0 ? o : i
                }
                );
                return this.asm_.fromComponents(r)
            }
        }
        ,
        Du = N("pndtxt"),
        To = class {
            constructor(e, r) {
                this.textViews = r.textViews,
                this.element = e.createElement("div"),
                this.element.classList.add(Du()),
                this.textViews.forEach(i => {
                    let s = e.createElement("div");
                    s.classList.add(Du("a")),
                    s.appendChild(i.element),
                    this.element.appendChild(s)
                }
                )
            }
        }
        ;
        Hr = class {
            constructor(e, r) {
                this.value = r.value,
                this.viewProps = r.viewProps,
                this.acs_ = r.axes.map( (i, s) => r0(e, r, s)),
                this.acs_.forEach( (i, s) => {
                    hr({
                        primary: this.value,
                        secondary: i.value,
                        forward: n => r.assembly.toComponents(n)[s],
                        backward: (n, o) => {
                            let a = r.assembly.toComponents(n);
                            return a[s] = o,
                            r.assembly.fromComponents(a)
                        }
                    })
                }
                ),
                this.view = new To(e,{
                    textViews: this.acs_.map(i => i.view)
                })
            }
            get textControllers() {
                return this.acs_
            }
        }
        ,
        Ao = class extends jt {
            get max() {
                return this.controller.valueController.sliderController.props.get("max")
            }
            set max(e) {
                this.controller.valueController.sliderController.props.set("max", e)
            }
            get min() {
                return this.controller.valueController.sliderController.props.get("min")
            }
            set min(e) {
                this.controller.valueController.sliderController.props.set("min", e)
            }
        }
        ;
        s0 = we({
            id: "input-number",
            type: "input",
            accept: (t, e) => {
                if (typeof t != "number")
                    return null;
                let r = ee(e, i => Object.assign(Object.assign({}, Zu(i)), {
                    options: i.optional.custom(Wr),
                    readonly: i.optional.constant(!1)
                }));
                return r ? {
                    initialValue: t,
                    params: r
                } : null
            }
            ,
            binding: {
                reader: t => $u,
                constraint: t => i0(t.params, t.initialValue),
                writer: t => Gr
            },
            controller: t => {
                let e = t.value
                  , r = t.constraint
                  , i = r && Ui(r, $t);
                if (i)
                    return new Ke(t.document,{
                        props: new B({
                            options: i.values.value("options")
                        }),
                        value: e,
                        viewProps: t.viewProps
                    });
                let s = Qu(t.params, e.rawValue)
                  , n = r && Ui(r, Nt);
                return n ? new nr(t.document,Object.assign(Object.assign({}, cd(Object.assign(Object.assign({}, s), {
                    keyScale: Z(s.keyScale),
                    max: n.values.value("max"),
                    min: n.values.value("min")
                }))), {
                    parser: pt,
                    value: e,
                    viewProps: t.viewProps
                })) : new Wt(t.document,{
                    parser: pt,
                    props: B.fromObject(s),
                    value: e,
                    viewProps: t.viewProps
                })
            }
            ,
            api(t) {
                return typeof t.controller.value.rawValue != "number" ? null : t.controller.valueController instanceof nr ? new Ao(t.controller) : t.controller.valueController instanceof Ke ? new zr(t.controller) : null
            }
        }),
        Ge = class {
            constructor(e=0, r=0) {
                this.x = e,
                this.y = r
            }
            getComponents() {
                return [this.x, this.y]
            }
            static isObject(e) {
                if (K(e))
                    return !1;
                let r = e.x
                  , i = e.y;
                return !(typeof r != "number" || typeof i != "number")
            }
            static equals(e, r) {
                return e.x === r.x && e.y === r.y
            }
            toObject() {
                return {
                    x: this.x,
                    y: this.y
                }
            }
        }
        ,
        Ld = {
            toComponents: t => t.getComponents(),
            fromComponents: t => new Ge(...t)
        },
        rr = N("p2d"),
        Oo = class {
            constructor(e, r) {
                this.element = e.createElement("div"),
                this.element.classList.add(rr()),
                r.viewProps.bindClassModifiers(this.element),
                dt(r.expanded, ar(this.element, rr(void 0, "expanded")));
                let i = e.createElement("div");
                i.classList.add(rr("h")),
                this.element.appendChild(i);
                let s = e.createElement("button");
                s.classList.add(rr("b")),
                s.appendChild(Gi(e, "p2dpad")),
                r.viewProps.bindDisabled(s),
                i.appendChild(s),
                this.buttonElement = s;
                let n = e.createElement("div");
                if (n.classList.add(rr("t")),
                i.appendChild(n),
                this.textElement = n,
                r.pickerLayout === "inline") {
                    let o = e.createElement("div");
                    o.classList.add(rr("p")),
                    this.element.appendChild(o),
                    this.pickerElement = o
                } else
                    this.pickerElement = null
            }
        }
        ,
        Pt = N("p2dp"),
        Ro = class {
            constructor(e, r) {
                this.onFoldableChange_ = this.onFoldableChange_.bind(this),
                this.onPropsChange_ = this.onPropsChange_.bind(this),
                this.onValueChange_ = this.onValueChange_.bind(this),
                this.props_ = r.props,
                this.props_.emitter.on("change", this.onPropsChange_),
                this.element = e.createElement("div"),
                this.element.classList.add(Pt()),
                r.layout === "popup" && this.element.classList.add(Pt(void 0, "p")),
                r.viewProps.bindClassModifiers(this.element);
                let i = e.createElement("div");
                i.classList.add(Pt("p")),
                r.viewProps.bindTabIndex(i),
                this.element.appendChild(i),
                this.padElement = i;
                let s = e.createElementNS(We, "svg");
                s.classList.add(Pt("g")),
                this.padElement.appendChild(s),
                this.svgElem_ = s;
                let n = e.createElementNS(We, "line");
                n.classList.add(Pt("ax")),
                n.setAttributeNS(null, "x1", "0"),
                n.setAttributeNS(null, "y1", "50%"),
                n.setAttributeNS(null, "x2", "100%"),
                n.setAttributeNS(null, "y2", "50%"),
                this.svgElem_.appendChild(n);
                let o = e.createElementNS(We, "line");
                o.classList.add(Pt("ax")),
                o.setAttributeNS(null, "x1", "50%"),
                o.setAttributeNS(null, "y1", "0"),
                o.setAttributeNS(null, "x2", "50%"),
                o.setAttributeNS(null, "y2", "100%"),
                this.svgElem_.appendChild(o);
                let a = e.createElementNS(We, "line");
                a.classList.add(Pt("l")),
                a.setAttributeNS(null, "x1", "50%"),
                a.setAttributeNS(null, "y1", "50%"),
                this.svgElem_.appendChild(a),
                this.lineElem_ = a;
                let l = e.createElement("div");
                l.classList.add(Pt("m")),
                this.padElement.appendChild(l),
                this.markerElem_ = l,
                r.value.emitter.on("change", this.onValueChange_),
                this.value = r.value,
                this.update_()
            }
            get allFocusableElements() {
                return [this.padElement]
            }
            update_() {
                let[e,r] = this.value.rawValue.getComponents()
                  , i = this.props_.get("max")
                  , s = $(e, -i, +i, 0, 100)
                  , n = $(r, -i, +i, 0, 100)
                  , o = this.props_.get("invertsY") ? 100 - n : n;
                this.lineElem_.setAttributeNS(null, "x2", `${s}%`),
                this.lineElem_.setAttributeNS(null, "y2", `${o}%`),
                this.markerElem_.style.left = `${s}%`,
                this.markerElem_.style.top = `${o}%`
            }
            onValueChange_() {
                this.update_()
            }
            onPropsChange_() {
                this.update_()
            }
            onFoldableChange_() {
                this.update_()
            }
        }
        ;
        Lo = class {
            constructor(e, r) {
                this.onPadKeyDown_ = this.onPadKeyDown_.bind(this),
                this.onPadKeyUp_ = this.onPadKeyUp_.bind(this),
                this.onPointerDown_ = this.onPointerDown_.bind(this),
                this.onPointerMove_ = this.onPointerMove_.bind(this),
                this.onPointerUp_ = this.onPointerUp_.bind(this),
                this.props = r.props,
                this.value = r.value,
                this.viewProps = r.viewProps,
                this.view = new Ro(e,{
                    layout: r.layout,
                    props: this.props,
                    value: this.value,
                    viewProps: this.viewProps
                }),
                this.ptHandler_ = new bt(this.view.padElement),
                this.ptHandler_.emitter.on("down", this.onPointerDown_),
                this.ptHandler_.emitter.on("move", this.onPointerMove_),
                this.ptHandler_.emitter.on("up", this.onPointerUp_),
                this.view.padElement.addEventListener("keydown", this.onPadKeyDown_),
                this.view.padElement.addEventListener("keyup", this.onPadKeyUp_)
            }
            handlePointerEvent_(e, r) {
                if (!e.point)
                    return;
                let i = this.props.get("max")
                  , s = $(e.point.x, 0, e.bounds.width, -i, +i)
                  , n = $(this.props.get("invertsY") ? e.bounds.height - e.point.y : e.point.y, 0, e.bounds.height, -i, +i);
                this.value.setRawValue(new Ge(s,n), r)
            }
            onPointerDown_(e) {
                this.handlePointerEvent_(e.data, {
                    forceEmit: !1,
                    last: !1
                })
            }
            onPointerMove_(e) {
                this.handlePointerEvent_(e.data, {
                    forceEmit: !1,
                    last: !1
                })
            }
            onPointerUp_(e) {
                this.handlePointerEvent_(e.data, {
                    forceEmit: !0,
                    last: !0
                })
            }
            onPadKeyDown_(e) {
                ld(e.key) && e.preventDefault();
                let[r,i] = Vu(e, [this.props.get("xKeyScale"), this.props.get("yKeyScale")], this.props.get("invertsY"));
                r === 0 && i === 0 || this.value.setRawValue(new Ge(this.value.rawValue.x + r,this.value.rawValue.y + i), {
                    forceEmit: !1,
                    last: !1
                })
            }
            onPadKeyUp_(e) {
                let[r,i] = Vu(e, [this.props.get("xKeyScale"), this.props.get("yKeyScale")], this.props.get("invertsY"));
                r === 0 && i === 0 || this.value.setRawValue(this.value.rawValue, {
                    forceEmit: !0,
                    last: !0
                })
            }
        }
        ,
        Fo = class {
            constructor(e, r) {
                var i, s;
                this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this),
                this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this),
                this.onPadButtonBlur_ = this.onPadButtonBlur_.bind(this),
                this.onPadButtonClick_ = this.onPadButtonClick_.bind(this),
                this.value = r.value,
                this.viewProps = r.viewProps,
                this.foldable_ = Dr.create(r.expanded),
                this.popC_ = r.pickerLayout === "popup" ? new ji(e,{
                    viewProps: this.viewProps
                }) : null;
                let n = new Lo(e,{
                    layout: r.pickerLayout,
                    props: new B({
                        invertsY: Z(r.invertsY),
                        max: Z(r.max),
                        xKeyScale: r.axes[0].textProps.value("keyScale"),
                        yKeyScale: r.axes[1].textProps.value("keyScale")
                    }),
                    value: this.value,
                    viewProps: this.viewProps
                });
                n.view.allFocusableElements.forEach(o => {
                    o.addEventListener("blur", this.onPopupChildBlur_),
                    o.addEventListener("keydown", this.onPopupChildKeydown_)
                }
                ),
                this.pickerC_ = n,
                this.textC_ = new Hr(e,{
                    assembly: Ld,
                    axes: r.axes,
                    parser: r.parser,
                    value: this.value,
                    viewProps: this.viewProps
                }),
                this.view = new Oo(e,{
                    expanded: this.foldable_.value("expanded"),
                    pickerLayout: r.pickerLayout,
                    viewProps: this.viewProps
                }),
                this.view.textElement.appendChild(this.textC_.view.element),
                (i = this.view.buttonElement) === null || i === void 0 || i.addEventListener("blur", this.onPadButtonBlur_),
                (s = this.view.buttonElement) === null || s === void 0 || s.addEventListener("click", this.onPadButtonClick_),
                this.popC_ ? (this.view.element.appendChild(this.popC_.view.element),
                this.popC_.view.element.appendChild(this.pickerC_.view.element),
                hr({
                    primary: this.foldable_.value("expanded"),
                    secondary: this.popC_.shows,
                    forward: o => o,
                    backward: (o, a) => a
                })) : this.view.pickerElement && (this.view.pickerElement.appendChild(this.pickerC_.view.element),
                na(this.foldable_, this.view.pickerElement))
            }
            get textController() {
                return this.textC_
            }
            onPadButtonBlur_(e) {
                if (!this.popC_)
                    return;
                let r = this.view.element
                  , i = e.relatedTarget;
                (!i || !r.contains(i)) && (this.popC_.shows.rawValue = !1)
            }
            onPadButtonClick_() {
                this.foldable_.set("expanded", !this.foldable_.get("expanded")),
                this.foldable_.get("expanded") && this.pickerC_.view.allFocusableElements[0].focus()
            }
            onPopupChildBlur_(e) {
                if (!this.popC_)
                    return;
                let r = this.popC_.view.element
                  , i = rd(e);
                i && r.contains(i) || i && i === this.view.buttonElement && !ra(r.ownerDocument) || (this.popC_.shows.rawValue = !1)
            }
            onPopupChildKeydown_(e) {
                this.popC_ ? e.key === "Escape" && (this.popC_.shows.rawValue = !1) : this.view.pickerElement && e.key === "Escape" && this.view.buttonElement.focus()
            }
        }
        ;
        h0 = we({
            id: "input-point2d",
            type: "input",
            accept: (t, e) => {
                if (!Ge.isObject(t))
                    return null;
                let r = ee(e, i => Object.assign(Object.assign({}, qr(i)), {
                    expanded: i.optional.boolean,
                    picker: i.optional.custom(ud),
                    readonly: i.optional.constant(!1),
                    x: i.optional.custom(kt),
                    y: i.optional.object(Object.assign(Object.assign({}, qr(i)), {
                        inverted: i.optional.boolean
                    }))
                }));
                return r ? {
                    initialValue: t,
                    params: r
                } : null
            }
            ,
            binding: {
                reader: () => n0,
                constraint: t => a0(t.params, t.initialValue),
                equals: Ge.equals,
                writer: () => o0
            },
            controller: t => {
                var e, r;
                let i = t.document
                  , s = t.value
                  , n = t.constraint
                  , o = [t.params.x, t.params.y];
                return new Fo(i,{
                    axes: s.rawValue.getComponents().map( (a, l) => {
                        var c;
                        return ta({
                            constraint: n.components[l],
                            initialValue: a,
                            params: qt(t.params, (c = o[l]) !== null && c !== void 0 ? c : {})
                        })
                    }
                    ),
                    expanded: (e = t.params.expanded) !== null && e !== void 0 ? e : !1,
                    invertsY: c0(t.params),
                    max: l0(t.params, s.rawValue),
                    parser: pt,
                    pickerLayout: (r = t.params.picker) !== null && r !== void 0 ? r : "popup",
                    value: s,
                    viewProps: t.viewProps
                })
            }
        }),
        Tt = class {
            constructor(e=0, r=0, i=0) {
                this.x = e,
                this.y = r,
                this.z = i
            }
            getComponents() {
                return [this.x, this.y, this.z]
            }
            static isObject(e) {
                if (K(e))
                    return !1;
                let r = e.x
                  , i = e.y
                  , s = e.z;
                return !(typeof r != "number" || typeof i != "number" || typeof s != "number")
            }
            static equals(e, r) {
                return e.x === r.x && e.y === r.y && e.z === r.z
            }
            toObject() {
                return {
                    x: this.x,
                    y: this.y,
                    z: this.z
                }
            }
        }
        ,
        Fd = {
            toComponents: t => t.getComponents(),
            fromComponents: t => new Tt(...t)
        };
        f0 = we({
            id: "input-point3d",
            type: "input",
            accept: (t, e) => {
                if (!Tt.isObject(t))
                    return null;
                let r = ee(e, i => Object.assign(Object.assign({}, qr(i)), {
                    readonly: i.optional.constant(!1),
                    x: i.optional.custom(kt),
                    y: i.optional.custom(kt),
                    z: i.optional.custom(kt)
                }));
                return r ? {
                    initialValue: t,
                    params: r
                } : null
            }
            ,
            binding: {
                reader: t => u0,
                constraint: t => p0(t.params, t.initialValue),
                equals: Tt.equals,
                writer: t => d0
            },
            controller: t => {
                let e = t.value
                  , r = t.constraint
                  , i = [t.params.x, t.params.y, t.params.z];
                return new Hr(t.document,{
                    assembly: Fd,
                    axes: e.rawValue.getComponents().map( (s, n) => {
                        var o;
                        return ta({
                            constraint: r.components[n],
                            initialValue: s,
                            params: qt(t.params, (o = i[n]) !== null && o !== void 0 ? o : {})
                        })
                    }
                    ),
                    parser: pt,
                    value: e,
                    viewProps: t.viewProps
                })
            }
        }),
        At = class {
            constructor(e=0, r=0, i=0, s=0) {
                this.x = e,
                this.y = r,
                this.z = i,
                this.w = s
            }
            getComponents() {
                return [this.x, this.y, this.z, this.w]
            }
            static isObject(e) {
                if (K(e))
                    return !1;
                let r = e.x
                  , i = e.y
                  , s = e.z
                  , n = e.w;
                return !(typeof r != "number" || typeof i != "number" || typeof s != "number" || typeof n != "number")
            }
            static equals(e, r) {
                return e.x === r.x && e.y === r.y && e.z === r.z && e.w === r.w
            }
            toObject() {
                return {
                    x: this.x,
                    y: this.y,
                    z: this.z,
                    w: this.w
                }
            }
        }
        ,
        Dd = {
            toComponents: t => t.getComponents(),
            fromComponents: t => new At(...t)
        };
        b0 = we({
            id: "input-point4d",
            type: "input",
            accept: (t, e) => {
                if (!At.isObject(t))
                    return null;
                let r = ee(e, i => Object.assign(Object.assign({}, qr(i)), {
                    readonly: i.optional.constant(!1),
                    w: i.optional.custom(kt),
                    x: i.optional.custom(kt),
                    y: i.optional.custom(kt),
                    z: i.optional.custom(kt)
                }));
                return r ? {
                    initialValue: t,
                    params: r
                } : null
            }
            ,
            binding: {
                reader: t => m0,
                constraint: t => g0(t.params, t.initialValue),
                equals: At.equals,
                writer: t => v0
            },
            controller: t => {
                let e = t.value
                  , r = t.constraint
                  , i = [t.params.x, t.params.y, t.params.z, t.params.w];
                return new Hr(t.document,{
                    assembly: Dd,
                    axes: e.rawValue.getComponents().map( (s, n) => {
                        var o;
                        return ta({
                            constraint: r.components[n],
                            initialValue: s,
                            params: qt(t.params, (o = i[n]) !== null && o !== void 0 ? o : {})
                        })
                    }
                    ),
                    parser: pt,
                    value: e,
                    viewProps: t.viewProps
                })
            }
        });
        _0 = we({
            id: "input-string",
            type: "input",
            accept: (t, e) => {
                if (typeof t != "string")
                    return null;
                let r = ee(e, i => ({
                    readonly: i.optional.constant(!1),
                    options: i.optional.custom(Wr)
                }));
                return r ? {
                    initialValue: t,
                    params: r
                } : null
            }
            ,
            binding: {
                reader: t => ad,
                constraint: t => w0(t.params),
                writer: t => Gr
            },
            controller: t => {
                let e = t.document
                  , r = t.value
                  , i = t.constraint
                  , s = i && Ui(i, $t);
                return s ? new Ke(e,{
                    props: new B({
                        options: s.values.value("options")
                    }),
                    value: r,
                    viewProps: t.viewProps
                }) : new Yt(e,{
                    parser: n => n,
                    props: B.fromObject({
                        formatter: lo
                    }),
                    value: r,
                    viewProps: t.viewProps
                })
            }
            ,
            api(t) {
                return typeof t.controller.value.rawValue != "string" ? null : t.controller.valueController instanceof Ke ? new zr(t.controller) : null
            }
        }),
        Kr = {
            monitor: {
                defaultInterval: 200,
                defaultRows: 3
            }
        },
        zu = N("mll"),
        Do = class {
            constructor(e, r) {
                this.onValueUpdate_ = this.onValueUpdate_.bind(this),
                this.formatter_ = r.formatter,
                this.element = e.createElement("div"),
                this.element.classList.add(zu()),
                r.viewProps.bindClassModifiers(this.element);
                let i = e.createElement("textarea");
                i.classList.add(zu("i")),
                i.style.height = `calc(var(${hd("containerUnitSize")}) * ${r.rows})`,
                i.readOnly = !0,
                r.viewProps.bindDisabled(i),
                this.element.appendChild(i),
                this.textareaElem_ = i,
                r.value.emitter.on("change", this.onValueUpdate_),
                this.value = r.value,
                this.update_()
            }
            update_() {
                let e = this.textareaElem_
                  , r = e.scrollTop === e.scrollHeight - e.clientHeight
                  , i = [];
                this.value.rawValue.forEach(s => {
                    s !== void 0 && i.push(this.formatter_(s))
                }
                ),
                e.textContent = i.join(`
`),
                r && (e.scrollTop = e.scrollHeight)
            }
            onValueUpdate_() {
                this.update_()
            }
        }
        ,
        $r = class {
            constructor(e, r) {
                this.value = r.value,
                this.viewProps = r.viewProps,
                this.view = new Do(e,{
                    formatter: r.formatter,
                    rows: r.rows,
                    value: this.value,
                    viewProps: this.viewProps
                })
            }
        }
        ,
        Bu = N("sgl"),
        Vo = class {
            constructor(e, r) {
                this.onValueUpdate_ = this.onValueUpdate_.bind(this),
                this.formatter_ = r.formatter,
                this.element = e.createElement("div"),
                this.element.classList.add(Bu()),
                r.viewProps.bindClassModifiers(this.element);
                let i = e.createElement("input");
                i.classList.add(Bu("i")),
                i.readOnly = !0,
                i.type = "text",
                r.viewProps.bindDisabled(i),
                this.element.appendChild(i),
                this.inputElement = i,
                r.value.emitter.on("change", this.onValueUpdate_),
                this.value = r.value,
                this.update_()
            }
            update_() {
                let e = this.value.rawValue
                  , r = e[e.length - 1];
                this.inputElement.value = r !== void 0 ? this.formatter_(r) : ""
            }
            onValueUpdate_() {
                this.update_()
            }
        }
        ,
        Yr = class {
            constructor(e, r) {
                this.value = r.value,
                this.viewProps = r.viewProps,
                this.view = new Vo(e,{
                    formatter: r.formatter,
                    value: this.value,
                    viewProps: this.viewProps
                })
            }
        }
        ,
        y0 = we({
            id: "monitor-bool",
            type: "monitor",
            accept: (t, e) => {
                if (typeof t != "boolean")
                    return null;
                let r = ee(e, i => ({
                    readonly: i.required.constant(!0),
                    rows: i.optional.number
                }));
                return r ? {
                    initialValue: t,
                    params: r
                } : null
            }
            ,
            binding: {
                reader: t => od
            },
            controller: t => {
                var e;
                return t.value.rawValue.length === 1 ? new Yr(t.document,{
                    formatter: Tu,
                    value: t.value,
                    viewProps: t.viewProps
                }) : new $r(t.document,{
                    formatter: Tu,
                    rows: (e = t.params.rows) !== null && e !== void 0 ? e : Kr.monitor.defaultRows,
                    value: t.value,
                    viewProps: t.viewProps
                })
            }
        }),
        Io = class extends jt {
            get max() {
                return this.controller.valueController.props.get("max")
            }
            set max(e) {
                this.controller.valueController.props.set("max", e)
            }
            get min() {
                return this.controller.valueController.props.get("min")
            }
            set min(e) {
                this.controller.valueController.props.set("min", e)
            }
        }
        ,
        Mt = N("grl"),
        zo = class {
            constructor(e, r) {
                this.onCursorChange_ = this.onCursorChange_.bind(this),
                this.onValueUpdate_ = this.onValueUpdate_.bind(this),
                this.element = e.createElement("div"),
                this.element.classList.add(Mt()),
                r.viewProps.bindClassModifiers(this.element),
                this.formatter_ = r.formatter,
                this.props_ = r.props,
                this.cursor_ = r.cursor,
                this.cursor_.emitter.on("change", this.onCursorChange_);
                let i = e.createElementNS(We, "svg");
                i.classList.add(Mt("g")),
                i.style.height = `calc(var(${hd("containerUnitSize")}) * ${r.rows})`,
                this.element.appendChild(i),
                this.svgElem_ = i;
                let s = e.createElementNS(We, "polyline");
                this.svgElem_.appendChild(s),
                this.lineElem_ = s;
                let n = e.createElement("div");
                n.classList.add(Mt("t"), N("tt")()),
                this.element.appendChild(n),
                this.tooltipElem_ = n,
                r.value.emitter.on("change", this.onValueUpdate_),
                this.value = r.value,
                this.update_()
            }
            get graphElement() {
                return this.svgElem_
            }
            update_() {
                let {clientWidth: e, clientHeight: r} = this.element
                  , i = this.value.rawValue.length - 1
                  , s = this.props_.get("min")
                  , n = this.props_.get("max")
                  , o = [];
                this.value.rawValue.forEach( (u, d) => {
                    if (u === void 0)
                        return;
                    let f = $(d, 0, i, 0, e)
                      , p = $(u, s, n, r, 0);
                    o.push([f, p].join(","))
                }
                ),
                this.lineElem_.setAttributeNS(null, "points", o.join(" "));
                let a = this.tooltipElem_
                  , l = this.value.rawValue[this.cursor_.rawValue];
                if (l === void 0) {
                    a.classList.remove(Mt("t", "a"));
                    return
                }
                let c = $(this.cursor_.rawValue, 0, i, 0, e)
                  , h = $(l, s, n, r, 0);
                a.style.left = `${c}px`,
                a.style.top = `${h}px`,
                a.textContent = `${this.formatter_(l)}`,
                a.classList.contains(Mt("t", "a")) || (a.classList.add(Mt("t", "a"), Mt("t", "in")),
                Fi(a),
                a.classList.remove(Mt("t", "in")))
            }
            onValueUpdate_() {
                this.update_()
            }
            onCursorChange_() {
                this.update_()
            }
        }
        ,
        $i = class {
            constructor(e, r) {
                if (this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this),
                this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this),
                this.onGraphPointerDown_ = this.onGraphPointerDown_.bind(this),
                this.onGraphPointerMove_ = this.onGraphPointerMove_.bind(this),
                this.onGraphPointerUp_ = this.onGraphPointerUp_.bind(this),
                this.props = r.props,
                this.value = r.value,
                this.viewProps = r.viewProps,
                this.cursor_ = Z(-1),
                this.view = new zo(e,{
                    cursor: this.cursor_,
                    formatter: r.formatter,
                    rows: r.rows,
                    props: this.props,
                    value: this.value,
                    viewProps: this.viewProps
                }),
                !ra(e))
                    this.view.element.addEventListener("mousemove", this.onGraphMouseMove_),
                    this.view.element.addEventListener("mouseleave", this.onGraphMouseLeave_);
                else {
                    let i = new bt(this.view.element);
                    i.emitter.on("down", this.onGraphPointerDown_),
                    i.emitter.on("move", this.onGraphPointerMove_),
                    i.emitter.on("up", this.onGraphPointerUp_)
                }
            }
            importProps(e) {
                return Te(e, null, r => ({
                    max: r.required.number,
                    min: r.required.number
                }), r => (this.props.set("max", r.max),
                this.props.set("min", r.min),
                !0))
            }
            exportProps() {
                return Ae(null, {
                    max: this.props.get("max"),
                    min: this.props.get("min")
                })
            }
            onGraphMouseLeave_() {
                this.cursor_.rawValue = -1
            }
            onGraphMouseMove_(e) {
                let {clientWidth: r} = this.view.element;
                this.cursor_.rawValue = Math.floor($(e.offsetX, 0, r, 0, this.value.rawValue.length))
            }
            onGraphPointerDown_(e) {
                this.onGraphPointerMove_(e)
            }
            onGraphPointerMove_(e) {
                if (!e.data.point) {
                    this.cursor_.rawValue = -1;
                    return
                }
                this.cursor_.rawValue = Math.floor($(e.data.point.x, 0, e.data.bounds.width, 0, this.value.rawValue.length))
            }
            onGraphPointerUp_() {
                this.cursor_.rawValue = -1
            }
        }
        ;
        C0 = we({
            id: "monitor-number",
            type: "monitor",
            accept: (t, e) => {
                if (typeof t != "number")
                    return null;
                let r = ee(e, i => ({
                    format: i.optional.function,
                    max: i.optional.number,
                    min: i.optional.number,
                    readonly: i.required.constant(!0),
                    rows: i.optional.number,
                    view: i.optional.string
                }));
                return r ? {
                    initialValue: t,
                    params: r
                } : null
            }
            ,
            binding: {
                defaultBufferSize: t => qu(t) ? 64 : 1,
                reader: t => $u
            },
            controller: t => qu(t.params) ? E0(t) : x0(t),
            api: t => t.controller.valueController instanceof $i ? new Io(t.controller) : null
        }),
        S0 = we({
            id: "monitor-string",
            type: "monitor",
            accept: (t, e) => {
                if (typeof t != "string")
                    return null;
                let r = ee(e, i => ({
                    multiline: i.optional.boolean,
                    readonly: i.required.constant(!0),
                    rows: i.optional.number
                }));
                return r ? {
                    initialValue: t,
                    params: r
                } : null
            }
            ,
            binding: {
                reader: t => ad
            },
            controller: t => {
                var e;
                let r = t.value;
                return r.rawValue.length > 1 || t.params.multiline ? new $r(t.document,{
                    formatter: lo,
                    rows: (e = t.params.rows) !== null && e !== void 0 ? e : Kr.monitor.defaultRows,
                    value: r,
                    viewProps: t.viewProps
                }) : new Yr(t.document,{
                    formatter: lo,
                    value: r,
                    viewProps: t.viewProps
                })
            }
        }),
        qo = class {
            constructor() {
                this.map_ = new Map
            }
            get(e) {
                var r;
                return (r = this.map_.get(e)) !== null && r !== void 0 ? r : null
            }
            has(e) {
                return this.map_.has(e)
            }
            add(e, r) {
                return this.map_.set(e, r),
                e.viewProps.handleDispose( () => {
                    this.map_.delete(e)
                }
                ),
                r
            }
        }
        ,
        No = class {
            constructor(e) {
                this.target = e.target,
                this.reader_ = e.reader,
                this.writer_ = e.writer
            }
            read() {
                return this.reader_(this.target.read())
            }
            write(e) {
                this.writer_(this.target, e)
            }
            inject(e) {
                this.write(this.reader_(e))
            }
        }
        ;
        Uo = class {
            constructor(e) {
                this.target = e.target,
                this.reader_ = e.reader
            }
            read() {
                return this.reader_(this.target.read())
            }
        }
        ;
        jo = class {
            constructor(e) {
                this.pluginsMap_ = {
                    blades: [],
                    inputs: [],
                    monitors: []
                },
                this.apiCache_ = e
            }
            getAll() {
                return [...this.pluginsMap_.blades, ...this.pluginsMap_.inputs, ...this.pluginsMap_.monitors]
            }
            register(e, r) {
                if (!Xv(r.core))
                    throw le.notCompatible(e, r.id);
                r.type === "blade" ? this.pluginsMap_.blades.unshift(r) : r.type === "input" ? this.pluginsMap_.inputs.unshift(r) : r.type === "monitor" && this.pluginsMap_.monitors.unshift(r)
            }
            createInput_(e, r, i) {
                return this.pluginsMap_.inputs.reduce( (s, n) => s != null ? s : P0(n, {
                    document: e,
                    target: r,
                    params: i
                }), null)
            }
            createMonitor_(e, r, i) {
                return this.pluginsMap_.monitors.reduce( (s, n) => s != null ? s : k0(n, {
                    document: e,
                    params: i,
                    target: r
                }), null)
            }
            createBinding(e, r, i) {
                let s = r.read();
                if (K(s))
                    throw new le({
                        context: {
                            key: r.key
                        },
                        type: "nomatchingcontroller"
                    });
                let n = this.createInput_(e, r, i);
                if (n)
                    return n;
                let o = this.createMonitor_(e, r, i);
                if (o)
                    return o;
                throw new le({
                    context: {
                        key: r.key
                    },
                    type: "nomatchingcontroller"
                })
            }
            createBlade(e, r) {
                let i = this.pluginsMap_.blades.reduce( (s, n) => s != null ? s : jv(n, {
                    document: e,
                    params: r
                }), null);
                if (!i)
                    throw new le({
                        type: "nomatchingview",
                        context: {
                            params: r
                        }
                    });
                return i
            }
            createInputBindingApi_(e) {
                let r = this.pluginsMap_.inputs.reduce( (i, s) => {
                    var n, o;
                    return i || ((o = (n = s.api) === null || n === void 0 ? void 0 : n.call(s, {
                        controller: e
                    })) !== null && o !== void 0 ? o : null)
                }
                , null);
                return this.apiCache_.add(e, r != null ? r : new jt(e))
            }
            createMonitorBindingApi_(e) {
                let r = this.pluginsMap_.monitors.reduce( (i, s) => {
                    var n, o;
                    return i || ((o = (n = s.api) === null || n === void 0 ? void 0 : n.call(s, {
                        controller: e
                    })) !== null && o !== void 0 ? o : null)
                }
                , null);
                return this.apiCache_.add(e, r != null ? r : new jt(e))
            }
            createBindingApi(e) {
                if (this.apiCache_.has(e))
                    return this.apiCache_.get(e);
                if (Sv(e))
                    return this.createInputBindingApi_(e);
                if (Av(e))
                    return this.createMonitorBindingApi_(e);
                throw le.shouldNeverHappen()
            }
            createApi(e) {
                if (this.apiCache_.has(e))
                    return this.apiCache_.get(e);
                if (Cv(e))
                    return this.createBindingApi(e);
                let r = this.pluginsMap_.blades.reduce( (i, s) => i != null ? i : s.api({
                    controller: e,
                    pool: this
                }), null);
                if (!r)
                    throw le.shouldNeverHappen();
                return this.apiCache_.add(e, r)
            }
        }
        ,
        T0 = new qo;
        Ho = class extends ft {
            constructor(e) {
                super(e),
                this.emitter_ = new se,
                this.controller.value.emitter.on("change", r => {
                    this.emitter_.emit("change", new Ut(this,r.rawValue))
                }
                )
            }
            get label() {
                return this.controller.labelController.props.get("label")
            }
            set label(e) {
                this.controller.labelController.props.set("label", e)
            }
            get options() {
                return this.controller.valueController.props.get("options")
            }
            set options(e) {
                this.controller.valueController.props.set("options", e)
            }
            get value() {
                return this.controller.value.rawValue
            }
            set value(e) {
                this.controller.value.rawValue = e
            }
            on(e, r) {
                let i = r.bind(this);
                return this.emitter_.on(e, s => {
                    i(s)
                }
                , {
                    key: r
                }),
                this
            }
            off(e, r) {
                return this.emitter_.off(e, r),
                this
            }
        }
        ,
        $o = class extends ft {
        }
        ,
        Yo = class extends ft {
            constructor(e) {
                super(e),
                this.emitter_ = new se,
                this.controller.value.emitter.on("change", r => {
                    this.emitter_.emit("change", new Ut(this,r.rawValue))
                }
                )
            }
            get label() {
                return this.controller.labelController.props.get("label")
            }
            set label(e) {
                this.controller.labelController.props.set("label", e)
            }
            get max() {
                return this.controller.valueController.sliderController.props.get("max")
            }
            set max(e) {
                this.controller.valueController.sliderController.props.set("max", e)
            }
            get min() {
                return this.controller.valueController.sliderController.props.get("min")
            }
            set min(e) {
                this.controller.valueController.sliderController.props.set("min", e)
            }
            get value() {
                return this.controller.value.rawValue
            }
            set value(e) {
                this.controller.value.rawValue = e
            }
            on(e, r) {
                let i = r.bind(this);
                return this.emitter_.on(e, s => {
                    i(s)
                }
                , {
                    key: r
                }),
                this
            }
            off(e, r) {
                return this.emitter_.off(e, r),
                this
            }
        }
        ,
        Wo = class extends ft {
            constructor(e) {
                super(e),
                this.emitter_ = new se,
                this.controller.value.emitter.on("change", r => {
                    this.emitter_.emit("change", new Ut(this,r.rawValue))
                }
                )
            }
            get label() {
                return this.controller.labelController.props.get("label")
            }
            set label(e) {
                this.controller.labelController.props.set("label", e)
            }
            get formatter() {
                return this.controller.valueController.props.get("formatter")
            }
            set formatter(e) {
                this.controller.valueController.props.set("formatter", e)
            }
            get value() {
                return this.controller.value.rawValue
            }
            set value(e) {
                this.controller.value.rawValue = e
            }
            on(e, r) {
                let i = r.bind(this);
                return this.emitter_.on(e, s => {
                    i(s)
                }
                , {
                    key: r
                }),
                this
            }
            off(e, r) {
                return this.emitter_.off(e, r),
                this
            }
        }
        ,
        O0 = function() {
            return {
                id: "list",
                type: "blade",
                core: lr,
                accept(t) {
                    let e = ee(t, r => ({
                        options: r.required.custom(Wr),
                        value: r.required.raw,
                        view: r.required.constant("list"),
                        label: r.optional.string
                    }));
                    return e ? {
                        params: e
                    } : null
                },
                controller(t) {
                    let e = new $t(oa(t.params.options))
                      , r = Z(t.params.value, {
                        constraint: e
                    })
                      , i = new Ke(t.document,{
                        props: new B({
                            options: e.values.value("options")
                        }),
                        value: r,
                        viewProps: t.viewProps
                    });
                    return new mt(t.document,{
                        blade: t.blade,
                        props: B.fromObject({
                            label: t.params.label
                        }),
                        value: r,
                        valueController: i
                    })
                },
                api(t) {
                    return !(t.controller instanceof mt) || !(t.controller.valueController instanceof Ke) ? null : new Ho(t.controller)
                }
            }
        }(),
        Go = class extends qi {
            constructor(e, r) {
                super(e, r)
            }
            get element() {
                return this.controller.view.element
            }
        }
        ,
        Xo = class extends Vr {
            constructor(e, r) {
                super(e, {
                    expanded: r.expanded,
                    blade: r.blade,
                    props: r.props,
                    root: !0,
                    viewProps: r.viewProps
                })
            }
        }
        ,
        Nu = N("spr"),
        Ko = class {
            constructor(e, r) {
                this.element = e.createElement("div"),
                this.element.classList.add(Nu()),
                r.viewProps.bindClassModifiers(this.element);
                let i = e.createElement("hr");
                i.classList.add(Nu("r")),
                this.element.appendChild(i)
            }
        }
        ,
        Yi = class extends sr {
            constructor(e, r) {
                super(Object.assign(Object.assign({}, r), {
                    view: new Ko(e,{
                        viewProps: r.viewProps
                    })
                }))
            }
        }
        ,
        R0 = {
            id: "separator",
            type: "blade",
            core: lr,
            accept(t) {
                let e = ee(t, r => ({
                    view: r.required.constant("separator")
                }));
                return e ? {
                    params: e
                } : null
            },
            controller(t) {
                return new Yi(t.document,{
                    blade: t.blade,
                    viewProps: t.viewProps
                })
            },
            api(t) {
                return t.controller instanceof Yi ? new $o(t.controller) : null
            }
        },
        L0 = {
            id: "slider",
            type: "blade",
            core: lr,
            accept(t) {
                let e = ee(t, r => ({
                    max: r.required.number,
                    min: r.required.number,
                    view: r.required.constant("slider"),
                    format: r.optional.function,
                    label: r.optional.string,
                    value: r.optional.number
                }));
                return e ? {
                    params: e
                } : null
            },
            controller(t) {
                var e, r;
                let i = (e = t.params.value) !== null && e !== void 0 ? e : 0
                  , s = new Nt({
                    max: t.params.max,
                    min: t.params.min
                })
                  , n = Z(i, {
                    constraint: s
                })
                  , o = new nr(t.document,Object.assign(Object.assign({}, cd({
                    formatter: (r = t.params.format) !== null && r !== void 0 ? r : cv,
                    keyScale: Z(1),
                    max: s.values.value("max"),
                    min: s.values.value("min"),
                    pointerScale: Gu(t.params, i)
                })), {
                    parser: pt,
                    value: n,
                    viewProps: t.viewProps
                }));
                return new mt(t.document,{
                    blade: t.blade,
                    props: B.fromObject({
                        label: t.params.label
                    }),
                    value: n,
                    valueController: o
                })
            },
            api(t) {
                return !(t.controller instanceof mt) || !(t.controller.valueController instanceof nr) ? null : new Yo(t.controller)
            }
        },
        F0 = function() {
            return {
                id: "text",
                type: "blade",
                core: lr,
                accept(t) {
                    let e = ee(t, r => ({
                        parse: r.required.function,
                        value: r.required.raw,
                        view: r.required.constant("text"),
                        format: r.optional.function,
                        label: r.optional.string
                    }));
                    return e ? {
                        params: e
                    } : null
                },
                controller(t) {
                    var e;
                    let r = Z(t.params.value)
                      , i = new Yt(t.document,{
                        parser: t.params.parse,
                        props: B.fromObject({
                            formatter: (e = t.params.format) !== null && e !== void 0 ? e : s => String(s)
                        }),
                        value: r,
                        viewProps: t.viewProps
                    });
                    return new mt(t.document,{
                        blade: t.blade,
                        props: B.fromObject({
                            label: t.params.label
                        }),
                        value: r,
                        valueController: i
                    })
                },
                api(t) {
                    return !(t.controller instanceof mt) || !(t.controller.valueController instanceof Yt) ? null : new Wo(t.controller)
                }
            }
        }();
        Wi = class extends Go {
            constructor(e) {
                var r, i;
                let s = e != null ? e : {}
                  , n = (r = s.document) !== null && r !== void 0 ? r : gv()
                  , o = A0()
                  , a = new Xo(n,{
                    expanded: s.expanded,
                    blade: cr(),
                    props: B.fromObject({
                        title: s.title
                    }),
                    viewProps: vt.create()
                });
                super(a, o),
                this.pool_ = o,
                this.containerElem_ = (i = s.container) !== null && i !== void 0 ? i : D0(n),
                this.containerElem_.appendChild(this.element),
                this.doc_ = n,
                this.usesDefaultWrapper_ = !s.container,
                this.setUpDefaultPlugins_()
            }
            get document() {
                if (!this.doc_)
                    throw le.alreadyDisposed();
                return this.doc_
            }
            dispose() {
                let e = this.containerElem_;
                if (!e)
                    throw le.alreadyDisposed();
                if (this.usesDefaultWrapper_) {
                    let r = e.parentElement;
                    r && r.removeChild(e)
                }
                this.containerElem_ = null,
                this.doc_ = null,
                super.dispose()
            }
            registerPlugin(e) {
                e.css && V0(this.document, `plugin-${e.id}`, e.css),
                ("plugin"in e ? [e.plugin] : "plugins"in e ? e.plugins : []).forEach(i => {
                    this.pool_.register(e.id, i)
                }
                )
            }
            setUpDefaultPlugins_() {
                this.registerPlugin({
                    id: "default",
                    css: '.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{display:block;height:16px;inset:0;margin:auto;opacity:0;position:absolute;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{inset:0;position:absolute}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;inset:0;position:absolute}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);content:"";display:block;inset:0;position:absolute}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin:auto;position:absolute}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin-bottom:auto;margin-top:auto;position:absolute}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);content:"";inset:0 0 2px;pointer-events:none;position:absolute}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}',
                    plugins: [O0, R0, L0, nd, F0]
                })
            }
        }
        ,
        Nw = new Bi("4.0.4")
    }
    );
    var Id = {};
    Ka(Id, {
        default: () => Ki
    });
    var pa, Ki, zd = R( () => {
        Vd();
        pa = null,
        Ki = class {
            constructor() {
                if (pa)
                    return pa;
                pa = this,
                this.gui = new Wi({
                    title: "DEBUG"
                })
            }
            createForObject(e) {
                if (!e || e.noGUI)
                    return;
                let r = this.gui.addFolder({
                    title: e.name ? e.name : "obj-" + e.id,
                    expanded: !1
                })
                  , i = r.addFolder({
                    title: "Misc",
                    expanded: !1
                })
                  , s = {
                    initialPosition: e.position.clone(),
                    initialScale: e.scale.clone()
                }
                  , n = i.addBinding(e, "scale", {
                    x: {
                        min: .1,
                        max: 60
                    },
                    y: {
                        min: .1,
                        max: 60
                    },
                    z: {
                        min: .1,
                        max: 60
                    }
                })
                  , o = i.addBinding(e, "position", {
                    x: {
                        min: -25,
                        max: 25
                    },
                    y: {
                        min: -25,
                        max: 25
                    },
                    z: {
                        min: -25,
                        max: 25
                    }
                });
                return i.addButton({
                    title: "reset"
                }).on("click", () => {
                    e.position.copy(s.initialPosition),
                    e.scale.copy(s.initialScale),
                    n.refresh(),
                    o.refresh()
                }
                ),
                typeof e.gui == "function" && e.gui(r),
                e.guiFolder = r,
                r
            }
            addFolder(e, r) {
                return r && typeof r.addFolder == "function" ? r.addFolder({
                    title: e,
                    expanded: !1
                }) : this.gui.addFolder({
                    title: e,
                    expanded: !1
                })
            }
            destroy() {
                this.gui.dispose()
            }
        }
    }
    );
    var Oe, wt, Zr, ur, Xt, dr, Qi, Bd, Zi, qd, Ji, Nd, es, Ud, ts, jd, rs, Hd, Jr, fa, is, $d, Qr, Yd = R( () => {
        Ti();
        fn();
        Qr = class {
            constructor(e, r=[], i=600) {
                ve(this, Qi);
                ve(this, Zi);
                ve(this, Ji);
                ve(this, es);
                ve(this, ts);
                ve(this, rs);
                ve(this, Jr);
                ve(this, is);
                ve(this, Oe, void 0);
                ve(this, wt, Ue(this, rs, Hd).bind(this));
                ve(this, Zr, Ue(this, es, Ud).bind(this));
                ve(this, ur, void 0);
                ve(this, Xt, void 0);
                ve(this, dr, void 0);
                this.container = e,
                this.mobileBreakpoint = i,
                this.container.style.position = "fixed",
                this.container.style.top = 0,
                this.container.style.left = 0,
                this.container.style.width = "100vw",
                this.container.style.height = "100lvh",
                this.render = this.render.bind(this),
                Ue(this, Qi, Bd).call(this, r)
            }
            prepare() {
                return he(this, null, function*() {
                    this.ready || (yield this.experience.prepare(),
                    this.ready = !0,
                    this.running = !0,
                    window.location.hash === "#debug" && (yield Ue(this, is, $d).call(this)))
                })
            }
            onProgress(e, r, i) {
                var s;
                this.ready && e !== void 0 && r && i && ((s = this.experience) == null || s.onProgress(e, r, i))
            }
            changeSlide(e, r=1e3, i="linear", s=1, n=0) {
                return he(this, null, function*() {
                    var o;
                    this.ready && e !== void 0 && (yield(o = this.experience) == null ? void 0 : o.changeSlide(e, r, i, s, n))
                })
            }
            render() {
                !this.ready || !this.running || (this.experience.render(),
                Q(this, Oe).render({
                    scene: this.experience.mesh,
                    update: !1
                }))
            }
            getCurrentStep() {
                var e;
                return (e = this.experience) == null ? void 0 : e.getCurrentStep()
            }
            destroy() {
                var e;
                this.ready = !1,
                this.running = !1,
                "ontouchstart"in window ? (window.removeEventListener("touchstart", Q(this, wt)),
                window.removeEventListener("touchmove", Q(this, wt))) : window.removeEventListener("pointermove", Q(this, wt)),
                Q(this, ur).disconnect(),
                Q(this, Xt).removeEventListener("change", Q(this, Zr)),
                (e = Q(this, dr)) == null || e.guiManager.destroy()
            }
        }
        ;
        Oe = new WeakMap,
        wt = new WeakMap,
        Zr = new WeakMap,
        ur = new WeakMap,
        Xt = new WeakMap,
        dr = new WeakMap,
        Qi = new WeakSet,
        Bd = function(e) {
            Ue(this, Zi, qd).call(this),
            Ue(this, Ji, Nd).call(this),
            this.experience = new Ce(Q(this, Oe).gl,e,Q(this, Xt).matches ? "mobile" : "desktop"),
            Ue(this, ts, jd).call(this),
            Ue(this, Jr, fa).call(this)
        }
        ,
        Zi = new WeakSet,
        qd = function() {
            _r(this, Oe, new Er({
                dpr: Math.min(window.devicePixelRatio, 2),
                width: this.container.offsetWidth,
                height: this.container.offsetHeight,
                depth: !1,
                powerPreference: "high-performance"
            })),
            Q(this, Oe).gl.clearColor(1, 1, 1, 1),
            Q(this, Oe).gl.canvas.style.position = "relative",
            Q(this, Oe).gl.canvas.style.width = "100%",
            Q(this, Oe).gl.canvas.style.height = "100%",
            this.container.appendChild(Q(this, Oe).gl.canvas)
        }
        ,
        Ji = new WeakSet,
        Nd = function() {
            _r(this, ur, new ResizeObserver(e => {
                if (!e.length)
                    return;
                let {inlineSize: r, blockSize: i} = e[0].contentBoxSize[0];
                Ue(this, Jr, fa).call(this, {
                    width: r,
                    height: i
                })
            }
            )),
            Q(this, ur).observe(this.container),
            _r(this, Xt, window.matchMedia(`(max-width: ${this.mobileBreakpoint}px)`)),
            Q(this, Xt).addEventListener("change", Q(this, Zr))
        }
        ,
        es = new WeakSet,
        Ud = function({matches: e}) {
            var r;
            (r = this.experience) == null || r.setMode(e ? "mobile" : "desktop")
        }
        ,
        ts = new WeakSet,
        jd = function() {
            "ontouchstart"in window ? (window.addEventListener("touchstart", Q(this, wt), !1),
            window.addEventListener("touchmove", Q(this, wt), !1)) : window.addEventListener("pointermove", Q(this, wt), !1)
        }
        ,
        rs = new WeakSet,
        Hd = function(e) {
            var s;
            let r = e.changedTouches && e.changedTouches.length ? e.changedTouches[0].clientX : e.x
              , i = e.changedTouches && e.changedTouches.length ? e.changedTouches[0].clientY : e.y;
            (s = this.experience) == null || s.onPointerMove(r, i)
        }
        ,
        Jr = new WeakSet,
        fa = function({width: e=this.container.offsetWidth, height: r=this.container.offsetHeight}={
            width: this.container.offsetWidth,
            height: this.container.offsetHeight
        }) {
            var i;
            Q(this, Oe).dpr = Math.min(window.devicePixelRatio, 2),
            Q(this, Oe).setSize(e, r),
            (i = this.experience) == null || i.resize({
                width: e,
                height: r
            })
        }
        ,
        is = new WeakSet,
        $d = function() {
            return he(this, null, function*() {
                let {default: e} = yield Promise.resolve().then( () => (zd(),
                Id));
                _r(this, dr, {
                    guiManager: new e
                }),
                this.experience.debugMode(Q(this, dr).guiManager.gui)
            })
        }
    }
    );
    var Wd, Gd, Xd = R( () => {
        Wd = ".render",
        Gd = [{
            key: "hero",
            desktop: ["/assets/images/desktop/hero.webp"],
            mobile: ["/assets/images/mobile/hero.webp"]
        }, {
            key: "sport",
            desktop: ["/assets/images/desktop/sport.webp"],
            mobile: ["/assets/images/mobile/sport.webp"]
        }, {
            key: "manifesto",
            desktop: ["/assets/images/desktop/manifesto-1.webp", "/assets/images/desktop/manifesto-2.webp", "/assets/images/desktop/manifesto-3.webp"],
            mobile: ["/assets/images/mobile/manifesto-1.webp", "/assets/images/mobile/manifesto-2.webp", "/assets/images/mobile/manifesto-3.webp"]
        }, {
            key: "sphere",
            desktop: ["/assets/images/desktop/sphere-0.webp"],
            mobile: ["/assets/images/mobile/sphere-0.webp"]
        }, {
            key: "experimentation",
            desktop: ["/assets/images/desktop/sphere-1.webp", "/assets/images/desktop/sphere-2.webp", "/assets/images/desktop/sphere-3.webp"],
            mobile: ["/assets/images/mobile/sphere-1.webp", "/assets/images/mobile/sphere-2.webp", "/assets/images/mobile/sphere-3.webp"]
        }, {
            key: "brands",
            desktop: ["/assets/images/desktop/customer-2.webp", "/assets/images/desktop/customer-3.webp", "/assets/images/desktop/customer-4.webp"],
            mobile: ["/assets/images/mobile/customer-2.webp", "/assets/images/mobile/customer-3.webp", "/assets/images/mobile/customer-4.webp"]
        }, {
            key: "focusIntro",
            desktop: ["/assets/images/desktop/black-mask.webp"],
            mobile: ["/assets/images/mobile/black-mask.webp"]
        }, {
            key: "focus",
            desktop: ["/assets/images/desktop/focus-1.webp", "/assets/images/desktop/focus-2.webp", "/assets/images/desktop/focus-3.webp", "/assets/images/desktop/focus-4.webp"],
            mobile: ["/assets/images/mobile/focus-1.webp", "/assets/images/mobile/focus-2.webp", "/assets/images/mobile/focus-3.webp", "/assets/images/mobile/focus-4.webp"]
        }, {
            key: "join",
            desktop: ["/assets/images/desktop/join.webp"],
            mobile: ["/assets/images/mobile/join.webp"]
        }, {
            key: "invest",
            desktop: ["/assets/images/desktop/invest.webp"],
            mobile: ["/assets/images/mobile/invest.webp"]
        }, {
            key: "blank",
            desktop: ["/assets/images/desktop/black-mask.webp"],
            mobile: ["/assets/images/mobile/black-mask.webp"]
        }]
    }
    );
    var ma, Kd = R( () => {
        ma = CookieConsentConfig = {
            guiOptions: {
                consentModal: {
                    layout: "cloud inline",
                    position: "bottom right",
                    equalWeightButtons: !1,
                    flipButtons: !1
                },
                preferencesModal: {
                    layout: "box",
                    position: "right",
                    equalWeightButtons: !0,
                    flipButtons: !1
                }
            },
            categories: {
                necessary: {
                    readOnly: !0
                },
                analytics: {}
            },
            language: {
                default: "en",
                translations: {
                    en: {
                        consentModal: {
                            title: "Cookie consent",
                            description: "Cookies are used on this site to improve site navigation and provide the greatest user experience. By clicking \u201DAccept all\u201C, you consent to the use of the cookies.",
                            acceptAllBtn: "Accept all",
                            acceptNecessaryBtn: "Reject all",
                            showPreferencesBtn: "Manage preferences"
                        },
                        preferencesModal: {
                            title: "Privacy Preference Center",
                            acceptAllBtn: "Accept all",
                            acceptNecessaryBtn: "Reject all",
                            savePreferencesBtn: "Save preferences",
                            closeIconLabel: "Close modal",
                            serviceCounterLabel: "Service|Services",
                            sections: [{
                                title: "Cookie Usage",
                                description: "Cookies are used on this site to improve site navigation and provide the greatest user experience. By clicking \u201DAccept all\u201C, you consent to the use of the cookies."
                            }, {
                                title: 'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
                                description: "Strictly necessary cookies help make the site navigable by enabling basic functions such as page navigation and access to secure areas of the website. Without these cookies the website could not function properly.",
                                linkedCategory: "necessary"
                            }, {
                                title: "Analytics Cookies",
                                description: "We use Google Analytics to measure audience and site statistics to understand how users interact with the site.",
                                linkedCategory: "analytics"
                            }]
                        }
                    },
                    fr: {
                        consentModal: {
                            title: "Nous utilisons des cookies",
                            description: "Les cookies sont utilis\xE9s sur ce site pour am\xE9liorer votre navigation et vou offrir la meilleure exp\xE9rience utilisateur possible. En cliquant sur \xAB Tout accepter \xBB, vous consentez \xE0 l'utilisation des cookies.",
                            acceptAllBtn: "Tout accepter",
                            acceptNecessaryBtn: "Tout rejeter",
                            showPreferencesBtn: "G\xE9rer les pr\xE9f\xE9rences"
                        },
                        preferencesModal: {
                            title: "Centre de pr\xE9f\xE9rence des cookies",
                            acceptAllBtn: "Tout accepter",
                            acceptNecessaryBtn: "Tout rejeter",
                            savePreferencesBtn: "Sauvegarder les pr\xE9f\xE9rences",
                            closeIconLabel: "Fermer la modale",
                            serviceCounterLabel: "Services",
                            sections: [{
                                title: "Utilisation des Cookies",
                                description: "Les cookies sont utilis\xE9s sur ce site pour am\xE9liorer votre navigation et vou offrir la meilleure exp\xE9rience utilisateur possible. En cliquant sur \xAB Tout accepter \xBB, vous consentez \xE0 l'utilisation des cookies."
                            }, {
                                title: 'Cookies strictement n\xE9cessaires <span class="pm__badge">Toujours Activ\xE9</span>',
                                description: "Les cookies strictement n\xE9cessaires contribuent \xE0 rendre le site navigable en activant des fonctions de base telles que la navigation dans les pages et l'acc\xE8s \xE0 des zones s\xE9curis\xE9es du site Web. Sans ces cookies, le site Web ne pourrait pas fonctionner correctement.",
                                linkedCategory: "necessary"
                            }, {
                                title: "Statistiques et audience",
                                description: "Nous utilisons Google Analytics afin de mesurer l'audiance et les statistiques du site afin de comprendre comment les utilisateurs interagissent avec le site.",
                                linkedCategory: "analytics"
                            }]
                        }
                    }
                }
            }
        }
    }
    );
    var va, Qd, Zd = R( () => {
        ui();
        va = class {
            constructor() {
                this.DOM = {},
                this.initDOM(),
                this.initEvents(),
                this.scrollMultiplier = .015,
                this.scrollInverseMultiplier = -.005,
                this.velocityDivider = 1500,
                this.cSize = this.vhToPx(66),
                this.prevState = this.DOM.container.getAttribute("data-state"),
                this.curentState = this.DOM.container.getAttribute("data-state")
            }
            vwToPx(e) {
                return e / 100 * window.innerWidth
            }
            vhToPx(e) {
                return e / 100 * window.innerHeight
            }
            reset() {
                this.DOM.container.setAttribute("data-state", 0),
                this.setState(0)
            }
            initDOM() {
                this.DOM.container = document.querySelector(".circles"),
                this.DOM.circles = this.DOM.container.querySelectorAll(".circle"),
                this.DOM.values = this.DOM.container.querySelectorAll(".circle_value"),
                this.DOM.c1 = this.DOM.container.querySelector(".circle--1"),
                this.DOM.c2 = this.DOM.container.querySelector(".circle--2"),
                this.DOM.c3 = this.DOM.container.querySelector(".circle--3")
            }
            initEvents() {
                window.addEventListener("triggerCircles", e => {
                    let {target: r, way: i, from: s} = e.detail
                      , n = r.getAttribute("data-state");
                    i == "enter" && (this.DOM.container.setAttribute("data-state", n),
                    this.setState(n))
                }
                ),
                window.addEventListener("resize", e => {
                    this.cSize = this.vhToPx(66)
                }
                )
            }
            onScroll(e, r=1, i=1) {
                this.DOM.values.forEach(s => {
                    s.innerHTML = Math.floor(e / parseInt(s.getAttribute("data-dividor")))
                }
                ),
                this.DOM.container.style.setProperty("--c-rotate", e * this.scrollMultiplier + "deg"),
                this.DOM.container.style.setProperty("--c-rotate-inverse", e * this.scrollInverseMultiplier + "deg"),
                this.DOM.container.style.setProperty("--c-scale", 1 + Math.abs(r / this.velocityDivider) * i * -1)
            }
            setState(e) {
                switch (x.remove(this.DOM.c1),
                x.remove(this.DOM.c2),
                x.remove(this.DOM.c3),
                this.prevState = this.curentState,
                this.curentState = parseInt(e),
                this.curentState) {
                case 1:
                    this.setState1();
                    break;
                case 2:
                    this.setState2();
                    break;
                case 3:
                    this.setState3();
                    break;
                case 4:
                    this.setState4();
                    break;
                case 5:
                    this.setState5();
                    break;
                case 6:
                    this.setState6();
                    break;
                case 7:
                    this.setState7();
                    break;
                case 8:
                    this.setState8();
                    break;
                default:
                    this.setState0();
                    break
                }
            }
            setState0() {
                let e = x.timeline({
                    easing: "easeOutExpo",
                    duration: 1e3
                });
                e.add({
                    targets: this.DOM.c3,
                    opacity: 0,
                    duration: 300,
                    easing: "linear"
                }, 0),
                e.add({
                    targets: this.DOM.c2,
                    scale: .5,
                    translateX: 0,
                    opacity: {
                        value: 0,
                        duration: 400
                    },
                    translateY: 0
                }, 0),
                e.add({
                    targets: this.DOM.c1,
                    scale: .5,
                    translateX: 0,
                    opacity: {
                        value: 0,
                        duration: 400
                    },
                    translateY: 0
                }, 100)
            }
            setState1() {
                let e = x.timeline({
                    easing: "easeInOutExpo",
                    duration: 1200
                });
                this.curentState > this.prevState && (e.add({
                    targets: this.DOM.c1,
                    opacity: {
                        value: 1,
                        duration: 500
                    },
                    scale: 1
                }),
                e.add({
                    targets: this.DOM.c2,
                    opacity: {
                        value: 1,
                        duration: 500
                    },
                    scale: 1
                }, 120)),
                e.add({
                    targets: this.DOM.c1,
                    opacity: 1,
                    scale: 1,
                    translateX: this.cSize / 4,
                    translateY: 0
                }),
                e.add({
                    targets: this.DOM.c2,
                    opacity: 1,
                    scale: 1,
                    translateX: this.cSize / -4,
                    translateY: 0
                }, "-=1300")
            }
            setState2() {
                let e = x.timeline({
                    easing: "easeInOutExpo",
                    duration: 1200
                });
                e.add({
                    targets: this.DOM.c2,
                    opacity: {
                        value: 1,
                        duration: 500
                    },
                    scale: 1,
                    translateX: this.vwToPx(-10) - this.cSize / 2,
                    translateY: 0
                }),
                e.add({
                    targets: this.DOM.c1,
                    opacity: {
                        value: 1,
                        duration: 500
                    },
                    scale: 1,
                    translateX: this.vwToPx(-10),
                    translateY: 0
                }, 100),
                this.prevState > this.curentState && e.add({
                    targets: this.DOM.c3,
                    opacity: 0,
                    duration: 300,
                    easing: "linear"
                }, 0)
            }
            setState3() {
                let e = x.timeline({
                    easing: "easeInOutExpo",
                    duration: 1200
                });
                this.prevState < this.curentState && e.add({
                    targets: [this.DOM.c1, this.DOM.c2, this.DOM.c3],
                    opacity: {
                        value: 1,
                        duration: 500
                    },
                    scale: .85,
                    translateX: this.cSize / -1.75,
                    translateY: this.vhToPx(-3),
                    duration: 1200,
                    delay: x.stagger(50)
                }),
                e.add({
                    targets: this.DOM.c2,
                    scale: 1,
                    opacity: {
                        value: 1,
                        duration: 500
                    },
                    translateX: this.cSize / 2,
                    translateY: this.vhToPx(-3)
                }, "-=300"),
                e.add({
                    targets: this.DOM.c1,
                    scale: 1,
                    opacity: {
                        value: 1,
                        duration: 500
                    },
                    translateX: 0,
                    translateY: this.vhToPx(-3)
                }, "-=1100"),
                e.add({
                    targets: this.DOM.c3,
                    scale: 1,
                    opacity: {
                        value: 1,
                        duration: 500
                    },
                    translateX: this.cSize / -2,
                    translateY: this.vhToPx(-3)
                }, "-=1100")
            }
            setState4() {
                let e = x.timeline({
                    easing: "easeInOutExpo",
                    duration: 900
                });
                this.prevState < this.curentState && (e.add({
                    targets: [this.DOM.c1, this.DOM.c2, this.DOM.c3],
                    opacity: {
                        value: 1,
                        duration: 500
                    },
                    scale: .85,
                    translateX: 0,
                    duration: 900,
                    delay: x.stagger(50)
                }, 0),
                e.add({
                    targets: this.DOM.c3,
                    opacity: 0,
                    duration: 100
                }, "-=100")),
                e.add({
                    targets: this.DOM.c2,
                    scale: 1,
                    opacity: {
                        value: 1,
                        duration: 500
                    },
                    translateX: this.vwToPx(5) + this.cSize / 2,
                    translateY: 0
                }, "-=150"),
                e.add({
                    targets: this.DOM.c1,
                    scale: 1,
                    opacity: {
                        value: 1,
                        duration: 500
                    },
                    translateX: this.vwToPx(5),
                    translateY: 0
                }, "-=800")
            }
            setState5() {
                let e = x.timeline({
                    easing: "easeInOutExpo",
                    duration: 1200
                });
                e.add({
                    targets: this.DOM.c2,
                    scale: 1,
                    opacity: {
                        value: 0,
                        delay: 400,
                        duration: 500
                    },
                    translateX: this.vwToPx(-25),
                    translateY: 0
                }, 0),
                e.add({
                    targets: this.DOM.c3,
                    scale: 1,
                    opacity: 0,
                    translateX: this.vwToPx(-25),
                    translateY: 0
                }, 0),
                e.add({
                    targets: this.DOM.c1,
                    scale: 1,
                    opacity: {
                        value: 1,
                        duration: 500
                    },
                    translateX: this.vwToPx(-25),
                    translateY: 0
                }, 50)
            }
            setState6() {
                let e = x.timeline({
                    easing: "easeInOutExpo",
                    duration: 1200
                });
                e.add({
                    targets: this.DOM.c1,
                    scale: 1,
                    opacity: {
                        value: 1,
                        duration: 500
                    },
                    translateX: this.vwToPx(-25),
                    translateY: 0
                }, 0),
                e.add({
                    targets: this.DOM.c2,
                    scale: 1,
                    opacity: {
                        value: 1,
                        duration: 500
                    },
                    translateX: this.vwToPx(-25) - this.cSize / 2,
                    translateY: 0
                }, 0),
                e.add({
                    targets: this.DOM.c3,
                    scale: 1,
                    opacity: {
                        value: 1,
                        duration: 500
                    },
                    translateX: this.vwToPx(-25) - this.cSize,
                    translateY: 0
                }, 100)
            }
            setState7() {
                let e = x.timeline({
                    easing: "easeInOutExpo",
                    duration: 1200
                });
                e.add({
                    targets: this.DOM.c1,
                    scale: 1,
                    opacity: {
                        value: 1,
                        duration: 500
                    },
                    translateX: this.vwToPx(22),
                    translateY: this.vhToPx(5)
                }, 0),
                e.add({
                    targets: this.DOM.c2,
                    scale: 1,
                    opacity: {
                        value: 1,
                        duration: 500
                    },
                    translateX: this.vwToPx(22),
                    translateY: this.vhToPx(5) + this.cSize / -2
                }, 0),
                e.add({
                    targets: this.DOM.c3,
                    scale: 1,
                    opacity: {
                        value: 0,
                        duration: 500,
                        easing: "linear"
                    },
                    translateX: this.vwToPx(22),
                    translateY: 0
                }, 0)
            }
            setState8() {
                let e = x.timeline({
                    easing: "easeInOutExpo",
                    duration: 1200
                });
                e.add({
                    targets: this.DOM.c1,
                    scale: 1,
                    opacity: {
                        value: 1,
                        duration: 500
                    },
                    translateX: this.vwToPx(7.5) + this.cSize / 4,
                    translateY: 0
                }, 0),
                e.add({
                    targets: this.DOM.c2,
                    scale: 1,
                    opacity: {
                        value: 1,
                        duration: 500
                    },
                    translateX: this.vwToPx(7.5) + this.cSize / -4,
                    translateY: 0
                }, 0),
                e.add({
                    targets: this.DOM.c3,
                    scale: 1,
                    opacity: {
                        value: 0,
                        duration: 500,
                        easing: "linear"
                    },
                    translateX: this.vwToPx(7.5),
                    translateY: 0
                }, 0)
            }
        }
        ,
        Qd = va
    }
    );
    var ga, Jd, ep = R( () => {
        ga = class {
            constructor(e) {
                this.DEBUG = !1,
                this.canvas = e,
                this.canvas.width = 30,
                this.canvas.height = 30,
                this.color = "#FFF",
                this.size = 1.5,
                this.ctx = this.canvas.getContext("2d"),
                this.maxAmplitude = 6,
                this.amplitude = 0,
                this.length = 6,
                this.frequency = -60,
                this.increment = Math.random() * 360,
                this.y = this.canvas.height * .5,
                this.draw()
            }
            draw() {
                this.ctx.strokeStyle = this.color,
                this.ctx.lineWidth = this.size,
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
                this.ctx.beginPath();
                for (let e = 0; e < this.canvas.width; e += 1)
                    this.ctx.lineTo(e, this.y + Math.sin(e / this.length + this.increment) * this.amplitude);
                this.ctx.stroke(),
                this.ctx.closePath(),
                this.amplitude = Math.sin(this.increment) * this.maxAmplitude,
                this.increment -= this.frequency / 1e3,
                requestAnimationFrame( () => {
                    this.draw()
                }
                )
            }
            start() {}
            pause() {}
        }
        ,
        Jd = ga
    }
    );
    var ba, tp, rp = R( () => {
        ep();
        ba = class {
            constructor(e, r) {
                this.DEBUG = !1,
                this.url = e,
                this.toggles = document.querySelectorAll(r),
                this.audio = new Audio(this.url),
                this.waves = [],
                this.toggles.length > 0 && this.toggles.forEach(i => {
                    this.waves.push(new Jd(i.querySelector("canvas")))
                }
                ),
                this.started = !1,
                this.clicked = !1,
                this.canPlayThrough = !1,
                this.initEvents()
            }
            initEvents() {
                window.addEventListener("click", () => {
                    this.setReady(),
                    this.started && !this.isPlaying() && this.play()
                }
                , {
                    once: !0
                }),
                window.addEventListener("touchstart", () => {
                    this.setReady(),
                    this.started && !this.isPlaying() && this.play()
                }
                , {
                    once: !0
                }),
                this.audio.addEventListener("canplaythrough", e => {
                    this.canPlayThrough = !0
                }
                ),
                this.audio.addEventListener("ended", function() {
                    this.currentTime = 0,
                    this.play()
                }),
                this.toggles.forEach(e => {
                    e.addEventListener("click", r => {
                        this.toggleAudio()
                    }
                    )
                }
                )
            }
            start() {
                this.started = !0,
                this.play()
            }
            play() {
                this.canPlay && this.canPlayThrough && (this.audio.play(),
                this.toggles.forEach(e => {
                    e.classList.add("playing")
                }
                ))
            }
            pause() {
                this.audio.pause(),
                this.toggles.forEach(e => {
                    e.classList.remove("playing")
                }
                )
            }
            isPlaying() {
                return this.audio.duration > 0 && !this.audio.paused
            }
            setReady() {
                this.canPlay = !0,
                this.toggles.forEach(e => {
                    e.classList.add("ready")
                }
                )
            }
            toggleAudio() {
                this.isPlaying() ? this.pause() : this.play()
            }
        }
        ,
        tp = ba
    }
    );
    var Dp = {};
    Ka(Dp, {
        acceptCategory: () => Ba,
        acceptService: () => j0,
        acceptedCategory: () => kp,
        acceptedService: () => Tp,
        eraseCookies: () => Ap,
        getConfig: () => X0,
        getCookie: () => Fp,
        getUserPreferences: () => Y0,
        hide: () => Op,
        hidePreferences: () => Lp,
        loadScript: () => W0,
        reset: () => Q0,
        run: () => K0,
        setCookieData: () => G0,
        setLanguage: () => $0,
        show: () => qa,
        showPreferences: () => Rp,
        validConsent: () => Na,
        validCookie: () => H0
    });
    function lp(t, e, r, i, s) {
        let n = _.o
          , o = _.ne
          , a = M("label")
          , l = M("input")
          , c = M("span")
          , h = M("span")
          , u = M("span")
          , d = M("span")
          , f = M("span");
        if (d.innerHTML = ri(1, 3),
        f.innerHTML = ri(0, 3),
        l.type = "checkbox",
        G(a, "section__toggle-wrapper"),
        G(l, "section__toggle"),
        G(d, "toggle__icon-on"),
        G(f, "toggle__icon-off"),
        G(c, "toggle__icon"),
        G(h, "toggle__icon-circle"),
        G(u, "toggle__label"),
        V(c, Ne, "true"),
        i ? (G(a, "toggle-service"),
        V(l, ls, s),
        o.se[s][e] = l) : o.ae[e] = l,
        i ? (p => {
            te(l, "change", () => {
                let m = o.se[p]
                  , v = o.ae[p];
                n.Z[p] = [];
                for (let w in m) {
                    let C = m[w];
                    C.checked && n.Z[p].push(C.value)
                }
                v.checked = n.Z[p].length > 0
            }
            )
        }
        )(s) : (p => {
            te(l, de, () => {
                let m = o.se[p]
                  , v = l.checked;
                n.Z[p] = [];
                for (let w in m)
                    m[w].checked = v,
                    v && n.Z[p].push(w)
            }
            )
        }
        )(e),
        l.value = e,
        u.textContent = t.replace(/<.*>.*<\/.*>/gm, ""),
        P(h, f),
        P(h, d),
        P(c, h),
        n.D)
            (r.readOnly || r.enabled) && (l.checked = !0);
        else if (i) {
            let p = n.Y[s];
            l.checked = r.readOnly || H(p, e)
        } else
            H(n.R, e) && (l.checked = !0);
        return r.readOnly && (l.disabled = !0),
        P(a, l),
        P(a, c),
        P(a, u),
        a
    }
    var hp, ei, Ma, ka, Ea, ls, U, qe, Ne, ti, de, fr, Ta, Aa, cs, _, up, H, vr, yt, hs, Ze, Je, Oa, us, pr, Ra, ss, M, V, wa, ns, P, G, _e, q, Ot, _t, z0, ip, te, sp, os, dp, pp, et, fp, np, mp, B0, ri, vp, q0, gp, tt, ii, Ca, as, Sa, bp, La, _a, wp, _p, ya, op, N0, U0, yp, ap, mr, xa, Fa, Da, Va, Ia, xp, Ep, Kt, Cp, cp, Sp, Pa, Pp, za, Mp, Ba, kp, j0, Tp, H0, Ap, qa, Op, Rp, Lp, si, $0, Y0, W0, G0, Fp, X0, Na, K0, Q0, Vp = R( () => {
        hp = "opt-in",
        ei = "opt-out",
        Ma = "show--consent",
        ka = "show--preferences",
        Ea = "disable--interaction",
        ls = "data-category",
        U = "div",
        qe = "button",
        Ne = "aria-hidden",
        ti = "btn-group",
        de = "click",
        fr = "data-role",
        Ta = "consentModal",
        Aa = "preferencesModal",
        cs = class {
            constructor() {
                this.t = {
                    mode: hp,
                    revision: 0,
                    autoShow: !0,
                    lazyHtmlGeneration: !0,
                    autoClearCookies: !0,
                    manageScriptTags: !0,
                    hideFromBots: !0,
                    cookie: {
                        name: "cc_cookie",
                        expiresAfterDays: 182,
                        domain: "",
                        path: "/",
                        sameSite: "Lax"
                    }
                },
                this.o = {
                    i: {},
                    l: "",
                    _: {},
                    u: {},
                    p: {},
                    m: [],
                    v: !1,
                    h: null,
                    C: null,
                    S: null,
                    M: "",
                    D: !0,
                    T: !1,
                    k: !1,
                    A: !1,
                    N: !1,
                    H: [],
                    V: !1,
                    I: !0,
                    L: [],
                    j: !1,
                    F: "",
                    P: !1,
                    O: [],
                    R: [],
                    B: [],
                    G: [],
                    J: !1,
                    U: !1,
                    $: !1,
                    q: [],
                    K: [],
                    W: [],
                    X: {},
                    Y: {},
                    Z: {},
                    ee: {},
                    te: {},
                    oe: []
                },
                this.ne = {
                    ae: {},
                    se: {}
                },
                this.ce = {},
                this.re = {
                    ie: "cc:onFirstConsent",
                    le: "cc:onConsent",
                    de: "cc:onChange",
                    fe: "cc:onModalShow",
                    _e: "cc:onModalHide",
                    ue: "cc:onModalReady"
                }
            }
        }
        ,
        _ = new cs,
        up = (t, e) => t.indexOf(e),
        H = (t, e) => up(t, e) !== -1,
        vr = t => Array.isArray(t),
        yt = t => typeof t == "string",
        hs = t => !!t && typeof t == "object" && !vr(t),
        Ze = t => typeof t == "function",
        Je = t => Object.keys(t),
        Oa = t => Array.from(new Set(t)),
        us = () => document.activeElement,
        pr = t => t.preventDefault(),
        Ra = (t, e) => t.querySelectorAll(e),
        ss = t => t.dispatchEvent(new Event("change")),
        M = t => {
            let e = document.createElement(t);
            return t === qe && (e.type = t),
            e
        }
        ,
        V = (t, e, r) => t.setAttribute(e, r),
        wa = (t, e, r) => {
            t.removeAttribute(r ? "data-" + e : e)
        }
        ,
        ns = (t, e, r) => t.getAttribute(r ? "data-" + e : e),
        P = (t, e) => t.appendChild(e),
        G = (t, e) => t.classList.add(e),
        _e = (t, e) => G(t, "cm__" + e),
        q = (t, e) => G(t, "pm__" + e),
        Ot = (t, e) => t.classList.remove(e),
        _t = t => {
            if (typeof t != "object")
                return t;
            if (t instanceof Date)
                return new Date(t.getTime());
            let e = Array.isArray(t) ? [] : {};
            for (let r in t) {
                let i = t[r];
                e[r] = _t(i)
            }
            return e
        }
        ,
        z0 = () => {
            let t = {}
              , {O: e, X: r, Y: i} = _.o;
            for (let s of e)
                t[s] = os(i[s], Je(r[s]));
            return t
        }
        ,
        ip = (t, e) => dispatchEvent(new CustomEvent(t,{
            detail: e
        })),
        te = (t, e, r, i) => {
            t.addEventListener(e, r),
            i && _.o.m.push({
                pe: t,
                me: e,
                ge: r
            })
        }
        ,
        sp = () => {
            let t = _.t.cookie.expiresAfterDays;
            return Ze(t) ? t(_.o.F) : t
        }
        ,
        os = (t, e) => {
            let r = t || []
              , i = e || [];
            return r.filter(s => !H(i, s)).concat(i.filter(s => !H(r, s)))
        }
        ,
        dp = t => {
            _.o.R = Oa(t),
            _.o.F = ( () => {
                let e = "custom"
                  , {R: r, O: i, B: s} = _.o
                  , n = r.length;
                return n === i.length ? e = "all" : n === s.length && (e = "necessary"),
                e
            }
            )()
        }
        ,
        pp = (t, e, r, i) => {
            let s = "accept-"
              , {show: n, showPreferences: o, hide: a, hidePreferences: l, acceptCategory: c} = e
              , h = t || document
              , u = g => Ra(h, `[data-cc="${g}"]`)
              , d = (g, b) => {
                pr(g),
                c(b),
                l(),
                a()
            }
              , f = u("show-preferencesModal")
              , p = u("show-consentModal")
              , m = u(s + "all")
              , v = u(s + "necessary")
              , w = u(s + "custom")
              , C = _.t.lazyHtmlGeneration;
            for (let g of f)
                V(g, "aria-haspopup", "dialog"),
                te(g, de, b => {
                    pr(b),
                    o()
                }
                ),
                C && (te(g, "mouseenter", b => {
                    pr(b),
                    _.o.N || r(e, i)
                }
                , !0),
                te(g, "focus", () => {
                    _.o.N || r(e, i)
                }
                ));
            for (let g of p)
                V(g, "aria-haspopup", "dialog"),
                te(g, de, b => {
                    pr(b),
                    n(!0)
                }
                , !0);
            for (let g of m)
                te(g, de, b => {
                    d(b, "all")
                }
                , !0);
            for (let g of w)
                te(g, de, b => {
                    d(b)
                }
                , !0);
            for (let g of v)
                te(g, de, b => {
                    d(b, [])
                }
                , !0)
        }
        ,
        et = (t, e) => {
            t && (e && (t.tabIndex = -1),
            t.focus(),
            e && t.removeAttribute("tabindex"))
        }
        ,
        fp = (t, e) => {
            let r = i => {
                i.target.removeEventListener("transitionend", r),
                i.propertyName === "opacity" && getComputedStyle(t).opacity === "1" && et((s => s === 1 ? _.ne.be : _.ne.ve)(e))
            }
            ;
            te(t, "transitionend", r)
        }
        ,
        mp = t => {
            clearTimeout(np),
            t ? G(_.ne.ye, Ea) : np = setTimeout( () => {
                Ot(_.ne.ye, Ea)
            }
            , 500)
        }
        ,
        B0 = ["M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5", "M 3.572 13.406 L 8.281 18.115 L 20.428 5.885", "M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 "],
        ri = (t=0, e=1.5) => `<svg viewBox="0 0 24 24" stroke-width="${e}"><path d="${B0[t]}"/></svg>`,
        vp = t => {
            let e = _.ne
              , r = _.o;
            (i => {
                let s = i === e.he
                  , n = r.i.disablePageInteraction ? e.ye : s ? e.Ce : e.ye;
                te(n, "keydown", o => {
                    if (o.key !== "Tab" || !(s ? r.k && !r.A : r.A))
                        return;
                    let a = us()
                      , l = s ? r.q : r.K;
                    l.length !== 0 && (o.shiftKey ? a !== l[0] && i.contains(a) || (pr(o),
                    et(l[1])) : a !== l[1] && i.contains(a) || (pr(o),
                    et(l[0])))
                }
                , !0)
            }
            )(t)
        }
        ,
        q0 = ["[href]", qe, "input", "details", "[tabindex]"].map(t => t + ':not([tabindex="-1"])').join(","),
        gp = t => {
            let {o: e, ne: r} = _
              , i = (s, n) => {
                let o = Ra(s, q0);
                n[0] = o[0],
                n[1] = o[o.length - 1]
            }
            ;
            t === 1 && e.T && i(r.he, e.q),
            t === 2 && e.N && i(r.we, e.K)
        }
        ,
        tt = (t, e, r) => {
            let {de: i, le: s, ie: n, _e: o, ue: a, fe: l} = _.ce
              , c = _.re;
            if (e) {
                let u = {
                    modalName: e
                };
                return t === c.fe ? Ze(l) && l(u) : t === c._e ? Ze(o) && o(u) : (u.modal = r,
                Ze(a) && a(u)),
                ip(t, u)
            }
            let h = {
                cookie: _.o.p
            };
            t === c.ie ? Ze(n) && n(_t(h)) : t === c.le ? Ze(s) && s(_t(h)) : (h.changedCategories = _.o.L,
            h.changedServices = _.o.ee,
            Ze(i) && i(_t(h))),
            ip(t, _t(h))
        }
        ,
        ii = (t, e) => {
            try {
                return t()
            } catch (r) {
                return !e && console.warn("CookieConsent:", r),
                !1
            }
        }
        ,
        Ca = t => {
            let {Y: e, ee: r, O: i, X: s, oe: n, p: o, L: a} = _.o;
            for (let u of i) {
                let d = r[u] || e[u] || [];
                for (let f of d) {
                    let p = s[u][f];
                    if (!p)
                        continue;
                    let {onAccept: m, onReject: v} = p;
                    !p.Se && H(e[u], f) ? (p.Se = !0,
                    Ze(m) && m()) : p.Se && !H(e[u], f) && (p.Se = !1,
                    Ze(v) && v())
                }
            }
            if (!_.t.manageScriptTags)
                return;
            let l = n
              , c = t || o.categories || []
              , h = (u, d) => {
                if (d >= u.length)
                    return;
                let f = n[d];
                if (f.xe)
                    return h(u, d + 1);
                let p = f.Me
                  , m = f.De
                  , v = f.Te
                  , w = H(c, m)
                  , C = !!v && H(e[m], v);
                if (!v && !f.ke && w || !v && f.ke && !w && H(a, m) || v && !f.ke && C || v && f.ke && !C && H(r[m] || [], v)) {
                    f.xe = !0;
                    let g = ns(p, "type", !0);
                    wa(p, "type", !!g),
                    wa(p, ls);
                    let b = ns(p, "src", !0);
                    b && wa(p, "src", !0);
                    let y = M("script");
                    y.textContent = p.innerHTML;
                    for (let {nodeName: S} of p.attributes)
                        V(y, S, p[S] || ns(p, S));
                    g && (y.type = g),
                    b ? y.src = b : b = p.src;
                    let E = !!b && (!g || ["text/javascript", "module"].includes(g));
                    if (E && (y.onload = y.onerror = () => {
                        h(u, ++d)
                    }
                    ),
                    p.replaceWith(y),
                    E)
                        return
                }
                h(u, ++d)
            }
            ;
            h(l, 0)
        }
        ,
        as = "bottom",
        Sa = "left",
        bp = "center",
        La = "right",
        _a = "inline",
        wp = "wide",
        _p = "pm--",
        ya = ["middle", "top", as],
        op = [Sa, bp, La],
        N0 = {
            box: {
                Ee: [wp, _a],
                Ae: ya,
                Ne: op,
                He: as,
                Ve: La
            },
            cloud: {
                Ee: [_a],
                Ae: ya,
                Ne: op,
                He: as,
                Ve: bp
            },
            bar: {
                Ee: [_a],
                Ae: ya.slice(1),
                Ne: [],
                He: as,
                Ve: ""
            }
        },
        U0 = {
            box: {
                Ee: [],
                Ae: [],
                Ne: [],
                He: "",
                Ve: ""
            },
            bar: {
                Ee: [wp],
                Ae: [],
                Ne: [Sa, La],
                He: "",
                Ve: Sa
            }
        },
        yp = t => {
            let e = _.o.i.guiOptions
              , r = e && e.consentModal
              , i = e && e.preferencesModal;
            t === 0 && ap(_.ne.he, N0, r, "cm--", "box", "cm"),
            t === 1 && ap(_.ne.we, U0, i, _p, "box", "pm")
        }
        ,
        ap = (t, e, r, i, s, n) => {
            t.className = n;
            let o = r && r.layout
              , a = r && r.position
              , l = r && r.flipButtons
              , c = !r || r.equalWeightButtons !== !1
              , h = o && o.split(" ") || []
              , u = h[0]
              , d = h[1]
              , f = u in e ? u : s
              , p = e[f]
              , m = H(p.Ee, d) && d
              , v = a && a.split(" ") || []
              , w = v[0]
              , C = i === _p ? v[0] : v[1]
              , g = H(p.Ae, w) ? w : p.He
              , b = H(p.Ne, C) ? C : p.Ve
              , y = S => {
                S && G(t, i + S)
            }
            ;
            y(f),
            y(m),
            y(g),
            y(b),
            l && y("flip");
            let E = n + "__btn--secondary";
            if (n === "cm") {
                let {Ie: S, Le: L} = _.ne;
                S && (c ? Ot(S, E) : G(S, E)),
                L && (c ? Ot(L, E) : G(L, E))
            } else {
                let {je: S} = _.ne;
                S && (c ? Ot(S, E) : G(S, E))
            }
        }
        ,
        mr = (t, e) => {
            let r = _.o
              , i = _.ne
              , {hide: s, hidePreferences: n, acceptCategory: o} = t
              , a = b => {
                o(b),
                n(),
                s()
            }
              , l = r.u && r.u.preferencesModal;
            if (!l)
                return;
            let c = l.title
              , h = l.closeIconLabel
              , u = l.acceptAllBtn
              , d = l.acceptNecessaryBtn
              , f = l.savePreferencesBtn
              , p = l.sections || []
              , m = u || d || f;
            if (i.Fe)
                i.Pe = M(U),
                q(i.Pe, "body");
            else {
                i.Fe = M(U),
                G(i.Fe, "pm-wrapper");
                let b = M("div");
                G(b, "pm-overlay"),
                P(i.Fe, b),
                te(b, de, n),
                i.we = M(U),
                G(i.we, "pm"),
                V(i.we, "role", "dialog"),
                V(i.we, Ne, !0),
                V(i.we, "aria-modal", !0),
                V(i.we, "aria-labelledby", "pm__title"),
                te(i.ye, "keydown", y => {
                    y.keyCode === 27 && n()
                }
                , !0),
                i.Oe = M(U),
                q(i.Oe, "header"),
                i.Re = M("h2"),
                q(i.Re, "title"),
                i.Re.id = "pm__title",
                i.Be = M(qe),
                q(i.Be, "close-btn"),
                V(i.Be, "aria-label", l.closeIconLabel || ""),
                te(i.Be, de, n),
                i.Ge = M("span"),
                i.Ge.innerHTML = ri(),
                P(i.Be, i.Ge),
                i.Je = M(U),
                q(i.Je, "body"),
                i.Ue = M(U),
                q(i.Ue, "footer");
                var v = M(U);
                G(v, "btns");
                var w = M(U)
                  , C = M(U);
                q(w, ti),
                q(C, ti),
                P(i.Ue, w),
                P(i.Ue, C),
                P(i.Oe, i.Re),
                P(i.Oe, i.Be),
                i.ve = M(U),
                V(i.ve, "tabIndex", -1),
                P(i.we, i.ve),
                P(i.we, i.Oe),
                P(i.we, i.Je),
                m && P(i.we, i.Ue),
                P(i.Fe, i.we)
            }
            let g;
            c && (i.Re.innerHTML = c,
            h && V(i.Be, "aria-label", h)),
            p.forEach( (b, y) => {
                let E = b.title
                  , S = b.description
                  , L = b.linkedCategory
                  , D = L && r.P[L]
                  , F = b.cookieTable
                  , T = F && F.body
                  , z = F && F.caption
                  , I = T && T.length > 0
                  , k = !!D
                  , W = k && r.X[L]
                  , pe = hs(W) && Je(W) || []
                  , re = k && (!!S || !!I || Je(W).length > 0);
                var ne = M(U);
                if (q(ne, "section"),
                re || S) {
                    var oe = M(U);
                    q(oe, "section-desc-wrapper")
                }
                let ce = pe.length;
                if (re && ce > 0) {
                    let Y = M(U);
                    q(Y, "section-services");
                    for (let J of pe) {
                        let X = W[J]
                          , ue = X && X.label || J
                          , rt = M(U)
                          , Ve = M(U)
                          , Ie = M(U)
                          , Et = M(U);
                        q(rt, "service"),
                        q(Et, "service-title"),
                        q(Ve, "service-header"),
                        q(Ie, "service-icon");
                        let Re = lp(ue, J, D, !0, L);
                        Et.innerHTML = ue,
                        P(Ve, Ie),
                        P(Ve, Et),
                        P(rt, Ve),
                        P(rt, Re),
                        P(Y, rt)
                    }
                    P(oe, Y)
                }
                if (E) {
                    var Me = M(U)
                      , O = M(k ? qe : U);
                    if (q(Me, "section-title-wrapper"),
                    q(O, "section-title"),
                    O.innerHTML = E,
                    P(Me, O),
                    k) {
                        let Y = M("span");
                        Y.innerHTML = ri(2, 3.5),
                        q(Y, "section-arrow"),
                        P(Me, Y),
                        ne.className += "--toggle";
                        let J = lp(E, L, D)
                          , X = l.serviceCounterLabel;
                        if (ce > 0 && yt(X)) {
                            let ue = M("span");
                            q(ue, "badge"),
                            q(ue, "service-counter"),
                            V(ue, Ne, !0),
                            V(ue, "data-servicecounter", ce),
                            X && (X = X.split("|"),
                            X = X.length > 1 && ce > 1 ? X[1] : X[0],
                            V(ue, "data-counterlabel", X)),
                            ue.innerHTML = ce + (X ? " " + X : ""),
                            P(O, ue)
                        }
                        if (re) {
                            q(ne, "section--expandable");
                            var ke = L + "-desc";
                            V(O, "aria-expanded", !1),
                            V(O, "aria-controls", ke)
                        }
                        P(Me, J)
                    } else
                        V(O, "role", "heading"),
                        V(O, "aria-level", "3");
                    P(ne, Me)
                }
                if (S) {
                    var fe = M("p");
                    q(fe, "section-desc"),
                    fe.innerHTML = S,
                    P(oe, fe)
                }
                if (re && (V(oe, Ne, "true"),
                oe.id = ke,
                ( (Y, J, X) => {
                    te(O, de, () => {
                        J.classList.contains("is-expanded") ? (Ot(J, "is-expanded"),
                        V(X, "aria-expanded", "false"),
                        V(Y, Ne, "true")) : (G(J, "is-expanded"),
                        V(X, "aria-expanded", "true"),
                        V(Y, Ne, "false"))
                    }
                    )
                }
                )(oe, ne, O),
                I)) {
                    let Y = M("table")
                      , J = M("thead")
                      , X = M("tbody");
                    if (z) {
                        let Re = M("caption");
                        q(Re, "table-caption"),
                        Re.innerHTML = z,
                        Y.appendChild(Re)
                    }
                    q(Y, "section-table"),
                    q(J, "table-head"),
                    q(X, "table-body");
                    let ue = F.headers
                      , rt = Je(ue)
                      , Ve = i.$e.createDocumentFragment()
                      , Ie = M("tr");
                    for (let Re of rt) {
                        let me = ue[Re]
                          , Le = M("th");
                        Le.id = "cc__row-" + me + y,
                        V(Le, "scope", "col"),
                        q(Le, "table-th"),
                        Le.innerHTML = me,
                        P(Ve, Le)
                    }
                    P(Ie, Ve),
                    P(J, Ie);
                    let Et = i.$e.createDocumentFragment();
                    for (let Re of T) {
                        let me = M("tr");
                        q(me, "table-tr");
                        for (let Le of rt) {
                            let Zt = ue[Le]
                              , wr = Re[Le]
                              , it = M("td")
                              , Jt = M(U);
                            q(it, "table-td"),
                            V(it, "data-column", Zt),
                            V(it, "headers", "cc__row-" + Zt + y),
                            Jt.insertAdjacentHTML("beforeend", wr),
                            P(it, Jt),
                            P(me, it)
                        }
                        P(Et, me)
                    }
                    P(X, Et),
                    P(Y, J),
                    P(Y, X),
                    P(oe, Y)
                }
                (re || S) && P(ne, oe);
                let xt = i.Pe || i.Je;
                k ? (g || (g = M(U),
                q(g, "section-toggles")),
                g.appendChild(ne)) : g = null,
                P(xt, g || ne)
            }
            ),
            u && (i.ze || (i.ze = M(qe),
            q(i.ze, "btn"),
            V(i.ze, fr, "all"),
            P(w, i.ze),
            te(i.ze, de, () => a("all"))),
            i.ze.innerHTML = u),
            d && (i.je || (i.je = M(qe),
            q(i.je, "btn"),
            V(i.je, fr, "necessary"),
            P(w, i.je),
            te(i.je, de, () => a([]))),
            i.je.innerHTML = d),
            f && (i.qe || (i.qe = M(qe),
            q(i.qe, "btn"),
            q(i.qe, "btn--secondary"),
            V(i.qe, fr, "save"),
            P(C, i.qe),
            te(i.qe, de, () => a())),
            i.qe.innerHTML = f),
            i.Pe && (i.we.replaceChild(i.Pe, i.Je),
            i.Je = i.Pe),
            yp(1),
            r.N || (r.N = !0,
            tt(_.re.ue, Aa, i.we),
            e(t),
            P(i.Ce, i.Fe),
            vp(i.we),
            setTimeout( () => G(i.Fe, "cc--anim"), 100)),
            gp(2)
        }
        ;
        xa = () => {
            let t = M("span");
            return _.ne.Ke || (_.ne.Ke = t),
            t
        }
        ,
        Fa = (t, e) => {
            let r = _.o
              , i = _.ne
              , {hide: s, showPreferences: n, acceptCategory: o} = t
              , a = r.u && r.u.consentModal;
            if (!a)
                return;
            let l = a.acceptAllBtn
              , c = a.acceptNecessaryBtn
              , h = a.showPreferencesBtn
              , u = a.closeIconLabel
              , d = a.footer
              , f = a.label
              , p = a.title
              , m = w => {
                s(),
                o(w)
            }
            ;
            if (!i.Qe) {
                i.Qe = M(U),
                i.he = M(U),
                i.We = M(U),
                i.Xe = M(U),
                i.Ye = M(U),
                G(i.Qe, "cm-wrapper"),
                G(i.he, "cm"),
                _e(i.We, "body"),
                _e(i.Xe, "texts"),
                _e(i.Ye, "btns"),
                V(i.he, "role", "dialog"),
                V(i.he, "aria-modal", "true"),
                V(i.he, Ne, "false"),
                V(i.he, "aria-describedby", "cm__desc"),
                f ? V(i.he, "aria-label", f) : p && V(i.he, "aria-labelledby", "cm__title");
                let w = "box"
                  , C = r.i.guiOptions
                  , g = C && C.consentModal
                  , b = (g && g.layout || w).split(" ")[0] === w;
                p && u && b && (i.Le || (i.Le = M(qe),
                i.Le.innerHTML = ri(),
                _e(i.Le, "btn"),
                _e(i.Le, "btn--close"),
                te(i.Le, de, () => {
                    m([])
                }
                ),
                P(i.We, i.Le)),
                V(i.Le, "aria-label", u)),
                P(i.We, i.Xe),
                (l || c || h) && P(i.We, i.Ye),
                i.be = M(U),
                V(i.be, "tabIndex", -1),
                P(i.he, i.be),
                P(i.he, i.We),
                P(i.Qe, i.he)
            }
            p && (i.Ze || (i.Ze = M("h2"),
            i.Ze.className = i.Ze.id = "cm__title",
            P(i.Xe, i.Ze)),
            i.Ze.innerHTML = p);
            let v = a.description;
            if (v && (r.V && (v = v.replace("{{revisionMessage}}", r.I ? "" : a.revisionMessage || "")),
            i.et || (i.et = M("p"),
            i.et.className = i.et.id = "cm__desc",
            P(i.Xe, i.et)),
            i.et.innerHTML = v),
            l && (i.tt || (i.tt = M(qe),
            P(i.tt, xa()),
            _e(i.tt, "btn"),
            V(i.tt, fr, "all"),
            te(i.tt, de, () => {
                m("all")
            }
            )),
            i.tt.firstElementChild.innerHTML = l),
            c && (i.Ie || (i.Ie = M(qe),
            P(i.Ie, xa()),
            _e(i.Ie, "btn"),
            V(i.Ie, fr, "necessary"),
            te(i.Ie, de, () => {
                m([])
            }
            )),
            i.Ie.firstElementChild.innerHTML = c),
            h && (i.ot || (i.ot = M(qe),
            P(i.ot, xa()),
            _e(i.ot, "btn"),
            _e(i.ot, "btn--secondary"),
            V(i.ot, fr, "show"),
            te(i.ot, "mouseenter", () => {
                r.N || mr(t, e)
            }
            ),
            te(i.ot, de, n)),
            i.ot.firstElementChild.innerHTML = h),
            i.nt || (i.nt = M(U),
            _e(i.nt, ti),
            l && P(i.nt, i.tt),
            c && P(i.nt, i.Ie),
            (l || c) && P(i.We, i.nt),
            P(i.Ye, i.nt)),
            i.ot && !i.st && (i.st = M(U),
            i.Ie && i.tt ? (_e(i.st, ti),
            P(i.st, i.ot),
            P(i.Ye, i.st)) : (P(i.nt, i.ot),
            _e(i.nt, ti + "--uneven"))),
            d) {
                if (!i.ct) {
                    let w = M(U)
                      , C = M(U);
                    i.ct = M(U),
                    _e(w, "footer"),
                    _e(C, "links"),
                    _e(i.ct, "link-group"),
                    P(C, i.ct),
                    P(w, C),
                    P(i.he, w)
                }
                i.ct.innerHTML = d
            }
            yp(0),
            r.T || (r.T = !0,
            tt(_.re.ue, Ta, i.he),
            e(t),
            P(i.Ce, i.Qe),
            vp(i.he),
            setTimeout( () => G(i.Qe, "cc--anim"), 100)),
            gp(1),
            pp(i.We, t, mr, e)
        }
        ,
        Da = t => {
            if (!yt(t))
                return null;
            if (t in _.o._)
                return t;
            let e = t.slice(0, 2);
            return e in _.o._ ? e : null
        }
        ,
        Va = () => _.o.l || _.o.i.language.default,
        Ia = t => {
            t && (_.o.l = t)
        }
        ,
        xp = t => he(void 0, null, function*() {
            let e = _.o
              , r = Da(t) ? t : Va()
              , i = e._[r];
            return yt(i) ? i = yield(s => he(void 0, null, function*() {
                try {
                    return yield(yield fetch(s)).json()
                } catch (n) {
                    return console.error(n),
                    !1
                }
            }))(i) : Ze(i) && (i = yield i()),
            !!i && (e.u = i,
            Ia(r),
            !0)
        }),
        Ep = () => {
            let t = _.o.i.language.rtl
              , e = _.ne.Ce;
            t && e && (vr(t) || (t = [t]),
            H(t, _.o.l) ? G(e, "cc--rtl") : Ot(e, "cc--rtl"))
        }
        ,
        Kt = () => {
            let t = _.ne;
            if (t.Ce)
                return;
            t.Ce = M(U),
            t.Ce.id = "cc-main",
            t.Ce.setAttribute("data-nosnippet", ""),
            Ep();
            let e = _.o.i.root;
            e && yt(e) && (e = document.querySelector(e)),
            (e || t.$e.body).appendChild(t.Ce)
        }
        ,
        Cp = t => ii( () => localStorage.removeItem(t)),
        cp = (t, e) => {
            if (e instanceof RegExp)
                return t.filter(r => e.test(r));
            {
                let r = up(t, e);
                return r > -1 ? [t[r]] : []
            }
        }
        ,
        Sp = t => {
            let {hostname: e, protocol: r} = location
              , {name: i, path: s, domain: n, sameSite: o, useLocalStorage: a} = _.t.cookie
              , l = t ? ( () => {
                let d = _.o.S
                  , f = d ? new Date - d : 0;
                return 864e5 * sp() - f
            }
            )() : 864e5 * sp()
              , c = new Date;
            c.setTime(c.getTime() + l),
            _.o.p.expirationTime = c.getTime();
            let h = JSON.stringify(_.o.p)
              , u = i + "=" + encodeURIComponent(h) + (l !== 0 ? "; expires=" + c.toUTCString() : "") + "; Path=" + s + "; SameSite=" + o;
            H(e, ".") && (u += "; Domain=" + n),
            r === "https:" && (u += "; Secure"),
            a ? ( (d, f) => {
                ii( () => localStorage.setItem(d, f))
            }
            )(i, h) : document.cookie = u,
            _.o.p
        }
        ,
        Pa = (t, e, r) => {
            if (t.length === 0)
                return;
            let i = r || _.t.cookie.domain
              , s = e || _.t.cookie.path
              , n = i.slice(0, 4) === "www."
              , o = n && i.substring(4)
              , a = (l, c) => {
                document.cookie = l + "=; path=" + s + (c ? "; domain=." + c : "") + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            }
            ;
            for (let l of t)
                a(l),
                a(l, i),
                n && a(l, o)
        }
        ,
        Pp = t => {
            let e = t || _.t.cookie.name
              , r = _.t.cookie.useLocalStorage;
            return ( (s, n) => {
                let o;
                return o = ii( () => JSON.parse(n ? s : decodeURIComponent(s)), !0) || {},
                o
            }
            )(r ? (i = e,
            ii( () => localStorage.getItem(i)) || "") : za(e, !0), r);
            var i
        }
        ,
        za = (t, e) => {
            let r = document.cookie.match("(^|;)\\s*" + t + "\\s*=\\s*([^;]+)");
            return r ? e ? r.pop() : t : ""
        }
        ,
        Mp = t => {
            let e = document.cookie.split(/;\s*/)
              , r = [];
            for (let i of e) {
                let s = i.split("=")[0];
                t ? ii( () => {
                    t.test(s) && r.push(s)
                }
                ) : r.push(s)
            }
            return r
        }
        ,
        Ba = (t, e=[]) => {
            ( (r, i) => {
                let {O: s, R: n, B: o, N: a, Z: l, G: c, X: h} = _.o
                  , u = [];
                if (r) {
                    vr(r) ? u.push(...r) : yt(r) && (u = r === "all" ? s : [r]);
                    for (let d of s)
                        l[d] = H(u, d) ? Je(h[d]) : []
                } else
                    u = [...n, ...c],
                    a && (u = ( () => {
                        let d = _.ne.ae;
                        if (!d)
                            return [];
                        let f = [];
                        for (let p in d)
                            d[p].checked && f.push(p);
                        return f
                    }
                    )());
                u = u.filter(d => !H(s, d) || !H(i, d)),
                u.push(...o),
                dp(u)
            }
            )(t, e),
            (r => {
                let i = _.o
                  , {Z: s, B: n, Y: o, X: a, O: l} = i
                  , c = l;
                i.te = _t(o);
                for (let h of c) {
                    let u = a[h]
                      , d = Je(u)
                      , f = s[h] && s[h].length > 0
                      , p = H(n, h);
                    if (d.length !== 0) {
                        if (o[h] = [],
                        p)
                            o[h].push(...d);
                        else if (f) {
                            let m = s[h];
                            o[h].push(...m)
                        } else
                            o[h] = i.Z[h];
                        o[h] = Oa(o[h])
                    }
                }
            }
            )(),
            ( () => {
                let r = _.o;
                r.L = _.t.mode === ei && r.D ? os(r.G, r.R) : os(r.R, r.p.categories);
                let i = r.L.length > 0
                  , s = !1;
                for (let l of r.O)
                    r.ee[l] = os(r.Y[l], r.te[l]),
                    r.ee[l].length > 0 && (s = !0);
                let n = _.ne.ae;
                for (let l in n)
                    n[l].checked = H(r.R, l);
                for (let l of r.O) {
                    let c = _.ne.se[l]
                      , h = r.Y[l];
                    for (let u in c)
                        c[u].checked = H(h, u)
                }
                r.C || (r.C = new Date),
                r.M || (r.M = ("10000000-1000-4000-8000" + -1e11).replace(/[018]/g, l => (l ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> l / 4).toString(16))),
                r.p = {
                    categories: _t(r.R),
                    revision: _.t.revision,
                    data: r.h,
                    consentTimestamp: r.C.toISOString(),
                    consentId: r.M,
                    services: _t(r.Y)
                };
                let o = !1
                  , a = i || s;
                (r.D || a) && (r.D && (r.D = !1,
                o = !0),
                r.S = r.S ? new Date : r.C,
                r.p.lastConsentTimestamp = r.S.toISOString(),
                Sp(),
                _.t.autoClearCookies && (o || a) && (l => {
                    let c = _.o
                      , h = Mp()
                      , u = (d => {
                        let f = _.o;
                        return (d ? f.O : f.L).filter(p => {
                            let m = f.P[p];
                            return !!m && !m.readOnly && !!m.autoClear
                        }
                        )
                    }
                    )(l);
                    for (let d in c.ee)
                        for (let f of c.ee[d]) {
                            let p = c.X[d][f].cookies;
                            if (!H(c.Y[d], f) && p)
                                for (let m of p) {
                                    let v = cp(h, m.name);
                                    Pa(v, m.path, m.domain)
                                }
                        }
                    for (let d of u) {
                        let f = c.P[d].autoClear
                          , p = f && f.cookies || []
                          , m = H(c.L, d)
                          , v = !H(c.R, d)
                          , w = m && v;
                        if (l ? v : w) {
                            f.reloadPage && w && (c.j = !0);
                            for (let C of p) {
                                let g = cp(h, C.name);
                                Pa(g, C.path, C.domain)
                            }
                        }
                    }
                }
                )(o),
                Ca()),
                o && (tt(_.re.ie),
                tt(_.re.le),
                _.t.mode === hp) || (a && tt(_.re.de),
                r.j && (r.j = !1,
                location.reload()))
            }
            )()
        }
        ,
        kp = t => {
            let e = _.o.D ? [] : _.o.R;
            return H(e, t)
        }
        ,
        j0 = (t, e) => {
            let {O: r, X: i} = _.o;
            if (!(t && e && yt(e) && H(r, e) && Je(i[e]).length !== 0))
                return !1;
            ( (s, n) => {
                let o = _.o
                  , {X: a, Z: l, N: c} = o
                  , h = _.ne.se[n] || {}
                  , u = _.ne.ae[n] || {}
                  , d = Je(a[n]);
                if (l[n] = [],
                yt(s)) {
                    if (s === "all") {
                        if (l[n].push(...d),
                        c)
                            for (let p in h)
                                h[p].checked = !0,
                                ss(h[p])
                    } else if (H(d, s) && l[n].push(s),
                    c)
                        for (let p in h)
                            h[p].checked = s === p,
                            ss(h[p])
                } else if (vr(s))
                    for (let p of d) {
                        let m = H(s, p);
                        m && l[n].push(p),
                        c && (h[p].checked = m,
                        ss(h[p]))
                    }
                let f = l[n].length === 0;
                o.R = f ? o.R.filter(p => p !== n) : Oa([...o.R, n]),
                c && (u.checked = !f,
                ss(u))
            }
            )(t, e),
            Ba()
        }
        ,
        Tp = (t, e) => {
            let r = _.o.D ? [] : _.o.Y[e] || [];
            return H(r, t)
        }
        ,
        H0 = t => za(t, !0) !== "",
        Ap = (t, e, r) => {
            let i = []
              , s = n => {
                if (yt(n)) {
                    let o = za(n);
                    o !== "" && i.push(o)
                } else
                    i.push(...Mp(n))
            }
            ;
            if (vr(t))
                for (let n of t)
                    s(n);
            else
                s(t);
            Pa(i, e, r)
        }
        ,
        qa = t => {
            let {ne: e, o: r} = _;
            if (!r.k) {
                if (!r.T) {
                    if (!t)
                        return;
                    Fa(si, Kt)
                }
                r.k = !0,
                r.U = us(),
                r.v && mp(!0),
                fp(e.he, 1),
                G(e.ye, Ma),
                V(e.he, Ne, "false"),
                setTimeout( () => {
                    et(_.ne.be)
                }
                , 100),
                tt(_.re.fe, Ta)
            }
        }
        ,
        Op = () => {
            let {ne: t, o: e, re: r} = _;
            e.k && (e.k = !1,
            e.v && mp(),
            et(t.Ke, !0),
            Ot(t.ye, Ma),
            V(t.he, Ne, "true"),
            et(e.U),
            e.U = null,
            tt(r._e, Ta))
        }
        ,
        Rp = () => {
            let t = _.o;
            t.A || (t.N || mr(si, Kt),
            t.A = !0,
            t.k ? t.$ = us() : t.U = us(),
            fp(_.ne.we, 2),
            G(_.ne.ye, ka),
            V(_.ne.we, Ne, "false"),
            setTimeout( () => {
                et(_.ne.ve)
            }
            , 100),
            tt(_.re.fe, Aa))
        }
        ,
        Lp = () => {
            let t = _.o;
            t.A && (t.A = !1,
            ( () => {
                let e = Na()
                  , r = _.o.P
                  , i = _.ne.ae
                  , s = _.ne.se
                  , n = o => H(_.o.G, o);
                for (let o in i) {
                    let a = !!r[o].readOnly;
                    i[o].checked = a || (e ? kp(o) : n(o));
                    for (let l in s[o])
                        s[o][l].checked = a || (e ? Tp(l, o) : n(o))
                }
            }
            )(),
            et(_.ne.Ge, !0),
            Ot(_.ne.ye, ka),
            V(_.ne.we, Ne, "true"),
            t.k ? (et(t.$),
            t.$ = null) : (et(t.U),
            t.U = null),
            tt(_.re._e, Aa))
        }
        ,
        si = {
            show: qa,
            hide: Op,
            showPreferences: Rp,
            hidePreferences: Lp,
            acceptCategory: Ba
        },
        $0 = (t, e) => he(void 0, null, function*() {
            if (!Da(t))
                return !1;
            let r = _.o;
            return !(t === Va() && e !== !0 || !(yield xp(t)) || (Ia(t),
            r.T && Fa(si, Kt),
            r.N && mr(si, Kt),
            Ep(),
            0))
        }),
        Y0 = () => {
            let {F: t, Y: e} = _.o
              , {accepted: r, rejected: i} = ( () => {
                let {D: s, R: n, O: o} = _.o;
                return {
                    accepted: n,
                    rejected: s ? [] : o.filter(a => !H(n, a))
                }
            }
            )();
            return _t({
                acceptType: t,
                acceptedCategories: r,
                rejectedCategories: i,
                acceptedServices: e,
                rejectedServices: z0()
            })
        }
        ,
        W0 = (t, e) => {
            let r = document.querySelector('script[src="' + t + '"]');
            return new Promise(i => {
                if (r)
                    return i(!0);
                if (r = M("script"),
                hs(e))
                    for (let s in e)
                        V(r, s, e[s]);
                r.onload = () => i(!0),
                r.onerror = () => {
                    r.remove(),
                    i(!1)
                }
                ,
                r.src = t,
                P(document.head, r)
            }
            )
        }
        ,
        G0 = t => {
            let e, r = t.value, i = t.mode, s = !1, n = _.o;
            if (i === "update") {
                n.h = e = Fp("data");
                let o = typeof e == typeof r;
                if (o && typeof e == "object") {
                    !e && (e = {});
                    for (let a in r)
                        e[a] !== r[a] && (e[a] = r[a],
                        s = !0)
                } else
                    !o && e || e === r || (e = r,
                    s = !0)
            } else
                e = r,
                s = !0;
            return s && (n.h = e,
            n.p.data = e,
            Sp(!0)),
            s
        }
        ,
        Fp = (t, e) => {
            let r = Pp(e);
            return t ? r[t] : r
        }
        ,
        X0 = t => {
            let e = _.t
              , r = _.o.i;
            return t ? e[t] || r[t] : Xa(st(st({}, e), r), {
                cookie: st({}, e.cookie)
            })
        }
        ,
        Na = () => !_.o.D,
        K0 = t => he(void 0, null, function*() {
            let {o: e, t: r, re: i} = _
              , s = window;
            if (!s._ccRun) {
                if (s._ccRun = !0,
                (a => {
                    let {ne: l, t: c, o: h} = _
                      , u = c
                      , d = h
                      , {cookie: f} = u
                      , p = _.ce
                      , m = a.cookie
                      , v = a.categories
                      , w = Je(v) || []
                      , C = navigator
                      , g = document;
                    l.$e = g,
                    l.ye = g.documentElement,
                    f.domain = location.hostname,
                    d.i = a,
                    d.P = v,
                    d.O = w,
                    d._ = a.language.translations,
                    d.v = !!a.disablePageInteraction,
                    p.ie = a.onFirstConsent,
                    p.le = a.onConsent,
                    p.de = a.onChange,
                    p._e = a.onModalHide,
                    p.fe = a.onModalShow,
                    p.ue = a.onModalReady;
                    let {mode: b, autoShow: y, lazyHtmlGeneration: E, autoClearCookies: S, revision: L, manageScriptTags: D, hideFromBots: F} = a;
                    b === ei && (u.mode = b),
                    typeof S == "boolean" && (u.autoClearCookies = S),
                    typeof D == "boolean" && (u.manageScriptTags = D),
                    typeof L == "number" && L >= 0 && (u.revision = L,
                    d.V = !0),
                    typeof y == "boolean" && (u.autoShow = y),
                    typeof E == "boolean" && (u.lazyHtmlGeneration = E),
                    F === !1 && (u.hideFromBots = !1),
                    u.hideFromBots === !0 && C && (d.J = C.userAgent && /bot|crawl|spider|slurp|teoma/i.test(C.userAgent) || C.webdriver),
                    hs(m) && (u.cookie = st(st({}, f), m)),
                    u.autoClearCookies,
                    d.V,
                    u.manageScriptTags,
                    (T => {
                        let {P: z, X: I, Y: k, Z: W, B: pe} = _.o;
                        for (let re of T) {
                            let ne = z[re]
                              , oe = ne.services || {}
                              , ce = hs(oe) && Je(oe) || [];
                            I[re] = {},
                            k[re] = [],
                            W[re] = [],
                            ne.readOnly && (pe.push(re),
                            k[re] = ce),
                            _.ne.se[re] = {};
                            for (let Me of ce) {
                                let O = oe[Me];
                                O.Se = !1,
                                I[re][Me] = O
                            }
                        }
                    }
                    )(w),
                    ( () => {
                        if (!_.t.manageScriptTags)
                            return;
                        let T = _.o
                          , z = Ra(document, "script[" + ls + "]");
                        for (let I of z) {
                            let k = ns(I, ls)
                              , W = I.dataset.service || ""
                              , pe = !1;
                            if (k && k.charAt(0) === "!" && (k = k.slice(1),
                            pe = !0),
                            W.charAt(0) === "!" && (W = W.slice(1),
                            pe = !0),
                            H(T.O, k) && (T.oe.push({
                                Me: I,
                                xe: !1,
                                ke: pe,
                                De: k,
                                Te: W
                            }),
                            W)) {
                                let re = T.X[k];
                                re[W] || (re[W] = {
                                    Se: !1
                                })
                            }
                        }
                    }
                    )(),
                    Ia(( () => {
                        let T = _.o.i.language.autoDetect;
                        if (T) {
                            let z = {
                                browser: navigator.language,
                                document: document.documentElement.lang
                            }
                              , I = Da(z[T]);
                            if (I)
                                return I
                        }
                        return Va()
                    }
                    )())
                }
                )(t),
                e.J)
                    return;
                ( () => {
                    let a = _.o
                      , l = _.t
                      , c = Pp()
                      , {categories: h, services: u, consentId: d, consentTimestamp: f, lastConsentTimestamp: p, data: m, revision: v} = c
                      , w = vr(h);
                    a.p = c,
                    a.M = d;
                    let C = !!d && yt(d);
                    a.C = f,
                    a.C && (a.C = new Date(f)),
                    a.S = p,
                    a.S && (a.S = new Date(p)),
                    a.h = m !== void 0 ? m : null,
                    a.V && C && v !== l.revision && (a.I = !1),
                    a.D = !(C && a.I && a.C && a.S && w),
                    l.cookie.useLocalStorage && !a.D && (a.D = new Date().getTime() > (c.expirationTime || 0),
                    a.D && Cp(l.cookie.name)),
                    a.D,
                    ( () => {
                        let g = _.o;
                        for (let b of g.O) {
                            let y = g.P[b];
                            if (y.readOnly || y.enabled) {
                                g.G.push(b);
                                let E = g.X[b] || {};
                                for (let S in E)
                                    g.Z[b].push(S),
                                    g.i.mode === ei && g.Y[b].push(S)
                            }
                        }
                    }
                    )(),
                    a.D ? l.mode === ei && (a.R = [...a.G]) : (a.Z = st({}, a.Y),
                    a.Y = st(st({}, a.Y), u),
                    dp([...a.B, ...h]))
                }
                )();
                let o = Na();
                if (!(yield xp()))
                    return !1;
                if (pp(null, n = si, mr, Kt),
                _.o.D && Fa(n, Kt),
                _.t.lazyHtmlGeneration || mr(n, Kt),
                r.autoShow && !o && qa(!0),
                o)
                    return Ca(),
                    tt(i.le);
                r.mode === ei && Ca(e.G)
            }
            var n
        }),
        Q0 = t => {
            let {Ce: e, ye: r} = _.ne
              , {name: i, path: s, domain: n, useLocalStorage: o} = _.t.cookie;
            t && (o ? Cp(i) : Ap(i, s, n));
            for (let {pe: l, me: c, ge: h} of _.o.m)
                l.removeEventListener(c, h);
            e && e.remove(),
            r && r.classList.remove(Ea, ka, Ma);
            let a = new cs;
            for (let l in _)
                _[l] = a[l];
            window._ccRun = !1
        }
    }
    );
    var ub = Qp(Yp => {
        ui();
        Pl();
        Wl();
        Yd();
        Xd();
        Kd();
        Zd();
        rp();
        var Ip;
        window.addEventListener("load", () => {
            he(Yp, null, function*() {
                Ip = yield Promise.resolve().then( () => (Vp(),
                Dp)),
                ma.language.default = document.documentElement.getAttribute("lang"),
                Ip.run(ma),
                document.documentElement.classList.add("cc--darkmode")
            }),
            document.querySelectorAll("[data-split]") && setTimeout( () => {
                document.querySelectorAll("[data-split]").forEach(t => {
                    let e = t.getAttribute("data-split") ? t.getAttribute("data-split") : "lines, words";
                    new js(t,{
                        types: e
                    })
                }
                )
            }
            , 500)
        }
        );
        var qp = t => {
            if (t && Ya == !1 && ni == !1) {
                let e = t.getBoundingClientRect();
                Math.abs(e.top + window.scrollY - window.scrollY) > window.innerHeight * 2 ? (J0(),
                setTimeout( () => {
                    Ha(t)
                }
                , 100)) : Ha(t)
            }
        }
        ;
        document.querySelectorAll("[data-scroll-to]").forEach(t => {
            t.addEventListener("click", e => {
                e.preventDefault();
                let r = document.querySelector('[data-scroll-target="' + t.getAttribute("data-scroll-to") + '"]');
                qp(r)
            }
            )
        }
        );
        var J0 = () => {
            document.querySelector(".scrollingMask").classList.contains("visible") || (document.querySelector(".scrollingMask").classList.add("visible"),
            setTimeout( () => {
                document.querySelector(".scrollingMask").classList.remove("visible")
            }
            , 500))
        }
        ;
        document.querySelector(".navbar_menuToggle") && document.querySelector(".navbar_menuToggle").addEventListener("click", t => {
            document.querySelector(".menu").classList.add("open"),
            br.stop()
        }
        );
        document.querySelector(".menu_close") && document.querySelector(".menu_close").addEventListener("click", t => {
            document.querySelector(".menu").classList.remove("open"),
            br.start()
        }
        );
        document.querySelectorAll("[data-menu-target]").forEach(t => {
            t.addEventListener("click", e => {
                e.preventDefault();
                let r = document.querySelector('[data-scroll-target="' + t.getAttribute("data-menu-target") + '"]');
                r && (document.querySelector(".menu").classList.remove("open"),
                br.start(),
                setTimeout( () => {
                    qp(r)
                }
                , 150))
            }
            )
        }
        );
        var ja;
        window.matchMedia("(min-width: 768px)").matches && document.querySelector(".ambienceSoundToggle") && (ja = new tp("/assets/sounds/ambience.mp3",".ambienceSoundToggle"));
        var oi;
        document.querySelector(".circles") && (oi = new Qd);
        var zp = document.querySelector(Wd), Qt;
        if (zp) {
            Qt = new Qr(zp,Gd,600);
            let t = () => {
                Qt.render(),
                requestAnimationFrame(t)
            }
            ;
            function e() {
                return he(this, null, function*() {
                    yield Qt.prepare(),
                    requestAnimationFrame(t),
                    Qt.onProgress(1, "blank", "hero")
                })
            }
            e()
        }
        var eb = []
          , tb = !1
          , Np = !1;
        window.addEventListener("sectionTransition", t => {
            let {target: e, progress: r} = t.detail
              , i = e.getAttribute("data-from")
              , s = e.getAttribute("data-to");
            e.classList.contains("is-inview") && Qt && (Np = r > 0 && r < 1,
            Qt.onProgress(r, i, s))
        }
        );
        var $a = (t, e=150, r="linear", i=1, s=0) => {
            if (ni || Np) {
                tb = !1,
                eb = [];
                return
            }
            Qt.changeSlide(t, e, r, i, s)
        }
        , Up = document.querySelector(".loading"), rb = !1, ib = () => {
            let t = document.querySelector(".loading")
              , r = t.querySelector(".loading_logo").querySelector("img")
              , i = t.querySelector(".loading_counter")
              , s = i.querySelector(".loading_counter_inner")
              , n = i.querySelector(".loading_counter_value")
              , a = t.querySelector(".loading_sequence").querySelectorAll(".loading_sequence_item")
              , l = {
                pct: 0
            }
              , c = x.timeline();
            c.add({
                targets: r,
                translateY: ["100%", "0%"],
                rotate: [4, 0],
                duration: 800,
                delay: 500,
                easing: "easeOutExpo"
            }),
            c.add({
                targets: r,
                translateY: ["0%", "-100%"],
                rotate: [0, -4],
                duration: 800,
                delay: 1e3,
                easing: "easeOutExpo"
            }),
            c.add({
                targets: s,
                translateY: ["100%", "0%"],
                scale: [.6, 1],
                duration: 800,
                easing: "easeOutExpo"
            }, "-=700"),
            c.add({
                targets: l,
                pct: 212,
                easing: "easeOutQuad",
                duration: 2500,
                update: () => {
                    n.innerHTML = Math.round(l.pct)
                }
                ,
                complete: () => {
                    i.classList.add("end"),
                    rb = !0,
                    ja && ja.start()
                }
            }),
            c.add({
                targets: a,
                scale: [1.5, 1],
                opacity: [0, 1],
                rotate: [8, 0],
                easing: "easeOutExpo",
                duration: 800,
                delay: function(h, u, d) {
                    return 300 + u * 120
                }
            }),
            c.add({
                targets: i,
                opacity: {
                    value: 0,
                    duration: 300
                },
                translateX: ["-50%", "-50%"],
                translateY: ["-50%", "-50%"],
                scale: [1, .75],
                rotate: [0, -4],
                filter: "blur(20px)",
                duration: 600,
                easing: "easeOutExpo"
            }, "-=1600"),
            c.add({
                targets: t,
                translateX: [0, 0],
                duration: 1,
                easing: "linear",
                complete: () => {
                    t.classList.add("hidden")
                }
            }, "-=300"),
            c.add({
                targets: t,
                translateX: [0, 0],
                duration: 1,
                easing: "linear",
                complete: () => {
                    ab()
                }
            }, "-=400")
        }
        , sb = ({scroll: t, limit: e, velocity: r, direction: i, progress: s}) => {
            jp && ob(s),
            oi && oi.onScroll(t, r, i)
        }
        , nb = () => {
            let t = window.innerHeight
              , e = .9;
            return t < 700 ? e = .6 : t < 800 ? e = .7 : t < 900 && (e = .8),
            e
        }
        , br, ni = !1, Ya = !1;
        window.scrollTo && window.scrollTo(0, 0);
        history && history.scrollRestoration && (history.scrollRestoration = "manual");
        br = new fi({
            autoStart: !Up,
            scrollCallback: sb,
            lenisOptions: {
                wheelMultiplier: nb(),
                syncTouch: !0,
                touchInertiaMultiplier: 12
            }
        });
        Up && (Ya = !0,
        ib());
        var jp = document.querySelector(".navbar_progress_bar")
          , ob = t => {
            jp.style.transform = "scaleX(" + t + ")"
        }
          , Ha = t => {
            ni || (window.matchMedia("(any-pointer:coarse)").matches || (ni = !0),
            br.scrollTo(t, {
                duration: 1,
                lerp: .1,
                lock: !0,
                easing: e => e === 1 ? 1 : 1 - Math.pow(2, -10 * e),
                onComplete: () => {
                    ni = !1
                }
            }))
        }
        ;
        window.addEventListener("sectionProgress", t => {
            let {target: e, progress: r} = t.detail
              , i = e.getAttribute("data-scroll-target")
              , s = document.querySelector('.navbar_progress_section[data-section="' + i + '"]');
            s.querySelector("span").style.transform = "scaleX(" + r + ")"
        }
        );
        window.addEventListener("activateSection", t => {
            let {target: e, way: r, from: i} = t.detail
              , s = e.getAttribute("data-scroll-target");
            if (r == "enter") {
                document.querySelector(".navbar a.active") && document.querySelector(".navbar a.active").classList.remove("active");
                let n = document.querySelector('.navbar a[data-scroll-to="' + s + '"]');
                if (n.classList.add("active"),
                n.classList.contains("navbar_nav_link")) {
                    let o = n.querySelector("span:first-child")
                      , a = n.querySelectorAll(".char")
                      , l = x.timeline();
                    l.add({
                        targets: [o, a],
                        translateX: "1.2em",
                        delay: x.stagger(9, {
                            from: "last"
                        }),
                        duration: 400,
                        easing: "easeOutExpo"
                    }),
                    l.add({
                        targets: [o, a],
                        translateX: "0",
                        delay: x.stagger(9, {
                            from: "first"
                        }),
                        duration: 400,
                        easing: "easeOutExpo"
                    }, "+=100")
                }
            } else
                document.querySelector('.navbar a[data-scroll-to="' + s + '"]').classList.remove("active")
        }
        );
        window.addEventListener("togglePanel", t => {
            let {target: e, way: r, from: i} = t.detail
              , s = e.getAttribute("data-panel");
            r == "enter" ? document.querySelector(".panel--" + s).classList.add("active") : document.querySelector(".panel--" + s).classList.remove("active")
        }
        );
        window.addEventListener("parentFade", t => {
            let {target: e, progress: r} = t.detail
              , i = e.parentElement;
            e.getAttribute("data-fade-target") && (i = document.querySelector(e.getAttribute("data-fade-target"))),
            x.set(i, {
                opacity: 1 - r,
                filter: "blur(" + 20 * r + "px)"
            })
        }
        );
        window.addEventListener("linesAppear", t => {
            let {target: e, way: r, from: i} = t.detail
              , s = [...e.querySelectorAll(".line")];
            r == "enter" && x({
                targets: s,
                translateY: [40, 0],
                opacity: [0, 1],
                duration: 800,
                easing: "easeOutExpo",
                delay: x.stagger(50)
            })
        }
        );
        window.addEventListener("sphereTitle", t => {
            let {target: e, way: r, from: i} = t.detail
              , s = [...e.querySelectorAll(".line")];
            r == "enter" && s.forEach( (n, o) => {
                x({
                    targets: [...n.querySelectorAll(".word")],
                    translateY: ["100%", "0"],
                    opacity: [0, 1],
                    duration: 600,
                    easing: "easeOutExpo",
                    delay: o * 120
                })
            }
            )
        }
        );
        var ab = () => {
            let t = document.querySelector(".navbar")
              , e = t.querySelector(".navbar_progress_track")
              , r = t.querySelector('.navbar_progress_section[data-section="hero"] span')
              , i = t.querySelector(".navbar_logo a")
              , s = [...t.querySelectorAll('.navbar_nav > a > [data-split="chars"]')]
              , n = [...t.querySelectorAll(".navbar_actions .button")]
              , o = t.querySelector(".navbar_menuToggle")
              , a = document.querySelector(".hero_scroll")
              , l = document.querySelector('.hero_titles [data-step="1"]')
              , c = x.timeline({
                easing: "easeOutExpo"
            });
            c.add({
                targets: t,
                opacity: 1,
                duration: 1
            }, 0),
            c.add({
                targets: e,
                scaleX: [0, 1],
                duration: 1800
            }, 1),
            c.add({
                targets: r,
                scaleX: [0, 1],
                duration: 1200
            }, 100),
            c.add({
                targets: i,
                translateX: ["-100%", "0%"],
                opacity: [0, 1],
                duration: 600
            }, 200),
            c.add({
                targets: s,
                translateX: ["-100%", "0%"],
                opacity: [0, 1],
                duration: 600,
                delay: x.stagger(150)
            }, 300),
            c.add({
                targets: o,
                scale: [.75, 1],
                translateX: [-20, 0],
                opacity: [0, 1],
                duration: 500
            }, 700),
            c.add({
                targets: n,
                scale: [.75, 1],
                translateX: [-40, 0],
                opacity: [0, 1],
                duration: 600,
                delay: x.stagger(120)
            }, 900),
            c.add({
                targets: l.querySelectorAll(".word"),
                translateY: ["100%", "0%"],
                rotate: [10, 0],
                opacity: [0, 1],
                duration: 800,
                delay: x.stagger(60),
                complete: () => {
                    br.start(),
                    Ya = !1
                }
            }, 900),
            c.add({
                targets: a,
                scale: [.6, 1],
                opacity: [0, 1],
                duration: 600
            }, 1400)
        }
          , lb = (t, e) => {
            if (t == null || t == e)
                return;
            let r = document.querySelector('.hero_titles [data-step="1"]')
              , i = document.querySelector('.hero_titles [data-step="2"]')
              , s = [...document.querySelector(".hero .pSection_header_additional").querySelectorAll(".line")]
              , n = document.querySelector(".hero .buttonDiscover")
              , o = document.querySelector(".hero_scroll");
            if (x.remove(r.querySelectorAll(".word")),
            x.remove(i.querySelectorAll(".word")),
            x.remove(o),
            x.remove(n),
            s.forEach( (a, l) => {
                x.remove(a.querySelectorAll(".word"))
            }
            ),
            t == 1 && e == 2) {
                let a = x.timeline({
                    duration: 800,
                    easing: "easeOutExpo"
                });
                a.add({
                    targets: r.querySelectorAll(".word"),
                    translateY: ["0", "-100%"],
                    rotate: [0, -10],
                    opacity: {
                        value: 0,
                        duration: 200,
                        easing: "linear"
                    },
                    delay: x.stagger(40)
                }, 0),
                a.add({
                    targets: o,
                    scale: [1, .6],
                    opacity: [1, 0],
                    duration: 400
                }, 0),
                a.add({
                    targets: n,
                    opacity: [0, 1],
                    duration: 1,
                    easing: "linear"
                }, 0),
                a.add({
                    targets: i.querySelectorAll(".word"),
                    translateY: ["100%", "0%"],
                    rotate: [10, 0],
                    opacity: {
                        value: 1,
                        duration: 200,
                        easing: "linear"
                    },
                    duration: 800,
                    easing: "easeOutExpo",
                    delay: x.stagger(40)
                }, "-=700"),
                s.forEach( (l, c) => {
                    a.add({
                        targets: [...l.querySelectorAll(".word")],
                        translateY: ["100%", "0"],
                        opacity: [0, 1],
                        duration: 600,
                        easing: "easeOutExpo",
                        delay: c * 120
                    }, 600)
                }
                ),
                a.add({
                    targets: n.querySelector(".buttonDiscover_border"),
                    scale: [0, 1],
                    duration: 600,
                    easing: "easeOutExpo"
                }, "-=200"),
                a.add({
                    targets: n.querySelector(".buttonDiscover_label"),
                    translateX: ["-105%", "0%"],
                    duration: 600,
                    easing: "easeOutExpo"
                }, "-=450"),
                a.add({
                    targets: n.querySelector(".buttonDiscover_arrow"),
                    translateY: [-40, 0],
                    duration: 600,
                    easing: "easeOutExpo"
                }, "-=400")
            }
            if (t == 2 && e == 1) {
                let a = x.timeline({
                    duration: 800,
                    easing: "easeOutExpo"
                });
                a.add({
                    targets: i.querySelectorAll(".word"),
                    translateY: ["0%", "100%"],
                    rotate: [0, 10],
                    opacity: {
                        value: 0,
                        duration: 200,
                        easing: "linear"
                    },
                    duration: 800,
                    easing: "easeOutExpo",
                    delay: x.stagger(40, {
                        from: "last"
                    })
                }, 0),
                s.forEach( (l, c) => {
                    a.add({
                        targets: [...l.querySelectorAll(".word")],
                        translateY: ["0", "100%"],
                        opacity: [1, 0],
                        duration: 600,
                        easing: "easeOutExpo",
                        delay: c * 80
                    }, 0)
                }
                ),
                a.add({
                    targets: n,
                    opacity: [1, 0],
                    duration: 200,
                    easing: "linear"
                }, 0),
                a.add({
                    targets: r.querySelectorAll(".word"),
                    translateY: ["-100%", "0"],
                    rotate: [-10, 0],
                    opacity: {
                        value: 1,
                        duration: 200,
                        easing: "linear"
                    },
                    delay: x.stagger(40)
                }, "-=700"),
                a.add({
                    targets: o,
                    scale: [.6, 1],
                    opacity: [0, 1],
                    duration: 400
                }, "-=700")
            }
        }
          , Bp = null
          , Ua = null;
        window.addEventListener("triggerStep", t => {
            let {target: e, way: r, from: i} = t.detail
              , s = e.getAttribute("data-step");
            r == "enter" && (Bp = Ua,
            Ua = parseInt(s),
            document.querySelector(".pSection--hero").setAttribute("data-step", s),
            lb(Bp, Ua))
        }
        );
        window.addEventListener("heroBlur", t => {
            let {target: e, progress: r} = t.detail
              , i = document.querySelector(".render_blur");
            x.set(i, {
                opacity: 1 - r
            })
        }
        );
        var cb = () => {
            let t = new js(".manifesto_content",{
                types: "words"
            })
              , e = document.querySelector(".manifesto").getAttribute("data-steps").split(" ").map(Number)
              , r = []
              , i = 0
              , s = 0;
            t.words.forEach( (n, o) => {
                e.indexOf(o) != -1 && (i = e.indexOf(o)),
                r.push(i)
            }
            ),
            window.addEventListener("readText", n => {
                let {target: o, progress: a} = n.detail;
                i = Math.round((t.words.length + 5) * a),
                s != r[i] && (s = r[i],
                $a(s)),
                t.words.forEach( (l, c) => {
                    c < i ? l.classList.add("active") : l.classList.remove("active")
                }
                )
            }
            )
        }
        ;
        document.querySelector(".manifesto_content") && cb();
        if (document.querySelector(".recognition")) {
            let e = document.querySelectorAll(".recognition_nav_item").length
              , r = null
              , i = 0
              , s = 1 / e
              , n = h => {
                let u = (h - s * i) / s
                  , d = document.querySelector('.recognition_nav_item[data-index="' + i + '"]').querySelector(".recognition_nav_progress_bar");
                u = Math.min(Math.max(u, 0), 1),
                d.style.transform = "scaleX(" + u + ")"
            }
              , o = () => {
                let h = document.querySelector(".recognition_title.active")
                  , u = document.querySelector('.recognition_title[data-index="' + i + '"]')
                  , d = []
                  , f = [...u.querySelectorAll(".line")];
                h && (h.classList.remove("active"),
                d = [...h.querySelectorAll(".line")],
                d.forEach( (p, m) => {
                    p.querySelectorAll(".word").forEach(v => {
                        x.remove(v)
                    }
                    ),
                    x({
                        targets: [...p.querySelectorAll(".word")],
                        translateY: ["0%", "-100%"],
                        opacity: {
                            value: 0,
                            duration: 150,
                            easing: "linear"
                        },
                        duration: 600,
                        easing: "easeOutExpo",
                        delay: m * 100
                    })
                }
                )),
                f.forEach( (p, m) => {
                    p.querySelectorAll(".word").forEach(v => {
                        x.remove(v)
                    }
                    ),
                    x({
                        targets: [...p.querySelectorAll(".word")],
                        translateY: ["100%", "0%"],
                        opacity: {
                            value: 1,
                            duration: 200,
                            easing: "linear"
                        },
                        duration: 800,
                        easing: "easeOutExpo",
                        delay: 300 + m * 150
                    })
                }
                ),
                u.classList.add("active")
            }
            ;
            window.addEventListener("recognition", h => {
                let {target: u, progress: d} = h.detail;
                d > 0 && d < 1 && (n(d),
                i = Math.floor(d * e),
                i != r && (r = i,
                document.querySelector(".recognition_nav_item.active").classList.remove("active"),
                document.querySelector('.recognition_nav_item[data-index="' + i + '"]').classList.add("active"),
                document.querySelector(".recognition_nav_mobileTitles_item.active").classList.remove("active"),
                document.querySelector('.recognition_nav_mobileTitles_item[data-index="' + i + '"]').classList.add("active"),
                o(),
                $a(i)))
            }
            );
            let a = document.querySelectorAll(".recognition .brand")
              , l = document.querySelector(".recognition_brands")
              , c = document.querySelector(".recognition_brands_cartouche");
            a.forEach(h => {
                h.addEventListener("mouseenter", u => {
                    l.classList.add("active"),
                    c.querySelector(".active") && c.querySelector(".active").classList.remove("active"),
                    c.querySelector('[data-brand="' + h.getAttribute("data-brand") + '"]').classList.add("active")
                }
                ),
                h.addEventListener("mousemove", u => {
                    c.style.transform = "translate(" + u.clientX + "px," + u.clientY + "px)"
                }
                ),
                h.addEventListener("mouseleave", u => {
                    l.classList.remove("active"),
                    c.querySelector(".active") && c.querySelector(".active").classList.remove("active")
                }
                )
            }
            )
        }
        var gr = 0
          , Hp = t => ({
            num: t.querySelector(".collapse_title_num"),
            titleSmall: t.querySelector(".collapse_title_txt"),
            content: t.querySelector(".collapse_content"),
            contentTitle: t.querySelector(".collapse_content_title"),
            contentTxt: t.querySelector(".collapse_content_txt"),
            contentMedia: t.querySelector(".collapse_content_media"),
            contentAction: t.querySelector(".button")
        })
          , $p = t => {
            let e = Hp(t)
              , r = x.timeline({
                easing: "easeOutExpo"
            });
            x.remove(e.titleSmall),
            x.remove(e.num),
            x.remove(e.content),
            x.remove(e.contentTitle.querySelectorAll(".line")),
            x.remove(e.contentTxt.querySelectorAll(".line")),
            x.remove(e.contentMedia),
            r.add({
                targets: e.titleSmall,
                opacity: {
                    value: 0,
                    duration: 200,
                    easing: "linear"
                },
                translateY: [0, 30],
                duration: 600
            }, 0),
            r.add({
                targets: e.num,
                opacity: 1,
                translateY: 30,
                duration: 600
            }, 0),
            r.add({
                targets: e.content,
                opacity: [0, 1],
                translateY: 0,
                duration: 1,
                easing: "linear"
            }, 0),
            r.add({
                targets: e.contentTitle.querySelectorAll(".line"),
                translateY: [80, 0],
                opacity: [0, 1],
                duration: 800,
                delay: x.stagger(100)
            }, 300),
            r.add({
                targets: e.contentTxt.querySelectorAll(".line"),
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 600,
                delay: x.stagger(75)
            }, "-=600"),
            e.contentMedia && r.add({
                targets: e.contentMedia,
                clipPath: ["polygon(0 0, 100% 0, 100% 0, 0 0)", "polygon(0 0,100% 0,100% 100%,0 100%)"],
                duration: 800
            }, "-=800"),
            e.contentAction && r.add({
                targets: e.contentAction,
                opacity: [0, 1],
                translateY: [40, 0],
                duration: 800
            }, "-=800")
        }
          , hb = t => {
            let e = Hp(t)
              , r = x.timeline({
                easing: "easeOutExpo"
            });
            x.remove(e.content),
            x.remove(e.num),
            x.remove(e.titleSmall),
            r.add({
                targets: e.content,
                opacity: [1, 0],
                translateY: [0, 80],
                duration: 800
            }, 0),
            r.add({
                targets: e.num,
                translateY: 0,
                duration: 600
            }, 0),
            r.add({
                targets: e.titleSmall,
                opacity: {
                    value: 1,
                    duration: 200,
                    easing: "linear"
                },
                translateY: [30, 0],
                duration: 600
            }, 0)
        }
        ;
        window.addEventListener("collapseProgress", t => {
            let {target: e, progress: r} = t.detail
              , i = document.querySelector('.collapses[data-collapse="' + e.getAttribute("data-collapse") + '"]')
              , s = i.getAttribute("data-current-index") ? parseInt(i.getAttribute("data-current-index")) : 0;
            if (i) {
                let n = i.querySelectorAll(".collapse").length;
                if (r > 0 && r < 1 && (gr = Math.floor(r * n),
                gr != s)) {
                    s = gr,
                    i.setAttribute("data-current-index", gr);
                    let o = i.querySelector(".collapse.active")
                      , a = i.querySelector('.collapse[data-index="' + gr + '"]');
                    o.classList.remove("active"),
                    a.classList.add("active"),
                    $a(gr),
                    hb(o),
                    $p(a)
                }
            }
        }
        );
        window.addEventListener("initFirstCollapse", t => {
            let {target: e, way: r, from: i} = t.detail
              , s = e.querySelector(".collapse.default");
            r == "enter" && $p(s)
        }
        );
        if (document.querySelector(".cover")) {
            let t = document.querySelector(".cover");
            window.addEventListener("coverZoom", e => {
                let {target: r, progress: i} = e.detail;
                t.style.setProperty("--cover_scale", 1 + .2 * i),
                t.style.setProperty("--cover_mask", Math.min(Math.max(i * 2, 0), 1))
            }
            )
        }
        if (document.querySelector(".jobsIframe")) {
            let t = document.querySelector(".jobsIframe");
            t.onload = function() {
                t.style.height = t.contentWindow.document.documentElement.scrollHeight + "px"
            }
        }
        if (document.querySelector(".header")) {
            let t = document.querySelector(".header");
            t.style.setProperty("--header_height", t.offsetHeight + "px"),
            window.addEventListener("resize", e => {
                t.style.setProperty("--header_height", t.offsetHeight + "px")
            }
            )
        }
        window.addEventListener("editoNavbar", t => {
            let {target: e, way: r, from: i} = t.detail
              , s = document.querySelector(".navbarMask");
            s && (r == "enter" ? s.classList.add("visible") : i == "start" && s.classList.remove("visible"))
        }
        );
        document.querySelectorAll(".edito_scroll") && document.querySelectorAll(".edito_scroll").forEach(t => {
            let r = [...t.querySelector(".edito_scroll_label").querySelectorAll(".char")]
              , i = t.querySelector("svg");
            t.addEventListener("mouseenter", s => {
                x.remove(r),
                x.remove(i);
                let n = x.timeline();
                n.add({
                    targets: r,
                    translateY: 35,
                    delay: x.stagger(12, {
                        from: "first"
                    }),
                    duration: 400,
                    easing: "easeOutExpo"
                }),
                n.add({
                    targets: i,
                    translateY: [-20, 0],
                    opacity: 1,
                    duration: 400,
                    easing: "easeOutExpo"
                }, "-=300")
            }
            ),
            t.addEventListener("mouseleave", s => {
                x.remove(r),
                x.remove(i);
                let n = x.timeline();
                n.add({
                    targets: i,
                    translateY: [0, -20],
                    opacity: 0,
                    duration: 400,
                    easing: "easeOutExpo"
                }),
                n.add({
                    targets: r,
                    translateY: 0,
                    delay: x.stagger(12, {
                        from: "last"
                    }),
                    duration: 400,
                    easing: "easeOutExpo"
                }, "-=300")
            }
            )
        }
        );
        if (document.body.classList.contains("edito") && (setTimeout( () => {
            window.scrollY < window.innerHeight / 2 && Ha(".content")
        }
        , 2e3),
        oi)) {
            let t = [1, 3, 4, 7, 8];
            oi.setState(t[Math.floor(Math.random() * t.length)])
        }
        document.querySelectorAll(".navbar_nav_link") && document.querySelectorAll(".navbar_nav_link").forEach(t => {
            t.addEventListener("mouseenter", e => {
                let r = t.querySelector("span:first-child")
                  , i = t.querySelectorAll(".char");
                x({
                    targets: [r, i],
                    translateX: "1.2em",
                    delay: x.stagger(9, {
                        from: "last"
                    }),
                    duration: 400,
                    easing: "easeOutExpo"
                })
            }
            ),
            t.addEventListener("mouseleave", e => {
                let r = t.querySelector("span:first-child")
                  , i = t.querySelectorAll(".char");
                x({
                    targets: [r, i],
                    translateX: "0",
                    delay: x.stagger(9, {
                        from: "first"
                    }),
                    duration: 400,
                    easing: "easeOutExpo"
                })
            }
            )
        }
        );
        document.querySelectorAll(".button:not(.button--empty)") && document.querySelectorAll(".button:not(.button--empty)").forEach(t => {
            t.addEventListener("mouseenter", e => {
                let r = t.querySelectorAll(".char");
                x({
                    targets: r,
                    translateX: -18,
                    delay: x.stagger(9, {
                        from: "first"
                    }),
                    duration: 450,
                    easing: "easeOutExpo"
                })
            }
            ),
            t.addEventListener("mouseleave", e => {
                let r = t.querySelectorAll(".char");
                x({
                    targets: r,
                    translateX: 0,
                    delay: x.stagger(9, {
                        from: "last"
                    }),
                    duration: 450,
                    easing: "easeOutExpo"
                })
            }
            )
        }
        );
        document.querySelectorAll(".buttonDiscover") && document.querySelectorAll(".buttonDiscover").forEach(t => {
            t.addEventListener("mouseenter", e => {
                let r = t.querySelector(".buttonDiscover_arrow_icon--1")
                  , i = t.querySelector(".buttonDiscover_arrow_icon--2")
                  , s = [...t.querySelector(".buttonDiscover_label_txt--1").querySelectorAll(".char")]
                  , n = [...t.querySelector(".buttonDiscover_label_txt--2").querySelectorAll(".char")]
                  , o = x.timeline();
                o.add({
                    targets: s,
                    translateY: 35,
                    delay: x.stagger(12, {
                        from: "first"
                    }),
                    duration: 400,
                    easing: "easeOutExpo"
                }, 0),
                o.add({
                    targets: n,
                    translateY: [-30, 0],
                    delay: x.stagger(12, {
                        from: "first"
                    }),
                    duration: 400,
                    easing: "easeOutExpo"
                }, "-=350"),
                o.add({
                    targets: r,
                    translateY: 30,
                    duration: 400,
                    easing: "easeOutExpo"
                }, 0),
                o.add({
                    targets: i,
                    translateY: [-35, 0],
                    duration: 400,
                    easing: "easeOutExpo"
                }, "-=350")
            }
            ),
            t.addEventListener("mouseleave", e => {
                let r = t.querySelector(".buttonDiscover_arrow_icon--1")
                  , i = t.querySelector(".buttonDiscover_arrow_icon--2")
                  , s = [...t.querySelector(".buttonDiscover_label_txt--1").querySelectorAll(".char")]
                  , n = [...t.querySelector(".buttonDiscover_label_txt--2").querySelectorAll(".char")]
                  , o = x.timeline();
                o.add({
                    targets: n,
                    translateY: -30,
                    delay: x.stagger(12, {
                        from: "last"
                    }),
                    duration: 400,
                    easing: "easeOutExpo"
                }),
                o.add({
                    targets: s,
                    translateY: 0,
                    delay: x.stagger(12, {
                        from: "last"
                    }),
                    duration: 400,
                    easing: "easeOutExpo"
                }, "-=350"),
                o.add({
                    targets: i,
                    translateY: -30,
                    duration: 400,
                    easing: "easeOutExpo"
                }, 0),
                o.add({
                    targets: r,
                    translateY: 0,
                    duration: 400,
                    easing: "easeOutExpo"
                }, "-=350")
            }
            )
        }
        );
        document.querySelectorAll(".hero_scroll") && document.querySelectorAll(".hero_scroll").forEach(t => {
            let r = [...t.querySelector(".hero_scroll_label").querySelectorAll(".char")]
              , i = t.querySelector("svg");
            t.addEventListener("mouseenter", s => {
                x.remove(r),
                x.remove(i);
                let n = x.timeline();
                n.add({
                    targets: r,
                    translateY: 35,
                    delay: x.stagger(12, {
                        from: "first"
                    }),
                    duration: 400,
                    easing: "easeOutExpo"
                }),
                n.add({
                    targets: i,
                    translateY: [-20, 0],
                    opacity: 1,
                    duration: 400,
                    easing: "easeOutExpo"
                }, "-=300")
            }
            ),
            t.addEventListener("mouseleave", s => {
                x.remove(r),
                x.remove(i);
                let n = x.timeline();
                n.add({
                    targets: i,
                    translateY: [0, -20],
                    opacity: 0,
                    duration: 400,
                    easing: "easeOutExpo"
                }),
                n.add({
                    targets: r,
                    translateY: 0,
                    delay: x.stagger(12, {
                        from: "last"
                    }),
                    duration: 400,
                    easing: "easeOutExpo"
                }, "-=300")
            }
            )
        }
        );
        window.addEventListener("sectionHeader", t => {
            let {target: e, way: r, from: i} = t.detail
              , s = e.querySelector(".st4")
              , o = [...e.querySelector(".st1").querySelectorAll(".word")]
              , a = e.querySelector(".pSection_header_footer").querySelectorAll(".button")
              , l = [...e.querySelector(".st3").querySelectorAll(".line")]
              , c = e.querySelector(".buttonDiscover");
            if (r == "enter") {
                let h = x.timeline();
                h.add({
                    targets: s,
                    translateY: [40, 0],
                    opacity: [0, 1],
                    easing: "easeOutExpo",
                    duration: 600,
                    delay: 400
                }),
                h.add({
                    targets: o,
                    translateY: ["100%", "0%"],
                    rotate: [10, 0],
                    opacity: [0, 1],
                    duration: 800,
                    easing: "easeOutExpo",
                    delay: x.stagger(60)
                }, "-=500"),
                a.length > 0 && h.add({
                    targets: a,
                    translateY: [40, 0],
                    opacity: [0, 1],
                    easing: "easeOutExpo",
                    duration: 600,
                    delay: x.stagger(100)
                }, "-=500"),
                l.forEach( (u, d) => {
                    h.add({
                        targets: [...u.querySelectorAll(".word")],
                        translateY: ["100%", "0"],
                        opacity: [0, 1],
                        duration: 600,
                        easing: "easeOutExpo",
                        delay: d * 120
                    }, 1e3)
                }
                ),
                h.add({
                    targets: c.querySelector(".buttonDiscover_border"),
                    scale: [0, 1],
                    duration: 600,
                    easing: "easeOutExpo"
                }, "-=200"),
                h.add({
                    targets: c.querySelector(".buttonDiscover_label"),
                    translateX: ["-105%", "0%"],
                    duration: 600,
                    easing: "easeOutExpo"
                }, "-=450"),
                h.add({
                    targets: c.querySelector(".buttonDiscover_arrow"),
                    translateY: [-40, 0],
                    duration: 600,
                    easing: "easeOutExpo"
                }, "-=400")
            }
        }
        );
        document.querySelectorAll(".joinInvest_contact_link") && document.querySelectorAll(".joinInvest_contact_link").forEach(t => {
            let e = t.querySelector("a");
            e.addEventListener("mouseenter", r => {
                let i = [...e.querySelector("span:first-child").querySelectorAll(".char")]
                  , s = [...e.querySelector("span:last-child").querySelectorAll(".char")]
                  , n = x.timeline();
                n.add({
                    targets: i,
                    translateY: ["0%", "-120%"],
                    opacity: [1, 0],
                    delay: x.stagger(12, {
                        from: "first"
                    }),
                    duration: 400,
                    easing: "easeOutExpo"
                }, 0),
                n.add({
                    targets: s,
                    translateY: ["120%", "0%"],
                    opacity: [0, 1],
                    delay: x.stagger(12, {
                        from: "first"
                    }),
                    duration: 400,
                    easing: "easeOutExpo"
                }, "-=350"),
                n.add({
                    targets: ".render_blur",
                    opacity: 1,
                    duration: 200,
                    easing: "linear"
                }, 0)
            }
            ),
            e.addEventListener("mouseleave", r => {
                let i = [...e.querySelector("span:first-child").querySelectorAll(".char")]
                  , s = [...e.querySelector("span:last-child").querySelectorAll(".char")]
                  , n = x.timeline();
                n.add({
                    targets: s,
                    translateY: ["0%", "120%"],
                    opacity: [1, 0],
                    delay: x.stagger(12, {
                        from: "last"
                    }),
                    duration: 400,
                    easing: "easeOutExpo"
                }),
                n.add({
                    targets: i,
                    translateY: ["-120%", "0%"],
                    opacity: [0, 1],
                    delay: x.stagger(12, {
                        from: "last"
                    }),
                    duration: 400,
                    easing: "easeOutExpo"
                }, "-=350"),
                n.add({
                    targets: ".render_blur",
                    opacity: 0,
                    duration: 200,
                    easing: "linear"
                }, 0)
            }
            )
        }
        )
    }
    );
    ub();
}
)();
/*! Bundled license information:

tweakpane/dist/tweakpane.js:
  (*! Tweakpane 4.0.4 (c) 2016 cocopon, licensed under the MIT license. *)

vanilla-cookieconsent/dist/cookieconsent.esm.js:
  (*!
  * CookieConsent 3.0.1
  * https://github.com/orestbida/cookieconsent
  * Author Orest Bida
  * Released under the MIT License
  *)
*/
