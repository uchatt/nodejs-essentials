const { convertCsv } = require("../services/csv.parse");
const { readFileSync } = require("fs");

const syncReadFile = (filename) => {
  try {
    const data = readFileSync(filename, "utf8");
    console.table(convertCsv(data));
  } catch (error) {
    console.log(error.message);
  }
};

exports.syncReadFile = syncReadFile;