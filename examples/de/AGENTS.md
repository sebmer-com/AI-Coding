# Arbeitsregeln für Coding-Agenten

Produkt: docs/onepager.md · Gestaltung: docs/moodboard.html · Architektur: docs/architektur.md
Plan: PLAN.md · Anforderungen: docs/prd/

## Befehle

- Installieren: `npm install`
- Starten: `npm run dev`
- Testen: `npm test` (Vitest) und `npm run test:e2e` (Playwright)

## Regeln

- Bearbeite nur das genannte Paket aus PLAN.md. Lies vorher seine PRD.
- Erst Test schreiben und fehlschlagen lassen, dann umsetzen, dann alle Tests laufen lassen.
- Halte dich an die Gestaltungsregeln in docs/moodboard.html.
- Keine Secrets im Code, keine echten Personendaten. `.env` bleibt in `.gitignore`.
- Neue Abhängigkeiten (npm-Pakete) nur nach Rückfrage.
- Melde am Ende: geänderte Dateien, Testergebnis, offene Punkte.
