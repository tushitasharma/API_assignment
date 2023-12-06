const mongoose = require('mongoose');
const Book = require('./app').Book;

mongoose.connect('mongodb://localhost:27017/library', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const seedData = [
  {
    title: 'Book 1',
    author: 'Author 1',
    genre: 'Action',
  },
  {
    title: 'Book 2',
    author: 'Author 2',
    genre: 'Action',
  },
  // Add more mock data as needed
];

Book.insertMany(seedData)
  .then(() => {
    console.log('Database seeded successfully');
    db.close();
  })
  .catch((err) => console.error('Error seeding database:', err));
