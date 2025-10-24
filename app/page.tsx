import Footer from "@/components/Footer";
import Hero from "../components/Hero";
import AboutSection from "./about/page";
import About from "./about/page";
import ContactForm from "./contact/page";
import ContactPage from "./contact/page";
import ServicesSection from "./services/page";
import Services from "./services/page";

export default function Home() {
  return (
    <>
   
      <Hero id="home" />
      <AboutSection />
      <ServicesSection />
      <ContactForm />
    </>
  );
}
