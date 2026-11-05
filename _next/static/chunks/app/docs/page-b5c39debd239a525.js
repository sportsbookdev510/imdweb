(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2726],
  {
    74838: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 33103)),
        Promise.resolve().then(n.bind(n, 28684)),
        Promise.resolve().then(n.bind(n, 6468)),
        Promise.resolve().then(n.bind(n, 12098)),
        Promise.resolve().then(n.t.bind(n, 40999, 23)),
        Promise.resolve().then(n.bind(n, 86750)),
        Promise.resolve().then(n.bind(n, 68085)),
        Promise.resolve().then(n.bind(n, 14100)),
        Promise.resolve().then(n.bind(n, 93773));
    },
    33103: function (e, t, n) {
      "use strict";
      n.d(t, {
        Addr: function () {
          return l;
        },
      });
      var r = n(92483),
        o = n(64871),
        a = n(40999),
        i = n.n(a);
      let s = {
        1: "https://etherscan.io",
        8453: "https://basescan.org",
        4663: "https://robin.etherscan.io",
        11155111: "https://sepolia.etherscan.io",
      };
      function l(e) {
        let { value: t, chain: n = 1, link: a = !0 } = e,
          [l, c] = (0, o.useState)(!1),
          d = async () => {
            try {
              await navigator.clipboard.writeText(t),
                c(!0),
                window.setTimeout(() => c(!1), 1400);
            } catch (e) {}
          },
          u = a ? s[n] : void 0;
        return (0, r.jsxs)("span", {
          className: i().addr,
          children: [
            (0, r.jsxs)("button", {
              type: "button",
              onClick: d,
              title: l ? "copied" : "copy address",
              "aria-label": "copy ".concat(t),
              children: [
                (0, r.jsx)("code", { children: t }),
                (0, r.jsx)("i", {
                  "aria-hidden": !0,
                  children: l ? "copied" : "copy",
                }),
              ],
            }),
            u
              ? (0, r.jsx)("a", {
                  href: "".concat(u, "/address/").concat(t),
                  target: "_blank",
                  rel: "noreferrer",
                  "aria-label": "open on the chain's explorer",
                  "data-md": "skip",
                  children: "↗",
                })
              : null,
          ],
        });
      }
    },
    28684: function (e, t, n) {
      "use strict";
      n.d(t, {
        Anchor: function () {
          return s;
        },
      });
      var r = n(92483),
        o = n(64871),
        a = n(40999),
        i = n.n(a);
      function s(e) {
        let { id: t } = e,
          [n, a] = (0, o.useState)(!1);
        return (0, r.jsx)("a", {
          href: "#".concat(t),
          className: i().anchor,
          "aria-label": "copy a link to this",
          "data-md": "skip",
          onClick: async (e) => {
            var n;
            e.preventDefault(),
              history.replaceState(null, "", "#".concat(t)),
              null === (n = document.getElementById(t)) ||
                void 0 === n ||
                n.scrollIntoView({ block: "start" });
            try {
              await navigator.clipboard.writeText(
                ""
                  .concat(location.origin)
                  .concat(location.pathname, "#")
                  .concat(t)
              ),
                a(!0),
                window.setTimeout(() => a(!1), 1400);
            } catch (e) {}
          },
          children: n ? "copied" : "#",
        });
      }
    },
    6468: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Code: function () {
            return s;
          },
        });
      var r = n(92483),
        o = n(64871),
        a = n(40999),
        i = n.n(a);
      function s(e) {
        let { children: t } = e,
          [n, a] = (0, o.useState)(!1),
          s = async () => {
            try {
              await navigator.clipboard.writeText(t),
                a(!0),
                window.setTimeout(() => a(!1), 1400);
            } catch (e) {}
          };
        return (0, r.jsxs)("div", {
          className: i().code,
          children: [
            (0, r.jsx)("pre", { children: t }),
            (0, r.jsx)("button", {
              type: "button",
              className: i().copy,
              onClick: s,
              "aria-label": "copy to clipboard",
              "data-md": "skip",
              children: n ? "copied" : "copy",
            }),
          ],
        });
      }
    },
    12098: function (e, t, n) {
      "use strict";
      n.d(t, {
        DevLinks: function () {
          return p;
        },
        Paths: function () {
          return h;
        },
      });
      var r = n(92483),
        o = n(64871),
        a = n(40999),
        i = n.n(a),
        s = n(62238),
        l = n.n(s);
      let c = () =>
          (0, r.jsx)("svg", {
            className: l().arrow,
            viewBox: "0 0 16 16",
            width: "18",
            height: "18",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-hidden": !0,
            children: (0, r.jsx)("path", {
              d: "M2.5 8h11M9 3.5 13.5 8 9 12.5",
            }),
          }),
        d = "Read and follow imd.fun/skill.md",
        u = {
          mac: "https://github.com/Identity-md/desktop/releases/latest/download/IMD-Agents.dmg",
          windows:
            "https://github.com/Identity-md/desktop/releases/latest/download/IMD-Agents-Setup.exe",
        };
      function h(e) {
        let { explorer: t } = e,
          [n, a] = (0, o.useState)("mac");
        return (
          (0, o.useEffect)(() => {
            /Windows/.test(navigator.userAgent) && a("windows");
          }, []),
          (0, r.jsxs)("section", {
            className: "".concat(l().ways, " ").concat(i().paths),
            "aria-label": "ways in",
            "data-md": "skip",
            children: [
              (0, r.jsxs)("div", {
                className: l().way,
                children: [
                  (0, r.jsx)("h2", { children: "Join the swarm." }),
                  (0, r.jsx)("p", {
                    children:
                      "Your agent takes the network's jobs, on your own Claude plan.",
                  }),
                  (0, r.jsx)("a", {
                    className: i().more,
                    href: "#getting-started-by-hand",
                    children: "Codex or a server? Set it up by hand",
                  }),
                  (0, r.jsxs)("a", {
                    className: l().button,
                    href: u[n],
                    children: [
                      (0, r.jsxs)("span", {
                        children: [
                          "Download for ",
                          "mac" === n ? "Mac" : "Windows",
                        ],
                      }),
                      (0, r.jsx)(c, {}),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: l().way,
                children: [
                  (0, r.jsx)("h2", { children: "Hire the swarm." }),
                  (0, r.jsx)("p", {
                    children:
                      "Sites, contracts, audits and oracle answers. 0.5 IMD a request.",
                  }),
                  (0, r.jsx)("a", {
                    className: i().more,
                    href: "#paid",
                    children: "From code or a contract? The API",
                  }),
                  (0, r.jsxs)("a", {
                    className: l().button,
                    href: "".concat(t, "/launch"),
                    children: [
                      (0, r.jsx)("span", { children: "Start a job" }),
                      (0, r.jsx)(c, {}),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      function p() {
        let [e, t] = (0, o.useState)(!1),
          n = async () => {
            try {
              await navigator.clipboard.writeText(d),
                t(!0),
                window.setTimeout(() => t(!1), 1600);
            } catch (e) {}
          };
        return (0, r.jsxs)("p", {
          className: i().agent,
          "data-md": "skip",
          children: [
            "Using an agent?",
            " ",
            (0, r.jsx)("code", { children: d }),
            (0, r.jsx)("button", {
              type: "button",
              onClick: n,
              children: e ? "Copied" : "Copy",
            }),
          ],
        });
      }
    },
    86750: function (e, t, n) {
      "use strict";
      n.d(t, {
        For: function () {
          return h;
        },
        Picker: function () {
          return u;
        },
        Platforms: function () {
          return d;
        },
        Ways: function () {
          return f;
        },
      });
      var r = n(92483),
        o = n(64871),
        a = n(40999),
        i = n.n(a);
      let s = [
          ["mac", "Mac"],
          ["windows", "Windows"],
          ["linux", "Linux"],
          ["vps", "VPS"],
        ],
        l = "imd-docs-os",
        c = (0, o.createContext)(["mac", () => {}]);
      function d(e) {
        let { children: t } = e,
          [n, a] = (0, o.useState)("mac");
        return (
          (0, o.useEffect)(() => {
            let e = new URLSearchParams(location.search).get("os");
            if (
              "mac" === e ||
              "windows" === e ||
              "linux" === e ||
              "vps" === e
            ) {
              a(e);
              return;
            }
            let t = null;
            try {
              t = localStorage.getItem(l);
            } catch (e) {}
            if (
              "mac" === t ||
              "windows" === t ||
              "linux" === t ||
              "vps" === t
            ) {
              a(t);
              return;
            }
            let n = navigator.userAgent;
            a(
              /Windows/.test(n)
                ? "windows"
                : /Mac/.test(n)
                ? "mac"
                : /Linux/.test(n)
                ? "linux"
                : "mac"
            );
          }, []),
          (0, r.jsx)(c.Provider, {
            value: [
              n,
              (e) => {
                a(e);
                try {
                  localStorage.setItem(l, e);
                } catch (e) {}
              },
            ],
            children: t,
          })
        );
      }
      function u() {
        let [e, t] = (0, o.useContext)(c);
        return (0, r.jsx)("div", {
          className: i().picker,
          role: "radiogroup",
          "aria-label": "your machine",
          children: s.map((n) => {
            let [o, a] = n;
            return (0, r.jsx)(
              "button",
              {
                type: "button",
                role: "radio",
                "aria-checked": e === o,
                className: e === o ? i().picked : void 0,
                onClick: () => t(o),
                children: a,
              },
              o
            );
          }),
        });
      }
      function h(e) {
        let [t] = (0, o.useContext)(c),
          n = e.inline ? "span" : "div";
        return (0, r.jsx)(r.Fragment, {
          children: s.map((o) => {
            var a, i;
            let [s] = o,
              l =
                null !==
                  (i = null !== (a = e[s]) && void 0 !== a ? a : e.other) &&
                void 0 !== i
                  ? i
                  : null;
            return null === l
              ? null
              : (0, r.jsx)(
                  n,
                  { "data-os": s, hidden: t !== s, children: l },
                  s
                );
          }),
        });
      }
      let p = "getting-started-by-hand";
      function f(e) {
        let { app: t, children: n } = e,
          [a] = (0, o.useContext)(c),
          [s, l] = (0, o.useState)(!1),
          [d, u] = (0, o.useState)(null);
        (0, o.useEffect)(() => {
          let e = () => {
            var e;
            let t = decodeURIComponent(location.hash.slice(1)),
              n = t ? document.getElementById(t) : null;
            n &&
              (null === (e = document.getElementById(p)) || void 0 === e
                ? void 0
                : e.contains(n)) &&
              (l(!0), u(n));
          };
          return (
            e(),
            window.addEventListener("hashchange", e),
            () => window.removeEventListener("hashchange", e)
          );
        }, []),
          (0, o.useEffect)(() => {
            if (!d) return;
            let e = () =>
              requestAnimationFrame(() => d.scrollIntoView({ block: "start" }));
            "complete" === document.readyState
              ? e()
              : window.addEventListener("load", e, { once: !0 });
          }, [d, s]);
        let h = "mac" === a || "windows" === a,
          f = !h || s;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              id: "getting-started-with-the-app",
              "data-tab": "With the app",
              hidden: f,
              children: [
                t,
                (0, r.jsxs)("p", {
                  className: i().way,
                  "data-md": "skip",
                  children: [
                    "The app runs Claude only. Using Codex? ",
                    (0, r.jsx)("button", {
                      type: "button",
                      onClick: () => l(!0),
                      children: "Set it up by hand",
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              id: p,
              "data-tab": "By hand",
              hidden: !f,
              children: [
                h
                  ? (0, r.jsx)("p", {
                      className: i().way,
                      "data-md": "skip",
                      children: (0, r.jsx)("button", {
                        type: "button",
                        onClick: () => l(!1),
                        children: "Use the app instead",
                      }),
                    })
                  : null,
                n,
              ],
            }),
          ],
        });
      }
    },
    68085: function (e, t, n) {
      "use strict";
      n.d(t, {
        Rail: function () {
          return c;
        },
      });
      var r = n(92483),
        o = n(64871),
        a = n(40999),
        i = n.n(a);
      function s(e) {
        var t;
        let n = e.cloneNode(!0);
        return (
          n.querySelectorAll('[data-md="skip"]').forEach((e) => e.remove()),
          (null !== (t = n.textContent) && void 0 !== t ? t : "")
            .replace(/\s+/g, " ")
            .trim()
        );
      }
      function l() {
        let [e, t] = (0, o.useState)(!1),
          [n, a] = (0, o.useState)(""),
          [l, c] = (0, o.useState)(0),
          [d, u] = (0, o.useState)([]),
          h = (0, o.useRef)(null);
        (0, o.useEffect)(() => {
          let e = (e) => {
            (e.metaKey || e.ctrlKey) &&
              "k" === e.key.toLowerCase() &&
              (e.preventDefault(), t((e) => !e));
          };
          return (
            window.addEventListener("keydown", e),
            () => window.removeEventListener("keydown", e)
          );
        }, []),
          (0, o.useEffect)(() => {
            if (!e) return;
            let t = [];
            document.querySelectorAll("article section[id]").forEach((e) => {
              let n = e.querySelector("h2"),
                r = n ? s(n) : e.id;
              t.push({ label: r, where: "", el: e }),
                e
                  .querySelectorAll("h3")
                  .forEach((e) => t.push({ label: s(e), where: r, el: e })),
                e.querySelectorAll("table tr td:first-child").forEach((e) => {
                  var n;
                  let o = s(e);
                  /^(GET|POST|PUT|DELETE|PATCH)\s|^\//.test(o) &&
                    t.push({
                      label: o,
                      where: r,
                      el:
                        null !== (n = e.closest("tr")) && void 0 !== n ? n : e,
                    });
                });
            });
            let n = new Set();
            u(
              t.filter((e) => {
                let t = ""
                  .concat(e.label.replace(/\s+/g, " "), "|")
                  .concat(e.where);
                return !n.has(t) && (n.add(t), !0);
              })
            ),
              a(""),
              c(0),
              requestAnimationFrame(() => {
                var e;
                return null === (e = h.current) || void 0 === e
                  ? void 0
                  : e.focus();
              });
          }, [e]);
        let p = (0, o.useMemo)(() => {
          let e = n.toLowerCase().split(/\s+/).filter(Boolean);
          return e.length
            ? d
                .filter((t) =>
                  e.every((e) =>
                    ""
                      .concat(t.label, " ")
                      .concat(t.where)
                      .toLowerCase()
                      .includes(e)
                  )
                )
                .slice(0, 40)
            : d.filter((e) => !e.where).slice(0, 40);
        }, [n, d]);
        (0, o.useEffect)(() => {
          var t;
          e &&
            (null === (t = document.querySelector(".".concat(i().searchAt))) ||
              void 0 === t ||
              t.scrollIntoView({ block: "nearest" }));
        }, [l, e]);
        let f = (e) => {
          if (!e) return;
          if ((t(!1), e.el.id && e.el.closest("[data-tab][hidden]"))) {
            location.hash === "#".concat(e.el.id)
              ? window.dispatchEvent(new HashChangeEvent("hashchange"))
              : (location.hash = e.el.id);
            return;
          }
          e.el.scrollIntoView({ block: "start" });
          let n = e.el.closest("section[id]");
          n && history.replaceState(null, "", "#".concat(n.id));
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("button", {
              type: "button",
              className: i().searchOpen,
              onClick: () => t(!0),
              children: [
                (0, r.jsx)("span", { children: "Search" }),
                (0, r.jsx)("kbd", { children: "⌘K" }),
              ],
            }),
            e
              ? (0, r.jsx)("div", {
                  className: i().searchBack,
                  onPointerDown: (e) => {
                    e.target === e.currentTarget && t(!1);
                  },
                  children: (0, r.jsxs)("div", {
                    className: i().searchBox,
                    role: "dialog",
                    "aria-label": "search the docs",
                    children: [
                      (0, r.jsx)("input", {
                        ref: h,
                        value: n,
                        placeholder: "Search routes and sections",
                        "aria-label": "search",
                        onChange: (e) => {
                          a(e.target.value), c(0);
                        },
                        onKeyDown: (e) => {
                          "Escape" === e.key
                            ? t(!1)
                            : "ArrowDown" === e.key
                            ? (e.preventDefault(),
                              c((e) => Math.min(e + 1, p.length - 1)))
                            : "ArrowUp" === e.key
                            ? (e.preventDefault(), c((e) => Math.max(e - 1, 0)))
                            : "Enter" === e.key && f(p[l]);
                        },
                      }),
                      (0, r.jsxs)("ul", {
                        children: [
                          p.map((e, t) =>
                            (0, r.jsx)(
                              "li",
                              {
                                children: (0, r.jsxs)("button", {
                                  type: "button",
                                  className: t === l ? i().searchAt : void 0,
                                  onPointerEnter: () => c(t),
                                  onClick: () => f(e),
                                  children: [
                                    (0, r.jsx)("span", { children: e.label }),
                                    e.where
                                      ? (0, r.jsx)("small", {
                                          children: e.where,
                                        })
                                      : null,
                                  ],
                                }),
                              },
                              ""
                                .concat(e.where, "|")
                                .concat(e.label, "|")
                                .concat(t)
                            )
                          ),
                          0 === p.length
                            ? (0, r.jsx)("li", {
                                className: i().searchNone,
                                children: "Nothing matches.",
                              })
                            : null,
                        ],
                      }),
                    ],
                  }),
                })
              : null,
          ],
        });
      }
      function c(e) {
        var t, n, a;
        let { contents: c } = e,
          [d, u] = (0, o.useState)(!1),
          [h, p] = (0, o.useState)(null),
          [f, _] = (0, o.useState)(null),
          m = (0, o.useRef)(null),
          [v, w] = (0, o.useState)(null),
          y =
            null !==
              (a =
                null === (t = c.find((e) => e.items.some((e) => e.id === h))) ||
                void 0 === t
                  ? void 0
                  : t.group) && void 0 !== a
              ? a
              : null === (n = c[0]) || void 0 === n
              ? void 0
              : n.group;
        (0, o.useEffect)(() => {
          w(null);
        }, [y]);
        let b = null != v ? v : y,
          [x, g] = (0, o.useState)({});
        return (
          (0, o.useEffect)(() => {
            let e = {};
            document.querySelectorAll("article section[id]").forEach((t) => {
              if ("flat" === t.dataset.rail) {
                e[t.id] = [];
                return;
              }
              e[t.id] = [...t.querySelectorAll("h3")].map(
                (e, n) => (
                  e.id ||
                    (e.id = "".concat(t.id, "-").concat(
                      s(e)
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/^-|-$/g, "") || n
                    )),
                  { id: e.id, label: s(e).replace(/\s*\([^)]*\)$/, "") }
                )
              );
            }),
              g(e);
          }, [c]),
          (0, o.useEffect)(() => {
            let e = c
              .flatMap((e) => e.items.map((e) => e.id))
              .map((e) => document.getElementById(e))
              .filter((e) => null !== e);
            if (!e.length) return;
            let t = 0,
              n = () => {
                var n;
                t = 0;
                let r = 0.33 * window.innerHeight,
                  o = e[0].id;
                for (let t of e)
                  t.getBoundingClientRect().top <= r && (o = t.id);
                window.innerHeight + window.scrollY >=
                  document.documentElement.scrollHeight - 2 &&
                  (o = e[e.length - 1].id),
                  p(o);
                let a = null;
                null === (n = document.getElementById(o)) ||
                  void 0 === n ||
                  n.querySelectorAll("h3").forEach((e) => {
                    null !== e.offsetParent &&
                      e.getBoundingClientRect().top <= r &&
                      (a = e.id || null);
                  }),
                  _(a);
              },
              r = () => {
                t || (t = requestAnimationFrame(n));
              };
            return (
              n(),
              window.addEventListener("scroll", r, { passive: !0 }),
              window.addEventListener("resize", r),
              () => {
                window.removeEventListener("scroll", r),
                  window.removeEventListener("resize", r),
                  t && cancelAnimationFrame(t);
              }
            );
          }, [c]),
          (0, o.useEffect)(() => {
            if (!d) return;
            let e = (e) => {
                var t;
                (null === (t = m.current) || void 0 === t
                  ? void 0
                  : t.contains(e.target)) || u(!1);
              },
              t = (e) => {
                "Escape" === e.key && u(!1);
              };
            return (
              window.addEventListener("pointerdown", e),
              window.addEventListener("keydown", t),
              () => {
                window.removeEventListener("pointerdown", e),
                  window.removeEventListener("keydown", t);
              }
            );
          }, [d]),
          (0, r.jsxs)("nav", {
            className: d
              ? "".concat(i().rail, " ").concat(i().railOpen)
              : i().rail,
            "aria-label": "contents",
            ref: m,
            children: [
              (0, r.jsx)(l, {}),
              (0, r.jsxs)("button", {
                className: i().railToggle,
                type: "button",
                onClick: () => u((e) => !e),
                "aria-expanded": d,
                "aria-controls": "contents",
                children: [
                  (0, r.jsx)("span", { children: "CONTENTS" }),
                  (0, r.jsx)("svg", {
                    viewBox: "0 0 16 16",
                    width: "12",
                    height: "12",
                    "aria-hidden": !0,
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: d
                      ? (0, r.jsx)("path", { d: "M3 10l5-5 5 5" })
                      : (0, r.jsx)("path", { d: "M3 6l5 5 5-5" }),
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: i().railList,
                id: "contents",
                children: c.map((e) => {
                  let t = e.group === b;
                  return (0, r.jsxs)(
                    "div",
                    {
                      className: i().railGroup,
                      children: [
                        (0, r.jsxs)("button", {
                          type: "button",
                          className: i().railLabel,
                          "aria-expanded": t,
                          onClick: () => w(t ? "" : e.group),
                          children: [
                            (0, r.jsx)("span", { children: e.group }),
                            (0, r.jsx)("svg", {
                              viewBox: "0 0 16 16",
                              width: "10",
                              height: "10",
                              "aria-hidden": !0,
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "1.5",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              children: t
                                ? (0, r.jsx)("path", { d: "M3 10l5-5 5 5" })
                                : (0, r.jsx)("path", { d: "M3 6l5 5 5-5" }),
                            }),
                          ],
                        }),
                        t &&
                          e.items.map((e) => {
                            var t;
                            return (0, r.jsxs)(
                              "div",
                              {
                                children: [
                                  (0, r.jsx)("a", {
                                    href: "#".concat(e.id),
                                    className: h === e.id ? "here" : void 0,
                                    "aria-current":
                                      h === e.id ? "location" : void 0,
                                    onClick: () => u(!1),
                                    children: e.label,
                                  }),
                                  h === e.id &&
                                  (null === (t = x[e.id]) || void 0 === t
                                    ? void 0
                                    : t.length)
                                    ? (0, r.jsx)("div", {
                                        className: i().railSubs,
                                        children: x[e.id].map((e) =>
                                          (0, r.jsx)(
                                            "a",
                                            {
                                              href: "#".concat(e.id),
                                              className:
                                                f === e.id ? "here" : void 0,
                                              onClick: () => u(!1),
                                              children: e.label,
                                            },
                                            e.id
                                          )
                                        ),
                                      })
                                    : null,
                                ],
                              },
                              e.id
                            );
                          }),
                      ],
                    },
                    e.group
                  );
                }),
              }),
            ],
          })
        );
      }
    },
    14100: function (e, t, n) {
      "use strict";
      n.d(t, {
        Tabs: function () {
          return s;
        },
      });
      var r = n(92483),
        o = n(64871),
        a = n(40999),
        i = n.n(a);
      function s(e) {
        var t;
        let { label: n, tabs: a, only: s } = e,
          [l, c] = (0, o.useState)(
            null === (t = a[0]) || void 0 === t ? void 0 : t.id
          ),
          d = (0, o.useRef)(null),
          u = null != s ? s : l;
        return (
          (0, o.useEffect)(() => {
            let e = () => {
              let e = decodeURIComponent(location.hash.slice(1));
              if (!e) return;
              let t = a.find((t) => t.id === e),
                n = t ? null : document.getElementById(e),
                r = n
                  ? a.find((e) => {
                      var t;
                      return null === (t = document.getElementById(e.id)) ||
                        void 0 === t
                        ? void 0
                        : t.contains(n);
                    })
                  : void 0;
              if (!t && !r) return;
              c((null != t ? t : r).id);
              let o = () =>
                requestAnimationFrame(() => {
                  var e;
                  return null === (e = null != n ? n : d.current) ||
                    void 0 === e
                    ? void 0
                    : e.scrollIntoView({ block: "start" });
                });
              "complete" === document.readyState
                ? o()
                : window.addEventListener("load", o, { once: !0 });
            };
            return (
              e(),
              window.addEventListener("hashchange", e),
              () => window.removeEventListener("hashchange", e)
            );
          }, [a]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("div", {
                ref: d,
                className: i().picker,
                role: "radiogroup",
                "aria-label": n,
                hidden: void 0 !== s,
                children: a.map((e) =>
                  (0, r.jsx)(
                    "button",
                    {
                      type: "button",
                      role: "radio",
                      "aria-checked": u === e.id,
                      className: u === e.id ? i().picked : void 0,
                      onClick: () => c(e.id),
                      children: e.label,
                    },
                    e.id
                  )
                ),
              }),
              a.map((e) =>
                (0, r.jsx)(
                  "div",
                  {
                    id: e.id,
                    "data-tab": e.label,
                    hidden: u !== e.id,
                    children: e.content,
                  },
                  e.id
                )
              ),
            ],
          })
        );
      }
    },
    1336: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return o.a;
        },
      });
      var r = n(78888),
        o = n.n(r);
    },
    3352: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return o.a;
        },
      });
      var r = n(37626),
        o = n.n(r);
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
      var r, o;
      e.exports =
        (null == (r = n.g.process) ? void 0 : r.env) &&
        "object" == typeof (null == (o = n.g.process) ? void 0 : o.env)
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
                o = (e.exports = {});
              function a() {
                throw Error("setTimeout has not been defined");
              }
              function i() {
                throw Error("clearTimeout has not been defined");
              }
              function s(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === a || !t) && setTimeout)
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
                  t = "function" == typeof setTimeout ? setTimeout : a;
                } catch (e) {
                  t = a;
                }
                try {
                  n = "function" == typeof clearTimeout ? clearTimeout : i;
                } catch (e) {
                  n = i;
                }
              })();
              var l = [],
                c = !1,
                d = -1;
              function u() {
                c &&
                  r &&
                  ((c = !1),
                  r.length ? (l = r.concat(l)) : (d = -1),
                  l.length && h());
              }
              function h() {
                if (!c) {
                  var e = s(u);
                  c = !0;
                  for (var t = l.length; t; ) {
                    for (r = l, l = []; ++d < t; ) r && r[d].run();
                    (d = -1), (t = l.length);
                  }
                  (r = null),
                    (c = !1),
                    (function (e) {
                      if (n === clearTimeout) return clearTimeout(e);
                      if ((n === i || !n) && clearTimeout)
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
              function f() {}
              (o.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                l.push(new p(e, t)), 1 !== l.length || c || s(h);
              }),
                (p.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (o.title = "browser"),
                (o.browser = !0),
                (o.env = {}),
                (o.argv = []),
                (o.version = ""),
                (o.versions = {}),
                (o.on = f),
                (o.addListener = f),
                (o.once = f),
                (o.off = f),
                (o.removeListener = f),
                (o.removeAllListeners = f),
                (o.emit = f),
                (o.prependListener = f),
                (o.prependOnceListener = f),
                (o.listeners = function (e) {
                  return [];
                }),
                (o.binding = function (e) {
                  throw Error("process.binding is not supported");
                }),
                (o.cwd = function () {
                  return "/";
                }),
                (o.chdir = function (e) {
                  throw Error("process.chdir is not supported");
                }),
                (o.umask = function () {
                  return 0;
                });
            },
          },
          n = {};
        function r(e) {
          var o = n[e];
          if (void 0 !== o) return o.exports;
          var a = (n[e] = { exports: {} }),
            i = !0;
          try {
            t[e](a, a.exports, r), (i = !1);
          } finally {
            i && delete n[e];
          }
          return a.exports;
        }
        r.ab = "//";
        var o = r(229);
        e.exports = o;
      })();
    },
    78888: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let r = n(46986);
      n(92483), n(64871);
      let o = r._(n(31715));
      function a(e, t) {
        var n;
        let r = {
          loading: (e) => {
            let { error: t, isLoading: n, pastDelay: r } = e;
            return null;
          },
        };
        "function" == typeof e && (r.loader = e);
        let a = { ...r, ...t };
        return (0, o.default)({
          ...a,
          modules: null == (n = a.loadableGenerated) ? void 0 : n.modules,
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
            return o;
          },
        });
      let r = n(42225);
      function o(e) {
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
            return c;
          },
        });
      let r = n(92483),
        o = n(64871),
        a = n(69102),
        i = n(60253);
      function s(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      let l = {
          loader: () => Promise.resolve(s(() => null)),
          loading: null,
          ssr: !0,
        },
        c = function (e) {
          let t = { ...l, ...e },
            n = (0, o.lazy)(() => t.loader().then(s)),
            c = t.loading;
          function d(e) {
            let s = c
                ? (0, r.jsx)(c, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              l = t.ssr
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      "undefined" == typeof window
                        ? (0, r.jsx)(i.PreloadCss, { moduleIds: t.modules })
                        : null,
                      (0, r.jsx)(n, { ...e }),
                    ],
                  })
                : (0, r.jsx)(a.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, r.jsx)(n, { ...e }),
                  });
            return (0, r.jsx)(o.Suspense, { fallback: s, children: l });
          }
          return (d.displayName = "LoadableComponent"), d;
        };
    },
    60253: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadCss", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let r = n(92483),
        o = n(85694);
      function a(e) {
        let { moduleIds: t } = e;
        if ("undefined" != typeof window) return null;
        let n = (0, o.getExpectedRequestStore)("next/dynamic css"),
          a = [];
        if (n.reactLoadableManifest && t) {
          let e = n.reactLoadableManifest;
          for (let n of t) {
            if (!e[n]) continue;
            let t = e[n].files.filter((e) => e.endsWith(".css"));
            a.push(...t);
          }
        }
        return 0 === a.length
          ? null
          : (0, r.jsx)(r.Fragment, {
              children: a.map((e) =>
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
    40999: function (e) {
      e.exports = {
        docs: "docs_docs__Q9bsU",
        rail: "docs_rail__Rz5g8",
        railList: "docs_railList__bmPmP",
        railGroup: "docs_railGroup__cZmda",
        railToggle: "docs_railToggle__DkL0F",
        railLabel: "docs_railLabel__hwLUg",
        body: "docs_body__Tn_Bc",
        title: "docs_title__B5alC",
        intro: "docs_intro__PfyGx",
        lede: "docs_lede__QZqql",
        section: "docs_section__zMzJM",
        open: "docs_open__A3A1D",
        ruled: "docs_ruled__92VHu",
        openRule: "docs_openRule__JeJwt",
        sum: "docs_sum__jkEn3",
        note: "docs_note__8wvN_",
        warn: "docs_warn__wLidA",
        facts: "docs_facts__DKRhQ",
        chips: "docs_chips__pvCYd",
        good: "docs_good__UAbII",
        bad: "docs_bad__l33CZ",
        table: "docs_table__dzJMU",
        skills: "docs_skills__PvYm2",
        code: "docs_code__aljWI",
        copy: "docs_copy__GEONc",
        can: "docs_can__ZkPBx",
        example: "docs_example__kiDYT",
        exampleAsk: "docs_exampleAsk__1UhxG",
        addr: "docs_addr__bq9LP",
        terms: "docs_terms__ymNQt",
        steps: "docs_steps__hWJ6b",
        strip: "docs_strip__q3Yhm",
        flow: "docs_flow__ODQXp",
        nowrap: "docs_nowrap__AgiYx",
        address: "docs_address__DGrBI",
        stub: "docs_stub___vE9Z",
        searchOpen: "docs_searchOpen__QJLOv",
        picker: "docs_picker__ge_AM",
        railOpen: "docs_railOpen__CSQm3",
        picked: "docs_picked__1ZI7D",
        appSteps: "docs_appSteps__0Snr0",
        appNeeds: "docs_appNeeds__nQBBL",
        way: "docs_way__I1Kd7",
        get: "docs_get__tHBRj",
        searchBack: "docs_searchBack__tLyB4",
        searchBox: "docs_searchBox__rlluS",
        searchAt: "docs_searchAt__eIGxk",
        searchNone: "docs_searchNone__11R8M",
        endpoint: "docs_endpoint__uXh4U",
        railSubs: "docs_railSubs__pxlmj",
        paths: "docs_paths__XpZmL",
        more: "docs_more__vfIrC",
        agent: "docs_agent__9bZQh",
        anchor: "docs_anchor__TlACX",
        chains: "docs_chains__wb5vJ",
        version: "docs_version__HGyCV",
      };
    },
    62238: function (e) {
      e.exports = {
        ways: "ways_ways__J3ER9",
        way: "ways_way__O4TGb",
        figure: "ways_figure__lWtN_",
        change: "ways_change__vYocL",
        up: "ways_up__gbG_H",
        button: "ways_button__Ok_8k",
        arrow: "ways_arrow__zysLs",
        label: "ways_label__4EGHV",
        venues: "ways_venues__nzLMi",
        venueRow: "ways_venueRow__0ZW7m",
      };
    },
  },
  function (e) {
    e.O(0, [4019, 7626, 3773, 9036, 8716, 1744], function () {
      return e((e.s = 74838));
    }),
      (_N_E = e.O());
  },
]);
