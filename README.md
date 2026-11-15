# JHU Materials Science Design System

The design system for the Department of Materials Science and Engineering (DMSE) at the Johns Hopkins Whiting School of Engineering. Use it for slide decks, department web content, posters and fliers, and reports for current students and faculty. It follows the JHU brand guidelines ([brand.jhu.edu](https://brand.jhu.edu)).

It contains:

- **Tokens:** 50 color tokens plus spacing, radius, shadow, font size, line height, letter spacing and layout scales.
- **Type:** Work Sans, Roboto Slab, Source Serif 4 and Oswald, all from Google Fonts.
- **19 React components** on `window.JHUDS`, with a README for each.
- **9 page templates:** six slides at 1280 × 720, an event flier and a report cover at US Letter, and a recreation of the department homepage.
- **61 official brand assets** in five groups: Logos, Brand, Icons, Zoom Backgrounds and Guides.
- **Source files:** the official JHU PowerPoint deck and flier templates, the Zoom backgrounds deck, the Word report template, and full JHU and WSE logo kits for screen and print (SVG, PNG, JPG, EPS).

The full guidelines (tone, color rules, type, layout, imagery and iconography) are in [project/README.md](project/README.md).

## Browse it locally

You need [Node.js](https://nodejs.org) 18 or later. There's nothing to install.

```bash
node serve.js
```

Then open http://localhost:5178. The page shows the guidelines, color swatches, type styles, token tables, live previews of every component and template, and every asset group.

## Repository layout

```
index.html                 Viewer page (served by serve.js)
serve.js                   Local server; resolves /_blob/<id> asset links to files
project/
  README.md                Brand guidelines: content, color, type, layout, logos, components
  tokens.json              All design tokens with usage notes
  design-system.json       Index: asset groups, their order, and each asset's id, size and type
  components/
    bundle.js              Compiled components (global JHUDS); needs React 18 on window
    bundle.css             Google Fonts import, composite tokens (rules, gradients, transitions), base styles
    index.d.ts             TypeScript declarations for every component's props
    lib/                   React and ReactDOM 18.3.1 production builds
    <Component>/           README.md and preview.html for each component and template
    MSEHomepage/screens.js Homepage recreation built from the components
  assets/
    Logos/  Brand/  Icons/  Zoom Backgrounds/  Guides/
                           Each group has a README.md with usage rules, plus its files
source-files/
  README.md                What each source file is for
  templates/               jhu-deck-template.potx, jhu-flyer-templates.pptx,
                           jhu-zoom-backgrounds.pptx, jhu-report-template.docx
  logos/
    Johns Hopkins University Logos/       RGB (SVG, PNG) and CMYK (JPG, EPS)
    Whiting School of Engineering Logos/  RGB (SVG, PNG) and CMYK (JPG, EPS)
```

`project/` is an exact copy of the published design system, so its Guides README still says the Word template isn't stored there. It's in `source-files/templates/`.

## Using the components

Load React, then the bundle and its stylesheet. Define the tokens from `tokens.json` as CSS custom properties (for example `--jhu-heritage-blue: #002D72`). Token values written as `{name}` refer to another token: write them as `var(--name)`. `index.html` shows how to generate the CSS from `tokens.json`.

```html
<link rel="stylesheet" href="project/components/bundle.css">
<script src="project/components/lib/react.production.min.js"></script>
<script src="project/components/lib/react-dom.production.min.js"></script>
<script src="project/components/bundle.js"></script>
<script>
  const { Button, Card } = window.JHUDS;
  const h = React.createElement;
  ReactDOM.createRoot(document.getElementById('root')).render(
    h(Card, { accent: 'top', eyebrow: 'Research', title: 'Biomaterials', cta: 'Learn more' },
      'Engineering materials that interface with living systems.')
  );
</script>
```

Components: Button, IconButton, Input, Select, Checkbox, Radio, Switch, Card, Badge, Tag, StatBlock, SectionHeader, Quote, Tabs, Breadcrumb, Alert, Dialog, Toast, Tooltip.

Templates: TitleSlide, SectionSlide, ContentSlide, DataSlide, QuoteSlide, ClosingSlide, EventFlier, ReportCover, MSEHomepage.

Alert and some IconButton examples use Font Awesome 6.5.2 glyphs. Load `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css` if you use them.

## Asset links

The previews and `design-system.json` refer to assets by id, in the form `/_blob/<id>`. This matches the published artifact, where each asset is served at that path. `serve.js` maps each id to its file in `project/assets/<Group>/`. Outside the viewer, use the files directly:

| Group | Files |
| --- | --- |
| Logos | Whiting School of Engineering lock-ups, horizontal and vertical, in blue, white and black (SVG) |
| Brand | JHU university lock-ups, the shield, "Build for what's next" art, the Heritage Blue gradient, shield-pattern banners, the light shield watermark and campus photos |
| Icons | 38 Heritage Blue line icons from the official presentation template (PNG) |
| Zoom Backgrounds | Heritage Blue, Medium Blue and Spirit Blue backgrounds (8000 × 4500 JPEG) |
| Guides | JHU Report Template Support Guide (PDF, 7 pages) |

## Making things with it in Claude

Name the design system and the template in your prompt, and give real content:

> Using the JHU MSE design system, make a one-page event flier from the EventFlier template for the Spring Materials Science Seminar on April 14 at 4 pm in Maryland Hall 110.

To work in Office instead, start from the files in `source-files/templates/`. For print jobs, send the EPS logos from `source-files/logos/`.

A published copy of this design system is at https://claude.ai/artifact/S9fPL8qmkQDb4wVQEzAoHN (private unless shared).

## Ownership

The logos, shield, marks, photography, icons, Zoom backgrounds, templates and report guide in `project/assets/` and `source-files/` belong to Johns Hopkins University. Use them only as the JHU brand guidelines allow. React and ReactDOM are © Meta Platforms, Inc., under the MIT license.
