import React, { Component } from 'react'
import AppHeader from './components/header/header.js'
import CardsBoard from './components/cardboard/cards_board.js'
import AppFooter from './components/footer/footer.js'
import CardData from './components/cardboard/cards_data.json';
import './styles/styles.css'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      cards: CardData
    };
  }
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <section className="app-wrapper">
          <CardsBoard cards={this.state.cards}/>
        </section>
        <AppFooter name="Adrián Pedraza" link="https://github.com/hyphenfrog/prueba-maqueta-redradix-react"/>
      </div>
    )
  }
}

export default App
