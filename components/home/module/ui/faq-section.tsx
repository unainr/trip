import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How far in advance should I book my trip?",
    answer: "We recommend booking 3-6 months in advance for international trips to ensure the best availability and prices. However, we can also arrange last-minute trips based on availability."
  },
  {
    question: "What's included in your travel packages?",
    answer: "Our packages typically include accommodation, transportation, guided tours, some meals, and entrance fees to major attractions. Specific inclusions vary by package and are clearly outlined in each itinerary."
  },
  {
    question: "Do you offer travel insurance?",
    answer: "Yes, we strongly recommend and offer comprehensive travel insurance that covers trip cancellation, medical emergencies, lost luggage, and other unexpected events. We can help you choose the right coverage for your needs."
  },
  {
    question: "Can you customize existing packages?",
    answer: "Absolutely! All our packages can be customized to match your preferences, budget, and schedule. Our travel consultants will work with you to create your perfect itinerary."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, bank transfers, and PayPal. For most bookings, we require a deposit to secure your reservation, with the balance due before departure."
  },
  {
    question: "What happens if I need to cancel my trip?",
    answer: "Cancellation policies vary depending on the destination and timing. Generally, the earlier you cancel, the less penalty you'll incur. Travel insurance can help protect against unexpected cancellation costs."
  },
  {
    question: "Do you provide 24/7 support during my trip?",
    answer: "Yes, we offer round-the-clock emergency support for all our travelers. You'll receive emergency contact numbers and have access to our travel assistance team wherever you are in the world."
  },
  {
    question: "Are your tours suitable for solo travelers?",
    answer: "Many of our group tours welcome solo travelers, and we also offer specialized solo travel packages. We can help match you with like-minded travelers or arrange private experiences if preferred."
  }
];

const FAQ = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Frequently Asked <span className="bg-color bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about traveling with Wayferen
          </p>
        </div>

        <div className="animate-slide-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-border rounded-lg px-6 hover:shadow-soft transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;