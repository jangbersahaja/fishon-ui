# @fishon/ui

Shared UI component library for FishOn platform.

## Features

- Framework-agnostic React components for FishOn projects
- Charter preview panel: CaptainSection, CaptainDetailModal, Review, SpeciesPills, BookingWidget, and more
- Designed for easy integration with Next.js, Vite, or other React setups
- Accepts custom ImageComponent for image rendering (Next.js, plain <img>, etc.)
- Type-safe props and shared types

## Structure

- `src/components/charter/` — Charter-related UI components
- `src/types/` — Shared types
- `docs/components/` — Component documentation

## Getting Started

1. Install via npm, git, or local path:

   ```sh
   npm install @fishon/ui
   # or
   pnpm add @fishon/ui
   ```

2. Import components in your app:

   ```tsx
   import { CaptainSection, Review } from "@fishon/ui/charter";
   ```

3. Pass your own ImageComponent if needed:

   ```tsx
   <CaptainDetailModal ImageComponent={NextImage} ... />
   ```

## Development

- Build: `npm run build`
- Test: `npm test` (add tests in `src/__tests__`)

## Tailwind CSS

This package expects Tailwind CSS to be configured in the consuming app. See `tailwind.config.js` for preset usage.

## Contributing

- Fork the repo and submit PRs for new components or fixes
- Keep components framework-agnostic (no direct Next.js imports)
- Document new components in `docs/components/`

## License

MIT
