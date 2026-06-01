/**
 * Re-import EX_LINKS from the official Excel spreadsheet.
 * Usage: node scripts/import-ex-links.mjs "/path/to/file.xlsx"
 */
import XLSX from "xlsx";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const xlsxPath =
  process.argv[2] ||
  path.join(
    process.env.HOME,
    "Downloads/The_Bodybuilding_Transformation_System_-_Beginner (1).xlsx"
  );

function cleanUrl(u) {
  return u.trim().replace(/&amp;/g, "&").replace(/&#x0A;/g, "");
}

const wb = XLSX.readFile(xlsxPath);
const ws = wb.Sheets["Beginner Program"];
if (!ws) throw new Error('Sheet "Beginner Program" not found');

const range = XLSX.utils.decode_range(ws["!ref"]);
const links = new Map();

for (let r = range.s.r; r <= range.e.r; r++) {
  for (let c = range.s.c; c <= range.e.c; c++) {
    const cell = ws[XLSX.utils.encode_cell({ r, c })];
    if (!cell?.l?.Target) continue;
    const url = cleanUrl(cell.l.Target);
    if (!url.includes("youtu")) continue;
    const text = cell.v != null ? String(cell.v).trim() : "";
    if (text) links.set(text, url);
  }
}

if (!links.has("Lean-Back Pull-Up") && links.has("Lean-Back Lat Pulldown")) {
  links.set("Lean-Back Pull-Up", links.get("Lean-Back Lat Pulldown"));
}

const sorted = [...links.entries()].sort((a, b) => a[0].localeCompare(b[0]));
let block = "export const EX_LINKS: Record<string, string> = {\n";
for (const [k, v] of sorted) {
  block += `  ${JSON.stringify(k)}: ${JSON.stringify(v)},\n`;
}
block += "};\n";

const programDataPath = path.join(__dirname, "../lib/program-data.ts");
let pd = fs.readFileSync(programDataPath, "utf8");
const start = pd.indexOf("export const EX_LINKS");
const end = pd.indexOf("};", start) + 2;
pd = pd.slice(0, start) + block.trim() + "\n\n" + pd.slice(end).replace(/^\n*/, "");
fs.writeFileSync(programDataPath, pd);
console.log(`Updated ${sorted.length} links in lib/program-data.ts`);
