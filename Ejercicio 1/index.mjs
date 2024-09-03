import esPrimo from "./funciones.cjs";
import os from "os"; // Importa el módulo 'os'
import dotenv from "dotenv";

dotenv.config(); // Asegúrate de que esta línea esté justo después de importar dotenv

console.log(esPrimo(321));

// Acceder a las variables de entorno
// const port = process.env.PORT || 3000;
// const dbHost = process.env.DB_HOST;
// const dbUser = process.env.DB_USER;
// const dbPass = process.env.DB_PASS;
// const apiKey = process.env.API_KEY;

// console.log(port);
// console.log(dbPass);

console.log("Arquitectura de la CPU:", os.arch());
console.log("Información de CPUs:", os.cpus());
console.log("Memoria libre:", os.freemem());
console.log("Directorio Home del usuario:", os.homedir());
console.log("Nombre del host:", os.hostname());
console.log("Plataforma del sistema operativo:", os.platform());
console.log("Versión del sistema operativo:", os.release());
console.log("Memoria total:", os.totalmem());
console.log("Nombre del sistema operativo:", os.type());
console.log("Tiempo de actividad del sistema (segundos):", os.uptime());
console.log("Información del usuario actual:", os.userInfo());
