const express = require('express');
const app = express();

app.use(express.json());  // Middleware to parse JSON in request body

// Simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Another route
app.get('/about', (req, res) => {
  res.send('About this server');
});

// POST route
app.post('/submit', (req, res) => {
  const data = req.body;
  res.json({ message: 'Data received', data });
});

// Error handling
app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

