
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define the languages and translation types
export type Language = "en" | "hu";
export type TranslationKey = string;

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
};

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: "hu",
  setLanguage: () => {},
  t: (key) => key,
});

// Define translations
const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.faq": "FAQ",
    "nav.equipment": "Equipment",
    "nav.schedule": "Schedule",
    "nav.contact": "Contact",

    // Home page
    "home.welcome": "Welcome to my channel",
    "home.title": "Ákos Channel - Quality gaming content",
    "home.description": "Discover the latest videos, gaming content and exclusive materials. Join the community today!",
    "home.youtube": "YouTube channel",
    "home.schedule": "Stream schedule",
    "home.why": "Why follow me?",
    "home.why.description": "Discover what the Ákos Channel community offers",
    "home.feature.videos": "Weekly new videos",
    "home.feature.videos.desc": "Regular new content so you never miss out",
    "home.feature.streams": "Live broadcasts",
    "home.feature.streams.desc": "Exciting games, conversations and community experience",
    "home.feature.quality": "Premium quality",
    "home.feature.quality.desc": "Professional content with the best equipment",
    "home.latest": "Latest videos",
    "home.latest.desc": "Check out the newest content",
    "home.more": "More videos",
    "home.join": "Join the Ákos Channel community!",
    "home.join.desc": "Subscribe to my channel and don't miss anything. Follow the schedule and watch streams live!",
    "home.subscribe": "Subscribe",
    "home.contact": "Contact",

    // Video dates
    "video.date1": "2024-07-01",
    "video.date2": "2023-10-15",
    "video.date3": "2023-10-08",

    // Video titles
    "video.title1": "Super Mario Odyssey #5 - LITTLE PRINCESS",
    "video.title2": "New RTX game test - The future of graphics",
    "video.title3": "Setup tour - How my videos are made",

    // FAQ page
    "faq.title": "Frequently Asked Questions",
    "faq.description": "Here you can find answers to the most frequently asked questions. If you don't find what you're looking for, contact me on the Contact page!",
    "faq.q1": "How often does new content appear on the channel?",
    "faq.a1": "I upload at least 2-3 new videos weekly. You can find the schedule on the Schedule page. I also stream regularly, which I announce in advance on social media.",
    "faq.q2": "What games do you play on your channel?",
    "faq.a2": "Mostly FPS games (like CS:GO, Valorant, Call of Duty), battle royale games (Fortnite, Apex Legends), and some open world games. I occasionally try indie games if the community is interested.",
    "faq.q3": "How can I support the channel?",
    "faq.a3": "You can support the channel in many ways: by subscribing, sharing videos, commenting, and if you wish, by donating during streams. I appreciate all support, but the most important thing is that you enjoy the content!",
    "faq.q4": "What equipment do you use for recordings and streams?",
    "faq.a4": "You can find the detailed setup list on the Equipment page. I update it regularly when I purchase new equipment or change settings.",
    "faq.q5": "Is it possible to play with you?",
    "faq.a5": "Yes! I regularly organize community games where I play with viewers. Follow my social media, where I announce these events, or join my Discord server.",
    "faq.q6": "Do you have a Discord server?",
    "faq.a6": "Yes, we have an active Discord community where you can chat with other viewers, learn about updates, and participate in community events. You can find the invite link in video descriptions or on social media.",
    "faq.q7": "How do you respond to comments?",
    "faq.a7": "I try to answer every question, but due to the large volume of comments, this isn't always possible. I'm more likely to answer questions on my Discord server and during streams.",
    "faq.q8": "Can I recommend games for the channel?",
    "faq.a8": "Absolutely! I'm always open to trying new games, especially if the community recommends them. Contact me with your suggestions on the Discord server or social media.",
    "faq.q9": "What camera and microphone do you use?",
    "faq.a9": "I currently use a Sony Alpha camera and a Blue Yeti microphone. You can find the complete equipment list on the Equipment page.",
    "faq.q10": "Do you accept sponsorships or collaborations?",
    "faq.a10": "Yes, I'm open to sponsorships and collaborations if they're compatible with the channel's values and could be interesting for viewers. Send business inquiries to the email address on the Contact page.",
    "faq.not.found": "Can't find the answer?",
    "faq.not.found.desc": "If you have additional questions, don't hesitate to contact me. I'm happy to answer any questions!",
    "faq.contact": "Contact →",

    // Equipment page
    "equipment.title": "Equipment",
    "equipment.description": "Here you can see the equipment I use to create videos and streams. These are the tools that make the content you see on my channel.",
    "equipment.tab.pc": "Computer",
    "equipment.tab.peripherals": "Peripherals",
    "equipment.tab.software": "Software",
    "equipment.evolving": "Constantly evolving",
    "equipment.evolving.desc": "My equipment is regularly expanded and changed as I improve the channel's quality. If you have questions about any of the equipment or would like recommendations, feel free to reach out on social media or in the comment section of videos!",
    
    // Equipment items
    "equipment.case": "Computer Case",
    "equipment.motherboard": "Motherboard",
    "equipment.cpu": "Processor",
    "equipment.cooler": "CPU Cooler",
    "equipment.gpu": "Graphics Card",
    "equipment.ram": "RAM",
    "equipment.psu": "Power Supply",
    "equipment.ssd": "SSD",
    "equipment.hdd1": "HDD 1",
    "equipment.hdd2": "HDD 2",
    "equipment.monitor1": "Main Monitor",
    "equipment.monitor2": "Secondary Monitor",
    "equipment.mouse": "Mouse",
    "equipment.mousepad": "Mousepad",
    "equipment.keyboard": "Keyboard",
    "equipment.headphones": "Headphones",
    "equipment.microphone": "Microphone",
    "equipment.chair": "Chair",
    "equipment.recorder": "Video Recorder",
    "equipment.streamer": "Streaming Software",
    "equipment.editor": "Video Editor",
    "equipment.image_editor": "Image Editor",

    // Schedule page
    "schedule.title": "Schedule",
    "schedule.description": "Here you can see the regular stream and video schedule, as well as upcoming special events.",
    "schedule.weekly": "Weekly Schedule",
    "schedule.special": "Special Events",
    "schedule.monday": "Monday",
    "schedule.tuesday": "Tuesday",
    "schedule.wednesday": "Wednesday",
    "schedule.thursday": "Thursday",
    "schedule.friday": "Friday",
    "schedule.saturday": "Saturday",
    "schedule.sunday": "Sunday",
    "schedule.event.mon": "Monday gameplay",
    "schedule.event.tue": "Evening live broadcast",
    "schedule.event.wed": "Tech news",
    "schedule.event.thu": "Thursday stream",
    "schedule.event.fri1": "Friday recap",
    "schedule.event.fri2": "Community game night",
    "schedule.event.sat": "Saturday marathon",
    "schedule.event.sun": "Weekly summary",
    "schedule.game": "Game",
    "schedule.game.various": "Various",
    "schedule.type.video": "Video",
    "schedule.type.stream": "Stream",
    "schedule.special1": "24-hour charity stream",
    "schedule.special1.date": "November 15, 2023",
    "schedule.special1.desc": "A full-day stream where we collect donations for a good cause. Details coming soon!",
    "schedule.special2": "300K subscriber special",
    "schedule.special2.date": "December 1, 2023",
    "schedule.special2.desc": "Special video to celebrate reaching 300 thousand subscribers. Giveaways and surprises!",
    "schedule.special3": "End-of-year community meetup",
    "schedule.special3.date": "December 20, 2023",
    "schedule.special3.desc": "Online community event where we chat, play and look back on the year.",
    "schedule.notes": "Notes",
    "schedule.note1": "The schedule may change, I'll always send notifications about the exact times on social media.",
    "schedule.note2": "Live broadcasts will be available on my YouTube channel.",
    "schedule.note3": "You can set up notifications so you don't miss any videos or broadcasts.",
    "schedule.note4": "During special events, I often organize giveaways for viewers!",

    // Contact page
    "contact.title": "Contact",
    "contact.description": "Have a question? Want to make an offer? Fill out the form below or find me on my contact details!",
    "contact.form": "Contact form",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send message",
    "contact.sending": "Sending...",
    "contact.sent": "Message sent",
    "contact.sent.desc": "Thank you for your message! We'll respond soon.",
    "contact.contacts": "Contacts",
    "contact.collaboration": "Collaboration offers",
    "contact.collaboration.desc": "For sponsorships or collaboration offers, please write a detailed description through the form or to the following email address:",
    "contact.response": "Response time",
    "contact.response.desc": "I usually respond to messages within 2-3 business days. Thank you for your patience!",

    // 404 page
    "404.title": "404",
    "404.subtitle": "Page not found",
    "404.description": "The page you are looking for doesn't exist or has been removed. Please check the URL you provided.",
    "404.home": "Back to home",

    // Form validation
    "validation.name": "Name must be at least 2 characters long",
    "validation.email": "Invalid email address",
    "validation.subject": "Subject must be at least 5 characters long",
    "validation.message": "Message must be at least 10 characters long",
  },
  hu: {
    // Navigation
    "nav.home": "Kezdőlap",
    "nav.faq": "GYIK",
    "nav.equipment": "Felszerelések",
    "nav.schedule": "Menetrend",
    "nav.contact": "Elérhetőség",

    // Home page
    "home.welcome": "Üdvözöllek a csatornámon",
    "home.title": "Ákos Channel - Minőségi gaming tartalom",
    "home.description": "Fedezd fel a legfrissebb videókat, gaming tartalmakat és exkluzív anyagokat. Csatlakozz a közösséghez már ma!",
    "home.youtube": "YouTube csatorna",
    "home.schedule": "Stream menetrend",
    "home.why": "Miért érdemes követni?",
    "home.why.description": "Fedezd fel, mit kínál az Ákos Channel közössége",
    "home.feature.videos": "Hetente új videók",
    "home.feature.videos.desc": "Rendszeresen új tartalmak, hogy soha ne maradj le",
    "home.feature.streams": "Élő közvetítések",
    "home.feature.streams.desc": "Izgalmas játékok, beszélgetések és közösségi élmény",
    "home.feature.quality": "Prémium minőség",
    "home.feature.quality.desc": "Professzionális tartalmak a legjobb felszereléssel",
    "home.latest": "Legfrissebb videók",
    "home.latest.desc": "Nézd meg a legújabb tartalmakat",
    "home.more": "További videók",
    "home.join": "Csatlakozz te is az Ákos Channel közösséghez!",
    "home.join.desc": "Iratkozz fel a csatornámra és ne maradj le semmiről. Kövesd a menetrendet és nézd élőben a streameket!",
    "home.subscribe": "Feliratkozás",
    "home.contact": "Kapcsolatfelvétel",

    // Video dates
    "video.date1": "2024.07.01",
    "video.date2": "2023.10.15",
    "video.date3": "2023.10.08",

    // Video titles
    "video.title1": "Super Mario Odyssey #5 - KIS HERCEGNŐ",
    "video.title2": "Új RTX játékteszt - A grafika jövője",
    "video.title3": "Setup tour - Így készülnek a videóim",

    // FAQ page
    "faq.title": "Gyakran Ismételt Kérdések",
    "faq.description": "Itt megtalálod a leggyakrabban feltett kérdésekre a válaszokat. Ha nem találod amit keresel, keress az Elérhetőség oldalon!",
    "faq.q1": "Milyen gyakran jelenik meg új videó a csatornán?",
    "faq.a1": "Hetente legalább 2-3 új videót töltök fel. A konkrét menetrendet megtalálod a Menetrend oldalon. Emellett rendszeresen streamelek is, amiről előre értesítést küldök a közösségi oldalakon.",
    "faq.q2": "Milyen játékokkal játszol a csatornádon?",
    "faq.a2": "Többnyire FPS játékokkal (mint a CS:GO, Valorant, Call of Duty), battle royale játékokkal (Fortnite, Apex Legends), és néhány nyílt világú játékkal. Időnként indie játékokat is kipróbálok, ha a közösség érdeklődik irántuk.",
    "faq.q3": "Hogyan lehet támogatni a csatornát?",
    "faq.a3": "A csatornát többféleképpen támogathatod: feliratkozással, a videók megosztásával, kommenteléssel, és ha szeretnéd, a stream alatt adományozással. Minden támogatást nagyra értékelek, de a legfontosabb, hogy élvezd a tartalmakat!",
    "faq.q4": "Milyen berendezéseket használsz a felvételekhez és streamekhez?",
    "faq.a4": "A részletes setup listát megtalálod a Felszerelések oldalon. Rendszeresen frissítem, amikor új eszközöket vásárolok vagy változtatok a beállításokon.",
    "faq.q5": "Lehetséges veled együtt játszani?",
    "faq.a5": "Igen! Rendszeresen szervezek közösségi játékokat, ahol a nézőkkel együtt játszom. Kövesd a közösségi médiámat, ahol bejelentem ezeket az eseményeket, vagy csatlakozz a Discord szerveremhez.",
    "faq.q6": "Van Discord szervered?",
    "faq.a6": "Igen, van egy aktív Discord közösségünk, ahol beszélgethetsz más nézőkkel, értesülhetsz az újdonságokról, és részt vehetsz közösségi eseményeken. A meghívó linket megtalálod a videók leírásában vagy a közösségi oldalakon.",
    "faq.q7": "Hogyan válaszolsz a kommentekre?",
    "faq.a7": "Igyekszem minden kérdésre válaszolni, de a nagy mennyiségű komment miatt ez nem mindig lehetséges. A Discord szerveremen és a streamek alatt nagyobb eséllyel tudok válaszolni a kérdésekre.",
    "faq.q8": "Lehet ajánlani játékokat a csatornára?",
    "faq.a8": "Természetesen! Mindig nyitott vagyok az új játékok kipróbálására, főleg, ha a közösség ajánlja őket. Javaslataiddal keress meg a Discord szerveren vagy a közösségi médiában.",
    "faq.q9": "Milyen kamerát és mikrofont használsz?",
    "faq.a9": "Jelenleg egy Sony Alpha kamerát és egy Blue Yeti mikrofont használok. A teljes felszereléslistát megtalálod a Felszerelések oldalon.",
    "faq.q10": "Vállalsz szponzorációkat vagy együttműködéseket?",
    "faq.a10": "Igen, nyitott vagyok szponzorációkra és együttműködésekre, ha azok összeegyeztethetők a csatorna értékeivel és érdekesek lehetnek a nézők számára. Üzleti megkereséseket az Elérhetőség oldalon található email címen várok.",
    "faq.not.found": "Nem találod a választ?",
    "faq.not.found.desc": "Ha további kérdésed van, ne habozz felvenni velem a kapcsolatot. Szívesen válaszolok minden kérdésre!",
    "faq.contact": "Kapcsolatfelvétel →",

    // Equipment page
    "equipment.title": "Felszerelések",
    "equipment.description": "Itt láthatod a videók és streamek készítéséhez használt felszereléseimet. Ezekkel az eszközökkel készülnek a tartalmak, amiket láthatsz a csatornámon.",
    "equipment.tab.pc": "Számítógép",
    "equipment.tab.peripherals": "Perifériák",
    "equipment.tab.software": "Szoftverek",
    "equipment.evolving": "Folyamatosan fejlődök",
    "equipment.evolving.desc": "A felszereléseim rendszeresen bővülnek és változnak, ahogy fejlesztem a csatorna minőségét. Ha kérdésed van bármelyik eszközzel kapcsolatban, vagy ajánlást szeretnél kérni, keress bátran a közösségi platformokon vagy a videók komment szekciójában!",
    
    // Equipment items
    "equipment.case": "Gépház",
    "equipment.motherboard": "Alaplap",
    "equipment.cpu": "Processzor",
    "equipment.cooler": "Processzor hűtő",
    "equipment.gpu": "Videókártya",
    "equipment.ram": "RAM",
    "equipment.psu": "Tápegység",
    "equipment.ssd": "SSD",
    "equipment.hdd1": "HDD 1",
    "equipment.hdd2": "HDD 2",
    "equipment.monitor1": "Fő monitor",
    "equipment.monitor2": "Másodlagos monitor",
    "equipment.mouse": "Egér",
    "equipment.mousepad": "Egérpad",
    "equipment.keyboard": "Billentyűzet",
    "equipment.headphones": "Fejhallgató",
    "equipment.microphone": "Mikrofon",
    "equipment.chair": "Szék",
    "equipment.recorder": "Videó felvevő",
    "equipment.streamer": "Streamelő program",
    "equipment.editor": "Vágóprogram",
    "equipment.image_editor": "Képszerkesztő",

    // Schedule page
    "schedule.title": "Menetrend",
    "schedule.description": "Itt láthatod a rendszeres streames és videós menetrendet, valamint a közelgő különleges eseményeket.",
    "schedule.weekly": "Heti menetrend",
    "schedule.special": "Különleges események",
    "schedule.monday": "Hétfő",
    "schedule.tuesday": "Kedd",
    "schedule.wednesday": "Szerda",
    "schedule.thursday": "Csütörtök",
    "schedule.friday": "Péntek",
    "schedule.saturday": "Szombat",
    "schedule.sunday": "Vasárnap",
    "schedule.event.mon": "Hétfői gameplay",
    "schedule.event.tue": "Esti élő közvetítés",
    "schedule.event.wed": "Tech újdonságok",
    "schedule.event.thu": "Csütörtöki stream",
    "schedule.event.fri1": "Pénteki recap",
    "schedule.event.fri2": "Közösségi játékest",
    "schedule.event.sat": "Szombati maraton",
    "schedule.event.sun": "Heti összefoglaló",
    "schedule.game": "Játék",
    "schedule.game.various": "Változó",
    "schedule.type.video": "Videó",
    "schedule.type.stream": "Stream",
    "schedule.special1": "24 órás jótékonysági stream",
    "schedule.special1.date": "2023. November 15.",
    "schedule.special1.desc": "Egy teljes napos stream, ahol adományokat gyűjtünk egy jó ügy érdekében. Részletek hamarosan!",
    "schedule.special2": "300K feliratkozó special",
    "schedule.special2.date": "2023. December 1.",
    "schedule.special2.desc": "Különleges videó a 300 ezer feliratkozó elérése alkalmából. Nyereményjátékok és meglepetések!",
    "schedule.special3": "Év végi közösségi találkozó",
    "schedule.special3.date": "2023. December 20.",
    "schedule.special3.desc": "Online közösségi esemény, ahol beszélgetünk, játszunk és visszatekintünk az évre.",
    "schedule.notes": "Megjegyzések",
    "schedule.note1": "A menetrend változhat, a pontos időpontokról mindig értesítést küldök a közösségi médiában.",
    "schedule.note2": "Az élő közvetítések a YouTube csatornámon lesznek elérhetőek.",
    "schedule.note3": "Beállíthatsz értesítéseket, hogy ne maradj le egyetlen videóról vagy közvetítésről sem.",
    "schedule.note4": "Különleges események során gyakran nyereményjátékokat szervezek a nézőknek!",

    // Contact page
    "contact.title": "Elérhetőség",
    "contact.description": "Kérdésed van? Ajánlatot tennél? Töltsd ki az alábbi űrlapot vagy keress az elérhetőségeimen!",
    "contact.form": "Kapcsolat űrlap",
    "contact.name": "Név",
    "contact.email": "Email",
    "contact.subject": "Tárgy",
    "contact.message": "Üzenet",
    "contact.send": "Üzenet küldése",
    "contact.sending": "Küldés folyamatban...",
    "contact.sent": "Üzenet elküldve",
    "contact.sent.desc": "Köszönjük üzenetedet! Hamarosan válaszolunk.",
    "contact.contacts": "Elérhetőségek",
    "contact.collaboration": "Együttműködési ajánlatok",
    "contact.collaboration.desc": "Szponzorációs vagy együttműködési ajánlatokkal kapcsolatban kérlek, írj részletes leírást az űrlapon keresztül vagy az alábbi email címre:",
    "contact.response": "Válaszadási idő",
    "contact.response.desc": "Az üzenetekre általában 2-3 munkanapon belül válaszolok. Köszönöm a türelmedet!",

    // 404 page
    "404.title": "404",
    "404.subtitle": "Oldal nem található",
    "404.description": "Az általad keresett oldal nem létezik vagy eltávolították. Kérjük, ellenőrizd a megadott URL-t.",
    "404.home": "Vissza a főoldalra",

    // Form validation
    "validation.name": "A név legalább 2 karakter hosszú kell legyen",
    "validation.email": "Érvénytelen email cím",
    "validation.subject": "A tárgy legalább 5 karakter hosszú kell legyen",
    "validation.message": "Az üzenet legalább 10 karakter hosszú kell legyen",
  }
};

// Create the LanguageProvider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Get the saved language or default to Hungarian
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    return savedLanguage ? savedLanguage : "hu";
  });

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Translation function
  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create a hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
