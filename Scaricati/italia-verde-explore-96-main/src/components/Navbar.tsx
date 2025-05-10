import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm hidden md:block">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <MapPin className="h-6 w-6 text-italia-green" />
            <span className="ml-2 text-xl font-playfair font-bold">Openborgo</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="flex items-center space-x-6">
          <Link to="/regions" className="text-sm font-medium hover:text-italia-green">
            Explore Regions
          </Link>
          <Link to="/stays" className="text-sm font-medium hover:text-italia-green">
            Stays
          </Link>
          <Link to="/experiences" className="text-sm font-medium hover:text-italia-green">
            Experiences
          </Link>
          <div className="flex items-center">
            <Link to="/search">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </Link>
            {isLoggedIn ? (
              <Link to="/profile">
                <Button variant="outline" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            ) : (
              <Link to="/login">
                <Button>Log In</Button>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
