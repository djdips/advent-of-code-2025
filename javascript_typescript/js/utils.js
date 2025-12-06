import fs from "fs";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const rootPath = path.resolve(__dirname, "../..");

export function readInput(fileName) {
    return fs.readFileSync(`${rootPath}/inputs/${fileName}.txt`, "utf-8")
        .trim()
        .split("\n");
}