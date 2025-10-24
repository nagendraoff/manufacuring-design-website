"use client";

const services = [
  {
    title: "Product Design",
    desc: "Custom industrial design and prototyping.",
    icon: "/images/icon1.svg",
  },
  {
    title: "Precision Manufacturing",
    desc: "High-quality production using advanced machinery.",
    icon: "/images/icon2.svg",
  },
  {
    title: "Maintenance & Support",
    desc: "Reliable after-sales service and ongoing support.",
    icon: "/images/icon3.svg",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900" data-aos="fade-up">
          Our <span className="text-blue-600">Services</span>
        </h2>
        <p className="text-gray-700 mt-4" data-aos="fade-up" data-aos-delay="100">
          Tailored solutions for all your manufacturing needs.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {services.map((service, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="bg-white/30 backdrop-blur-md p-8 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            <img src={service.icon} alt={service.title} className="mx-auto mb-4 w-12 h-12 transition-transform duration-500 hover:-translate-y-1" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
            <p className="text-gray-700">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
