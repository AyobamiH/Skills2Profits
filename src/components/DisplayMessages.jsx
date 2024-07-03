import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayMessages = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Fetch messages from the backend API
        const fetchMessages = async () => {
            try {
                const response = await axios.get('/api/messages');
                console.log('Response Data From Display Messages Components:', response.data)
                setMessages(response.data); // Update state with fetched messages
                console.log(messages)
            } catch (error) {
                console.error('Error fetching messages From Display Messages Components:', error);
            }
        };

        fetchMessages();
    }, []);

    return (
        <div>
            <h2>Messages</h2>
            {messages.length > 0 ? (
                <ul>
                    {messages.map((message, index) => (
                        <li key={index}>
                            <strong>Name:</strong> {message.name}<br />
                            <strong>Email:</strong> {message.email}<br />
                            <strong>Phone:</strong> {message.phone}<br />
                            <strong>Country:</strong> {message.country}<br />
                            <strong>Message:</strong> {message.message}<br />
                            <hr />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No messages found.</p>
            )}
        </div>
    );
};

export default DisplayMessages;
