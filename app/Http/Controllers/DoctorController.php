<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DoctorController extends Controller
{
    public function index(Request $request)
    {
        $query = Doctor::with('user')->available();

        // Apply filters
        if ($request->has('specialty') && $request->specialty) {
            $query->bySpecialty($request->specialty);
        }

        if ($request->has('search') && $request->search) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('specialty', 'like', "%{$search}%");
            });
        }

        if ($request->has('consultation_type') && $request->consultation_type) {
            $query->whereJsonContains('consultation_types', $request->consultation_type);
        }

        $doctors = $query->get()->map(function ($doctor) {
            return [
                'id' => $doctor->id,
                'name' => $doctor->name,
                'specialty' => $doctor->specialty,
                'rating' => $doctor->rating,
                'review_count' => $doctor->review_count,
                'experience' => $doctor->experience,
                'price' => $doctor->price,
                'bio' => $doctor->bio,
                'education' => $doctor->education,
                'certifications' => $doctor->certifications,
                'languages' => $doctor->languages,
                'consultation_types' => $doctor->consultation_types,
                'is_available' => $doctor->is_available,
                'profile_image' => $doctor->profile_image ?? '/images/doctor-placeholder.jpg',
            ];
        });

        $specialties = Doctor::distinct()
            ->pluck('specialty')
            ->toArray();

        return Inertia::render('doctors', [
            'doctors' => $doctors,
            'specialties' => $specialties,
        ]);
    }

    public function show(Doctor $doctor)
    {
        $doctor->load('user');
        
        $doctorData = [
            'id' => $doctor->id,
            'name' => $doctor->name,
            'specialty' => $doctor->specialty,
            'rating' => $doctor->rating,
            'review_count' => $doctor->review_count,
            'experience' => $doctor->experience,
            'price' => $doctor->price,
            'bio' => $doctor->bio,
            'education' => $doctor->education,
            'certifications' => $doctor->certifications,
            'languages' => $doctor->languages,
            'consultation_types' => $doctor->consultation_types,
            'is_available' => $doctor->is_available,
            'profile_image' => $doctor->profile_image ?? '/images/doctor-placeholder.jpg',
            'schedule' => $doctor->schedule ?? [],
        ];

        return Inertia::render('doctor-detail', [
            'doctor' => $doctorData,
        ]);
    }
}
