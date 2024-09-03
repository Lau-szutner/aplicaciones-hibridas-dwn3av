import os from "os";

// console.log("Arquitectura de la CPU:", os.arch());
// console.log("Información de CPUs:", os.cpus());
// console.log("Memoria libre:", os.freemem());
// console.log("Directorio Home del usuario:", os.homedir());
// console.log("Nombre del host:", os.hostname());
// console.log("Plataforma del sistema operativo:", os.platform());
// console.log("Versión del sistema operativo:", os.release());
// console.log("Memoria total:", os.totalmem());
// console.log("Nombre del sistema operativo:", os.type());
// console.log("Tiempo de actividad del sistema (segundos):", os.uptime());
// console.log("Información del usuario actual:", os.userInfo());

export default function OS() {
  let x = `
            "Arquitectura de la CPU:", ${os.arch()}
            "Información de CPUs:", ${os.platform}
            "Nombre del sistema operativo:", ${os.type()}
`;
  return x;
}
