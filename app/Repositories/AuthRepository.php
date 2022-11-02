<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use http\Env\Request;

class AuthRepository{

    public function login($request) {

        $user = User::where('email', $request->email)->first();
        if($request->email == '' || $request->password == '') {
            return response()->json(
                [
                    'message' => 'Email or password can not be null!'
                ],
                404
            );
        }

        if (!$user || !Hash::check($request->password, $user->password, [])) {
            return response()->json(
                [
                    'message' => 'Email or password is incorrect. Please try again!'
                ],
                404
            ); 
        }

        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json(
            [
                'message' => 'Login success!',
                'email' => $request->email,
                'first_name' => $user->first_name,
                'last_name' => $user->last_name,
                'token' => $token,
                'type_token' => 'Bearer'
            ], 
            200
        );
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();
            return response()->json(
            [
                'message' => 'Logout Success ! '
            ], 
            200
        );
    }
}