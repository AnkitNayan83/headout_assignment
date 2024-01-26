import fs from "fs";
import path from "path";

function generateRandomWords(sizeInMB) {
    const fileSize = sizeInMB * 1024 * 1024;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let randomText = "";
    while (Buffer.from(randomText).length < fileSize) {
        const randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
        randomText += randomChar;
    }

    const k = randomText.slice(0, fileSize);
    console.log(k);
    return k;
}

// Function to write text to a file
function writeToFile(fileName, content) {
    fs.writeFileSync(fileName, content, "utf8");
}

// Specify the file name and size (in MB)
const fileName = path.join(__dirname, "../data/2.txt");
const fileSizeInMB = 1; // Adjust as needed

// Ensure the directory exists
const directory = path.dirname(fileName);
if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
}

console.log("----------------------");
const randomText = generateRandomWords(fileSizeInMB);
writeToFile(fileName, randomText);

console.log(`File generated successfully: ${fileName}`);
