import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from 'axios';
import SendMessage from "../common/SendMessage";

const ApplicationForm = () => {
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [messages, setMessages] = useState([]); // State to store messages

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    country: "",
    agreement: false,
  });

  useEffect(() => {
    const element = document.getElementById('showInterest');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const isFormComplete = () => {
    const { name, email, message, phone, country, agreement } = formData;
    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      message.trim() !== "" &&
      phone.trim() !== "" &&
      country.trim() !== "" &&
      agreement
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormComplete()) {
      setIsLoading(true);
      try {
        const response = await axios.post('https://skills2profits.onrender.com/messages/send', formData, {
          withCredentials: true
        });
        console.log('Message sent successfully', response.data);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          country: "",
          agreement: false,
        });
        setConfirmationMessage("Your message has been sent successfully!");
        setIsMessageSent(true);
      } catch (error) {
        console.error('Error sending message:', error);
        setConfirmationMessage("There was an error sending your message. Please try again.");
        setIsMessageSent(false);
      } finally {
        setIsLoading(false);
      }
    } else {
      alert('Please fill out all fields and agree to the terms');
    }
  };



  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="bg-green-100 p-2 rounded-md mb-8">
        <p className="text-green-800">
          <span className="text-bold bg-green-800 text-white text-xs">Hint</span> - Trading journal and analysis required later in the selection process.
        </p>
      </div>
      
      {confirmationMessage && (
        <div className={`mb-4 ${confirmationMessage.includes("error") ? "bg-red-100 text-red-600" : "text-green-800 bg-green-100"}`}>
          {confirmationMessage}
        </div>
      )}
      
      {isMessageSent && (
        <div className="mb-2">
          <a
            href="https://forms.gle/8zS1WzBjo4wC5iex9"
            className="text-sm bg-green-100 w-fit text-center mx-auto text-green-800 hover:underline"
          >
            Click for Next Steps
          </a>
        </div>
      )}
      
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
      />
      
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
      />
      
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
        Phone
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
      />
      
      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
        Country
      </label>
      <select
        id="country"
        name="country"
        value={formData.country}
        onChange={handleChange}
        required
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
      >
        <option value="">Select your country</option>
        {/* Add the full list of country options here */}
        {/* Country options here */}
      </select>
      
      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows="4"
        value={formData.message}
        onChange={handleChange}
        required
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
      ></textarea>
      
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          name="agreement"
          checked={formData.agreement}
          onChange={handleChange}
          className="form-checkbox text-green-600"
        />
        <span className="ml-2 text-sm text-gray-700">By selecting this, you are agreeing to further contact.</span>
      </label>
      
      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <SendMessage
          type="submit"
          className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
            formData.agreement && !isLoading
              ? "bg-green-600 hover:bg-green-700 focus:ring-green-500"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          onClick={() => console.log("Form Submit button clicked")}
          disabled={!formData.agreement || isLoading}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </SendMessage>
      </motion.div>

    </form>
  );
};

export default ApplicationForm;
