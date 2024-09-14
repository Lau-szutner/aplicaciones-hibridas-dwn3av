import express from "express";

const app = express();
const port = 3000;

const movies = [
  "El señor de los anillos",
  "harry potter",
  "Donnie Darko",
  "Star Wars",
  "it",
];

const productos = [
  { id: 1, nombre: "esponja", precio: 10 },
  { id: 2, nombre: "lavandina", precio: 20 },
  { id: 3, nombre: "sarten", precio: 22 },
  { id: 4, nombre: "vasos", precio: 40 },
  { id: 5, nombre: "procesadora", precio: 50 },
  { id: 6, nombre: "curry", precio: 5 },
  { id: 7, nombre: "oregano", precio: 4 },
  { id: 8, nombre: "toallas", precio: 140 },
  { id: 9, nombre: "tenedor", precio: 111 },
  { id: 10, nombre: "cuchillo", precio: 140 },
];

app.listen(port, () => {
  console.log(`server running on ${port}`);
});

app.get("/", (req, res) => {
  res.send("Lautaro Fernandez Szutner");
});

app.get("/materia", (req, res) => {
  res.send("Apliciones Hibridas Comision DWTA2VSXXXX");
});

app.get("/productos/:id", (req, res) => {
  const producto = productos.find((p) => p.id === parseInt(req.params.id));
  res.send(producto);
});

app.get("/peliculas/:movie", (req, res) => {
  const pelicula = movies.find((movie) => movie === req.params.movie);
  console.log(pelicula);
  if (!pelicula) return res.send("404 – película no encontrada");
  res.send(pelicula);
});

app.get("/productos", (req, res) => {
  const min = parseFloat(req.query.min) - 1;
  const max = parseFloat(req.query.max);
  let filteredProducts = productos.slice(min, max);
  console.log(filteredProducts);
  res.json(filteredProducts);
});

app.use((req, res) => {
  res.status(404).send("<h1>404 - Página no encontrada</h1>");
});
