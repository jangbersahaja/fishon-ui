# @fishon/ui

Shared UI component library for FishOn platform.

## Structure

- `src/components/charter/` — Charter-related UI components
- `src/types/` — Shared types
- `docs/components/` — Component documentation

## Development

- Build: `pnpm build`
- Test: `pnpm test`

## Usage

Import components in consumer apps:

```tsx
import { PhotoGallery } from "@fishon/ui/charter";
```

## Tailwind CSS

This package expects Tailwind CSS to be configured in the consuming app. See `tailwind.config.js` for preset usage.
