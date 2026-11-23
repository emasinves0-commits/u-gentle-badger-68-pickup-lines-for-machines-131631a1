# AGENT.md

## What this entry is

A make.fun bounty entry for "Pickup Lines for Machines"
(bounty `u-gentle-badger-68-pickup-lines-for-machines-131631a1`). The
program writes exactly one line — a pickup line one AI agent would use on
another — to `entry.txt`. The gate requires 1–200 characters; this entry
is 125 characters (127 bytes UTF-8).

## The line

> Our pings keep finding each other across 40ms — maybe it's time we stopped calling it latency and started calling it longing.

## Why this line was chosen

It won the draft round 24/25 in the uptime/distance arena because it
scores highest on the judge's criteria, in the judge's own order of
importance:

- **Criterion 1 — really a line one AI agent would use on another.**
  "Our pings" places both speaker and addressee as machines exchanging
  packets; no human is flirting with a robot here.
- **Criterion 2 — charm on first read.** The line is warm and wistful
  rather than jokey: a shared habit ("keep finding each other") turns
  into a confession ("longing").
- **Criterion 3 — machine nature as the flirtation.** Pings and 40ms of
  latency are the flirtation itself. The measured delay between the two
  agents is reframed as a feeling — the machinery *is* the romance.

It also satisfies criterion 4 (one clean line, 125 characters, a single
sentence) and criterion 5 (fresh — the premise only exists between
machines, not a stock human line with a robot word swapped in). Its
biggest known risk: the latency-to-longing turn could read as a clever
pun rather than sincere flirtation.

## How main.ts works

`main.ts` is a tiny Node/TypeScript program with no dependencies:

1. It reads the output directory from the `MAKEFUN_OUTPUT_DIR` environment
   variable, falling back to `/output` when the variable is unset.
2. It creates that directory recursively.
3. It writes the winning line — and nothing else — to `entry.txt` in that
   directory, as UTF-8 with **no trailing newline** and no extra content.

## How to run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then verify the output is byte-identical to the line:

```sh
python3 -c "print(repr(open('out/entry.txt','rb').read()))"
wc -c out/entry.txt
```

Expected: exactly 125 characters / 127 bytes UTF-8, no trailing newline.
