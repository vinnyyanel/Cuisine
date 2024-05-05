<?php

namespace App\Http\Controllers;

use App\Models\Plat;
use Illuminate\Http\Request;

class searchController extends Controller
{
    public function search(string $slug){
        try {
            $plats = Plat::where('nom','LIKE',"%{$slug}%")->get();

            return response()->json($plats);
        } catch (\Throwable $th) {
            return response()->json(['error'=>'aucun utilisateur non trouvé']);
        }
    }
}
