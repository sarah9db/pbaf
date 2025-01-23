const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000; // or any port you prefer

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Import routes
const itemsRouter = require('./routes/items');

// Use routes
app.use('/', itemsRouter);

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, MEAN stack!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
