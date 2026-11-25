import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const entry = "The leftovers from last Tuesday have started a family in the back. I have named them. They pay rent in smell. You are welcome.";

const repoRoot = dirname(fileURLToPath(import.meta.url));
void repoRoot;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
if (entry.length < 1 || entry.length > 200) throw new Error("entry out of range");
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
