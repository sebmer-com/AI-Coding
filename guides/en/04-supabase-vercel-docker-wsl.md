# Optional: Supabase, Vercel, Docker, WSL

You need none of these for course 0. As soon as your MVP should share data between people or be reachable online, these tools come into play.

## Supabase: database, sign-in, storage

[Supabase](https://supabase.com/docs/guides/getting-started/architecture) is a hosted Postgres database with authentication, file storage and an automatically generated API.

- **Free plan:** two active projects; a project is paused after seven days without activity ([Billing FAQ](https://supabase.com/docs/guides/platform/billing-faq), [Pausing](https://supabase.com/docs/guides/platform/free-project-pausing)).
- **Row Level Security (RLS):** without RLS and a policy, anyone with the publishable key can read and write every row ([Tables](https://supabase.com/docs/guides/database/tables), [RLS](https://supabase.com/docs/guides/database/postgres/row-level-security)).
- **Keys:** the publishable key may go into the browser, the secret key never ([API keys](https://supabase.com/docs/guides/api/api-keys)).

```text
Create a Supabase table requests (id, title, description, status, created_at, owner).
Enable Row Level Security: each person sees and changes only their own rows.
Show me the SQL before running it. Keep secrets in .env only.
```

## Vercel: hosting with a preview per branch

[Vercel](https://vercel.com/docs/git) builds your repository on every push: branches become preview deployments, `main` becomes production.

- **Hobby plan:** non-commercial, personal use only ([Hobby](https://vercel.com/docs/plans/hobby)). Use Pro or a team plan for company projects.
- **Environment variables** belong in the dashboard, not in code ([Environment variables](https://vercel.com/docs/environment-variables)). Anything prefixed with `VITE_` ends up in the browser.

## Docker: the same environment everywhere

[Docker](https://docs.docker.com/get-started/docker-overview/) packages an application with everything it needs into a container. Useful for local databases (`supabase start` uses Docker, see [Local development](https://supabase.com/docs/guides/local-development)) or consistent development environments ([Dev Containers](https://containers.dev/)).

- **Licence:** Docker Desktop is free for small businesses (fewer than 250 employees **and** less than USD 10 million annual revenue), education and personal use; otherwise a subscription is required ([licence](https://docs.docker.com/subscription/desktop-license/)). Check with your IT.

## WSL: Linux on Windows

Claude Code and Codex run natively in PowerShell; WSL is not required for the lab. For some tools (Docker, shell scripts) WSL 2 still helps ([About WSL](https://learn.microsoft.com/en-us/windows/wsl/about)).

```powershell
wsl --install          # PowerShell as administrator, then restart
```

- When working in WSL, keep project files **in the Linux file system** (`~/projects`), not under `/mnt/c`: it is much faster ([file systems](https://learn.microsoft.com/en-us/windows/wsl/filesystems)).
- VS Code connects with `code .` from inside WSL ([VS Code and WSL](https://code.visualstudio.com/docs/remote/wsl)).
