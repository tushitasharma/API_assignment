const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;

// Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/library', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Checking connection
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Checking for DB errors
db.on('error', (err) => {
  console.error(err);
});

// Book Schema
const Book = mongoose.model('Book', {
  title: String,
  author: String,
  genre: String,
});

app.use(bodyParser.json());

// Endpoint 1: Retrieve All Books
app.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Endpoint 2: Add a New Book
app.post('/api/books', async (req, res) => {
  const { title, author, genre } = req.body;

  try {
    const isBookExisting = await Book.findOne({ title });
    if (isBookExisting) {
      return res.status(400).json({ error: 'Book already exists' });
    }

    const newBook = new Book({ title, author, genre });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Endpoint 3: Update Book Details
app.put('/api/books/:id', async (req, res) => {
  const { id } = req.params;
  const { title, author, genre } = req.body;

  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    book.title = title || book.title;
    book.author = author || book.author;
    book.genre = genre || book.genre;

    await book.save();
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
