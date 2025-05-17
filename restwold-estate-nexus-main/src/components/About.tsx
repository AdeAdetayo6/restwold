
import React from "react";
import { Button } from "@/components/ui/button";

const About: React.FC = () => {
  return (
    <section className="section-padding bg-neutral" id="about">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Legacy & Expertise
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-700 mb-6">
              Restwold was established with a singular vision: to provide
              unparalleled expertise in the luxury real estate market. Our
              founder's extensive background in property investment and wealth
              management laid the foundation for what has become a trusted name
              in real estate services.
            </p>
            <p className="text-gray-700 mb-6">
              Our philosophy centers on discretion, long-term partnerships, and
              value. We understand that each client's needs are unique,
              and we tailor our approach accordingly. Whether identifying
              off-market investment opportunities, negotiating complex
              transactions, or managing properties, we bring the same
              level of dedication and effort.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1973&auto=format&fit=crop"
                alt="Luxury Property"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 hidden md:block">
              <div className="bg-primary p-8 rounded-lg shadow-xl">
                <p className="text-white italic font-playfair text-lg">
                  "Our commitment to excellence and discretion has earned us the
                  trust of discerning clients worldwide."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center gap-8 mt-24">
          <div className="text-center">
            <span className="text-3xl font-playfair font-bold text-primary">
              98%
            </span>
            <p className="text-gray-600">Client Retention</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-playfair font-bold text-primary">
              6
            </span>
            <p className="text-gray-600">Pending Deals</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
