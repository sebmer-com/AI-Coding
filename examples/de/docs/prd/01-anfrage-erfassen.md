# PRD 01: Anfrage erfassen

**Ziel:** Eine neue Anfrage landet mit Status „offen“ oben in der Liste.

**Verhalten:** Formular mit Titel (Pflicht, max. 120 Zeichen) und Beschreibung (optional). „Speichern“ legt die Anfrage an und leert das Formular.

**Nicht-Ziele:** Benachrichtigung, Zuweisung, Anhänge, Bearbeiten bestehender Anfragen.

## Akzeptanzkriterien

- [ ] **Normalfall:** Titel „Beamer im Raum 2 fehlt“ speichern ergibt genau einen neuen Eintrag mit Status „offen“ oben in der Liste.
- [ ] **Fehler:** Leerer Titel oder nur Leerzeichen: Hinweis „Bitte gib einen Titel ein.“ erscheint, es entsteht kein Eintrag.
- [ ] **Grenzfall:** Titel `<b>Test</b>` erscheint als Text, nicht fett (keine HTML-Ausführung).

## Tests

- Unit: `src/lib/requests.test.ts` (Validierung, Anlegen)
- Browser: `tests/anfrage.spec.ts` (Formular ausfüllen, Liste prüfen)
