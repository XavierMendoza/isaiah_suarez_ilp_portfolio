# Course reflection review — Phase 2

> Final-phase status: the user has confirmed Isaiah’s approval of all 12 reflections. See [Final completion report](FINAL_COMPLETION_REPORT.md) for current status. Earlier pending-verification statements below are historical.

Prepared for senior-engineer review on October 24, 2026. Twelve original drafts were authored for Isaiah’s portfolio using the supplied course descriptions and the requested topic lists. No student coursework artifacts or verified personal activity records were available. These are cautious first-person reflection drafts, not verified descriptions of completed coursework. All must be personalized and confirmed by Isaiah before satisfying the evidence rubric.

## Individual review

Counts use whitespace-separated words in reflection text only; titles and labels are excluded. Hyphenated terms count as one word. Each draft has two paragraphs and meets the requested 130–160-word range.

| Course | Words | Main concepts | Originality and factual grounding | Personal confirmation required |
| --- | ---: | --- | --- | --- |
| CST 300 | 151 | Critical reading, academic writing, research/source evaluation, audiences, technical communication | Audience-centered opening; interprets source evaluation and revision rather than restating the catalog. No essay or research project claimed. | Yes — Reading, source evaluation, revision, and personal writing priorities. |
| CST 338 | 150 | Objects/classes, encapsulation, architecture, requirements, organization, maintainability, life cycle | Responsibility-centered design discussion; no language, application, or completed programming assignment claimed. | Yes — Programming/design activities and personal design perspective. |
| CST 363 | 153 | Relational schemas, SQL, keys, relationships, integrity, administration, transactions | Connects keys to application consistency; no database project or query results claimed. | Yes — Schema/query activities and personal learning. |
| CST 334 | 153 | Linux, command line, shell scripting, processes, memory, file systems, concurrency | Resource-management perspective distinguishes system use from system design; no commands, labs, or tools used personally claimed. | Yes — Command-line, scripting, and systems activities. |
| CST 311 | 152 | LAN/WAN, TCP/IP, protocols, architecture, performance, security | Question-led communication path discussion; no lab configuration, Cisco use, or performance measurement claimed. | Yes — Networking activities and personal understanding. |
| CST 336 | 153 | Frontend/backend, client-server requests, responsive design, server programming, APIs, databases | Follows cooperation across web layers; no website, API implementation, or framework use claimed. | Yes — Request-tracing and web coursework activities. |
| CST 370 | 153 | Structures, time complexity, sorting/searching, trees/graphs, dynamic programming, greedy, divide-and-conquer | Contrasts strategy conditions and scaling; no submitted solution or maximum-coins assignment included. | Yes — Algorithm analysis activities and personal reasoning. |
| CST 462S | 152 | Social justice, digital inequality, access, ethics, responsibility, communities, inclusion | Distinguishes access from opportunity; no placement, organization, presentation, or participation invented. | Yes — Actual discussion, reflection, and service-learning experience. |
| CST 328 | 153 | Visual principles, digital media, typography, color, composition, communication, creativity, aesthetics | Emphasizes interpretation and audience; no artwork, design deliverable, or software use claimed. | Yes — Actual design activities and personal visual reasoning. |
| CST 438 | 152 | Process, requirements, design, implementation, testing, management, collaboration, maintainability | Links process decisions to maintenance; no team contribution, Spring Boot lab, API, or completed project claimed. | Yes — Development activities, contributions, and personal process learning. |
| CST 315 | 153 | Digital assets, authentication, access control, cryptography, malware, social engineering, vulnerabilities | Contrasts technical and human failure paths; no security lab, cipher assignment, or analysis results claimed. | Yes — Security reasoning/analysis activities and personal learning. |
| CST 329 | 152 | Propositional/first-order logic, formulas, arguments, proofs, conditionals, quantifiers, problem-solving | Assumptions-to-conclusions structure; no particular proof or submitted assignment claimed. | Yes — Actual formula-writing, proof-checking, and reasoning activities. |

