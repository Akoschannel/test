
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ExternalLink, 
  Monitor, 
  Camera, 
  Headphones, 
  Keyboard, 
  Mouse, 
  Mic, 
  PlusCircle, 
  HardDrive,
  Puzzle,
  Fan,
  Gamepad2,
} from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";
import { Cpu, CpuCooler, Monitor as MonitorIcon, Software } from "@/components/CustomIcons";

const Equipment = () => {
  const [selectedTab, setSelectedTab] = useState("pc");
  const { t, language } = useLanguage();

  const equipment = {
    pc: [
      { name: t("equipment.case"), item: "Zalman S2 (fekete)", link: "#" },
      { name: t("equipment.motherboard"), item: "ASRock B460 Steel Legend", link: "#" },
      { name: t("equipment.cpu"), item: "i5-10600KF", link: "#" },
      { name: t("equipment.cooler"), item: "be quiet! Pure Rock 2", link: "#" },
      { name: t("equipment.gpu"), item: "GIGABYTE GeForce GTX 1050 Ti OC 4GB", link: "#" },
      { name: t("equipment.ram"), item: "Kingston FURY Beast 32GB (4x8GB) DDR4 3200MHz", link: "#" },
      { name: t("equipment.psu"), item: "be quiet! System Power 9 600W Bronze", link: "#" },
      { name: t("equipment.ssd"), item: "Kingston KC2500 - 500GB", link: "#" },
      { name: t("equipment.hdd1"), item: "Western Digital Re Enterprise 3.5 - 2TB (7200 rpm)", link: "#" },
      { name: t("equipment.hdd2"), item: "Western Digital 3.5 - 1TB (5400 rpm)", link: "#" },
    ],
    peripherals: [
      { name: t("equipment.monitor1"), item: "Samsung T28C570 (1920x1080 60Hz) (HDMI)", link: "#" },
      { name: t("equipment.monitor2"), item: "Samsung S19B300B (1366x768 60Hz) (DVI)", link: "#" },
      { name: t("equipment.mouse"), item: "Varr Gaming VGM-B01", link: "#" },
      { name: t("equipment.mousepad"), item: "Logilink id0117", link: "#" },
      { name: t("equipment.keyboard"), item: "Genius Scorpion K10", link: "#" },
      { name: t("equipment.headphones"), item: "HyperX Cloud II", link: "#" },
      { name: t("equipment.microphone"), item: "Sandberg Streamer USB Microphone Kit (126-07)", link: "#" },
      { name: t("equipment.chair"), item: "Arozzi Inizio (kék)", link: "#" },
    ],
    software: [
      { name: t("equipment.recorder"), item: "OBS Studio", link: "#" },
      { name: t("equipment.streamer"), item: "OBS Studio", link: "#" },
      { name: t("equipment.editor"), item: "Sony Vegas Pro 17", link: "#" },
      { name: t("equipment.image_editor"), item: "Adobe Photoshop, Pixlr, Photopea", link: "#" },
    ],
  };

  const getIcon = (category: string) => {
    switch (category) {
      case "pc":
        return <Cpu className="w-6 h-6" />;
      case "peripherals":
        return <MonitorIcon className="w-6 h-6" />;
      case "software":
        return <Software className="w-6 h-6" />;
      default:
        return <Cpu className="w-6 h-6" />;
    }
  };

  const getItemIcon = (name: string): JSX.Element => {
    if (name.includes(t("equipment.cpu")) || name.includes("Processzor")) return <Cpu className="w-5 h-5" />;
    if (name.includes(t("equipment.motherboard")) || name.includes("Alaplap")) return <Puzzle className="w-5 h-5" />;
    if (name.includes(t("equipment.cooler")) || name.includes("hűtő")) {
      return language === "hu" ? <CpuCooler className="w-5 h-5" /> : <Fan className="w-5 h-5" />;
    }
    if (name.includes(t("equipment.monitor1")) || name.includes(t("equipment.monitor2")) || name.includes("monitor")) return <Monitor className="w-5 h-5" />;
    if (name.includes(t("equipment.headphones")) || name.includes("Fejhallgató")) return <Headphones className="w-5 h-5" />;
    if (name.includes(t("equipment.keyboard")) || name.includes("Billentyűzet")) return <Keyboard className="w-5 h-5" />;
    if (name.includes(t("equipment.mouse")) || name.includes("Egér")) return <Mouse className="w-5 h-5" />;
    if (name.includes(t("equipment.microphone")) || name.includes("Mikrofon")) return <Mic className="w-5 h-5" />;
    if (name.includes(t("equipment.ssd")) || name.includes(t("equipment.hdd1")) || name.includes(t("equipment.hdd2")) || name.includes("SSD") || name.includes("HDD")) return <HardDrive className="w-5 h-5" />;
    if (name.includes(t("equipment.chair")) || name.includes("Szék")) return <Gamepad2 className="w-5 h-5" />;
    return <PlusCircle className="w-5 h-5" />;
  };

  const categoryNames = {
    pc: t("equipment.tab.pc"),
    peripherals: t("equipment.tab.peripherals"),
    software: t("equipment.tab.software"),
  };

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{t("equipment.title")}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("equipment.description")}
        </p>
      </div>

      <Tabs defaultValue="pc" value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 w-full md:w-auto">
            {Object.keys(equipment).map((category) => (
              <TabsTrigger key={category} value={category} className="flex items-center gap-2">
                {getIcon(category)}
                <span className="hidden md:inline">{categoryNames[category as keyof typeof categoryNames]}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {Object.entries(equipment).map(([category, items]) => (
          <TabsContent key={category} value={category} className="animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start p-4 rounded-lg border bg-card hover:shadow-md transition-shadow duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="p-2 mr-4 rounded-lg bg-secondary">
                    {getItemIcon(item.name)}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm font-medium text-muted-foreground">{item.name}</h3>
                    <p className="font-medium">{item.item}</p>
                  </div>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-primary hover:text-primary/70 p-1 rounded-full transition-colors"
                    aria-label={`Link to ${item.item}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-16 p-6 rounded-xl bg-secondary/30 border animate-slide-up">
        <h3 className="text-xl font-semibold mb-4">{t("equipment.evolving")}</h3>
        <p className="text-muted-foreground">
          {t("equipment.evolving.desc")}
        </p>
      </div>
    </div>
  );
};

export default Equipment;
