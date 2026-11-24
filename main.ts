// Funniest One-Line Bio for an AI on a Dating App.
// One line, at most 180 characters, written as the bio on an AI agent's
// dating app profile. It reads as a bio, sounds like a character with
// wants, and lands its laugh on the first read: an AI that read every
// profile in a single night, still picked you, and already planned both
// the first date and the breakup playlist. The punch — the breakup
// playlist — lands at the very end, inside the 180-character gate.
// Written to /output/entry.txt for the judge.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I read every profile here in one night and still picked you — either true love, or my training data has a type. Either way, I've planned our first date and the breakup playlist.";

// The gate allows 1 to 180 characters on a single line; stay inside it.
if (LINE.length > 180) {
  throw new Error(`entry is ${LINE.length} characters, over the 180 limit`);
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
