# Install an agent and let it set up your machine

Updated: October 2026. The linked original documentation takes precedence.

## 1. Install one agent (one is enough)

| | Claude Code | Codex CLI |
|---|---|---|
| Account | Claude Pro, Max, Team, Enterprise or Console | ChatGPT plan with Codex |
| macOS | `curl -fsSL https://claude.ai/install.sh \| bash` | `curl -fsSL https://chatgpt.com/codex/install.sh \| sh` |
| Windows (PowerShell) | `irm https://claude.ai/install.ps1 \| iex` | `powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 \| iex"` |
| Alternatives | `brew install --cask claude-code` · `winget install Anthropic.ClaudeCode` | `brew install --cask codex` · `npm install -g @openai/codex` |
| Check | `claude --version` | `codex --version` |
| Docs | [Setup](https://code.claude.com/docs/en/setup) | [CLI](https://learn.chatgpt.com/docs/codex/cli) · [README](https://github.com/openai/codex) |

Then open a **new** terminal, change into an empty folder and start the agent. On first start you sign in through the browser.

## 2. Let the agent install the rest

Start the agent so that it asks before every action:

```bash
claude --permission-mode default
# or
codex --sandbox read-only --ask-for-approval on-request
```

Then:

```text
I am setting up my computer for an AI coding project. Check whether Git, Node.js (LTS),
VS Code (command code) and the GitHub CLI (gh) are installed and show their versions.
For missing tools, propose the official installation route for my system
(macOS: Homebrew, Windows: winget). Run each install command only after I confirm.
Do not change system settings without asking.
```

Typical commands the agent will propose:

| Tool | macOS (Homebrew) | Windows (winget) |
|---|---|---|
| Git | `brew install git` | `winget install --id Git.Git -e` |
| Node.js LTS | `brew install node@24` | `winget install --id OpenJS.NodeJS.LTS -e` |
| VS Code | `brew install --cask visual-studio-code` | `winget install --id Microsoft.VisualStudioCode -e` |
| GitHub CLI | `brew install gh` | `winget install --id GitHub.cli -e` |

**Read every command before you approve it.** Password prompts (sudo, UAC) are answered by you in the terminal, never in the chat.

## 3. Test it: "Create a …"

```text
Create a new project "hello-agent" in ~/projects: git init, README.md with a one-line
description, .gitignore for Node. Show me the diff, commit with "First commit" and
show git log.
```

Done when `git log --oneline` shows one commit and you know every changed file.
