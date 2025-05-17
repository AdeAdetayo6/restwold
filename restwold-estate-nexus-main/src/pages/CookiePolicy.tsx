
import React from "react";
import Navbar from "@/components/Navbar";
import CookiePolicy from "@/components/CookiePolicy";
import Footer from "@/components/Footer";

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <CookiePolicy />
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicyPage;
