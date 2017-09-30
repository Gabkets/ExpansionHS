import React, { PropTypes } from 'react'
import Card from './Card'
import '../../styles/cards/cardsList.css';
import { connect } from "react-redux";
import { getCards } from "../../actions.js";

class CardsList extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.props.fetchCards();
  }
  render () {
    return(
      <div className="l-cards-list">
        {this.props.cards.map((card, index) => {
          return(
              <Card key={index} card={card}/>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCards: () => {
      return dispatch(getCards());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
