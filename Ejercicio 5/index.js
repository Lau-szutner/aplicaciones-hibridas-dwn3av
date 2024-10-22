import express from 'express';
import fs from 'fs'
const PORT = 3000;
const app = express();





app.post('/', (req, res) => {
  fs.writeFile
});

app.listen(PORT,  () => {
  console.log(`servidor corriendo en http://localhost:${PORT}`);
})



