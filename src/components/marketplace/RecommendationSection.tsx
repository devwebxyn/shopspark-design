import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "./ProductCard";
import { RefreshCw } from "lucide-react";

const recommendedProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro Max 256GB Natural Titanium",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    price: 21999000,
    originalPrice: 23999000,
    discount: 8,
    rating: 4.9,
    sold: 523,
    location: "Jakarta Pusat",
    isOfficialStore: true,
    isFreeShipping: true
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra 512GB Titanium Gray",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    price: 19999000,
    rating: 4.8,
    sold: 342,
    location: "Jakarta Selatan",
    isOfficialStore: true,
    isFreeShipping: true
  },
  {
    id: 3,
    name: "MacBook Air M3 13-inch 256GB Midnight",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
    price: 18999000,
    originalPrice: 19999000,
    discount: 5,
    rating: 4.9,
    sold: 187,
    location: "Bandung",
    isOfficialStore: true,
    isFreeShipping: true
  },
  {
    id: 4,
    name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    price: 4499000,
    originalPrice: 4999000,
    discount: 10,
    rating: 4.7,
    sold: 891,
    location: "Surabaya",
    isFreeShipping: true
  },
  {
    id: 5,
    name: "Dell XPS 13 Plus Intel Core i7 32GB RAM",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
    price: 28999000,
    rating: 4.6,
    sold: 145,
    location: "Yogyakarta",
    isFreeShipping: true
  },
  {
    id: 6,
    name: "iPad Pro 12.9-inch M2 WiFi 128GB Space Gray",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop",
    price: 15999000,
    originalPrice: 16999000,
    discount: 6,
    rating: 4.8,
    sold: 267,
    location: "Jakarta Barat",
    isOfficialStore: true,
    isFreeShipping: true
  },
  {
    id: 7,
    name: "Canon EOS R5 Body Only Professional Camera",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=300&fit=crop",
    price: 52999000,
    rating: 4.9,
    sold: 89,
    location: "Medan",
    isFreeShipping: true
  },
  {
    id: 8,
    name: "Nintendo Switch OLED Model Neon Blue/Red",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
    price: 4899000,
    originalPrice: 5299000,
    discount: 8,
    rating: 4.7,
    sold: 445,
    location: "Semarang",
    isFreeShipping: true
  }
];

export const RecommendationSection = () => {
  const [currentProducts, setCurrentProducts] = useState(recommendedProducts.slice(0, 8));
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = () => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setCurrentProducts(prev => [...prev, ...recommendedProducts]);
      setIsLoading(false);
    }, 1000);
  };

  const refresh = () => {
    setIsLoading(true);
    // Simulate refresh delay
    setTimeout(() => {
      const shuffled = [...recommendedProducts].sort(() => Math.random() - 0.5);
      setCurrentProducts(shuffled.slice(0, 8));
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="bg-white rounded-lg shadow-soft p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-heading font-bold text-foreground">Rekomendasi Untukmu</h2>
        <Button
          variant="outline"
          size="sm"
          onClick={refresh}
          disabled={isLoading}
          className="flex items-center space-x-2"
        >
          <RefreshCw size={16} className={isLoading ? "animate-spin" : ""} />
          <span>Refresh</span>
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-6">
        {currentProducts.map((product) => (
          <ProductCard key={`${product.id}-${Math.random()}`} product={product} />
        ))}
      </div>

      <div className="text-center">
        <Button
          variant="outline"
          onClick={loadMore}
          disabled={isLoading}
          className="min-w-[200px] border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          {isLoading ? "Memuat..." : "Muat Lebih Banyak"}
        </Button>
      </div>
    </section>
  );
};