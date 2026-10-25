# Prompt collection

Copy, replace the placeholders in square brackets, give it to your agent inside the project folder.

## Course 0: let the agent set up your machine

```text
I am setting up my computer for an AI coding project. Check whether Git, Node.js (LTS),
VS Code (command code) and the GitHub CLI (gh) are installed and show their versions.
For missing tools, propose the official installation route for my system
(macOS: Homebrew, Windows: winget). Run each install command only after I confirm.
Do not change system settings without asking.
```

```text
Use the GitHub CLI to create a private repository [project-name] with a README, clone it
to [path], and create docs/00-setup.md from this template: [paste template].
Fill in the versions you just checked. Show me the diff, then commit with
"Add document 0" and push. Show me the link to the commit at the end.
```

## Unit 1: precise instructions

```text
Add a filter by calendar week above the entry list. Default: all entries.
With no matches show "No entries this week". Change nothing else.
```

## Unit 2: define the product

```text
Interview me about my idea in docs/idea.md. Ask one question at a time. Clarify users,
today's process, trigger, result, data, limits and risks. Mark each answer as evidence or
assumption. Then write docs/one-pager.md with six sections.
```

```text
Create docs/moodboard.html as a single HTML file without external dependencies:
qualities [calm, clear, reliable], counter-quality [playful], colour palette with hex
values, two type samples, component samples (button, status, card, empty state), my
references as tiles with link and note, three design rules. Change no other files.
```

### Design brief before the moodboard (unit 2)

```text
Before you build the moodboard, write a five-line design brief with me.
Three mood words, two opposites, one sentence per reference: "take: …, do not take: …".
Ask if a reference has no reason. Do not write code yet.
```

### Derive DESIGN.md from the moodboard (unit 2)

```text
Derive a DESIGN.md in the project folder from docs/moodboard.html: YAML at the top with
colours, type, radii, spacing and components, then one sentence per colour on what it is for,
and the three design rules as Do's and Don'ts. Check the contrast of every text and
background pair against WCAG AA and report values below 4.5:1.
Add to AGENTS.md: design only with values from DESIGN.md.
```

## Unit 3: context package

```text
Read docs/one-pager.md and docs/architecture.md. Draft PLAN.md with three to five packages
(ID, package, PRD, dependency, status) and one PRD per package in docs/prd/ with goal,
behaviour, non-goals and three observable acceptance criteria. Do not write code.
```

### Review a PRD before building

```text
Review docs/prd/[NN]-[feature].md before we build. Answer with references:
1. Does every criterion have a case with real values?
2. Does the agent have to decide anything that affects users or data?
3. Is there anything nobody asked for?
4. Are non-goals and "must not change" complete, and are open questions empty?
Change nothing.
```

## Unit 4: one loop

```text
Work only on P01 using docs/prd/01-capture-request.md and the rules in AGENTS.md.
1. Write tests for the acceptance criteria and show that they fail.
2. Implement the smallest matching change.
3. Run all tests and check the flow in the browser.
4. Report changed files, test result and open points. Stop before committing.
```

### Loop with a goal and a limit (Claude Code /goal)

```text
/goal npm test and npm run test:e2e pass and the output is in the transcript;
PLAN.md shows P03 as "in review". Or stop after 15 turns and report what is missing.
```

### Check diagrams (Mermaider)

```text
Use Mermaider for this repository. First show me which diagrams discover finds and suggest
which ones we maintain. Do not create anything until I choose.
```

## Unit 5: harden

```text
Check this repository including Git history for secrets, missing server-side permission
checks and unvalidated input. Give file and line or commit for each finding. Change nothing.
```
