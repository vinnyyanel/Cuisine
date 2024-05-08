<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class connexionController extends Controller
{
    public function connexion(Request $request){
        try {
            $userCredentials = $request->only('email','password');
            if(Auth::attempt($userCredentials)){

                /** @var \App\Models\User $user **/
                $user = Auth::user();

                $token = $user->createToken('recetteCuisine')->accessToken;
                return response()->json(['success'=> 'connexion Reussie','user'=>$user, 'token'=>$token]);
            } else {
                return response()->json(['error'=> 'Aucun utilisateur trouvé avec cet e-mail']);
            }
        } catch (\Throwable $th) {
            return response()->json(['error'=> 'erreur lors de la connexion']);
        }
    }

    public function deconnexion(){
        try {

            /** @var \App\Models\User $user **/
            $user = Auth::user();
            $user->tokens()->delete();
            return response()->json(['success'=> 'deconnexion Reussie']);

        } catch (\Throwable $th) {
            return response()->json(['error'=> 'erreur lors de la deconnexion']);
        }

        }


}
