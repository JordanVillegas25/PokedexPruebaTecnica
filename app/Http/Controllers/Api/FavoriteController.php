<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Favorite;
class FavoriteController extends Controller
{
    
    public function getFavorites(){
      
        $favorite = Favorite::where("user_id", "=",auth()->user()->id)->get();
        return response()->json([
            "status" => 1,
            "data" =>$favorite
        ]); 
    }
    public function getCountFavorites(){
      
        $favorite = Favorite::where("user_id", "=",auth()->user()->id)->count();
      
        return response()->json([
            "status" => 1,
            "count" =>$favorite
        ]); 
    }
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
    public function deleteFavorites(Request $request){
     
     $favorite=Favorite::where('pokemon_id','=',$request->pokemon_id)->delete();
        return response()->json([
            "status" => 1,
            "msj" =>"Pokemon eliminado de favoritos"
        ]); 
    }

}
