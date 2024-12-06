<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class LoanRecord extends Model
{
    use HasFactory;
    protected $fillable = [
        'loan_record_id',
        'employee_id',
        'purpose',
        'desired_amount',
        'approved_amount',
        'term',
        'net',
        'bi_amortization',
        'interest',
        'basic_salary',
        'balance',
        'remarks',
        'released_at',
        'status',
        'notes',
        'reason',
        'pay_all',
        'signature'
    ];
    
    public function employee(): BelongsTo
    {
        return $this->belongsTo(Employee::class,"employee_id","emp_id")->with(['salary']);
    }
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class,"employee_id","employee_id");
    }
    public function loan_records(): HasMany
    {
        return $this->hasMany(LoanRecordPayment::class, "loan_record_id", "loan_record_id");
    }
    public function applicant(): BelongsTo
    {
        return $this->belongsTo(Applicant::class,"employee_id","app_id");
    }

    public function salary(): BelongsTo
    {
        return $this->belongsTo(OutSourcingErf::class, "position", "jobTitle");
    }
}
