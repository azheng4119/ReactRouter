import React from 'react';
import "./Card.css"

class Card extends React.Component {
    render(){
        return <ul class = "card">
            <li>Description: {this.props.name}</li>
            <li>Amount: ${this.props.amount.toFixed(2)}</li>
            <li>Date: {this.props.date}</li>
        </ul>
    }
}

export default Card;