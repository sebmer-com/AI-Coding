# PRD 03: Filter nach Status

**Ziel:** Die Servicekoordination sieht auf einen Blick nur die offenen Anfragen.

**Verhalten:** Über der Liste stehen die Filter „Alle“, „offen“, „in Arbeit“, „erledigt“ mit Anzahl. Standard ist „Alle“.

**Nicht-Ziele:** Volltextsuche, gespeicherte Filter.

## Akzeptanzkriterien

- [ ] **Normalfall:** Filter „offen“ zeigt nur offene Anfragen, die Zahl im Filter stimmt.
- [ ] **Leerzustand:** Ohne Treffer erscheint „Keine Anfragen mit diesem Status.“
- [ ] **Grenzfall:** Wird eine Anfrage im Filter „offen“ auf „erledigt“ gesetzt, verschwindet sie sofort aus der Ansicht.
