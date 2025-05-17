
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FAQs />
      
      {/* Exclusive Service Section */}
      <section className="section-padding bg-primary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-5 pointer-events-none">
          <svg width="600" height="600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0C22.4 0 0 22.4 0 50C0 77.6 22.4 100 50 100C77.6 100 100 77.6 100 50C100 22.4 77.6 0 50 0ZM50 90C27.9 90 10 72.1 10 50C10 27.9 27.9 10 50 10C72.1 10 90 27.9 90 50C90 72.1 72.1 90 50 90Z" fill="#FCF1EA"/>
            <path d="M50 20C33.4 20 20 33.4 20 50C20 66.6 33.4 80 50 80C66.6 80 80 66.6 80 50C80 33.4 66.6 20 50 20ZM50 70C39 70 30 61 30 50C30 39 39 30 50 30C61 30 70 39 70 50C70 61 61 70 50 70Z" fill="#FCF1EA"/>
            <path d="M50 40C44.5 40 40 44.5 40 50C40 55.5 44.5 60 50 60C55.5 60 60 55.5 60 50C60 44.5 55.5 40 50 40Z" fill="#FCF1EA"/>
          </svg>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-5 pointer-events-none">
          <svg width="600" height="600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="100" height="100" stroke="#FCF1EA" strokeWidth="2" fill="none"/>
            <rect x="10" y="10" width="80" height="80" stroke="#FCF1EA" strokeWidth="1" fill="none"/>
            <line x1="0" y1="0" x2="100" y2="100" stroke="#FCF1EA" strokeWidth="1"/>
            <line x1="0" y1="100" x2="100" y2="0" stroke="#FCF1EA" strokeWidth="1"/>
            <line x1="50" y1="0" x2="50" y2="100" stroke="#FCF1EA" strokeWidth="1"/>
            <line x1="0" y1="50" x2="100" y2="50" stroke="#FCF1EA" strokeWidth="1"/>
          </svg>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-lg md:text-lg font-medium text-secondary mb-2">
            Exclusive Service
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-neutral mb-4">
            Unparalleled Expertise at Your Service
          </h3>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-neutral max-w-3xl mx-auto mb-8">
            Experience the difference of working with true experts in luxury real estate. 
            Our team brings decades of combined experience and market knowledge to every client relationship.
          </p>
          <Button 
            size="lg"
            className="bg-neutral hover:bg-neutral text-primary hover:text-primary-dark border border-secondary rounded-none"
          >
            Schedule a Consultation
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
