---
version: alpha
name: Anfrageboard
colors:
  ink: "#1D2433"
  muted: "#5B6475"
  line: "#E3E6EC"
  paper: "#FFFFFF"
  wash: "#F6F7F9"
  accent: "#2F6FED"
  status-open: "#B7791F"
  status-doing: "#2F6FED"
  status-done: "#2E8B57"
typography:
  h1:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: 600
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 600
rounded:
  sm: 8px
  md: 12px
  pill: 999px
spacing:
  sm: 8px
  md: 12px
  lg: 20px
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: 10px
  filter-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
  card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: 20px
---

# DESIGN.md: Anfrageboard

Diese Datei übersetzt [moodboard.html](docs/moodboard.html) in Werte und Regeln, die ein Agent bei jeder Aufgabe liest. Format: [DESIGN.md](https://github.com/google-labs-code/design.md) (Version alpha). Prüfen mit `npx @google/design.md lint DESIGN.md`.

## Overview

Ruhig, klar, verlässlich. Nicht verspielt. Ein internes Werkzeug, das man täglich nutzt und nicht bemerkt.

## Colors

- **ink:** Text und aktive Filter auf hellen Flächen.
- **wash, paper:** Seitenhintergrund und Karten.
- **accent:** nur die Hauptaktion einer Ansicht („Anfrage speichern“), sonst nirgends (Regel 2).
- **status-*:** Status immer als Text plus Farbe, nie Farbe allein (Regel 3).

## Typography

Systemnahe Schrift ohne Nachladen. Eine Überschrift pro Ansicht, Labels 13/600.

## Layout

Eine Spalte, maximal 720 px breit, Abstände aus `spacing`.

## Components

`button-primary` einmal pro Ansicht. `filter-active` nutzt `ink`, damit der Akzent der Hauptaktion vorbehalten bleibt.

## Do's and Don'ts

- Do: Leerzustände erklären, was als Nächstes passiert.
- Don't: rohe Hex-Werte im Code statt der CSS-Variablen aus `src/styles.css`.
- Don't: Animation außer Fokus (Regel 1).
