import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
const style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    cursor: 'move',
};
export const Card = ({ id, unit, workoutName, amount, weight, index, moveCard }) => {
    const ref = useRef(null);
    const [{ handlerId }, drop] = useDrop({
        accept: "card",
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            // Get vertical middle
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            // Determine mouse position
            const clientOffset = monitor.getClientOffset();
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            // Time to actually perform the action
            moveCard(dragIndex, hoverIndex);
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex;
        },
    });
    const [{ isDragging }, drag] = useDrag({
        type: "card",
        item: () => {
            return { id, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));
    return (
        <div className="ui raised padded container segment" ref={ref} style={{ ...style, opacity }} data-handler-id={handlerId}>
			<div className="ui header">
                {`${workoutName} `}
            </div>
            <table>
                <tr>
                    <td className="heading">
                        Weight:
                    </td>
                    <td className="total">
                        {`${weight}kg`}   
                    </td>
                    <td> 
                    </td>
                    <td className="heading">
                        {unit === 0 ? `Reps: ` : `Time: `}
                    </td>
                    <td className="total">
                        {`${amount}${unit === 0 ? `` : `mins`}`}  
                    </td>
                </tr>
            </table>

		</div>
        );
};
