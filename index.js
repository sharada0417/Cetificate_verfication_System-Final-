const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 8000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/cetificateVerify')
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
