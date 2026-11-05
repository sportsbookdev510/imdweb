(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2592],
  {
    93412: function (t, e, i) {
      "use strict";
      i.d(e, {
        BT: function () {
          return s;
        },
        Dg: function () {
          return u;
        },
        tE: function () {
          return a;
        },
      });
      var l = i(35012),
        n = i(15863);
      let s = -1e3;
      function a(t, e) {
        return t
          ? t.working
            ? n.yi
            : t.last && e - new Date(t.last).getTime() < 6048e5
            ? n.u8
            : n.Ch
          : n.JW;
      }
      function o(t, e, i) {
        let n = (0, l.Vk)(e)(),
          s = Math.max(
            1,
            Math.round(Math.sqrt(t / (n < 0.25 ? 0.55 : n < 0.5 ? 1 : 1.9)))
          );
        return [Math.min(i, Math.ceil(t / s)), s];
      }
      function r(t, e) {
        return t.reduce((t, i) => {
          let l = i.ids.length;
          if (1 === l) return t + 1;
          let [n, s] = o(l, 3 * i.first + 11, e);
          return t + Math.min(n, e) * s;
        }, 0);
      }
      function h(t, e, i, l) {
        let n =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : 1 / 0,
          a = Array(i * Math.max(0, ...e.map((t) => t.r + t.h))).fill(void 0);
        for (let t of (e.forEach((t, e) => {
          for (let l = 0; l < t.h; l++)
            for (let n = 0; n < t.w; n++) a[(t.r + l) * i + t.c + n] = -1 - e;
        }),
        null != l ? l : []))
          null == a[t] && (a[t] = s);
        let r = (t, e, l, n) => {
            if (t + l > i) return i - t;
            for (let s = l - 1; s >= 0; s--)
              for (let l = 0; l < n; l++)
                if (null != a[(e + l) * i + t + s]) return s + 1;
            return 0;
          },
          h = 0,
          c = 0,
          u = new Map(),
          d = (t, e) => {
            if (1 === t && 1 === e) return h;
            let l = h;
            for (let [i, n] of u)
              i >> 12 <= t && (4095 & i) <= e && n > l && (l = n);
            for (let n; (n = r(l % i, Math.floor(l / i), t, e)); ) l += n;
            return u.set((t << 12) | e, l), l;
          };
        return (
          t.forEach((t, e) => {
            let l = t.ids.length,
              [s, r] = 1 === l ? [1, 1] : o(l, 3 * t.first + 11, i),
              u = Math.min(s, i),
              f = r;
            for (; null != a[h]; ) h++;
            let m = d(u, f);
            if (f > 1 && f !== u && Math.floor(m / i) + f > n && f <= i) {
              let t = f,
                e = u,
                l = d(t, e);
              Math.floor(l / i) + e < Math.floor(m / i) + f &&
                ((m = l), (u = t), (f = e));
            }
            (t.c = m % i), (t.r = Math.floor(m / i)), (t.w = u), (t.h = f);
            for (let l = 0; l < f; l++)
              for (let n = 0; n < u; n++) a[(t.r + l) * i + t.c + n] = e;
            c = Math.max(c, t.r + f);
          }),
          { grid: a, rows: Math.max(c, ...e.map((t) => t.r + t.h)) }
        );
      }
      function c(t, e, i, n) {
        var s, a, o, c, u, d, f, m;
        let p =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          g =
            null === (s = n.previousBlocks) || void 0 === s
              ? void 0
              : s.find((t) => "monitor" === t.kind),
          { w, h: v } = n.monitorSize(i, e),
          y = {
            kind: "monitor",
            w: Math.min(
              e,
              w + 2 * (null !== (a = n.monitorPad) && void 0 !== a ? a : 0)
            ),
            h: v,
            c: 0,
            r: 0,
            pad: null !== (o = n.monitorPad) && void 0 !== o ? o : 0,
            tab:
              null !== (c = null == g ? void 0 : g.tab) && void 0 !== c ? c : 0,
            since:
              null !== (u = null == g ? void 0 : g.since) && void 0 !== u
                ? u
                : 0,
            pinned:
              null !== (d = null == g ? void 0 : g.pinned) && void 0 !== d
                ? d
                : 0,
            tabRects: [],
          },
          b = r(t, e),
          k = null !== (f = n.cogSize) && void 0 !== f ? f : 1,
          M = null !== (m = n.playSize) && void 0 !== m ? m : 0,
          x = y.w * y.h + M * M + k * k;
        y.c = Math.max(0, Math.min(e - y.w, Math.round(0.5 * e - y.w / 2)));
        let S = {
            kind: "listen",
            w: M,
            h: M,
            c: e - k - M,
            r: 0,
            tab: 0,
            since: 0,
            pinned: 0,
            tabRects: [],
          },
          T = {
            kind: "settings",
            w: k,
            h: k,
            c: e - k,
            r: 0,
            tab: 0,
            since: 0,
            pinned: 0,
            tabRects: [],
          },
          A = (t) => {
            let i = Math.floor(t / e),
              l = t % e;
            return (
              (i >= y.r && i < y.r + y.h && l >= y.c && l < y.c + y.w) ||
              (i < M && l >= e - k - M && l < e - k) ||
              (i < k && l >= e - k)
            );
          },
          O = (t, i) => {
            let n = new Set(),
              s = (0, l.Vk)(7 + e);
            for (let l = 0; n.size < i && l < 20 * i; l++) {
              let i = Math.floor(s() * Math.max(1, t - 2) * e);
              A(i) || n.add(i);
            }
            return n;
          },
          P = (i, l) => {
            y.r = Math.max(1, i - y.h - 1);
            let n = h(t, [y, S, T], e, O(i, l), i),
              s = 0;
            for (let t = (n.rows - 1) * e; t < n.rows * e; t++)
              null == n.grid[t] && s++;
            return {
              packed: n,
              block: { ...y },
              listen: { ...S },
              trailing: s,
              rows: i,
              holes: l,
            };
          },
          I = (t, e) =>
            !e ||
            t.packed.rows < e.packed.rows ||
            (t.packed.rows === e.packed.rows && t.trailing < e.trailing),
          R = Math.max(p, Math.ceil((b + x) / e)),
          E = P(R, 0);
        for (let t = 0; E.packed.rows > R && t < 4; t++)
          E = P((R = E.packed.rows), 0);
        let L = E,
          j = Math.ceil(e / 8);
        for (let [t, e] of [
          [0, 1],
          [0, 0.5],
          [-1, 0],
          [-1, 0.5],
          [-2, 0],
          [-2, 0.5],
          [-3, 0],
          [-4, 0],
          [-5, 0],
        ]) {
          let i = Math.max(0, Math.round((E.trailing - j) * e));
          if ((0 === t && 0 === i) || R + t < y.h + 3) continue;
          let l = P(R + t, i);
          I(l, L) && (L = l);
        }
        let B = (t) => {
          let i = 0;
          for (let l = t.block.r - 1; l >= 0; l--) {
            let n = !0;
            for (let i = 0; i < e && n; i++)
              null != t.packed.grid[l * e + i] && (n = !1);
            if (!n) break;
            i++;
          }
          return i;
        };
        for (let t = 0; t < 6; t++) {
          let t = B(L);
          if (t < 1 || L.rows - t < y.h + 3) break;
          let e = P(L.rows - t, L.holes);
          if (e.packed.rows <= L.packed.rows - t) L = e;
          else break;
        }
        Object.assign(y, L.block), Object.assign(S, L.listen);
        let F = h(t, [y, S, T], e, O(L.rows, L.holes), L.rows);
        return { blocks: [y, S, T], packed: F };
      }
      function u(t) {
        var e, i;
        let s = null !== (e = t.now) && void 0 !== e ? e : Date.now(),
          o = Math.max(280, t.width),
          h = Math.max(240, t.targetHeight);
        if (t.resting) {
          let e = Math.max(20, Math.round(t.resting)),
            i = o / e,
            l = c([], e, i, t, Math.max(6, Math.floor(h / i)));
          return {
            cols: e,
            rows: l.packed.rows,
            cell: i,
            units: [],
            grid: l.packed.grid,
            blocks: l.blocks,
          };
        }
        let u = null !== (i = t.keep) && void 0 !== i ? i : 1,
          d = (function (t) {
            let e = t.filter((t) => t.node).sort((t, e) => t.seat - e.seat),
              i = (0, l.TV)(
                t.filter((t) => !t.node),
                (0, l.Vk)(7)
              ),
              n = [];
            for (
              let t = i.length - 1;
              t >= 0 && n.length < Math.round(0.35 * i.length);
              t--
            )
              1 === i[t].ids.length && n.push(...i.splice(t, 1));
            return [...e, ...i, ...n];
          })(
            (function (t, e, i, l) {
              let s = [],
                o = new Map();
              (null == e ? void 0 : e.length) &&
                e.forEach((t, e) => {
                  var i;
                  t &&
                    (null !== (i = o.get(t)) && void 0 !== i
                      ? i
                      : o.set(t, []).get(t)
                    ).push(e);
                });
              let r = new Set();
              for (let d = 0; d < t; d++) {
                var h, c, u;
                if (r.has(d)) continue;
                let t =
                    null !== (h = null == e ? void 0 : e[d]) && void 0 !== h
                      ? h
                      : null,
                  f = t && null !== (c = o.get(t)) && void 0 !== c ? c : [d];
                for (let t of f) r.add(t);
                let m = n.JW,
                  p = f[0],
                  g = !1,
                  w = 0;
                for (let t of f) {
                  let e = a(i[t], l);
                  i[t] && !g && ((p = t), (g = !0)), e > m && (m = e);
                  let n = (
                    null === (u = i[t]) || void 0 === u ? void 0 : u.last
                  )
                    ? new Date(i[t].last).getTime()
                    : 0;
                  n > w && (w = n);
                }
                s.push({
                  owner: t,
                  ids: f,
                  first: d,
                  c: 0,
                  r: 0,
                  w: 0,
                  h: 0,
                  activity: m,
                  node: g,
                  seat: p,
                  last: w,
                });
              }
              return s;
            })(t.total, t.owners, t.seats, s).filter(
              (t) =>
                u >= 1 ||
                t.node ||
                t.ids.length > 1 ||
                (u > 0 && t.first % Math.round(1 / u) == 0)
            )
          ),
          f = Math.max(24, Math.round(Math.sqrt(((r(d, 60) + 620) * o) / h))),
          m = (t, e) => {
            let i = 0;
            for (let l = (t.rows - 1) * e; l < t.rows * e; l++)
              null == t.grid[l] && i++;
            return i / e;
          },
          p = null;
        for (let e = Math.max(20, f - 8); e <= f + 10; e++) {
          let i = o / e,
            { packed: l } = c(d, e, i, t),
            n = l.rows * i;
          if (n > h) continue;
          let s = 0.5 > m(l, e);
          (!p || (s && !p.full) || (s === p.full && n > p.height)) &&
            (p = { cols: e, height: n, full: s });
        }
        let g = p ? p.cols : f + 10,
          w = o / g,
          v = c(d, g, w, t);
        if (!p)
          for (; v.packed.rows * w > h && g < 160; )
            (g += 2), (w = o / g), (v = c(d, g, w, t));
        return {
          cols: g,
          rows: v.packed.rows,
          cell: w,
          units: d,
          grid: v.packed.grid,
          blocks: v.blocks,
        };
      }
    },
    37978: function (t, e, i) {
      "use strict";
      i.d(e, {
        a: function () {
          return c;
        },
      });
      var l = i(90249),
        n = i(35848),
        s = i(52602),
        a = i(42272),
        o = i(35012),
        r = i(5448);
      let h = [];
      function c(t, e, i, c, u, d) {
        let { ctx: f, cell: m } = t,
          p = d.design,
          g = d.activity,
          w = d.n,
          v = (0, l.t0)(p, d.first),
          y = !d.mine && !g && 0.17 > (0, o.Vk)(41 * d.first + 3)(),
          b = d.edge;
        t.setInverted(y), t.setLamp(d.theme.lamp), t.setLit(d.lit);
        let k = t.P,
          M = (t) => (0, l.CW)(t) >= 0 && (0, l.CW)(t) < r.ty,
          x = p
            ? {
                queue: p.parts.filter((t) => s.tz[t] || M(t)),
                placed: [],
                slots: [],
                kinds: [],
              }
            : void 0,
          S = f.getTransform().a || 1,
          T = (t) => Math.round(t * S) / S,
          A = T(e),
          O = T(i),
          P = T(e + c) - A,
          I = T(i + u) - O;
        (f.fillStyle = k.face), f.fillRect(A, O, P, I);
        let R = 1 === w && 1 === d.cw && 1 === d.ch,
          E =
            1 === w && x
              ? x.queue.find((t) => (M(t) ? R : (0, s.ib)(t, c, u, m)))
              : void 0;
        1 === w &&
          x &&
          (x.slots.push([c / m, u / m]), void 0 !== E && x.placed.push(E));
        let L = void 0 !== E && M(E) ? (0, l.CW)(E) : -1,
          j = L >= 0 || (R && void 0 === E && 0.5 > (0, o.Vk)(23 * v + 9)()),
          B = L >= 0 ? L : j ? Math.floor((0, o.Vk)(29 * v + 1)() * r.ty) : -1,
          F = f.lineJoin;
        if (
          ((f.lineJoin = "miter"),
          (j && r.sk.has(B)) ||
            ((f.strokeStyle = b),
            (f.lineWidth = 1),
            (f.globalAlpha = g ? 1 : 0.85),
            f.strokeRect(A + 0.5, O + 0.5, P - 1, I - 1),
            (f.globalAlpha = 1)),
          (f.lineJoin = F),
          j)
        )
          (0, r.SU)(t, B, (0, o.Vk)(7 * v + 1), e, i, c, u, d.moving, d.tms);
        else if (1 === w) {
          let l = null != E ? E : (0, s.pd)(t, (0, o.Vk)(17 * v), c, u);
          (0, s.HQ)(t, l, (0, o.Vk)(7 * v + 1), e, i, c, u, d.moving, d.tms, g);
        } else {
          var C;
          (f.lineJoin = "miter"),
            (f.strokeStyle = b),
            (f.lineWidth = 1.5),
            f.strokeRect(A + 0.75, O + 0.75, P - 1.5, I - 1.5),
            (f.lineWidth = 1),
            (f.lineJoin = F),
            (0, n.xC)(
              t,
              (0, o.Vk)(5 * v + 3),
              e,
              i,
              c,
              u,
              d.moving,
              d.tms,
              g,
              v,
              void 0,
              0,
              new Set(),
              new Set(),
              null !== (C = null == p ? void 0 : p.kind) && void 0 !== C
                ? C
                : void 0,
              x
            );
        }
        if (d.cw >= 2 && m >= 14) {
          let t = 0.16 * m,
            l = Math.max(1, 0.055 * m);
          for (let [n, s] of ((f.strokeStyle = k.stroke),
          (f.globalAlpha = 0.55),
          (f.lineWidth = 1),
          [
            [e + t, i + t],
            [e + c - t, i + t],
            [e + t, i + u - t],
            [e + c - t, i + u - t],
          ]))
            f.beginPath(),
              f.arc(n, s, l, 0, a.gc),
              f.stroke(),
              f.beginPath(),
              f.moveTo(n - 0.7 * l, s + 0.3 * l),
              f.lineTo(n + 0.7 * l, s - 0.3 * l),
              f.stroke();
          f.globalAlpha = 1;
        }
        if (d.ch >= 4 && d.cw <= 2 && m >= 14) {
          let t = Math.max(2, 0.1 * m);
          (f.fillStyle = k.stroke),
            (f.globalAlpha = 0.18),
            f.fillRect(e + 1, i + 1, t, u - 2),
            f.fillRect(e + c - 1 - t, i + 1, t, u - 2),
            (f.globalAlpha = 1);
        }
        return (
          t.setInverted(!1),
          t.setLit(0),
          t.setFace(null),
          t.setScheme(null),
          x
            ? { inverted: y, placed: x.placed, slots: x.slots, kinds: x.kinds }
            : { inverted: y, placed: h, slots: h, kinds: h }
        );
      }
    },
    31857: function (t, e, i) {
      "use strict";
      i.d(e, {
        AW: function () {
          return O;
        },
        WW: function () {
          return p;
        },
        aZ: function () {
          return S;
        },
        rC: function () {
          return T;
        },
        xJ: function () {
          return A;
        },
      });
      var l = i(41523),
        n = i(90249),
        s = i(37978),
        a = i(93412),
        o = i(19890),
        r = i(42272),
        h = i(35012),
        c = i(76579),
        u = i(12765),
        d = i(15863);
      let f = null,
        m = null;
      function p() {
        return f
          ? Promise.resolve()
          : null != m
          ? m
          : (m = Promise.all([
              i.e(6661).then(i.bind(i, 56661)),
              Promise.all([i.e(6661), i.e(5826)]).then(i.bind(i, 75826)),
            ]).then((t) => {
              let [e, i] = t;
              f = { ...e, makeMonitorBack: i.makeMonitorBack };
            }));
      }
      let g = [1, 0.86, 0.72, 0.58, 0.44, 0.3, 0.16],
        w = " .:-=+*#%@",
        v = new Set([
          "implement",
          "test",
          "review",
          "contract_review",
          "integrate",
          "manifest",
          "deploy",
          "publish",
          "build_contract_project",
          "build_dapp",
        ]),
        y = /https?:\/\/[^\s<>"'()]+[^\s<>"'().,;:!?…]/g,
        b = "#3ecf7a",
        k = "#d97757",
        M = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"],
        x = 1e3 / 30,
        S = 152 / 1921,
        T = 3,
        A = 639;
      class O {
        get ledColour() {
          return this.theme.lamp;
        }
        litLevel(t) {
          return t.activity === d.yi
            ? 2
            : "all" === this.lit ||
              ("active" === this.lit && t.activity >= d.Ch)
            ? 1
            : 0;
        }
        get pal() {
          return this.theme.light;
        }
        get PHOSPHOR() {
          return this.theme.term.ink;
        }
        get PHOSPHOR_DIM() {
          return this.theme.term.dim;
        }
        get edge() {
          var t;
          return null !== (t = this.pal.frame) && void 0 !== t
            ? t
            : this.pal.stroke;
        }
        get wallHeight() {
          return this.height;
        }
        destroy() {
          if ((cancelAnimationFrame(this.raf), (this.raf = 0), this.film)) {
            var t;
            null === (t = this.film.audio) || void 0 === t || t.pause(),
              (this.film = null);
          }
        }
        setTheme(t) {
          var e;
          let i = o.yU[t];
          i !== this.theme &&
            ((this.theme = i),
            null === (e = this.painter) ||
              void 0 === e ||
              e.setLamp(this.ledColour),
            this.snapshot &&
              this.layout &&
              this.layOut(this.snapshot, this.width, this.target));
        }
        setLit(t) {
          if (t === this.lit) return;
          this.lit = t;
          let e = this.layout;
          if (e) for (let t of e.units) this.redraw(t, 0, !1, !1);
        }
        setMotion(t) {
          if (t === this.motion) return;
          this.motion = t;
          let e = this.layout;
          if (e)
            for (let i of (this.live.clear(),
            (this.liveN =
              "off" === t
                ? 0
                : "all" === t
                ? e.units.length
                : Math.min(48, Math.max(12, Math.round(e.units.length / 14)))),
            e.units))
              this.redraw(i, 0, !1, !1);
        }
        setShown(t) {
          t !== this.shown &&
            ((this.shown = t),
            cancelAnimationFrame(this.raf),
            (this.raf = 0),
            t &&
              this.layout &&
              !this.opts.still &&
              (this.raf = requestAnimationFrame(this.frame)));
        }
        update(t, e, i) {
          this.target = i;
          let l = Math.max(280, e),
            n = Object.keys(t.seats)
              .map(Number)
              .sort((t, e) => t - e)
              .join(","),
            s = this.laidFrom,
            a =
              0 !== t.at &&
              null != this.layout &&
              null != s &&
              s.width === l &&
              s.target === i &&
              s.nodes === n &&
              O.sameOwners(s.owners, t.owners),
            o = this.firstJobs(t);
          for (let e of (this.note(t),
          a
            ? this.refresh()
            : ((this.laidFrom = {
                width: l,
                target: i,
                owners: t.owners,
                nodes: n,
              }),
              this.layOut(t, l, i)),
          o))
            this.firstJob(e);
        }
        firstJobs(t) {
          var e;
          let i = this.snapshot;
          if (!i || 0 === i.at || 0 === t.at) return [];
          let l = [];
          for (let [n, s] of Object.entries(t.seats))
            !(s.accepted > 0) ||
              (null === (e = i.seats[Number(n)]) || void 0 === e
                ? void 0
                : e.accepted) ||
              l.push(Number(n));
          return l.length > 3 ? [] : l;
        }
        firstJob(t) {
          this.echo(
            ["★ agent #".concat(t, " finished its first job ever!")],
            b
          ),
            this.backs ||
              (this.setBacks(!0, !1),
              window.setTimeout(() => this.setBacks(!1), 4200));
        }
        static sameOwners(t, e) {
          if (t === e) return !0;
          if (!t || !e || t.length !== e.length) return !1;
          for (let i = 0; i < t.length; i++) if (t[i] !== e[i]) return !1;
          return !0;
        }
        static onIndices(t) {
          let e = [];
          return (
            t.forEach((t, i) => {
              t.activity >= d.u8 && e.push(i);
            }),
            e
          );
        }
        refresh() {
          let t = this.layout,
            e = this.snapshot,
            i = Date.now();
          t.units.forEach((t, l) => {
            let n = d.JW,
              s = 0;
            for (let l of t.ids) {
              let t = e.seats[l],
                o = (0, a.tE)(t, i);
              o > n && (n = o);
              let r = (null == t ? void 0 : t.last)
                ? new Date(t.last).getTime()
                : 0;
              r > s && (s = r);
            }
            (n === t.activity && s === t.last) ||
              ((t.activity = n),
              (t.last = s),
              this.warm.has(l) ||
                this.live.has(l) ||
                this.redraw(t, 0, !1, !1));
          }),
            (this.working = O.onIndices(t.units)),
            this.drawBlocks(performance.now());
        }
        note(t) {
          var e, i;
          let l = t.health.agentsOnline;
          this.mine &&
            l >= 100 &&
            !this.party &&
            O.firstTime(100 * Math.floor(l / 100)) &&
            this.celebrate(l, performance.now());
          let n = null === (e = t.events[0]) || void 0 === e ? void 0 : e.at;
          if (
            (n && !this.arrived
              ? ((this.arrived = performance.now()),
                (this.newest = {
                  at: n,
                  since: this.opts.still ? 0 : this.arrived,
                }))
              : n &&
                n !==
                  (null === (i = this.newest) || void 0 === i
                    ? void 0
                    : i.at) &&
                (this.newest = { at: n, since: performance.now() }),
            t.at && t.counts.inferenceTokens > 0)
          ) {
            let e = this.pulse[this.pulse.length - 1];
            if (!e || t.at > e.at)
              for (
                this.pulse.push({ at: t.at, tokens: t.counts.inferenceTokens });
                this.pulse.length > O.PULSE_CELLS + 8;

              )
                this.pulse.shift();
          }
          this.snapshot = t;
        }
        layOut(t, e, i) {
          var l, n;
          this.width = e;
          let s =
              null === (l = this.layout) || void 0 === l ? void 0 : l.blocks,
            o = 0 === t.at,
            h = "imd.wall.cols:".concat(Math.round(this.width / 40)),
            c = o
              ? null !==
                  (n = (function (t) {
                    try {
                      let e = Number(localStorage.getItem(t));
                      return e >= 20 && e <= 200 ? e : void 0;
                    } catch (t) {
                      return;
                    }
                  })(h)) && void 0 !== n
                ? n
                : Math.round(this.width / (this.width < 640 ? 21 : 17))
              : void 0;
          this.layout = (0, a.Dg)({
            resting: c,
            width: this.width,
            targetHeight: i,
            total: d.Is,
            seats: t.seats,
            owners: t.owners,
            previousBlocks: s,
            keep: this.width < 640 ? 0 : 1,
            monitorPad: 0,
            monitorSize: (t, e) => this.monitorSize(t, e),
            cogSize: this.opts.bare ? 0 : 2,
            playSize: this.opts.bare ? 0 : 2,
          });
          let u = this.layout;
          o ||
            this.opts.forget ||
            (function (t, e) {
              try {
                localStorage.setItem(t, String(e));
              } catch (t) {}
            })(h, u.cols),
            this.setMetrics(u.cell),
            (this.height = u.rows * u.cell);
          let f = Math.min(2, window.devicePixelRatio || 1);
          (this.canvas.width = Math.round(this.width * f)),
            (this.canvas.height = Math.round(this.height * f)),
            this.ctx.setTransform(f, 0, 0, f, 0, 0),
            (this.ctx.lineJoin = "round"),
            (this.painter = (0, r.zg)(
              this.ctx,
              u.cell,
              this.theme.light,
              this.theme.dark
            )),
            this.painter.setLamp(this.ledColour);
          let m = this.ctx;
          (m.fillStyle = this.pal.wall),
            m.fillRect(0, 0, this.width, this.height),
            this.drawBlocks(0);
          let p = (t) => {
            var e;
            let i = u.grid[t];
            if (null == i || i <= a.BT) return !0;
            if (i >= 0) return !1;
            let l = u.blocks[-1 - i],
              n = t % u.cols,
              s = null !== (e = l.pad) && void 0 !== e ? e : 0;
            return "monitor" === l.kind && (n < l.c + s || n >= l.c + l.w - s);
          };
          this.margins = [];
          for (let t = 0; t < u.rows * u.cols; t++)
            p(t) && this.margins.push(t);
          for (let t of (this.paintMargins(), u.units)) this.draw(t, 0, !1, !1);
          (this.working = O.onIndices(u.units)),
            (this.liveN =
              "off" === this.motion
                ? 0
                : "all" === this.motion
                ? u.units.length
                : Math.min(48, Math.max(12, Math.round(u.units.length / 14)))),
            this.live.clear(),
            this.warm.clear(),
            (this.hot = null),
            cancelAnimationFrame(this.raf),
            !this.opts.still &&
              this.shown &&
              (this.raf = requestAnimationFrame(this.frame));
        }
        setMetrics(t) {
          (this.FS = Math.max(9, Math.min(13, 0.5 * t))),
            (this.LH = 1.55 * this.FS),
            (this.HEAD = 2.5 * this.FS),
            (this.PAD = Math.max(8, 0.5 * t)),
            (this.BEZ = Math.max(4, 0.26 * t));
        }
        mono(t) {
          return ""
            .concat(t, " ")
            .concat(this.FS, "px ")
            .concat(this.opts.fontFamily);
        }
        measure(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 400;
          return (this.ctx.font = this.mono(e)), this.ctx.measureText(t).width;
        }
        static hhmm(t) {
          let e = new Date(t);
          return Number.isNaN(e.getTime())
            ? "--:--"
            : ""
                .concat(String(e.getHours()).padStart(2, "0"), ":")
                .concat(String(e.getMinutes()).padStart(2, "0"));
        }
        static short(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 240,
            i = t.replace(/\s+/g, " ").trim();
          if (i.length <= e) return i;
          let l = i.slice(0, e);
          return "".concat(
            l
              .slice(0, Math.max(l.lastIndexOf(" "), e - 12))
              .replace(/[\s·,;:]+$/, ""),
            "…"
          );
        }
        static chainName(t) {
          let e = Number(t);
          return 1 === e
            ? "Ethereum"
            : 8453 === e
            ? "Base"
            : 11155111 === e
            ? "Sepolia"
            : "chain ".concat(e);
        }
        static kindOf(t, e) {
          let i = t.toLowerCase(),
            l = (null != e ? e : "").toLowerCase();
          if (
            /^answer this question about chain \d+ over blocks/.test(
              i.trim()
            ) ||
            "oracle_assess" === l
          )
            return "oracle";
          let n =
              /\b(contract|hook|token|foundry|solidity)\b/.test(i) ||
              /contract|manifest/.test(l),
            s =
              /\b(dapp|website|web app|frontend|landing page|site)\b/.test(i) ||
              /site|dapp/.test(l);
          return n && s
            ? "launch"
            : s
            ? "site"
            : n
            ? "contract"
            : /\b(research|report|analy[sz]e|survey|write up|investigate)\b/.test(
                i
              )
            ? "research"
            : "job";
        }
        static title(t) {
          let e = t.replace(/\s+/g, " ").trim(),
            i =
              /^Answer this question about chain \d+ over blocks \d+ to \d+, exactly as \S+ pins it:\s*/i.exec(
                e
              );
          i && (e = e.slice(i[0].length));
          let l = (e = e.replace(
            /\s*Write only artifacts\/answer\.json.*$/i,
            ""
          )).search(/[.?!](\s|$)/);
          return (
            l > 0 && (e = e.slice(0, l)),
            (e =
              (e = (e = e.replace(/,? as of the pinned window/i, ""))
                .replace(/^what (is|was|are|were) (the )?/i, "")
                .trim())
                .charAt(0)
                .toUpperCase() + e.slice(1)) || t.slice(0, 60)
          );
        }
        static stepWord(t, e, i) {
          var l, n, s;
          return null !==
            (s =
              null ===
                (l =
                  null !== (n = O.STEP_WORD[t]) && void 0 !== n
                    ? n
                    : O.STEP_WORD[e]) || void 0 === l
                ? void 0
                : l[i]) && void 0 !== s
            ? s
            : null;
        }
        static feedLine(t, e, i) {
          var n, s, a, o, r, h;
          let c,
            u,
            d,
            f,
            m = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            p = arguments.length > 4 ? arguments[4] : void 0,
            g = arguments.length > 5 ? arguments[5] : void 0,
            w = O.hhmm(t.at),
            y = function () {
              for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
                e[i] = arguments[i];
              return e.filter(Boolean).join(" \xb7 ");
            },
            b = (t, i) => (e ? null : O.title(t)),
            k =
              "agent" === t.kind
                ? "joined"
                : "oracle" ===
                  O.kindOf(
                    "objective" in t ? t.objective : "",
                    "step" in t ? t.step : null
                  )
                ? "oracle"
                : "job",
            M = "oracle" === k;
          switch (t.kind) {
            case "job":
              (c = "NEW"),
                (u = "swarm"),
                (d = M ? "asked" : "posted"),
                (f = O.title(t.objective));
              break;
            case "done": {
              let e = O.title(t.objective);
              "completed" === t.state
                ? ((c = "PASS"),
                  (u = "swarm"),
                  (d = M ? "signed" : "completed"),
                  (f = y(
                    e,
                    M
                      ? null
                      : ""
                          .concat(t.steps, " step")
                          .concat(1 === t.steps ? "" : "s")
                  )))
                : "cancelled" === t.state
                ? ((c = "QUEUE"), (u = "swarm"), (d = "cancelled"), (f = e))
                : ((c = "FAIL"),
                  (u = "swarm"),
                  (d = "stopped"),
                  (f = y(e, t.failure ? O.short(t.failure) : null)));
              break;
            }
            case "node": {
              let l = null == t.tokenId ? "swarm" : "agent #".concat(t.tokenId),
                s =
                  "failed" === t.state &&
                  /cancel/i.test(
                    null !== (n = t.reason) && void 0 !== n ? n : ""
                  ),
                a =
                  v.has(t.step) || "leased" === t.state || "working" === t.state
                    ? t.step
                    : null,
                o = M ? "answered" : O.stepWord(t.role, t.step, 0),
                r = M ? "working" : O.stepWord(t.role, t.step, 1);
              "accepted" === t.state
                ? ((c = "PASS"),
                  (u = l),
                  (d = null != o ? o : "passed"),
                  (f = y(i, b(t.objective, t.step), o ? null : a)))
                : s
                ? ((c = "QUEUE"),
                  (u = "swarm"),
                  (d = "cancelled"),
                  (f = y(e ? null : O.title(t.objective), a)))
                : "failed" === t.state
                ? ((c = "FAIL"),
                  (u = l),
                  (d = "failed"),
                  (f = y(
                    b(t.objective, t.step),
                    a,
                    t.reason ? O.short(t.reason) : null
                  )))
                : "ready" === t.state || "waiting" === t.state
                ? ((c = "QUEUE"),
                  (u = l),
                  (d = null == t.tokenId ? "queued" : "called"),
                  (f = y(O.title(t.objective), a)))
                : "leased" === t.state || "working" === t.state
                ? ((c = "WORK"),
                  (u = l),
                  (d = null != r ? r : "working"),
                  (f = y(b(t.objective, t.step), r ? null : a)))
                : ((c = "CHECK"),
                  (u = l),
                  (d = "verifying"),
                  (f = y(b(t.objective, t.step), a)));
              break;
            }
            case "review": {
              (c = "CHAIN"), (u = "verifier"), (d = "onchain");
              let e = t.scores,
                i = t.accepted,
                l =
                  null == i
                    ? "".concat(e, " score").concat(1 === e ? "" : "s")
                    : i === e
                    ? ""
                        .concat(e, " score")
                        .concat(1 === e ? "" : "s", ", all accepted")
                    : 0 === i
                    ? ""
                        .concat(e, " score")
                        .concat(1 === e ? "" : "s", ", all rejected")
                    : "".concat(e, " scores, ").concat(i, " accepted");
              f = y(b(t.objective), l);
              break;
            }
            case "site":
              (c = "SITE"),
                (u = "publisher"),
                (d = t.ensName ? "hosted" : "published"),
                (f = y(
                  b(t.objective),
                  null !== (s = t.ensName) && void 0 !== s
                    ? s
                    : t.cid
                    ? "".concat(t.cid.slice(0, 16), "…")
                    : null
                ));
              break;
            case "launch":
              (c = "LIVE"),
                (u = "deployer"),
                (d = "deployed"),
                (f = y(
                  null !== (a = t.token) && void 0 !== a
                    ? a
                    : "launch ".concat(t.launchNumber),
                  O.chainName(t.chainId)
                ));
              break;
            case "agent": {
              (c = "JOIN"), (u = "agent #".concat(t.tokenId));
              let e =
                  null !== (o = null == p ? void 0 : p.accepted) && void 0 !== o
                    ? o
                    : 0,
                i =
                  null !== (r = null == p ? void 0 : p.failed) && void 0 !== r
                    ? r
                    : 0,
                n =
                  null !== (h = null == p ? void 0 : p.last) && void 0 !== h
                    ? h
                    : null,
                s = n ? Date.now() - new Date(n).getTime() : null,
                a = e + i > 0 || null != n;
              d = a || m ? "awake" : "ready";
              let f = a
                  ? null == s
                    ? null
                    : s < 36e5
                    ? "last worked ".concat((0, l.F6)(n))
                    : "back after ".concat((0, l.F6)(n).replace(/ ago$/, ""))
                  : "first shift",
                v = g
                  ? g.seats > 1
                    ? "".concat(g.name, ", ").concat(g.seats, " seats")
                    : g.name
                  : "",
                y = [
                  {
                    t: ""
                      .concat(w.padEnd(7))
                      .concat(k.padEnd(8))
                      .concat(u.padEnd(13)),
                  },
                  { t: d.padEnd(13), wt: 600 },
                  { t: v, face: t.tokenId },
                  ...(f ? [{ t: v ? " \xb7 ".concat(f) : f }] : []),
                ];
              return { t: y.map((t) => t.t).join(""), kind: c, spans: y };
            }
          }
          let x = [
            {
              t: ""
                .concat(w.padEnd(7))
                .concat(k.padEnd(8))
                .concat(u.padEnd(13)),
            },
            { t: d.padEnd(13), wt: 600 },
            { t: f },
          ];
          return { t: x.map((t) => t.t).join(""), kind: c, spans: x };
        }
        static jobOf(t) {
          return "launch" === t.kind || "agent" === t.kind ? null : t.jobId;
        }
        static fmt(t) {
          return null == t ? "\xb7" : t.toLocaleString("en-US");
        }
        static compact(t) {
          return t >= 1e9
            ? "".concat((t / 1e9).toFixed(1), "B")
            : t >= 1e6
            ? "".concat((t / 1e6).toFixed(1), "M")
            : t >= 1e3
            ? "".concat((t / 1e3).toFixed(1), "K")
            : String(t);
        }
        static up(t) {
          return null == t ? "unknown" : t ? "up" : "down";
        }
        static step(t) {
          var e;
          let i = 10 ** Math.floor(Math.log10(t));
          return (
            (null !== (e = [1, 2, 5, 10].find((e) => t <= e * i)) &&
            void 0 !== e
              ? e
              : 10) * i
          );
        }
        tabs(t) {
          var e, i;
          let l = this.snapshot,
            n = l.health,
            s = (l.counts, l.events),
            a = this.pal.accent;
          O.fmt;
          let o = n.workingNow > 0 ? b : null,
            r = [...s]
              .reverse()
              .filter((t) => !("review" === t.kind && !t.scores)),
            h = new Map();
          for (let t of s)
            "objective" in t &&
              t.objective &&
              (null !==
                (i =
                  null === (e = h.get(t.jobId)) || void 0 === e
                    ? void 0
                    : e.length) && void 0 !== i
                ? i
                : 0) < t.objective.length &&
              h.set(t.jobId, t.objective);
          let c = (t) =>
              "job" === t.kind && h.has(t.jobId)
                ? { ...t, objective: h.get(t.jobId) }
                : t,
            u = Math.floor(Date.now() / 1e3),
            d = this.feedRows;
          if (
            s.length &&
            d &&
            d.snapshot === l &&
            d.answers === this.answers &&
            d.names === this.names &&
            d.second === u
          )
            return [
              {
                title: "LIVE",
                lamp: o,
                prompt: !0,
                feed: !0,
                rows: d.rows.concat(this.echoes),
              },
            ];
          let f = new Set(),
            m = s.length
              ? r.map((t, e) => {
                  var i, n, s, o, h, u;
                  let d = r[e - 1],
                    m =
                      null != d &&
                      null != O.jobOf(d) &&
                      O.jobOf(d) === O.jobOf(t),
                    p = "agent" === t.kind && f.has(t.tokenId);
                  "node" === t.kind && null != t.tokenId && f.add(t.tokenId);
                  let g =
                      "agent" === t.kind &&
                      null !== (s = l.seats[t.tokenId]) &&
                      void 0 !== s
                        ? s
                        : null,
                    w =
                      "agent" === t.kind &&
                      null !==
                        (o =
                          null === (n = l.owners) || void 0 === n
                            ? void 0
                            : null === (i = n[t.tokenId]) || void 0 === i
                            ? void 0
                            : i.toLowerCase()) &&
                      void 0 !== o
                        ? o
                        : null,
                    v = w
                      ? {
                          name:
                            null !== (h = this.names.get(w)) && void 0 !== h
                              ? h
                              : ""
                                  .concat(w.slice(0, 6), "…")
                                  .concat(w.slice(-4)),
                          seats:
                            null !== (u = this.seatsHeld(l).get(w)) &&
                            void 0 !== u
                              ? u
                              : 0,
                        }
                      : null,
                    {
                      t: y,
                      kind: k,
                      spans: M,
                    } = O.feedLine(
                      c(t),
                      m,
                      "jobId" in t ? this.answers.get(t.jobId) : null,
                      p,
                      g,
                      v
                    ),
                    x = {
                      t: m ? "⎿" : ">",
                      col:
                        "FAIL" === k ? a : "PASS" === k ? b : this.PHOSPHOR_DIM,
                    };
                  return {
                    t: y,
                    spans: M,
                    col: "FAIL" === k ? a : null,
                    al: "QUEUE" === k || "CHECK" === k ? 0.55 : 1,
                    lead: x,
                  };
                })
              : n.reachable
              ? 0 === l.at
                ? [
                    {
                      t: "Reading the control plane… (".concat(
                        Math.floor((t - this.born) / 1e3),
                        "s)"
                      ),
                      al: 0.7,
                      lead: { t: M[Math.floor(t / 80) % M.length], col: k },
                    },
                  ]
                : [{ t: "no events yet" }]
              : [{ t: "control plane unreachable", col: a }];
          return (
            s.length &&
              (this.feedRows = {
                snapshot: l,
                answers: this.answers,
                names: this.names,
                second: u,
                rows: m,
              }),
            [
              {
                title: "LIVE",
                lamp: o,
                prompt: !0,
                feed: !0,
                rows: m.concat(this.echoes),
              },
            ]
          );
        }
        seatsHeld(t) {
          var e, i, l;
          if (
            (null === (e = this.held) || void 0 === e ? void 0 : e.snapshot) ===
            t
          )
            return this.held.by;
          let n = new Map();
          for (let e of null !== (i = t.owners) && void 0 !== i ? i : [])
            if (e) {
              let t = e.toLowerCase();
              n.set(t, (null !== (l = n.get(t)) && void 0 !== l ? l : 0) + 1);
            }
          return (this.held = { snapshot: t, by: n }), n;
        }
        status() {
          var t, e;
          let i = this.snapshot,
            l = i.health,
            n = (i.counts, O.fmt);
          return {
            groups: l.reachable
              ? [
                  [
                    {
                      n: n(l.agentsOnline),
                      word:
                        1 === l.agentsOnline ? "agent online" : "agents online",
                    },
                    { n: n(l.workingNow), word: "working" },
                  ],
                  [
                    { n: "", word: "24h:" },
                    {
                      n: n(
                        null !== (t = l.jobsDoneLastDay) && void 0 !== t ? t : 0
                      ),
                      word: 1 === l.jobsDoneLastDay ? "job" : "jobs",
                    },
                    {
                      n: n(
                        null !== (e = l.oraclesDoneLastDay) && void 0 !== e
                          ? e
                          : 0
                      ),
                      word: 1 === l.oraclesDoneLastDay ? "oracle" : "oracles",
                    },
                    {
                      n: n(l.acceptedLastDay),
                      word: 1 === l.acceptedLastDay ? "step" : "steps",
                    },
                  ],
                ]
              : [[{ n: "", word: "control plane unreachable" }]],
            systems: [
              { name: "verifier", up: l.verifierUp },
              { name: "publisher", up: l.publisherUp },
              { name: "deployer", up: l.deployerUp },
            ],
          };
        }
        groupWidth(t) {
          let { ctx: e, FS: i } = this;
          return t.reduce((l, n, s) => {
            e.font = this.mono(600);
            let a = n.n ? e.measureText(n.n).width + 0.55 * i : 0;
            return (
              (e.font = this.mono(400)),
              l +
                a +
                e.measureText(n.word).width +
                (s < t.length - 1
                  ? e.measureText(n.n ? " \xb7 " : " ").width
                  : 0)
            );
          }, 0);
        }
        group(t, e, i, l, n) {
          let s =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : 1,
            { ctx: a, FS: o } = this;
          return (
            (a.textBaseline = "top"),
            l.forEach((t, r) => {
              if (
                (t.n &&
                  ((a.font = this.mono(600)),
                  (a.fillStyle = n),
                  (a.globalAlpha = 0.95 * s),
                  a.fillText(t.n, e, i),
                  (e += a.measureText(t.n).width + 0.55 * o)),
                (a.font = this.mono(400)),
                (a.fillStyle = n),
                (a.globalAlpha = 0.6 * s),
                a.fillText(t.word, e, i),
                (e += a.measureText(t.word).width),
                r < l.length - 1)
              ) {
                let l = t.n ? " \xb7 " : " ";
                (a.globalAlpha = 0.35 * s),
                  a.fillText(l, e, i),
                  (e += a.measureText(l).width);
              }
            }),
            (a.globalAlpha = 1),
            e
          );
        }
        setMarket(t) {
          (this.market = t), this.layout && this.drawBlocks(performance.now());
        }
        rates() {
          let { WINDOW_MS: t, PULSE_CELLS: e } = O,
            i = this.pulse,
            l = [];
          for (let e = 1; e < i.length; e++) {
            let n = i[e],
              s = e - 1;
            for (; s > 0 && i[s].at > n.at - t; ) s--;
            let a = i[s],
              o = (n.at - a.at) / 6e4;
            o > 0 && l.push(Math.max(0, (n.tokens - a.tokens) / o));
          }
          return l.slice(-e);
        }
        setListening(t) {
          t !== this.listening &&
            ((this.listening = t),
            this.layout && this.drawBlocks(performance.now()));
        }
        hotPlay(t) {
          t !== this.playHot &&
            ((this.playHot = t), this.drawBlocks(performance.now()));
        }
        drawPlay(t) {
          let e = this.layout,
            { ctx: i } = this,
            l = e.cell,
            n = t.c * l + 1,
            s = t.r * l + 1,
            a = t.w * l - 2,
            o = t.h * l - 2,
            h = Math.min(a, o);
          for (let [t, e] of ((i.fillStyle = this.pal.face),
          i.fillRect(n, s, a, o),
          this.playHot &&
            ((i.fillStyle = "#fff"),
            (i.globalAlpha = 0.22),
            i.fillRect(n, s, a, o),
            (i.globalAlpha = 1)),
          (i.strokeStyle = this.edge),
          (i.lineWidth = 1),
          i.strokeRect(n + 0.5, s + 0.5, a - 1, o - 1),
          (i.fillStyle = this.pal.stroke),
          [
            [n + 0.12 * h, s + 0.12 * h],
            [n + a - 0.12 * h, s + 0.12 * h],
            [n + 0.12 * h, s + o - 0.12 * h],
            [n + a - 0.12 * h, s + o - 0.12 * h],
          ]))
            i.beginPath(),
              i.arc(t, e, Math.max(1, 0.03 * h), 0, r.gc),
              i.fill();
          let c = n + a / 2,
            u = s + o / 2,
            d = 0.17 * h;
          if (this.listening) {
            let t = 0.55 * d;
            i.fillRect(c - 0.8 * d, u - d, t, 2 * d),
              i.fillRect(c + 0.8 * d - t, u - d, t, 2 * d);
          } else
            i.beginPath(),
              i.moveTo(c - 0.7 * d, u - d),
              i.lineTo(c + d, u),
              i.lineTo(c - 0.7 * d, u + d),
              i.closePath(),
              i.fill();
          (i.fillStyle = this.listening ? this.pal.ok : this.pal.stroke),
            (i.globalAlpha = this.listening ? 1 : 0.28),
            i.beginPath(),
            i.arc(
              n + a - 0.24 * h,
              s + 0.24 * h,
              Math.max(1.5, 0.055 * h),
              0,
              r.gc
            ),
            i.fill(),
            (i.globalAlpha = 1),
            this.playHot && this.ring(n, s, a, o);
        }
        hotCog(t) {
          t !== this.cogHot &&
            ((this.cogHot = t), this.drawBlocks(performance.now()));
        }
        drawCog(t) {
          let e = this.layout,
            { ctx: i } = this,
            l = e.cell,
            n = t.c * l + 1,
            s = t.r * l + 1,
            a = t.w * l - 2,
            o = t.h * l - 2;
          (i.fillStyle = this.pal.face),
            i.fillRect(n, s, a, o),
            this.cogHot &&
              ((i.fillStyle = "#fff"),
              (i.globalAlpha = 0.22),
              i.fillRect(n, s, a, o),
              (i.globalAlpha = 1)),
            (i.strokeStyle = this.edge),
            (i.lineWidth = 1),
            i.strokeRect(n + 0.5, s + 0.5, a - 1, o - 1);
          let h = Math.min(a, o),
            c = n + a / 2,
            u = s + o / 2,
            d = 0.13 * h;
          for (let [t, e] of ((i.fillStyle = this.pal.stroke),
          [
            [n + 0.12 * h, s + 0.12 * h],
            [n + a - 0.12 * h, s + 0.12 * h],
            [n + 0.12 * h, s + o - 0.12 * h],
            [n + a - 0.12 * h, s + o - 0.12 * h],
          ]))
            i.beginPath(),
              i.arc(t, e, Math.max(1, 0.03 * h), 0, r.gc),
              i.fill();
          (i.strokeStyle = this.pal.stroke),
            (i.lineWidth = Math.max(1.5, 0.06 * h)),
            i.beginPath(),
            i.arc(c, u, d, 0, r.gc),
            i.stroke();
          for (let t = 0; t < 8; t++) {
            let e = (t / 8) * r.gc,
              l = d + 0.3 * i.lineWidth,
              n = 0.25 * h;
            i.beginPath(),
              i.moveTo(c + Math.cos(e) * l, u + Math.sin(e) * l),
              i.lineTo(c + Math.cos(e) * n, u + Math.sin(e) * n),
              i.stroke();
          }
          (i.lineWidth = 1), this.cogHot && this.ring(n, s, a, o);
        }
        monitorSize(t, e) {
          var i;
          if (this.opts.bare) return { w: 0, h: 0 };
          this.setMetrics(t);
          let { FS: l, PAD: n, BEZ: s, HEAD: a, LH: o } = this,
            r = Math.min(0.54 * this.width, 780) - 2 * n - 2 * s,
            h = (this.width < 640 ? 18 : 12) + 4.2;
          return {
            w: Math.min(
              e,
              Math.ceil(
                (Math.max(r, 108 * l * 0.6) + 2 * n + 2 * s + 1.2 * l) / t
              )
            ),
            h: Math.min(
              Math.ceil(
                Math.ceil(2600 / e) *
                  (null !== (i = this.opts.glass) && void 0 !== i ? i : 0.5)
              ),
              Math.ceil((a + h * o + 1.6 * n + 2 * s) / t)
            ),
          };
        }
        chrome(t, e, i, l, n, s) {
          let { ctx: a, BEZ: o, PAD: r } = this;
          (a.fillStyle = this.pal.face),
            a.fillRect(t, e, i, l),
            (a.strokeStyle = this.edge),
            (a.lineWidth = 1),
            a.strokeRect(t + 0.5, e + 0.5, i - 1, l - 1),
            n && this.ring(t, e, i, l);
          let h = t + o,
            c = e + o,
            u = i - 2 * o,
            d = l - 2 * o;
          if (
            ((a.fillStyle = s ? "#040604" : this.pal.screen),
            a.fillRect(h, c, u, d),
            s)
          ) {
            (a.fillStyle = "#000"), (a.globalAlpha = 0.28);
            for (let t = c + 1; t < c + d; t += 3) a.fillRect(h, t, u, 1);
            a.globalAlpha = 1;
          }
          return (
            (a.strokeStyle = s ? this.PHOSPHOR : this.pal.face),
            (a.globalAlpha = 0.18),
            a.strokeRect(h + 1.5, c + 1.5, u - 3, d - 3),
            (a.globalAlpha = 1),
            {
              x: t,
              y: e,
              w: i,
              h: l,
              sx: h,
              sy: c,
              sw: u,
              sh: d,
              tx: h + r,
              ty: c + 0.8 * r,
              tw: u - 2 * r,
              term: s,
            }
          );
        }
        header(t, e, i) {
          var l;
          let { ctx: n, FS: s, PAD: a, HEAD: o } = this,
            r = t.term ? this.PHOSPHOR : this.pal.face;
          e.tabRects = [];
          let { groups: h, systems: c } = this.status(),
            u = this.snapshot.health.workingNow > 0,
            d = t.tx;
          u &&
            ((n.font = this.mono(600)),
            (n.textBaseline = "top"),
            (n.fillStyle = k),
            n.fillText(M[Math.floor(i / 80) % M.length], t.tx, t.ty),
            (d += 1.5 * s)),
            (n.font = this.mono(400));
          let f = this.measure("*"),
            m = 1.2 * s,
            p =
              c.reduce(
                (t, e) => t + f + 0.5 * s + n.measureText(e.name).width + m,
                0
              ) - m,
            g = c.length * (f + 0.6 * s) - 0.6 * s,
            w = 2.4 * s,
            v =
              h.reduce((t, e) => t + this.groupWidth(e), 0) +
              w * (h.length - 1),
            y = d - t.tx + v + 2 * s + p <= t.tw ? p : g,
            x = t.tw - y - 1.5 * s - (d - t.tx),
            S = h.map((t) => [...t]);
          for (
            ;
            S.length > 1 &&
            S[1].length > 0 &&
            S.reduce((t, e) => t + this.groupWidth(e), 0) + w > x;

          )
            S[1].pop();
          (null === (l = S[1]) || void 0 === l ? void 0 : l.length) === 0 &&
            S.pop();
          let T = d;
          S.forEach((e, i) => {
            (T = this.group(t, T, t.ty, e, r)),
              i < S.length - 1 &&
                ((n.strokeStyle = r),
                (n.globalAlpha = 0.25),
                n.beginPath(),
                n.moveTo(T + w / 2, t.ty - 0.1 * s),
                n.lineTo(T + w / 2, t.ty + 1.15 * s),
                n.stroke(),
                (n.globalAlpha = 1),
                (T += w));
          });
          let A = t.sx + t.sw - a;
          n.font = this.mono(400);
          for (let e = c.length - 1; e >= 0; e--) {
            let i = c[e],
              l = y === p;
            l &&
              ((A -= n.measureText(i.name).width),
              (n.fillStyle = r),
              (n.globalAlpha = 0.6),
              n.fillText(i.name, A, t.ty),
              (n.globalAlpha = 1),
              (A -= 0.5 * s));
            let a = !0 === i.up ? "*" : !1 === i.up ? "x" : "?";
            (A -= n.measureText(a).width),
              (n.fillStyle =
                !0 === i.up ? b : !1 === i.up ? this.pal.accent : r),
              (n.globalAlpha = null == i.up ? 0.4 : 0.85),
              n.fillText(a, A, t.ty),
              (n.globalAlpha = 1),
              (A -= l ? m : 0.6 * s);
          }
          let O = t.ty + 1.75 * s;
          return (
            (n.strokeStyle = r),
            (n.globalAlpha = 0.18),
            n.beginPath(),
            n.moveTo(t.tx, O),
            n.lineTo(t.sx + t.sw - a, O),
            n.stroke(),
            (n.globalAlpha = 1),
            t.ty + o
          );
        }
        footer(t, e, i) {
          let { ctx: n, FS: s, PAD: a } = this,
            o = this.snapshot,
            r = t.term ? this.PHOSPHOR : this.pal.face,
            h = e - 0.75 * s;
          (n.strokeStyle = r),
            (n.globalAlpha = 0.18),
            n.beginPath(),
            n.moveTo(t.tx, h),
            n.lineTo(t.sx + t.sw - a, h),
            n.stroke(),
            (n.globalAlpha = 1),
            (n.font = this.mono(400)),
            (n.textBaseline = "top"),
            (this.footY = e);
          let c = Math.max(
              0,
              Math.round((performance.timeOrigin + i - o.at) / 1e3)
            ),
            u = [
              {
                n: (c < 60
                  ? "".concat(String(c).padStart(2), "s")
                  : (0, l.F6)(new Date(o.at).toISOString()).replace(/ ago$/, "")
                ).trimStart(),
                word: "ago last updated",
              },
            ];
          0 === this.face &&
            u.push({
              n: O.compact(o.counts.inferenceTokens),
              word: "tokens used",
            });
          let d = t.sx + t.sw - a;
          for (let i of u) {
            let l = this.groupWidth([i]);
            d - l - 2 * s <= t.tx + 22 * s ||
              ((d -= l), this.group(t, d, e, [i], r, 0.7), (d -= 2.2 * s));
          }
          let f = 0 === this.face ? this.capFace() : this.pulseFace();
          (n.font = this.mono(400)),
            (n.fillStyle = r),
            (n.globalAlpha = (this.footHot ? 0.95 : 0.6) * 0.7);
          let m = t.tx;
          f.name &&
            (n.fillText("".concat(f.name, " "), m, e),
            (m += n.measureText("".concat(f.name, " ")).width)),
            (n.font = this.mono(600)),
            (n.globalAlpha = 0.6649999999999999),
            n.fillText(f.figure, m, e),
            (m += Math.max(
              f.slot ? n.measureText(f.slot).width : 0,
              n.measureText(f.figure).width
            )),
            f.note &&
              ((n.font = this.mono(400)),
              (n.globalAlpha = (this.footHot ? 0.95 : 0.6) * 0.7),
              n.fillText(" ".concat(f.note), m, e),
              (m += n.measureText(" ".concat(f.note)).width)),
            (m += 0.6 * s),
            (n.font = this.mono(400)),
            (n.globalAlpha = 1);
          let p = n.measureText("\xb7").width,
            g = f.tail ? n.measureText(" ".concat(f.tail)).width : 0,
            w = Math.min(f.cells, Math.floor((d - m - g - 2 * p) / p));
          w >= 8 &&
            ((n.fillStyle = r),
            (n.globalAlpha = 0.42),
            n.fillText("[", m, e),
            (m += p),
            (m = f.draw(m, w, p, r, 0.7)),
            (n.font = this.mono(400)),
            (n.fillStyle = r),
            (n.globalAlpha = 0.42),
            n.fillText("]", m, e),
            (m += p),
            f.tail &&
              ((n.globalAlpha = 0.595),
              n.fillText(" ".concat(f.tail), m, e),
              (m += n.measureText(" ".concat(f.tail)).width)),
            (n.globalAlpha = 1)),
            (this.foot = {
              x: t.tx,
              y: e - 0.3 * s,
              w: Math.max(m, t.tx) - t.tx,
              h: 1.6 * s,
            });
        }
        capFace() {
          let { ctx: t } = this,
            { cap: e, goal: i } = this.market,
            l = (t) =>
              (t >= 1e9
                ? "$".concat((t / 1e9).toFixed(2), "B")
                : t >= 1e6
                ? "$".concat((t / 1e6).toFixed(2), "M")
                : t >= 1e4
                ? "$".concat((t / 1e3).toFixed(1), "K")
                : "$".concat(Math.round(t))
              ).replace(/\.0+([BMK])$/, "$1"),
            n = null == e ? 0 : Math.min(1, e / i);
          return {
            name: "$IMD",
            figure: null == e ? "$--.--M" : l(e),
            slot: "$--.--M",
            tail: "".concat(l(i), " goal"),
            cells: O.GOAL_CELLS,
            draw: (e, i, l, s, a) => {
              let o = Math.min(i, Math.max(n > 0 ? 1 : 0, Math.round(n * i)));
              return (
                (t.fillStyle = s),
                (t.globalAlpha = 1),
                (t.font = this.mono(600)),
                t.fillText("=".repeat(o), e, this.footY),
                (e += l * o),
                (t.font = this.mono(400)),
                (t.globalAlpha = 0.4 * a),
                t.fillText("\xb7".repeat(i - o), e, this.footY),
                e + l * (i - o)
              );
            },
          };
        }
        pulseFace() {
          let { ctx: t, FS: e } = this,
            i = this.rates(),
            l = i[i.length - 1],
            n = null == l ? null : l / 60,
            s =
              null == n || n < 1
                ? ""
                : n >= 1e6
                ? "".concat((n / 1e6).toFixed(1), "M/sec")
                : n >= 1e3
                ? "".concat((n / 1e3).toFixed(1), "K/sec")
                : "".concat(Math.round(n), "/sec");
          return {
            figure: O.compact(this.snapshot.counts.inferenceTokens),
            note: "inference tokens used",
            tail: s,
            cells: O.PULSE_CELLS,
            draw: (l, n, s, a, o) => {
              let r = this.footY,
                h = i.slice(-n),
                c = n - h.length,
                u = O.step(Math.max(...h, 1));
              (t.fillStyle = a),
                (t.globalAlpha = 0.4 * o),
                (t.font = this.mono(400)),
                c > 0 && t.fillText("\xb7".repeat(c), l, r);
              let d = r + 1.15 * e,
                f = 1.15 * e,
                m = Math.max(1, Math.floor(0.7 * s));
              return (
                h.forEach((e, i) => {
                  let n = Math.max(1, Math.round((e / u) * f));
                  (t.globalAlpha = (i === h.length - 1 ? 1 : 0.75) * o),
                    t.fillRect(
                      Math.round(l + (c + i) * s),
                      Math.round(d - n),
                      m,
                      n
                    );
                }),
                (t.globalAlpha = 1),
                l + s * n
              );
            },
          };
        }
        mark(t, e, i, l) {
          let { ctx: n, FS: s } = this,
            a = i + 0.55 * s,
            o = 0.27 * s,
            h = t.term ? this.PHOSPHOR : this.pal.face;
          "ring" === l
            ? ((n.strokeStyle = h),
              (n.lineWidth = 1),
              n.beginPath(),
              n.arc(e + o, a, o - 0.5, 0, r.gc),
              n.stroke(),
              (n.fillStyle = b),
              n.beginPath(),
              n.arc(e + o, a, 0.5 * o, 0, r.gc))
            : ((n.fillStyle =
                "up" === l
                  ? b
                  : "down" === l || "accent" === l
                  ? this.pal.accent
                  : "dim" === l || "unknown" === l
                  ? "#5a5a56"
                  : h),
              n.beginPath(),
              n.arc(e + o, a, o, 0, r.gc)),
            n.fill();
        }
        row(t, e, i) {
          var l, n, s, a, o, r, c;
          let u =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 1 / 0,
            { ctx: d, FS: f } = this,
            m = t.tx;
          (d.textBaseline = "top"),
            (d.font = this.mono(null !== (l = i.wt) && void 0 !== l ? l : 400)),
            (d.globalAlpha = null !== (n = i.al) && void 0 !== n ? n : 1);
          let p =
            null !== (s = i.col) && void 0 !== s
              ? s
              : t.term
              ? this.PHOSPHOR
              : this.pal.face;
          if (i.segments) {
            for (let l of i.segments)
              this.mark(t, m, e, l.mark),
                (m += 1.3 * f),
                (d.fillStyle = p),
                d.fillText(l.t, m, e),
                (m += d.measureText(l.t).width + 1.2 * f);
            d.globalAlpha = 1;
            return;
          }
          i.mark && (this.mark(t, m, e, i.mark), (m += 1.3 * f)),
            i.lead &&
              ((d.fillStyle = i.lead.col),
              (d.globalAlpha =
                null !== (a = i.lead.al) && void 0 !== a ? a : 1),
              d.fillText(i.lead.t, m, e),
              (d.globalAlpha = null !== (o = i.al) && void 0 !== o ? o : 1),
              (m += 1.5 * f)),
            (d.fillStyle = p);
          let g = t.tx + t.tw - m;
          if (i.spans) {
            let t = g,
              l = u,
              n = m;
            for (let s = 0; s < i.spans.length; s++) {
              let a = i.spans[s];
              if (null != a.face) {
                let i = Math.round(1.1 * f),
                  l = e - (i - f) / 2,
                  s = i / 5,
                  o = (0, h.Vk)(7919 * a.face + 17);
                d.fillStyle = p;
                for (let t = 0; t < 5; t++)
                  for (let e = 0; e < 3; e++) {
                    if (0.5 > o()) continue;
                    let i = n + e * s,
                      a = l + t * s;
                    d.fillRect(
                      Math.round(i),
                      Math.round(a),
                      Math.ceil(s),
                      Math.ceil(s)
                    ),
                      e < 2 &&
                        d.fillRect(
                          Math.round(n + (4 - e) * s),
                          Math.round(a),
                          Math.ceil(s),
                          Math.ceil(s)
                        );
                  }
                (n += i + 0.6 * f), (t -= i + 0.6 * f);
              }
              d.font = this.mono(
                null !== (c = null !== (r = a.wt) && void 0 !== r ? r : i.wt) &&
                  void 0 !== c
                  ? c
                  : 400
              );
              let o = a.t,
                u = d.measureText(o).width;
              if (u > t) {
                for (
                  o =
                    o.slice(
                      0,
                      Math.max(0, Math.floor((o.length * t) / u) - 1)
                    ) + "…";
                  o.length > 1 && d.measureText(o).width > t;

                )
                  o = o.slice(0, -2) + "…";
                o = o.replace(/[\s·,;:]+…$/, "…");
              }
              l < o.length && (o = o.slice(0, Math.max(0, l))),
                (l -= o.length),
                d.fillText(o, n, e);
              let m = d.measureText(o).width;
              if (((n += m), (t -= m), o.endsWith("…") || t <= 0 || l <= 0))
                break;
            }
            d.globalAlpha = 1;
            return;
          }
          let w = i.t,
            v = d.measureText(w).width;
          if (v > g && w.length > 3)
            for (
              w = w.slice(0, Math.max(3, Math.floor((w.length * g) / v))) + "…";
              w.length > 3 && d.measureText(w).width > g;

            )
              w = w.slice(0, -2) + "…";
          u < w.length && (w = w.slice(0, Math.max(0, u))), d.fillText(w, m, e);
          let b = w.endsWith("…") ? w.length - 1 : w.length;
          for (let t of i.t.matchAll(y)) {
            let i = t.index,
              l = Math.min(i + t[0].length, b);
            if (i >= b) break;
            let n = m + d.measureText(w.slice(0, i)).width,
              s = d.measureText(w.slice(i, l)).width;
            d.fillRect(n, e + 1.15 * f, s, 1),
              this.links.push({ x: n, y: e, w: s, h: 1.3 * f, href: t[0] });
          }
          d.globalAlpha = 1;
        }
        drawBlocks(t) {
          let e = this.layout,
            { ctx: i, FS: l, PAD: n, LH: s } = this,
            a = t || performance.now();
          for (let t of ((this.links = []), e.blocks)) {
            var o, r, h, c, u, f;
            if (!t.w || !t.h) continue;
            if ("settings" === t.kind) {
              this.drawCog(t);
              continue;
            }
            if ("listen" === t.kind) {
              this.drawPlay(t);
              continue;
            }
            if (this.monitorTurning) continue;
            if (this.opts.forget) {
              let i = null !== (o = t.pad) && void 0 !== o ? o : 0;
              this.chrome(
                (t.c + i) * e.cell + 1,
                t.r * e.cell + 1,
                (t.w - 2 * i) * e.cell - 2,
                t.h * e.cell - 2,
                !1,
                !0
              );
              continue;
            }
            if (this.backs && !this.monitorHomed) {
              this.drawMonitorBack(t, a);
              continue;
            }
            let m = null !== (r = t.pad) && void 0 !== r ? r : 0,
              p = this.chrome(
                (t.c + m) * e.cell + 1,
                t.r * e.cell + 1,
                (t.w - 2 * m) * e.cell - 2,
                t.h * e.cell - 2,
                !1,
                !0
              ),
              g = this.tabs(a),
              w = null !== (h = g[t.tab]) && void 0 !== h ? h : g[0];
            if (this.film) {
              this.drawFilm(p, a);
              continue;
            }
            let v = this.header(p, t, a),
              y = p.sy + p.sh - 0.6 * n - l,
              b = 2.1 * l,
              M = y - 1.5 * l - b,
              x = M + (b - l) / 2,
              S = this.partyShift(a),
              T = v,
              A = M - 0.4 * s - v;
            if (this.party && S >= 1) this.drawParty({ ...p, sy: T, sh: A }, a);
            else if (
              this.party &&
              null != this.party.leaving &&
              a - this.party.leaving >= 700
            ) {
              let t = this.party.words;
              (this.party = null),
                t || this.echo(["type imd for a surprise"], this.pal.accent);
            }
            if (w.feed && S < 1) {
              i.save(),
                i.beginPath(),
                i.rect(p.sx, T - 0.2 * s, p.sw, A + 0.4 * s),
                i.clip(),
                (v -= S * (A + s));
              let t = Math.max(1, Math.floor(A / s)),
                e =
                  a - this.born < 9e3
                    ? [
                        { t: "IMD swarm", col: k, wt: 600 },
                        {
                          t: "".concat(
                            d.Is.toLocaleString("en-US"),
                            " seats \xb7 reading the control plane"
                          ),
                          al: 0.6,
                        },
                        { t: "" },
                      ]
                    : [],
                l = [...e, ...w.rows.slice(-(t - e.length))],
                n =
                  this.arrived && !this.opts.still
                    ? (a - this.arrived) / 45
                    : 1 / 0,
                o =
                  (null === (c = this.newest) || void 0 === c
                    ? void 0
                    : c.since) === this.arrived
                    ? this.arrived + 45 * Math.max(0, l.length - 1 - e.length)
                    : null !==
                        (f =
                          null === (u = this.newest) || void 0 === u
                            ? void 0
                            : u.since) && void 0 !== f
                    ? f
                    : 0,
                r = o ? Math.max(0, Math.min(1, (a - o) / 700)) : 1;
              l.forEach((t, i) => {
                var a;
                let o = i - e.length;
                if (o >= 0 && o >= n) return;
                let h = i === l.length - 1 && 0 === this.echoes.length,
                  c = (l.length - 1 - i) / Math.max(1, l.length - 1),
                  u =
                    o >= 0 && Number.isFinite(n)
                      ? Math.max(0, 1 - ((n - o) * 45) / 260)
                      : 0,
                  d = h ? 1 : 0.95 - 0.5 * c,
                  f =
                    (null !== (a = t.al) && void 0 !== a ? a : 1) *
                    (d + (1 - d) * u),
                  m = h && t.lead ? { ...t.lead, col: k } : t.lead;
                this.row(
                  p,
                  v,
                  { ...t, al: f, wt: h ? 600 : t.wt, lead: m },
                  h ? Math.ceil(t.t.length * r) : 1 / 0
                ),
                  (v += s);
              }),
                i.restore();
            } else if (!w.feed) {
              if (w.columns) {
                let t = 3 * l,
                  e = w.columns.map((t) =>
                    Math.max(
                      ...t.map((t) => {
                        var e;
                        return (
                          this.measure(
                            t.t,
                            null !== (e = t.wt) && void 0 !== e ? e : 400
                          ) + (t.mark ? 1.3 * l : 0)
                        );
                      })
                    )
                  ),
                  i = p.tx,
                  a = 0;
                w.columns.forEach((l, o) => {
                  let r = { ...p, tx: i, tw: e[o] },
                    h = v;
                  for (let t of l) {
                    if (h + s > p.sy + p.sh - 0.5 * n) break;
                    this.row(r, h, t), (h += s);
                  }
                  (a = Math.max(a, h - v)), (i += e[o] + t);
                }),
                  (v += a + 0.6 * s);
              }
              for (let t of w.rows) {
                if (v + s > p.sy + p.sh - 0.5 * n) break;
                this.row(p, v, t), (v += s);
              }
            }
            if (w.prompt && M - v > -(0.2 * s)) {
              let t = p.tx,
                e = p.sx + p.sw - n - t,
                s = 0.5 * l;
              (i.strokeStyle = this.PHOSPHOR_DIM),
                (i.globalAlpha = this.focused ? 0.9 : 0.5),
                (i.lineWidth = 1),
                i.beginPath(),
                i.moveTo(t + s, M),
                i.lineTo(t + e - s, M),
                i.arcTo(t + e, M, t + e, M + s, s),
                i.lineTo(t + e, M + b - s),
                i.arcTo(t + e, M + b, t + e - s, M + b, s),
                i.lineTo(t + s, M + b),
                i.arcTo(t, M + b, t, M + b - s, s),
                i.lineTo(t, M + s),
                i.arcTo(t, M, t + s, M, s),
                i.stroke(),
                (i.globalAlpha = 1),
                (i.font = this.mono(400)),
                (i.textBaseline = "top"),
                (i.fillStyle = this.PHOSPHOR_DIM),
                i.fillText(">", p.tx + 0.8 * l, x);
              let o = p.tx + 2.2 * l;
              (i.fillStyle = this.PHOSPHOR),
                (i.globalAlpha = 0.85),
                i.fillText(this.input, o, x),
                (i.globalAlpha = 1);
              let r = !this.focused || Math.floor(a / 530) % 2 == 0;
              (i.fillStyle = k),
                r &&
                  ((i.globalAlpha = this.focused ? 1 : 0.45),
                  i.fillRect(
                    o + i.measureText(this.input).width,
                    x,
                    0.6 * l,
                    1.1 * l
                  ),
                  (i.globalAlpha = 1)),
                this.focused ||
                  this.input ||
                  ((i.fillStyle = this.PHOSPHOR_DIM),
                  (i.globalAlpha = 0.5),
                  i.fillText("? for commands", o + 1.2 * l, x),
                  (i.globalAlpha = 1)),
                this.footer(p, y, a);
            }
          }
          if (this.spotLevel > 0)
            for (let t of e.blocks)
              "monitor" !== t.kind &&
                this.dim(
                  t.c * e.cell,
                  t.r * e.cell,
                  t.w * e.cell,
                  t.h * e.cell
                );
        }
        draw(t, e, i, l) {
          let n =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : this.backs,
            a = this.layout,
            { ctx: o } = this,
            c = this.painter,
            u = a.cell,
            f = (0, h.Vk)(13 * t.first + 5);
          f(), (e += f() * r.EQ);
          let m = t.activity,
            p = t.c * u + 1,
            g = t.r * u + 1,
            w = t.w * u - 2,
            v = t.h * u - 2,
            y = i || l || m >= d.u8,
            b = t.ids.length;
          if (n) {
            this.drawBack(t, e, p, g, w, v), i && this.ring(p, g, w, v);
            return;
          }
          let k = this.isMine(t),
            M = this.litLevel(t),
            x = M > 0,
            S = (0, s.a)(c, p, g, w, v, {
              first: t.first,
              n: b,
              cw: t.w,
              ch: t.h,
              activity: m,
              lit: M,
              moving: y,
              tms: e,
              mine: k,
              edge: this.edge,
              theme: this.theme,
              design: this.designOf(t),
            }).inverted,
            T = u / 20,
            A = p + w - 3 * T,
            O = g + 2.6 * T;
          !m ||
            x ||
            (1 === t.w && 1 === t.h) ||
            this.lamp(A, O, Math.max(1.4, 1.5 * T), m),
            m === d.yi &&
              ((o.strokeStyle = this.ledColour),
              (o.lineWidth = 2),
              o.strokeRect(p + 1, g + 1, w - 2, v - 2),
              (o.lineWidth = 1)),
            k &&
              ((o.strokeStyle = "#fff"),
              (o.lineWidth = 2),
              o.strokeRect(p, g, w, v),
              (o.lineWidth = 1)),
            i &&
              ((o.fillStyle = "#fff"),
              (o.globalAlpha = S ? 0.1 : 0.22),
              o.fillRect(p, g, w, v),
              (o.globalAlpha = 1),
              this.ring(p, g, w, v)),
            this.flashOver(t, p, g, w, v);
        }
        paintMargins() {
          let t = this.layout,
            { ctx: e } = this,
            i =
              this.backs && f
                ? f.themeBoard(this.themeName(), this.theme)
                : null;
          for (let l of this.margins) {
            let n = (l % t.cols) * t.cell + 1,
              s = Math.floor(l / t.cols) * t.cell + 1,
              a = t.cell - 2;
            if (
              ((e.fillStyle = this.pal.wall),
              e.fillRect(n - 1, s - 1, t.cell, t.cell),
              i)
            ) {
              (e.fillStyle = i.bg),
                e.fillRect(n, s, a, a),
                (e.fillStyle = i.pad),
                e.beginPath(),
                e.arc(n + a / 2, s + a / 2, 0.16 * a, 0, r.gc),
                e.fill(),
                (e.fillStyle = "#000"),
                e.beginPath(),
                e.arc(n + a / 2, s + a / 2, 0.08 * a, 0, r.gc),
                e.fill(),
                (e.strokeStyle = this.edge),
                (e.lineWidth = 1),
                e.strokeRect(n + 0.5, s + 0.5, a - 1, a - 1);
              continue;
            }
            (e.fillStyle = this.pal.face),
              e.fillRect(n, s, a, a),
              (e.strokeStyle = this.edge),
              (e.lineWidth = 1),
              (e.globalAlpha = 0.85),
              e.strokeRect(n + 0.5, s + 0.5, a - 1, a - 1),
              (e.globalAlpha = 0.35);
            for (let i = 1; i <= 3; i++) {
              let l = s + (a * i) / 4;
              e.beginPath(),
                e.moveTo(n + 0.2 * t.cell, l),
                e.lineTo(n + 0.8 * t.cell, l),
                e.stroke();
            }
            e.globalAlpha = 1;
          }
        }
        drawBack(t, e, i, l, n, s) {
          let { ctx: a } = this,
            o = this.boardOf(t),
            r = Math.floor((((e % 3e3) + 3e3) % 3e3) / 150);
          o.at !== r &&
            (o.paint(e, o.out), o.bx.putImageData(o.img, 0, 0), (o.at = r));
          let h = a.imageSmoothingEnabled;
          (a.imageSmoothingEnabled = !1),
            a.drawImage(o.cv, i, l, n, s),
            (a.imageSmoothingEnabled = h),
            (a.strokeStyle = this.edge),
            (a.lineWidth = 1),
            a.strokeRect(i + 0.5, l + 0.5, n - 1, s - 1);
        }
        backOf(t) {
          if (!f) return null;
          let e = this.layout,
            i = null == e ? void 0 : e.units.find((e) => e.first === t);
          if (!e || !i) return null;
          let l = f.boardSize(i.w, i.h),
            s = this.frontOf(t, l[0] / (i.w * e.cell));
          return s
            ? {
                size: l,
                front: s.getContext("2d").getImageData(0, 0, s.width, s.height),
                letters: (0, n.uv)(this.designOf(i)),
                info: this.infoOf(i),
              }
            : null;
        }
        infoOf(t) {
          var e, i;
          let l = t.ids.map((t) => {
              var e;
              return null === (e = this.snapshot) || void 0 === e
                ? void 0
                : e.seats[t];
            }),
            n = t.owner;
          return {
            name: n
              ? "".concat(n.slice(0, 6), "_").concat(n.slice(-4))
              : "seat #".concat(t.seat),
            code: "no. ".concat(t.first),
            lot:
              null !==
                (i =
                  null === (e = this.designOf(t)) || void 0 === e
                    ? void 0
                    : e.lot) && void 0 !== i
                ? i
                : null,
            seats: l.map((t) =>
              (null == t ? void 0 : t.working) ? 2 : t ? 1 : 0
            ),
            ids: t.ids,
            passed: l.reduce((t, e) => {
              var i;
              return (
                t +
                (null !== (i = null == e ? void 0 : e.accepted) && void 0 !== i
                  ? i
                  : 0)
              );
            }, 0),
            failed: l.reduce((t, e) => {
              var i;
              return (
                t +
                (null !== (i = null == e ? void 0 : e.failed) && void 0 !== i
                  ? i
                  : 0)
              );
            }, 0),
          };
        }
        boardOf(t) {
          let e = this.themeName(),
            i = this.layout,
            l = Math.max(8, Math.round(t.w * i.cell - 2)),
            s = Math.max(8, Math.round(t.h * i.cell - 2)),
            a = (0, n.uv)(this.designOf(t)),
            r = ""
              .concat(e, ":")
              .concat(l, "x")
              .concat(s, ":")
              .concat(a, ":")
              .concat(JSON.stringify(this.designOf(t)), ":")
              .concat(i.cell),
            h = this.boards.get(t.first);
          if (!h || h.key !== r) {
            let i = this.frontOf(t.first, 1),
              n = i.getContext("2d").getImageData(0, 0, i.width, i.height),
              c = document.createElement("canvas");
            (c.width = l), (c.height = s);
            let u = c.getContext("2d"),
              d = u.createImageData(l, s),
              m = f,
              p = m.glassOf(
                n.data,
                n.width,
                n.height,
                0,
                0,
                n.width,
                n.height,
                l,
                s
              );
            (h = {
              key: r,
              at: -1,
              paint: m.makeBoard(
                m.boardSeed(t.first),
                l,
                s,
                m.themeBoard(e, o.yU[e]),
                0.72,
                null,
                p,
                a
              ).paint,
              cv: c,
              bx: u,
              img: d,
              out: new Uint32Array(d.data.buffer),
            }),
              this.boards.set(t.first, h);
          }
          return h;
        }
        themeName() {
          var t;
          return null !==
            (t = Object.keys(o.yU).find((t) => o.yU[t] === this.theme)) &&
            void 0 !== t
            ? t
            : "steel";
        }
        setBacks(t) {
          var e;
          let i =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          if (t === this.backs) return;
          if (!f) {
            p().then(() => this.setBacks(t, i));
            return;
          }
          this.backs = t;
          let l = this.layout;
          if (!l || !this.snapshot) return;
          if (this.opts.still || !this.shown) {
            this.layOut(this.snapshot, this.width, this.target);
            return;
          }
          let n = () => {
              let t = document.createElement("canvas");
              return (
                (t.width = this.canvas.width),
                (t.height = this.canvas.height),
                t.getContext("2d").drawImage(this.canvas, 0, 0),
                t
              );
            },
            s = n();
          for (let t of l.units)
            (this.ctx.fillStyle = this.pal.wall),
              this.ctx.fillRect(
                t.c * l.cell,
                t.r * l.cell,
                t.w * l.cell,
                t.h * l.cell
              ),
              this.draw(t, 0, !1, !1);
          let a = i && (t || !this.monitorHomed);
          (this.monitorTurning = !1),
            (this.monitorHomed = !t || !i),
            (this.homeAt = 0),
            (this.homePics = null),
            this.drawBlocks(0);
          let o = n();
          this.ctx.save(),
            this.ctx.setTransform(1, 0, 0, 1, 0, 0),
            this.ctx.drawImage(s, 0, 0),
            this.ctx.restore(),
            (this.flipFrom = s),
            (this.flipTo = o),
            (this.flipAt = performance.now()),
            (this.flipDone = new Uint8Array(l.units.length)),
            (this.flipIndex = new Map(l.units.map((t, e) => [t, e]))),
            (this.monitorTurning = a),
            null === (e = this.opts.sound) || void 0 === e || e.press();
        }
        flipStep(t) {
          let e = this.layout,
            { ctx: i } = this,
            l = this.flipDone,
            n = e.cell,
            s = e.cols + 0.6 * e.rows,
            a = this.canvas.width / this.width,
            o = !0;
          e.units.forEach((e, r) => {
            if (l[r]) return;
            let c =
              (t -
                this.flipAt -
                (1300 * (e.c + 0.6 * e.r)) / s -
                140 * (0, h.Vk)(7 * e.first + 1)()) /
              520;
            if (c <= 0) {
              o = !1;
              return;
            }
            let u = e.c * n,
              d = e.r * n,
              f = e.w * n,
              m = e.h * n;
            if (
              ((i.fillStyle = this.pal.wall), i.fillRect(u, d, f, m), c >= 1)
            ) {
              (l[r] = 1), this.draw(e, t, r === this.hot, !1);
              return;
            }
            o = !1;
            let p = c < 0.5 ? 2 * c * c : 1 - (-2 * c + 2) ** 2 / 2,
              g = Math.max(0.02, Math.abs(Math.cos(p * Math.PI))),
              w = p < 0.5 ? this.flipFrom : this.flipTo,
              v = f * g;
            i.drawImage(
              w,
              u * a,
              d * a,
              f * a,
              m * a,
              u + (f - v) / 2,
              d,
              v,
              m
            ),
              (i.fillStyle = "#000"),
              (i.globalAlpha = (1 - g) * 0.45),
              i.fillRect(u + (f - v) / 2, d, v, m),
              (i.globalAlpha = 1);
          });
          let r = this.monitorTurning
            ? e.blocks.find((t) => "monitor" === t.kind)
            : null;
          if (r) {
            var c;
            let e = null !== (c = r.pad) && void 0 !== c ? c : 0,
              l = (r.c + e) * n,
              h = r.r * n,
              u = (r.w - 2 * e) * n,
              d = r.h * n,
              f =
                (t -
                  this.flipAt -
                  (1300 * (r.c + r.w / 2 + (r.r + r.h / 2) * 0.6)) / s) /
                780;
            if (f >= 1)
              (this.monitorTurning = !1),
                (i.fillStyle = this.pal.wall),
                i.fillRect(l, h, u, d),
                this.drawBlocks(t),
                this.backs && (this.homeAt = t + 1600);
            else if (((o = !1), f > 0)) {
              let t = f < 0.5 ? 2 * f * f : 1 - (-2 * f + 2) ** 2 / 2,
                e = Math.max(0.02, Math.abs(Math.cos(t * Math.PI))),
                n = u * e;
              (i.fillStyle = this.pal.wall),
                i.fillRect(l, h, u, d),
                i.drawImage(
                  t < 0.5 ? this.flipFrom : this.flipTo,
                  l * a,
                  h * a,
                  u * a,
                  d * a,
                  l + (u - n) / 2,
                  h,
                  n,
                  d
                ),
                (i.fillStyle = "#000"),
                (i.globalAlpha = (1 - e) * 0.45),
                i.fillRect(l + (u - n) / 2, h, n, d),
                (i.globalAlpha = 1);
            }
          } else this.monitorTurning = !1;
          o &&
            (this.paintMargins(),
            (this.flipAt = 0),
            (this.flipDone = null),
            (this.flipFrom = this.flipTo = null),
            (this.flipIndex = null));
        }
        homeStep(t) {
          var e;
          let i = this.layout,
            { ctx: l } = this,
            n = i.blocks.find((t) => "monitor" === t.kind);
          if (!n || !this.backs) {
            (this.homeAt = 0), (this.homePics = null);
            return;
          }
          let s = null !== (e = n.pad) && void 0 !== e ? e : 0,
            a = i.cell,
            o = (n.c + s) * a,
            r = n.r * a,
            h = (n.w - 2 * s) * a,
            c = n.h * a,
            u = this.canvas.width / this.width;
          if (!this.homePics) {
            let e = () => {
                let t = document.createElement("canvas");
                return (
                  (t.width = Math.round(h * u)),
                  (t.height = Math.round(c * u)),
                  t
                    .getContext("2d")
                    .drawImage(
                      this.canvas,
                      o * u,
                      r * u,
                      h * u,
                      c * u,
                      0,
                      0,
                      t.width,
                      t.height
                    ),
                  t
                );
              },
              i = e();
            (this.monitorHomed = !0), this.drawBlocks(t);
            let l = e();
            (this.homePics = [i, l]), (this.monitorTurning = !0);
          }
          let d = (t - this.homeAt) / 780;
          if (((l.fillStyle = this.pal.wall), l.fillRect(o, r, h, c), d >= 1)) {
            (this.monitorTurning = !1),
              (this.homeAt = 0),
              (this.homePics = null),
              this.drawBlocks(t);
            return;
          }
          let f = d < 0.5 ? 2 * d * d : 1 - (-2 * d + 2) ** 2 / 2,
            m = Math.max(0.02, Math.abs(Math.cos(f * Math.PI))),
            p = h * m;
          l.drawImage(
            f < 0.5 ? this.homePics[0] : this.homePics[1],
            o + (h - p) / 2,
            r,
            p,
            c
          ),
            (l.fillStyle = "#000"),
            (l.globalAlpha = (1 - m) * 0.45),
            l.fillRect(o + (h - p) / 2, r, p, c),
            (l.globalAlpha = 1);
        }
        setLifted(t) {
          let e = this.layout,
            i = this.lifted;
          if (((this.lifted = t), e))
            for (let l of e.units)
              (l.first === i || l.first === t) && this.redraw(l, 0, !1, !1);
        }
        drawGap(t) {
          let e = this.layout,
            { ctx: i } = this,
            l = e.cell,
            n = t.c * l + 1,
            s = t.r * l + 1,
            a = t.w * l - 2,
            o = t.h * l - 2;
          (i.fillStyle = "rgba(0, 0, 0, 0.45)"),
            i.fillRect(n, s, a, o),
            (i.fillStyle = "rgba(0, 0, 0, 0.35)"),
            i.fillRect(n, s, a, Math.max(2, 0.12 * l));
          let h = Math.max(1.2, 0.07 * l),
            c = 0.22 * l;
          for (let [t, e] of ((i.fillStyle = "rgba(0, 0, 0, 0.6)"),
          [
            [n + c, s + c],
            [n + a - c, s + c],
            [n + c, s + o - c],
            [n + a - c, s + o - c],
          ]))
            i.beginPath(), i.arc(t, e, h, 0, r.gc), i.fill();
        }
        get turnedOver() {
          return this.backs;
        }
        monitorBackOf(t) {
          var e;
          let i = this.layout,
            l = null !== (e = t.pad) && void 0 !== e ? e : 0,
            n = this.themeName(),
            s = Math.max(8, Math.round((t.w - 2 * l) * i.cell - 2)),
            a = Math.max(8, Math.round(t.h * i.cell - 2)),
            o = "".concat(n, ":").concat(s, "x").concat(a),
            r = this.monitorBack;
          if (!r || r.key !== o) {
            let t = document.createElement("canvas");
            (t.width = s), (t.height = a);
            let e = t.getContext("2d"),
              i = e.createImageData(s, a);
            r = this.monitorBack = {
              key: o,
              at: -1,
              back: f.makeMonitorBack(s, a, f.themeBoard(n, this.theme)),
              cv: t,
              bx: e,
              img: i,
              out: new Uint32Array(i.data.buffer),
            };
          }
          return r;
        }
        drawMonitorBack(t, e) {
          var i;
          let l = this.layout,
            { ctx: n } = this,
            s = null !== (i = t.pad) && void 0 !== i ? i : 0,
            a = this.monitorBackOf(t),
            o = a.back.glowBox,
            r = (t.c + s) * l.cell + 1,
            h = t.r * l.cell + 1,
            c = (t.w - 2 * s) * l.cell - 2,
            u = t.h * l.cell - 2,
            d = this.newest
              ? Math.max(0, 1 - (e - this.newest.since) / 1200)
              : 0,
            f = Math.floor((((e % 3e3) + 3e3) % 3e3) / 150);
          a.at !== f
            ? (a.back.paint(e, a.out, d),
              a.bx.putImageData(a.img, 0, 0),
              (a.at = f))
            : o &&
              (a.back.glow(e, a.out, d),
              a.bx.putImageData(a.img, 0, 0, o.x, o.y, o.w, o.h));
          let m = n.imageSmoothingEnabled;
          (n.imageSmoothingEnabled = !1),
            n.drawImage(a.cv, r, h, c, u),
            (n.imageSmoothingEnabled = m),
            (n.strokeStyle = this.edge),
            (n.lineWidth = 1),
            n.strokeRect(r + 0.5, h + 0.5, c - 1, u - 1);
        }
        flashOver(t, e, i, l, n) {
          let s = this.flash.get(t.first);
          if (!s) return;
          if (performance.now() > s) {
            this.flash.delete(t.first);
            return;
          }
          let { ctx: a } = this;
          (a.fillStyle = this.pal.stroke),
            (a.globalAlpha = 0.55),
            a.fillRect(e, i, l, n),
            (a.globalAlpha = 1);
        }
        press(t) {
          var e, i;
          let l = this.layout.units[t],
            n = performance.now();
          this.flash.set(l.first, n + 90),
            this.warm.set(
              t,
              Math.max(
                null !== (i = this.warm.get(t)) && void 0 !== i ? i : 0,
                n + 4e3
              )
            ),
            null === (e = this.opts.sound) || void 0 === e || e.press(),
            this.redraw(l, n, t === this.hot, !0);
        }
        lamp(t, e, i, l) {
          let n =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : this.ledColour,
            { ctx: s } = this;
          s.beginPath(),
            l === d.yi
              ? ((s.fillStyle = n), s.arc(t, e, 1.3 * i, 0, r.gc), s.fill())
              : l === d.u8
              ? ((s.strokeStyle = this.pal.stroke),
                (s.lineWidth = 1.2),
                s.arc(t, e, i, 0, r.gc),
                s.stroke(),
                (s.lineWidth = 1),
                (s.fillStyle = n),
                s.beginPath(),
                s.arc(t, e, 0.5 * i, 0, r.gc),
                s.fill())
              : ((s.fillStyle = this.pal.stroke),
                (s.globalAlpha = l ? 1 : 0.35),
                s.arc(t, e, i, 0, r.gc),
                s.fill(),
                (s.globalAlpha = 1));
        }
        ring(t, e, i, l) {
          let { ctx: n } = this;
          (n.strokeStyle = this.pal.stroke),
            (n.lineWidth = 2),
            n.strokeRect(t + 1, e + 1, i - 2, l - 2),
            (n.strokeStyle = "#fff"),
            (n.lineWidth = 1),
            n.strokeRect(t + 2.5, e + 2.5, i - 5, l - 5);
        }
        redraw(t, e, i, l) {
          var n, s;
          let a = this.layout;
          if (
            !this.flipAt ||
            !this.flipDone ||
            this.flipDone[
              null !==
                (s =
                  null === (n = this.flipIndex) || void 0 === n
                    ? void 0
                    : n.get(t)) && void 0 !== s
                ? s
                : -1
            ]
          ) {
            if (
              ((this.ctx.fillStyle = this.pal.wall),
              this.ctx.fillRect(
                t.c * a.cell,
                t.r * a.cell,
                t.w * a.cell,
                t.h * a.cell
              ),
              t.first === this.lifted)
            ) {
              this.drawGap(t);
              return;
            }
            this.draw(t, e, i, l),
              this.spotLevel > 0 &&
                !this.isMine(t) &&
                this.dim(
                  t.c * a.cell,
                  t.r * a.cell,
                  t.w * a.cell,
                  t.h * a.cell
                );
          }
        }
        isMine(t) {
          var e;
          return !!(
            this.mine &&
            (null === (e = t.owner) || void 0 === e
              ? void 0
              : e.toLowerCase()) === this.mine
          );
        }
        designOf(t) {
          var e;
          return this.designs.size &&
            t.owner &&
            null !== (e = this.designs.get(t.owner.toLowerCase())) &&
            void 0 !== e
            ? e
            : null;
        }
        setDesigns(t) {
          let e = this.designs;
          this.designs = t;
          let i = this.layout;
          i &&
            i.units.forEach((i, l) => {
              var n;
              let s =
                null === (n = i.owner) || void 0 === n
                  ? void 0
                  : n.toLowerCase();
              s &&
                e.get(s) !== t.get(s) &&
                this.redraw(i, 0, l === this.hot, !1);
            });
        }
        moduleOf(t) {
          let e = this.layout,
            i = null == e ? void 0 : e.units.find((e) => e.ids.includes(t));
          return e && i
            ? {
                first: i.first,
                ids: i.ids,
                c: i.c,
                r: i.r,
                w: i.w,
                h: i.h,
                activity: i.activity,
                lit: this.litLevel(i),
                cell: e.cell,
              }
            : null;
        }
        frontOf(t, e) {
          let i = this.layout,
            l = null == i ? void 0 : i.units.find((e) => e.first === t);
          if (!i || !l) return null;
          let n = i.cell,
            a = l.w * n,
            o = l.h * n,
            c = document.createElement("canvas");
          (c.width = Math.round(a * e)), (c.height = Math.round(o * e));
          let u = c.getContext("2d");
          u.scale(e, e),
            (u.lineJoin = "round"),
            (u.fillStyle = this.pal.wall),
            u.fillRect(0, 0, a, o);
          let d = (0, h.Vk)(13 * l.first + 5);
          return (
            d(),
            (0, s.a)(
              (0, r.zg)(u, n, this.theme.light, this.theme.dark),
              1,
              1,
              a - 2,
              o - 2,
              {
                first: l.first,
                n: l.ids.length,
                cw: l.w,
                ch: l.h,
                activity: l.activity,
                lit: this.litLevel(l),
                moving: !1,
                tms: d() * r.EQ,
                mine: this.isMine(l),
                edge: this.edge,
                theme: this.theme,
                design: this.designOf(l),
              }
            ),
            c
          );
        }
        get palette() {
          return this.theme;
        }
        get filled() {
          let t = this.layout;
          if (!t) return 0;
          for (let e = t.rows - 1; e > 0; e--) {
            let i = 0;
            for (let l = 0; l < t.cols; l++) {
              let n = t.grid[e * t.cols + l];
              null != n && n >= 0 && i++;
            }
            if (i >= 0.8 * t.cols) return (e + 1) * t.cell;
          }
          return t.rows * t.cell;
        }
        dim(t, e, i, l) {
          (this.ctx.fillStyle = "rgba(0, 0, 0, ".concat(
            0.62 * this.spotLevel,
            ")"
          )),
            this.ctx.fillRect(t, e, i, l);
        }
        setSpotlight(t) {
          if (t === this.spot) return;
          this.spot = t;
          let e = this.layout;
          if (e && this.snapshot) {
            if (this.opts.still || !this.raf) {
              if (((this.spotLevel = t ? 1 : 0), t)) {
                for (let t of (this.dim(0, 0, this.width, this.height),
                e.units))
                  this.isMine(t) && this.redraw(t, 0, !1, !1);
                this.drawBlocks(performance.now());
              } else this.layOut(this.snapshot, this.width, this.target);
              return;
            }
            if (t && !this.spotBase) {
              var i;
              let t = document.createElement("canvas");
              (t.width = this.canvas.width),
                (t.height = this.canvas.height),
                null === (i = t.getContext("2d")) ||
                  void 0 === i ||
                  i.drawImage(this.canvas, 0, 0),
                (this.spotBase = t);
            }
            (this.spotFrom = this.spotLevel), (this.spotAt = performance.now());
          }
        }
        spotStep(t) {
          let e = this.layout,
            i = this.spotBase,
            { ctx: l } = this,
            n = this.spot ? 1 : 0,
            s = this.spot ? 380 : 220,
            a = Math.min(1, (t - this.spotAt) / s);
          if (
            ((this.spotLevel =
              this.spotFrom + (n - this.spotFrom) * (1 - (1 - a) ** 3)),
            i)
          ) {
            let t = this.canvas.width / this.width;
            l.save(),
              l.setTransform(1, 0, 0, 1, 0, 0),
              l.drawImage(i, 0, 0),
              l.restore(),
              this.dim(0, 0, this.width, this.height);
            let n = (e, n, s, a) => {
              l.save(),
                l.setTransform(1, 0, 0, 1, 0, 0),
                l.drawImage(
                  i,
                  e * t,
                  n * t,
                  s * t,
                  a * t,
                  e * t,
                  n * t,
                  s * t,
                  a * t
                ),
                l.restore();
            };
            for (let t of e.units)
              this.isMine(t) &&
                n(t.c * e.cell, t.r * e.cell, t.w * e.cell, t.h * e.cell);
            for (let t of e.blocks)
              if ("monitor" === t.kind) {
                var o;
                let i = null !== (o = t.pad) && void 0 !== o ? o : 0;
                n(
                  (t.c + i) * e.cell,
                  t.r * e.cell,
                  (t.w - 2 * i) * e.cell,
                  t.h * e.cell
                );
              }
          }
          a >= 1 && ((this.spotAt = 0), this.spot || (this.spotBase = null));
        }
        pickLive(t) {
          let e = this.layout;
          if (0 !== e.units.length && "off" !== this.motion) {
            if ("all" === this.motion) {
              this.live.size < e.units.length &&
                e.units.forEach((t, e) => {
                  t.activity < d.u8 && this.live.set(e, 1 / 0);
                });
              return;
            }
            for (let l = 0; l < 8 && this.live.size < this.liveN; l++) {
              let l = Math.floor(Math.random() * e.units.length);
              if (
                e.units[l].activity < d.u8 &&
                !this.live.has(l) &&
                !this.warm.has(l)
              ) {
                var i;
                this.live.set(l, t + 2e3 + 3e3 * Math.random()),
                  null === (i = this.opts.sound) || void 0 === i || i.tick();
              }
            }
          }
        }
        settle(t) {
          if (
            ((this.cost = 0.9 * this.cost + 0.1 * t), "all" === this.motion)
          ) {
            this.cost > 6 &&
              this.turns < 8 &&
              ((this.turns = 8), (this.cost = 0));
            return;
          }
          this.cost > 6 && this.every < 50
            ? ((this.every = 50),
              (this.liveN = Math.max(6, Math.round(this.liveN / 2))),
              (this.cost = 0))
            : this.cost < 2 &&
              50 === this.every &&
              this.layout &&
              ((this.liveN = Math.min(
                48,
                Math.max(12, Math.round(this.layout.units.length / 14))
              )),
              (this.cost = 3));
        }
        setHot(t) {
          var e;
          null != t &&
            t !== this.hot &&
            (null === (e = this.opts.sound) || void 0 === e || e.hover()),
            null != this.hot &&
              this.hot !== t &&
              this.warm.set(this.hot, performance.now() + 2200),
            (this.hot = t),
            null != t && this.warm.set(t, 1 / 0);
        }
        get wallet() {
          return this.mine;
        }
        setMine(t) {
          let e = t ? t.toLowerCase() : null;
          if (e === this.mine) return;
          let i = this.mine;
          this.mine = e;
          let l = this.layout;
          l &&
            l.units.forEach((t, l) => {
              var n;
              let s =
                null === (n = t.owner) || void 0 === n
                  ? void 0
                  : n.toLowerCase();
              s &&
                (s === i || s === e) &&
                this.redraw(t, 0, l === this.hot, !1);
            });
        }
        setAnswers(t) {
          (this.answers = t), this.layout && this.drawBlocks(performance.now());
        }
        setNames(t) {
          (this.names = t), this.layout && this.drawBlocks(performance.now());
        }
        joinWallets() {
          let t = this.snapshot;
          return (null == t ? void 0 : t.owners)
            ? [
                ...new Set(
                  t.events.flatMap((e) =>
                    "agent" === e.kind && t.owners[e.tokenId]
                      ? [t.owners[e.tokenId].toLowerCase()]
                      : []
                  )
                ),
              ]
            : [];
        }
        setFocused(t) {
          (this.focused = t), this.drawBlocks(performance.now());
        }
        setInput(t) {
          (this.input = t), this.drawBlocks(performance.now());
        }
        drawFilm(t, e) {
          var i, l;
          let n = this.film,
            s = Math.max(
              0,
              Math.floor(
                (((null !== (i = n.pausedAt) && void 0 !== i ? i : e) -
                  n.began) /
                  1e3) *
                  n.fps
              )
            ),
            a = n.loop ? s % n.frames.length : s;
          if (a >= n.frames.length && !n.ended) {
            if (!n.channel) {
              this.stopFilm("ended");
              return;
            }
            (n.ended = !0), null === (l = n.audio) || void 0 === l || l.pause();
          }
          let { ctx: o, FS: r, PAD: h, HEAD: c } = this;
          (o.font = this.mono(400)),
            (o.textBaseline = "top"),
            (o.fillStyle = this.PHOSPHOR);
          let u = n.ended
            ? [
                ["n", "next channel"],
                ["p", "previous"],
                ...(n.link ? [["x", "view original"]] : []),
              ]
            : [
                ["w", n.wide ? "centered" : "widescreen"],
                ["space", null == n.pausedAt ? "pause" : "play"],
                ...(n.audio ? [["m", n.audio.muted ? "unmute" : "mute"]] : []),
                ...(n.link ? [["x", "view original"]] : []),
              ];
          this.filmKeys = [];
          let d = (e, i, l) => {
              let n = l;
              return (
                (o.globalAlpha = 1),
                (o.font = this.mono(600)),
                o.fillText(e, l, t.ty),
                (l += o.measureText(e).width + 0.45 * r),
                (o.globalAlpha = 0.6),
                (o.font = this.mono(400)),
                o.fillText(i, l, t.ty),
                (l += o.measureText(i).width),
                this.filmKeys.push({
                  x: n - 0.4 * r,
                  y: t.ty - 0.5 * r,
                  w: l - n + 0.8 * r,
                  h: 2 * r,
                  key: e,
                }),
                l
              );
            },
            f = (t, e) => {
              o.font = this.mono(600);
              let i = o.measureText(t).width;
              return (
                (o.font = this.mono(400)), i + 0.45 * r + o.measureText(e).width
              );
            };
          n.channel &&
            n.channel.of > 1 &&
            d("← →", "channel ".concat(n.channel.at + 1), t.tx);
          let m = 1.6 * r,
            p =
              u.reduce((t, e) => {
                let [i, l] = e;
                return t + f(i, l);
              }, 0) +
              m * (u.length - 1),
            g = t.sx + (t.sw - p) / 2;
          for (let [t, e] of u) g = d(t, e, g) + m;
          o.font = this.mono(600);
          let w = o.measureText("esc").width;
          (o.font = this.mono(400)),
            d(
              "esc",
              "exit",
              t.sx + t.sw - h - w - 0.45 * r - o.measureText("exit").width
            ),
            (o.globalAlpha = 1);
          let v = t.ty + 1.75 * r;
          (o.strokeStyle = this.PHOSPHOR),
            (o.globalAlpha = 0.18),
            o.beginPath(),
            o.moveTo(t.tx, v),
            o.lineTo(t.sx + t.sw - h, v),
            o.stroke(),
            (o.globalAlpha = 1);
          let y = t.ty + c,
            b = t.sw - 2 * h,
            k = t.sy + t.sh - h - y;
          o.font = "400 ".concat(10, "px ").concat(this.opts.fontFamily);
          let M = o.measureText("M").width / 10,
            x = b / (n.cols * M),
            S = k / n.rows,
            T = Math.max(
              4,
              (n.wide ? Math.max(x, S) : Math.min(x, S)) * n.scale
            ),
            A = t.sx + (t.sw - n.cols * (T * M)) / 2,
            O = y + (k - n.rows * T) / 2;
          if (
            (o.save(),
            o.beginPath(),
            o.rect(t.sx + h, y, b, k),
            o.clip(),
            (o.font = "400 ".concat(T, "px ").concat(this.opts.fontFamily)),
            (o.textBaseline = "top"),
            (o.fillStyle = this.PHOSPHOR),
            n.ended)
          ) {
            (n.shown = Math.floor(e / 90)),
              this.drawBars(n.cols, n.rows, A, O, T, e),
              o.restore();
            return;
          }
          n.shown = a;
          let P = n.frames[a].split("\n"),
            I = Math.max(0, Math.floor((y - O) / T)),
            R = Math.min(P.length, Math.ceil((y + k - O) / T));
          for (let t = I; t < R; t++) o.fillText(P[t], A, O + t * T);
          o.restore();
        }
        drawBars(t, e, i, l, n, s) {
          let { ctx: a } = this,
            o = Math.round(0.6 * e),
            r = o + Math.max(2, Math.round(0.09 * e)),
            h = (2654435761 * Math.floor(s / 90)) >>> 0,
            c = () => (h = (1664525 * h + 1013904223) >>> 0) / 4294967296;
          a.fillStyle = this.PHOSPHOR;
          for (let s = 0; s < e; s++) {
            let e = 0.06 > c() ? Math.round((c() - 0.5) * 6) : 0,
              h = "";
            for (let i = 0; i < t; i++) {
              let l;
              let n = Math.min(t - 1, Math.max(0, i - e)),
                a = Math.min(g.length - 1, Math.floor((n / t) * g.length));
              (l =
                s < o ? g[a] : s < r ? g[g.length - 1 - a] : 0.08 + 0.1 * c()),
                0.04 > c() && (l += (c() - 0.5) * 0.5);
              let u = Math.max(
                0,
                Math.min(w.length - 1, Math.round(l * (w.length - 1)))
              );
              h += w[u];
            }
            (a.globalAlpha = s < r ? 1 : 0.45), a.fillText(h, i, l + s * n);
          }
          a.globalAlpha = 1;
        }
        filmDue(t) {
          let e = this.film;
          return e.ended
            ? Math.floor(t / 90) !== e.shown
            : -1 === e.shown ||
                (null == e.pausedAt &&
                  Math.floor(((t - e.began) / 1e3) * e.fps) !== e.shown);
        }
        get filmEnded() {
          var t, e;
          return (
            null !==
              (e =
                null === (t = this.film) || void 0 === t ? void 0 : t.ended) &&
            void 0 !== e &&
            e
          );
        }
        playFilm(t, e, i, l, n, s, a) {
          var o, r, h, c, u;
          let d =
              arguments.length > 7 && void 0 !== arguments[7]
                ? arguments[7]
                : null,
            f = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
            m = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
            p =
              arguments.length > 10 && void 0 !== arguments[10]
                ? arguments[10]
                : 1,
            g =
              null !==
                (c =
                  null === (o = this.film) || void 0 === o ? void 0 : o.wide) &&
              void 0 !== c
                ? c
                : m,
            w =
              null !==
                (u =
                  null === (h = this.film) || void 0 === h
                    ? void 0
                    : null === (r = h.audio) || void 0 === r
                    ? void 0
                    : r.muted) &&
              void 0 !== u &&
              u;
          n && (n.muted = w),
            this.stopFilm(),
            (this.film = {
              cols: t,
              rows: e,
              fps: i,
              frames: l,
              began: performance.now(),
              audio: n,
              onEnd: a,
              wide: g,
              pausedAt: null,
              link: s,
              channel: d,
              ended: !1,
              shown: -1,
              loop: f,
              scale: p,
            }),
            n &&
              ((n.volume = 0.35),
              (n.currentTime = 0),
              n.play().catch(() => void 0));
        }
        filmKeyAt(t, e) {
          var i, l;
          if (!this.film) return null;
          let n = this.canvas.getBoundingClientRect(),
            s = this.width / n.width,
            a = (t - n.left) * s,
            o = (e - n.top) * s;
          return null !==
            (l =
              null ===
                (i = this.filmKeys.find(
                  (t) =>
                    a >= t.x && a <= t.x + t.w && o >= t.y && o <= t.y + t.h
                )) || void 0 === i
                ? void 0
                : i.key) && void 0 !== l
            ? l
            : null;
        }
        toggleFilmWide() {
          this.film &&
            !this.film.ended &&
            ((this.film.wide = !this.film.wide), (this.film.shown = -1));
        }
        toggleFilmPause() {
          var t, e;
          let i = this.film;
          if (!i || i.ended) return;
          let l = performance.now();
          null == i.pausedAt
            ? ((i.pausedAt = l),
              null === (t = i.audio) || void 0 === t || t.pause())
            : ((i.began += l - i.pausedAt),
              (i.pausedAt = null),
              null === (e = i.audio) ||
                void 0 === e ||
                e.play().catch(() => void 0)),
            (i.shown = -1);
        }
        toggleFilmMute() {
          var t;
          (null === (t = this.film) || void 0 === t ? void 0 : t.audio) &&
            ((this.film.audio.muted = !this.film.audio.muted),
            (this.film.shown = -1));
        }
        get filmChannel() {
          var t, e;
          return null !==
            (e =
              null === (t = this.film) || void 0 === t ? void 0 : t.channel) &&
            void 0 !== e
            ? e
            : null;
        }
        get filmLink() {
          var t, e;
          return null !==
            (e = null === (t = this.film) || void 0 === t ? void 0 : t.link) &&
            void 0 !== e
            ? e
            : null;
        }
        stopFilm() {
          var t, e;
          let i =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "stopped";
          if (!this.film) return;
          let l = this.film;
          null === (t = l.audio) || void 0 === t || t.pause(),
            (this.film = null),
            this.drawBlocks(performance.now()),
            null === (e = l.onEnd) || void 0 === e || e.call(l, i);
        }
        get filming() {
          return null !== this.film;
        }
        get partying() {
          return null !== this.party;
        }
        endParty() {
          this.party &&
            null == this.party.leaving &&
            (this.party.leaving = performance.now());
        }
        static firstTime(t) {
          try {
            var e;
            let i = JSON.parse(
                null !== (e = localStorage.getItem("imd.wall.celebrated")) &&
                  void 0 !== e
                  ? e
                  : "{}"
              ),
              l = Date.now(),
              n = Object.values(i).some((t) => l - t < 36e5);
            if (i[t] || n) return !1;
            return (
              (i[t] = l),
              localStorage.setItem("imd.wall.celebrated", JSON.stringify(i)),
              !0
            );
          } catch (t) {
            return !0;
          }
        }
        rehearse() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 100;
          this.celebrate(t, performance.now());
        }
        cheer(t, e) {
          this.celebrate(t, performance.now(), e, 2400);
        }
        celebrate(t, e, i, l) {
          var n, s;
          let a = (0, h.Vk)(7 * t + 3),
            o = Array.from({ length: 12 }, (t, i) => ({
              x: 0.1 + 0.8 * a(),
              y: 0.15 + 0.4 * a(),
              at: e + 200 + 520 * i + 300 * a(),
              hue: a(),
              k: 0.6 + 0.7 * a(),
            }));
          (this.party = {
            n: t,
            since: e,
            shells: o,
            leaving: null,
            words: i,
            fin: l,
          }),
            null === (n = (s = this.opts).onCelebrate) ||
              void 0 === n ||
              n.call(s, t);
        }
        partyShift(t) {
          if (!this.party) return 0;
          let e = t - this.party.since,
            i = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
          if (e < 700) return i(e / 700);
          let l = null == this.party.leaving ? 0 : t - this.party.leaving;
          return l >= 700 ? 0 : 1 - i(l / 700);
        }
        drawParty(t, e) {
          var i, l;
          let n = this.party;
          if (!n) return !1;
          let s = e - n.since,
            { ctx: a, FS: o, LH: c } = this;
          (a.font = this.mono(600)), (a.textBaseline = "top");
          let d = a.measureText("M").width,
            f = Math.max(20, Math.floor(t.tw / d)),
            m = Math.max(6, Math.floor(t.sh / c)),
            p = null != n.words && 8 > Math.floor(t.sh / c),
            g = Array.from({ length: m }, () => Array(f).fill(null)),
            w = (t, e, i, l, n) => {
              let s = Math.round(t),
                a = Math.round(e);
              if (a < 0 || a >= m || s < 0 || s >= f) return;
              let o = g[a][s];
              (!o || o.al < n) && (g[a][s] = { ch: i, col: l, al: n });
            },
            v = this.pal.accent,
            y = this.PHOSPHOR,
            k = [v, b, y, "#ffd166", "#8fdcff", "#ff9ecb"];
          for (let t of n.shells) {
            let i = e - t.at,
              l = t.x * f,
              n = t.y * m,
              s = k[Math.floor(t.hue * k.length)];
            if (i < 0 && i > -600) {
              let t = m - 1 - (m - 1 - n) * (1 + i / 600);
              w(l, t, "^", s, 0.95);
              for (let e = 1; e <= 4; e++)
                w(
                  l,
                  t + e,
                  e < 2 ? "|" : e < 4 ? ":" : ".",
                  s,
                  Math.max(0.1, 0.5 - 0.1 * e)
                );
            } else if (i >= 0 && i < 2600) {
              let e = i / 1e3,
                a = (0, h.Vk)(Math.floor(t.at) + 11),
                o = 1 - Math.exp(-(2.2 * e));
              for (let i = 0; i < 44; i++) {
                let h = (i / 44) * r.gc + 0.15 * a(),
                  c = (0.8 + 0.5 * a()) * t.k,
                  u = l + Math.cos(h) * c * 14 * o,
                  d = n + Math.sin(h) * c * 5.5 * o + e * e * 2.4,
                  f = 1 - e / 2.6,
                  m = e < 0.35 ? "*" : e < 0.9 ? "+" : e < 1.6 ? "'" : ".";
                f > 0 &&
                  w(
                    u,
                    d,
                    m,
                    s,
                    Math.max(0, f) * (i % 5 == 0 && e > 1 ? 0.5 : 1)
                  );
              }
              i < 140 &&
                (w(l, n, "@", "#ffffff", 1),
                w(l - 1, n, "*", "#ffffff", 0.9),
                w(l + 1, n, "*", "#ffffff", 0.9));
            }
          }
          let M = String(n.n),
            x = null !== (i = n.fin) && void 0 !== i ? i : 6800,
            S = Math.max(
              2,
              Math.min(Math.floor(f / (4 * M.length)), Math.floor((m - 4) / 5))
            ),
            T = t.sh / c - 5 * S >= 3.6 ? 1 : 0,
            A = Math.max(0, Math.floor((m - T - 2 - 5 * S) / 2));
          if (s > x && !p) {
            let t = Math.floor((f - (4 * M.length * S - S)) / 2),
              e = Math.min(1, (s - x) / 1600);
            M.split("").forEach((i, l) => {
              let n = (0, u.ew)(i);
              for (let i = 0; i < 5; i++)
                for (let s = 0; s < 3; s++)
                  if ("1" === n[3 * i + s])
                    for (let n = 0; n < S; n++)
                      for (let a = 0; a < S; a++) {
                        let o = t + (4 * l + s) * S + a,
                          r = A + i * S + n,
                          h = Math.min(
                            1,
                            Math.max(
                              0,
                              (e - (((7 * o + 13 * r) % 17) / 17) * 0.5) / 0.5
                            )
                          );
                        if (h <= 0) continue;
                        let c = h < 0.5 ? "*" : h < 0.85 ? "+" : "#";
                        w(
                          o,
                          r - (1 - h) * 6,
                          c,
                          h < 0.85 ? v : "#ffd166",
                          0.4 + 0.6 * h
                        );
                      }
            });
          }
          let O = t.tx,
            P = t.sy;
          p &&
            (a.save(), a.beginPath(), a.rect(t.sx, t.sy, t.sw, t.sh), a.clip());
          for (let t = 0; t < m; t++)
            for (let e = 0; e < f; e++) {
              let i = g[t][e];
              i &&
                ((a.fillStyle = i.col),
                (a.globalAlpha = i.al),
                a.fillText(i.ch, O + e * d, P + t * c));
            }
          (a.globalAlpha = 1), p && a.restore();
          let I = p ? 1200 : x + 1600,
            R = Math.min(1, Math.max(0, (s - I) / 900));
          if (R > 0) {
            let e =
                "function" == typeof matchMedia &&
                matchMedia("(hover: none)").matches,
              [i, o] =
                null !== (l = n.words) && void 0 !== l
                  ? l
                  : [
                      "".concat(
                        n.n.toLocaleString("en-US"),
                        "+ agents online at once. Thanks for being early."
                      ),
                      "Let's build something great together.",
                    ],
              r = e ? "tap to continue" : "press esc",
              h = i.slice(0, Math.ceil(i.length * R)),
              u = p
                ? t.sy + Math.max(0, (t.sh - 2 * c) / 2)
                : t.sy + (A + 5 * S + T) * c,
              d = s > I + 2600 && null == n.leaving;
            if (
              ((a.font = this.mono(600)),
              (a.fillStyle = "#ffd166"),
              (a.globalAlpha = 1),
              a.fillText(h, t.tx + (t.tw - a.measureText(i).width) / 2, u),
              R >= 1)
            ) {
              (a.font = this.mono(400)),
                (a.fillStyle = y),
                (a.globalAlpha = 0.85);
              let e = a.measureText("  ").width,
                i = a.measureText(o).width,
                l = d ? a.measureText(r).width : 0,
                n = t.tx + (t.tw - (i + (d ? e + l : 0))) / 2;
              a.fillText(o, n, u + c),
                d &&
                  ((a.globalAlpha = 0.5 + 0.3 * Math.sin(s / 400)),
                  a.fillText(r, n + i + e, u + c)),
                (a.globalAlpha = 1);
            }
          }
          return !0;
        }
        echo(t, e) {
          for (let i of t)
            this.echoes.push({ t: i, col: null != e ? e : null, al: 0.9 });
          (this.echoes = this.echoes.slice(-24)),
            this.drawBlocks(performance.now());
        }
        clearEchoes() {
          (this.echoes = []), this.drawBlocks(performance.now());
        }
        static holder(t, e) {
          return t
            ? null != e
              ? e
              : "".concat(t.slice(0, 6), "…").concat(t.slice(-4))
            : "no holder on record";
        }
        static plural(t, e) {
          return ""
            .concat(O.fmt(t), " ")
            .concat(e)
            .concat(1 === t ? "" : "s");
        }
        report() {
          var t, e;
          let i = this.snapshot;
          if (!i || 0 === i.at)
            return ["the control plane has not answered yet"];
          let n = i.health,
            s = O.fmt,
            a = [],
            o = i.events[0];
          if (o) {
            let { t } = O.feedLine(o, !1);
            a.push(
              "last move "
                .concat((0, l.F6)(o.at), " \xb7 ")
                .concat(t.slice(7).replace(/\s+/g, " ").trim())
            );
          }
          let r = [
            ["verifier", n.verifierUp],
            ["publisher", n.publisherUp],
            ["deployer", n.deployerUp],
          ]
            .filter((t) => {
              let [, e] = t;
              return !1 === e;
            })
            .map((t) => {
              let [e] = t;
              return e;
            });
          r.length && a.push("down: ".concat(r.join(" \xb7 ")));
          let h = n.pendingVerification + n.pendingDeployment + n.pendingSites;
          a.push(
            h
              ? "waiting: "
                  .concat(s(n.pendingVerification), " to verify \xb7 ")
                  .concat(s(n.pendingDeployment), " to deploy \xb7 ")
                  .concat(s(n.pendingSites), " site")
                  .concat(1 === n.pendingSites ? "" : "s", " to publish")
              : "nothing waiting on the verifier, the deployer or the publisher"
          );
          let c = null !== (t = i.owners) && void 0 !== t ? t : [],
            u = new Map();
          for (let t of c)
            t &&
              u.set(
                t.toLowerCase(),
                (null !== (e = u.get(t.toLowerCase())) && void 0 !== e
                  ? e
                  : 0) + 1
              );
          let f = Math.max(0, ...u.values());
          return (
            a.push(
              "seats: "
                .concat(s(n.seatsEnrolled), " enrolled of ")
                .concat(s(d.Is), " \xb7 ")
                .concat(O.plural(u.size, "holder"))
                .concat(f ? " \xb7 the largest holds ".concat(s(f)) : "")
            ),
            i.chain &&
              a.push(
                "collection "
                  .concat(i.chain.collection.slice(0, 6), "…")
                  .concat(i.chain.collection.slice(-4), " on ")
                  .concat(
                    1 === i.chain.chainId
                      ? "mainnet"
                      : 11155111 === i.chain.chainId
                      ? "sepolia"
                      : "chain ".concat(i.chain.chainId)
                  )
              ),
            a
          );
        }
        jobs() {
          let t = this.snapshot;
          if (!t || 0 === t.at)
            return ["the control plane has not answered yet"];
          let e = t.counts,
            i = O.fmt,
            n = [],
            s = ["executing", "completed", "blocked", "cancelled"],
            a = Object.entries(e.jobStates).sort((t, e) => {
              let [i] = t,
                [l] = e;
              return (s.indexOf(i) + 1 || 99) - (s.indexOf(l) + 1 || 99);
            });
          n.push(
            "".concat(O.plural(e.jobs, "job"), " \xb7 ").concat(
              a
                .map((t) => {
                  let [e, l] = t;
                  return "".concat(i(l), " ").concat(e);
                })
                .join(" \xb7 ")
            )
          );
          let o = t.events.filter((t) => "node" === t.kind),
            r = o.filter((t) => "accepted" === t.state).length,
            h = o.filter((t) => {
              var e;
              return (
                "failed" === t.state &&
                !/cancel/.test(null !== (e = t.reason) && void 0 !== e ? e : "")
              );
            }),
            c = o.filter((t) => {
              var e;
              return (
                "failed" === t.state &&
                /cancel/.test(null !== (e = t.reason) && void 0 !== e ? e : "")
              );
            }).length;
          o.length &&
            n.push(
              "last "
                .concat(O.plural(o.length, "step"), ": ")
                .concat(i(r), " passed \xb7 ")
                .concat(i(h.length), " failed \xb7 ")
                .concat(i(c), " cancelled")
            );
          let u = h[0];
          u &&
            n.push(
              "last failure "
                .concat((0, l.F6)(u.at), " \xb7 ")
                .concat(
                  null == u.tokenId ? "no agent" : "agent #".concat(u.tokenId),
                  " on "
                )
                .concat(u.step)
                .concat(u.reason ? " \xb7 ".concat(O.short(u.reason)) : "")
            );
          let d = Object.values(t.seats).sort(
            (t, e) => e.accepted + e.failed - (t.accepted + t.failed)
          )[0];
          return (
            d &&
              n.push(
                "busiest agent #"
                  .concat(d.tokenId, " \xb7 ")
                  .concat(O.plural(d.accepted, "step"), " done \xb7 ")
                  .concat(i(d.failed), " failed \xb7 last ")
                  .concat((0, l.F6)(d.last))
              ),
            n
          );
        }
        ownerOf(t) {
          var e, i, l;
          return null !==
            (l =
              null === (i = this.snapshot) || void 0 === i
                ? void 0
                : null === (e = i.owners) || void 0 === e
                ? void 0
                : e[t]) && void 0 !== l
            ? l
            : null;
        }
        ranking() {
          let t = this.snapshot;
          return t
            ? Object.values(t.seats)
                .filter((t) => O.tried(t) > 0)
                .sort(
                  (t, e) =>
                    e.accepted - t.accepted ||
                    O.rate(e) - O.rate(t) ||
                    t.tokenId - e.tokenId
                )
                .map((t) => t.tokenId)
            : [];
        }
        static tried(t) {
          var e;
          return null !== (e = t.attempts) && void 0 !== e
            ? e
            : t.accepted + t.failed;
        }
        static rate(t) {
          let e = O.tried(t);
          return e ? t.accepted / e : 0;
        }
        static ordinal(t) {
          var e;
          return ""
            .concat(t)
            .concat(
              t % 100 >= 11 && t % 100 <= 13
                ? "th"
                : null !== (e = ["th", "st", "nd", "rd"][t % 10]) &&
                  void 0 !== e
                ? e
                : "th"
            );
        }
        static record(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = O.fmt,
            n = t.attempts,
            s = e
              ? "worked ".concat((0, l.F6)(t.last))
              : "last worked ".concat((0, l.F6)(t.last));
          if (null == n)
            return ""
              .concat(O.plural(t.accepted, "step"), " done \xb7 ")
              .concat(i(t.failed), " failed \xb7 ")
              .concat(s);
          let a = e
            ? []
            : [
                t.rejected ? "".concat(i(t.rejected), " turned down") : null,
                t.failed ? "".concat(i(t.failed), " failed") : null,
                t.pending
                  ? "".concat(i(t.pending), " waiting on a verdict")
                  : null,
              ].filter((t) => null !== t);
          return [
            "".concat(i(t.accepted), " of ").concat(i(n), " accepted"),
            "".concat((100 * O.rate(t)).toFixed(1), "%"),
            ...a,
            s,
          ].join(" \xb7 ");
        }
        seat(t, e) {
          let i = this.snapshot;
          if (!i || 0 === i.at)
            return ["the control plane has not answered yet"];
          if (!Number.isInteger(t) || t < 0 || t >= d.Is)
            return [
              "seat #"
                .concat(t, ": the collection runs #0 to #")
                .concat(d.Is - 1),
            ];
          let l = i.seats[t],
            n = O.holder(this.ownerOf(t), e);
          if ((this.point([t]), !l))
            return [
              "seat #"
                .concat(t, " \xb7 held by ")
                .concat(n, " \xb7 no work on record"),
            ];
          let s = l.working
              ? "working now"
              : l.queued
              ? "queued for ".concat(O.plural(l.queued, "step"))
              : "idle",
            a = this.ranking(),
            o = a.indexOf(t),
            r =
              o < 0
                ? ""
                : " \xb7 "
                    .concat(O.ordinal(o + 1), " of ")
                    .concat(O.plural(a.length, "agent"));
          return [
            "agent #"
              .concat(t, " \xb7 held by ")
              .concat(n)
              .concat(r, " \xb7 ")
              .concat(s),
            "  ".concat(O.record(l)),
          ];
        }
        holder(t, e) {
          var i;
          let l = this.snapshot;
          if (!l || 0 === l.at)
            return ["the control plane has not answered yet"];
          let n = t.toLowerCase(),
            s = [];
          (null !== (i = l.owners) && void 0 !== i ? i : []).forEach((t, e) => {
            t && t.toLowerCase() === n && s.push(e);
          });
          let a = O.holder(t, e);
          if (!s.length) return ["".concat(a, " holds no seats")];
          this.point(s);
          let o = s.filter((t) => l.seats[t]),
            r = ""
              .concat(a, " holds ")
              .concat(O.plural(s.length, "seat"))
              .concat(
                o.length
                  ? " \xb7 "
                      .concat(o.length, " of them ")
                      .concat(1 === o.length ? "is an agent" : "are agents")
                  : "",
                " \xb7 ringed on the wall"
              ),
            h = this.ranking(),
            c = o
              .slice()
              .sort((t, e) => h.indexOf(t) - h.indexOf(e))
              .slice(0, 8)
              .map((t) => {
                let e = l.seats[t],
                  i = h.indexOf(t),
                  n =
                    i < 0
                      ? ""
                      : ""
                          .concat(O.ordinal(i + 1), " of ")
                          .concat(O.fmt(h.length), " \xb7 ");
                return "  "
                  .concat("#".concat(t).padEnd(6), " ")
                  .concat(n)
                  .concat(O.record(e, !0));
              }),
            u =
              o.length > 8
                ? ["  … and ".concat(o.length - 8, " more agents")]
                : [],
            d = s.filter((t) => !l.seats[t]);
          return [
            r,
            ...c,
            ...u,
            ...(d.length
              ? [
                  "  "
                    .concat(
                      d
                        .slice(0, 12)
                        .map((t) => "#".concat(t))
                        .join(" ")
                    )
                    .concat(
                      d.length > 12
                        ? " … and ".concat(d.length - 12, " more")
                        : "",
                      " \xb7 no work on record"
                    ),
                ]
              : []),
          ];
        }
        grep(t) {
          let e = this.snapshot;
          if (!e || 0 === e.at)
            return ["the control plane has not answered yet"];
          let i = t.toLowerCase(),
            l = e.events
              .map((t) => O.feedLine(t, !1).t)
              .filter((t) => t.toLowerCase().includes(i));
          return l.length
            ? [
                ""
                  .concat(l.length, " of ")
                  .concat(e.events.length, ' lines carry "')
                  .concat(t, '"')
                  .concat(l.length > 12 ? ", the newest 12:" : ":"),
                ...l
                  .slice(0, 12)
                  .reverse()
                  .map((t) => "  ".concat(t)),
              ]
            : ['no line carries "'.concat(t, '"')];
        }
        snap() {
          if (this.mine) {
            var t, e;
            let i = [];
            (null !==
              (e =
                null === (t = this.snapshot) || void 0 === t
                  ? void 0
                  : t.owners) && void 0 !== e
              ? e
              : []
            ).forEach((t, e) => {
              t && t.toLowerCase() === this.mine && i.push(e);
            }),
              i.length && this.point(i);
          }
          return this.drawBlocks(performance.now()), this.canvas;
        }
        point(t) {
          let e = this.layout;
          if (!e) return;
          let i = performance.now(),
            l = new Set(t);
          e.units.forEach((t, e) => {
            t.ids.some((t) => l.has(t)) &&
              (this.warm.set(e, i + 4e3),
              this.ringed.add(e),
              this.redraw(t, i, !0, !0));
          }),
            this.opts.still &&
              window.setTimeout(() => {
                for (let t of this.ringed)
                  this.ringed.delete(t),
                    this.warm.delete(t),
                    e.units[t] && this.redraw(e.units[t], 0, !1, !1);
              }, 4e3);
        }
        at(t, e) {
          let i = this.layout,
            l = this.canvas.getBoundingClientRect(),
            n = Math.floor((t - l.left) / (l.width / i.cols)),
            s = Math.floor((e - l.top) / (l.height / i.rows)),
            o =
              n >= 0 && n < i.cols && s >= 0 ? i.grid[s * i.cols + n] : void 0;
          return {
            b: l,
            col: n,
            row: s,
            v: null != o && o <= a.BT ? void 0 : o,
          };
        }
        pointerMove(t, e) {
          let i = this.layout,
            l = this.snapshot;
          if (!i || !l) return "";
          let { b: n, v: s } = this.at(t, e),
            a = n.width / i.cols,
            o = n.height / i.rows;
          return (this.hotCog(
            null != s && s < 0 && "settings" === i.blocks[-1 - s].kind
          ),
          this.hotPlay(
            null != s && s < 0 && "listen" === i.blocks[-1 - s].kind
          ),
          null != s && s < 0)
            ? (this.opts.onTip(null),
              this.setHot(null),
              this.hotFoot(
                "monitor" === i.blocks[-1 - s].kind &&
                  !this.film &&
                  !this.backs &&
                  this.onFoot(t, e)
              ),
              "pointer")
            : null == s
            ? (this.opts.onTip(null), this.setHot(null), this.hotFoot(!1), "")
            : (this.setHot(s),
              this.opts.onTip(this.tipFor(s, a, o)),
              "pointer");
        }
        tipOf(t) {
          let e = this.layout;
          if (!e || !this.snapshot) return null;
          let i = e.units.findIndex((e) => e.ids.includes(t));
          if (i < 0) return null;
          let l = this.canvas.getBoundingClientRect();
          return this.tipFor(i, l.width / e.cols, l.height / e.rows);
        }
        tipFor(t, e, i) {
          var l, s, a;
          let o = this.layout,
            r = this.snapshot,
            h = o.units[t],
            c = null !== (s = r.seats[h.seat]) && void 0 !== s ? s : null,
            u = r.events.find(
              (t) =>
                "node" === t.kind &&
                t.tokenId === h.seat &&
                ("leased" === t.state || "working" === t.state)
            );
          return {
            x: (h.c + h.w / 2) * e,
            left: h.c * e,
            y: h.r * i,
            bottom: (h.r + h.h) * i,
            tokenId: h.seat,
            owner: h.owner,
            seats: h.ids,
            record: c,
            held: h.ids.map((t) => r.seats[t]).filter((t) => !!t),
            current: u ? { step: u.step, objective: u.objective } : null,
            activity: h.activity,
            label: (0, n.uv)(this.designOf(h)) || null,
            first: h.first,
            lot:
              null !==
                (a =
                  null === (l = this.designOf(h)) || void 0 === l
                    ? void 0
                    : l.lot) && void 0 !== a
                ? a
                : null,
          };
        }
        hotFoot(t) {
          this.footHot !== t &&
            ((this.footHot = t),
            this.layout && this.drawBlocks(performance.now()));
        }
        pointerLeave() {
          this.hotCog(!1),
            this.hotPlay(!1),
            this.hotFoot(!1),
            this.opts.onTip(null),
            null != this.hot &&
              this.warm.set(this.hot, performance.now() + 2200),
            (this.hot = null);
        }
        onFoot(t, e) {
          let i = this.foot;
          if (!i) return !1;
          let l = this.canvas.getBoundingClientRect(),
            n = this.width / l.width,
            s = (t - l.left) * n,
            a = (e - l.top) * n;
          return (
            s >= i.x - 2 && s <= i.x + i.w + 2 && a >= i.y && a <= i.y + i.h
          );
        }
        linkAt(t, e) {
          let i = this.canvas.getBoundingClientRect(),
            l = this.width / i.width,
            n = (t - i.left) * l,
            s = (e - i.top) * l,
            a = this.links.find(
              (t) =>
                n >= t.x - 2 &&
                n <= t.x + t.w + 2 &&
                s >= t.y - 2 &&
                s <= t.y + t.h
            );
          return a ? a.href : null;
        }
        click(t, e) {
          var i, l, n, s, a, o, r, h, u, d, f, m, p, g, w;
          let v = this.layout;
          if (!v) return;
          let { b: y, v: b } = this.at(t, e);
          if (null != b) {
            if (b < 0) {
              let i = v.blocks[-1 - b];
              if ("settings" === i.kind) {
                null === (a = (o = this.opts).onSettings) ||
                  void 0 === a ||
                  a.call(o);
                return;
              }
              if ("listen" === i.kind) {
                null === (r = (h = this.opts).onListen) ||
                  void 0 === r ||
                  r.call(h);
                return;
              }
              if (this.backs) {
                null === (u = (d = this.opts).onFront) ||
                  void 0 === u ||
                  u.call(d);
                return;
              }
              let l = this.linkAt(t, e);
              if (l) {
                null === (f = (m = this.opts).onLink) ||
                  void 0 === f ||
                  f.call(m, l);
                return;
              }
              if ("monitor" === i.kind && !this.film && this.onFoot(t, e)) {
                (this.face = 0 === this.face ? 1 : 0),
                  (0, c.DE)(c.DG, String(this.face)),
                  null === (p = this.opts.sound) || void 0 === p || p.press(),
                  this.drawBlocks(performance.now());
                return;
              }
              if (this.film) {
                let i = this.filmKeyAt(t, e);
                i &&
                  (null === (g = (w = this.opts).onFilmKey) ||
                    void 0 === g ||
                    g.call(w, i));
                return;
              }
              if (
                this.party &&
                null == this.party.leaving &&
                performance.now() - this.party.since > 2e3
              ) {
                this.endParty();
                return;
              }
              null === (n = (s = this.opts).onFocus) ||
                void 0 === n ||
                n.call(s);
              return;
            }
            v.units[b],
              this.press(b),
              null === (i = (l = this.opts).onPin) ||
                void 0 === i ||
                i.call(l, this.tipFor(b, y.width / v.cols, y.height / v.rows));
          }
        }
        constructor(t, e) {
          (this.snapshot = null),
            (this.layout = null),
            (this.painter = null),
            (this.width = 0),
            (this.height = 0),
            (this.raf = 0),
            (this.every = x),
            (this.painted = 0),
            (this.cost = 0),
            (this.shown = !0),
            (this.theme = o.yU.steel),
            (this.backs = !1),
            (this.flipAt = 0),
            (this.flipDone = null),
            (this.flipFrom = null),
            (this.flipTo = null),
            (this.flipIndex = null),
            (this.margins = []),
            (this.boards = new Map()),
            (this.monitorBack = null),
            (this.monitorTurning = !1),
            (this.monitorHomed = !0),
            (this.homeAt = 0),
            (this.homePics = null),
            (this.lit = "active"),
            (this.motion = "auto"),
            (this.turns = 4),
            (this.paints = 0),
            (this.target = 0),
            (this.hot = null),
            (this.mine = null),
            (this.designs = new Map()),
            (this.warm = new Map()),
            (this.live = new Map()),
            (this.liveN = 24),
            (this.working = []),
            (this.feedRows = null),
            (this.held = null),
            (this.answers = new Map()),
            (this.names = new Map()),
            (this.spot = !1),
            (this.spotLevel = 0),
            (this.spotFrom = 0),
            (this.spotAt = 0),
            (this.spotBase = null),
            (this.newest = null),
            (this.born = performance.now()),
            (this.arrived = 0),
            (this.laidFrom = null),
            (this.input = ""),
            (this.focused = !1),
            (this.echoes = []),
            (this.film = null),
            (this.ringed = new Set()),
            (this.links = []),
            (this.FS = 11),
            (this.LH = 17),
            (this.HEAD = 19),
            (this.PAD = 6),
            (this.BEZ = 4),
            (this.flash = new Map()),
            (this.market = { cap: null, goal: 1e9 }),
            (this.face = "1" === (0, c.Zi)(c.DG, ["0", "1"], "0") ? 1 : 0),
            (this.footHot = !1),
            (this.foot = null),
            (this.pulse = []),
            (this.footY = 0),
            (this.listening = !1),
            (this.playHot = !1),
            (this.cogHot = !1),
            (this.lifted = null),
            (this.frame = (t) => {
              let e = this.layout;
              if (!e) return;
              if (t - this.painted < this.every - 4) {
                this.raf = requestAnimationFrame(this.frame);
                return;
              }
              this.painted = t;
              let i = performance.now();
              for (let [i, l] of (this.spotAt && this.spotStep(t),
              this.flipAt && this.flipStep(t),
              this.homeAt && t >= this.homeAt && this.homeStep(t),
              this.paints++,
              this.live))
                t > l || this.warm.has(i)
                  ? (this.live.delete(i),
                    this.warm.has(i) || this.redraw(e.units[i], 0, !1, !1))
                  : ("all" !== this.motion ||
                      (i + this.paints) % this.turns == 0) &&
                    this.redraw(e.units[i], t, !1, !0);
              if ((this.pickLive(t), "off" !== this.motion))
                for (let i of this.working)
                  this.warm.has(i) ||
                    (i + this.paints) % this.turns != 0 ||
                    this.redraw(e.units[i], t, !1, !1);
              for (let [i, l] of ((!this.arrived ||
                t < this.arrived + 1440 + 700 ||
                (null != this.newest && t < this.newest.since + 700) ||
                this.party ||
                (this.film && this.filmDue(t)) ||
                this.paints % 3 == 0) &&
                this.drawBlocks(t),
              this.warm))
                i !== this.hot && t > l
                  ? (this.warm.delete(i),
                    this.ringed.delete(i),
                    this.redraw(e.units[i], 0, !1, !1))
                  : this.redraw(
                      e.units[i],
                      t,
                      i === this.hot || this.ringed.has(i),
                      !0
                    );
              this.settle(performance.now() - i),
                (this.raf = requestAnimationFrame(this.frame));
            }),
            (this.filmKeys = []),
            (this.party = null),
            (this.canvas = t),
            (this.opts = e);
          let i = t.getContext("2d");
          if (!i) throw Error("canvas 2d context unavailable");
          this.ctx = i;
        }
      }
      (O.STEP_WORD = {
        implement: ["built", "building", "build"],
        build_contract_project: ["built", "building", "build"],
        build_dapp: ["built", "building", "build"],
        test: ["tested", "testing", "test"],
        tests: ["tested", "testing", "test"],
        review: ["reviewed", "reviewing", "review"],
        contract_review: ["reviewed", "reviewing", "review"],
        integrate: ["integrated", "integrating", "integrate"],
        manifest: ["attested", "attesting", "attest"],
        deploy: ["deployed", "deploying", "deploy"],
        publish: ["published", "publishing", "publish"],
      }),
        (O.GOAL_CELLS = 24),
        (O.PULSE_CELLS = 50),
        (O.WINDOW_MS = 6e4),
        (O.SHOW_MS = 9e3);
    },
    76579: function (t, e, i) {
      "use strict";
      i.d(e, {
        DE: function () {
          return h;
        },
        DG: function () {
          return a;
        },
        DL: function () {
          return s;
        },
        Zi: function () {
          return r;
        },
        bw: function () {
          return l;
        },
        eG: function () {
          return c;
        },
        eo: function () {
          return n;
        },
      });
      let l = "imd.wall.theme",
        n = "imd.wall.motion",
        s = "imd.wall.lit",
        a = "imd.wall.face",
        o = "imd.wall.scheme",
        r = (t, e, i) => {
          try {
            let l = localStorage.getItem(t);
            return e.includes(l) ? l : i;
          } catch (t) {
            return i;
          }
        },
        h = (t, e) => {
          try {
            localStorage.setItem(t, e);
          } catch (t) {}
        },
        c = (t, e) => {
          let i = r(l, t, "");
          if (i) return i;
          let n = r(o, t, "");
          try {
            localStorage.removeItem(o), localStorage.removeItem("imd.wall.led");
          } catch (t) {}
          return n ? (h(l, n), n) : e;
        };
    },
    16043: function (t, e, i) {
      "use strict";
      i.d(e, {
        Ar: function () {
          return n;
        },
        I8: function () {
          return h;
        },
        WN: function () {
          return o;
        },
      });
      let l = "imd.machine.sound",
        n = "imd:sound",
        s = [
          { hz: 220, every: 17.9, at: 0 },
          { hz: 329.63, every: 23.3, at: 7 },
          { hz: 277.18, every: 29.7, at: 2 },
          { hz: 440, every: 31.9, at: 15 },
          { hz: 369.99, every: 41.3, at: 10 },
          { hz: 659.26, every: 53.1, at: 29 },
        ],
        a = [220, 246.94, 277.18, 329.63, 369.99];
      function o(t, e) {
        let i = (2654435761 * t + 12345) >>> 0,
          l = () => {
            let t = Math.imul((i = (i + 1831565813) >>> 0) ^ (i >>> 15), 1 | i);
            return (
              (((t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t) ^
                (t >>> 14)) >>>
                0) /
              4294967296
            );
          },
          n = a[Math.floor(l() * a.length)],
          s = 33 + 26 * l();
        return {
          hz: n * (e >= 24 ? 4 : e >= 6 ? 2 : 1),
          every: Math.round(10 * s) / 10,
          at: Math.round(l() * s * 10) / 10,
        };
      }
      function r(t) {
        return t >= 22 || t < 6
          ? { hz: 2 / 3, every: 1.3 }
          : { hz: 1, every: 1 };
      }
      class h {
        later(t, e) {
          let i = setTimeout(() => {
            this.timers.delete(i), t();
          }, e);
          this.timers.add(i);
        }
        static remembered() {
          try {
            return "0" !== localStorage.getItem(l);
          } catch (t) {
            return !0;
          }
        }
        init() {
          if (this.ac || this.disposed) return;
          let t = (this.ac = new AudioContext()),
            e = (this.master = t.createGain());
          (e.gain.value = 0), e.connect(t.destination);
          let i = t.createBiquadFilter();
          for (let [l, n] of ((i.type = "lowpass"),
          (i.frequency.value = 220),
          i.connect(e),
          [
            [55, 0.07],
            [55.6, 0.05],
            [110.3, 0.02],
          ])) {
            let e = t.createOscillator();
            (e.type = "triangle"), (e.frequency.value = l);
            let s = t.createGain();
            (s.gain.value = n), e.connect(s), s.connect(i), e.start();
          }
          for (let e of [118, 119.1]) {
            let l = t.createOscillator();
            (l.type = "sine"), (l.frequency.value = e);
            let n = t.createGain();
            (n.gain.value = 0.022), l.connect(n), n.connect(i), l.start();
          }
          let l = t.createBuffer(1, 2 * t.sampleRate, t.sampleRate),
            n = l.getChannelData(0),
            s = 0;
          for (let t = 0; t < n.length; t++)
            (s = (s + 0.02 * (2 * Math.random() - 1)) / 1.02), (n[t] = 3.5 * s);
          let a = t.createBufferSource();
          (a.buffer = l), (a.loop = !0);
          let o = t.createBiquadFilter();
          (o.type = "bandpass"), (o.frequency.value = 400), (o.Q.value = 0.6);
          let r = t.createGain();
          (r.gain.value = 0.035),
            a.connect(o),
            o.connect(r),
            r.connect(e),
            a.start(),
            (this.noise = l);
          let h = () => {
            let e = t.currentTime;
            r.gain.cancelScheduledValues(e),
              r.gain.setValueAtTime(r.gain.value, e),
              r.gain.linearRampToValueAtTime(0.075, e + 10),
              r.gain.setValueAtTime(0.075, e + 60),
              r.gain.linearRampToValueAtTime(0.035, e + 60 + 8),
              this.later(h, 3e5 + 18e4 * Math.random());
          };
          for (let [e, l, n, s] of (this.later(h, 24e4 + 18e4 * Math.random()),
          [
            [i.frequency, 160, 300, 131],
            [o.frequency, 300, 560, 197],
          ])) {
            let i = t.createOscillator();
            (i.type = "sine"),
              (i.frequency.value = 1 / (s * (0.8 + 0.4 * Math.random())));
            let a = t.createGain();
            (a.gain.value = (n - l) / 2),
              (e.value = (l + n) / 2),
              i.connect(a),
              a.connect(e),
              i.start();
          }
          let c = (this.air = t.createDelay(2));
          c.delayTime.value = 0.43;
          let u = t.createGain();
          u.gain.value = 0.42;
          let d = (this.dark = t.createBiquadFilter());
          (d.type = "lowpass"), (d.frequency.value = 1400);
          let f = t.createGain();
          (f.gain.value = 0.5),
            c.connect(d),
            d.connect(u),
            u.connect(c),
            d.connect(f),
            f.connect(e),
            this.loops();
        }
        tone(t, e, i) {
          if (!this.on || !this.ac || !this.master || !this.air) return;
          let l = this.ac,
            n = l.currentTime,
            s = 1.8 + 1.6 * Math.random(),
            a = 3 + 3 * Math.random(),
            o = l.createGain();
          for (let [r, h] of (o.gain.setValueAtTime(0, n),
          o.gain.linearRampToValueAtTime(i, n + s),
          o.gain.setValueAtTime(i, n + s + e),
          o.gain.linearRampToValueAtTime(0, n + s + e + a),
          o.connect(this.master),
          o.connect(this.air),
          [
            [1, 1],
            [2, 0.18],
            [3, 0.05],
          ])) {
            let i = l.createOscillator();
            (i.type = "sine"),
              (i.frequency.value = t * r),
              (i.detune.value = (Math.random() - 0.5) * 6);
            let c = l.createGain();
            (c.gain.value = h),
              i.connect(c),
              c.connect(o),
              i.start(n),
              i.stop(n + s + e + a + 0.1);
          }
        }
        loops() {
          let t = r(new Date().getHours()),
            e = Date.now() / 1e3;
          s.forEach((i, l) => {
            let n = l === s.length - 1,
              a = () => {
                let e = Math.random();
                l < this.voices &&
                  (!n || this.bright) &&
                  Math.random() >= 0.1 &&
                  this.tone(
                    i.hz * t.hz * (e < 0.12 ? 0.5 : e < 0.18 ? 2 : 1),
                    1.5 + 2.5 * Math.random(),
                    0.028 + 0.02 * Math.random()
                  ),
                  this.later(a, i.every * t.every * 1e3 * this.tempo());
              },
              o = i.every * t.every,
              r = (((e - i.at * t.every) % o) + o) % o;
            this.later(a, Math.max(4e3, (o - r) * 1e3));
          });
        }
        tempo() {
          return Math.max(0.66, this.day * (1 - this.pace / 3));
        }
        mood(t) {
          this.ac &&
            this.dark &&
            ((this.bright = t),
            this.dark.frequency.cancelScheduledValues(this.ac.currentTime),
            this.dark.frequency.setTargetAtTime(
              t ? this.shade : Math.min(650, this.shade),
              this.ac.currentTime,
              2
            ),
            t || this.later(() => this.mood(!0), 6e4));
        }
        setPace(t) {
          this.pace = Math.max(0, Math.min(1, t));
        }
        setSwarm(t) {
          (this.voices = Math.max(1, Math.min(s.length, 1 + t.online))),
            (this.day = 1 - Math.min(1, t.acceptedToday / 20) / 3),
            (this.shade = 1400 - 600 * Math.max(0, Math.min(1, t.failRatio))),
            this.ac &&
              this.dark &&
              this.bright &&
              (this.dark.frequency.cancelScheduledValues(this.ac.currentTime),
              this.dark.frequency.setTargetAtTime(
                this.shade,
                this.ac.currentTime,
                4
              ));
          let e = t.agents.slice(0, 3);
          for (let [t, i] of this.agents)
            e.some((e) => e.tokenId === t) ||
              (i.timer && (clearTimeout(i.timer), this.timers.delete(i.timer)),
              this.agents.delete(t));
          for (let t of e) {
            if (this.agents.has(t.tokenId)) continue;
            let e = o(t.tokenId, t.accepted),
              i = { hz: e.hz, every: e.every, timer: null };
            this.agents.set(t.tokenId, i);
            let l = () => {
                if (!this.agents.has(t.tokenId) || this.disposed) return;
                let e = r(new Date().getHours());
                Math.random() >= 0.1 &&
                  this.tone(
                    i.hz * e.hz,
                    1.5 + 2 * Math.random(),
                    0.022 + 0.014 * Math.random()
                  ),
                  (i.timer = setTimeout(
                    l,
                    i.every * e.every * 1e3 * this.tempo()
                  )),
                  this.timers.add(i.timer);
              },
              n = r(new Date().getHours()),
              s = e.every * n.every,
              a = (((Date.now() / 1e3 - e.at * n.every) % s) + s) % s;
            (i.timer = setTimeout(l, Math.max(4e3, (s - a) * 1e3))),
              this.timers.add(i.timer);
          }
        }
        set(t) {
          if (!this.disposed) {
            this.on = t;
            try {
              localStorage.setItem(l, t ? "1" : "0");
            } catch (t) {}
            if (t) {
              this.init();
              let t = this.ac,
                e = this.master;
              t.resume(),
                e.gain.cancelScheduledValues(t.currentTime),
                e.gain.setTargetAtTime(1, t.currentTime, 0.8);
            } else if (this.ac && this.master) {
              let t = this.ac;
              this.master.gain.cancelScheduledValues(t.currentTime),
                this.master.gain.setTargetAtTime(0, t.currentTime, 0.3),
                this.later(() => {
                  this.on || this.ac !== t || t.suspend();
                }, 1500);
            }
          }
        }
        duck(t) {
          if (this.disposed || !this.on || !this.ac || !this.master) return;
          let e = this.ac;
          this.master.gain.cancelScheduledValues(e.currentTime),
            this.master.gain.setTargetAtTime(
              t ? 0 : 1,
              e.currentTime,
              t ? 0.3 : 0.8
            );
        }
        dispose() {
          var t;
          for (let t of ((this.disposed = !0), (this.on = !1), this.timers))
            clearTimeout(t);
          this.timers.clear(),
            null === (t = this.ac) || void 0 === t || t.close(),
            (this.ac = null),
            (this.master = null),
            (this.air = null),
            (this.dark = null),
            (this.noise = null);
        }
        blip(t, e, i) {
          let l =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : "sine",
            n =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 0;
          if (!this.on || !this.ac || !this.master) return;
          let s = this.ac,
            a = s.currentTime + n,
            o = s.createOscillator();
          (o.type = l), (o.frequency.value = t);
          let r = s.createGain();
          r.gain.setValueAtTime(0, a),
            r.gain.linearRampToValueAtTime(i, a + 0.006),
            r.gain.exponentialRampToValueAtTime(5e-4, a + e),
            o.connect(r),
            r.connect(this.master),
            o.start(a),
            o.stop(a + e + 0.02);
        }
        click() {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0.08,
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1800,
            i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0.02;
          if (!this.on || !this.ac || !this.master || !this.noise) return;
          let l = this.ac,
            n = l.currentTime,
            s = l.createBufferSource();
          (s.buffer = this.noise),
            (s.loopStart = 1.5 * Math.random()),
            (s.loop = !0);
          let a = l.createBiquadFilter();
          (a.type = "bandpass"), (a.frequency.value = e), (a.Q.value = 2.5);
          let o = l.createGain();
          o.gain.setValueAtTime(t, n),
            o.gain.exponentialRampToValueAtTime(5e-4, n + i),
            s.connect(a),
            a.connect(o),
            o.connect(this.master),
            s.start(n, s.loopStart),
            s.stop(n + i + 0.01);
        }
        tick() {
          let t = performance.now();
          t - this.lastTick < 220 ||
            0.55 > Math.random() ||
            ((this.lastTick = t),
            this.click(0.05, 1200 + 2400 * Math.random(), 0.018));
        }
        hover() {
          this.click(0.06, 2600, 0.015);
        }
        relay() {
          this.click(0.12, 900, 0.03), this.click(0.08, 1500, 0.02);
        }
        press() {
          this.click(0.14, 640, 0.035);
        }
        accept(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            i = null == t ? 440 : o(t, e).hz;
          this.blip(2 * i, 0.18, 0.12),
            this.blip(3 * i, 0.28, 0.1, "sine", 0.12),
            this.mood(!0);
        }
        fail() {
          this.blip(180, 0.35, 0.12, "square"), this.mood(!1);
        }
        woof() {
          if (!this.on || !this.ac || !this.master) return;
          let t = this.ac;
          for (let e of [0, 0.16]) {
            let i = t.currentTime + e,
              l = t.createOscillator();
            (l.type = "triangle"),
              l.frequency.setValueAtTime(520, i),
              l.frequency.exponentialRampToValueAtTime(260, i + 0.09);
            let n = t.createGain();
            n.gain.setValueAtTime(0, i),
              n.gain.linearRampToValueAtTime(0.07, i + 0.008),
              n.gain.exponentialRampToValueAtTime(5e-4, i + 0.11),
              l.connect(n),
              n.connect(this.master),
              l.start(i),
              l.stop(i + 0.13);
          }
          this.click(0.05, 700, 0.04);
        }
        constructor() {
          (this.on = !1),
            (this.ac = null),
            (this.master = null),
            (this.air = null),
            (this.dark = null),
            (this.noise = null),
            (this.bright = !0),
            (this.lastTick = 0),
            (this.timers = new Set()),
            (this.disposed = !1),
            (this.pace = 0),
            (this.voices = s.length),
            (this.day = 1),
            (this.shade = 1400),
            (this.agents = new Map());
        }
      }
    },
    15863: function (t, e, i) {
      "use strict";
      i.d(e, {
        Ch: function () {
          return s;
        },
        Is: function () {
          return l;
        },
        JW: function () {
          return n;
        },
        u8: function () {
          return a;
        },
        yi: function () {
          return o;
        },
      });
      let l = 2e3,
        n = 0,
        s = 1,
        a = 2,
        o = 3;
    },
    10276: function (t, e, i) {
      "use strict";
      i.d(e, {
        BB: function () {
          return m;
        },
        CV: function () {
          return d;
        },
        Es: function () {
          return w;
        },
        HO: function () {
          return o;
        },
        YJ: function () {
          return r;
        },
        _b: function () {
          return v;
        },
        tv: function () {
          return c;
        },
        w: function () {
          return p;
        },
        x3: function () {
          return a;
        },
      });
      var l = i(90249),
        n = i(99572),
        s = i(51917);
      let a =
          s.env.NEXT_PUBLIC_SEAT_INSTRUMENTS ||
          "0x1a23b1B293E3b263aE2C89AF4eFab733B00220e8",
        o =
          s.env.NEXT_PUBLIC_PANEL_RENDERER ||
          "0xbc2faa6e3e1d2fdcad62d382d5b495107f4b0631",
        r = (n.tL && s.env.NEXT_PUBLIC_DEV_IMPERSONATE) || void 0,
        h = null !== n.tL && void 0 !== n.tL ? n.tL : n.Qk,
        c = [
          {
            type: "function",
            name: "setDesign",
            stateMutability: "nonpayable",
            inputs: [{ name: "design", type: "bytes32" }],
            outputs: [],
          },
          {
            type: "function",
            name: "clearDesign",
            stateMutability: "nonpayable",
            inputs: [],
            outputs: [],
          },
          {
            type: "function",
            name: "designOf",
            stateMutability: "view",
            inputs: [{ name: "holder", type: "address" }],
            outputs: [{ type: "bytes32" }],
          },
          {
            type: "function",
            name: "designsOf",
            stateMutability: "view",
            inputs: [{ name: "holders", type: "address[]" }],
            outputs: [{ name: "out", type: "bytes32[]" }],
          },
        ],
        u = (t) => t.padStart(64, "0");
      function d(t) {
        return [
          ...new Set(
            (null != t ? t : []).flatMap((t) => (t ? [t.toLowerCase()] : []))
          ),
        ];
      }
      async function f(t, e) {
        var i, l;
        let n =
            "0x82e32b5e" +
            u("20") +
            u(t.length.toString(16)) +
            t.map((t) => u(t.slice(2))).join(""),
          s = await fetch(h, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              jsonrpc: "2.0",
              id: 1,
              method: "eth_call",
              params: [{ to: a, data: n }, "latest"],
            }),
            signal: e,
          }),
          o =
            null !==
              (l =
                null === (i = (await s.json()).result) || void 0 === i
                  ? void 0
                  : i.slice(2)) && void 0 !== l
              ? l
              : "",
          r = parseInt(o.slice(64, 128) || "0", 16),
          c = [];
        for (let t = 0; t < r; t++)
          c.push("0x".concat(o.slice(128 + 64 * t, 192 + 64 * t)));
        return c;
      }
      async function m(t, e) {
        let i = new Map();
        if (!a || !t.length) return i;
        let n = [];
        for (let e = 0; e < t.length; e += 400)
          n.push(t.slice(e, e + 400).map((t) => t.toLowerCase()));
        return (
          await Promise.all(
            n.map(async (t) => {
              try {
                (await f(t, e)).forEach((e, n) => {
                  let s = (0, l.Pu)(e);
                  s && t[n] && i.set(t[n], s);
                });
              } catch (t) {}
            })
          ),
          v(i)
        );
      }
      let p = "imd.panels.saved";
      function g() {
        try {
          var t;
          return JSON.parse(
            null !== (t = localStorage.getItem(p)) && void 0 !== t ? t : "{}"
          );
        } catch (t) {
          return {};
        }
      }
      function w(t, e) {
        try {
          let i = Date.now(),
            l = g();
          for (let t of Object.keys(l)) i - l[t].at > 6e5 && delete l[t];
          (l[t.toLowerCase()] = { word: e, at: i }),
            localStorage.setItem(p, JSON.stringify(l));
        } catch (t) {}
      }
      function v(t) {
        let e = Date.now(),
          i = new Map(t);
        for (let [t, n] of Object.entries(g())) {
          if (e - n.at > 6e5) continue;
          let s = (0, l.Pu)(n.word);
          s ? i.set(t, s) : i.delete(t);
        }
        return i;
      }
    },
    41523: function (t, e, i) {
      "use strict";
      function l(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : Date.now();
        if (!t) return "—";
        let i = new Date(t).getTime();
        if (Number.isNaN(i)) return "—";
        let l = Math.max(0, Math.round((e - i) / 1e3));
        if (l < 10) return "just now";
        if (l < 60) return "".concat(l, "s ago");
        let n = Math.round(l / 60);
        if (n < 60) return "".concat(n, "m ago");
        let s = Math.round(n / 60);
        if (s < 24) return "".concat(s, "h ago");
        let a = Math.round(s / 24);
        return a < 30
          ? "".concat(a, "d ago")
          : "".concat(Math.round(a / 30), "mo ago");
      }
      i.d(e, {
        F6: function () {
          return l;
        },
      });
    },
    1336: function (t, e, i) {
      "use strict";
      i.d(e, {
        default: function () {
          return n.a;
        },
      });
      var l = i(78888),
        n = i.n(l);
    },
    51917: function (t, e, i) {
      "use strict";
      var l, n;
      t.exports =
        (null == (l = i.g.process) ? void 0 : l.env) &&
        "object" == typeof (null == (n = i.g.process) ? void 0 : n.env)
          ? i.g.process
          : i(29393);
    },
    29393: function (t) {
      !(function () {
        var e = {
            229: function (t) {
              var e,
                i,
                l,
                n = (t.exports = {});
              function s() {
                throw Error("setTimeout has not been defined");
              }
              function a() {
                throw Error("clearTimeout has not been defined");
              }
              function o(t) {
                if (e === setTimeout) return setTimeout(t, 0);
                if ((e === s || !e) && setTimeout)
                  return (e = setTimeout), setTimeout(t, 0);
                try {
                  return e(t, 0);
                } catch (i) {
                  try {
                    return e.call(null, t, 0);
                  } catch (i) {
                    return e.call(this, t, 0);
                  }
                }
              }
              !(function () {
                try {
                  e = "function" == typeof setTimeout ? setTimeout : s;
                } catch (t) {
                  e = s;
                }
                try {
                  i = "function" == typeof clearTimeout ? clearTimeout : a;
                } catch (t) {
                  i = a;
                }
              })();
              var r = [],
                h = !1,
                c = -1;
              function u() {
                h &&
                  l &&
                  ((h = !1),
                  l.length ? (r = l.concat(r)) : (c = -1),
                  r.length && d());
              }
              function d() {
                if (!h) {
                  var t = o(u);
                  h = !0;
                  for (var e = r.length; e; ) {
                    for (l = r, r = []; ++c < e; ) l && l[c].run();
                    (c = -1), (e = r.length);
                  }
                  (l = null),
                    (h = !1),
                    (function (t) {
                      if (i === clearTimeout) return clearTimeout(t);
                      if ((i === a || !i) && clearTimeout)
                        return (i = clearTimeout), clearTimeout(t);
                      try {
                        i(t);
                      } catch (e) {
                        try {
                          return i.call(null, t);
                        } catch (e) {
                          return i.call(this, t);
                        }
                      }
                    })(t);
                }
              }
              function f(t, e) {
                (this.fun = t), (this.array = e);
              }
              function m() {}
              (n.nextTick = function (t) {
                var e = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var i = 1; i < arguments.length; i++)
                    e[i - 1] = arguments[i];
                r.push(new f(t, e)), 1 !== r.length || h || o(d);
              }),
                (f.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (n.title = "browser"),
                (n.browser = !0),
                (n.env = {}),
                (n.argv = []),
                (n.version = ""),
                (n.versions = {}),
                (n.on = m),
                (n.addListener = m),
                (n.once = m),
                (n.off = m),
                (n.removeListener = m),
                (n.removeAllListeners = m),
                (n.emit = m),
                (n.prependListener = m),
                (n.prependOnceListener = m),
                (n.listeners = function (t) {
                  return [];
                }),
                (n.binding = function (t) {
                  throw Error("process.binding is not supported");
                }),
                (n.cwd = function () {
                  return "/";
                }),
                (n.chdir = function (t) {
                  throw Error("process.chdir is not supported");
                }),
                (n.umask = function () {
                  return 0;
                });
            },
          },
          i = {};
        function l(t) {
          var n = i[t];
          if (void 0 !== n) return n.exports;
          var s = (i[t] = { exports: {} }),
            a = !0;
          try {
            e[t](s, s.exports, l), (a = !1);
          } finally {
            a && delete i[t];
          }
          return s.exports;
        }
        l.ab = "//";
        var n = l(229);
        t.exports = n;
      })();
    },
    78888: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let l = i(46986);
      i(92483), i(64871);
      let n = l._(i(31715));
      function s(t, e) {
        var i;
        let l = {
          loading: (t) => {
            let { error: e, isLoading: i, pastDelay: l } = t;
            return null;
          },
        };
        "function" == typeof t && (l.loader = t);
        let s = { ...l, ...e };
        return (0, n.default)({
          ...s,
          modules: null == (i = s.loadableGenerated) ? void 0 : i.modules,
        });
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    69102: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let l = i(42225);
      function n(t) {
        let { reason: e, children: i } = t;
        if ("undefined" == typeof window) throw new l.BailoutToCSRError(e);
        return i;
      }
    },
    31715: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return h;
          },
        });
      let l = i(92483),
        n = i(64871),
        s = i(69102),
        a = i(60253);
      function o(t) {
        return { default: t && "default" in t ? t.default : t };
      }
      let r = {
          loader: () => Promise.resolve(o(() => null)),
          loading: null,
          ssr: !0,
        },
        h = function (t) {
          let e = { ...r, ...t },
            i = (0, n.lazy)(() => e.loader().then(o)),
            h = e.loading;
          function c(t) {
            let o = h
                ? (0, l.jsx)(h, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              r = e.ssr
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      "undefined" == typeof window
                        ? (0, l.jsx)(a.PreloadCss, { moduleIds: e.modules })
                        : null,
                      (0, l.jsx)(i, { ...t }),
                    ],
                  })
                : (0, l.jsx)(s.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, l.jsx)(i, { ...t }),
                  });
            return (0, l.jsx)(n.Suspense, { fallback: o, children: r });
          }
          return (c.displayName = "LoadableComponent"), c;
        };
    },
    60253: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "PreloadCss", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let l = i(92483),
        n = i(85694);
      function s(t) {
        let { moduleIds: e } = t;
        if ("undefined" != typeof window) return null;
        let i = (0, n.getExpectedRequestStore)("next/dynamic css"),
          s = [];
        if (i.reactLoadableManifest && e) {
          let t = i.reactLoadableManifest;
          for (let i of e) {
            if (!t[i]) continue;
            let e = t[i].files.filter((t) => t.endsWith(".css"));
            s.push(...e);
          }
        }
        return 0 === s.length
          ? null
          : (0, l.jsx)(l.Fragment, {
              children: s.map((t) =>
                (0, l.jsx)(
                  "link",
                  {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: i.assetPrefix + "/_next/" + encodeURI(t),
                    as: "style",
                  },
                  t
                )
              ),
            });
      }
    },
    89258: function (t, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/desk.fab7325c.webp",
        height: 304,
        width: 3842,
        blurDataURL:
          "data:image/webp;base64,UklGRigAAABXRUJQVlA4IBwAAAAwAQCdASoIAAEAAkA4JaQAA3AA/t5/+ggAgAAA",
        blurWidth: 8,
        blurHeight: 1,
      };
    },
  },
]);