## Originality and accuracy limits

All 12 drafts were individually reviewed for distinct openings, technical focus, organization, conclusions, and unsupported accomplishments. All 24 paragraphs are unique. Shared academic vocabulary and conditional phrasing remain intentional; the drafts do not duplicate catalog paragraphs. General technical explanations expand the supplied topics, while conditional language separates possible learning activities from verified experience. No grades, employers, lab outcomes, presentations, completed applications, or team contributions were introduced. First-person attitudes also require Isaiah’s approval.

No other portfolio was read or modified. The specifically prohibited maximum-coins Java assignment, Spring Boot laboratory API, substitution cipher, and invented service placement are absent. This is an authorship and editorial review, not an external plagiarism certification; no plagiarism database or other student’s text was checked.

## Implementation and files modified

- `src/data/courses.js`: twelve reflection records in existing evidence arrays; both record-level and item-level confirmation metadata. Capstones have empty arrays and deferred status.
- `src/components/courses/EvidenceSection.jsx`: existing visual styles, a small Draft reflection label, the required Coursework & Learning Reflection heading, semantic paragraphs, and neutral capstone copy.
- `src/pages/Home.jsx`, `src/pages/Courses.jsx`, `src/pages/CourseDetail.jsx`: updated stale forthcoming-reflection copy only.
- `scripts/content.test.js`: replaced obsolete all-empty expectations with draft length, association, uniqueness, pending-confirmation, and capstone checks.
- `docs/COURSE_REFLECTION_REVIEW.md`: this report.
- `docs/RUBRIC_CHECKLIST.md`: current readiness and remaining requirements.
- `docs/IMPLEMENTATION_REPORT.md`: Phase 2 pointer; original Phase 1 report retained as history.

CSS, navigation, course URLs, homepage layout, titles, units, topics, and descriptions are unchanged. An in-memory baseline comparison confirmed exact preservation of all 14 catalog records outside evidence fields. The supplied catalog descriptions are the reference; no independent current-catalog certification is claimed. No Projects section, commits, pushes, or deployment.

## Verification

- `npm run build`: PASS (52 modules).
- `npm run lint`: PASS.
- `npm test`: PASS, four groups.
- Browser: all 14 dedicated routes rendered with correct titles at 1440, 390, and 320 pixels (42 checks), with no horizontal document overflow. Each of the 12 drafts rendered two paragraphs and the same word count as the source. Capstones rendered no reflection paragraphs.
- Visually inspected mobile reflection typography at 320 pixels; text wraps readably within the existing layout.
- Clicked Next from CST 300 to CST 338, Previous back to CST 300, the directory return link, and the mobile menu to About; menu closes after navigation.
- Browser console: no captured errors or warnings. Internal course destinations correspond to the verified route set; no evidence URLs were added. Existing external program link was preserved, not independently availability-tested in this pass.
- Browser checks used local Vite at port 5174; production hosting and physical devices were not tested.

## Rubric readiness (25 possible points, no score claimed)

Homepage (5): name, biography draft, program description/link, learning outcomes section, academic/professional goal drafts, and course navigation are present. Biography and goals still require Isaiah’s approval. The outcomes are explicitly student-friendly summaries; confirm their alignment with official program outcomes before submission.

Course pages (10): exactly 14 records and dedicated pages, preserved supplied descriptions, working directory and sequential navigation.

Evidence (10): twelve correctly associated drafts exceed 100 words, but word count alone does not satisfy the requirement to explain what Isaiah actually did. He must confirm and revise each draft with authentic learning activities; do not change status to complete before that review. CST 489 and CST 499 remain deferred under the supplied instructor exception, with their pages and descriptions retained.

No unsupported accomplishment claims require removal from these drafts. The remaining work is verification and personalization of all twelve accounts, not invented evidence. Stop here for senior-engineer review.
