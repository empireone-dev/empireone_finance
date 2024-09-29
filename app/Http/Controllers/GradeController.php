<?php

namespace App\Http\Controllers;

use App\Models\ClassParticipation;
use App\Models\Examination;
use App\Models\Grade;
use App\Models\Project;
use App\Models\Quiz;
use Illuminate\Http\Request;

class GradeController extends Controller
{
    public function index(Request $request)
    {
        $a = Grade::get();
        return response()->json([
            'response' => $a,
        ], 200);
    }
    public function show($id)
    {
        $grades = Grade::where('id', $id)->get();
        return response()->json([
            'response' => $grades,
        ], 200);
    }
    public function store(Request $request)
    {
      
        
        foreach ($request->records as $key => $record) {
            $grade = Grade::where([
                ['academic_year', '=', $record['academic_year']],
                ['enrollment_id', '=', $record['id']],
            ])->first();
            if (!$grade) {
                $grade =  Grade::create([
                    'academic_year' => $record['academic_year'],
                    'course_id' => $record['course_id'],
                    'enrollment_id' => $record['id'],
                ]);
            }
            if ($request->lecture == 'Examination') {
                Examination::create([
                    'grade_id'=>$grade['id'],
                    'score'=>$record['score'],
                    'percent'=>30,
                    'date'=>$request->date
                ]);
            }else if($request->lecture == 'Quizzes') {
                Quiz::create([
                    'grade_id'=>$grade['id'],
                    'score'=>$record['score'],
                    'percent'=>30,
                    'date'=>$request->date
                ]);
            }else if($request->lecture == 'Projects/Assignment') {
                Project::create([
                    'grade_id'=>$grade['id'],
                    'score'=>$record['score'],
                    'percent'=>20,
                    'date'=>$request->date
                ]);
            }else if($request->lecture == 'Class Participation') {
                ClassParticipation::create([
                    'grade_id'=>$grade['id'],
                    'score'=>$record['score'],
                    'percent'=>20,
                    'date'=>$request->date
                ]);
            }
           
        }
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function update(Request $request, $id)
    {
        $a = Grade::where('id', $id);
        $a->update($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function destroy($id)
    {
        Grade::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
