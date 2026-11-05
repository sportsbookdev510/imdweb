"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8350],
  {
    87783: function (e, t, n) {
      n.d(t, {
        e4: function () {
          return s;
        },
        eI: function () {
          return a;
        },
        xz: function () {
          return i;
        },
      });
      var r = n(56859),
        o = n(71808);
      function a(e) {
        let {
            batch: t,
            chain: n,
            ccipRead: a,
            dataSuffix: i,
            key: s = "base",
            name: u = "Base Client",
            tokens: l,
            type: d = "base",
          } = e,
          f =
            e.experimental_blockTag ??
            ("number" == typeof n?.experimental_preconfirmationTime
              ? "pending"
              : void 0),
          h = n?.blockTime ?? 12e3,
          w =
            e.pollingInterval ??
            Math.min(Math.max(Math.floor(h / 2), 500), 4e3),
          p = e.cacheTime ?? w,
          m = e.account ? (0, r.T)(e.account) : void 0,
          {
            config: y,
            request: g,
            value: b,
          } = e.transport({ account: m, chain: n, pollingInterval: w }),
          v = {
            account: m,
            batch: t,
            cacheTime: p,
            ccipRead: a,
            chain: n,
            dataSuffix: i,
            key: s,
            name: u,
            pollingInterval: w,
            request: g,
            tokens: l,
            transport: { ...y, ...b },
            type: d,
            uid: (0, o.h)(),
            ...(f ? { experimental_blockTag: f } : {}),
          };
        return Object.assign(v, {
          extend: (function e(t) {
            return (n) => {
              let r = n(t);
              for (let e in v) delete r[e];
              let o = { ...t, ...r };
              for (let e in r) {
                let n = t[e],
                  a = r[e];
                c(n) && c(a) && (o[e] = { ...n, ...a });
              }
              return Object.assign(o, { extend: e(o) });
            };
          })(v),
        });
      }
      function c(e) {
        if ("object" != typeof e || null === e) return !1;
        let t = Object.getPrototypeOf(e);
        return t === Object.prototype || null === t;
      }
      function i(e, t) {
        let n = (n = {}) => t(e, n);
        for (let r of [
          "call",
          "calls",
          "callWithPeriod",
          "estimateGas",
          "prepare",
          "prepareRecipient",
          "predict",
          "simulate",
        ])
          if (Object.hasOwn(t, r)) {
            let o = t[r];
            n[r] = (t = {}) => (1 === o.length ? o(t) : o(e, t));
          }
        for (let e of ["extractEvent", "extractEvents"])
          Object.hasOwn(t, e) && (n[e] = t[e]);
        return n;
      }
      function s() {
        return null;
      }
    },
    16710: function (e, t, n) {
      n.d(t, {
        q: function () {
          return d;
        },
      });
      var r = n(30393),
        o = n(60642),
        a = n(68347),
        c = n(64137);
      let i = new (n(47860).k)(8192);
      var s = n(906),
        u = n(82399),
        l = n(71808);
      function d(
        {
          key: e,
          methods: t,
          name: n,
          request: d,
          retryCount: f = 3,
          retryDelay: h = 150,
          timeout: w,
          type: p,
        },
        m
      ) {
        return {
          config: {
            key: e,
            methods: t,
            name: n,
            request: d,
            retryCount: f,
            retryDelay: h,
            timeout: w,
            type: p,
          },
          request: (function (e, t = {}) {
            return async (n, l = {}) => {
              let {
                  dedupe: d = !1,
                  methods: f,
                  retryDelay: h = 150,
                  retryCount: w = 3,
                  signal: p,
                  uid: m,
                } = { ...t, ...l },
                { method: y } = n;
              if (
                f?.exclude?.includes(y) ||
                (f?.include && !f.include.includes(y))
              )
                throw new a.gS(Error("method not supported"), { method: y });
              if (p?.aborted) throw (0, c.lR)(p);
              let g = d
                ? (function (e, t = 0) {
                    let n = 3735928559 ^ t,
                      r = 1103547991 ^ t;
                    for (let t = 0; t < e.length; t++) {
                      let o = e.charCodeAt(t);
                      (n = Math.imul(n ^ o, 2654435761)),
                        (r = Math.imul(r ^ o, 1597334677));
                    }
                    return (
                      (n =
                        Math.imul(n ^ (n >>> 16), 2246822507) ^
                        Math.imul(r ^ (r >>> 16), 3266489909)),
                      (
                        4294967296 *
                          (2097151 &
                            (r =
                              Math.imul(r ^ (r >>> 16), 2246822507) ^
                              Math.imul(n ^ (n >>> 16), 3266489909))) +
                        (n >>> 0)
                      ).toString(36)
                    );
                  })(`${m}.${(0, u.P)(n)}`)
                : void 0;
              return (function (e, { enabled: t = !0, id: n }) {
                if (!t || !n) return e();
                if (i.get(n)) return i.get(n);
                let r = e().finally(() => i.delete(n));
                return i.set(n, r), r;
              })(
                () =>
                  (0, s.J)(
                    async () => {
                      try {
                        return await e(n, p ? { signal: p } : void 0);
                      } catch (e) {
                        if (p?.aborted) throw (0, c.lR)(p);
                        if ((0, c.D_)(e)) throw e;
                        switch (e.code) {
                          case a.s7.code:
                            throw new a.s7(e);
                          case a.B.code:
                            throw new a.B(e);
                          case a.LX.code:
                            throw new a.LX(e, { method: n.method });
                          case a.nY.code:
                            throw new a.nY(e);
                          case a.XS.code:
                            throw new a.XS(e);
                          case a.yR.code:
                            throw new a.yR(e);
                          case a.Og.code:
                            throw new a.Og(e);
                          case a.pT.code:
                            throw new a.pT(e);
                          case a.KB.code:
                            throw new a.KB(e);
                          case a.gS.code:
                            throw new a.gS(e, { method: n.method });
                          case a.Pv.code:
                            throw new a.Pv(e);
                          case a.GD.code:
                            throw new a.GD(e);
                          case a.ab.code:
                            throw new a.ab(e);
                          case a.PE.code:
                            throw new a.PE(e);
                          case a.Ts.code:
                            throw new a.Ts(e);
                          case a.u5.code:
                            throw new a.u5(e);
                          case a.I0.code:
                            throw new a.I0(e);
                          case a.x3.code:
                            throw new a.x3(e);
                          case a.vl.code:
                            throw new a.vl(e);
                          case a.Uu.code:
                            throw new a.Uu(e);
                          case a.Nt.code:
                            throw new a.Nt(e);
                          case a.EJ.code:
                            throw new a.EJ(e);
                          case a.fl.code:
                            throw new a.fl(e);
                          case a.NO.code:
                            throw new a.NO(e);
                          case a.r0.code:
                            throw new a.r0(e);
                          case 5e3:
                            throw new a.ab(e);
                          case a.UF.code:
                            throw new a.UF(e);
                          default:
                            if (e instanceof r.G) throw e;
                            throw new a.ir(e);
                        }
                      }
                    },
                    {
                      delay: ({ count: e, error: t }) => {
                        if (t && t instanceof o.Gg) {
                          let e = t?.headers?.get("Retry-After");
                          if (e?.match(/\d/))
                            return 1e3 * Number.parseInt(e, 10);
                        }
                        return ~~(1 << e) * h;
                      },
                      retryCount: w,
                      signal: p,
                      shouldRetry: ({ error: e }) =>
                        !(0, c.D_)(e) &&
                        ("code" in e && "number" == typeof e.code
                          ? -1 === e.code ||
                            e.code === a.Pv.code ||
                            e.code === a.XS.code ||
                            429 === e.code ||
                            -32007 === e.code
                          : !(e instanceof o.Gg) ||
                            !e.status ||
                            403 === e.status ||
                            408 === e.status ||
                            413 === e.status ||
                            429 === e.status ||
                            500 === e.status ||
                            502 === e.status ||
                            503 === e.status ||
                            504 === e.status),
                    }
                  ),
                { enabled: d, id: g }
              );
            };
          })(d, { methods: t, retryCount: f, retryDelay: h, uid: (0, l.h)() }),
          value: m,
        };
      }
    },
    43798: function (e, t, n) {
      n.d(t, {
        Mu: function () {
          return s;
        },
        tv: function () {
          return i;
        },
      });
      var r = n(95690),
        o = n(68347),
        a = n(66329),
        c = n(16710);
      function i(e, t = {}) {
        let {
          key: n = "fallback",
          name: r = "Fallback",
          rank: o = !1,
          shouldThrow: i = s,
          retryCount: u,
          retryDelay: l,
        } = t;
        return ({ chain: t, pollingInterval: s = 4e3, timeout: d, ...f }) => {
          let h = e,
            w = () => {},
            p = (0, c.q)(
              {
                key: n,
                name: r,
                async request({ method: e, params: n }) {
                  let r;
                  let o = async (a = 0) => {
                    let c = h[a]({ ...f, chain: t, retryCount: 0, timeout: d });
                    try {
                      let t = await c.request({ method: e, params: n });
                      return (
                        w({
                          method: e,
                          params: n,
                          response: t,
                          transport: c,
                          status: "success",
                        }),
                        t
                      );
                    } catch (s) {
                      if (
                        (w({
                          error: s,
                          method: e,
                          params: n,
                          transport: c,
                          status: "error",
                        }),
                        i(s) ||
                          a === h.length - 1 ||
                          !(r ??= h.slice(a + 1).some((n) => {
                            let { include: r, exclude: o } =
                              n({ chain: t }).config.methods || {};
                            return r ? r.includes(e) : !o || !o.includes(e);
                          })))
                      )
                        throw s;
                      return o(a + 1);
                    }
                  };
                  return o();
                },
                retryCount: u,
                retryDelay: l,
                type: "fallback",
              },
              {
                onResponse: (e) => (w = e),
                transports: h.map((e) => e({ chain: t, retryCount: 0 })),
              }
            );
          if (o) {
            let e = "object" == typeof o ? o : {};
            !(function ({
              chain: e,
              interval: t = 4e3,
              onTransports: n,
              ping: r,
              sampleCount: o = 10,
              timeout: c = 1e3,
              transports: i,
              weights: s = {},
            }) {
              let { stability: u = 0.7, latency: l = 0.3 } = s,
                d = [],
                f = async () => {
                  let s = await Promise.all(
                    i.map(async (t) => {
                      let n, o;
                      let a = t({ chain: e, retryCount: 0, timeout: c }),
                        i = Date.now();
                      try {
                        await (r
                          ? r({ transport: a })
                          : a.request({ method: "net_listening" })),
                          (o = 1);
                      } catch {
                        o = 0;
                      } finally {
                        n = Date.now();
                      }
                      return { latency: n - i, success: o };
                    })
                  );
                  d.push(s), d.length > o && d.shift();
                  let h = Math.max(
                    ...d.map((e) => Math.max(...e.map(({ latency: e }) => e)))
                  );
                  n(
                    i
                      .map((e, t) => {
                        let n = d.map((e) => e[t].latency),
                          r = n.reduce((e, t) => e + t, 0) / n.length,
                          o = d.map((e) => e[t].success),
                          a = o.reduce((e, t) => e + t, 0) / o.length;
                        return 0 === a ? [0, t] : [l * (1 - r / h) + u * a, t];
                      })
                      .sort((e, t) => t[0] - e[0])
                      .map(([, e]) => i[e])
                  ),
                    await (0, a.D)(t),
                    f();
                };
              f();
            })({
              chain: t,
              interval: e.interval ?? s,
              onTransports: (e) => (h = e),
              ping: e.ping,
              sampleCount: e.sampleCount,
              timeout: e.timeout,
              transports: h,
              weights: e.weights,
            });
          }
          return p;
        };
      }
      function s(e) {
        return !!(
          "code" in e &&
          "number" == typeof e.code &&
          (e.code === o.KB.code ||
            e.code === o.ab.code ||
            e.code === o.UF.code ||
            r.M_.nodeMessage.test(e.message) ||
            5e3 === e.code)
        );
      }
    },
    6880: function (e, t, n) {
      n.d(t, {
        d: function () {
          return l;
        },
      });
      var r = n(60642),
        o = n(99973),
        a = n(63080),
        c = n(15800),
        i = n(16710);
      let s = 0,
        u = new WeakMap();
      function l(e, t = {}) {
        let {
          batch: n,
          fetchFn: l,
          fetchOptions: d,
          key: f = "http",
          maxResponseBodySize: h,
          methods: w,
          name: p = "HTTP JSON-RPC",
          onFetchRequest: m,
          onFetchResponse: y,
          retryDelay: g,
          raw: b,
        } = t;
        return ({ chain: v, retryCount: R, timeout: x }) => {
          let { batchSize: T = 1e3, wait: P = 0 } =
              "object" == typeof n ? n : {},
            S = t.retryCount ?? R,
            C = x ?? t.timeout ?? 1e4,
            O = e || v?.rpcUrls.default.http[0];
          if (!O) throw new o.I();
          let k = (0, c.x)(O, {
            fetchFn: l,
            fetchOptions: d,
            maxResponseBodySize: h,
            onRequest: m,
            onResponse: y,
            timeout: C,
          });
          return (0, i.q)(
            {
              key: f,
              methods: w,
              name: p,
              async request({ method: e, params: t }, o) {
                let c = { method: e, params: t },
                  i = o?.signal ? { signal: o.signal } : void 0,
                  { schedule: l } = (0, a.S)({
                    id: `${O}.${(function (e) {
                      if (!e) return "default";
                      let t = u.get(e);
                      if (void 0 !== t) return t;
                      let n = s++;
                      return u.set(e, n), n;
                    })(o?.signal)}`,
                    wait: P,
                    shouldSplitBatch: (e) => e.length > T,
                    fn: (e) => k.request({ body: e, fetchOptions: i }),
                    sort: (e, t) => e.id - t.id,
                  }),
                  d = async (e) =>
                    n ? l(e) : [await k.request({ body: e, fetchOptions: i })],
                  [{ error: f, result: h }] = await d(c);
                if (b) return { error: f, result: h };
                if (f) throw new r.bs({ body: c, error: f, url: O });
                return h;
              },
              retryCount: S,
              retryDelay: g,
              timeout: C,
              type: "http",
            },
            { fetchOptions: d, url: O }
          );
        };
      }
    },
    99973: function (e, t, n) {
      n.d(t, {
        I: function () {
          return o;
        },
      });
      var r = n(30393);
      class o extends r.G {
        constructor() {
          super(
            "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
            { docsPath: "/docs/clients/intro", name: "UrlRequiredError" }
          );
        }
      }
    },
    906: function (e, t, n) {
      n.d(t, {
        J: function () {
          return a;
        },
      });
      var r = n(64137),
        o = n(66329);
      function a(
        e,
        {
          delay: t = 100,
          retryCount: n = 2,
          shouldRetry: a = () => !0,
          signal: c,
        } = {}
      ) {
        return new Promise((i, s) => {
          let u = async ({ count: l = 0 } = {}) => {
            if (c?.aborted) {
              s((0, r.lR)(c));
              return;
            }
            let d = async ({ error: e }) => {
              let n = "function" == typeof t ? t({ count: l, error: e }) : t;
              if (n)
                try {
                  await (0, o.D)(n, { signal: c });
                } catch (e) {
                  s(e);
                  return;
                }
              return u({ count: l + 1 });
            };
            try {
              let t = await e();
              i(t);
            } catch (e) {
              if (c?.aborted) {
                s((0, r.lR)(c));
                return;
              }
              if ((0, r.D_)(e)) {
                s(e);
                return;
              }
              if (l < n && (await a({ count: l, error: e })))
                return d({ error: e });
              s(e);
            }
          };
          u().catch(s);
        });
      }
    },
    75989: function (e, t, n) {
      n.d(t, {
        F: function () {
          return o;
        },
      });
      var r = n(64137);
      function o(
        e,
        { errorInstance: t = Error("timed out"), timeout: n, signal: o }
      ) {
        return new Promise((a, c) => {
          (async () => {
            let i;
            let s = new AbortController();
            try {
              n > 0 &&
                (i = setTimeout(() => {
                  o ? s.abort() : c(t);
                }, n)),
                a(await e({ signal: s?.signal || null }));
            } catch (e) {
              if (s?.signal.aborted && (0, r.D_)(e)) {
                c(t);
                return;
              }
              c(e);
            } finally {
              clearTimeout(i);
            }
          })();
        });
      }
    },
    15800: function (e, t, n) {
      n.d(t, {
        x: function () {
          return s;
        },
      });
      var r = n(60642),
        o = n(64137),
        a = n(75989),
        c = n(82399),
        i = n(8512);
      function s(e, t = {}) {
        let { url: n, headers: s } = (function (e) {
          try {
            let t = new URL(e),
              n = (() => {
                if (t.username) {
                  let e = `${decodeURIComponent(
                    t.username
                  )}:${decodeURIComponent(t.password)}`;
                  return (
                    (t.username = ""),
                    (t.password = ""),
                    {
                      url: t.toString(),
                      headers: { Authorization: `Basic ${btoa(e)}` },
                    }
                  );
                }
              })();
            return { url: t.toString(), ...n };
          } catch {
            return { url: e };
          }
        })(e);
        return {
          async request(e) {
            let {
                body: l,
                fetchFn: d = t.fetchFn ?? fetch,
                maxResponseBodySize: f = t.maxResponseBodySize ?? 10485760,
                onRequest: h = t.onRequest,
                onResponse: w = t.onResponse,
                timeout: p = t.timeout ?? 1e4,
              } = e,
              m = { ...(t.fetchOptions ?? {}), ...(e.fetchOptions ?? {}) },
              { headers: y, method: g, signal: b } = m;
            try {
              let e;
              let t = await (0, a.F)(
                async ({ signal: e }) => {
                  let t = {
                      ...m,
                      body: Array.isArray(l)
                        ? (0, c.P)(
                            l.map((e) => ({
                              jsonrpc: "2.0",
                              id: e.id ?? i.d.take(),
                              ...e,
                            }))
                          )
                        : (0, c.P)({
                            jsonrpc: "2.0",
                            id: l.id ?? i.d.take(),
                            ...l,
                          }),
                      headers: {
                        ...s,
                        "Content-Type": "application/json",
                        ...y,
                      },
                      method: g || "POST",
                      signal: b || (p > 0 ? e : null),
                    },
                    r = new Request(n, t),
                    o = (await h?.(r, t)) ?? { ...t, url: n };
                  return await d(o.url ?? n, o);
                },
                {
                  errorInstance: new r.W5({ body: l, url: n }),
                  timeout: p,
                  signal: !0,
                }
              );
              w && (await w(t));
              let o = await u(t, { maxResponseBodySize: f });
              if (t.headers.get("Content-Type")?.startsWith("application/json"))
                e = JSON.parse(o);
              else {
                e = o;
                try {
                  e = JSON.parse(e || "{}");
                } catch (n) {
                  if (t.ok) throw n;
                  e = { error: e };
                }
              }
              if (!t.ok) {
                if (
                  "number" == typeof e.error?.code &&
                  "string" == typeof e.error?.message
                )
                  return e;
                throw new r.Gg({
                  body: l,
                  details: (0, c.P)(e.error) || t.statusText,
                  headers: t.headers,
                  status: t.status,
                  url: n,
                });
              }
              return e;
            } catch (e) {
              if (b?.aborted) throw (0, o.lR)(b);
              if (
                (0, o.D_)(e) ||
                e instanceof r.Gg ||
                e instanceof r.nv ||
                e instanceof r.W5
              )
                throw e;
              throw new r.Gg({ body: l, cause: e, url: n });
            }
          },
        };
      }
      async function u(e, { maxResponseBodySize: t }) {
        if (!1 === t) return e.text();
        let n = e.headers.get("Content-Length");
        if (n) {
          let e = Number(n);
          if (e > t) throw new r.nv({ maxSize: t, size: e });
        }
        if (!e.body) {
          let n = await e.text(),
            o = new TextEncoder().encode(n).length;
          if (o > t) throw new r.nv({ maxSize: t, size: o });
          return n;
        }
        let o = e.body.getReader(),
          a = new TextDecoder(),
          c = "",
          i = 0;
        try {
          for (;;) {
            let { done: e, value: n } = await o.read();
            if (e) break;
            if ((i += n.byteLength) > t)
              throw (await o.cancel(), new r.nv({ maxSize: t, size: i }));
            c += a.decode(n, { stream: !0 });
          }
          return (c += a.decode());
        } finally {
          o.releaseLock();
        }
      }
    },
    8512: function (e, t, n) {
      n.d(t, {
        d: function () {
          return r;
        },
      });
      let r = {
        current: 0,
        take() {
          return this.current++;
        },
        reset() {
          this.current = 0;
        },
      };
    },
    71808: function (e, t, n) {
      let r;
      n.d(t, {
        h: function () {
          return a;
        },
      });
      let o = 256;
      function a(e = 11) {
        if (!r || o + e > 512) {
          (r = ""), (o = 0);
          for (let e = 0; e < 256; e++)
            r += ((256 + 256 * Math.random()) | 0).toString(16).substring(1);
        }
        return r.substring(o, o++ + e);
      }
    },
    66329: function (e, t, n) {
      n.d(t, {
        D: function () {
          return o;
        },
      });
      var r = n(64137);
      async function o(e, { signal: t } = {}) {
        return new Promise((n, o) => {
          if (t?.aborted) {
            o((0, r.lR)(t));
            return;
          }
          let a = () => t?.removeEventListener("abort", i),
            c = setTimeout(() => {
              a(), n();
            }, e),
            i = () => {
              clearTimeout(c), a(), o((0, r.lR)(t));
            };
          t?.addEventListener("abort", i, { once: !0 });
        });
      }
    },
  },
]);
