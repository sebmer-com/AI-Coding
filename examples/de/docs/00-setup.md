# Dokument 0: Setup und Zugänge

Stand: 2026-10-01 · Projekt: Anfrageboard (Beispiel)

## Werkzeuge

| Werkzeug | Version | Geprüft mit |
|---|---|---|
| Betriebssystem | macOS 15 (Beispiel) | `sw_vers` |
| Git | 2.51.0 | `git --version` |
| Node.js (LTS) | 24.22.1 | `node --version` |
| npm | 11.5.1 | `npm --version` |
| VS Code | 1.105 | `code --version` |
| GitHub CLI | 2.80 | `gh --version` |
| Coding-Agent | Claude Code 2.1 oder Codex CLI 0.15 | `claude --version` / `codex --version` |

Startbefehl des Agenten im Projektordner:

```bash
claude --permission-mode default
# oder
codex --sandbox read-only --ask-for-approval on-request
```

## Zugänge (nur Namen, nie Passwörter oder Tokens)

| Dienst | Konto | Plan | Budgetgrenze |
|---|---|---|---|
| GitHub | beispiel-nutzerin | Free | 0 € |
| Claude oder ChatGPT | beispiel@firma.de | Pro / Plus | 40 € pro Monat |
| Lovable (optional) | beispiel@firma.de | Free | 0 € |
| Supabase (optional, ab SLE 5) | noch offen | Free | 0 € |
| Vercel (optional, ab SLE 5) | noch offen | Hobby | 0 € |

## Repository

- GitHub: `https://github.com/beispiel-nutzerin/anfrageboard` (privat)
- Lokaler Pfad: `~/Projekte/anfrageboard`
- Starten: `npm install`, dann `npm run dev` (öffnet http://localhost:5173)
- Testen: `npm test`

## Offen

- [ ] IT-Freigabe für Node.js auf dem Firmenrechner (Ansprechpartner: IT-Service)
- [ ] Entscheidung Datenbank: lokal (Browser-Speicher) oder Supabase
