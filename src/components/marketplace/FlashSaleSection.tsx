import { useState, useEffect } from "react";
import { Clock, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const flashSaleProducts = [
  {
    id: 1,
    name: "Smartphone Gaming Pro Max",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    originalPrice: 8999000,
    salePrice: 4499000,
    discount: 50,
    rating: 4.8,
    sold: 127,
    stock: 200,
    location: "Jakarta Barat"
  },
  {
    id: 2,
    name: "Laptop Ultrabook Premium",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
    originalPrice: 15999000,
    salePrice: 9999000,
    discount: 38,
    rating: 4.9,
    sold: 89,
    stock: 150,
    location: "Bandung"
  },
  {
    id: 3,
    name: "Wireless Earbuds Pro",
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=300&fit=crop",
    originalPrice: 2999000,
    salePrice: 1299000,
    discount: 57,
    rating: 4.7,
    sold: 245,
    stock: 100,
    location: "Surabaya"
  },
  {
    id: 4,
    name: "Smart Watch Series X",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
    originalPrice: 4999000,
    salePrice: 2499000,
    discount: 50,
    rating: 4.6,
    sold: 156,
    stock: 80,
    location: "Yogyakarta"
  }
];

export const FlashSaleSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getStockPercentage = (sold: number, stock: number) => {
    return (sold / (sold + stock)) * 100;
  };

  return (
    <section className="bg-white rounded-lg shadow-soft p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-flash-sale rounded-lg flex items-center justify-center">
              <Clock size={16} className="text-white" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-foreground">Flash Sale</h2>
          </div>
          
          {/* Countdown */}
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-muted-foreground">Berakhir dalam</span>
            <div className="flex items-center space-x-1">
              {[
                { label: 'Jam', value: timeLeft.hours },
                { label: 'Menit', value: timeLeft.minutes },
                { label: 'Detik', value: timeLeft.seconds }
              ].map((time, index) => (
                <div key={time.label} className="flex items-center">
                  <div className="bg-flash-sale text-white px-2 py-1 rounded text-sm font-bold min-w-[40px] text-center">
                    {time.value.toString().padStart(2, '0')}
                  </div>
                  {index < 2 && <span className="mx-1 text-flash-sale font-bold">:</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          Lihat Semua
        </Button>
      </div>

      {/* Category Tabs */}
      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
          <TabsTrigger value="all">Semua</TabsTrigger>
          <TabsTrigger value="electronics">Elektronik</TabsTrigger>
          <TabsTrigger value="fashion">Fashion</TabsTrigger>
          <TabsTrigger value="home">Home</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {flashSaleProducts.map((product) => (
              <div key={product.id} className="bg-white border rounded-lg overflow-hidden hover:shadow-medium transition-shadow cursor-pointer group">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <Badge 
                    variant="destructive" 
                    className="absolute top-2 left-2 bg-discount-bg text-white font-bold"
                  >
                    -{product.discount}%
                  </Badge>
                </div>

                {/* Product Info */}
                <div className="p-3">
                  <h3 className="font-medium text-sm text-foreground mb-2 line-clamp-2 leading-tight">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-flash-sale">
                        {formatPrice(product.salePrice)}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  </div>

                  {/* Stock Progress */}
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>Terjual {product.sold}</span>
                      <span>{getStockPercentage(product.sold, product.stock).toFixed(0)}%</span>
                    </div>
                    <Progress 
                      value={getStockPercentage(product.sold, product.stock)} 
                      className="h-2 bg-muted"
                    />
                  </div>

                  {/* Rating & Location */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Star size={12} className="text-rating-star fill-current" />
                      <span>{product.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={12} />
                      <span>{product.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Other tab contents would be similar */}
        <TabsContent value="electronics">
          <div className="text-center py-8 text-muted-foreground">
            Produk elektronik akan ditampilkan di sini
          </div>
        </TabsContent>
        
        <TabsContent value="fashion">
          <div className="text-center py-8 text-muted-foreground">
            Produk fashion akan ditampilkan di sini
          </div>
        </TabsContent>
        
        <TabsContent value="home">
          <div className="text-center py-8 text-muted-foreground">
            Produk rumah tangga akan ditampilkan di sini
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};
