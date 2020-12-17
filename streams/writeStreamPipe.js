const { createReadStream, createWriteStream } = require("fs");

const stream_r = createReadStream("./data/app.log");

const stream_w = createWriteStream("./data/output.log");

stream_r.pipe(stream_w);
