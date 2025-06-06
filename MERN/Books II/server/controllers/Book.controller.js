import Book from '../models/Book.model.js';

// Create
const createBook= async(req, res) => {
  try {
    const book = await Book.create(req.body);
    res.json(book);
  } catch (err) {
    res.json(err);
  }
}

// Get all
const getAllBooks = async(req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.json(err);
  }
}

// Get one
const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.json(err);
  }
};

// Update
const updateBook = async(req, res) =>{
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
    );
    if (!book) return res.json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.json(err);
  }
}

// Delete
const deleteBook = async(req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.json({ message: 'Book not found' });
    res.json({ message: 'Book deleted successfully' });
  } catch (err) {
    res.json(err);
  }
}

export { createBook, getAllBooks, getBook, updateBook, deleteBook };

