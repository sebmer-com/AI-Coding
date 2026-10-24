# Architektur: Anfrageboard

Version 1 läuft komplett im Browser. Version 2 ergänzt Anmeldung und Datenbank.

```mermaid
flowchart LR
  Nutzer((Servicekoordination)) --> UI[Web-Oberfläche<br/>React + Vite]
  UI --> Store[(Speicher<br/>V1: localStorage)]
  UI -. ab V2 .-> Auth[Anmeldung<br/>Supabase Auth]
  UI -. ab V2 .-> DB[(Datenbank<br/>Supabase Postgres mit RLS)]
  Repo[GitHub-Repository] --> Deploy[Vercel<br/>Preview pro Branch]
  Deploy --> UI
```

## Entscheidungen

| Entscheidung | Begründung | Alternative |
|---|---|---|
| Vite + React + TypeScript | schneller Start, Agenten kennen den Stack gut | Next.js (mehr Server-Funktionen, mehr Komplexität) |
| V1 ohne Server | kein Secret, kein Hosting nötig, schnell testbar | sofort Supabase |
| Tests mit Vitest und Playwright | Logik und Klickpfade getrennt prüfbar | nur manuelle Tests |

## Offen

- Wo laufen Preview und Produktion? (Vorschlag: Vercel Hobby für das Lab, Pro für echten Betrieb)
- Wer darf Anfragen löschen?
