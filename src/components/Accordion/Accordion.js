import React, {useState} from 'react';
import './Accordion.css';
import Content from './Content/Content';

function Accordion(props){

    const toggle = (i) =>{
        if (selected === i){
            return setSelected(null);
        }

        setSelected(i);
    }

    const [selected,setSelected] = useState(null);




    return(
        <div className="wrapper">
            <div className="accordion">
                {props.plans.map((item,i)=>(
                    <div key={i} className="item">
                        <div className="title" onClick={()=> toggle(i)}>
                            <h2>{item.planName}</h2>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={selected === i ? 'content show' : 'content'}>
                            <Content workouts={item.workouts}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Accordion;