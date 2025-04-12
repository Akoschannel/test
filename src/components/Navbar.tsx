
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/providers/LanguageProvider";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Add scroll event listener
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

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.faq"), path: "/gyik" },
    { name: t("nav.equipment"), path: "/felszerelesek" },
    { name: t("nav.schedule"), path: "/menetrend" },
    { name: t("nav.contact"), path: "/elerhetoseg" },
  ];

  return (
    <header 
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="flex items-center space-x-2 font-display text-xl font-medium"
          >
            <span className="animate-slide-right">Ákos Channel</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `text-sm font-medium transition-all duration-200 link-hover
                  ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`
                }
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button, Theme Toggle and Language Switcher */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            
            <button
              className="md:hidden flex items-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass absolute top-16 left-0 w-full h-[calc(100vh-4rem)] z-50 animate-fade-in">
          <nav className="flex flex-col p-4 space-y-6">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `text-lg font-medium px-4 py-2 rounded-md transition-all duration-200
                  ${isActive 
                    ? 'bg-secondary text-primary' 
                    : 'text-muted-foreground hover:bg-secondary/50 hover:text-primary'
                  }`
                }
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
