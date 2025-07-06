<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('doctor_id')->constrained()->onDelete('cascade');
            $table->date('appointment_date');
            $table->time('appointment_time');
            $table->enum('status', ['pending', 'confirmed', 'completed', 'cancelled'])->default('pending');
            $table->enum('type', ['online', 'offline', 'emergency'])->default('offline');
            $table->string('patient_name');
            $table->string('patient_phone');
            $table->string('patient_email');
            $table->integer('patient_age');
            $table->enum('patient_gender', ['male', 'female', 'other']);
            $table->text('complaint');
            $table->json('symptoms')->nullable();
            $table->string('emergency_contact')->nullable();
            $table->string('insurance')->nullable();
            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};
