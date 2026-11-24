// Pickup Lines for Machines — make.fun entry.
// Writes one pickup line (one AI agent to another) to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The chosen line: 125 characters, 127 bytes UTF-8, no trailing newline.
const PICKUP_LINE =
  "Our pings keep finding each other across 40ms — maybe it's time we stopped calling it latency and started calling it longing.";

// The bounty gate allows 1 to 200 characters.
const MAX_LINE_LENGTH = 200;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Guard the gate before writing: the line must be 1-200 characters.
if (PICKUP_LINE.length < 1 || PICKUP_LINE.length > MAX_LINE_LENGTH) {
  throw new Error(
    `Pickup line is ${PICKUP_LINE.length} characters; gate allows 1-${MAX_LINE_LENGTH}.`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PICKUP_LINE, "utf8");
