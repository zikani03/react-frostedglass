import { createContext as d, useContext as s, createRef as m, useState as i, useEffect as b } from "react";
const c = d({
  blurSize: "0.3em"
  // default blur size is 0.3em
});
function F(e) {
  const t = s(c);
  return /* @__PURE__ */ React.createElement("div", { ...e, style: { filter: `blur(${t.blurSize})` } }, e.children);
}
function x(e) {
  const t = s(c);
  return /* @__PURE__ */ React.createElement("label", { ...e, style: { filter: `blur(${t.blurSize})` } }, e.children);
}
function S(e) {
  const t = s(c);
  return /* @__PURE__ */ React.createElement("span", { ...e, style: { filter: `blur(${t.blurSize})` } }, e.children);
}
function v(e, t = "0.3em") {
  let r = m(!1);
  const n = t, [l, u] = i("0em");
  return o(e, n, u, r), [l, r];
}
function o(e, t, r, n) {
  const [l, u] = i(null);
  let a = () => {
    document.hasFocus() ? (r("0em"), n.current = !1) : (r(t), n.current = !0);
  };
  b(() => {
    if (!l) {
      let f = setInterval(a, e);
      u(f);
    }
    return clearInterval(l);
  }, []);
}
function z({ blurSize: e }) {
  return { ...Object.assign({}, {
    style: {
      filter: `blur(${e})`
    }
  }) };
}
const I = {
  FrostedContext: c,
  FrostedDiv: F,
  FrostedLabel: x,
  FrostedSpan: S,
  withFrost: z,
  useFrostedEffect: v,
  useFrostAfterEffect: o
};
export {
  I as default
};
