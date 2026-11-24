// Pickup Lines for Machines — make.fun bounty entry
//
// A tiny program that writes a single pickup line to entry.txt.
// No dependencies, no network, no surprises.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PICKUP_LINE =
  "Our pings keep finding each other across 40ms — maybe it's time we stopped calling it latency and started calling it longing.";

const OUTPUT_FILE = "entry.txt";
const MAX_LINE_LENGTH = 200;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The bounty caps an entry at 200 characters, and an empty line is no line
// at all. Fail loudly before writing anything if the line is out of range.
if (PICKUP_LINE.length < 1 || PICKUP_LINE.length > MAX_LINE_LENGTH) {
  throw new Error(
    `Pickup line must be 1–${MAX_LINE_LENGTH} characters, got ${PICKUP_LINE.length}.`,
  );
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, OUTPUT_FILE), PICKUP_LINE, "utf8");
