import React from 'react';

const CardItem = (props) => {
  return(
    <article className="card">
      <div className={props.flippedCard ? "card-flipper" : "card-flipper flipped"} onClick={props.flipCard}>
        <section className="front">
          <h3>{props.frontText}</h3>
        </section>
        <section className="back">
          <div className="image-container">
            <img src={props.image.imageUrl} alt={props.image.imageAlt} />
          </div>
          <p>{props.backText}</p>
        </section>
      </div>
    </article>
  )
}

export default CardItem;
