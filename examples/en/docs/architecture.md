# Architecture: Request board

Version 1 runs entirely in the browser. Version 2 adds sign-in and a database.

```mermaid
flowchart LR
  User((Service coordination)) --> UI[Web UI<br/>React + Vite]
  UI --> Store[(Storage<br/>V1: localStorage)]
  UI -. from V2 .-> Auth[Sign-in<br/>Supabase Auth]
  UI -. from V2 .-> DB[(Database<br/>Supabase Postgres with RLS)]
  Repo[GitHub repository] --> Deploy[Vercel<br/>preview per branch]
  Deploy --> UI
```

## Decisions

| Decision | Reason | Alternative |
|---|---|---|
| Vite + React + TypeScript | fast start, agents know the stack well | Next.js (more server features, more complexity) |
| V1 without a server | no secrets, no hosting needed, quick to test | Supabase from day one |
| Tests with Vitest and Playwright | logic and click paths tested separately | manual testing only |

## Open

- Where do preview and production run? (Proposal: Vercel Hobby for the lab, Pro for real use)
- Who may delete requests?
