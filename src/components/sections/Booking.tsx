import { CalendarDays, Clock, User, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import { artists, timeSlots } from "@/data/tattoo-data";

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [artist, setArtist] = useState<string>("");
  const [progress, setProgress] = useState(0);

  const handleBook = () => {
    if (!date || !selectedSlot || !artist) {
      toast({
        title: "Заполните все поля",
        description: "Выберите дату, время и мастера для записи.",
        variant: "destructive",
      });
      return;
    }
    setProgress(100);
    toast({
      title: "Заявка отправлена!",
      description: `Мы свяжемся с вами для подтверждения записи на ${date.toLocaleDateString("ru-RU")} в ${selectedSlot}.`,
    });
  };

  const calculateProgress = () => {
    let p = 0;
    if (date) p += 33;
    if (selectedSlot) p += 33;
    if (artist) p += 34;
    setProgress(p);
  };

  return (
    <section id="booking" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="border-primary/40 text-primary mb-4">
            Бронирование
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">
            Запишитесь на <span className="text-primary">сеанс</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Выберите удобную дату и время. Мы перезвоним для подтверждения.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <Card className="lg:col-span-3 bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarDays className="w-5 h-5 text-primary" />
                Выбор даты и времени
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(d) => {
                    setDate(d);
                    setTimeout(calculateProgress, 0);
                  }}
                  disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                  className="rounded-lg border border-border bg-background"
                />
              </div>

              <Separator />

              <div className="space-y-3">
                <Label className="flex items-center gap-2 text-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  Доступные слоты времени
                </Label>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                  {timeSlots.map((slot) => (
                    <Button
                      key={slot}
                      variant={selectedSlot === slot ? "default" : "outline"}
                      size="sm"
                      onClick={() => {
                        setSelectedSlot(slot);
                        setTimeout(calculateProgress, 0);
                      }}
                      disabled={!date}
                      className={
                        selectedSlot === slot
                          ? "bg-primary text-primary-foreground"
                          : "border-border text-muted-foreground hover:text-primary"
                      }
                    >
                      {slot}
                    </Button>
                  ))}
                </div>
                {!date && (
                  <p className="text-xs text-muted-foreground text-center">
                    Сначала выберите дату в календаре
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Данные записи
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="artist-select">Выберите мастера</Label>
                <Select
                  value={artist}
                  onValueChange={(v) => {
                    setArtist(v);
                    setTimeout(calculateProgress, 0);
                  }}
                >
                  <SelectTrigger id="artist-select" className="bg-background">
                    <SelectValue placeholder="Любой мастер" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    {artists.map((a) => (
                      <SelectItem key={a.id} value={a.name}>
                        {a.name} — {a.role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name-input">Ваше имя</Label>
                <Input id="name-input" placeholder="Иван Иванов" className="bg-background" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone-input">Телефон</Label>
                <Input id="phone-input" placeholder="+7 (___) ___-__-__" className="bg-background" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="desc-input">Описание идеи (необязательно)</Label>
                <Textarea
                  id="desc-input"
                  placeholder="Опишите вашу идею татуировки: стиль, размер, место на теле..."
                  className="bg-background min-h-[80px]"
                />
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Готовность заявки</span>
                  <span className="text-primary font-bold">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2 bg-secondary" />
              </div>

              <Button
                onClick={handleBook}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12"
              >
                <Check className="w-5 h-5" />
                Отправить заявку
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Booking;
