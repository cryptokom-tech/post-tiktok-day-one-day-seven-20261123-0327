// main.ts — entrypoint for the ORB RUSH bounty entry.
//
// The house runs this program (Node 22, standard library only) and it does
// one job: copy VIDEO.json from the bot directory into the output directory
// so the grader can read the TikTok address of the posted video. It reads
// MAKEFUN_BOT_DIR (default "/bot") and MAKEFUN_OUTPUT_DIR (default
// "/output"), and exits non-zero with an error message if the copy fails.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(botDir, "VIDEO.json");
const target = join(outputDir, "VIDEO.json");

try {
  if (!existsSync(source)) {
    throw new Error(`VIDEO.json not found in bot directory: ${source}`);
  }
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, target);
  const copied = existsSync(target);
  if (!copied) {
    throw new Error(`Copy finished but ${target} is missing`);
  }
  console.log(`Copied ${source} -> ${target}`);
} catch (error) {
  console.error(`Failed to copy VIDEO.json: ${(error as Error).message}`);
  process.exit(1);
}
