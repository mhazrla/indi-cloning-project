<?php


use App\Http\Controllers\ContactController;
use App\Http\Controllers\ArticleController;
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

Route::prefix('/article')->controller(ArticleController::class)->group(function () {
    Route::get('/', 'index')->name('article');
    Route::get('/detail/{article}', 'show')->name('article.show');
});


Route::get('/contact', [ContactController::class, 'show'])->name('contact.index');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.submit');
Route::get('/contact/{contact}', [ContactController::class, 'show'])->name('contact.show');

Route::get('/contact-us', function () {
    return Inertia::render('ContactUs');
})->name('contact');

Route::prefix('dashboard')->controller(ArticleController::class)->middleware(['auth', 'verified'])->group(function () {
    Route::get('/', 'dashboard')->name('dashboard');
    Route::get('/create', 'create')->name('dashboard.create');
    Route::post('/store', 'store')->name('dashboard.store');
    Route::get('/edit/{article}', 'edit')->name('dashboard.edit');
    Route::patch('{article}', 'update')->name('dashboard.update');
    Route::delete('{article}', 'destroy')->name('dashboard.destroy');
});

require __DIR__ . '/auth.php';
