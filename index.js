//packages
import express from "express";
import fs from "fs";
import { getFileContent, getFileLine } from "./utils/getFileContent.js";

// starting app
const app = express();

// file location
const data = "./data/";

// to accept json files
app.use(express.json());

// get route to get content of the file
app.get("/data", (req, res) => {
    const fileName = req.query.n;
    const lineNumber = req.query.m ? parseInt(req.query.m) : undefined;

    if (!fileName) {
        return res.status(400).json({
            error: "File name is required",
        });
    }

    const filePath = `${data}${fileName}.txt`;
    console.log(filePath);

    //check whether that file exists or not
    if (!fs.existsSync(filePath)) {
        return res.status(404).json({
            error: "File not found",
        });
    }

    if (lineNumber) {
        const content = getFileLine(filePath, lineNumber);
        res.send(content);
    } else {
        const content = getFileContent(filePath);
        res.send(content);
    }
});

const port = 3000;
// starting server
app.listen(port, () => {
    console.log(`Server started}`);
});
