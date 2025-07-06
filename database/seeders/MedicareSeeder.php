<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Doctor;
use App\Models\Article;
use App\Models\Facility;
use App\Models\Testimonial;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class MedicareSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create admin user
        $admin = User::create([
            'name' => 'Admin Medicare',
            'email' => 'admin@medicare.com',
            'password' => Hash::make('admin123'),
            'email_verified_at' => now(),
        ]);

        // Create doctor users and profiles
        $doctors = [
            [
                'name' => 'Dr. Ahmad Wijaya, Sp.JP',
                'email' => 'ahmad.wijaya@medicare.com',
                'specialty' => 'Jantung dan Pembuluh Darah',
                'experience' => '15 tahun',
                'education' => ['S1 Kedokteran Universitas Indonesia', 'Spesialis Jantung RS Harapan Kita'],
                'certifications' => ['Sertifikat Kardiologi', 'Fellow American College of Cardiology'],
                'languages' => ['Indonesia', 'English'],
                'rating' => 4.8,
                'review_count' => 125,
                'price' => 'Rp 750.000',
                'bio' => 'Dokter spesialis jantung dengan pengalaman 15 tahun dalam menangani berbagai penyakit kardiovaskular.',
                'consultation_types' => ['offline', 'online'],
            ],
            [
                'name' => 'Dr. Siti Nurhaliza, Sp.A',
                'email' => 'siti.nurhaliza@medicare.com',
                'specialty' => 'Anak',
                'experience' => '12 tahun',
                'education' => ['S1 Kedokteran Universitas Gadjah Mada', 'Spesialis Anak RSCM'],
                'certifications' => ['Sertifikat Pediatri', 'PALS Certification'],
                'languages' => ['Indonesia', 'English'],
                'rating' => 4.9,
                'review_count' => 98,
                'price' => 'Rp 650.000',
                'bio' => 'Dokter spesialis anak yang berpengalaman menangani kesehatan bayi, anak, dan remaja.',
                'consultation_types' => ['offline', 'online', 'emergency'],
            ],
            [
                'name' => 'Dr. Budi Hartono, Sp.PD',
                'email' => 'budi.hartono@medicare.com',
                'specialty' => 'Penyakit Dalam',
                'experience' => '18 tahun',
                'education' => ['S1 Kedokteran Universitas Padjadjaran', 'Spesialis Penyakit Dalam RS Cipto Mangunkusumo'],
                'certifications' => ['Sertifikat Penyakit Dalam', 'Diabetes Educator'],
                'languages' => ['Indonesia', 'English', 'Mandarin'],
                'rating' => 4.7,
                'review_count' => 156,
                'price' => 'Rp 700.000',
                'bio' => 'Dokter spesialis penyakit dalam dengan keahlian khusus dalam penanganan diabetes dan hipertensi.',
                'consultation_types' => ['offline', 'online'],
            ],
            [
                'name' => 'Dr. Maya Sari, Sp.OG',
                'email' => 'maya.sari@medicare.com',
                'specialty' => 'Obstetri & Ginekologi',
                'experience' => '14 tahun',
                'education' => ['S1 Kedokteran Universitas Airlangga', 'Spesialis Obstetri Ginekologi RSUD Dr. Soetomo'],
                'certifications' => ['Sertifikat Obstetri Ginekologi', 'Minimal Invasive Surgery'],
                'languages' => ['Indonesia', 'English'],
                'rating' => 4.9,
                'review_count' => 203,
                'price' => 'Rp 800.000',
                'bio' => 'Dokter spesialis kandungan dengan keahlian dalam pelayanan kehamilan, persalinan, dan kesehatan wanita.',
                'consultation_types' => ['offline', 'emergency'],
            ],
            [
                'name' => 'Dr. Indra Kusuma, Sp.M',
                'email' => 'indra.kusuma@medicare.com',
                'specialty' => 'Mata',
                'experience' => '10 tahun',
                'education' => ['S1 Kedokteran Universitas Diponegoro', 'Spesialis Mata RS Mata Cicendo'],
                'certifications' => ['Sertifikat Oftalmologi', 'Retina Specialist'],
                'languages' => ['Indonesia', 'English'],
                'rating' => 4.6,
                'review_count' => 87,
                'price' => 'Rp 600.000',
                'bio' => 'Dokter spesialis mata dengan keahlian dalam bedah refraktif dan penanganan penyakit retina.',
                'consultation_types' => ['offline', 'online'],
            ],
        ];

        foreach ($doctors as $doctorData) {
            $user = User::create([
                'name' => $doctorData['name'],
                'email' => $doctorData['email'],
                'password' => Hash::make('doctor123'),
                'email_verified_at' => now(),
            ]);

            Doctor::create([
                'user_id' => $user->id,
                'name' => $doctorData['name'],
                'specialty' => $doctorData['specialty'],
                'experience' => $doctorData['experience'],
                'education' => $doctorData['education'],
                'certifications' => $doctorData['certifications'],
                'languages' => $doctorData['languages'],
                'rating' => $doctorData['rating'],
                'review_count' => $doctorData['review_count'],
                'price' => $doctorData['price'],
                'bio' => $doctorData['bio'],
                'consultation_types' => $doctorData['consultation_types'],
                'is_available' => true,
            ]);
        }

        // Create sample testimonials
        $testimonials = [
            [
                'patient_name' => 'Ibu Sari Wijaya',
                'treatment' => 'Pemeriksaan Jantung',
                'testimonial' => 'Pelayanan sangat memuaskan. Dr. Ahmad sangat profesional dan ramah. Fasilitas rumah sakitnya juga sangat bagus dan modern.',
                'rating' => 5,
                'treatment_date' => '2024-01-15',
                'is_featured' => true,
            ],
            [
                'patient_name' => 'Bapak Andi Pratama',
                'treatment' => 'Konsultasi Anak',
                'testimonial' => 'Dr. Siti sangat sabar menangani anak saya. Penjelasannya jelas dan mudah dipahami. Highly recommended!',
                'rating' => 5,
                'treatment_date' => '2024-01-20',
                'is_featured' => true,
            ],
            [
                'patient_name' => 'Ibu Maria Gonzales',
                'treatment' => 'Kontrol Diabetes',
                'testimonial' => 'Sudah 2 tahun kontrol dengan Dr. Budi. Diabetes saya terkontrol dengan baik berkat saran dan pengobatan yang tepat.',
                'rating' => 5,
                'treatment_date' => '2024-01-25',
                'is_featured' => true,
            ],
            [
                'patient_name' => 'Ibu Fitri Handayani',
                'treatment' => 'Program Kehamilan',
                'testimonial' => 'Dr. Maya sangat perhatian dan memberikan pelayanan terbaik selama kehamilan saya. Alhamdulillah persalinan lancar.',
                'rating' => 5,
                'treatment_date' => '2024-02-01',
                'is_featured' => true,
            ],
            [
                'patient_name' => 'Bapak Joko Susilo',
                'treatment' => 'Operasi Katarak',
                'testimonial' => 'Operasi katarak dengan Dr. Indra sangat sukses. Sekarang penglihatan saya sudah kembali normal. Terima kasih!',
                'rating' => 5,
                'treatment_date' => '2024-02-10',
                'is_featured' => true,
            ],
            [
                'patient_name' => 'Ibu Dewi Lestari',
                'treatment' => 'Medical Check Up',
                'testimonial' => 'Medical check up lengkap dengan hasil yang detail. Staff rumah sakit sangat ramah dan profesional.',
                'rating' => 4,
                'treatment_date' => '2024-02-15',
                'is_featured' => true,
            ],
        ];

        foreach ($testimonials as $testimonial) {
            Testimonial::create($testimonial);
        }

        // Create sample articles
        $articles = [
            [
                'title' => '10 Tips Menjaga Kesehatan Jantung',
                'excerpt' => 'Jantung adalah organ vital yang perlu dijaga kesehatannya. Berikut tips mudah untuk menjaga kesehatan jantung Anda.',
                'content' => 'Kesehatan jantung sangat penting untuk dijaga. Berikut adalah 10 tips mudah yang bisa Anda lakukan setiap hari...',
                'author' => 'Dr. Ahmad Wijaya, Sp.JP',
                'category' => 'Kardiologi',
                'read_time' => '5 menit',
                'views' => 1250,
                'likes' => 89,
                'featured' => true,
            ],
            [
                'title' => 'Pentingnya Imunisasi untuk Anak',
                'excerpt' => 'Imunisasi adalah cara terbaik melindungi anak dari berbagai penyakit berbahaya. Ketahui jadwal imunisasi yang tepat.',
                'content' => 'Imunisasi merupakan investasi terbaik untuk kesehatan anak di masa depan...',
                'author' => 'Dr. Siti Nurhaliza, Sp.A',
                'category' => 'Pediatri',
                'read_time' => '7 menit',
                'views' => 890,
                'likes' => 67,
                'featured' => true,
            ],
            [
                'title' => 'Mengelola Diabetes dengan Baik',
                'excerpt' => 'Diabetes bukan akhir dari segalanya. Dengan pengelolaan yang tepat, penderita diabetes bisa hidup normal dan sehat.',
                'content' => 'Diabetes mellitus adalah penyakit kronis yang memerlukan pengelolaan seumur hidup...',
                'author' => 'Dr. Budi Hartono, Sp.PD',
                'category' => 'Penyakit Dalam',
                'read_time' => '8 menit',
                'views' => 1456,
                'likes' => 102,
                'featured' => false,
            ],
            [
                'title' => 'Persiapan Kehamilan yang Sehat',
                'excerpt' => 'Persiapan kehamilan yang baik sangat penting untuk kesehatan ibu dan janin. Pelajari langkah-langkah persiapan kehamilan.',
                'content' => 'Persiapan kehamilan dimulai jauh sebelum pembuahan terjadi...',
                'author' => 'Dr. Maya Sari, Sp.OG',
                'category' => 'Obstetri & Ginekologi',
                'read_time' => '6 menit',
                'views' => 723,
                'likes' => 54,
                'featured' => false,
            ],
            [
                'title' => 'Cara Menjaga Kesehatan Mata di Era Digital',
                'excerpt' => 'Penggunaan gadget yang berlebihan dapat mengganggu kesehatan mata. Berikut cara melindungi mata Anda.',
                'content' => 'Di era digital ini, mata kita sering terpapar layar gadget dalam waktu lama...',
                'author' => 'Dr. Indra Kusuma, Sp.M',
                'category' => 'Oftalmologi',
                'read_time' => '4 menit',
                'views' => 965,
                'likes' => 78,
                'featured' => true,
            ],
        ];

        foreach ($articles as $article) {
            Article::create($article);
        }

        // Create sample facilities
        $facilities = [
            [
                'name' => 'Unit Gawat Darurat (UGD)',
                'description' => 'Layanan gawat darurat 24 jam dengan tim medis siap siaga',
                'category' => 'medical',
                'features' => ['24 jam operasional', 'Trauma center', 'Ambulance siaga', 'Resusitasi unit'],
                'capacity' => '50 bed',
                'location' => 'Lantai 1',
                'staff' => '30 petugas medis',
                'certification' => 'Emergency Medicine Certified',
                'is_active' => true,
                'order' => 1,
            ],
            [
                'name' => 'Intensive Care Unit (ICU)',
                'description' => 'Perawatan intensif dengan monitoring ketat',
                'category' => 'medical',
                'features' => ['Ventilator canggih', 'Central monitoring', 'Isolasi HEPA', '24 jam specialist'],
                'capacity' => '20 bed',
                'location' => 'Lantai 3',
                'staff' => '15 intensivist',
                'certification' => 'ICU Accredited',
                'is_active' => true,
                'order' => 2,
            ],
            [
                'name' => 'Laboratorium Patologi Klinik',
                'description' => 'Pemeriksaan laboratorium lengkap 24 jam',
                'category' => 'support',
                'features' => ['Automated analyzer', 'Point of care testing', 'Rapid test', 'Molecular diagnostic'],
                'capacity' => '5000 sampel/hari',
                'location' => 'Lantai 2',
                'staff' => '20 lab technologist',
                'certification' => 'ISO 15189',
                'is_active' => true,
                'order' => 3,
            ],
            [
                'name' => 'Radiologi & Imaging',
                'description' => 'Pemeriksaan radiologi dengan teknologi digital',
                'category' => 'support',
                'features' => ['Digital radiography', 'Computed radiography', 'PACS system', 'Teleradiology'],
                'capacity' => '300 pemeriksaan/hari',
                'location' => 'Lantai 1',
                'staff' => '8 radiologist',
                'certification' => 'ACR Accredited',
                'is_active' => true,
                'order' => 4,
            ],
            [
                'name' => 'Hospital Information System (HIS)',
                'description' => 'Sistem informasi rumah sakit terintegrasi',
                'category' => 'technology',
                'features' => ['Electronic medical record', 'Digital prescription', 'Lab integration', 'Billing system'],
                'coverage' => '100% digital',
                'benefits' => ['Paperless', 'Real-time data', 'Patient safety', 'Efficiency'],
                'is_active' => true,
                'order' => 5,
            ],
        ];

        foreach ($facilities as $facility) {
            Facility::create($facility);
        }
    }
}
