import React from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#001f3f] mb-12">
          Contact Us
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h3 className="text-2xl font-semibold text-[#001f3f] mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-700 mb-4">
              Have questions or ready to transform your outdoor space? Reach out
              to us!
            </p>
            <div className="mb-4">
              <h4 className="font-semibold text-[#001f3f]">Phone</h4>
              <p className="text-gray-700">123-456-7890</p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-[#001f3f]">Email</h4>
              <p className="text-gray-700">info@skills2Profits.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#001f3f]">Address</h4>
              <p className="text-gray-700">
                AZ, USA.
              </p>
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
