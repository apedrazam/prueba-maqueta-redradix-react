import React from 'react';

const CardItem = (props) => {
  return(
    <article className="card">
      <div className="card-flipper">
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
