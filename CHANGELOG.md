# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-09-11

### Added
- **5 Botanical Leaf SVG Styles**: Japanese Maple (`maple`), Serrated Birch (`birch`), Cordate Linden (`linden`), Majestic Ginkgo (`ginkgo`), Royal Oak (`oak`), Classical Laurel (`laurel`), and Imperial Oval (`oval`).
- **3 Organic Branch Architectures**: Woodcut Sap Organic (`woodcut`), Gnarled Rustic (`gnarled`), Flowing Willow Tendril (`willow_tendril`), and Faceted Zen Bonsai (`zen_bonsai`).
- **4 Distinct Trunk Styles**: Elegant S-Curve (`calligraphic`), Gnarled Veteran (`gnarled_veteran`), Cathedral Banyan (`banyan_cathedral`), and Dragon Bonsai (`dragon_bonsai`).
- **Dual Leaf Render Modes**: Pure Vector SVG paths mode or high-res textured PNG image mode.
- **50-Person Family Architecture Support**: Balanced canopy dome distribution across multiple boughs and tiers.
- **Visual Style & Botanical Guide**: Comprehensive documentation in `VISUAL_SHOWCASE.md`.
- **TypeScript Type Definitions**: Complete TypeScript typings with `src/index.d.ts`.

### Changed
- Improved contrast and readability of family member names across leaves.
- Optimized leaf geometry with zero-background rendering.

## [1.0.3] - 2026-09-10

### Added
- 5 pre-rendered theme showcases (Emerald Forest, Golden Autumn, Cherry Blossom, Winter Pine, Sunset Clay).
- Standalone vector SVG export method (`tree.exportSVG()`).

### Fixed
- Transparent backgrounds on theme showcase previews.

## [1.0.0] - 2026-09-10

### Added
- Initial release of `family-tree-svg`.
- Organic SVG tree generation from nested JSON family data.
- Smooth pan & zoom navigation.
- Expand / collapse branch nodes with auto-collapse for large trees (500+ members).
- Hex color customization for leaves, branches, and trunk.
