# Contributing to FamilyTreeSVG

Thank you for your interest in contributing to **FamilyTreeSVG**! We welcome contributions that enhance botanical realism, performance, accessibility, documentation, and developer experience.

## Getting Started

1. **Fork the Repository** on GitHub: [github.com/ammarcoderkube/family-tree-package](https://github.com/ammarcoderkube/family-tree-package)
2. **Clone your fork**:
   ```bash
   git clone https://github.com/your-username/family-tree-package.git
   cd family-tree-package
   ```
3. **Run the local demo**:
   ```bash
   npm run demo
   ```
4. **Run tests**:
   ```bash
   npm test
   ```

## Development Guidelines

- **Zero Heavy Dependencies**: The core package is deliberately lightweight and dependency-free. Avoid adding runtime external dependencies.
- **Organic Aesthetic Integrity**: When adding new trunk, branch, or leaf styles, ensure they follow smooth Bezier curvature and biological inspiration.
- **Backward Compatibility**: Never introduce breaking changes to existing methods (`create`, `fitView`, `setColors`, `exportSVG`, `loadData`, `destroy`).
- **TypeScript Definitions**: If you modify the public API, update `src/index.d.ts` to match.

## Pull Request Process

1. Create a feature branch: `git checkout -b feature/my-new-leaf-style`
2. Commit your changes with clear, descriptive commit messages:
   - `feat: add Aspen leaf botanical shape`
   - `fix: resolve pan boundary issue on mobile Safari`
   - `docs: improve React integration quickstart`
3. Push to your branch and submit a Pull Request.
4. Describe the change and attach screenshots or an exported SVG demonstrating visual changes.

## Code of Conduct

Please be respectful, collaborative, and constructive in all issue discussions and pull request reviews.
