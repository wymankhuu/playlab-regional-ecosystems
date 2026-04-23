# Regions Data Extraction Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extract the 600-line `regions` dataset from `components/launched-ecosystems.tsx` into `components/data/regions.ts` so the component file shrinks from ~1,000 lines to ~400 and becomes a focused renderer.

**Architecture:** Pure data-module split. All types used *only* inside the data (`Partner`, `District`, `Stat`) become file-local in the new module. The one type used by the component (`Region`) is re-exported. No JSX, helper, or behavior changes.

**Tech Stack:** Next.js 16.2.4, React 19.2.4, TypeScript, Tailwind v4, npm. Spec: `docs/superpowers/specs/2026-04-23-regions-data-extraction-design.md`.

**Testing note:** This project has no unit test setup. "Tests" for this plan are `next build` (typecheck + bundle) and a manual visual spot-check against the running dev server. TDD doesn't cleanly apply to a pure data move — the build is the gate.

---

## File Structure

- Create: `components/data/regions.ts` — ~620 lines; owns the `regions` array and its sub-types
- Modify: `components/launched-ecosystems.tsx` — remove lines 6-28 (types) and lines 30-639 (array); add one import

---

### Task 1: Create the data module

**Files:**
- Create: `components/data/regions.ts`

- [ ] **Step 1: Create the folder**

```bash
mkdir -p components/data
```

- [ ] **Step 2: Write `components/data/regions.ts`**

Copy the four type declarations (lines 6-28 of `components/launched-ecosystems.tsx`) and the entire `regions` array literal (lines 30-639) into the new file. Export `regions` as a named export. Export `Region` as a type. Keep `Partner`, `District`, and `Stat` file-local (not exported) — they are only used inside the `Region` shape.

File template:

```typescript
type Partner = { name: string; url?: string };

type District = {
  name: string;
  students: string;
  community: string;
  motivation: string;
};

type Stat = { label: string; value: string; sub?: string };

export type Region = {
  id: string;
  name: string;
  status: "full" | "emerging";
  funders: string[];
  systems: number;
  blurb: string;
  orgs: Partner[];
  stats?: Stat[];
  districts?: District[];
  districtsHeading?: string;
};

export const regions: Region[] = [
  // ... (copy verbatim from launched-ecosystems.tsx lines 30-639)
];
```

Notes for the engineer performing the copy:
- Copy the array literal byte-for-byte including all nested objects, string escapes, and trailing commas.
- Do not reformat, resort, or renumber entries.
- The array has exactly **six** top-level region objects in this order: `tn`, `id`, `in`, `tx`, `dmv`, `nyc`.

- [ ] **Step 3: Typecheck the new file in isolation**

```bash
npx tsc --noEmit components/data/regions.ts
```

Expected: no output (success). If TS reports a missing type, you did not copy all four type declarations.

- [ ] **Step 4: Confirm region count**

```bash
grep -c "^  {$" components/data/regions.ts
```

Expected: `6` (one for each top-level region object opening brace).

---

### Task 2: Wire the component file to the data module

**Files:**
- Modify: `components/launched-ecosystems.tsx` (lines 1-639)

- [ ] **Step 1: Replace the type block and array with an import**

In `components/launched-ecosystems.tsx`, delete lines 6 through 639 (everything from `type Partner = ...` down to and including the closing `];` of the `regions` array) and replace with a single import.

**Before** (lines 1-5 stay as-is; lines 6-639 are deleted):

```tsx
import { FUNDERS, type Funder } from "./funders";
import { FunderBadge } from "./ui/funder-badge";
import { UsMap } from "./ui/us-map";
import type { StateRegionMap } from "./ui/us-map-interactive";

type Partner = { name: string; url?: string };
// ... 633 more lines of types and data ...
];
```

**After**:

```tsx
import { FUNDERS, type Funder } from "./funders";
import { FunderBadge } from "./ui/funder-badge";
import { UsMap } from "./ui/us-map";
import type { StateRegionMap } from "./ui/us-map-interactive";
import { regions, type Region } from "./data/regions";
```

Everything from the original line 641 onward (the `resolveFunders` helper, `fullStates`, `emergingStates`, `stateRegionMap`, `statusStyles`, and `export function LaunchedEcosystems()`) stays byte-identical.

- [ ] **Step 2: Verify the file shrank as expected**

```bash
wc -l components/launched-ecosystems.tsx
```

