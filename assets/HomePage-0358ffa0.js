import {
  o as $,
  c as k,
  a as u,
  b as St,
  h as S,
  F as ie,
  i as j,
  p as B,
  w as M,
  r as h,
  d as p,
  e as _,
  f as F,
  g as U,
  j as se,
  T as $t,
  k as et,
  s as At,
  n as Lt,
  l as Ct,
  m as ge,
  q as N,
  u as H,
  t as L,
  v as Be,
  x as we,
  y as Fe,
  z as Ie,
  A as Ge,
  B as ze,
  C as Tt,
  D as tt,
  E as Ft,
  G as Ot,
  H as Pt,
  I as kt,
  _ as jt,
} from "./index-48a0adf7.js";
function Ke(e, t) {
  return (
    $(),
    k(
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
        u("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25",
        }),
      ]
    )
  );
}
function Mt(e, t) {
  return (
    $(),
    k(
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
        u("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3",
        }),
      ]
    )
  );
}
function Dt(e, t) {
  return (
    $(),
    k(
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
        u("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z",
        }),
      ]
    )
  );
}
function Nt(e, t) {
  return (
    $(),
    k(
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
        u("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M6 18L18 6M6 6l12 12",
        }),
      ]
    )
  );
}
function I(e, t, ...n) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...n) : l;
  }
  let o = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t
    )
      .map((l) => `"${l}"`)
      .join(", ")}.`
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(o, I), o);
}
var ye = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(ye || {}),
  G = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(G || {});
function q({
  visible: e = !0,
  features: t = 0,
  ourProps: n,
  theirProps: o,
  ...l
}) {
  var a;
  let r = ot(o, n),
    i = Object.assign(l, { props: r });
  if (e || (t & 2 && r.static)) return Le(i);
  if (t & 1) {
    let d = (a = r.unmount) == null || a ? 0 : 1;
    return I(d, {
      [0]() {
        return null;
      },
      [1]() {
        return Le({
          ...l,
          props: { ...r, hidden: !0, style: { display: "none" } },
        });
      },
    });
  }
  return Le(i);
}
function Le({ props: e, attrs: t, slots: n, slot: o, name: l }) {
  var a, r;
  let { as: i, ...d } = lt(e, ["unmount", "static"]),
    s = (a = n.default) == null ? void 0 : a.call(n, o),
    c = {};
  if (o) {
    let g = !1,
      f = [];
    for (let [m, v] of Object.entries(o))
      typeof v == "boolean" && (g = !0), v === !0 && f.push(m);
    g && (c["data-headlessui-state"] = f.join(" "));
  }
  if (i === "template") {
    if (
      ((s = nt(s ?? [])),
      Object.keys(d).length > 0 || Object.keys(t).length > 0)
    ) {
      let [g, ...f] = s ?? [];
      if (!Ht(g) || f.length > 0)
        throw new Error(
          [
            'Passing props on "template"!',
            "",
            `The current component <${l} /> is rendering a "template".`,
            "However we need to passthrough the following props:",
            Object.keys(d)
              .concat(Object.keys(t))
              .map((w) => w.trim())
              .filter((w, E, z) => z.indexOf(w) === E)
              .sort((w, E) => w.localeCompare(E))
              .map((w) => `  - ${w}`).join(`
`),
            "",
            "You can apply a few solutions:",
            [
              'Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',
              "Render a single element as the child so that we can forward the props onto that element.",
            ].map((w) => `  - ${w}`).join(`
`),
          ].join(`
