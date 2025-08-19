import { Search, Key, Car, CreditCard } from "lucide-react";
import { Card } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Find Your Perfect Car",
      description: "Search through thousands of verified vehicles from trusted owners across South Africa. Filter by location, price, and features."
    },
    {
      icon: Key,
      title: "Book Instantly",
      description: "Complete your booking in minutes with our secure platform. Upload your license and verify your identity for peace of mind."
    },
    {
      icon: Car,
      title: "Pick Up & Drive",
      description: "Meet the owner at the agreed location, do a quick vehicle check, and you're ready to hit the road on your adventure."
    },
    {
      icon: CreditCard,
      title: "Pay Securely",
      description: "Enjoy flexible payment options with secure transactions in ZAR. Only pay when you're satisfied with your rental experience."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting on the road with Caravan ZA is simple, secure, and seamless
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 text-center card-shadow hover:card-shadow group">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto ocean-gradient rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-spring">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="w-8 h-8 mx-auto bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 card-shadow">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-foreground">
              Over 1,000 successful rentals completed this month!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;