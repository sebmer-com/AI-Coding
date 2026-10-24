# Plan: Change status (example of a Superpowers plan)

> This is what an implementation plan from the `writing-plans` skill looks like: small steps of a few minutes, each with file, test and check.

## Task 1: Type and normalisation

- File: `src/lib/requests.ts`
- Test first: `normalizeStatus("archived")` returns `"open"`.
- Check: `npm test -- requests` passes.
- Commit: `feat: normalise status`

## Task 2: updateStatus

- File: `src/lib/requests.ts`
- Test first: after `updateStatus(id, "in progress")`, `loadRequests()` returns the new status.
- Check: `npm test -- requests` passes.
- Commit: `feat: persist status`

## Task 3: Select in the list

- Files: `src/components/StatusSelect.tsx`, `src/App.tsx`
- Test first: `tests/status.spec.ts` sets a status, reloads, checks the text.
- Check: `npm run test:e2e` passes, browser check with the agent.
- Commit: `feat: change status in the list`
