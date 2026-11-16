const fs = require("fs");

console.log("Starting the file read operation...");

try {
  const data = fs.readFileSync("sample.txt", "utf-8");
  console.log("File content:", data);
} catch (err) {
  console.log("Error reading file:", err);
}

console.log("This message is logged after the file read operation.");node synchronous