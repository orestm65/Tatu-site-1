import { CircleCheck as CheckCircle2, Shield, Award, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { studioImages } from "@/data/tattoo-data";

const aboutFeatures = [
  { icon: Shield, title: "Стерильность", desc: "Одноразовые материалы, автоклав, европейские стандарты" },
  { icon: Award, title: "Опыт", desc: "Мастера с международным опытом и наградами" },
  { icon: Heart, title: "Индивидуальность", desc: "Уникальные эскизы под каждого клиента" },
  { icon: CheckCircle2, title: "Гарантия", desc: "Бесплатная коррекция и поддержка после сеанса" },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="border-primary/40 text-primary">
              О студии
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-balance">
              Студия, где <span className="text-primary">искусство</span> встречается с мастерством
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              INKFORGE — это не просто тату-салон, это пространство для творчества.
              С 2016 года мы создаём татуировки, которые рассказывают истории.
              Каждый мастер — художник со своим почерком и стилем.
            </p>
            <Separator />
            <div className="grid sm:grid-cols-2 gap-4">
              {aboutFeatures.map((feature) => (
                <Card key={feature.title} className="bg-card border-border hover:border-primary/40 transition-colors">
                  <CardHeader className="pb-3">
                    <feature.icon className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-base">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src={studioImages[0]} alt="Студия" className="w-full h-80 object-cover rounded-xl border border-border" />
            <img src={studioImages[1]} alt="Интерьер" className="w-full h-64 object-cover rounded-xl border border-border mt-8" />
            <img src={studioImages[4]} alt="Рабочее место" className="w-full h-64 object-cover rounded-xl border border-border -mt-8" />
            <img src={studioImages[5]} alt="Процесс" className="w-full h-80 object-cover rounded-xl border border-border" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
