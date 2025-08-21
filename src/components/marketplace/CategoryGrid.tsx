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

const categories = [
  { 
    icon: Smartphone, 
    name: "Elektronik", 
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=200&h=200&fit=crop",
    bgColor: "bg-blue-50"
  },
  { 
    icon: Shirt, 
    name: "Fashion", 
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=200&fit=crop",
    bgColor: "bg-pink-50"
  },
  { 
    icon: Home, 
    name: "Rumah Tangga", 
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop",
    bgColor: "bg-green-50"
  },
  { 
    icon: Heart, 
    name: "Kecantikan", 
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop",
    bgColor: "bg-red-50"
  },
  { 
    icon: Car, 
    name: "Otomotif", 
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=200&h=200&fit=crop",
    bgColor: "bg-gray-50"
  },
  { 
    icon: Baby, 
    name: "Ibu & Bayi", 
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=200&h=200&fit=crop",
    bgColor: "bg-purple-50"
  },
  { 
    icon: Gamepad2, 
    name: "Gaming", 
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=200&h=200&fit=crop",
    bgColor: "bg-indigo-50"
  },
  { 
    icon: Book, 
    name: "Buku", 
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=200&fit=crop",
    bgColor: "bg-orange-50"
  },
  { 
    icon: Camera, 
    name: "Fotografi", 
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=200&h=200&fit=crop",
    bgColor: "bg-cyan-50"
  },
  { 
    icon: Music, 
    name: "Musik", 
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop",
    bgColor: "bg-yellow-50"
  },
  { 
    icon: Dumbbell, 
    name: "Olahraga", 
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop",
    bgColor: "bg-teal-50"
  },
  { 
    icon: Laptop, 
    name: "Komputer", 
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop",
    bgColor: "bg-slate-50"
  }
];

export const CategoryGrid = () => {
  return (
    <section className="bg-white rounded-lg shadow-soft p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-heading font-bold text-foreground">Kategori Pilihan</h2>
        <button className="text-primary hover:text-primary-hover font-medium text-sm">
          Lihat Semua
        </button>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div 
            key={index}
            className="group cursor-pointer"
          >
            <div className={`${category.bgColor} rounded-lg p-4 mb-2 group-hover:shadow-medium transition-all aspect-square flex items-center justify-center relative overflow-hidden`}>
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
              />
              <category.icon 
                size={32} 
                className="text-primary relative z-10 group-hover:scale-110 transition-transform" 
              />
            </div>
            <p className="text-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};