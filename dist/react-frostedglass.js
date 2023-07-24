import { createContext as i, useContext as f, createRef as a, useState as l, useEffect as d } from "react";
const m = i({
  blurSize: "0.3em"
  // default blur size is 0.3em
});
function I(e) {
  const t = f(m);
  return /* @__PURE__ */ React.createElement("div", { ...e, style: { filter: `blur(${t.blurSize})` } }, e.children);
}
function b(e, t = "0.3em") {
  let r = a(!1);
  const n = t, [s, u] = l("0em");
  return v(e, n, u, r), [s, r];
}
function v(e, t, r, n) {
  const [s, u] = l(null);
  let c = () => {
    document.hasFocus() ? (r("0em"), n.current = !1) : (r(t), n.current = !0);
  };
  d(() => {
    if (!s) {
      let o = setInterval(c, e);
      u(o);
    }
    return clearInterval(s);
  }, []);
}
function x({ blurSize: e }) {
  return { ...Object.assign({}, {
    style: {
      filter: `blur(${e})`
    }
  }) };
}
export {
  m as FrostedContext,
  I as FrostedDiv,
  v as useFrostAfterEffect,
  b as useFrostedEffect,
  x as withFrost
};
