# OBR Extension Template

A reusable starter for Owlbear Rodeo extensions using React, TypeScript, Vite, Vitest, pnpm, and GitHub Pages.

## Create an extension from this template

Copy the repository, then replace all template identity values before adding features:

- `package.json`: package name, version, and description as appropriate
- `index.html`: page title
- `src/constants.ts`: display name and reverse-domain extension ID
- `public/manifest.json` and its versioned copy: name, description, author, homepage, repository path in every hosted URL, action title, size, permissions, and optional background page
- `public/icon.svg`: extension artwork
- `README.md`: user-facing installation, usage, privacy, and support information

Search for `OBR Extension Template`, `OBR-Extension-Template`, and `com.example.obr-extension-template` to confirm that no placeholder remains. Keep Vite's relative build base, but use absolute hosted URLs in every Owlbear manifest; Owlbear does not reliably resolve `./` relative to the manifest URL.

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

Owlbear and browsers can retain a previously fetched manifest. For a new installation or whenever the stable URL remains stale, use the versioned endpoint instead:

```text
https://OWNER.github.io/REPOSITORY/manifest-vVERSION.json
```

Every public release must update the package version, both manifest files, the versioned manifest filename, `src/version.ts`, and the `?v=` query on every manifest resource URL. `pnpm run check:versions` rejects drift, and the production build runs that check automatically. Vite already hashes generated JavaScript and CSS filenames; the manifest queries ensure Owlbear requests the new HTML and icon rather than reusing cached entries.

## Template boundaries

The starter provides SDK readiness, player identity and role, scene readiness, theme synchronization, responsive styling, and deployment. It deliberately does not choose metadata storage, permissions, tools, context menus, broadcast channels, backend services, or a GM-only policy; those belong to the extension being built.
