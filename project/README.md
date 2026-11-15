Design system for the Department of Materials Science and Engineering (DMSE) at the Johns Hopkins Whiting School of Engineering. Use it for slide decks, department web content, posters and fliers, and reports aimed primarily at current students and faculty. It follows the JHU brand guidelines (brand.jhu.edu).

## Content fundamentals

- **Tone:** approachable but professional. Confident, mission-driven, plain-spoken. Lead sentences with impact: "From advancing sustainable energy to treating diseases, Hopkins engineers… create materials to address real world challenges."
- **Person:** second person for prospective and current students ("you will receive the foundational knowledge…"); first-person plural for the institution ("our faculty," "we believe curiosity inspires innovation").
- **Casing:** sentence case for body and links; title case for page and section headings and nav ("Program Highlights," "A Focus on Research"). All caps only for eyebrows and labels (`eyebrow` style, Badge).
- **No emoji.** Ever.
- **Vocabulary:** "Hopkins engineers," "MatSci," "the department." Research areas are proper nouns: Biomaterials, Computational Materials, Materials for Energy, Functional Materials, Optoelectronic & Magnetic Materials, Structural Materials.
- **CTAs:** short verb phrases: "Learn more," "Apply," "Request Info," "Get Directions."

## Visual foundations

### Color

- `jhu-heritage-blue` is THE brand color. It appears frequently and prominently: headings (`text-heading`), primary buttons, and dark fields (`surface-dark`).
- `jhu-spirit-blue` lightens the tone. Never set white text on it; use `jhu-harbor-blue` (large text only) or `jhu-medium-blue` with white instead.
- Secondary accents (the cool and warm `jhu-*` colors) are used sparingly, about 20% of total color, and are never required.
- Grayscale is tints of `jhu-sable` (`jhu-gray-90` … `jhu-gray-05`), never pure gray. `jhu-double-black` only for high-contrast needs.
- Body copy is `text-body` on `surface-page`; secondary text is `text-muted`; links are `link`, darkening to `link-hover`.
- States: `success` (Homewood Green), `warning` (Orange, as a bar or dot, not text on white), `danger` (Dark Red). Always pair a state color with a word or icon.
- **Approved accessible pairs (WCAG 2.1 AA):** on `jhu-heritage-blue`: white, Spirit Blue, Gold, Mint Green, Sand, Orange. On white: Heritage Blue, Medium Blue, Sable, Homewood Green, Forest Green, Plum, Purple. On Spirit Blue: Heritage Blue, Sable, Plum, Black.
- **Gradients:** at least 50% Heritage Blue, primary and cool accents only, three colors at most. Use `--gradient-brand` (Heritage to Medium Blue) or `--gradient-spirit` (Heritage to Spirit Blue) from `components/bundle.css`, or the official `jhu-gradient-background.png`.

### Type

JHU's open-source stack, all on Google Fonts (loaded by `components/bundle.css`). Legacy licensed fonts (Gentona, Quadon, Arnhem) are being retired by JHU and are not used.

- **Work Sans** (`--font-sans`): primary sans for UI, body and most headings. Styles `display`, `heading-2` to `heading-4`, `body-lg`, `body`, `body-sm`, `caption`.
- **Roboto Slab** (`--font-slab`): headlines, numbers and stats. Styles `heading-1`, `stat`, `stat-label`.
- **Source Serif 4** (`--font-serif`): editorial long-form and quotes. Styles `quote`, `long-form`.
- **Oswald** (`--font-condensed`): condensed eyebrows, labels and big display. Style `eyebrow`, always uppercase with `0.12em` tracking.
- Fallbacks: Tahoma/Verdana for sans, Georgia for serif.

### Layout, rules and shadows

- Editorial and squared-off. Flat surfaces; thin rules (`--rule-thin`, 1px `border-default`) and 4px brand bars (`--rule-brand`, `--rule-gold`) instead of shadows.
- Corners: `radius-none` by default; `radius-md` (4px) is the maximum on rectangles. `radius-full` only for Tag, the Switch track and status dots.
- Generous whitespace on the `space-*` scale (4px base). Content width `content-max`; reading columns `content-narrow`.
- **Cards:** white `surface-card`, 1px `border-default` or `shadow-card`, square corners. A top 4px Heritage Blue or Gold bar is acceptable (Card `accent`).
- **Shadows:** `shadow-card` at rest, `shadow-raised` on hover, `shadow-overlay` for dialogs only.
- **Imagery:** documentary photography of real people and labs (blue lab coats recur). Full-bleed or square-cropped, never rounded. Blue duotone or tint overlays for pattern-over-photo treatments.
- **Backgrounds:** white or Heritage Blue fields. Official shield-pattern banners, the light shield watermark, the official gradient and campus photos are in the Brand asset group.
- **Hover and motion:** links darken to Heritage Blue; buttons darken or lighten one step; underlines appear. Transitions 150 to 250ms ease (`--transition-fast`, `--transition-medium`), no bounces.
- **Focus:** `focus-ring` (Medium Blue), solid, at least 3:1 on white.
- **Data visualization:** Heritage Blue and Spirit Blue predominantly; Medium Blue as a third series; other accents only when more contrast is needed. Stats set large in Roboto Slab (`stat`) with small Work Sans explanatory text, optionally beside a 1px vertical rule (StatBlock).

## Iconography

- **Official JHU icon set** (Icons asset group): 38 Heritage Blue line icons extracted from the official deck template (lightbulb, grad-cap, handshake, trophy, chart-up, calendar, location, chat, and more). Prefer these in decks, fliers and reports.
- **Web icons:** JHU recommends Font Awesome for jhu.edu sites: load `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css`. Icons are functional, not decorative. Alert and the website kit use Font Awesome glyphs.
- No emoji, no hand-drawn SVG icons.

## Logos

Whiting School of Engineering lock-ups (Logos asset group, SVG, RGB): horizontal and vertical, each in blue, black and white. Blue on white; white on Heritage Blue. Do not stretch, recolor or crowd. There is no department-level lock-up: set "Department of Materials Science and Engineering" in Work Sans 600 next to or under the WSE mark. University lock-ups and the shield are in the Brand asset group.

## Components and templates

- Components are React components on `window.JHUDS` (Button, IconButton, Input, Select, Checkbox, Radio, Switch, Card, Badge, Tag, StatBlock, SectionHeader, Quote, Tabs, Breadcrumb, Alert, Dialog, Toast, Tooltip). Each has a README with what the consumer provides.
- StatBlock, SectionHeader and Quote are direct implementations of the brand's documented statistics, section and testimonial formats.
- Page templates: slides (TitleSlide, SectionSlide, ContentSlide, DataSlide, QuoteSlide, ClosingSlide) at 1280 × 720; print (EventFlier, ReportCover) at US Letter 816 × 1056; and MSEHomepage, a recreation of the department homepage built from the components. Start new decks, fliers and reports from these.
- The official JHU Report Template Support Guide (Guides asset group, PDF) explains how the JHU Word report template is formatted and kept accessible. Follow it, with ReportCover, for department reports.
