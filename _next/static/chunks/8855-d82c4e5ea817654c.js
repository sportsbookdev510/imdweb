(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8855],
  {
    1336: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return i.a;
        },
      });
      var r = n(78888),
        i = n.n(r);
    },
    3352: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return i.a;
        },
      });
      var r = n(37626),
        i = n.n(r);
    },
    92707: function (e, t, n) {
      "use strict";
      var r = n(99138);
      n.o(r, "usePathname") &&
        n.d(t, {
          usePathname: function () {
            return r.usePathname;
          },
        });
    },
    51917: function (e, t, n) {
      "use strict";
      var r, i;
      e.exports =
        (null == (r = n.g.process) ? void 0 : r.env) &&
        "object" == typeof (null == (i = n.g.process) ? void 0 : i.env)
          ? n.g.process
          : n(29393);
    },
    29393: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                n,
                r,
                i = (e.exports = {});
              function s() {
                throw Error("setTimeout has not been defined");
              }
              function o() {
                throw Error("clearTimeout has not been defined");
              }
              function u(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === s || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (n) {
                  try {
                    return t.call(null, e, 0);
                  } catch (n) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t = "function" == typeof setTimeout ? setTimeout : s;
                } catch (e) {
                  t = s;
                }
                try {
                  n = "function" == typeof clearTimeout ? clearTimeout : o;
                } catch (e) {
                  n = o;
                }
              })();
              var a = [],
                l = !1,
                c = -1;
              function d() {
                l &&
                  r &&
                  ((l = !1),
                  r.length ? (a = r.concat(a)) : (c = -1),
                  a.length && f());
              }
              function f() {
                if (!l) {
                  var e = u(d);
                  l = !0;
                  for (var t = a.length; t; ) {
                    for (r = a, a = []; ++c < t; ) r && r[c].run();
                    (c = -1), (t = a.length);
                  }
                  (r = null),
                    (l = !1),
                    (function (e) {
                      if (n === clearTimeout) return clearTimeout(e);
                      if ((n === o || !n) && clearTimeout)
                        return (n = clearTimeout), clearTimeout(e);
                      try {
                        n(e);
                      } catch (t) {
                        try {
                          return n.call(null, e);
                        } catch (t) {
                          return n.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function p(e, t) {
                (this.fun = e), (this.array = t);
              }
              function m() {}
              (i.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                a.push(new p(e, t)), 1 !== a.length || l || u(f);
              }),
                (p.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (i.title = "browser"),
                (i.browser = !0),
                (i.env = {}),
                (i.argv = []),
                (i.version = ""),
                (i.versions = {}),
                (i.on = m),
                (i.addListener = m),
                (i.once = m),
                (i.off = m),
                (i.removeListener = m),
                (i.removeAllListeners = m),
                (i.emit = m),
                (i.prependListener = m),
                (i.prependOnceListener = m),
                (i.listeners = function (e) {
                  return [];
                }),
                (i.binding = function (e) {
                  throw Error("process.binding is not supported");
                }),
                (i.cwd = function () {
                  return "/";
                }),
                (i.chdir = function (e) {
                  throw Error("process.chdir is not supported");
                }),
                (i.umask = function () {
                  return 0;
                });
            },
          },
          n = {};
        function r(e) {
          var i = n[e];
          if (void 0 !== i) return i.exports;
          var s = (n[e] = { exports: {} }),
            o = !0;
          try {
            t[e](s, s.exports, r), (o = !1);
          } finally {
            o && delete n[e];
          }
          return s.exports;
        }
        r.ab = "//";
        var i = r(229);
        e.exports = i;
      })();
    },
    78888: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let r = n(46986);
      n(92483), n(64871);
      let i = r._(n(31715));
      function s(e, t) {
        var n;
        let r = {
          loading: (e) => {
            let { error: t, isLoading: n, pastDelay: r } = e;
            return null;
          },
        };
        "function" == typeof e && (r.loader = e);
        let s = { ...r, ...t };
        return (0, i.default)({
          ...s,
          modules: null == (n = s.loadableGenerated) ? void 0 : n.modules,
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    69102: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(42225);
      function i(e) {
        let { reason: t, children: n } = e;
        if ("undefined" == typeof window) throw new r.BailoutToCSRError(t);
        return n;
      }
    },
    31715: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let r = n(92483),
        i = n(64871),
        s = n(69102),
        o = n(60253);
      function u(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      let a = {
          loader: () => Promise.resolve(u(() => null)),
          loading: null,
          ssr: !0,
        },
        l = function (e) {
          let t = { ...a, ...e },
            n = (0, i.lazy)(() => t.loader().then(u)),
            l = t.loading;
          function c(e) {
            let u = l
                ? (0, r.jsx)(l, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              a = t.ssr
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      "undefined" == typeof window
                        ? (0, r.jsx)(o.PreloadCss, { moduleIds: t.modules })
                        : null,
                      (0, r.jsx)(n, { ...e }),
                    ],
                  })
                : (0, r.jsx)(s.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, r.jsx)(n, { ...e }),
                  });
            return (0, r.jsx)(i.Suspense, { fallback: u, children: a });
          }
          return (c.displayName = "LoadableComponent"), c;
        };
    },
    60253: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadCss", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let r = n(92483),
        i = n(85694);
      function s(e) {
        let { moduleIds: t } = e;
        if ("undefined" != typeof window) return null;
        let n = (0, i.getExpectedRequestStore)("next/dynamic css"),
          s = [];
        if (n.reactLoadableManifest && t) {
          let e = n.reactLoadableManifest;
          for (let n of t) {
            if (!e[n]) continue;
            let t = e[n].files.filter((e) => e.endsWith(".css"));
            s.push(...t);
          }
        }
        return 0 === s.length
          ? null
          : (0, r.jsx)(r.Fragment, {
              children: s.map((e) =>
                (0, r.jsx)(
                  "link",
                  {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: n.assetPrefix + "/_next/" + encodeURI(e),
                    as: "style",
                  },
                  e
                )
              ),
            });
      }
    },
    78827: function (e, t, n) {
      "use strict";
      n.d(t, {
        u: function () {
          return s;
        },
        x: function () {
          return o;
        },
      });
      var r = n(31867),
        i = n(12497);
      let s = (0, i.a)({
          ...r.i,
          id: 8453,
          name: "Base",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://mainnet.base.org"] } },
          blockExplorers: {
            default: {
              name: "Basescan",
              url: "https://basescan.org",
              apiUrl: "https://api.basescan.org/api",
            },
          },
          contracts: {
            ...r.i.contracts,
            disputeGameFactory: {
              1: { address: "0x43edB88C4B80fDD2AdFF2412A7BebF9dF42cB40e" },
            },
            l2OutputOracle: {
              1: { address: "0x56315b90c40730925ec5485cf004d835058518A0" },
            },
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 5022,
            },
            portal: {
              1: {
                address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",
                blockCreated: 17482143,
              },
            },
            l1StandardBridge: {
              1: {
                address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
                blockCreated: 17482143,
              },
            },
          },
          sourceId: 1,
        }),
        o = (0, i.a)({
          ...s,
          experimental_preconfirmationTime: 200,
          rpcUrls: { default: { http: ["https://mainnet-preconf.base.org"] } },
        });
    },
    47787: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return r;
        },
      });
      let r = (0, n(12497).a)({
        id: 1,
        name: "Ethereum",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        blockTime: 12e3,
        rpcUrls: { default: { http: ["https://ethereum.reth.rs/rpc"] } },
        blockExplorers: {
          default: {
            name: "Etherscan",
            url: "https://etherscan.io",
            apiUrl: "https://api.etherscan.io/api",
          },
        },
        contracts: {
          ensUniversalResolver: {
            address: "0xeeeeeeee14d718c2b47d9923deab1335e144eeee",
            blockCreated: 23085558,
          },
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 14353601,
          },
        },
      });
    },
    31867: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return o;
        },
      });
      var r = n(5263),
        i = n(56153),
        s = n(78719);
      let o = {
        blockTime: 2e3,
        contracts: r.r,
        formatters: i.$,
        serializers: s.fE,
      };
    },
    5263: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return r;
        },
      });
      let r = {
        gasPriceOracle: {
          address: "0x420000000000000000000000000000000000000F",
        },
        l1Block: { address: "0x4200000000000000000000000000000000000015" },
        l2CrossDomainMessenger: {
          address: "0x4200000000000000000000000000000000000007",
        },
        l2Erc721Bridge: {
          address: "0x4200000000000000000000000000000000000014",
        },
        l2StandardBridge: {
          address: "0x4200000000000000000000000000000000000010",
        },
        l2ToL1MessagePasser: {
          address: "0x4200000000000000000000000000000000000016",
        },
      };
    },
    56153: function (e, t, n) {
      "use strict";
      n.d(t, {
        $: function () {
          return u;
        },
      });
      var r = n(90647),
        i = n(30834),
        s = n(12769),
        o = n(50932);
      let u = {
        block: (0, i.G)({
          format: (e) => ({
            transactions: e.transactions?.map((e) => {
              if ("string" == typeof e) return e;
              let t = s.Tr(e);
              return (
                "0x7e" === t.typeHex &&
                  ((t.isSystemTx = e.isSystemTx),
                  (t.mint = e.mint ? r.y_(e.mint) : void 0),
                  (t.sourceHash = e.sourceHash),
                  (t.type = "deposit")),
                t
              );
            }),
            stateRoot: e.stateRoot,
          }),
        }),
        transaction: (0, s.y_)({
          format(e) {
            let t = {};
            return (
              "0x7e" === e.type &&
                ((t.isSystemTx = e.isSystemTx),
                (t.mint = e.mint ? (0, r.y_)(e.mint) : void 0),
                (t.sourceHash = e.sourceHash),
                (t.type = "deposit")),
              t
            );
          },
        }),
        transactionReceipt: (0, o.dI)({
          format: (e) => ({
            ...(e.depositNonce
              ? { depositNonce: (0, r.y_)(e.depositNonce) }
              : {}),
            ...(e.depositReceiptVersion
              ? { depositReceiptVersion: (0, r.ly)(e.depositReceiptVersion) }
              : {}),
            l1GasPrice: e.l1GasPrice ? (0, r.y_)(e.l1GasPrice) : null,
            l1GasUsed: e.l1GasUsed ? (0, r.y_)(e.l1GasUsed) : null,
            l1Fee: e.l1Fee ? (0, r.y_)(e.l1Fee) : null,
            l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null,
          }),
        }),
      };
    },
    78719: function (e, t, n) {
      "use strict";
      n.d(t, {
        DO: function () {
          return l;
        },
        fE: function () {
          return c;
        },
      });
      var r = n(26361),
        i = n(75030),
        s = n(83967),
        o = n(78842),
        u = n(5638),
        a = n(64531);
      function l(e, t) {
        return "deposit" === e.type || void 0 !== e.sourceHash
          ? (function (e) {
              !(function (e) {
                let { from: t, to: n } = e;
                if (t && !(0, i.U)(t)) throw new r.b({ address: t });
                if (n && !(0, i.U)(n)) throw new r.b({ address: n });
              })(e);
              let {
                  sourceHash: t,
                  data: n,
                  from: a,
                  gas: l,
                  isSystemTx: c,
                  mint: d,
                  to: f,
                  value: p,
                } = e,
                m = [
                  t,
                  a,
                  f ?? "0x",
                  d ? (0, o.NC)(d) : "0x",
                  p ? (0, o.NC)(p) : "0x",
                  l ? (0, o.NC)(l) : "0x",
                  c ? "0x1" : "0x",
                  n ?? "0x",
                ];
              return (0, s.SM)(["0x7e", (0, u.LV)(m)]);
            })(e)
          : (0, a.D)(e, t);
      }
      let c = { transaction: l };
    },
    28874: function (e, t, n) {
      "use strict";
      n.d(t, {
        Dp: function () {
          return u;
        },
        WU: function () {
          return i;
        },
        Wn: function () {
          return a;
        },
        dF: function () {
          return s;
        },
        g2: function () {
          return l;
        },
        oJ: function () {
          return o;
        },
      });
      let r = { wei: 0, gwei: 9, szabo: 12, finney: 15, ether: 18 };
      function i(e, t = 0) {
        if (!Number.isInteger(t) || t < 0) throw new d({ decimals: t });
        let n = e.toString(),
          r = n.startsWith("-");
        r && (n = n.slice(1));
        let [i, s] = [
          (n = n.padStart(t, "0")).slice(0, n.length - t),
          n.slice(n.length - t),
        ];
        return (
          (s = s.replace(/(0+)$/, "")),
          `${r ? "-" : ""}${i || "0"}${s ? `.${s}` : ""}`
        );
      }
      function s(e, t = "wei") {
        return i(e, r.ether - r[t]);
      }
      function o(e, t = "wei") {
        return i(e, r.gwei - r[t]);
      }
      function u(e, t = 0) {
        if (!Number.isInteger(t) || t < 0) throw new d({ decimals: t });
        if (!/^-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)$/.test(e))
          throw new c({ value: e });
        let [n = "", r = "0"] = e.split("."),
          i = n.startsWith("-");
        if (
          (i && (n = n.slice(1)),
          "" === n && (n = "0"),
          (r = r.replace(/(0+)$/, "")),
          0 === t)
        )
          r.length > 0 &&
            Number.parseInt(r[0], 10) >= 5 &&
            (n = `${BigInt(n) + 1n}`),
            (r = "");
        else if (r.length > t) {
          let e = r.slice(0, t);
          if (Number.parseInt(r.slice(t, t + 1), 10) >= 5) {
            let i = (function (e) {
              let t = e.split(""),
                n = t.length - 1;
              for (; n >= 0; ) {
                let e = Number.parseInt(t[n], 10) + 1;
                if (e < 10) return (t[n] = String(e)), t.join("");
                (t[n] = "0"), n--;
              }
              return `1${t.join("")}`;
            })(e);
            i.length > t
              ? ((r = i.slice(1)), (n = `${BigInt(n) + 1n}`))
              : (r = i);
          } else r = e;
        } else r = r.padEnd(t, "0");
        return BigInt(`${i ? "-" : ""}${n}${r}`);
      }
      function a(e, t = "wei") {
        return u(e, r.ether - r[t]);
      }
      function l(e, t = "wei") {
        return u(e, r.gwei - r[t]);
      }
      class c extends Error {
        constructor({ value: e }) {
          super(`Value \`${e}\` is not a valid decimal number.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Value.InvalidDecimalNumberError",
            });
        }
      }
      class d extends Error {
        constructor({ decimals: e }) {
          super(`\`decimals\` must be a non-negative integer. Got \`${e}\`.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Value.InvalidDecimalsError",
            });
        }
      }
    },
    58191: function (e, t, n) {
      "use strict";
      n.d(t, {
        b: function () {
          return i;
        },
      });
      var r = n(28874);
      function i(e, t) {
        return r.WU(e, t);
      }
    },
  },
]);
