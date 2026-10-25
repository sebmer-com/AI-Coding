# PLAN

| ID | Package | PRD | depends on | Status | Evidence |
|-----|---------|-----|------------|--------|----------|
| P00 | Test setup | – | – | open | |
| P01 | [ ] | docs/prd/01-[ ].md | P00 | open | |

## Status and gates (course convention)

| Status | Gate: may be set when this evidence exists |
|---|---|
| open | package is in the plan, PRD is linked |
| in progress | PRD complete, no open questions, dependencies done |
| in review | tests for all acceptance criteria first seen red, then the whole test suite green |
| done | diff read, browser checked, review without critical findings, commit pushed, CI green, row in `EVIDENCE.md` |
| blocked | cause and owner recorded; dependent packages do not start |

**Stop rule:** After two unsuccessful correction attempts the loop stops; set the package to "blocked".
