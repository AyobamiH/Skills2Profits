const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config({ path: ".env" });
const session = require("express-session");
const MongoStore = require("connect-mongo");
const cors = require('cors');
const path = require('path');
const methodOverride = require("method-override");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: 'https://skills2profits.com',  // Your frontend domain
  methods: ['POST', 'GET', 'DELETE', 'PUT'],
  credentials: true,  // Allow credentials (cookies, authorization headers, etc.)
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow necessary headers
}));

// Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ 
      mongoUrl: process.env.MONGODB_URI,
      ttl: 14 * 24 * 60 * 60 }),
  })
);

const PORT = process.env.PORT;

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('MongoDB Connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// 1. Define Schemas and Models

// Message Schema and Model
const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
    country: String,
    expertise: String,
    country: String,
    agreement: Boolean,
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);


// 2. Controller Logic for Messages

const sendMessage = async (req, res) => {
    try {
        const { name, email, phone, message, country, expertise, agreement } = req.body;

        const newMessage = new Message({ name, email, phone, message, agreement });
        await newMessage.save();

        res.status(200).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error('Controller Error saving message:', error);
        res.status(500).json({ success: false, message: 'Error sending message' });
    }
};

const getMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        console.log('Messages from MongoDb: ', messages);
        res.status(200).json(messages);
    } catch (error) {
        console.error('Error retrieving messages:', error);
        res.status(500).json({ success: false, message: 'Error retrieving messages' });
    }
};

const deleteMessage = async (req, res) => {
    try {
        console.log('Delete request received for ID:', req.params.id);
        const messageId = req.params.id;
        const result = await Message.findByIdAndDelete(messageId);

        if (!result) {
            return res.status(404).json({ success: false, message: 'Message not found' });
        }
        res.status(200).json({ success: true, message: 'Message deleted successfully' });
    } catch (error) {
        console.error('Controller Error deleting message:', error);
        res.status(500).json({ success: false, message: 'Error deleting message' });
    }
};

// 3. Controller Logic for Bookings

// 5. Routes

// Messaging Routes
app.post('/messages/send', sendMessage);
app.get('/messages/all', getMessages);
app.delete('/messages/:id', deleteMessage);



app.get('/', (req, res) => {
  res.json('Welcome to the Skills 2 Profits API server!');
});


app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// 6. Server Startup

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
