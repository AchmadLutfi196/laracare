import React, { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Shield, 
  Activity, 
  Stethoscope,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Star,
  Users,
  Award,
  Clock,
  ChevronRight,
  ArrowRight,
  Zap,
  Target,
  TrendingUp
} from 'lucide-react';
import { 
  AnimatedContainer, 
  AnimatedCard, 
  AnimatedButton, 
  ParallaxContainer, 
  FloatingElement, 
  GradientText, 
  StaggerContainer, 
  StaggerItem 
} from '../components/animated/simple';
import { notify } from '../utils/notifications';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  experience: string;
  image: string;
}

interface Testimonial {
  id: number;
  patient_name: string;
  treatment: string;
  testimonial: string;
  rating: number;
  patient_image: string;
}

interface HomeProps {
  doctors: Doctor[];
  testimonials: Testimonial[];
  stats: {
    doctors: number;
    patients: number;
    years: number;
    awards: number;
  };
}

export default function Home({ doctors, testimonials, stats }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleEmergencyClick = () => {
    notify.emergencyAlert();
  };

  const handleBookingClick = () => {
    notify.info({
      title: 'Booking Online',
      text: 'Anda akan diarahkan ke halaman booking',
      timer: 2000
    });
  };

  const heroSlides = [
    {
      title: "Kesehatan Terbaik untuk",
      highlight: "Keluarga Anda",
      subtitle: "Memberikan pelayanan kesehatan berkualitas tinggi dengan teknologi modern dan tim medis profesional berpengalaman.",
      gradient: "from-blue-500 via-purple-500 to-pink-500"
    },
    {
      title: "Teknologi Medis",
      highlight: "Terdepan",
      subtitle: "Fasilitas medis canggih dengan standar internasional untuk diagnosis dan perawatan yang akurat.",
      gradient: "from-green-500 via-teal-500 to-blue-500"
    },
    {
      title: "Tim Medis",
      highlight: "Profesional",
      subtitle: "Dokter spesialis berpengalaman dan tenaga medis terlatih siap melayani 24/7.",
      gradient: "from-purple-500 via-pink-500 to-red-500"
    }
  ];

  const features = [
    'Dokter spesialis berpengalaman',
    'Fasilitas medis modern',
    'Layanan 24 jam',
    'Akreditasi KARS',
    'Asuransi kesehatan diterima',
    'Laboratorium lengkap'
  ];

  return (
    <>
      <Head title="Medicare Prima - Kesehatan Terbaik untuk Keluarga Anda" />
      
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
              <Link href="/" className="text-[#0ABAB5] font-semibold">Beranda</Link>
              <Link href="/doctors" className="text-gray-700 hover:text-[#0ABAB5] transition-colors">Dokter</Link>
              <Link href="/schedule" className="text-gray-700 hover:text-[#0ABAB5] transition-colors">Jadwal</Link>
              <Link href="/booking" className="text-gray-700 hover:text-[#0ABAB5] transition-colors">Booking</Link>
              <Link href="/articles" className="text-gray-700 hover:text-[#0ABAB5] transition-colors">Artikel</Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#0ABAB5] transition-colors">Kontak</Link>
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

      <div className="pt-16 sm:pt-20">
        {/* Hero Section with Animated Background */}
        <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50 py-20 lg:py-32 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#0ABAB5]/20 to-blue-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-[#0ABAB5]/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#0ABAB5]/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-12"
                >
                  <motion.h1 
                    className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {heroSlides[currentSlide].title}{' '}
                    <span className={`bg-gradient-to-r ${heroSlides[currentSlide].gradient} bg-clip-text text-transparent animate-pulse`}>
                      {heroSlides[currentSlide].highlight}
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {heroSlides[currentSlide].subtitle}
                  </motion.p>
                </motion.div>
              </AnimatePresence>

              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(10, 186, 181, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/booking" 
                    onClick={handleBookingClick}
                    className="inline-flex items-center bg-gradient-to-r from-[#0ABAB5] to-[#0D94C6] text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 text-lg font-semibold group"
                  >
                    <Zap className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Booking Sekarang
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/doctors" 
                    className="inline-flex items-center border-2 border-[#0ABAB5] text-[#0ABAB5] px-8 py-4 rounded-xl hover:bg-gradient-to-r hover:from-[#0ABAB5] hover:to-[#0D94C6] hover:text-white transition-all duration-300 text-lg font-semibold group"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Lihat Dokter
                  </Link>
                </motion.div>
              </motion.div>
              
              {/* Quick Stats with Enhanced Animation */}
              <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <StaggerItem>
                  <AnimatedCard 
                    className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/20 hover:bg-white transition-all duration-300"
                  >
                    <motion.div 
                      className="text-3xl font-bold bg-gradient-to-r from-[#0ABAB5] to-[#0D94C6] bg-clip-text text-transparent mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.8, type: "spring", bounce: 0.4 }}
                    >
                      50+
                    </motion.div>
                    <div className="text-sm text-gray-600 font-medium">Dokter Spesialis</div>
                  </AnimatedCard>
                </StaggerItem>
                
                <StaggerItem>
                  <AnimatedCard 
                    className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/20 hover:bg-white transition-all duration-300"
                    
                  >
                    <motion.div 
                      className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.0, type: "spring", bounce: 0.4 }}
                    >
                      15+
                    </motion.div>
                    <div className="text-sm text-gray-600 font-medium">Tahun Pengalaman</div>
                  </AnimatedCard>
                </StaggerItem>
                
                <StaggerItem>
                  <AnimatedCard 
                    className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/20 hover:bg-white transition-all duration-300"
                    
                  >
                    <motion.div 
                      className="text-3xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.2, type: "spring", bounce: 0.4 }}
                    >
                      24/7
                    </motion.div>
                    <div className="text-sm text-gray-600 font-medium">Layanan IGD</div>
                  </AnimatedCard>
                </StaggerItem>
                
                <StaggerItem>
                  <AnimatedCard 
                    className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/20 hover:bg-white transition-all duration-300"
                    
                  >
                    <motion.div 
                      className="text-3xl font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.4, type: "spring", bounce: 0.4 }}
                    >
                      KARS
                    </motion.div>
                    <div className="text-sm text-gray-600 font-medium">Terakreditasi</div>
                  </AnimatedCard>
                </StaggerItem>
              </StaggerContainer>

              {/* Slide indicators */}
              <motion.div 
                className="flex justify-center space-x-2 mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
              >
                {heroSlides.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-[#0ABAB5] w-8' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Emergency Service Card Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden">
          {/* Background animations */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 90, 180],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-full blur-2xl"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [180, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              {/* Main Emergency Card */}
              <motion.div
                className="relative bg-gradient-to-br from-red-600 via-red-500 to-red-700 rounded-3xl shadow-2xl overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(220, 38, 38, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background patterns */}
                <div className="absolute inset-0">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{ x: [-100, 400] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"
                    animate={{ 
                      scale: [1.2, 1, 1.2],
                      opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                </div>

                <div className="relative z-10 p-8 lg:p-12">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    {/* Emergency Icon & Title */}
                    <div className="lg:col-span-1 text-center lg:text-left">
                      <motion.div
                        className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6"
                        animate={{ 
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                          <Zap className="w-10 h-10 text-white" />
                        </motion.div>
                      </motion.div>
                      
                      <motion.h3 
                        className="text-2xl lg:text-3xl font-bold text-white mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        Layanan Darurat
                      </motion.h3>
                      
                      <motion.p 
                        className="text-red-100 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        Siaga 24/7 untuk kondisi darurat medis
                      </motion.p>
                      
                      <motion.div
                        className="flex items-center justify-center lg:justify-start space-x-2 mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <motion.div
                          className="w-3 h-3 bg-green-400 rounded-full"
                          animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [1, 0.7, 1]
                          }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <span className="text-red-100 text-sm font-medium">Online Now</span>
                      </motion.div>
                    </div>

                    {/* Emergency Features */}
                    <div className="lg:col-span-1">
                      <motion.div 
                        className="space-y-4"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {[
                          { icon: Activity, text: "Tim Medis Siaga" },
                          { icon: Clock, text: "Respon Cepat < 3 Menit" },
                          { icon: Shield, text: "Peralatan Canggih" },
                          { icon: Target, text: "Protokol Standar Internasional" }
                        ].map((feature, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            whileHover={{ x: 5 }}
                          >
                            <motion.div
                              className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center"
                              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                            >
                              <feature.icon className="w-4 h-4 text-white" />
                            </motion.div>
                            <span className="text-white font-medium">{feature.text}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>

                    {/* Contact Buttons */}
                    <div className="lg:col-span-1">
                      <motion.div 
                        className="space-y-4"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <motion.a 
                          href="tel:119" 
                          onClick={handleEmergencyClick}
                          className="block w-full bg-white text-red-600 px-6 py-4 rounded-2xl text-center font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(255,255,255,0.3)"
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="flex items-center justify-center space-x-3">
                            <motion.div
                              animate={{ rotate: [0, 10, -10, 0] }}
                              transition={{ duration: 0.8, repeat: Infinity }}
                            >
                              <Phone className="w-6 h-6" />
                            </motion.div>
                            <span>Hubungi IGD: 119</span>
                          </div>
                          <div className="text-sm text-red-500 mt-1 opacity-80 group-hover:opacity-100">
                            Tekan untuk panggilan darurat
                          </div>
                        </motion.a>
                        
                        <motion.a 
                          href="https://wa.me/628123456789" 
                          className="block w-full bg-green-500 text-white px-6 py-4 rounded-2xl text-center font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-green-600 transition-all duration-300 group"
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)"
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="flex items-center justify-center space-x-3">
                            <motion.span
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="text-xl"
                            >
                              💬
                            </motion.span>
                            <span>Chat WhatsApp</span>
                          </div>
                          <div className="text-sm text-green-100 mt-1 opacity-80 group-hover:opacity-100">
                            Konsultasi cepat 24 jam
                          </div>
                        </motion.a>

                        <motion.div 
                          className="text-center text-white/80 text-sm"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.8 }}
                        >
                          <div className="flex items-center justify-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>Tersedia 24 jam, 7 hari seminggu</span>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Quick Emergency Info Cards */}
              <motion.div 
                className="grid md:grid-cols-3 gap-6 mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {[
                  {
                    icon: Heart,
                    title: "Jantung & Stroke",
                    desc: "Unit stroke & cardiac care 24 jam",
                    color: "from-red-500 to-pink-500"
                  },
                  {
                    icon: Activity,
                    title: "Trauma Center",
                    desc: "Penanganan kecelakaan & trauma berat",
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: Stethoscope,
                    title: "ICU & NICU",
                    desc: "Perawatan intensif dengan monitoring ketat",
                    color: "from-purple-500 to-indigo-500"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    whileHover={{ 
                      scale: 1.03,
                      y: -5
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <motion.div
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl mb-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                RS Medicare Prima
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Rumah sakit swasta terdepan dengan komitmen memberikan pelayanan kesehatan
                berkualitas internasional sejak tahun 2008
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi Kami</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Menjadi rumah sakit rujukan terdepan di Indonesia yang memberikan pelayanan
                  kesehatan berkualitas internasional dengan pendekatan holistik dan teknologi modern.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Komitmen Kami</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#0ABAB5] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Pelayanan kesehatan yang aman dan bermutu</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#0ABAB5] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Teknologi medis terdepan dan modern</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#0ABAB5] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Tim medis profesional berpengalaman</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#0ABAB5] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Pelayanan 24 jam setiap hari</span>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#0ABAB5] mb-2">16+</div>
                  <div className="text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#0ABAB5] mb-2">150K+</div>
                  <div className="text-gray-600">Pasien Dilayani</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#0ABAB5] mb-2">120+</div>
                  <div className="text-gray-600">Dokter Spesialis</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#0ABAB5] mb-2">98.5%</div>
                  <div className="text-gray-600">Tingkat Kepuasan</div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Sertifikasi & Penghargaan</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm font-semibold text-gray-700">Akreditasi KARS Paripurna</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm font-semibold text-gray-700">JCI Accredited Hospital</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm font-semibold text-gray-700">ISO 9001:2015 Certified</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm font-semibold text-gray-700">Top Hospital Award 2024</div>
                </div>
              </div>
              <div className="mt-8">
                <Link 
                  href="/about" 
                  className="inline-flex items-center bg-[#0ABAB5] text-white px-6 py-3 rounded-lg hover:bg-[#09A6A1] transition-colors"
                >
                  Pelajari Lebih Lanjut
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Layanan Unggulan Kami
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Kami menyediakan berbagai layanan kesehatan yang komprehensif untuk memenuhi
                kebutuhan Anda
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Instalasi Gawat Darurat</h3>
                <p className="text-gray-600">Layanan 24 jam untuk kondisi darurat medis</p>
              </div>

              <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <Stethoscope className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Rawat Jalan</h3>
                <p className="text-gray-600">Konsultasi dengan dokter spesialis terpercaya</p>
              </div>

              <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Activity className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Rawat Inap</h3>
                <p className="text-gray-600">Fasilitas kamar yang nyaman dan lengkap</p>
              </div>

              <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-100 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Medical Check Up</h3>
                <p className="text-gray-600">Pemeriksaan kesehatan menyeluruh</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Mengapa Memilih RS Medicare Prima?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Kami berkomitmen memberikan pelayanan kesehatan terbaik dengan standar
                internasional dan teknologi medis terdepan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-[#0ABAB5] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/about" 
                className="inline-flex items-center bg-[#0ABAB5] text-white px-8 py-3 rounded-lg hover:bg-[#09A6A1] transition-colors"
              >
                Selengkapnya
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Operating Hours Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Jam Operasional
              </h2>
              <p className="text-gray-600">Kami siap melayani Anda</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-red-600 font-semibold mb-2">IGD (24 Jam)</div>
                <div className="text-gray-600">Selalu Buka</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-[#0ABAB5] font-semibold mb-2">Rawat Jalan</div>
                <div className="text-gray-600">08:00 - 20:00</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-[#0ABAB5] font-semibold mb-2">Laboratorium</div>
                <div className="text-gray-600">06:00 - 22:00</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-[#0ABAB5] font-semibold mb-2">Farmasi</div>
                <div className="text-gray-600">24 Jam</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Testimoni Pasien
              </h2>
              <p className="text-lg text-gray-600">
                Kepuasan pasien adalah prioritas utama kami
              </p>
            </div>

            {testimonials && testimonials.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.slice(0, 3).map((testimonial, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#0ABAB5] rounded-full flex items-center justify-center text-white font-semibold">
                        {testimonial.patient_name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="font-semibold text-gray-900">{testimonial.patient_name}</div>
                        <div className="text-sm text-gray-600">{testimonial.treatment}</div>
                      </div>
                    </div>
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500">
                Belum ada testimoni pasien.
              </div>
            )}

            <div className="text-center mt-12">
              <Link 
                href="/testimonials" 
                className="inline-flex items-center bg-[#0ABAB5] text-white px-6 py-3 rounded-lg hover:bg-[#09A6A1] transition-colors"
              >
                Lihat Semua Testimoni
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#0ABAB5] to-[#09A6A1]">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Siap untuk Memulai Perjalanan Kesehatan Anda?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Booking konsultasi sekarang dan dapatkan pelayanan kesehatan terbaik dari tim
                medis profesional kami
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  href="/booking" 
                  className="inline-flex items-center bg-white text-[#0ABAB5] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
                >
                  Booking Sekarang
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg font-semibold"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </div>
        </section>

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
      </div>

      {/* Enhanced Floating Emergency Button */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 2,
          type: "spring",
          bounce: 0.6
        }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 0 0 0 rgba(239, 68, 68, 0.7)",
              "0 0 0 10px rgba(239, 68, 68, 0)",
              "0 0 0 0 rgba(239, 68, 68, 0)"
            ]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.button
            onClick={handleEmergencyClick}
            className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-full shadow-2xl hover:from-red-600 hover:to-red-700 transition-all duration-300 group"
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              boxShadow: "0 20px 40px rgba(239, 68, 68, 0.4)"
            }}
            whileTap={{ scale: 0.9 }}
            title="Emergency Call - Tekan untuk bantuan darurat"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              <Phone className="w-6 h-6 group-hover:animate-bounce" />
            </motion.div>
          </motion.button>
        </motion.div>
        
        {/* Emergency tooltip */}
        <motion.div
          className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0, y: 0 }}
          whileHover={{ opacity: 1 }}
        >
          Bantuan Darurat 24/7
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </motion.div>
      </motion.div>
    </>
  );
}
