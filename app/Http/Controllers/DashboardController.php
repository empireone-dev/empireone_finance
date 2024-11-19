<?php

namespace App\Http\Controllers;

use App\Models\LoanRecord;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(){

        $pending = LoanRecord::where('status','Pending')->count();
        $approved = LoanRecord::where('status','Approved')->count();
        $released = LoanRecord::where('status','Released')->count();
        $declined = LoanRecord::where('status','Declined')->count();

        return response()->json([
            'pending' => $pending,
            'approved' => $approved,
            'released' => $released,
            'declined' => $declined,
            
        ], 200);
    }
}
