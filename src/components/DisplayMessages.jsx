// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const DisplayMessages = () => {
// //     const [messages, setMessages] = useState([]);

// //     useEffect(() => {
// //         // Fetch messages from the backend API
// //         const fetchMessages = async () => {
// //             try {
// //                 const response = await axios.get('/api/messages');
// //                 console.log('Response Data From Display Messages Components:', response.data)
// //                 setMessages(response.data); // Update state with fetched messages
// //                 console.log(messages)
// //             } catch (error) {
// //                 console.error('Error fetching messages From Display Messages Components:', error);
// //             }
// //         };

// //         fetchMessages();
// //     }, []);

// //     return (
// //         <div>
// //             <h2>Messages</h2>
// //             {messages.length > 0 ? (
// //                 <ul>
// //                     {messages.map((message, index) => (
// //                         <li key={index}>
// //                             <strong>Name:</strong> {message.name}<br />
// //                             <strong>Email:</strong> {message.email}<br />
// //                             <strong>Phone:</strong> {message.phone}<br />
// //                             <strong>Country:</strong> {message.country}<br />
// //                             <strong>Message:</strong> {message.message}<br />
// //                             <hr />
// //                         </li>
// //                     ))}
// //                 </ul>
// //             ) : (
// //                 <p>No messages found.</p>
// //             )}
// //         </div>
// //     );
// // };

// // export default DisplayMessages;


// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const DisplayMessages = () => {
// //     const [messages, setMessages] = useState([]);

// //     useEffect(() => {
// //         // Fetch messages from the backend API
// //         const fetchMessages = async () => {
// //             try {
// //                 const response = await axios.get('https://skills2profits.onrender.com/api/messages');
// //                 console.log('Response Data From Display Messages Components:', response.data);
// //                 setMessages(response.data); // Update state with fetched messages
// //             } catch (error) {
// //                 console.error('Error fetching messages From Display Messages Components:', error);
// //             }
// //         };

// //         fetchMessages();
// //     }, []); // Empty dependency array to run only once on component mount

// //     return (
// //         <div>
// //             <h2>Messages</h2>
// //             {messages.length > 0 ? (
// //                 <ul>
// //                     {messages.map((message, index) => (
// //                         <li key={index}>
// //                             <strong>Name:</strong> {message.name}<br />
// //                             <strong>Email:</strong> {message.email}<br />
// //                             <strong>Phone:</strong> {message.phone}<br />
// //                             <strong>Country:</strong> {message.country}<br />
// //                             <strong>Message:</strong> {message.message}<br />
// //                             <hr />
// //                         </li>
// //                     ))}
// //                 </ul>
// //             ) : (
// //                 <p>No messages found.</p>
// //             )}
// //         </div>
// //     );
// // };

// // export default DisplayMessages;
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const DisplayMessages = () => {
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Fetch messages when the component mounts
//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const response = await axios.get("https://skills2profits.onrender.com/messages/all", {
//           withCredentials: true
//         });
//         setMessages(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching messages:", err);
//         setError("Failed to load messages");
//         setLoading(false);
//       }
//     };

//     fetchMessages();
//   }, []);

//   // Handle deleting a message
//   const handleDelete = async (messageId) => {
//     try {
//       await axios.delete(`https://skills2profits.onrender.com/messages/${messageId}`, {
//         withCredentials: true
//       });
//       setMessages((prevMessages) => prevMessages.filter((message) => message._id !== messageId));
//     } catch (err) {
//       console.error("Error deleting message:", err);
//       setError("Failed to delete message");
//     }
//   };

//   if (loading) return <p>Loading messages...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h2>Your Messages</h2>
//       {messages.length === 0 ? (
//         <p>No messages to display</p>
//       ) : (
//         <ul>
//           {messages.map((message) => (
//             <li key={message._id}>
//               <h3>{message.name}</h3>
//               <p>{message.message}</p>
//               <button onClick={() => handleDelete(message._id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default DisplayMessages;


// export default MessagesList;
import React, { useState, useEffect } from 'react';

const MessagesList = () => {
  const [messages, setMessages] = useState([]);
  const [expandedMessageId, setExpandedMessageId] = useState(null);

  // Fetch all messages on component mount
  useEffect(() => {
    fetch('https://skills2profits.onrender.com/messages/all')
      .then((response) => response.json())
      .then((fetchedMessages) => {
        setMessages(fetchedMessages);
        console.log(fetchedMessages);
      })
      .catch((error) => {
        console.error('Error Fetching Messages:', error);
      });
  }, []);

  // Function to delete a message
  const deleteMessage = (id) => {
    fetch(`https://skills2profits.onrender.com/messages/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setMessages(messages.filter((message) => message._id !== id));
        } else {
          throw new Error('Failed to delete message');
        }
      })
      .catch((error) => {
        console.error('Error deleting message:', error);
      });
  };

  // Function to toggle the expanded state of a message
  const toggleExpand = (id) => {
    setExpandedMessageId(expandedMessageId === id ? null : id);
  };

  return (
    <div className="overflow-x-auto mt-24">
      <h2 className="text-2xl font-bold mb-4">Your Message Inbox</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Customer Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Messages
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Expand</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {messages.map((message) => (
            <React.Fragment key={message._id}>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{message.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{message.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{message.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{message.message}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{message._id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => {
                      toggleExpand(message._id);
                      console.log('The messageid: ', message._id);
                    }}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Expand
                  </button>
                </td>
                <td>
                  <button
                    className="delete-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteMessage(message._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
              {expandedMessageId === message._id && (
                <tr>
                  <td colSpan="6" className="px-6 py-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p><strong>Customer Name:</strong> {message.name}</p>
                      <p><strong>Email:</strong> {message.email}</p>
                      <p><strong>Cell Phone:</strong> {message.phone}</p>
                      <p><strong>Message:</strong> {message.message}</p>
                      <p><strong>Agreement:</strong> {message.agreement === true ? 'Yes' : 'No'}</p>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MessagesList;
