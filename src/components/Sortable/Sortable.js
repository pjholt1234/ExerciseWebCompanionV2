import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Container from './Container';

function Sortable(props){
    return(
        <div>
            <DndProvider backend={HTML5Backend}>
				<Container/>
			</DndProvider>
        </div>
    )
}

export default Sortable;