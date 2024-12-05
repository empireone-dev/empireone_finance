<?php
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LoanRecordController;
use App\Http\Controllers\LoanRecordPaymentController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return User::where('id',$request->user()->id)->with(['salary','applicant'])->first();
})->middleware('auth:sanctum');

// Route::get('/user', function (Request $request) {
//     return $request->user();
// });


Route::resource('dashboard', DashboardController::class);
Route::resource('loan_record', LoanRecordController::class);
Route::post('/loan_change_status', [LoanRecordController::class, 'loan_change_status']);
Route::resource('loan_record_payments', LoanRecordPaymentController::class);
Route::post('/pay_loan_record', [LoanRecordPaymentController::class, 'pay_loan_record']);
