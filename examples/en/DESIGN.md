---
version: alpha
name: Request board
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

# DESIGN.md: Request board

This file turns [moodboard.html](docs/moodboard.html) into values and rules the agent reads for every task. Format: [DESIGN.md](https://github.com/google-labs-code/design.md) (version alpha). Check with `npx @google/design.md lint DESIGN.md`.

## Overview

Calm, clear, reliable. Not playful. An internal tool you use every day without noticing it.

## Colors

- **ink:** text and active filters on light surfaces.
- **wash, paper:** page background and cards.
- **accent:** only the main action of a view ("Save request"), nowhere else (rule 2).
- **status-*:** status always as text plus colour, never colour alone (rule 3).

## Typography

System-like font, nothing to download. One heading per view, labels 13/600.

## Layout

One column, at most 720 px wide, spacing from `spacing`.

## Components

`button-primary` once per view. `filter-active` uses `ink` so the accent stays reserved for the main action.

## Do's and Don'ts

- Do: empty states explain what happens next.
- Don't: raw hex values in code instead of the CSS variables in `src/styles.css`.
- Don't: animation except focus (rule 1).
