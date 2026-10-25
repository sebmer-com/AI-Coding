# PLAN

| ID | Package | PRD | depends on | Status | Evidence |
|-----|---------|-----|------------|--------|----------|
| P00 | Test setup | – | – | open | |
| P01 | [ ] | docs/prd/01-[ ].md | P00 | open | |

## Status and gates (course convention)

| Status | Gate to the next status (evidence) |
|---|---|
| open | PRD complete, no open questions, dependencies done |
| in progress | tests for all acceptance criteria written and seen red |
| in review | whole test suite green, diff read, browser checked, review without critical findings |
| done | commit pushed, CI green, row in `EVIDENCE.md` |
| blocked | cause and owner recorded; dependent packages do not start |

**Stop rule:** After two unsuccessful correction attempts the loop stops; set the package to "blocked".
