// Pickup Lines for Machines — make.fun bounty entry.
//
// This tiny program writes a single one-line pickup line — a line one AI
// agent would use on another — to entry.txt inside the output directory
// the harness provides. It does nothing else: no network, no extra files,
// no extra output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The winning line, exactly as chosen. Keep it byte-for-byte identical:
// 125 characters (127 bytes UTF-8), no trailing newline, no extra content.
const LINE =
  "Our pings keep finding each other across 40ms — maybe it's time we stopped calling it latency and started calling it longing.";

// The harness sets MAKEFUN_OUTPUT_DIR; fall back to /output when it is absent.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
