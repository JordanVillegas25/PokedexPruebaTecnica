<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //registro de usuarios en el sistema se comprueba los campos y lse agrega validaciones de contraseñas
    public function register(Request $request) {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => ['required',
            Password::min(6)
            ->letters()
            ->numbers()
            ]            
        ]);

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json([
            "status" => 1,
            "msg" => "¡Registro exitoso!",
        ]);    
    }

//metodo que se encarga de realizar el loguin por metodo post realiza validaciones
    public function login(Request $request) {
 
        $request->validate([
            "email" => "required|email",
            "password" => "required|min:6|max:20"
        ]);
 
        $user = User::where("email", "=", $request->email)->first();

        if( isset($user->id) ){
            if(Hash::check($request->password, $user->password)){ //valida las contraseña encriptada y la ingresada
             
                $token = $user->createToken("auth_token")->plainTextToken; // crea un token para el usuario que envia al front end para acceder al usuario de manera encriptada
               
                //si está todo ok devuelve el token que tambien servira para validar las peticiones al servidor
                return response()->json([
                    "status" => 1,
                    "msg" => "¡Logueado exitosamente!",
                    "access_token" => $token
                ], 200);        
            }else{
                return response()->json([
                    "status" => 0,
                    "msg" => "La Contraseña es incorrecta",
                ]);    
            }

        }else{
            return response()->json([
                "status" => 0,
                "msg" => "Usuario no registrado",
            ]);  
        }
    }
    //devuelve informacion del perfil del usuario
    public function userProfile() {
        return response()->json([
            "status" => 0,
            "msg" => "Acerca del perfil de usuario",
            "data" => auth()->user()
        ]); 
    }

    //obtiene el token del usuarioactualmente logueado
    public function getTokenUser(){
       
        return response()->json([
            "status" => 1,
            "token" => auth()->user()
        ]);
    }
    //metodo que se encarga de eliminar tokens y cerrar la sesion del usuario
    public function logout() {
        auth()->user()->tokens()->delete();
        
        return response()->json([
            "status" => 1,
            "msg" => "Cierre de Sesión",            
        ]); 
    }
}
