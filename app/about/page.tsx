"use client";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            About <span className="text-blue-600">ABC Manufacturing</span>
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            We combine <span className="font-semibold text-blue-600">precision engineering</span> with modern technology to deliver top-tier manufacturing solutions.
          </p>
          <p className="text-gray-700 text-lg">
            Our team ensures quality, reliability, and innovation in every project.
          </p>
        </div>
        <div data-aos="fade-left">
          <img
            src="/images/about-hero.jpg"
            alt="About Us"
            className="rounded-3xl shadow-2xl object-cover w-full h-96 md:h-[28rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
