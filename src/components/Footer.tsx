
import { ExternalLink, Youtube, Instagram, Twitch, Mail, Users, Gamepad, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/providers/LanguageProvider";
import { Discord, Steam, SteamGroup } from "@/components/CustomIcons";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="w-full border-t bg-card py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-xl font-medium">
              Ákos Channel
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {language === "en" 
                ? "Quality content from the online and gaming world. Check out my YouTube channel and subscribe!"
                : "Minőségi tartalmak az online és gaming világból. Nézz be a YouTube csatornámra és iratkozz fel!"}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">
              {language === "en" ? "Links" : "Linkek"}
            </h3>
            <div className="grid grid-cols-1 gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("nav.home")}
              </Link>
              <Link to="/gyik" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("nav.faq")}
              </Link>
              <Link to="/felszerelesek" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("nav.equipment")}
              </Link>
              <Link to="/menetrend" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("nav.schedule")}
              </Link>
              <Link to="/elerhetoseg" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("nav.contact")}
              </Link>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">
              {language === "en" ? "Follow me" : "Kövess"}
            </h3>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://youtube.com/c/AkosChannel06" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://twitch.tv/akos581" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
                aria-label="Twitch"
              >
                <Twitch className="w-5 h-5" />
              </a>
              <a 
                href="https://discord.gg/UkQjZVy" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
                aria-label="Discord"
              >
                <Discord className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/akos581" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://steamcommunity.com/id/Akos581" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
                aria-label="Steam Profile"
              >
                <Steam className="w-5 h-5" />
              </a>
              <a 
                href="https://steamcommunity.com/groups/Akostak" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
                aria-label="Steam Group"
              >
                <SteamGroup className="w-5 h-5" />
              </a>
              <a 
                href="mailto:akoschannelyt@gmail.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs text-muted-foreground">
            © {currentYear} Ákos Channel. {language === "en" ? "All rights reserved." : "Minden jog fenntartva."}
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {language === "en" ? "Privacy Policy" : "Adatvédelmi irányelvek"}
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {language === "en" ? "Terms of Use" : "Felhasználási feltételek"}
            </a>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <Button
          variant="secondary"
          size="icon"
          className="fixed bottom-6 right-6 rounded-full opacity-70 hover:opacity-100 z-50 shadow-md"
          onClick={handleScrollToTop}
          aria-label={language === "en" ? "Scroll to top" : "Görgetés felülre"}
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}
    </footer>
  );
};

export default Footer;
