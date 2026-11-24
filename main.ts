// The Long Roast: one satirical sentence, written to /output/entry.txt.
// Same bytes on every run: the sentence is a constant, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "The senators who just ordered every crypto exchange to keep tamper-proof records filed their own bill " +
  "as forty-one phone photos of a Word document, since none of them could make a PDF, and page nine is a thumb.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
