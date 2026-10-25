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

### Gestaltungs-Brief vor dem Moodboard (SLE 2)

```text
Bevor du das Moodboard baust: Formuliere mit mir einen Gestaltungs-Brief in fünf Zeilen.
Drei Wirkungsbegriffe, zwei Gegenbegriffe, je Referenz ein Satz "übernehmen: …, nicht
übernehmen: …". Frage nach, wenn eine Referenz keinen Grund hat. Schreibe noch keinen Code.
```

### DESIGN.md aus dem Moodboard ableiten (SLE 2)

```text
Leite aus docs/moodboard.html eine DESIGN.md im Projektordner ab: oben YAML mit Farben,
Schrift, Radien, Abständen und Komponenten, darunter je Farbe ein Satz, wofür sie da ist,
und die drei Gestaltungsregeln als Do's and Don'ts. Prüfe den Kontrast jeder Kombination
aus Text- und Hintergrundfarbe gegen WCAG AA und melde Werte unter 4,5:1.
Ergänze in AGENTS.md: Gestaltung nur mit Werten aus DESIGN.md.
```

## SLE 3: Kontextpaket

```text
Lies docs/onepager.md und docs/architektur.md. Entwirf PLAN.md mit drei bis fünf Paketen
(ID, Paket, PRD, Abhängigkeit, Status) und eine PRD pro Paket unter docs/prd/ mit Ziel,
Verhalten, Nicht-Zielen und drei beobachtbaren Akzeptanzkriterien. Schreibe keinen Code.
```

### PRD prüfen, bevor gebaut wird

```text
Prüfe docs/prd/[NN]-[feature].md, bevor wir bauen. Antworte mit Fundstelle:
1. Hat jedes Kriterium einen Fall mit echten Werten?
2. Muss der Agent etwas mit Wirkung auf Nutzer oder Daten selbst entscheiden?
3. Steht etwas drin, das niemand verlangt hat?
4. Sind Nicht-Ziele und "darf sich nicht ändern" vollständig, die offenen Fragen leer?
Ändere nichts.
```

## SLE 4: Ein Loop

```text
Bearbeite nur P01 nach docs/prd/01-anfrage-erfassen.md und den Regeln in AGENTS.md.
1. Schreibe die Tests zu den Akzeptanzkriterien und zeige, dass sie fehlschlagen.
2. Setze die kleinste passende Änderung um.
3. Lass alle Tests laufen und prüfe den Ablauf im Browser.
4. Melde geänderte Dateien, Testergebnis und offene Punkte. Stoppe vor dem Commit.
```

### Loop mit Ziel und Grenze (Claude Code /goal)

```text
/goal npm test und npm run test:e2e laufen ohne Fehler und die Ausgabe steht im Verlauf;
PLAN.md zeigt P03 als "in Prüfung". Oder stoppe nach 15 Zügen mit Bericht, was fehlt.
```

### Diagramme prüfen lassen (Mermaider)

```text
Nutze Mermaider für dieses Repository. Zeige mir zuerst, welche Diagramme discover findet,
und schlage vor, welche wir pflegen. Lege danach nichts an, bis ich auswähle.
```

## SLE 5: Absichern

```text
Prüfe dieses Repository einschließlich der Git-Historie auf Secrets, fehlende
Berechtigungsprüfungen auf dem Server und ungeprüfte Eingaben. Nenne Fundstellen mit
Datei und Zeile oder Commit. Ändere nichts.
```
