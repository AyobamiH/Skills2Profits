 // Load environment variables
const express = require("express");
const cors = require('cors');
const app = express();
const connectDB = require("./config/database");
const messagesRoutes = require('./routes/messagesRoutes');
// Middleware to parse JSON

// Middleware to parse JSON



// Enable CORS so that the frontend (localhost:5174) can communicate with the backend (localhost:4545)
app.use(cors({
  origin: ['https://skills2profits.com'], 
  methods: ['POST', 'GET'],
  credentials: true
}))

app.use(express.json());

app.use('/api/send', messagesRoutes);


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