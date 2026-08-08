import { Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { pricingTable } from "@/data/tattoo-data";

const Pricing = () => {
  const formatPrice = (price: number) => price.toLocaleString("ru-RU") + " ₽";

  return (
    <section id="pricing" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="border-primary/40 text-primary mb-4">
            Цены
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">
            Прозрачное <span className="text-primary">ценообразование</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Стоимость зависит от размера, сложности и мастера. Точную цену назовём после консультации.
          </p>
        </div>

        <Tabs defaultValue="table" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-secondary">
            <TabsTrigger value="table" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Таблица цен
            </TabsTrigger>
            <TabsTrigger value="cards" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Карточки
            </TabsTrigger>
          </TabsList>

          <TabsContent value="table">
            <Card className="bg-card border-border">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border hover:bg-transparent">
                      <TableHead className="text-foreground font-bold">Размер</TableHead>
                      <TableHead className="text-foreground font-bold">Мин. цена</TableHead>
                      <TableHead className="text-foreground font-bold">Макс. цена</TableHead>
                      <TableHead className="text-foreground font-bold">Среднее время</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pricingTable.map((row) => (
                      <TableRow key={row.size} className="border-border">
                        <TableCell className="font-semibold">{row.size}</TableCell>
                        <TableCell className="text-primary font-bold">{formatPrice(row.minPrice)}</TableCell>
                        <TableCell className="text-primary font-bold">{formatPrice(row.maxPrice)}</TableCell>
                        <TableCell className="text-muted-foreground">{row.avgTime}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cards">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pricingTable.map((row) => (
                <Card key={row.size} className="bg-card border-border hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg">{row.size}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">От</span>
                      <span className="font-bold text-primary">{formatPrice(row.minPrice)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">До</span>
                      <span className="font-bold text-primary">{formatPrice(row.maxPrice)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Время</span>
                      <span className="text-foreground">{row.avgTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Alert className="max-w-4xl mx-auto mt-8 bg-secondary border-border">
          <Info className="w-5 h-5 text-primary" />
          <AlertTitle className="text-foreground">Важно</AlertTitle>
          <AlertDescription className="text-muted-foreground">
            Указаны ориентировочные цены. Финальная стоимость зависит от сложности эскиза,
            выбранного мастера и количества сеансов. Консультация — всегда бесплатно.
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
};

export default Pricing;
