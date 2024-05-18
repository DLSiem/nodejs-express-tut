import { dir } from "console";
import express from "express";

// import { createServer } from "http";
// import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(join(__dirname, "public", "about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(join(__dirname, "public", "contact-me.html"));
});

app.use((req, res, next) => {
  res.status(404).sendFile(join(__dirname, "public", "404.html"));
});

// createServer((req, res) => {
//   let path = url.parse(req.url).pathname;
//   let filename = path.substring(1) + ".html";
//   console.log("Path: ", path);
//   if (path === "/") {
//     filename = "index.html";
//   }

//   fs.readFile(filename, (err, data) => {
//     if (err) {
//       res.writeHead(404, { "Content-Type": "text/html" });
//       return res.end("<h1>404 Not Found !</h1>");
//     }
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(data);
//     return res.end();
//   });
// }).listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
