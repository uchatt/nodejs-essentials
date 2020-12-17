/**
 * Require System Modules
 */
const { readdirSync, watch } = require("fs");
const { resolve } = require("path");

/**
 * Require Custom Modiles
 */
const asyncReads = require("./readFiles/async_read");
const syncReads = require("./readFiles/sync_read");
const promiseReads = require("./readFiles/promisified_read");
const {
    asyncBufferRead,
    asyncBufferReadChunks,
    syncBufferReadChunks,
} = require("./bufferredRead/async_partial_read");

/**
 * Require Data files
 */
const file_names = readdirSync("./data");
const DATA_PATH = resolve(__dirname, "data");
const file_pulitzer = resolve(DATA_PATH, file_names[1]);
const server_logs = resolve(DATA_PATH, file_names[0]);

// asyncReads.asyncReadfile(file_pulitzer);
// syncReads.syncReadFile(file_pulitzer);
// promiseReads.promisifiedReadFile(file_pulitzer);

// asyncBufferRead(file_pulitzer);
// asyncBufferReadChunks(server_logs);
// syncBufferReadChunks(server_logs);
const { paglaStream } = require("./streams/readStream");

paglaStream.on("data", (data) => {
    paglaStream.pause();
    console.log(data);

    setTimeout(() => {
        paglaStream.resume();
    }, 500);
});