import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const portfolioItems = [
  {
    id: 1,
    title: "Historic Estate",
    location: "Cotswolds",
    category: "acquisition",
    challenge: "Source off-market historic estate with specific architectural features",
    approach: "Leveraged our exclusive network to identify a suitable property before it reached the open market",
    result: "Secured property 15% below market value due to off-market opportunity",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Luxury Portfolio",
    location: "London",
    category: "management",
    challenge: "Streamline management of diverse portfolio across multiple locations",
    approach: "Implemented bespoke management structure with dedicated property managers",
    result: "Increased rental yield by 12% while reducing maintenance costs",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Country Estate",
    location: "Sussex",
    category: "management",
    challenge: "Enhance rental yield while preserving historic property features",
    approach: "Balanced modernization with heritage preservation in management approach",
    result: "Maintained full occupancy with premium tenants and increased rental income by 15%",
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2084&auto=format&fit=crop",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section className="section-padding bg-neutral bg-opacity-60" id="portfolio">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Our Portfolio
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A curated selection of our successful property engagements,
            showcasing our expertise across various property types and locations.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="acquisition">Deal Sourcing</TabsTrigger>
              <TabsTrigger value="trading">Property Trading</TabsTrigger>
              <TabsTrigger value="management">Property Management</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          {["acquisition", "trading", "management"].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <PortfolioCard key={item.id} item={item} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            View More Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

interface PortfolioCardProps {
  item: {
    id: number;
    title: string;
    location: string;
    category: string;
    challenge: string;
    approach: string;
    result: string;
    image: string;
  };
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-0 group">
      <div className="h-60 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl text-primary-dark">{item.title}</CardTitle>
            <CardDescription>{item.location}</CardDescription>
          </div>
          <span className="text-xs uppercase tracking-wide px-2 py-1 rounded bg-neutral text-primary-light">
            {item.category === "acquisition"
              ? "Deal Sourcing"
              : item.category === "trading"
              ? "Property Trading"
              : "Management"}
          </span>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="space-y-2">
          <div>
            <span className="text-sm font-medium text-primary">Challenge:</span>
            <p className="text-sm text-gray-600">{item.challenge}</p>
          </div>
          <div>
            <span className="text-sm font-medium text-primary">Result:</span>
            <p className="text-sm text-gray-600">{item.result}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="text-primary p-0">
          View Case Study
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Portfolio;
