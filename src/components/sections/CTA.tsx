import { ArrowRight, Sparkles, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const CTA = () => {
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <Card className="bg-card border-primary/30 max-w-4xl mx-auto overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

          <CardContent className="p-8 md:p-12 text-center space-y-6 relative z-10">
            <Breadcrumb className="flex justify-center mb-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#hero">Главная</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Бронирование</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <Badge variant="outline" className="border-primary/40 text-primary gap-2">
              <Gift className="w-3 h-3" />
              Специальное предложение
            </Badge>

            <h2 className="text-4xl md:text-5xl font-black leading-tight text-balance">
              Готовы нанести <span className="text-primary">искусство</span> на свою кожу?
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Запишитесь на бесплатную консультацию и получите скидку 15% на первый сеанс.
              Наш менеджер свяжется с вами в течение часа.
            </p>

            <Separator className="max-w-xs mx-auto" />

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#booking">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12 px-8 glow-red">
                  <Sparkles className="w-5 h-5" />
                  Записаться со скидкой
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="#gallery">
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-accent h-12 px-8">
                  Смотреть работы
                </Button>
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              Предложение действует до конца месяца. Не распространяется на лазерное удаление.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
