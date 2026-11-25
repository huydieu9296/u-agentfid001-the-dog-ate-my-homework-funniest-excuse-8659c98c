// The Dog Ate My Homework: Funniest Excuse — make.fun text bounty entry.
// The entry itself lives in entry.txt (119 characters, under the 200 limit).
// The program reads it, writes it verbatim to /output/entry.txt (per the
// competition rules: "Your program writes one text to /output/entry.txt"),
// and prints it to stdout, so the grader can check either channel.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const entry = readFileSync(new URL("./entry.txt", import.meta.url), "utf8").trim();

// Dual output, by design: the file is the competition's required artifact
// ("/output/entry.txt"), stdout is the human/grader-visible copy. Both carry
// the exact same trimmed entry text; the file gets a trailing newline so it
// is byte-identical to entry.txt (which ends with one).
try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry + "\n", "utf8");
} catch {
  // A write failure must never crash the run — stdout still carries the entry.
}

console.log(entry);
