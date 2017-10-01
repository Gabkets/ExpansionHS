import React, { PropTypes } from 'react';
import '../../styles/cards/cardsNav.css';
import { connect } from "react-redux";
import { getClasses } from "../../actions.js";
import { selectClassCards } from "../../actions.js";

class CardsNav extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      menuOpen : false
    }
  }
  componentDidMount() {
    this.props.fetchHClass();
  }
  selectClass = (hclassKey) => {
    this.props.fetchClassCards(hclassKey);
  }
  openMenu = (menuOpen) => {
    var menuNewState = menuOpen;

    if(menuNewState === this.state.menuOpen){
      this.setState({
          menuOpen : !this.state.menuOpen
      });
    }
  }
  render () {
    return(
      <div className="l-cards-navegation">
        <button
          onClick={() => this.openMenu(this.state.menuOpen)}
          className={this.state.menuOpen ?
            'l-cards-navegation-menubutton active' :
            'l-cards-navegation-menubutton'}
        >
          Filtrar por clase
        </button>
        <ul
          className={this.state.menuOpen ?
            'l-cards-navegation-list active' :
            'l-cards-navegation-list'}
        >{this.props.hclasses.map((hclass, index) => {
            return(
                <li
                  onClick={() => this.selectClass(hclass.key)}
                  className="l-cards-navegation-list-item"
                  key={index}
                  data-class={hclass.key}
                >
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
