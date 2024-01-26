import fs from "fs";

export function getFileContent(filePath) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return fileContent;
}

export function getFileLine(filePath, lineNumber) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const lines = fileContent.split("\n");

    if (lineNumber >= 1 && lineNumber <= lines.length) {
        return lines[lineNumber - 1];
    } else {
        return `Line number ${lineNumber} is out of bounds.`;
    }
}
