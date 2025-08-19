import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">Caravan ZA</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              South Africa's trusted peer-to-peer car rental platform. 
              Connect with verified car owners and experience premium vehicles across the country.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-white/60 hover:text-accent cursor-pointer transition-smooth" />
              <Twitter className="w-6 h-6 text-white/60 hover:text-accent cursor-pointer transition-smooth" />
              <Instagram className="w-6 h-6 text-white/60 hover:text-accent cursor-pointer transition-smooth" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-accent transition-smooth">Browse Cars</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-smooth">List Your Car</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-smooth">How It Works</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-smooth">Safety</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-smooth">Insurance</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-accent transition-smooth">Help Center</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-smooth">Contact Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-smooth">Trust & Safety</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-smooth">Terms of Service</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-smooth">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-white/80">hello@caravanza.co.za</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-white/80">+27 11 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-white/80">Cape Town, South Africa</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Caravan ZA. All rights reserved. Made with ❤️ in South Africa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;