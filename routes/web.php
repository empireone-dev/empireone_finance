<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });


Route::middleware('redirectBasedOnRole')->get('/', function () {
    return Inertia::render('login/page');
})->name('login');

Route::middleware('auth:sanctum', 'administrator')->prefix('administrator')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('admin/dashboard/page');
    })->name('admin.dashboard');
    Route::get('/employees', function () {
        return Inertia::render('admin/employees/page');
    });
    Route::prefix('form_response')->group(function () {
        Route::get('/pendings', function () {
            return Inertia::render('admin/form_response/pendings/page');
        });
        Route::get('/approved', function () {
            return Inertia::render('admin/form_response/approved/page');
        });
    });
});

Route::middleware('auth:sanctum', 'employee')->prefix('employee')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('employee/dashboard/page');
    })->name('employee.dashboard');

    Route::get('/request', function () {
        return Inertia::render('employee/request/page');
    });
    Route::get('/loans', function () {
        return Inertia::render('employee/loans/page');
    });
});



// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';
