<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
        ]);

        try {

            $user = User::create([
                'email' => $fields['email'],
                'password' => Hash::make($fields['password']),
            ]);

            return response()->json($user, 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ], 400);
        }
    }

    public function login(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:8',
        ]);

        $user = User::where('email', $fields['email'])->first();
        if (!$user) {
            return response()->json(['message' => 'User not found'], 400);
        }
        if (!Hash::check($fields['password'], $user->password)) {
            return response()->json(['message' => 'Password is incorrect'], 401);
        }

        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json(['token' => $token], 201);
    }

    public function logout(Request $request)
    {
        $request->user()->token()->delete();
        return response()->json(['message' => 'Successfully logged out'], 200);
    }
}
