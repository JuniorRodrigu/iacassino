import {
  o as U,
  c as Y,
  a as d,
  b as gt,
  h as S,
  F as ge,
  i as O,
  p as j,
  w as k,
  r as y,
  d as m,
  e as $,
  f as T,
  g as H,
  j as re,
  T as yt,
  k as Ke,
  s as wt,
  n as bt,
  l as xt,
  m as Et,
  q as z,
  u as R,
  t as C,
  v as St,
  x as Le,
  y as Ie,
  z as _t,
  A as At,
  B as $t,
  C as Lt,
  D as Tt,
  E as Ft,
  _ as Pt,
} from "./index-74a06d34.js";
const Ct = "/assets/americanroulette-20bef590.png",
  Ot = "/assets/aviator-c3b7c966.png",
  kt = "/assets/crash-a22073f2.jpeg",
  jt = "/assets/crazytime-83e5549a.png",
  Mt = "/assets/footballstudio-446c2838.png",
  Dt = "/assets/fortunetiger-e3ced4a2.png",
  Nt = "/assets/jetx-4ba17389.png",
  Rt = "/assets/mines-e8a3dc52.webp",
  Ht = "/assets/penaltyshootout-57c56e08.png",
  It = "/assets/spaceman-292d26f1.png";
function Be(e, t) {
  return (
    U(),
    Y(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "aria-hidden": "true",
      },
      [
        d("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25",
        }),
      ]
    )
  );
}
function Bt(e, t) {
  return (
    U(),
    Y(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "aria-hidden": "true",
      },
      [
        d("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3",
        }),
      ]
    )
  );
}
function Vt(e, t) {
  return (
    U(),
    Y(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "aria-hidden": "true",
      },
      [
        d("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z",
        }),
      ]
    )
  );
}
function M(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let l = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t
    )
      .map((o) => `"${o}"`)
      .join(", ")}.`
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(l, M), l);
}
var me = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(me || {}),
  V = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(V || {});
function I({
  visible: e = !0,
  features: t = 0,
  ourProps: n,
  theirProps: l,
  ...o
}) {
  var a;
  let r = Ye(l, n),
    i = Object.assign(o, { props: r });
  if (e || (t & 2 && r.static)) return _e(i);
  if (t & 1) {
    let u = (a = r.unmount) == null || a ? 0 : 1;
    return M(u, {
      [0]() {
        return null;
      },
      [1]() {
        return _e({
          ...o,
          props: { ...r, hidden: !0, style: { display: "none" } },
        });
      },
    });
  }
  return _e(i);
}
function _e({ props: e, attrs: t, slots: n, slot: l, name: o }) {
  var a, r;
  let { as: i, ...u } = Je(e, ["unmount", "static"]),
    s = (a = n.default) == null ? void 0 : a.call(n, l),
    c = {};
  if (l) {
    let h = !1,
      f = [];
    for (let [p, v] of Object.entries(l))
      typeof v == "boolean" && (h = !0), v === !0 && f.push(p);
    h && (c["data-headlessui-state"] = f.join(" "));
  }
  if (i === "template") {
    if (
      ((s = Xe(s ?? [])),
      Object.keys(u).length > 0 || Object.keys(t).length > 0)
    ) {
      let [h, ...f] = s ?? [];
      if (!Ut(h) || f.length > 0)
        throw new Error(
          [
            'Passing props on "template"!',
            "",
            `The current component <${o} /> is rendering a "template".`,
            "However we need to passthrough the following props:",
            Object.keys(u)
              .concat(Object.keys(t))
              .map((g) => g.trim())
              .filter((g, E, q) => q.indexOf(g) === E)
              .sort((g, E) => g.localeCompare(E))
              .map((g) => `  - ${g}`).join(`
`),
            "",
            "You can apply a few solutions:",
            [
              'Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',
              "Render a single element as the child so that we can forward the props onto that element.",
            ].map((g) => `  - ${g}`).join(`
`),
          ].join(`
