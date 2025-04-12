
import { useState, useEffect } from "react";
import { ChevronRight, Play, Award, Calendar, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/providers/LanguageProvider";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className={`relative pt-10 md:pt-16 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-6 animate-slide-right">
            <div className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-secondary text-primary">
              <span>{t("home.welcome")}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {t("home.title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              {t("home.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild>
                <a href="https://www.youtube.com/c/AkosChannel06" target="_blank" rel="noreferrer" className="group">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  <span>{t("home.youtube")}</span>
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/menetrend" className="group">
                  <span>{t("home.schedule")}</span>
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="order-first lg:order-last animate-slide-left">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-black/0 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Gaming setup"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 animate-slide-up">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">{t("home.why")}</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t("home.why.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Play className="h-10 w-10" />,
              title: t("home.feature.videos"),
              description: t("home.feature.videos.desc"),
            },
            {
              icon: <Monitor className="h-10 w-10" />,
              title: t("home.feature.streams"),
              description: t("home.feature.streams.desc"),
            },
            {
              icon: <Award className="h-10 w-10" />,
              title: t("home.feature.quality"),
              description: t("home.feature.quality.desc"),
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-secondary/50 border hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-3 rounded-full bg-primary text-primary-foreground mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Videos */}
      <section className="py-8 animate-slide-up">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">{t("home.latest")}</h2>
            <p className="text-muted-foreground mt-2">{t("home.latest.desc")}</p>
          </div>
          <Button variant="outline" asChild>
            <a href="https://www.youtube.com/c/AkosChannel06/videos" target="_blank" rel="noreferrer" className="group">
              <span>{t("home.more")}</span>
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: t("video.title1"),
              date: t("video.date1"),
              thumbnail: "https://i.ytimg.com/vi/lQt0mK9Y-AI/maxresdefault.jpg",
              videoId: "lQt0mK9Y-AI"
            },
            {
              title: t("video.title2"),
              date: t("video.date2"),
              thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
            },
            {
              title: t("video.title3"),
              date: t("video.date3"),
              thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
            },
          ].map((video, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden border bg-card hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-10">
                  <Button 
                    size="icon" 
                    variant="secondary" 
                    className="h-12 w-12 rounded-full"
                    onClick={() => {
                      if (video.videoId) {
                        window.open(`https://youtu.be/${video.videoId}`, "_blank");
                      }
                    }}
                  >
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="text-sm text-muted-foreground mb-2">{video.date}</div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-200">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 animate-slide-up">
        <div className="rounded-2xl bg-gradient-to-r from-secondary to-secondary/30 p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold">{t("home.join")}</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t("home.join.desc")}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <a href="https://www.youtube.com/c/AkosChannel06" target="_blank" rel="noreferrer">
                  <Play className="mr-2 h-5 w-5" />
                  <span>{t("home.subscribe")}</span>
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/elerhetoseg">
                  <span>{t("home.contact")}</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
