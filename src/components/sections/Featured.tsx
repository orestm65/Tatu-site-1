import { Flame, TrendingUp, Eye, ThumbsUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { galleryImages, artists } from "@/data/tattoo-data";

const Featured = () => {
  const topWorks = galleryImages.slice(0, 3);
  const topArtist = artists[0];

  return (
    <section id="featured" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="border-primary/40 text-primary mb-4 gap-2">
            <Flame className="w-3 h-3" />
            Хиты месяца
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">
            Топовые <span className="text-primary">работы</span> и мастера
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Самые популярные работы этого месяца по просмотрам и отзывам
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {topWorks.map((work, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden group hover:border-primary/40 transition-all">
              <div className="relative overflow-hidden h-64">
                <img
                  src={work.url}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <Badge className="bg-primary text-primary-foreground gap-1">
                    <TrendingUp className="w-3 h-3" />
                    #{index + 1}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold">{work.title}</h3>
                  <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                    {work.style}
                  </Badge>
                </div>
                <Separator />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4 text-primary" />
                    {(1200 - index * 150).toLocaleString()} просмотров
                  </span>
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4 text-primary" />
                    {(89 - index * 7)} отзывов
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">Мастер: {work.artist}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-12" />

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-6 space-y-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                Мастер месяца
              </Badge>
              <div className="flex items-center gap-4">
                <img
                  src={topArtist.avatar}
                  alt={topArtist.name}
                  className="w-20 h-20 rounded-xl object-cover border-2 border-primary/30"
                />
                <div>
                  <h3 className="text-xl font-black">{topArtist.name}</h3>
                  <p className="text-sm text-muted-foreground">{topArtist.role}</p>
                  <p className="text-xs text-primary font-bold mt-1">
                    {topArtist.rating} ★ · {topArtist.reviews} отзывов
                  </p>
                </div>
              </div>
              <Separator />
              <p className="text-sm text-muted-foreground">{topArtist.bio}</p>
              <div className="flex flex-wrap gap-2">
                {topArtist.styles.map((style) => (
                  <Badge key={style} variant="outline" className="border-border text-xs">
                    {style}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h3 className="text-2xl font-black">Загрузка новых работ...</h3>
            <p className="text-muted-foreground text-sm">
              Наши мастера постоянно работают над новыми проектами. Вот что скоро появится в портфолио:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="bg-card border-border">
                  <CardContent className="p-3 space-y-2">
                    <Skeleton className="w-full h-24 rounded-md" />
                    <Skeleton className="h-3 w-3/4" />
                    <Skeleton className="h-2 w-1/2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
