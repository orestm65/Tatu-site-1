import { useState } from "react";
import { ListFilter as Filter, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { galleryImages, galleryFilters } from "@/data/tattoo-data";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("Все");

  const filteredImages =
    activeFilter === "Все"
      ? galleryImages
      : galleryImages.filter((img) => img.style === activeFilter);

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="border-primary/40 text-primary mb-4">
            Портфолио
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">
            Галерея <span className="text-primary">работ</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Более 12 000 уникальных татуировок. Вот лишь малая часть наших работ
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <Filter className="w-4 h-4 text-muted-foreground self-center mr-2" />
          {galleryFilters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className={
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-primary"
              }
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filteredImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="break-inside-avoid mb-4 bg-card border-border overflow-hidden cursor-pointer group relative hover:border-primary/50 transition-all">
                  <div className="relative overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <div>
                        <p className="text-sm font-bold text-foreground">{image.title}</p>
                        <p className="text-xs text-muted-foreground">{image.artist}</p>
                        <Badge variant="secondary" className="mt-1 bg-primary/20 text-primary border-primary/30 text-xs">
                          {image.style}
                        </Badge>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-4 h-4 text-foreground" />
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl bg-background border-border p-0 overflow-hidden">
                <img src={image.url} alt={image.title} className="w-full max-h-[80vh] object-contain" />
                <div className="p-4 space-y-2">
                  <h3 className="text-xl font-bold">{image.title}</h3>
                  <p className="text-muted-foreground">Мастер: {image.artist}</p>
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    {image.style}
                  </Badge>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
