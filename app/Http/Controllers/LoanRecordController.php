<?php

namespace App\Http\Controllers;

use App\Models\LoanRecord;
use App\Models\LoanRecordPayment;
use Illuminate\Http\Request;

class LoanRecordController extends Controller
{
    public function index(Request $request)
    {
        if ($request->status == "Remaining_loan_records") {
            $loanRecords = LoanRecord::where([
                ['status', '=', 'Approved'],
                ['balance', '<>', 0],
            ])
                ->with(['employee', 'user', 'loan_records']) // Eager load relationships
                ->get();

            return response()->json([
                'response' =>  $loanRecords,
            ], 200);
        } else {
            $loanRecords = LoanRecord::where([
                ['status', '=', $request->status],
                ['balance', '<>', 0],
            ])
                ->with(['employee', 'user'])
                ->get();

            return response()->json([
                'response' => $loanRecords,
            ], 200);
        }
    }


    public function show($id)
    {
        $loan_record = LoanRecord::where('employee_id', $id)->with(['employee', 'user'])
            ->orderBy('created_at', 'asc')->get();
        return response()->json([
            'response' => $loan_record,
        ], 200);
    }
    public function store(Request $request)
    {
        $isPending = LoanRecord::where([
            ['employee_id', '=', $request->employee_id],
            ['status', '=', 'Pending'],
        ])->exists();

        $isHasBalance = LoanRecord::where([
            ['employee_id', '=', $request->employee_id],
            ['status', '=', 'Approved'],
            ['balance', '<>', 0],
        ])->exists();

        if ($isPending) {
            return response()->json([
                'response' => 'You already have a pending request!',
            ], 201);
        } else if ($isHasBalance) {
            return response()->json([
                'response' => 'You still have an outstanding balance on your previous loan!',
            ], 201);
        } else {
            $request->validate([
                'purpose' => 'required',
                'desired_amount' => 'required',
            ]);

            $loan_record = LoanRecord::create($request->all());
            foreach ($request->schedule as $key => $value) {
                LoanRecordPayment::create([
                    'loan_record_id' => $loan_record->loan_record_id,
                    'employee_id' => $request->employee_id,
                    'term' => $request->term,
                    'amount' => $request->bi_amortization,
                    'due_date' => $value['date'],
                    'status' => 'Unpaid',
                    'balance' => $request->desired_amount
                ]);
            }
            return response()->json([
                'response' => 'success',
            ], 200);
        }
    }


    public function loan_change_status(Request $request)
    {
        $loan_record = LoanRecord::where('id', $request->id)->first();
        $loan_record->update([
            'status' => $request->status
        ]);
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function update(Request $request, $id)
    {
        // $loan_record= LoanRecord::where('id', $id)->first();
        // $loan_record->update([
        //     'status'=>''
        // ]);
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function destroy($id)
    {
        LoanRecord::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
