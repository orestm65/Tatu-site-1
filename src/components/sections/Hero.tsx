import { ArrowRight, Star, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { heroImages, stats } from "@/data/tattoo-data";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-radial-fade" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <Badge variant="outline" className="border-primary/40 text-primary gap-2 px-4 py-2">
              <Sparkles className="w-3 h-3" />
              Премиум тату-студия в Москве
            </Badge>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-balance">
              ИСКУССТВО<br />
              НА ВАШЕЙ<br />
              <span className="text-primary text-glow">КОЖЕ</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Профессиональные мастера с международным опытом создают уникальные
              татуировки в любой технике. От минимализма до масштабных рукавов —
              воплощаем ваши идеи в вечное искусство.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#booking">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base h-12 px-8 glow-red">
                  Записаться на сеанс
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="#gallery">
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-accent hover:text-accent-foreground font-semibold text-base h-12 px-8">
                  Портфолио работ
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <Separator orientation="vertical" className="h-6" />
              <span className="text-sm text-muted-foreground">
                <span className="text-foreground font-bold">4.9/5</span> · 890+ отзывов
              </span>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={heroImages.main}
                  alt="Тату-мастер за работой"
                  className="w-full h-64 object-cover rounded-xl border border-border shadow-2xl"
                />
                <img
                  src={heroImages.tertiary}
                  alt="Студия тату"
                  className="w-full h-48 object-cover rounded-xl border border-border shadow-2xl"
                />
              </div>
              <div className="pt-12 space-y-4">
                <img
                  src={heroImages.secondary}
                  alt="Процесс татуировки"
                  className="w-full h-48 object-cover rounded-xl border border-border shadow-2xl"
                />
                <img
                  src="https://images.pexels.com/photos/12802253/pexels-photo-12802253.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Готовая работа"
                  className="w-full h-64 object-cover rounded-xl border border-border shadow-2xl"
                />
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm font-bold">10 лет</p>
                  <p className="text-xs text-muted-foreground">на рынке</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-border">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-black text-primary">
                {stat.value.toLocaleString()}{stat.suffix}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
