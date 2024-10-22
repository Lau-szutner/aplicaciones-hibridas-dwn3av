import express from 'express';
import jwt from 'jsonwebtoken';
import path from 'path'; // Importa path para manejar rutas de archivos

const PORT = 3000;
const app = express();
const SECRET_KEY = '123';

// Middleware para verificar el JWT
const verificarToken = (req, res, next) => {
  // Obtén el token del encabezado de autorización
  const token = req.headers.authorization?.split(' ')[1]; // "Bearer token"

  if (!token) {
    return res.status(403).send('Token no proporcionado');
  }

  // Verifica el token
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send('Token inválido');
    }

    // Si el token es válido, guarda el payload en la solicitud
    req.user = decoded; // Guarda el contenido del token en req.user
    next(); // Pasa al siguiente middleware o controlador
  });
};

// Middleware para analizar JSON
app.use(express.json());

// Middleware para servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(process.cwd(), 'public'))); // Usa process.cwd() para la ruta correcta

// Ruta protegida que requiere un token válido
app.get('/protected', verificarToken, (req, res) => {
  res.send(`Hola ${req.user.name}, tienes acceso a esta ruta protegida.`);
});

// Ruta para administración protegida
app.get('/admin', verificarToken, (req, res) => {
  res.send(
    `Hola ${req.user.name}, tienes acceso a esta ruta de administrador.`
  );
});

// Ruta de login para obtener el token
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Aquí podrías validar username y password en una base de datos

  const payload = {
    sub: username,
    name: username,
    admin: true,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });
  res.json({ token });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
