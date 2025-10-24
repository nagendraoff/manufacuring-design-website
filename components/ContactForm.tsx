"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent by ${formData.name}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto text-left">
      <div>
        <label className="block mb-2 text-gray-700 font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block mb-2 text-gray-700 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block mb-2 text-gray-700 font-medium">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
