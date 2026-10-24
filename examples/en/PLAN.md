# PLAN

| ID | Package | PRD | depends on | Status |
|-----|------------------------|-------------------------------|------------|-------------|
| P00 | Test setup | – | – | done |
| P01 | Capture request | docs/prd/01-capture-request.md | P00 | done |
| P02 | List with status change | docs/prd/02-change-status.md | P01 | in progress |
| P03 | Filter by status | docs/prd/03-filter.md | P02 | open |

**Done means:** every acceptance criterion of the PRD exists as a test and passes, the diff is reviewed, the commit is pushed.

**Stop rule:** After two unsuccessful correction attempts the loop stops. Log the error message and the last prompt, then look for the cause in the PRD, the context or a rule.
