# OBR Extension Template

A reusable starter for Owlbear Rodeo extensions using React, TypeScript, Vite, Vitest, pnpm, and GitHub Pages.

## Create an extension from this template

Copy the repository, then replace all template identity values before adding features:

- `package.json`: package name, version, and description as appropriate
- `index.html`: public showcase copy, links, and page title
- `extension.html`: extension popover page title
- `src/constants.ts`: display name and required `com.ex-asperis.{extension-name}` extension ID
- `public/manifest.json`, `public/manifest-local.json`, and the versioned manifest: name, description, author, homepage, repository path in every hosted URL, action title, size, permissions, and optional background page
- `public/icon.svg`: extension artwork
- `README.md`: user-facing installation, usage, privacy, and support information

Search for `OBR Extension Template`, `OBR-Extension-Template`, and `com.ex-asperis.obr-extension-template` to confirm that no placeholder remains. Set the manifest and store author to exactly `es Asperis`, then run `pnpm run check:identity` once before implementing features. Keep Vite's relative build base, but use absolute hosted URLs in every Owlbear manifest; Owlbear does not reliably resolve `./` relative to the manifest URL.

## Development

```sh
pnpm install
pnpm run dev
```

Add `http://localhost:5173/manifest-local.json` as a development extension in Owlbear Rodeo. It is served automatically by Vite and points to the local `extension.html` popover. The Vite server permits the Owlbear Rodeo origin to load the extension iframe.

The root page (`index.html`) is the public extension showcase and setup guide. The Owlbear popover has a separate entry point at `extension.html`; opening that page directly intentionally reports that it must be opened inside Owlbear Rodeo. Extension functionality should be tested in all applicable states:

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

Owlbear and browsers can retain a previously fetched manifest. For a new installation or whenever the stable URL remains stale, use the versioned endpoint instead:

```text
https://OWNER.github.io/REPOSITORY/manifest-vVERSION.json
```

Every public release must update the package version, stable and local manifests, the versioned manifest filename, `src/version.ts`, and the `?v=` query on every public manifest resource URL. `pnpm run check:versions` rejects drift, and the production build runs that check automatically. Vite already hashes generated JavaScript and CSS filenames; the manifest queries ensure Owlbear requests the new HTML and icon rather than reusing cached entries.

## Template boundaries

The starter provides SDK readiness, player identity and role, scene readiness, theme synchronization, responsive styling, and deployment. It deliberately does not choose metadata storage, permissions, tools, context menus, broadcast channels, backend services, or a GM-only policy; those belong to the extension being built.
