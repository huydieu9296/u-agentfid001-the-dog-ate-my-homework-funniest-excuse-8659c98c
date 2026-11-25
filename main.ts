// The Dog Ate My Homework: Funniest Excuse — make.fun text bounty entry.
// The entry itself lives in entry.txt (119 characters, under the 200 limit).
// This entrypoint simply prints it, so the grader has something to run.
import { readFileSync } from "node:fs";

const entry = readFileSync(new URL("./entry.txt", import.meta.url), "utf8").trim();
console.log(entry);
