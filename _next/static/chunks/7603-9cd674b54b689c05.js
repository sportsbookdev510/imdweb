"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7603],
  {
    76147: function (e, t, n) {
      n.d(t, {
        Hx: function () {
          return r;
        },
        M$: function () {
          return s;
        },
        Pb: function () {
          return i;
        },
        RB: function () {
          return d;
        },
        TE: function () {
          return o;
        },
        Tw: function () {
          return c;
        },
        dZ: function () {
          return l;
        },
        fs: function () {
          return p;
        },
        mv: function () {
          return u;
        },
        qE: function () {
          return a;
        },
      });
      let o = 1,
        i = 4663,
        a = {
          base: {
            token: "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
            oftAdapter: "0xab152db8aaC047b6757fFCF495FfE88d7712690A",
          },
          mainnet: { oft: "0xComingSoon" },
          robinhood: { oft: "0x5F7Bb59365ce557C26dbcAa4EE9d39A4b95B7127" },
        },
        u =
          "0xb07d640fd9e2eb9dc81b953c8e4fd006bdfeaf276010fb5418eb763ca15abfb3",
        r = {
          base: {
            name: "base",
            chainId: 8453,
            eid: 30184,
            token: a.base.token,
            oft: a.base.oftAdapter,
            needsApproval: !0,
          },
          ethereum: {
            name: "ethereum",
            chainId: o,
            eid: 30101,
            token: a.mainnet.oft,
            oft: a.mainnet.oft,
            needsApproval: !1,
          },
          robinhood: {
            name: "robinhood",
            chainId: i,
            eid: 30416,
            token: a.robinhood.oft,
            oft: a.robinhood.oft,
            needsApproval: !1,
          },
        },
        l = Object.keys(r),
        c = "0x0003010011010000000000000000000000000000fde8",
        s = [
          {
            inputs: [
              {
                components: [
                  { name: "dstEid", type: "uint32" },
                  { name: "to", type: "bytes32" },
                  { name: "amountLD", type: "uint256" },
                  { name: "minAmountLD", type: "uint256" },
                  { name: "extraOptions", type: "bytes" },
                  { name: "composeMsg", type: "bytes" },
                  { name: "oftCmd", type: "bytes" },
                ],
                name: "_sendParam",
                type: "tuple",
              },
              { name: "_payInLzToken", type: "bool" },
            ],
            name: "quoteSend",
            outputs: [
              {
                components: [
                  { name: "nativeFee", type: "uint256" },
                  { name: "lzTokenFee", type: "uint256" },
                ],
                name: "msgFee",
                type: "tuple",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  { name: "dstEid", type: "uint32" },
                  { name: "to", type: "bytes32" },
                  { name: "amountLD", type: "uint256" },
                  { name: "minAmountLD", type: "uint256" },
                  { name: "extraOptions", type: "bytes" },
                  { name: "composeMsg", type: "bytes" },
                  { name: "oftCmd", type: "bytes" },
                ],
                name: "_sendParam",
                type: "tuple",
              },
              {
                components: [
                  { name: "nativeFee", type: "uint256" },
                  { name: "lzTokenFee", type: "uint256" },
                ],
                name: "_fee",
                type: "tuple",
              },
              { name: "_refundAddress", type: "address" },
            ],
            name: "send",
            outputs: [
              {
                components: [
                  { name: "guid", type: "bytes32" },
                  { name: "nonce", type: "uint64" },
                  {
                    components: [
                      { name: "nativeFee", type: "uint256" },
                      { name: "lzTokenFee", type: "uint256" },
                    ],
                    name: "fee",
                    type: "tuple",
                  },
                ],
                name: "msgReceipt",
                type: "tuple",
              },
              {
                components: [
                  { name: "amountSentLD", type: "uint256" },
                  { name: "amountReceivedLD", type: "uint256" },
                ],
                name: "oftReceipt",
                type: "tuple",
              },
            ],
            stateMutability: "payable",
            type: "function",
          },
        ],
        d = [
          {
            inputs: [{ name: "account", type: "address" }],
            name: "balanceOf",
            outputs: [{ name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "spender", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { name: "owner", type: "address" },
              { name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
        ];
      function p(e) {
        return "0x".concat(e.slice(2).padStart(64, "0"));
      }
    },
    82538: function (e, t, n) {
      n.d(t, {
        Yi: function () {
          return C;
        },
      });
      var o = n(64871),
        i = n(76147),
        a = n(99572);
      let u = i.qE.mainnet.oft,
        r = "https://dexscreener.com/ethereum/".concat(u),
        l = "https://api.dexscreener.com/latest/dex/tokens/".concat(u),
        c = "https://api.dexscreener.com/latest/dex/pairs/ethereum/".concat(
          i.mv
        ),
        s = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        d = "https://api.dexscreener.com/latest/dex/tokens/".concat(s),
        p = [
          a.Qk,
          "https://ethereum-rpc.publicnode.com",
          "https://eth.drpc.org",
        ],
        f = (e) => {
          let t = "string" == typeof e ? parseFloat(e) : e;
          return "number" == typeof t && Number.isFinite(t) ? t : null;
        },
        m = (e) =>
          "undefined" != typeof AbortSignal && "timeout" in AbortSignal
            ? AbortSignal.timeout(e)
            : void 0;
      async function y(e, t) {
        for (let n of p)
          try {
            let o = await fetch(n, {
                method: "POST",
                headers: { "content-type": "application/json" },
                signal: m(6e3),
                body: JSON.stringify({
                  jsonrpc: "2.0",
                  id: 1,
                  method: "eth_call",
                  params: [{ to: e, data: t }, "latest"],
                }),
              }),
              i = await o.json();
            if ("string" == typeof i.result && i.result.length > 2)
              return i.result;
          } catch (e) {}
        return null;
      }
      let v = (e, t) =>
        BigInt("0x".concat(e.slice(2 + 64 * t, 66 + 64 * t) || "0"));
      async function h() {
        let [e, t] = await Promise.all([
          y(
            "0x7ffE42C4a5DEeA5b0feC41C94C136Cf115597227",
            "0xc815641c".concat(i.mv.slice(2))
          ),
          y("0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419", "0xfeaf968c"),
        ]);
        if (!e || !t) return null;
        let n = Number(v(e, 0)) / 7922816251426434e13,
          o = Number(BigInt.asIntN(256, v(t, 1))) / 1e8,
          a = Number(v(t, 3));
        if (!(n > 0) || !(o > 0) || Date.now() / 1e3 - a > 86400) return null;
        let u = 1 / (n * n);
        return { priceUsd: u * o, priceEth: u, ethUsd: o };
      }
      async function b(e) {
        var t;
        let n = await fetch(e, { cache: "no-store", signal: m(8e3) });
        if (!n.ok) return [];
        let o = await n.json();
        return null !== (t = o.pairs) && void 0 !== t
          ? t
          : o.pair
          ? [o.pair]
          : [];
      }
      let g = (e, t) => {
        var n;
        return null !==
          (n = e
            .flat()
            .filter((e) => {
              var n, o;
              return (
                "ethereum" === e.chainId &&
                (null === (o = e.baseToken) || void 0 === o
                  ? void 0
                  : null === (n = o.address) || void 0 === n
                  ? void 0
                  : n.toLowerCase()) === t.toLowerCase()
              );
            })
            .sort((e, t) => {
              var n, o, i, a;
              return (
                (null !==
                  (i =
                    null === (n = t.liquidity) || void 0 === n
                      ? void 0
                      : n.usd) && void 0 !== i
                  ? i
                  : 0) -
                (null !==
                  (a =
                    null === (o = e.liquidity) || void 0 === o
                      ? void 0
                      : o.usd) && void 0 !== a
                  ? a
                  : 0)
              );
            })[0]) && void 0 !== n
          ? n
          : null;
      };
      async function w() {
        var e, t, n, o, i, a, p, m, y, v, w, k, C, E, x, I;
        let S = () => [],
          [_, A, D] = await Promise.all([
            h().catch(() => null),
            b(l).catch(S),
            b(c).catch(S),
          ]),
          N = g([A, D], u),
          L = f(null == N ? void 0 : N.priceUsd),
          T = _ && (null == L || 0.1 > Math.abs(_.priceUsd / L - 1)) ? _ : null,
          F =
            null !== (v = null == T ? void 0 : T.priceUsd) && void 0 !== v
              ? v
              : L;
        if (null == F) return null;
        let O = /^W?ETH$/.test(
            null !==
              (w =
                null == N
                  ? void 0
                  : null === (e = N.quoteToken) || void 0 === e
                  ? void 0
                  : e.symbol) && void 0 !== w
              ? w
              : ""
          )
            ? f(null == N ? void 0 : N.priceNative)
            : null,
          B =
            null !==
              (C =
                null !== (k = null == _ ? void 0 : _.ethUsd) && void 0 !== k
                  ? k
                  : f(
                      null === (t = g([await b(d).catch(S)], s)) || void 0 === t
                        ? void 0
                        : t.priceUsd
                    )) && void 0 !== C
              ? C
              : L && O
              ? L / O
              : null;
        return {
          priceUsd: F,
          priceNative:
            null !== (E = null == T ? void 0 : T.priceEth) && void 0 !== E
              ? E
              : B
              ? F / B
              : null,
          ethUsd: B,
          marketCap:
            null !== (x = f(null == N ? void 0 : N.marketCap)) && void 0 !== x
              ? x
              : f(null == N ? void 0 : N.fdv),
          liquidityUsd: f(
            null == N
              ? void 0
              : null === (n = N.liquidity) || void 0 === n
              ? void 0
              : n.usd
          ),
          volume24h: f(
            null == N
              ? void 0
              : null === (o = N.volume) || void 0 === o
              ? void 0
              : o.h24
          ),
          change24h: f(
            null == N
              ? void 0
              : null === (i = N.priceChange) || void 0 === i
              ? void 0
              : i.h24
          ),
          buys24h: f(
            null == N
              ? void 0
              : null === (p = N.txns) || void 0 === p
              ? void 0
              : null === (a = p.h24) || void 0 === a
              ? void 0
              : a.buys
          ),
          sells24h: f(
            null == N
              ? void 0
              : null === (y = N.txns) || void 0 === y
              ? void 0
              : null === (m = y.h24) || void 0 === m
              ? void 0
              : m.sells
          ),
          url:
            null !== (I = null == N ? void 0 : N.url) && void 0 !== I ? I : r,
        };
      }
      let k = null;
      function C() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 6e4,
          [t, n] = (0, o.useState)(null);
        return (
          (0, o.useEffect)(() => {
            let t = !1,
              o = 0,
              i = () => (
                (o = Date.now()),
                (null != k ||
                  (k = w().finally(() => {
                    k = null;
                  })),
                k)
                  .then((e) => {
                    !t && e && n(e);
                  })
                  .catch(() => {})
              );
            i();
            let a = setInterval(() => {
                "visible" === document.visibilityState && i();
              }, e),
              u = () => {
                "visible" === document.visibilityState &&
                  Date.now() - o >= e &&
                  i();
              };
            return (
              document.addEventListener("visibilitychange", u),
              () => {
                (t = !0),
                  clearInterval(a),
                  document.removeEventListener("visibilitychange", u);
              }
            );
          }, [e]),
          t
        );
      }
    },
    43860: function (e, t, n) {
      n.d(t, {
        BF: function () {
          return v;
        },
        Qr: function () {
          return a;
        },
        VO: function () {
          return p;
        },
        Xd: function () {
          return h;
        },
        Xi: function () {
          return o;
        },
        Y5: function () {
          return r;
        },
        Y9: function () {
          return f;
        },
        Yo: function () {
          return l;
        },
        eY: function () {
          return i;
        },
        mA: function () {
          return s;
        },
        mC: function () {
          return u;
        },
        nV: function () {
          return m;
        },
        oi: function () {
          return y;
        },
      });
      let o = "https://imd-market.imd-market.workers.dev".replace(/\/$/, ""),
        i = (e) => (o ? "".concat(o, "/art/").concat(e, ".svg") : null),
        a = { opensea: "OpenSea", strategy: "IMD Strategy", blur: "Blur" },
        u = {
          opensea: "https://opensea.io/collection/identitymd",
          strategy:
            "https://www.nftstrategy.fun/strategies/0x80271ce20184e38f4afe90d4ca134304d197aca2",
          blur: "https://blur.io/eth/collection/identitymd",
        },
        r = (e) => "blur" === e.source;
      class l extends Error {
        constructor(e, t) {
          super(e), (this.status = t);
        }
      }
      let c = "imd-market-gone";
      function s(e) {
        try {
          var t;
          let n = JSON.parse(
            null !== (t = sessionStorage.getItem(c)) && void 0 !== t ? t : "{}"
          );
          for (let e of Object.keys(n)) Date.now() - n[e] >= 9e5 && delete n[e];
          for (let t of e) n[t] = Date.now();
          sessionStorage.setItem(c, JSON.stringify(n));
        } catch (e) {}
      }
      let d = null;
      function p() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!o) return Promise.resolve([]);
        if (d && !e && Date.now() - d.at < 1e4) return d.p;
        let t = fetch("".concat(o, "/listings"), {
          cache: e ? "no-store" : "default",
        })
          .then((e) => (e.ok ? e.json() : null))
          .then((e) => {
            if (!(null == e ? void 0 : e.listings)) return null;
            let t = (function () {
              try {
                var e;
                let t = JSON.parse(
                  null !== (e = sessionStorage.getItem(c)) && void 0 !== e
                    ? e
                    : "{}"
                );
                return new Set(
                  Object.keys(t).filter((e) => Date.now() - t[e] < 9e5)
                );
              } catch (e) {
                return new Set();
              }
            })();
            return e.listings.filter((e) => !t.has(e.tokenId));
          })
          .catch(() => null);
        return (d = { at: Date.now(), p: t }), t;
      }
      async function f(e, t) {
        if (!o) throw new l("The market is off.", 0);
        let n =
            "strategy" === e.source
              ? { source: "strategy", tokenId: e.tokenId, buyer: t }
              : {
                  source: "opensea",
                  hash: e.hash,
                  protocol: e.protocol,
                  buyer: t,
                },
          i = await fetch("".concat(o, "/fill"), {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(n),
          }),
          a = await i.json().catch(() => ({}));
        if (!i.ok || !a.data)
          throw new l(a.error || "It didn’t work. Try again.", i.status);
        return a;
      }
      async function m() {
        if (!o) return null;
        try {
          let e = await fetch("".concat(o, "/sales"));
          return e.ok ? await e.json() : null;
        } catch (e) {
          return null;
        }
      }
      async function y(e) {
        if (!o) return null;
        try {
          let t = await fetch("".concat(o, "/seat/").concat(e), {
            cache: "no-store",
          });
          return t.ok ? await t.json() : null;
        } catch (e) {
          return null;
        }
      }
      function v(e) {
        let t = BigInt(e),
          n = t / 10n ** 18n,
          o = ((t % 10n ** 18n) + 5n * 10n ** 14n) / 10n ** 15n;
        return o >= 1000n
          ? "".concat(n + 1n, ".000")
          : "".concat(n, ".").concat(o.toString().padStart(3, "0"));
      }
      async function h() {
        if (!o) return {};
        try {
          let e = await fetch("".concat(o, "/hues"));
          return e.ok ? await e.json() : {};
        } catch (e) {
          return {};
        }
      }
    },
    99572: function (e, t, n) {
      n.d(t, {
        Qk: function () {
          return u;
        },
        iM: function () {
          return r;
        },
        tL: function () {
          return l;
        },
        ye: function () {
          return a;
        },
        yh: function () {
          return i;
        },
      });
      var o = n(51917);
      let i =
          o.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ||
          "5b3bd5688d21f6be053d6c1c018e2ec8",
        a =
          o.env.NEXT_PUBLIC_BASE_RPC_URL ||
          "https://bitter-morning-energy.base-mainnet.quiknode.pro/0f7e38b8ae19fe2cc678bcd8607ae82a68623f6f/",
        u =
          o.env.NEXT_PUBLIC_MAINNET_RPC_URL ||
          "https://skilled-dark-lake.ethereum-mainnet.quiknode.pro/2d5aeb1c5551bd7b38e64c178e7f0105ddf7af78/",
        r =
          o.env.NEXT_PUBLIC_ROBINHOOD_RPC_URL ||
          "https://rpc.mainnet.chain.robinhood.com",
        l = void 0;
    },
  },
]);
