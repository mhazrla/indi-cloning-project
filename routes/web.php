<?php

use App\Http\Controllers\ContactController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Homepage');
})->name('home');

Route::get('/article', function () {
    return Inertia::render('Article');
})->name('article');

Route::get('/contact', [ContactController::class, 'show'])->name('contact.index');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.submit');
Route::get('/contact/{contact}', [ContactController::class, 'show'])->name('contact.show');

Route::get('/contact-us', function () {
    return Inertia::render('ContactUs');
})->name('contact');

// Route::get('/contact', function () {
//     return Inertia::render('Contactus');
// });

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
