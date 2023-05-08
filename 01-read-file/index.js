const fs = require("fs");
const path = require("path");
const fileName = path.join(__dirname, "text.txt");
const readStream = fs.createReadStream(fileName, { encoding: "utf8" });

readStream.on("data", (data) => {
  console.log(data);
});
