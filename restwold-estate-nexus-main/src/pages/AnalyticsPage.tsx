
import React from "react";
import Navbar from "@/components/Navbar";
import Analytics from "@/components/Analytics";
import Footer from "@/components/Footer";

const AnalyticsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1E1511]">
      <Navbar />
      <Analytics />
      <Footer />
    </div>
  );
};

export default AnalyticsPage;
