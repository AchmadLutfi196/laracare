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
        Schema::create('facilities', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->enum('category', ['medical', 'support', 'general', 'technology']);
            $table->json('features');
            $table->json('images')->nullable();
            $table->string('capacity')->nullable();
            $table->string('location')->nullable();
            $table->string('staff')->nullable();
            $table->string('certification')->nullable();
            $table->json('types')->nullable();
            $table->string('coverage')->nullable();
            $table->json('benefits')->nullable();
            $table->boolean('is_active')->default(true);
            $table->integer('order')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('facilities');
    }
};
