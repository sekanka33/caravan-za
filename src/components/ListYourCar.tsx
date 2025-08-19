import { DollarSign, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ListYourCar = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Earn Extra Income",
      description: "Make R2,000 - R8,000+ per month by sharing your car when you're not using it"
    },
    {
      icon: Shield,
      title: "Protected & Insured",
      description: "Comprehensive insurance coverage and verified renters give you peace of mind"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "You decide when your car is available. Block dates whenever you need it"
    },
    {
      icon: Users,
      title: "Vetted Community",
      description: "All renters are verified with valid licenses and positive reviews"
    }
  ];

  return (
    <section className="py-20 hero-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Turn Your Car Into Income
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of South African car owners earning extra income by sharing their vehicles on Caravan ZA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center group hover:bg-white/20 transition-smooth">
              <div className="w-12 h-12 mx-auto bg-accent rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-spring">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-accent mb-2">R4,500</div>
              <div className="text-white/80">Average monthly earnings</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-white">1,000+</div>
                <div className="text-white/70 text-sm">Happy Owners</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-white/70 text-sm">Positive Reviews</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-white/70 text-sm">Support</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Button className="bg-accent hover:bg-accent/90 text-white font-bold px-12 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all">
              List Your Car Now
            </Button>
            <div className="text-white/70 text-sm">
              ✓ Free to list  ✓ No upfront costs  ✓ Keep 75% of earnings
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListYourCar;