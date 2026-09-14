<p align="center">
  <h1 align="center">🌳 family-tree-svg</h1>
  <p align="center">
    <strong>Pure organic SVG family tree visualization for JavaScript & TypeScript — living trees with realistic calligraphic trunks, natural branching boughs, and botanical leaves. Rendered straight from your JSON data.</strong>
  </p>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/family-tree-svg"><img src="https://img.shields.io/npm/v/family-tree-svg.svg?style=flat-square&color=2ea44f" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/family-tree-svg"><img src="https://img.shields.io/npm/dm/family-tree-svg.svg?style=flat-square&color=blue" alt="npm downloads" /></a>
  <a href="https://github.com/ammar3040/family-tree-package"><img src="https://img.shields.io/github/stars/ammar3040/family-tree-package.svg?style=flat-square&color=yellow" alt="GitHub stars" /></a>
  <a href="https://github.com/ammar3040/family-tree-package/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green.svg?style=flat-square" alt="MIT license" /></a>
  <img src="https://img.shields.io/badge/dependencies-0-brightgreen.svg?style=flat-square" alt="zero dependencies" />
  <img src="https://img.shields.io/badge/types-TypeScript-blue.svg?style=flat-square" alt="TypeScript ready" />
</p>

<p align="center">
  <a href="https://ammar3040.github.io/family-tree-package/"><b>🌐 Live Interactive Demo</b></a> &bull;
  <a href="#quick-start"><b>⚡ Quick Start</b></a> &bull;
  <a href="#-visual-style-catalog"><b>🎨 Visual Catalog</b></a> &bull;
  <a href="#api-reference"><b>📖 API Reference</b></a> &bull;
  <a href="#faq"><b>❓ FAQ</b></a> &bull;
  <a href="VISUAL_SHOWCASE.md"><b>🍃 Visual Showcase Guide</b></a>
</p>

<p align="center">
  <img src="./assets/khan_tree_1.svg" alt="Family Tree SVG — organic family tree rendered from JSON, showing calligraphic trunk and botanical leaves" width="100%" />
</p>

---

## Why family-tree-svg?

Most family tree and genealogy libraries render your data as rigid corporate org charts — rectangular cards, gray boxes, and straight circuit-board lines. That works, but it doesn't feel like a family tree.

**family-tree-svg draws an actual tree.**

- 🌳 **Realistic organic architecture** — a calligraphic woodcut trunk bifurcates naturally into generations of curving boughs, the way a real tree branches.
- 🍃 **Botanical leaf anatomy** — every family member is a distinct leaf species (Ginkgo, Oak, Birch, Maple, Linden, Laurel, Oval) with gold venation, not a gray box.
- 👫 **Natural companion pairs** — spouses and partners render as attached companion leaves, not separate linked nodes.
- 📐 **Pure scalable vector graphics** — zero canvas pixelation. Scales infinitely for 4K/Retina, prints cleanly as a poster, exports directly to `.svg`.
- 🪶 **Zero runtime dependencies** — small, MIT-licensed, and framework-agnostic (Vanilla JS, React, Vue, Angular, Svelte).
- 🔒 **Fully typed** — ships with TypeScript definitions out of the box.

---

## How it compares

| Feature | `family-tree-svg` | Typical org-chart libraries |
|---|---|---|
| **Visual style** | Organic tree: trunk, boughs, leaves | Boxes/cards connected by straight lines |
| **Rendering** | Pure SVG, infinitely scalable | Mix of Canvas/SVG/HTML, often pixelated on export |
| **Dependencies** | Zero | Often requires D3 or a rendering framework |
| **Output** | Clean vector `.svg` export | Screenshot or raster export only |
| **License** | MIT, free | Often freemium or commercial |

---

## 🎨 Color Themes & Palettes

Dynamic coordinated color presets and full custom hex support:

