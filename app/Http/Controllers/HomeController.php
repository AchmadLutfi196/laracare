<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $doctors = Doctor::with('user')
            ->available()
            ->limit(6)
            ->get()
            ->map(function ($doctor) {
                return [
                    'id' => $doctor->id,
                    'name' => $doctor->name,
                    'specialty' => $doctor->specialty,
                    'rating' => $doctor->rating,
                    'experience' => $doctor->experience,
                    'image' => $doctor->profile_image ?? '/images/doctor-placeholder.jpg',
                ];
            });

        $testimonials = Testimonial::published()
            ->featured()
            ->limit(6)
            ->get()
            ->map(function ($testimonial) {
                return [
                    'id' => $testimonial->id,
                    'patient_name' => $testimonial->patient_name,
                    'treatment' => $testimonial->treatment,
                    'testimonial' => $testimonial->testimonial,
                    'rating' => $testimonial->rating,
                    'patient_image' => $testimonial->patient_image ?? '/images/patient-placeholder.jpg',
                ];
            });

        $stats = [
            'doctors' => Doctor::count(),
            'patients' => 15000, // You can calculate this from appointments or users
            'years' => 15,
            'awards' => 8,
        ];

        return Inertia::render('home', [
            'doctors' => $doctors,
            'testimonials' => $testimonials,
            'stats' => $stats,
        ]);
    }
}
