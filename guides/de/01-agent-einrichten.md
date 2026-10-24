# Agent installieren und den Rechner einrichten lassen

Stand: Oktober 2026. Bei Abweichungen gilt die verlinkte Originaldokumentation.

## 1. Einen Agenten installieren (einer reicht)

| | Claude Code | Codex CLI |
|---|---|---|
| Konto | Claude Pro, Max, Team, Enterprise oder Console | ChatGPT-Plan mit Codex |
| macOS | `curl -fsSL https://claude.ai/install.sh \| bash` | `curl -fsSL https://chatgpt.com/codex/install.sh \| sh` |
| Windows (PowerShell) | `irm https://claude.ai/install.ps1 \| iex` | `powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 \| iex"` |
| Alternativ | `brew install --cask claude-code` · `winget install Anthropic.ClaudeCode` | `brew install --cask codex` · `npm install -g @openai/codex` |
| Prüfen | `claude --version` | `codex --version` |
| Doku | [Setup](https://code.claude.com/docs/en/setup) | [CLI](https://learn.chatgpt.com/docs/codex/cli) · [README](https://github.com/openai/codex) |

Danach ein **neues** Terminal öffnen, in einen leeren Ordner wechseln und den Agenten starten. Beim ersten Start meldest du dich im Browser an.

## 2. Den Agenten den Rest installieren lassen

Starte den Agenten so, dass er vor jeder Aktion fragt:

```bash
claude --permission-mode default
# oder
codex --sandbox read-only --ask-for-approval on-request
```

Dann:

```text
Ich richte meinen Rechner für ein AI-Coding-Projekt ein. Prüfe, ob Git, Node.js (LTS),
VS Code (Befehl code) und die GitHub CLI (gh) installiert sind, und zeige die Versionen.
Schlage für fehlende Werkzeuge den offiziellen Installationsweg für mein System vor
(macOS: Homebrew, Windows: winget). Führe jeden Installationsbefehl erst nach meiner
Bestätigung aus. Ändere keine Systemeinstellungen ohne Rückfrage.
```

Typische Befehle, die der Agent vorschlagen wird:

| Werkzeug | macOS (Homebrew) | Windows (winget) |
|---|---|---|
| Git | `brew install git` | `winget install --id Git.Git -e` |
| Node.js LTS | `brew install node@24` | `winget install --id OpenJS.NodeJS.LTS -e` |
| VS Code | `brew install --cask visual-studio-code` | `winget install --id Microsoft.VisualStudioCode -e` |
| GitHub CLI | `brew install gh` | `winget install --id GitHub.cli -e` |

**Lies jeden Befehl, bevor du zustimmst.** Passwortabfragen (sudo, UAC) beantwortest du selbst im Terminal, nie im Chat.

## 3. Testen: „Leg mal an …“

```text
Leg im Ordner ~/Projekte ein neues Projekt "hallo-agent" an: git init, README.md mit
einer Zeile Beschreibung, .gitignore für Node. Zeige mir den Diff, committe mit
"Erster Commit" und zeige git log.
```

Fertig, wenn `git log --oneline` einen Commit zeigt und du jede geänderte Datei kennst.
