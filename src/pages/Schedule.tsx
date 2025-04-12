
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Monitor, Video, Youtube } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

const Schedule = () => {
  const { t } = useLanguage();

  const weeklySchedule = [
    {
      day: t("schedule.monday"),
      events: [
        { type: "video", title: t("schedule.event.mon"), time: "18:00", game: t("schedule.game.various") }
      ]
    },
    {
      day: t("schedule.tuesday"),
      events: [
        { type: "stream", title: t("schedule.event.tue"), time: "20:00", game: "Fortnite" }
      ]
    },
    {
      day: t("schedule.wednesday"),
      events: [
        { type: "video", title: t("schedule.event.wed"), time: "17:00", game: "-" }
      ]
    },
    {
      day: t("schedule.thursday"),
      events: [
        { type: "stream", title: t("schedule.event.thu"), time: "19:00", game: "Call of Duty" }
      ]
    },
    {
      day: t("schedule.friday"),
      events: [
        { type: "video", title: t("schedule.event.fri1"), time: "16:00", game: "-" },
        { type: "stream", title: t("schedule.event.fri2"), time: "20:00", game: t("schedule.game.various") }
      ]
    },
    {
      day: t("schedule.saturday"),
      events: [
        { type: "stream", title: t("schedule.event.sat"), time: "14:00", game: t("schedule.game.various") }
      ]
    },
    {
      day: t("schedule.sunday"),
      events: [
        { type: "video", title: t("schedule.event.sun"), time: "12:00", game: "-" }
      ]
    }
  ];

  const upcomingSpecialEvents = [
    {
      title: t("schedule.special1"),
      date: t("schedule.special1.date"),
      time: "12:00",
      description: t("schedule.special1.desc"),
      type: "stream"
    },
    {
      title: t("schedule.special2"),
      date: t("schedule.special2.date"),
      time: "18:00",
      description: t("schedule.special2.desc"),
      type: "video"
    },
    {
      title: t("schedule.special3"),
      date: t("schedule.special3.date"),
      time: "19:00",
      description: t("schedule.special3.desc"),
      type: "stream"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{t("schedule.title")}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("schedule.description")}
        </p>
      </div>

      {/* Weekly Schedule */}
      <div className="mb-16 animate-slide-up">
        <div className="flex items-center gap-2 mb-6">
          <Calendar className="h-6 w-6" />
          <h2 className="text-2xl font-bold">{t("schedule.weekly")}</h2>
        </div>
        
        <div className="space-y-6">
          {weeklySchedule.map((day, index) => (
            <div 
              key={index} 
              className="p-4 rounded-lg border hover:shadow-md transition-shadow duration-300 bg-card"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <h3 className="text-xl font-semibold mb-3">{day.day}</h3>
              <div className="space-y-3">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="flex items-center justify-between bg-secondary/40 rounded-md p-3">
                    <div className="flex items-center gap-3">
                      {event.type === "video" ? 
                        <Video className="h-5 w-5 text-primary" /> : 
                        <Monitor className="h-5 w-5 text-primary" />
                      }
                      <div>
                        <div className="font-medium">{event.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {event.game !== "-" ? `${t("schedule.game")}: ${event.game}` : ""}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={event.type === "video" ? "outline" : "default"}>
                        {event.type === "video" ? t("schedule.type.video") : t("schedule.type.stream")}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm font-medium">
                        <Clock className="h-4 w-4" />
                        {event.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Special Events */}
      <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
        <div className="flex items-center gap-2 mb-6">
          <Youtube className="h-6 w-6" />
          <h2 className="text-2xl font-bold">{t("schedule.special")}</h2>
        </div>

        <div className="space-y-6">
          {upcomingSpecialEvents.map((event, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border bg-card hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant={event.type === "video" ? "outline" : "default"}>
                    {event.type === "video" ? t("schedule.type.video") : t("schedule.type.stream")}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">{event.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Schedule Notes */}
      <div className="mt-16 p-6 rounded-xl bg-secondary/30 border animate-slide-up" style={{ animationDelay: "400ms" }}>
        <h3 className="text-xl font-semibold mb-4">{t("schedule.notes")}</h3>
        <ul className="space-y-2 text-muted-foreground list-disc pl-5">
          <li>{t("schedule.note1")}</li>
          <li>{t("schedule.note2")}</li>
          <li>{t("schedule.note3")}</li>
          <li>{t("schedule.note4")}</li>
        </ul>
      </div>
    </div>
  );
};

export default Schedule;