<table>
  <tr>
    <td align="center" width="50%">
      <b>🌸 Cherry Blossom</b><br/><br/>
      <img src="./assets/khan_tree_2.png" alt="Cherry Blossom Theme" width="100%"/><br/>
      <code>leaf: #a35c6a</code> &bull; <code>branch: #5e3b25</code> &bull; <code>trunk: #4a2c16</code>
    </td>
    <td align="center" width="50%">
      <b>🍂 Golden Autumn</b><br/><br/>
      <img src="./assets/khan_tree_3.png" alt="Golden Autumn Theme" width="100%"/><br/>
      <code>leaf: #dfa467</code> &bull; <code>branch: #4d2b1a</code> &bull; <code>trunk: #3d1d11</code>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <b>❄️ Winter Pine</b><br/><br/>
      <img src="./assets/khan_tree_4.png" alt="Winter Pine Theme" width="100%"/><br/>
      <code>leaf: #2a6b5c</code> &bull; <code>branch: #2d3e50</code> &bull; <code>trunk: #1f2937</code>
    </td>
    <td align="center" width="50%">
      <b>🌅 Sunset Clay</b><br/><br/>
      <img src="./assets/khan_tree_5.png" alt="Sunset Clay Theme" width="100%"/><br/>
      <code>leaf: #d67b45</code> &bull; <code>branch: #4d2b1a</code> &bull; <code>trunk: #2d1607</code>
    </td>
  </tr>
</table>

---

## Features

- 🌿 **3 Distinct Branch Styles** — `woodcut` (living sap lines), `gnarled` (rustic knots), and `classic` (smooth calligraphic curves), plus `willow_tendril` and `zen_bonsai`
- 🌳 **4 Organic Trunk Styles** — `calligraphic` (elegant S-curve), `gnarled_veteran`, `banyan_cathedral`, and `dragon_bonsai`
- 🍃 **7 Botanical Leaf Shapes** — `laurel`, `oval`, `oak`, `ginkgo`, `maple`, `birch`, `linden`
- 🖼️ **Dual Leaf Render Modes** — pure vector SVG path mode or high-resolution textured PNG image mode with pre-rendered transparent assets
- 🎨 **Fully Customizable Colors** — set custom hex colors for leaves, branches, and trunk
- 🖱️ **Pan & Zoom** — smooth drag-to-pan, mouse wheel zoom, and mobile touch support
- ➕➖ **Collapse/Expand** — interactive branch collapse/expand buttons
- 👫 **Partner Support** — spouses shown as attached companion leaves
- ⚡ **Auto-Collapse** — large trees (500+ members) automatically collapse deeper branches for clean rendering
- 📤 **SVG Export** — download your tree as a clean vector SVG
- 🪶 **Zero UI Clutter** — pure tree component without unnecessary toolbars or widgets
- 🔒 **TypeScript Support** — full type definitions included, no `@types` package needed

---

## Use Cases

- Genealogy and ancestry websites
- Family history apps and personal archive tools
- Wedding/event microsites showing family lineage
- HR/org-chart alternatives that want a warmer, less corporate visual style
- Educational tools teaching family/tree data structures

---

## Installation

### Via npm

```bash
npm install family-tree-svg
```

```javascript
// CommonJS
const FamilyTreeSVG = require('family-tree-svg');

// ES Module
import FamilyTreeSVG from 'family-tree-svg';
```

### Via Script Tag (Direct / CDN)

```html
<script src="path/to/family-tree-svg/src/family-tree-svg.js"></script>
```

---

<a name="quick-start"></a>
## Quick Start

### HTML / Vanilla JS

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { margin: 0; }
    #tree-container { width: 100vw; height: 100vh; }
  </style>
</head>
<body>
  <div id="tree-container"></div>

  <script src="src/family-tree-svg.js"></script>
  <script>
    const familyData = {
      full_name: "Ahmed Khan",
      family_name: "Khan",
      partners: [{ full_name: "Fatima Ahmed", family_name: "Khan" }],
      children: [
        {
          full_name: "Yusuf Ahmed",
          family_name: "Khan",
          partners: [{ full_name: "Ayesha Yusuf", family_name: "Khan" }],
          children: [
            { full_name: "Hamza Yusuf", family_name: "Khan", partners: [], children: [] }
          ]
        }
      ]
    };

    // Initialize with custom styling
    const tree = FamilyTreeSVG.create('#tree-container', familyData, {
      branchStyle: 'woodcut',      // 'woodcut' | 'gnarled' | 'classic' | 'willow_tendril' | 'zen_bonsai'
      trunkStyle: 'calligraphic',  // 'calligraphic' | 'gnarled_veteran' | 'banyan_cathedral' | 'dragon_bonsai'
      leafStyle: 'laurel',         // 'laurel' | 'oval' | 'oak' | 'ginkgo' | 'maple'
      leafRenderMode: 'svg',       // 'svg' | 'png'
      leafColor: '#17361a',
      branchColor: '#3a1f13',
      trunkColor: '#2d1607'
    });
  </script>
