import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Container from './Container';

function Sortable(props){
    return(
        <div className="sortable ui raised padded text segment item">
            <DndProvider backend={HTML5Backend}>
				<Container selectedPlan={props.selectedPlan}/>
			</DndProvider>
        </div>
    )
}

export default Sortable;