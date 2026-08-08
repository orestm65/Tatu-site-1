import { TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { tattooStyles } from "@/data/tattoo-data";

const Styles = () => {
  return (
    <section id="styles" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="border-primary/40 text-primary mb-4">
            Направления
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">
            Стили <span className="text-primary">татуировок</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Выберите стиль, который отражает вашу личность
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tattooStyles.map((style) => (
            <Card key={style.name} className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all">
              <div className="relative overflow-hidden h-56">
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <h3 className="text-xl font-black text-foreground">{style.name}</h3>
                </div>
              </div>
              <CardContent className="p-4 space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">{style.description}</p>
                <Separator />
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <TrendingUp className="w-3 h-3" />
                      Популярность
                    </span>
                    <span className="text-primary font-bold">{style.popularity}%</span>
                  </div>
                  <Progress value={style.popularity} className="h-2 bg-secondary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Styles;
