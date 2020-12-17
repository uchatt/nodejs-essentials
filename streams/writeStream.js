const { createReadStream, createWriteStream } = require("fs");

const stream_r = createReadStream("./data/app.log", {
    highWaterMark: 9550,
    encoding: "utf-8",
});

const stream_w = createWriteStream("./data/app_output.log");

let iteration = 0;
stream_r.on("data", (data) => {
    stream_r.pause();
    console.log(++iteration);

    stream_w.write(data);

    setTimeout(() => {
        stream_r.resume();
    }, 1000);
});
