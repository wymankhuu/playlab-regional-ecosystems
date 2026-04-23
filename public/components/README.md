# Component photos

Drop 16:9 landscape JPGs here to populate the "Example in the field" photo slots in each of the six components on the site.

## Expected filenames

Each component has a commented-out `image` stub in `components/components-grid.tsx`. Drop the matching file here, then uncomment the stub.

| Component | File |
|---|---|
| 01 · Regional Exploration Event | `01-nycps-institute.jpg` |
| 02 · Student AI Agency Initiative | `02-fcps-showcase.jpg` |
| 03 · Teacher AI Design Fellowship | `03-nycps-fellows.jpg` |
| 04 · School & District Cohort | `04-google-ecosystems.jpg` |
| 05 · AI Lab Schools | `05-ai-lab-schools.jpg` |
| 06 · Full Ecosystem | `06-regional-ecosystem.jpg` |

## Specs

- **Aspect ratio:** 16:9 (e.g., 1600×900, 1200×675)
- **Format:** JPG preferred; PNG or WebP also fine
- **File size:** keep under ~400 KB per image for fast loading (Next.js will further optimize on the fly)
- **Orientation:** landscape only

## Workflow

1. Add the image file to this directory with the expected filename.
2. Open `components/components-grid.tsx` and uncomment the matching `image: {...}` line inside the relevant component's `example` block.
3. Update the `alt` text if the one in the stub doesn't match the actual photo.
4. Commit and push. Vercel auto-deploys.
