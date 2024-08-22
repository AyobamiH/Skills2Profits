 // Load environment variables
const express = require("express");
const cors = require('cors');
const app = express();
const connectDB = require("./config/database");
const messagesRoutes = require('./routes/messagesRoutes');
// Middleware to parse JSON

// Middleware to parse JSON
app.use(express.json());

// Enable CORS so that the frontend (localhost:5174) can communicate with the backend (localhost:4545)
app.use(cors())
// Use the messages routes for the '/messages' path
app.use('/api', messagesRoutes);

// Verify MongoDB URI
connectDB();

const PORT = process.env.PORT || 4545
// Server setup
app.listen(PORT, () => {
  console.log(`Server is running on port, you better catch it ${process.env.PORT}`);
});