<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Calendar;
use Illuminate\Http\Request;
use App\Http\Requests\V1\CalendarRequest;
use Illuminate\Support\Facades\Auth;

class CalendarController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth:api', ['except' => ['index']]);
    }

    public function index()
    {
        //
    }

    public function store(Request $request)
    {
        $fields = $request->validate([
            'title' => 'required|string|max:255',
            'date_start' => 'required|date|after_or_equal:today',
            'date_end' => 'required|date|after:date_start',
        ]);

        $user = Auth::user();

        $calendar = Calendar::create([
            'title' => $fields['title'],
            'date_start' => $fields['date_start'],
            'date_end' => $fields['date_end'],
            'user_id' => $user->id,
        ]);
        $calendar->user()->associate($user);

        if ($calendar) {
            return response()->json([
                'message' => 'Successfully created calendar!',
                'calendar' => $calendar,
            ], 201);
        } else {
            return response()->json([
                'message' => 'Failed to create calendar!',
            ], 500);
        }
    }

    public function show()
    {
        $user = Auth::user();

        try {
            $calendars = Calendar::where('user_id', $user->id)->get();
            return response()->json([
                'message' => 'Successfully retrieved calendars!',
                'calendars' => $calendars,
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Failed to retrieve calendars!',
            ], 500);
        }
    }

    public function update(Request $request, Calendar $calendar)
    {
        //
    }

    public function destroy($id)
    {
        // $user = Auth::user();

        try {
            $calendar = Calendar::find($id);
            if($calendar) {
                $calendar->delete();
                return response()->json([
                    'message' => 'Successfully deleted calendar!',
                ], 200);
            } else {
                return response()->json([
                    'message' => 'Failed to delete calendar!',
                ], 500);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Failed to delete calendar!',
            ], 500);
        }
    }
}
