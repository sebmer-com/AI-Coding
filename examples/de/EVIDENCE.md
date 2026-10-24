# Evidence: Anfrageboard

Stand: Commit `a1b2c3d` · 2026-10-20

## Anforderungen und Nachweise

| Anforderung | Prüfung | Ergebnis | Fundstelle |
|---|---|---|---|
| PRD 01: neue Anfrage steht als „offen“ oben | tests/anfrage.spec.ts | grün | Commit a1b2c3d |
| PRD 01: leerer Titel wird abgelehnt | src/lib/requests.test.ts | grün | Commit a1b2c3d |
| PRD 01: HTML im Titel wird als Text gezeigt | tests/anfrage.spec.ts | grün | Commit a1b2c3d |
| PRD 02: Status bleibt nach Neuladen | tests/status.spec.ts | grün | Commit 9f8e7d6 |
| PRD 03: Filter „offen“ | – | offen | P03 noch nicht umgesetzt |

## Security-Check

| Prüfung | Vorgehen | Ergebnis |
|---|---|---|
| Zugriff | V1 ohne Server, Daten nur im eigenen Browser | nicht anwendbar, für V2 mit Testkonten A/B einplanen |
| Secrets | Agent hat Code und Git-Historie durchsucht | keine Treffer, `.env` in `.gitignore` |
| Eingaben | leere, 5000 Zeichen lange und HTML-Eingaben | als Test vorhanden |

## Kosten

| Art | Posten | Ist | Schätzung pro Monat |
|---|---|---|---|
| Entwicklung | Agent (Pro-Abo) | 20 € | 20 € |
| Entwicklung | Lovable Free | 0 € | 0 € |
| Betrieb | Hosting Vercel Hobby (nur Lab) | 0 € | 0 € |
| Betrieb | Supabase Free (ab V2) | 0 € | 0 €, ab Pilot ca. 25 $ |

## Offen nach Priorität

- **P0 vor echten Daten:** Anmeldung und Row Level Security (V2), Löschkonzept.
- **P1 vor einem Pilot:** Backup der Datenbank, Fehlerseite, Barrierefreiheits-Check.
