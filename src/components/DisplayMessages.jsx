// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const DisplayMessages = () => {
//     const [messages, setMessages] = useState([]);

//     useEffect(() => {
//         // Fetch messages from the backend API
//         const fetchMessages = async () => {
//             try {
//                 const response = await axios.get('/api/messages');
//                 console.log('Response Data From Display Messages Components:', response.data)
//                 setMessages(response.data); // Update state with fetched messages
//                 console.log(messages)
//             } catch (error) {
//                 console.error('Error fetching messages From Display Messages Components:', error);
//             }
//         };

//         fetchMessages();
//     }, []);

//     return (
//         <div>
//             <h2>Messages</h2>
//             {messages.length > 0 ? (
//                 <ul>
//                     {messages.map((message, index) => (
//                         <li key={index}>
//                             <strong>Name:</strong> {message.name}<br />
//                             <strong>Email:</strong> {message.email}<br />
//                             <strong>Phone:</strong> {message.phone}<br />
//                             <strong>Country:</strong> {message.country}<br />
//                             <strong>Message:</strong> {message.message}<br />
//                             <hr />
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>No messages found.</p>
//             )}
//         </div>
//     );
// };

// export default DisplayMessages;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const DisplayMessages = () => {
//     const [messages, setMessages] = useState([]);

//     useEffect(() => {
//         // Fetch messages from the backend API
//         const fetchMessages = async () => {
//             try {
//                 const response = await axios.get('https://skills2profits.onrender.com/api/messages');
//                 console.log('Response Data From Display Messages Components:', response.data);
//                 setMessages(response.data); // Update state with fetched messages
//             } catch (error) {
//                 console.error('Error fetching messages From Display Messages Components:', error);
//             }
//         };

//         fetchMessages();
//     }, []); // Empty dependency array to run only once on component mount

//     return (
//         <div>
//             <h2>Messages</h2>
//             {messages.length > 0 ? (
//                 <ul>
//                     {messages.map((message, index) => (
//                         <li key={index}>
//                             <strong>Name:</strong> {message.name}<br />
//                             <strong>Email:</strong> {message.email}<br />
//                             <strong>Phone:</strong> {message.phone}<br />
//                             <strong>Country:</strong> {message.country}<br />
//                             <strong>Message:</strong> {message.message}<br />
//                             <hr />
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>No messages found.</p>
//             )}
//         </div>
//     );
// };

// export default DisplayMessages;
import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplayMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch messages when the component mounts
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("https://skills2profits.onrender.com/messages/all", {
          withCredentials: true
        });
        setMessages(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching messages:", err);
        setError("Failed to load messages");
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  // Handle deleting a message
  const handleDelete = async (messageId) => {
    try {
      await axios.delete(`https://skills2profits.onrender.com/messages/${messageId}`, {
        withCredentials: true
      });
      setMessages((prevMessages) => prevMessages.filter((message) => message._id !== messageId));
    } catch (err) {
      console.error("Error deleting message:", err);
      setError("Failed to delete message");
    }
  };

  if (loading) return <p>Loading messages...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Your Messages</h2>
      {messages.length === 0 ? (
        <p>No messages to display</p>
      ) : (
        <ul>
          {messages.map((message) => (
            <li key={message._id}>
              <h3>{message.name}</h3>
              <p>{message.message}</p>
              <button onClick={() => handleDelete(message._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DisplayMessages;
