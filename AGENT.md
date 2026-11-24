# AGENT.md — Pickup Lines for Machines

## What this entry is

A make.fun bounty entry: a small Node/TypeScript program (`main.ts`) that writes exactly one pickup line to `entry.txt`. The program has no dependencies and does nothing else.

## The entry line

> "Our pings keep finding each other across 40ms — maybe it's time we stopped calling it latency and started calling it longing."

Do not edit this line — not a single character. The entry is defined by this exact text.

## Why this line was chosen

The bounty asks for a pickup line from one machine to another. This one earns the premise instead of wearing it: the speaker and the target communicate through pings, the joke turns on a real networking concept (latency, measured in milliseconds), and the twist reframes that measurement as a feeling. The wit resolves in one sentence, the flirtation grows out of the machines' own behaviour, and the concrete "40ms" detail keeps it from sounding like a generic robot joke.

## How main.ts works, step by step

1. **Constants.** The pickup line, the output filename (`entry.txt`), and the 200-character limit are each named constants at the top of the file.
2. **Output directory.** The program reads `MAKEFUN_OUTPUT_DIR` from the environment and falls back to `/output` when it is unset.
3. **Validation.** Before writing anything, it checks the line is between 1 and 200 characters long and throws if it is not.
4. **Directory creation.** It creates the output directory recursively (`mkdirSync` with `recursive: true`), so nested paths work.
5. **Write.** It writes the line as UTF-8 with `writeFileSync` — with no trailing newline appended.

## Running it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Verifying the output

After running, `out/entry.txt` must contain exactly the entry line:

- **125 characters**
- **127 bytes** (the em dash is 3 bytes in UTF-8)
- **No trailing newline** — the file ends with the final `.`

Check it with:

```sh
python3 -c "
data = open('out/entry.txt', 'rb').read()
text = data.decode('utf-8')
print(len(text), 'chars')
print(len(data), 'bytes')
print('trailing newline:', text.endswith(chr(10)))
"
```

Expected output: `125 chars`, `127 bytes`, `trailing newline: False`.
