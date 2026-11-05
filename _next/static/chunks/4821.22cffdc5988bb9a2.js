"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4821],
  {
    25153: function (t, e, n) {
      n.d(e, {
        A: function () {
          return o;
        },
      });
      var r = n(15365),
        a = n(78842),
        i = n(4360);
      async function o(t, e) {
        let {
            address: n,
            abi: o,
            args: s,
            eventName: c,
            fromBlock: l,
            strict: u,
            toBlock: f,
          } = e,
          d = (0, i.g)(t, { method: "eth_newFilter" }),
          p = c ? (0, r.O)({ abi: o, args: s, eventName: c }) : void 0,
          m = await t.request({
            method: "eth_newFilter",
            params: [
              {
                address: n,
                fromBlock: "bigint" == typeof l ? (0, a.eC)(l) : l,
                toBlock: "bigint" == typeof f ? (0, a.eC)(f) : f,
                topics: p,
              },
            ],
          });
        return {
          abi: o,
          args: s,
          eventName: c,
          id: m,
          request: d(m),
          strict: !!u,
          type: "event",
        };
      }
    },
    2075: function (t, e, n) {
      n.d(e, {
        D: function () {
          return c;
        },
      });
      var r = n(56859),
        a = n(47687),
        i = n(48871),
        o = n(17354),
        s = n(99216);
      async function c(t, e) {
        let {
            abi: n,
            address: c,
            args: l,
            functionName: u,
            dataSuffix: f = "string" == typeof t.dataSuffix
              ? t.dataSuffix
              : t.dataSuffix?.value,
            ...d
          } = e,
          p = (0, a.R)({ abi: n, args: l, functionName: u });
        try {
          return await (0, o.s)(
            t,
            s.Q,
            "estimateGas"
          )({ data: `${p}${f ? f.replace("0x", "") : ""}`, to: c, ...d });
        } catch (e) {
          let t = d.account ? (0, r.T)(d.account) : void 0;
          throw (0, i.S)(e, {
            abi: n,
            address: c,
            args: l,
            docsPath: "/docs/contract/estimateContractGas",
            functionName: u,
            sender: t?.address,
          });
        }
      }
    },
    99661: function (t, e, n) {
      n.d(e, {
        s: function () {
          return l;
        },
      });
      var r = n(67471),
        a = n(70781),
        i = n(47687),
        o = n(54411),
        s = n(17354),
        c = n(42026);
      async function l(
        t,
        {
          address: e,
          blockHash: n,
          blockNumber: l,
          blockTag: u = t.experimental_blockTag ?? "latest",
          requireCanonical: f,
        }
      ) {
        let d = (0, o.G)({
          blockHash: n,
          blockNumber: l,
          blockTag: u,
          requireCanonical: f,
        });
        if (t.batch?.multicall && t.chain?.contracts?.multicall3) {
          let o = t.chain.contracts.multicall3.address,
            d = (0, i.R)({
              abi: r.F8,
              functionName: "getEthBalance",
              args: [e],
            }),
            { data: p } = await (0, s.s)(
              t,
              c.R,
              "call"
            )({
              to: o,
              data: d,
              blockHash: n,
              blockNumber: l,
              blockTag: u,
              requireCanonical: f,
            });
          return (0, a.k)({
            abi: r.F8,
            functionName: "getEthBalance",
            args: [e],
            data: p || "0x",
          });
        }
        return BigInt(
          await t.request({ method: "eth_getBalance", params: [e, d] })
        );
      }
    },
    655: function (t, e, n) {
      n.d(e, {
        z: function () {
          return i;
        },
      });
      var r = n(21304);
      let a = (t) => `blockNumber.${t}`;
      async function i(t, { cacheTime: e = t.cacheTime } = {}) {
        return BigInt(
          await (0, r.DN)(() => t.request({ method: "eth_blockNumber" }), {
            cacheKey: a(t.uid),
            cacheTime: e,
          })
        );
      }
    },
    95248: function (t, e, n) {
      n.d(e, {
        m: function () {
          return o;
        },
      });
      var r = n(11192),
        a = n(17354),
        i = n(29116);
      async function o(t, e) {
        let {
            abi: n,
            address: o,
            args: s,
            blockHash: c,
            eventName: l,
            fromBlock: u,
            toBlock: f,
            strict: d,
          } = e,
          p = l ? (0, r.mE)({ abi: n, name: l }) : void 0,
          m = p ? void 0 : n.filter((t) => "event" === t.type);
        return (0, a.s)(
          t,
          i.y,
          "getLogs"
        )({
          address: o,
          args: s,
          blockHash: c,
          event: p,
          events: m,
          fromBlock: u,
          toBlock: f,
          strict: d,
        });
      }
    },
    94599: function (t, e, n) {
      n.d(e, {
        K: function () {
          return i;
        },
      });
      var r = n(74628),
        a = n(10528);
      async function i(t, { filter: e }) {
        let n = "strict" in e && e.strict,
          i = await e.request({
            method: "eth_getFilterChanges",
            params: [e.id],
          });
        if ("string" == typeof i[0]) return i;
        let o = i.map((t) => (0, a.U)(t));
        return "abi" in e && e.abi
          ? (0, r.h)({ abi: e.abi, logs: o, strict: n })
          : o;
      }
    },
    29116: function (t, e, n) {
      n.d(e, {
        y: function () {
          return s;
        },
      });
      var r = n(15365),
        a = n(74628),
        i = n(78842),
        o = n(10528);
      async function s(
        t,
        {
          address: e,
          blockHash: n,
          fromBlock: s,
          toBlock: c,
          event: l,
          events: u,
          args: f,
          strict: d,
        } = {}
      ) {
        let p = u ?? (l ? [l] : void 0),
          m = [];
        p &&
          ((m = [
            p.flatMap((t) =>
              (0, r.O)({ abi: [t], eventName: t.name, args: u ? void 0 : f })
            ),
          ]),
          l && (m = m[0]));
        let y = (
          n
            ? await t.request({
                method: "eth_getLogs",
                params: [{ address: e, topics: m, blockHash: n }],
              })
            : await t.request({
                method: "eth_getLogs",
                params: [
                  {
                    address: e,
                    topics: m,
                    fromBlock: "bigint" == typeof s ? (0, i.eC)(s) : s,
                    toBlock: "bigint" == typeof c ? (0, i.eC)(c) : c,
                  },
                ],
              })
        ).map((t) => (0, o.U)(t));
        return p ? (0, a.h)({ abi: p, args: f, logs: y, strict: d ?? !1 }) : y;
      }
    },
    99669: function (t, e, n) {
      n.d(e, {
        a: function () {
          return i;
        },
      });
      var r = n(9422),
        a = n(50932);
      async function i(t, { hash: e }) {
        let n = await t.request(
          { method: "eth_getTransactionReceipt", params: [e] },
          { dedupe: !0 }
        );
        if (!n) throw new r.Yb({ hash: e });
        return (t.chain?.formatters?.transactionReceipt?.format || a.fA)(
          n,
          "getTransactionReceipt"
        );
      }
    },
    16532: function (t, e, n) {
      n.d(e, {
        A: function () {
          return b;
        },
      });
      var r = n(67471),
        a = n(89963),
        i = n(53355),
        o = n(30393),
        s = n(20586),
        c = n(70781),
        l = n(47687),
        u = n(68730),
        f = n(48871),
        d = n(17354),
        p = n(63080),
        m = n(82399),
        y = n(23331);
      async function b(t, e) {
        let {
            account: n,
            authorizationList: p,
            allowFailure: m = !0,
            blockHash: b,
            blockNumber: h,
            blockOverrides: w,
            blockTag: v,
            requireCanonical: k,
            stateOverride: N,
          } = e,
          T = e.contracts,
          E = "object" == typeof t.batch?.multicall ? t.batch.multicall : {},
          B = e.batchSize ?? E.batchSize ?? 1024,
          C = e.deployless ?? E.deployless ?? !1,
          S = (() => {
            if (e.multicallAddress) return e.multicallAddress;
            if (C) return null;
            if (t.chain)
              return (0, u.L)({
                blockNumber: h,
                chain: t.chain,
                contract: "multicall3",
              });
            throw Error(
              "client chain not configured. multicallAddress is required."
            );
          })(),
          x = [[]],
          I = 0,
          P = 0;
        for (let t = 0; t < T.length; t++) {
          let { abi: e, address: r, args: a, functionName: i } = T[t];
          try {
            let t = (0, l.R)({ abi: e, args: a, functionName: i });
            (P += (t.length - 2) / 2),
              B > 0 &&
                P > B &&
                x[I].length > 0 &&
                (I++, (P = (t.length - 2) / 2), (x[I] = [])),
              (x[I] = [...x[I], { allowFailure: !0, callData: t, target: r }]);
          } catch (o) {
            let t = (0, f.S)(o, {
              abi: e,
              address: r,
              args: a,
              docsPath: "/docs/contract/multicall",
              functionName: i,
              sender: n,
            });
            if (!m) throw t;
            x[I] = [...x[I], { allowFailure: !0, callData: "0x", target: r }];
          }
        }
        let F = !!t.batch?.multicall,
          q = F ? x.flatMap((t) => t.map((t) => [t])) : x,
          R = await Promise.allSettled(
            q.map((e) =>
              F
                ? g(t, {
                    account: n,
                    authorizationList: p,
                    batchSize: B,
                    blockHash: b,
                    blockNumber: h,
                    blockOverrides: w,
                    blockTag: v,
                    call: e[0],
                    multicallAddress: S,
                    requireCanonical: k,
                    stateOverride: N,
                  }).then((t) => [t])
                : (0, d.s)(
                    t,
                    y.L,
                    "readContract"
                  )({
                    ...(null === S ? { code: a.xd } : { address: S }),
                    abi: r.F8,
                    account: n,
                    args: [e],
                    authorizationList: p,
                    blockHash: b,
                    blockNumber: h,
                    blockOverrides: w,
                    blockTag: v,
                    functionName: "aggregate3",
                    requireCanonical: k,
                    stateOverride: N,
                  })
            )
          ),
          D = [];
        for (let t = 0; t < R.length; t++) {
          let e = R[t];
          if ("rejected" === e.status) {
            if (!m) throw e.reason;
            for (let n = 0; n < q[t].length; n++)
              D.push({ status: "failure", error: e.reason, result: void 0 });
            continue;
          }
          let n = e.value;
          for (let e = 0; e < n.length; e++) {
            let { returnData: r, success: a } = n[e],
              { callData: o } = q[t][e],
              { abi: l, address: u, functionName: d, args: p } = T[D.length];
            try {
              if ("0x" === o) throw new i.wb();
              if (!a) throw new s.VQ({ data: r });
              let t = (0, c.k)({ abi: l, args: p, data: r, functionName: d });
              D.push(m ? { result: t, status: "success" } : t);
            } catch (e) {
              let t = (0, f.S)(e, {
                abi: l,
                address: u,
                args: p,
                docsPath: "/docs/contract/multicall",
                functionName: d,
              });
              if (!m) throw t;
              D.push({ error: t, result: void 0, status: "failure" });
            }
          }
        }
        if (D.length !== T.length) throw new o.G("multicall results mismatch");
        return D;
      }
      async function g(t, e) {
        let { batchSize: n, call: i, multicallAddress: o, ...s } = e,
          { wait: c = 0 } =
            "object" == typeof t.batch?.multicall ? t.batch.multicall : {},
          { schedule: l } = (0, p.S)({
            id: (0, m.P)(["multicall", t.uid, n, o, s]),
            wait: c,
            shouldSplitBatch: (t) =>
              0 !== n &&
              t.reduce((t, { callData: e }) => t + (e.length - 2) / 2, 0) > n,
            fn: (e) =>
              (0, d.s)(
                t,
                y.L,
                "readContract"
              )({
                ...(null === o ? { code: a.xd } : { address: o }),
                ...s,
                abi: r.F8,
                args: [e],
                functionName: "aggregate3",
              }),
          }),
          [u] = await l(i);
        return u;
      }
    },
    30270: function (t, e, n) {
      n.d(e, {
        a: function () {
          return l;
        },
      });
      var r = n(56859),
        a = n(70781),
        i = n(47687),
        o = n(48871),
        s = n(17354),
        c = n(42026);
      async function l(t, e) {
        let {
            abi: n,
            address: l,
            args: u,
            functionName: f,
            dataSuffix: d = "string" == typeof t.dataSuffix
              ? t.dataSuffix
              : t.dataSuffix?.value,
            ...p
          } = e,
          m = p.account ? (0, r.T)(p.account) : t.account,
          y = (0, i.R)({ abi: n, args: u, functionName: f });
        try {
          let { data: r } = await (0, s.s)(
              t,
              c.R,
              "call"
            )({
              batch: !1,
              data: `${y}${d ? d.replace("0x", "") : ""}`,
              to: l,
              ...p,
              account: m,
            }),
            i = (0, a.k)({ abi: n, args: u, functionName: f, data: r || "0x" }),
            o = n.filter((t) => "name" in t && t.name === e.functionName);
          return {
            result: i,
            request: {
              abi: o,
              address: l,
              args: u,
              dataSuffix: d,
              functionName: f,
              ...p,
              account: m,
            },
          };
        } catch (t) {
          throw (0, o.S)(t, {
            abi: n,
            address: l,
            args: u,
            docsPath: "/docs/contract/simulateContract",
            functionName: f,
            sender: m?.address,
          });
        }
      }
    },
    14018: function (t, e, n) {
      n.d(e, {
        W: function () {
          return r;
        },
      });
      async function r(t, { filter: e }) {
        return e.request({ method: "eth_uninstallFilter", params: [e.id] });
      }
    },
    13422: function (t, e, n) {
      n.d(e, {
        e: function () {
          return m;
        },
      });
      var r = n(18390),
        a = n(9422),
        i = n(17354),
        o = n(85765),
        s = n(31773),
        c = n(906),
        l = n(82399),
        u = n(82182),
        f = n(81760),
        d = n(99669),
        p = n(4987);
      async function m(t, e) {
        let n, m, y, b, g;
        let {
            checkReplacement: h = t.chain
              ?.supportsTransactionReplacementDetection ?? !0,
            confirmations: w = 1,
            hash: v,
            onReplaced: k,
            retryCount: N = 6,
            retryDelay: T = ({ count: t }) => 200 * ~~(1 << t),
            timeout: E = 18e4,
          } = e,
          B = (0, l.P)(["waitForTransactionReceipt", t.uid, v]),
          C = e.pollingInterval
            ? e.pollingInterval
            : t.chain?.experimental_preconfirmationTime
            ? t.chain.experimental_preconfirmationTime
            : t.pollingInterval,
          S = !1,
          { promise: x, resolve: I, reject: P } = (0, s.n)(),
          F = E
            ? setTimeout(() => {
                g?.(), b?.(), P(new a.mc({ hash: v }));
              }, E)
            : void 0;
        return (
          (b = (0, o.N7)(
            B,
            { onReplaced: k, resolve: I, reject: P },
            async (e) => {
              if (
                (y = await (0, i.s)(
                  t,
                  d.a,
                  "getTransactionReceipt"
                )({ hash: v }).catch(() => void 0)) &&
                w <= 1
              ) {
                clearTimeout(F), e.resolve(y), b?.();
                return;
              }
              g = (0, i.s)(
                t,
                p.q,
                "watchBlockNumber"
              )({
                emitMissed: !0,
                emitOnBegin: !0,
                poll: !0,
                pollingInterval: C,
                async onBlockNumber(o) {
                  let s = (t) => {
                      clearTimeout(F), g?.(), t(), b?.();
                    },
                    l = o;
                  if (!S)
                    try {
                      if (y) {
                        if (
                          w > 1 &&
                          (!y.blockNumber || l - y.blockNumber + 1n < w)
                        )
                          return;
                        s(() => e.resolve(y));
                        return;
                      }
                      if (
                        (h &&
                          !n &&
                          ((S = !0),
                          await (0, c.J)(
                            async () => {
                              (n = await (0, i.s)(
                                t,
                                f.f,
                                "getTransaction"
                              )({ hash: v })).blockNumber &&
                                (l = n.blockNumber);
                            },
                            { delay: T, retryCount: N }
                          ),
                          (S = !1)),
                        (y = await (0, i.s)(
                          t,
                          d.a,
                          "getTransactionReceipt"
                        )({ hash: v })),
                        w > 1 && (!y.blockNumber || l - y.blockNumber + 1n < w))
                      )
                        return;
                      s(() => e.resolve(y));
                    } catch (o) {
                      if (o instanceof a.Bh || o instanceof a.Yb) {
                        if (!n) {
                          S = !1;
                          return;
                        }
                        try {
                          (m = n), (S = !0);
                          let a = await (0, c.J)(
                            () =>
                              (0, i.s)(
                                t,
                                u.Q,
                                "getBlock"
                              )({ blockNumber: l, includeTransactions: !0 }),
                            {
                              delay: T,
                              retryCount: N,
                              shouldRetry: ({ error: t }) => t instanceof r.f,
                            }
                          );
                          S = !1;
                          let o = a.transactions.find(
                            ({ from: t, nonce: e }) =>
                              t === m.from && e === m.nonce
                          );
                          if (
                            !o ||
                            ((y = await (0, i.s)(
                              t,
                              d.a,
                              "getTransactionReceipt"
                            )({ hash: o.hash })),
                            w > 1 &&
                              (!y.blockNumber || l - y.blockNumber + 1n < w))
                          )
                            return;
                          let f = "replaced";
                          o.to === m.to &&
                          o.value === m.value &&
                          o.input === m.input
                            ? (f = "repriced")
                            : o.from === o.to &&
                              0n === o.value &&
                              (f = "cancelled"),
                            s(() => {
                              e.onReplaced?.({
                                reason: f,
                                replacedTransaction: m,
                                transaction: o,
                                transactionReceipt: y,
                              }),
                                e.resolve(y);
                            });
                        } catch (t) {
                          s(() => e.reject(t));
                        }
                      } else s(() => e.reject(o));
                    }
                },
              });
            }
          )),
          x
        );
      }
    },
    4987: function (t, e, n) {
      n.d(e, {
        q: function () {
          return l;
        },
      });
      var r = n(90647),
        a = n(17354),
        i = n(85765),
        o = n(43682),
        s = n(82399),
        c = n(655);
      function l(
        t,
        {
          emitOnBegin: e = !1,
          emitMissed: n = !1,
          onBlockNumber: l,
          onError: u,
          poll: f,
          pollingInterval: d = t.pollingInterval,
        }
      ) {
        let p;
        return (
          void 0 !== f
            ? f
            : "webSocket" !== t.transport.type &&
              "ipc" !== t.transport.type &&
              ("fallback" !== t.transport.type ||
                ("webSocket" !== t.transport.transports[0].config.type &&
                  "ipc" !== t.transport.transports[0].config.type))
        )
          ? (() => {
              let r = (0, s.P)(["watchBlockNumber", t.uid, e, n, d]);
              return (0, i.N7)(r, { onBlockNumber: l, onError: u }, (r) =>
                (0, o.$)(
                  async () => {
                    try {
                      let e = await (0, a.s)(
                        t,
                        c.z,
                        "getBlockNumber"
                      )({ cacheTime: 0 });
                      if (void 0 !== p) {
                        if (e === p) return;
                        if (e - p > 1 && n)
                          for (let t = p + 1n; t < e; t++)
                            r.onBlockNumber(t, p), (p = t);
                      }
                      (void 0 === p || e > p) &&
                        (r.onBlockNumber(e, p), (p = e));
                    } catch (t) {
                      r.onError?.(t);
                    }
                  },
                  { emitOnBegin: e, interval: d }
                )
              );
            })()
          : (() => {
              let a = (0, s.P)(["watchBlockNumber", t.uid, e, n]);
              return (0, i.N7)(a, { onBlockNumber: l, onError: u }, (e) => {
                let n = !0,
                  a = () => (n = !1);
                return (
                  (async () => {
                    try {
                      let i = (() => {
                          if ("fallback" === t.transport.type) {
                            let e = t.transport.transports.find(
                              (t) =>
                                "webSocket" === t.config.type ||
                                "ipc" === t.config.type
                            );
                            return e ? e.value : t.transport;
                          }
                          return t.transport;
                        })(),
                        { unsubscribe: o } = await i.subscribe({
                          params: ["newHeads"],
                          onData(t) {
                            if (!n) return;
                            let a = (0, r.y_)(t.result?.number);
                            e.onBlockNumber(a, p), (p = a);
                          },
                          onError(t) {
                            e.onError?.(t);
                          },
                        });
                      (a = o), n || a();
                    } catch (t) {
                      u?.(t);
                    }
                  })(),
                  () => a()
                );
              });
            })();
      }
    },
    77031: function (t, e, n) {
      n.d(e, {
        Y: function () {
          return g;
        },
      });
      var r = n(53355),
        a = n(68347),
        i = n(39679),
        o = n(15365),
        s = n(10528),
        c = n(17354),
        l = n(85765),
        u = n(43682),
        f = n(82399),
        d = n(25153),
        p = n(655),
        m = n(95248),
        y = n(94599),
        b = n(14018);
      function g(t, e) {
        let {
          abi: n,
          address: g,
          args: h,
          batch: w = !0,
          eventName: v,
          fromBlock: k,
          onError: N,
          onLogs: T,
          poll: E,
          pollingInterval: B = t.pollingInterval,
          strict: C,
        } = e;
        return (
          void 0 !== E
            ? E
            : "bigint" == typeof k ||
              ("webSocket" !== t.transport.type &&
                "ipc" !== t.transport.type &&
                ("fallback" !== t.transport.type ||
                  ("webSocket" !== t.transport.transports[0].config.type &&
                    "ipc" !== t.transport.transports[0].config.type)))
        )
          ? (() => {
              let e = C ?? !1,
                r = (0, f.P)([
                  "watchContractEvent",
                  g,
                  h,
                  w,
                  t.uid,
                  v,
                  B,
                  e,
                  k,
                ]);
              return (0, l.N7)(r, { onLogs: T, onError: N }, (r) => {
                let i, o;
                void 0 !== k && (i = k - 1n);
                let s = !1,
                  l = (0, u.$)(
                    async () => {
                      if (!s) {
                        try {
                          o = await (0, c.s)(
                            t,
                            d.A,
                            "createContractEventFilter"
                          )({
                            abi: n,
                            address: g,
                            args: h,
                            eventName: v,
                            strict: e,
                            fromBlock: k,
                          });
                        } catch {}
                        s = !0;
                        return;
                      }
                      try {
                        let a;
                        if (o)
                          a = await (0, c.s)(
                            t,
                            y.K,
                            "getFilterChanges"
                          )({ filter: o });
                        else {
                          let r = await (0, c.s)(t, p.z, "getBlockNumber")({});
                          (a =
                            i && i < r
                              ? await (0, c.s)(
                                  t,
                                  m.m,
                                  "getContractEvents"
                                )({
                                  abi: n,
                                  address: g,
                                  args: h,
                                  eventName: v,
                                  fromBlock: i + 1n,
                                  toBlock: r,
                                  strict: e,
                                })
                              : []),
                            (i = r);
                        }
                        if (0 === a.length) return;
                        if (w) r.onLogs(a);
                        else for (let t of a) r.onLogs([t]);
                      } catch (t) {
                        o && t instanceof a.yR && (s = !1), r.onError?.(t);
                      }
                    },
                    { emitOnBegin: !0, interval: B }
                  );
                return async () => {
                  o &&
                    (await (0, c.s)(t, b.W, "uninstallFilter")({ filter: o })),
                    l();
                };
              });
            })()
          : (() => {
              let e = (0, f.P)([
                  "watchContractEvent",
                  g,
                  h,
                  w,
                  t.uid,
                  v,
                  B,
                  C ?? !1,
                ]),
                a = !0,
                c = () => (a = !1);
              return (0, l.N7)(
                e,
                { onLogs: T, onError: N },
                (e) => (
                  (async () => {
                    try {
                      let l = (() => {
                          if ("fallback" === t.transport.type) {
                            let e = t.transport.transports.find(
                              (t) =>
                                "webSocket" === t.config.type ||
                                "ipc" === t.config.type
                            );
                            return e ? e.value : t.transport;
                          }
                          return t.transport;
                        })(),
                        u = v
                          ? (0, o.O)({ abi: n, eventName: v, args: h })
                          : [],
                        { unsubscribe: f } = await l.subscribe({
                          params: ["logs", { address: g, topics: u }],
                          onData(t) {
                            if (!a) return;
                            let o = t.result;
                            try {
                              let { eventName: t, args: r } = (0, i.F)({
                                  abi: n,
                                  data: o.data,
                                  topics: o.topics,
                                  strict: C,
                                }),
                                a = (0, s.U)(o, { args: r, eventName: t });
                              e.onLogs([a]);
                            } catch (i) {
                              let t, n;
                              if (i instanceof r.SM || i instanceof r.Gy) {
                                if (C) return;
                                (t = i.abiItem.name),
                                  (n = i.abiItem.inputs?.some(
                                    (t) => !("name" in t && t.name)
                                  ));
                              }
                              let a = (0, s.U)(o, {
                                args: n ? [] : {},
                                eventName: t,
                              });
                              e.onLogs([a]);
                            }
                          },
                          onError(t) {
                            e.onError?.(t);
                          },
                        });
                      (c = f), a || c();
                    } catch (t) {
                      N?.(t);
                    }
                  })(),
                  () => c()
                )
              );
            })();
      }
    },
    57964: function (t, e, n) {
      n.d(e, {
        Dh: function () {
          return f;
        },
        GQ: function () {
          return h;
        },
        OF: function () {
          return p;
        },
        ay: function () {
          return d;
        },
        dH: function () {
          return m;
        },
        h: function () {
          return g;
        },
        nF: function () {
          return b;
        },
        sN: function () {
          return u;
        },
      });
      var r = n(67471),
        a = n(75030),
        i = n(34350),
        o = n(47687),
        s = n(58191),
        c = n(46103),
        l = n(23331);
      function u(t, e) {
        return { amount: t, decimals: e, formatted: (0, s.b)(t, e) };
      }
      function f(t, e) {
        if ("bigint" == typeof t) return t;
        let n = t.decimals ?? e;
        return (0, c.v)(
          t.formatted,
          (function (t) {
            if (void 0 === t)
              throw Error(
                "Token decimals are required. Pass `amount.decimals` or select a declared token."
              );
            return t;
          })(n)
        );
      }
      function d(t, e) {
        return "bigint" == typeof t ? e : t.decimals ?? e;
      }
      function p(t, e) {
        let { decimals: n, token: r } = e,
          o = m(t, r);
        if (o) return { address: o.address, decimals: n ?? o.decimals };
        if ((0, a.U)(r, { strict: !1 }))
          return {
            address: r,
            decimals:
              n ??
              (function (t, e) {
                let n = t.tokens,
                  r = t.chain?.id;
                if (n && void 0 !== r)
                  for (let t of n) {
                    let n = y(t, r);
                    if (n && (0, i.E)(n.address, e)) return n.decimals;
                  }
              })(t, r),
          };
        throw Error(
          `Token "${r}" is not a declared ERC-20 token on the client's \`tokens\` array (with an address for the client's chain), and is not a valid address.`
        );
      }
      function m(t, e) {
        let n = t.tokens,
          r = t.chain?.id;
        if (!n || void 0 === r) return;
        let o = (function (t, e) {
          let n = e.toLowerCase();
          for (let e of t) if (e.symbol?.toLowerCase() === n) return e;
        })(n, e);
        if (o) return y(o, r);
        if ((0, a.U)(e, { strict: !1 }))
          for (let t of n) {
            let n = y(t, r);
            if (n && (0, i.E)(n.address, e)) return n;
          }
      }
      function y(t, e) {
        let n = t.addresses[e];
        if (n)
          return {
            address: n,
            currency: t.currency,
            decimals: t.decimals,
            name: t.name,
            popular: t.popular,
            symbol: t.symbol,
          };
      }
      async function b(t, e) {
        let { address: n, decimals: a } = p(t, e);
        return void 0 !== a
          ? { address: n, decimals: a }
          : {
              address: n,
              decimals: await (0, l.L)(t, {
                abi: r.Wo,
                address: n,
                functionName: "decimals",
              }),
            };
      }
      function g(t) {
        let {
          account: e,
          chain: n,
          gas: r,
          maxFeePerGas: a,
          maxPriorityFeePerGas: i,
          nonce: o,
        } = t;
        return {
          account: e,
          chain: n,
          gas: r,
          maxFeePerGas: a,
          maxPriorityFeePerGas: i,
          nonce: o,
        };
      }
      function h(t) {
        return { ...t, data: (0, o.R)(t), to: t.address };
      }
    },
    51467: function (t, e, n) {
      n.d(e, {
        s: function () {
          return i;
        },
      });
      var r = n(9422),
        a = n(50932);
      async function i(
        t,
        { serializedTransaction: e, throwOnReceiptRevert: n, timeout: i }
      ) {
        let o = await t.request(
            { method: "eth_sendRawTransactionSync", params: i ? [e, i] : [e] },
            { retryCount: 0 }
          ),
          s = (t.chain?.formatters?.transactionReceipt?.format || a.fA)(o);
        if ("reverted" === s.status && n) throw new r.A3({ receipt: s });
        return s;
      }
    },
    56993: function (t, e, n) {
      n.d(e, {
        l: function () {
          return o;
        },
      });
      var r = n(56859),
        a = n(9250),
        i = n(78842);
      async function o(t, { account: e = t.account, message: n }) {
        if (!e) throw new a.o({ docsPath: "/docs/actions/wallet/signMessage" });
        let o = (0, r.T)(e);
        if (o.signMessage) return o.signMessage({ message: n });
        let s =
          "string" == typeof n
            ? (0, i.$G)(n)
            : n.raw instanceof Uint8Array
            ? (0, i.NC)(n.raw)
            : n.raw;
        return t.request(
          { method: "personal_sign", params: [s, o.address] },
          { retryCount: 0 }
        );
      }
    },
    37305: function (t, e, n) {
      n.d(e, {
        I: function () {
          return eg;
        },
      });
      var r,
        a = n(17948),
        i = n(23012),
        o = n(13398),
        s = n(26044),
        c = n(26974),
        l = n(42026),
        u = n(56859),
        f = n(30393),
        d = n(78842),
        p = n(26223),
        m = n(65767),
        y = n(15219),
        b = n(42970);
      async function g(t, e) {
        let {
            account: n = t.account,
            blockNumber: r,
            blockTag: a = "latest",
            blobs: i,
            data: o,
            gas: s,
            gasPrice: c,
            maxFeePerBlobGas: l,
            maxFeePerGas: g,
            maxPriorityFeePerGas: h,
            to: w,
            value: v,
            ...k
          } = e,
          N = n ? (0, u.T)(n) : void 0;
        try {
          (0, b.F)(e);
          let n = "bigint" == typeof r ? (0, d.eC)(r) : void 0,
            u = t.chain?.formatters?.transactionRequest?.format,
            p = (u || y.tG)(
              {
                ...(0, m.K)(k, { format: u }),
                account: N,
                blobs: i,
                data: o,
                gas: s,
                gasPrice: c,
                maxFeePerBlobGas: l,
                maxFeePerGas: g,
                maxPriorityFeePerGas: h,
                to: w,
                value: v,
              },
              "createAccessList"
            ),
            T = await t.request({
              method: "eth_createAccessList",
              params: [p, n || a],
            });
          if (T.error) throw new f.G(T.error, { details: T.error });
          return { accessList: T.accessList, gasUsed: BigInt(T.gasUsed) };
        } catch (n) {
          throw (0, p.P)(n, { ...e, account: N, chain: t.chain });
        }
      }
      var h = n(4360);
      async function w(t) {
        let e = (0, h.g)(t, { method: "eth_newBlockFilter" }),
          n = await t.request({ method: "eth_newBlockFilter" });
        return { id: n, request: e(n), type: "block" };
      }
      var v = n(25153),
        k = n(15365);
      async function N(
        t,
        {
          address: e,
          args: n,
          event: r,
          events: a,
          fromBlock: i,
          strict: o,
          toBlock: s,
        } = {}
      ) {
        let c = a ?? (r ? [r] : void 0),
          l = (0, h.g)(t, { method: "eth_newFilter" }),
          u = [];
        c &&
          ((u = [
            c.flatMap((t) =>
              (0, k.O)({ abi: [t], eventName: t.name, args: n })
            ),
          ]),
          r && (u = u[0]));
        let f = await t.request({
          method: "eth_newFilter",
          params: [
            {
              address: e,
              fromBlock: "bigint" == typeof i ? (0, d.eC)(i) : i,
              toBlock: "bigint" == typeof s ? (0, d.eC)(s) : s,
              ...(u.length ? { topics: u } : {}),
            },
          ],
        });
        return {
          abi: c,
          args: n,
          eventName: r ? r.name : void 0,
          fromBlock: i,
          id: f,
          request: l(f),
          strict: !!o,
          toBlock: s,
          type: "event",
        };
      }
      async function T(t) {
        let e = (0, h.g)(t, { method: "eth_newPendingTransactionFilter" }),
          n = await t.request({ method: "eth_newPendingTransactionFilter" });
        return { id: n, request: e(n), type: "transaction" };
      }
      var E = n(2075),
        B = n(57861),
        C = n(99216),
        S = n(34293),
        x = n(36986),
        I = n(99661);
      async function P(t) {
        return BigInt(await t.request({ method: "eth_blobBaseFee" }));
      }
      var F = n(82182),
        q = n(655),
        R = n(18390),
        D = n(50932);
      async function L(
        t,
        {
          blockHash: e,
          blockNumber: n,
          blockTag: r = t.experimental_blockTag ?? "latest",
        } = {}
      ) {
        let a = void 0 !== n ? (0, d.eC)(n) : void 0,
          i = await t.request(
            { method: "eth_getBlockReceipts", params: [e || a || r] },
            { dedupe: !!(e || a) }
          );
        if (!i) throw new R.f({ blockHash: e, blockNumber: n });
        let o = t.chain?.formatters?.transactionReceipt?.format || D.fA;
        return i.map((t) => o(t, "getBlockReceipts"));
      }
      var O = n(90647);
      async function _(
        t,
        { blockHash: e, blockNumber: n, blockTag: r = "latest" } = {}
      ) {
        let a;
        let i = void 0 !== n ? (0, d.eC)(n) : void 0;
        return (
          (a = e
            ? await t.request(
                { method: "eth_getBlockTransactionCountByHash", params: [e] },
                { dedupe: !0 }
              )
            : await t.request(
                {
                  method: "eth_getBlockTransactionCountByNumber",
                  params: [i || r],
                },
                { dedupe: !!i }
              )),
          (0, O.ly)(a)
        );
      }
      var A = n(87624),
        G = n(10224),
        $ = n(95248),
        M = n(14019),
        z = n(50321),
        j = n(93599);
      async function U(
        t,
        { address: e, blockNumber: n, blockTag: r = "latest" }
      ) {
        let a = await (0, G.C)(t, {
          address: e,
          ...(void 0 !== n ? { blockNumber: n } : { blockTag: r }),
        });
        if (a && 23 === (0, z.d)(a) && a.startsWith("0xef0100"))
          return (0, M.K)((0, j.tP)(a, 3, 23));
      }
      class H extends f.G {
        constructor({ address: t }) {
          super(`No EIP-712 domain found on contract "${t}".`, {
            metaMessages: [
              "Ensure that:",
              `- The contract is deployed at the address "${t}".`,
              "- `eip712Domain()` function exists on the contract.",
              "- `eip712Domain()` function matches signature to ERC-5267 specification.",
            ],
            name: "Eip712DomainNotFoundError",
          });
        }
      }
      var W = n(17354),
        Q = n(23331);
      async function Z(t, e) {
        let { address: n, factory: r, factoryData: a } = e;
        try {
          let [e, i, o, s, c, l, u] = await (0, W.s)(
            t,
            Q.L,
            "readContract"
          )({
            abi: J,
            address: n,
            functionName: "eip712Domain",
            factory: r,
            factoryData: a,
          });
          return {
            domain: {
              name: i,
              version: o,
              chainId: Number(s),
              verifyingContract: c,
              salt: l,
            },
            extensions: u,
            fields: e,
          };
        } catch (t) {
          if (
            "ContractFunctionExecutionError" === t.name &&
            "ContractFunctionZeroDataError" === t.cause.name
          )
            throw new H({ address: n });
          throw t;
        }
      }
      let J = [
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            { name: "fields", type: "bytes1" },
            { name: "name", type: "string" },
            { name: "version", type: "string" },
            { name: "chainId", type: "uint256" },
            { name: "verifyingContract", type: "address" },
            { name: "salt", type: "bytes32" },
            { name: "extensions", type: "uint256[]" },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];
      async function K(
        t,
        {
          blockCount: e,
          blockNumber: n,
          blockTag: r = "latest",
          rewardPercentiles: a,
        }
      ) {
        var i;
        let o = "bigint" == typeof n ? (0, d.eC)(n) : void 0;
        return {
          baseFeePerGas: (i = await t.request(
            { method: "eth_feeHistory", params: [(0, d.eC)(e), o || r, a] },
            { dedupe: !!o }
          )).baseFeePerGas.map((t) => BigInt(t)),
          gasUsedRatio: i.gasUsedRatio,
          oldestBlock: BigInt(i.oldestBlock),
          reward: i.reward?.map((t) => t.map((t) => BigInt(t))),
        };
      }
      var V = n(94599),
        Y = n(74628),
        X = n(10528);
      async function tt(t, { filter: e }) {
        let n = e.strict ?? !1,
          r = (
            await e.request({ method: "eth_getFilterLogs", params: [e.id] })
          ).map((t) => (0, X.U)(t));
        return e.abi ? (0, Y.h)({ abi: e.abi, logs: r, strict: n }) : r;
      }
      var te = n(69582),
        tn = n(29116),
        tr = n(54411);
      async function ta(
        t,
        {
          address: e,
          blockHash: n,
          blockNumber: r,
          blockTag: a = "latest",
          requireCanonical: i,
          storageKeys: o,
        }
      ) {
        var s;
        let c = (0, tr.G)({
          blockHash: n,
          blockNumber: r,
          blockTag: a,
          requireCanonical: i,
        });
        return {
          ...(s = await t.request({
            method: "eth_getProof",
            params: [e, o, c],
          })),
          balance: s.balance ? BigInt(s.balance) : void 0,
          nonce: s.nonce ? (0, O.ly)(s.nonce) : void 0,
          storageProof: s.storageProof
            ? s.storageProof.map((t) => ({ ...t, value: BigInt(t.value) }))
            : void 0,
        };
      }
      var ti = n(9422);
      async function to(t, { hash: e }) {
        let n = await t.request(
          { method: "eth_getRawTransactionByHash", params: [e] },
          { dedupe: !0 }
        );
        if (!n) throw new ti.Bh({ hash: e });
        return n;
      }
      async function ts(
        t,
        {
          address: e,
          blockHash: n,
          blockNumber: r,
          blockTag: a = "latest",
          requireCanonical: i,
          slot: o,
        }
      ) {
        let s = (0, tr.G)({
          blockHash: n,
          blockNumber: r,
          blockTag: a,
          requireCanonical: i,
        });
        return await t.request({
          method: "eth_getStorageAt",
          params: [e, o, s],
        });
      }
      async function tc(
        t,
        {
          blockHash: e,
          blockNumber: n,
          blockTag: r = "latest",
          requireCanonical: a,
          requests: i,
        }
      ) {
        let o = (0, tr.G)({
          blockHash: e,
          blockNumber: n,
          blockTag: r,
          requireCanonical: a,
        });
        return t.request({ method: "eth_getStorageValues", params: [i, o] });
      }
      var tl = n(81760);
      async function tu(t, { hash: e, transactionReceipt: n }) {
        let [r, a] = await Promise.all([
            (0, W.s)(t, q.z, "getBlockNumber")({}),
            e ? (0, W.s)(t, tl.f, "getTransaction")({ hash: e }) : void 0,
          ]),
          i = n?.blockNumber || a?.blockNumber;
        return i ? r - i + 1n : 0n;
      }
      var tf = n(94907),
        td = n(99669),
        tp = n(16532),
        tm = n(31451),
        ty = n(53355),
        tb = n(20586),
        tg = n(95690),
        th = n(70781),
        tw = n(47687),
        tv = n(83967),
        tk = n(48871),
        tN = n(45591),
        tT = n(30834),
        tE = n(98269);
      async function tB(t, e) {
        let {
          blockNumber: n,
          blockTag: r = t.experimental_blockTag ?? "latest",
          blocks: a,
          returnFullTransactions: i,
          traceTransfers: o,
          validation: s,
        } = e;
        try {
          let e = [];
          for (let t of a) {
            let n = t.blockOverrides ? tm.o(t.blockOverrides) : void 0,
              r = t.calls.map((t) => {
                let e = t.account ? (0, u.T)(t.account) : void 0,
                  n = t.abi ? (0, tw.R)(t) : t.data,
                  r = {
                    ...t,
                    account: e,
                    data: t.dataSuffix
                      ? (0, tv.zo)([n || "0x", t.dataSuffix])
                      : n,
                    from: t.from ?? e?.address,
                  };
                return (0, b.F)(r), (0, y.tG)(r);
              }),
              a = t.stateOverrides ? (0, tE.mF)(t.stateOverrides) : void 0;
            e.push({ blockOverrides: n, calls: r, stateOverrides: a });
          }
          let c = "bigint" == typeof n ? (0, d.eC)(n) : void 0;
          return (
            await t.request({
              method: "eth_simulateV1",
              params: [
                {
                  blockStateCalls: e,
                  returnFullTransactions: i,
                  traceTransfers: o,
                  validation: s,
                },
                c || r,
              ],
            })
          ).map((t, e) => ({
            ...(0, tT.Z)(t),
            calls: t.calls.map((t, n) => {
              let { abi: r, args: i, functionName: o, to: s } = a[e].calls[n],
                c = t.error?.data ?? t.returnData,
                l = BigInt(t.gasUsed),
                u = void 0 === t.maxUsedGas ? void 0 : BigInt(t.maxUsedGas),
                f = t.logs?.map((t) => X.U(t)),
                d = "0x1" === t.status ? "success" : "failure",
                p =
                  r && "success" === d && "0x" !== c
                    ? (0, th.k)({ abi: r, data: c, functionName: o })
                    : null,
                m = (() => {
                  let t;
                  if (
                    "success" !== d &&
                    ("0x" === c
                      ? (t = new ty.wb())
                      : c && (t = new tb.VQ({ data: c })),
                    t)
                  )
                    return (0, tk.S)(t, {
                      abi: r ?? [],
                      address: s ?? "0x",
                      args: i,
                      functionName: o ?? "<unknown>",
                    });
                })();
              return {
                data: c,
                gasUsed: l,
                logs: f,
                ...(void 0 === u ? {} : { maxUsedGas: u }),
                status: d,
                ...("success" === d ? { result: p } : { error: m }),
              };
            }),
          }));
        } catch (e) {
          let t = (0, tN.k)(e, {});
          if (t instanceof tg.cj) throw e;
          throw t;
        }
      }
      var tC = n(97519),
        tS = n(22312),
        tx = n(48415);
      function tI(...t) {
        let [e, n = []] = (() => {
            if (Array.isArray(t[0])) {
              let [e, n, r] = t;
              return [tF(e, n, { args: r }), r];
            }
            let [e, n] = t;
            return [e, n];
          })(),
          { overloads: r } = e,
          a = r ? tF([e, ...r], e.name, { args: n }) : e,
          i = tC.GH(a),
          o = n.length > 0 ? tS.cv(a.inputs, n) : void 0;
        return o ? tx.zo(i, o) : i;
      }
      function tP(t, e = {}) {
        return tC.Dp(t, e);
      }
      function tF(t, e, n) {
        let r = tC.Nu(t, e, n);
        if ("function" !== r.type)
          throw new tC.dR({ name: e, type: "function" });
        return r;
      }
      n(98862), n(24027), n(55969);
      var tq = n(41984),
        tR = n(89963),
        tD = n(6464);
      let tL =
          "0x608060405234801561000f575f5ffd5b5060043610610029575f3560e01c8063fd00430c1461002d575b5f5ffd5b6100476004803603810190610042919061012b565b610049565b005b80825f375f5f825f865afa610060573d5f5f3e3d5ffd5b3d5f5f3e3d5ff35b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61009982610070565b9050919050565b6100a98161008f565b81146100b3575f5ffd5b50565b5f813590506100c4816100a0565b92915050565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f8401126100eb576100ea6100ca565b5b8235905067ffffffffffffffff811115610108576101076100ce565b5b602083019150836001820283011115610124576101236100d2565b5b9250929050565b5f5f5f6040848603121561014257610141610068565b5b5f61014f868287016100b6565b935050602084013567ffffffffffffffff8111156101705761016f61006c565b5b61017c868287016100d6565b9250925050925092509256fea2646970667358221220635ed99185cacf3f2acba6921f23687c969cec2bbaf5f9ad599f507e6e105e6964736f6c63430008230033",
        tO =
          ((r = (function (t, e = {}) {
            return tC.Dp(t, e);
          })(
            "event Transfer(address indexed from, address indexed to, uint256 value)"
          )),
          tC.RA(r)),
        t_ = tP("function balanceOf(address) returns (uint256)"),
        tA = tP("function decimals() returns (uint256)"),
        tG = tP("function tokenURI(uint256) returns (string)"),
        t$ = tP("function symbol() returns (string)"),
        tM = tP("function query(address target, bytes data)");
      async function tz(t, e) {
        var n, r, a, i, o, s, c, l;
        let {
            blockNumber: d,
            blockTag: p,
            calls: m,
            stateOverrides: y,
            traceAssetChanges: b,
            traceTransfers: g,
            validation: h,
          } = e,
          w = e.account ? (0, u.T)(e.account) : void 0;
        if (b && !w)
          throw new f.G(
            "`account` is required when `traceAssetChanges` is true"
          );
        let v = w
            ? (function (...t) {
                let [e, n] = (() => {
                    if (Array.isArray(t[0])) {
                      let [e, n] = t;
                      return [
                        (function (t) {
                          let e = t.find((t) => "constructor" === t.type);
                          if (!e) throw new tC.dR({ name: "constructor" });
                          return e;
                        })(e),
                        n,
                      ];
                    }
                    return t;
                  })(),
                  { bytecode: r, args: a } = n;
                return tx.zo(
                  r,
                  e.inputs?.length && a?.length ? tS.cv(e.inputs, a) : "0x"
                );
              })(((l = "constructor(bytes, bytes)"), tC.Dp(l)), {
                bytecode: tR.NO,
                args: [
                  "0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033",
                  tI(tP("function getBalance(address)"), [w.address]),
                ],
              })
            : void 0,
          k =
            null !== (n = null != p ? p : t.experimental_blockTag) &&
            void 0 !== n
              ? n
              : "latest",
          N = d;
        if (b && "bigint" != typeof N && "earliest" !== k && "pending" !== k) {
          if ("latest" === k) N = await (0, q.z)(t, { cacheTime: 0 });
          else {
            let e = await (0, F.Q)(t, { blockTag: k });
            if ("bigint" != typeof e.number)
              throw new f.G(
                "Block tag `".concat(k, "` did not resolve to a number.")
              );
            N = e.number;
          }
        }
        let T = "bigint" == typeof N ? { blockNumber: N } : { blockTag: k },
          E = b
            ? await tB(t, {
                ...T,
                blocks: [
                  {
                    calls: m.map((t) => ({ ...t, from: w.address })),
                    stateOverrides: y,
                  },
                ],
                traceTransfers: g,
                validation: h,
              })
            : void 0,
          B = E
            ? [
                ...new Set([
                  ...(function (t, e) {
                    let n = (0, tD.vk)(e.toLowerCase(), { size: 32 });
                    return t
                      .filter((t) => {
                        var e, r, a;
                        return (
                          (null === (e = t.topics[0]) || void 0 === e
                            ? void 0
                            : e.toLowerCase()) === tO &&
                          t.address.toLowerCase() !== tq.j &&
                          ((null === (r = t.topics[1]) || void 0 === r
                            ? void 0
                            : r.toLowerCase()) === n ||
                            (null === (a = t.topics[2]) || void 0 === a
                              ? void 0
                              : a.toLowerCase()) === n)
                        );
                      })
                      .map((t) => t.address.toLowerCase());
                  })(
                    E[0].calls.flatMap((t) => {
                      var e;
                      return null !== (e = t.logs) && void 0 !== e ? e : [];
                    }),
                    w.address
                  ),
                  ...e.calls.map((t) => {
                    var e;
                    return null === (e = t.to) || void 0 === e
                      ? void 0
                      : e.toLowerCase();
                  }),
                ]),
              ].filter((t) => !!t && t !== tq.j && t !== tq.D)
            : [],
          C = (function (t) {
            let e = new Set(t.map((t) => t.toLowerCase())),
              n = 3735928559n;
            for (; e.has("0x".concat(n.toString(16).padStart(40, "0"))); ) n++;
            return "0x".concat(n.toString(16).padStart(40, "0"));
          })([
            ...(w ? [w.address] : []),
            ...B,
            ...(null !==
              (r =
                null == y
                  ? void 0
                  : y.map((t) => {
                      let { address: e } = t;
                      return e;
                    })) && void 0 !== r
              ? r
              : []),
          ]),
          S = [{ address: C, code: tL }],
          [x, I] = await Promise.all([
            b
              ? Promise.all([
                  tW(t, {
                    account: w.address,
                    ...T,
                    data: v,
                    stateOverride: y,
                  }),
                  ...B.map((e) =>
                    tW(t, {
                      account: w.address,
                      address: e,
                      ...T,
                      data: tI(t_, [w.address]),
                      staticCallAddress: C,
                      stateOverride: y,
                    })
                  ),
                ])
              : [],
            tB(t, {
              ...T,
              blocks: [
                {
                  calls: [...m, { to: tq.D }].map((t) => ({
                    ...t,
                    from: null == w ? void 0 : w.address,
                  })),
                  stateOverrides: y,
                },
                ...(b
                  ? [
                      { calls: [{ data: v }] },
                      {
                        calls: B.map((t) => ({
                          to: C,
                          gas: 1000000n,
                          data: tj(t, tI(t_, [w.address])),
                        })),
                        stateOverrides: S,
                      },
                      {
                        calls: B.map((t) => ({
                          to: C,
                          gas: 1000000n,
                          data: tj(t, tI(tA)),
                        })),
                        stateOverrides: S,
                      },
                      {
                        calls: B.map((t) => ({
                          to: C,
                          gas: 1000000n,
                          data: tj(t, tI(tG, [0n])),
                        })),
                        stateOverrides: S,
                      },
                      {
                        calls: B.map((t) => ({
                          to: C,
                          gas: 1000000n,
                          data: tj(t, tI(t$)),
                        })),
                        stateOverrides: S,
                      },
                    ]
                  : []),
              ],
              traceTransfers: g,
              validation: h,
            }),
          ]),
          P = I[0],
          [R, D, L, _, A] = b ? I.slice(1) : [],
          { calls: G, ...$ } = P,
          M = G.slice(0, -1),
          z = x.map((t) => (tU(t) ? (0, O.y_)(t.data) : null)),
          j = [
            ...(null !== (a = null == R ? void 0 : R.calls) && void 0 !== a
              ? a
              : []),
            ...(null !== (i = null == D ? void 0 : D.calls) && void 0 !== i
              ? i
              : []),
          ].map((t) => (tU(t) ? (0, O.y_)(t.data) : null)),
          U = (
            null !== (o = null == L ? void 0 : L.calls) && void 0 !== o ? o : []
          ).map((t) => tH(t, tA)),
          H = (
            null !== (s = null == A ? void 0 : A.calls) && void 0 !== s ? s : []
          ).map((t) => tH(t, t$)),
          W = (
            null !== (c = null == _ ? void 0 : _.calls) && void 0 !== c ? c : []
          ).map((t) => tH(t, tG)),
          Q = [];
        for (let [t, e] of j.entries()) {
          let n = z[t],
            r = x[t],
            a =
              "bigint" == typeof n
                ? n
                : t > 0 &&
                  (null == r ? void 0 : r.status) === "success" &&
                  "0x" === r.data
                ? 0n
                : null;
          if ("bigint" != typeof e || "bigint" != typeof a) continue;
          let i = U[t - 1],
            o = H[t - 1],
            s = W[t - 1],
            c =
              0 === t
                ? { address: tq.j, decimals: 18, symbol: "ETH" }
                : {
                    address: B[t - 1],
                    decimals: s || i ? Number(null != i ? i : 1) : void 0,
                    symbol: null != o ? o : void 0,
                  };
          Q.push({ token: c, value: { pre: a, post: e, diff: e - a } });
        }
        return { assetChanges: Q, block: $, results: M };
      }
      function tj(t, e) {
        return tI(tM, [t, e]);
      }
      function tU(t) {
        return "success" === t.status && /^0x[\da-f]{64}$/i.test(t.data);
      }
      function tH(t, e) {
        if ("failure" === t.status || "0x" === t.data) return null;
        try {
          return (function (...t) {
            let [e, n, r = {}] = (() => {
                if (Array.isArray(t[0])) {
                  let [e, n, r, a] = t;
                  return [tF(e, n), r, a];
                }
                return t;
              })(),
              a = tS.Jx(e.outputs, n, r);
            if (!a || 0 !== Object.keys(a).length)
              return a && 1 === Object.keys(a).length
                ? Array.isArray(a)
                  ? a[0]
                  : Object.values(a)[0]
                : a;
          })(e, t.data);
        } catch (t) {
          return null;
        }
      }
      async function tW(t, e) {
        let {
          account: n,
          address: r,
          blockNumber: a,
          blockTag: i,
          data: o,
          staticCallAddress: s,
          stateOverride: c,
        } = e;
        try {
          var u;
          let e = await (0, l.R)(
            { ...t, ccipRead: !1 },
            {
              account: r ? tq.D : n,
              data: r ? tj(r, o) : o,
              stateOverride:
                r && s
                  ? [...(null != c ? c : []), { address: s, code: tL }]
                  : c,
              ...(r ? { gas: 1000000n, to: s } : {}),
              ...("bigint" == typeof a ? { blockNumber: a } : { blockTag: i }),
            }
          );
          return {
            data: null !== (u = e.data) && void 0 !== u ? u : "0x",
            status: "success",
          };
        } catch (t) {
          if (!(t instanceof tb.cg) || !(t.cause instanceof tg.M_)) throw t;
          return { data: "0x", status: "failure" };
        }
      }
      var tQ = n(30270),
        tZ = n(14018),
        tJ = n(91250),
        tK = n(84584);
      async function tV(
        t,
        {
          address: e,
          message: n,
          factory: r,
          factoryData: a,
          signature: i,
          ...o
        }
      ) {
        let s = (0, tK.r)(n);
        return (0, W.s)(
          t,
          tJ.ZR,
          "verifyHash"
        )({
          address: e,
          factory: r,
          factoryData: a,
          hash: s,
          signature: i,
          ...o,
        });
      }
      var tY = n(3);
      async function tX(t, e) {
        let {
            address: n,
            factory: r,
            factoryData: a,
            signature: i,
            message: o,
            primaryType: s,
            types: c,
            domain: l,
            ...u
          } = e,
          f = (0, tY.Jv)({ message: o, primaryType: s, types: c, domain: l });
        return (0, W.s)(
          t,
          tJ.ZR,
          "verifyHash"
        )({
          address: n,
          factory: r,
          factoryData: a,
          hash: f,
          signature: i,
          ...u,
        });
      }
      var t0 = n(13422),
        t1 = n(85765),
        t5 = n(82399);
      let t6 = [
        "size",
        "totalDifficulty",
        "transactions",
        "uncles",
        "withdrawals",
      ];
      var t2 = n(4987),
        t9 = n(43682),
        t3 = n(77031),
        t8 = n(68347),
        t7 = n(39679);
      let t4 =
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;
      function et(t) {
        return new Date(
          !t4.test(t) || Number.isNaN(new Date(t).getTime()) ? Number.NaN : t
        );
      }
      let ee =
          /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+\-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
        en =
          /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
      var er = n(75030),
        ea = n(34350);
      async function ei(t, e) {
        let {
            address: n,
            domain: r,
            message: a,
            nonce: i,
            scheme: o,
            signature: s,
            time: c = new Date(),
            ...l
          } = e,
          u = (function (t) {
            let { scheme: e, statement: n, ...r } = t.match(ee)?.groups ?? {},
              {
                chainId: a,
                expirationTime: i,
                issuedAt: o,
                notBefore: s,
                requestId: c,
                ...l
              } = t.match(en)?.groups ?? {},
              u = t.split("Resources:")[1]?.split("\n- ").slice(1);
            return {
              ...r,
              ...l,
              ...(a ? { chainId: Number(a) } : {}),
              ...(i ? { expirationTime: et(i) } : {}),
              ...(o ? { issuedAt: et(o) } : {}),
              ...(s ? { notBefore: et(s) } : {}),
              ...(c ? { requestId: c } : {}),
              ...(u ? { resources: u } : {}),
              ...(e ? { scheme: e } : {}),
              ...(n ? { statement: n } : {}),
            };
          })(a);
        if (
          !u.address ||
          !(function (t) {
            let {
              address: e,
              domain: n,
              message: r,
              nonce: a,
              scheme: i,
              time: o = new Date(),
            } = t;
            if (
              (n && r.domain !== n) ||
              (a && r.nonce !== a) ||
              (i && r.scheme !== i) ||
              Number.isNaN(o.getTime()) ||
              (r.expirationTime &&
                (Number.isNaN(r.expirationTime.getTime()) ||
                  o >= r.expirationTime)) ||
              (r.notBefore &&
                (Number.isNaN(r.notBefore.getTime()) || o < r.notBefore))
            )
              return !1;
            try {
              if (
                !r.address ||
                !(0, er.U)(r.address, { strict: !1 }) ||
                (e && !(0, ea.E)(r.address, e))
              )
                return !1;
            } catch {
              return !1;
            }
            return !0;
          })({
            address: n,
            domain: r,
            message: u,
            nonce: i,
            scheme: o,
            time: c,
          })
        )
          return !1;
        let f = (0, tK.r)(a);
        return (0, tJ.ZR)(t, {
          address: u.address,
          hash: f,
          signature: s,
          ...l,
        });
      }
      var eo = n(67471),
        es = n(57964);
      async function ec(t, e) {
        let { account: n, decimals: r, spender: a, token: i, ...o } = e,
          [s, { decimals: c }] = await Promise.all([
            (0, Q.L)(t, {
              ...o,
              ...ec.call(t, { account: n, spender: a, token: i }),
            }),
            (0, es.nF)(t, { decimals: r, token: i }),
          ]);
        return (0, es.sN)(s, c);
      }
      (ec || (ec = {})).call = function (t, e) {
        return (0, es.GQ)({
          address: (0, es.OF)(t, e).address,
          abi: eo.Wo,
          functionName: "allowance",
          args: [e.account, e.spender],
        });
      };
      var el = n(9250);
      async function eu(t, e) {
        let { account: n = t.account, decimals: r, token: a, ...i } = e;
        if (!n) throw new el.o();
        let o = (0, u.T)(n).address,
          [s, { decimals: c }] = await Promise.all([
            (0, Q.L)(t, { ...i, ...eu.call(t, { account: o, token: a }) }),
            (0, es.nF)(t, { decimals: r, token: a }),
          ]);
        return (0, es.sN)(s, c);
      }
      async function ef(t, e) {
        let { token: n, ...r } = e,
          { address: a } = (0, es.OF)(t, { token: n }),
          i = (0, es.dH)(t, n),
          [o, s, c] = await Promise.all([
            i?.decimals ??
              (0, Q.L)(t, {
                ...r,
                abi: eo.Wo,
                address: a,
                functionName: "decimals",
              }),
            i?.name ??
              (0, Q.L)(t, {
                ...r,
                abi: eo.Wo,
                address: a,
                functionName: "name",
              }),
            i?.symbol ??
              (0, Q.L)(t, {
                ...r,
                abi: eo.Wo,
                address: a,
                functionName: "symbol",
              }),
          ]);
        return { decimals: o, name: s, symbol: c };
      }
      async function ed(t, e) {
        let { decimals: n, token: r, ...a } = e,
          [i, { decimals: o }] = await Promise.all([
            (0, Q.L)(t, { ...a, ...ed.call(t, { token: r }) }),
            (0, es.nF)(t, { decimals: n, token: r }),
          ]);
        return (0, es.sN)(i, o);
      }
      ((eu || (eu = {})).call = function (t, e) {
        let n = e.account ?? t.account;
        if (!n) throw new el.o();
        let r = (0, u.T)(n).address;
        return (0, es.GQ)({
          address: (0, es.OF)(t, e).address,
          abi: eo.Wo,
          functionName: "balanceOf",
          args: [r],
        });
      }),
        ((ed || (ed = {})).call = function (t, e) {
          return (0, es.GQ)({
            address: (0, es.OF)(t, e).address,
            abi: eo.Wo,
            args: [],
            functionName: "totalSupply",
          });
        });
      var ep = n(32996),
        em = n(64600),
        ey = n(51467),
        eb = n(87783);
      function eg(t) {
        return {
          call: (e) => (0, l.R)(t, e),
          createAccessList: (e) => g(t, e),
          createBlockFilter: () => w(t),
          createContractEventFilter: (e) => (0, v.A)(t, e),
          createEventFilter: (e) => N(t, e),
          createPendingTransactionFilter: () => T(t),
          estimateContractGas: (e) => (0, E.D)(t, e),
          estimateGas: (e) => (0, C.Q)(t, e),
          getBalance: (e) => (0, I.s)(t, e),
          getBlobBaseFee: () => P(t),
          getBlock: (e) => (0, F.Q)(t, e),
          getBlockNumber: (e) => (0, q.z)(t, e),
          getBlockReceipts: (e) => L(t, e),
          getBlockTransactionCount: (e) => _(t, e),
          getBytecode: (e) => (0, G.C)(t, e),
          getChainId: () => (0, A.L)(t),
          getCode: (e) => (0, G.C)(t, e),
          getContractEvents: (e) => (0, $.m)(t, e),
          getDelegation: (e) => U(t, e),
          getEip712Domain: (e) => Z(t, e),
          getEnsAddress: (e) => (0, a.O)(t, e),
          getEnsAvatar: (e) => (0, i.r)(t, e),
          getEnsName: (e) => (0, o.w)(t, e),
          getEnsResolver: (e) => (0, s.S)(t, e),
          getEnsText: (e) => (0, c.g)(t, e),
          getFeeHistory: (e) => K(t, e),
          estimateFeesPerGas: (e) => (0, B.X)(t, e),
          getFilterChanges: (e) => (0, V.K)(t, e),
          getFilterLogs: (e) => tt(t, e),
          getGasPrice: () => (0, te.o)(t),
          getLogs: (e) => (0, tn.y)(t, e),
          getProof: (e) => ta(t, e),
          estimateMaxPriorityFeePerGas: (e) => (0, S._)(t, e),
          fillTransaction: (e) => (0, x.b)(t, e),
          getRawTransaction: (e) => to(t, e),
          getStorageAt: (e) => ts(t, e),
          getStorageValues: (e) => tc(t, e),
          getTransaction: (e) => (0, tl.f)(t, e),
          getTransactionConfirmations: (e) => tu(t, e),
          getTransactionCount: (e) => (0, tf.K)(t, e),
          getTransactionReceipt: (e) => (0, td.a)(t, e),
          multicall: (e) => (0, tp.A)(t, e),
          prepareTransactionRequest: (e) => (0, ep.ZE)(t, e),
          readContract: (e) => (0, Q.L)(t, e),
          sendRawTransaction: (e) => (0, em.p)(t, e),
          sendRawTransactionSync: (e) => (0, ey.s)(t, e),
          simulate: (e) => tB(t, e),
          simulateBlocks: (e) => tB(t, e),
          simulateCalls: (e) => tz(t, e),
          simulateContract: (e) => (0, tQ.a)(t, e),
          verifyHash: (e) => (0, tJ.ZR)(t, e),
          verifyMessage: (e) => tV(t, e),
          verifySiweMessage: (e) => ei(t, e),
          verifyTypedData: (e) => tX(t, e),
          uninstallFilter: (e) => (0, tZ.W)(t, e),
          waitForTransactionReceipt: (e) => (0, t0.e)(t, e),
          watchBlockHeaders: (e) =>
            (function (t, { onBlockHeader: e, onError: n }) {
              let r;
              let a = (0, t5.P)(["watchBlockHeaders", t.uid]);
              return (0, t1.N7)(a, { onBlockHeader: e, onError: n }, (e) => {
                let n = !0,
                  a = !1,
                  i = () => (n = !1);
                return (
                  (async () => {
                    try {
                      let o = (() => {
                          if ("fallback" === t.transport.type) {
                            let e = t.transport.transports.find(
                              (t) =>
                                "webSocket" === t.config.type ||
                                "ipc" === t.config.type
                            );
                            return e ? e.value : t.transport;
                          }
                          return t.transport;
                        })(),
                        { unsubscribe: s } = await o.subscribe({
                          params: ["newHeads"],
                          onData(a) {
                            if (!n) return;
                            let i = (
                              t.chain?.formatters?.block?.format || tT.Z
                            )(a.result, "watchBlockHeaders");
                            for (let t of t6) delete i[t];
                            e.onBlockHeader(i, r), (r = i);
                          },
                          onError(t) {
                            a && e.onError?.(t);
                          },
                        });
                      (a = !0), (i = s), n || i();
                    } catch (t) {
                      e.onError?.(t);
                    }
                  })(),
                  () => i()
                );
              });
            })(t, e),
          watchBlocks: (e) =>
            (function (
              t,
              {
                blockTag: e = t.experimental_blockTag ?? "latest",
                emitMissed: n = !1,
                emitOnBegin: r = !1,
                onBlock: a,
                onError: i,
                includeTransactions: o,
                poll: s,
                pollingInterval: c = t.pollingInterval,
              }
            ) {
              let l, u, f, d;
              let p =
                  void 0 !== s
                    ? s
                    : "webSocket" !== t.transport.type &&
                      "ipc" !== t.transport.type &&
                      ("fallback" !== t.transport.type ||
                        ("webSocket" !==
                          t.transport.transports[0].config.type &&
                          "ipc" !== t.transport.transports[0].config.type)),
                m = o ?? !1;
              return p
                ? (() => {
                    let o = (0, t5.P)(["watchBlocks", t.uid, e, n, r, m, c]);
                    return (0, t1.N7)(o, { onBlock: a, onError: i }, (a) =>
                      (0, t9.$)(
                        async () => {
                          try {
                            let r = await (0, W.s)(
                              t,
                              F.Q,
                              "getBlock"
                            )({ blockTag: e, includeTransactions: m });
                            if (null !== r.number && l?.number != null) {
                              if (r.number === l.number) return;
                              if (r.number - l.number > 1 && n)
                                for (
                                  let e = l?.number + 1n;
                                  e < r.number;
                                  e++
                                ) {
                                  let n = await (0, W.s)(
                                    t,
                                    F.Q,
                                    "getBlock"
                                  )({ blockNumber: e, includeTransactions: m });
                                  a.onBlock(n, l), (l = n);
                                }
                            }
                            (l?.number == null ||
                              ("pending" === e && r?.number == null) ||
                              (null !== r.number && r.number > l.number)) &&
                              (a.onBlock(r, l), (l = r));
                          } catch (t) {
                            a.onError?.(t);
                          }
                        },
                        { emitOnBegin: r, interval: c }
                      )
                    );
                  })()
                : ((u = !0),
                  (f = !0),
                  (d = () => (u = !1)),
                  (async () => {
                    try {
                      r &&
                        (0, W.s)(
                          t,
                          F.Q,
                          "getBlock"
                        )({ blockTag: e, includeTransactions: m })
                          .then((t) => {
                            u && f && (a(t, void 0), (f = !1));
                          })
                          .catch(i);
                      let n = (() => {
                          if ("fallback" === t.transport.type) {
                            let e = t.transport.transports.find(
                              (t) =>
                                "webSocket" === t.config.type ||
                                "ipc" === t.config.type
                            );
                            return e ? e.value : t.transport;
                          }
                          return t.transport;
                        })(),
                        { unsubscribe: o } = await n.subscribe({
                          params: ["newHeads"],
                          async onData(e) {
                            if (!u) return;
                            let n = await (0, W.s)(
                              t,
                              F.Q,
                              "getBlock"
                            )({
                              blockNumber: e.result?.number,
                              includeTransactions: m,
                            }).catch(() => {});
                            u && (a(n, l), (f = !1), (l = n));
                          },
                          onError(t) {
                            i?.(t);
                          },
                        });
                      (d = o), u || d();
                    } catch (t) {
                      i?.(t);
                    }
                  })(),
                  () => d());
            })(t, e),
          watchBlockNumber: (e) => (0, t2.q)(t, e),
          watchContractEvent: (e) => (0, t3.Y)(t, e),
          watchEvent: (e) =>
            (function (
              t,
              {
                address: e,
                args: n,
                batch: r = !0,
                event: a,
                events: i,
                fromBlock: o,
                onError: s,
                onLogs: c,
                poll: l,
                pollingInterval: u = t.pollingInterval,
                strict: f,
              }
            ) {
              let d, p;
              let m =
                  void 0 !== l
                    ? l
                    : "bigint" == typeof o ||
                      ("webSocket" !== t.transport.type &&
                        "ipc" !== t.transport.type &&
                        ("fallback" !== t.transport.type ||
                          ("webSocket" !==
                            t.transport.transports[0].config.type &&
                            "ipc" !== t.transport.transports[0].config.type))),
                y = f ?? !1;
              return m
                ? (() => {
                    let l = (0, t5.P)(["watchEvent", e, n, r, t.uid, a, u, o]);
                    return (0, t1.N7)(l, { onLogs: c, onError: s }, (s) => {
                      let c, l;
                      void 0 !== o && (c = o - 1n);
                      let f = !1,
                        d = (0, t9.$)(
                          async () => {
                            if (!f) {
                              try {
                                l = await (0, W.s)(
                                  t,
                                  N,
                                  "createEventFilter"
                                )({
                                  address: e,
                                  args: n,
                                  event: a,
                                  events: i,
                                  strict: y,
                                  fromBlock: o,
                                });
                              } catch {}
                              f = !0;
                              return;
                            }
                            try {
                              let o;
                              if (l)
                                o = await (0, W.s)(
                                  t,
                                  V.K,
                                  "getFilterChanges"
                                )({ filter: l });
                              else {
                                let r = await (0, W.s)(
                                  t,
                                  q.z,
                                  "getBlockNumber"
                                )({});
                                (o =
                                  c && c !== r
                                    ? await (0, W.s)(
                                        t,
                                        tn.y,
                                        "getLogs"
                                      )({
                                        address: e,
                                        args: n,
                                        event: a,
                                        events: i,
                                        fromBlock: c + 1n,
                                        toBlock: r,
                                      })
                                    : []),
                                  (c = r);
                              }
                              if (0 === o.length) return;
                              if (r) s.onLogs(o);
                              else for (let t of o) s.onLogs([t]);
                            } catch (t) {
                              l && t instanceof t8.yR && (f = !1),
                                s.onError?.(t);
                            }
                          },
                          { emitOnBegin: !0, interval: u }
                        );
                      return async () => {
                        l &&
                          (await (0, W.s)(
                            t,
                            tZ.W,
                            "uninstallFilter"
                          )({ filter: l })),
                          d();
                      };
                    });
                  })()
                : ((d = !0),
                  (p = () => (d = !1)),
                  (async () => {
                    try {
                      let r = (() => {
                          if ("fallback" === t.transport.type) {
                            let e = t.transport.transports.find(
                              (t) =>
                                "webSocket" === t.config.type ||
                                "ipc" === t.config.type
                            );
                            return e ? e.value : t.transport;
                          }
                          return t.transport;
                        })(),
                        o = i ?? (a ? [a] : void 0),
                        l = [];
                      o &&
                        ((l = [
                          o.flatMap((t) =>
                            (0, k.O)({ abi: [t], eventName: t.name, args: n })
                          ),
                        ]),
                        a && (l = l[0]));
                      let { unsubscribe: u } = await r.subscribe({
                        params: ["logs", { address: e, topics: l }],
                        onData(t) {
                          if (!d) return;
                          let e = t.result;
                          try {
                            let { eventName: t, args: n } = (0, t7.F)({
                                abi: o ?? [],
                                data: e.data,
                                topics: e.topics,
                                strict: y,
                              }),
                              r = (0, X.U)(e, { args: n, eventName: t });
                            c([r]);
                          } catch (a) {
                            let t, n;
                            if (a instanceof ty.SM || a instanceof ty.Gy) {
                              if (f) return;
                              (t = a.abiItem.name),
                                (n = a.abiItem.inputs?.some(
                                  (t) => !("name" in t && t.name)
                                ));
                            }
                            let r = (0, X.U)(e, {
                              args: n ? [] : {},
                              eventName: t,
                            });
                            c([r]);
                          }
                        },
                        onError(t) {
                          s?.(t);
                        },
                      });
                      (p = u), d || p();
                    } catch (t) {
                      s?.(t);
                    }
                  })(),
                  () => p());
            })(t, e),
          watchPendingTransactions: (e) =>
            (function (
              t,
              {
                batch: e = !0,
                onError: n,
                onTransactions: r,
                poll: a,
                pollingInterval: i = t.pollingInterval,
              }
            ) {
              let o, s;
              return (
                void 0 !== a
                  ? a
                  : "webSocket" !== t.transport.type &&
                    "ipc" !== t.transport.type
              )
                ? (() => {
                    let a = (0, t5.P)([
                      "watchPendingTransactions",
                      t.uid,
                      e,
                      i,
                    ]);
                    return (0, t1.N7)(
                      a,
                      { onTransactions: r, onError: n },
                      (n) => {
                        let r;
                        let a = (0, t9.$)(
                          async () => {
                            try {
                              if (!r)
                                try {
                                  r = await (0, W.s)(
                                    t,
                                    T,
                                    "createPendingTransactionFilter"
                                  )({});
                                  return;
                                } catch (t) {
                                  throw (a(), t);
                                }
                              let i = await (0, W.s)(
                                t,
                                V.K,
                                "getFilterChanges"
                              )({ filter: r });
                              if (0 === i.length) return;
                              if (e) n.onTransactions(i);
                              else for (let t of i) n.onTransactions([t]);
                            } catch (t) {
                              n.onError?.(t);
                            }
                          },
                          { emitOnBegin: !0, interval: i }
                        );
                        return async () => {
                          r &&
                            (await (0, W.s)(
                              t,
                              tZ.W,
                              "uninstallFilter"
                            )({ filter: r })),
                            a();
                        };
                      }
                    );
                  })()
                : ((o = !0),
                  (s = () => (o = !1)),
                  (async () => {
                    try {
                      let { unsubscribe: e } = await t.transport.subscribe({
                        params: ["newPendingTransactions"],
                        onData(t) {
                          if (!o) return;
                          let e = t.result;
                          r([e]);
                        },
                        onError(t) {
                          n?.(t);
                        },
                      });
                      (s = e), o || s();
                    } catch (t) {
                      n?.(t);
                    }
                  })(),
                  () => s());
            })(t, e),
          token: {
            getAllowance: (0, eb.xz)(t, ec),
            getBalance: (0, eb.xz)(t, eu),
            getMetadata: (0, eb.xz)(t, ef),
            getTotalSupply: (0, eb.xz)(t, ed),
          },
        };
      }
    },
    75243: function (t, e, n) {
      n.d(e, {
        P: function () {
          return a;
        },
      });
      var r = n(16710);
      function a(t, e = {}) {
        let {
          key: n = "custom",
          methods: a,
          name: i = "Custom Provider",
          retryDelay: o,
        } = e;
        return ({ retryCount: s }) =>
          (0, r.q)({
            key: n,
            methods: a,
            name: i,
            request: t.request.bind(t),
            retryCount: e.retryCount ?? s,
            retryDelay: o,
            type: "custom",
          });
      }
    },
    41984: function (t, e, n) {
      n.d(e, {
        D: function () {
          return a;
        },
        j: function () {
          return r;
        },
      });
      let r = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        a = "0x0000000000000000000000000000000000000000";
    },
    70650: function (t, e, n) {
      n.d(e, {
        k: function () {
          return r;
        },
      });
      let r = "\x19Ethereum Signed Message:\n";
    },
    4797: function (t, e, n) {
      n.d(e, {
        Bd: function () {
          return i;
        },
        Zn: function () {
          return a;
        },
        ez: function () {
          return r;
        },
      });
      let r = { gwei: 9, wei: 18 },
        a = { ether: -9, wei: 9 },
        i = { ether: -18, gwei: -9 };
    },
    12795: function (t, e, n) {
      n.d(e, {
        U: function () {
          return a;
        },
      });
      var r = n(30393);
      class a extends r.G {
        constructor(t) {
          super(`Filter type "${t}" is not supported.`, {
            name: "FilterTypeNotSupportedError",
          });
        }
      }
    },
    8334: function (t, e, n) {
      n.d(e, {
        PM: function () {
          return c;
        },
        aq: function () {
          return o;
        },
        cT: function () {
          return i;
        },
        fr: function () {
          return s;
        },
      });
      var r = n(82399),
        a = n(30393);
      class i extends a.G {
        constructor({ domain: t }) {
          super(`Invalid domain "${(0, r.P)(t)}".`, {
            metaMessages: ["Must be a valid EIP-712 domain."],
          });
        }
      }
      class o extends a.G {
        constructor({ primaryType: t, types: e }) {
          super(
            `Invalid primary type \`${t}\` must be one of \`${JSON.stringify(
              Object.keys(e)
            )}\`.`,
            {
              docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
              metaMessages: [
                "Check that the primary type is a key in `types`.",
              ],
            }
          );
        }
      }
      class s extends a.G {
        constructor({ type: t }) {
          super(`Struct type "${t}" is invalid.`, {
            metaMessages: ["Struct type must not be a Solidity type."],
            name: "InvalidStructTypeError",
          });
        }
      }
      class c extends a.G {
        constructor({ type: t }) {
          super(`Type "${t}" is not a valid EIP-712 type.`, {
            metaMessages: [`Use "${t.replace(/^(u?int)/, "$&256")}" instead.`],
            name: "InvalidTypedDataTypeError",
          });
        }
      }
    },
    15365: function (t, e, n) {
      n.d(e, {
        O: function () {
          return d;
        },
      });
      var r = n(53355),
        a = n(12795),
        i = n(51083),
        o = n(60050),
        s = n(38072),
        c = n(53977),
        l = n(55353),
        u = n(11192);
      let f = "/docs/contract/encodeEventTopics";
      function d(t) {
        let { abi: e, eventName: n, args: a } = t,
          i = e[0];
        if (n) {
          let t = (0, u.mE)({ abi: e, name: n });
          if (!t) throw new r.mv(n, { docsPath: f });
          i = t;
        }
        if ("event" !== i.type) throw new r.mv(void 0, { docsPath: f });
        let o = [];
        if (a && "inputs" in i) {
          let t = i.inputs?.filter((t) => "indexed" in t && t.indexed),
            e = Array.isArray(a)
              ? a
              : Object.values(a).length > 0
              ? t?.map((t) => a[t.name]) ?? []
              : [];
          e.length > 0 &&
            (o =
              t?.map((t, n) =>
                Array.isArray(e[n])
                  ? e[n].map((r, a) => p({ param: t, value: e[n][a] }))
                  : void 0 !== e[n] && null !== e[n]
                  ? p({ param: t, value: e[n] })
                  : null
              ) ?? []);
        }
        if (i.anonymous) return o;
        let c = (0, l.t)(i);
        return [(0, s.n)(c), ...o];
      }
      function p({ param: t, value: e }) {
        if ("string" === t.type || "bytes" === t.type)
          return (0, o.w)((0, i.O0)(e));
        if ("tuple" === t.type || t.type.match(/^(.*)\[(\d+)?\]$/))
          throw new a.U(t.type);
        return (0, c.E)([t], [e]);
      }
    },
    4360: function (t, e, n) {
      n.d(e, {
        g: function () {
          return r;
        },
      });
      function r(t, { method: e }) {
        let n = {};
        return (
          "fallback" === t.transport.type &&
            t.transport.onResponse?.(
              ({ method: t, response: r, status: a, transport: i }) => {
                "success" === a && e === t && (n[r] = i.request);
              }
            ),
          (e) => n[e] || t.request
        );
      }
    },
    85765: function (t, e, n) {
      n.d(e, {
        N7: function () {
          return o;
        },
      });
      let r = new Map(),
        a = new Map(),
        i = 0;
      function o(t, e, n) {
        let o = ++i,
          s = () => r.get(t) || [],
          c = () => {
            let e = s().filter((t) => t.id !== o);
            if (0 === e.length) {
              r.delete(t), a.delete(t);
              return;
            }
            r.set(t, e);
          },
          l = () => {
            let e = s();
            if (!e.some((t) => t.id === o)) return;
            let n = a.get(t);
            if (1 === e.length && n) {
              let t = n();
              t instanceof Promise && t.catch(() => {});
            }
            c();
          },
          u = s();
        if ((r.set(t, [...u, { id: o, fns: e }]), u && u.length > 0)) return l;
        let f = {};
        for (let t in e)
          f[t] = (...e) => {
            let n = s();
            if (0 !== n.length) for (let r of n) r.fns[t]?.(...e);
          };
        let d = n(f);
        return "function" == typeof d && a.set(t, d), l;
      }
    },
    43682: function (t, e, n) {
      n.d(e, {
        $: function () {
          return a;
        },
      });
      var r = n(66329);
      function a(t, { emitOnBegin: e, initialWaitTime: n, interval: a }) {
        let i = !0,
          o = () => (i = !1);
        return (
          (async () => {
            let s;
            e && (s = await t({ unpoll: o }));
            let c = (await n?.(s)) ?? a;
            await (0, r.D)(c);
            let l = async () => {
              i && (await t({ unpoll: o }), await (0, r.D)(a), l());
            };
            l();
          })(),
          o
        );
      }
    },
    21304: function (t, e, n) {
      n.d(e, {
        DN: function () {
          return i;
        },
      });
      let r = new Map(),
        a = new Map();
      async function i(
        t,
        { cacheKey: e, cacheTime: n = Number.POSITIVE_INFINITY }
      ) {
        let i = (function (t) {
            let e = (t, e) => ({
                clear: () => e.delete(t),
                get: () => e.get(t),
                set: (n) => e.set(t, n),
              }),
              n = e(t, r),
              i = e(t, a);
            return {
              clear: () => {
                n.clear(), i.clear();
              },
              promise: n,
              response: i,
            };
          })(e),
          o = i.response.get();
        if (o && n > 0 && Date.now() - o.created.getTime() < n) return o.data;
        let s = i.promise.get();
        s || ((s = t()), i.promise.set(s));
        try {
          let t = await s;
          return i.response.set({ created: new Date(), data: t }), t;
        } finally {
          i.promise.clear();
        }
      }
    },
    21957: function (t, e, n) {
      n.d(e, {
        f: function () {
          return o;
        },
        h: function () {
          return i;
        },
      });
      var r = n(15800),
        a = n(26002);
      async function i(t) {
        let e = await (0, a.H)(t);
        return Object.assign(e.socket, {
          requests: e.requests,
          subscriptions: e.subscriptions,
        });
      }
      let o = {
        http: (t, e) => (0, r.x)(t).request(e),
        webSocket: function (t, { body: e, onError: n, onResponse: r }) {
          return t.request({ body: e, onError: n, onResponse: r }), t;
        },
        webSocketAsync: async function (t, { body: e, timeout: n = 1e4 }) {
          return t.requestAsync({ body: e, timeout: n });
        },
      };
    },
    26002: function (t, e, n) {
      n.d(e, {
        H: function () {
          return l;
        },
      });
      var r = n(60642),
        a = n(63080),
        i = n(75989),
        o = n(8512);
      let s = new Map();
      async function c(t) {
        let {
            getSocket: e,
            keepAlive: n = !0,
            key: c = "socket",
            reconnect: l = !0,
            url: u,
          } = t,
          { interval: f = 3e4 } = "object" == typeof n ? n : {},
          { attempts: d = 5, delay: p = 2e3 } = "object" == typeof l ? l : {},
          m = JSON.stringify({ keepAlive: n, key: c, url: u, reconnect: l }),
          y = s.get(m);
        if (y) return y;
        let b = 0,
          { schedule: g } = (0, a.S)({
            id: m,
            fn: async () => {
              let t, a, c, g;
              let h = new Map(),
                w = new Map(),
                v = !1,
                k = !1;
              function N() {
                l && !k && b < d
                  ? v ||
                    ((v = !0),
                    b++,
                    a?.close(),
                    (g = setTimeout(async () => {
                      if (((g = void 0), k)) {
                        v = !1;
                        return;
                      }
                      await T().catch(console.error), (v = !1);
                    }, p)))
                  : (h.clear(), w.clear());
              }
              async function T() {
                let i = await e({
                  onClose() {
                    for (let t of h.values()) t.onError?.(new r.Cc({ url: u }));
                    for (let t of w.values()) t.onError?.(new r.Cc({ url: u }));
                    N();
                  },
                  onError(e) {
                    for (let n of ((t = e), h.values())) n.onError?.(t);
                    for (let e of w.values()) e.onError?.(t);
                    N();
                  },
                  onOpen() {
                    (t = void 0), (b = 0);
                  },
                  onResponse(t) {
                    let e = "eth_subscription" === t.method,
                      n = e ? t.params.subscription : t.id,
                      r = e ? w : h,
                      a = r.get(n);
                    a && a.onResponse(t), e || r.delete(n);
                  },
                });
                if (k) return i.close(), i;
                if (
                  ((a = i),
                  n &&
                    (c && clearInterval(c),
                    (c = setInterval(() => a.ping?.(), f))),
                  l && w.size > 0)
                )
                  for (let [
                    t,
                    { onResponse: e, body: n, onError: r },
                  ] of w.entries())
                    n &&
                      (w.delete(t),
                      y?.request({ body: n, onResponse: e, onError: r }));
                return i;
              }
              return (
                await T(),
                (t = void 0),
                (y = {
                  close() {
                    (k = !0),
                      c && clearInterval(c),
                      g && (clearTimeout(g), (g = void 0), (v = !1)),
                      a.close(),
                      s.delete(m);
                  },
                  get socket() {
                    return a;
                  },
                  request({ body: e, onError: n, onResponse: r }) {
                    t && n && n(t);
                    let i = e.id ?? o.d.take(),
                      s = (t) => {
                        ("number" != typeof t.id || i === t.id) &&
                          ("eth_subscribe" === e.method &&
                            "string" == typeof t.result &&
                            w.set(t.result, {
                              onResponse: s,
                              onError: n,
                              body: e,
                            }),
                          r(t));
                      };
                    "eth_unsubscribe" === e.method && w.delete(e.params?.[0]),
                      h.set(i, { onResponse: s, onError: n });
                    try {
                      a.request({ body: { jsonrpc: "2.0", id: i, ...e } });
                    } catch (t) {
                      n?.(t);
                    }
                  },
                  requestAsync({ body: t, timeout: e = 1e4 }) {
                    return (0, i.F)(
                      () =>
                        new Promise((e, n) =>
                          this.request({ body: t, onError: n, onResponse: e })
                        ),
                      {
                        errorInstance: new r.W5({ body: t, url: u }),
                        timeout: e,
                      }
                    );
                  },
                  requests: h,
                  subscriptions: w,
                  url: u,
                }),
                s.set(m, y),
                [y]
              );
            },
          }),
          [h, [w]] = await g();
        return w;
      }
      async function l(t, e = {}) {
        let { keepAlive: a, reconnect: i } = e;
        return c({
          async getSocket({
            onClose: e,
            onError: a,
            onOpen: i,
            onResponse: o,
          }) {
            let s = await n
                .e(952)
                .then(n.bind(n, 952))
                .then((t) => t.WebSocket),
              c = new s(t);
            function l() {
              c.removeEventListener("close", l),
                c.removeEventListener("message", u),
                c.removeEventListener("error", a),
                c.removeEventListener("open", i),
                e();
            }
            function u({ data: t }) {
              if ("string" != typeof t || 0 !== t.trim().length)
                try {
                  let e = JSON.parse(t);
                  o(e);
                } catch (t) {
                  a(t);
                }
            }
            c.addEventListener("close", l),
              c.addEventListener("message", u),
              c.addEventListener("error", a),
              c.addEventListener("open", i),
              c.readyState === s.CONNECTING &&
                (await new Promise((t, e) => {
                  c && ((c.onopen = t), (c.onerror = e));
                }));
            let { close: f } = c;
            return Object.assign(c, {
              close() {
                f.bind(c)(), l();
              },
              ping() {
                try {
                  if (c.readyState === c.CLOSED || c.readyState === c.CLOSING)
                    throw new r.c9({
                      url: c.url,
                      cause: new r.Cc({ url: c.url }),
                    });
                  c.send(
                    JSON.stringify({
                      jsonrpc: "2.0",
                      id: null,
                      method: "net_version",
                      params: [],
                    })
                  );
                } catch (t) {
                  a(t);
                }
              },
              request({ body: t }) {
                if (c.readyState === c.CLOSED || c.readyState === c.CLOSING)
                  throw new r.c9({
                    body: t,
                    url: c.url,
                    cause: new r.Cc({ url: c.url }),
                  });
                return c.send(JSON.stringify(t));
              },
            });
          },
          keepAlive: a,
          reconnect: i,
          url: t,
        });
      }
    },
    84584: function (t, e, n) {
      n.d(e, {
        r: function () {
          return i;
        },
      });
      var r = n(60050),
        a = n(74194);
      function i(t, e) {
        return (0, r.w)((0, a.B)(t), e);
      }
    },
    3: function (t, e, n) {
      n.d(e, {
        Jv: function () {
          return c;
        },
        og: function () {
          return l;
        },
        uM: function () {
          return u;
        },
      });
      var r = n(53977),
        a = n(83967),
        i = n(78842),
        o = n(60050),
        s = n(32772);
      function c(t) {
        let { domain: e = {}, message: n, primaryType: r } = t,
          i = { EIP712Domain: (0, s.cj)({ domain: e }), ...t.types };
        (0, s.iC)({ domain: e, message: n, primaryType: r, types: i });
        let c = ["0x1901"];
        return (
          e && c.push(l({ domain: e, types: i })),
          "EIP712Domain" !== r &&
            c.push(u({ data: n, primaryType: r, types: i })),
          (0, o.w)((0, a.zo)(c))
        );
      }
      function l({ domain: t, types: e }) {
        return u({ data: t, primaryType: "EIP712Domain", types: e });
      }
      function u({ data: t, primaryType: e, types: n }) {
        let a = (function t({ data: e, primaryType: n, types: a }) {
          let s = [{ type: "bytes32" }],
            c = [
              (function ({ primaryType: t, types: e }) {
                let n = (0, i.NC)(
                  (function ({ primaryType: t, types: e }) {
                    let n = "",
                      r = (function t(
                        { primaryType: e, types: n },
                        r = new Set()
                      ) {
                        let a = e.match(/^\w*/u),
                          i = a?.[0];
                        if (r.has(i) || void 0 === n[i]) return r;
                        for (let e of (r.add(i), n[i]))
                          t({ primaryType: e.type, types: n }, r);
                        return r;
                      })({ primaryType: t, types: e });
                    for (let a of (r.delete(t), [t, ...Array.from(r).sort()]))
                      n += `${a}(${e[a]
                        .map(({ name: t, type: e }) => `${e} ${t}`)
                        .join(",")})`;
                    return n;
                  })({ primaryType: t, types: e })
                );
                return (0, o.w)(n);
              })({ primaryType: n, types: a }),
            ];
          for (let l of a[n]) {
            let [n, u] = (function e({ types: n, name: a, type: s, value: c }) {
              if (void 0 !== n[s])
                return [
                  { type: "bytes32" },
                  (0, o.w)(t({ data: c, primaryType: s, types: n })),
                ];
              if ("bytes" === s) return [{ type: "bytes32" }, (0, o.w)(c)];
              if ("string" === s)
                return [{ type: "bytes32" }, (0, o.w)((0, i.NC)(c))];
              if (s.lastIndexOf("]") === s.length - 1) {
                let t = s.slice(0, s.lastIndexOf("[")),
                  i = c.map((r) => e({ name: a, type: t, types: n, value: r }));
                return [
                  { type: "bytes32" },
                  (0, o.w)(
                    (0, r.E)(
                      i.map(([t]) => t),
                      i.map(([, t]) => t)
                    )
                  ),
                ];
              }
              return [{ type: s }, c];
            })({ types: a, name: l.name, type: l.type, value: e[l.name] });
            s.push(n), c.push(u);
          }
          return (0, r.E)(s, c);
        })({ data: t, primaryType: e, types: n });
        return (0, o.w)(a);
      }
    },
    74194: function (t, e, n) {
      n.d(e, {
        B: function () {
          return s;
        },
      });
      var r = n(70650),
        a = n(83967),
        i = n(50321),
        o = n(78842);
      function s(t) {
        let e =
            "string" == typeof t
              ? (0, o.$G)(t)
              : "string" == typeof t.raw
              ? t.raw
              : (0, o.ci)(t.raw),
          n = (0, o.$G)(`${r.k}${(0, i.d)(e)}`);
        return (0, a.zo)([n, e]);
      }
    },
    32772: function (t, e, n) {
      n.d(e, {
        H6: function () {
          return d;
        },
        Xp: function () {
          return y;
        },
        cj: function () {
          return m;
        },
        iC: function () {
          return p;
        },
      });
      var r = n(53355),
        a = n(26361),
        i = n(8334),
        o = n(75030),
        s = n(50321),
        c = n(78842),
        l = n(54950),
        u = n(3),
        f = n(82399);
      function d(t) {
        let { domain: e, message: n, primaryType: r, types: a } = t,
          i = (t, e) => {
            let n = { ...e };
            for (let e of t) {
              let { name: t, type: r } = e;
              "address" === r && (n[t] = n[t].toLowerCase());
            }
            return n;
          },
          o = a.EIP712Domain && e ? i(a.EIP712Domain, e) : {},
          s = (() => {
            if ("EIP712Domain" !== r) return i(a[r], n);
          })();
        return (0, f.P)({ domain: o, message: s, primaryType: r, types: a });
      }
      function p(t) {
        let { domain: e, message: n, primaryType: u, types: f } = t,
          d = (t, e) => {
            for (let n of t) {
              let { name: t, type: u } = n,
                p = e[t],
                m = u.replace(/(\[[0-9]*\])+$/, "");
              if ("int" === m || "uint" === m) throw new i.PM({ type: u });
              let y = u.match(l.lh);
              if (y && ("number" == typeof p || "bigint" == typeof p)) {
                let [t, e, n] = y;
                (0, c.eC)(p, {
                  signed: "int" === e,
                  size: Number.parseInt(n, 10) / 8,
                });
              }
              if ("address" === u && "string" == typeof p && !(0, o.U)(p))
                throw new a.b({ address: p });
              let b = u.match(l.eL);
              if (b) {
                let [t, e] = b;
                if (e && (0, s.d)(p) !== Number.parseInt(e, 10))
                  throw new r.KY({
                    expectedSize: Number.parseInt(e, 10),
                    givenSize: (0, s.d)(p),
                  });
              }
              let g = f[u];
              g &&
                ((function (t) {
                  if (
                    "address" === t ||
                    "bool" === t ||
                    "string" === t ||
                    t.startsWith("bytes") ||
                    t.startsWith("uint") ||
                    t.startsWith("int")
                  )
                    throw new i.fr({ type: t });
                })(u),
                d(g, p));
            }
          };
        if (f.EIP712Domain && e) {
          if ("object" != typeof e) throw new i.cT({ domain: e });
          d(f.EIP712Domain, e);
        }
        if ("EIP712Domain" !== u) {
          if (f[u]) d(f[u], n);
          else throw new i.aq({ primaryType: u, types: f });
        }
      }
      function m({ domain: t }) {
        return [
          "string" == typeof t?.name && { name: "name", type: "string" },
          t?.version && { name: "version", type: "string" },
          ("number" == typeof t?.chainId || "bigint" == typeof t?.chainId) && {
            name: "chainId",
            type: "uint256",
          },
          t?.verifyingContract && {
            name: "verifyingContract",
            type: "address",
          },
          t?.salt && { name: "salt", type: "bytes32" },
        ].filter(Boolean);
      }
      function y({ domain: t }) {
        return (0, u.og)({
          domain: t,
          types: { EIP712Domain: m({ domain: t }) },
        });
      }
    },
    46103: function (t, e, n) {
      n.d(e, {
        v: function () {
          return a;
        },
      });
      var r = n(28874);
      function a(t, e) {
        return r.Dp(t, e);
      }
    },
  },
]);