</body>
</html>
```

### React

```jsx
import { useEffect, useRef } from 'react';
import FamilyTreeSVG from 'family-tree-svg';

function FamilyTree({ data }) {
  const containerRef = useRef(null);
  const treeRef = useRef(null);

  useEffect(() => {
    treeRef.current = FamilyTreeSVG.create(containerRef.current, data, {
      branchStyle: 'woodcut',
      trunkStyle: 'calligraphic',
      leafStyle: 'laurel',
    });

    return () => treeRef.current?.destroy();
  }, [data]);

  return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
}

export default FamilyTree;
```

### Vue

```vue
<template>
  <div ref="container" style="width: 100%; height: 100vh;"></div>
</template>

<script>
import FamilyTreeSVG from 'family-tree-svg';

export default {
  props: ['data'],
  mounted() {
    this.tree = FamilyTreeSVG.create(this.$refs.container, this.data, {
      branchStyle: 'woodcut',
      trunkStyle: 'calligraphic',
      leafStyle: 'laurel',
    });
  },
  beforeUnmount() {
    this.tree?.destroy();
  },
};
</script>
```

---

## JSON Data Format

```json
{
  "full_name": "Ahmed Khan",
  "family_name": "Khan",
  "partners": [{ "full_name": "Fatima Ahmed", "family_name": "Khan" }],
  "children": [
    {
      "full_name": "Yusuf Ahmed",
      "family_name": "Khan",
      "partners": [],
      "children": []
    }
  ]
}
```

Each node needs `full_name` and `family_name`. `partners` and `children` are optional arrays that can nest indefinitely.

---

<a name="-visual-style-catalog"></a>
## 🎨 Visual Style Catalog

> 📖 Looking for high-resolution visual previews? See the full [Visual Style & Botanical Guide](VISUAL_SHOWCASE.md).

### 🍃 Standalone Leaf Shapes (Pure Vector SVG — Zero Background)

All leaf shapes are available as **pure vector SVGs with zero background** (transparent background, zero cards or containers) featuring metallic gold venation and double accent borders:

<p align="center">
  <img src="assets/leaf_maple.svg" width="125" alt="Japanese Maple leaf shape" />
  &nbsp;&nbsp;&nbsp;
  <img src="assets/leaf_birch.svg" width="110" alt="Serrated Birch leaf shape" />
  &nbsp;&nbsp;&nbsp;
  <img src="assets/leaf_linden.svg" width="115" alt="Cordate Linden leaf shape" />
  &nbsp;&nbsp;&nbsp;
  <img src="assets/leaf_ginkgo.svg" width="115" alt="Majestic Ginkgo leaf shape" />
  &nbsp;&nbsp;&nbsp;
  <img src="assets/leaf_oak.svg" width="110" alt="Royal Oak leaf shape" />
  &nbsp;&nbsp;&nbsp;
  <img src="assets/leaf_laurel.svg" width="110" alt="Classical Laurel leaf shape" />
  &nbsp;&nbsp;&nbsp;
  <img src="assets/leaf_oval.svg" width="110" alt="Imperial Oval leaf shape" />
</p>

| SVG | Shape | Key | Botanical Anatomy & Venation |
|:---:|---|---|---|
| <img src="assets/leaf_maple.svg" width="80" /> | **🍁 Japanese Maple** | `'maple'` / `'japanese_maple'` | 7 radiating needle-sharp slender lobes, deep curved sinuses, and 7-ray palmate gold venation |
| <img src="assets/leaf_birch.svg" width="70" /> | **🍃 Serrated Birch / Elm** | `'birch'` / `'serrated_birch'` | Natural saw-tooth serrated perimeter, acute apex, and alternating herringbone pinnate veins |
| <img src="assets/leaf_linden.svg" width="75" /> | **💚 Cordate Linden** | `'linden'` / `'cordate_linden'` | Iconic heart-cleft notched base firmly seated on branch collars with acute drip-tip |
| <img src="assets/leaf_ginkgo.svg" width="75" /> | **🪭 Majestic Ginkgo** | `'ginkgo'` | Flared fan contour with sharp apex point staying on upper side (pointing upwards!) |
| <img src="assets/leaf_oak.svg" width="70" /> | **🌳 Royal Oak** | `'oak'` | Classical lobed crown foliage with undulating rounded lobes and apical crown lobe |
| <img src="assets/leaf_laurel.svg" width="70" /> | **🍃 Classical Laurel** | `'laurel'` | Pointed symmetric botanical elliptic leaf with tapered tips and gold midrib vein |
| <img src="assets/leaf_oval.svg" width="70" /> | **🟢 Imperial Oval** | `'oval'` | Continuous rounded heraldic badge / medallion with spacious text area and gold rim |

---

### 🌲 Whole-Tree Branch Architectures (50-Person Family — Zero Background)

Each branch style is demonstrated with a **full ~50-person family tree structure** (based on `khan_tree (4).svg`), forming a proper, balanced canopy across all boughs and tiers (rendered without background):

#### 🪵 Woodcut Sap Organic (`branchStyle: 'woodcut'`)
Layered bark contours, warm heartwood inner core, and living gold sap lines (`.woodcut-sap-line`) with smooth collar joints. Paired with 🍃 **Serrated Birch** leaves:
![Woodcut Sap Branches (50-Person Tree — Zero Background)](assets/tree_woodcut_sap.png)
*Vector SVG*: [`assets/tree_woodcut_sap.svg`](assets/tree_woodcut_sap.svg)

#### 🌲 Gnarled Rustic (`branchStyle: 'gnarled'`)
Organic winding boughs with high sweep amplitude, rugged bark ridges, and natural knot deflections. Paired with 🌳 **Royal Oak** leaves:
![Gnarled Rustic Branches (50-Person Tree — Zero Background)](assets/tree_gnarled_rustic.png)
*Vector SVG*: [`assets/tree_gnarled_rustic.svg`](assets/tree_gnarled_rustic.svg)

#### 🌿 Flowing Willow Tendril (`branchStyle: 'willow_tendril'`)
Gracefully weeping S-curve boughs, soft drooping droop offsets, and braided double bark contour lines. Paired with 💚 **Cordate Linden** leaves:
![Flowing Willow Tendril Branches (50-Person Tree — Zero Background)](assets/tree_willow_tendril.png)
*Vector SVG*: [`assets/tree_willow_tendril.svg`](assets/tree_willow_tendril.svg)

#### 🎋 Faceted Zen Bonsai (`branchStyle: 'zen_bonsai'`)
Sculpted angular mitered facet boughs, chamfered corner nodes, and geometric Zen aesthetic. Paired with 🍁 **Japanese Maple** leaves:
![Faceted Zen Bonsai Branches (50-Person Tree — Zero Background)](assets/tree_zen_bonsai.png)
*Vector SVG*: [`assets/tree_zen_bonsai.svg`](assets/tree_zen_bonsai.svg)

---

### 🌳 Trunk Styles (`trunkStyle`)

| Style | Key | Description |
|---|---|---|
| **Elegant S-Curve (Default)** | `'calligraphic'` | Iconic calligraphic S-curve trunk with 3D layered shading, subtle wood knots, and right-flank gold light reflection |
| **Gnarled Knotted Veteran** | `'gnarled_veteran'` | Rugged winding trunk with weathered S-curve lean, asymmetric anchor root foot, and carved wood knot burl |
| **Cathedral Banyan** | `'banyan_cathedral'` | Multi-columnar fluted pillars, massive buttress roots, cathedral root arches, and open hollow heartwood window |
| **Dragon Coiled Bonsai** | `'dragon_bonsai'` | Muscular low curve, horizontal dragon-back sweep, muscular bark plates, anchor root claws, and weathered burls |

### 🖼️ Leaf Render Modes (`leafRenderMode`)

- `'svg'` *(default)*: Renders dynamic SVG paths with gradients, drop shadows, and delicate gold vein lines.
- `'png'`: Uses pre-rendered high-resolution transparent PNG leaf assets (`assets/leaf_maple.png`, `assets/leaf_birch.png`, `assets/leaf_linden.png`, `assets/leaf_ginkgo.png`, `assets/leaf_laurel.png`, `assets/leaf_oval.png`, `assets/leaf_oak.png`) with crisp text overlays.

---

<a name="api-reference"></a>
## API Reference

### `FamilyTreeSVG.create(container, data, options)`

Creates and returns a new `FamilyTreeSVG` instance.

#### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `branchStyle` | `string` | `'woodcut'` | Branch style: `'woodcut'`, `'gnarled'`, `'classic'`, `'willow_tendril'`, `'zen_bonsai'` |
| `trunkStyle` | `string` | `'calligraphic'` | Trunk style: `'calligraphic'`, `'gnarled_veteran'`, `'banyan_cathedral'`, `'dragon_bonsai'` |
| `leafStyle` | `string` | `'laurel'` | Leaf shape: `'laurel'`, `'oval'`, `'oak'`, `'ginkgo'`, `'maple'`, `'birch'`, `'linden'` |
| `leafRenderMode` | `string` | `'svg'` | Leaf mode: `'svg'` (vector paths) or `'png'` (image assets) |
| `leafPngUrls` | `Object` | *built-in* | Map of leaf styles to custom PNG URLs |
| `leafColor` | `string` | `'#17361a'` | Hex color for leaves |
| `branchColor` | `string` | `'#3a1f13'` | Hex color for branches |
| `trunkColor` | `string` | `'#2d1607'` | Hex color for trunk |

---

### Instance Methods

#### `tree.setBranchStyle(style)`
Switches the branch rendering style (`'woodcut'`, `'gnarled'`, `'classic'`, `'willow_tendril'`, `'zen_bonsai'`).

#### `tree.setTrunkStyle(style)`
Switches the trunk style (`'calligraphic'`, `'gnarled_veteran'`, `'banyan_cathedral'`, `'dragon_bonsai'`).

#### `tree.setLeafStyle(style)`
Switches the leaf shape (`'laurel'`, `'oval'`, `'oak'`, `'ginkgo'`, `'maple'`).

#### `tree.setLeafRenderMode(mode, urls)`
Switches between `'svg'` vector and `'png'` image rendering.

#### `tree.setStyles({ branchStyle, trunkStyle, leafStyle, leafRenderMode })`
Applies multiple style changes simultaneously and re-renders once.

#### `tree.setColors(leafColor, branchColor, trunkColor)`
Updates the color palette and re-renders dynamically.

#### `tree.fitView(smooth)`
Centers and fits the entire tree inside the container viewport.

#### `tree.loadData(newData)`
Loads a new JSON dataset and fits view.

#### `tree.exportSVG()`
Downloads the current tree as a standalone vector `.svg`.

#### `tree.destroy()`
Cleans up event listeners and empties the container DOM.

---

## Environment Compatibility

- Works in any modern browser (Chrome, Firefox, Safari, Edge)
- Framework-agnostic: Vanilla JS, React, Vue, Angular, Svelte
- No build step required for script-tag usage
- TypeScript definitions included — no separate `@types` package needed

---

<a name="faq"></a>
## FAQ

### Is family-tree-svg free to use commercially?
Yes. It's MIT licensed, free for personal and commercial projects, with no attribution required.

### Does it work with React or Vue?
Yes — it's framework-agnostic. See the React and Vue examples above; it works the same way inside any component lifecycle.

### Can I export the tree as an image?
Yes, `tree.exportSVG()` downloads a clean vector `.svg` file that scales to any size without quality loss.

### How is this different from a D3-based family tree library?
`family-tree-svg` doesn't require D3 or any dependency — it renders organic, botanical trees (trunk, boughs, leaves) rather than the card-and-line layout typical of D3-based libraries.

### How many family members can it render?
Trees with 500+ members are supported; the library auto-collapses deeper branches beyond that point to keep rendering clean and performant.

---

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history.

## License

MIT — see [LICENSE](LICENSE).

---

<p align="center">
  If this helped your project, a ⭐ on <a href="https://github.com/ammar3040/family-tree-package">GitHub</a> helps others find it too.
</p>
