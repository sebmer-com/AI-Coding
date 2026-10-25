# PLAN

| ID | Paket | PRD | hängt ab von | Status | Nachweis |
|-----|-------|-----|--------------|--------|----------|
| P00 | Testsetup | – | – | offen | |
| P01 | [ ] | docs/prd/01-[ ].md | P00 | offen | |

## Status und Gates (Kurskonvention)

| Status | Gate zum nächsten Status (Nachweis) |
|---|---|
| offen | PRD vollständig, offene Fragen leer, Abhängigkeiten erledigt |
| in Arbeit | Tests zu allen Akzeptanzkriterien geschrieben und rot gesehen |
| in Prüfung | ganze Testsuite grün, Diff gelesen, Browser geprüft, Review ohne kritische Befunde |
| erledigt | Commit gepusht, CI grün, Zeile in `EVIDENCE.md` |
| blockiert | Ursache und Verantwortliche notiert; abhängige Pakete starten nicht |

**Stoppregel:** Nach zwei erfolglosen Korrekturversuchen hält der Loop an; Paket auf „blockiert“.
