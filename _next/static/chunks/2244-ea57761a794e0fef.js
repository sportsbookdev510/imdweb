"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2244],
  {
    90249: function (t, e, l) {
      l.d(e, {
        CW: function () {
          return h;
        },
        HF: function () {
          return c;
        },
        Ky: function () {
          return a;
        },
        Pu: function () {
          return k;
        },
        Vr: function () {
          return s;
        },
        Yh: function () {
          return i;
        },
        d6: function () {
          return d;
        },
        fp: function () {
          return u;
        },
        jF: function () {
          return x;
        },
        qv: function () {
          return n;
        },
        t0: function () {
          return b;
        },
        uv: function () {
          return m;
        },
        vo: function () {
          return o;
        },
      });
      let a = ["mixer", "console", "rack", "station", "synth", "patch", "grid"],
        o = 3,
        i = 200,
        h = (t) => (t >= i ? t - i : -1),
        r = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-.!?/+#&'*:",
        n = { kind: null, parts: [], seed: 0, label: "" },
        s = 3,
        M = new Set(["FAG", "FGT", "NIG", "NGR", "NGA", "KKK"]),
        f = {
          0: "O",
          1: "I",
          3: "E",
          4: "A",
          5: "S",
          6: "G",
          7: "T",
          8: "B",
          9: "G",
        };
      function c(t) {
        let e = [...t.toUpperCase()]
          .filter((t) => /[A-Z0-9]/.test(t))
          .join("")
          .slice(0, s);
        return M.has(
          [...e]
            .map((t) => {
              var e;
              return null !== (e = f[t]) && void 0 !== e ? e : t;
            })
            .join("")
        )
          ? ""
          : e;
      }
      let m = (t) => {
          var e;
          return c(
            "string" == typeof t
              ? t
              : null !== (e = null == t ? void 0 : t.label) && void 0 !== e
              ? e
              : ""
          );
        },
        g = (t) =>
          [
            ...new Set(
              t.filter((t) => Number.isInteger(t) && t >= 0 && t < 255)
            ),
          ].slice(0, o),
        u = (t) => !t.kind && !t.parts.length && !t.seed && !t.label;
      function d(t) {
        if (u(t)) return "0x".concat("0".repeat(64));
        let e = BigInt(2) << 248n;
        (e |= BigInt(t.kind ? a.indexOf(t.kind) + 1 : 0) << 240n),
          g(t.parts).forEach((t, l) => {
            e |= BigInt(t + 1) << BigInt(232 - 8 * l);
          }),
          (e |= BigInt(t.seed >>> 0) << 184n);
        let l = [...t.label.toUpperCase()]
          .filter((t) => r.includes(t))
          .join("")
          .replace(/^ +/, "")
          .slice(0, 12)
          .replace(/ +$/, "");
        for (let t = 0; t < l.length; t++)
          e |= BigInt(r.indexOf(l[t]) + 1) << BigInt(184 - 6 * (t + 1));
        return (
          t.lot && (e |= BigInt(65535 & t.lot) << 96n),
          "0x".concat(e.toString(16).padStart(64, "0"))
        );
      }
      function k(t) {
        if (!t || !/^0x[0-9a-fA-F]{64}$/.test(t)) return null;
        let e = BigInt(t);
        if (0n === e || 2 !== Number(e >> 248n)) return null;
        let l = (t) => Number((e >> BigInt(248 - 8 * t)) & 255n),
          o = l(1),
          i = "";
        for (let t = 0; t < 12; t++) {
          let l = Number((e >> BigInt(184 - 6 * (t + 1))) & 63n);
          if (!l || l > r.length) break;
          i += r[l - 1];
        }
        return {
          kind: o >= 1 && o <= a.length ? a[o - 1] : null,
          parts: g([l(2), l(3), l(4)].filter(Boolean).map((t) => t - 1)),
          seed: Number((e >> 184n) & 4294967295n),
          label: i.trimEnd(),
          lot: Number((e >> 96n) & 65535n) || null,
        };
      }
      function x(t) {
        let e = new Date(t),
          l = new Date(
            Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate())
          );
        l.setUTCDate(l.getUTCDate() + 4 - (l.getUTCDay() || 7));
        let a = Math.ceil(
          ((l.getTime() - Date.UTC(l.getUTCFullYear(), 0, 1)) / 864e5 + 1) / 7
        );
        return (l.getUTCFullYear() % 100) * 100 + a;
      }
      let b = (t, e) =>
        (null == t ? void 0 : t.seed) ? 4096 + (t.seed % 1048573) : e;
    },
    35848: function (t, e, l) {
      l.d(e, {
        cV: function () {
          return n;
        },
        xC: function () {
          return function t(e, l, n, f, c, m, g, u, d, k, x) {
            var b;
            let S;
            let p =
                arguments.length > 11 && void 0 !== arguments[11]
                  ? arguments[11]
                  : 0,
              y =
                arguments.length > 12 && void 0 !== arguments[12]
                  ? arguments[12]
                  : new Set(),
              T =
                arguments.length > 13 && void 0 !== arguments[13]
                  ? arguments[13]
                  : new Set(),
              P = arguments.length > 14 ? arguments[14] : void 0,
              v = arguments.length > 15 ? arguments[15] : void 0,
              { ctx: A, cell: W } = e,
              R = e.P,
              C = Math.max(3, 0.18 * W),
              I = n + C,
              w = f + C,
              Q = c - 2 * C,
              j = m - 2 * C,
              N = c / m,
              U = W / 20;
            if (!x && p < 2 && (Q * j) / (W * W) >= 20) {
              let o = N >= 1.3 || (N > 0.75 && 0.5 > l()),
                i = o ? c : m,
                h = Math.round(i * (0.38 + 0.24 * l())),
                r = i - h;
              if (Math.min(h, r) - 2 * C >= 2.5 * W) {
                let l = 7 * k + 11,
                  i = 7 * k + 29;
                o
                  ? (t(
                      e,
                      (0, a.Vk)(l),
                      n,
                      f,
                      h,
                      m,
                      g,
                      u,
                      d,
                      l,
                      void 0,
                      p + 1,
                      y,
                      T,
                      P,
                      v
                    ),
                    t(
                      e,
                      (0, a.Vk)(i),
                      n + h - C,
                      f,
                      r + C,
                      m,
                      g,
                      u + 700,
                      d,
                      i,
                      void 0,
                      p + 1,
                      y,
                      T,
                      P,
                      v
                    ))
                  : (t(
                      e,
                      (0, a.Vk)(l),
                      n,
                      f,
                      c,
                      h,
                      g,
                      u,
                      d,
                      l,
                      void 0,
                      p + 1,
                      y,
                      T,
                      P,
                      v
                    ),
                    t(
                      e,
                      (0, a.Vk)(i),
                      n,
                      f + h - C,
                      c,
                      r + C,
                      g,
                      u + 700,
                      d,
                      i,
                      void 0,
                      p + 1,
                      y,
                      T,
                      P,
                      v
                    ));
                return;
              }
            }
            let E = function (t, h, r, n, s, M) {
              let f =
                  !(arguments.length > 6) ||
                  void 0 === arguments[6] ||
                  arguments[6],
                c = (0, o.Q8)(t, s, M, W),
                m = c.filter((t) => !y.has(t)),
                x = (0, o.G_)(l, m.length ? m : c);
              if ((y.add(x), v && f)) {
                v.slots.push([s / W, M / W]);
                let t = 2 + 2 * Math.max(0, C - 0.18 * W),
                  e = v.queue.findIndex(
                    (e) => 0 > (0, i.CW)(e) && (0, o.ib)(e, s + t, M + t, W)
                  );
                e >= 0 && ((x = v.queue.splice(e, 1)[0]), v.placed.push(x));
              }
              (0, o.HQ)(
                e,
                x,
                (0, a.Vk)(31 * k + 7 * h + 1),
                r,
                n,
                s,
                M,
                g,
                u + 500 * h,
                d
              );
            };
            if (!x && (j < 1.2 * W || Q < 1.2 * W)) {
              E(s, 1, I, w, Q, j);
              return;
            }
            let V = Math.min(0.28 * j, 1.2 * W),
              L = (0, o.Es)(17, Q, j - V - C, W),
              q =
                null != x
                  ? x
                  : P && ("patch" !== P || L)
                  ? P
                  : (S = ((t) => {
                      let e = L ? t : t.filter((t) => "patch" !== t),
                        l = e.filter((t) => !T.has(t));
                      return l.length ? l : e;
                    })(
                      N >= 2.2
                        ? ["mixer", "console", "patch", "grid"]
                        : N <= 0.6
                        ? ["rack", "rack", "grid"]
                        : ["console", "station", "synth", "patch", "grid"]
                    ))[Math.floor(l() * S.length)];
            if (
              (T.add(q),
              null == v || v.kinds.push(q),
              null === (b = r.device) || void 0 === b || b.call(r, q, c, m),
              "mixer" === q)
            ) {
              let t = Math.min(0.3 * Q, 2.6 * W),
                e = Math.max(
                  3,
                  Math.min(14, Math.round((Q - t - C) / (0.9 * W)))
                ),
                l = (Q - t - C) / e;
              for (let t = 0; t < e; t++) {
                let e = I + l * t;
                E([0], t, e, w, l, 0.24 * j, !1),
                  E([12], t + 20, e, w + 0.24 * j, l, 0.26 * j, !1),
                  E([1], t + 40, e, w + 0.5 * j, l, 0.5 * j, !1);
              }
              let a = I + Q - t;
              E([2, 8, 9, 4, 32, 18, 40, 52], 60, a, w, t, 0.5 * j),
                E([7, 25, 28, 30, 36, 41, 20], 61, a, w + 0.5 * j, t, 0.5 * j);
            } else if ("console" === q) {
              let t = Math.min(0.14 * j, 6 * U),
                e = j - t,
                a = Math.min(0.24 * e, 1.1 * W),
                o = 0.56 * Q;
              (A.fillStyle = R.stroke),
                A.fillRect(
                  I + U,
                  w + 0.35 * t,
                  Q * (0.18 + 0.2 * l()),
                  Math.max(1, 0.22 * t)
                );
              let i = Math.max(1, 0.9 * U),
                r = 4 * i;
              (A.strokeStyle = R.stroke), (A.lineWidth = Math.max(1, 0.5 * U));
              for (let e = 0; e < 4; e++)
                A.beginPath(),
                  A.arc(I + Q - i - U - e * r, w + 0.45 * t, i, 0, 2 * Math.PI),
                  e === (g ? (0, h.Qj)(u, 400, 4) : 1) ? A.fill() : A.stroke();
              let n = w + t + 0.5 * C,
                s = e - a - C,
                M = Q - o - C >= 1.4 * W;
              if (
                (E(
                  [3, 8, 19, 31, 29, 9, 4, 10, 45, 48, 51, 42, 18, 47, 16, 49],
                  1,
                  I,
                  n,
                  M ? o : Q,
                  s
                ),
                M)
              ) {
                let t = I + o + C,
                  e = Q - o - C;
                E([0, 7, 25, 28, 36, 43, 41, 27, 20], 2, t, n, e, 0.45 * s),
                  E([1, 12, 20, 27, 53, 17], 3, t, n + 0.45 * s, e, 0.55 * s);
              }
              E(
                [5, 14, 13, 22, 23, 33, 34, 54, 56, 38, 12, 39, 21, 37],
                4,
                I,
                n + s + C,
                Q,
                a
              );
            } else if ("rack" === q) {
              let t = Math.max(3, Math.min(7, Math.round(j / (1.3 * W)))),
                e = Math.max(1, Math.round(1.5 * U)),
                l = (j - e * (t - 1)) / t,
                a = (0, o.Q8)(s, Q, l, W);
              for (let o = 0; o < t; o++) E(a, o, I, w + (l + e) * o, Q, l);
            } else if ("station" === q) {
              let t = 0.62 * j;
              E([8, 3, 19, 29, 31, 16, 17, 4, 10, 49, 47], 1, I, w, Q, t);
              let e = 0.4 * Q >= 1.4 * W,
                l = (Q - C) * 0.6;
              E(
                [0, 7, 28, 25, 16, 27, 20, 36, 41],
                2,
                I,
                w + t + C,
                e ? l : Q,
                j - t - C
              ),
                e &&
                  E(
                    [5, 13, 14, 53, 39, 12, 34],
                    3,
                    I + l + C,
                    w + t + C,
                    Q - l - C,
                    j - t - C
                  );
            } else if ("patch" === q)
              E([17], 1, I, w, Q, j - V - C, !1),
                E([0, 5, 13, 22, 12, 34, 39], 2, I, w + j - V, Q, V);
            else if ("grid" === q) {
              let t = Math.max(1, Math.min(4, Math.round(Q / (2.2 * W)))),
                e = Math.max(1, Math.min(4, Math.round(j / (2.2 * W)))),
                l = (Q - C * (t - 1)) / t,
                a = (j - C * (e - 1)) / e;
              for (let o = 0; o < e; o++)
                for (let e = 0; e < t; e++)
                  E(M, o * t + e + 1, I + (l + C) * e, w + (a + C) * o, l, a);
            } else {
              let t = Math.max(0.8 * W, 0.32 * j),
                e = j - t - C,
                l = 0.36 * Q >= 1.4 * W,
                a = (Q - C) * 0.63;
              E([0, 7, 28, 25, 4, 36, 41, 20], 1, I, w, l ? a : Q, e),
                l &&
                  E(
                    [18, 9, 3, 29, 21, 8, 32, 40, 54, 42],
                    2,
                    I + a + C,
                    w,
                    Q - a - C,
                    e
                  ),
                E([1, 10, 33, 50, 56, 14, 22], 3, I, w + e + C, Q, t);
            }
          };
        },
      });
      var a = l(35012),
        o = l(52602),
        i = l(90249),
        h = l(42272);
      let r = {},
        n = ["mixer", "console", "rack", "station", "synth", "patch", "grid"],
        s = [
          3, 1, 0, 23, 13, 31, 22, 12, 5, 17, 10, 21, 16, 4, 9, 14, 18, 8, 29,
          32, 34, 40, 42, 37, 39, 47, 50, 54, 56, 38, 33,
        ],
        M = [
          45, 37, 49, 32, 23, 50, 38, 56, 40, 48, 47, 42, 31, 29, 21, 2, 16, 54,
          33, 34, 39, 22, 14, 9, 18, 10, 4, 52, 51, 53, 43, 44, 46, 36, 41, 19,
          3, 8,
        ];
      (0, o.vg)([
        s,
        M,
        [2, 8, 9, 4, 32, 18, 40, 52],
        [7, 25, 28, 30, 36, 41, 20],
        [3, 8, 19, 31, 29, 9, 4, 10, 45, 48, 51, 42, 18, 47, 16, 49],
        [0, 7, 25, 28, 36, 43, 41, 27, 20],
        [1, 12, 20, 27, 53, 17],
        [5, 14, 13, 22, 23, 33, 34, 54, 56, 38, 12, 39, 21, 37],
        [8, 3, 19, 29, 31, 16, 17, 4, 10, 49, 47],
        [0, 7, 28, 25, 16, 27, 20, 36, 41],
        [5, 13, 14, 53, 39, 12, 34],
        [0, 5, 13, 22, 12, 34, 39],
        [0, 7, 28, 25, 4, 36, 41, 20],
        [18, 9, 3, 29, 21, 8, 32, 40, 54, 42],
        [1, 10, 33, 50, 56, 14, 22],
      ]);
    },
    52602: function (t, e, l) {
      l.d(e, {
        Es: function () {
          return w;
        },
        G_: function () {
          return U;
        },
        HQ: function () {
          return function t(e, l, i, c, b, S, p, y, T, P) {
            var v;
            let A =
              arguments.length > 10 &&
              void 0 !== arguments[10] &&
              arguments[10];
            A || null === (v = q.drawn) || void 0 === v || v.call(q, l, S, p);
            let { ctx: W, cell: R } = e,
              C = e.P,
              I = c,
              Q = b,
              j = c + S,
              N = b + p,
              U = W.getTransform().a || 1,
              E = Math.round(S),
              V = Math.round(p);
            if (
              ((c = Math.round((c + (S - E) / 2) * U) / U),
              (b = Math.round((b + (p - V) / 2) * U) / U),
              (S = E),
              (p = V),
              !(S >= 2 && p >= 2))
            )
              return;
            let L = S / p;
            if (
              !A &&
              ((n.has(l) && (L > 2 || L < 0.5)) || (1 === l && L > 2.5))
            ) {
              let o = L > 2 ? S : p,
                h = Math.max(2, Math.min(8, Math.round(o / (L > 2 ? p : S)))),
                r = Math.floor(1e6 * i()),
                n = o / h;
              for (let o = 0; o < h; o++) {
                let i = Math.round(n * o),
                  h = Math.round(n * (o + 1));
                L > 2
                  ? t(
                      e,
                      l,
                      (0, a.Vk)(r + o),
                      c + i,
                      b,
                      h - i,
                      p,
                      y,
                      T + 300 * o,
                      P,
                      !0
                    )
                  : t(
                      e,
                      l,
                      (0, a.Vk)(r + o),
                      c,
                      b + i,
                      S,
                      h - i,
                      y,
                      T + 300 * o,
                      P,
                      !0
                    );
              }
              return;
            }
            if (
              !A &&
              ((h.has(l) && p > 1.6 * S) || (r.has(l) && S > 1.6 * p))
            ) {
              W.save(),
                W.translate(c, b + p),
                W.rotate(-Math.PI / 2),
                t(e, l, i, 0, 0, p, S, y, T, P, !0),
                W.restore();
              return;
            }
            let D = Math.max(
                1,
                Math.min(3, Math.round((Math.min(S, p) / 22) * 2) / 2)
              ),
              B = W.getTransform(),
              K = Math.hypot(B.a, B.b) || 1,
              O = function () {
                let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : W.lineWidth;
                return Math.round(t * K) % 2 ? 0.5 / K : 0;
              },
              Y = (t, e, l, a) => {
                let o = W.lineWidth;
                W.strokeRect(t + o / 2, e + o / 2, l - o, a - o);
              },
              G = Math.max(R / 20, Math.min(S, p) / 22);
            if (S < 6 * G || p < 6 * G) return;
            let F = (t) => (t < 1.15 * R ? 0 : t < 2.3 * R ? 1 : 2),
              H = F(Math.min(S, p)),
              J = F(S),
              Z = F(p),
              _ = (t) => (e) =>
                2 === t ? e : 1 === t ? Math.max(2, Math.ceil(e / 2)) : 1,
              X = _(J),
              $ = _(Z);
            (W.fillStyle = C.stroke),
              (W.strokeStyle = C.stroke),
              (W.lineWidth = D);
            let z = 0,
              tt = (t, e, l, a) => {
                (W.fillStyle = C.screen),
                  W.fillRect(t, e, l, a),
                  l > 8 &&
                    a > 8 &&
                    ((W.strokeStyle = C.glass),
                    (W.globalAlpha = 0.22),
                    (W.lineWidth = 1),
                    W.strokeRect(t + 1.5, e + 1.5, l - 3, a - 3),
                    (W.globalAlpha = 1),
                    (W.lineWidth = D)),
                  (W.fillStyle = C.stroke),
                  (W.strokeStyle = C.stroke);
                let o = l > 8 && a > 8 ? 2 : 1;
                W.save(),
                  W.beginPath(),
                  W.rect(t + o, e + o, l - 2 * o, a - 2 * o),
                  W.clip(),
                  z++;
              },
              te = (t, e, l) => {
                l < 4 ||
                  ((W.strokeStyle = C.stroke),
                  (W.globalAlpha = 0.35),
                  (W.lineWidth = 1.6 * D),
                  W.beginPath(),
                  W.arc(t, e, l - 0.9 * D, 0.1 * Math.PI, 0.65 * Math.PI),
                  W.stroke(),
                  (W.globalAlpha = 1),
                  (W.lineWidth = D));
              },
              tl = (t) => t[Math.floor(i() * t.length)],
              ta = (t, e, l, a, h, r, n) => {
                let s = h - a,
                  M = s >= o.gc - 0.01,
                  f = l >= 12;
                W.save(),
                  W.beginPath(),
                  M
                    ? W.arc(t, e, l, 0, o.gc)
                    : (W.moveTo(t, e), W.arc(t, e, l, a, h), W.closePath()),
                  W.clip(),
                  (W.strokeStyle = C.glass),
                  (W.lineWidth = 1);
                let c = f ? 4 : l >= 6 ? 2 : 1;
                W.globalAlpha = 0.3;
                for (let o = 1; o <= c; o++)
                  W.beginPath(), W.arc(t, e, (l * o) / c, a, h), W.stroke();
                if (f) {
                  W.globalAlpha = 0.18;
                  for (let o = a; o <= h + 0.001; o += Math.PI / 6)
                    W.beginPath(),
                      W.moveTo(t, e),
                      W.lineTo(t + Math.cos(o) * l, e + Math.sin(o) * l),
                      W.stroke();
                  W.globalAlpha = 0.5;
                  for (let o = a; o <= h + 0.001; o += Math.PI / 18)
                    W.beginPath(),
                      W.moveTo(
                        t + Math.cos(o) * l * 0.94,
                        e + Math.sin(o) * l * 0.94
                      ),
                      W.lineTo(t + Math.cos(o) * l, e + Math.sin(o) * l),
                      W.stroke();
                }
                if (l >= 6) {
                  let a = f ? 18 : 8,
                    o = Math.min(s, 0.7);
                  W.fillStyle = C.glass;
                  for (let i = 0; i < a; i++) {
                    let h = r - (o * (i + 1)) / a,
                      n = r - (o * i) / a;
                    (W.globalAlpha = 0.28 * (1 - i / a) ** 1.6),
                      W.beginPath(),
                      W.moveTo(t, e),
                      W.arc(t, e, l, h, n),
                      W.closePath(),
                      W.fill();
                  }
                }
                (W.globalAlpha = 1),
                  (W.lineWidth = D),
                  W.beginPath(),
                  W.moveTo(t, e),
                  W.lineTo(t + Math.cos(r) * l, e + Math.sin(r) * l),
                  W.stroke();
                for (let h = 0; h < n; h++) {
                  let h = a + i() * s,
                    n = l * (0.25 + 0.65 * i()),
                    c = Math.max(1.5, 0.07 * l),
                    m = r - h;
                  M ? (m = ((m % o.gc) + o.gc) % o.gc) : m < 0 && (m += s);
                  let g = Math.max(0.2, 1 - m / (M ? o.gc : s)),
                    u = t + Math.cos(h) * n,
                    d = e + Math.sin(h) * n;
                  (W.fillStyle = C.glass),
                    f &&
                      ((W.globalAlpha = 0.3 * g),
                      W.beginPath(),
                      W.arc(u, d, 1.8 * c, 0, o.gc),
                      W.fill()),
                    (W.globalAlpha = g),
                    W.fillRect(u - c / 2, d - c / 2, c, c);
                }
                W.restore(),
                  (W.globalAlpha = 1),
                  (W.lineWidth = D),
                  (W.fillStyle = C.stroke),
                  (W.strokeStyle = C.stroke);
              },
              to = e.lit > 0,
              ti = to ? C.glass : C.stroke,
              th = to && e.lamps > 0 && !f.has(l);
            to && f.has(l) && (e.lamps = 0);
            let tr = to ? Math.max(1, Math.round(0.6 * G)) : 0,
              tn = function (t, e, l, a) {
                let o =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : ti;
                tr &&
                  o !== C.stroke &&
                  ((W.fillStyle = C.screen),
                  W.fillRect(t - tr, e - tr, l + 2 * tr, a + 2 * tr)),
                  (W.fillStyle = o),
                  W.fillRect(t, e, l, a),
                  (W.fillStyle = C.stroke);
              },
              ts = function (t, e, l) {
                let a =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : ti;
                tr &&
                  a !== C.stroke &&
                  ((W.fillStyle = C.screen),
                  W.beginPath(),
                  W.arc(t, e, l + tr, 0, o.gc),
                  W.fill()),
                  (W.fillStyle = a),
                  W.beginPath(),
                  W.arc(t, e, l, 0, o.gc),
                  W.fill(),
                  (W.fillStyle = C.stroke);
              },
              tM = b,
              tf = M.has(l) && H >= 1 ? 2.5 * G : 0;
            (b += tf), (p -= tf);
            let tc = i(),
              tm = 0.2 + 0.3 * i(),
              tg = 2 === e.lit && 0 === (0, o.Qj)(T, 450, 2),
              tu = th ? (tg ? C.face : C.glass) : C.stroke,
              td = 0;
            if (H >= 1 && !A && !s.has(l) && !M.has(l)) {
              if (tc < 0.12 && S > 24 * G && G >= 2.5 && 0 === e.lit) {
                W.save(),
                  W.beginPath(),
                  W.rect(c + 2 * G, b + 1 * G, S - 4 * G, 1.6 * G),
                  W.clip(),
                  (W.strokeStyle = C.stroke);
                for (let t = c - 4 * G; t < c + S; t += 3 * G)
                  W.beginPath(),
                    W.moveTo(t, b + 3 * G),
                    W.lineTo(t + 3 * G, b),
                    W.stroke();
                W.restore(), (td = 2.2 * G);
              } else if (tc < 0.5) {
                let t = (t) => Math.round(t * K) / K;
                tn(
                  t(c + 2 * G),
                  t(b + 1.2 * G),
                  t(S * tm),
                  Math.max(1, t(0.8 * G)),
                  tu
                ),
                  th && (e.lamps = 0),
                  (td = 2 * G);
              }
            }
            if (
              ((b += td),
              (p -= td),
              (W.fillStyle = C.stroke),
              (W.strokeStyle = C.stroke),
              (W.lineWidth = D),
              0 === l)
            ) {
              let t = Math.max(
                  J ? 2 : 1,
                  Math.min(X(8), Math.round(S / (10 * G)))
                ),
                l = 2 === H && p > 1.7 * R && S / t > 22,
                a = m.filter((t) => [...t.slice(0, 3)].every((t) => u.has(t))),
                h = Math.max(1.5, Math.min(3.2 * G, 0.3 * p)),
                r = S / t / 2 - 0.6 * G,
                n = 2 === H && Math.min(h, r / 1.5) > 7,
                s = n ? 1.5 : 1,
                M = Math.max(1.5, Math.min(h, r / s)),
                f = l ? Math.max(1, Math.floor(M / 9)) : 0,
                g = 0.35 * M,
                d = (t) => t * Math.max(1, 0.71 * s),
                k = (t) => t * s + d(t) + (l ? g + 5 * f : 0);
              k(M) > p - 2 * G && (M = Math.max(1.5, (M * (p - 2 * G)) / k(M)));
              let x = b + (p - k(M)) / 2 + M * s,
                P = (t) => Math.round(t * K) / K;
              for (let h = 0; h < t; h++) {
                let r = c + (S * (h + 0.5)) / t;
                W.beginPath(), W.arc(r, x, M, 0, o.gc), W.stroke(), te(r, x, M);
                let s =
                  6.28 * i() +
                  (y ? 0.9 * Math.sin((0, o.tC)(T, 400 * o.gc) + h) : 0);
                if (
                  ((W.strokeStyle = ti),
                  W.beginPath(),
                  W.moveTo(r, x),
                  W.lineTo(r + Math.cos(s) * M, x + Math.sin(s) * M),
                  W.stroke(),
                  (W.strokeStyle = C.stroke),
                  n)
                ) {
                  (W.globalAlpha = 0.7), (W.lineWidth = Math.max(1, 0.5 * D));
                  for (let t = 0; t <= 6; t++) {
                    let e = Math.PI * (0.75 + (1.5 * t) / 6);
                    W.beginPath(),
                      W.moveTo(
                        r + Math.cos(e) * M * 1.25,
                        x + Math.sin(e) * M * 1.25
                      ),
                      W.lineTo(
                        r + Math.cos(e) * M * (t % 3 ? 1.38 : 1.5),
                        x + Math.sin(e) * M * (t % 3 ? 1.38 : 1.5)
                      ),
                      W.stroke();
                  }
                  (W.globalAlpha = 1), (W.lineWidth = D);
                }
                if (l) {
                  let t = tl(a).slice(0, 3);
                  e.pix(t, P(r - e.pixW(t, f) / 2), P(x + d(M) + g), f, ti),
                    (W.fillStyle = C.stroke);
                }
              }
            } else if (1 === l) {
              let t = Math.max(
                  J ? 3 : 1,
                  Math.min(X(12), Math.round(S / (6 * G)))
                ),
                e = Math.max(1, Math.round(D * K)),
                l = (t) => {
                  let l = Math.max(1, Math.round(t * K));
                  return (l - e) % 2 && l++, l / K;
                },
                a = (t) => Math.round(t * K) / K,
                h = 2 === H && S / t > 14 && p > 2.5 * R;
              for (let e = 0; e < t; e++) {
                let r = a(c + (S * (e + 0.5)) / t) + O();
                if (
                  (W.beginPath(),
                  W.moveTo(r, b + 3 * G),
                  W.lineTo(r, b + p - 3 * G),
                  W.stroke(),
                  h && e < t - 1)
                ) {
                  (W.globalAlpha = 0.5), (W.lineWidth = 1);
                  let l = a(c + (S * (e + 1)) / t);
                  for (let t = 0; t <= 6; t++) {
                    let e = a(b + 3 * G + ((p - 6 * G) * t) / 6) + O(),
                      o = G * (t % 3 ? 0.5 : 0.9);
                    W.beginPath(),
                      W.moveTo(l - o, e),
                      W.lineTo(l + o, e),
                      W.stroke();
                  }
                  (W.globalAlpha = 1), (W.lineWidth = D);
                }
                let n = a(
                    b +
                      3 * G +
                      (y
                        ? 0.5 +
                          0.5 * Math.sin((0, o.tC)(T, 350 * o.gc) + 1.3 * e)
                        : i()) *
                        (p - 8 * G)
                  ),
                  s = l(
                    to ? Math.max(1, 1.4 * G - 2 * tr) : Math.max(2, 1.4 * G)
                  ),
                  M = l(3.2 * G),
                  f = a(2 * G);
                tn(r - s / 2, n + f, s, a(b + p - 3 * G) - n - f),
                  W.fillRect(r - M / 2, n, M, f),
                  H >= 1 &&
                    ((W.globalAlpha = 0.35),
                    W.fillRect(r - M / 2, n + f, M, Math.max(1, a(0.6 * G))),
                    (W.globalAlpha = 1));
              }
            } else if (2 === l) {
              let t = S / p > 0.8 && S / p < 1.25,
                e = t ? Math.max(2, Math.round(2.5 * G)) : 2 * G,
                l = t ? e : 3 * G,
                [a, h, r, n] = t && !td ? [I, Q, j, N] : [c, b, c + S, b + p],
                s = (t) => Math.round(t * K) / K,
                M = s(a + e),
                f = s(h + l),
                m = s(r - e) - M,
                g = s(n - l) - f;
              tt(M, f, m, g);
              let u = M + m / 2,
                d = f + g,
                k = Math.min(0.46 * m, 0.82 * g, 0.42 * Math.min(S, p));
              (W.strokeStyle = C.glass),
                W.beginPath(),
                W.arc(u, d, k, 1.15 * Math.PI, 1.85 * Math.PI),
                W.stroke();
              let x =
                Math.PI *
                (1.15 +
                  0.7 *
                    (y
                      ? 0.5 + 0.45 * Math.sin((0, o.tC)(T, 260 * o.gc) + c)
                      : i()));
              (W.strokeStyle = C.glass),
                W.beginPath(),
                W.moveTo(u, d),
                W.lineTo(u + Math.cos(x) * k * 0.9, d + Math.sin(x) * k * 0.9),
                W.stroke();
            } else if (3 === l) {
              let t = S / p > 0.8 && S / p < 1.25,
                e = t ? Math.max(2, Math.round(2.5 * G)) : 0,
                l = t ? c + e : c + 2 * G,
                h = t ? b + e : b + 3 * G,
                r = t ? S - 2 * e : S - 4 * G,
                n = t ? p - 2 * e : p - 6 * G;
              tt(l, h, r, n),
                W.save(),
                W.beginPath(),
                W.rect(l + 2, h + 2, r - 4, n - 4),
                W.clip();
              let s = Math.min(r, n) >= 24;
              (W.strokeStyle = C.glass), (W.lineWidth = 1);
              let M = Math.round(h + n / 2) + O(),
                f = Math.round(l + r / 2) + O();
              if (s) {
                let t = r / 8,
                  e = n / Math.max(4, Math.round((8 * n) / r));
                W.globalAlpha = 0.16;
                for (let e = 1; e < 8; e++) {
                  let a = Math.round(l + t * e) + O();
                  W.beginPath(), W.moveTo(a, h), W.lineTo(a, h + n), W.stroke();
                }
                for (let t = h + e; t < h + n - 1; t += e) {
                  let e = Math.round(t) + O();
                  W.beginPath(), W.moveTo(l, e), W.lineTo(l + r, e), W.stroke();
                }
                (W.globalAlpha = 0.45),
                  W.beginPath(),
                  W.moveTo(l, M),
                  W.lineTo(l + r, M),
                  W.moveTo(f, h),
                  W.lineTo(f, h + n),
                  W.stroke();
                let a = Math.max(1.5, 0.8 * G),
                  o = t / 5 >= 3;
                for (let e = 1; e < 40; e++) {
                  if (e % 5 && !o) continue;
                  let i = Math.round(l + (t * e) / 5) + O(),
                    h = e % 5 ? a : 2 * a;
                  W.beginPath(),
                    W.moveTo(i, M - h),
                    W.lineTo(i, M + h),
                    W.stroke();
                }
              } else
                (W.globalAlpha = 0.3),
                  W.beginPath(),
                  W.moveTo(l, M),
                  W.lineTo(l + r, M),
                  W.stroke();
              W.globalAlpha = 1;
              let m = 1 + Math.floor(3 * i()),
                g = m * (2 + Math.floor(2 * i())),
                u = 0.15 + 0.3 * i(),
                d = m * (3 + Math.floor(3 * i())),
                k = 0.15 * i(),
                x = i() * o.gc,
                P = i(),
                v = y ? (0, o.Ky)(T, 2300) : 0,
                A = v ? (0, a.Vk)(7 * v + c)() : 0,
                R = y ? 0.35 * Math.sin((0, o.tC)(T, 1700 * o.gc)) : 0,
                I =
                  0.34 *
                  n *
                  (y
                    ? 0.85 +
                      0.15 * Math.sin((0, o.tC)(T, 830 * o.gc)) +
                      0.06 * Math.sin((0, o.tC)(T, 190 * o.gc))
                    : 1),
                w = h + n / 2,
                Q = x + (y ? (0, o.tC)(T, 900 * o.gc) + R + A * o.gc : 0),
                j = (t) => {
                  let e = t * o.gc * m + Q;
                  if (P < 0.2) return 0.85 * Math.sign(Math.sin(e));
                  if (P < 0.35)
                    return (((((e / o.gc) % 1) + 1) % 1) * 2 - 1) * 0.9;
                  if (P < 0.5) {
                    let t = (((e / o.gc) % 1) + 1) % 1,
                      l = (e, l, a) =>
                        a * Math.exp(-((t - e) * (t - e)) / (l * l));
                    return (
                      l(0.2, 0.05, 0.18) -
                      l(0.4, 0.012, 0.35) +
                      l(0.44, 0.014, 1.25) -
                      l(0.48, 0.014, 0.45) +
                      l(0.66, 0.06, 0.28) -
                      0.25
                    );
                  }
                  return (
                    Math.sin(e) +
                    u * Math.sin((g / m) * e + 1) +
                    k * Math.sin((d / m) * e)
                  );
                },
                N = Math.max(12, Math.round(r / (s ? 1 : 2))),
                U = P < 0.35,
                E = () => {
                  W.beginPath();
                  let t = !0,
                    e = (e) => {
                      let a = l + r * e,
                        o = w - I * Math.max(-1.3, Math.min(1.3, j(e)));
                      t ? (W.moveTo(a, o), (t = !1)) : W.lineTo(a, o);
                    };
                  for (let t = 0; t <= N; t++) {
                    let l = t / N;
                    if (U && t) {
                      let a = ((t - 1) / N) * m + Q / o.gc,
                        i = l * m + Q / o.gc,
                        h = P < 0.2 ? 0.5 : 1;
                      if (Math.floor(a / h) !== Math.floor(i / h)) {
                        let t = (Math.floor(i / h) * h - Q / o.gc) / m;
                        e(t - 1e-4), e(t + 1e-4);
                      }
                    }
                    e(l);
                  }
                };
              (W.lineJoin = "round"),
                (W.lineCap = "round"),
                s &&
                  ((W.strokeStyle = C.glass),
                  (W.globalAlpha = 0.18),
                  (W.lineWidth = 3 * D),
                  E(),
                  W.stroke()),
                (W.globalAlpha = 1),
                (W.lineWidth = Math.max(1, 0.9 * D)),
                (W.strokeStyle = C.glass),
                E(),
                W.stroke(),
                W.restore(),
                (W.lineWidth = D);
            } else if (4 === l) {
              if (!A && S < 1.75 * R && p < 1.75 * R && !w(l, S, p, R)) {
                let t = Math.min(S, p),
                  e = c + S / 2,
                  l = b + p / 2,
                  a = 0.27 * t,
                  h = Math.max(0.8, 0.075 * t);
                W.lineWidth = Math.max(1, 0.8 * D);
                for (let t = -1; t <= 1; t++)
                  for (let r = -1; r <= 1; r++) {
                    let n = e + r * a,
                      s = l + t * a,
                      M = y && r + 1 + (t + 1) * 3 === (0, o.Qj)(T, 260, 9);
                    0.4 > i() !== M
                      ? ts(n, s, h)
                      : ((W.strokeStyle = C.stroke),
                        W.beginPath(),
                        W.arc(n, s, h, 0, o.gc),
                        W.stroke());
                  }
                W.lineWidth = D;
              } else {
                let t = Math.max(
                    J ? 3 : 1,
                    Math.min(X(14), Math.round(S / (4 * G)))
                  ),
                  e = Math.max(
                    Z ? 3 : 1,
                    Math.min($(8), Math.round(p / (5 * G)))
                  );
                for (let l = 0; l < t; l++)
                  for (let a = 0; a < e; a++) {
                    let h = Math.max(1, 0.7 * G),
                      r = c + h + ((S - 2 * h) * (l + 0.5)) / t,
                      n = b + h + ((p - 2 * h) * (a + 0.5)) / e,
                      s = Math.max(0.8, 1.1 * G);
                    0.35 > i() !==
                    (y && (l + a + (0, o.Qj)(T, 500, 7)) % 7 == 0)
                      ? ts(r, n, s)
                      : (W.beginPath(), W.arc(r, n, s, 0, o.gc), W.stroke());
                  }
              }
            } else if (5 === l) {
              let t = Math.max(
                  J ? 3 : 1,
                  Math.min(X(12), Math.round(S / (4.5 * G)))
                ),
                l = 2 === H && p > 1.5 * R && S / t > 16,
                a = m.filter((t) => [...t.slice(0, 3)].every((t) => u.has(t))),
                h = (t) => Math.round(t * K) / K,
                r = W.lineWidth,
                n = c + Math.min(1.5 * G, 0.06 * S),
                s = S - (n - c) * 2,
                M = Math.max(0.8, G),
                f = 0.3 * p,
                g = 0.15 * p,
                d = l
                  ? Math.max(
                      1,
                      Math.min(
                        Math.floor((0.7 * s) / t / 12),
                        Math.round(0.5 * G)
                      )
                    )
                  : 0,
                k = M + g + f + (l ? 0.07 * p + 5 * d : 0),
                x = b + (p - k) / 2 + M,
                P = h(x + g),
                v = h(x + g + f) - P;
              for (let f = 0; f < t; f++) {
                let c = h(n + (s * (f + 0.15)) / t),
                  m = h(n + (s * (f + 0.85)) / t) - c;
                if (
                  (Y(c, P, m, v),
                  0.5 > i() !== (y && ((0, o.Qj)(T, 700, 5) + f) % 5 == 0) &&
                    W.fillRect(c + r, P + r, m - 2 * r, h((v - 2 * r) / 2)),
                  0.4 > i() || to
                    ? ts(c + m / 2, x, M)
                    : (W.beginPath(),
                      W.arc(c + m / 2, x, M, 0, o.gc),
                      W.stroke()),
                  l)
                ) {
                  let t = tl(a).slice(0, 3);
                  e.pix(
                    t,
                    h(c + m / 2 - e.pixW(t, d) / 2),
                    h(P + v + 0.07 * p),
                    d,
                    C.stroke
                  ),
                    (W.fillStyle = C.stroke);
                }
              }
            } else if (7 === l) {
              let t = c + S / 2,
                e = b + p / 2,
                l = 0.38 * Math.min(S, p);
              W.beginPath(), W.arc(t, e, l, 0, o.gc), W.stroke(), te(t, e, l);
              for (let a = 0; a < 8; a++) {
                let o = (a * Math.PI) / 4;
                W.beginPath(),
                  W.moveTo(
                    t + Math.cos(o) * l * 0.75,
                    e + Math.sin(o) * l * 0.75
                  ),
                  W.lineTo(t + Math.cos(o) * l, e + Math.sin(o) * l),
                  W.stroke();
              }
              let a = 6.28 * i() + (y ? (0, o.tC)(T, 900 * o.gc) : 0);
              (W.strokeStyle = ti),
                W.beginPath(),
                W.moveTo(t, e),
                W.lineTo(t + Math.cos(a) * l * 0.7, e + Math.sin(a) * l * 0.7),
                W.stroke(),
                (W.strokeStyle = C.stroke);
            } else if (8 === l) {
              let t = c + S / 2,
                e = b + p / 2,
                l = 0.42 * Math.min(S, p);
              (W.fillStyle = C.screen),
                W.beginPath(),
                W.arc(t, e, l, 0, o.gc),
                W.fill();
              let a = i() * o.gc,
                h = 1800 + 1200 * i();
              ta(
                t,
                e,
                l,
                0,
                o.gc,
                y ? (a + (0, o.tC)(T, o.gc * h)) % o.gc : a,
                H ? 3 : 1
              );
            } else if (9 === l) {
              let t = (t) => Math.round(t * K) / K,
                l = t(c + 2 * G),
                a = t(b + 3 * G);
              tt(l, a, t(c + S - 2 * G) - l, t(b + p - 3 * G) - a);
              let h = Math.max(
                  J ? 2 : 1,
                  Math.min(X(6), Math.floor((S - 6 * G) / (6 * G)))
                ),
                r =
                  Math.floor((y ? (0, o.Ky)(T, 250) : 0) + 1e6 * i()) % 10 ** h,
                n = (S - 6 * G) / h,
                s = Math.min(p - 10 * G, 1.5 * n);
              e.seg7(
                String(r).padStart(h, "0"),
                t(c + 3 * G + 0.17 * n),
                t(b + (p - s) / 2),
                n,
                s,
                C.glass
              );
            } else if (10 === l) {
              let t = Math.max(
                  J ? 2 : 1,
                  Math.min(X(6), Math.round(S / (7 * G)))
                ),
                e = Math.max(
                  Z ? 2 : 1,
                  Math.min($(4), Math.round(p / (7 * G)))
                ),
                l = S / t,
                a = p / e,
                h = y ? (0, o.Qj)(T, 220, t * e) : -1,
                r = (t) => Math.round(t * K) / K,
                n = Math.max(
                  1,
                  Math.min(D, Math.round(0.12 * Math.min(l, a)) / 2)
                ),
                s = (t) => {
                  let e = Math.max(
                    2,
                    Math.round(Math.max(1.5, 0.1 * Math.min(l, a)) * K)
                  );
                  return (Math.round(t * K) - e) % 2 && e++, e / K;
                };
              W.lineWidth = n;
              for (let o = 0; o < e; o++)
                for (let e = 0; e < t; e++) {
                  let M = r(c + l * (e + 0.12)),
                    f = r(b + a * (o + 0.12)),
                    m = r(c + l * (e + 0.88)) - M,
                    g = r(b + a * (o + 0.88)) - f,
                    u = 0.3 > i() != (e + o * t === h);
                  if (
                    ((W.strokeStyle = C.stroke),
                    Y(M, f, m, g),
                    (W.fillStyle = C.stroke),
                    u)
                  ) {
                    let t = Math.max(n, tr);
                    tn(M + t, f + t, m - 2 * t, g - 2 * t);
                  } else {
                    let t = s(m),
                      e = s(g);
                    W.fillRect(M + (m - t) / 2, f + (g - e) / 2, t, e);
                  }
                }
              W.lineWidth = D;
            } else if (12 === l) {
              let t = Math.max(
                  Z ? 4 : 1,
                  Math.min($(16), Math.round(p / (2.6 * G)))
                ),
                e =
                  J >= 1 && S > 14 * G
                    ? Math.max(1, Math.min(8, Math.floor(S / (7 * G))))
                    : 1,
                l = Math.min((S / e) * 0.5, 6 * G),
                a = (t) => Math.round(t * K) / K,
                h = Math.max(2, Math.floor(((p - 4 * G) * K) / t)),
                r = Math.max(1, Math.round(Math.min(2 * K, 0.3 * h))),
                n = a(b + (p - (h * t) / K) / 2),
                s = (h - r) / K;
              for (let M = 0; M < e; M++) {
                let f = y
                    ? 0.5 +
                      0.5 * Math.sin((0, o.tC)(T, 330 * o.gc) + c + 1.7 * M)
                    : i(),
                  m = a(c + (S * (M + 0.5)) / e - l / 2),
                  g = a(c + (S * (M + 0.5)) / e + l / 2) - m;
                for (let e = 0; e < t; e++) {
                  let l = n + ((t - 1 - e) * h + r / 2) / K;
                  if (e / t < f) {
                    W.globalAlpha = 1;
                    let t = Math.min(tr, s / 3);
                    tn(m + t, a(l) + t, g - 2 * t, s - 2 * t);
                  } else
                    (W.fillStyle = C.stroke),
                      (W.globalAlpha = 0.18),
                      W.fillRect(m, a(l), g, s);
                }
              }
              W.globalAlpha = 1;
            } else if (13 === l) {
              let t = Math.max(
                  J ? 2 : 1,
                  Math.min(X(8), Math.round(S / (6 * G)))
                ),
                e = S / t;
              for (let l = 0; l < t; l++) {
                let t =
                    0.5 > i() !==
                    (y &&
                      ((0, o.Qj)(T, 600, 3) + Math.round(0.7 * l)) % 3 == 0),
                  a = (t) => Math.round(t * K) / K,
                  h = W.lineWidth,
                  r = a(c + e * (l + 0.25)),
                  n = a(b + 0.2 * p),
                  s = a(c + e * (l + 0.75)) - r,
                  M = a(b + 0.8 * p) - n,
                  f = Math.max(h, tr),
                  m = a((M - 2 * f) / 2);
                (W.strokeStyle = C.stroke),
                  Y(r, n, s, M),
                  tn(r + f, t ? n + f : n + M - f - m, s - 2 * f, m);
              }
            } else if (14 === l) {
              if (!A && S < 1.75 * R && p < 1.75 * R && !w(l, S, p, R)) {
                let t = Math.min(S, p),
                  e = c + S / 2,
                  l = b + p / 2,
                  a = (t) => Math.round(t * K) / K,
                  i = a(0.68 * t),
                  h = a(e - i / 2),
                  r = a(l - i / 2),
                  n = W.lineWidth;
                (W.strokeStyle = C.stroke), Y(h, r, i, i);
                let s = to && (!y || 0 === (0, o.Qj)(T, 700, 2));
                if (s) {
                  let t = Math.max(n, tr);
                  tn(h + t, r + t, i - 2 * t, i - 2 * t);
                }
                let M = 0.22 * i;
                (W.fillStyle = s ? C.screen : C.stroke),
                  W.beginPath(),
                  W.moveTo(e - 0.75 * M, l - M),
                  W.lineTo(e + 1 * M, l),
                  W.lineTo(e - 0.75 * M, l + M),
                  W.closePath(),
                  W.fill(),
                  (W.fillStyle = C.stroke);
              } else if (!A && S >= 2.3 * R && p >= 1.8 * R && !w(l, S, p, R)) {
                let t = (t) => Math.round(t * K) / K,
                  l = W.lineWidth,
                  a = 2.5 * G,
                  h = c + a,
                  r = S - 2 * a,
                  n = b + a,
                  s = p - 2 * a,
                  M = Math.max(1, 1.2 * G),
                  f = (r - 4 * M) / 5,
                  m = Math.min(0.42 * s, 0.85 * f),
                  g = s - m - 2.5 * G,
                  u = t(n + s - m),
                  d = t(n + s) - u,
                  k = y ? (0, o.Qj)(T, 450, 5) : -1;
                W.strokeStyle = C.stroke;
                for (let e = 0; e < 5; e++) {
                  let a = t(h + (f + M) * e),
                    i = t(h + (f + M) * e + f) - a,
                    r = a + i / 2,
                    n = u + d / 2,
                    s = 0.22 * Math.min(i, d);
                  Y(a, u, i, d);
                  let c = e === k || (to && k < 0 && 1 === e);
                  if (c) {
                    let t = Math.max(l, tr);
                    tn(a + t, u + t, i - 2 * t, d - 2 * t);
                  }
                  (W.fillStyle = c ? (to ? C.screen : C.face) : C.stroke),
                    W.beginPath(),
                    0 === e
                      ? (W.moveTo(r + 0.1 * s, n - s),
                        W.lineTo(r - s, n),
                        W.lineTo(r + 0.1 * s, n + s),
                        W.moveTo(r + s, n - s),
                        W.lineTo(r, n),
                        W.lineTo(r + s, n + s))
                      : 1 === e
                      ? (W.moveTo(r - 0.6 * s, n - s),
                        W.lineTo(r + 0.8 * s, n),
                        W.lineTo(r - 0.6 * s, n + s))
                      : 2 === e
                      ? (W.rect(r - 0.85 * s, n - s, 0.6 * s, 2 * s),
                        W.rect(r + 0.25 * s, n - s, 0.6 * s, 2 * s))
                      : 3 === e
                      ? W.rect(r - 0.85 * s, n - 0.85 * s, 1.7 * s, 1.7 * s)
                      : W.arc(r, n, 0.9 * s, 0, o.gc),
                    W.fill(),
                    (W.fillStyle = C.stroke);
                }
                let x = 0.4 * r,
                  P = h + r - x,
                  v = Math.max(1, 0.8 * G),
                  A = (x - 9 * v) / 10,
                  R = Math.max(2, Math.min(2.2 * G, 0.22 * g)),
                  I = y
                    ? 0.55 + 0.35 * Math.sin((0, o.tC)(T, 210 * o.gc))
                    : i(),
                  w = y
                    ? 0.55 + 0.35 * Math.sin((0, o.tC)(T, 260 * o.gc) + 1)
                    : i();
                for (let e = 0; e < 2; e++) {
                  let l = t(n + g / 2 + (e ? v : -v - R)),
                    a = Math.round((e ? w : I) * 10);
                  for (let e = 0; e < 10; e++) {
                    let o = t(P + (A + v) * e),
                      i = t(P + (A + v) * e + A) - o;
                    e < a
                      ? ((W.fillStyle = ti),
                        W.fillRect(o, l, i, t(R)),
                        (W.fillStyle = C.stroke))
                      : ((W.globalAlpha = 0.25),
                        W.fillRect(o, l, i, t(R)),
                        (W.globalAlpha = 1));
                  }
                }
                let Q = 0.48 * r,
                  j = t(n),
                  N = t(n + g) - j;
                tt(t(h), j, t(h + Q) - t(h), N);
                let U = Math.min((Q - 5 * G) / 3.66, (N - 4 * G) / 1.5),
                  E = 1.5 * U,
                  V = Math.floor((y ? (0, o.Ky)(T, 160) : 0) + 1e4 * i()) % 1e4;
                U >= 2 &&
                  e.seg7(
                    String(V).padStart(4, "0"),
                    h + (Q - 3.66 * U) / 2,
                    j + (N - E) / 2,
                    U,
                    E,
                    C.glass
                  ),
                  (W.fillStyle = C.stroke);
              } else {
                let t = J ? 5 : 1,
                  e = Math.max(1, Math.min(1.5 * G, 0.2 * p, 0.1 * S)),
                  l = (S - 2 * e) / t,
                  a = Math.max(2, Math.min(p - 2 * e, 1.25 * l)),
                  i = b + (p - a) / 2,
                  h = y ? (0, o.Qj)(T, 400, t) : -1;
                (W.fillStyle = C.stroke), (W.strokeStyle = C.stroke);
                for (let r = 0; r < t; r++) {
                  let n = (t) => Math.round(t * K) / K,
                    s = W.lineWidth,
                    M = n(c + e + l * (r + 0.07)),
                    f = n(c + e + l * (r + 0.93)) - M,
                    m = n(i),
                    g = n(i + a) - m,
                    u = M + f / 2,
                    d = m + g / 2,
                    k = Math.max(0.5, 0.27 * Math.min(f, g));
                  if (
                    (Y(M, m, f, g),
                    r === h || (to && h < 0 && (1 === t || 1 === r)))
                  ) {
                    let t = Math.max(s, tr);
                    tn(M + t, m + t, f - 2 * t, g - 2 * t),
                      (W.fillStyle = to ? C.screen : C.face);
                  }
                  let x = 1 === t ? 1 : r;
                  W.beginPath(),
                    0 === x
                      ? (W.moveTo(u + 0.55 * k, d - k),
                        W.lineTo(u - 0.7 * k, d),
                        W.lineTo(u + 0.55 * k, d + k))
                      : 1 === x
                      ? (W.moveTo(u - 0.55 * k, d - k),
                        W.lineTo(u + 0.7 * k, d),
                        W.lineTo(u - 0.55 * k, d + k))
                      : 2 === x
                      ? (W.rect(u - 0.9 * k, d - k, 0.65 * k, 2 * k),
                        W.rect(u + 0.25 * k, d - k, 0.65 * k, 2 * k))
                      : 3 === x
                      ? W.rect(u - 0.9 * k, d - 0.9 * k, 1.8 * k, 1.8 * k)
                      : W.arc(u, d, 0.95 * k, 0, o.gc),
                    W.fill(),
                    (W.fillStyle = C.stroke);
                }
              }
            } else if (16 === l) {
              if (!A && S < 1.75 * R && p < 1.75 * R && !w(l, S, p, R)) {
                let t = Math.min(S, p),
                  e = c + S / 2,
                  l = b + p / 2,
                  a = (t) => Math.round(t * K) / K,
                  h = 0.3 * t,
                  r = a(Math.max(1.5, 0.08 * t)),
                  n = 0.08 * t,
                  s = l - (2 * h + n + r) / 2 + h,
                  M = y ? (0, o.tC)(T, 400 * o.gc) : 6.28 * i();
                (W.strokeStyle = C.stroke),
                  (W.lineWidth = Math.max(1, D)),
                  W.beginPath(),
                  W.arc(e, s, h, 0, o.gc),
                  W.stroke(),
                  ts(e, s, 0.3 * h);
                for (let t = 0; t < 3; t++) {
                  let l = M + 2.094 * t;
                  W.beginPath(),
                    W.moveTo(
                      e + Math.cos(l) * h * 0.32,
                      s + Math.sin(l) * h * 0.32
                    ),
                    W.lineTo(
                      e + Math.cos(l) * h * 0.88,
                      s + Math.sin(l) * h * 0.88
                    ),
                    W.stroke();
                }
                let f = a(0.56 * t);
                tt(a(e - f / 2), a(s + h + n), f, r);
              } else {
                let t = (t) => Math.round(t * K) / K,
                  e = Math.min(0.17 * S, 0.34 * p),
                  l = t(Math.max(2, 0.1 * p)),
                  a = 0.07 * p,
                  h = b + (p - (2 * e + a + l)) / 2 + e,
                  r = y ? (0, o.tC)(T, 400 * o.gc) : 6.28 * i();
                [c + 0.3 * S, c + 0.7 * S].forEach((t, l) => {
                  (W.strokeStyle = C.stroke),
                    W.beginPath(),
                    W.arc(t, h, e, 0, o.gc),
                    W.stroke(),
                    ts(t, h, 0.28 * e);
                  for (let a = 0; a < 3; a++) {
                    let o = r + 1.047 * l + 2.094 * a;
                    W.beginPath(),
                      W.moveTo(
                        t + Math.cos(o) * e * 0.3,
                        h + Math.sin(o) * e * 0.3
                      ),
                      W.lineTo(
                        t + Math.cos(o) * e * 0.9,
                        h + Math.sin(o) * e * 0.9
                      ),
                      W.stroke();
                  }
                });
                let n = t(c + 0.2 * S);
                tt(n, t(h + e + a), t(c + 0.8 * S) - n, l);
              }
            } else if (17 === l) {
              if (!A && S < 1.75 * R && p < 1.75 * R && !w(l, S, p, R)) {
                let t = Math.min(S, p),
                  e = c + S / 2,
                  l = Math.max(1.5, 0.13 * t),
                  a = 0.74 * t,
                  i = b + p / 2 - (a / 2 - l) / 2,
                  h = e - 0.22 * t,
                  r = e + 0.22 * t;
                (W.strokeStyle = C.stroke),
                  (W.lineWidth = Math.max(1, Math.min(1.5 * D, 0.45 * l)));
                let n = y ? Math.sin((0, o.tC)(T, 900 * o.gc)) * t * 0.03 : 0;
                for (let t of (W.beginPath(),
                W.moveTo(h, i),
                W.quadraticCurveTo(e + n, i + a, r, i),
                W.stroke(),
                (W.lineWidth = Math.max(1, 0.8 * D)),
                [h, r]))
                  W.beginPath(),
                    W.arc(t, i, l, 0, o.gc),
                    W.stroke(),
                    ts(t, i, 0.75 * l),
                    (W.fillStyle = C.stroke),
                    W.beginPath(),
                    W.arc(t, i, l * (to ? 0.45 : 0.6), 0, o.gc),
                    W.fill();
                W.lineWidth = D;
              } else {
                let t = Math.max(1.5, Math.min(1.8 * G, 0.24 * R)),
                  e = b + Math.max(0.16 * p, 2.5 * G + t),
                  l = b + 0.84 * p,
                  a = Math.max(
                    J ? 3 : 1,
                    Math.min(X(12), Math.round(S / (4.4 * t)))
                  ),
                  h = Math.max(
                    1,
                    Math.min($(6), Math.floor((l - e) / (4.2 * t)) + 1)
                  ),
                  r = (t) => c + (S * (t + 0.5)) / a,
                  n = (t) =>
                    1 === h ? (e + l) / 2 : e + ((l - e) * t) / (h - 1),
                  s = Math.max(1, 0.8 * D),
                  M = (e, l, a) => {
                    (W.strokeStyle = C.stroke),
                      (W.lineWidth = s),
                      W.beginPath(),
                      W.arc(e, l, t, 0, o.gc),
                      W.stroke(),
                      a
                        ? ts(e, l, 0.75 * t)
                        : ((W.fillStyle = C.stroke),
                          W.beginPath(),
                          W.arc(e, l, 0.35 * t, 0, o.gc),
                          W.fill()),
                      (W.fillStyle = C.stroke),
                      (W.strokeStyle = C.stroke),
                      (W.lineWidth = D);
                  },
                  f = [...Array(a * h).keys()];
                for (let t = f.length - 1; t > 0; t--) {
                  let e = Math.floor(i() * (t + 1));
                  [f[t], f[e]] = [f[e], f[t]];
                }
                let m = Math.min(
                    Math.floor(f.length / 2),
                    Math.max(1, Math.round(a * h * 0.16))
                  ),
                  g = [];
                (W.strokeStyle = C.stroke),
                  (W.lineWidth = Math.max(1, Math.min(1.5 * D, 0.45 * t)));
                for (let e = 0; e < m; e++) {
                  let l = f[2 * e],
                    o = f[2 * e + 1],
                    i = r(l % a),
                    h = n(Math.floor(l / a)),
                    s = r(o % a),
                    M = n(Math.floor(o / a)),
                    c = Math.abs(i - s),
                    m = Math.max(h, M),
                    u = Math.min(
                      Math.min(3.5 * G, 0.35 * c) + 0.1 * c,
                      Math.max(0, b + p - m - t - G)
                    );
                  W.beginPath(),
                    W.moveTo(i, h),
                    W.quadraticCurveTo((i + s) / 2, m + 2 * u, s, M),
                    W.stroke(),
                    g.push([i, h], [s, M]);
                }
                W.lineWidth = D;
                let u = new Set(
                  g.map((t) => {
                    let [e, l] = t;
                    return "".concat(e, ",").concat(l);
                  })
                );
                for (let t = 0; t < h; t++)
                  for (let e = 0; e < a; e++)
                    M(r(e), n(t), u.has("".concat(r(e), ",").concat(n(t))));
                for (let [e, l] of g)
                  W.beginPath(),
                    W.arc(e, l, t * (to ? 0.45 : 0.6), 0, o.gc),
                    W.fill();
                W.lineWidth = D;
              }
            } else if (18 === l) {
              if (!A && S < 1.75 * R && p < 1.75 * R && !w(l, S, p, R)) {
                let t = Math.min(S, p),
                  l = c + S / 2,
                  a = b + p / 2,
                  h = (t) => Math.round(t * K) / K,
                  r = h(Math.max(2, 0.12 * t)),
                  n = h(c + r),
                  s = h(a - 0.3 * t),
                  M = h(c + S - r) - n,
                  f = h(a + 0.3 * t) - s;
                tt(n, s, M, f);
                let m = String(
                    (Math.floor(100 * i()) + (y ? (0, o.Ky)(T, 700) : 0)) % 100
                  ).padStart(2, "0"),
                  g = 0.62 * f,
                  u = Math.min(g / 1.4, (0.82 * M) / 1.66);
                e.seg7(
                  m,
                  h(l - (2 * u - 0.34 * u) / 2),
                  h(a - g / 2),
                  u,
                  g,
                  C.glass
                );
              } else {
                let t = (t) => Math.round(t * K) / K,
                  l = t(c + 2 * G),
                  a = t(b + 3 * G);
                tt(l, a, t(c + S - 2 * G) - l, t(b + p - 3 * G) - a);
                let h = H ? tl(k) : "",
                  r = String(
                    (Math.floor(900 * i()) + (y ? (0, o.Qj)(T, 700, 9) : 0)) %
                      1e3
                  ).padStart(3, "0"),
                  n = Math.max(1, Math.floor(Math.min(0.3 * p, 0.16 * S) / 5)),
                  s = h ? e.pixW(h, n) + 2 * n : 0,
                  M = Math.min(p - 8 * G, ((S - 8 * G - s) / 3) * 1.4),
                  f = M / 1.4;
                e.seg7(
                  r,
                  t(c + S - 4 * G - s - 3 * f + (h ? 0 : 0.34 * f)),
                  t(b + (p - M) / 2),
                  f,
                  M,
                  C.glass
                ),
                  h &&
                    e.pix(
                      h,
                      t(c + S - 4 * G - s + 2 * n),
                      t(b + p / 2 - 2.5 * n),
                      n,
                      C.glass
                    );
              }
            } else if (19 === l) {
              tt(c + 2 * G, b + 2 * G, S - 4 * G, p - 4 * G);
              let t = c + S / 2,
                e = b + p / 2,
                l = 0.32 * Math.min(S, p),
                a = l >= 9,
                h = Math.floor(5 * i()),
                r = (i() - 0.5) * 0.9,
                n = y ? (0, o.tC)(T, 2400 * o.gc) : i() * o.gc;
              if (
                (W.save(),
                W.translate(t, e),
                W.rotate(r),
                W.translate(-t, -e),
                (W.strokeStyle = C.glass),
                (W.fillStyle = C.glass),
                (W.lineWidth = Math.max(1, 0.8 * D)),
                (W.globalAlpha = 0.9),
                W.beginPath(),
                W.arc(t, e, l, 0, o.gc),
                W.stroke(),
                W.save(),
                W.beginPath(),
                W.arc(t, e, l - 0.5, 0, o.gc),
                W.clip(),
                0 === h)
              ) {
                W.globalAlpha = 0.4;
                let h = a ? 4 : 2;
                for (let a = 0; a < h; a++) {
                  let i = Math.cos(n + (a * Math.PI) / h);
                  W.beginPath(),
                    W.ellipse(
                      t,
                      e,
                      Math.max(0.5, Math.abs(i) * l),
                      l,
                      0,
                      0,
                      o.gc
                    ),
                    W.stroke();
                }
                for (let o of a ? [-0.6, -0.3, 0, 0.3, 0.6] : [0]) {
                  let a = e + l * o,
                    i = Math.sqrt(1 - o * o) * l;
                  W.beginPath(),
                    W.moveTo(t - i, a),
                    W.lineTo(t + i, a),
                    W.stroke();
                }
                if (a) {
                  W.globalAlpha = 0.85;
                  for (let a = 0; a < 7; a++) {
                    let a = i() * o.gc + 0.5 * n,
                      h = i() * l * 0.75,
                      r = 2 + i() * l * 0.3;
                    W.fillRect(
                      t + Math.cos(a) * h - r / 2,
                      e + Math.sin(a) * h - 1,
                      r,
                      Math.max(1, 0.08 * l)
                    );
                  }
                }
              } else if (1 === h) {
                let h = a ? 7 : 3;
                for (let a = 0; a < h; a++) {
                  let o = -0.85 + (1.7 * a) / h,
                    r = -0.85 + (1.7 * (a + 1)) / h,
                    n = (r - o) * l * (0.35 + 0.5 * i()),
                    s = e + ((o + r) / 2) * l;
                  (W.globalAlpha = 0.25 + 0.35 * i()),
                    W.fillRect(t - l, s - n / 2, 2 * l, Math.max(1, n));
                }
                a &&
                  ((W.globalAlpha = 0.9),
                  W.beginPath(),
                  W.ellipse(
                    t + 0.25 * l,
                    e + 0.3 * l,
                    0.2 * l,
                    0.11 * l,
                    0,
                    0,
                    o.gc
                  ),
                  W.stroke());
              } else if (2 === h) {
                let h = Math.cos(n);
                (W.globalAlpha = 0.22),
                  W.beginPath(),
                  W.ellipse(
                    t,
                    e,
                    Math.max(0.5, Math.abs(h) * l),
                    l,
                    0,
                    h > 0 ? -1.5708 : 1.5708,
                    h > 0 ? 1.5708 : 4.7124
                  ),
                  W.lineTo(t, e + (h > 0 ? -l : l)),
                  W.closePath(),
                  W.fill(),
                  (W.globalAlpha = 0.6);
                for (let h = 0; h < (a ? 6 : 2); h++) {
                  let a = i() * o.gc,
                    h = i() * l * 0.7,
                    r = l * (0.06 + 0.14 * i());
                  W.beginPath(),
                    W.arc(t + Math.cos(a) * h, e + Math.sin(a) * h, r, 0, o.gc),
                    W.stroke();
                }
              } else if (3 === h)
                for (let o of ((W.globalAlpha = 0.35),
                a ? [-0.5, 0, 0.5] : [0])) {
                  let a = e + l * o,
                    i = Math.sqrt(1 - o * o) * l;
                  W.beginPath(),
                    W.moveTo(t - i, a),
                    W.lineTo(t + i, a),
                    W.stroke();
                }
              else {
                for (let a of ((W.globalAlpha = 0.85), x)) {
                  W.beginPath();
                  let o = !1,
                    i = 0;
                  for (let [h, r] of a) {
                    let a = (r * Math.PI) / 180,
                      s = (h * Math.PI) / 180 + n,
                      M = Math.cos(a) * Math.cos(s),
                      f = t + Math.cos(a) * Math.sin(s) * l,
                      c = e - Math.sin(a) * l;
                    if (M < 0) {
                      o = !1;
                      continue;
                    }
                    o ? W.lineTo(f, c) : W.moveTo(f, c), (o = !0), i++;
                  }
                  i > 2 && (W.closePath(), W.fill());
                }
                if (a)
                  for (let a of ((W.globalAlpha = 0.25),
                  [-0.6, -0.3, 0, 0.3, 0.6])) {
                    let o = e + l * a,
                      i = Math.sqrt(1 - a * a) * l;
                    W.beginPath(),
                      W.moveTo(t - i, o),
                      W.lineTo(t + i, o),
                      W.stroke();
                  }
              }
              if ((W.restore(), 3 === h)) {
                for (let o of ((W.globalAlpha = 0.8),
                a ? [1.35, 1.6, 1.8] : [1.6]))
                  W.beginPath(),
                    W.ellipse(t, e, l * o, l * o * 0.22, 0, 0, Math.PI),
                    W.stroke();
                for (let i of ((W.globalAlpha = 0.35),
                a ? [1.35, 1.6, 1.8] : [1.6]))
                  W.beginPath(),
                    W.ellipse(t, e, l * i, l * i * 0.22, 0, Math.PI, o.gc),
                    W.stroke();
              }
              W.restore();
              let s = y ? (0, o.tC)(T, 1500 * o.gc) : i() * o.gc,
                M = (i() - 0.5) * 1.2,
                f = 1.45 * l,
                m = 0.42 * l;
              (W.strokeStyle = C.glass),
                (W.globalAlpha = 0.5),
                (W.lineWidth = 1),
                W.beginPath(),
                W.ellipse(t, e, f, m, M, 0, o.gc),
                W.stroke();
              let g = Math.cos(s) * f,
                u = Math.sin(s) * m,
                d = t + g * Math.cos(M) - u * Math.sin(M),
                k = e + g * Math.sin(M) + u * Math.cos(M);
              (W.globalAlpha = 0 > Math.sin(s) ? 0.45 : 1),
                (W.fillStyle = C.glass),
                W.beginPath(),
                W.arc(d, k, Math.max(1.2, 1.2 * G), 0, o.gc),
                W.fill(),
                (W.globalAlpha = 1),
                (W.lineWidth = D),
                (W.fillStyle = C.stroke),
                (W.strokeStyle = C.stroke);
            } else if (
              20 === l &&
              !A &&
              S >= 2.3 * R &&
              p >= 1.8 * R &&
              !w(l, S, p, R)
            ) {
              let t = (t) => Math.round(t * K) / K,
                e = W.lineWidth,
                l = Math.max(
                  3,
                  Math.min(6, Math.round((S - 10 * G) / (6 * G)))
                ),
                a = Math.max(
                  4,
                  Math.round(Math.min(3.4 * G, ((S - 14 * G) / l) * 0.4))
                ),
                h = 0.78 * a,
                r = 4 * G,
                n = c + 3 * G + r,
                s = (S - 6 * G - r) / l,
                M = b + 3 * G,
                f = b + p - 3 * G - h,
                m = f - 0.4 * h,
                g = m - M - e;
              for (let l = 0; l <= 8; l++) {
                let a = t(M + e + ((m - M - e) * l) / 8);
                W.fillRect(
                  t(c + 3 * G + (l % 2 ? 0.45 * r : 0)),
                  a,
                  t(l % 2 ? 0.55 * r : r) - 1.2 * G,
                  Math.max(1, Math.round(0.5 * D * K) / K)
                );
              }
              let u = Math.max(1, Math.round(0.6 * D * K) / K);
              for (let e = 0; e < l; e++) {
                let l = t(n + s * (e + 0.5)),
                  r = y
                    ? 0.5 + 0.4 * Math.sin((0, o.tC)(T, 900 * o.gc) + 1.7 * e)
                    : 0.2 + 0.7 * i();
                (W.strokeStyle = C.stroke),
                  (W.lineWidth = u),
                  Y(l - a / 2, M, a, m - M + u),
                  (W.lineWidth = D);
                let c = u + Math.max(1, Math.round(0.12 * a));
                tn(
                  l - a / 2 + c,
                  M + c + (g - c) * (1 - r),
                  a - 2 * c,
                  (g - c) * r + c
                ),
                  ts(l, f, h);
              }
            } else if (20 === l) {
              let t = y
                  ? 0.5 + 0.45 * Math.sin((0, o.tC)(T, 700 * o.gc) + c)
                  : i(),
                e = Math.max(3, Math.round(Math.min(3 * G, 0.22 * S))),
                l = 0.9 * e,
                a = J >= 1 && S >= e + 6 * G,
                h = Math.max(1, G),
                r = 2 * G,
                n =
                  Math.round(
                    (c +
                      S / 2 -
                      (Math.max(l, e / 2 + (a ? h + r : 0)) -
                        Math.max(l, e / 2)) /
                        2) *
                      K
                  ) / K,
                s = b + 3 * G,
                M = b + p - 2.5 * G - l,
                f = M - 0.4 * l,
                m = W.lineWidth,
                g = f - s - m;
              (W.strokeStyle = C.stroke),
                Y(n - e / 2, s, e, f - s + m),
                tn(n - e / 2 + m, s + m + g * (1 - t), e - 2 * m, g * t + m),
                ts(n, M, l);
              let u = M - l - h - (s + m);
              if (a && u > 4)
                for (let t = 0; t <= 4; t++)
                  W.fillRect(
                    n + e / 2 + h,
                    Math.round((s + m + (u * t) / 4) * K) / K,
                    r,
                    Math.max(1, Math.round(0.5 * D))
                  );
            } else if (21 === l) {
              if (!A && S < 1.75 * R && p < 1.75 * R && !w(l, S, p, R)) {
                let t = Math.min(S, p),
                  e = c + S / 2,
                  l = b + p / 2,
                  a = (t) => Math.round(t * K) / K,
                  i = a(Math.max(2, 0.1 * t)),
                  h = a(c + S - i) - a(c + i);
                if (
                  ((W.fillStyle = C.stroke),
                  W.fillRect(a(c + i), a(b + i), h, a(b + p - i) - a(b + i)),
                  !y || 0 === (0, o.Qj)(T, 600, 2))
                ) {
                  let o = 0.32 * t,
                    i = l + 0.14 * o;
                  (W.fillStyle = to ? C.glass : C.face),
                    W.beginPath(),
                    W.moveTo(e, i - o),
                    W.lineTo(e + 1.1 * o, i + 0.72 * o),
                    W.lineTo(e - 1.1 * o, i + 0.72 * o),
                    W.closePath(),
                    W.fill();
                  let h = Math.max(1, a(0.2 * o));
                  (W.fillStyle = C.stroke),
                    W.fillRect(a(e - h / 2), a(i - 0.42 * o), h, a(0.66 * o)),
                    W.fillRect(a(e - h / 2), a(i + 0.38 * o), h, h);
                }
                W.fillStyle = C.stroke;
              } else {
                let t = Math.floor(i() * g.length),
                  l =
                    J && p >= 12
                      ? g[y ? (t + (0, o.Qj)(T, 1400, g.length)) % g.length : t]
                      : "";
                if (
                  ((W.fillStyle = C.stroke),
                  W.fillRect(c + 2 * G, b + 2 * G, S - 4 * G, p - 4 * G),
                  l)
                ) {
                  let t = Math.max(
                    1,
                    Math.floor(
                      Math.min((p - 8 * G) / 5, (S - 8 * G) / (4 * l.length))
                    )
                  );
                  e.pix(
                    l,
                    c + (S - e.pixW(l, t)) / 2,
                    b + (p - 5 * t) / 2,
                    t,
                    to ? C.glass : C.face
                  );
                }
                (W.strokeStyle = C.face),
                  (W.globalAlpha = 0.5),
                  W.save(),
                  W.beginPath(),
                  W.rect(c + 2 * G, b + 2 * G, S - 4 * G, 1.4 * G),
                  W.rect(c + 2 * G, b + p - 3.4 * G, S - 4 * G, 1.4 * G),
                  W.clip();
                for (let t = c - 4 * G; t < c + S; t += 2.5 * G)
                  W.beginPath(),
                    W.moveTo(t, b + p),
                    W.lineTo(t + 3 * G, b),
                    W.stroke();
                W.restore(), (W.globalAlpha = 1);
              }
            } else if (22 === l) {
              if (!A && S < 1.75 * R && p < 1.75 * R && !w(l, S, p, R)) {
                let t = Math.min(S, p),
                  e = c + S / 2,
                  l = e - 0.36 * t,
                  a = e + 0.36 * t,
                  h = 0.26 * t,
                  r = 0.2 * t,
                  n = 0.06 * t,
                  s = Math.round(b + p / 2 + (h - (n + 1.2 * r)) / 2) + O();
                (W.strokeStyle = C.stroke),
                  (W.lineWidth = Math.max(1, D)),
                  W.beginPath(),
                  W.moveTo(l, s),
                  W.lineTo(a, s),
                  W.stroke();
                for (let t = 0; t <= 4; t++) {
                  let e = Math.round(l + ((a - l) * t) / 4) + O(),
                    o = t % 2 == 0 ? h : 0.55 * h;
                  W.beginPath(), W.moveTo(e, s), W.lineTo(e, s - o), W.stroke();
                }
                let M =
                  l +
                  (a - l) *
                    (y
                      ? 0.5 + 0.32 * Math.sin((0, o.tC)(T, 600 * o.gc) + b)
                      : 0.2 + 0.6 * i());
                (W.fillStyle = ti),
                  W.beginPath(),
                  W.moveTo(M, s + n),
                  W.lineTo(M - 0.8 * r, s + n + 1.2 * r),
                  W.lineTo(M + 0.8 * r, s + n + 1.2 * r),
                  W.closePath(),
                  W.fill(),
                  (W.fillStyle = C.stroke);
              } else {
                let t = c + 3 * G,
                  e = c + S - 3 * G,
                  l = Math.round(b + p / 2 - 0.5 * G),
                  a = Math.max(
                    J ? 6 : 1,
                    Math.min(X(30), Math.round((e - t) / (3 * G)))
                  );
                (W.strokeStyle = C.stroke),
                  W.beginPath(),
                  W.moveTo(t, l),
                  W.lineTo(e, l),
                  W.stroke();
                for (let o = 0; o <= a; o++) {
                  let i = t + ((e - t) * o) / a,
                    h = o % 5 == 0 ? 3 * G : 1.5 * G;
                  W.beginPath(), W.moveTo(i, l), W.lineTo(i, l - h), W.stroke();
                }
                let h =
                  t +
                  (e - t) *
                    (y
                      ? 0.5 + 0.45 * Math.sin((0, o.tC)(T, 600 * o.gc) + b)
                      : i());
                (W.fillStyle = C.stroke),
                  W.beginPath(),
                  W.moveTo(h, l + 0.5 * G),
                  W.lineTo(h - 2 * G, l + 4 * G),
                  W.lineTo(h + 2 * G, l + 4 * G),
                  W.closePath(),
                  W.fill(),
                  (W.fillStyle = C.stroke);
              }
            } else if (23 === l) {
              if (
                ((W.fillStyle = C.stroke),
                (W.globalAlpha = 0.8),
                0 === Z && S > 1.6 * p)
              ) {
                let t = Math.max(
                    3,
                    Math.min(30, Math.round((S - 6 * G) / (2.6 * G)))
                  ),
                  e = (t) => Math.round(t * K) / K,
                  l = Math.max(1, e(0.9 * G));
                for (let a = 0; a < t; a++)
                  W.fillRect(
                    e(c + 3 * G + ((S - 6 * G) * (a + 0.5)) / t - l / 2),
                    b + 2 * G,
                    l,
                    p - 4 * G
                  );
              } else {
                let t = Math.max(
                    3,
                    Math.min(
                      Math.max(3, $(14)),
                      Math.round(p / Math.max(2.5, 2.6 * G))
                    )
                  ),
                  e = (t) => Math.round(t * K) / K,
                  l = Math.max(1, e(0.9 * G));
                for (let a = 0; a < t; a++)
                  W.fillRect(
                    c + 2 * G,
                    e(b + 2 * G + ((p - 4 * G) * (a + 0.5)) / t - l / 2),
                    S - 4 * G,
                    l
                  );
              }
              W.globalAlpha = 1;
            } else if (25 === l) {
              let t = c + S / 2,
                e = b + p / 2,
                l = 0.4 * Math.min(S, p),
                a = y ? (0, o.tC)(T, 1500 * o.gc) : 0;
              (W.strokeStyle = C.stroke),
                W.beginPath(),
                W.arc(t, e, l, 0, o.gc),
                W.stroke(),
                ts(t, e, 0.28 * l);
              for (let i = 0; i < 10; i++) {
                let h = a + 0.55 * i + 0.3;
                W.beginPath(),
                  W.arc(
                    t + Math.cos(h) * l * 0.68,
                    e + Math.sin(h) * l * 0.68,
                    Math.max(1, 0.11 * l),
                    0,
                    o.gc
                  ),
                  W.stroke();
              }
              let i = Math.max(2, 1.2 * D);
              W.fillRect(t + 0.75 * l, e - i / 2, 0.3 * l, i);
            } else if (
              27 === l &&
              !A &&
              S >= 2.3 * R &&
              p >= 1.8 * R &&
              !w(l, S, p, R)
            ) {
              let t = (t) => Math.round(t * K) / K,
                e = Math.max(2, Math.min(4, Math.round((S - 6 * G) / (8 * G)))),
                l = (S - 6 * G) / e,
                a = b + 3.5 * G,
                h = b + p - 3.5 * G,
                r = Math.max(2, t(1.6 * G)),
                n = Math.floor(i() * e);
              for (let s = 0; s < e; s++) {
                let e = t(c + 3 * G + l * (s + 0.5));
                (W.fillStyle = C.stroke), W.fillRect(e - r / 2, a, r, h - a);
                for (let l = 0; l < 5; l++) {
                  let o = t(a + ((h - a) * l) / 4);
                  W.fillRect(
                    e - r / 2 - 2.6 * G,
                    o - Math.max(0.5, 0.25 * D),
                    1.6 * G,
                    Math.max(1, 0.5 * D)
                  );
                }
                let M = t(
                    h -
                      (h - a) *
                        (y && s === n
                          ? 0.5 + 0.45 * Math.sin((0, o.tC)(T, 800 * o.gc) + s)
                          : Math.round(4 * i()) / 4)
                  ),
                  f = Math.min(0.62 * l, 9 * G),
                  m = Math.max(3, t(2.6 * G));
                (W.fillStyle = C.stroke),
                  W.fillRect(t(e - 0.3 * f), M - m / 2, t(f), m),
                  tn(
                    t(e + 0.7 * f - 1.1 * m),
                    M - m / 2 + Math.max(1, 0.25 * m),
                    t(0.9 * m),
                    Math.max(1, 0.5 * m)
                  );
              }
            } else if (27 === l) {
              let t = c + S / 2,
                e = b + 3 * G,
                l = b + p - 3 * G,
                a = y
                  ? 0.5 + 0.45 * Math.sin((0, o.tC)(T, 800 * o.gc) + c)
                  : i();
              (W.fillStyle = C.stroke),
                W.fillRect(
                  t - Math.max(1, 0.8 * G),
                  e,
                  Math.max(2, 1.6 * G),
                  l - e
                );
              let h = l - (l - e) * a;
              (W.fillStyle = C.stroke),
                W.beginPath(),
                W.arc(t, h, Math.max(2.5, Math.min(0.3 * S, 4 * G)), 0, o.gc),
                W.fill(),
                (W.strokeStyle = C.face),
                W.beginPath(),
                W.arc(t, h, Math.max(1, 1.5 * G), 0, o.gc),
                W.stroke();
            } else if (28 === l) {
              let t = 0.3 * Math.min(S, p),
                e = Math.max(1, 1.1 * G),
                l = H ? 5 + Math.floor(4 * i()) : 3,
                a = y ? (0, o.Qj)(T, 700, l) : Math.floor(i() * l),
                h = c + S / 2,
                r =
                  b +
                  p / 2 +
                  (1.35 * t +
                    e -
                    Math.max(t + D / 2, 1.35 * t * Math.SQRT1_2 + e)) /
                    2;
              for (let i = 0; i < l; i++) {
                let n = Math.PI * (0.75 + (1.5 * i) / (l - 1));
                i === a
                  ? ts(
                      h + Math.cos(n) * t * 1.35,
                      r + Math.sin(n) * t * 1.35,
                      e
                    )
                  : ((W.fillStyle = C.stroke),
                    W.beginPath(),
                    W.arc(
                      h + Math.cos(n) * t * 1.35,
                      r + Math.sin(n) * t * 1.35,
                      e,
                      0,
                      o.gc
                    ),
                    W.fill());
              }
              (W.strokeStyle = C.stroke),
                W.beginPath(),
                W.arc(h, r, t, 0, o.gc),
                W.stroke();
              let n = Math.PI * (0.75 + (1.5 * a) / (l - 1));
              (W.strokeStyle = ti),
                W.beginPath(),
                W.moveTo(h, r),
                W.lineTo(
                  h + Math.cos(n) * t * 0.95,
                  r + Math.sin(n) * t * 0.95
                ),
                W.stroke(),
                (W.strokeStyle = C.stroke);
            } else if (29 === l) {
              tt(c + 2 * G, b + 2 * G, S - 4 * G, p - 4 * G);
              let t = Math.max(
                  J ? 8 : 5,
                  Math.min(
                    Math.max(5, X(40)),
                    Math.floor((S - 6 * G) / (1.6 * G))
                  )
                ),
                e = Math.max(
                  3,
                  Math.min(
                    Math.max(3, $(9)),
                    Math.floor((p - 6 * G) / (1.6 * G))
                  )
                ),
                l = (S - 6 * G) / t,
                a = (p - 6 * G) / e,
                h = y ? (0, o.Qj)(T, 120, 11) : 0;
              W.fillStyle = C.glass;
              for (let o = 0; o < t; o++)
                for (let t = 0; t < e; t++) {
                  let r = ((o + h) * 7 + 3 * t + Math.floor(2 * i())) % 11,
                    n = (t) => Math.round(t * K) / K,
                    s = n(Math.max(1, 0.6 * l)),
                    M = n(Math.max(1, 0.6 * a));
                  r < 4 &&
                    t > 0 &&
                    t < e - 1 &&
                    W.fillRect(
                      n(c + 3 * G + l * (o + 0.5) - s / 2),
                      n(b + 3 * G + a * (t + 0.5) - M / 2),
                      s,
                      M
                    );
                }
            } else if (30 === l) {
              let t = c + S / 2,
                e = b + p / 2,
                l = 0.42 * Math.min(S, p);
              (W.strokeStyle = C.stroke),
                W.beginPath(),
                W.arc(t, e, l, 0, o.gc),
                W.stroke(),
                (W.fillStyle = C.stroke);
              let a = Math.max(2.5, 2.2 * G),
                i = Math.floor(l / a);
              for (let h = -i; h <= i; h++)
                for (let r = -i; r <= i; r++) {
                  let i = t + r * a,
                    n = e + h * a;
                  (i - t) ** 2 + (n - e) ** 2 < (l - a) ** 2 &&
                    (W.beginPath(),
                    W.arc(
                      i,
                      n,
                      Math.max(0.6, 0.22 * a) *
                        (y ? 1 + 0.4 * Math.sin((0, o.tC)(T, 90 * o.gc)) : 1),
                      0,
                      o.gc
                    ),
                    W.fill());
                }
            } else if (32 === l) {
              let t = Math.max(
                  J ? 2 : 1,
                  Math.min(X(6), Math.floor((S - 4 * G) / (7 * G)))
                ),
                l = (S - 4 * G) / t,
                a = Math.max(1, 1.2 * G),
                h = p - 4 * G - a,
                r = String(
                  (Math.floor(1e6 * i()) + (y ? (0, o.Ky)(T, 400) : 0)) %
                    10 ** t
                ).padStart(t, "0");
              for (let o = 0; o < t; o++) {
                let t = c + 2 * G + l * o + 0.12 * l,
                  i = 0.76 * l,
                  n = b + 2 * G,
                  s = i / 2;
                (W.fillStyle = C.screen),
                  W.beginPath(),
                  W.moveTo(t, n + h),
                  W.lineTo(t, n + s),
                  W.arc(t + s, n + s, s, Math.PI, 0),
                  W.lineTo(t + i, n + h),
                  W.closePath(),
                  W.fill(),
                  (W.fillStyle = C.stroke),
                  W.fillRect(
                    t - Math.max(1, 0.5 * G),
                    n + h,
                    i + 2 * Math.max(1, 0.5 * G),
                    a
                  );
                let M = Math.min(0.55 * i, ((h - s) / 1.5) * 0.9);
                M >= 3
                  ? e.seg7(
                      r[o],
                      t + (i - M) / 2,
                      n + s + (h - s - 1.5 * M) / 2,
                      M,
                      1.5 * M,
                      C.glass
                    )
                  : ((W.fillStyle = C.glass),
                    W.fillRect(
                      t + i / 2 - 1,
                      n + s,
                      2,
                      Math.max(2, h - s - 2)
                    ));
              }
            } else if (33 === l) {
              if (!A && S < 1.75 * R && p < 1.75 * R && !w(l, S, p, R)) {
                let t = Math.min(S, p),
                  e = c + S / 2,
                  l = b + p / 2,
                  a = 0.25 * t,
                  h = Math.max(0.8, 0.065 * t),
                  r = 585 | Math.floor(4096 * i()),
                  n = y ? (0, o.Qj)(T, 160, 12) : 0,
                  s = (t) => (r >> ((t % 12) + 12) % 12) & 1;
                (W.fillStyle = C.stroke), (W.globalAlpha = 0.25);
                let M = Math.max(1 / K, Math.round(0.6 * G * K) / K);
                W.fillRect(
                  c + 0.1 * t,
                  Math.round((l - 0.4 * t) * K) / K,
                  S - 0.2 * t,
                  M
                ),
                  W.fillRect(
                    c + 0.1 * t,
                    Math.round((l + 0.4 * t) * K) / K - M,
                    S - 0.2 * t,
                    M
                  ),
                  (W.globalAlpha = 1);
                for (let t = -1; t <= 1; t++) {
                  let i = e + a * t;
                  for (let [e, r] of ((W.fillStyle = C.stroke),
                  W.beginPath(),
                  W.arc(i, l, 0.6 * h, 0, o.gc),
                  W.fill(),
                  [
                    [-a, s((t + n) * 2)],
                    [a, s((t + n) * 2 + 1)],
                  ]))
                    r
                      ? ts(i, l + e, h)
                      : ((W.globalAlpha = 0.12),
                        W.beginPath(),
                        W.arc(i, l + e, 0.8 * h, 0, o.gc),
                        W.fill(),
                        (W.globalAlpha = 1));
                }
                W.fillStyle = C.stroke;
              } else {
                let t = Math.max(4, Math.floor(S / Math.max(3, 2.2 * G))),
                  e = S / t,
                  l = y ? (0, o.Qj)(T, 160, 32) : 0;
                (W.fillStyle = C.stroke),
                  (W.globalAlpha = 0.25),
                  W.fillRect(c, b + 1.5 * G, S, Math.max(1, 0.6 * G)),
                  W.fillRect(c, b + p - 2.1 * G, S, Math.max(1, 0.6 * G)),
                  (W.globalAlpha = 1);
                let a = Math.max(
                    1,
                    Math.min(5, Math.floor((p - 8 * G) / Math.max(3, 2.2 * G)))
                  ),
                  h = (p - 8 * G) / a,
                  r = Math.max(0.7, 0.24 * Math.min(e, h));
                for (let n = 0; n < t; n++) {
                  let t = c + e * (n + 0.5),
                    s = Math.floor(32 * i());
                  W.beginPath(),
                    W.arc(t, b + 3.2 * G, 0.7 * r, 0, o.gc),
                    W.fill(),
                    W.beginPath(),
                    W.arc(t, b + p - 3.2 * G, 0.7 * r, 0, o.gc),
                    W.fill();
                  for (let e = 0; e < a; e++)
                    ((s + l + n) >> e) & 1 &&
                      (W.beginPath(),
                      W.arc(t, b + 4 * G + h * (e + 0.5), r, 0, o.gc),
                      W.fill());
                }
              }
            } else if (34 === l) {
              let t = Math.max(
                  J ? 3 : 1,
                  Math.min(X(8), Math.floor(S / (6 * G)))
                ),
                e = S / t,
                l = Math.floor(i() * t);
              for (let a = 0; a < t; a++) {
                let t = 0.45 * p,
                  o = 0.07 * p,
                  i = Math.max(1, 0.7 * G),
                  h = b + (p - t - (H >= 1 ? o + i : 0)) / 2,
                  r = c + e * a + 0.2 * e,
                  n = 0.6 * e,
                  s = Math.max(1, Math.min(0.2 * t, 1.5 * G)),
                  M = W.lineWidth;
                if (
                  ((W.fillStyle = C.stroke),
                  W.fillRect(r, h, n, s),
                  W.fillRect(r, h + t - s, n, s),
                  (W.strokeStyle = C.stroke),
                  Y(r, h + s - M, n, t - 2 * s + 2 * M),
                  a === l)
                )
                  W.fillRect(r, h, n, t);
                else if (H >= 1) {
                  W.globalAlpha = to ? 1 : 0.5;
                  let e = Math.max(1, 0.16 * n);
                  tn(r + (n - e) / 2, h + s, e, t - 2 * s), (W.globalAlpha = 1);
                }
                H >= 1 && W.fillRect(r + 0.2 * n, h + t + o, 0.6 * n, i);
              }
            } else if (36 === l) {
              let t = c + S / 2,
                e = b + p / 2,
                l = 0.38 * Math.min(S, p),
                a = 0.4 > i();
              if (((W.strokeStyle = C.stroke), a)) {
                let a = Math.round(2.1 * l);
                Y(Math.round(t - a / 2), Math.round(e - a / 2), a, a);
              } else
                W.beginPath(), W.arc(t, e, l, 0, o.gc), W.stroke(), te(t, e, l);
              for (let a = 0; a < (H ? 8 : 4); a++) {
                let o = (a * Math.PI) / (H ? 4 : 2),
                  i = a % 2 ? 0.82 : 0.7;
                W.beginPath(),
                  W.moveTo(t + Math.cos(o) * l * i, e + Math.sin(o) * l * i),
                  W.lineTo(t + Math.cos(o) * l, e + Math.sin(o) * l),
                  W.stroke();
              }
              let h =
                  6.28 * i() +
                  (y ? 0.6 * Math.sin((0, o.tC)(T, 700 * o.gc)) : 0),
                r = 0.72 * l,
                n = Math.max(1, 0.16 * l);
              (W.fillStyle = ti),
                W.beginPath(),
                W.moveTo(t + Math.cos(h) * r, e + Math.sin(h) * r),
                W.lineTo(
                  t + Math.cos(h + 1.571) * n,
                  e + Math.sin(h + 1.571) * n
                ),
                W.lineTo(
                  t + Math.cos(h - 1.571) * n,
                  e + Math.sin(h - 1.571) * n
                ),
                W.closePath(),
                W.fill(),
                (W.strokeStyle = C.stroke),
                W.beginPath(),
                W.moveTo(t - Math.cos(h) * r, e - Math.sin(h) * r),
                W.lineTo(
                  t + Math.cos(h + 1.571) * n,
                  e + Math.sin(h + 1.571) * n
                ),
                W.lineTo(
                  t + Math.cos(h - 1.571) * n,
                  e + Math.sin(h - 1.571) * n
                ),
                W.closePath(),
                W.stroke(),
                (W.fillStyle = C.face),
                W.beginPath(),
                W.arc(t, e, Math.max(1, 0.5 * n), 0, o.gc),
                W.fill(),
                (W.fillStyle = C.stroke);
            } else if (37 === l) {
              if (!A && S < 1.75 * R && p < 1.75 * R && !w(l, S, p, R)) {
                let t = (t) => Math.round(t * K) / K,
                  e = Math.min(S, p),
                  l = t(0.68 * e),
                  a = Math.max(2, t(0.17 * e)),
                  h = Math.max(0.9, 0.075 * e),
                  r = Math.max(1, 0.1 * e),
                  n = t(c + (S - l) / 2),
                  s = t(b + (p - (a + r + 2 * h)) / 2);
                (W.fillStyle = C.screen),
                  W.fillRect(n, s, l, a),
                  (W.strokeStyle = C.stroke),
                  Y(n, s, l, a);
                let M = y
                    ? ((0, o.Qj)(T, 130, 4) + Math.round(c)) % 4 != 0
                    : 0.5 > i(),
                  f = n + l - h,
                  m = s + a + r + h;
                M || to
                  ? ts(f, m, h)
                  : (W.beginPath(), W.arc(f, m, h, 0, o.gc), W.stroke());
              } else {
                let t = Math.max(2, 0.16 * p),
                  e = Math.max(2 * G, 0.16 * p),
                  l = Math.max(1, 0.7 * G),
                  a = c + 3 * G,
                  h = S - 6 * G,
                  r = Math.round(b + (p - t - (H >= 1 ? e + l : 0)) / 2),
                  n = Math.max(2, 0.08 * h),
                  s = Math.max(1, 1.1 * G),
                  M = Math.max(1.5, 1.4 * G),
                  f = a + h - n - M - s - D / 2,
                  m = f - s - D / 2 - M - a;
                (W.fillStyle = C.screen),
                  W.fillRect(a, r, m, t),
                  (W.strokeStyle = C.stroke),
                  Y(a, r, m, t),
                  (y
                    ? ((0, o.Qj)(T, 130, 4) + Math.round(c)) % 4 != 0
                    : 0.5 > i()) || to
                    ? ts(f, r + t / 2, s)
                    : (W.beginPath(),
                      W.arc(f, r + t / 2, s, 0, o.gc),
                      W.stroke()),
                  Y(a + h - n, r, n, t),
                  H >= 1 &&
                    ((W.globalAlpha = 0.5),
                    W.fillRect(a, r + t + e, 0.4 * h, l),
                    (W.globalAlpha = 1));
              }
            } else if (38 === l) {
              let t = S >= p,
                e = Math.max(
                  3,
                  Math.min(
                    t ? X(24) : $(24),
                    Math.round((t ? S : p) / Math.max(3, 2.4 * G))
                  )
                );
              W.fillStyle = C.stroke;
              let l = (t ? S : p) - 4 * G,
                a = Math.max(1, Math.round((l / e) * 0.45 * K) / K);
              for (let o = 0; o < e; o++) {
                let i =
                  Math.round((2 * G + (l * (o + 0.5)) / e - a / 2) * K) / K;
                t
                  ? W.fillRect(c + i, b + 2 * G, a, p - 4 * G)
                  : W.fillRect(c + 2 * G, b + i, S - 4 * G, a);
              }
              (W.globalAlpha = 0.3),
                t
                  ? W.fillRect(
                      c + 2 * G,
                      b + p - 3 * G,
                      S - 4 * G,
                      Math.max(1, G)
                    )
                  : W.fillRect(c + 2 * G, b + 2 * G, Math.max(1, G), p - 4 * G),
                (W.globalAlpha = 1);
            } else if (39 === l) {
              let t = Math.max(
                  J ? 2 : 1,
                  Math.min(X(6), Math.round(S / (7 * G)))
                ),
                e = S / t,
                l = Math.floor(i() * t);
              for (let a = 0; a < t; a++) {
                let t = c + e * a + 0.22 * e,
                  o = 0.56 * e,
                  i = b + 0.25 * p,
                  h = 0.5 * p;
                (W.strokeStyle = C.stroke),
                  (W.fillStyle = C.stroke),
                  a === l
                    ? (Y(t, i, o, h),
                      W.fillRect(t + 0.3 * o, i + 0.55 * h, 0.4 * o, 0.35 * h),
                      tn(t + 0.42 * o, i + 0.2 * h, 0.16 * o, 0.4 * h),
                      Y(
                        t - 0.08 * o,
                        i - Math.max(2, 0.22 * h),
                        1.16 * o,
                        Math.max(2, 0.18 * h)
                      ))
                    : (W.fillRect(t, i, o, h),
                      (W.fillStyle = C.face),
                      W.fillRect(
                        t + 1,
                        i + 0.45 * h,
                        o - 2,
                        Math.max(1, 0.6 * G)
                      ),
                      (W.fillStyle = C.stroke)),
                  H >= 1 &&
                    W.fillRect(
                      t + 0.15 * o,
                      b + 0.84 * p,
                      0.7 * o,
                      Math.max(1, 0.7 * G)
                    );
              }
            } else if (40 === l) {
              if (!A && S < 1.75 * R && p < 1.75 * R && !w(l, S, p, R)) {
                let t = Math.min(S, p),
                  l = Math.round(0.74 * t * K) / K,
                  a = Math.round(Math.min(0.54 * t, (l / 2) * 1.5) * K);
                (Math.round(p * K) - a) % 2 && (a -= 1), (a /= K);
                let h = Math.round((c + (S - l) / 2) * K) / K,
                  r = b + (p - a) / 2;
                (W.fillStyle = C.screen),
                  W.fillRect(h, r, l, a),
                  (W.strokeStyle = C.stroke),
                  Y(h, r, l, a);
                let n = l / 2,
                  s = String(
                    (Math.floor(100 * i()) + (y ? (0, o.Ky)(T, 500) : 0)) % 100
                  ).padStart(2, "0"),
                  M = W.lineWidth;
                W.save(),
                  W.beginPath(),
                  W.rect(h + M, r + M, l - 2 * M, a - 2 * M),
                  W.clip();
                for (let t = 0; t < 2; t++) {
                  let l = y && 1 === t ? (0, o.lV)(T, 500) * a * 0.9 : 0,
                    i = 0.62 * a,
                    M = Math.min(0.55 * n, i / 1.5);
                  if (M >= 2.5) {
                    let o = h + n * t + (n - 0.66 * M) / 2;
                    e.seg7(s[t], o, r + (a - i) / 2 - l, M, i, C.glass),
                      l &&
                        e.seg7(
                          String((Number(s[t]) + 1) % 10),
                          o,
                          r + (a - i) / 2 - l + 0.9 * a,
                          M,
                          i,
                          C.glass
                        );
                  } else
                    (W.fillStyle = C.glass),
                      W.fillRect(
                        h + n * t + 0.35 * n,
                        r + 0.3 * a,
                        Math.max(1, 0.3 * n),
                        0.4 * a
                      );
                  t &&
                    ((W.strokeStyle = C.stroke),
                    (W.globalAlpha = 0.6),
                    W.beginPath(),
                    W.moveTo(h + n * t + O(), r),
                    W.lineTo(h + n * t + O(), r + a),
                    W.stroke(),
                    (W.globalAlpha = 1));
                }
                W.restore();
              } else {
                let t = Math.max(
                    J ? 3 : 2,
                    Math.min(X(6), Math.floor((S - 6 * G) / (5 * G)))
                  ),
                  l = Math.round(c + 3 * G),
                  a = S - (l - c) * 2,
                  h = Math.round(
                    Math.min(Math.max(p - 6 * G, 0.68 * p), (a / t) * 1.5)
                  );
                (p - h) % 2 && (h -= 1);
                let r = b + (p - h) / 2;
                (W.fillStyle = C.screen),
                  W.fillRect(l, r, a, h),
                  (W.strokeStyle = C.stroke),
                  Y(l, r, a, h);
                let n = a / t,
                  s = String(
                    (Math.floor(1e5 * i()) + (y ? (0, o.Ky)(T, 500) : 0)) %
                      10 ** t
                  ).padStart(t, "0"),
                  M = W.lineWidth;
                W.save(),
                  W.beginPath(),
                  W.rect(l + M, r + M, a - 2 * M, h - 2 * M),
                  W.clip();
                for (let a = 0; a < t; a++) {
                  let i = y && a === t - 1 ? (0, o.lV)(T, 500) * h * 0.9 : 0,
                    M = 0.6 * h,
                    f = Math.min(0.55 * n, M / 1.5);
                  if (f >= 3) {
                    let t = l + n * a + (n - 0.66 * f) / 2;
                    e.seg7(s[a], t, r + (h - M) / 2 - i, f, M, C.glass),
                      i &&
                        e.seg7(
                          String((Number(s[a]) + 1) % 10),
                          t,
                          r + (h - M) / 2 - i + 0.9 * h,
                          f,
                          M,
                          C.glass
                        );
                  } else
                    (W.fillStyle = C.glass),
                      W.fillRect(
                        l + n * a + 0.35 * n,
                        r + 0.3 * h,
                        Math.max(1, 0.3 * n),
                        0.4 * h
                      );
                  a &&
                    ((W.strokeStyle = C.stroke),
                    (W.globalAlpha = 0.6),
                    W.beginPath(),
                    W.moveTo(l + n * a + O(), r),
                    W.lineTo(l + n * a + O(), r + h),
                    W.stroke(),
                    (W.globalAlpha = 1));
                }
                W.restore();
              }
            } else if (41 === l) {
              if (A || !(S >= 2.5 * p) || w(l, S, p, R)) {
                let t = c + 3 * G,
                  e = S - 6 * G,
                  l = b + 0.3 * p,
                  a = Math.max(3, 0.4 * p),
                  h = a / 2;
                (W.strokeStyle = C.stroke),
                  W.beginPath(),
                  W.moveTo(t + h, l),
                  W.lineTo(t + e - h, l),
                  W.arc(t + e - h, l + h, h, -1.571, 1.571),
                  W.lineTo(t + h, l + a),
                  W.arc(t + h, l + h, h, 1.571, 4.712),
                  W.closePath(),
                  W.stroke(),
                  (W.fillStyle = C.stroke),
                  W.fillRect(
                    t + 0.44 * e,
                    l - Math.max(1, G),
                    Math.max(1, 0.5 * G),
                    a + 2 * Math.max(1, G)
                  ),
                  W.fillRect(
                    t + 0.56 * e,
                    l - Math.max(1, G),
                    Math.max(1, 0.5 * G),
                    a + 2 * Math.max(1, G)
                  );
                let r =
                    t +
                    e *
                      (0.5 +
                        (y
                          ? 0.22 * Math.sin((0, o.tC)(T, 900 * o.gc) + c)
                          : (i() - 0.5) * 0.4)),
                  n = Math.max(0.9 * a, Math.min(0.16 * e, 1.6 * a));
                (W.fillStyle = ti),
                  W.beginPath(),
                  W.ellipse(r, l + h, n / 2, 0.7 * h, 0, 0, o.gc),
                  W.fill(),
                  (W.fillStyle = C.face),
                  W.beginPath(),
                  W.ellipse(
                    r - 0.12 * n,
                    l + 0.8 * h,
                    Math.max(0.6, 0.12 * n),
                    Math.max(0.5, 0.18 * h),
                    0,
                    0,
                    o.gc
                  ),
                  W.fill(),
                  (W.fillStyle = C.stroke);
              } else {
                let t = (t) => Math.round(t * K) / K,
                  e = Math.max(3, t(Math.min(0.42 * p, 0.5 * R))),
                  l = c + 3 * G,
                  a = S - 6 * G,
                  h = t(b + (p - e) / 2),
                  r = e / 2;
                (W.strokeStyle = C.stroke),
                  W.beginPath(),
                  W.moveTo(l + r, h),
                  W.lineTo(l + a - r, h),
                  W.arc(l + a - r, h + r, r, -1.571, 1.571),
                  W.lineTo(l + r, h + e),
                  W.arc(l + r, h + r, r, 1.571, 4.712),
                  W.closePath(),
                  W.stroke();
                let n = l + a / 2,
                  s = Math.max(1 / K, t(0.5 * G)),
                  M = Math.max(1, G);
                (W.fillStyle = C.stroke), (W.globalAlpha = 0.35);
                for (let o = 1; o < 10; o++)
                  if (4 !== o && 6 !== o) {
                    let i = t(l + r + ((a - 2 * r) * o) / 10);
                    W.fillRect(
                      i,
                      h + e - Math.max(1, 0.3 * e),
                      s,
                      Math.max(1, 0.3 * e)
                    );
                  }
                W.globalAlpha = 1;
                let f = Math.min(0.18 * a, 2.4 * e),
                  m = 0.55 * f;
                W.fillRect(t(n - m), h - M, s, e + 2 * M),
                  W.fillRect(t(n + m), h - M, s, e + 2 * M);
                let g =
                  n +
                  a *
                    (y
                      ? 0.05 * Math.sin((0, o.tC)(T, 900 * o.gc) + c) +
                        0.02 * Math.sin((0, o.tC)(T, 230 * o.gc))
                      : (i() - 0.5) * 0.12);
                (W.fillStyle = ti),
                  W.beginPath(),
                  W.ellipse(g, h + r, f / 2, 0.66 * r, 0, 0, o.gc),
                  W.fill(),
                  (W.fillStyle = C.face),
                  W.beginPath(),
                  W.ellipse(
                    g - 0.18 * f,
                    h + 0.78 * r,
                    Math.max(0.6, 0.1 * f),
                    Math.max(0.5, 0.16 * r),
                    0,
                    0,
                    o.gc
                  ),
                  W.fill(),
                  (W.fillStyle = C.stroke);
              }
            } else if (42 === l) {
              if (!A && S < 1.75 * R && p < 1.75 * R && !w(l, S, p, R)) {
                let t = (t) => Math.round(t * K) / K,
                  e = Math.min(S, p),
                  l = t(0.72 * e),
                  a = t(c + (S - l) / 2),
                  h = t(b + (p - l) / 2);
                (W.strokeStyle = C.stroke),
                  (W.globalAlpha = 0.35),
                  Y(a, h, l, l),
                  (W.globalAlpha = 0.25),
                  (W.lineWidth = 1);
                let r = Math.max(1 / K, t(0.06 * e)),
                  n = l / 3,
                  s = y ? (0, o.lV)(T, 40 * n) * n : 0;
                for (let t = 0; t <= 3; t++) {
                  let e = h + s + n * t;
                  e >= h + l - 0.5 ||
                    e <= h + 0.5 ||
                    (W.beginPath(),
                    W.moveTo(a, Math.round(e) + O()),
                    W.lineTo(a + l - r, Math.round(e) + O()),
                    W.stroke());
                }
                (W.globalAlpha = 1),
                  (W.lineWidth = D),
                  W.save(),
                  W.beginPath(),
                  W.rect(a, h, l - r, l),
                  W.clip(),
                  (W.strokeStyle = ti),
                  (W.lineWidth = Math.max(1, D)),
                  (W.lineJoin = "round"),
                  W.beginPath();
                for (let t = 0; t <= 7; t++) {
                  let e = h + (l * t) / 7,
                    n =
                      a +
                      (l - r) *
                        (0.5 +
                          0.34 *
                            (y
                              ? Math.sin(1.3 * t + (0, o.tC)(T, 300 * o.gc))
                              : Math.sin(1.7 * t + 6 * i())));
                  t ? W.lineTo(n, e) : W.moveTo(n, e);
                }
                W.stroke(),
                  W.restore(),
                  (W.strokeStyle = C.stroke),
                  (W.fillStyle = C.stroke),
                  W.fillRect(a + l - r, h, r, l);
              } else {
                let t = c + 2 * G,
                  e = S - 4 * G,
                  l = b + 2 * G,
                  a = p - 4 * G;
                (W.strokeStyle = C.stroke),
                  (W.globalAlpha = 0.25),
                  (W.lineWidth = 1);
                let h = Math.max(2, 1.5 * G),
                  r = Math.max(2, Math.round(a / Math.max(3, 2.2 * G))),
                  n = a / r,
                  s = y ? (0, o.lV)(T, 40 * n) * n : 0,
                  M = Math.max(1, Math.round((e - h) / (2 * n))),
                  f = (e - h) / M;
                for (let o = 0; o <= r; o++) {
                  let i = l + s + n * o;
                  if (i > l + a + 0.01) break;
                  W.beginPath(),
                    W.moveTo(t, Math.round(i) + O()),
                    W.lineTo(t + e, Math.round(i) + O()),
                    W.stroke();
                }
                for (let e = 0; e < M; e++) {
                  let o = t + f * e;
                  W.beginPath(),
                    W.moveTo(Math.round(o) + O(), l),
                    W.lineTo(Math.round(o) + O(), l + a),
                    W.stroke();
                }
                (W.globalAlpha = 1),
                  (W.lineWidth = D),
                  W.save(),
                  W.beginPath(),
                  W.rect(t, l, e, a),
                  W.clip();
                let m = Math.max(8, Math.round(a / 3));
                (W.strokeStyle = ti), W.beginPath();
                for (let h = 0; h <= m; h++) {
                  let r = l + (a * h) / m,
                    n =
                      t +
                      e *
                        (0.55 +
                          0.3 *
                            (y
                              ? Math.sin(0.7 * h + (0, o.tC)(T, 300 * o.gc))
                              : i() - 0.5));
                  h ? W.lineTo(n, r) : W.moveTo(n, r);
                }
                W.stroke(),
                  W.restore(),
                  (W.strokeStyle = C.stroke),
                  (W.fillStyle = C.stroke),
                  W.fillRect(t + e - h, l, h, a);
              }
            } else if (43 === l) {
              let t = c + 2.5 * G,
                e = b + 2.5 * G,
                l = S - 5 * G,
                a = p - 5 * G;
              (W.strokeStyle = C.stroke), Y(t, e, l, a);
              let h = Math.max(1, 1.2 * G),
                r = t + l / 2,
                n = e + a - W.lineWidth - 1.6 * h,
                s = Math.max(2, Math.min(0.46 * l, n - e - W.lineWidth - G));
              if (H >= 1)
                for (let t = 0; t <= 6; t++) {
                  let e = Math.PI * (1.15 + (0.7 * t) / 6),
                    l = t % 3 ? 0.88 : 0.8;
                  W.beginPath(),
                    W.moveTo(r + Math.cos(e) * s * l, n + Math.sin(e) * s * l),
                    W.lineTo(r + Math.cos(e) * s, n + Math.sin(e) * s),
                    W.stroke();
                }
              let M =
                Math.PI *
                (1.15 +
                  0.7 *
                    (y
                      ? 0.5 + 0.45 * Math.sin((0, o.tC)(T, 300 * o.gc) + c)
                      : i()));
              (W.strokeStyle = ti),
                W.beginPath(),
                W.moveTo(r, n),
                W.lineTo(
                  r + Math.cos(M) * s * 0.92,
                  n + Math.sin(M) * s * 0.92
                ),
                W.stroke(),
                (W.strokeStyle = C.stroke),
                (W.fillStyle = C.stroke),
                W.beginPath(),
                W.arc(r, n, h, 0, o.gc),
                W.fill();
            } else if (44 === l && !A && (S * p) / (R * R) > 3.2) {
              let t = S >= 1.12 * p ? 3 : 2,
                e = 3 * G,
                l = Math.max(2, Math.round(1.8 * G)),
                a = Math.floor(
                  Math.min(
                    (S - 2 * e - l * (t - 1)) / t,
                    (p - 2 * e - 1 * l) / 2
                  )
                ),
                h = Math.round(c + (S - (a * t + l * (t - 1))) / 2),
                r = Math.round(b + (p - (2 * a + 1 * l)) / 2),
                n = y ? (0, o.Qj)(T, 700, 2 * t) : Math.floor(i() * t * 2),
                s = Math.max(1, 0.12 * a),
                M = W.lineWidth,
                f = (t, e, l, a, o) => {
                  W.beginPath(),
                    W.moveTo(t + o, e),
                    W.lineTo(t + l - o, e),
                    W.quadraticCurveTo(t + l, e, t + l, e + o),
                    W.lineTo(t + l, e + a - o),
                    W.quadraticCurveTo(t + l, e + a, t + l - o, e + a),
                    W.lineTo(t + o, e + a),
                    W.quadraticCurveTo(t, e + a, t, e + a - o),
                    W.lineTo(t, e + o),
                    W.quadraticCurveTo(t, e, t + o, e),
                    W.closePath();
                };
              for (let e = 0; e < 2; e++)
                for (let o = 0; o < t; o++) {
                  let i = e * t + o === n,
                    c = h + (a + l) * o,
                    m = r + (a + l) * e,
                    g = 0.14 * a;
                  (W.strokeStyle = C.stroke),
                    f(c + M / 2, m + M / 2, a - M, a - M, s),
                    W.stroke(),
                    (W.fillStyle = C.stroke),
                    f(c + g, m + g, a - 2 * g, a - 2 * g, 0.7 * s),
                    W.fill();
                  let u = Math.max(1, 0.7 * G);
                  (W.fillStyle = i && to ? C.glass : C.face),
                    W.fillRect(c + 0.32 * a, m + 0.5 * a - u, 0.36 * a, 2 * u);
                }
              W.fillStyle = C.stroke;
            } else if (44 === l) {
              let t =
                  Math.min(S, p) *
                  (0.62 + (y ? 0.04 * Math.sin((0, o.tC)(T, 200 * o.gc)) : 0)),
                e = c + (S - t) / 2,
                l = b + (p - t) / 2,
                a = Math.max(1, 0.12 * t),
                i = (t, e, l, a, o) => {
                  W.beginPath(),
                    W.moveTo(t + o, e),
                    W.lineTo(t + l - o, e),
                    W.quadraticCurveTo(t + l, e, t + l, e + o),
                    W.lineTo(t + l, e + a - o),
                    W.quadraticCurveTo(t + l, e + a, t + l - o, e + a),
                    W.lineTo(t + o, e + a),
                    W.quadraticCurveTo(t, e + a, t, e + a - o),
                    W.lineTo(t, e + o),
                    W.quadraticCurveTo(t, e, t + o, e),
                    W.closePath();
                },
                h = W.lineWidth;
              (W.strokeStyle = C.stroke),
                i(e + h / 2, l + h / 2, t - h, t - h, a),
                W.stroke(),
                (W.fillStyle = C.stroke),
                i(e + 0.14 * t, l + 0.14 * t, 0.72 * t, 0.72 * t, 0.7 * a),
                W.fill(),
                (W.fillStyle = to ? C.glass : C.face),
                W.fillRect(
                  e + 0.32 * t,
                  l + 0.5 * t - Math.max(1, 0.7 * G),
                  0.36 * t,
                  2 * Math.max(1, 0.7 * G)
                ),
                (W.fillStyle = C.stroke);
            } else if (45 === l) {
              if (!A && S < 1.75 * R && p < 1.75 * R && !w(l, S, p, R)) {
                let t = (t) => Math.round(t * K) / K,
                  e = Math.min(S, p),
                  l = t(Math.max(1.5, 0.12 * e)),
                  a = t(e - 2 * l),
                  h = t(c + (S - a) / 2),
                  r = t(b + (p - a) / 2);
                tt(h, r, a, a);
                let n = i(),
                  s = 3e3 + 2e3 * i(),
                  M = Math.max(1, 0.12 * a),
                  f = a - 2 * M;
                ta(
                  h + M,
                  r + a - M,
                  f,
                  -1.5708,
                  0,
                  -1.5708 + 1.5708 * (y ? (n + (0, o.lV)(T, s)) % 1 : n),
                  1
                );
              } else {
                tt(c + 2 * G, b + 2 * G, S - 4 * G, p - 4 * G);
                let t = 0.5 > i(),
                  e = i(),
                  l = 3e3 + 2e3 * i(),
                  a = b + p - 3.5 * G,
                  h = t ? c + S / 2 : c + 3.5 * G,
                  r = t
                    ? Math.min((S - 7 * G) / 2, p - 7 * G)
                    : Math.min(S, p) - 7 * G,
                  n = t ? -3.1416 : -1.5708,
                  s = t ? 3.1416 : 1.5708,
                  M = y ? (e + (0, o.lV)(T, l)) % 1 : e;
                ta(
                  h,
                  a,
                  r,
                  n,
                  n + s,
                  n + s * (t ? (M < 0.5 ? 2 * M : 2 - 2 * M) : M),
                  H ? 3 : 1
                );
              }
            } else if (
              47 === l &&
              !A &&
              S < 1.45 * R &&
              p < 1.45 * R &&
              !w(l, S, p, R)
            ) {
              let t = Math.max(2, Math.round(2.5 * G));
              tt(c + t, b + t, S - 2 * t, p - 2 * t);
              let e = c + t + 1,
                l = b + t + 1,
                a = S - 2 * t - 2,
                h = p - 2 * t - 2,
                r = 0.5 > i(),
                n = e + a * (r ? 0.8 : 0.2),
                s = e + a * (r ? 0.24 : 0.76),
                M = l + 0.8 * h,
                f = l + h * (0.64 + 0.08 * i()),
                m = 0.62 * h,
                g = Math.max(
                  1.5,
                  Math.min(s - e, e + a - s, f - l, l + h - f) - 1
                );
              W.save(), W.beginPath(), W.rect(e, l, a, h), W.clip();
              let u = y
                  ? (((0, o.lV)(T, 4200) + i()) % 1) * 1.45
                  : 0.8 + 0.12 * i(),
                d = Math.min(1, u),
                k = (t) => [
                  n + (s - n) * t,
                  M + (f - M) * t - Math.sin(t * Math.PI) * m,
                ];
              (W.strokeStyle = C.glass),
                (W.fillStyle = C.glass),
                (W.lineWidth = 1),
                (W.globalAlpha = 0.3);
              let x = Math.round(l + 0.88 * h) + O(1);
              W.beginPath(),
                W.moveTo(e, x),
                W.lineTo(e + a, x),
                W.stroke(),
                (W.lineWidth = Math.max(1, D)),
                (W.lineCap = "round"),
                (W.lineJoin = "round"),
                (W.globalAlpha =
                  d < 1 ? 0.9 : Math.max(0.25, 0.9 - (u - 1) * 1.6));
              let P = Math.max(1, Math.round(16 * d));
              W.beginPath();
              for (let t = 0; t <= P; t++) {
                let [e, l] = k(t / 16);
                t ? W.lineTo(e, l) : W.moveTo(e, l);
              }
              if (
                (W.stroke(),
                (W.globalAlpha = 0.9),
                W.beginPath(),
                W.arc(n, M, Math.max(0.8, 0.8 * G), 0, o.gc),
                W.fill(),
                d < 1)
              ) {
                let [t, e] = k(d);
                (W.globalAlpha = 1),
                  W.beginPath(),
                  W.arc(t, e, Math.max(1.2, 1.4 * G), 0, o.gc),
                  W.fill();
              } else {
                let t = u - 1;
                (W.lineWidth = 1),
                  (W.globalAlpha = Math.max(0, 0.9 - 2.2 * t)),
                  W.beginPath(),
                  W.arc(
                    s,
                    f,
                    Math.min(g, Math.max(1.5, 1.4 * G) + (t / 0.45) * g),
                    0,
                    o.gc
                  ),
                  W.stroke(),
                  (W.globalAlpha = Math.max(0.3, 1 - 1.5 * t)),
                  W.beginPath(),
                  W.arc(s, f, Math.max(1, 1.1 * G), 0, o.gc),
                  W.fill();
              }
              W.restore(),
                (W.globalAlpha = 1),
                (W.lineWidth = D),
                (W.lineCap = "butt"),
                (W.fillStyle = C.stroke),
                (W.strokeStyle = C.stroke);
            } else if (47 === l) {
              tt(c + 2 * G, b + 2 * G, S - 4 * G, p - 4 * G);
              let t = c + 3 * G,
                e = b + 3 * G,
                l = S - 6 * G,
                a = p - 6 * G,
                h = Math.min(l, a) >= 24;
              W.save(),
                W.beginPath(),
                W.rect(t, e, l, a),
                W.clip(),
                (W.strokeStyle = C.glass),
                (W.globalAlpha = 0.22),
                (W.lineWidth = 1);
              let r = Math.max(4, l / (2 === H ? 8 : 4)),
                n = Math.max(4, a / (2 === H ? 4 : 2));
              for (let o = t + r; o < t + l - 1; o += r)
                W.beginPath(),
                  W.moveTo(Math.round(o) + O(), e),
                  W.lineTo(Math.round(o) + O(), e + a),
                  W.stroke();
              for (let o = e + n; o < e + a - 1; o += n)
                W.beginPath(),
                  W.moveTo(t, Math.round(o) + O()),
                  W.lineTo(t + l, Math.round(o) + O()),
                  W.stroke();
              if (h)
                for (let o of ((W.globalAlpha = 0.35), [0, 1])) {
                  W.beginPath();
                  let h = t + l * (o ? 0.62 : 0.08),
                    r = 0.3 * l;
                  for (let t = 0; t <= 8; t++) {
                    let l = h + (r * t) / 8,
                      o = e + a * (0.25 + 0.5 * i());
                    t ? W.lineTo(l, o) : W.moveTo(l, o);
                  }
                  W.stroke();
                }
              (W.globalAlpha = 1),
                (W.lineWidth = D),
                (W.lineJoin = "round"),
                (W.lineCap = "round");
              let s = 2 === H ? 4 : 1 === H ? 3 : 2;
              for (let r = 0; r < s; r++) {
                let n = t + l * (0.08 + 0.24 * i()),
                  M = e + a * (0.25 + 0.55 * i()),
                  f = t + l * (0.6 + 0.26 * i()),
                  c = e + a * (0.25 + 0.5 * i()),
                  m = Math.max(
                    0,
                    Math.min(a * (0.35 + 0.35 * i()), (M + c) / 2 - e - 0.1 * a)
                  ),
                  g = y
                    ? (((0, o.lV)(T, 5200) + r / s) % 1) * 1.5
                    : 0.5 + (r / s) * 1 + 0.2 * i(),
                  u = Math.min(1, g),
                  d = Math.max(1, Math.round(24 * u)),
                  k = (t) => [
                    n + (f - n) * t,
                    M + (c - M) * t - Math.sin(t * Math.PI) * m,
                  ];
                (W.strokeStyle = C.glass),
                  (W.fillStyle = C.glass),
                  (W.globalAlpha =
                    u < 1 ? 0.85 : Math.max(0.2, 0.85 - (g - 1) * 1.3)),
                  W.beginPath();
                for (let t = 0; t <= d; t++) {
                  let [e, l] = k(t / 24);
                  t ? W.lineTo(e, l) : W.moveTo(e, l);
                }
                if (
                  (W.stroke(),
                  (W.globalAlpha = 0.9),
                  W.beginPath(),
                  W.arc(n, M, Math.max(1, 0.9 * G), 0, o.gc),
                  W.fill(),
                  u < 1)
                ) {
                  let [t, e] = k(u);
                  W.beginPath(),
                    W.arc(t, e, Math.max(1.2, 1.2 * G), 0, o.gc),
                    W.fill();
                } else {
                  let t = g - 1,
                    e = Math.max(2, 1.6 * G);
                  (W.lineWidth = Math.max(1, 0.8 * D)),
                    (W.globalAlpha = Math.max(0, 0.9 - 1.6 * t)),
                    W.beginPath(),
                    W.arc(f, c, e + t * a * 0.32, 0, o.gc),
                    W.stroke(),
                    h &&
                      ((W.globalAlpha = Math.max(0, 0.5 - 1.2 * t)),
                      W.beginPath(),
                      W.arc(f, c, e + t * a * 0.18, 0, o.gc),
                      W.stroke()),
                    (W.globalAlpha = Math.max(0.25, 1 - t)),
                    W.beginPath(),
                    W.arc(f, c, Math.max(1.2, 1.2 * G), 0, o.gc),
                    W.fill(),
                    (W.lineWidth = D);
                }
              }
              W.restore(),
                (W.globalAlpha = 1),
                (W.fillStyle = C.stroke),
                (W.strokeStyle = C.stroke);
            } else if (
              48 === l &&
              !A &&
              S < 1.45 * R &&
              p < 1.45 * R &&
              !w(l, S, p, R)
            ) {
              let t = Math.max(2, Math.round(2.5 * G));
              tt(c + t, b + t, S - 2 * t, p - 2 * t);
              let e = c + t + 1,
                l = b + t + 1,
                a = S - 2 * t - 2,
                h = p - 2 * t - 2;
              (W.strokeStyle = C.glass),
                (W.fillStyle = C.glass),
                (W.lineWidth = 1),
                (W.globalAlpha = 0.3);
              let r = Math.round(l + h / 2) + O(1);
              W.beginPath(), W.moveTo(e, r), W.lineTo(e + a, r), W.stroke();
              let n = i() * o.gc,
                s = (t) => [
                  e + a * (0.16 + 0.68 * t),
                  l + h * (0.78 - 0.56 * t) + Math.sin(n + t * o.gc) * h * 0.05,
                ];
              W.save(), W.beginPath(), W.rect(e, l, a, h), W.clip();
              let M = y ? 0.2 + 0.6 * (0, o.lV)(T, 7e3) : 0.5;
              (W.lineCap = "round"),
                (W.lineJoin = "round"),
                (W.globalAlpha = 0.95),
                (W.lineWidth = Math.max(1, 0.8 * D)),
                W.beginPath();
              for (let t = 0; t <= 16; t++) {
                let [e, l] = s((t / 16) * M);
                t ? W.lineTo(e, l) : W.moveTo(e, l);
              }
              W.stroke(),
                (W.globalAlpha = 0.5),
                (W.lineWidth = 1),
                W.setLineDash([1, Math.max(2, 1.6 * G)]),
                W.beginPath();
              for (let t = 0; t <= 16; t++) {
                let [e, l] = s(M + (t / 16) * (1 - M));
                t ? W.lineTo(e, l) : W.moveTo(e, l);
              }
              W.stroke(), W.setLineDash([]);
              let [f, m] = s(M),
                g = Math.max(1.4, 1.8 * G);
              (W.globalAlpha = 1),
                (W.lineWidth = Math.max(1, 0.8 * D)),
                W.beginPath(),
                W.arc(f, m, g, 0, o.gc),
                W.stroke(),
                g >= 2.5 &&
                  (W.beginPath(),
                  W.moveTo(f - 1.7 * g, m),
                  W.lineTo(f - 1.2 * g, m),
                  W.moveTo(f + 1.2 * g, m),
                  W.lineTo(f + 1.7 * g, m),
                  W.moveTo(f, m - 1.7 * g),
                  W.lineTo(f, m - 1.2 * g),
                  W.moveTo(f, m + 1.2 * g),
                  W.lineTo(f, m + 1.7 * g),
                  W.stroke()),
                W.beginPath(),
                W.arc(f, m, Math.max(0.6, 0.32 * g), 0, o.gc),
                W.fill(),
                W.restore(),
                (W.lineWidth = D),
                (W.lineCap = "butt"),
                (W.fillStyle = C.stroke),
                (W.strokeStyle = C.stroke);
            } else if (48 === l) {
              tt(c + 2 * G, b + 2 * G, S - 4 * G, p - 4 * G);
              let t = c + 3 * G,
                l = b + 3 * G,
                a = S - 6 * G,
                h = p - 6 * G,
                r = Math.min(a, h) >= 24;
              if (
                (W.save(),
                W.beginPath(),
                W.rect(t, l, a, h),
                W.clip(),
                (W.strokeStyle = C.glass),
                (W.lineWidth = 1),
                r)
              ) {
                let e = Math.max(6, a / 8),
                  o = Math.max(6, h / 4);
                W.globalAlpha = 0.14;
                for (let o = t + e; o < t + a - 1; o += e)
                  W.beginPath(),
                    W.moveTo(Math.round(o) + O(), l),
                    W.lineTo(Math.round(o) + O(), l + h),
                    W.stroke();
                for (let e = l + o; e < l + h - 1; e += o)
                  W.beginPath(),
                    W.moveTo(t, Math.round(e) + O()),
                    W.lineTo(t + a, Math.round(e) + O()),
                    W.stroke();
              }
              (W.globalAlpha = 0.35),
                W.beginPath(),
                W.moveTo(t, Math.round(l + h / 2) + O()),
                W.lineTo(t + a, Math.round(l + h / 2) + O()),
                W.stroke();
              let n = i() * o.gc,
                s = Math.max(0.5, Math.min(2, (a / h) * 0.7)),
                M = Math.max(
                  0,
                  Math.min(0.3 * h, h / 2 - 2 * Math.max(2, 1.6 * G))
                ),
                f = (e) => [
                  t + a * e,
                  l + h / 2 + Math.sin(n + e * o.gc * s) * M,
                ],
                m = y ? (0, o.lV)(T, 9e3) : 0.3 + 0.5 * i(),
                g = Math.max(16, Math.round(a / 2));
              (W.lineJoin = "round"), (W.lineCap = "round");
              let u = () => {
                W.beginPath();
                for (let t = 0; t <= g; t++) {
                  let [e, l] = f((t / g) * m);
                  t ? W.lineTo(e, l) : W.moveTo(e, l);
                }
              };
              r &&
                ((W.globalAlpha = 0.18),
                (W.lineWidth = 3 * D),
                u(),
                W.stroke()),
                (W.globalAlpha = 0.95),
                (W.lineWidth = Math.max(1, 0.9 * D)),
                u(),
                W.stroke(),
                (W.globalAlpha = 0.5),
                (W.lineWidth = 1),
                W.setLineDash([2, Math.max(3, 2 * G)]),
                W.beginPath();
              for (let t = 0; t <= g; t++) {
                let [e, l] = f(m + (t / g) * (1 - m));
                t ? W.lineTo(e, l) : W.moveTo(e, l);
              }
              W.stroke(), W.setLineDash([]);
              let [k, x] = f(m),
                P = Math.max(2, 1.6 * G);
              if (
                ((W.globalAlpha = 1),
                (W.lineWidth = Math.max(1, 0.8 * D)),
                W.beginPath(),
                W.arc(k, x, P, 0, o.gc),
                W.stroke(),
                W.beginPath(),
                W.moveTo(k - 1.8 * P, x),
                W.lineTo(k - 0.6 * P, x),
                W.moveTo(k + 0.6 * P, x),
                W.lineTo(k + 1.8 * P, x),
                W.moveTo(k, x - 1.8 * P),
                W.lineTo(k, x - 0.6 * P),
                W.moveTo(k, x + 0.6 * P),
                W.lineTo(k, x + 1.8 * P),
                W.stroke(),
                (W.fillStyle = C.glass),
                W.beginPath(),
                W.arc(k, x, Math.max(0.8, 0.3 * P), 0, o.gc),
                W.fill(),
                r && a > 30 * G)
              ) {
                let o = tl(d).slice(0, 3);
                e.pix(
                  o,
                  Math.min(t + a - e.pixW(o, 1) - 2, k + 2.2 * P),
                  Math.max(l + 2, x - 2.6 * P),
                  1,
                  C.glass
                );
              }
              W.restore(),
                (W.lineWidth = D),
                (W.fillStyle = C.stroke),
                (W.globalAlpha = 1);
            } else if (
              49 === l &&
              !A &&
              S < 1.45 * R &&
              p < 1.45 * R &&
              !w(l, S, p, R)
            ) {
              let t = Math.max(2, Math.round(2.5 * G)),
                l = c + t,
                a = b + t,
                h = S - 2 * t,
                r = p - 2 * t,
                n = y ? 5 - (0, o.Qj)(T, 1200, 5) : 1 + Math.floor(5 * i()),
                s = to ? C.screen : C.face;
              tn(l + tr, a + tr, h - 2 * tr, r - 2 * tr);
              let M = String(n),
                f = (t) => Math.round(t * K) / K,
                m = Math.max(
                  1 / K,
                  Math.floor(((r - 2 * tr) * 0.6 * K) / 5) / K
                );
              e.pix(
                M,
                f(l + (h - e.pixW(M, m)) / 2),
                f(a + (r - 5 * m) / 2),
                m,
                s
              ),
                (W.fillStyle = C.stroke);
            } else if (49 === l) {
              let t = Math.round(2 * G),
                l = Math.max(2, 1.2 * G),
                a = S > 1.6 * p,
                h = a ? (S - 2 * t - 4 * l) / 5 : S - 2 * t,
                r = a ? p - 2 * t : (p - 2 * t - 4 * l) / 5,
                n = y ? 4 - (0, o.Qj)(T, 1200, 5) : Math.floor(5 * i()),
                s = r >= 9;
              for (let o = 0; o < 5; o++) {
                let i = o === n;
                (W.strokeStyle = C.stroke),
                  (W.fillStyle = C.stroke),
                  (W.lineWidth = !a && Math.floor(r) * K < 14 ? 1 / K : 1);
                let M = Math.max(1, Math.floor(r)),
                  f = (p - 2 * t - 5 * M) / 4,
                  m = a ? Math.round(c + t + (h + l) * o) : c + t,
                  g = a ? b + t : Math.round(b + t + (M + f) * o),
                  u = a ? Math.round(c + t + (h + l) * o + h) - m : h,
                  d = a ? r : M;
                if (i) {
                  let t = to ? 1 : 0;
                  t && ((W.fillStyle = C.screen), W.fillRect(m, g, u, d)),
                    (W.fillStyle = ti),
                    W.fillRect(m + t, g + t, u - 2 * t, Math.max(1, d - 2 * t)),
                    (W.fillStyle = C.stroke);
                } else
                  (W.globalAlpha = 0.75),
                    Y(m, g, u, d),
                    (W.globalAlpha = 1),
                    s &&
                      d >= 6 &&
                      ((W.globalAlpha = 0.25),
                      W.fillRect(m + 1, g + d - 2, u - 2, 1),
                      (W.globalAlpha = 1));
                let k = Math.min(0.7 * r, h * (a ? 1.05 : 0.5)),
                  x = k / 1.5,
                  S = i ? (to ? C.screen : C.face) : C.stroke,
                  y = ["CRIT", "HI", "MID", "LOW", "MIN"][o],
                  T = Math.max(3, Math.round(2.5 * G));
                if (k >= 9) {
                  let t = !a && s && u > 4.5 * k,
                    l = Math.max(
                      1,
                      Math.floor(Math.min(k / 5, (0.5 * u) / 20))
                    ),
                    i = t ? m + T : m + (u - 0.66 * x) / 2;
                  e.seg7(String(5 - o), i, g + (d - k) / 2, x, k, S),
                    t &&
                      l >= 1 &&
                      e.pix(
                        y,
                        Math.round(m + u - T - e.pixW(y, l)),
                        Math.round(g + (d - 5 * l) / 2),
                        l,
                        S
                      );
                } else {
                  let t = (t) => Math.round(t * K) / K,
                    l = Math.floor(Math.min((r - 2) / 5, (u - 2) / 3) * K) / K;
                  if (l * K >= 1) {
                    let i = String(5 - o),
                      h = t(g + (d - 5 * l) / 2),
                      r =
                        !a && u >= 2 * T + e.pixW(i, l) + e.pixW(y, l) + 6 * l;
                    e.pix(
                      i,
                      r ? m + T : t(m + (u - e.pixW(i, l)) / 2),
                      h,
                      l,
                      S
                    ),
                      r && e.pix(y, t(m + u - T - e.pixW(y, l)), h, l, S);
                  }
                }
              }
              (W.lineWidth = D), (W.fillStyle = C.stroke);
            } else if (50 === l) {
              let t = Math.max(4, 5 * G),
                l = Math.max(2, Math.min(X(12), Math.floor((S - 4 * G) / t))),
                a = Math.max(
                  1,
                  Math.min($(4), Math.floor((p - 4 * G) / (1.3 * t)))
                ),
                h = (S - 4 * G) / l,
                r = (p - 4 * G) / a,
                n = Math.max(1, Math.floor(Math.min(0.5 * h, 0.45 * r) / 5)),
                s = tl(d).padEnd(l, " ");
              for (let t = 0; t < a; t++)
                for (let a = 0; a < l; a++) {
                  let M = Math.round(c + 2 * G + h * a + 1),
                    f = Math.round(b + 2 * G + r * t + 1),
                    m = Math.round(c + 2 * G + h * (a + 1) - 1) - M,
                    g = Math.round(b + 2 * G + r * (t + 1) - 1) - f;
                  (W.fillStyle = C.stroke),
                    W.fillRect(M, f, m, g),
                    (W.strokeStyle = C.face),
                    (W.globalAlpha = 0.35),
                    (W.lineWidth = 1),
                    W.beginPath(),
                    W.moveTo(M, Math.round(f + g / 2) + O()),
                    W.lineTo(M + m, Math.round(f + g / 2) + O()),
                    W.stroke(),
                    (W.globalAlpha = 1),
                    (W.lineWidth = D);
                  let d = y && (a + t * l + (0, o.Qj)(T, 350, 9)) % 9 == 0,
                    k =
                      0 === t
                        ? s[a]
                        : String.fromCharCode(65 + Math.floor(26 * i()));
                  if (n >= 1 && " " !== k && m >= 5 && g >= 6) {
                    let t = u.has(k) ? k : "0";
                    e.pix(
                      t,
                      Math.round(M + (m - e.pixW(t, n)) / 2),
                      Math.round(f + (g - 5 * n) / 2),
                      n,
                      to ? C.glass : C.face
                    ),
                      d &&
                        ((W.fillStyle = C.stroke),
                        (W.globalAlpha = 0.65),
                        W.fillRect(M, f, m, Math.round(g / 2)),
                        (W.globalAlpha = 1));
                  }
                }
              W.fillStyle = C.stroke;
            } else if (51 === l) {
              let t = Math.round(0.84 * Math.min(S, p));
              (Math.min(S, p) - t) % 2 && (t -= 1);
              let e = c + Math.round((S - t) / 2),
                l = b + Math.round((p - t) / 2),
                a = t / 2,
                h = e + a,
                r = l + a,
                n = Math.max(2, Math.round(1.6 * G)),
                s = 0.5 > i(),
                M = W.lineWidth;
              (W.strokeStyle = C.stroke),
                s
                  ? (W.beginPath(), W.arc(h, r, a - M / 2, 0, o.gc), W.stroke())
                  : Y(e, l, t, t),
                (W.fillStyle = C.stroke);
              let f = Math.max(1, Math.round(0.55 * n)),
                m = Math.floor((2 * a) / n),
                g = Math.round(h - ((m - 1) * n + f) / 2),
                u = Math.round(r - ((m - 1) * n + f) / 2),
                d = a - M - f / 2 - Math.max(1, 0.4 * n);
              for (let t = 0; t < m; t++)
                for (let e = 0; e < m; e++) {
                  let l = g + e * n,
                    a = u + t * n,
                    M = l + f / 2,
                    c = a + f / 2;
                  if (
                    s
                      ? !((M - h) ** 2 + (c - r) ** 2 > d ** 2)
                      : !(Math.max(Math.abs(M - h), Math.abs(c - r)) > d)
                  ) {
                    if (
                      0.18 > i() !==
                      (y && (7 * e + 3 * t + (0, o.Qj)(T, 400, 23)) % 23 == 0)
                    ) {
                      W.globalAlpha = 1;
                      let t = Math.min(tr, Math.floor((f - 1) / 2));
                      tn(l + t, a + t, f - 2 * t, f - 2 * t);
                    } else
                      (W.fillStyle = C.stroke),
                        (W.globalAlpha = 0.22),
                        W.fillRect(l, a, f, f);
                  }
                }
              (W.globalAlpha = 1), (W.fillStyle = C.stroke);
            } else if (52 === l) {
              let t = c + S / 2,
                e = b + p / 2,
                l = 0.44 * Math.min(S, p);
              (W.fillStyle = C.screen),
                W.beginPath(),
                W.arc(t, e, l, 0, o.gc),
                W.fill(),
                W.save(),
                W.beginPath(),
                W.arc(t, e, l - 1, 0, o.gc),
                W.clip(),
                (W.strokeStyle = C.glass),
                (W.globalAlpha = 0.9);
              let a = 6.28 * i(),
                h = H ? 5 : 3,
                r = 0.28 * l,
                n = t + Math.cos(a) * l * 0.6,
                s = e + Math.sin(a) * l * 0.6;
              W.beginPath(), W.moveTo(n, s);
              for (let t = 0; t < h; t++) {
                let e =
                  a +
                  Math.PI +
                  (i() - 0.5) * 1.2 +
                  (y ? 0.2 * Math.sin((0, o.tC)(T, 900 * o.gc) + t) : 0);
                (n += Math.cos(e) * r), (s += Math.sin(e) * r), W.lineTo(n, s);
              }
              W.stroke();
              let M = Math.max(2, Math.min(0.1 * l, 2 * D)),
                f = 1.4 * M;
              (W.fillStyle = C.glass),
                W.fillRect(n - M / 2, s - M / 2, M, M),
                H >= 1 &&
                  ((W.globalAlpha = 0.5),
                  (W.lineWidth = Math.max(1, D / 2)),
                  W.beginPath(),
                  W.moveTo(n + f, s - f),
                  W.lineTo(n + f + Math.max(4, 0.25 * l), s - f),
                  W.stroke(),
                  (W.lineWidth = D));
              let m =
                  t +
                  (y ? Math.cos((0, o.tC)(T, 1300 * o.gc)) : i() - 0.5) *
                    l *
                    0.5,
                g =
                  e +
                  (y ? Math.sin((0, o.tC)(T, 1700 * o.gc)) : i() - 0.5) *
                    l *
                    0.5,
                u = Math.max(2, 0.12 * l);
              (W.globalAlpha = 0.8),
                W.beginPath(),
                W.moveTo(m - u, g),
                W.lineTo(m + u, g),
                W.moveTo(m, g - u),
                W.lineTo(m, g + u),
                W.stroke(),
                W.restore(),
                (W.globalAlpha = 1);
            } else if (
              53 === l &&
              !A &&
              S < 1.45 * R &&
              p < 1.45 * R &&
              !w(l, S, p, R)
            ) {
              let t = Math.max(2, Math.round(2.2 * G)),
                l = Math.max(1, Math.round(D / 2)),
                a = c + t,
                h = b + t,
                r = S - 2 * t,
                n = p - 2 * t,
                s = ["ARM", "RUN", "OIL", "SUB", "NET", "ALT"],
                M = s[Math.floor(i() * s.length)],
                f = y
                  ? ((0, o.Qj)(T, 600, 3) + Math.floor(3 * i())) % 3 != 0
                  : 0.6 > i();
              (W.lineWidth = l),
                (W.strokeStyle = C.stroke),
                (W.fillStyle = C.stroke),
                f ? tn(a + tr, h + tr, r - 2 * tr, n - 2 * tr) : Y(a, h, r, n);
              let m = f ? (to ? C.screen : C.face) : C.stroke,
                g =
                  Math.floor(
                    Math.min((n - 2 * l - 2) / 5, (r - 2 * l - 2) / 11) * K
                  ) / K,
                u = (t) => Math.round(t * K) / K;
              if (g * K >= 1)
                e.pix(
                  M,
                  u(a + (r - e.pixW(M, g)) / 2),
                  u(h + (n - 5 * g) / 2),
                  g,
                  m
                );
              else {
                W.fillStyle = m;
                let t = u(0.42 * r),
                  e = Math.max(1 / K, u(0.12 * n));
                W.fillRect(u(a + (r - t) / 2), u(h + (n - e) / 2), t, e);
              }
              (W.lineWidth = D), (W.fillStyle = C.stroke);
            } else if (53 === l) {
              let t = Math.max(
                  J ? 2 : 1,
                  Math.min(X(4), Math.floor((S - 4 * G) / (9 * G)))
                ),
                l = Math.max(
                  Z ? 2 : 1,
                  Math.min($(4), Math.floor((p - 4 * G) / (5 * G)))
                ),
                a = (S - 4 * G) / t,
                h = (p - 4 * G) / l,
                r = y ? (0, o.Qj)(T, 600, t * l) : -1,
                n = Math.max(1, Math.round(D / 2)),
                s = Math.max(
                  1,
                  Math.floor(
                    Math.min((h - 2 - 2 * n - 2) / 5, (a - 2 - 2 * n - 2) / 15)
                  )
                ),
                M =
                  5 * s <= Math.floor(h) - 3 - 2 * n - 2 &&
                  15 * s <= Math.floor(a) - 3 - 2 * n - 2;
              W.lineWidth = n;
              for (let o = 0; o < l; o++)
                for (let l = 0; l < t; l++) {
                  let n = Math.round(c + 2 * G + a * l + 1),
                    f = Math.round(b + 2 * G + h * o + 1),
                    m = 0.3 > i() != (l + o * t === r),
                    g = Math.round(c + 2 * G + a * (l + 1) - 1) - n,
                    k = Math.round(b + 2 * G + h * (o + 1) - 1) - f;
                  (W.strokeStyle = C.stroke),
                    (W.fillStyle = C.stroke),
                    m
                      ? tn(n + tr, f + tr, g - 2 * tr, k - 2 * tr)
                      : Y(n, f, g, k);
                  let x = tl(d),
                    S = ([...x].every((t) => u.has(t)) ? x : "AUTO").slice(
                      0,
                      4
                    );
                  M &&
                    e.pix(
                      S,
                      Math.round(n + (g - e.pixW(S, s)) / 2),
                      Math.round(f + (k - 5 * s) / 2),
                      s,
                      m ? (to ? C.screen : C.face) : C.stroke
                    );
                }
              (W.lineWidth = D), (W.fillStyle = C.stroke);
            } else if (
              54 === l &&
              !A &&
              S < 1.45 * R &&
              p < 1.45 * R &&
              !w(l, S, p, R)
            ) {
              let t = Math.max(2, Math.round(2.5 * G));
              tt(c + t, b + t, S - 2 * t, p - 2 * t);
              let l = S - 2 * t - 5 * G,
                a = p - 2 * t - 5 * G,
                h = String(
                  (Math.floor(60 * i()) + (y ? (0, o.Ky)(T, 1e3) : 0)) % 60
                ).padStart(2, "0"),
                r = Math.min(l / 2.16, a / 1.5),
                n = 1.5 * r,
                s = Math.max(1, 0.16 * r),
                M = c + (S - (s + 0.34 * r + 1.66 * r)) / 2,
                f = b + (p - n) / 2;
              r >= 2 &&
                ((y && 0 !== (0, o.Qj)(T, 500, 2)) ||
                  ((W.fillStyle = C.glass),
                  W.fillRect(M, f + 0.3 * n - s / 2, s, s),
                  W.fillRect(M, f + 0.7 * n - s / 2, s, s)),
                e.seg7(h, M + s + 0.34 * r, f, r, n, C.glass)),
                (W.fillStyle = C.stroke);
            } else if (
              54 === l &&
              !A &&
              S >= 2.3 * R &&
              p >= 1.8 * R &&
              !w(l, S, p, R)
            ) {
              tt(c + 2 * G, b + 2 * G, S - 4 * G, p - 4 * G);
              let t = Math.floor(86400 * i()) + (y ? (0, o.Ky)(T, 1e3) : 0),
                l = [
                  Math.floor(t / 3600) % 24,
                  Math.floor((t % 3600) / 60),
                  t % 60,
                ].map((t) => String(t).padStart(2, "0")),
                a = !y || 0 === (0, o.Qj)(T, 500, 2),
                h = 2 * G,
                r = Math.min(
                  (S - 10 * G) / 4.26,
                  (p - 10 * G - h) / (1.5 + 1.5 * 0.62)
                ),
                n = 1.5 * r,
                s = 0.62 * r,
                M = 1.5 * s,
                f = 3.32 * r + 0.94 * r,
                m = b + (p - n - h - M) / 2;
              if (r >= 3) {
                let t = c + (S - f) / 2;
                if ((e.seg7(l[0], t, m, r, n, C.glass), (t += 1.66 * r), a)) {
                  W.fillStyle = C.glass;
                  let e = Math.max(1, 0.14 * r);
                  W.fillRect(t + 0.47 * r - e / 2, m + 0.3 * n - e / 2, e, e),
                    W.fillRect(t + 0.47 * r - e / 2, m + 0.7 * n - e / 2, e, e);
                }
                (t += 0.94 * r), e.seg7(l[1], t, m, r, n, C.glass);
                let o = Math.max(1, 0.16 * s),
                  i = c + (S - (o + 0.34 * s + 1.66 * s)) / 2,
                  g = m + n + h;
                a &&
                  ((W.fillStyle = C.glass),
                  W.fillRect(i, g + 0.3 * M - o / 2, o, o),
                  W.fillRect(i, g + 0.7 * M - o / 2, o, o)),
                  e.seg7(l[2], i + o + 0.34 * s, g, s, M, C.glass);
              }
              W.fillStyle = C.stroke;
            } else if (54 === l) {
              tt(c + 2 * G, b + 3 * G, S - 4 * G, p - 6 * G);
              let t = 2 === J && S > 30 * G ? 3 : J ? 2 : 1,
                l = t - 1,
                a = Math.min(
                  (S - 8 * G) / (2 * t + 0.6 * l),
                  (p - 10 * G) / 1.5
                ),
                h = 1.5 * a,
                r = 1.66 * a,
                n = 0.94 * a,
                s =
                  (Math.floor(86400 * i()) + (y ? (0, o.Ky)(T, 1e3) : 0)) %
                  86400,
                M = [Math.floor(s / 3600), Math.floor((s % 3600) / 60), s % 60]
                  .slice(3 - t)
                  .map((t) => String(t).padStart(2, "0")),
                f = c + (S - (r * t + n * l)) / 2;
              if (a >= 3) {
                for (let i = 0; i < t; i++)
                  if (
                    (e.seg7(M[i], f, b + (p - h) / 2, a, h, C.glass),
                    (f += r),
                    i < l)
                  ) {
                    if (!y || 0 === (0, o.Qj)(T, 500, 2)) {
                      W.fillStyle = C.glass;
                      let t = Math.max(1, 0.14 * a);
                      W.fillRect(
                        f + n / 2 - t / 2,
                        b + p / 2 - 0.2 * h - t / 2,
                        t,
                        t
                      ),
                        W.fillRect(
                          f + n / 2 - t / 2,
                          b + p / 2 + 0.2 * h - t / 2,
                          t,
                          t
                        );
                    }
                    f += n;
                  }
              }
              W.fillStyle = C.stroke;
            } else if (56 === l) {
              let t = Math.max(
                  Z ? 2 : 1,
                  Math.min($(6), Math.floor((p - 6 * G) / (3.2 * G)))
                ),
                e = Math.max(
                  J ? 6 : 3,
                  Math.min(X(24), Math.floor((S - 4 * G) / (2.2 * G)))
                ),
                l = c + 2 * G,
                a = b + 2 * G,
                h = S - 4 * G,
                r = (t / (t + 1)) * (p - 6 * G),
                n = Math.max(0.8, 0.3 * Math.min(h / e, r / t));
              (W.fillStyle = C.stroke), (W.strokeStyle = C.stroke);
              for (let s = 0; s < t; s++) {
                let M =
                  Math.floor(16777216 * i()) ^
                  (y ? (0, o.Ky)(T, 90) + 5 * s : 0);
                for (let i = 0; i < e; i++) {
                  let f = l + (h * (i + 0.5)) / e,
                    c = a + (r * (s + 0.5)) / t;
                  if ((M >> i % 24) & 1) ts(f, c, Math.max(0.6, n - tr));
                  else {
                    let t = Math.max(1, Math.min(D, 0.45 * n));
                    (W.lineWidth = t),
                      W.beginPath(),
                      W.arc(f, c, Math.max(0.5, n - t / 2), 0, o.gc),
                      W.stroke(),
                      (W.lineWidth = D);
                  }
                }
              }
              let s = a + r + G,
                M = Math.max(
                  2,
                  p - 6 * G - r - G + Math.max(0, 2 * G - (r / t / 2 - n))
                ),
                f = Math.max(3, Math.min(12, Math.floor(e / 2)));
              for (let t = 0; t < f; t++) {
                let e = l + (h * (t + 0.5)) / f,
                  a = Math.max(2, Math.min(2.2 * G, (h / f) * 0.5)),
                  o = 0.5 > i(),
                  r = Math.round(e - a / 2),
                  n = Math.max(2, Math.round(a)),
                  c = Math.round(s),
                  m = Math.max(2, Math.round(M)),
                  g = Math.max(1, Math.min(D, Math.floor(n / 4)));
                (W.lineWidth = g), Y(r, c, n, m), (W.lineWidth = D);
                let u = Math.floor((m - 2 * g) / 2);
                n > 2 * g &&
                  u >= 1 &&
                  W.fillRect(r + g, o ? c + g : c + m - g - u, n - 2 * g, u);
              }
            } else if (46 === l) {
              let t = 0.8 * Math.min(S, p),
                e = c + (S - t) / 2,
                l = b + (p - t) / 2;
              (W.strokeStyle = C.stroke),
                Y(e, l, t, t),
                (W.fillStyle = C.stroke);
              let a = Math.max(2.5, 2.2 * G),
                i = Math.max(1, Math.floor((t - 2 * W.lineWidth - a) / a)),
                h = (t - (i - 1) * a) / 2;
              for (let t = 0; t < i; t++)
                for (let r = 0; r < i; r++)
                  W.beginPath(),
                    W.arc(
                      e + h + r * a,
                      l + h + t * a,
                      Math.max(0.6, 0.22 * a) *
                        (y ? 1 + 0.4 * Math.sin((0, o.tC)(T, 90 * o.gc)) : 1),
                      0,
                      o.gc
                    ),
                    W.fill();
            } else if (31 === l) {
              if (!A && S < 1.75 * R && p < 1.75 * R && !w(l, S, p, R)) {
                let t = (t) => Math.round(t * K) / K,
                  e = Math.min(S, p),
                  l = t(Math.max(1.5, 0.13 * e)),
                  a = t(e - 2 * l),
                  h = t(c + (S - a) / 2),
                  r = t(b + (p - a) / 2);
                tt(h, r, a, a);
                let n = Math.max(1 / K, t(0.14 * a)),
                  s = (a - 2 * n) / 4,
                  M = Math.max(1 / K, t(0.62 * s)),
                  f = r + a - n;
                W.fillStyle = C.glass;
                for (let e = 0; e < 4; e++) {
                  let l = y
                      ? 0.25 +
                        0.7 *
                          Math.abs(
                            Math.sin(0.9 * e + (0, o.tC)(T, 180 * o.gc)) *
                              Math.sin((0, o.tC)(T, 900 * o.gc) + e)
                          )
                      : 0.75 * i() + 0.2,
                    r = t(h + n + s * e + (s - M) / 2),
                    c = Math.max(1 / K, t((a - 2 * n) * l));
                  W.fillRect(r, f - c, M, c);
                }
              } else {
                tt(c + 2 * G, b + 2 * G, S - 4 * G, p - 4 * G);
                let t = Math.max(
                    J ? 6 : 1,
                    Math.min(X(24), Math.floor((S - 6 * G) / (2.2 * G)))
                  ),
                  e = (S - 6 * G) / t;
                W.fillStyle = C.glass;
                for (let l = 0; l < t; l++) {
                  let t =
                      (p - 6 * G) *
                      (y
                        ? 0.25 +
                          0.7 *
                            Math.abs(
                              Math.sin(0.8 * l + (0, o.tC)(T, 180 * o.gc)) *
                                Math.sin((0, o.tC)(T, 900 * o.gc) + l)
                            )
                        : 0.8 * i() + 0.1),
                    a = (t) => Math.round(t * K) / K,
                    h = a(c + 3 * G + e * l + 0.15 * e),
                    r = a(b + p - 3 * G - t);
                  W.fillRect(
                    h,
                    r,
                    Math.max(1, a(c + 3 * G + e * l + 0.85 * e) - h),
                    a(b + p - 3 * G) - r
                  );
                }
              }
            }
            for (; z-- > 0; ) W.restore();
            tf &&
              th &&
              (ts(c + S - 2.6 * G, tM + 2.2 * G, Math.max(1, 1.1 * G), tu),
              (e.lamps = 0));
          };
        },
        Q8: function () {
          return V;
        },
        Sz: function () {
          return v;
        },
        ib: function () {
          return I;
        },
        pd: function () {
          return L;
        },
        te: function () {
          return f;
        },
        tz: function () {
          return i;
        },
        vg: function () {
          return j;
        },
      });
      var a = l(35012),
        o = l(42272);
      let i = [
          "knobs",
          "sliders",
          "meter",
          "scope",
          "matrix",
          "switches",
          "",
          "dial",
          "radar",
          "seven-segment",
          "pad grid",
          "",
          "LED column",
          "rocker toggles",
          "transport",
          "",
          "tape reels",
          "patch bay",
          "readout",
          "globe",
          "thermometer",
          "warning plate",
          "linear scale",
          "vent grille",
          "",
          "rotary dial",
          "",
          "lever",
          "selector",
          "dot matrix",
          "speaker",
          "spectrum",
          "nixie tubes",
          "paper tape",
          "fuse block",
          "",
          "compass",
          "drive bay",
          "heat sink",
          "guarded toggles",
          "tally counter",
          "level bubble",
          "strip chart",
          "square gauge",
          "square button",
          "sweep scope",
          "square grille",
          "big board",
          "plotboard",
          "threat ladder",
          "split-flap",
          "core cartogram",
          "vector scope",
          "annunciator",
          "mission clock",
          "",
          "register panel",
        ],
        h = new Set([
          0, 3, 5, 9, 10, 13, 14, 16, 17, 18, 21, 22, 29, 31, 32, 33, 34, 37,
          39, 40, 41, 42, 54, 56,
        ]),
        r = new Set([1, 12, 20, 27]),
        n = new Set([2, 7, 8, 19, 25, 28, 30, 36, 43, 44, 45, 46, 51, 52]),
        s = new Set([
          4, 10, 12, 13, 14, 19, 29, 31, 33, 38, 42, 43, 45, 46, 47, 48, 49, 50,
          51, 52, 53, 56,
        ]),
        M = new Set([23, 30, 33, 38, 46]),
        f = new Set([2, 3, 9, 18, 19, 29, 31, 32, 40, 45, 47, 48, 52, 54]),
        c = new Set([
          2, 3, 8, 9, 18, 19, 29, 31, 21, 45, 32, 40, 47, 48, 52, 54,
        ]),
        m = [
          "GAIN",
          "CUE",
          "SYNC",
          "IN",
          "OUT",
          "DB",
          "HZ",
          "LVL",
          "PAN",
          "MIX",
          "AUX",
          "TRIM",
          "SEND",
          "RATE",
          "ARM",
          "SUB",
        ],
        g = [
          "READY",
          "AUTO",
          "STANDBY",
          "ONLINE",
          "NORMAL",
          "ACTIVE",
          "MANUAL",
          "REMOTE",
          "LOCAL",
          "IDLE",
          "RUN",
          "LOAD",
        ],
        u = new Set("ABCDEHIKLMNORSTUVWYZ0123456789".split("")),
        d = [
          "ARM",
          "RUN",
          "HOLD",
          "SYNC",
          "AUX",
          "MAIN",
          "LINK",
          "HEAT",
          "OIL",
          "SUB",
          "NET",
          "ALT",
        ],
        k = ["\xb0", "IN", "KHZ", "V", "%", "MS"],
        x = [
          [
            [-168, 66],
            [-140, 70],
            [-95, 72],
            [-75, 62],
            [-60, 47],
            [-75, 40],
            [-80, 30],
            [-97, 26],
            [-105, 20],
            [-92, 15],
            [-84, 9],
            [-79, 8],
            [-100, 22],
            [-115, 30],
            [-124, 40],
            [-130, 50],
            [-150, 60],
            [-165, 60],
          ],
          [
            [-80, 10],
            [-62, 10],
            [-50, 0],
            [-35, -8],
            [-39, -20],
            [-48, -28],
            [-58, -38],
            [-66, -48],
            [-72, -53],
            [-75, -45],
            [-71, -30],
            [-80, -10],
            [-78, 0],
          ],
          [
            [-10, 36],
            [-10, 44],
            [0, 50],
            [10, 55],
            [25, 60],
            [30, 70],
            [60, 72],
            [100, 76],
            [140, 72],
            [170, 68],
            [180, 64],
            [160, 60],
            [140, 52],
            [130, 40],
            [120, 30],
            [108, 20],
            [100, 10],
            [104, 2],
            [97, 6],
            [88, 22],
            [78, 8],
            [72, 20],
            [60, 25],
            [50, 30],
            [45, 13],
            [35, 30],
            [28, 36],
            [20, 40],
            [12, 40],
            [0, 38],
          ],
          [
            [-17, 15],
            [-10, 30],
            [0, 36],
            [12, 34],
            [30, 31],
            [40, 12],
            [51, 11],
            [43, -2],
            [40, -15],
            [35, -25],
            [30, -34],
            [18, -34],
            [12, -18],
            [9, -2],
            [5, 5],
            [-8, 5],
            [-17, 10],
          ],
          [
            [114, -22],
            [122, -18],
            [136, -12],
            [146, -19],
            [153, -26],
            [150, -37],
            [140, -38],
            [130, -32],
            [116, -34],
          ],
          [
            [-55, 60],
            [-45, 62],
            [-20, 70],
            [-25, 82],
            [-60, 82],
            [-70, 76],
            [-60, 68],
          ],
          [
            [-180, -68],
            [-120, -72],
            [-60, -68],
            [0, -70],
            [60, -66],
            [120, -66],
            [180, -68],
            [180, -90],
            [-180, -90],
          ],
        ],
        b = [0, 7, 30, 28, 2, 5, 43, 44, 46, 41, 52],
        S = [
          1, 5, 13, 14, 22, 23, 4, 9, 21, 18, 31, 17, 1, 22, 33, 34, 37, 39, 40,
          41, 42, 32, 47, 48, 50, 54, 56,
        ],
        p = [12, 20, 27, 1, 23, 4, 12, 38, 49, 56],
        y = [
          0, 1, 2, 3, 4, 5, 8, 10, 13, 14, 16, 25, 28, 31, 18, 9, 3, 8, 32, 36,
          37, 40, 43, 44, 45, 46, 47, 48, 50, 51, 52, 53, 54,
        ],
        T = [
          3, 8, 19, 29, 31, 9, 10, 17, 16, 25, 2, 1, 4, 3, 19, 29, 32, 33, 36,
          42, 43, 45, 46, 47, 48, 50, 51, 52, 53, 56,
        ],
        P = [1, 5, 13, 22, 23, 4, 12, 14, 33, 34, 38, 41, 50, 54, 56];
      function v(t, e, l, a) {
        let o = e / l,
          i = V(
            o >= 1.8
              ? [3, 9, 54, 18, 31, 48, 40]
              : o <= 0.6
              ? [3, 29, 31]
              : [3, 2, 9, 18, 29, 31, 45, 47, 48, 52, 19],
            e,
            l,
            a
          );
        return i[Math.floor(t() * i.length)];
      }
      let A = {
          3: { ar: [0.7, 99] },
          4: { w: 2, h: 1.5 },
          8: { ar: [0.5, 2] },
          9: { ar: [0.8, 99] },
          14: { ar: [2.5, 99], hMax: 1.6 },
          16: { w: 2.5, h: 1.5, ar: [1.2, 2.6] },
          17: { w: 3, h: 1.5, ar: [1.2, 3.5] },
          18: { w: 1.5, ar: [1.2, 99] },
          19: { ar: [0.6, 1.8] },
          20: [
            { ar: [0, 1.3], aMax: 6 },
            { ar: [2.5, 99], hMax: 1.5 },
          ],
          21: [
            { w: 2, h: 0.9 },
            { h: 2, w: 0.9 },
          ],
          22: [
            { w: 2, ar: [1.1, 99], aMax: 6 },
            { h: 2, ar: [0, 0.66], aMax: 6 },
          ],
          23: { aMax: 5 },
          25: { ar: [0.6, 1.8] },
          27: [
            { ar: [0, 1.2], aMax: 4 },
            { ar: [2.5, 99], hMax: 1.6 },
          ],
          28: { ar: [0.5, 2] },
          30: { ar: [0.5, 2] },
          31: [
            { w: 1.5, h: 1 },
            { h: 1.5, w: 1 },
          ],
          33: [
            { w: 2, aMax: 8 },
            { h: 2, aMax: 8 },
          ],
          36: { ar: [0.5, 2] },
          37: { w: 2, ar: [1.2, 99] },
          38: { aMax: 5 },
          40: { w: 1.5, ar: [1.2, 99] },
          41: { ar: [1, 99], aMax: 4 },
          42: [{ w: 1.5 }, { h: 1.5 }],
          43: { ar: [0.5, 2] },
          44: { aMax: 3 },
          45: { w: 1.5, ar: [0.6, 1.8] },
          46: { aMax: 6 },
          47: { w: 2, h: 1.5, ar: [0.8, 2.5] },
          48: { w: 2, h: 1.5, ar: [0.8, 2.5] },
          49: [{ w: 1.5, h: 1.5 }, { h: 2.5 }],
          51: { ar: [0.5, 2] },
          52: { ar: [0.5, 2] },
          53: [
            { w: 1.5, h: 1.2 },
            { w: 2.5, h: 0.8 },
          ],
          54: { w: 2, ar: [1.5, 99] },
        },
        W = { aMax: 1.7, ar: [0.6, 1.7] },
        R = { w: 2.5, h: 2, ar: [0.8, 2.5] },
        C = {
          4: W,
          14: [W, R],
          16: W,
          17: W,
          18: W,
          21: W,
          22: W,
          31: W,
          33: W,
          37: W,
          40: W,
          42: W,
          45: W,
          47: W,
          48: W,
          49: W,
          53: W,
          54: [W, { w: 2.5, h: 2, ar: [0.8, 1.5] }],
          20: R,
          27: R,
          41: { ar: [2.5, 99], hMax: 1.6 },
          44: { ar: [0.5, 2] },
        };
      function I(t, e, l, a) {
        if (w(t, e, l, a)) return !0;
        let o = C[t];
        if (!o) return !1;
        let i = e / a + 0.1,
          h = l / a + 0.1,
          r = e / l,
          n = (t) =>
            (void 0 === t.w || i >= t.w) &&
            (void 0 === t.h || h >= t.h) &&
            (void 0 === t.hMax || h <= t.hMax + 0.1) &&
            (void 0 === t.aMax || (e * l) / (a * a) <= t.aMax) &&
            (void 0 === t.ar || (r >= t.ar[0] && r <= t.ar[1]));
        return Array.isArray(o) ? o.some(n) : n(o);
      }
      function w(t, e, l, a) {
        let o = A[t];
        if (!o) return !0;
        let i = e / a + 0.1,
          h = l / a + 0.1,
          r = e / l,
          n = (t) =>
            (void 0 === t.w || i >= t.w) &&
            (void 0 === t.h || h >= t.h) &&
            (void 0 === t.hMax || h <= t.hMax + 0.1) &&
            (void 0 === t.aMax || (e * l) / (a * a) <= t.aMax) &&
            (void 0 === t.ar || (r >= t.ar[0] && r <= t.ar[1]));
        return Array.isArray(o) ? o.some(n) : n(o);
      }
      let Q = new Map();
      function j(t) {
        var e;
        for (let l of t)
          for (let t of new Set(l))
            Q.set(t, (null !== (e = Q.get(t)) && void 0 !== e ? e : 0) + 1);
      }
      let N = (t) => {
        let e = A[t];
        return (
          !!e &&
          (Array.isArray(e) ? e : [e]).some(
            (t) => void 0 !== t.w || void 0 !== t.h
          )
        );
      };
      function U(t, e) {
        let l = e.map((t) => {
            var e;
            return (
              (N(t) ? 3 : 1) / (null !== (e = Q.get(t)) && void 0 !== e ? e : 1)
            );
          }),
          a = t() * l.reduce((t, e) => t + e, 0);
        for (let t = 0; t < e.length; t++) if ((a -= l[t]) <= 0) return e[t];
        return e[e.length - 1];
      }
      j([b, S, p, y, T, P]);
      let E = [0, 5, 12, 13, 34, 39];
      function V(t, e, l, a) {
        let o = t.filter((t) => w(t, e, l, a));
        return o.length ? o : E;
      }
      function L(t, e, l, a) {
        let { cell: o } = t,
          i = (l * a) / (o * o),
          h = l / a,
          r = V(
            a < 1.15 * o && h >= 1.8
              ? P
              : a < 1.6 * o && h >= 1.8
              ? S
              : l < 1.6 * o && h <= 0.6
              ? p
              : i < 1.6
              ? b
              : i < 5
              ? y
              : T,
            l,
            a,
            o
          ),
          n = U(e, r);
        if (c.has(n) && 0.5 > e()) {
          let t = r.filter((t) => !c.has(t));
          t.length && (n = t[Math.floor(e() * t.length)]);
        }
        return n;
      }
      let q = {};
    },
    42272: function (t, e, l) {
      l.d(e, {
        EQ: function () {
          return r;
        },
        Ky: function () {
          return c;
        },
        Qj: function () {
          return f;
        },
        gc: function () {
          return h;
        },
        lV: function () {
          return M;
        },
        tC: function () {
          return s;
        },
        zg: function () {
          return i;
        },
      });
      var a = l(19890),
        o = l(12765);
      function i(t, e) {
        let l =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : a.rp,
          i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : a.k$,
          h = !1,
          r = 0,
          n = l.lit,
          s = null,
          M = null,
          f = () => {
            var t, e;
            let a = {
              ...(h
                ? null !== (t = null == M ? void 0 : M.dark) && void 0 !== t
                  ? t
                  : i
                : null !== (e = null == M ? void 0 : M.light) && void 0 !== e
                ? e
                : l),
              lit: n,
              hot: n,
              ...(s ? { face: s, glass: s } : {}),
            };
            return 0 === r ? a : { ...a, glass: n };
          },
          c = {
            ctx: t,
            cell: e,
            P: l,
            lit: 0,
            lamps: 1,
            setInverted(t) {
              (h = t), (c.P = f());
            },
            setScheme(t) {
              (M = t), (c.P = f());
            },
            setLit(t) {
              (r = t), (c.lit = t), (c.lamps = 1), (c.P = f());
            },
            setLamp(t) {
              (n = t), (c.P = f());
            },
            setFace(t) {
              (s = t), (c.P = f());
            },
            hair(e, l, a, o) {
              let i =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : 0.3;
              (t.strokeStyle = c.P.stroke),
                (t.globalAlpha = i),
                t.beginPath(),
                t.moveTo(e, l),
                t.lineTo(a, o),
                t.stroke(),
                (t.globalAlpha = 1);
            },
            pix: (e, l, a, i, h) => (0, o.YN)(t, e, l, a, i, h),
            pixW: o.tR,
            seg7: (e, l, a, i, h, r) => (0, o.Yh)(t, e, l, a, i, h, r),
          };
        return (c.P = f()), c;
      }
      let h = 2 * Math.PI,
        r = 12e3,
        n = (t) => r / Math.max(1, Math.round(r / Math.max(1, t))),
        s = (t, e) => (h * t) / n(e),
        M = (t, e) => {
          let l = n(e);
          return (((t % l) + l) % l) / l;
        },
        f = (t, e, l) => Math.min(l - 1, Math.floor(M(t, e * l) * l)),
        c = (t, e) => {
          let l = Math.max(1, Math.round(r / Math.max(1, e)));
          return f(t, r / l, l);
        };
    },
    19890: function (t, e, l) {
      l.d(e, {
        LE: function () {
          return x;
        },
        Xo: function () {
          return k;
        },
        dZ: function () {
          return d;
        },
        k$: function () {
          return o;
        },
        r7: function () {
          return u;
        },
        rp: function () {
          return a;
        },
        yU: function () {
          return g;
        },
      });
      let a = {
          wall: "#7d7d79",
          face: "#d6d6d2",
          stroke: "#141414",
          screen: "#0a0a0a",
          glass: "#f2f2ee",
          accent: "#b3261e",
          ok: "#1f9d55",
          lit: "#3ecf7a",
          hot: "#9df5bd",
        },
        o = { ...a, face: "#b8b8b3", screen: "#050505" },
        i = (t) => [1, 3, 5].map((e) => parseInt(t.slice(e, e + 2), 16)),
        h = (t, e, l) =>
          "#" +
          i(t)
            .map((t, a) =>
              Math.round(t + (i(e)[a] - t) * l)
                .toString(16)
                .padStart(2, "0")
            )
            .join(""),
        r = (t) => ({
          ink: h(t, "#ffffff", 0.6),
          dim: h(t, "#7a7a7a", 0.4),
          rule: h(t, "#7a7a7a", 0.4) + "59",
        }),
        n = (t, e, l, a) => ({
          light: t,
          dark: e,
          lamp: l,
          note: a,
          term: r(l),
        }),
        s = {
          ...a,
          wall: "#8a8577",
          face: "#ebe5d4",
          stroke: "#1b1915",
          screen: "#0b0a08",
          glass: "#fbf7ea",
        },
        M = {
          ...a,
          wall: "#0d0f12",
          face: "#22262b",
          stroke: "#b8bec6",
          screen: "#000000",
          glass: "#e4e8ee",
          frame: "#000000",
        },
        f = {
          ...a,
          wall: "#3b3f2e",
          face: "#6b6f52",
          stroke: "#12140c",
          screen: "#090a06",
          glass: "#ece6c6",
        },
        c = {
          ...a,
          wall: "#4f5a65",
          face: "#c8cfd5",
          stroke: "#12191f",
          screen: "#070c11",
          glass: "#f0f4f7",
        },
        m = {
          ...a,
          wall: "#000000",
          face: "#1e1e1e",
          stroke: "#d9d3c7",
          screen: "#000000",
          glass: "#f3eee2",
          frame: "#000000",
        },
        g = {
          steel: n(
            a,
            o,
            "#39d353",
            "the wall as photographed, P1 terminal green"
          ),
          ivory: n(
            s,
            { ...s, face: "#cfc8b4", screen: "#050403" },
            "#ffb000",
            "cream faces, monitor amber"
          ),
          night: n(
            M,
            { ...M, face: "#30353b", screen: "#000000" },
            "#3dff6b",
            "the lights off, phosphor green"
          ),
          olive: n(
            f,
            { ...f, face: "#4f533c", screen: "#040503" },
            "#ff4b3e",
            "a field radio, red lamps"
          ),
          slate: n(
            c,
            { ...c, face: "#a9b2ba", screen: "#03070a" },
            "#ff8c1a",
            "a cool grey instrument, gas plasma orange"
          ),
          onyx: n(
            m,
            { ...m, face: "#2b2b2b", screen: "#000000" },
            "#ffb000",
            "a black hi-fi, amber lamps"
          ),
        },
        u = ["steel", "ivory", "slate", "night", "onyx", "olive"],
        d = ["active", "working", "all"],
        k = "#c9ecbf",
        x = "#7fb37a";
    },
    12765: function (t, e, l) {
      l.d(e, {
        YN: function () {
          return r;
        },
        Yh: function () {
          return s;
        },
        ew: function () {
          return i;
        },
        tR: function () {
          return h;
        },
      });
      let a = {
          A: "010101111101101",
          B: "110101110101110",
          C: "011100100100011",
          D: "110101101101110",
          E: "111100110100111",
          H: "101101111101101",
          I: "111010010010111",
          K: "101101110101101",
          L: "100100100100111",
          M: "101111111101101",
          N: "110101101101101",
          O: "010101101101010",
          R: "110101110101101",
          S: "011100010001110",
          T: "111010010010010",
          U: "101101101101111",
          V: "101101101101010",
          W: "101101111111101",
          Y: "101101010010010",
          Z: "111001010100111",
          0: "111101101101111",
          1: "010110010010111",
          2: "111001111100111",
          3: "111001111001111",
          4: "101101111001001",
          5: "111100111001111",
          6: "111100111101111",
          7: "111001001001001",
          8: "111101111101111",
          9: "111101111001111",
          "%": "101001010100101",
          "\xb0": "010101010000000",
          " ": "000000000000000",
        },
        o = {
          ...a,
          F: "111100110100100",
          G: "011100101101011",
          J: "001001001101010",
          P: "110101110100100",
          Q: "010101101110011",
          X: "101101010101101",
          "-": "000000111000000",
          ".": "000000000000010",
          "!": "010010010000010",
          "?": "110001010000010",
          "/": "001001010100100",
          "+": "000010111010000",
          "#": "101111101111101",
          "&": "010101010101011",
          "'": "010010000000000",
          "*": "101010101000000",
          ":": "000010000010000",
        },
        i = function (t) {
          var e;
          let l =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return null !== (e = (l ? o : a)[t]) && void 0 !== e ? e : a[" "];
        };
      function h(t, e) {
        return 4 * t.length * e - e;
      }
      function r(t, e, l, i, h, r) {
        let n = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        t.fillStyle = r;
        let s = n ? o : a,
          M = l;
        for (let l of e.toUpperCase()) {
          var f;
          let e = null !== (f = s[l]) && void 0 !== f ? f : a[" "];
          for (let l = 0; l < 15; l++)
            "1" === e[l] &&
              t.fillRect(M + (l % 3) * h, i + Math.floor(l / 3) * h, h, h);
          M += 4 * h;
        }
      }
      let n = [
        "1111110",
        "0110000",
        "1101101",
        "1111001",
        "0110011",
        "1011011",
        "1011111",
        "1110000",
        "1111111",
        "1111011",
      ];
      function s(t, e, l, a, o, i, h) {
        let r = Math.max(1, 0.14 * o);
        for (let M = 0; M < e.length; M++) {
          var s;
          let f =
              null !== (s = n[Number(e[M])]) && void 0 !== s ? s : "0000000",
            c = l + o * M,
            m = 0.66 * o;
          [
            [c, a, m, r],
            [c + m - r, a, r, i / 2],
            [c + m - r, a + i / 2, r, i / 2],
            [c, a + i - r, m, r],
            [c, a + i / 2, r, i / 2],
            [c, a, r, i / 2],
            [c, a + i / 2 - r / 2, m, r],
          ].forEach((e, l) => {
            (t.fillStyle = h),
              (t.globalAlpha = "1" === f[l] ? 1 : 0.12),
              t.fillRect(e[0], e[1], e[2], e[3]);
          });
        }
        t.globalAlpha = 1;
      }
    },
    35012: function (t, e, l) {
      function a(t) {
        let e = (2654435761 * t + 12345) >>> 0;
        return () => {
          let t = Math.imul((e += 1831565813) ^ (e >>> 15), 1 | e);
          return (
            (((t ^= t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ (t >>> 14)) >>> 0) /
            4294967296
          );
        };
      }
      function o(t, e) {
        for (let l = t.length - 1; l > 0; l--) {
          let a = Math.floor(e() * (l + 1));
          [t[l], t[a]] = [t[a], t[l]];
        }
        return t;
      }
      l.d(e, {
        TV: function () {
          return o;
        },
        Vk: function () {
          return a;
        },
      });
    },
    5448: function (t, e, l) {
      l.d(e, {
        SU: function () {
          return r;
        },
        sk: function () {
          return i;
        },
        ty: function () {
          return o;
        },
        wY: function () {
          return h;
        },
      });
      var a = l(42272);
      let o = 16,
        i = new Set([0, 1, 9]),
        h = [
          "full-bleed dial",
          "clock",
          "trace cell",
          "quad squares",
          "nine dots",
          "disc",
          "ring",
          "diamond",
          "cross",
          "half cell",
          "toggle",
          "lamp",
          "square lamp",
          "filled square",
          "hollow square",
          "square clock",
        ];
      function r(t, e, l, o, i, h, r, n, s) {
        let { ctx: M } = t,
          f = t.P,
          c = M.getTransform(),
          m = Math.hypot(c.a, c.b) || 1,
          g = (t) => Math.round(t * m) / m,
          u = Math.round(h),
          d = Math.round(r);
        if (
          ((o = g(o + (h - u) / 2)),
          (i = g(i + (r - d) / 2)),
          (h = u),
          (r = d),
          !(h >= 2 && r >= 2))
        )
          return;
        let k = o + h / 2,
          x = i + r / 2,
          b = Math.min(h, r),
          S = Math.max(1, Math.min(2, Math.round((b / 22) * 2) / 2)),
          p = b / 20;
        (M.lineWidth = S),
          (M.strokeStyle = f.stroke),
          (M.fillStyle = f.stroke),
          (M.lineCap = "round");
        let y = (t) => Math.round(t * m),
          T = y(h),
          P = y(r),
          v = (t) => {
            let e = Math.max(1, y(t));
            return (
              (T - e) % 2 && (e -= 1),
              [o + (T - e) / 2 / m, i + (P - e) / 2 / m, e / m]
            );
          },
          A = function (t, e, l, a) {
            let o =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : M.lineWidth,
              i = Math.max(1, y(o)) / m;
            (M.lineWidth = i),
              M.strokeRect(t + i / 2, e + i / 2, l - i, a - i),
              (M.lineWidth = o);
          };
        if (0 === e) {
          M.beginPath(), M.arc(k, x, 0.46 * b, 0, a.gc), M.stroke();
          let t = 6.28 * l() + (n ? 0.8 * Math.sin((0, a.tC)(s, 3200)) : 0);
          M.beginPath(),
            M.moveTo(k, x),
            M.lineTo(k + Math.cos(t) * b * 0.34, x + Math.sin(t) * b * 0.34),
            M.stroke(),
            M.beginPath(),
            M.arc(k, x, 1.2 * p, 0, a.gc),
            M.fill();
        } else if (1 === e) {
          let t = b < 16 ? 3 : 1;
          for (let e = 0; e < 12; e += t) {
            let t = (e * Math.PI) / 6,
              l = b * (e % 3 ? 0.4 : 0.34),
              a = 0.46 * b;
            M.beginPath(),
              M.moveTo(k + Math.cos(t) * l, x + Math.sin(t) * l),
              M.lineTo(k + Math.cos(t) * a, x + Math.sin(t) * a),
              M.stroke();
          }
          let e = 6.28 * l() + (n ? (0, a.tC)(s, a.EQ) : 0),
            o = 6.28 * l() + (n ? (0, a.tC)(s, 3e3) : 0);
          M.beginPath(),
            M.moveTo(k, x),
            M.lineTo(k + Math.cos(e) * b * 0.2, x + Math.sin(e) * b * 0.2),
            M.moveTo(k, x),
            M.lineTo(k + Math.cos(o) * b * 0.32, x + Math.sin(o) * b * 0.32),
            M.stroke();
        } else if (2 === e) {
          let t = Math.max(2, Math.round(2.5 * p)),
            e = o + t,
            c = i + t,
            m = h - 2 * t,
            g = r - 2 * t;
          (M.fillStyle = f.screen),
            M.fillRect(e, c, m, g),
            m > 8 &&
              g > 8 &&
              ((M.strokeStyle = f.glass),
              (M.globalAlpha = 0.22),
              (M.lineWidth = 1),
              M.strokeRect(e + 1.5, c + 1.5, m - 3, g - 3),
              (M.globalAlpha = 1),
              (M.lineWidth = S)),
            M.save(),
            M.beginPath(),
            M.rect(e + 1, c + 1, m - 2, g - 2),
            M.clip(),
            (M.strokeStyle = f.glass),
            M.beginPath();
          let u = Math.max(2, 0.14 * m),
            d = c + g / 2;
          for (let t = 0; t <= 8; t++) {
            let o = e + u + ((m - 2 * u) * t) / 8,
              i =
                d +
                (n ? Math.sin(1.1 * t + (0, a.tC)(s, 1600)) : l() - 0.5) *
                  g *
                  0.22;
            t ? M.lineTo(o, i) : M.moveTo(o, i);
          }
          M.stroke(), M.restore();
        } else if (3 === e) {
          let t = n ? (0, a.Qj)(s, 400, 4) : Math.floor(4 * l()),
            e = Math.max(1, y(0.36 * b)),
            [o, i, h] = v((2 * e + y(0.08 * b)) / m),
            r = h - (2 * e) / m;
          for (let a = 0; a < 4; a++) {
            let h = o + (a % 2) * (e / m + r),
              n = i + Math.floor(a / 2) * (e / m + r);
            a === t || 0.25 > l()
              ? M.fillRect(h, n, e / m, e / m)
              : A(h, n, e / m, e / m);
          }
        } else if (4 === e) {
          let t = 0.28 * b,
            e = Math.max(1, 1.6 * p);
          for (let l = -1; l <= 1; l++)
            for (let o = -1; o <= 1; o++)
              M.beginPath(),
                M.arc(k + o * t, x + l * t, e, 0, a.gc),
                (o + l + 3 + (n ? (0, a.Qj)(s, 350, 3) : 0)) % 3 == 0
                  ? M.fill()
                  : M.stroke();
        } else if (5 === e)
          M.beginPath(),
            M.arc(k, x, 0.36 * b, 0, a.gc),
            M.fill(),
            (M.strokeStyle = f.face),
            M.beginPath(),
            M.arc(k, x, 0.16 * b, 0, a.gc),
            M.stroke();
        else if (6 === e)
          (M.lineWidth = Math.max(2, 0.12 * b)),
            M.beginPath(),
            M.arc(k, x, 0.3 * b, 0, a.gc),
            M.stroke(),
            (M.lineWidth = S);
        else if (7 === e) {
          let t = 0.3 * b;
          M.beginPath(),
            M.moveTo(k, x - t),
            M.lineTo(k + t, x),
            M.lineTo(k, x + t),
            M.lineTo(k - t, x),
            M.closePath(),
            M.stroke();
        } else if (8 === e) {
          let t = 0.3 * b;
          (M.lineWidth = Math.max(2, 0.16 * b)),
            (M.lineCap = "butt"),
            M.beginPath(),
            M.moveTo(k - t, x),
            M.lineTo(k + t, x),
            M.moveTo(k, x - t),
            M.lineTo(k, x + t),
            M.stroke(),
            (M.lineWidth = S);
        } else if (9 === e) {
          let t = n ? 0 === (0, a.Qj)(s, 900, 2) : 0.5 > l();
          M.fillRect(o + 1, t ? i + 1 : x, h - 2, r / 2 - 1);
        } else if (10 === e) {
          let t = 0.5 > l() !== (n && 0 === (0, a.Qj)(s, 700, 2)),
            e = y(0.34 * b),
            h = y(0.62 * b);
          (T - e) % 2 && (e -= 1), (P - h) % 2 && (h -= 1);
          let r = Math.max(1, y(S)),
            f = o + (T - e) / 2 / m,
            c = i + (P - h) / 2 / m,
            g = Math.floor((h - 2 * r) / 2);
          A(f, c, e / m, h / m),
            M.fillRect(
              f + r / m,
              c + (t ? r : h - r - g) / m,
              (e - 2 * r) / m,
              g / m
            );
        } else if (11 === e) {
          let t = n
            ? ((0, a.Qj)(s, 500, 3) + Math.floor(o / 7)) % 3 == 0
            : 0.3 > l();
          M.beginPath(),
            M.arc(k, x, 0.14 * b, 0, a.gc),
            t ? M.fill() : M.stroke();
        } else if (12 === e) {
          let t = n
              ? ((0, a.Qj)(s, 500, 3) + Math.floor(o / 7)) % 3 == 0
              : 0.3 > l(),
            [e, i, h] = v(0.28 * b);
          t ? M.fillRect(e, i, h, h) : A(e, i, h, h);
        } else if (13 === e) {
          let [t, e, l] = v(0.72 * b),
            [a, o, i] = v(0.32 * b);
          M.fillRect(t, e, l, l), (M.strokeStyle = f.face), A(a, o, i, i);
        } else if (14 === e) {
          let t = Math.max(2, 0.12 * b),
            [e, l, a] = v(0.6 * b + t);
          A(e, l, a, a, t);
        } else {
          let t = 0.44 * b,
            e = b < 16 ? 3 : 1;
          for (let l = 0; l < 12; l += e) {
            let e = (l * Math.PI) / 6,
              a = Math.cos(e),
              o = Math.sin(e),
              i = t / Math.max(Math.abs(a), Math.abs(o)),
              h = i * (l % 3 ? 0.85 : 0.72);
            M.beginPath(),
              M.moveTo(k + a * h, x + o * h),
              M.lineTo(k + a * i, x + o * i),
              M.stroke();
          }
          let o = 6.28 * l() + (n ? (0, a.tC)(s, a.EQ) : 0),
            i = 6.28 * l() + (n ? (0, a.tC)(s, 3e3) : 0);
          M.beginPath(),
            M.moveTo(k, x),
            M.lineTo(k + Math.cos(o) * b * 0.2, x + Math.sin(o) * b * 0.2),
            M.moveTo(k, x),
            M.lineTo(k + Math.cos(i) * b * 0.32, x + Math.sin(i) * b * 0.32),
            M.stroke();
        }
        M.lineCap = "butt";
      }
    },
  },
]);
