# PRD 03: Filter nach Status

**Ziel:** Die Servicekoordination sieht auf einen Blick nur die offenen Anfragen.

**Verhalten:** Über der Liste stehen die Filter „Alle“, „offen“, „in Arbeit“, „erledigt“ mit Anzahl. Standard ist „Alle“. Der aktive Filter ist hervorgehoben.

**Nicht-Ziele:** Volltextsuche, gespeicherte Filter, Filter in der URL.

**Regeln, die gelten:** Status immer als Text plus Farbe (Gestaltungsregel 3). Akzentfarbe nur für die Hauptaktion „Anfrage speichern“, der aktive Filter nutzt deshalb die Textfarbe (Gestaltungsregel 2).

**Offene Fragen:** keine (vor Statuswechsel auf „in Arbeit“ geklärt).

## Akzeptanzkriterien

- [x] **Normalfall:** Filter „offen“ zeigt nur offene Anfragen, die Zahl im Filter stimmt.
- [x] **Leerzustand:** Ohne Treffer erscheint „Keine Anfragen mit diesem Status.“
- [x] **Grenzfall:** Wird eine Anfrage im Filter „offen“ auf „erledigt“ gesetzt, verschwindet sie sofort aus der Ansicht.

## Tests

| Kriterium | Test |
|---|---|
| Normalfall | `tests/filter.spec.ts` › PRD 03 normal; `src/lib/requests.test.ts` › filter (PRD 03) |
| Leerzustand | `tests/filter.spec.ts` › PRD 03 empty |
| Grenzfall | `tests/filter.spec.ts` › PRD 03 edge |
