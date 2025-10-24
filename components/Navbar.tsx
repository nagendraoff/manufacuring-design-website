"use client";
import { useState, useEffect } from "react";

const sections = ["home", "about", "services", "contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-40% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/60 shadow-md">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center py-4">
        <div
          className="text-2xl font-bold text-blue-600 cursor-pointer"
          onClick={() => scrollTo("home")}
        >
          ABC Manufacturing
        </div>

        <ul className="hidden md:flex space-x-8">
          {sections.map((id) => (
            <li
              key={id}
              onClick={() => scrollTo(id)}
              className={`relative cursor-pointer font-medium transition text-gray-800 hover:text-blue-600 ${
                activeSection === id ? "text-blue-600" : ""
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
              {activeSection === id && (
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-600 rounded-full transition-all"></span>
              )}
            </li>
          ))}
        </ul>

        <div className="md:hidden cursor-pointer" onClick={() => setMobileOpen(!mobileOpen)}>
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800"></div>
        </div>
      </div>

      {mobileOpen && (
        <ul className="md:hidden bg-white/90 backdrop-blur-md shadow-lg flex flex-col items-center space-y-4 py-6">
          {sections.map((id) => (
            <li
              key={id}
              onClick={() => scrollTo(id)}
              className={`cursor-pointer font-medium text-lg transition ${
                activeSection === id ? "text-blue-600" : "text-gray-800"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
