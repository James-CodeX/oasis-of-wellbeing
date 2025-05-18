
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 shadow-md backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="h-8 w-8 rounded-full bg-gradient-to-br from-oasis-400 to-teal-500"></span>
          <span className="font-serif text-xl font-bold text-primary">
            Oasis of Wellbeing
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center md:flex">
          <ul className="flex space-x-8">
            <li>
              <a
                href="/"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#programs"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Programs
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
          <Button
            className="ml-8 bg-primary hover:bg-primary/90 text-primary-foreground"
            size="sm"
            asChild
          >
            <Link to="/booking">Get Help</Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="block md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} className="text-foreground" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 shadow-lg backdrop-blur-lg md:hidden animate-fade-in">
          <nav className="container py-4">
            <ul className="space-y-4">
              <li>
                <a
                  href="/"
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
              <li>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <Link to="/booking" onClick={() => setMobileMenuOpen(false)}>
                    Get Help
                  </Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
