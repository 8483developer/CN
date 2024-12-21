import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log("Form Submitted: ", formData);
    // Here you can integrate your backend or API for sending emails
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 pt-10 pb-3">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
        <p className="text-gray-600 text-center mb-8">
          Have questions or need assistance? Send us a message!
        </p>
        {formSubmitted ? (
          <div className="text-center text-green-600 font-semibold">
            Thank you for contacting us! We will get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="mt-2 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-medium py-3 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
        <div className="mt-8 text-center">
          <h2 className="text-lg font-semibold text-gray-800">Our Address</h2>
          <p className="text-gray-600">123 Furniture Street, Design City, Country</p>
          <p className="text-gray-600">Phone: +123 456 7890</p>
          <p className="text-gray-600">Email: support@craftnest.com</p>
        </div>
      </div>
      <br />
    </div>
  );
};

export default ContactUs;
