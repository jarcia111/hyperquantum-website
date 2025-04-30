import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import SuccessStories from "@/components/SuccessStories";
import CallToAction from "@/components/CallToAction";
import ContactForm from "@/components/ContactForm";
import SiteMap from "@/components/SiteMap";
import Footer from "@/components/Footer";
import NetworkAnimation from "@/components/NetworkAnimation";
import BackToTop from "@/components/BackToTop";
import SEO from "@/components/SEO";

export default function Home() {
  // Implement smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#') || href === '#') return;
      
      const targetElement = document.querySelector(href);
      if (!targetElement) return;
      
      e.preventDefault();
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset for fixed header
        behavior: 'smooth'
      });
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="bg-secondary font-inter text-primary overflow-x-hidden">
      <NetworkAnimation />
      <SEO 
        title="Hyperquantum | Automatización inteligente para PYMEs Colombianas"
        description="Impulsamos la transformación operativa de las pymes colombianas mediante soluciones de inteligencia artificial. Aumenta ventas y reduce costos con agentes inteligentes y procesos automatizados."
        keywords="automatización inteligente, agentes de IA, procesos automatizados, reducción de costos, aumento de ventas, pymes colombianas"
      />
      <Navbar />
      <main>
        <Hero />
        {/* <Clients /> */}
        <Services />
        <Benefits />
        <About />
        <SuccessStories />
        <CallToAction />
        <ContactForm />
        <SiteMap />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
