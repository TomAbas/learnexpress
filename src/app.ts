import { IncomingMessage, ServerResponse } from "http";
import { readFileSync } from "fs";
const http = require("http");

const homePage = readFileSync("src/index.html");
const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    if (url === "/") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(homePage);
      res.end();
    } else {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("<h1>error</h1>");
      res.end();
    }

    return;
  }
);

server.listen("6868", () => {
  console.log("aloalo");
});
