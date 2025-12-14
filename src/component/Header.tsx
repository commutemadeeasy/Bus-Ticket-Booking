import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Bus } from 'lucide-react';
import { Button } from '../components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Be an Agent', href: '#agent' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primaryblue flex items-center justify-center shadow-soft group-hover:shadow-elevated transition-all duration-300">
              <Bus className="w-6 h-6 text-white" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              Nepal<span className="text-secondaryorange">Yatra</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/70 hover:text-foreground font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <Button variant="blue" size="default">
              Login
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground/70 hover:text-foreground font-medium transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="default" size="default" className="w-full">
                Login
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
