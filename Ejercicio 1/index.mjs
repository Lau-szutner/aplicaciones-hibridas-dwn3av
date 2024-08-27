import esPrimo from "./funciones.cjs";
import dotenv from "dotenv";
dotenv.config(); // Asegúrate de que esta línea esté justo después de importar dotenv

console.log(esPrimo(321));
console.log(process.env); // Esto debería mostrar todas las variables cargadas desde .envnode
// Acceder a las variables de entorno
const port = process.env.PORT || 3000;
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const apiKey = process.env.API_KEY;

console.log(port);
console.log(dbPass);
