const fs = require("fs");

const fromDir = "./build";
const toDir = "./docs";

fs.cp(fromDir, toDir, { recursive: true }, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`${fromDir} was coped to ${toDir}!`);
});
