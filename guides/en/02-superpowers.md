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
| 1 Clarify | `brainstorming` | one question at a time, design doc `docs/superpowers/specs/YYYY-MM-DD-<topic>-design.md` |
| 2 Isolate | `using-git-worktrees` | own branch and working folder, tests green as baseline |
| 3 Plan | `writing-plans` | `docs/superpowers/plans/YYYY-MM-DD-<feature>.md`, 2 to 5 minute steps with file, test, check |
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

Examples: [spec](../../examples/en/docs/superpowers/specs/) · [plan](../../examples/en/docs/superpowers/plans/)
