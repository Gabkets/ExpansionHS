import React, { PropTypes } from 'react'
import { Switch, Link, NavLink } from 'react-router-dom';
import "../styles/buttons.css";
import "../styles/mainNav.css";

class MainNav extends React.Component {
  render () {
    return(
      <div className="c-main-nav">
        <nav>
          <ul className="l-main-nav">
              <NavLink className="btn btn-2 btn-2a" to="/cards">Cards</NavLink>
              <NavLink className="btn btn-2 btn-2a" to="/heroes">Heroes</NavLink>
              <NavLink className="btn btn-2 btn-2a" to="/media">Media</NavLink>
          </ul>
        </nav>
      </div>
    )
  }
}

export default MainNav;
