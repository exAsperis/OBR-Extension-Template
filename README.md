# OBR Extension Template

A reusable starter for Owlbear Rodeo extensions using React, TypeScript, Vite, Vitest, pnpm, and GitHub Pages.

## Create an extension from this template

Copy the repository, then replace all template identity values before adding features:

- `package.json`: package name, version, and description as appropriate
- `index.html`: page title
- `src/constants.ts`: display name and reverse-domain extension ID
- `public/manifest.json`: name, description, author, homepage, action title, size, permissions, and optional background page
- `public/icon.svg`: extension artwork
- `README.md`: user-facing installation, usage, privacy, and support information

Search for both `OBR Extension Template` and `com.example.obr-extension-template` to confirm that no placeholder remains. The relative Vite base and manifest asset URLs are intentionally reusable beneath any GitHub Pages repository path.

## Development

```sh
pnpm install
pnpm run dev
```

Add `http://localhost:5173/manifest.json` as a development extension in Owlbear Rodeo. The Vite server permits the Owlbear Rodeo origin to load the extension iframe.

The standalone browser page intentionally reports that it must be opened inside Owlbear Rodeo. Extension functionality should be tested in all applicable states:

- GM and player roles
- Scene open and no scene open
- Light and dark themes
- Desktop and narrow/mobile popovers
- SDK or network failures

## Verification

```sh
pnpm run typecheck
pnpm run test
pnpm run build
```

The production site is written to `dist/`.

## GitHub Pages

In the repository settings, select **GitHub Actions** as the Pages source. The included workflow validates the project, builds it, and deploys only `dist/` whenever `main` is pushed. It can also be started manually from the Actions tab.

After deployment, add the published manifest URL to Owlbear Rodeo:

```text
https://OWNER.github.io/REPOSITORY/manifest.json
```

## Template boundaries

The starter provides SDK readiness, player identity and role, scene readiness, theme synchronization, responsive styling, and deployment. It deliberately does not choose metadata storage, permissions, tools, context menus, broadcast channels, backend services, or a GM-only policy; those belong to the extension being built.
