import React from 'react';
import AppMenu from './menu.js'

const AppHeader = (props) => {
	return(
		<header className="header">
			<div className="header-content">
				<h1><span className="thin-title">adrian</span><span className="heavy-title">pedraza</span></h1>
	      <AppMenu toggleMenu={props.toggleMenu}/>
			</div>
    </header>

	)
}

export default AppHeader;
