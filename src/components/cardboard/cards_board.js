import React from 'react';
import CardItem from './card_item.js';

const CardsBoard = (props) => {
  const cardsCollection = props.cards.map((card) => {
    return (
      <CardItem itemData={card} />
    )
  });
	return(
		<main className="cardboard-container">
			{cardsCollection}
		</main>
	)
}

export default CardsBoard;
