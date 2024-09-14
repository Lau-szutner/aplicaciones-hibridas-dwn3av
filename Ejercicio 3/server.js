import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/alumno") {
    res.statusCode = 200;
    res.end("Lautaro Fernandez Szutner DWN4AV");
  } else if (req.url === "/info") {
    res.statusCode = 200;
    const info = `Sistema Operativo: ${os.type()}\nVersión: ${os.release()}\nMemoria Libre: ${os.freemem()} bytes`;
    res.end(info);
  } else if (req.url === "/static") {
    const filePath = path.join(__dirname, "index.html"); // Utiliza __dirname para obtener la ruta del archivo HTML
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.statusCode = 500;
        res.end("Error al cargar el archivo HTML");
      } else {
        res.setHeader("Content-Type", "text/html");
        res.statusCode = 200;
        res.end(content);
      }
    });
  } else {
    res.statusCode = 404;
    res.end("Ruta no encontrada");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Servidor ejecutándose en http://127.0.0.1:3000/");
});
