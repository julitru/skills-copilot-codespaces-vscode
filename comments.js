// Create web server
// 1. Create a new Express app
const express = require('express');
const app = express();
const port = 3000;

// 2. Create a new route
app.get('/comments', (req, res) => {
  res.send('Hello World!');
});

// 3. Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// 4. Test the route
// Open your browser and go to http://localhost:3000/comments

// 5. Create a new route
app.get('/comments/:id', (req, res) => {
  res.send('Hello World!');
});

// 6. Test the route
// Open your browser and go to http://localhost:3000/comments/1

// 7. Create a new route
app.get('/comments/:id/:commentId', (req, res) => {
  res.send('Hello World!');
});

// 8. Test the route
// Open your browser and go to http://localhost:3000/comments/1/2