const fs = require("fs");
const folderName = process.argv[2];

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, "");
  fs.writeFileSync(`${folderName}/styles.css`, "");
  fs.writeFileSync(`${folderName}/script.js`, "");
} catch (e) {
  console.log("Error in creating directory or files");
  console.log(e);
}