`)
        );
      let m = ot((r = g.props) != null ? r : {}, d),
        v = St(g, m);
      for (let w in m)
        w.startsWith("on") && (v.props || (v.props = {}), (v.props[w] = m[w]));
      return v;
    }
    return Array.isArray(s) && s.length === 1 ? s[0] : s;
  }
  return S(i, Object.assign({}, d, c), { default: () => s });
}
function nt(e) {
  return e.flatMap((t) => (t.type === ie ? nt(t.children) : [t]));
}
function ot(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    n = {};
  for (let o of e)
    for (let l in o)
      l.startsWith("on") && typeof o[l] == "function"
        ? (n[l] != null || (n[l] = []), n[l].push(o[l]))
        : (t[l] = o[l]);
  if (t.disabled || t["aria-disabled"])
    return Object.assign(
      t,
      Object.fromEntries(Object.keys(n).map((o) => [o, void 0]))
    );
  for (let o in n)
    Object.assign(t, {
      [o](l, ...a) {
        let r = n[o];
        for (let i of r) {
          if (l instanceof Event && l.defaultPrevented) return;
          i(l, ...a);
        }
      },
    });
  return t;
}
function lt(e, t = []) {
  let n = Object.assign({}, e);
  for (let o of t) o in n && delete n[o];
  return n;
}
function Ht(e) {
  return e == null
    ? !1
    : typeof e.type == "string" ||
        typeof e.type == "object" ||
        typeof e.type == "function";
}
let Bt = 0;
function It() {
  return ++Bt;
}
function Re() {
  return It();
}
var at = ((e) => (
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
))(at || {});
function b(e) {
  var t;
  return e == null || e.value == null
    ? null
    : (t = e.value.$el) != null
    ? t
    : e.value;
}
let rt = Symbol("Context");
var C = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(C || {});
function Rt() {
  return Ve() !== null;
}
function Ve() {
  return j(rt, null);
}
function Vt(e) {
  B(rt, e);
}
var Ut = Object.defineProperty,
  qt = (e, t, n) =>
    t in e
      ? Ut(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Xe = (e, t, n) => (qt(e, typeof t != "symbol" ? t + "" : t, n), n);
class Wt {
  constructor() {
    Xe(this, "current", this.detect()), Xe(this, "currentId", 0);
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
let ue = new Wt();
function te(e) {
  if (ue.isServer) return null;
  if (e instanceof Node) return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = b(e);
    if (t) return t.ownerDocument;
  }
  return document;
}
let Oe = [
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
var W = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(W || {}),
  it = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(it || {}),
  Gt = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(Gt || {});
function zt(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(Oe)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      );
}
var st = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(st || {});
function Kt(e, t = 0) {
  var n;
  return e === ((n = te(e)) == null ? void 0 : n.body)
    ? !1
    : I(t, {
        [0]() {
          return e.matches(Oe);
        },
        [1]() {
          let o = e;
          for (; o !== null; ) {
            if (o.matches(Oe)) return !0;
            o = o.parentElement;
          }
          return !1;
        },
      });
}
var Xt = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(Xt || {});
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
function Q(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Yt = ["textarea", "input"].join(",");
function Jt(e) {
  var t, n;
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Yt)) !=
    null
    ? n
    : !1;
}
function Qt(e, t = (n) => n) {
  return e.slice().sort((n, o) => {
    let l = t(n),
      a = t(o);
    if (l === null || a === null) return 0;
    let r = l.compareDocumentPosition(a);
    return r & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : r & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
  });
}
function he(
  e,
  t,
  { sorted: n = !0, relativeTo: o = null, skipElements: l = [] } = {}
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
    i = Array.isArray(e) ? (n ? Qt(e) : e) : zt(e);
  l.length > 0 && i.length > 1 && (i = i.filter((v) => !l.includes(v))),
    (o = o ?? r.activeElement);
  let d = (() => {
      if (t & 5) return 1;
      if (t & 10) return -1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    s = (() => {
      if (t & 1) return 0;
      if (t & 2) return Math.max(0, i.indexOf(o)) - 1;
      if (t & 4) return Math.max(0, i.indexOf(o)) + 1;
      if (t & 8) return i.length - 1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    c = t & 32 ? { preventScroll: !0 } : {},
    g = 0,
    f = i.length,
    m;
  do {
    if (g >= f || g + f <= 0) return 0;
    let v = s + g;
    if (t & 16) v = (v + f) % f;
    else {
      if (v < 0) return 3;
      if (v >= f) return 1;
    }
    (m = i[v]), m == null || m.focus(c), (g += d);
  } while (m !== r.activeElement);
  return t & 6 && Jt(m) && m.select(), 2;
}
function Ye(e, t, n) {
  ue.isServer ||
    M((o) => {
      document.addEventListener(e, t, n),
        o(() => document.removeEventListener(e, t, n));
    });
}
function ut(e, t, n) {
  ue.isServer ||
    M((o) => {
      window.addEventListener(e, t, n),
        o(() => window.removeEventListener(e, t, n));
    });
}
function Zt(e, t, n = p(() => !0)) {
  function o(a, r) {
    if (!n.value || a.defaultPrevented) return;
    let i = r(a);
    if (i === null || !i.getRootNode().contains(i)) return;
    let d = (function s(c) {
      return typeof c == "function"
        ? s(c())
        : Array.isArray(c) || c instanceof Set
        ? c
        : [c];
    })(e);
    for (let s of d) {
      if (s === null) continue;
      let c = s instanceof HTMLElement ? s : b(s);
      if (
        (c != null && c.contains(i)) ||
        (a.composed && a.composedPath().includes(c))
      )
        return;
    }
    return !Kt(i, st.Loose) && i.tabIndex !== -1 && a.preventDefault(), t(a, i);
  }
  let l = h(null);
  Ye(
    "mousedown",
    (a) => {
      var r, i;
      n.value &&
        (l.value =
          ((i = (r = a.composedPath) == null ? void 0 : r.call(a)) == null
            ? void 0
            : i[0]) || a.target);
    },
    !0
  ),
    Ye(
      "click",
      (a) => {
        l.value && (o(a, () => l.value), (l.value = null));
      },
      !0
    ),
    ut(
      "blur",
      (a) =>
        o(a, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null
        ),
      !0
    );
}
var be = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(be || {});
let Pe = _({
  name: "Hidden",
  props: {
    as: { type: [Object, String], default: "div" },
    features: { type: Number, default: 1 },
  },
  setup(e, { slots: t, attrs: n }) {
    return () => {
      let { features: o, ...l } = e,
        a = {
          "aria-hidden": (o & 2) === 2 ? !0 : void 0,
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
            ...((o & 4) === 4 && (o & 2) !== 2 && { display: "none" }),
          },
        };
      return q({
        ourProps: a,
        theirProps: l,
        slot: {},
        attrs: n,
        slots: t,
        name: "Hidden",
      });
    };
  },
});
function en() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function xe() {
  let e = [],
    t = {
      addEventListener(n, o, l, a) {
        return (
          n.addEventListener(o, l, a),
          t.add(() => n.removeEventListener(o, l, a))
        );
      },
      requestAnimationFrame(...n) {
        let o = requestAnimationFrame(...n);
        t.add(() => cancelAnimationFrame(o));
      },
      nextFrame(...n) {
        t.requestAnimationFrame(() => {
          t.requestAnimationFrame(...n);
        });
      },
      setTimeout(...n) {
        let o = setTimeout(...n);
        t.add(() => clearTimeout(o));
      },
      style(n, o, l) {
        let a = n.style.getPropertyValue(o);
        return (
          Object.assign(n.style, { [o]: l }),
          this.add(() => {
            Object.assign(n.style, { [o]: a });
          })
        );
      },
      group(n) {
        let o = xe();
        return n(o), this.add(() => o.dispose());
      },
      add(n) {
        return (
          e.push(n),
          () => {
            let o = e.indexOf(n);
            if (o >= 0) for (let l of e.splice(o, 1)) l();
          }
        );
      },
      dispose() {
        for (let n of e.splice(0)) n();
      },
    };
  return t;
}
var re = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(re || {});
function tn() {
  let e = h(0);
  return (
    ut("keydown", (t) => {
      t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
    }),
    e
  );
}
function dt(e, t, n, o) {
  ue.isServer ||
    M((l) => {
      (e = e ?? window),
        e.addEventListener(t, n, o),
        l(() => e.removeEventListener(t, n, o));
    });
}
function ct(e) {
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
function nn(e) {
  function t() {
    document.readyState !== "loading" &&
      (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" &&
    typeof document < "u" &&
    (document.addEventListener("DOMContentLoaded", t), t());
}
function ft(e) {
  if (!e) return new Set();
  if (typeof e == "function") return new Set(e());
  let t = new Set();
  for (let n of e.value) {
    let o = b(n);
    o instanceof HTMLElement && t.add(o);
  }
  return t;
}
var pt = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.InitialFocus = 2)] = "InitialFocus"),
  (e[(e.TabLock = 4)] = "TabLock"),
  (e[(e.FocusLock = 8)] = "FocusLock"),
  (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
  (e[(e.All = 30)] = "All"),
  e
))(pt || {});
let le = Object.assign(
    _({
      name: "FocusTrap",
      props: {
        as: { type: [Object, String], default: "div" },
        initialFocus: { type: Object, default: null },
        features: { type: Number, default: 30 },
        containers: { type: [Object, Function], default: h(new Set()) },
      },
      inheritAttrs: !1,
      setup(e, { attrs: t, slots: n, expose: o }) {
        let l = h(null);
        o({ el: l, $el: l });
        let a = p(() => te(l)),
          r = h(!1);
        F(() => (r.value = !0)),
          U(() => (r.value = !1)),
          ln(
            { ownerDocument: a },
            p(() => r.value && !!(e.features & 16))
          );
        let i = an(
          {
            ownerDocument: a,
            container: l,
            initialFocus: p(() => e.initialFocus),
          },
          p(() => r.value && !!(e.features & 2))
        );
        rn(
          {
            ownerDocument: a,
            container: l,
            containers: e.containers,
            previousActiveElement: i,
          },
          p(() => r.value && !!(e.features & 8))
        );
        let d = tn();
        function s(m) {
          let v = b(l);
          v &&
            ((w) => w())(() => {
              I(d.value, {
                [re.Forwards]: () => {
                  he(v, W.First, { skipElements: [m.relatedTarget] });
                },
                [re.Backwards]: () => {
                  he(v, W.Last, { skipElements: [m.relatedTarget] });
                },
              });
            });
        }
        let c = h(!1);
        function g(m) {
          m.key === "Tab" &&
            ((c.value = !0),
            requestAnimationFrame(() => {
              c.value = !1;
            }));
        }
        function f(m) {
          if (!r.value) return;
          let v = ft(e.containers);
          b(l) instanceof HTMLElement && v.add(b(l));
          let w = m.relatedTarget;
          w instanceof HTMLElement &&
            w.dataset.headlessuiFocusGuard !== "true" &&
            (mt(v, w) ||
              (c.value
                ? he(
                    b(l),
                    I(d.value, {
                      [re.Forwards]: () => W.Next,
                      [re.Backwards]: () => W.Previous,
                    }) | W.WrapAround,
                    { relativeTo: m.target }
                  )
                : m.target instanceof HTMLElement && Q(m.target)));
        }
        return () => {
          let m = {},
            v = { ref: l, onKeydown: g, onFocusout: f },
            { features: w, initialFocus: E, containers: z, ...T } = e;
          return S(ie, [
            !!(w & 4) &&
              S(Pe, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: s,
                features: be.Focusable,
              }),
            q({
              ourProps: v,
              theirProps: { ...t, ...T },
              slot: m,
              attrs: t,
              slots: n,
              name: "FocusTrap",
            }),
            !!(w & 4) &&
              S(Pe, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: s,
                features: be.Focusable,
              }),
          ]);
        };
      },
    }),
    { features: pt }
  ),
  Y = [];
nn(() => {
  function e(t) {
    t.target instanceof HTMLElement &&
      t.target !== document.body &&
      Y[0] !== t.target &&
      (Y.unshift(t.target),
      (Y = Y.filter((n) => n != null && n.isConnected)),
      Y.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }),
    window.addEventListener("mousedown", e, { capture: !0 }),
    window.addEventListener("focus", e, { capture: !0 }),
    document.body.addEventListener("click", e, { capture: !0 }),
    document.body.addEventListener("mousedown", e, { capture: !0 }),
    document.body.addEventListener("focus", e, { capture: !0 });
});
function on(e) {
  let t = h(Y.slice());
  return (
    se(
      [e],
      ([n], [o]) => {
        o === !0 && n === !1
          ? ct(() => {
              t.value.splice(0);
            })
          : o === !1 && n === !0 && (t.value = Y.slice());
      },
      { flush: "post" }
    ),
    () => {
      var n;
      return (n = t.value.find((o) => o != null && o.isConnected)) != null
        ? n
        : null;
    }
  );
}
function ln({ ownerDocument: e }, t) {
  let n = on(t);
  F(() => {
    M(
      () => {
        var o, l;
        t.value ||
          (((o = e.value) == null ? void 0 : o.activeElement) ===
            ((l = e.value) == null ? void 0 : l.body) &&
            Q(n()));
      },
      { flush: "post" }
    );
  }),
    U(() => {
      t.value && Q(n());
    });
}
function an({ ownerDocument: e, container: t, initialFocus: n }, o) {
  let l = h(null),
    a = h(!1);
  return (
    F(() => (a.value = !0)),
    U(() => (a.value = !1)),
    F(() => {
      se(
        [t, n, o],
        (r, i) => {
          if (r.every((s, c) => (i == null ? void 0 : i[c]) === s) || !o.value)
            return;
          let d = b(t);
          d &&
            ct(() => {
              var s, c;
              if (!a.value) return;
              let g = b(n),
                f = (s = e.value) == null ? void 0 : s.activeElement;
              if (g) {
                if (g === f) {
                  l.value = f;
                  return;
                }
              } else if (d.contains(f)) {
                l.value = f;
                return;
              }
              g
                ? Q(g)
                : he(d, W.First | W.NoScroll) === it.Error &&
                  console.warn(
                    "There are no focusable elements inside the <FocusTrap />"
                  ),
                (l.value = (c = e.value) == null ? void 0 : c.activeElement);
            });
        },
        { immediate: !0, flush: "post" }
      );
    }),
    l
  );
}
function rn(
  { ownerDocument: e, container: t, containers: n, previousActiveElement: o },
  l
) {
  var a;
  dt(
    (a = e.value) == null ? void 0 : a.defaultView,
    "focus",
    (r) => {
      if (!l.value) return;
      let i = ft(n);
      b(t) instanceof HTMLElement && i.add(b(t));
      let d = o.value;
      if (!d) return;
      let s = r.target;
      s && s instanceof HTMLElement
        ? mt(i, s)
          ? ((o.value = s), Q(s))
          : (r.preventDefault(), r.stopPropagation(), Q(d))
        : Q(o.value);
    },
    !0
  );
}
function mt(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
let Ce = new Map(),
  ae = new Map();
function Je(e, t = h(!0)) {
  M((n) => {
    var o;
    if (!t.value) return;
    let l = b(e);
    if (!l) return;
    n(function () {
      var r;
      if (!l) return;
      let i = (r = ae.get(l)) != null ? r : 1;
      if ((i === 1 ? ae.delete(l) : ae.set(l, i - 1), i !== 1)) return;
      let d = Ce.get(l);
      d &&
        (d["aria-hidden"] === null
          ? l.removeAttribute("aria-hidden")
          : l.setAttribute("aria-hidden", d["aria-hidden"]),
        (l.inert = d.inert),
        Ce.delete(l));
    });
    let a = (o = ae.get(l)) != null ? o : 0;
    ae.set(l, a + 1),
      a === 0 &&
        (Ce.set(l, {
          "aria-hidden": l.getAttribute("aria-hidden"),
          inert: l.inert,
        }),
        l.setAttribute("aria-hidden", "true"),
        (l.inert = !0));
  });
}
let vt = Symbol("ForcePortalRootContext");
function sn() {
  return j(vt, !1);
}
let Qe = _({
  name: "ForcePortalRoot",
  props: {
    as: { type: [Object, String], default: "template" },
    force: { type: Boolean, default: !1 },
  },
  setup(e, { slots: t, attrs: n }) {
    return (
      B(vt, e.force),
      () => {
        let { force: o, ...l } = e;
        return q({
          theirProps: l,
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
function un(e) {
  let t = te(e);
  if (!t) {
    if (e === null) return null;
    throw new Error(
      `[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`
    );
  }
  let n = t.getElementById("headlessui-portal-root");
  if (n) return n;
  let o = t.createElement("div");
  return o.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(o);
}
let dn = _({
    name: "Portal",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n }) {
      let o = h(null),
        l = p(() => te(o)),
        a = sn(),
        r = j(ht, null),
        i = h(a === !0 || r == null ? un(o.value) : r.resolveTarget());
      M(() => {
        a || (r != null && (i.value = r.resolveTarget()));
      });
      let d = j(ke, null);
      return (
        F(() => {
          let s = b(o);
          s && d && U(d.register(s));
        }),
        U(() => {
          var s, c;
          let g =
            (s = l.value) == null
              ? void 0
              : s.getElementById("headlessui-portal-root");
          g &&
            i.value === g &&
            i.value.children.length <= 0 &&
            ((c = i.value.parentElement) == null || c.removeChild(i.value));
        }),
        () => {
          if (i.value === null) return null;
          let s = { ref: o, "data-headlessui-portal": "" };
          return S(
            $t,
            { to: i.value },
            q({
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
  ke = Symbol("PortalParentContext");
function cn() {
  let e = j(ke, null),
    t = h([]);
  function n(a) {
    return t.value.push(a), e && e.register(a), () => o(a);
  }
  function o(a) {
    let r = t.value.indexOf(a);
    r !== -1 && t.value.splice(r, 1), e && e.unregister(a);
  }
  let l = { register: n, unregister: o, portals: t };
  return [
    t,
    _({
      name: "PortalWrapper",
      setup(a, { slots: r }) {
        return (
          B(ke, l),
          () => {
            var i;
            return (i = r.default) == null ? void 0 : i.call(r);
          }
        );
      },
    }),
  ];
}
let ht = Symbol("PortalGroupContext"),
  fn = _({
    name: "PortalGroup",
    props: {
      as: { type: [Object, String], default: "template" },
      target: { type: Object, default: null },
    },
    setup(e, { attrs: t, slots: n }) {
      let o = et({
        resolveTarget() {
          return e.target;
        },
      });
      return (
        B(ht, o),
        () => {
          let { target: l, ...a } = e;
          return q({
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
  gt = Symbol("StackContext");
var je = ((e) => ((e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e))(
  je || {}
);
function pn() {
  return j(gt, () => {});
}
function mn({ type: e, enabled: t, element: n, onUpdate: o }) {
  let l = pn();
  function a(...r) {
    o == null || o(...r), l(...r);
  }
  F(() => {
    se(
      t,
      (r, i) => {
        r ? a(0, e, n) : i === !0 && a(1, e, n);
      },
      { immediate: !0, flush: "sync" }
    );
  }),
    U(() => {
      t.value && a(1, e, n);
    }),
    B(gt, a);
}
let vn = Symbol("DescriptionContext");
function hn({ slot: e = h({}), name: t = "Description", props: n = {} } = {}) {
  let o = h([]);
  function l(a) {
    return (
      o.value.push(a),
      () => {
        let r = o.value.indexOf(a);
        r !== -1 && o.value.splice(r, 1);
      }
    );
  }
  return (
    B(vn, { register: l, slot: e, name: t, props: n }),
    p(() => (o.value.length > 0 ? o.value.join(" ") : void 0))
  );
}
function gn(e) {
  let t = At(e.getSnapshot());
  return (
    U(
      e.subscribe(() => {
        t.value = e.getSnapshot();
      })
    ),
    t
  );
}
function wn(e, t) {
  let n = e(),
    o = new Set();
  return {
    getSnapshot() {
      return n;
    },
    subscribe(l) {
      return o.add(l), () => o.delete(l);
    },
    dispatch(l, ...a) {
      let r = t[l].call(n, ...a);
      r && ((n = r), o.forEach((i) => i()));
    },
  };
}
function yn() {
  let e;
  return {
    before({ doc: t }) {
      var n;
      let o = t.documentElement;
      e = ((n = t.defaultView) != null ? n : window).innerWidth - o.clientWidth;
    },
    after({ doc: t, d: n }) {
      let o = t.documentElement,
        l = o.clientWidth - o.offsetWidth,
        a = e - l;
      n.style(o, "paddingRight", `${a}px`);
    },
  };
}
function bn() {
  if (!en()) return {};
  let e;
  return {
    before() {
      e = window.pageYOffset;
    },
    after({ doc: t, d: n, meta: o }) {
      function l(r) {
        return o.containers.flatMap((i) => i()).some((i) => i.contains(r));
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
              let { hash: d } = new URL(i.href),
                s = t.querySelector(d);
              s && !l(s) && (a = s);
            } catch {}
        },
        !0
      ),
        n.addEventListener(
          t,
          "touchmove",
          (r) => {
            r.target instanceof HTMLElement &&
              !l(r.target) &&
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
function xn() {
  return {
    before({ doc: e, d: t }) {
      t.style(e.documentElement, "overflow", "hidden");
    },
  };
}
function _n(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let J = wn(() => new Map(), {
  PUSH(e, t) {
    var n;
    let o =
      (n = this.get(e)) != null
        ? n
        : { doc: e, count: 0, d: xe(), meta: new Set() };
    return o.count++, o.meta.add(t), this.set(e, o), this;
  },
  POP(e, t) {
    let n = this.get(e);
    return n && (n.count--, n.meta.delete(t)), this;
  },
  SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
    let o = { doc: e, d: t, meta: _n(n) },
      l = [bn(), yn(), xn()];
    l.forEach(({ before: a }) => (a == null ? void 0 : a(o))),
      l.forEach(({ after: a }) => (a == null ? void 0 : a(o)));
  },
  SCROLL_ALLOW({ d: e }) {
    e.dispose();
  },
  TEARDOWN({ doc: e }) {
    this.delete(e);
  },
});
J.subscribe(() => {
  let e = J.getSnapshot(),
    t = new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let o = t.get(n.doc) === "hidden",
      l = n.count !== 0;
    ((l && !o) || (!l && o)) &&
      J.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
      n.count === 0 && J.dispatch("TEARDOWN", n);
  }
});
function En(e, t, n) {
  let o = gn(J),
    l = p(() => {
      let a = e.value ? o.value.get(e.value) : void 0;
      return a ? a.count > 0 : !1;
    });
  return (
    se(
      [e, t],
      ([a, r], [i], d) => {
        if (!a || !r) return;
        J.dispatch("PUSH", a, n);
        let s = !1;
        d(() => {
          s || (J.dispatch("POP", i ?? a, n), (s = !0));
        });
      },
      { immediate: !0 }
    ),
    l
  );
}
function Sn({ defaultContainers: e = [], portals: t } = {}) {
  let n = h(null),
    o = te(n);
  function l() {
    var a;
    let r = [];
    for (let i of e)
      i !== null &&
        (i instanceof HTMLElement
          ? r.push(i)
          : "value" in i && i.value instanceof HTMLElement && r.push(i.value));
    if (t != null && t.value) for (let i of t.value) r.push(i);
    for (let i of (a =
      o == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null
      ? a
      : [])
      i !== document.body &&
        i !== document.head &&
        i instanceof HTMLElement &&
        i.id !== "headlessui-portal-root" &&
        (i.contains(b(n)) || r.some((d) => i.contains(d)) || r.push(i));
    return r;
  }
  return {
    resolveContainers: l,
    contains(a) {
      return l().some((r) => r.contains(a));
    },
    mainTreeNodeRef: n,
    MainTreeNode() {
      return S(Pe, { features: be.Hidden, ref: n });
    },
  };
}
var $n = ((e) => (
  (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
))($n || {});
let Me = Symbol("DialogContext");
function wt(e) {
  let t = j(Me, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, wt), n);
  }
  return t;
}
let me = "DC8F892D-2EBD-447C-A4C8-A03058436FF4",
  An = _({
    name: "Dialog",
    inheritAttrs: !1,
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      open: { type: [Boolean, String], default: me },
      initialFocus: { type: Object, default: null },
      id: { type: String, default: () => `headlessui-dialog-${Re()}` },
    },
    emits: { close: (e) => !0 },
    setup(e, { emit: t, attrs: n, slots: o, expose: l }) {
      var a;
      let r = h(!1);
      F(() => {
        r.value = !0;
      });
      let i = h(0),
        d = Ve(),
        s = p(() =>
          e.open === me && d !== null ? (d.value & C.Open) === C.Open : e.open
        ),
        c = h(null),
        g = p(() => te(c));
      if ((l({ el: c, $el: c }), !(e.open !== me || d !== null)))
        throw new Error(
          "You forgot to provide an `open` prop to the `Dialog`."
        );
      if (typeof s.value != "boolean")
        throw new Error(
          `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${
            s.value === me ? void 0 : e.open
          }`
        );
      let f = p(() => (r.value && s.value ? 0 : 1)),
        m = p(() => f.value === 0),
        v = p(() => i.value > 1),
        w = j(Me, null) !== null,
        [E, z] = cn(),
        {
          resolveContainers: T,
          mainTreeNodeRef: K,
          MainTreeNode: de,
        } = Sn({
          portals: E,
          defaultContainers: [
            p(() => {
              var y;
              return (y = A.panelRef.value) != null ? y : c.value;
            }),
          ],
        }),
        ce = p(() => (v.value ? "parent" : "leaf")),
        ne = p(() => (d !== null ? (d.value & C.Closing) === C.Closing : !1)),
        Ee = p(() => (w || ne.value ? !1 : m.value)),
        fe = p(() => {
          var y, x, O;
          return (O = Array.from(
            (x =
              (y = g.value) == null
                ? void 0
                : y.querySelectorAll("body > *")) != null
              ? x
              : []
          ).find((P) =>
            P.id === "headlessui-portal-root"
              ? !1
              : P.contains(b(K)) && P instanceof HTMLElement
          )) != null
            ? O
            : null;
        });
      Je(fe, Ee);
      let Se = p(() => (v.value ? !0 : m.value)),
        $e = p(() => {
          var y, x, O;
          return (O = Array.from(
            (x =
              (y = g.value) == null
                ? void 0
                : y.querySelectorAll("[data-headlessui-portal]")) != null
              ? x
              : []
          ).find((P) => P.contains(b(K)) && P instanceof HTMLElement)) != null
            ? O
            : null;
        });
      Je($e, Se),
        mn({
          type: "Dialog",
          enabled: p(() => f.value === 0),
          element: c,
          onUpdate: (y, x) => {
            if (x === "Dialog")
              return I(y, {
                [je.Add]: () => (i.value += 1),
                [je.Remove]: () => (i.value -= 1),
              });
          },
        });
      let Ae = hn({
          name: "DialogDescription",
          slot: p(() => ({ open: s.value })),
        }),
        Z = h(null),
        A = {
          titleId: Z,
          panelRef: h(null),
          dialogState: f,
          setTitleId(y) {
            Z.value !== y && (Z.value = y);
          },
          close() {
            t("close", !1);
          },
        };
      B(Me, A);
      let oe = p(() => !(!m.value || v.value));
      Zt(
        T,
        (y, x) => {
          A.close(), Lt(() => (x == null ? void 0 : x.focus()));
        },
        oe
      );
      let R = p(() => !(v.value || f.value !== 0));
      dt((a = g.value) == null ? void 0 : a.defaultView, "keydown", (y) => {
        R.value &&
          (y.defaultPrevented ||
            (y.key === at.Escape &&
              (y.preventDefault(), y.stopPropagation(), A.close())));
      });
      let ee = p(() => !(ne.value || f.value !== 0 || w));
      return (
        En(g, ee, (y) => {
          var x;
          return { containers: [...((x = y.containers) != null ? x : []), T] };
        }),
        M((y) => {
          if (f.value !== 0) return;
          let x = b(c);
          if (!x) return;
          let O = new ResizeObserver((P) => {
            for (let pe of P) {
              let V = pe.target.getBoundingClientRect();
              V.x === 0 &&
                V.y === 0 &&
                V.width === 0 &&
                V.height === 0 &&
                A.close();
            }
          });
          O.observe(x), y(() => O.disconnect());
        }),
        () => {
          let { id: y, open: x, initialFocus: O, ...P } = e,
            pe = {
              ...n,
              ref: c,
              id: y,
              role: "dialog",
              "aria-modal": f.value === 0 ? !0 : void 0,
              "aria-labelledby": Z.value,
              "aria-describedby": Ae.value,
            },
            V = { open: f.value === 0 };
          return S(Qe, { force: !0 }, () => [
            S(dn, () =>
              S(fn, { target: c.value }, () =>
                S(Qe, { force: !1 }, () =>
                  S(
                    le,
                    {
                      initialFocus: O,
                      containers: T,
                      features: m.value
                        ? I(ce.value, {
                            parent: le.features.RestoreFocus,
                            leaf: le.features.All & ~le.features.FocusLock,
                          })
                        : le.features.None,
                    },
                    () =>
                      S(z, {}, () =>
                        q({
                          ourProps: pe,
                          theirProps: { ...P, ...n },
                          slot: V,
                          attrs: n,
                          slots: o,
                          visible: f.value === 0,
                          features: ye.RenderStrategy | ye.Static,
                          name: "Dialog",
                        })
                      )
                  )
                )
              )
            ),
            S(de),
          ]);
        }
      );
    },
  }),
  Ln = _({
    name: "DialogPanel",
    props: {
      as: { type: [Object, String], default: "div" },
      id: { type: String, default: () => `headlessui-dialog-panel-${Re()}` },
    },
    setup(e, { attrs: t, slots: n, expose: o }) {
      let l = wt("DialogPanel");
      o({ el: l.panelRef, $el: l.panelRef });
      function a(r) {
        r.stopPropagation();
      }
      return () => {
        let { id: r, ...i } = e,
          d = { id: r, ref: l.panelRef, onClick: a };
        return q({
          ourProps: d,
          theirProps: i,
          slot: { open: l.dialogState.value === 0 },
          attrs: t,
          slots: n,
          name: "DialogPanel",
        });
      };
    },
  });
function Cn(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return (t.called = !0), e(...n);
  };
}
function Te(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function ve(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var De = ((e) => ((e.Finished = "finished"), (e.Cancelled = "cancelled"), e))(
  De || {}
);
function Tn(e, t) {
  let n = xe();
  if (!e) return n.dispose;
  let { transitionDuration: o, transitionDelay: l } = getComputedStyle(e),
    [a, r] = [o, l].map((i) => {
      let [d = 0] = i
        .split(",")
        .filter(Boolean)
        .map((s) => (s.includes("ms") ? parseFloat(s) : parseFloat(s) * 1e3))
        .sort((s, c) => c - s);
      return d;
    });
  return (
    a !== 0 ? n.setTimeout(() => t("finished"), a + r) : t("finished"),
    n.add(() => t("cancelled")),
    n.dispose
  );
}
function Ze(e, t, n, o, l, a) {
  let r = xe(),
    i = a !== void 0 ? Cn(a) : () => {};
  return (
    ve(e, ...l),
    Te(e, ...t, ...n),
    r.nextFrame(() => {
      ve(e, ...n),
        Te(e, ...o),
        r.add(Tn(e, (d) => (ve(e, ...o, ...t), Te(e, ...l), i(d))));
    }),
    r.add(() => ve(e, ...t, ...n, ...o, ...l)),
    r.add(() => i("cancelled")),
    r.dispose
  );
}
function X(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Ue = Symbol("TransitionContext");
var Fn = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(Fn || {});
function On() {
  return j(Ue, null) !== null;
}
function Pn() {
  let e = j(Ue, null);
  if (e === null)
    throw new Error(
      "A <TransitionChild /> is used but it is missing a parent <TransitionRoot />."
    );
  return e;
}
function kn() {
  let e = j(qe, null);
  if (e === null)
    throw new Error(
      "A <TransitionChild /> is used but it is missing a parent <TransitionRoot />."
    );
  return e;
}
let qe = Symbol("NestingContext");
function _e(e) {
  return "children" in e
    ? _e(e.children)
    : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function yt(e) {
  let t = h([]),
    n = h(!1);
  F(() => (n.value = !0)), U(() => (n.value = !1));
  function o(a, r = G.Hidden) {
    let i = t.value.findIndex(({ id: d }) => d === a);
    i !== -1 &&
      (I(r, {
        [G.Unmount]() {
          t.value.splice(i, 1);
        },
        [G.Hidden]() {
          t.value[i].state = "hidden";
        },
      }),
      !_e(t) && n.value && (e == null || e()));
  }
  function l(a) {
    let r = t.value.find(({ id: i }) => i === a);
    return (
      r
        ? r.state !== "visible" && (r.state = "visible")
        : t.value.push({ id: a, state: "visible" }),
      () => o(a, G.Unmount)
    );
  }
  return { children: t, register: l, unregister: o };
}
let bt = ye.RenderStrategy,
  Ne = _({
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
    setup(e, { emit: t, attrs: n, slots: o, expose: l }) {
      let a = h(0);
      function r() {
        (a.value |= C.Opening), t("beforeEnter");
      }
      function i() {
        (a.value &= ~C.Opening), t("afterEnter");
      }
      function d() {
        (a.value |= C.Closing), t("beforeLeave");
      }
      function s() {
        (a.value &= ~C.Closing), t("afterLeave");
      }
      if (!On() && Rt())
        return () =>
          S(
            xt,
            {
              ...e,
              onBeforeEnter: r,
              onAfterEnter: i,
              onBeforeLeave: d,
              onAfterLeave: s,
            },
            o
          );
      let c = h(null),
        g = p(() => (e.unmount ? G.Unmount : G.Hidden));
      l({ el: c, $el: c });
      let { show: f, appear: m } = Pn(),
        { register: v, unregister: w } = kn(),
        E = h(f.value ? "visible" : "hidden"),
        z = { value: !0 },
        T = Re(),
        K = { value: !1 },
        de = yt(() => {
          !K.value && E.value !== "hidden" && ((E.value = "hidden"), w(T), s());
        });
      F(() => {
        let A = v(T);
        U(A);
      }),
        M(() => {
          if (g.value === G.Hidden && T) {
            if (f.value && E.value !== "visible") {
              E.value = "visible";
              return;
            }
            I(E.value, { hidden: () => w(T), visible: () => v(T) });
          }
        });
      let ce = X(e.enter),
        ne = X(e.enterFrom),
        Ee = X(e.enterTo),
        fe = X(e.entered),
        Se = X(e.leave),
        $e = X(e.leaveFrom),
        Ae = X(e.leaveTo);
      F(() => {
        M(() => {
          if (E.value === "visible") {
            let A = b(c);
            if (A instanceof Comment && A.data === "")
              throw new Error(
                "Did you forget to passthrough the `ref` to the actual DOM node?"
              );
          }
        });
      });
      function Z(A) {
        let oe = z.value && !m.value,
          R = b(c);
        !R ||
          !(R instanceof HTMLElement) ||
          oe ||
          ((K.value = !0),
          f.value && r(),
          f.value || d(),
          A(
            f.value
              ? Ze(R, ce, ne, Ee, fe, (ee) => {
                  (K.value = !1), ee === De.Finished && i();
                })
              : Ze(R, Se, $e, Ae, fe, (ee) => {
                  (K.value = !1),
                    ee === De.Finished &&
                      (_e(de) || ((E.value = "hidden"), w(T), s()));
                })
          ));
      }
      return (
        F(() => {
          se(
            [f],
            (A, oe, R) => {
              Z(R), (z.value = !1);
            },
            { immediate: !0 }
          );
        }),
        B(qe, de),
        Vt(
          p(() => I(E.value, { visible: C.Open, hidden: C.Closed }) | a.value)
        ),
        () => {
          let {
              appear: A,
              show: oe,
              enter: R,
              enterFrom: ee,
              enterTo: y,
              entered: x,
              leave: O,
              leaveFrom: P,
              leaveTo: pe,
              ...V
            } = e,
            _t = { ref: c },
            Et = {
              ...V,
              ...(m.value && f.value && ue.isServer
                ? { class: Ct([n.class, V.class, ...ce, ...ne]) }
                : {}),
            };
          return q({
            theirProps: Et,
            ourProps: _t,
            slot: {},
            slots: o,
            attrs: n,
            features: bt,
            visible: E.value === "visible",
            name: "TransitionChild",
          });
        }
      );
    },
  }),
  jn = Ne,
  xt = _({
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
    setup(e, { emit: t, attrs: n, slots: o }) {
      let l = Ve(),
        a = p(() =>
          e.show === null && l !== null ? (l.value & C.Open) === C.Open : e.show
        );
      M(() => {
        if (![!0, !1].includes(a.value))
          throw new Error(
            'A <Transition /> is used but it is missing a `:show="true | false"` prop.'
          );
      });
      let r = h(a.value ? "visible" : "hidden"),
        i = yt(() => {
          r.value = "hidden";
        }),
        d = h(!0),
        s = { show: a, appear: p(() => e.appear || !d.value) };
      return (
        F(() => {
          M(() => {
            (d.value = !1),
              a.value ? (r.value = "visible") : _e(i) || (r.value = "hidden");
          });
        }),
        B(qe, i),
        B(Ue, s),
        () => {
          let c = lt(e, [
              "show",
              "appear",
              "unmount",
              "onBeforeEnter",
              "onBeforeLeave",
              "onAfterEnter",
              "onAfterLeave",
            ]),
            g = { unmount: e.unmount };
          return q({
            ourProps: { ...g, as: "template" },
            theirProps: {},
            slot: {},
            slots: {
              ...o,
              default: () => [
                S(
                  jn,
                  {
                    onBeforeEnter: () => t("beforeEnter"),
                    onAfterEnter: () => t("afterEnter"),
                    onBeforeLeave: () => t("beforeLeave"),
                    onAfterLeave: () => t("afterLeave"),
                    ...n,
                    ...g,
                    ...c,
                  },
                  o.default
                ),
              ],
            },
            attrs: {},
            features: bt,
            visible: r.value === "visible",
            name: "Transition",
          });
        }
      );
    },
  });
const Mn = u(
    "div",
    { class: "fixed inset-0 bg-black bg-opacity-25" },
    null,
    -1
  ),
  Dn = { class: "fixed inset-0 overflow-y-auto" },
  Nn = { class: "flex min-h-full items-center justify-center p-4 text-center" },
  He = _({
    __name: "DialogComponent",
    props: { modelValue: { type: Boolean, required: !0 } },
    emits: ["update:modelValue"],
    setup(e, { emit: t }) {
      const n = e,
        o = p({
          get: () => n.modelValue,
          set: (a) => t("update:modelValue", a),
        }),
        l = () => {
          o.value = !1;
        };
      return (a, r) => (
        $(),
        ge(
          H(xt),
          { appear: "", show: o.value, as: "template" },
          {
            default: N(() => [
              L(
                H(An),
                { as: "div", class: "relative z-10", onClose: l },
                {
                  default: N(() => [
                    L(
                      H(Ne),
                      {
                        as: "template",
                        enter: "duration-300 ease-out",
                        "enter-from": "opacity-0",
                        "enter-to": "opacity-100",
                        leave: "duration-200 ease-in",
                        "leave-from": "opacity-100",
                        "leave-to": "opacity-0",
                      },
                      { default: N(() => [Mn]), _: 1 }
                    ),
                    u("div", Dn, [
                      u("div", Nn, [
                        L(
                          H(Ne),
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
                            default: N(() => [
                              L(
                                H(Ln),
                                {
                                  class:
                                    "w-full transform overflow-hidden transition-all max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-7xl flex items-center justify-center",
                                },
                                {
                                  default: N(() => [Be(a.$slots, "default")]),
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
  Hn = { class: "flex flex-col items-center justify-center gap-y-6" },
  Bn = u(
    "div",
    { class: "flex flex-col items-center justify-center" },
    [
      u(
        "h1",
        { class: "text-2xl sm:text-4xl font-bold text-center text-gray-800" },
        " Instale o aplicativo "
      ),
      u(
        "p",
        { class: "mt-2 text-sm sm:text-base text-center text-gray-600" },
        " Selecione a plataforma que deseja instalar o aplicativo "
      ),
    ],
    -1
  ),
  In = {
    class:
      "flex flex-col sm:flex-row items-center justify-between w-full gap-4",
  },
  Rn = u(
    "div",
    { class: "text-xl font-medium leading-6 text-white" },
    " Instalar App no iPhone ",
    -1
  ),
  Vn = u(
    "div",
    null,
    [
      u(
        "p",
        { class: "text-sm text-gray-300 mb-1" },
        " Para instalar o aplicativo no iPhone, siga os passos abaixo: "
      ),
      u(
        "ol",
        {
          class:
            "list-decimal list-inside text-sm text-gray-200 flex flex-col gap-y-2",
        },
        [
          u("li", null, "Abra o aplicativo no Safari"),
          u(
            "li",
            null,
            ' Clique no ícone de "compartilhamento" no canto inferior do smartphone '
          ),
          u("li", null, 'Clique em "Adicionar á tela de inicio"'),
          u("li", null, 'Clique em "Adicionar" no canto superior direito'),
        ]
      ),
    ],
    -1
  ),
  Un = u(
    "div",
    { class: "text-xl font-medium leading-6 text-white" },
    " Instalar App no Android ",
    -1
  ),
  qn = u(
    "div",
    null,
    [
      u(
        "p",
        { class: "text-sm text-gray-300 mb-1" },
        " Para instalar o aplicativo no Android, siga os passos abaixo: "
      ),
      u(
        "ol",
        {
          class:
            "list-decimal list-inside text-sm text-gray-200 flex flex-col gap-y-2",
        },
        [
          u("li", null, "Abra o aplicativo no Google Chrome"),
          u(
            "li",
            null,
            ' Clique no ícone de "Mais opções" no canto superior do smartphone '
          ),
          u(
            "li",
            null,
            'Clique em "Instalar Aplicativo" ou "Adicionar a tela Inicial"'
          ),
          u(
            "li",
            null,
            ' Confirme a ação clicando em "Instalar" no popup que aparece na tela '
          ),
        ]
      ),
    ],
    -1
  ),
  Wn = _({
    __name: "InstallInformation",
    setup(e) {
      const t = et({ apple: !1, android: !1 }),
        n = () => {
          (t.apple = !1), (t.android = !1);
        };
      return (o, l) => (
        $(),
        k(
          ie,
          null,
          [
            u("div", Hn, [
              Bn,
              u("div", In, [
                u(
                  "button",
                  {
                    class:
                      "w-full bg-gray-800 text-white rounded-md py-4 px-4 hover:bg-gray-700 font-semibold uppercase text-sm transition-all duration-300 flex items-center justify-center gap-x-2",
                    onClick:
                      l[0] || (l[0] = we((a) => (t.apple = !0), ["stop"])),
                  },
                  [L(H(Ke), { class: "h-5 w-5" }), Fe(" Apple ")]
                ),
                u(
                  "button",
                  {
                    class:
                      "w-full bg-gray-800 text-white rounded-md py-4 px-4 hover:bg-gray-700 font-semibold uppercase text-sm transition-all duration-300 flex items-center justify-center gap-x-2",
                    onClick:
                      l[1] || (l[1] = we((a) => (t.android = !0), ["stop"])),
                  },
                  [L(H(Ke), { class: "h-5 w-5" }), Fe(" Android ")]
                ),
              ]),
            ]),
            L(
              He,
              {
                modelValue: t.apple,
                "onUpdate:modelValue": l[2] || (l[2] = (a) => (t.apple = a)),
              },
              {
                default: N(() => [
                  u(
                    "div",
                    {
                      class:
                        "max-w-md bg-gray-700 w-full h-full p-4 rounded-xl text-left flex flex-col gap-y-4",
                    },
                    [
                      Rn,
                      Vn,
                      u(
                        "div",
                        { class: "flex justify-center sm:justify-end w-full" },
                        [
                          u(
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
            L(
              He,
              {
                modelValue: t.android,
                "onUpdate:modelValue": l[3] || (l[3] = (a) => (t.android = a)),
              },
              {
                default: N(() => [
                  u(
                    "div",
                    {
                      class:
                        "max-w-md bg-gray-700 w-full h-full p-4 rounded-xl text-left flex flex-col gap-y-4",
                    },
                    [
                      Un,
                      qn,
                      u(
                        "div",
                        { class: "flex justify-center sm:justify-end w-full" },
                        [
                          u(
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
  Gn = "/assets/americanroulette-20bef590.png",
  zn = "/assets/aviator-c3b7c966.png",
  Kn = "/assets/crash-a22073f2.jpeg",
  Xn = "/assets/crazytime-83e5549a.png",
  Yn = "/assets/footballstudio-446c2838.png",
  Jn = "/assets/fortunetiger-e3ced4a2.png",
  Qn = "/assets/jetx-4ba17389.png",
  Zn = "/assets/mines-e8a3dc52.webp",
  eo = "/assets/penaltyshootout-57c56e08.png",
  to = "/assets/spaceman-292d26f1.png",
  no = {
    class: "bg-gray-700 p-4 rounded-xl text-left flex flex-col gap-y-4 w-full",
  },
  oo = { class: "flex items-center px-2" },
  lo = { class: "grow text-white uppercase font-semibold text-sm" },
  ao = {
    class:
      "bg-gradient-to-tr from-gray-950 to-gray-900 h-52 rounded-md p-2 text-white flex flex-col items-center",
  },
  ro = ["src"],
  io = _({
    __name: "GameDialogComponent",
    props: {
      modelValue: { type: Boolean, required: !0 },
      iframeUrl: { type: String, required: !0 },
      title: { type: String, required: !0 },
    },
    emits: ["update:modelValue"],
    setup(e, { emit: t }) {
      const n = e,
        o = p({
          get: () => n.modelValue,
          set: (a) => t("update:modelValue", a),
        }),
        l = () => {
          o.value = !1;
        };
      return (a, r) => (
        $(),
        ge(
          He,
          {
            modelValue: o.value,
            "onUpdate:modelValue": r[0] || (r[0] = (i) => (o.value = i)),
          },
          {
            default: N(() => [
              u("div", no, [
                u("div", oo, [
                  u("p", lo, Ie(e.title), 1),
                  u(
                    "div",
                    {
                      class:
                        "cursor-pointer hover:bg-white/30 rounded-full p-1 transition-all duration-300 ease-in-out z-10",
                      onClick: l,
                    },
                    [L(H(Nt), { class: "h-6 w-6 text-white" })]
                  ),
                ]),
                u("div", ao, [Be(a.$slots, "default")]),
                u(
                  "iframe",
                  {
                    src: e.iframeUrl,
                    frameborder: "0",
                    class: "w-full rounded-md h-[60vh]",
                  },
                  null,
                  8,
                  ro
                ),
              ]),
            ]),
            _: 3,
          },
          8,
          ["modelValue"]
        )
      );
    },
  }),
  so = {
    class:
      "w-full bg-green-700 text-white rounded-md py-4 px-4 hover:bg-green-800 font-semibold uppercase text-sm transition-all duration-300 flex items-center justify-center gap-x-2",
  },
  uo = u(
    "svg",
    {
      class: "animate-spin h-5 w-5 text-white",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
    },
    [
      u("circle", {
        class: "opacity-25",
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        "stroke-width": "4",
      }),
      u("path", {
        class: "opacity-75",
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
      }),
    ],
    -1
  ),
  co = [uo],
  fo = _({
    __name: "GenericButton",
    props: { loading: { type: Boolean, default: !1 } },
    setup(e) {
      const t = e;
      return (n, o) => (
        $(),
        k("button", so, [
          Ge(u("div", null, [Be(n.$slots, "default")], 512), [
            [ze, !t.loading],
          ]),
          Ge(u("div", null, co, 512), [[ze, t.loading]]),
        ])
      );
    },
  }),
  po = { class: "flex flex-col items-center justify-center h-full gap-4" },
  mo = { class: "bg-gray-700 text-3xl font-light px-5 py-7 rounded-md" },
  D = _({
    __name: "ExampleComponent",
    setup(e) {
      const t = h(null),
        n = h(!1),
        o = () => {
          n.value = !0;
          const l = 300 + Math.random() * 1e3;
          setTimeout(() => {
            (t.value = Math.floor(Math.random() * 100)), (n.value = !1);
          }, l);
        };
      return (l, a) => {
        var r;
        return (
          $(),
          k("div", po, [
            u(
              "div",
              mo,
              Ie(
                ((r = t.value) == null
                  ? void 0
                  : r.toString().padStart(3, "0")) || "---"
              ),
              1
            ),
            L(
              fo,
              { loading: n.value, onClick: we(o, ["stop"]) },
              { default: N(() => [Fe(" Gerar número da sorte ")]), _: 1 },
              8,
              ["loading", "onClick"]
            ),
          ])
        );
      };
    },
  }),
  vo = {
    class:
      "grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-6 place-items-center",
  },
  ho = ["onClick"],
  go = {
    class:
      "bg-gradient-to-tr from-gray-900 to-transparent h-full w-full opacity-50 hover:opacity-100 duration-300 transition-opacity flex items-end rounded-md",
  },
  wo = { class: "px-2 py-1 font-semibold uppercase text-sm" },
  yo = _({
    __name: "AvailableGames",
    setup(e) {
      const t = [
          {
            name: "American Roulette",
            image: Gn,
            iframeUrl: "https://www.royalbets.vip/home/casino-live",
            component: D,
          },
          {
            name: "Aviator",
            image: zn,
            iframeUrl: "https://www.royalbets.vip/home/casino-live",
            component: D,
          },
          {
            name: "Double",
            image: Kn,
            iframeUrl: "https://www.royalbets.vip/home/casino-live",
            component: D,
          },
          {
            name: "Crazy Time",
            image: Xn,
            iframeUrl: "https://www.royalbets.vip/home/casino-live",
            component: D,
          },
          {
            name: "Football Studio",
            image: Yn,
            iframeUrl: "https://www.royalbets.vip/home/casino-live",
            component: D,
          },
          {
            name: "Fortune Tiger",
            image: Jn,
            iframeUrl: "https://www.royalbets.vip/home/casino-live",
            component: D,
          },
          {
            name: "Jet X",
            image: Qn,
            iframeUrl: "https://www.royalbets.vip/home/casino-live",
            component: D,
          },
          {
            name: "Mines",
            image: Zn,
            iframeUrl: "https://www.royalbets.vip/home/casino-live",
            component: D,
          },
          {
            name: "Penalty Shootout",
            image: eo,
            iframeUrl: "https://www.royalbets.vip/home/casino-live",
            component: D,
          },
          {
            name: "Spaceman",
            image: to,
            iframeUrl: "https://www.royalbets.vip/home/casino-live",
            component: D,
          },
        ],
        n = (a) => {
          (l.value = a), (o.value = !0);
        },
        o = h(!1),
        l = h(null);
      return (a, r) => (
        $(),
        k(
          ie,
          null,
          [
            u("div", vo, [
              ($(),
              k(
                ie,
                null,
                Tt(t, (i) =>
                  u(
                    "div",
                    {
                      key: i.name,
                      class:
                        "h-40 sm:h-32 aspect-video cursor-pointer rounded-md shadow-md hover:shadow-lg transition-all duration-300 ease-in-out",
                      style: Ft({
                        backgroundImage: `url(${i.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }),
                      onClick: we((d) => n(i), ["stop"]),
                    },
                    [u("div", go, [u("p", wo, Ie(i.name), 1)])],
                    12,
                    ho
                  )
                ),
                64
              )),
            ]),
            l.value
              ? ($(),
                ge(
                  io,
                  {
                    key: 0,
                    modelValue: o.value,
                    "onUpdate:modelValue":
                      r[0] || (r[0] = (i) => (o.value = i)),
                    title: l.value.name,
                    "iframe-url": l.value.iframeUrl,
                  },
                  {
                    default: N(() => [($(), ge(Ot(l.value.component)))]),
                    _: 1,
                  },
                  8,
                  ["modelValue", "title", "iframe-url"]
                ))
              : tt("", !0),
          ],
          64
        )
      );
    },
  }),
  We = (e) => (Pt("data-v-8dfa5260"), (e = e()), kt(), e),
  bo = {
    class:
      "min-h-screen h-screen text-white flex flex-col bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden items-center",
  },
  xo = We(() =>
    u(
      "header",
      { class: "bg-gray-800 h-20 w-full flex items-center px-5 py-1" },
      [u("p", { class: "text-2xl px-2 py-2" }, "IA Cassino")],
      -1
    )
  ),
  _o = {
    class:
      "flex flex-col gap-y-8 grow overflow-y-auto custom-scrollbar max-w-5xl w-full p-6",
  },
  Eo = { class: "flex items-center gap-x-2" },
  So = {
    class: "bg-gray-600 rounded-full flex items-center justify-center p-1.5",
  },
  $o = We(() => u("p", null, "Jogos Disponíveis", -1)),
  Ao = { key: 0, class: "flex flex-col gap-y-3" },
  Lo = { class: "flex items-center gap-x-2" },
  Co = {
    class: "bg-gray-600 rounded-full flex items-center justify-center p-1.5",
  },
  To = We(() => u("p", null, "Instalação do App", -1)),
  Fo = _({
    __name: "HomePage",
    setup(e) {
      const t = p(() => {
        const n = window.matchMedia("(display-mode: standalone)").matches,
          o = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase()),
          l = window.navigator.standalone === !0,
          a = /android/.test(window.navigator.userAgent.toLowerCase()),
          r = window.matchMedia("(display-mode: fullscreen)").matches;
        return (l && o) || (a && r) || n;
      });
      return (n, o) => (
        $(),
        k("main", bo, [
          xo,
          u("section", _o, [
            u("div", Eo, [u("div", So, [L(H(Dt), { class: "h-5 w-5" })]), $o]),
            L(yo),
            t.value
              ? tt("", !0)
              : ($(),
                k("div", Ao, [
                  u("div", Lo, [
                    u("div", Co, [L(H(Mt), { class: "h-5 w-5" })]),
                    To,
                  ]),
                  L(Wn),
                ])),
          ]),
        ])
      );
    },
  });
const Po = jt(Fo, [["__scopeId", "data-v-8dfa5260"]]);
export { Po as default };
