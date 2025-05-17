
import React from "react";
import Navbar from "@/components/Navbar";
import DataProtectionPolicy from "@/components/DataProtectionPolicy";
import Footer from "@/components/Footer";

const DataProtectionPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <DataProtectionPolicy />
      </div>
      <Footer />
    </div>
  );
};

export default DataProtectionPolicyPage;
