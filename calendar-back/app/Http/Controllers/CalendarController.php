<?php

namespace App\Http\Controllers;

use App\Models\Calendar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CalendarController extends Controller
{
    public function show() {

        $user = Auth::user();

        $calendars = Calendar::all();
        return response()->json($calendars);
    }

    public function store(Request $request) {

        $user = Auth::user();

        $fields = $request->validate([
            'title' => 'required|string|max:255',
            'date_start' => 'required|date|after:today',
            'date_end' => 'required|date|after:date_start',
        ]);

        $calendar = Calendar::create([
            'title' => $fields['title'],
            'date_start' => $fields['date_start'],
            'date_end' => $fields['date_end'],
            'user_id' => $user->id,
        ]);

        return response()->json($calendar, 201);
    }
}
