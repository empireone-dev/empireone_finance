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
        Schema::create('loan_record_payments', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('loan_record_id')->nullable();
            $table->bigInteger('term')->nullable();
            $table->double('amount')->nullable();
            $table->double('balance')->nullable();
            $table->string('due_date')->nullable();
            $table->string('status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('loan_record_payments');
    }
};
