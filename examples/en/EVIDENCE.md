# Evidence: Request board

As of 24 Oct 2026 · locally and in CI ([workflow](../../.github/workflows/examples.yml)): 11 unit tests (Vitest), 7 browser tests (Playwright), `tsc -b` without errors.

## Requirements and evidence

| Requirement | Check | Result |
|---|---|---|
| PRD 01: new request appears as "open" at the top | `tests/request.spec.ts` › PRD 01 normal | green |
| PRD 01: empty title is rejected | `tests/request.spec.ts` › PRD 01 error; `requests.test.ts` › validateTitle | green |
| PRD 01: HTML in the title is shown as text | `tests/request.spec.ts` › PRD 01 edge | green |
| PRD 02: status survives a reload | `tests/request.spec.ts` › PRD 02 normal; `requests.test.ts` › persists a changed status | green |
| PRD 02: unknown status becomes "open" | `requests.test.ts` › normalizes unknown values to open | green |
| PRD 02: 200 requests in under 1 second | – | open, no test yet |
| PRD 03: filter "open" with count | `tests/filter.spec.ts` › PRD 03 normal; `requests.test.ts` › filter (PRD 03) | green |
| PRD 03: empty state in a filter | `tests/filter.spec.ts` › PRD 03 empty | green |
| PRD 03: status change inside a filter | `tests/filter.spec.ts` › PRD 03 edge | green |

## Security check

| Check | Approach | Result |
|---|---|---|
| Access | V1 has no server, data only in the own browser | not applicable, plan test accounts A/B for V2 |
| Secrets | agent searched the code and the Git history | no findings, `.env` in `.gitignore` |
| Input | empty, 121-character and HTML input | covered by tests |

## Costs

| Type | Item | Actual | Estimate per month |
|---|---|---|---|
| Development | Agent (Pro plan) | €20 | €20 |
| Development | Lovable Free | €0 | €0 |
| Operation | Vercel Hobby hosting (lab only) | €0 | €0 |
| Operation | Supabase Free (from V2) | €0 | €0, about $25 for a pilot |

## Open by priority

- **P0 before real data:** sign-in and Row Level Security (V2, package P04 blocked), deletion concept.
- **P1 before a pilot:** load test with 200 requests, database backup, error page, accessibility check.
