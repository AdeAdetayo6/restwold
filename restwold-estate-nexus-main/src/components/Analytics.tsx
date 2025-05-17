import React, { useState } from "react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LabelList
} from "recharts";
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
import { ChartContainer } from "./ui/chart";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Multi-city price data
const multiCityData = [
  { month: "Jan", London: 850000, Manchester: 320000, Birmingham: 290000, Leeds: 270000 },
  { month: "Feb", London: 860000, Manchester: 325000, Birmingham: 295000, Leeds: 275000 },
  { month: "Mar", London: 875000, Manchester: 335000, Birmingham: 305000, Leeds: 280000 },
  { month: "Apr", London: 890000, Manchester: 340000, Birmingham: 310000, Leeds: 285000 },
  { month: "May", London: 910000, Manchester: 350000, Birmingham: 320000, Leeds: 290000 },
  { month: "Jun", London: 920000, Manchester: 355000, Birmingham: 325000, Leeds: 295000 },
];

// Growth data
const growthData = [
  { year: "2018", Residential: 4.2, Commercial: 3.8, Luxury: 5.7 },
  { year: "2019", Residential: 3.8, Commercial: 3.0, Luxury: 4.9 },
  { year: "2020", Residential: 1.4, Commercial: -2.5, Luxury: 2.1 },
  { year: "2021", Residential: 7.1, Commercial: 1.8, Luxury: 8.8 },
  { year: "2022", Residential: 5.9, Commercial: 4.3, Luxury: 6.5 },
  { year: "2023", Residential: 4.7, Commercial: 3.9, Luxury: 6.8 },
  { year: "2024", Residential: 5.0, Commercial: 4.2, Luxury: 7.2 },
  { year: "Q1 2025", Residential: 5.5, Commercial: 4.5, Luxury: 7.6 },
];

// UK Region data
const ukRegionsData = [
  { name: "London", value: 42, fill: "#E6B373" },
  { name: "South East", value: 18, fill: "#4CAF50" },
  { name: "South West", value: 11, fill: "#FFD700" },
  { name: "Midlands", value: 9, fill: "#FF5722" },
  { name: "North West", value: 8, fill: "#2196F3" },
  { name: "Scotland", value: 7, fill: "#9C27B0" },
  { name: "Wales", value: 3, fill: "#03A9F4" },
  { name: "Northern Ireland", value: 2, fill: "#8BC34A" },
];

// Property types data
const propertyTypesData = [
  { name: "Detached", value: 35, fill: "#E6B373" },
  { name: "Semi-detached", value: 25, fill: "#4CAF50" },
  { name: "Terraced", value: 20, fill: "#FFD700" },
  { name: "Flat/Apartment", value: 15, fill: "#FF5722" },
  { name: "Bungalow", value: 5, fill: "#9C27B0" },
];

// Regional growth data
const regionalGrowthData = [
  { region: "North West", growth: 4.8 },
  { region: "East Midlands", growth: 5.2 },
  { region: "East", growth: 6.3 },
  { region: "South East", growth: 7.8 },
  { region: "Wales", growth: 4.5 },
  { region: "Northern Ireland", growth: 3.9 },
];

// Market insights data
const marketInsightsData = [
  {
    title: "Luxury Market Resilience",
    date: "March 25, 2025",
    content: "The luxury real estate market continues to demonstrate remarkable resilience despite broader economic uncertainties. Prime properties in desirable locations are maintaining strong valuations, particularly those offering unique features or historical significance."
  },
  {
    title: "Emerging Neighborhood Spotlight",
    date: "February 18, 2025",
    content: "We've identified several emerging neighborhoods showing potential for significant appreciation over the next 3-5 years. These areas combine improving infrastructure, cultural development, and increasing demand from discerning buyers."
  },
  {
    title: "Sustainable Luxury Trends",
    date: "January 20, 2025",
    content: "Sustainability features are increasingly valued in the luxury market. Properties with energy efficiency, sustainable materials, and environmentally conscious design are commanding premium prices and attracting a new segment of environmentally aware luxury buyers."
  }
];

