
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme/ModeToggle";
import { UserNav } from "@/components/user/UserNav";
import { useCallback, useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-background/80 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-3">
            <span className="font-poppins text-2xl font-bold bg-gradient-to-r from-app-blue to-app-green bg-clip-text text-transparent">
              NomadMatcher
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/preferences" className="font-medium text-muted-foreground hover:text-foreground transition-colors">
            Find My Match
          </Link>
          <Link to="/results" className="font-medium text-muted-foreground hover:text-foreground transition-colors">
            Explore Cities
          </Link>
          <Link to="/about" className="font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ModeToggle />
          <div className="hidden sm:flex">
            <Button asChild variant="default">
              <Link to="/preferences">Get Started</Link>
            </Button>
          </div>
          <UserNav />
        </div>
      </div>
    </header>
  );
}
