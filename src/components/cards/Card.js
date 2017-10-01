import React, { PropTypes } from 'react'

class Card extends React.Component {
  render () {
    return(
      <div className="l-cards">
        <img src={this.props.card.art}/>
      </div>
    )
  }
}

export default Card;
