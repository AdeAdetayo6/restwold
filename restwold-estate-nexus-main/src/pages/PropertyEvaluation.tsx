
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyEvaluation from "@/components/PropertyEvaluation";

const PropertyEvaluationPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <PropertyEvaluation />
      </div>
      <Footer />
    </div>
  );
};

export default PropertyEvaluationPage;
