import { createServer } from "http";
import fs from "fs";
import url from "url";

const port = 8080;

createServer((req, res) => {
  let path = url.parse(req.url).pathname;
  let filename = path.substring(1) + ".html";
  console.log("Path: ", path);
  if (path === "/") {
    filename = "index.html";
  }

  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      return res.end("<h1>404 Not Found !</h1>");
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
}).listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
