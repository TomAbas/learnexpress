"use strict";
const http = require("http");
const server = http.createServer((req, res) => {
  console.log("123");
  return;
});
server.listen("6868", () => {
  console.log("run");
});
