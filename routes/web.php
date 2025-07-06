<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\AppointmentController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/doctors', [DoctorController::class, 'index'])->name('doctors.index');
Route::get('/doctors/{doctor}', [DoctorController::class, 'show'])->name('doctors.show');
Route::get('/articles', [ArticleController::class, 'index'])->name('articles.index');
Route::get('/articles/{article}', [ArticleController::class, 'show'])->name('articles.show');

// Schedule page
Route::get('/schedule', function () {
    return Inertia::render('schedule');
})->name('schedule');

// Contact page
Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

// Booking routes
Route::get('/booking', [AppointmentController::class, 'index'])->name('booking');
Route::post('/appointments', [AppointmentController::class, 'store'])->name('appointments.store');
Route::get('/appointments/{appointment}/success', [AppointmentController::class, 'success'])->name('appointment.success');
Route::get('/appointments/{appointment}', [AppointmentController::class, 'show'])->name('appointments.show');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
