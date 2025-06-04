import Book from '../models/Book.model.js';

// Create
export async function createBook(req, res) {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Get all
export async function getAllBooks(req, res) {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json(err);
  }
}

// Get one
export async function getBook(req, res) {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json(err);
  }
}

// Update
export async function updateBook(req, res) {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Delete
export async function deleteBook(req, res) {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
}
