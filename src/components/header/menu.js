import React from 'react';
import MenuItem from './menu_item.js';

const AppMenu = (props) => {
  return(
    <div className="menu-container">
      <div className="nav-container">
        <h1><span className="thin-title">adrian</span><span className="heavy-title">pedraza</span></h1>
        <nav>
          <MenuItem linkName="maquetación"/>
          <MenuItem linkName="diseño"/>
          <MenuItem linkName="frontend (un poco)"/>
          <MenuItem linkName="usabilidad (otro poco)"/>
        </nav>
      </div>
      <button className="menu-button" onClick={props.toggleMenu}>
        <div className="icon-bar"></div>
        <div className="icon-bar"></div>
        <div className="icon-bar"></div>
      </button>
    </div>
  )
}

export default AppMenu;
