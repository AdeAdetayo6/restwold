
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  process: { title: string; description: string }[];
  benefits: string[];
  cta: string;
  image: string;
}

const serviceData: Record<string, ServiceData> = {
  "deal-sourcing": {
    title: "Luxury Deal Sourcing",
    subtitle: "Access to Exclusive Off-Market Opportunities",
    description: "Our Deal Sourcing service connects discerning clients with exceptional properties that often never reach the open market. With our extensive network of contacts in the luxury real estate sector, we identify and secure exclusive opportunities that align with your specific investment criteria or lifestyle requirements.",
    process: [
      {
        title: "Client Consultation",
        description: "We begin with a detailed consultation to understand your specific requirements, preferences, and investment goals.",
      },
      {
        title: "Market Research & Property Identification",
        description: "Our team conducts extensive research to identify properties that match your criteria, leveraging our network for off-market opportunities.",
      },
      {
        title: "Due Diligence & Analysis",
        description: "Each property undergoes thorough evaluation, including financial analysis, structural assessment, and location research.",
      },
      {
        title: "Presentation & Selection",
        description: "We present a curated selection of opportunities with comprehensive documentation and arrange viewings if required.",
      },
      {
        title: "Negotiation & Acquisition",
        description: "Once you identify a preferred property, we handle all negotiations and transaction management to secure optimal terms.",
      },
    ],
    benefits: [
      "Access to exclusive off-market properties",
      "Personalized search based on your specific criteria",
      "Expert negotiation to secure favorable terms",
      "Comprehensive due diligence on all properties",
      "Complete discretion and confidentiality throughout the process",
    ],
    cta: "Looking for a specific type of property investment? Contact us to discuss your requirements and discover hidden opportunities in today's market.",
    image: "https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=2070&auto=format&fit=crop",
  },
  "property-trading": {
    title: "Property Trading",
    subtitle: "Strategic Acquisition and Disposition of High-Value Assets",
    description: "Our Property Trading service facilitates the efficient acquisition and disposition of high-value properties, ensuring optimal outcomes for both buyers and sellers. We combine market intelligence, negotiation expertise, and transaction management to create smooth, advantageous property exchanges.",
    process: [
      {
        title: "Initial Valuation & Strategy",
        description: "For sellers, we provide accurate property valuation and develop a strategic marketing or private sale approach.",
      },
      {
        title: "Buyer/Seller Matching",
        description: "We connect properties with our network of qualified buyers or help buyers identify suitable properties through our extensive contacts.",
      },
      {
        title: "Transaction Structuring",
        description: "We design the optimal transaction structure considering tax implications, financing, and other client-specific considerations.",
      },
      {
        title: "Negotiation & Documentation",
        description: "Our team handles all negotiations and ensures proper documentation throughout the transaction process.",
      },
      {
        title: "Completion & Handover",
        description: "We manage the completion process, including all final inspections, settlements, and property handover.",
      },
    ],
    benefits: [
      "Access to a network of qualified buyers and sellers",
      "Strategic pricing and positioning in the market",
      "Expert negotiation to maximize returns",
      "Efficient transaction management",
      "Discretion and confidentiality for sensitive transactions",
    ],
    cta: "Whether you're looking to acquire a premium property or divest a significant asset, our trading expertise ensures optimal results. Contact us to discuss your specific requirements.",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2080&auto=format&fit=crop",
  },
  "property-management": {
    title: "Bespoke Property Management",
    subtitle: "Comprehensive Care for Luxury Assets",
    description: "Our Bespoke Property Management service provides comprehensive oversight and care for high-value residential and investment properties. We take a proactive approach to maintaining and enhancing your property's value while ensuring peace of mind for owners, whether they are in residence, absent, or utilizing the property as an investment.",
    process: [
      {
        title: "Initial Assessment & Strategy",
        description: "We conduct a thorough property assessment and develop a tailored management strategy aligned with your objectives.",
      },
      {
        title: "Tenant Acquisition & Management",
        description: "For investment properties, we identify premium tenants, handle all leasing aspects, and maintain ongoing tenant relationships.",
      },
      {
        title: "Maintenance & Preservation",
        description: "Our team coordinates routine maintenance, emergency responses, and preservation of significant architectural or historical features.",
      },
      {
        title: "Financial Management & Reporting",
        description: "We provide detailed financial oversight including rent collection, expense management, and regular comprehensive reporting.",
      },
      {
        title: "Concierge & Additional Services",
        description: "From arranging housekeeping to organizing special events, our concierge services cater to the unique needs of luxury property owners.",
      },
    ],
    benefits: [
      "Protection and enhancement of property value",
      "Proactive maintenance and issue resolution",
      "Premium tenant acquisition and retention",
      "Transparent financial management and reporting",
      "Peace of mind through comprehensive oversight",
    ],
    cta: "Experience the difference that professional, bespoke property management can make. Contact us to discuss how we can preserve and enhance the value of your property.",
    image: "https://images.unsplash.com/photo-1619542402915-dcaf30e4e2a1?q=80&w=2070&auto=format&fit=crop",
  },
};

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [service, setService] = useState<ServiceData | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (serviceId && serviceId in serviceData) {
      setService(serviceData[serviceId]);
    }
  }, [serviceId]);

  if (!service) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-primary-dark mb-4">Service Not Found</h1>
            <p className="mb-6">The requested service information is not available.</p>
            <Link to="/services">
              <Button className="bg-primary hover:bg-primary-light text-white">
                Return to Services
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[400px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-black/50"></div>
          </div>
          <div className="relative h-full container mx-auto flex items-center">
            <div className="text-white max-w-3xl">
              <Link
                to="/services"
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl md:text-2xl text-white/90">{service.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-primary-dark mb-6">Overview</h2>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-primary-dark mb-6">Our Process</h2>
                <div className="space-y-8">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex">
                      <div className="mr-6">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-medium">
                          {index + 1}
                        </div>
                        {index < service.process.length - 1 && (
                          <div className="h-full w-0.5 bg-gray-200 mx-auto mt-2"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary-dark mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-neutral p-8 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold text-primary-dark mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-gray-700 mb-6">{service.cta}</p>
                  <Button className="w-full bg-primary hover:bg-primary-light text-white">
                    Request Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetail;
