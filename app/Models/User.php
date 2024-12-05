<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    public $timestamps = false;
    protected $fillable = [
        'id',
        'role_id',
        'employee_id',
        'employee_fname',
        'employee_mname',
        'employee_lname',
        'employee_suffix',
        'department',
        'account',
        'sup_id',
        'position',
        'profile',
        'site',
        'googlecal',
        'gender',
        'password',
        'created'
    ];
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function salary(): BelongsTo
    {
        return $this->belongsTo(OutSourcingErf::class, "position", "jobTitle");
    }
    public function applicant(): BelongsTo
    {
        return $this->belongsTo(Applicant::class,"employee_id","app_id");
    }
}
