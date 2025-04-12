
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/providers/LanguageProvider";

const FAQ = () => {
  const { t } = useLanguage();

  const faqItems = [
    {
      question: t("faq.q1"),
      answer: t("faq.a1")
    },
    {
      question: t("faq.q2"),
      answer: t("faq.a2")
    },
    {
      question: t("faq.q3"),
      answer: t("faq.a3")
    },
    {
      question: t("faq.q4"),
      answer: t("faq.a4")
    },
    {
      question: t("faq.q5"),
      answer: t("faq.a5")
    },
    {
      question: t("faq.q6"),
      answer: t("faq.a6")
    },
    {
      question: t("faq.q7"),
      answer: t("faq.a7")
    },
    {
      question: t("faq.q8"),
      answer: t("faq.a8")
    },
    {
      question: t("faq.q9"),
      answer: t("faq.a9")
    },
    {
      question: t("faq.q10"),
      answer: t("faq.a10")
    }
  ];

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{t("faq.title")}</h1>
        <p className="text-lg text-muted-foreground">
          {t("faq.description")}
        </p>
      </div>

      <div className="space-y-6">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
              <AccordionTrigger className="text-lg font-medium">{item.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-16 p-6 border rounded-xl bg-secondary/30 animate-slide-up">
        <h3 className="text-xl font-semibold mb-4">{t("faq.not.found")}</h3>
        <p className="text-muted-foreground mb-4">
          {t("faq.not.found.desc")}
        </p>
        <div className="flex justify-end">
          <a href="/elerhetoseg" className="text-primary hover:underline">
            {t("faq.contact")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
