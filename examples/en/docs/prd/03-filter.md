# PRD 03: Filter by status

**Goal:** The service coordination team sees only the open requests at a glance.

**Behaviour:** Above the list are the filters "All", "open", "in progress", "done" with counts. Default is "All". The active filter is highlighted.

**Non-goals:** full-text search, saved filters, filter in the URL.

**Rules that apply:** Status always as text plus colour (design rule 3). Accent colour only for the main action "Save request", so the active filter uses the text colour (design rule 2).

**Open questions:** none (resolved before moving to "in progress").

## Acceptance criteria

- [x] **Normal case:** The filter "open" shows only open requests and the count matches.
- [x] **Empty state:** With no matches, "No requests with this status." appears.
- [x] **Edge case:** If a request is set to "done" while the "open" filter is active, it disappears immediately.

## Tests

| Criterion | Test |
|---|---|
| Normal case | `tests/filter.spec.ts` › PRD 03 normal; `src/lib/requests.test.ts` › filter (PRD 03) |
| Empty state | `tests/filter.spec.ts` › PRD 03 empty |
| Edge case | `tests/filter.spec.ts` › PRD 03 edge |