// Analytics categories
const categories = [
  { id: "trends", label: "Price Trends" },
  { id: "growth", label: "Growth Analysis" },
  { id: "distribution", label: "Market Distribution" },
  { id: "regional", label: "Regional Analysis" },
  { id: "insights", label: "Market Insights" },
];

const Analytics: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("trends");

  const renderPriceChart = () => (
    <div className="h-[400px] mb-8">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={multiCityData}
          margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#5D4037" opacity={0.3} />
          <XAxis 
            dataKey="month" 
            stroke="#E6B373" 
            tick={{ fill: "#E6B373" }}
          />
          <YAxis 
            stroke="#E6B373" 
            tick={{ fill: "#E6B373" }}
            tickFormatter={(value) => `£${(value / 1000)}k`}
            domain={['dataMin - 50000', 'dataMax + 50000']}
          />
          <Tooltip 
            formatter={(value) => [`£${value.toLocaleString()}`, ""]}
            contentStyle={{ backgroundColor: "#3E2723", color: "#E6B373", border: "1px solid #5D4037" }}
            labelStyle={{ color: "#E6B373" }}
          />
          <Legend 
            verticalAlign="bottom"
            wrapperStyle={{ paddingTop: "15px" }}
          />
          <Line 
            type="monotone" 
            dataKey="London" 
            stroke="#FFD700" 
            strokeWidth={3}
            dot={{ fill: "#FFD700", r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="Manchester" 
            stroke="#FF5722" 
            strokeWidth={3}
            dot={{ fill: "#FF5722", r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="Birmingham" 
            stroke="#4CAF50" 
            strokeWidth={3}
            dot={{ fill: "#4CAF50", r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="Leeds" 
            stroke="#2196F3" 
            strokeWidth={3}
            dot={{ fill: "#2196F3", r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="relative mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#3E2723] p-6 rounded border border-secondary/30">
            <h4 className="text-secondary mb-2 font-bold">London Market</h4>
            <p className="text-white/80">8.2% YoY increase with strong growth in premium neighborhoods.</p>
          </div>
          <div className="bg-[#3E2723] p-6 rounded border border-secondary/30">
            <h4 className="text-secondary mb-2 font-bold">Northern Cities</h4>
            <p className="text-white/80">12.4% average returns in Manchester and Leeds investment properties.</p>
          </div>
          <div className="bg-[#3E2723] p-6 rounded border border-secondary/30">
            <h4 className="text-secondary mb-2 font-bold">Market Forecast</h4>
            <p className="text-white/80">Projected 6-8% growth in metro areas through Q4 2025.</p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Button 
            className="bg-secondary text-[#1E1511] hover:bg-secondary/90 px-10 py-6 text-lg"
          >
            Download Full Report
          </Button>
        </div>
      </div>
    </div>
  );

  const renderGrowthChart = () => (
    <div className="p-6 bg-[#FFFFFF] rounded-lg mb-8">
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-[#000000]">Annual Property Price Growth (%)</h3>
        <p className="text-sm text-[#555555]">Year-on-year growth across property sectors through Q1 2025</p>
      </div>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={growthData}
            margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#CCCCCC" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis
              tickFormatter={(value) => `${value}`}
              domain={[-3, 9]}
              label={{ value: "Growth (%)", angle: -90, position: "insideLeft", style: { textAnchor: "middle" } }}
            />
            <Tooltip formatter={(value) => [`${value}%`, ""]} />
            <Legend />
            <Bar dataKey="Residential" fill="#1A1F2C" />
            <Bar dataKey="Commercial" fill="#FEC6A1" />
            <Bar dataKey="Luxury" fill="#004D3F" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="text-center mt-6 text-[#333333]">
        <p className="mb-4">
          The luxury sector has consistently outperformed standard residential and commercial properties, 
          offering superior returns especially during the post-pandemic recovery.
        </p>
        <Button 
          className="bg-[#004D3F] text-white hover:bg-[#003D30]"
        >
          Download Full Report
        </Button>
      </div>
    </div>
  );

  const renderMarketDistributionCharts = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="p-6 bg-[#FFFFFF] rounded-lg">
        <div className="text-center mb-4">
          <h3 className="text-2xl font-bold text-[#000000]">UK Property Distribution by Region (2025)</h3>
          <p className="text-sm text-[#555555]">Percentage of total property value by region</p>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={ukRegionsData}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {ukRegionsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, ""]} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="p-6 bg-[#FFFFFF] rounded-lg">
        <div className="text-center mb-4">
          <h3 className="text-2xl font-bold text-[#000000]">Property Types in Premium Market (2025)</h3>
          <p className="text-sm text-[#555555]">Distribution by property category</p>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={propertyTypesData}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {propertyTypesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, ""]} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="col-span-1 md:col-span-2 text-center mt-4">
        <Button 
          className="bg-[#004D3F] text-white hover:bg-[#003D30]"
        >
          View Regional Analysis
        </Button>
      </div>
    </div>
  );

  const renderRegionalAnalysis = () => (
    <div className="p-6 bg-[#FFFFFF] rounded-lg mb-8">
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-[#000000]">Regional Price Growth Across UK (2025)</h3>
        <p className="text-sm text-[#555555]">Year-on-year price growth percentage by region</p>
      </div>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={regionalGrowthData}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis type="number" domain={[0, 12]} label={{ value: 'Growth (%)', position: 'insideBottom', offset: -10 }} />
            <YAxis type="category" dataKey="region" width={100} />
            <Tooltip formatter={(value) => [`${value}%`, ""]} />
            <Bar 
              dataKey="growth" 
              fill="#E6B373"
              barSize={20}
            >
              {regionalGrowthData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.region === "South East" ? "#004D3F" : "#E6B373"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="text-center mt-6 text-[#333333]">
        <p className="mb-4">
          While London maintains strong growth, other regions like the East and South East are showing impressive 
          appreciation rates, offering exciting investment opportunities.
        </p>
        <Button 
          className="bg-[#004D3F] text-white hover:bg-[#003D30]"
        >
          Download Regional Report
        </Button>
      </div>
    </div>
  );

  const renderMarketInsights = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {marketInsightsData.map((insight, index) => (
        <Card key={index} className="bg-[#FFFFFF]">
          <CardHeader>
            <CardTitle className="text-[#004D3F]">{insight.title}</CardTitle>
            <CardDescription>{insight.date}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{insight.content}</p>
          </CardContent>
        </Card>
      ))}
      <div className="col-span-1 md:col-span-3 text-center mt-4">
        <Button 
          className="bg-[#004D3F] text-white hover:bg-[#003D30]"
        >
          View All Insights
        </Button>
      </div>
    </div>
  );

  return (
    <section className="pt-32 pb-20 bg-[#1E1511]" id="analytics">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Market Analytics
          </h2>
          <p className="text-lg text-neutral/80 max-w-3xl mx-auto">
            Our data-driven insights help you make informed investment decisions in the UK property market.
          </p>
        </div>
        
        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 transition-all ${
                activeCategory === category.id
                  ? "bg-secondary text-[#1E1511] hover:bg-secondary/90"
                  : "bg-transparent border border-secondary/50 text-secondary hover:bg-secondary/10"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>
        
        {/* Main chart section */}
        <div className="bg-[#4D1700] p-8 rounded-lg shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-secondary mb-6">
            {activeCategory === "trends" && "UK Property Price Trends By City"}
            {activeCategory === "growth" && "Market Growth Analysis"}
            {activeCategory === "distribution" && "Property Market Distribution"}
            {activeCategory === "regional" && "Regional Market Analysis"}
            {activeCategory === "insights" && "Latest Market Insights"}
          </h3>
          
          {activeCategory === "trends" && renderPriceChart()}
          {activeCategory === "growth" && renderGrowthChart()}
          {activeCategory === "distribution" && renderMarketDistributionCharts()}
          {activeCategory === "regional" && renderRegionalAnalysis()}
          {activeCategory === "insights" && renderMarketInsights()}
        </div>
        
        {/* Additional info */}
        <div className="text-center text-white/70 text-sm">
          <p>Data updated: May 17, 2025 | Source: UK Land Registry & Restwold Novelty Research</p>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
