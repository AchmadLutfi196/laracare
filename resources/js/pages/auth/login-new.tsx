import React, { useState, useEffect } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LoaderCircle, 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  Heart,
  Shield,
  Stethoscope,
  Activity,
  User,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { FormEventHandler } from 'react';
import { notify } from '../../utils/notifications';
import { AnimatedContainer, AnimatedCard, AnimatedButton, GradientText } from '../../components/animated/simple';

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [currentBg, setCurrentBg] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });

    const backgroundSlides = [
        {
            title: "Teknologi Medis Terdepan",
            description: "Sistem informasi rumah sakit yang terintegrasi untuk pelayanan optimal",
            icon: Shield,
            gradient: "from-blue-600 via-purple-600 to-blue-800"
        },
        {
            title: "Tim Medis Profesional",
            description: "Akses ke dokter spesialis dan tenaga medis berpengalaman",
            icon: Stethoscope,
            gradient: "from-green-600 via-teal-600 to-green-800"
        },
        {
            title: "Layanan 24/7",
            description: "Pelayanan kesehatan yang siap melayani kapan saja Anda membutuhkan",
            icon: Activity,
            gradient: "from-red-600 via-pink-600 to-red-800"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgroundSlides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const handleEmergencyClick = () => {
        notify.info({
            title: 'Layanan Darurat',
            text: 'Hubungi 119 atau (021) 1500-119 untuk kondisi darurat medis',
            confirmButtonText: 'Hubungi Sekarang',
            showCancelButton: true,
            cancelButtonText: 'Tutup'
        }).then((result) => {
            if (result.isConfirmed) {
                window.open('tel:119', '_self');
            }
        });
    };

    const submit: FormEventHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Show loading notification
        notify.loading('Memverifikasi akun Anda...', 'Mohon tunggu sebentar');
        
        post(route('login'), {
            onFinish: () => {
                reset('password');
                setIsLoading(false);
                notify.success({
                    title: 'Login Berhasil!',
                    text: 'Selamat datang di Medicare Prima'
                });
            },
            onError: () => {
                setIsLoading(false);
                notify.error({
                    title: 'Login Gagal',
                    text: 'Email atau password tidak valid'
                });
            }
        });
    };

    return (
        <>
            <Head title="Login - Medicare Prima" />
            
            <div className="min-h-screen flex">
                {/* Left Side - Animated Background */}
                <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentBg}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 1 }}
                            className={`absolute inset-0 bg-gradient-to-br ${backgroundSlides[currentBg].gradient}`}
                        >
                            {/* Animated particles */}
                            <div className="absolute inset-0">
                                {[...Array(15)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-2 h-2 bg-white/20 rounded-full"
                                        style={{
                                            left: `${Math.random() * 100}%`,
                                            top: `${Math.random() * 100}%`,
                                        }}
                                        animate={{
                                            y: [0, -50, 0],
                                            opacity: [0, 1, 0],
                                            scale: [1, 1.5, 1]
                                        }}
                                        transition={{
                                            duration: 2 + Math.random() * 2,
                                            repeat: Infinity,
                                            delay: Math.random() * 2,
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-col justify-center h-full p-12 text-white">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    <div className="flex items-center space-x-3 mb-8">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center">
                                            <Heart className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <h1 className="text-2xl font-bold">Medicare Prima</h1>
                                            <p className="text-white/80 text-sm">Rumah Sakit Terpercaya</p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="mb-8"
                                >
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center mb-6">
                                        {React.createElement(backgroundSlides[currentBg].icon, { 
                                            className: "w-8 h-8 text-white" 
                                        })}
                                    </div>
                                    <h2 className="text-3xl font-bold mb-4">{backgroundSlides[currentBg].title}</h2>
                                    <p className="text-white/90 text-lg leading-relaxed">
                                        {backgroundSlides[currentBg].description}
                                    </p>
                                </motion.div>

                                {/* Features */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="space-y-4"
                                >
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="w-5 h-5 text-green-300" />
                                        <span className="text-white/90">Akreditasi KARS Paripurna</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="w-5 h-5 text-green-300" />
                                        <span className="text-white/90">ISO 9001:2015 Certified</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="w-5 h-5 text-green-300" />
                                        <span className="text-white/90">50+ Dokter Spesialis</span>
                                    </div>
                                </motion.div>

                                {/* Slide indicators */}
                                <motion.div 
                                    className="flex space-x-2 mt-12"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    {backgroundSlides.map((_, index) => (
                                        <motion.div
                                            key={index}
                                            className={`h-1 rounded-full transition-all duration-300 ${
                                                index === currentBg ? 'bg-white w-8' : 'bg-white/30 w-4'
                                            }`}
                                            whileHover={{ scale: 1.2 }}
                                        />
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right Side - Login Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
                    <AnimatedContainer 
                        animation="slideRight"
                        className="w-full max-w-md"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Mobile Header */}
                            <div className="lg:hidden text-center mb-8">
                                <div className="flex items-center justify-center space-x-2 mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-[#0ABAB5] to-[#0D94C6] rounded-xl flex items-center justify-center">
                                        <Heart className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h1 className="text-xl font-bold text-gray-900">Medicare Prima</h1>
                                        <p className="text-gray-600 text-sm">Rumah Sakit Terpercaya</p>
                                    </div>
                                </div>
                            </div>

                            <AnimatedCard className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                                <div className="text-center mb-8">
                                    <motion.h2 
                                        className="text-3xl font-bold text-gray-900 mb-2"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        Selamat Datang
                                    </motion.h2>
                                    <motion.p 
                                        className="text-gray-600"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        Masuk ke akun Medicare Prima Anda
                                    </motion.p>
                                </div>

                                {status && (
                                    <motion.div 
                                        className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                    >
                                        <p className="text-green-700 text-sm">{status}</p>
                                    </motion.div>
                                )}

                                <form onSubmit={submit} className="space-y-6">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Mail className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="email"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0ABAB5] focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                                                placeholder="nama@email.com"
                                                required
                                                autoFocus
                                            />
                                        </div>
                                        {errors.email && (
                                            <motion.p 
                                                className="mt-2 text-sm text-red-600"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                            >
                                                {errors.email}
                                            </motion.p>
                                        )}
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Lock className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                value={data.password}
                                                onChange={(e) => setData('password', e.target.value)}
                                                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0ABAB5] focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                                                placeholder="Masukkan password"
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                                ) : (
                                                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                                )}
                                            </button>
                                        </div>
                                        {errors.password && (
                                            <motion.p 
                                                className="mt-2 text-sm text-red-600"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                            >
                                                {errors.password}
                                            </motion.p>
                                        )}
                                    </motion.div>

                                    <motion.div 
                                        className="flex items-center justify-between"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={data.remember}
                                                onChange={(e) => setData('remember', e.target.checked)}
                                                className="h-4 w-4 text-[#0ABAB5] focus:ring-[#0ABAB5] border-gray-300 rounded"
                                            />
                                            <span className="ml-2 text-sm text-gray-600">Ingat saya</span>
                                        </label>

                                        {canResetPassword && (
                                            <Link
                                                href={route('password.request')}
                                                className="text-sm text-[#0ABAB5] hover:text-[#0D94C6] transition-colors"
                                            >
                                                Lupa password?
                                            </Link>
                                        )}
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 }}
                                    >
                                        <motion.button
                                            type="submit"
                                            disabled={processing || isLoading}
                                            className="w-full bg-gradient-to-r from-[#0ABAB5] to-[#0D94C6] text-white py-3 px-4 rounded-xl font-semibold hover:from-[#09A6A1] hover:to-[#0B85B8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0ABAB5] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
                                            whileHover={{ scale: processing ? 1 : 1.02 }}
                                            whileTap={{ scale: processing ? 1 : 0.98 }}
                                        >
                                            <span className="flex items-center justify-center">
                                                {processing || isLoading ? (
                                                    <>
                                                        <LoaderCircle className="animate-spin h-5 w-5 mr-2" />
                                                        Memverifikasi...
                                                    </>
                                                ) : (
                                                    <>
                                                        Masuk
                                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                                    </>
                                                )}
                                            </span>
                                        </motion.button>
                                    </motion.div>
                                </form>

                                <motion.div 
                                    className="mt-8 text-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <p className="text-gray-600">
                                        Belum punya akun?{' '}
                                        <Link
                                            href={route('register')}
                                            className="text-[#0ABAB5] hover:text-[#0D94C6] font-semibold transition-colors"
                                        >
                                            Daftar sekarang
                                        </Link>
                                    </p>
                                </motion.div>

                                {/* Quick Access */}
                                <motion.div 
                                    className="mt-8 pt-6 border-t border-gray-200"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.9 }}
                                >
                                    <p className="text-center text-sm text-gray-500 mb-4">Akses cepat</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <Link
                                            href="/"
                                            className="flex items-center justify-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
                                        >
                                            <User className="w-4 h-4 mr-2 text-gray-400 group-hover:text-[#0ABAB5]" />
                                            <span className="text-sm text-gray-600">Pasien</span>
                                        </Link>
                                        <button
                                            onClick={handleEmergencyClick}
                                            className="flex items-center justify-center p-3 border border-red-200 rounded-lg hover:bg-red-50 transition-colors group"
                                        >
                                            <Activity className="w-4 h-4 mr-2 text-red-400 group-hover:text-red-600" />
                                            <span className="text-sm text-red-600">Darurat</span>
                                        </button>
                                    </div>
                                </motion.div>
                            </AnimatedCard>
                        </motion.div>
                    </AnimatedContainer>
                </div>
            </div>
        </>
    );
}
