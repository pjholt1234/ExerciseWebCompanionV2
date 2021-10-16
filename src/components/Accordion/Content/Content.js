import React from 'react';
import '../Accordion.css';


function Content(props){

    return(
        
        <div>
            {props.workouts.map((item,i)=>(
                <div className="content show">
                <ul>    
                    <li>{`Workout Name: ${item.workoutName}`}</li>
                    <li>{item.unit === 0 ? `Reps: ${item.amount}` : `Time: ${item.amount} mins`}</li>
                    <li>{`Weight: ${item.weight} KG`}</li>
                </ul>
                </div>
            ))}

        </div>
    )
};

export default Content;