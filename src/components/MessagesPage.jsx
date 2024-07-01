import React from 'react';
import DisplayMessages from './DisplayMessages'; // Import your DisplayMessages component

const MessagesPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Messages</h1>
            <DisplayMessages />
        </div>
    );
};

export default MessagesPage;
