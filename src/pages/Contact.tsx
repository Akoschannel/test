
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  AtSign, 
  Mail, 
  MessageSquare, 
  Send, 
  Youtube, 
  Twitch, 
  Instagram,
  RefreshCw,
} from "lucide-react";
import { Discord, Steam, SteamGroup } from "@/components/CustomIcons";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/providers/LanguageProvider";

const MAX_MESSAGE_LENGTH = 500;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t, language } = useLanguage();
  
  // Simple captcha state
  const [captchaValue, setCaptchaValue] = useState<string>("");
  const [userCaptchaInput, setUserCaptchaInput] = useState<string>("");
  const [captchaError, setCaptchaError] = useState<string>("");
  
  // Generate a simple captcha code
  const generateCaptcha = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaValue(result);
    setUserCaptchaInput("");
    setCaptchaError("");
  };
  
  // Initialize captcha when component mounts
  const captchaInitialized = useRef(false);
  if (!captchaInitialized.current) {
    generateCaptcha();
    captchaInitialized.current = true;
  }

  const formSchema = z.object({
    name: z.string().min(2, { message: t("validation.name") }),
    email: z.string().email({ message: t("validation.email") }),
    subject: z.string().min(5, { message: t("validation.subject") }),
    message: z.string()
      .min(10, { message: t("validation.message") })
      .max(MAX_MESSAGE_LENGTH, { 
        message: language === "en" 
          ? `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters` 
          : `Az üzenet nem haladhatja meg a ${MAX_MESSAGE_LENGTH} karaktert` 
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const messageValue = form.watch("message") || "";
  const characterCount = messageValue.length;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Validate captcha
    if (userCaptchaInput.toUpperCase() !== captchaValue) {
      setCaptchaError(language === "en" 
        ? "Incorrect captcha code. Please try again." 
        : "Helytelen captcha kód. Kérlek próbáld újra.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    console.log("Form values:", values);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    form.reset();
    setUserCaptchaInput("");
    generateCaptcha();
    
    toast({
      title: t("contact.sent"),
      description: t("contact.sent.desc"),
    });
  };

  const contactInfo = [
    { 
      icon: <Mail className="h-6 w-6" />, 
      title: "Email", 
      content: "akoschannelyt@gmail.com",
      link: "mailto:akoschannelyt@gmail.com"
    },
    { 
      icon: <Youtube className="h-6 w-6" />, 
      title: "YouTube", 
      content: "youtube.com/c/AkosChannel06",
      link: "https://youtube.com/c/AkosChannel06"
    },
    { 
      icon: <Twitch className="h-6 w-6" />, 
      title: "Twitch", 
      content: "twitch.tv/akos581",
      link: "https://twitch.tv/akos581"
    },
    { 
      icon: <Discord className="h-6 w-6" />, 
      title: "Discord", 
      content: "discord.gg/UkQjZVy",
      link: "https://discord.gg/UkQjZVy"
    },
    { 
      icon: <Instagram className="h-6 w-6" />, 
      title: "Instagram", 
      content: "instagram.com/akos581",
      link: "https://instagram.com/akos581"
    },
    { 
      icon: <Steam className="h-6 w-6" />, 
      title: language === "en" ? "Steam Profile" : "Steam Profil", 
      content: "steamcommunity.com/id/Akos581",
      link: "https://steamcommunity.com/id/Akos581"
    },
    { 
      icon: <SteamGroup className="h-6 w-6" />, 
      title: language === "en" ? "Steam Group" : "Steam Csoport", 
      content: "steamcommunity.com/groups/Akostak",
      link: "https://steamcommunity.com/groups/Akostak"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{t("contact.title")}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("contact.description")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="animate-slide-right">
          <div className="p-6 rounded-xl border bg-card">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="h-5 w-5" />
              <h2 className="text-xl font-bold">{t("contact.form")}</h2>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.name")}</FormLabel>
                      <FormControl>
                        <Input placeholder={language === "en" ? "Your full name" : "Teljes neved"} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.email")}</FormLabel>
                      <FormControl>
                        <Input placeholder={language === "en" ? "email@example.com" : "email@pelda.hu"} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.subject")}</FormLabel>
                      <FormControl>
                        <Input placeholder={language === "en" ? "Subject of your message" : "Üzeneted tárgya"} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.message")}</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Textarea 
                            placeholder={language === "en" ? "Write your message here..." : "Írd ide üzenetedet..."} 
                            className="min-h-[120px] resize-none" 
                            maxLength={MAX_MESSAGE_LENGTH}
                            {...field} 
                          />
                          <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
                            {characterCount}/{MAX_MESSAGE_LENGTH}
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Simple Captcha Field */}
                <div className="space-y-2">
                  <FormLabel>{language === "en" ? "Verification Code" : "Ellenőrző Kód"}</FormLabel>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="bg-secondary/60 px-4 py-2 rounded font-mono text-lg tracking-wider select-none min-w-24 text-center">
                      {captchaValue}
                    </div>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="icon" 
                      onClick={generateCaptcha}
                      aria-label={language === "en" ? "Refresh captcha" : "Captcha frissítése"}
                    >
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                  <Input
                    type="text"
                    placeholder={language === "en" ? "Enter the code above" : "Írd be a fenti kódot"}
                    value={userCaptchaInput}
                    onChange={(e) => {
                      setUserCaptchaInput(e.target.value);
                      setCaptchaError("");
                    }}
                    className={captchaError ? "border-destructive" : ""}
                  />
                  {captchaError && (
                    <p className="text-sm font-medium text-destructive">{captchaError}</p>
                  )}
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>{t("contact.sending")}</>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      {t("contact.send")}
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="animate-slide-left">
          <div className="p-6 rounded-xl border bg-card h-full">
            <div className="flex items-center gap-2 mb-6">
              <AtSign className="h-5 w-5" />
              <h2 className="text-xl font-bold">{t("contact.contacts")}</h2>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center p-4 rounded-lg bg-secondary/40 hover:bg-secondary/60 transition-colors duration-200"
                >
                  <div className="p-3 rounded-full bg-primary text-primary-foreground mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {item.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">{t("contact.collaboration")}</h3>
              <p className="text-muted-foreground mb-4">
                {t("contact.collaboration.desc")}
              </p>
              <div className="p-4 rounded-lg bg-secondary/40 flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <a 
                  href="mailto:akoschannelyt@gmail.com" 
                  className="text-primary hover:underline"
                >
                  akoschannelyt@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">{t("contact.response")}</h3>
              <p className="text-muted-foreground">
                {t("contact.response.desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
