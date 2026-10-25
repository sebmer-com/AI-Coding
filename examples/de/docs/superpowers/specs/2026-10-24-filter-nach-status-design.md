# Design: Filter nach Status

> Beispiel eines Design-Dokuments, wie es der Superpowers-Skill `brainstorming` speichert (Ablage laut Skill: `docs/superpowers/specs/YYYY-MM-DD-<topic>-design.md`). Es ergänzt PRD 03, ersetzt sie aber nicht.

## Ziel

Die Servicekoordination sieht mit einem Klick nur Anfragen eines Status. Grundlage: `docs/prd/03-filter.md`.

## Ansätze (vom Agenten vorgelegt, einer gewählt)

| Ansatz | Vorteil | Nachteil | Entscheidung |
|---|---|---|---|
| A: Filterknöpfe mit Anzahl über der Liste | sichtbar, ein Klick, barrierearm mit `aria-pressed` | etwas mehr Platz | **gewählt** |
| B: Auswahlfeld „Status anzeigen“ | kompakt | Anzahl schlecht sichtbar, zwei Klicks | verworfen |
| C: Filter in der URL (`?status=open`) | teilbar | Nicht-Ziel laut PRD | verworfen |

## Entscheidungen

- Filtern und Zählen als reine Funktionen in `src/lib/requests.ts` (`filterRequests`, `countByStatus`), damit Unit-Tests sie ohne Browser prüfen.
- Der aktive Filter nutzt die Textfarbe, nicht die Akzentfarbe (Gestaltungsregel 2).
- Ohne Anfragen werden keine Filter gezeigt; mit Anfragen, aber ohne Treffer erscheint der Leerzustand aus PRD 03.

## Tests

- Unit: `filterRequests` für einen Status und „all“, `countByStatus` inklusive Summe, leeres Ergebnis.
- Browser: die drei Akzeptanzkriterien aus PRD 03.
