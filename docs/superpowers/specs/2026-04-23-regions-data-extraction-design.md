# Regions data extraction

## Goal

Reduce `components/launched-ecosystems.tsx` from 1,001 lines to roughly 400 by extracting the region dataset into its own module. The component file stops carrying content and becomes a focused renderer. This is step one of a larger refactor; later steps (donut chart, region-card, map wrapper) and mobile polish will follow.

## Scope

In scope:

- Create `components/data/regions.ts`.
- Move these type declarations from `launched-ecosystems.tsx`: `Partner`, `District`, `Stat`, `Region`.
- Move the `regions: Region[]` array (Tennessee, Idaho, Indiana, Texas, DC · MD · VA, New York City).
- Keep named exports: `regions` and the `Region` type (other types exported only if `launched-ecosystems.tsx` needs them).
- Update `components/launched-ecosystems.tsx` to import from the new module.

Out of scope:

- Extracting the donut chart SVG into its own component.
- Extracting `<RegionCard>` / map wrapper into their own components.
- Touching `resolveFunders`, `fullStates`, `emergingStates`, `stateRegionMap`, `statusStyles`, or any JSX.
- Touching `components-grid.tsx`.
- Any visual, copy, or behavior change.
- Mobile polish (next workstream).
- Dark mode (later project).

## File layout after the change

```
components/
  data/
    regions.ts          (new — ~600 lines of typed data)
  launched-ecosystems.tsx  (~400 lines — imports from ./data/regions)
```

## Module contract: `components/data/regions.ts`

- Exports:
  - `regions: Region[]`
  - `type Region`
  - `type District`, `type Stat`, `type Partner` (exported only if `launched-ecosystems.tsx` references them by name — default is to keep them internal to the data module)
- Imports: none from the project (pure TS). No React, no component imports.
- No runtime logic beyond the static array literal.

## Module contract: updated `components/launched-ecosystems.tsx`

- Removes: the four type declarations and the `regions` const.
- Adds: `import { regions, type Region } from "./data/regions";` (placed with the existing imports).
- Everything else (helpers, derived constants, the exported `LaunchedEcosystems` component) remains byte-identical.

## Verification

- `pnpm build` (or `npm run build`) completes without TypeScript or lint errors.
- `pnpm dev` renders the page and the launched-ecosystems block is visually identical: six region cards in the grid, donut chart, map, and dropdown contents all match what's live today.
- `git diff --stat` shows two files touched: one created (`components/data/regions.ts`), one modified (`components/launched-ecosystems.tsx`).

## Risks

- **Accidental data drift during the move.** Copy-paste should be literal; verify by diffing the extracted array against the original.
- **Missing type export.** If `launched-ecosystems.tsx` currently uses `District`, `Stat`, or `Partner` by name, the import list has to include them. Confirm during the plan step by grepping the file.
- **Not a risk this step:** performance, bundle size, SEO, accessibility, routing — none of these are touched.

## Not doing (to be revisited)

- Splitting the file further (option B: `<DonutChart>`, `<RegionCard>`, map wrapper).
- Same treatment for `components-grid.tsx` (option C).
- Mobile audit.
- Dark-mode retrofit.
