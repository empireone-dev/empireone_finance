<?php

namespace App\Http\Controllers;

use App\Models\LoanRecordPayment;
use Illuminate\Http\Request;

class LoanRecordPaymentController extends Controller
{
    public function index()
    {
        $loan_record_payment = LoanRecordPayment::get();
        return response()->json([
            'response' => $loan_record_payment,
        ], 200);
    }


    public function show($id)
    {
        $loan_record_payment = LoanRecordPayment::where('examination_id', $id)
        ->orderBy('created_at', 'asc')->get();
        return response()->json([
            'response' =>$loan_record_payment,
        ], 200);
    }
    public function store(Request $request)
    {
        LoanRecordPayment::create($request->all());
        return response()->json([
            'response' =>'success',
        ], 200);
    }

    public function destroy($id)
    {
        LoanRecordPayment::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
