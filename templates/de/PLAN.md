# PLAN

| ID | Paket | PRD | hängt ab von | Status | Nachweis |
|-----|-------|-----|--------------|--------|----------|
| P00 | Testsetup | – | – | offen | |
| P01 | [ ] | docs/prd/01-[ ].md | P00 | offen | |

## Status und Gates (Kurskonvention)

| Status | Gate: darf gesetzt werden, wenn dieser Nachweis vorliegt |
|---|---|
| offen | Paket steht im Plan, PRD ist verlinkt |
| in Arbeit | PRD vollständig, offene Fragen leer, Abhängigkeiten erledigt |
| in Prüfung | Tests zu allen Akzeptanzkriterien erst rot gesehen, danach ganze Testsuite grün |
| erledigt | Diff gelesen, Browser geprüft, Review ohne kritische Befunde, Commit gepusht, CI grün, Zeile in `EVIDENCE.md` |
| blockiert | Ursache und Verantwortliche notiert; abhängige Pakete starten nicht |

**Stoppregel:** Nach zwei erfolglosen Korrekturversuchen hält der Loop an; Paket auf „blockiert“.
