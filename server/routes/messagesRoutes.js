const express = require('express');
const router = express.Router();
const { sendMessage, getMessages } = require('../controllers/messageController');

const Message = require('../models/Messages'); // Assuming your Message schema is in models/Message.js

// Ensure this route is correct
router.post('/send', sendMessage);



// GET /messages - Fetch all messages
router.get('/messages', getMessages);




module.exports = router;