<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Article;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\ArticleStoreRequest;
use App\Http\Requests\ArticleUpdateRequest;
use Illuminate\Support\Facades\Storage;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function dashboard(User $user)
    {
        $articles = Article::where('user_id', auth()->user()->id)->latest()->with(['tags'])->get();

        return Inertia::render(
            'Dashboard',
            [
                'articles' => $articles,
                'user' => $user
            ]
        );
    }
    public function index()
    {
        $articles = Article::latest()->with(['tags'])->get();

        return Inertia::render(
            'Article/Article',
            [
                'article' => $articles,
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Article/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ArticleStoreRequest $request)
    {
        $tags = explode('#', $request->tags);

        $validatedData = $request->validated();
        if ($request->hasFile('image')) {
            $validatedData['image'] = $request->file('image')->store('articles');
        }

        $article = $request->user()->articles()->create($validatedData);

        foreach ($tags as $tagName) {
            $tag = Tag::firstOrCreate(['name' => $tagName]);
            $article->tags()->attach($tag);
        }

        return Redirect::route('dashboard');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {
        $tags = $article->tags->implode('name', '#');
        return Inertia::render(
            'Article/Detail',
            [
                'article' => $article,
                'tags' => $tags
            ]
        );;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function edit(Article $article)
    {
        $tags = $article->tags->implode('name', '#');

        return Inertia::render('Article/Create', [
            'article' => $article,
            'tags' => $tags
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(ArticleUpdateRequest $request, Article $article)
    {
        $tags = explode('#', $request->tags);

        if ($request->hasFile('image')) {
            !is_null($article->image) && Storage::delete($article->image);
            $article->image = $request->file('image')->store('articles');
        }

        $article->update($request->validated() + [
            'image' => $article->image,
        ]);

        $newTags = [];

        foreach ($tags as $tagName) {
            $tag = Tag::firstOrCreate(['name' => $tagName]);
            array_push($newTags, $tag->id);
        }

        $article->tags()->sync($newTags);
        return Redirect::route('dashboard');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        Storage::delete($article->image);
        $article->tags()->detach();
        $article->delete();

        return Redirect::route('dashboard');
    }
}
