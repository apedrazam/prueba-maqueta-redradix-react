import React from 'react';

const AppFooter = (props) => {
  return(
    <footer className="footer">
      <div className="footer-content">
        <p>Prueba realizada por <a href={props.link} target="blank_">{props.name}</a>.</p>
      </div>
    </footer>
  )
}

export default AppFooter;
