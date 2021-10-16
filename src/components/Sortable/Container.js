
import { useState, useCallback } from 'react';
import { Card } from './Card';
import update from 'immutability-helper';
import "./Sortable.css";
const style = {
    width: 400,
};

const Container = () => {
    {
        const [cards, setCards] = useState([
            { id: 0, workoutID: 0, workoutName: "Crunches", unit: 0, amount: 20, weight: 0 },
            { id: 1, workoutID: 0, workoutName: "Crunches", unit: 0, amount: 15, weight: 0 },
            { id: 2, workoutID: 0, workoutName: "Crunches", unit: 0, amount: 10, weight: 0 }
        ]);
        const moveCard = useCallback((dragIndex, hoverIndex) => {
            const dragCard = cards[dragIndex];
            setCards(update(cards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragCard],
                ],
            }));
        }, [cards]);

        const renderCard = (card, index) => {
            return (<Card key={card.id} index={index} id={card.id} workoutName={card.workoutName} unit={card.unit} amount={card.amount}  weight={card.weight} moveCard={moveCard}/>);
        };

        return (<>
				<div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
			</>);
    }
};

export default Container;