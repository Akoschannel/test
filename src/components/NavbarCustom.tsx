
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const NavbarCustom = () => {
  const location = useLocation();
  
  // Define navigation links
  const navigationLinks = [
    { name: "Kezdőlap", path: "/" },
    { name: "GYIK", path: "/gyik" },
    { name: "Felszerelések", path: "/felszerelesek" },
    { name: "Menetrend", path: "/menetrend" },
    { name: "Elérhetőség", path: "/elerhetoseg" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-border/40 transition-colors duration-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">Ákos Channel</span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-2">
            <ThemeToggle />
            
            {/* Mobile navigation button */}
            <button
              className="md:hidden bg-background text-foreground p-2 rounded-md"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarCustom;
