<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\LoanRecord;
use App\Models\LoanRecordPayment;
use Illuminate\Http\Request;

class LoanRecordController extends Controller
{
    public function index(Request $request)
    {
        // Define the base query
        $query = LoanRecord::where('balance', '<>', 0)
            ->with(['employee', 'user','salary']);

        // Apply conditional status filter
        if ($request->search != 'null') {
            $query->where('employee_id', '=', $request->search);
            $query->orWhere(function ($q) use ($request) {
                $q->orWhere('loan_record_id', '=', $request->search);
                $q->orWhereHas('user', function ($q) use ($request) { // Search by employee_fname in the user table
                    $q->where('employee_fname', 'like', '%' . $request->search . '%');
                });
                $q->orWhereHas('user', function ($q) use ($request) { // Search by employee_fname in the user table
                    $q->where('employee_lname', 'like', '%' . $request->search . '%');
                });
            });
        } else {
            if ($request->status == "Remaining_loan_records") {
                $query->where('status', '=', 'Released')->with('loan_records'); // Load loan_records only if needed
            } else {
                $query->where('status', '=', $request->status)->with('loan_records');
            }
        }
        // Paginate the results
        $loanRecords = $query->paginate(10);

        return response()->json([
            'response' => $loanRecords,
        ], 200);
    }



    public function show($id)
    {
        $loan_record = LoanRecord::where('employee_id', $id)->with(['employee', 'user'])
            ->orderBy('created_at', 'asc')->paginate(10);
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

        $employee = Employee::where([
            ['app_id', '=', $request->employee_id],
            ['status', '<>', 'Regular'],
        ])->first();

        if ($employee) {
            return response()->json([
                'response' => 'Your current employment status is ' . $employee->status,
            ], 201);
        } else if ($isPending) {
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

        $updateData = ['status' =>  $request->status];
        if ($request->released_at) {
            $updateData['released_at'] = $request->released_at;
        }
        $loan_record->update($updateData);
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
