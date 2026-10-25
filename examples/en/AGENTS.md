# Working rules for coding agents

Product: docs/one-pager.md · Design: docs/moodboard.html · Architecture: docs/architecture.md
Plan: PLAN.md · Requirements: docs/prd/

## Commands

- Install: `npm install`
- Start: `npm run dev`
- Test: `npm test` (Vitest) and `npm run test:e2e` (Playwright)

## Rules

- Only work on the named package from PLAN.md. Read its PRD first.
- Write the test first and watch it fail, then implement, then run all tests.
- Follow the design rules in docs/moodboard.html.
- No secrets in code, no real personal data. `.env` stays in `.gitignore`.
- New dependencies (npm packages) only after asking.
- Report at the end: changed files, test result, open points.
- Design: values and rules from `DESIGN.md`, no raw hex values in code.
- Change a status in `PLAN.md` only with evidence (see "Status and gates"); never set "done" yourself.
