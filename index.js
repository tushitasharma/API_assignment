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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
