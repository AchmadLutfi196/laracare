import React from 'react';
import { Link } from '@inertiajs/react';
import { 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Award,
  Shield
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

export default function Layout({ children, currentPage = '' }: LayoutProps) {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#0ABAB5] to-[#09A6A1] rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Medicare Prima</span>
              <span className="hidden sm:inline text-sm text-gray-500">Rumah Sakit Terpercaya</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="/" 
                className={currentPage === 'home' ? 'text-[#0ABAB5] font-semibold' : 'text-gray-700 hover:text-[#0ABAB5] transition-colors'}
              >
                Beranda
              </Link>
              <Link 
                href="/doctors" 
                className={currentPage === 'doctors' ? 'text-[#0ABAB5] font-semibold' : 'text-gray-700 hover:text-[#0ABAB5] transition-colors'}
              >
                Dokter
              </Link>
              <Link 
                href="/schedule" 
                className={currentPage === 'schedule' ? 'text-[#0ABAB5] font-semibold' : 'text-gray-700 hover:text-[#0ABAB5] transition-colors'}
              >
                Jadwal
              </Link>
              <Link 
                href="/booking" 
                className={currentPage === 'booking' ? 'text-[#0ABAB5] font-semibold' : 'text-gray-700 hover:text-[#0ABAB5] transition-colors'}
              >
                Booking
              </Link>
              <Link 
                href="/articles" 
                className={currentPage === 'articles' ? 'text-[#0ABAB5] font-semibold' : 'text-gray-700 hover:text-[#0ABAB5] transition-colors'}
              >
                Artikel
              </Link>
              <Link 
                href="/contact" 
                className={currentPage === 'contact' ? 'text-[#0ABAB5] font-semibold' : 'text-gray-700 hover:text-[#0ABAB5] transition-colors'}
              >
                Kontak
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link 
                href="/login" 
                className="hidden sm:inline-flex bg-[#0ABAB5] text-white px-6 py-2 rounded-lg hover:bg-[#09A6A1] transition-colors"
              >
                Login
              </Link>
              <Link 
                href="/register" 
                className="hidden sm:inline-flex border border-[#0ABAB5] text-[#0ABAB5] px-6 py-2 rounded-lg hover:bg-[#0ABAB5]/5 transition-colors"
              >
                Register
              </Link>
              <a href="tel:119" className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 sm:pt-20">
        {children}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-[#0ABAB5] to-[#09A6A1] rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Medicare Prima</span>
              </div>
              <p className="text-gray-400 mb-6">
                Rumah sakit terpercaya dengan layanan kesehatan berkualitas internasional.
              </p>
              <div className="flex items-center space-x-2 text-[#0ABAB5]">
                <Award className="w-5 h-5" />
                <span className="text-sm">ISO 9001 Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-[#0ABAB5] mt-1">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Best Service 2024</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Layanan</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/doctors" className="hover:text-white transition-colors">Dokter Spesialis</Link></li>
                <li><Link href="/booking" className="hover:text-white transition-colors">Booking Online</Link></li>
                <li><Link href="/schedule" className="hover:text-white transition-colors">Jadwal Praktik</Link></li>
                <li><Link href="/articles" className="hover:text-white transition-colors">Artikel Kesehatan</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Tentang Kami</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">Profil Rumah Sakit</Link></li>
                <li><Link href="/facilities" className="hover:text-white transition-colors">Fasilitas</Link></li>
                <li><Link href="/testimonials" className="hover:text-white transition-colors">Testimoni</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Karir</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Kontak</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#0ABAB5] mt-0.5" />
                  <div>
                    <div>Jl. Kesehatan No. 123, Jakarta</div>
                    <div>Buka 24 jam setiap hari</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#0ABAB5]" />
                  <a href="tel:119" className="hover:text-white transition-colors">IGD: 119</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#0ABAB5]" />
                  <a href="https://wa.me/628123456789" className="hover:text-white transition-colors">WhatsApp: +62 812 3456 7890</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#0ABAB5]" />
                  <a href="mailto:info@medicare-prima.com" className="hover:text-white transition-colors">info@medicare-prima.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Medicare Prima. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Emergency Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="tel:119" 
          className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-colors animate-pulse"
          title="Emergency Call"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </>
  );
}
