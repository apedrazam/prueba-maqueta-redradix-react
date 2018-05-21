import React from 'react';
import AppMenu from './menu.js'

class AppHeader extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
		return(
			<header className="header">
				<h1><span className="thin-title">adrian</span><span className="heavy-title">pedraza</span></h1>
        <AppMenu />
      </header>

		)
	}
}

export default AppHeader;
