# Isaiah Suarez | ILP Portfolio

A local React + Vite portfolio with 14 CSUMB course pages. No backend or environment variables.

## Development

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run lint`
- `npm test`

Edit the biography and goals in `src/data/profile.js`; all supplied catalog descriptions and course metadata are in `src/data/courses.js`. Course order controls directory and previous/next navigation. No course completion is inferred.

## Add authentic evidence

Place student-approved documents under `public/documents/courses/` and images under `public/images/`. Add evidence records to the appropriate course array:

```js
{ id: 'unique-id', type: 'pdf', title: 'Actual assignment title', url: '/documents/courses/actual-file.pdf' }
{ id: 'unique-image', type: 'image', title: 'Assignment screenshot', url: '/images/actual-file.png', alt: 'Describe the actual screenshot' }
{ id: 'unique-source', type: 'source', title: 'Source code', url: 'https://verified-repository-url' }
{ id: 'unique-link', type: 'link', title: 'Assignment link', url: 'https://verified-url' }
{ id: 'unique-reflection', type: 'reflection', title: 'Learning reflection', text: 'Authentic student-written account of at least 100 words documenting actual accomplishments.' }
```

These are schema examples only; none are active course evidence. The renderer supports PDFs, screenshots, source files, external links, and reflections without preview libraries. Links open in a new tab and are labeled accordingly. Files must exist before records are added. Only root-relative and HTTP(S) URLs render links/images. Mark `evidenceStatus` complete only after authentic qualifying evidence is reviewed; the presence of a record alone does not certify rubric completion.

## Deployment preparation

Vercel: Vite framework, build command `npm run build`, output directory `dist`. `vercel.json` routes application URLs to the entry point while excluding static asset paths. Confirm deep-link refreshes on staging after senior review. This phase does not commit, push, or deploy.

Typography uses Google Fonts (DM Sans and Manrope) with system fallbacks. All decorative artwork is CSS; no third-party photography is used.

See `docs/RUBRIC_CHECKLIST.md` and `docs/IMPLEMENTATION_REPORT.md` for review readiness and evidence gaps.
