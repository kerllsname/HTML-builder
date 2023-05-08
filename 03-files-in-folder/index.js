const fs = require("fs");
const { readdir, stat } = require("fs/promises");
const path = require("path");
const dirPath = path.join(__dirname, "secret-folder");

async function readFiles() {
  try {
    const files = await readdir(dirPath);
    for (const file of files) {
      const [fileName, fileType] = file.split(".");
      const filePath = path.join(dirPath, file);
      const fileStat = await stat(filePath);
      const fileSize = fileStat.size;

      if (fileStat.isFile()) {
        console.log(`${fileName} - ${fileType} - ${fileSize}`);
      }
    }
  } catch (err) {
    console.error(err);
  }
}

readFiles();
