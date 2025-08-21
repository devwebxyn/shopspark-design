import { Search, Bell, MessageCircle, Heart, ShoppingCart, User, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-soft">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Left Section */}
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground">MarketPlace</span>
            </div>

            {/* Categories - Desktop */}
            <div className="hidden lg:flex items-center space-x-1">
              <Button variant="ghost" className="flex items-center space-x-1">
                <Menu size={16} />
                <span>Kategori</span>
                <ChevronDown size={14} />
              </Button>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-6">
            <div className="relative w-full">
              <Input
                placeholder="Cari produk, toko, atau kategori..."
                className="w-full pl-4 pr-12 h-10 border-border rounded-lg"
              />
              <Button 
                size="sm"
                className="absolute right-1 top-1 h-8 px-3"
              >
                <Search size={16} />
              </Button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2">
            {/* Desktop Icons */}
            <div className="hidden md:flex items-center space-x-1">
              <Button variant="ghost" size="sm" className="relative">
                <Bell size={20} />
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs">
                  3
                </Badge>
              </Button>
              
              <Button variant="ghost" size="sm" className="relative">
                <MessageCircle size={20} />
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs">
                  2
                </Badge>
              </Button>
              
              <Button variant="ghost" size="sm">
                <Heart size={20} />
              </Button>
              
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart size={20} />
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs">
                  5
                </Badge>
              </Button>
              
              <Button variant="ghost" size="sm">
                <User size={20} />
              </Button>
            </div>

            {/* Mobile Menu */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu size={20} />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Input
              placeholder="Cari produk, toko, atau kategori..."
              className="w-full pl-4 pr-12 h-10"
            />
            <Button 
              size="sm"
              className="absolute right-1 top-1 h-8 px-3"
            >
              <Search size={16} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};