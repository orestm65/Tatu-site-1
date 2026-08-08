import { Star, BadgeCheck, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { artists } from "@/data/tattoo-data";

const Artists = () => {
  return (
    <section id="artists" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="border-primary/40 text-primary mb-4">
            Наша команда
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">
            Мастера <span className="text-primary">INKFORGE</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Профессионалы с многолетним опытом, каждый со своим уникальным стилем
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map((artist) => (
            <Card key={artist.id} className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all">
              <div className="relative overflow-hidden">
                <img
                  src={artist.avatar}
                  alt={artist.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                      {artist.alias}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{artist.name}</h3>
                  <p className="text-sm text-muted-foreground">{artist.role}</p>
                </div>
              </div>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-foreground font-bold">{artist.rating}</span>
                    ({artist.reviews})
                  </span>
                  <span className="text-muted-foreground">{artist.experience}</span>
                </div>
                <Separator />
                <div className="flex flex-wrap gap-1">
                  {artist.styles.map((style) => (
                    <Badge key={style} variant="outline" className="text-xs border-border">
                      {style}
                    </Badge>
                  ))}
                </div>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-full text-primary hover:text-primary hover:bg-primary/10">
                      <MessageSquare className="w-4 h-4" />
                      Подробнее о мастере
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-popover border-border">
                    <div className="flex justify-between space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={artist.avatar} />
                        <AvatarFallback>{artist.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-semibold">{artist.name}</h4>
                          <BadgeCheck className="w-4 h-4 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">{artist.bio}</p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;
