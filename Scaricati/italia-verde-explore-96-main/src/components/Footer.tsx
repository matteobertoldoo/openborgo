import { Link } from 'react-router-dom';
import { MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6" />
              <span className="ml-2 text-xl font-playfair font-bold">Openborgo</span>
            </div>
            <p className="text-sm mb-4 font-semibold">
              Discover authentic rural Italian experiences and accommodations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-italia-terracotta">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-italia-terracotta">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-italia-terracotta">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/regions" className="hover:text-italia-terracotta">Regions</Link></li>
              <li><Link to="/accommodations" className="hover:text-italia-terracotta">Accommodations</Link></li>
              <li><Link to="/experiences" className="hover:text-italia-terracotta">Experiences</Link></li>
              <li><Link to="/properties" className="hover:text-italia-terracotta">Properties</Link></li>
              <li><Link to="/events" className="hover:text-italia-terracotta">Events</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Top Regions</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/regions/tuscany" className="hover:text-italia-terracotta">Tuscany</Link></li>
              <li><Link to="/regions/umbria" className="hover:text-italia-terracotta">Umbria</Link></li>
              <li><Link to="/regions/puglia" className="hover:text-italia-terracotta">Puglia</Link></li>
              <li><Link to="/regions/sicily" className="hover:text-italia-terracotta">Sicily</Link></li>
              <li><Link to="/regions/calabria" className="hover:text-italia-terracotta">Calabria</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="hover:text-italia-terracotta">Support Center</Link></li>
              <li><Link to="/faq" className="hover:text-italia-terracotta">FAQ</Link></li>
              <li><Link to="/terms" className="hover:text-italia-terracotta">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-italia-terracotta">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-italia-terracotta">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p className="font-bold">© {new Date().getFullYear()} openborgo. All rights reserved.</p>
          <div className="mt-4">
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <p>Email: info@openborgo.com</p>
            </div>
            <Link to="/contact" className="inline-block mt-2 text-white hover:text-italia-terracotta underline font-semibold">
              Send us a message
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
