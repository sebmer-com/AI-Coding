# Design: Filter by status

> Example of a design document as the Superpowers skill `brainstorming` saves it (location per the skill: `docs/superpowers/specs/YYYY-MM-DD-<topic>-design.md`). It complements PRD 03 but does not replace it.

## Goal

The service coordination team sees only requests with one status, in one click. Basis: `docs/prd/03-filter.md`.

## Approaches (proposed by the agent, one chosen)

| Approach | Benefit | Drawback | Decision |
|---|---|---|---|
| A: filter buttons with counts above the list | visible, one click, accessible with `aria-pressed` | takes a little more space | **chosen** |
| B: select box "show status" | compact | counts hard to see, two clicks | rejected |
| C: filter in the URL (`?status=open`) | shareable | non-goal in the PRD | rejected |

## Decisions

- Filtering and counting as pure functions in `src/lib/requests.ts` (`filterRequests`, `countByStatus`) so unit tests cover them without a browser.
- The active filter uses the text colour, not the accent colour (design rule 2).
- Without requests no filters are shown; with requests but no match, the empty state from PRD 03 appears.

## Tests

- Unit: `filterRequests` for one status and "all", `countByStatus` including the total, empty result.
- Browser: the three acceptance criteria from PRD 03.
