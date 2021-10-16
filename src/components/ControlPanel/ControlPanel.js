import React, {useState} from 'react';
import Dropdown from './Dropdown';
import './ControlPanel.css';


const catOptions = [
    {
        label: "Abs",
        value: "abs",
    },
    {
        label: "Chest",
        value: "chest",
    },
    {
        label: "Legs",
        value: "legs",
    },
    {
        label: "Arms",
        value: "arms",
    },
    {
        label: "Cardio",
        value: "cardio",
    },
    {
        label: "Other",
        value: "other",
    }
];

const workoutOptions = [
    {
        label: "Abs",
        value: "abs",
    },
    {
        label: "Chest",
        value: "chest",
    },
    {
        label: "Legs",
        value: "legs",
    },
    {
        label: "Arms",
        value: "arms",
    },
    {
        label: "Cardio",
        value: "cardio",
    },
    {
        label: "Other",
        value: "other",
    }
];



const ControlPanel = () =>{

    const [repstime, setRepsTime] = useState('Reps');
    const [selectedCat, setSelectedCat] = useState(catOptions[0]);
    const [selectedWorkout, setSelectedWorkout] = useState(workoutOptions[0]);
    function toggleRepsTime(repstime){
        if (repstime === "Reps"){
            setRepsTime("Time") 
        }else{
            setRepsTime("Reps")
        }
    }

    return(

        <div class="ui raised padded text ui horizontal segments">
            <div style={{width:"200px"}} class="ui segment">
                <Dropdown label="Select Category" options={catOptions} selected={selectedCat} onSelectedChange={setSelectedCat}/>
                <Dropdown label="Select Exercise" options={workoutOptions} selected={selectedWorkout} onSelectedChange={setSelectedWorkout}/>
            </div>
            <div style={{width:"200px"}} class="ui segment">
                <div class="ui input controlbox">
                    <input type="text" placeholder="Plan Name"/>
                </div>
                <div class="ui input controlbox">
                    <input type="text" placeholder="Weight"/>
                </div>
                <div class="ui input controlbox">
                    <input type="text" placeholder={repstime}/>
                </div>
            </div>
            <div class="ui Compact segment">
                <button className="ui button" onClick={()=>toggleRepsTime(repstime)}>{repstime}</button>
                <button className="ui icon button"><i className="save outline icon"></i></button>
                <button className="ui icon button"><i className="plus circle icon"></i></button>
            </div>
        </div>

    )
}

export default ControlPanel;