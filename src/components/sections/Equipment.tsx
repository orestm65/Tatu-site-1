import { Sparkles, CircleCheck as CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { equipmentImages } from "@/data/tattoo-data";

const equipmentFeatures = [
  "Одноразовые иглы и картриджи",
  "Автоклавовая стерилизация класса B",
  "Премиум краски Eternal & Dynamic",
  "Барьерная защита оборудования",
  "Перчатки нитриловые медицинские",
  "Дезинфекция поверхностей после каждого клиента",
];

const Equipment = () => {
  return (
    <section id="equipment" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <Badge variant="outline" className="border-primary/40 text-primary">
              <Sparkles className="w-3 h-3" />
              Оборудование
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-balance">
              Премиум <span className="text-primary">оборудование</span> и материалы
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Мы используем только сертифицированное оборудование и расходники
              от ведущих мировых производителей. Безопасность и качество —
              наш абсолютный приоритет.
            </p>
            <Separator />
            <div className="space-y-3">
              {equipmentFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <ScrollArea className="h-[500px] pr-4">
                <div className="grid grid-cols-2 gap-3">
                  {equipmentImages.map((img, index) => (
                    <div
                      key={index}
                      className={`relative overflow-hidden rounded-lg border border-border group ${
                        index % 3 === 0 ? "col-span-2" : ""
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Оборудование ${index + 1}`}
                        className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                          index % 3 === 0 ? "h-48" : "h-36"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
