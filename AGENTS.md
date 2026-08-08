# OBR Extension Project Instructions

This repository began from the reusable React, TypeScript, and Vite Owlbear Rodeo extension template.

Before implementing extension-specific behavior:

1. Replace the template name in `package.json`, `index.html`, `src/constants.ts`, and `public/manifest.json`.
2. Replace `com.example.obr-extension-template` with a stable reverse-domain extension ID.
3. Replace the manifest homepage placeholder and customize the icon.
4. Decide whether the extension is available to all players or restricted to the GM; enforce that decision before reading sensitive data.
5. Identify which SDK state is room-, scene-, player-, or item-scoped. Handle the valid no-scene state explicitly.

Preserve these invariants:

- Keep the Owlbear SDK behind `OBR.onReady`.
- Unsubscribe every `onChange` listener during React effect cleanup.
- Use Owlbear theme variables with usable CSS fallbacks.
- Do not expose secrets in browser code or log user/room metadata.
- Keep `vite.config.ts` compatible with the Owlbear iframe and relative GitHub Pages paths.
- Run `pnpm run typecheck`, `pnpm run test`, and `pnpm run build` before delivery.
- Keep the README, manifest URLs, GitHub Pages workflow, and package identity synchronized.
