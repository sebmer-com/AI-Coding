# Design: Change status (example of a Superpowers spec)

> This is what a design document looks like after the Superpowers `brainstorming` skill has interviewed you. It complements PRD 02 but does not replace it.

## Goal

Change a request's status with one click; the change survives a reload.

## Decisions from the interview

- A select instead of drag and drop (accessible, less code).
- Status as text plus colour (design rule from docs/moodboard.html).
- Unknown values from storage are shown as "open".

## Components

- `StatusSelect` (new): select element, calls `updateStatus(id, status)`.
- `requests.ts` (changed): `updateStatus` writes to storage.

## Tests

- Unit: `updateStatus` with a valid and an unknown status.
- Browser: set status, reload, check status.

## Open questions

- Should "done" be hidden after 30 days? (not in this package)
