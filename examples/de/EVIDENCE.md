# Evidence: Anfrageboard

Stand: 24.10.2026 · lokal und in CI ([Workflow](../../.github/workflows/examples.yml)): 11 Unit-Tests (Vitest), 7 Browser-Tests (Playwright), `tsc -b` ohne Fehler.

## Anforderungen und Nachweise

| Anforderung | Prüfung | Ergebnis |
|---|---|---|
| PRD 01: neue Anfrage steht als „offen“ oben | `tests/anfrage.spec.ts` › PRD 01 normal | grün |
| PRD 01: leerer Titel wird abgelehnt | `tests/anfrage.spec.ts` › PRD 01 error; `requests.test.ts` › validateTitle | grün |
| PRD 01: HTML im Titel wird als Text gezeigt | `tests/anfrage.spec.ts` › PRD 01 edge | grün |
| PRD 02: Status bleibt nach Neuladen | `tests/anfrage.spec.ts` › PRD 02 normal; `requests.test.ts` › persists a changed status | grün |
| PRD 02: unbekannter Status wird „offen“ | `requests.test.ts` › normalizes unknown values to open | grün |
| PRD 02: 200 Anfragen unter 1 Sekunde | – | offen, kein Test vorhanden |
| PRD 03: Filter „offen“ mit Anzahl | `tests/filter.spec.ts` › PRD 03 normal; `requests.test.ts` › filter (PRD 03) | grün |
| PRD 03: Leerzustand im Filter | `tests/filter.spec.ts` › PRD 03 empty | grün |
| PRD 03: Statuswechsel im Filter | `tests/filter.spec.ts` › PRD 03 edge | grün |

## Security-Check

| Prüfung | Vorgehen | Ergebnis |
|---|---|---|
| Zugriff | V1 ohne Server, Daten nur im eigenen Browser | nicht anwendbar, für V2 mit Testkonten A/B einplanen |
| Secrets | Agent hat Code und Git-Historie durchsucht | keine Treffer, `.env` in `.gitignore` |
| Eingaben | leere, 121 Zeichen lange und HTML-Eingaben | als Test vorhanden |

## Kosten

| Art | Posten | Ist | Schätzung pro Monat |
|---|---|---|---|
| Entwicklung | Agent (Pro-Abo) | 20 € | 20 € |
| Entwicklung | Lovable Free | 0 € | 0 € |
| Betrieb | Hosting Vercel Hobby (nur Lab) | 0 € | 0 € |
| Betrieb | Supabase Free (ab V2) | 0 € | 0 €, ab Pilot ca. 25 $ |

## Offen nach Priorität

- **P0 vor echten Daten:** Anmeldung und Row Level Security (V2, Paket P04 blockiert), Löschkonzept.
- **P1 vor einem Pilot:** Lasttest mit 200 Anfragen, Backup der Datenbank, Fehlerseite, Barrierefreiheits-Check.
