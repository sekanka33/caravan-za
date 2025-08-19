import { useState } from "react";
import { Search, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-car.jpg";

const HeroSection = () => {
  const [location, setLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury car rental in Cape Town"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Rent the Perfect Car
          <span className="block text-accent">Anywhere in SA</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Connect with trusted car owners and experience premium vehicles 
          across South Africa. Your next adventure awaits.
        </p>

        {/* Search Card */}
        <Card className="max-w-4xl mx-auto p-6 bg-white/95 backdrop-blur-sm card-shadow">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Location
              </label>
              <Input
                placeholder="Cape Town, Johannesburg..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="h-12"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Pick-up Date
              </label>
              <Input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="h-12"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Return Date
              </label>
              <Input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="h-12"
              />
            </div>
            
            <Button className="h-12 px-8 bg-primary hover:bg-primary/90 text-white font-semibold transition-smooth shadow-lg hover:shadow-xl">
              <Search className="w-5 h-5 mr-2" />
              Search Cars
            </Button>
          </div>
        </Card>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
          <div className="text-center">
            <div className="text-2xl font-bold">1000+</div>
            <div className="text-sm">Verified Cars</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">5000+</div>
            <div className="text-sm">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">50+</div>
            <div className="text-sm">Cities Covered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;