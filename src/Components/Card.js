import React from 'react';
import "./Card.css"

class Card extends React.Component {
    render(){
        return <ul class = "card">
            <li>{this.props.name}</li>
            <li>{this.props.amount}</li>
            <li>{this.props.date}</li>
        </ul>
    }
}

export default Card;