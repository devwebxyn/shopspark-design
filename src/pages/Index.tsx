import { Header } from "@/components/marketplace/Header";
import { PromoStrip } from "@/components/marketplace/PromoStrip";
import { HeroCarousel } from "@/components/marketplace/HeroCarousel";
import { CategorySidebar } from "@/components/marketplace/CategorySidebar";
import { FlashSaleSection } from "@/components/marketplace/FlashSaleSection";
import { CategoryGrid } from "@/components/marketplace/CategoryGrid";
import { RecommendationSection } from "@/components/marketplace/RecommendationSection";
import { Footer } from "@/components/marketplace/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-muted font-body">
      <Header />
      <PromoStrip />
      
      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <HeroCarousel />
          </div>
          <div className="hidden lg:block">
            <CategorySidebar />
          </div>
        </div>

        {/* Flash Sale */}
        <FlashSaleSection />

        {/* Category Grid */}
        <CategoryGrid />

        {/* Recommendations */}
        <RecommendationSection />
      </div>

      <Footer />
    </div>
  );
};

export default Index;