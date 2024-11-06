<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index()
    {
        $employee = Employee::get();
        return response()->json([
            'response' => $employee,
        ], 200);
    }


    public function show($id)
    {
        $employee = Employee::where('examination_id', $id)
        ->orderBy('created_at', 'asc')->get();
        return response()->json([
            'response' =>$employee,
        ], 200);
    }
    public function store(Request $request)
    {
        Employee::create($request->all());
        return response()->json([
            'response' =>'success',
        ], 200);
    }

    public function destroy($id)
    {
        Employee::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
