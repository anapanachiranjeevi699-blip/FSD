 const fs = require("fs");
console.log(1);
const data1 = "fsdfsd";
fs.writeFile("sample.txt", data1, "utf-8", (err) => {
  if (err) {
    return console.log("Error writing file:", err);
  }

  console.log("File written successfully.");

  fs.readFile("sample.txt", "utf-8", (readErr, readdata) => {
    if (readErr) {
      return console.log("Error reading file:", readErr);
    }

    console.log("Read data:", readdata);
  });
});