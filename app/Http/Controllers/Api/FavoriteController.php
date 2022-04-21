<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Favorite;
class FavoriteController extends Controller
{
    //metodo que obtiene los pokemones favoritos del usuario con sesion
    public function getFavorites(){
      
        $favorite = Favorite::where("user_id", "=",auth()->user()->id)->paginate(20);
        return response()->json([
            "status" => 1,
            "data" =>$favorite
        ]); 
    }
     //metodo que devuelve la cantidad de pokemones en la tabla de favoritos del usuario
    public function getCountFavorites(){
      
        $favorite = Favorite::where("user_id", "=",auth()->user()->id)->count();
      
        return response()->json([
            "status" => 1,
            "count" =>$favorite
        ]); 
    }
    //este metodo se encarga de guardar el id del pokemon junto con el del usuario en la tabla de favoritos
    public function registerFavorites(Request $request){
        if (Favorite::where('pokemon_id', '=', $request->pokemon_id)->where('user_id','=',auth()->user()->id)->exists()) {
            return response()->json([
                "status" => 0,
                "msj" => "Ya tienes este pokemon"
            ]); 
         }
        $favorite = new Favorite();
        $favorite->pokemon_id=$request->pokemon_id;
        $favorite->user_id=auth()->user()->id;
      
        $favorite->save();
        return response()->json([
            "status" => 1,
            "msj" => "se ha agregado a favoritos"
        ]); 
    }
    //elimina el registro del pokemon en la lista de favoritos.
    public function deleteFavorites(Request $request){
     
     $favorite=Favorite::where('pokemon_id','=',$request->pokemon_id)->delete();
        return response()->json([
            "status" => 1,
            "msj" =>"Pokemon eliminado de favoritos"
        ]); 
    }

}
