const { convertCsv } = require("../services/csv.parse");
const { open, read, stat, openSync, readSync, closeSync } = require("fs");

const async_buffer_read = (filename) => {
  open(filename, (err, fd) => {
    const buffer = Buffer.alloc(500);
    read(fd, buffer, 0, buffer.length, 0, (err, count, buff) => {
      if (err) {
        console.log(`Error: ${err}`);
        return;
      }
      console.log(`Read ${count} bytes.`);
      console.table(convertCsv(buff.toString()));
    });
  });
};

const async_buffer_read_chunk = (filename) => {
  let total_size = 0;
  // determine the size of the file using fs.stat
  stat(filename, (err, { size }) => (total_size = size));

  open(filename, (err, fd) => {
    const buffer = Buffer.alloc(200);

    for (let i = 0; i <= total_size / buffer.length; i++) {
      read(
        fd,
        buffer,
        0,
        buffer.length,
        i * buffer.length,
        (err, count, buff) => {
          console.log(buff.toString());
        }
      );
    }
  });
};

const sync_read_chunk = (filename) => {
  const fd = openSync(filename);
  let count = 0;

  do {
    const buffer = Buffer.alloc(200);
    count = readSync(fd, buffer, 0, buffer.length, null);
    console.log(buffer.toString());
  } while (count > 0);

  closeSync(fd);
};

exports.asyncBufferRead = async_buffer_read;
exports.asyncBufferReadChunks = async_buffer_read_chunk;
exports.syncBufferReadChunks = sync_read_chunk;
