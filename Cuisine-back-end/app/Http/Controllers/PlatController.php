<?php

namespace App\Http\Controllers;

use App\Http\Requests\PlatRequest;
use App\Models\Plat;
use Illuminate\Http\Request;

class PlatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $plats = Plat::all();
            return response()->json($plats);
        } catch (\Throwable $th) {
            return response()->json(['error'=>'aucun plat disponible']);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PlatRequest $request)
    {
        try {

            Plat::create($request->all());
            return response()->json(['success'=>'plat creer avec succes']);
        } catch (\Throwable $th) {
            return response()->json(['error'=>'erreur lors de la creation du plat']);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $plat = Plat::find($id);
            return response()->json($plat);
        } catch (\Throwable $th) {
            return response()->json(['error'=>'plat introuvable']);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {

            $plat = Plat::find($id);
            $plat->update($request->all());
            return response()->json(['success'=>'plat modifier avec succes']);

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
            $plat = Plat::find($id);
            $plat->delete();
            return response()->json(['success'=> 'plat supprimé avec succes']);
        } catch (\Throwable $th) {
            return response()->json(['error'=> 'erreur lors de la suppression']);
        }
    }
}
