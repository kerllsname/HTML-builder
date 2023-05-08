const process = require("process");
const { stdin } = require("process");
const fs = require("fs");
const path = require("path");
const fileName = path.join(__dirname, "text.txt");
let writeableStream = fs.createWriteStream(fileName);

console.log("Input:");

function onExit() {
  stdin.unpipe(writeableStream);
  stdin.pause();
  writeableStream.end();
}

stdin.on("data", (data) => {
  if (data.toString("utf8").replaceAll("\r\n", "") === "exit") {
    onExit();
  } else {
    writeableStream.write(data);
  }
});

writeableStream.on("finish", () => {
  console.log("good luck");
});

process.on("SIGINT", function () {
  onExit();
});
