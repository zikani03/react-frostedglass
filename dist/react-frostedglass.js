import { createContext as a, useContext as u, createRef as d, useState as i, useEffect as m } from "react";
const s = a({
  blurSize: "0.3em"
  // default blur size is 0.3em
});
function S(e) {
  const t = u(s);
  return /* @__PURE__ */ React.createElement("div", { ...e, style: { filter: `blur(${t.blurSize})` } }, e.children);
}
function v(e) {
  const t = u(s);
  return /* @__PURE__ */ React.createElement("label", { ...e, style: { filter: `blur(${t.blurSize})` } }, e.children);
}
function x(e) {
  const t = u(s);
  return /* @__PURE__ */ React.createElement("span", { ...e, style: { filter: `blur(${t.blurSize})` } }, e.children);
}
function z(e, t = "0.3em") {
  let r = d(!1);
  const n = t, [l, c] = i("0em");
  return b(e, n, c, r), [l, r];
}
function b(e, t, r, n) {
  const [l, c] = i(null);
  let o = () => {
    document.hasFocus() ? (r("0em"), n.current = !1) : (r(t), n.current = !0);
  };
  m(() => {
    if (!l) {
      let f = setInterval(o, e);
      c(f);
    }
    return clearInterval(l);
  }, []);
}
function E({ blurSize: e }) {
  return { ...Object.assign({}, {
    style: {
      filter: `blur(${e})`
    }
  }) };
}
export {
  s as FrostedContext,
  S as FrostedDiv,
  v as FrostedLabel,
  x as FrostedSpan,
  b as useFrostAfterEffect,
  z as useFrostedEffect,
  E as withFrost
};
