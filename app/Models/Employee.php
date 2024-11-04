<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Employee extends Model
{
    use HasFactory;
    protected $table = 'employee';
    public $timestamps = false;
    protected $fillable = [
        'app_id',
        'emp_id',
        'position',
        'dept',
        'account',
        'sup_id',
        'hired',
        'due',
        'eogs',
        'status',
    ];
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, "sup_id", "id");
    }
    
    public function employee(): BelongsTo
    {
        return $this->belongsTo(Employee::class,"employee_id","app_id");
    }
}
