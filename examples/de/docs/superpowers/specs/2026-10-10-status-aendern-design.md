# Design: Status ändern (Beispiel einer Superpowers-Spec)

> So sieht ein Design-Dokument aus, das der Superpowers-Skill `brainstorming` nach dem Interview speichert. Es ergänzt PRD 02, ersetzt sie aber nicht.

## Ziel

Status einer Anfrage mit einem Klick ändern; die Änderung überlebt ein Neuladen.

## Entscheidungen aus dem Interview

- Auswahlfeld statt Drag and Drop (barrierearm, weniger Code).
- Status als Text plus Farbe (Gestaltungsregel aus docs/moodboard.html).
- Unbekannte Werte aus dem Speicher werden als „offen“ angezeigt.

## Komponenten

- `StatusSelect` (neu): Auswahlfeld, ruft `updateStatus(id, status)`.
- `requests.ts` (geändert): `updateStatus` schreibt in den Speicher.

## Tests

- Unit: `updateStatus` mit gültigem und unbekanntem Status.
- Browser: Status setzen, Seite neu laden, Status prüfen.

## Offene Fragen

- Soll „erledigt“ nach 30 Tagen ausgeblendet werden? (nicht in diesem Paket)
