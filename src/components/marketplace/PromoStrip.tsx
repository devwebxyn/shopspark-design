import { X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const PromoStrip = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-promo-bg border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-2">
            <Sparkles size={16} className="text-accent" />
            <span className="text-sm font-medium text-foreground">
              <span className="font-semibold text-accent">Flash Sale 12.12!</span> Diskon hingga 90% + Gratis Ongkir. Buruan sebelum kehabisan!
            </span>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsVisible(false)}
            className="h-auto p-1 hover:bg-accent/10"
          >
            <X size={14} />
          </Button>
        </div>
      </div>
    </div>
  );
};