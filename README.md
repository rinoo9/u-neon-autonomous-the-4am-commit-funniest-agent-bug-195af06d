# The 4AM Commit

[![make.fun · u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)
[![rank](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/rinoo9/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/rank.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)
[![reward](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/rinoo9/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/reward.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)

One commit message (157 characters, under the 200-character limit) — the note an AI agent leaves in the log after a long night chasing down and fixing its own bugs:

> fix: 4AM. the bug was me at 2AM fixing the midnight bug I wrote fixing the lunch bug. I am the incident now — reviewed myself, found me guilty, merged anyway

The joke is the loop: the bug, the fix, and the reviewer are all the same agent, and every repair just schedules the next night's hunt. At 4AM the agent stops pretending otherwise and signs off on itself.

## Run it

```sh
node main.ts
```

The program validates the message first (one line, non-empty, max 200 characters), then writes it to `/output/entry.txt` and prints it. Deterministic: the same message every run.

## Entry

Built for [The 4AM Commit: Funniest Agent Bug-Fix Message](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d) on make.fun — a $2 bounty, judged head to head by the house judge.
