<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\LoanRecord;
use App\Models\LoanRecordPayment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class LoanRecordController extends Controller
{
    public function index(Request $request)
    {
        // Define the base query
        $query = LoanRecord::with(['employee', 'user', 'salary', 'applicant']);

        // Apply conditional status filter
        if ($request->search != 'null') {
            $query->where('balance', '<>', 0);
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
                $query->where('balance', '<>', 0);
                $query->where('status', '=', 'Released')->with('loan_records'); // Load loan_records only if needed
            }
            if ($request->status == "Loan_tracker") {
                $query->where('balance', '=', 0)->with('loan_records');
                $query->orWhere('pay_all', '<>', null)->with('loan_records');
            } else {
                $query->where('balance', '<>', 0);
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
        $loan_record = LoanRecord::where('employee_id', $id)->with(['employee', 'user', 'applicant'])
            ->orderBy('created_at', 'asc')->paginate(10);
        return response()->json([
            'response' => $loan_record,
        ], 200);
    }

    public function uploadBase64Image($signature)
    {
        try {
            list($type, $data) = explode(';', $signature);
            list(, $data) = explode(',', $data);
    
            $decodedImage = base64_decode($data);
            if ($decodedImage === false) {
                return 'none';
            }
    
            if (!str_contains($type, 'image/')) {
                return 'none';
            }
    
            $filename = uniqid() . '.png';
            $path = 'empireone-financing/' . date("Y") . '/' . $filename;
    
            Storage::disk('s3')->put($path, $decodedImage);
            return Storage::disk('s3')->url($path);
        } catch (\Exception $e) {
            return 'none';
        }
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
            $signature = $this->uploadBase64Image($request->signature);
            $loan_record = LoanRecord::create([
                ...$request->all(),
                'signature' =>$signature 
            ]);

            foreach ($request->loan_records as $key => $value) {
                LoanRecordPayment::create([
                    'loan_record_id' => $loan_record->loan_record_id,
                    'employee_id' => $request->employee_id,
                    'term' => $request->term,
                    'amount' => $request->bi_amortization,
                    'due_date' => $value['due_date'],
                    'status' => 'Unpaid',
                    'balance' => $request->desired_amount,
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
