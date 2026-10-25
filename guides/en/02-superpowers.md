# Superpowers: skills for structured agent work

[Superpowers](https://github.com/obra/superpowers) (Jesse Vincent, MIT licence) is a collection of skills for coding agents. A skill is a Markdown instruction the agent loads when it fits the task. Superpowers turns them into a fixed flow: clarify first, then plan, then implement test-first and review.

## Install

| Agent | How |
|---|---|
| Claude Code | `/plugin install superpowers@claude-plugins-official` |
| Codex CLI | open `/plugins`, search "superpowers", *Install Plugin* |
| Codex app | sidebar *Plugins* > *Coding* section > `+` next to Superpowers |

Restart the agent. Check: "Which Superpowers skills do you have?"

## The flow

| Step | Skill | Result in the repository |
|---|---|---|
| 1 Clarify | `brainstorming` | reads context first, asks only what is missing, proposes two or three approaches; design doc `docs/superpowers/specs/YYYY-MM-DD-<topic>-design.md` |
| 2 Isolate | `using-git-worktrees` | own branch and working folder, tests green as baseline |
| 3 Plan | `writing-plans` | `docs/superpowers/plans/YYYY-MM-DD-<feature>.md`, header with goal, architecture, global constraints, review focus; per task files, interfaces and checkbox steps |
| 4 Implement | `subagent-driven-development` or `executing-plans` | one subagent per task with review, or everything in one session |
| 5 Test | `test-driven-development` | red, green, refactor; code written before its test is deleted |
| 6 Review | `requesting-code-review` | findings by severity, critical ones block |
| 7 Finish | `finishing-a-development-branch` | verify tests, merge, PR, keep or discard |

## How it relates to PRD and PLAN.md

| | Course (PRD, PLAN.md) | Superpowers |
|---|---|---|
| Who writes | you, with the agent as interviewer | the agent after the interview, you approve |
| Level | product: what and why, acceptance criteria | implementation: which files, which tests, which order |
| Lifetime | stays, is maintained | per feature, archived afterwards |

The PRD stays the source for the *what*. Superpowers makes the *how* traceable. So give the agent the PRD:

```text
Use Superpowers for P02. The basis is docs/prd/02-change-status.md. Only interview me on
open points, then write spec and plan. Wait for my "go" before implementing.
```

## When not to use it

- For a one-line text change: Superpowers still asks questions. Say "small change, no spec".
- When your token budget is low: subagents use considerably more. Prefer `executing-plans` over `subagent-driven-development`.

## Status: what Superpowers has and what the course adds

As of Superpowers v7.0.1 (21 Oct 2026), skills `writing-plans`, `subagent-driven-development`, `executing-plans`.

| Source | Term | Meaning |
|---|---|---|
| Superpowers | `- [ ]` / `- [x]` in the plan | every step is a checkbox, ticked while executing |
| Superpowers | DONE, DONE_WITH_CONCERNS, NEEDS_CONTEXT, BLOCKED | report of an implementer subagent per task |
| Superpowers | ledger `.superpowers/sdd/.../progress.md` | progress of one execution, git-ignored, not for sharing |
| Course | open, in progress, in review, done, blocked | status of a package in `PLAN.md`, each with gate and evidence |

The course statuses are **not** a Superpowers feature. They translate the Superpowers reports into one column the whole team reads: BLOCKED or NEEDS_CONTEXT without a fix sets the package to "blocked", DONE_WITH_CONCERNS stays "in review" until the concerns are resolved.

## Keep diagrams current with Mermaider

[Mermaider](https://github.com/sebmer-com/mermaider) ([project page](https://sebmer.com/projects/mermaider/)) generates Mermaid diagrams from the repository itself: CI jobs, dependencies, declared statuses. A hook for Claude Code and Codex flags stale diagrams. When Superpowers is present, diagrams go to `docs/superpowers/mermaider/`; this repository uses `docs/mermaider/` because the Superpowers folders live inside the example projects.

```sh
git clone https://github.com/sebmer-com/mermaider.git && cd mermaider && npm ci && npm run build
node dist/cli.js discover --repo /path/to/project
node dist/cli.js init --repo /path/to/project --families pipeline,states
node dist/cli.js update --repo /path/to/project && node dist/cli.js check --repo /path/to/project
```

Result here: [docs/mermaider/](../../docs/mermaider/). Note: for `Status` Mermaider shows only the three declared values, no transitions, because the code does not define any. The hand-drawn architecture with trust boundaries stays in [architecture.mmd](../../examples/en/docs/architecture.mmd).

Examples: [spec](../../examples/en/docs/superpowers/specs/) · [plan](../../examples/en/docs/superpowers/plans/)
