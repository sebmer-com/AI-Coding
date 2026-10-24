# PRD 01: Capture request

**Goal:** A new request appears with status "open" at the top of the list.

**Behaviour:** Form with title (required, max. 120 characters) and description (optional). "Save" creates the request and clears the form.

**Non-goals:** notifications, assignment, attachments, editing existing requests.

## Acceptance criteria

- [ ] **Normal case:** Saving the title "Projector missing in room 2" creates exactly one new entry with status "open" at the top of the list.
- [ ] **Error:** Empty title or whitespace only: the hint "Please enter a title." appears and no entry is created.
- [ ] **Edge case:** The title `<b>Test</b>` is shown as text, not bold (no HTML execution).

## Tests

- Unit: `src/lib/requests.test.ts` (validation, creation)
- Browser: `tests/request.spec.ts` (fill the form, check the list)
