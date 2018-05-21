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
      cards: CardData,
      openMenu: true,
      flippedCard: true
    };
    this.toggleMenu = this.toggleMenu.bind(this)
    this.flipCard = this.flipCard.bind(this)
  }
  toggleMenu() {
    this.setState({
      openMenu: !this.state.openMenu
    })
  }
  flipCard() {
    this.setState({
      flippedCard: !this.state.flippedCard
    })
  }
  render() {
    return (
      <div className={this.state.openMenu ? "App" : "App openMenu"}>
        <AppHeader toggleMenu={this.toggleMenu}/>
        <section className="app-wrapper">
          <CardsBoard
            cards={this.state.cards}
            flipCard={this.flipCard}
            flippedCard={this.state.flippedCard}
          />
        </section>
        <AppFooter name="Adrián Pedraza" link="https://github.com/hyphenfrog/prueba-maqueta-redradix-react"/>
      </div>
    )
  }
}

export default App
