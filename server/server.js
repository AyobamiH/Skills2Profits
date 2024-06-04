// server.js

const express = require("express");
const cors = require('cors');
const app = express();
const connectDB = require("./config/database");
const messagesRoutes = require('./routes/messagesRoutes');

// Middleware to parse JSON
app.use(express.json());

// CORS Configuration
app.use(cors({
  origin: 'https://skills2profits.com',  // Your frontend domain
  methods: ['POST', 'GET'],
  credentials: true,  // Allow credentials (cookies, authorization headers, etc.)
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow necessary headers
}));

app.use('/api', messagesRoutes);

// Use the messages routes for the '/messages' path
app.get('/', (req, res) => {
  res.json('Welcome to the API server!');
});

// Verify MongoDB URI
connectDB();

const PORT = process.env.PORT || 4545
// Server setup
app.listen(PORT, () => {
  console.log(`Server is running on : ${process.env.PORT}, you better catch it! `);
});
