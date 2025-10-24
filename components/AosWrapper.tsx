"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosWrapper = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return null; // Just initializes AOS
};

export default AosWrapper;
