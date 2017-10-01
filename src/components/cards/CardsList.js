import React, { PropTypes } from 'react'
import Card from './Card'
import '../../styles/cards/cardsList.css';
import { connect } from "react-redux";
import { getCards } from "../../actions.js";
import Slider from 'react-slick';

class CardsList extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.props.fetchCards();
  }
  render () {

    var settings = {
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    };

    return(
      <div className="c-cardsList">
        <Slider {...settings}>
          {this.props.cards.map((card, index) => {
            return(
              <div>
                  <Card key={index} card={card}/>
              </div>
            )
          })}
        </Slider>
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
