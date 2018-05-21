import React from 'react';

const CardItem = (props) => {
  return(
    <article className="card">
      <div className={props.flippedCard ? "card-flipper" : "card-flipper flipped"} onClick={props.flipCard}>
        <section className="front">
          <p>{props.frontText}</p>
        </section>
        <section className="back">
          <p>{props.backText}</p>
        </section>
      </div>
    </article>
  )
}

export default CardItem;
