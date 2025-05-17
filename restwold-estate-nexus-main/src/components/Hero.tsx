
import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-black/20"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl text-white flex flex-col items-center">
          <img 
            src="/lovable-uploads/f2964714-fc15-4526-9dc9-0f3b03412c55.png" 
            alt="Restwold Novelty Logo" 
            className="w-[180px] h-auto mb-2"
          />
          <h1 className="text-[60px] font-bold text-secondary leading-none">
            Serve Value, Always.
          </h1>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-1 h-16 relative overflow-hidden">
          <span className="absolute top-0 left-0 w-full h-full bg-secondary opacity-30"></span>
          <span className="absolute top-0 left-0 w-full h-1/3 bg-secondary animate-[bounce_2s_infinite]"></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
