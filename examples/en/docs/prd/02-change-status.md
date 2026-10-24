# PRD 02: Change status

**Goal:** Whoever takes over or completes a request changes its status with one click.

**Behaviour:** Each row shows the status as text and colour. A select switches between "open", "in progress" and "done". The change persists after reload.

**Non-goals:** status history, comments.

## Acceptance criteria

- [ ] **Normal case:** Set status from "open" to "in progress"; after reload it still shows "in progress".
- [ ] **Error:** An unknown status from storage (e.g. `"archived"`) is shown as "open" instead of crashing.
- [ ] **Edge case:** With 200 requests the list stays usable (under 1 second to render).
