import http from "http";
import fs from "fs";
import OS from "./info.js";

// Escribir en el archivo 'alumno.txt'
fs.writeFile(
  "alumno.txt",
  "Lautaro Fernandez Szutner / Comision DWN4AB",
  (err) => {
    if (err) throw err;
    // console.log("The file has been saved!");
  }
);

const server = http.createServer((req, res) => {
  if (req.url === "/") {
  }

  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end(`home page`); // Enviar el contenido del archivo como respuesta
      break;
    case "/alumno":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      fs.readFile("alumno.txt", "utf-8", (err, data) => {
        if (err) throw err;
        res.end(data); // Enviar el contenido del archivo como respuesta
      });
      break;
    case "/info":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end(OS());
      break;
    case "/static":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
`);
      break;
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:3000/");
});
