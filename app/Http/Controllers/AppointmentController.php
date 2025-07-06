<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Doctor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    public function index()
    {
        $doctors = Doctor::available()->get()->map(function ($doctor) {
            return [
                'id' => $doctor->id,
                'name' => $doctor->name,
                'specialty' => $doctor->specialty,
                'price' => $doctor->price,
                'profile_image' => $doctor->profile_image ?? '/images/doctor-placeholder.jpg',
            ];
        });

        return Inertia::render('booking', [
            'doctors' => $doctors,
            'selectedDoctorId' => request('doctor'),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'doctor_id' => 'required|exists:doctors,id',
            'appointment_date' => 'required|date|after:today',
            'appointment_time' => 'required',
            'patient_name' => 'required|string|max:255',
            'patient_phone' => 'required|string|max:20',
            'patient_email' => 'required|email|max:255',
            'patient_age' => 'required|integer|min:1|max:150',
            'patient_gender' => 'required|in:male,female,other',
            'complaint' => 'required|string',
            'symptoms' => 'nullable|array',
            'emergency_contact' => 'nullable|string|max:20',
            'type' => 'required|in:online,offline,emergency',
            'insurance' => 'nullable|string|max:255',
        ]);

        $appointment = Appointment::create([
            'user_id' => Auth::check() ? Auth::user()->id : null,
            'doctor_id' => $validated['doctor_id'],
            'appointment_date' => $validated['appointment_date'],
            'appointment_time' => $validated['appointment_time'],
            'patient_name' => $validated['patient_name'],
            'patient_phone' => $validated['patient_phone'],
            'patient_email' => $validated['patient_email'],
            'patient_age' => $validated['patient_age'],
            'patient_gender' => $validated['patient_gender'],
            'complaint' => $validated['complaint'],
            'symptoms' => $validated['symptoms'] ?? [],
            'emergency_contact' => $validated['emergency_contact'],
            'type' => $validated['type'],
            'insurance' => $validated['insurance'],
            'status' => 'pending',
        ]);

        return redirect()->route('appointment.success', $appointment->id)
            ->with('success', 'Appointment berhasil dibuat!');
    }

    public function success(Appointment $appointment)
    {
        $appointment->load('doctor');
        
        $appointmentData = [
            'id' => $appointment->id,
            'appointment_date' => $appointment->appointment_date,
            'appointment_time' => $appointment->appointment_time,
            'status' => $appointment->status,
            'patient_name' => $appointment->patient_name,
            'patient_phone' => $appointment->patient_phone,
            'patient_email' => $appointment->patient_email,
            'notes' => $appointment->notes,
            'doctor' => [
                'id' => $appointment->doctor->id,
                'name' => $appointment->doctor->name,
                'specialty' => $appointment->doctor->specialty,
                'profile_image' => $appointment->doctor->profile_image,
            ],
        ];

        return Inertia::render('appointment-success', [
            'appointment' => $appointmentData,
        ]);
    }

    public function show(Appointment $appointment)
    {
        $appointment->load('doctor', 'user');
        
        $appointmentData = [
            'id' => $appointment->id,
            'appointment_date' => $appointment->appointment_date,
            'appointment_time' => $appointment->appointment_time,
            'status' => $appointment->status,
            'type' => $appointment->type,
            'patient_name' => $appointment->patient_name,
            'patient_phone' => $appointment->patient_phone,
            'patient_email' => $appointment->patient_email,
            'patient_age' => $appointment->patient_age,
            'patient_gender' => $appointment->patient_gender,
            'complaint' => $appointment->complaint,
            'symptoms' => $appointment->symptoms,
            'emergency_contact' => $appointment->emergency_contact,
            'insurance' => $appointment->insurance,
            'notes' => $appointment->notes,
            'created_at' => $appointment->created_at->toISOString(),
            'doctor' => [
                'id' => $appointment->doctor->id,
                'name' => $appointment->doctor->name,
                'specialty' => $appointment->doctor->specialty,
                'profile_image' => $appointment->doctor->profile_image,
            ],
        ];

        return Inertia::render('appointment-detail', [
            'appointment' => $appointmentData,
        ]);
    }
}
