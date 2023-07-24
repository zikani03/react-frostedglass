import u, { createContext as d, useContext as s, createRef as m, useState as o, useEffect as b } from "react";
const i = d({
  blurSize: "0.3em"
  // default blur size is 0.3em
});
function v(e) {
  const t = s(i);
  return /* @__PURE__ */ u.createElement("div", { ...e, style: { filter: `blur(${t.blurSize})` } }, e.children);
}
function x(e) {
  const t = s(i);
  return /* @__PURE__ */ u.createElement("label", { ...e, style: { filter: `blur(${t.blurSize})` } }, e.children);
}
function z(e) {
  const t = s(i);
  return /* @__PURE__ */ u.createElement("span", { ...e, style: { filter: `blur(${t.blurSize})` } }, e.children);
}
function E(e, t = "0.3em") {
  let r = m(!1);
  const n = t, [l, c] = o("0em");
  return F(e, n, c, r), [l, r];
}
function F(e, t, r, n) {
  const [l, c] = o(null);
  let f = () => {
    document.hasFocus() ? (r("0em"), n.current = !1) : (r(t), n.current = !0);
  };
  b(() => {
    if (!l) {
      let a = setInterval(f, e);
      c(a);
    }
    return clearInterval(l);
  }, []);
}
function I({ blurSize: e }) {
  return { ...Object.assign({}, {
    style: {
      filter: `blur(${e})`
    }
  }) };
}
export {
  i as FrostedContext,
  v as FrostedDiv,
  x as FrostedLabel,
  z as FrostedSpan,
  F as useFrostAfterEffect,
  E as useFrostedEffect,
  I as withFrost
};
