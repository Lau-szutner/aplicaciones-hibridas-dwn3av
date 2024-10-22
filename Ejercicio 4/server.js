import express from 'express';

const app = express();
const port = 3000;

const movies = [
  'el señor de los anillos',
  'harry potter',
  'donnie darko',
  'star wars',
  'it',
];

const productos = [
  { id: 1, nombre: 'esponja', precio: 10 },
  { id: 2, nombre: 'lavandina', precio: 20 },
  { id: 3, nombre: 'sarten', precio: 22 },
  { id: 4, nombre: 'vasos', precio: 40 },
  { id: 5, nombre: 'procesadora', precio: 50 },
  { id: 6, nombre: 'curry', precio: 5 },
  { id: 7, nombre: 'oregano', precio: 4 },
  { id: 8, nombre: 'toallas', precio: 140 },
  { id: 9, nombre: 'tenedor', precio: 111 },
  { id: 10, nombre: 'cuchillo', precio: 140 },
];

app.get('/', (req, res) => {
  res.send('<h1>Lautaro Fernandez Szutner</h1>');
});

app.get('/materia', (req, res) => {
  res.send('Apliciones Hibridas Comision DWN3AV');
});
app.get('/profesor', (req, res) => {
  res.send('Profesor: Camila Belén Marcos Galban');
});

app.get('/peliculas/:movie', (req, res) => {
  // Obtener la película desde el parámetro de ruta
  const pelicula = req.params.movie;
  console.log('parametro pasado ' + pelicula);
  // Verificar si la película está en el array
  const resultado = movies.find(
    (movie) => movie.toLowerCase() === pelicula.toLowerCase()
  );

  if (resultado) {
    return res.send('La película seleccionada ya está en favoritos');
  }

  res.status(404).send('404 – película no encontrada');
});

app.get('/productos/:id', (req, res) => {
  const producto = productos.find((p) => p.id === parseInt(req.params.id));
  res.send(producto);
});

app.get('/productos', (req, res) => {
  const { min, max } = req.query;

  if (!min && !max) {
    return res.json(productos);
  }
  const minPrecio = min ? parseFloat(min) : 0;
  const maxPrecio = max ? parseFloat(max) : Infinity;

  const productosFiltrados = productos.filter(
    (producto) => producto.precio >= minPrecio && producto.precio <= maxPrecio
  );

  res.json(productosFiltrados);
});

app.get('/productos/:id', (req, res) => {
  const producto = productos.find((p) => p.id === parseInt(req.params.id));

  // Si no se encuentra el producto, enviamos un mensaje de error
  if (!producto) {
    return res.status(404).send('Producto no encontrado');
  }

  // Si se encuentra, devolvemos el producto
  res.json(producto);
});

app.use((req, res) => {
  res.status(404).send('<h1>404 - Página no encontrada</h1>');
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
