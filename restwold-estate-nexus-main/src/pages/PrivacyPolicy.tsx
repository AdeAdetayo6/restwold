
import React from "react";
import Navbar from "@/components/Navbar";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import Footer from "@/components/Footer";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <PrivacyPolicy />
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
