import React, { PropTypes } from 'react';
import '../../styles/cards/cardsNav.css';
import { connect } from "react-redux";
import { getClasses } from "../../actions.js";
import { selectClassCards } from "../../actions.js";

class CardsNav extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.props.fetchHClass();
  }
  selectClass = (hclassKey) => {
    console.log(hclassKey);
    this.props.fetchClassCards(hclassKey);
  }
  render () {
    return(
      <div className="l-cards-navegation">
        <ul className="l-cards-navegation-list">
          {this.props.hclasses.map((hclass, index) => {
            return(
                <li onClick={() => this.selectClass(hclass.key)} className="l-cards-navegation-list-item" key={index} data-class={hclass.key}>
                  <span><img src={hclass.icon.src} /></span>
                  <span className="l-cards-navegation-list-item-name">{hclass.name} </span>
                </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    hclasses: state.hclasses,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchHClass: () => {
      return dispatch(getClasses());
    },
    fetchClassCards: (key) => {
      return dispatch(selectClassCards(key));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsNav);
