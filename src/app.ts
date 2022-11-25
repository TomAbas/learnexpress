const http = require("http");

const server = http.createServer((req: any, res: any) => {
  console.log("123");
  res.end("123");
  return;
});

server.listen("6868");
