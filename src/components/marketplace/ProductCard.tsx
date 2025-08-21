import { Star, MapPin, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    image: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    rating: number;
    sold: number;
    location: string;
    isOfficialStore?: boolean;
    isFreeShipping?: boolean;
  };
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-white border rounded-lg overflow-hidden hover:shadow-medium transition-all cursor-pointer group">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {product.discount && (
            <Badge variant="destructive" className="bg-discount-bg text-white font-bold text-xs">
              -{product.discount}%
            </Badge>
          )}
          {product.isOfficialStore && (
            <Badge className="bg-primary text-primary-foreground text-xs">
              Official
            </Badge>
          )}
        </div>

        {/* Quick Add Button - Appears on Hover */}
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="sm"
            className="bg-white hover:bg-primary text-primary hover:text-primary-foreground shadow-medium rounded-full w-8 h-8 p-0"
          >
            <Plus size={16} />
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-3">
        <h3 className="font-medium text-sm text-foreground mb-2 line-clamp-2 leading-tight min-h-[40px]">
          {product.name}
        </h3>

        {/* Price */}
        <div className="mb-2">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-primary">
              {formatPrice(product.price)}
            </span>
          </div>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Free Shipping Badge */}
        {product.isFreeShipping && (
          <Badge variant="secondary" className="mb-2 text-xs bg-green-50 text-green-700 border-green-200">
            Gratis Ongkir
          </Badge>
        )}

        {/* Rating, Sold & Location */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-1">
              <Star size={12} className="text-rating-star fill-current" />
              <span className="text-muted-foreground">{product.rating}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{product.sold} terjual</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
            <MapPin size={12} />
            <span>{product.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};