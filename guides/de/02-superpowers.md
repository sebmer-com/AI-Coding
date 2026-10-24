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
| 1 Klären | `brainstorming` | Fragen nacheinander, Design-Dokument `docs/superpowers/specs/JJJJ-MM-TT-<thema>-design.md` |
| 2 Isolieren | `using-git-worktrees` | eigener Branch und Arbeitsordner, Tests grün als Ausgangslage |
| 3 Planen | `writing-plans` | `docs/superpowers/plans/JJJJ-MM-TT-<feature>.md`, Schritte von 2 bis 5 Minuten mit Datei, Test, Prüfung |
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

Beispiele: [Spec](../../examples/de/docs/superpowers/specs/) · [Plan](../../examples/de/docs/superpowers/plans/)
