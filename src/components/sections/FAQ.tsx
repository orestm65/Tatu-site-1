import { Circle as HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { faqItems } from "@/data/tattoo-data";

const FAQ = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="border-primary/40 text-primary mb-4">
            Вопросы
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">
            Частые <span className="text-primary">вопросы</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Собрали ответы на самые популярные вопросы
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-4 data-[state=open]:border-primary/40 transition-colors"
            >
              <AccordionTrigger className="text-left hover:no-underline text-foreground">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-semibold">{item.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pl-8">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-8">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                Не нашли ответ? Задайте вопрос
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-background border-border">
              <DialogHeader>
                <DialogTitle>Задать вопрос</DialogTitle>
                <DialogDescription>
                  Заполните форму, и мы ответим на ваш вопрос в течение 24 часов.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <input className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm" placeholder="Ваше имя" />
                <input className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm" placeholder="Email или телефон" />
                <textarea className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm min-h-[100px]" placeholder="Ваш вопрос" />
                <Button className="w-full bg-primary text-primary-foreground">Отправить вопрос</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
