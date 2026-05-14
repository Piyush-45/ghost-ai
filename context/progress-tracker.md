# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Editor chrome foundation complete

## Current Goal

- Prepare for the next feature unit after the base editor chrome.

## Completed

- 01-design-system: installed and configured shadcn/ui.
- Added shadcn/ui primitives: Button, Card, Dialog, Input, Tabs, Textarea, and ScrollArea.
- Installed `lucide-react` and shadcn dependencies.
- Added `lib/utils.ts` with reusable `cn()` helper.
- Aligned global CSS variables with the dark-only Ghost AI theme and shadcn token requirements.
- 02-editor: added base editor navbar, floating project sidebar, root editor shell, and reusable dialog content pattern.

## In Progress

- None currently.

## Next Up

- Select the next feature spec for implementation.

## Open Questions

- None currently.

## Architecture Decisions

- shadcn/ui primitives remain generated foundation components in `components/ui/*` and should not be hand-edited.
- Global theme tokens are dark-only and expose both Ghost AI semantic utility aliases and shadcn/ui CSS variables.
- Editor chrome is composed in `components/editor/*`; sidebar visibility is local client UI state and does not affect canvas layout.
- The root app layout wraps pages with `EditorShell`, so routed pages provide editor content instead of owning navbar/sidebar chrome.
- Future dialogs can reuse `EditorDialogPattern` for title, description, body, and footer actions without introducing modal behavior yet.

## Session Notes

- `npm run lint` and `npm run build` pass after completing 01-design-system.
- `npm run lint` passes after completing 02-editor.
- `npm run build` passes after completing 02-editor; the first sandboxed attempt failed because `next/font` could not reach Google Fonts, then succeeded with network permission.
- Moved editor chrome usage from `app/page.tsx` into `app/layout.tsx`.