`)
        );
      let p = Ye((r = h.props) != null ? r : {}, u),
        v = gt(h, p);
      for (let g in p)
        g.startsWith("on") && (v.props || (v.props = {}), (v.props[g] = p[g]));
      return v;
    }
    return Array.isArray(s) && s.length === 1 ? s[0] : s;
  }
  return S(i, Object.assign({}, u, c), { default: () => s });
}
function Xe(e) {
  return e.flatMap((t) => (t.type === ge ? Xe(t.children) : [t]));
}
function Ye(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    n = {};
  for (let l of e)
    for (let o in l)
      o.startsWith("on") && typeof l[o] == "function"
        ? (n[o] != null || (n[o] = []), n[o].push(l[o]))
        : (t[o] = l[o]);
  if (t.disabled || t["aria-disabled"])
    return Object.assign(
      t,
      Object.fromEntries(Object.keys(n).map((l) => [l, void 0]))
    );
  for (let l in n)
    Object.assign(t, {
      [l](o, ...a) {
        let r = n[l];
        for (let i of r) {
          if (o instanceof Event && o.defaultPrevented) return;
          i(o, ...a);
        }
      },
    });
  return t;
}
function Je(e, t = []) {
  let n = Object.assign({}, e);
  for (let l of t) l in n && delete n[l];
  return n;
}
function Ut(e) {
  return e == null
    ? !1
    : typeof e.type == "string" ||
        typeof e.type == "object" ||
        typeof e.type == "function";
}
let qt = 0;
function Wt() {
  return ++qt;
}
function Me() {
  return Wt();
}
var Qe = ((e) => (
  (e.Space = " "),
  (e.Enter = "Enter"),
  (e.Escape = "Escape"),
  (e.Backspace = "Backspace"),
  (e.Delete = "Delete"),
  (e.ArrowLeft = "ArrowLeft"),
  (e.ArrowUp = "ArrowUp"),
  (e.ArrowRight = "ArrowRight"),
  (e.ArrowDown = "ArrowDown"),
  (e.Home = "Home"),
  (e.End = "End"),
  (e.PageUp = "PageUp"),
  (e.PageDown = "PageDown"),
  (e.Tab = "Tab"),
  e
))(Qe || {});
function b(e) {
  var t;
  return e == null || e.value == null
    ? null
    : (t = e.value.$el) != null
    ? t
    : e.value;
}
let Ze = Symbol("Context");
var A = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(A || {});
function Gt() {
  return De() !== null;
}
function De() {
  return O(Ze, null);
}
function zt(e) {
  j(Ze, e);
}
var Kt = Object.defineProperty,
  Xt = (e, t, n) =>
    t in e
      ? Kt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Ve = (e, t, n) => (Xt(e, typeof t != "symbol" ? t + "" : t, n), n);
class Yt {
  constructor() {
    Ve(this, "current", this.detect()), Ve(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && ((this.currentId = 0), (this.current = t));
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}
let ie = new Yt();
function ee(e) {
  if (ie.isServer) return null;
  if (e instanceof Node) return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = b(e);
    if (t) return t.ownerDocument;
  }
  return document;
}
let Te = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
]
  .map((e) => `${e}:not([tabindex='-1'])`)
  .join(",");
var B = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(B || {}),
  et = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(et || {}),
  Jt = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(Jt || {});
function Qt(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(Te)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      );
}
var tt = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(tt || {});
function Zt(e, t = 0) {
  var n;
  return e === ((n = ee(e)) == null ? void 0 : n.body)
    ? !1
    : M(t, {
        [0]() {
          return e.matches(Te);
        },
        [1]() {
          let l = e;
          for (; l !== null; ) {
            if (l.matches(Te)) return !0;
            l = l.parentElement;
          }
          return !1;
        },
      });
}
var en = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(en || {});
typeof window < "u" &&
  typeof document < "u" &&
  (document.addEventListener(
    "keydown",
    (e) => {
      e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ),
  document.addEventListener(
    "click",
    (e) => {
      e.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : e.detail === 0 &&
          (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ));
function J(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let tn = ["textarea", "input"].join(",");
function nn(e) {
  var t, n;
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, tn)) !=
    null
    ? n
    : !1;
}
function ln(e, t = (n) => n) {
  return e.slice().sort((n, l) => {
    let o = t(n),
      a = t(l);
    if (o === null || a === null) return 0;
    let r = o.compareDocumentPosition(a);
    return r & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : r & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
  });
}
function ve(
  e,
  t,
  { sorted: n = !0, relativeTo: l = null, skipElements: o = [] } = {}
) {
  var a;
  let r =
      (a = Array.isArray(e)
        ? e.length > 0
          ? e[0].ownerDocument
          : document
        : e == null
        ? void 0
        : e.ownerDocument) != null
        ? a
        : document,
    i = Array.isArray(e) ? (n ? ln(e) : e) : Qt(e);
  o.length > 0 && i.length > 1 && (i = i.filter((v) => !o.includes(v))),
    (l = l ?? r.activeElement);
  let u = (() => {
      if (t & 5) return 1;
      if (t & 10) return -1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    s = (() => {
      if (t & 1) return 0;
      if (t & 2) return Math.max(0, i.indexOf(l)) - 1;
      if (t & 4) return Math.max(0, i.indexOf(l)) + 1;
      if (t & 8) return i.length - 1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    c = t & 32 ? { preventScroll: !0 } : {},
    h = 0,
    f = i.length,
    p;
  do {
    if (h >= f || h + f <= 0) return 0;
    let v = s + h;
    if (t & 16) v = (v + f) % f;
    else {
      if (v < 0) return 3;
      if (v >= f) return 1;
    }
    (p = i[v]), p == null || p.focus(c), (h += u);
  } while (p !== r.activeElement);
  return t & 6 && nn(p) && p.select(), 2;
}
function Ue(e, t, n) {
  ie.isServer ||
    k((l) => {
      document.addEventListener(e, t, n),
        l(() => document.removeEventListener(e, t, n));
    });
}
function nt(e, t, n) {
  ie.isServer ||
    k((l) => {
      window.addEventListener(e, t, n),
        l(() => window.removeEventListener(e, t, n));
    });
}
function on(e, t, n = m(() => !0)) {
  function l(a, r) {
    if (!n.value || a.defaultPrevented) return;
    let i = r(a);
    if (i === null || !i.getRootNode().contains(i)) return;
    let u = (function s(c) {
      return typeof c == "function"
        ? s(c())
        : Array.isArray(c) || c instanceof Set
        ? c
        : [c];
    })(e);
    for (let s of u) {
      if (s === null) continue;
      let c = s instanceof HTMLElement ? s : b(s);
      if (
        (c != null && c.contains(i)) ||
        (a.composed && a.composedPath().includes(c))
      )
        return;
    }
    return !Zt(i, tt.Loose) && i.tabIndex !== -1 && a.preventDefault(), t(a, i);
  }
  let o = y(null);
  Ue(
    "mousedown",
    (a) => {
      var r, i;
      n.value &&
        (o.value =
          ((i = (r = a.composedPath) == null ? void 0 : r.call(a)) == null
            ? void 0
            : i[0]) || a.target);
    },
    !0
  ),
    Ue(
      "click",
      (a) => {
        o.value && (l(a, () => o.value), (o.value = null));
      },
      !0
    ),
    nt(
      "blur",
      (a) =>
        l(a, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null
        ),
      !0
    );
}
var he = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(he || {});
let Fe = $({
  name: "Hidden",
  props: {
    as: { type: [Object, String], default: "div" },
    features: { type: Number, default: 1 },
  },
  setup(e, { slots: t, attrs: n }) {
    return () => {
      let { features: l, ...o } = e,
        a = {
          "aria-hidden": (l & 2) === 2 ? !0 : void 0,
          style: {
            position: "fixed",
            top: 1,
            left: 1,
            width: 1,
            height: 0,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: "0",
            ...((l & 4) === 4 && (l & 2) !== 2 && { display: "none" }),
          },
        };
      return I({
        ourProps: a,
        theirProps: o,
        slot: {},
        attrs: n,
        slots: t,
        name: "Hidden",
      });
    };
  },
});
function an() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function ye() {
  let e = [],
    t = {
      addEventListener(n, l, o, a) {
        return (
          n.addEventListener(l, o, a),
          t.add(() => n.removeEventListener(l, o, a))
        );
      },
      requestAnimationFrame(...n) {
        let l = requestAnimationFrame(...n);
        t.add(() => cancelAnimationFrame(l));
      },
      nextFrame(...n) {
        t.requestAnimationFrame(() => {
          t.requestAnimationFrame(...n);
        });
      },
      setTimeout(...n) {
        let l = setTimeout(...n);
        t.add(() => clearTimeout(l));
      },
      style(n, l, o) {
        let a = n.style.getPropertyValue(l);
        return (
          Object.assign(n.style, { [l]: o }),
          this.add(() => {
            Object.assign(n.style, { [l]: a });
          })
        );
      },
      group(n) {
        let l = ye();
        return n(l), this.add(() => l.dispose());
      },
      add(n) {
        return (
          e.push(n),
          () => {
            let l = e.indexOf(n);
            if (l >= 0) for (let o of e.splice(l, 1)) o();
          }
        );
      },
      dispose() {
        for (let n of e.splice(0)) n();
      },
    };
  return t;
}
var ae = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(ae || {});
function rn() {
  let e = y(0);
  return (
    nt("keydown", (t) => {
      t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
    }),
    e
  );
}
function lt(e, t, n, l) {
  ie.isServer ||
    k((o) => {
      (e = e ?? window),
        e.addEventListener(t, n, l),
        o(() => e.removeEventListener(t, n, l));
    });
}
function ot(e) {
  typeof queueMicrotask == "function"
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t;
          })
        );
}
function sn(e) {
  function t() {
    document.readyState !== "loading" &&
      (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" &&
    typeof document < "u" &&
    (document.addEventListener("DOMContentLoaded", t), t());
}
function at(e) {
  if (!e) return new Set();
  if (typeof e == "function") return new Set(e());
  let t = new Set();
  for (let n of e.value) {
    let l = b(n);
    l instanceof HTMLElement && t.add(l);
  }
  return t;
}
var rt = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.InitialFocus = 2)] = "InitialFocus"),
  (e[(e.TabLock = 4)] = "TabLock"),
  (e[(e.FocusLock = 8)] = "FocusLock"),
  (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
  (e[(e.All = 30)] = "All"),
  e
))(rt || {});
let le = Object.assign(
    $({
      name: "FocusTrap",
      props: {
        as: { type: [Object, String], default: "div" },
        initialFocus: { type: Object, default: null },
        features: { type: Number, default: 30 },
        containers: { type: [Object, Function], default: y(new Set()) },
      },
      inheritAttrs: !1,
      setup(e, { attrs: t, slots: n, expose: l }) {
        let o = y(null);
        l({ el: o, $el: o });
        let a = m(() => ee(o)),
          r = y(!1);
        T(() => (r.value = !0)),
          H(() => (r.value = !1)),
          dn(
            { ownerDocument: a },
            m(() => r.value && !!(e.features & 16))
          );
        let i = cn(
          {
            ownerDocument: a,
            container: o,
            initialFocus: m(() => e.initialFocus),
          },
          m(() => r.value && !!(e.features & 2))
        );
        fn(
          {
            ownerDocument: a,
            container: o,
            containers: e.containers,
            previousActiveElement: i,
          },
          m(() => r.value && !!(e.features & 8))
        );
        let u = rn();
        function s(p) {
          let v = b(o);
          v &&
            ((g) => g())(() => {
              M(u.value, {
                [ae.Forwards]: () => {
                  ve(v, B.First, { skipElements: [p.relatedTarget] });
                },
                [ae.Backwards]: () => {
                  ve(v, B.Last, { skipElements: [p.relatedTarget] });
                },
              });
            });
        }
        let c = y(!1);
        function h(p) {
          p.key === "Tab" &&
            ((c.value = !0),
            requestAnimationFrame(() => {
              c.value = !1;
            }));
        }
        function f(p) {
          if (!r.value) return;
          let v = at(e.containers);
          b(o) instanceof HTMLElement && v.add(b(o));
          let g = p.relatedTarget;
          g instanceof HTMLElement &&
            g.dataset.headlessuiFocusGuard !== "true" &&
            (it(v, g) ||
              (c.value
                ? ve(
                    b(o),
                    M(u.value, {
                      [ae.Forwards]: () => B.Next,
                      [ae.Backwards]: () => B.Previous,
                    }) | B.WrapAround,
                    { relativeTo: p.target }
                  )
                : p.target instanceof HTMLElement && J(p.target)));
        }
        return () => {
          let p = {},
            v = { ref: o, onKeydown: h, onFocusout: f },
            { features: g, initialFocus: E, containers: q, ...L } = e;
          return S(ge, [
            !!(g & 4) &&
              S(Fe, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: s,
                features: he.Focusable,
              }),
            I({
              ourProps: v,
              theirProps: { ...t, ...L },
              slot: p,
              attrs: t,
              slots: n,
              name: "FocusTrap",
            }),
            !!(g & 4) &&
              S(Fe, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: s,
                features: he.Focusable,
              }),
          ]);
        };
      },
    }),
    { features: rt }
  ),
  K = [];
sn(() => {
  function e(t) {
    t.target instanceof HTMLElement &&
      t.target !== document.body &&
      K[0] !== t.target &&
      (K.unshift(t.target),
      (K = K.filter((n) => n != null && n.isConnected)),
      K.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }),
    window.addEventListener("mousedown", e, { capture: !0 }),
    window.addEventListener("focus", e, { capture: !0 }),
    document.body.addEventListener("click", e, { capture: !0 }),
    document.body.addEventListener("mousedown", e, { capture: !0 }),
    document.body.addEventListener("focus", e, { capture: !0 });
});
function un(e) {
  let t = y(K.slice());
  return (
    re(
      [e],
      ([n], [l]) => {
        l === !0 && n === !1
          ? ot(() => {
              t.value.splice(0);
            })
          : l === !1 && n === !0 && (t.value = K.slice());
      },
      { flush: "post" }
    ),
    () => {
      var n;
      return (n = t.value.find((l) => l != null && l.isConnected)) != null
        ? n
        : null;
    }
  );
}
function dn({ ownerDocument: e }, t) {
  let n = un(t);
  T(() => {
    k(
      () => {
        var l, o;
        t.value ||
          (((l = e.value) == null ? void 0 : l.activeElement) ===
            ((o = e.value) == null ? void 0 : o.body) &&
            J(n()));
      },
      { flush: "post" }
    );
  }),
    H(() => {
      t.value && J(n());
    });
}
function cn({ ownerDocument: e, container: t, initialFocus: n }, l) {
  let o = y(null),
    a = y(!1);
  return (
    T(() => (a.value = !0)),
    H(() => (a.value = !1)),
    T(() => {
      re(
        [t, n, l],
        (r, i) => {
          if (r.every((s, c) => (i == null ? void 0 : i[c]) === s) || !l.value)
            return;
          let u = b(t);
          u &&
            ot(() => {
              var s, c;
              if (!a.value) return;
              let h = b(n),
                f = (s = e.value) == null ? void 0 : s.activeElement;
              if (h) {
                if (h === f) {
                  o.value = f;
                  return;
                }
              } else if (u.contains(f)) {
                o.value = f;
                return;
              }
              h
                ? J(h)
                : ve(u, B.First | B.NoScroll) === et.Error &&
                  console.warn(
                    "There are no focusable elements inside the <FocusTrap />"
                  ),
                (o.value = (c = e.value) == null ? void 0 : c.activeElement);
            });
        },
        { immediate: !0, flush: "post" }
      );
    }),
    o
  );
}
function fn(
  { ownerDocument: e, container: t, containers: n, previousActiveElement: l },
  o
) {
  var a;
  lt(
    (a = e.value) == null ? void 0 : a.defaultView,
    "focus",
    (r) => {
      if (!o.value) return;
      let i = at(n);
      b(t) instanceof HTMLElement && i.add(b(t));
      let u = l.value;
      if (!u) return;
      let s = r.target;
      s && s instanceof HTMLElement
        ? it(i, s)
          ? ((l.value = s), J(s))
          : (r.preventDefault(), r.stopPropagation(), J(u))
        : J(l.value);
    },
    !0
  );
}
function it(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
let Ae = new Map(),
  oe = new Map();
function qe(e, t = y(!0)) {
  k((n) => {
    var l;
    if (!t.value) return;
    let o = b(e);
    if (!o) return;
    n(function () {
      var r;
      if (!o) return;
      let i = (r = oe.get(o)) != null ? r : 1;
      if ((i === 1 ? oe.delete(o) : oe.set(o, i - 1), i !== 1)) return;
      let u = Ae.get(o);
      u &&
        (u["aria-hidden"] === null
          ? o.removeAttribute("aria-hidden")
          : o.setAttribute("aria-hidden", u["aria-hidden"]),
        (o.inert = u.inert),
        Ae.delete(o));
    });
    let a = (l = oe.get(o)) != null ? l : 0;
    oe.set(o, a + 1),
      a === 0 &&
        (Ae.set(o, {
          "aria-hidden": o.getAttribute("aria-hidden"),
          inert: o.inert,
        }),
        o.setAttribute("aria-hidden", "true"),
        (o.inert = !0));
  });
}
let st = Symbol("ForcePortalRootContext");
function pn() {
  return O(st, !1);
}
let We = $({
  name: "ForcePortalRoot",
  props: {
    as: { type: [Object, String], default: "template" },
    force: { type: Boolean, default: !1 },
  },
  setup(e, { slots: t, attrs: n }) {
    return (
      j(st, e.force),
      () => {
        let { force: l, ...o } = e;
        return I({
          theirProps: o,
          ourProps: {},
          slot: {},
          slots: t,
          attrs: n,
          name: "ForcePortalRoot",
        });
      }
    );
  },
});
function vn(e) {
  let t = ee(e);
  if (!t) {
    if (e === null) return null;
    throw new Error(
      `[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`
    );
  }
  let n = t.getElementById("headlessui-portal-root");
  if (n) return n;
  let l = t.createElement("div");
  return l.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(l);
}
let mn = $({
    name: "Portal",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n }) {
      let l = y(null),
        o = m(() => ee(l)),
        a = pn(),
        r = O(ut, null),
        i = y(a === !0 || r == null ? vn(l.value) : r.resolveTarget());
      k(() => {
        a || (r != null && (i.value = r.resolveTarget()));
      });
      let u = O(Pe, null);
      return (
        T(() => {
          let s = b(l);
          s && u && H(u.register(s));
        }),
        H(() => {
          var s, c;
          let h =
            (s = o.value) == null
              ? void 0
              : s.getElementById("headlessui-portal-root");
          h &&
            i.value === h &&
            i.value.children.length <= 0 &&
            ((c = i.value.parentElement) == null || c.removeChild(i.value));
        }),
        () => {
          if (i.value === null) return null;
          let s = { ref: l, "data-headlessui-portal": "" };
          return S(
            yt,
            { to: i.value },
            I({
              ourProps: s,
              theirProps: e,
              slot: {},
              attrs: n,
              slots: t,
              name: "Portal",
            })
          );
        }
      );
    },
  }),
  Pe = Symbol("PortalParentContext");
function hn() {
  let e = O(Pe, null),
    t = y([]);
  function n(a) {
    return t.value.push(a), e && e.register(a), () => l(a);
  }
  function l(a) {
    let r = t.value.indexOf(a);
    r !== -1 && t.value.splice(r, 1), e && e.unregister(a);
  }
  let o = { register: n, unregister: l, portals: t };
  return [
    t,
    $({
      name: "PortalWrapper",
      setup(a, { slots: r }) {
        return (
          j(Pe, o),
          () => {
            var i;
            return (i = r.default) == null ? void 0 : i.call(r);
          }
        );
      },
    }),
  ];
}
let ut = Symbol("PortalGroupContext"),
  gn = $({
    name: "PortalGroup",
    props: {
      as: { type: [Object, String], default: "template" },
      target: { type: Object, default: null },
    },
    setup(e, { attrs: t, slots: n }) {
      let l = Ke({
        resolveTarget() {
          return e.target;
        },
      });
      return (
        j(ut, l),
        () => {
          let { target: o, ...a } = e;
          return I({
            theirProps: a,
            ourProps: {},
            slot: {},
            attrs: t,
            slots: n,
            name: "PortalGroup",
          });
        }
      );
    },
  }),
  dt = Symbol("StackContext");
var Ce = ((e) => ((e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e))(
  Ce || {}
);
function yn() {
  return O(dt, () => {});
}
function wn({ type: e, enabled: t, element: n, onUpdate: l }) {
  let o = yn();
  function a(...r) {
    l == null || l(...r), o(...r);
  }
  T(() => {
    re(
      t,
      (r, i) => {
        r ? a(0, e, n) : i === !0 && a(1, e, n);
      },
      { immediate: !0, flush: "sync" }
    );
  }),
    H(() => {
      t.value && a(1, e, n);
    }),
    j(dt, a);
}
let bn = Symbol("DescriptionContext");
function xn({ slot: e = y({}), name: t = "Description", props: n = {} } = {}) {
  let l = y([]);
  function o(a) {
    return (
      l.value.push(a),
      () => {
        let r = l.value.indexOf(a);
        r !== -1 && l.value.splice(r, 1);
      }
    );
  }
  return (
    j(bn, { register: o, slot: e, name: t, props: n }),
    m(() => (l.value.length > 0 ? l.value.join(" ") : void 0))
  );
}
function En(e) {
  let t = wt(e.getSnapshot());
  return (
    H(
      e.subscribe(() => {
        t.value = e.getSnapshot();
      })
    ),
    t
  );
}
function Sn(e, t) {
  let n = e(),
    l = new Set();
  return {
    getSnapshot() {
      return n;
    },
    subscribe(o) {
      return l.add(o), () => l.delete(o);
    },
    dispatch(o, ...a) {
      let r = t[o].call(n, ...a);
      r && ((n = r), l.forEach((i) => i()));
    },
  };
}
function _n() {
  let e;
  return {
    before({ doc: t }) {
      var n;
      let l = t.documentElement;
      e = ((n = t.defaultView) != null ? n : window).innerWidth - l.clientWidth;
    },
    after({ doc: t, d: n }) {
      let l = t.documentElement,
        o = l.clientWidth - l.offsetWidth,
        a = e - o;
      n.style(l, "paddingRight", `${a}px`);
    },
  };
}
function An() {
  if (!an()) return {};
  let e;
  return {
    before() {
      e = window.pageYOffset;
    },
    after({ doc: t, d: n, meta: l }) {
      function o(r) {
        return l.containers.flatMap((i) => i()).some((i) => i.contains(r));
      }
      n.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
      let a = null;
      n.addEventListener(
        t,
        "click",
        (r) => {
          if (r.target instanceof HTMLElement)
            try {
              let i = r.target.closest("a");
              if (!i) return;
              let { hash: u } = new URL(i.href),
                s = t.querySelector(u);
              s && !o(s) && (a = s);
            } catch {}
        },
        !0
      ),
        n.addEventListener(
          t,
          "touchmove",
          (r) => {
            r.target instanceof HTMLElement &&
              !o(r.target) &&
              r.preventDefault();
          },
          { passive: !1 }
        ),
        n.add(() => {
          window.scrollTo(0, window.pageYOffset + e),
            a &&
              a.isConnected &&
              (a.scrollIntoView({ block: "nearest" }), (a = null));
        });
    },
  };
}
function $n() {
  return {
    before({ doc: e, d: t }) {
      t.style(e.documentElement, "overflow", "hidden");
    },
  };
}
function Ln(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let X = Sn(() => new Map(), {
  PUSH(e, t) {
    var n;
    let l =
      (n = this.get(e)) != null
        ? n
        : { doc: e, count: 0, d: ye(), meta: new Set() };
    return l.count++, l.meta.add(t), this.set(e, l), this;
  },
  POP(e, t) {
    let n = this.get(e);
    return n && (n.count--, n.meta.delete(t)), this;
  },
  SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
    let l = { doc: e, d: t, meta: Ln(n) },
      o = [An(), _n(), $n()];
    o.forEach(({ before: a }) => (a == null ? void 0 : a(l))),
      o.forEach(({ after: a }) => (a == null ? void 0 : a(l)));
  },
  SCROLL_ALLOW({ d: e }) {
    e.dispose();
  },
  TEARDOWN({ doc: e }) {
    this.delete(e);
  },
});
X.subscribe(() => {
  let e = X.getSnapshot(),
    t = new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let l = t.get(n.doc) === "hidden",
      o = n.count !== 0;
    ((o && !l) || (!o && l)) &&
      X.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
      n.count === 0 && X.dispatch("TEARDOWN", n);
  }
});
function Tn(e, t, n) {
  let l = En(X),
    o = m(() => {
      let a = e.value ? l.value.get(e.value) : void 0;
      return a ? a.count > 0 : !1;
    });
  return (
    re(
      [e, t],
      ([a, r], [i], u) => {
        if (!a || !r) return;
        X.dispatch("PUSH", a, n);
        let s = !1;
        u(() => {
          s || (X.dispatch("POP", i ?? a, n), (s = !0));
        });
      },
      { immediate: !0 }
    ),
    o
  );
}
function Fn({ defaultContainers: e = [], portals: t } = {}) {
  let n = y(null),
    l = ee(n);
  function o() {
    var a;
    let r = [];
    for (let i of e)
      i !== null &&
        (i instanceof HTMLElement
          ? r.push(i)
          : "value" in i && i.value instanceof HTMLElement && r.push(i.value));
    if (t != null && t.value) for (let i of t.value) r.push(i);
    for (let i of (a =
      l == null ? void 0 : l.querySelectorAll("html > *, body > *")) != null
      ? a
      : [])
      i !== document.body &&
        i !== document.head &&
        i instanceof HTMLElement &&
        i.id !== "headlessui-portal-root" &&
        (i.contains(b(n)) || r.some((u) => i.contains(u)) || r.push(i));
    return r;
  }
  return {
    resolveContainers: o,
    contains(a) {
      return o().some((r) => r.contains(a));
    },
    mainTreeNodeRef: n,
    MainTreeNode() {
      return S(Fe, { features: he.Hidden, ref: n });
    },
  };
}
var Pn = ((e) => (
  (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
))(Pn || {});
let Oe = Symbol("DialogContext");
function ct(e) {
  let t = O(Oe, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, ct), n);
  }
  return t;
}
let fe = "DC8F892D-2EBD-447C-A4C8-A03058436FF4",
  Cn = $({
    name: "Dialog",
    inheritAttrs: !1,
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      open: { type: [Boolean, String], default: fe },
      initialFocus: { type: Object, default: null },
      id: { type: String, default: () => `headlessui-dialog-${Me()}` },
    },
    emits: { close: (e) => !0 },
    setup(e, { emit: t, attrs: n, slots: l, expose: o }) {
      var a;
      let r = y(!1);
      T(() => {
        r.value = !0;
      });
      let i = y(0),
        u = De(),
        s = m(() =>
          e.open === fe && u !== null ? (u.value & A.Open) === A.Open : e.open
        ),
        c = y(null),
        h = m(() => ee(c));
      if ((o({ el: c, $el: c }), !(e.open !== fe || u !== null)))
        throw new Error(
          "You forgot to provide an `open` prop to the `Dialog`."
        );
      if (typeof s.value != "boolean")
        throw new Error(
          `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${
            s.value === fe ? void 0 : e.open
          }`
        );
      let f = m(() => (r.value && s.value ? 0 : 1)),
        p = m(() => f.value === 0),
        v = m(() => i.value > 1),
        g = O(Oe, null) !== null,
        [E, q] = hn(),
        {
          resolveContainers: L,
          mainTreeNodeRef: W,
          MainTreeNode: se,
        } = Fn({
          portals: E,
          defaultContainers: [
            m(() => {
              var w;
              return (w = _.panelRef.value) != null ? w : c.value;
            }),
          ],
        }),
        ue = m(() => (v.value ? "parent" : "leaf")),
        te = m(() => (u !== null ? (u.value & A.Closing) === A.Closing : !1)),
        be = m(() => (g || te.value ? !1 : p.value)),
        de = m(() => {
          var w, x, F;
          return (F = Array.from(
            (x =
              (w = h.value) == null
                ? void 0
                : w.querySelectorAll("body > *")) != null
              ? x
              : []
          ).find((P) =>
            P.id === "headlessui-portal-root"
              ? !1
              : P.contains(b(W)) && P instanceof HTMLElement
          )) != null
            ? F
            : null;
        });
      qe(de, be);
      let xe = m(() => (v.value ? !0 : p.value)),
        Ee = m(() => {
          var w, x, F;
          return (F = Array.from(
            (x =
              (w = h.value) == null
                ? void 0
                : w.querySelectorAll("[data-headlessui-portal]")) != null
              ? x
              : []
          ).find((P) => P.contains(b(W)) && P instanceof HTMLElement)) != null
            ? F
            : null;
        });
      qe(Ee, xe),
        wn({
          type: "Dialog",
          enabled: m(() => f.value === 0),
          element: c,
          onUpdate: (w, x) => {
            if (x === "Dialog")
              return M(w, {
                [Ce.Add]: () => (i.value += 1),
                [Ce.Remove]: () => (i.value -= 1),
              });
          },
        });
      let Se = xn({
          name: "DialogDescription",
          slot: m(() => ({ open: s.value })),
        }),
        Q = y(null),
        _ = {
          titleId: Q,
          panelRef: y(null),
          dialogState: f,
          setTitleId(w) {
            Q.value !== w && (Q.value = w);
          },
          close() {
            t("close", !1);
          },
        };
      j(Oe, _);
      let ne = m(() => !(!p.value || v.value));
      on(
        L,
        (w, x) => {
          _.close(), bt(() => (x == null ? void 0 : x.focus()));
        },
        ne
      );
      let D = m(() => !(v.value || f.value !== 0));
      lt((a = h.value) == null ? void 0 : a.defaultView, "keydown", (w) => {
        D.value &&
          (w.defaultPrevented ||
            (w.key === Qe.Escape &&
              (w.preventDefault(), w.stopPropagation(), _.close())));
      });
      let Z = m(() => !(te.value || f.value !== 0 || g));
      return (
        Tn(h, Z, (w) => {
          var x;
          return { containers: [...((x = w.containers) != null ? x : []), L] };
        }),
        k((w) => {
          if (f.value !== 0) return;
          let x = b(c);
          if (!x) return;
          let F = new ResizeObserver((P) => {
            for (let ce of P) {
              let N = ce.target.getBoundingClientRect();
              N.x === 0 &&
                N.y === 0 &&
                N.width === 0 &&
                N.height === 0 &&
                _.close();
            }
          });
          F.observe(x), w(() => F.disconnect());
        }),
        () => {
          let { id: w, open: x, initialFocus: F, ...P } = e,
            ce = {
              ...n,
              ref: c,
              id: w,
              role: "dialog",
              "aria-modal": f.value === 0 ? !0 : void 0,
              "aria-labelledby": Q.value,
              "aria-describedby": Se.value,
            },
            N = { open: f.value === 0 };
          return S(We, { force: !0 }, () => [
            S(mn, () =>
              S(gn, { target: c.value }, () =>
                S(We, { force: !1 }, () =>
                  S(
                    le,
                    {
                      initialFocus: F,
                      containers: L,
                      features: p.value
                        ? M(ue.value, {
                            parent: le.features.RestoreFocus,
                            leaf: le.features.All & ~le.features.FocusLock,
                          })
                        : le.features.None,
                    },
                    () =>
                      S(q, {}, () =>
                        I({
                          ourProps: ce,
                          theirProps: { ...P, ...n },
                          slot: N,
                          attrs: n,
                          slots: l,
                          visible: f.value === 0,
                          features: me.RenderStrategy | me.Static,
                          name: "Dialog",
                        })
                      )
                  )
                )
              )
            ),
            S(se),
          ]);
        }
      );
    },
  }),
  On = $({
    name: "DialogPanel",
    props: {
      as: { type: [Object, String], default: "div" },
      id: { type: String, default: () => `headlessui-dialog-panel-${Me()}` },
    },
    setup(e, { attrs: t, slots: n, expose: l }) {
      let o = ct("DialogPanel");
      l({ el: o.panelRef, $el: o.panelRef });
      function a(r) {
        r.stopPropagation();
      }
      return () => {
        let { id: r, ...i } = e,
          u = { id: r, ref: o.panelRef, onClick: a };
        return I({
          ourProps: u,
          theirProps: i,
          slot: { open: o.dialogState.value === 0 },
          attrs: t,
          slots: n,
          name: "DialogPanel",
        });
      };
    },
  });
function kn(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return (t.called = !0), e(...n);
  };
}
function $e(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function pe(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var ke = ((e) => ((e.Finished = "finished"), (e.Cancelled = "cancelled"), e))(
  ke || {}
);
function jn(e, t) {
  let n = ye();
  if (!e) return n.dispose;
  let { transitionDuration: l, transitionDelay: o } = getComputedStyle(e),
    [a, r] = [l, o].map((i) => {
      let [u = 0] = i
        .split(",")
        .filter(Boolean)
        .map((s) => (s.includes("ms") ? parseFloat(s) : parseFloat(s) * 1e3))
        .sort((s, c) => c - s);
      return u;
    });
  return (
    a !== 0 ? n.setTimeout(() => t("finished"), a + r) : t("finished"),
    n.add(() => t("cancelled")),
    n.dispose
  );
}
function Ge(e, t, n, l, o, a) {
  let r = ye(),
    i = a !== void 0 ? kn(a) : () => {};
  return (
    pe(e, ...o),
    $e(e, ...t, ...n),
    r.nextFrame(() => {
      pe(e, ...n),
        $e(e, ...l),
        r.add(jn(e, (u) => (pe(e, ...l, ...t), $e(e, ...o), i(u))));
    }),
    r.add(() => pe(e, ...t, ...n, ...l, ...o)),
    r.add(() => i("cancelled")),
    r.dispose
  );
}
function G(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Ne = Symbol("TransitionContext");
var Mn = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(Mn || {});
function Dn() {
  return O(Ne, null) !== null;
}
function Nn() {
  let e = O(Ne, null);
  if (e === null)
    throw new Error(
      "A <TransitionChild /> is used but it is missing a parent <TransitionRoot />."
    );
  return e;
}
function Rn() {
  let e = O(Re, null);
  if (e === null)
    throw new Error(
      "A <TransitionChild /> is used but it is missing a parent <TransitionRoot />."
    );
  return e;
}
let Re = Symbol("NestingContext");
function we(e) {
  return "children" in e
    ? we(e.children)
    : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function ft(e) {
  let t = y([]),
    n = y(!1);
  T(() => (n.value = !0)), H(() => (n.value = !1));
  function l(a, r = V.Hidden) {
    let i = t.value.findIndex(({ id: u }) => u === a);
    i !== -1 &&
      (M(r, {
        [V.Unmount]() {
          t.value.splice(i, 1);
        },
        [V.Hidden]() {
          t.value[i].state = "hidden";
        },
      }),
      !we(t) && n.value && (e == null || e()));
  }
  function o(a) {
    let r = t.value.find(({ id: i }) => i === a);
    return (
      r
        ? r.state !== "visible" && (r.state = "visible")
        : t.value.push({ id: a, state: "visible" }),
      () => l(a, V.Unmount)
    );
  }
  return { children: t, register: o, unregister: l };
}
let pt = me.RenderStrategy,
  je = $({
    props: {
      as: { type: [Object, String], default: "div" },
      show: { type: [Boolean], default: null },
      unmount: { type: [Boolean], default: !0 },
      appear: { type: [Boolean], default: !1 },
      enter: { type: [String], default: "" },
      enterFrom: { type: [String], default: "" },
      enterTo: { type: [String], default: "" },
      entered: { type: [String], default: "" },
      leave: { type: [String], default: "" },
      leaveFrom: { type: [String], default: "" },
      leaveTo: { type: [String], default: "" },
    },
    emits: {
      beforeEnter: () => !0,
      afterEnter: () => !0,
      beforeLeave: () => !0,
      afterLeave: () => !0,
    },
    setup(e, { emit: t, attrs: n, slots: l, expose: o }) {
      let a = y(0);
      function r() {
        (a.value |= A.Opening), t("beforeEnter");
      }
      function i() {
        (a.value &= ~A.Opening), t("afterEnter");
      }
      function u() {
        (a.value |= A.Closing), t("beforeLeave");
      }
      function s() {
        (a.value &= ~A.Closing), t("afterLeave");
      }
      if (!Dn() && Gt())
        return () =>
          S(
            vt,
            {
              ...e,
              onBeforeEnter: r,
              onAfterEnter: i,
              onBeforeLeave: u,
              onAfterLeave: s,
            },
            l
          );
      let c = y(null),
        h = m(() => (e.unmount ? V.Unmount : V.Hidden));
      o({ el: c, $el: c });
      let { show: f, appear: p } = Nn(),
        { register: v, unregister: g } = Rn(),
        E = y(f.value ? "visible" : "hidden"),
        q = { value: !0 },
        L = Me(),
        W = { value: !1 },
        se = ft(() => {
          !W.value && E.value !== "hidden" && ((E.value = "hidden"), g(L), s());
        });
      T(() => {
        let _ = v(L);
        H(_);
      }),
        k(() => {
          if (h.value === V.Hidden && L) {
            if (f.value && E.value !== "visible") {
              E.value = "visible";
              return;
            }
            M(E.value, { hidden: () => g(L), visible: () => v(L) });
          }
        });
      let ue = G(e.enter),
        te = G(e.enterFrom),
        be = G(e.enterTo),
        de = G(e.entered),
        xe = G(e.leave),
        Ee = G(e.leaveFrom),
        Se = G(e.leaveTo);
      T(() => {
        k(() => {
          if (E.value === "visible") {
            let _ = b(c);
            if (_ instanceof Comment && _.data === "")
              throw new Error(
                "Did you forget to passthrough the `ref` to the actual DOM node?"
              );
          }
        });
      });
      function Q(_) {
        let ne = q.value && !p.value,
          D = b(c);
        !D ||
          !(D instanceof HTMLElement) ||
          ne ||
          ((W.value = !0),
          f.value && r(),
          f.value || u(),
          _(
            f.value
              ? Ge(D, ue, te, be, de, (Z) => {
                  (W.value = !1), Z === ke.Finished && i();
                })
              : Ge(D, xe, Ee, Se, de, (Z) => {
                  (W.value = !1),
                    Z === ke.Finished &&
                      (we(se) || ((E.value = "hidden"), g(L), s()));
                })
          ));
      }
      return (
        T(() => {
          re(
            [f],
            (_, ne, D) => {
              Q(D), (q.value = !1);
            },
            { immediate: !0 }
          );
        }),
        j(Re, se),
        zt(
          m(() => M(E.value, { visible: A.Open, hidden: A.Closed }) | a.value)
        ),
        () => {
          let {
              appear: _,
              show: ne,
              enter: D,
              enterFrom: Z,
              enterTo: w,
              entered: x,
              leave: F,
              leaveFrom: P,
              leaveTo: ce,
              ...N
            } = e,
            mt = { ref: c },
            ht = {
              ...N,
              ...(p.value && f.value && ie.isServer
                ? { class: xt([n.class, N.class, ...ue, ...te]) }
                : {}),
            };
          return I({
            theirProps: ht,
            ourProps: mt,
            slot: {},
            slots: l,
            attrs: n,
            features: pt,
            visible: E.value === "visible",
            name: "TransitionChild",
          });
        }
      );
    },
  }),
  Hn = je,
  vt = $({
    inheritAttrs: !1,
    props: {
      as: { type: [Object, String], default: "div" },
      show: { type: [Boolean], default: null },
      unmount: { type: [Boolean], default: !0 },
      appear: { type: [Boolean], default: !1 },
      enter: { type: [String], default: "" },
      enterFrom: { type: [String], default: "" },
      enterTo: { type: [String], default: "" },
      entered: { type: [String], default: "" },
      leave: { type: [String], default: "" },
      leaveFrom: { type: [String], default: "" },
      leaveTo: { type: [String], default: "" },
    },
    emits: {
      beforeEnter: () => !0,
      afterEnter: () => !0,
      beforeLeave: () => !0,
      afterLeave: () => !0,
    },
    setup(e, { emit: t, attrs: n, slots: l }) {
      let o = De(),
        a = m(() =>
          e.show === null && o !== null ? (o.value & A.Open) === A.Open : e.show
        );
      k(() => {
        if (![!0, !1].includes(a.value))
          throw new Error(
            'A <Transition /> is used but it is missing a `:show="true | false"` prop.'
          );
      });
      let r = y(a.value ? "visible" : "hidden"),
        i = ft(() => {
          r.value = "hidden";
        }),
        u = y(!0),
        s = { show: a, appear: m(() => e.appear || !u.value) };
      return (
        T(() => {
          k(() => {
            (u.value = !1),
              a.value ? (r.value = "visible") : we(i) || (r.value = "hidden");
          });
        }),
        j(Re, i),
        j(Ne, s),
        () => {
          let c = Je(e, [
              "show",
              "appear",
              "unmount",
              "onBeforeEnter",
              "onBeforeLeave",
              "onAfterEnter",
              "onAfterLeave",
            ]),
            h = { unmount: e.unmount };
          return I({
            ourProps: { ...h, as: "template" },
            theirProps: {},
            slot: {},
            slots: {
              ...l,
              default: () => [
                S(
                  Hn,
                  {
                    onBeforeEnter: () => t("beforeEnter"),
                    onAfterEnter: () => t("afterEnter"),
                    onBeforeLeave: () => t("beforeLeave"),
                    onAfterLeave: () => t("afterLeave"),
                    ...n,
                    ...h,
                    ...c,
                  },
                  l.default
                ),
              ],
            },
            attrs: {},
            features: pt,
            visible: r.value === "visible",
            name: "Transition",
          });
        }
      );
    },
  });
const In = d(
    "div",
    { class: "fixed inset-0 bg-black bg-opacity-25" },
    null,
    -1
  ),
  Bn = { class: "fixed inset-0 overflow-y-auto" },
  Vn = { class: "flex min-h-full items-center justify-center p-4 text-center" },
  ze = $({
    __name: "DialogComponent",
    props: { modelValue: { type: Boolean, required: !0 } },
    emits: ["update:modelValue"],
    setup(e, { emit: t }) {
      const n = e,
        l = m({
          get: () => n.modelValue,
          set: (a) => t("update:modelValue", a),
        }),
        o = () => {
          l.value = !1;
        };
      return (a, r) => (
        U(),
        Et(
          R(vt),
          { appear: "", show: l.value, as: "template" },
          {
            default: z(() => [
              C(
                R(Cn),
                { as: "div", class: "relative z-10", onClose: o },
                {
                  default: z(() => [
                    C(
                      R(je),
                      {
                        as: "template",
                        enter: "duration-300 ease-out",
                        "enter-from": "opacity-0",
                        "enter-to": "opacity-100",
                        leave: "duration-200 ease-in",
                        "leave-from": "opacity-100",
                        "leave-to": "opacity-0",
                      },
                      { default: z(() => [In]), _: 1 }
                    ),
                    d("div", Bn, [
                      d("div", Vn, [
                        C(
                          R(je),
                          {
                            as: "template",
                            enter: "duration-300 ease-out",
                            "enter-from": "opacity-0 scale-95",
                            "enter-to": "opacity-100 scale-100",
                            leave: "duration-200 ease-in",
                            "leave-from": "opacity-100 scale-100",
                            "leave-to": "opacity-0 scale-95",
                          },
                          {
                            default: z(() => [
                              C(
                                R(On),
                                {
                                  class:
                                    "w-full max-w-md transform overflow-hidden transition-all",
                                },
                                {
                                  default: z(() => [St(a.$slots, "default")]),
                                  _: 3,
                                }
                              ),
                            ]),
                            _: 3,
                          }
                        ),
                      ]),
                    ]),
                  ]),
                  _: 3,
                }
              ),
            ]),
            _: 3,
          },
          8,
          ["show"]
        )
      );
    },
  }),
  Un = { class: "flex flex-col items-center justify-center gap-y-6" },
  qn = d(
    "div",
    { class: "flex flex-col items-center justify-center" },
    [
      d(
        "h1",
        { class: "text-2xl sm:text-4xl font-bold text-center text-gray-800" },
        " Instale o aplicativo "
      ),
      d(
        "p",
        { class: "mt-2 text-sm sm:text-base text-center text-gray-600" },
        " Selecione a plataforma que deseja instalar o aplicativo "
      ),
    ],
    -1
  ),
  Wn = {
    class:
      "flex flex-col sm:flex-row items-center justify-between w-full gap-4",
  },
  Gn = d(
    "div",
    { class: "text-xl font-medium leading-6 text-white" },
    " Instalar App no iPhone ",
    -1
  ),
  zn = d(
    "div",
    null,
    [
      d(
        "p",
        { class: "text-sm text-gray-300 mb-1" },
        " Para instalar o aplicativo no iPhone, siga os passos abaixo: "
      ),
      d(
        "ol",
        {
          class:
            "list-decimal list-inside text-sm text-gray-200 flex flex-col gap-y-2",
        },
        [
          d("li", null, "Abra o aplicativo no Safari"),
          d(
            "li",
            null,
            ' Clique no ícone de "compartilhamento" no canto inferior do smartphone '
          ),
          d("li", null, 'Clique em "Adicionar á tela de inicio"'),
          d("li", null, 'Clique em "Adicionar" no canto superior direito'),
        ]
      ),
    ],
    -1
  ),
  Kn = d(
    "div",
    { class: "text-xl font-medium leading-6 text-white" },
    " Instalar App no Android ",
    -1
  ),
  Xn = d(
    "div",
    null,
    [
      d(
        "p",
        { class: "text-sm text-gray-300 mb-1" },
        " Para instalar o aplicativo no Android, siga os passos abaixo: "
      ),
      d(
        "ol",
        {
          class:
            "list-decimal list-inside text-sm text-gray-200 flex flex-col gap-y-2",
        },
        [
          d("li", null, "Abra o aplicativo no Google Chrome"),
          d(
            "li",
            null,
            ' Clique no ícone de "Mais opções" no canto superior do smartphone '
          ),
          d(
            "li",
            null,
            'Clique em "Instalar Aplicativo" ou "Adicionar a tela Inicial"'
          ),
          d(
            "li",
            null,
            ' Confirme a ação clicando em "Instalar" no popup que aparece na tela '
          ),
        ]
      ),
    ],
    -1
  ),
  Yn = $({
    __name: "InstallInformation",
    setup(e) {
      const t = Ke({ apple: !1, android: !1 }),
        n = () => {
          (t.apple = !1), (t.android = !1);
        };
      return (l, o) => (
        U(),
        Y(
          ge,
          null,
          [
            d("div", Un, [
              qn,
              d("div", Wn, [
                d(
                  "button",
                  {
                    class:
                      "w-full bg-gray-800 text-white rounded-md py-4 px-4 hover:bg-gray-700 font-semibold uppercase text-sm transition-all duration-300 flex items-center justify-center gap-x-2",
                    onClick:
                      o[0] || (o[0] = Le((a) => (t.apple = !0), ["stop"])),
                  },
                  [C(R(Be), { class: "h-5 w-5" }), Ie(" Apple ")]
                ),
                d(
                  "button",
                  {
                    class:
                      "w-full bg-gray-800 text-white rounded-md py-4 px-4 hover:bg-gray-700 font-semibold uppercase text-sm transition-all duration-300 flex items-center justify-center gap-x-2",
                    onClick:
                      o[1] || (o[1] = Le((a) => (t.android = !0), ["stop"])),
                  },
                  [C(R(Be), { class: "h-5 w-5" }), Ie(" Android ")]
                ),
              ]),
            ]),
            C(
              ze,
              {
                modelValue: t.apple,
                "onUpdate:modelValue": o[2] || (o[2] = (a) => (t.apple = a)),
              },
              {
                default: z(() => [
                  d(
                    "div",
                    {
                      class:
                        "bg-gray-700 w-full h-full p-4 rounded-xl text-left flex flex-col gap-y-4",
                    },
                    [
                      Gn,
                      zn,
                      d(
                        "div",
                        { class: "flex justify-center sm:justify-end w-full" },
                        [
                          d(
                            "button",
                            {
                              type: "button",
                              class:
                                "inline-flex w-full sm:w-auto justify-center rounded-md border border-transparent text-gray-100 px-4 py-2 text-sm font-medium bg-gray-900 hover:bg-gray-800",
                              onClick: n,
                            },
                            " Ok, entendi! "
                          ),
                        ]
                      ),
                    ]
                  ),
                ]),
                _: 1,
              },
              8,
              ["modelValue"]
            ),
            C(
              ze,
              {
                modelValue: t.android,
                "onUpdate:modelValue": o[3] || (o[3] = (a) => (t.android = a)),
              },
              {
                default: z(() => [
                  d(
                    "div",
                    {
                      class:
                        "bg-gray-700 w-full h-full p-4 rounded-xl text-left flex flex-col gap-y-4",
                    },
                    [
                      Kn,
                      Xn,
                      d(
                        "div",
                        { class: "flex justify-center sm:justify-end w-full" },
                        [
                          d(
                            "button",
                            {
                              type: "button",
                              class:
                                "inline-flex w-full sm:w-auto justify-center rounded-md border border-transparent text-gray-100 px-4 py-2 text-sm font-medium bg-gray-900 hover:bg-gray-800",
                              onClick: n,
                            },
                            " Ok, entendi! "
                          ),
                        ]
                      ),
                    ]
                  ),
                ]),
                _: 1,
              },
              8,
              ["modelValue"]
            ),
          ],
          64
        )
      );
    },
  }),
  He = (e) => (Tt("data-v-21aea69e"), (e = e()), Ft(), e),
  Jn = {
    class:
      "min-h-screen h-screen text-white flex flex-col bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden items-center",
  },
  Qn = He(() =>
    d(
      "header",
      { class: "bg-gray-800 h-20 w-full flex items-center px-5 py-1" },
      [d("p", { class: "text-2xl px-2 py-2" }, "IA Cassino")],
      -1
    )
  ),
  Zn = {
    class:
      "flex flex-col gap-y-8 grow overflow-y-auto custom-scrollbar max-w-5xl w-full p-6",
  },
  el = { class: "flex items-center gap-x-2" },
  tl = {
    class: "bg-gray-600 rounded-full flex items-center justify-center p-1.5",
  },
  nl = He(() => d("p", null, "Jogos Disponíveis", -1)),
  ll = {
    class:
      "grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-6 place-items-center",
  },
  ol = ["onClick"],
  al = {
    class:
      "bg-gradient-to-tr from-gray-900 to-transparent h-full w-full opacity-50 hover:opacity-100 duration-300 transition-opacity flex items-end rounded-md",
  },
  rl = { class: "px-2 py-1 font-semibold uppercase text-sm" },
  il = { key: 0, class: "flex flex-col gap-y-3" },
  sl = { class: "flex items-center gap-x-2" },
  ul = {
    class: "bg-gray-600 rounded-full flex items-center justify-center p-1.5",
  },
  dl = He(() => d("p", null, "Instalação do App", -1)),
  cl = $({
    __name: "HomePage",
    setup(e) {
      const t = [
          { name: "American Roulette", image: Ct },
          { name: "Aviator", image: Ot },
          { name: "Crash", image: kt },
          { name: "Crazy Time", image: jt },
          { name: "Football Studio", image: Mt },
          { name: "Fortune Tiger", image: Dt },
          { name: "Jet X", image: Nt },
          { name: "Mines", image: Rt },
          { name: "Penalty Shootout", image: Ht },
          { name: "Spaceman", image: It },
        ],
        n = (o) => {
          console.log(o);
        },
        l = m(() => {
          const o = window.matchMedia("(display-mode: standalone)").matches,
            a = /iphone|ipad|ipod/.test(
              window.navigator.userAgent.toLowerCase()
            ),
            r = window.navigator.standalone === !0,
            i = /android/.test(window.navigator.userAgent.toLowerCase()),
            u = window.matchMedia("(display-mode: fullscreen)").matches;
          return (r && a) || (i && u) || o;
        });
      return (o, a) => (
        U(),
        Y("main", Jn, [
          Qn,
          d("section", Zn, [
            d("div", el, [d("div", tl, [C(R(Vt), { class: "h-5 w-5" })]), nl]),
            d("div", ll, [
              (U(),
              Y(
                ge,
                null,
                _t(t, (r) =>
                  d(
                    "div",
                    {
                      key: r.name,
                      class:
                        "h-40 sm:h-32 aspect-video cursor-pointer rounded-md shadow-md hover:shadow-lg transition-all duration-300 ease-in-out",
                      style: $t({
                        backgroundImage: `url(${r.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }),
                      onClick: Le((i) => n(r), ["stop"]),
                    },
                    [d("div", al, [d("p", rl, Lt(r.name), 1)])],
                    12,
                    ol
                  )
                ),
                64
              )),
            ]),
            l.value
              ? At("", !0)
              : (U(),
                Y("div", il, [
                  d("div", sl, [
                    d("div", ul, [C(R(Bt), { class: "h-5 w-5" })]),
                    dl,
                  ]),
                  C(Yn),
                ])),
          ]),
        ])
      );
    },
  });
const pl = Pt(cl, [["__scopeId", "data-v-21aea69e"]]);
export { pl as default };
