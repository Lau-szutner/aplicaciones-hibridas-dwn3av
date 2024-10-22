import express from 'express';




const router = express.Router();

// traer todos los autores
// router.get('/authors', getAllUsers);

// // traer todos los libtos
// router.get('/books', getUserById);

// crear un libro
router.post('/books/new', createUser);

// update user
router.put('/:id', updateUser);

// delete user
router.delete('/:id', deleteUser);
