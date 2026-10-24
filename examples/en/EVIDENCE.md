# Evidence: Request board

Status: commit `a1b2c3d` · 2026-10-20

## Requirements and evidence

| Requirement | Check | Result | Reference |
|---|---|---|---|
| PRD 01: new request shows as "open" at the top | tests/request.spec.ts | pass | commit a1b2c3d |
| PRD 01: empty title is rejected | src/lib/requests.test.ts | pass | commit a1b2c3d |
| PRD 01: HTML in title is shown as text | tests/request.spec.ts | pass | commit a1b2c3d |
| PRD 02: status persists after reload | tests/status.spec.ts | pass | commit 9f8e7d6 |
| PRD 03: filter "open" | – | open | P03 not implemented yet |

## Security check

| Check | Approach | Result |
|---|---|---|
| Access | V1 has no server, data stays in the user's browser | not applicable, plan test accounts A/B for V2 |
| Secrets | agent searched code and Git history | no findings, `.env` in `.gitignore` |
| Input | empty, 5000-character and HTML input | covered by tests |

## Costs

| Type | Item | Actual | Estimate per month |
|---|---|---|---|
| Development | Agent (Pro subscription) | 20 € | 20 € |
| Development | Lovable Free | 0 € | 0 € |
| Operations | Hosting Vercel Hobby (lab only) | 0 € | 0 € |
| Operations | Supabase Free (from V2) | 0 € | 0 €, about 25 $ for a pilot |

## Open by priority

- **P0 before real data:** sign-in and row level security (V2), deletion concept.
- **P1 before a pilot:** database backup, error page, accessibility check.
