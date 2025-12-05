import { readFileSync } from "fs";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const rootPath = path.resolve(__dirname, "..");

export function readInput(day: number): string[] {
    return readFileSync(`${rootPath}/inputs/day${String(day).padStart(2, "0")}.txt`, "utf-8")
        .trim()
        .split("\n");
}