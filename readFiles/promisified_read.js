const { convertCsv } = require("../services/csv.parse");
const fs = require("fs");
const { promisify } = require("util");

const p_readFile = promisify(fs.readFile);

/**
 * Promisify Example
 */
// p_readFile("./data/pulitzer-circulation-data.csv", "utf8")
//   .then((data) => console.table(convertCsv(data)))
//   .catch((err) => console.log(`File Error ${err}`));


/**
 * Async Await Example
 */

const read_async_await = async (filename) => {
    const data = await p_readFile(filename, "utf8");
    console.table(convertCsv(data));
}

exports.promisifiedReadFile = read_async_await;
