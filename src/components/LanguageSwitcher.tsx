
import React from "react";
import { useLanguage } from "@/providers/LanguageProvider";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "hu" ? "en" : "hu");
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={toggleLanguage}
      className="flex items-center gap-1 text-xs"
      title={language === "hu" ? "Switch to English" : "Váltás magyarra"}
    >
      <Languages className="h-3 w-3 mr-1" />
      {language === "hu" ? "English" : "Magyar"}
    </Button>
  );
};

export default LanguageSwitcher;
