import { Calendar, ClipboardList, PenTool, Scissors, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { processSteps } from "@/data/tattoo-data";

const icons = [ClipboardList, Calendar, PenTool, Scissors, ShieldCheck];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="border-primary/40 text-primary mb-4">
            Как мы работаем
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">
            Процесс <span className="text-primary">от идеи до результата</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Прозрачный путь в 5 шагов — вы всегда знаете, что происходит
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-border" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => {
              const Icon = icons[index] || ClipboardList;
              return (
                <div key={step.step} className="relative">
                  <Card className="bg-card border-border hover:border-primary/40 transition-all h-full">
                    <CardContent className="p-6 text-center space-y-3">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto relative z-10 border-2 border-primary/20">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="text-3xl font-black text-primary/20">
                        {String(step.step).padStart(2, "0")}
                      </div>
                      <h3 className="font-bold text-lg">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        <Separator className="my-12" />

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-4xl font-black text-primary">1 день</p>
            <p className="text-sm text-muted-foreground mt-1">на ответ по заявке</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-primary">3–7 дней</p>
            <p className="text-sm text-muted-foreground mt-1">на создание эскиза</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-primary">1–30 дней</p>
            <p className="text-sm text-muted-foreground mt-1">до готовой татуировки</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
