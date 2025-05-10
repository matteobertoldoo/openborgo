import { Link, useLocation } from 'react-router-dom';
import { Home, MapPin, Bed, UtensilsCrossed, User } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-t border-border md:hidden dark:bg-background/80">
      <div className="grid h-16 grid-cols-5">
        <Link
          to="/"
          className={`flex flex-col items-center justify-center text-xs font-medium transition-colors ${
            location.pathname === '/'
              ? 'text-italia-sage dark:text-italia-sage'
              : 'text-muted-foreground hover:text-italia-sage dark:text-muted-foreground dark:hover:text-italia-sage'
          }`}
        >
          <Home className="h-5 w-5" />
          <span>Home</span>
        </Link>
        <Link
          to="/regions"
          className={`flex flex-col items-center justify-center text-xs font-medium transition-colors ${
            location.pathname === '/regions'
              ? 'text-italia-sage dark:text-italia-sage'
              : 'text-muted-foreground hover:text-italia-sage dark:text-muted-foreground dark:hover:text-italia-sage'
          }`}
        >
          <MapPin className="h-5 w-5" />
          <span>Regions</span>
        </Link>
        <Link
          to="/stays"
          className={`flex flex-col items-center justify-center text-xs font-medium transition-colors ${
            location.pathname === '/stays'
              ? 'text-italia-sage dark:text-italia-sage'
              : 'text-muted-foreground hover:text-italia-sage dark:text-muted-foreground dark:hover:text-italia-sage'
          }`}
        >
          <Bed className="h-5 w-5" />
          <span>Stays</span>
        </Link>
        <Link
          to="/experiences"
          className={`flex flex-col items-center justify-center text-xs font-medium transition-colors ${
            location.pathname === '/experiences'
              ? 'text-italia-sage dark:text-italia-sage'
              : 'text-muted-foreground hover:text-italia-sage dark:text-muted-foreground dark:hover:text-italia-sage'
          }`}
        >
          <UtensilsCrossed className="h-5 w-5" />
          <span>Experiences</span>
        </Link>
        <Link
          to="/profile"
          className={`flex flex-col items-center justify-center text-xs font-medium transition-colors ${
            location.pathname === '/profile'
              ? 'text-italia-sage dark:text-italia-sage'
              : 'text-muted-foreground hover:text-italia-sage dark:text-muted-foreground dark:hover:text-italia-sage'
          }`}
        >
          <User className="h-5 w-5" />
          <span>Profile</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav; 