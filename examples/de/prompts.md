# Prompt-Sammlung zum Arbeitsheft

Kopieren, Platzhalter in eckigen Klammern ersetzen, im Projektordner an den Agenten geben.

## Kurs 0: Einrichten lassen

```text
Ich richte meinen Rechner für ein AI-Coding-Projekt ein. Prüfe, ob Git, Node.js (LTS),
VS Code (Befehl code), die GitHub CLI (gh) installiert sind, und zeige die Versionen.
Schlage für fehlende Werkzeuge den offiziellen Installationsweg für mein System vor
(macOS: Homebrew, Windows: winget). Führe jeden Installationsbefehl erst nach meiner
Bestätigung aus. Ändere keine Systemeinstellungen ohne Rückfrage.
```

```text
Lege mit der GitHub CLI ein privates Repository [projektname] mit README an, klone es
nach [Pfad], lege docs/00-setup.md nach dieser Vorlage an: [Vorlage einfügen].
Trage die Versionen ein, die du eben geprüft hast. Zeige mir den Diff, dann committe
mit "Dokument 0 angelegt" und pushe. Zeige am Ende den Link zum Commit.
```

## SLE 1: Präzise beauftragen

```text
Ergänze über der Eintragsliste einen Filter nach Kalenderwoche. Standard: alle Einträge.
Ohne Treffer steht dort "Keine Einträge in dieser Woche". Ändere sonst nichts.
```

## SLE 2: Produkt definieren

```text
Interviewe mich zu meiner Idee in docs/idee.md. Stelle immer nur eine Frage. Kläre Nutzer,
heutigen Ablauf, Auslöser, Ergebnis, Daten, Grenzen und Risiken. Markiere jede Antwort als
Beleg oder Annahme. Schreibe danach docs/onepager.md mit sechs Abschnitten.
```

```text
Erstelle docs/moodboard.html als eine HTML-Datei ohne externe Abhängigkeiten:
Wirkungsbegriffe [ruhig, klar, verlässlich], Gegenbegriff [verspielt], Farbpalette mit
Hex-Werten, zwei Schriftbeispiele, Komponentenproben (Button, Status, Karte, Leerzustand),
meine Referenzen als Kacheln mit Link und Notiz, drei Gestaltungsregeln.
Ändere keine anderen Dateien.
```

## SLE 3: Kontextpaket

```text
Lies docs/onepager.md und docs/architektur.md. Entwirf PLAN.md mit drei bis fünf Paketen
(ID, Paket, PRD, Abhängigkeit, Status) und eine PRD pro Paket unter docs/prd/ mit Ziel,
Verhalten, Nicht-Zielen und drei beobachtbaren Akzeptanzkriterien. Schreibe keinen Code.
```

## SLE 4: Ein Loop

```text
Bearbeite nur P01 nach docs/prd/01-anfrage-erfassen.md und den Regeln in AGENTS.md.
1. Schreibe die Tests zu den Akzeptanzkriterien und zeige, dass sie fehlschlagen.
2. Setze die kleinste passende Änderung um.
3. Lass alle Tests laufen und prüfe den Ablauf im Browser.
4. Melde geänderte Dateien, Testergebnis und offene Punkte. Stoppe vor dem Commit.
```

## SLE 5: Absichern

```text
Prüfe dieses Repository einschließlich der Git-Historie auf Secrets, fehlende
Berechtigungsprüfungen auf dem Server und ungeprüfte Eingaben. Nenne Fundstellen mit
Datei und Zeile oder Commit. Ändere nichts.
```
