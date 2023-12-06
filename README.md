# API_assignment

# Library Management API

## Overview

This is a simple RESTful API for managing a library system. The API allows users to perform basic CRUD operations on books in the library.

## Getting Started

1. Clone the repository:

   ```bash
   https://github.com/tushitasharma/API_assignment.git
   cd API_assignment
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your MongoDB connection.

## API Endpoints

### 1. Retrieve All Books

- **Endpoint:** `GET /api/books`
- **Description:** Retrieve a list of all books in the library.
- **Response Format:**
  ```json
  [
    {
      "_id": "6570cbce561739a649a21ad7",
      "title": "Half girlfriend",
      "author": "Chetan Bhagat",
      "__v": 0,
      "genre": "Romance"
    },
    {
      "_id": "6570cc16561739a649a21ada",
      "title": "Harry Potter",
      "author": "J.K. Rowling",
      "__v": 0
    },
    {
      "_id": "6570ccb8561739a649a21ade",
      "title": "The fault in our star",
      "author": "John Green",
      "genre": "Romance",
      "__v": 0
    },
    {
      "_id": "6570ccde561739a649a21ae2",
      "title": "The fault in our star 2",
      "author": "John Green",
      "genre": "Romance",
      "__v": 0
    }
  ]
  ```

### 2. Add a New Book

- **Endpoint:** `POST /api/books`
- **Request Format:**

  ```json
  {
    "title": "Half girlfriend 2",
    "author": "Chetan Bhagat",
    "genre": "Romance"
  }
  ```

- **Response Format:**
  ```json
  {
    "title": "Half girlfriend 2",
    "author": "Chetan Bhagat",
    "genre": "Romance",
    "_id": "6570d026561739a649a21ae9",
    "__v": 0
  }
  ```

### 3. Update Book Details

- **Endpoint:** `PUT /api/books/{id}`
- **Request Format:**
  ```json
  {
    "title": "Updated Book",
    "author": "Updated Author",
    "genre": "Action"
  }
  ```
- **Response Format:**
  ```json
  {
    "id": "3",
    "title": "Updated Book",
    "author": "Updated Author",
    "genre": "Romance",
    "__v": 0
  }
  ```

## Request and Response Formats

- All requests and responses should use the JSON format.

## Database Seeding

To seed the database with mock data, run:

```bash
node seed.js
```
