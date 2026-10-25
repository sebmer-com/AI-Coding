# Filter nach Status Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Filterknöpfe mit Anzahl über der Liste zeigen nur Anfragen des gewählten Status.

**Architecture:** Zwei reine Funktionen in `src/lib/requests.ts` liefern gefilterte Liste und Zähler; `App.tsx` hält den gewählten Filter im State und zeigt Leerzustände.

**Tech Stack:** React 19, TypeScript, Vitest, Playwright

**Spec:** `docs/superpowers/specs/2026-10-24-filter-nach-status-design.md` (Anforderungen: `docs/prd/03-filter.md`)

## Global Constraints

- Keine neuen npm-Pakete.
- Texte: „Alle“, „offen“, „in Arbeit“, „erledigt“, Leerzustand „Keine Anfragen mit diesem Status.“
- Aktiver Filter in Textfarbe, nicht Akzentfarbe.

## Review Focus

- Statuswechsel bei aktivem Filter: Zeile muss sofort verschwinden, Zähler sofort stimmen.
- Leere Liste ohne Anfragen: keine Filter anzeigen, alter Leerzustand bleibt.

---

### Task 1: Filtern und Zählen

**Files:**
- Modify: `src/lib/requests.ts`
- Test: `src/lib/requests.test.ts`

**Interfaces:**
- Produces: `filterRequests(list: Request[], filter: StatusFilter): Request[]`, `countByStatus(list: Request[]): Record<StatusFilter, number>`, `FILTERS`

- [x] **Step 1: Write the failing test** (`describe('filter (PRD 03)')`, drei Tests)
- [x] **Step 2: Run test to verify it fails**: `npm test` → `Tests 3 failed | 8 passed (11)`, `filterRequests is not a function`
- [x] **Step 3: Implement** `filterRequests` und `countByStatus`
- [x] **Step 4: Run test to verify it passes**: `npm test` → `Tests 11 passed (11)`
- [x] **Step 5: Commit**

### Task 2: Filterknöpfe und Leerzustand

**Files:**
- Modify: `src/App.tsx`, `src/labels.ts`, `src/styles.css`
- Test: `tests/filter.spec.ts`

**Interfaces:**
- Consumes: `filterRequests`, `countByStatus`, `FILTERS` aus Task 1

- [x] **Step 1: Write the failing test** (PRD 03 normal, empty, edge)
- [x] **Step 2: Run test to verify it fails**
- [x] **Step 3: Implement** Knöpfe mit `aria-pressed`, Zähler, Leerzustand
- [x] **Step 4: Run test to verify it passes**: `npm run test:e2e` → `7 passed`; `npx tsc -b` ohne Fehler
- [x] **Step 5: Commit**
