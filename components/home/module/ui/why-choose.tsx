import { Card, CardContent } from "@/components/ui/card";
import { Check, Clock, Shield, Headphones, Star, Award } from "lucide-react";

const features = [
  {
    icon: Check,
    title: "Expert Planning",
    description: "Our certified travel consultants create personalized itineraries based on your preferences and budget."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance wherever you are in the world, ensuring you're never alone on your journey."
  },
  {
    icon: Shield,
    title: "Secure Booking",
    description: "Advanced security measures and comprehensive travel insurance protect your investment."
  },
  {
    icon: Headphones,
    title: "Local Expertise",
    description: "Our network of local guides and partners provide authentic, insider experiences you won't find elsewhere."
  },
  {
    icon: Star,
    title: "Best Price Guarantee",
    description: "We monitor prices continuously and offer the best deals, plus we'll match any competitor's price."
  },
  {
    icon: Award,
    title: "Award-Winning Service",
    description: "Recognized by industry leaders for exceptional service and customer satisfaction year after year."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Why Choose <span className="bg-color bg-clip-text text-transparent">Wayferen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another travel agency. We're your partners in creating life-changing experiences that exceed expectations at every turn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-card transition-all duration-300 border-0 shadow-soft group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-color rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;