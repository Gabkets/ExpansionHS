import React, { PropTypes } from 'react';
import CardsNav from './cards/CardsNav';
import CardsList from './cards/CardsList';

class Cards extends React.Component {
  render () {
    return(
      <div className="c-cards">
        <CardsNav />
        <CardsList />
      </div>
    )
  }
}

export default Cards;
