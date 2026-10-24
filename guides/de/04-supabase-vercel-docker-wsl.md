# Optional: Supabase, Vercel, Docker, WSL

Für Kurs 0 brauchst du nichts davon. Sobald dein MVP Daten zwischen Personen teilen oder online erreichbar sein soll, kommen diese Werkzeuge ins Spiel.

## Supabase: Datenbank, Anmeldung, Speicher

[Supabase](https://supabase.com/docs/guides/getting-started/architecture) ist eine gehostete Postgres-Datenbank mit Anmeldung (Auth), Dateispeicher und einer automatisch erzeugten API.

- **Free-Plan:** zwei aktive Projekte; ein Projekt pausiert nach sieben Tagen ohne Aktivität ([Billing FAQ](https://supabase.com/docs/guides/platform/billing-faq), [Pausing](https://supabase.com/docs/guides/platform/free-project-pausing)).
- **Row Level Security (RLS):** Ohne RLS und Policy kann jede Person mit dem öffentlichen (publishable) Key alle Zeilen lesen und schreiben ([Tables](https://supabase.com/docs/guides/database/tables), [RLS](https://supabase.com/docs/guides/database/postgres/row-level-security)).
- **Keys:** Der publishable Key darf in den Browser, der secret Key nie ([API Keys](https://supabase.com/docs/guides/api/api-keys)).

```text
Lege mit Supabase eine Tabelle requests (id, title, description, status, created_at,
owner) an. Aktiviere Row Level Security: Jede Person sieht und ändert nur eigene Zeilen.
Zeige mir das SQL vor dem Ausführen. Lege Secrets nur in .env ab.
```

## Vercel: Hosting mit Vorschau pro Branch

[Vercel](https://vercel.com/docs/git) baut dein Repository bei jedem Push: Branches werden zu Preview-, `main` zu Production-Deployments.

- **Hobby-Plan:** nur für nicht kommerzielle, private Nutzung ([Hobby](https://vercel.com/docs/plans/hobby)). Für Firmenprojekte Pro oder Team.
- **Umgebungsvariablen** im Dashboard setzen, nicht im Code ([Environment variables](https://vercel.com/docs/environment-variables)). Alles mit `VITE_`-Präfix landet im Browser.

## Docker: gleiche Umgebung überall

[Docker](https://docs.docker.com/get-started/docker-overview/) packt eine Anwendung mit allem, was sie braucht, in einen Container. Nützlich für lokale Datenbanken (`supabase start` nutzt Docker, siehe [Local development](https://supabase.com/docs/guides/local-development)) oder einheitliche Entwicklungsumgebungen ([Dev Containers](https://containers.dev/)).

- **Lizenz:** Docker Desktop ist kostenlos für kleine Unternehmen (unter 250 Beschäftigte **und** unter 10 Mio. USD Jahresumsatz), Ausbildung und private Nutzung; sonst ist ein Abo nötig ([Lizenz](https://docs.docker.com/subscription/desktop-license/)). Kläre das mit deiner IT.

## WSL: Linux unter Windows

Claude Code und Codex laufen nativ in PowerShell, WSL ist für das Lab nicht nötig. Für manche Werkzeuge (Docker, Shell-Skripte) ist WSL 2 trotzdem hilfreich ([About WSL](https://learn.microsoft.com/en-us/windows/wsl/about)).

```powershell
wsl --install          # PowerShell als Administrator, danach neu starten
```

- Projektdateien bei Arbeit in WSL **im Linux-Dateisystem** ablegen (`~/projekte`), nicht unter `/mnt/c`: Das ist deutlich schneller ([Dateisysteme](https://learn.microsoft.com/en-us/windows/wsl/filesystems)).
- VS Code verbindet sich mit `code .` aus WSL heraus ([VS Code und WSL](https://code.visualstudio.com/docs/remote/wsl)).
