<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
        $query = Article::published();

        // Apply filters
        if ($request->has('category') && $request->category) {
            $query->byCategory($request->category);
        }

        if ($request->has('search') && $request->search) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('excerpt', 'like', "%{$search}%")
                  ->orWhere('author', 'like', "%{$search}%");
            });
        }

        $articles = $query->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($article) {
                return [
                    'id' => $article->id,
                    'title' => $article->title,
                    'excerpt' => $article->excerpt,
                    'author' => $article->author,
                    'category' => $article->category,
                    'read_time' => $article->read_time,
                    'views' => $article->views,
                    'likes' => $article->likes,
                    'image' => $article->image,
                    'featured' => $article->featured,
                    'formatted_date' => $article->formatted_date,
                ];
            });

        $featuredArticles = Article::published()
            ->featured()
            ->limit(3)
            ->get()
            ->map(function ($article) {
                return [
                    'id' => $article->id,
                    'title' => $article->title,
                    'excerpt' => $article->excerpt,
                    'author' => $article->author,
                    'category' => $article->category,
                    'read_time' => $article->read_time,
                    'views' => $article->views,
                    'likes' => $article->likes,
                    'image' => $article->image,
                    'featured' => $article->featured,
                    'formatted_date' => $article->formatted_date,
                ];
            });

        $categories = Article::distinct()
            ->pluck('category')
            ->toArray();

        return Inertia::render('articles', [
            'articles' => $articles,
            'featuredArticles' => $featuredArticles,
            'categories' => $categories,
        ]);
    }

    public function show(Article $article)
    {
        // Increment views
        $article->incrementViews();

        $articleData = [
            'id' => $article->id,
            'title' => $article->title,
            'excerpt' => $article->excerpt,
            'content' => $article->content,
            'author' => $article->author,
            'category' => $article->category,
            'read_time' => $article->read_time,
            'views' => $article->views,
            'likes' => $article->likes,
            'image' => $article->image,
            'featured' => $article->featured,
            'formatted_date' => $article->formatted_date,
        ];

        // Get related articles
        $relatedArticles = Article::published()
            ->where('category', $article->category)
            ->where('id', '!=', $article->id)
            ->limit(3)
            ->get()
            ->map(function ($article) {
                return [
                    'id' => $article->id,
                    'title' => $article->title,
                    'excerpt' => $article->excerpt,
                    'author' => $article->author,
                    'category' => $article->category,
                    'read_time' => $article->read_time,
                    'views' => $article->views,
                    'likes' => $article->likes,
                    'image' => $article->image,
                    'formatted_date' => $article->formatted_date,
                ];
            });

        return Inertia::render('article-detail', [
            'article' => $articleData,
            'relatedArticles' => $relatedArticles,
        ]);
    }
}
