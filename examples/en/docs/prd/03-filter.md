# PRD 03: Filter by status

**Goal:** The service coordination team sees only the open requests at a glance.

**Behaviour:** Above the list are the filters "All", "open", "in progress", "done" with counts. Default is "All".

**Non-goals:** full-text search, saved filters.

## Acceptance criteria

- [ ] **Normal case:** The filter "open" shows only open requests and the count matches.
- [ ] **Empty state:** With no matches, "No requests with this status." appears.
- [ ] **Edge case:** If a request is set to "done" while the "open" filter is active, it disappears immediately.
