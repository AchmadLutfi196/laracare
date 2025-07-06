<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facility extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'category',
        'features',
        'images',
        'capacity',
        'location',
        'staff',
        'certification',
        'types',
        'coverage',
        'benefits',
        'is_active',
        'order',
    ];

    protected $casts = [
        'features' => 'array',
        'images' => 'array',
        'types' => 'array',
        'benefits' => 'array',
        'is_active' => 'boolean',
        'order' => 'integer',
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeByCategory($query, string $category)
    {
        return $query->where('category', $category);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('order', 'asc');
    }
}
