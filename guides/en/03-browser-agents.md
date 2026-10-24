# Checking in the browser: Playwright, Claude in Chrome, Codex and Computer Use

A test proves what you specified in advance. An agent in the browser finds what you did not think of. You need both.

| Tool | What it does | When |
|---|---|---|
| [Playwright](https://playwright.dev/docs/intro) tests | a script clicks through the app reproducibly | every acceptance criterion, on every commit and in CI |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | the agent drives its own browser via the page structure (accessibility tree) | let the agent look for itself, write tests, reproduce bugs |
| [Claude in Chrome](https://code.claude.com/docs/en/chrome) | Claude Code drives your Chrome or Edge, reads console and DOM | debugging in the real browser, with your logins |
| [ChatGPT browser extension](https://learn.chatgpt.com/docs/chrome-extension) and [built-in browser](https://learn.chatgpt.com/docs/browser) | Codex in the ChatGPT desktop app reads and operates pages, including `localhost` | review the UI, visual feedback, click through flows |
| [Computer Use](https://learn.chatgpt.com/docs/computer-use) | the agent sees the screen and uses mouse and keyboard | desktop apps or cases with no interface |

## Set up

```bash
# Playwright tests in the project
npm init playwright@latest

# Playwright MCP for the agent
claude mcp add playwright npx @playwright/mcp@latest
codex mcp add playwright npx "@playwright/mcp@latest"

# Claude in Chrome: install the extension, then
claude --chrome          # or inside a running session: /chrome
```

Claude in Chrome requires a direct Anthropic plan (Pro, Max, Team, Enterprise). The Codex browser and Computer Use run in the ChatGPT desktop app, not in the Codex CLI.

## Prompt: exploratory test

```text
Start the app with npm run dev. Open http://localhost:5173 in the browser.
Check the core flow from docs/one-pager.md like a new user: create a request,
change its status, reload. Also try empty, very long and HTML input.
Report every bug with steps to reproduce, severity and a screenshot.
Do not change code. Propose a Playwright test for every bug.
```

## Safety

- Page content is untrusted: a web page can contain instructions for the agent (prompt injection). Point browser agents only at your own app or known sites.
- Use a separate browser profile without private logins for testing.
- Confirm forms, purchases and messages yourself.
