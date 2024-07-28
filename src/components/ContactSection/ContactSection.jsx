
import React from "react";
import ContactForm from "./ContactForm";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#001f3f] mb-12">
          Show Interest
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h3 className="text-2xl font-semibold text-[#001f3f] mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-700 mb-4">
              Have questions or ready to start profiting? Reach out
              now!
            </p>
            
            <div className="mb-4">
              <h4 className="font-semibold text-[#001f3f]">Email</h4>
              <p className="text-gray-700">info@skills2Profits.com</p>
            </div>
            
          </div>
          <div className="md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
