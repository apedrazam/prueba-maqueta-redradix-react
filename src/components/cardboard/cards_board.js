import React from 'react';
import CardItem from './card_item.js';

const CardsBoard = (props) => {
  const cardsCollection = props.cards.map((card) => {
    return (
      <CardItem
        frontText={card.frontText}
        backText={card.backText}
        image={card.image}
        flipCard={props.flipCard}
        flippedCard={props.flippedCard}
      />
    )
  });
	return(
		<main className="cardboard-container">
			{cardsCollection}
		</main>
	)
}

export default CardsBoard;
