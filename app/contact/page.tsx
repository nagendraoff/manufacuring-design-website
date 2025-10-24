"use client";

const ContactForm = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12" data-aos="fade-up">
          Contact Us
        </h2>
        <form className="grid gap-6" data-aos="fade-up" data-aos-delay="200">
          <input type="text" placeholder="Name" className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          <input type="email" placeholder="Email" className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          <textarea placeholder="Message" rows={5} className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
          <button type="submit" className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition transform hover:scale-105">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
