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
        Schema::create('loan_records', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('loan_record_id')->nullable();
            $table->bigInteger('employee_id')->nullable();
            $table->string('purpose')->nullable();
            $table->double('desired_amount')->nullable();
            $table->double('approved_amount')->nullable();
            $table->bigInteger('term')->nullable();
            $table->double('net')->nullable();
            $table->double('amortization')->nullable();
            $table->double('interest')->nullable();
            $table->double('balance')->nullable();
            $table->double('basic_salary')->nullable();
            $table->string('remarks')->nullable();
            $table->string('status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('loan_records');
    }
};
