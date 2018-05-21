import React from 'react';
import MenuItem from './menu_item.js';

const AppMenu = (props) => {
  return(
    <div className="menu-container">
      <button className="menu-button">
        <div className="icon-bar"></div>
        <div className="icon-bar"></div>
        <div className="icon-bar"></div>
      </button>
      <nav>
        <MenuItem linkName="maquetación"/>
        <MenuItem linkName="diseño"/>
        <MenuItem linkName="frontend (un poco)"/>
        <MenuItem linkName="usabilidad (otro)"/>
      </nav>
    </div>
  )
}

export default AppMenu;
