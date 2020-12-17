"use strict";

const { writeFile, writeFileSync } = require("fs");

const FILE_PATH = "./writeFiles/data/file1.txt";

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "uc >> ",
});

readline.prompt();

readline.on("line", (line) => {
  if (line === ":q") {
    writeFileSync(FILE_PATH, "END - " + new Date().toString(), { flag: "a" });
    process.exit(0);
  }
  async_write_to_file(FILE_PATH, line);
});

const async_write_to_file = (filePath, data_to_write) => {
  writeFile(
    filePath, // path of the file
    data_to_write + "\n", // string data written to file with newline char
    { flag: "a" }, // options: encoding, flag, mode(file permissions)
    (err) => {
      // error callback
      if (err) {
        console.log(err);
        process.exit(1);
      } else {
        console.log({
          isSaved: "success",
          data_bytes: data_to_write
            ? data_to_write.toString().length
            : console.log("File saved."),
        });
        readline.prompt();
      }
    }
  );
};

exports.AsyncFileWrite = async_write_to_file;
