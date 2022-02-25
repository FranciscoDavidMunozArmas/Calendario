<?php

namespace App\Http\Controllers;

use App\Models\Calendar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CalendarController extends Controller
{
    public function show()
    {

        $user = Auth::user();

        $calendars = Calendar::where('user_id', $user->id)->get();
        return response()->json($calendars);
    }

    public function store(Request $request)
    {

        $user = Auth::user();

        $fields = $request->validate([
            'title' => 'required|string|max:255',
            'date_start' => 'required|string|max:255',
            'date_end' => 'required|string|max:255',
        ]);

        try {
            $date_start = strtotime($fields['date_start']);
            $date_end = strtotime($fields['date_end']);
            if ($date_start > $date_end) {
                return response()->json(['message' => 'Date start must be less than date end'], 400);
            }

            $calendar = Calendar::create([
                'title' => $fields['title'],
                'date_start' => $fields['date_start'],
                'date_end' => $fields['date_end'],
                'user_id' => $user->id,
            ]);

            return response()->json($calendar, 201);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 400);
        }
    }
}
