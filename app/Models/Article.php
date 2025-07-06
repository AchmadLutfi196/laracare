<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'excerpt',
        'content',
        'author',
        'category',
        'read_time',
        'views',
        'likes',
        'image',
        'featured',
        'published',
    ];

    protected $casts = [
        'featured' => 'boolean',
        'published' => 'boolean',
        'views' => 'integer',
        'likes' => 'integer',
    ];

    public function scopeFeatured($query)
    {
        return $query->where('featured', true);
    }

    public function scopePublished($query)
    {
        return $query->where('published', true);
    }

    public function scopeByCategory($query, string $category)
    {
        return $query->where('category', $category);
    }

    public function getFormattedDateAttribute(): string
    {
        return $this->created_at->format('d M Y');
    }

    public function incrementViews(): void
    {
        $this->increment('views');
    }

    public function incrementLikes(): void
    {
        $this->increment('likes');
    }
}
