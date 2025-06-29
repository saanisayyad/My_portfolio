import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="Contact"
      className="scroll-mt-15 min-h-screen bg-blue-50 px-10 py-10"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6 tracking-wide underline underline-offset-8">
          CONTACT
        </h1>
        <div className="text-center mb-16">
          <p className="text-gray-600 mt-2">Feel free to get in touch</p>
        </div>

        {/* Contact Info */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {/* Phone */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
            <div className="flex justify-center mb-3 text-blue-700">
              <FaPhoneAlt size={24} />
            </div>
            <h3 className="text-lg font-semibold text-center">Phone</h3>
            <p className="text-gray-600 mt-1 text-center">
              <a
                href="tel:+918149268024"
                className="text-blue-600 hover:underline"
              >
                +91 8149268024
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
            <div className="flex justify-center mb-3 text-blue-700">
              <FaEnvelope size={24} />
            </div>
            <h3 className="text-lg font-semibold text-center">Email</h3>
            <p className="text-gray-600 mt-1 text-center">
              <a
                href="mailto:saanisayyed@gmail.com"
                className="text-blue-600 hover:underline"
              >
                saanisayyed@gmail.com
              </a>
            </p>
          </div>

          {/* LinkedIn */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
            <div className="flex justify-center mb-3 text-blue-700">
              <FaLinkedin size={28} />
            </div>
            <h3 className="text-lg font-semibold text-center">LinkedIn</h3>
            <p className="mt-1 text-center">
              <a
                href="https://www.linkedin.com/in/mohammadsaani-sayyad-4b7936236/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/md-saani
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
