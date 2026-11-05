(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6191],
  {
    6456: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 9428)),
        Promise.resolve().then(n.bind(n, 35110)),
        Promise.resolve().then(n.bind(n, 93773)),
        Promise.resolve().then(n.t.bind(n, 37626, 23));
    },
    9428: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return u;
        },
      });
      var r = n(92483),
        i = n(64871);
      function o(e, t) {
        let n = new Date(),
          r = n.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
        if ("mac" === t) {
          e.textContent = ""
            .concat(n.toLocaleDateString([], { weekday: "short" }), " ")
            .concat(r);
          return;
        }
        (e.children[0].textContent = r),
          (e.children[1].textContent = n.toLocaleDateString());
      }
      function u(e) {
        let { os: t } = e,
          n = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            if (!n.current) return;
            let e = n.current;
            o(e, t);
            let r = window.setInterval(() => o(e, t), 15e3);
            return () => window.clearInterval(r);
          }, [t]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              "mac" === t
                ? (0, r.jsx)("span", {
                    ref: n,
                    suppressHydrationWarning: !0,
                    children: "Sat 10:42 AM",
                  })
                : (0, r.jsxs)("span", {
                    ref: n,
                    className: "aa-taskbar-clock",
                    children: [
                      (0, r.jsx)("span", {
                        suppressHydrationWarning: !0,
                        children: "10:42 AM",
                      }),
                      (0, r.jsx)("span", {
                        suppressHydrationWarning: !0,
                        children: "10/24/2026",
                      }),
                    ],
                  }),
              (0, r.jsx)("script", {
                suppressHydrationWarning: !0,
                dangerouslySetInnerHTML: {
                  __html: "("
                    .concat(
                      o.toString(),
                      ')(document.currentScript.previousElementSibling,"'
                    )
                    .concat(t, '")'),
                },
              }),
            ],
          })
        );
      }
    },
    35110: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return o;
        },
      });
      var r = n(92483),
        i = n(64871);
      function o(e) {
        let { url: t } = e,
          [n, o] = (0, i.useState)("send"),
          u = async () => {
            if (navigator.share)
              try {
                await navigator.share({ title: "IMD Agents", url: t });
                return;
              } catch (e) {
                if (e instanceof DOMException && "AbortError" === e.name)
                  return;
              }
            try {
              await navigator.clipboard.writeText(t),
                o("copied"),
                window.setTimeout(() => o("send"), 1600);
            } catch (e) {
              o("failed");
            }
          };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("button", {
              type: "button",
              className: "agents-app-get aa-send",
              onClick: u,
              children: (0, r.jsx)("span", {
                "aria-live": "polite",
                children: "copied" === n ? "Link copied" : "Send me the link",
              }),
            }),
            "failed" === n &&
              (0, r.jsx)("p", {
                className: "aa-send-link",
                children: t.replace(/^https:\/\//, ""),
              }),
          ],
        });
      }
    },
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
              function o() {
                throw Error("setTimeout has not been defined");
              }
              function u() {
                throw Error("clearTimeout has not been defined");
              }
              function a(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === o || !t) && setTimeout)
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
                  t = "function" == typeof setTimeout ? setTimeout : o;
                } catch (e) {
                  t = o;
                }
                try {
                  n = "function" == typeof clearTimeout ? clearTimeout : u;
                } catch (e) {
                  n = u;
                }
              })();
              var s = [],
                l = !1,
                c = -1;
              function f() {
                l &&
                  r &&
                  ((l = !1),
                  r.length ? (s = r.concat(s)) : (c = -1),
                  s.length && d());
              }
              function d() {
                if (!l) {
                  var e = a(f);
                  l = !0;
                  for (var t = s.length; t; ) {
                    for (r = s, s = []; ++c < t; ) r && r[c].run();
                    (c = -1), (t = s.length);
                  }
                  (r = null),
                    (l = !1),
                    (function (e) {
                      if (n === clearTimeout) return clearTimeout(e);
                      if ((n === u || !n) && clearTimeout)
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
              function h() {}
              (i.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                s.push(new p(e, t)), 1 !== s.length || l || a(d);
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
                (i.on = h),
                (i.addListener = h),
                (i.once = h),
                (i.off = h),
                (i.removeListener = h),
                (i.removeAllListeners = h),
                (i.emit = h),
                (i.prependListener = h),
                (i.prependOnceListener = h),
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
          var o = (n[e] = { exports: {} }),
            u = !0;
          try {
            t[e](o, o.exports, r), (u = !1);
          } finally {
            u && delete n[e];
          }
          return o.exports;
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
            return o;
          },
        });
      let r = n(46986);
      n(92483), n(64871);
      let i = r._(n(31715));
      function o(e, t) {
        var n;
        let r = {
          loading: (e) => {
            let { error: t, isLoading: n, pastDelay: r } = e;
            return null;
          },
        };
        "function" == typeof e && (r.loader = e);
        let o = { ...r, ...t };
        return (0, i.default)({
          ...o,
          modules: null == (n = o.loadableGenerated) ? void 0 : n.modules,
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
        o = n(69102),
        u = n(60253);
      function a(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      let s = {
          loader: () => Promise.resolve(a(() => null)),
          loading: null,
          ssr: !0,
        },
        l = function (e) {
          let t = { ...s, ...e },
            n = (0, i.lazy)(() => t.loader().then(a)),
            l = t.loading;
          function c(e) {
            let a = l
                ? (0, r.jsx)(l, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              s = t.ssr
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      "undefined" == typeof window
                        ? (0, r.jsx)(u.PreloadCss, { moduleIds: t.modules })
                        : null,
                      (0, r.jsx)(n, { ...e }),
                    ],
                  })
                : (0, r.jsx)(o.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, r.jsx)(n, { ...e }),
                  });
            return (0, r.jsx)(i.Suspense, { fallback: a, children: s });
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
            return o;
          },
        });
      let r = n(92483),
        i = n(85694);
      function o(e) {
        let { moduleIds: t } = e;
        if ("undefined" != typeof window) return null;
        let n = (0, i.getExpectedRequestStore)("next/dynamic css"),
          o = [];
        if (n.reactLoadableManifest && t) {
          let e = n.reactLoadableManifest;
          for (let n of t) {
            if (!e[n]) continue;
            let t = e[n].files.filter((e) => e.endsWith(".css"));
            o.push(...t);
          }
        }
        return 0 === o.length
          ? null
          : (0, r.jsx)(r.Fragment, {
              children: o.map((e) =>
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
  },
  function (e) {
    e.O(0, [7626, 3773, 9036, 8716, 1744], function () {
      return e((e.s = 6456));
    }),
      (_N_E = e.O());
  },
]);
