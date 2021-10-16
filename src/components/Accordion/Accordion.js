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
                    <div key={i} className="ui raised padded text container segment item">
                        <div className="title" onClick={()=> toggle(i)}>
                            <h2 className="ui header">{item.planName}</h2>
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