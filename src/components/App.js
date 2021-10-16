import React, {useState} from 'react';
import Accordion from './Accordion/Accordion';
import ControlPanel from './ControlPanel/ControlPanel';
import Sortable from './Sortable/Sortable';
import './style.css';

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



const App = () =>{

    const [selectedPlan, setSelectedPlan] = useState([
        { workoutID: 0, workoutName: "Crunches", unit: 0, amount: 20, weight: 0 },
        { workoutID: 0, workoutName: "Crunches", unit: 0, amount: 15, weight: 0 },
        { workoutID: 0, workoutName: "Crunches", unit: 0, amount: 10, weight: 0 }
    ]);

    return(
        <div className="ui very padded segment">
            <div className="ui grid">
                <div className="ui row">
                    <div className="sixteen wide column">
                        <h1 className="heading ui header"><i class="fas fa-dumbbell"></i> Workout Planner</h1>
                    </div>    
                </div>
                <div className="ui row">
                    <div className="six wide column">
                        <ControlPanel/>
                        <Sortable selectedPlan={selectedPlan}/>
                    </div>
                    <div className="four wide column">
                        <Accordion onClick={(planID)=>setSelectedPlan((plans.find(o => o.planID === planID)).workouts)} plans={plans}>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )    
}

export default App;