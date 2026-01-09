import { Button } from "@/components/ui/button";
import { Heart, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <Heart className="w-8 h-8 text-primary" fill="currentColor" />
            <span className="text-2xl font-bold bg-gradient-sunset bg-clip-text text-transparent">
              EverWish
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">
              How It Works
            </Link>
            <Link to="/security" className="text-foreground/80 hover:text-foreground transition-colors">
              Security
            </Link>
            <Link to="/pricing" className="text-foreground/80 hover:text-foreground transition-colors">
              Pricing
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/auth">
              <Button variant="ghost">
                Sign In
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="default">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border/20 animate-slide-up">
            <div className="flex flex-col gap-4">
              <Link to="/how-it-works" className="text-foreground/80 hover:text-foreground transition-colors py-2">
                How It Works
              </Link>
              <Link to="/security" className="text-foreground/80 hover:text-foreground transition-colors py-2">
                Security
              </Link>
              <Link to="/pricing" className="text-foreground/80 hover:text-foreground transition-colors py-2">
                Pricing
              </Link>
              <div className="flex flex-col gap-3 pt-4 border-t border-border/20">
                <Link to="/auth">
                  <Button variant="ghost" className="justify-start w-full">
                    Sign In
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button variant="default" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;