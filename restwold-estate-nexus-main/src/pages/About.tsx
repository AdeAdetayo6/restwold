
import React from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
