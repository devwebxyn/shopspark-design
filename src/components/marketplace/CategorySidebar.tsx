import { 
  Smartphone, 
  Laptop, 
  Shirt, 
  Home, 
  Car, 
  Heart, 
  Baby, 
  Gamepad2,
  Book,
  Camera,
  Music,
  Dumbbell
} from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { icon: Smartphone, name: "Elektronik", color: "text-blue-600" },
  { icon: Shirt, name: "Fashion", color: "text-pink-600" },
  { icon: Home, name: "Rumah Tangga", color: "text-green-600" },
  { icon: Heart, name: "Kecantikan", color: "text-red-600" },
  { icon: Car, name: "Otomotif", color: "text-gray-600" },
  { icon: Baby, name: "Ibu & Bayi", color: "text-purple-600" },
  { icon: Gamepad2, name: "Gaming", color: "text-indigo-600" },
  { icon: Book, name: "Buku", color: "text-orange-600" },
  { icon: Camera, name: "Fotografi", color: "text-cyan-600" },
  { icon: Music, name: "Musik", color: "text-yellow-600" },
  { icon: Dumbbell, name: "Olahraga", color: "text-teal-600" },
  { icon: Laptop, name: "Komputer", color: "text-slate-600" }
];

export const CategorySidebar = () => {
  return (
    <div className="bg-white rounded-lg shadow-soft p-4">
      <h3 className="font-heading font-semibold text-foreground mb-4">
        Kategori Populer
      </h3>
      <div className="space-y-1">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant="ghost"
            className="w-full justify-start h-auto py-3 px-3 text-left hover:bg-muted/50"
          >
            <category.icon size={18} className={`mr-3 ${category.color}`} />
            <span className="text-sm text-foreground">{category.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};