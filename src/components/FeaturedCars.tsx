import { Star, MapPin, Fuel, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FeaturedCars = () => {
  const featuredCars = [
    {
      id: 1,
      name: "BMW 3 Series",
      location: "Cape Town, Western Cape",
      image: "/api/placeholder/400/300",
      price: 450,
      rating: 4.9,
      reviews: 127,
      features: {
        fuel: "Petrol",
        seats: 5,
        transmission: "Automatic"
      },
      tags: ["Popular", "Luxury"]
    },
    {
      id: 2,
      name: "Toyota Fortuner",
      location: "Johannesburg, Gauteng",
      image: "/api/placeholder/400/300",
      price: 650,
      rating: 4.8,
      reviews: 94,
      features: {
        fuel: "Diesel",
        seats: 7,
        transmission: "Automatic"
      },
      tags: ["SUV", "Adventure"]
    },
    {
      id: 3,
      name: "Volkswagen Polo",
      location: "Durban, KwaZulu-Natal",
      image: "/api/placeholder/400/300",
      price: 280,
      rating: 4.7,
      reviews: 156,
      features: {
        fuel: "Petrol",
        seats: 5,
        transmission: "Manual"
      },
      tags: ["Economy", "City"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Cars
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular and highly-rated vehicles from trusted owners across South Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <Card key={car.id} className="overflow-hidden card-shadow group cursor-pointer">
              <div className="relative">
                <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                  <div className="text-muted-foreground text-6xl font-light">🚗</div>
                </div>
                <div className="absolute top-4 left-4 flex gap-2">
                  {car.tags.map((tag) => (
                    <Badge key={tag} className="bg-primary text-primary-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="font-semibold text-sm">{car.rating}</span>
                    <span className="text-muted-foreground text-sm">({car.reviews})</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{car.name}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{car.location}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Fuel className="w-4 h-4" />
                      {car.features.fuel}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {car.features.seats} seats
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">R{car.price}</span>
                    <span className="text-muted-foreground text-sm">/day</span>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-white font-medium px-6 transition-smooth">
                    Book Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="px-8 py-3 text-primary border-primary hover:bg-primary hover:text-white transition-smooth"
          >
            View All Cars
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;