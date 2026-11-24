// The Long Roast: one satirical sentence, written to /output/entry.txt.
// Same bytes on every run: the sentence is a constant, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "The committee that made three crypto CEOs walk it through the blockchain line by immutable line, " +
  "unable to turn its own report into a PDF, entered it into the record as forty-one phone photos " +
  "of a Word document, one of them mostly thumb.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
