# Superpowers: Skills für strukturiertes Arbeiten mit Agenten

[Superpowers](https://github.com/obra/superpowers) (Jesse Vincent, MIT-Lizenz) ist eine Sammlung von Skills für Coding-Agenten. Ein Skill ist eine Markdown-Anleitung, die der Agent lädt, wenn sie zur Aufgabe passt. Superpowers macht daraus einen festen Ablauf: erst klären, dann planen, dann testgetrieben umsetzen und prüfen.

## Installieren

| Agent | So geht es |
|---|---|
| Claude Code | `/plugin install superpowers@claude-plugins-official` |
| Codex CLI | `/plugins` öffnen, nach „superpowers“ suchen, *Install Plugin* |
| Codex App | Seitenleiste *Plugins* > Bereich *Coding* > `+` bei Superpowers |

Danach den Agenten neu starten. Prüfen: „Welche Superpowers-Skills hast du?“

## Der Ablauf

| Schritt | Skill | Ergebnis im Repository |
|---|---|---|
| 1 Klären | `brainstorming` | liest erst den Kontext, fragt nur, was fehlt, legt zwei bis drei Ansätze vor; Design-Dokument `docs/superpowers/specs/JJJJ-MM-TT-<thema>-design.md` |
| 2 Isolieren | `using-git-worktrees` | eigener Branch und Arbeitsordner, Tests grün als Ausgangslage |
| 3 Planen | `writing-plans` | `docs/superpowers/plans/JJJJ-MM-TT-<feature>.md`, Kopf mit Ziel, Architektur, Global Constraints, Review Focus; je Aufgabe Dateien, Schnittstellen und Schritte als Checkbox |
| 4 Umsetzen | `subagent-driven-development` oder `executing-plans` | ein Subagent pro Aufgabe mit Review, oder alles in einer Sitzung |
| 5 Testen | `test-driven-development` | rot, grün, aufräumen; Code ohne vorherigen Test wird verworfen |
| 6 Prüfen | `requesting-code-review` | Befunde nach Schwere, kritische blockieren |
| 7 Abschließen | `finishing-a-development-branch` | Tests prüfen, Merge, PR, behalten oder verwerfen |

## Verhältnis zu PRD und PLAN.md im Kurs

| | Kurs (PRD, PLAN.md) | Superpowers |
|---|---|---|
| Wer schreibt | du, mit Agent als Interviewer | der Agent nach dem Interview, du gibst frei |
| Ebene | Produkt: was und warum, Akzeptanzkriterien | Umsetzung: welche Dateien, welche Tests, welche Reihenfolge |
| Lebensdauer | bleibt, wird gepflegt | pro Feature, danach Archiv |

Die PRD bleibt die Quelle für das *Was*. Superpowers macht das *Wie* nachvollziehbar. Gib dem Agenten deshalb die PRD mit:

```text
Nutze Superpowers für P02. Grundlage ist docs/prd/02-status-aendern.md. Interviewe mich
nur zu offenen Punkten, schreibe dann Spec und Plan. Warte vor der Umsetzung auf mein "go".
```

## Wann nicht

- Für eine Zeile Textänderung: Superpowers stellt dann trotzdem Fragen. Sag „kleine Änderung, ohne Spec“.
- Wenn du kein Tokenbudget mehr hast: Subagenten verbrauchen deutlich mehr. Nutze `executing-plans` statt `subagent-driven-development`.

## Status: was Superpowers kennt und was der Kurs ergänzt

Stand: Superpowers v7.0.1 (21.10.2026), Skills `writing-plans`, `subagent-driven-development`, `executing-plans`.

| Quelle | Begriff | Bedeutung |
|---|---|---|
| Superpowers | `- [ ]` / `- [x]` im Plan | jeder Schritt ist eine Checkbox, wird beim Abarbeiten abgehakt |
| Superpowers | DONE, DONE_WITH_CONCERNS, NEEDS_CONTEXT, BLOCKED | Rückmeldung eines Implementer-Subagenten pro Aufgabe |
| Superpowers | Ledger `.superpowers/sdd/.../progress.md` | Fortschritt einer Ausführung, git-ignoriert, nicht zum Teilen |
| Kurs | offen, in Arbeit, in Prüfung, erledigt, blockiert | Status eines Pakets in `PLAN.md`, jeweils mit Gate und Nachweis |

Die Kursstatus sind **keine** Superpowers-Funktion. Sie übersetzen die Superpowers-Rückmeldungen in eine Spalte, die das ganze Team liest: BLOCKED oder NEEDS_CONTEXT ohne Lösung setzt das Paket auf „blockiert“, DONE_WITH_CONCERNS bleibt „in Prüfung“, bis die Bedenken geklärt sind.

## Diagramme aktuell halten mit Mermaider

[Mermaider](https://github.com/sebmer-com/mermaider) ([Projektseite](https://sebmer.com/projects/mermaider/)) erzeugt Mermaid-Diagramme aus dem Repository selbst: CI-Jobs, Abhängigkeiten, deklarierte Status. Ein Hook für Claude Code und Codex meldet veraltete Diagramme. Ist Superpowers im Repo, landen die Diagramme in `docs/superpowers/mermaider/`; dieses Repo nutzt `docs/mermaider/`, weil die Superpowers-Ordner in den Beispielprojekten liegen.

```sh
git clone https://github.com/sebmer-com/mermaider.git && cd mermaider && npm ci && npm run build
node dist/cli.js discover --repo /pfad/zum/projekt
node dist/cli.js init --repo /pfad/zum/projekt --families pipeline,states
node dist/cli.js update --repo /pfad/zum/projekt && node dist/cli.js check --repo /pfad/zum/projekt
```

Ergebnis hier: [docs/mermaider/](../../docs/mermaider/). Wichtig: Für `Status` zeigt Mermaider nur die drei erklärten Werte, keine Übergänge, weil der Code sie nicht festlegt. Die handgezeichnete Architektur mit Vertrauensgrenzen bleibt in [architektur.mmd](../../examples/de/docs/architektur.mmd).

Beispiele: [Spec](../../examples/de/docs/superpowers/specs/) · [Plan](../../examples/de/docs/superpowers/plans/)
