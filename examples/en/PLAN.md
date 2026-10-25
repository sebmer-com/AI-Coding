# PLAN

| ID | Package | PRD | depends on | Status | Evidence |
|-----|------------------------|-------------------------------|------------|-------------|----------|
| P00 | Test setup | – | – | done | `npm test` and `npm run test:e2e` run in CI |
| P01 | Capture request | docs/prd/01-capture-request.md | P00 | done | 3 browser tests "PRD 01", unit tests `validateTitle` |
| P02 | List with status change | docs/prd/02-change-status.md | P01 | done | browser test "PRD 02 normal", unit tests `status` |
| P03 | Filter by status | docs/prd/03-filter.md | P02 | done | 3 browser tests "PRD 03", unit tests `filter (PRD 03)`; [plan](docs/superpowers/plans/2026-10-24-filter-by-status.md) |
| P04 | Sign-in and own data (V2) | no PRD yet | P03 | blocked | Issue: no Supabase test project yet; open question "Who may delete?" |

## Status and gates

A package changes status only when the evidence in the right-hand column exists. Claims without output do not count.

| Status | Meaning | Gate to the next status (evidence) |
|---|---|---|
| open | package is planned | PRD complete, no open questions, dependencies done |
| in progress | the agent works on it | tests for all acceptance criteria written and seen **red** (keep the output) |
| in review | implementation finished | **whole** test suite green, diff read, core flow checked in the browser, review without critical findings |
| done | package closed | commit pushed, CI green, row in `EVIDENCE.md` |
| blocked | an issue prevents progress | cause and owner recorded (GitHub issue or here); dependent packages do not start |

These statuses are a convention of this course. Superpowers itself tracks progress with checkboxes in the plan (`- [ ]`, `- [x]`), todos and the reports DONE, DONE_WITH_CONCERNS, NEEDS_CONTEXT and BLOCKED.

**Stop rule:** After two unsuccessful correction attempts the loop stops. Log the error message and the last prompt, look for the cause in the PRD, the context or a rule, and set the package to "blocked".
