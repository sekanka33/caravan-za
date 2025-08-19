import { useState } from "react";
import { Menu, X, Car, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 ocean-gradient rounded-lg flex items-center justify-center">
              <Car className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-primary">Caravan ZA</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">
              Browse Cars
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">
              How it Works
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">
              List Your Car
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">
              Support
            </a>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white font-medium px-6">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-white/95">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium px-4 py-2">
                Browse Cars
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium px-4 py-2">
                How it Works
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium px-4 py-2">
                List Your Car
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium px-4 py-2">
                Support
              </a>
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-border">
                <Button variant="ghost" className="justify-start text-foreground hover:text-primary">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
                <Button className="justify-start bg-primary hover:bg-primary/90 text-white font-medium">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;