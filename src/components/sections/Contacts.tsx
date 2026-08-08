import { Phone, Mail, MapPin, Clock, Send, Instagram, MessageCircle, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { siteData } from "@/data/tattoo-data";

const Contacts = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Мы ответим вам в течение 24 часов.",
    });
  };

  const contactCards = [
    { icon: Phone, label: "Телефон", value: siteData.phone, href: `tel:${siteData.phone}` },
    { icon: Mail, label: "Email", value: siteData.email, href: `mailto:${siteData.email}` },
    { icon: MapPin, label: "Адрес", value: siteData.address, href: "#map" },
    { icon: Clock, label: "Часы работы", value: siteData.workHours, href: "#booking" },
  ];

  return (
    <section id="contacts" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="border-primary/40 text-primary mb-4">
            Контакты
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">
            Свяжитесь <span className="text-primary">с нами</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Есть вопросы? Напишите нам или приходите в студию — мы всегда рады общению
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactCards.map((card) => (
                <Card key={card.label} className="bg-card border-border hover:border-primary/40 transition-colors">
                  <CardContent className="p-4 space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <card.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{card.label}</p>
                    <a href={card.href} className="text-sm font-semibold text-foreground hover:text-primary transition-colors block">
                      {card.value}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-card border-border overflow-hidden">
              <div className="relative h-64 bg-secondary">
                <img
                  src="https://images.pexels.com/photos/6593432/pexels-photo-6593432.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Студия INKFORGE"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4 border border-border text-center">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-bold text-foreground">{siteData.address}</p>
                    <Button size="sm" variant="outline" className="mt-2 border-primary/30 text-primary">
                      <Navigation className="w-3 h-3" />
                      Построить маршрут
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex gap-3">
              <a href={siteData.social.instagram} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" className="w-full border-border hover:border-primary/40 hover:text-primary">
                  <Instagram className="w-5 h-5" />
                  Instagram
                </Button>
              </a>
              <a href={siteData.social.telegram} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" className="w-full border-border hover:border-primary/40 hover:text-primary">
                  <Send className="w-5 h-5" />
                  Telegram
                </Button>
              </a>
              <a href={siteData.social.vk} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" className="w-full border-border hover:border-primary/40 hover:text-primary">
                  <MessageCircle className="w-5 h-5" />
                  ВКонтакте
                </Button>
              </a>
            </div>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-bold">Форма обратной связи</h3>
              <p className="text-sm text-muted-foreground">
                Заполните форму, и мы свяжемся с вами в течение 24 часов
              </p>
              <Separator />
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Имя *</Label>
                    <Input id="contact-name" required placeholder="Ваше имя" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Телефон *</Label>
                    <Input id="contact-phone" required placeholder="+7 (___) ___-__-__" className="bg-background" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" placeholder="you@example.com" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Сообщение *</Label>
                  <Textarea
                    id="contact-message"
                    required
                    placeholder="Расскажите о вашей идее или задайте вопрос..."
                    className="bg-background min-h-[120px]"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="contact-agree" required />
                  <Label htmlFor="contact-agree" className="text-sm text-muted-foreground font-normal">
                    Согласен с обработкой персональных данных
                  </Label>
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12">
                  <Send className="w-4 h-4" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
