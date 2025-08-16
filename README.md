# Anodyne Pages

Anodyne Pages is a shared Jekyll documentation theme. It bundles layouts, includes, styles, and scripts that can be reused across multiple product docs sites.

This repository is **not** a GitHub Pages site. It only provides the common theme assets.

## Usage

### Remote theme (public)

Add the [jekyll-remote-theme](https://github.com/benbalter/jekyll-remote-theme) plugin and reference this repository:

```yml
# in your site's _config.yml
remote_theme: Anodyne-Technologies/anodyne-pages@v0.1.0
```

### Git submodule (private)

```
git submodule add https://github.com/Anodyne-Technologies/anodyne-pages.git theme
```

Then point `theme` in your site's configuration to the submodule path.

## Customization

- Navigation: provide your own `_data/nav.yml` to override the default links.
- Brand color: set `brand_color` in your site's `_config.yml` to update the CSS variable `--brand-color`.

## Versioning

Pin to a git tag when consuming this theme. Releases follow semantic versioning. Example: `v0.1.0`.

## License

MIT
