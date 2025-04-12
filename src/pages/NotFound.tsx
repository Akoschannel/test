
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center animate-fade-in">
      <div className="text-center space-y-6 max-w-md px-4">
        <h1 className="text-7xl font-bold">{t("404.title")}</h1>
        <div className="h-1 w-20 bg-primary mx-auto"></div>
        <p className="text-xl font-medium">{t("404.subtitle")}</p>
        <p className="text-muted-foreground">
          {t("404.description")}
        </p>
        <Button asChild size="lg" className="mt-4">
          <Link to="/" className="inline-flex items-center">
            <Home className="mr-2 h-5 w-5" />
            <span>{t("404.home")}</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
