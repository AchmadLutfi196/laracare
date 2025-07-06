<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Appointment extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'doctor_id',
        'appointment_date',
        'appointment_time',
        'status',
        'type',
        'patient_name',
        'patient_phone',
        'patient_email',
        'patient_age',
        'patient_gender',
        'complaint',
        'symptoms',
        'emergency_contact',
        'insurance',
        'notes',
    ];

    protected $casts = [
        'appointment_date' => 'date',
        'appointment_time' => 'datetime:H:i',
        'symptoms' => 'array',
        'patient_age' => 'integer',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function doctor(): BelongsTo
    {
        return $this->belongsTo(Doctor::class);
    }

    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }

    public function scopeConfirmed($query)
    {
        return $query->where('status', 'confirmed');
    }

    public function scopeToday($query)
    {
        return $query->whereDate('appointment_date', today());
    }

    public function getFormattedDateAttribute(): string
    {
        return $this->appointment_date->format('d M Y');
    }

    public function getFormattedTimeAttribute(): string
    {
        return $this->appointment_time->format('H:i');
    }
}
