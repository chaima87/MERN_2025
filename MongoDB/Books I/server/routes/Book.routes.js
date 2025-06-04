import { Router } from 'express';
import { createBook, getAllBooks, getBook, updateBook, deleteBook } from '../controllers/Book.controller.js';

const router = Router();

router.post('/books', createBook);
router.get('/books', getAllBooks);
router.get('/books/:id', getBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

export default router;
