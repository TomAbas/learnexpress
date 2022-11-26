import { IncomingMessage, ServerResponse } from "http";
import { readFileSync } from "fs";
const http = require("http");

const html = readFileSync("src/navbar-app/index.html");
const css = readFileSync("src/navbar-app/styles.css");
const logo = readFileSync("src/navbar-app/logo.svg");
const logic = readFileSync("src/navbar-app/browser-app.js");
const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log(req.url);
    if (req.url === "/") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(html);
      res.end();
      return;
    }
    if (req.url === "/styles.css") {
      res.writeHead(200, { "content-type": "text/css" });
      res.write(css);
      res.end();
      return;
    }
    if (req.url === "/logo.svg") {
      res.writeHead(200, { "content-type": "image/svg+xml" });
      res.write(logo);
      res.end();
      return;
    }
    if (req.url === "/browser-app.js") {
      res.writeHead(200, { "content-type": "text/javascript" });
      res.write(logic);
      res.end();
      return;
    }
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>error</h1>");
    return;
  }
);

server.listen("6868", () => {
  console.log("aloalo");
});
