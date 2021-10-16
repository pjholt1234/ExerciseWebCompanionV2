import React, {useState} from 'react';
import './ControlPanel.css'



const ControlPanel = () =>{

    const [repstime, setRepsTime] = useState('Reps');

    function toggleRepsTime(repstime){
        if (repstime === "Reps"){
            setRepsTime("Time") 
        }else{
            setRepsTime("Reps")
        }
    }

    return(
        <div className="ui raised padded text segment item">
            <div class="ui input controlbox">
                <input type="text" placeholder="Plan Name"/>
            </div>
            <div class="ui input controlbox">
                <input type="text" placeholder="Weight"/>
            </div>
            <div class="ui input controlbox">
                <input type="text" placeholder={repstime}/>
            </div>
            <button className="ui icon button"><i className="save outline icon"></i></button>
            <button className="ui button" onClick={()=>toggleRepsTime(repstime)}>{repstime}</button>
        </div>
    )
}

export default ControlPanel;