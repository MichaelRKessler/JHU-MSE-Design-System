/* @ds-bundle: {"format": 4, "namespace": "JHUDS", "components": [{"name": "Button"}, {"name": "IconButton"}, {"name": "Input"}, {"name": "Select"}, {"name": "Checkbox"}, {"name": "Radio"}, {"name": "Switch"}, {"name": "Card"}, {"name": "Badge"}, {"name": "Tag"}, {"name": "StatBlock"}, {"name": "SectionHeader"}, {"name": "Quote"}, {"name": "Tabs"}, {"name": "Breadcrumb"}, {"name": "Alert"}, {"name": "Dialog"}, {"name": "Toast"}, {"name": "Tooltip"}]} */
var JHUDS = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: !0 });
  }, __copyProps = (to, from, except, desc) => {
    if (from && typeof from == "object" || typeof from == "function")
      for (let key of __getOwnPropNames(from))
        !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
    mod
  )), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

  // react-shim.js
  var require_react_shim = __commonJS({
    "react-shim.js"(exports, module) {
      module.exports = window.React;
    }
  });

  // entry.js
  var entry_exports = {};
  __export(entry_exports, {
    Alert: () => Alert,
    Badge: () => Badge,
    Breadcrumb: () => Breadcrumb,
    Button: () => Button,
    Card: () => Card,
    Checkbox: () => Checkbox,
    Dialog: () => Dialog,
    IconButton: () => IconButton,
    Input: () => Input,
    Quote: () => Quote,
    Radio: () => Radio,
    SectionHeader: () => SectionHeader,
    Select: () => Select,
    StatBlock: () => StatBlock,
    Switch: () => Switch,
    Tabs: () => Tabs,
    Tag: () => Tag,
    Toast: () => Toast,
    Tooltip: () => Tooltip
  });

  // ../src/components/forms/Button.jsx
  var import_react = __toESM(require_react_shim()), V = {
    primary: { background: "var(--jhu-heritage-blue)", color: "#fff", border: "2px solid var(--jhu-heritage-blue)" },
    secondary: { background: "transparent", color: "var(--jhu-heritage-blue)", border: "2px solid var(--jhu-heritage-blue)" },
    gold: { background: "var(--jhu-gold)", color: "var(--jhu-sable)", border: "2px solid var(--jhu-gold)" },
    onDark: { background: "transparent", color: "#fff", border: "2px solid #fff" },
    ghost: { background: "transparent", color: "var(--jhu-medium-blue)", border: "2px solid transparent" }
  }, S = {
    sm: { padding: "6px 14px", fontSize: 13 },
    md: { padding: "10px 22px", fontSize: 15 },
    lg: { padding: "14px 30px", fontSize: 17 }
  };
  function Button({ variant = "primary", size = "md", arrow = !1, disabled = !1, children, style, ...rest }) {
    let [hover, setHover] = import_react.default.useState(!1), hoverStyle = hover && !disabled ? variant === "primary" ? { background: "var(--jhu-medium-blue)", borderColor: "var(--jhu-medium-blue)" } : variant === "secondary" ? { background: "var(--jhu-heritage-blue)", color: "#fff" } : variant === "gold" ? { background: "#d9b000", borderColor: "#d9b000" } : variant === "onDark" ? { background: "#fff", color: "var(--jhu-heritage-blue)" } : { color: "var(--jhu-heritage-blue)", textDecoration: "underline" } : {};
    return /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        onMouseEnter: () => setHover(!0),
        onMouseLeave: () => setHover(!1),
        disabled,
        style: {
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
          letterSpacing: "0.01em",
          borderRadius: 0,
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.45 : 1,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          transition: "all 150ms ease",
          ...V[variant],
          ...S[size],
          ...hoverStyle,
          ...style
        },
        ...rest
      },
      children,
      arrow && /* @__PURE__ */ import_react.default.createElement("span", { "aria-hidden": "true", style: { fontSize: "1.1em", lineHeight: 1 } }, "\u2192")
    );
  }

  // ../src/components/forms/IconButton.jsx
  var import_react2 = __toESM(require_react_shim());
  function IconButton({ icon, label, variant = "primary", size = 40, style, ...rest }) {
    let [hover, setHover] = import_react2.default.useState(!1), v = variant === "primary" ? { background: hover ? "var(--jhu-medium-blue)" : "var(--jhu-heritage-blue)", color: "#fff", border: "none" } : { background: hover ? "var(--jhu-gray-05, #f5f4f3)" : "transparent", color: "var(--jhu-heritage-blue)", border: "1px solid var(--border-default)" };
    return /* @__PURE__ */ import_react2.default.createElement(
      "button",
      {
        "aria-label": label,
        title: label,
        onMouseEnter: () => setHover(!0),
        onMouseLeave: () => setHover(!1),
        style: {
          width: size,
          height: size,
          borderRadius: 0,
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: size * 0.45,
          transition: "all 150ms ease",
          ...v,
          ...style
        },
        ...rest
      },
      icon
    );
  }

  // ../src/components/forms/Input.jsx
  var import_react3 = __toESM(require_react_shim());
  function Input({ label, hint, error, style, id, ...rest }) {
    let [focus, setFocus] = import_react3.default.useState(!1), inputId = id || (label ? "in-" + label.toLowerCase().replace(/\W+/g, "-") : void 0);
    return /* @__PURE__ */ import_react3.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--font-sans)", ...style } }, label && /* @__PURE__ */ import_react3.default.createElement("label", { htmlFor: inputId, style: { fontSize: 14, fontWeight: 600, color: "var(--jhu-sable)" } }, label), /* @__PURE__ */ import_react3.default.createElement(
      "input",
      {
        id: inputId,
        onFocus: () => setFocus(!0),
        onBlur: () => setFocus(!1),
        style: {
          fontFamily: "var(--font-sans)",
          fontSize: 15,
          padding: "10px 12px",
          borderRadius: 0,
          border: "1px solid " + (error ? "var(--danger)" : focus ? "var(--focus-ring)" : "var(--border-default)"),
          outline: focus ? "2px solid var(--focus-ring)" : "none",
          outlineOffset: 0,
          color: "var(--text-body)",
          background: "#fff"
        },
        ...rest
      }
    ), error ? /* @__PURE__ */ import_react3.default.createElement("span", { style: { fontSize: 12, color: "var(--danger)" } }, error) : hint && /* @__PURE__ */ import_react3.default.createElement("span", { style: { fontSize: 12, color: "var(--text-muted)" } }, hint));
  }

  // ../src/components/forms/Select.jsx
  var import_react4 = __toESM(require_react_shim());
  function Select({ label, options = [], style, id, ...rest }) {
    let selectId = id || (label ? "sel-" + label.toLowerCase().replace(/\W+/g, "-") : void 0);
    return /* @__PURE__ */ import_react4.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--font-sans)", ...style } }, label && /* @__PURE__ */ import_react4.default.createElement("label", { htmlFor: selectId, style: { fontSize: 14, fontWeight: 600, color: "var(--jhu-sable)" } }, label), /* @__PURE__ */ import_react4.default.createElement(
      "select",
      {
        id: selectId,
        style: {
          fontFamily: "var(--font-sans)",
          fontSize: 15,
          padding: "10px 12px",
          borderRadius: 0,
          border: "1px solid var(--border-default)",
          color: "var(--text-body)",
          background: "#fff",
          cursor: "pointer"
        },
        ...rest
      },
      options.map((o) => {
        var _a, _b, _c;
        return /* @__PURE__ */ import_react4.default.createElement("option", { key: (_a = o.value) != null ? _a : o, value: (_b = o.value) != null ? _b : o }, (_c = o.label) != null ? _c : o);
      })
    ));
  }

  // ../src/components/forms/Checkbox.jsx
  var import_react5 = __toESM(require_react_shim());
  function Checkbox({ label, checked, onChange, disabled = !1, style }) {
    return /* @__PURE__ */ import_react5.default.createElement("label", { style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      color: "var(--text-body)",
      opacity: disabled ? 0.45 : 1,
      ...style
    } }, /* @__PURE__ */ import_react5.default.createElement("span", { style: {
      width: 18,
      height: 18,
      flexShrink: 0,
      border: "2px solid " + (checked ? "var(--jhu-heritage-blue)" : "var(--jhu-gray-60, #837c74)"),
      background: checked ? "var(--jhu-heritage-blue)" : "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 150ms ease"
    } }, checked && /* @__PURE__ */ import_react5.default.createElement("svg", { width: "11", height: "9", viewBox: "0 0 11 9" }, /* @__PURE__ */ import_react5.default.createElement("path", { d: "M1 4.5L4 7.5L10 1", stroke: "#fff", strokeWidth: "2", fill: "none" }))), /* @__PURE__ */ import_react5.default.createElement("input", { type: "checkbox", checked: !!checked, disabled, onChange, style: { position: "absolute", opacity: 0, width: 0 } }), label);
  }

  // ../src/components/forms/Radio.jsx
  var import_react6 = __toESM(require_react_shim());
  function Radio({ label, checked, onChange, name, value, disabled = !1, style }) {
    return /* @__PURE__ */ import_react6.default.createElement("label", { style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      color: "var(--text-body)",
      opacity: disabled ? 0.45 : 1,
      ...style
    } }, /* @__PURE__ */ import_react6.default.createElement("span", { style: {
      width: 18,
      height: 18,
      flexShrink: 0,
      borderRadius: "50%",
      border: "2px solid " + (checked ? "var(--jhu-heritage-blue)" : "var(--jhu-gray-60, #837c74)"),
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 150ms ease"
    } }, checked && /* @__PURE__ */ import_react6.default.createElement("span", { style: { width: 9, height: 9, borderRadius: "50%", background: "var(--jhu-heritage-blue)" } })), /* @__PURE__ */ import_react6.default.createElement("input", { type: "radio", name, value, checked: !!checked, disabled, onChange, style: { position: "absolute", opacity: 0, width: 0 } }), label);
  }

  // ../src/components/forms/Switch.jsx
  var import_react7 = __toESM(require_react_shim());
  function Switch({ label, checked, onChange, disabled = !1, style }) {
    return /* @__PURE__ */ import_react7.default.createElement("label", { style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      color: "var(--text-body)",
      opacity: disabled ? 0.45 : 1,
      ...style
    } }, /* @__PURE__ */ import_react7.default.createElement("span", { style: {
      width: 40,
      height: 22,
      borderRadius: 11,
      background: checked ? "var(--jhu-heritage-blue)" : "var(--jhu-gray-40, #ada8a1)",
      position: "relative",
      transition: "background 150ms ease",
      flexShrink: 0
    } }, /* @__PURE__ */ import_react7.default.createElement("span", { style: {
      position: "absolute",
      top: 3,
      left: checked ? 21 : 3,
      width: 16,
      height: 16,
      borderRadius: "50%",
      background: "#fff",
      transition: "left 150ms ease"
    } })), /* @__PURE__ */ import_react7.default.createElement("input", { type: "checkbox", role: "switch", checked: !!checked, disabled, onChange, style: { position: "absolute", opacity: 0, width: 0 } }), label);
  }

  // ../src/components/content/Card.jsx
  var import_react8 = __toESM(require_react_shim());
  function Card({ accent = "none", image, eyebrow, title, children, cta, onCtaClick, style }) {
    let [hover, setHover] = import_react8.default.useState(!1);
    return /* @__PURE__ */ import_react8.default.createElement(
      "div",
      {
        onMouseEnter: () => setHover(!0),
        onMouseLeave: () => setHover(!1),
        style: {
          background: "#fff",
          border: "1px solid var(--border-default)",
          borderRadius: 0,
          boxShadow: hover ? "var(--shadow-raised)" : "var(--shadow-card)",
          transition: "box-shadow 250ms ease",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          fontFamily: "var(--font-sans)",
          ...accent === "top" ? { borderTop: "4px solid var(--jhu-heritage-blue)" } : accent === "gold" ? { borderTop: "4px solid var(--jhu-gold)" } : {},
          ...style
        }
      },
      image && /* @__PURE__ */ import_react8.default.createElement("div", { style: { aspectRatio: "3 / 2", overflow: "hidden", background: "var(--jhu-gray-10, #eae9e7)" } }, typeof image == "string" ? /* @__PURE__ */ import_react8.default.createElement("img", { src: image, alt: "", style: { width: "100%", height: "100%", objectFit: "cover", display: "block" } }) : image),
      /* @__PURE__ */ import_react8.default.createElement("div", { style: { padding: 20, display: "flex", flexDirection: "column", gap: 8, flex: 1 } }, eyebrow && /* @__PURE__ */ import_react8.default.createElement("div", { style: {
        fontFamily: "var(--font-condensed)",
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--jhu-medium-blue)"
      } }, eyebrow), title && /* @__PURE__ */ import_react8.default.createElement("div", { style: { fontSize: 19, fontWeight: 700, lineHeight: 1.25, color: "var(--jhu-heritage-blue)" } }, title), children && /* @__PURE__ */ import_react8.default.createElement("div", { style: { fontSize: 14, lineHeight: 1.55, color: "var(--text-body)" } }, children), cta && /* @__PURE__ */ import_react8.default.createElement("button", { onClick: onCtaClick, style: {
        alignSelf: "flex-start",
        marginTop: "auto",
        paddingTop: 8,
        background: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 600,
        color: "var(--jhu-medium-blue)",
        textDecoration: hover ? "underline" : "none",
        padding: 0,
        paddingTop: 8
      } }, cta, " \u2192"))
    );
  }

  // ../src/components/content/Badge.jsx
  var import_react9 = __toESM(require_react_shim()), TONES = {
    blue: { background: "var(--jhu-heritage-blue)", color: "#fff" },
    spirit: { background: "var(--jhu-spirit-blue)", color: "var(--jhu-heritage-blue)" },
    gold: { background: "var(--jhu-gold)", color: "var(--jhu-sable)" },
    green: { background: "var(--jhu-homewood-green)", color: "#fff" },
    red: { background: "var(--jhu-dark-red)", color: "#fff" },
    neutral: { background: "var(--jhu-gray-10, #eae9e7)", color: "var(--jhu-sable)" }
  };
  function Badge({ tone = "blue", children, style }) {
    return /* @__PURE__ */ import_react9.default.createElement("span", { style: {
      display: "inline-block",
      padding: "3px 10px",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      borderRadius: 0,
      ...TONES[tone],
      ...style
    } }, children);
  }

  // ../src/components/content/Tag.jsx
  var import_react10 = __toESM(require_react_shim());
  function Tag({ children, onRemove, style }) {
    return /* @__PURE__ */ import_react10.default.createElement("span", { style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "4px 12px",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 500,
      color: "var(--jhu-heritage-blue)",
      background: "#fff",
      border: "1px solid var(--jhu-heritage-blue)",
      borderRadius: 999,
      ...style
    } }, children, onRemove && /* @__PURE__ */ import_react10.default.createElement("button", { onClick: onRemove, "aria-label": "Remove", style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0,
      color: "var(--jhu-heritage-blue)",
      fontSize: 14,
      lineHeight: 1
    } }, "\xD7"));
  }

  // ../src/components/content/StatBlock.jsx
  var import_react11 = __toESM(require_react_shim());
  function StatBlock({ value, label, description, icon, onDark = !1, style }) {
    let primary = onDark ? "#fff" : "var(--jhu-heritage-blue)", secondary = onDark ? "var(--jhu-spirit-blue)" : "var(--text-muted)";
    return /* @__PURE__ */ import_react11.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 20, fontFamily: "var(--font-sans)", ...style } }, icon && /* @__PURE__ */ import_react11.default.createElement("div", { style: { fontSize: 30, color: onDark ? "var(--jhu-gold)" : "var(--jhu-medium-blue)" } }, icon), /* @__PURE__ */ import_react11.default.createElement("div", null, /* @__PURE__ */ import_react11.default.createElement("div", { style: { fontFamily: "var(--font-slab)", fontSize: 44, fontWeight: 700, lineHeight: 1, color: primary } }, value), label && /* @__PURE__ */ import_react11.default.createElement("div", { style: { fontSize: 14, fontWeight: 600, marginTop: 6, color: onDark ? "#fff" : "var(--jhu-sable)" } }, label)), description && /* @__PURE__ */ import_react11.default.createElement("div", { style: {
      borderLeft: "1px solid " + (onDark ? "rgba(255,255,255,0.35)" : "var(--border-default)"),
      paddingLeft: 20,
      fontSize: 13,
      lineHeight: 1.5,
      color: secondary,
      maxWidth: 260
    } }, description));
  }

  // ../src/components/content/SectionHeader.jsx
  var import_react12 = __toESM(require_react_shim());
  function SectionHeader({ eyebrow, title, lede, action, onDark = !1, style }) {
    return /* @__PURE__ */ import_react12.default.createElement("div", { style: { fontFamily: "var(--font-sans)", ...style } }, eyebrow && /* @__PURE__ */ import_react12.default.createElement("div", { style: {
      fontFamily: "var(--font-condensed)",
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: onDark ? "var(--jhu-spirit-blue)" : "var(--jhu-medium-blue)",
      marginBottom: 10
    } }, eyebrow), /* @__PURE__ */ import_react12.default.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 24, flexWrap: "wrap" } }, /* @__PURE__ */ import_react12.default.createElement("h2", { style: { margin: 0, fontSize: 32, fontWeight: 700, lineHeight: 1.15, color: onDark ? "#fff" : "var(--jhu-heritage-blue)" } }, title), action), /* @__PURE__ */ import_react12.default.createElement("div", { style: { width: 56, height: 4, background: "var(--jhu-gold)", marginTop: 14 } }), lede && /* @__PURE__ */ import_react12.default.createElement("p", { style: {
      margin: "16px 0 0",
      fontSize: 17,
      lineHeight: 1.55,
      maxWidth: 680,
      color: onDark ? "rgba(255,255,255,0.85)" : "var(--text-body)"
    } }, lede));
  }

  // ../src/components/content/Quote.jsx
  var import_react13 = __toESM(require_react_shim());
  function Quote({ children, name, role, avatar, style }) {
    return /* @__PURE__ */ import_react13.default.createElement("figure", { style: { margin: 0, borderLeft: "4px solid var(--jhu-gold)", paddingLeft: 24, fontFamily: "var(--font-sans)", ...style } }, /* @__PURE__ */ import_react13.default.createElement("blockquote", { style: {
      margin: 0,
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: 21,
      lineHeight: 1.45,
      color: "var(--jhu-sable)"
    } }, "\u201C", children, "\u201D"), (name || role) && /* @__PURE__ */ import_react13.default.createElement("figcaption", { style: { marginTop: 14, display: "flex", alignItems: "center", gap: 12 } }, avatar && /* @__PURE__ */ import_react13.default.createElement("img", { src: avatar, alt: "", style: { width: 44, height: 44, objectFit: "cover" } }), /* @__PURE__ */ import_react13.default.createElement("div", null, name && /* @__PURE__ */ import_react13.default.createElement("div", { style: { fontSize: 14, fontWeight: 700, color: "var(--jhu-heritage-blue)" } }, name), role && /* @__PURE__ */ import_react13.default.createElement("div", { style: { fontSize: 13, color: "var(--text-muted)" } }, role))));
  }

  // ../src/components/navigation/Tabs.jsx
  var import_react14 = __toESM(require_react_shim());
  function Tabs({ tabs = [], active, onChange, style }) {
    let [internal, setInternal] = import_react14.default.useState(tabs[0]), current = active !== void 0 ? active : internal, set = (t) => {
      setInternal(t), onChange && onChange(t);
    };
    return /* @__PURE__ */ import_react14.default.createElement("div", { role: "tablist", style: { display: "flex", gap: 4, borderBottom: "2px solid var(--border-default)", fontFamily: "var(--font-sans)", ...style } }, tabs.map((t) => {
      let sel = t === current;
      return /* @__PURE__ */ import_react14.default.createElement(
        "button",
        {
          key: t,
          role: "tab",
          "aria-selected": sel,
          onClick: () => set(t),
          style: {
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "10px 18px",
            fontFamily: "var(--font-sans)",
            fontSize: 15,
            fontWeight: sel ? 700 : 500,
            color: sel ? "var(--jhu-heritage-blue)" : "var(--text-muted)",
            borderBottom: "3px solid " + (sel ? "var(--jhu-gold)" : "transparent"),
            marginBottom: -2,
            transition: "all 150ms ease"
          }
        },
        t
      );
    }));
  }

  // ../src/components/navigation/Breadcrumb.jsx
  var import_react15 = __toESM(require_react_shim());
  function Breadcrumb({ items = [], style }) {
    return /* @__PURE__ */ import_react15.default.createElement("nav", { "aria-label": "Breadcrumb", style: { fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-muted)", ...style } }, items.map((it, i) => {
      var _a, _b;
      return /* @__PURE__ */ import_react15.default.createElement("span", { key: i }, i > 0 && /* @__PURE__ */ import_react15.default.createElement("span", { "aria-hidden": "true", style: { margin: "0 8px", color: "var(--jhu-gray-40, #ada8a1)" } }, "/"), i < items.length - 1 ? /* @__PURE__ */ import_react15.default.createElement("a", { href: it.href || "#", style: { color: "var(--jhu-medium-blue)", textDecoration: "none" } }, (_a = it.label) != null ? _a : it) : /* @__PURE__ */ import_react15.default.createElement("span", { "aria-current": "page", style: { color: "var(--jhu-sable)", fontWeight: 600 } }, (_b = it.label) != null ? _b : it));
    }));
  }

  // ../src/components/feedback/Alert.jsx
  var import_react16 = __toESM(require_react_shim()), TONES2 = {
    info: { bar: "var(--jhu-heritage-blue)", bg: "#eef3fa", icon: "fa-circle-info" },
    success: { bar: "var(--jhu-homewood-green)", bg: "#edf7f3", icon: "fa-circle-check" },
    warning: { bar: "var(--jhu-orange)", bg: "#fdf5e8", icon: "fa-triangle-exclamation" },
    danger: { bar: "var(--jhu-dark-red)", bg: "#faedee", icon: "fa-circle-exclamation" }
  };
  function Alert({ tone = "info", title, children, onDismiss, style }) {
    let t = TONES2[tone];
    return /* @__PURE__ */ import_react16.default.createElement("div", { role: "alert", style: {
      display: "flex",
      gap: 14,
      padding: "14px 16px",
      background: t.bg,
      borderLeft: "4px solid " + t.bar,
      fontFamily: "var(--font-sans)",
      ...style
    } }, /* @__PURE__ */ import_react16.default.createElement("i", { className: "fa-solid " + t.icon, "aria-hidden": "true", style: { color: t.bar, fontSize: 17, marginTop: 2 } }), /* @__PURE__ */ import_react16.default.createElement("div", { style: { flex: 1 } }, title && /* @__PURE__ */ import_react16.default.createElement("div", { style: { fontSize: 15, fontWeight: 700, color: "var(--jhu-sable)" } }, title), children && /* @__PURE__ */ import_react16.default.createElement("div", { style: { fontSize: 14, lineHeight: 1.5, color: "var(--text-body)", marginTop: title ? 4 : 0 } }, children)), onDismiss && /* @__PURE__ */ import_react16.default.createElement("button", { onClick: onDismiss, "aria-label": "Dismiss", style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--text-muted)",
      fontSize: 16,
      lineHeight: 1,
      padding: 0
    } }, "\xD7"));
  }

  // ../src/components/feedback/Dialog.jsx
  var import_react17 = __toESM(require_react_shim());
  function Dialog({ open, title, children, footer, onClose, width = 480 }) {
    return open ? /* @__PURE__ */ import_react17.default.createElement("div", { onClick: onClose, style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,45,114,0.45)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1e3,
      padding: 24
    } }, /* @__PURE__ */ import_react17.default.createElement(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        onClick: (e) => e.stopPropagation(),
        style: {
          background: "#fff",
          width,
          maxWidth: "100%",
          boxShadow: "var(--shadow-overlay)",
          fontFamily: "var(--font-sans)",
          borderTop: "4px solid var(--jhu-heritage-blue)"
        }
      },
      /* @__PURE__ */ import_react17.default.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 24px 0" } }, /* @__PURE__ */ import_react17.default.createElement("h3", { style: { margin: 0, fontSize: 20, fontWeight: 700, color: "var(--jhu-heritage-blue)" } }, title), /* @__PURE__ */ import_react17.default.createElement("button", { onClick: onClose, "aria-label": "Close", style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: 20,
        color: "var(--text-muted)",
        padding: 0
      } }, "\xD7")),
      /* @__PURE__ */ import_react17.default.createElement("div", { style: { padding: "14px 24px 20px", fontSize: 15, lineHeight: 1.55, color: "var(--text-body)" } }, children),
      footer && /* @__PURE__ */ import_react17.default.createElement("div", { style: { padding: "0 24px 20px", display: "flex", justifyContent: "flex-end", gap: 10 } }, footer)
    )) : null;
  }

  // ../src/components/feedback/Toast.jsx
  var import_react18 = __toESM(require_react_shim());
  function Toast({ open = !0, tone = "info", children, onDismiss, style }) {
    if (!open) return null;
    let color = tone === "success" ? "var(--jhu-homewood-green)" : tone === "danger" ? "var(--jhu-dark-red)" : "var(--jhu-heritage-blue)";
    return /* @__PURE__ */ import_react18.default.createElement("div", { role: "status", style: {
      position: "fixed",
      bottom: 24,
      left: "50%",
      transform: "translateX(-50%)",
      background: "var(--jhu-sable)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 18px",
      boxShadow: "var(--shadow-raised)",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      zIndex: 1100,
      ...style
    } }, /* @__PURE__ */ import_react18.default.createElement("span", { style: { width: 8, height: 8, borderRadius: "50%", background: color === "var(--jhu-heritage-blue)" ? "var(--jhu-spirit-blue)" : color, flexShrink: 0 } }), children, onDismiss && /* @__PURE__ */ import_react18.default.createElement("button", { onClick: onDismiss, "aria-label": "Dismiss", style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "rgba(255,255,255,0.7)",
      fontSize: 15,
      padding: 0,
      marginLeft: 4
    } }, "\xD7"));
  }

  // ../src/components/feedback/Tooltip.jsx
  var import_react19 = __toESM(require_react_shim());
  function Tooltip({ label, children, style }) {
    let [show, setShow] = import_react19.default.useState(!1);
    return /* @__PURE__ */ import_react19.default.createElement(
      "span",
      {
        style: { position: "relative", display: "inline-block", ...style },
        onMouseEnter: () => setShow(!0),
        onMouseLeave: () => setShow(!1),
        onFocus: () => setShow(!0),
        onBlur: () => setShow(!1)
      },
      children,
      show && /* @__PURE__ */ import_react19.default.createElement("span", { role: "tooltip", style: {
        position: "absolute",
        bottom: "100%",
        left: "50%",
        transform: "translate(-50%, -8px)",
        background: "var(--jhu-sable)",
        color: "#fff",
        padding: "6px 10px",
        fontFamily: "var(--font-sans)",
        fontSize: 12,
        whiteSpace: "nowrap",
        zIndex: 1200
      } }, label)
    );
  }
  return __toCommonJS(entry_exports);
})();
window.JHUDS = JHUDS;
