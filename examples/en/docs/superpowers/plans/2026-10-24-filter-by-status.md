# Filter by Status Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Filter buttons with counts above the list show only requests with the chosen status.

**Architecture:** Two pure functions in `src/lib/requests.ts` return the filtered list and the counts; `App.tsx` keeps the chosen filter in state and shows empty states.

**Tech Stack:** React 19, TypeScript, Vitest, Playwright

**Spec:** `docs/superpowers/specs/2026-10-24-filter-by-status-design.md` (requirements: `docs/prd/03-filter.md`)

## Global Constraints

- No new npm packages.
- Copy: "All", "open", "in progress", "done", empty state "No requests with this status."
- Active filter in the text colour, not the accent colour.

## Review Focus

- Status change while a filter is active: the row must disappear at once and the counts must update at once.
- Empty list without requests: show no filters, keep the original empty state.

---

### Task 1: Filter and count

**Files:**
- Modify: `src/lib/requests.ts`
- Test: `src/lib/requests.test.ts`

**Interfaces:**
- Produces: `filterRequests(list: Request[], filter: StatusFilter): Request[]`, `countByStatus(list: Request[]): Record<StatusFilter, number>`, `FILTERS`

- [x] **Step 1: Write the failing test** (`describe('filter (PRD 03)')`, three tests)
- [x] **Step 2: Run test to verify it fails**: `npm test` → `Tests 3 failed | 8 passed (11)`, `filterRequests is not a function`
- [x] **Step 3: Implement** `filterRequests` and `countByStatus`
- [x] **Step 4: Run test to verify it passes**: `npm test` → `Tests 11 passed (11)`
- [x] **Step 5: Commit**

### Task 2: Filter buttons and empty state

**Files:**
- Modify: `src/App.tsx`, `src/labels.ts`, `src/styles.css`
- Test: `tests/filter.spec.ts`

**Interfaces:**
- Consumes: `filterRequests`, `countByStatus`, `FILTERS` from Task 1

- [x] **Step 1: Write the failing test** (PRD 03 normal, empty, edge)
- [x] **Step 2: Run test to verify it fails**
- [x] **Step 3: Implement** buttons with `aria-pressed`, counts, empty state
- [x] **Step 4: Run test to verify it passes**: `npm run test:e2e` → `7 passed`; `npx tsc -b` without errors
- [x] **Step 5: Commit**
