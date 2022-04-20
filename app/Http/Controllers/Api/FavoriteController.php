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
    public function registerFavorites(Request $request){

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
     //   $favorite = Favorite::where("user_id", "=",auth()->user()->id)->where("pokemon_id","=",request->pokemon_id)->delete();
     $favorite=Favorite::find($request->id);
        $favorite->delete();
        return response()->json([
            "status" => 1,
            "msj" =>"Pokemon eliminado de favoritos"
        ]); 
    }

}
