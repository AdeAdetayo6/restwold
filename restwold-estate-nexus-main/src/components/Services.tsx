
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    id: "deal-sourcing",
    title: "Deal Sourcing",
    description:
      "We identify and secure exclusive, off-market opportunities through our extensive network and market intelligence.",
    icon: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
    link: "/services/deal-sourcing",
  },
  {
    id: "property-trading",
    title: "Property Trading",
    description:
      "We facilitate the acquisition and disposition of high-value properties with expert negotiation skills and market knowledge.",
    icon: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070&auto=format&fit=crop",
    link: "/services/property-trading",
  },
  {
    id: "property-management",
    title: "Property Management",
    description:
      "We provide comprehensive, high-touch management services for luxury assets, protecting and enhancing your property's value.",
    icon: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop",
    link: "/services/property-management",
  },
];

const Services: React.FC = () => {
  return (
    <section className="section-padding bg-neutral bg-opacity-40" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Our Premier Services
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Restwold Novelty Ltd offers a comprehensive suite of services
            designed to meet the needs of discerning property investors and
            owners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-neutral bg-opacity-30 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link to={service.link}>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
