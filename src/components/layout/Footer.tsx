import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Instagram, Send, Youtube, Users, ArrowUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { siteData, navLinks } from "@/data/tattoo-data";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-black text-primary-foreground text-xl">
                I
              </div>
              <span className="text-2xl font-black">
                INK<span className="text-primary">FORGE</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {siteData.tagline}. Профессиональные мастера, стерильное оборудование и уникальные работы с 2016 года.
            </p>
            <div className="flex gap-2">
              <a href={siteData.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={siteData.social.telegram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Send className="w-5 h-5" />
              </a>
              <a href={siteData.social.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-foreground">Навигация</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-foreground">Контакты</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>{siteData.address}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={`tel:${siteData.phone}`} className="hover:text-primary transition-colors">{siteData.phone}</a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={`mailto:${siteData.email}`} className="hover:text-primary transition-colors">{siteData.email}</a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>{siteData.workHours}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-foreground">Рассылка</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Подпишитесь на новости студии и получайте скидки первыми.
            </p>
            <div className="flex gap-2 mb-4">
              <Input placeholder="Ваш email" className="bg-background" />
              <Button className="bg-primary text-primary-foreground shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-primary/30 text-primary">Скидки до 30%</Badge>
              <Badge variant="outline" className="border-primary/30 text-primary">Бесплатная консультация</Badge>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 INKFORGE. Все права защищены.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            <span>5200+ довольных клиентов</span>
          </div>
        </div>
      </div>

      <a
        href="#hero"
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-40 glow-red"
        aria-label="Наверх"
      >
        <ArrowUp className="w-5 h-5" />
      </a>
    </footer>
  );
};

export default Footer;
