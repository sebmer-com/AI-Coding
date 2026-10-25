# PLAN

| ID | Paket | PRD | hängt ab von | Status | Nachweis |
|-----|--------------------------|---------------------------------|--------------|-----------|----------|
| P00 | Testsetup | – | – | erledigt | `npm test` und `npm run test:e2e` laufen in CI |
| P01 | Anfrage erfassen | docs/prd/01-anfrage-erfassen.md | P00 | erledigt | 3 Browser-Tests „PRD 01“, Unit-Tests `validateTitle` |
| P02 | Liste mit Status ändern | docs/prd/02-status-aendern.md | P01 | erledigt | Browser-Test „PRD 02 normal“, Unit-Tests `status` |
| P03 | Filter nach Status | docs/prd/03-filter.md | P02 | erledigt | 3 Browser-Tests „PRD 03“, Unit-Tests `filter (PRD 03)`; [Plan](docs/superpowers/plans/2026-10-24-filter-nach-status.md) |
| P04 | Anmeldung und eigene Daten (V2) | noch keine PRD | P03 | blockiert | Issue: Testprojekt bei Supabase fehlt; offene Frage „Wer darf löschen?“ |

## Status und Gates

Ein Paket wechselt den Status nur, wenn der Nachweis der rechten Spalte vorliegt. Behauptungen ohne Ausgabe zählen nicht.

| Status | Bedeutung | Gate zum nächsten Status (Nachweis) |
|---|---|---|
| offen | Paket ist geplant | PRD vollständig, offene Fragen leer, Abhängigkeiten erledigt |
| in Arbeit | Agent arbeitet daran | Tests zu allen Akzeptanzkriterien geschrieben und **rot** gesehen (Ausgabe sichern) |
| in Prüfung | Umsetzung fertig | **ganze** Testsuite grün, Diff gelesen, Kernablauf im Browser geprüft, Review ohne kritische Befunde |
| erledigt | Paket abgeschlossen | Commit gepusht, CI grün, Zeile in `EVIDENCE.md` |
| blockiert | Issue verhindert Fortschritt | Ursache und Verantwortliche notiert (GitHub Issue oder hier); abhängige Pakete starten nicht |

Diese Status sind eine Konvention dieses Kurses. Superpowers selbst führt Fortschritt über Checkboxen im Plan (`- [ ]`, `- [x]`), Todos und die Rückmeldungen DONE, DONE_WITH_CONCERNS, NEEDS_CONTEXT und BLOCKED.

**Stoppregel:** Nach zwei erfolglosen Korrekturversuchen hält der Loop an. Fehlermeldung und letzten Prompt ins Lernlogbuch, Ursache in PRD, Kontext oder Regel suchen, Paket auf „blockiert“ setzen.
