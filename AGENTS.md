# OBR Extension Project Instructions

This repository began from the reusable React, TypeScript, and Vite Owlbear Rodeo extension template.

Before implementing extension-specific behavior:

1. Replace the template name in `package.json`, `index.html`, `src/constants.ts`, and `public/manifest.json`.
2. Replace `com.example.obr-extension-template` with a stable reverse-domain extension ID.
3. Replace `OBR-Extension-Template` and `exAsperis` in every absolute manifest URL with the new GitHub repository and owner, update the homepage, and customize the icon.
4. Decide whether the extension is available to all players or restricted to the GM; enforce that decision before reading sensitive data.
5. Identify which SDK state is room-, scene-, player-, or item-scoped. Handle the valid no-scene state explicitly.

Preserve these invariants:

- Keep the Owlbear SDK behind `OBR.onReady`.
- Unsubscribe every `onChange` listener during React effect cleanup.
- Use Owlbear theme variables with usable CSS fallbacks.
- Do not expose secrets in browser code or log user/room metadata.
- Keep Vite's relative build base, but use absolute hosted URLs in Owlbear manifests. Do not use `./` for manifest popover or icon URLs.
- On every release, synchronize `package.json`, both manifests, the versioned manifest filename, `src/version.ts`, and every manifest `?v=` query. Run `pnpm run check:versions`.
- Run `pnpm run typecheck`, `pnpm run test`, and `pnpm run build` before delivery.
- Keep the README, manifest URLs, GitHub Pages workflow, and package identity synchronized.
