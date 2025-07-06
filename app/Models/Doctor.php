<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Doctor extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
        'specialty',
        'experience',
        'education',
        'certifications',
        'languages',
        'rating',
        'review_count',
        'price',
        'bio',
        'profile_image',
        'schedule',
        'consultation_types',
        'is_available',
    ];

    protected $casts = [
        'education' => 'array',
        'certifications' => 'array',
        'languages' => 'array',
        'schedule' => 'array',
        'consultation_types' => 'array',
        'rating' => 'decimal:2',
        'is_available' => 'boolean',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function appointments(): HasMany
    {
        return $this->hasMany(Appointment::class);
    }

    public function getFormattedRatingAttribute(): string
    {
        return number_format($this->rating, 1);
    }

    public function scopeAvailable($query)
    {
        return $query->where('is_available', true);
    }

    public function scopeBySpecialty($query, string $specialty)
    {
        return $query->where('specialty', 'like', "%{$specialty}%");
    }
}
