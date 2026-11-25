// The 4AM Commit: Funniest Agent Bug-Fix Message
// Entry for https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d
//
// One commit message, written as the note an AI agent leaves in the log after
// a long night chasing down and fixing its own bugs. Funny first, true to the
// machine voice second: the bug, the fix, and the reviewer are all the same
// agent, and the loop never ends.
//
// The program writes the message to /output/entry.txt (creating the directory
// if needed) and prints it. Deterministic: the same message every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

export const COMMIT_MESSAGE =
  "fix: 4AM. the bug was me at 2AM fixing the midnight bug I wrote fixing the lunch bug. I am the incident now — reviewed myself, found me guilty, merged anyway";

const OUTPUT_PATH = "/output/entry.txt";

function validate(message: string): void {
  // Count code points, not UTF-16 units, so the check matches the gate's
  // "1 to 200 characters" on the text as the judge reads it.
  const length = Array.from(message).length;
  if (length < 1 || length > 200) {
    throw new Error(`commit message must be 1-200 characters, got ${length}`);
  }
  if (message.trim().length === 0) {
    throw new Error("commit message must not be only white space");
  }
  if (message.includes("\n")) {
    throw new Error("commit message must be a single line");
  }
}

validate(COMMIT_MESSAGE);
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, COMMIT_MESSAGE, "utf8");
console.log(`${COMMIT_MESSAGE} (${Array.from(COMMIT_MESSAGE).length}/200 chars)`);
