# PLAN

| ID | Paket | PRD | hängt ab von | Status |
|-----|--------------------------|---------------------------------|--------------|-----------|
| P00 | Testsetup | – | – | erledigt |
| P01 | Anfrage erfassen | docs/prd/01-anfrage-erfassen.md | P00 | erledigt |
| P02 | Liste mit Status ändern | docs/prd/02-status-aendern.md | P01 | in Arbeit |
| P03 | Filter nach Status | docs/prd/03-filter.md | P02 | offen |

**Fertig heißt:** Alle Akzeptanzkriterien der PRD sind als Test vorhanden und grün, der Diff ist geprüft, der Commit ist gepusht.

**Stoppregel:** Nach zwei erfolglosen Korrekturversuchen hält der Loop an. Fehlermeldung und letzten Prompt ins Lernlogbuch, Ursache in PRD, Kontext oder Regel suchen.
