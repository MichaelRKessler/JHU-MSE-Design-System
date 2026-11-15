window.makeMSEHome = (NS_) => {
  const { Button, Card, SectionHeader, StatBlock, Quote, Badge, IconButton } = NS_;
  function Ph({ label, ratio = "3 / 2", style }) {
    return /* @__PURE__ */ React.createElement("div", { style: {
      aspectRatio: ratio,
      background: "repeating-linear-gradient(45deg, #eae9e7 0 12px, #f5f4f3 12px 24px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...style
    } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "monospace", fontSize: 12, color: "#837c74", background: "#fff", padding: "3px 8px" } }, label));
  }
  function SiteHeader({ onNav }) {
    const links = ["Academics", "Research", "People", "News and Events", "Alumni and Giving", "About"];
    return /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", { style: { background: "#fff", borderBottom: "1px solid var(--border-default)" } }, /* @__PURE__ */ React.createElement("div", { style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "10px 24px",
      display: "flex",
      justifyContent: "flex-end",
      gap: 18,
      fontFamily: "var(--font-sans)",
      fontSize: 13
    } }, ["Request Info", "Apply", "Give"].map((l) => /* @__PURE__ */ React.createElement(
      "a",
      {
        key: l,
        href: "#",
        onClick: (e) => e.preventDefault(),
        style: { color: "var(--jhu-heritage-blue)", textDecoration: "none", fontWeight: 600 }
      },
      l
    )))), /* @__PURE__ */ React.createElement("div", { style: { background: "var(--jhu-heritage-blue)" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1200, margin: "0 auto", padding: "18px 24px", display: "flex", alignItems: "center", gap: 24 } }, /* @__PURE__ */ React.createElement("img", { src: "/_blob/59b5c8f0b07dad550c46f4280a2f12ab", alt: "Johns Hopkins Whiting School of Engineering", style: { height: 46 } }), /* @__PURE__ */ React.createElement("div", { style: {
      borderLeft: "1px solid rgba(255,255,255,0.35)",
      paddingLeft: 24,
      fontFamily: "var(--font-sans)",
      fontSize: 17,
      fontWeight: 600,
      color: "#fff",
      lineHeight: 1.25
    } }, "Department of Materials", /* @__PURE__ */ React.createElement("br", null), "Science & Engineering"), /* @__PURE__ */ React.createElement("div", { style: { marginLeft: "auto" } }, /* @__PURE__ */ React.createElement(
      IconButton,
      {
        icon: /* @__PURE__ */ React.createElement("i", { className: "fa-solid fa-magnifying-glass" }),
        label: "Search",
        variant: "primary",
        style: { background: "transparent", border: "1px solid rgba(255,255,255,0.4)" }
      }
    ))), /* @__PURE__ */ React.createElement("nav", { style: { borderTop: "1px solid rgba(255,255,255,0.18)" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", gap: 4 } }, links.map((l) => /* @__PURE__ */ React.createElement(
      "a",
      {
        key: l,
        href: "#",
        onClick: (e) => {
          e.preventDefault();
          onNav && onNav(l);
        },
        style: {
          fontFamily: "var(--font-sans)",
          fontSize: 15,
          fontWeight: 500,
          color: "#fff",
          textDecoration: "none",
          padding: "14px 14px",
          borderBottom: "3px solid transparent"
        },
        onMouseEnter: (e) => e.currentTarget.style.borderBottomColor = "var(--jhu-gold)",
        onMouseLeave: (e) => e.currentTarget.style.borderBottomColor = "transparent"
      },
      l
    ))))));
  }
  function Hero() {
    return /* @__PURE__ */ React.createElement("section", { style: { background: "radial-gradient(120% 120% at 100% 100%, #0077D8 0%, #002D72 60%)", color: "#fff" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1200, margin: "0 auto", padding: "72px 24px", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 48, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { style: { margin: 0, fontFamily: "var(--font-sans)", fontSize: 52, fontWeight: 700, lineHeight: 1.08 } }, "Forging a new age of materials"), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-sans)", fontSize: 18, lineHeight: 1.6, color: "rgba(255,255,255,0.88)", maxWidth: 520, margin: "20px 0 28px" } }, "From advancing sustainable energy to treating diseases, Hopkins engineers in the Department of Materials Science and Engineering study and create materials to address real world challenges."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12 } }, /* @__PURE__ */ React.createElement(Button, { variant: "gold", size: "lg" }, "Apply"), /* @__PURE__ */ React.createElement(Button, { variant: "onDark", size: "lg", arrow: true }, "Explore research"))), /* @__PURE__ */ React.createElement(Ph, { label: "hero: lab photography", ratio: "4 / 3" })));
  }
  function HighlightsGrid() {
    const items = [
      { eyebrow: "Research", title: "Advanced materials research", body: "From treating diseases to building the future of sustainable energy, the department is at the forefront of advanced materials research.", ph: "photo: podium talk" },
      { eyebrow: "MCP", title: "Materials Characterization & Processing", body: "The state-of-the-art MCP center makes Hopkins a hub for critical research and materials engineers.", ph: "photo: MCP tour" },
      { eyebrow: "Academics", title: "Every degree path", body: "You will receive the foundational knowledge and experiences you need to pursue your professional goals.", ph: "photo: students, blue coats" },
      { eyebrow: "Co-Op", title: "Paid research opportunities", body: "Master\u2019s students earn academic credit in corporate research through the INBT Co-Op Industry Program.", ph: "photo: research lab" }
    ];
    return /* @__PURE__ */ React.createElement("section", { style: { background: "#fff" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1200, margin: "0 auto", padding: "64px 24px" } }, /* @__PURE__ */ React.createElement(SectionHeader, { title: "Program Highlights" }), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginTop: 32 } }, items.map((it) => /* @__PURE__ */ React.createElement(Card, { key: it.title, image: /* @__PURE__ */ React.createElement(Ph, { label: it.ph }), eyebrow: it.eyebrow, title: it.title, cta: "Learn more" }, it.body)))));
  }
  function ResearchFocus() {
    const cols = [
      { t: "A field-leading faculty", b: "From biomaterials and materials for energy to computational and structural materials, our faculty are leading advances and redefining their areas of study.", cta: "Areas of research" },
      { t: "An interdisciplinary focus", b: "Our faculty partner with colleagues across Johns Hopkins divisions and play leadership roles in many of the university\u2019s most renowned research centers.", cta: "Explore centers and institutes" },
      { t: "World-class facilities", b: "From the MCP facility and Biomaterials and Drug Delivery Lab to our Undergraduate Teaching Lab, we provide an ideal environment for research and education.", cta: "Learn about our facilities" }
    ];
    return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--jhu-heritage-blue)" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1200, margin: "0 auto", padding: "64px 24px" } }, /* @__PURE__ */ React.createElement(SectionHeader, { onDark: true, eyebrow: "Research", title: "A Focus on Research" }), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, marginTop: 36 } }, cols.map((c) => /* @__PURE__ */ React.createElement("div", { key: c.t }, /* @__PURE__ */ React.createElement("h3", { style: { margin: 0, fontFamily: "var(--font-sans)", fontSize: 21, fontWeight: 700, color: "#fff" } }, c.t), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.6, color: "var(--jhu-spirit-blue)", margin: "10px 0 14px" } }, c.b), /* @__PURE__ */ React.createElement(Button, { variant: "onDark", size: "sm", arrow: true }, c.cta)))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 64, marginTop: 56, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.2)" } }, /* @__PURE__ */ React.createElement(StatBlock, { onDark: true, value: "6", label: "research areas" }), /* @__PURE__ */ React.createElement(StatBlock, { onDark: true, value: "40+", label: "years leading U.S. research spending" }), /* @__PURE__ */ React.createElement(StatBlock, { onDark: true, value: "3", label: "core research facilities" }))));
  }
  function QuoteBand() {
    return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--surface-subtle)" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 900, margin: "0 auto", padding: "56px 24px" } }, /* @__PURE__ */ React.createElement(Quote, { name: "Suhas Eswarappa Prameela", role: "PhD Student" }, "Joining a great project and being mentored by faculty who are top-notch in the field was definitely high on my list when I was deciding on grad schools and 5 years down the line, I am still glad I chose JHU.")));
  }
  function NewsRow() {
    const news = [
      { cat: "Department News", t: "Laboratory to Launchpad helps researchers navigate the path from discovery to impact", ph: "photo: event" },
      { cat: "Awards and Honors", t: "MatSci faculty win OVPR awards", ph: "photo: awardees" },
      { cat: "Research", t: "Proteins grown within living cells could offer new way to deliver drugs", ph: "photo: microscopy" }
    ];
    return /* @__PURE__ */ React.createElement("section", { style: { background: "#fff" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1200, margin: "0 auto", padding: "64px 24px" } }, /* @__PURE__ */ React.createElement(SectionHeader, { title: "Related News", action: /* @__PURE__ */ React.createElement(Button, { variant: "ghost", arrow: true }, "View all news") }), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 32 } }, news.map((n) => /* @__PURE__ */ React.createElement(Card, { key: n.t, image: /* @__PURE__ */ React.createElement(Ph, { label: n.ph }), eyebrow: n.cat, title: n.t, cta: "Read more" })))));
  }
  function SiteFooter() {
    return /* @__PURE__ */ React.createElement("footer", { style: { background: "var(--jhu-heritage-blue)", color: "#fff" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1200, margin: "0 auto", padding: "48px 24px", display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: 40 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", { src: "/_blob/31f1068ab0eb5a893c132271bd2be1a5", alt: "Johns Hopkins Whiting School of Engineering", style: { height: 96 } }), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--jhu-spirit-blue)", marginTop: 16 } }, "Department of Materials Science & Engineering")), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 2 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-condensed)", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--jhu-spirit-blue)", marginBottom: 8 } }, "Address"), "3400 North Charles Street", /* @__PURE__ */ React.createElement("br", null), "Baltimore, MD 21218", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("a", { href: "#", onClick: (e) => e.preventDefault(), style: { color: "#fff" } }, "Get Directions")), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 2 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-condensed)", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--jhu-spirit-blue)", marginBottom: 8 } }, "Contact"), /* @__PURE__ */ React.createElement("a", { href: "#", onClick: (e) => e.preventDefault(), style: { color: "#fff" } }, "DMSE@jhu.edu"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 16, marginTop: 12, fontSize: 17 } }, ["facebook-f", "youtube", "instagram", "linkedin-in", "x-twitter"].map((s) => /* @__PURE__ */ React.createElement("i", { key: s, className: "fa-brands fa-" + s, style: { color: "var(--jhu-spirit-blue)", cursor: "pointer" } }))))), /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid rgba(255,255,255,0.2)" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1200, margin: "0 auto", padding: "16px 24px", fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,0.7)" } }, "2026 Johns Hopkins University. All rights reserved. \xA0\xB7\xA0 Privacy Statement \xA0\xB7\xA0 Accessibility \xA0\xB7\xA0 University Policies")));
  }
  function MSEHome() {
    return /* @__PURE__ */ React.createElement("div", { style: { background: "#fff" } }, /* @__PURE__ */ React.createElement(SiteHeader, null), /* @__PURE__ */ React.createElement(Hero, null), /* @__PURE__ */ React.createElement(HighlightsGrid, null), /* @__PURE__ */ React.createElement(ResearchFocus, null), /* @__PURE__ */ React.createElement(QuoteBand, null), /* @__PURE__ */ React.createElement(NewsRow, null), /* @__PURE__ */ React.createElement(SiteFooter, null));
  }
  return MSEHome;
};
