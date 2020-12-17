const { convertCsv } = require("../services/csv.parse");
const { readFile } = require("fs");

const asyncReadfile = (filename) => {
  readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.log(err.message);
    }
    const vals = convertCsv(data);

    console.table(vals);
  });
};

exports.asyncReadfile = asyncReadfile;
