import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, Check, Home, MapPin } from "lucide-react";

const PropertyEvaluation: React.FC = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    bedrooms: "",
    propertyType: "",
    valuationType: "",
    postcode: "",
    address: "",
    fullName: "",
    email: "",
    phone: "",
  });
  const [showResults, setShowResults] = useState(false);
  const [valuation, setValuation] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const findAddress = () => {
    // In a real app, this would call an address lookup API
    if (formData.postcode) {
      toast({
        title: "Address Found",
        description: "Please select your address from the dropdown that would appear.",
      });
      // For demonstration, we'll just set a sample address
      setFormData({
        ...formData,
        address: "123 Sample Street",
      });
    } else {
      toast({
        title: "Please enter a postcode",
        description: "A valid postcode is required to find your address.",
        variant: "destructive",
      });
    }
  };

  const calculateValuation = () => {
    // In a real app, this would call an API or use a complex algorithm
    // For demonstration, we'll use a simple calculation
    const baseValue = 250000;
    const bedroomMultiplier = parseInt(formData.bedrooms) * 50000;
    
    let propertyTypeMultiplier = 1;
    switch(formData.propertyType) {
      case "detached":
        propertyTypeMultiplier = 1.5;
        break;
      case "semi-detached":
        propertyTypeMultiplier = 1.3;
        break;
      case "terraced":
        propertyTypeMultiplier = 1.1;
        break;
      case "flat":
        propertyTypeMultiplier = 1.0;
        break;
      case "bungalow":
        propertyTypeMultiplier = 1.4;
        break;
    }
    
    const calculatedValue = (baseValue + bedroomMultiplier) * propertyTypeMultiplier;
    setValuation(Math.round(calculatedValue));
    setShowResults(true);
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (!formData.bedrooms || !formData.propertyType || !formData.valuationType) {
        toast({
          title: "Missing Information",
          description: "Please complete all fields before proceeding.",
          variant: "destructive",
        });
        return;
      }
    }
    
    if (step === 2) {
      if (!formData.postcode || !formData.address) {
        toast({
          title: "Missing Information",
          description: "Please enter your postcode and address before proceeding.",
          variant: "destructive",
        });
        return;
      }
    }
    
    if (step === 3) {
      if (!formData.fullName || !formData.email) {
        toast({
          title: "Missing Information",
          description: "Please enter your name and email before proceeding.",
          variant: "destructive",
        });
        return;
      }
      calculateValuation();
      return;
    }
    
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const resetForm = () => {
    setFormData({
      bedrooms: "",
      propertyType: "",
      valuationType: "",
      postcode: "",
      address: "",
      fullName: "",
      email: "",
      phone: "",
    });
    setShowResults(false);
    setStep(1);
  };

  const getActionButtonText = () => {
    switch(formData.valuationType) {
      case "sell":
        return "Sell Your Property";
      case "rent":
        return "Rent Your Property";
      case "let":
        return "Let Your Property";
      case "buy":
        return "Buy Similar Properties";
      default:
        return "Explore Options";
    }
  };

  return (
    <section className="section-padding bg-primary" id="property-evaluation">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Free Property Valuation
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-neutral max-w-3xl mx-auto">
            Get an accurate valuation of your property in minutes. Our advanced
            algorithm provides realistic estimates based on current market data.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!showResults ? (
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="flex justify-between mb-6">
                  <div className={`flex items-center ${step >= 1 ? "text-primary" : "text-gray-400"}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 1 ? "bg-primary text-white" : "bg-gray-200"}`}>
                      {step > 1 ? <Check className="h-5 w-5" /> : "1"}
                    </div>
                    <span className="hidden sm:inline">Property Details</span>
                  </div>
                  <div className={`flex items-center ${step >= 2 ? "text-primary" : "text-gray-400"}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 2 ? "bg-primary text-white" : "bg-gray-200"}`}>
                      {step > 2 ? <Check className="h-5 w-5" /> : "2"}
                    </div>
                    <span className="hidden sm:inline">Address</span>
                  </div>
                  <div className={`flex items-center ${step >= 3 ? "text-primary" : "text-gray-400"}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 3 ? "bg-primary text-white" : "bg-gray-200"}`}>
                      3
                    </div>
                    <span className="hidden sm:inline">Your Details</span>
                  </div>
                </div>
                <CardTitle className="text-xl text-primary-dark">
                  {step === 1 && "Tell us about your property"}
                  {step === 2 && "Where is your property located?"}
                  {step === 3 && "Your contact details"}
                </CardTitle>
                <CardDescription>
                  {step === 1 && "Please provide information about your property type and requirements"}
                  {step === 2 && "Enter your postcode to find your address"}
                  {step === 3 && "We'll send the valuation results to your email"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="bedrooms">Number of Bedrooms</Label>
                      <Select 
                        onValueChange={(value) => handleSelectChange("bedrooms", value)}
                        value={formData.bedrooms}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select number of bedrooms" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Bedroom</SelectItem>
                          <SelectItem value="2">2 Bedrooms</SelectItem>
                          <SelectItem value="3">3 Bedrooms</SelectItem>
                          <SelectItem value="4">4 Bedrooms</SelectItem>
                          <SelectItem value="5">5 Bedrooms</SelectItem>
                          <SelectItem value="6">6 Bedrooms</SelectItem>
                          <SelectItem value="7">7 Bedrooms</SelectItem>
                          <SelectItem value="8">8+ Bedrooms</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="propertyType">Property Type</Label>
                      <Select 
                        onValueChange={(value) => handleSelectChange("propertyType", value)}
                        value={formData.propertyType}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="detached">Detached</SelectItem>
                          <SelectItem value="semi-detached">Semi-Detached</SelectItem>
                          <SelectItem value="terraced">Terraced</SelectItem>
                          <SelectItem value="flat">Flat/Apartment</SelectItem>
                          <SelectItem value="bungalow">Bungalow</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="valuationType">Valuation Type</Label>
                      <Select 
                        onValueChange={(value) => handleSelectChange("valuationType", value)}
                        value={formData.valuationType}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="What do you want to do with your property?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sell">Sale Valuation</SelectItem>
                          <SelectItem value="rent">Rental Valuation</SelectItem>
                          <SelectItem value="let">Letting Valuation</SelectItem>
                          <SelectItem value="buy">Purchase Valuation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="postcode">Postcode</Label>
                      <div className="flex gap-2">
                        <Input
                          id="postcode"
                          name="postcode"
                          value={formData.postcode}
                          onChange={handleChange}
                          placeholder="e.g. SW1A 1AA"
                        />
                        <Button 
                          onClick={findAddress} 
                          type="button"
                          className="whitespace-nowrap text-white"
                        >
                          Find Address
                        </Button>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter your full address"
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                {step > 1 && (
                  <Button 
                    variant="outline" 
                    onClick={handlePreviousStep}
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Previous
                  </Button>
                )}
                {step === 1 && <div></div>}
                <Button onClick={handleNextStep} className="text-white">
                  {step === 3 ? "Get Valuation" : "Next"}
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="bg-primary text-white p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Your Property Valuation</h3>
                <p className="text-sm opacity-80">Based on current market data</p>
              </div>
              <CardContent className="pt-8">
                <div className="text-center mb-8">
                  <p className="text-gray-600 mb-2">Estimated Value</p>
                  <p className="text-4xl font-bold text-primary">£{valuation?.toLocaleString()}</p>
                  <p className="text-sm text-gray-500 mt-2">This valuation is based on similar properties in your area</p>
                </div>

                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h4 className="font-medium text-gray-800 mb-4">Property Details</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Bedrooms</p>
                      <p className="font-medium">{formData.bedrooms}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Property Type</p>
                      <p className="font-medium capitalize">{formData.propertyType}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-medium">{formData.address}, {formData.postcode}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral p-4 rounded-lg">
                  <p className="font-medium text-primary-dark mb-2">What's next?</p>
                  <p className="text-sm text-gray-600 mb-4">
                    Based on your {formData.valuationType} valuation, we can help you take the next steps.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-primary hover:bg-primary-light text-white">
                      {getActionButtonText()} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" onClick={resetForm}>
                      Get Another Valuation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertyEvaluation;
