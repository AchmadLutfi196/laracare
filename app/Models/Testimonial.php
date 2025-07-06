<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_name',
        'treatment',
        'testimonial',
        'rating',
        'treatment_date',
        'patient_image',
        'is_featured',
        'is_published',
    ];

    protected $casts = [
        'treatment_date' => 'date',
        'rating' => 'integer',
        'is_featured' => 'boolean',
        'is_published' => 'boolean',
    ];

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    public function scopePublished($query)
    {
        return $query->where('is_published', true);
    }

    public function getFormattedDateAttribute(): string
    {
        return $this->treatment_date->format('d M Y');
    }

    public function getStarsAttribute(): array
    {
        return array_fill(0, $this->rating, true) + array_fill($this->rating, 5 - $this->rating, false);
    }
}
