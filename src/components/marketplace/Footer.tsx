import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  CreditCard,
  Shield,
  Headphones,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-heading font-bold text-xl">MarketPlace</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Platform marketplace terpercaya dengan jutaan produk berkualitas dari seller terbaik di Indonesia.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Facebook size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Instagram size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Twitter size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Youtube size={18} />
              </Button>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Layanan Pelanggan</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Pusat Bantuan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cara Berbelanja</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cara Berjualan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pembayaran</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pengiriman</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pengembalian Barang & Dana</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Tentang MarketPlace</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hak Kekayaan Intelektual</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Newsletter</h3>
            <p className="text-sm text-slate-300">
              Dapatkan update terbaru tentang promo dan produk baru.
            </p>
            <div className="space-y-3">
              <div className="flex space-x-2">
                <Input
                  placeholder="Email Anda"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                />
                <Button className="bg-primary hover:bg-primary-hover">
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                <CreditCard size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Pembayaran Aman</h4>
                <p className="text-xs text-slate-400">100% terlindungi</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                <Shield size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Garansi Uang Kembali</h4>
                <p className="text-xs text-slate-400">30 hari pengembalian</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                <Headphones size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Customer Service 24/7</h4>
                <p className="text-xs text-slate-400">Siap membantu Anda</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Phone size={20} className="text-primary" />
              <div>
                <span className="text-sm">Customer Service</span>
                <p className="text-slate-300 text-sm">0804-1-500-500</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Mail size={20} className="text-primary" />
              <div>
                <span className="text-sm">Email</span>
                <p className="text-slate-300 text-sm">help@marketplace.id</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin size={20} className="text-primary" />
              <div>
                <span className="text-sm">Alamat</span>
                <p className="text-slate-300 text-sm">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-slate-400">
              © 2024 MarketPlace. Hak cipta dilindungi undang-undang.
            </p>
            <div className="flex items-center space-x-4 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Syarat Layanan</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Peta Situs</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};