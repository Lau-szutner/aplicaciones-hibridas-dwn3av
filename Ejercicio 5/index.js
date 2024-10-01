import express from 'express';
import fs, { realpathSync } from 'fs';

// import usersRoutes from 'routes/usersRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/users', (req, res) => {
  let users = readUsersFile();
  res.status(200).json(users);
});

app.get('/users/:id', (req, res) => {
  let users = readUsersFile();
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id == userId);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'no se encontro tu usuario' });
  }
});

app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201);
});

app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex !== -1) {
    users[userIndex] = { id: userId, ...req.body };
    res.status(200).json(users[userIndex]);
  }
});

app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.status(204).send('NO CONTENT');
  }
});

const readUsersFile = () => {
  const data = fs.readFileSync('./data/users.json', 'utf8');
  return JSON.parse(data);
};

const writeUsersFile = () => {
  fs.writeFileSync('./data/users.json', JSON.stringify(data), 'utf8');
  return JSON.parse(data);
};
// app.use('/usuarios', usersRoutes);
// app.use('/posteos', posteosRoutes)

// app.get('/users', (req, res) => {
//   res.status(200).json(users);
// });

// const readUsersFiles = () => {
//   const data =
// };

app.listen(port, () => console.log(`http://localhost:${port}`));
