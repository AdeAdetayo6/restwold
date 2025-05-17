
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What areas of the UK does Restwold Novelty operate in?",
    answer: "Restwold Novelty operates primarily in prime London locations, as well as select areas across the UK including the Cotswolds, Home Counties, and other prestigious locations. For international clients, we also have a network of trusted partners in key global luxury markets.",
  },
  {
    question: "How do you source off-market properties?",
    answer: "Our extensive network of industry contacts, including private sellers, developers, and other professionals in the luxury property sector, provides us with access to exclusive off-market opportunities. We maintain strict confidentiality throughout the process, ensuring discretion for both buyers and sellers.",
  },
  {
    question: "What is your minimum property value threshold for management services?",
    answer: "While we evaluate each property on its individual merits, our bespoke management services typically focus on properties valued above £2 million. This allows us to provide the high level of personalized service and attention that these premium assets require.",
  },
  {
    question: "How are your property management fees structured?",
    answer: "Our management fees are tailored to the specific services required for each property and client. We typically work on a percentage basis of rental income for income-producing properties, or a fixed annual fee for private residences. We provide transparent fee structures and detailed service agreements for all clients.",
  },
  {
    question: "Do you work with international investors?",
    answer: "Yes, we have extensive experience working with international investors and understand the unique considerations involved in cross-border property investment. Our team can provide guidance on the UK property market, tax implications, and connections to specialist legal and financial advisors.",
  },
  {
    question: "How do you evaluate potential investment opportunities?",
    answer: "We employ a comprehensive approach to evaluating investment opportunities, considering factors such as location quality, property condition, market trends, rental potential, and long-term appreciation prospects. Our analytics team provides detailed reports on each opportunity, allowing for informed decision-making.",
  },
];

const FAQs: React.FC = () => {
  return (
    <section className="section-padding bg-neutral" id="faqs">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services and approach.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-primary-dark font-medium hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Can't find the answer you're looking for? Contact our team for personalized assistance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
