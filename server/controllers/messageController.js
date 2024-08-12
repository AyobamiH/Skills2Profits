const Message = require('../models/Messages');

exports.sendMessage = async (req, res) => {
  try {
    const { name, email, phone, message, country, agreement } = req.body;

    // Save message to the database
    const newMessage = new Message({
      name,
      email,
      phone,
      message,
      country,
      agreement
    });

    await newMessage.save();

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Controller Error saving message:', error);
    res.status(500).json({ success: false, message: 'Error sending message' });
  }
};



// Controller to handle retrieving messages
exports.getMessages = async (req, res) => {
    try {
        // Fetch all messages from the database, sorted by the most recent first
        const messages = await Message.find().sort({ createdAt: -1 });
        
        // Send the messages as a JSON response
        console.log('Messages from the MongoDb: ',  messages)
        res.status(200).json(messages);
    } catch (error) {
        // If there's an error, log it and send a 500 status with an error message
        console.error('Error retrieving messages:', error);
        res.status(500).json({ success: false, message: 'Error retrieving messages' });
    }
};