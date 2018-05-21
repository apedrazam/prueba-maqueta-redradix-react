import React from 'react';
import AppMenu from './menu.js'

const AppHeader = (props) => {
	return(
		<header className="header">
			<h1><span className="thin-title">adrian</span><span className="heavy-title">pedraza</span></h1>
      <AppMenu toggleMenu={props.toggleMenu}/>
    </header>

	)
}

export default AppHeader;
