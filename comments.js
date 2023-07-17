// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();
const port = 3000; // You can change this port to any available port you prefer

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, this is your web server!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
