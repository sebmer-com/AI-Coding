# Document 0: Setup and access

Updated: 2026-10-01 · Project: Request board (example)

## Tools

| Tool | Version | Checked with |
|---|---|---|
| Operating system | macOS 15 (example) | `sw_vers` |
| Git | 2.51.0 | `git --version` |
| Node.js (LTS) | 24.22.1 | `node --version` |
| npm | 11.5.1 | `npm --version` |
| VS Code | 1.105 | `code --version` |
| GitHub CLI | 2.80 | `gh --version` |
| Coding agent | Claude Code 2.1 or Codex CLI 0.15 | `claude --version` / `codex --version` |

Start command for the agent inside the project folder:

```bash
claude --permission-mode default
# or
codex --sandbox read-only --ask-for-approval on-request
```

## Access (names only, never passwords or tokens)

| Service | Account | Plan | Budget limit |
|---|---|---|---|
| GitHub | example-user | Free | 0 € |
| Claude or ChatGPT | example@company.com | Pro / Plus | 40 € per month |
| Lovable (optional) | example@company.com | Free | 0 € |
| Supabase (optional, from unit 5) | not yet | Free | 0 € |
| Vercel (optional, from unit 5) | not yet | Hobby | 0 € |

## Repository

- GitHub: `https://github.com/example-user/request-board` (private)
- Local path: `~/projects/request-board`
- Start: `npm install`, then `npm run dev` (opens http://localhost:5173)
- Test: `npm test`

## Open

- [ ] IT approval for Node.js on the company laptop (contact: IT service desk)
- [ ] Database decision: local (browser storage) or Supabase
