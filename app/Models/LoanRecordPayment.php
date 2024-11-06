<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LoanRecordPayment extends Model
{
    use HasFactory;
    protected $fillable = [
        'loan_record_id',
        'term',
        'amount',
        'balance',
        'due_date',
        'status',
    ];
}
