// Create a Stream and Read the stream
const { createReadStream } = require("fs");

const _stream = createReadStream("./data/app.log", {
    highWaterMark: 9550,
    encoding: "utf-8",
});

// _stream.on("data", (data) => {
//     _stream.pause();
//     console.log(data);

//     setTimeout(() => {
//         _stream.resume();
//     }, 1000);
// });

exports.paglaStream = _stream;