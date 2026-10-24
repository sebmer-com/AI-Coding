# Im Browser prüfen: Playwright, Claude in Chrome, Codex und Computer Use

Ein Test beweist, was du vorher festgelegt hast. Ein Agent im Browser findet, woran du nicht gedacht hast. Du brauchst beides.

| Werkzeug | Was es tut | Wann |
|---|---|---|
| [Playwright](https://playwright.dev/docs/intro) Tests | Skript klickt reproduzierbar durch die App | jedes Akzeptanzkriterium, bei jedem Commit und in CI |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | Agent steuert einen eigenen Browser über Seitenstruktur (Accessibility-Baum) | Agent soll selbst nachsehen, Tests schreiben, Fehler reproduzieren |
| [Claude in Chrome](https://code.claude.com/docs/en/chrome) | Claude Code steuert dein Chrome oder Edge, liest Konsole und DOM | Debugging im echten Browser, mit deinen Logins |
| [ChatGPT-Browsererweiterung](https://learn.chatgpt.com/docs/chrome-extension) und [eingebauter Browser](https://learn.chatgpt.com/docs/browser) | Codex in der ChatGPT-Desktop-App liest und bedient Seiten, auch `localhost` | Oberfläche begutachten, visuelles Feedback, Abläufe durchklicken |
| [Computer Use](https://learn.chatgpt.com/docs/computer-use) | Agent sieht den Bildschirm und bedient Maus und Tastatur | Desktop-Apps oder Fälle, für die es keine Schnittstelle gibt |

## Einrichten

```bash
# Playwright-Tests im Projekt
npm init playwright@latest

# Playwright MCP für den Agenten
claude mcp add playwright npx @playwright/mcp@latest
codex mcp add playwright npx "@playwright/mcp@latest"

# Claude in Chrome: Erweiterung installieren, dann
claude --chrome          # oder in einer laufenden Sitzung: /chrome
```

Claude in Chrome braucht ein direktes Anthropic-Abo (Pro, Max, Team, Enterprise). Codex-Browser und Computer Use laufen in der ChatGPT-Desktop-App, nicht in der Codex CLI.

## Prompt: explorativer Test

```text
Starte die App mit npm run dev. Öffne http://localhost:5173 im Browser.
Prüfe den Kernablauf aus docs/onepager.md wie eine neue Nutzerin: Anfrage anlegen,
Status ändern, neu laden. Versuche außerdem leere, sehr lange und HTML-Eingaben.
Melde jeden Fehler mit Schritten zum Nachstellen, Schwere und Screenshot.
Ändere keinen Code. Schlage für jeden Fehler einen Playwright-Test vor.
```

## Sicherheit

- Seiteninhalte sind nicht vertrauenswürdig: Eine Webseite kann Anweisungen an den Agenten enthalten (Prompt Injection). Lass Browser-Agenten nur auf deine eigene App oder bekannte Seiten.
- Nutze ein eigenes Browserprofil ohne private Logins für Tests.
- Bestätige Formulare, Käufe und Nachrichten selbst.
