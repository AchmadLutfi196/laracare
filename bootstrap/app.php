<?php

use App\Http\Middleware\HandleAppearance;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->encryptCookies(except: ['appearance', 'sidebar_state']);

        $middleware->web(append: [
            HandleAppearance::class,
            HandleInertiaRequests::class,
            AddLinkHeadersForPreloadedAssets::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })
    ->booting(function ($app) {
        // Configure writable paths for Vercel serverless environment
        if (isset($_ENV['VERCEL']) || isset($_SERVER['VERCEL'])) {
            $app->useStoragePath('/tmp/storage');
            // Ensure cache directory exists
            if (!is_dir('/tmp/storage/framework/cache')) {
                mkdir('/tmp/storage/framework/cache', 0755, true);
            }
            if (!is_dir('/tmp/storage/framework/sessions')) {
                mkdir('/tmp/storage/framework/sessions', 0755, true);
            }
            if (!is_dir('/tmp/storage/framework/views')) {
                mkdir('/tmp/storage/framework/views', 0755, true);
            }
            
            // Create SQLite database if it doesn't exist and we're using SQLite
            if (env('DB_CONNECTION') === 'sqlite') {
                $dbPath = env('DB_DATABASE', '/tmp/database.sqlite');
                if (!file_exists($dbPath)) {
                    touch($dbPath);
                    chmod($dbPath, 0644);
                }
            }
        }
    })
    ->create();
