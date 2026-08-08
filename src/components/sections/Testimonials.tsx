import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/tattoo-data";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="border-primary/40 text-primary mb-4">
            Отзывы
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">
            Что говорят <span className="text-primary">клиенты</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Более 890 отзывов со средней оценкой 4.9 из 5
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.name} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-card border-border h-full hover:border-primary/40 transition-colors">
                  <CardContent className="p-6 space-y-4 h-full flex flex-col">
                    <Quote className="w-8 h-8 text-primary/30" />
                    <div className="flex items-center gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      "{testimonial.text}"
                    </p>
                    <Separator />
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm text-foreground truncate">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {testimonial.style}
                      </Badge>
                      <span className="text-muted-foreground">Мастер: {testimonial.artist}</span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
