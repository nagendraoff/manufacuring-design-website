"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface HeroProps {
  id?: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
  <section
      id={id} className="relative h-screen flex items-center justify-center text-center bg-gradient-to-r from-blue-500 to-teal-400 overflow-hidden"
    >
      <div data-aos="fade-up" className="max-w-3xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
          Precision <span className="text-yellow-300">Manufacturing</span> Solutions
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-8">
          Delivering high-quality industrial products with modern technology and expertise.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition transform">
          Request a Quote
        </button>
      </div>
      {/* Optional subtle moving shapes */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute bg-white/10 rounded-full w-72 h-72 top-10 left-10 animate-pulse"></div>
        <div className="absolute bg-white/10 rounded-full w-96 h-96 bottom-10 right-10 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