Expected: between **390 and 410 lines** (was 1,001). If it's still over 500, types or data were not fully removed.

- [ ] **Step 3: Verify the import resolves**

```bash
grep -n "^import { regions" components/launched-ecosystems.tsx
```

Expected: exactly one line matching the new import.

```bash
grep -n "^type Partner\|^type District\|^type Stat\|^type Region\|^const regions" components/launched-ecosystems.tsx
```

Expected: no matches (the types and const are gone from this file).

---

### Task 3: Build and typecheck the full project

**Files:** none modified

- [ ] **Step 1: Run the production build**

```bash
npm run build
```

Expected: build completes with "Compiled successfully" (or Next 16's equivalent). No TypeScript errors. No ESLint errors. If the build fails with `Cannot find name 'Region'`, the re-export from the data module is missing. If it fails with `Cannot find module './data/regions'`, the new file path is wrong.

- [ ] **Step 2: Verify only two files changed**

```bash
git diff --stat
```

Expected output should show exactly:
- `components/data/regions.ts` — created, ~620 insertions
- `components/launched-ecosystems.tsx` — modified, ~634 deletions, 1 insertion

No other files. If anything else appears (`app/layout.tsx` is a pre-existing change — leave it alone), investigate before continuing.

---

### Task 4: Visual spot-check in dev

**Files:** none modified

- [ ] **Step 1: Start the dev server**

```bash
npm run dev
```

Leave it running. Open `http://localhost:3000` in a browser.

- [ ] **Step 2: Verify the launched-ecosystems block renders**

Scroll to "Where we've launched so far." Check:

1. **Donut chart** at top shows `59` in the center, with three legend rows (Rural 13 / 22%, Suburban 12 / 20%, Urban 34 / 58%).
2. **US map** renders with Tennessee, Idaho, Indiana, and Texas shaded cyan (full ecosystem) and NY / DC / MD / VA shaded yellow (emerging ecosystem).
3. **Six region cards** appear in the grid in this order: Tennessee, Idaho, Indiana, Texas, DC · MD · VA, New York City.
4. **Expand Tennessee.** Confirm the blurb mentions SCORE, the three reach stats are present (Cohort students 130,066; Share of state ~13%; Statewide enrollment 971,741), and the district table lists nine districts starting with Sumner County Schools.
5. **Expand New York City.** Confirm the "CIOB Lab Schools" heading appears above the district table (not the default "Participating districts") and shows eight schools starting with Brooklyn Collaborative Studies.

If any of this is missing or different, the data array was not copied completely. Diff the new file against the original range:

```bash
git show HEAD:components/launched-ecosystems.tsx | sed -n '30,639p' > /tmp/regions-old.txt
sed -n '/^export const regions/,/^];$/p' components/data/regions.ts > /tmp/regions-new.txt
diff /tmp/regions-old.txt /tmp/regions-new.txt
```

The only differences should be the leading `export const regions: Region[] = [` vs. `const regions: Region[] = [`. Any other diff is a copy error.

- [ ] **Step 3: Stop the dev server**

Ctrl+C in the terminal running `npm run dev`.

---

### Task 5: Commit

**Files:** none modified

- [ ] **Step 1: Stage only the two refactor files**

```bash
git add components/data/regions.ts components/launched-ecosystems.tsx
```

(Do not stage `app/layout.tsx` — that is a pre-existing, unrelated change the user wants kept in its own commit.)

- [ ] **Step 2: Verify what will be committed**

```bash
git diff --cached --stat
```

Expected: exactly the two files from Task 3 Step 2.

- [ ] **Step 3: Commit**

```bash
git commit -m "$(cat <<'EOF'
refactor: extract regions data to its own module

Move the regions array and its private sub-types (Partner, District,
Stat) out of components/launched-ecosystems.tsx into
components/data/regions.ts. Re-export Region for the statusStyles
record. No visual or behavior change; launched-ecosystems.tsx drops
from ~1,000 to ~400 lines.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

- [ ] **Step 4: Confirm clean state**

```bash
git status
```

Expected: `app/layout.tsx` remains modified (pre-existing), working tree otherwise clean.

---

## Done criteria

- `components/data/regions.ts` exists with `regions` and `Region` exported.
- `components/launched-ecosystems.tsx` is ~400 lines, imports from `./data/regions`, and still exports `LaunchedEcosystems` with identical JSX.
- `npm run build` passes.
- The launched-ecosystems UI renders identically at `/`.
- One commit on the branch touching exactly two files.
