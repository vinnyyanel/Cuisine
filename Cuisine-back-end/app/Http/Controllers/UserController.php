<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       try {
        $user = User::all();
        return response()->json($user);
       } catch (\Throwable $th) {
        return response()->json(['error'=> 'aucun utilisateur trouver']);
       }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserRequest $request)
    {
        try {
           $img = $request->file('image');
          $nomIm =$request['email'].'.'.$img->getClientOriginalExtension();
           $chemin = Storage::disk('public')->putFileAs('images',$img,$nomIm);
           $photoUrl = Storage::url($chemin);
           User::create(['nom'=>$request->nom,
            'prenom'=>$request->prenom,
            'email'=>$request->email,
            'dath_of_birth'=>$request->dath_of_birth,
            'role'=>$request->role,
            'cheminImage'=> $photoUrl,
            'password'=>Hash::make($request->password),
            ]);
            return response()->json(['success'=>'utlisateur creer avec succes']);
        } catch (\Throwable $th) {

            return response()->json(['error'=>'erreur lors de la creation de l utilisateur','catch'=>$th->getMessage()]);
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $user = User::find($id);
            return response()->json($user);
        } catch (\Throwable $th) {
            return response()->json(['error'=>'utilisateur introuvable']);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserRequest $request, string $id)
    {
        try {
            $user = User::find($id);
            $user->update($request->all());
            return response()->json(['success'=>'utilisateur modifier avec succes']);

        } catch (\Throwable $th) {
            return response()->json(['error'=>'erreur lors de la modification']);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $user = User::find($id);
            $user->delete();
            return response()->json(['success'=> 'utilisateur supprimé avec succes']);
        } catch (\Throwable $th) {
            return response()->json(['error'=> 'erreur lors de la suppression']);
        }
    }
}
