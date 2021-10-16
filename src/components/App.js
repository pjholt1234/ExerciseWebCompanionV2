import React from 'react';
import Accordion from './Accordion/Accordion';

const plans =[
    {   planID:1,
        planName: "Chest",
        lastUpdated: "15/10/21",
        workouts: [
            { workoutID: 0, workoutName: "Bench Press", unit: 0, amount: 10, weight: 10 },
            { workoutID: 0, workoutName: "Bench Press", unit: 0, amount: 10, weight: 10 },
            { workoutID: 0, workoutName: "Bench Press", unit: 0, amount: 10, weight: 10 }
        ]
    },
    {   planID:0,
        planName: "Run",
        lastUpdated: "16/10/21",
        workouts: [
            { workoutID: 0, workoutName: "Running", unit: 1, amount: 10, weight: 0 }
        ]
    },
    {   planID:2,
        planName: "Abs",
        lastUpdated: "17/10/21",
        workouts: [
            { workoutID: 0, workoutName: "Crunches", unit: 0, amount: 20, weight: 0 },
            { workoutID: 0, workoutName: "Crunches", unit: 0, amount: 20, weight: 0 },
            { workoutID: 0, workoutName: "Crunches", unit: 0, amount: 20, weight: 0 }
        ]
    },
];


function App(){
    return(
        <div>
            <Accordion plans={plans}/>
        </div>
    )    
}

export default App;