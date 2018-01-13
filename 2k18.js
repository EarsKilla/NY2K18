! function(i) {
    function t(r) {
        if (e[r]) return e[r].exports;
        var f = e[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return i[r].call(f.exports, f, f.exports, t), f.loaded = !0, f.exports
    }
    var e = {};
    return t.m = i, t.c = e, t.p = "", t(0)
}({
    0: function(i, t, e) {
        i.exports = e(77)
    },
    57: function(i, t) {
        "use strict";

        function e(i, t) {
            return 1 - 3 * t + 3 * i
        }

        function r(i, t) {
            return 3 * t - 6 * i
        }

        function f(i) {
            return 3 * i
        }

        function n(i, t, n) {
            return ((e(t, n) * i + r(t, n)) * i + f(t)) * i
        }

        function a(i, t, n) {
            return 3 * e(t, n) * i * i + 2 * r(t, n) * i + f(t)
        }

        function o(i, t, e, r, f) {
            var a = void 0,
                o = void 0,
                d = 0;
            do o = t + (e - t) / 2, a = n(o, r, f) - i, a > 0 ? e = o : t = o; while (Math.abs(a) > g && ++d < v);
            return o
        }

        function d(i, t, e, r) {
            for (var f = 0; c > f; ++f) {
                var o = a(t, e, r);
                if (0 === o) return t;
                var d = n(t, e, r) - i;
                t -= d / o
            }
            return t
        }

        function u(i, t, e, r) {
            function f(t) {
                for (var r = 0, f = 1, n = w - 1; f !== n && u[f] <= t; ++f) r += p;
                --f;
                var l = (t - u[f]) / (u[f + 1] - u[f]),
                    s = r + l * p,
                    c = a(s, i, e);
                return c >= h ? d(t, s, i, e) : 0 === c ? s : o(t, r, r + p, i, e)
            }
            if (!(i >= 0 && 1 >= i && e >= 0 && 1 >= e)) throw new Error("bezier x values must be in [0, 1] range");
            var u = X ? new s(w) : new Array(w);
            if (i !== t || e !== r)
                for (var l = 0; w > l; ++l) u[l] = n(l * p, i, e);
            return function(a) {
                return i === t && e === r ? a : 0 === a ? 0 : 1 === a ? 1 : n(f(a), t, r)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t["default"] = u;
        var l = window,
            s = l.Float32Array,
            c = 4,
            h = .001,
            g = 1e-7,
            v = 10,
            w = 11,
            p = 1 / (w - 1),
            X = "function" == typeof s
    },
    77: function(i, t, e) {
        "use strict";

        function r(i) {
            return i && i.__esModule ? i : {
                "default": i
            }
        }

        function f(i, t, e, r, f, n, a) {
            var o = {
                    x: t,
                    y: e
                },
                d = {
                    x: r,
                    y: f
                },
                u = {
                    x: n,
                    y: a
                };
            return {
                x: (1 - i) * (1 - i) * o.x + 2 * i * (1 - i) * u.x + i * i * d.x,
                y: (1 - i) * (1 - i) * o.y + 2 * i * (1 - i) * u.y + i * i * d.y
            }
        }

        function n(i) {
            return b(i)
        }

        function a(i) {
            var t = null,
                e = void 0,
                r = void 0,
                f = void 0;
            if (!i) return !1;
            if (1 === i.length) return i[0];
            for (var n = 0; n < i.length; n++) {
                var a = i[n];
                null === t ? (t = a.x, e = a.x, r = a.y, f = a.y) : (t = Math.min(a.x, t), r = Math.min(a.y, r), e = Math.max(a.x, e), f = Math.max(a.y, f))
            }
            return t || console.log(i), {
                x: e - (e - t) / 2,
                y: f - (f - r) / 2
            }
        }

        function o(i, t) {
            for (var e = 0, r = 0, f = [], n = 0; f.length < t.points.length;) {
                var a = t.points[e],
                    o = i[r];
                if (!o) return !1;
                if (o.length >= a ? (f.push(r), e++) : f = [], r++, n > 100) break;
                n++
            }
            for (var d = [], u = 0; u < f.length; u++)
                for (var l = f[u], s = i[l].splice(0, t.points[u]), c = 0; c < s.length; c++) d.push(s[c]);
            return d
        }

        function d() {
            for (var i = 960 * w.scaleFactor, t = 60 * w.scaleFactor, e = [], r = 0, f = {
                    x: i / 2,
                    y: i / 2
                }, n = 0; i > r;) {
                for (var a = Math.floor(r / t), o = [], d = 1; a >= d; d++) {
                    var u = 360 / a * d * Math.PI / 180;
                    o.push({
                        x: f.x + r / 2 * Math.cos(u),
                        y: f.y + r / 2 * Math.sin(u)
                    })
                }
                if (e.push(o), r += 2 * t, n > 100) break;
                n++
            }
            return e
        }

        function u(i) {
            for (var t = i.length - 1; t > 0; t--) {
                var e = Math.floor(Math.random() * (t + 1)),
                    r = [i[e], i[t]];
                i[t] = r[0], i[e] = r[1]
            }
            return i
        }
        var l = e(57),
            s = r(l),
            c = window,
            h = c.vkImage,
            g = !1,
            v = !1,
            w = {
                height: 480,
                width: 720,
                paddingHorizontal: 200,
                paddingBottom: 160,
                scaleFactor: window.devicePixelRatio,
                figureColorsCount: 5
            },
            p = {
                lineBig: {
                    width: 54,
                    height: 106,
                    index: 0,
                    weight: 0,
                    rotatable: !0,
                    duration: 2e3,
                    points: [2, 2]
                },
                lineMedium: {
                    width: 62,
                    height: 50,
                    index: 1,
                    weight: 0,
                    rotatable: !0,
                    duration: 2e3,
                    points: [1, 1]
                },
                line: {
                    width: 20,
                    height: 32,
                    index: 2,
                    weight: 0,
                    rotatable: !0,
                    scalable: !0,
                    duration: 2e3,
                    points: [1]
                },
                dot: {
                    width: 16,
                    height: 16,
                    index: 3,
                    scalable: !0,
                    weight: 0,
                    duration: 2e3,
                    points: [1]
                }
            };
        if (w.scaleFactor > 1)
            for (var X in p) p.hasOwnProperty(X) && (p[X].width *= 2, p[X].height *= 2);
        var Y = {
                first: {
                    delay: 500,
                    duration: 1500,
                    lines: [],
                    items: [{
                        figure: "lineBig",
                        diffX: 177,
                        diffY: 283
                    }, {
                        figure: "line",
                        diffX: 124,
                        diffY: 96
                    }, {
                        figure: "lineMedium",
                        diffX: 299,
                        diffY: 149
                    }, {
                        figure: "line",
                        diffX: 252,
                        diffY: 416
                    }, {
                        figure: "line",
                        diffX: 162,
                        diffY: 394
                    }, {
                        figure: "line",
                        diffX: 69,
                        diffY: 237
                    }, {
                        figure: "line",
                        diffX: 200,
                        diffY: 139
                    }, {
                        figure: "dot",
                        diffX: 321,
                        diffY: 252
                    }, {
                        figure: "dot",
                        diffX: 432,
                        diffY: 252
                    }, {
                        figure: "dot",
                        diffX: 434,
                        diffY: 367
                    }, {
                        figure: "line",
                        diffX: 209,
                        diffY: 68
                    }, {
                        figure: "line",
                        diffX: 346,
                        diffY: 85
                    }, {
                        figure: "line",
                        diffX: 346,
                        diffY: 85
                    }, {
                        figure: "line",
                        diffX: 384,
                        diffY: 162
                    }, {
                        figure: "line",
                        diffX: 368,
                        diffY: 244
                    }, {
                        figure: "line",
                        diffX: 237,
                        diffY: 250
                    }, {
                        figure: "line",
                        diffX: 280,
                        diffY: 303
                    }, {
                        figure: "dot",
                        diffX: 30,
                        diffY: 259
                    }, {
                        figure: "dot",
                        diffX: 106,
                        diffY: 330
                    }, {
                        figure: "dot",
                        diffX: 142,
                        diffY: 197
                    }, {
                        figure: "dot",
                        diffX: 172,
                        diffY: 219
                    }, {
                        figure: "lineMedium",
                        diffX: 59,
                        diffY: 139
                    }, {
                        figure: "dot",
                        diffX: 256,
                        diffY: 173
                    }]
                },
                second: {
                    duration: 2e3,
                    lines: [],
                    items: [{
                        figure: "lineBig",
                        diffX: 177,
                        diffY: 283
                    }, {
                        figure: "line",
                        diffX: 124,
                        diffY: 96
                    }, {
                        figure: "lineMedium",
                        diffX: 299,
                        diffY: 149
                    }, {
                        figure: "line",
                        diffX: 252,
                        diffY: 416
                    }, {
                        figure: "line",
                        diffX: 162,
                        diffY: 394
                    }, {
                        figure: "line",
                        diffX: 69,
                        diffY: 237
                    }, {
                        figure: "line",
                        diffX: 200,
                        diffY: 139
                    }, {
                        figure: "dot",
                        diffX: 321,
                        diffY: 252
                    }, {
                        figure: "dot",
                        diffX: 432,
                        diffY: 252
                    }, {
                        figure: "dot",
                        diffX: 434,
                        diffY: 367
                    }, {
                        figure: "line",
                        diffX: 209,
                        diffY: 68
                    }, {
                        figure: "line",
                        diffX: 346,
                        diffY: 85
                    }, {
                        figure: "line",
                        diffX: 346,
                        diffY: 85
                    }, {
                        figure: "line",
                        diffX: 384,
                        diffY: 162
                    }, {
                        figure: "line",
                        diffX: 368,
                        diffY: 244
                    }, {
                        figure: "line",
                        diffX: 237,
                        diffY: 250
                    }, {
                        figure: "line",
                        diffX: 280,
                        diffY: 303
                    }, {
                        figure: "dot",
                        diffX: 30,
                        diffY: 259
                    }, {
                        figure: "dot",
                        diffX: 106,
                        diffY: 330
                    }, {
                        figure: "dot",
                        diffX: 142,
                        diffY: 197
                    }, {
                        figure: "dot",
                        diffX: 172,
                        diffY: 219
                    }, {
                        figure: "lineMedium",
                        diffX: 59,
                        diffY: 139
                    }, {
                        figure: "dot",
                        diffX: 256,
                        diffY: 173
                    }]
                }
            },
            x = !1,
            y = !1,
            m = !1,
            F = !1,
            M = void 0,
            b = (0, s["default"])(0, .43, .32, .39),
            P = (0, s["default"])(0, 0, 1, 1);
        window.Ny2k18 = {
            init: function() {
                if (!g) {
                    var i = 0;
                    for (var t in p) p.hasOwnProperty(t) && (p[t].top = i, i += p[t].height);
                    g = ce("canvas", {
                        width: (w.width + w.paddingHorizontal) * w.scaleFactor,
                        height: (w.height + w.paddingBottom) * w.scaleFactor
                    }, {
                        width: w.width + w.paddingHorizontal + "px",
                        height: w.height + w.paddingBottom + "px",
                        top: window.innerHeight - w.height - w.paddingBottom + "px",
                        left: (window.innerWidth - w.width - w.paddingHorizontal) / 2 + "px",
                        position: "fixed",
                        zIndex: 1e3,
                        pointerEvents: "none",
                        transform: "translate(0,0,0)"
                    }), v = g.getContext("2d"), bodyNode.appendChild(g)
                }
            },
            destroy: function() {
                cancelAnimationFrame(m), v = !1, re(g), g = !1, y = !1
            },
            startFlapper: function() {
                var i = this;
                if (w.paddingBottom = (window.innerHeight - w.height) / 2, this.init(), cancelAnimationFrame(m), x) return this.start();
                var t = h();
                t.onload = function() {
                    x = t, i.start()
                }, t.src = w.scaleFactor > 1 ? "https://s18.postimg.org/igegk22jd/ny2018_2x.png" : "https://s18.postimg.org/4mq3uzuih/ny2018.png"
            },
            start: function() {
                M = irand(0, w.figureColorsCount - 1), y = clone(Y, !0), this.clear(), this.findSpaceForFigures(), F = vkNow(), this.draw()
            },
            clear: function() {
                for (var i in y) y.hasOwnProperty(i) && (y[i].startTs = 0, y[i].inited = !1)
            },
            findSpaceForFigures: function() {
                for (var i in y)
                    if (y.hasOwnProperty(i)) {
                        var t = d(),
                            e = y[i].items;
                        u(e);
                        for (var r = 0; r < e.length; r++) {
                            var f = e[r],
                                n = p[f.figure],
                                l = a(o(t, p[f.figure]));
                            l ? (f.toX = l.x, f.toY = l.y - n.height - w.paddingBottom * w.scaleFactor - 400) : console.log("cant found")
                        }
                    }
            },
            draw: function() {
                var i = this,
                    t = vkNow(),
                    e = (w.width + w.paddingHorizontal) * w.scaleFactor,
                    r = w.height * w.scaleFactor;
                v.clearRect(0, 0, e, r + w.paddingBottom * w.scaleFactor);
                var a = !0;
                for (var o in y)
                    if (y.hasOwnProperty(o)) {
                        var d = y[o],
                            u = d.delay,
                            l = d.items,
                            s = d.startTs,
                            c = d.duration,
                            h = d.lines,
                            g = d.inited;
                        if (s || (y[o].startTs = s = vkNow()), u) {
                            if (u > t - s) continue;
                            y[o].delay = !1, y[o].startTs = s = vkNow()
                        }
                        for (var X = 0; X < l.length; X++) {
                            var Y = l[X],
                                b = p[Y.figure];
                            g || (M++, M >= w.figureColorsCount && (M = 0), Y.color = M, Y.rotateDir = 1 === irand(0, 1) ? -1 : 1, Y.inScale = .1, Y.scale = 1 - (b.scalable ? Math.min(1, Math.max(.5, irand(50, 100) / 100)) : 1), Y.duration = c + irand(-300, 300), "second" === o ? (Y.x = e + irand(-50, 50) * w.scaleFactor, Y.endX = 50 * w.scaleFactor * b.weight + irand(-50, 300) * w.scaleFactor, Y.toX = Y.toX - b.width) : (Y.x = (-w.paddingHorizontal / 2 - irand(-50, 50)) * w.scaleFactor, Y.endX = e - (50 * w.scaleFactor * b.weight + irand(-50, 300) * w.scaleFactor) - 100 * w.scaleFactor, Y.toX = Y.toX - b.width), Y.y = r, Y.endY = r + w.paddingBottom * w.scaleFactor);
                            var k = Math.min(1, (t - s) / Y.duration),
                                B = n(k);
                            1 > k && (a = !1);
                            var z = Y.color * b.width,
                                C = b.top,
                                H = f(B, Y.x, Y.y, Y.endX, Y.endY, Y.toX, Y.toY);
                            v.save();
                            var I = Y.inScale - Y.scale;
                            if (I > 1) return console.log("scale", I);
                            v.translate(H.x + b.width / 2, H.y + b.height / 2), v.scale(I, I), v.translate(-(H.x + b.width / 2), -(H.y + b.height / 2)), b.rotatable && (v.translate(H.x + b.width / 2, H.y + b.height / 2), v.rotate((t - F) * Y.rotateDir / 3 * Math.PI / 180), v.translate(-(H.x + b.width / 2), -(H.y + b.height / 2))), Y.inScale = 1 * P(Math.min(1, (t - s) / 100)), v.drawImage(x, z, C, b.width, b.height, H.x, H.y, b.width, b.height), v.restore()
                        }
                        y[o].inited = !0;
                        for (var N = 0; 3 > N; N++) {
                            h[N] || (h[N] = {
                                progress: 0,
                                hideProgress: 0
                            });
                            var O = "second" === o,
                                S = P(Math.min(1, (t - s) / (O ? 200 : 150)));
                            if (1 !== S) {
                                v.strokeStyle = "#49acf2", v.lineWidth = 4 * w.scaleFactor, v.beginPath();
                                var T = 0,
                                    A = 0,
                                    _ = 0,
                                    j = 0;
                                switch (N) {
                                    case 1:
                                        T = 40, A = O ? -100 : -40, _ = O ? 5 : 15, j = O ? 0 : 8;
                                        break;
                                    case 0:
                                        T = 50, A = O ? -125 : -65, j = 10;
                                        break;
                                    case 2:
                                        T = 40, A = O ? -150 : -90, _ = O ? -15 : -10, j = O ? 8 : 2
                                }
                                var D = T * S;
                                D *= w.scaleFactor, A = A * Math.PI / 180;
                                var E = void 0;
                                E = "second" === o ? e - 100 * w.scaleFactor : 100 * w.scaleFactor;
                                var R = r;
                                E += _ * w.scaleFactor, R += j * w.scaleFactor;
                                var W = E + D * Math.cos(A),
                                    q = R + D * Math.sin(A);
                                v.moveTo(E, R), v.lineTo(W, q), v.stroke(), h[N].progress = S
                            }
                        }
                    }
                return a ? this.destroy() : void(m = requestAnimationFrame(function() {
                    return i.draw()
                }))
            }
        };
        try {
            stManager.done("ny2k18.js")
        } catch (k) {}
    }
});
