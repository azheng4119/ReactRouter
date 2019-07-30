import React, { Component } from 'react'
import Card from "./Card";
import CreditInput from './CreditInput'
import {Link} from 'react-router-dom'
import { regExpLiteral } from '@babel/types';

class Credit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            card_div_style: {
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap"
            }
        }
    }

    render() {
        return(
            <div>
                <h1>Credit</h1>
                <h2>Account Balance: {this.props.accountBalance}</h2>
                <h2>Total Credits: {this.props.creditsTotal}</h2>
                <div style={this.state.card_div_style}>
                    {
                        this.props.credits.map(function(entry) {
                            console.log(entry.name)
                            return <Card name={entry.description} amount={entry.amount} date={entry.date}></Card>
                        })
                    }
                </div>
                <CreditInput addNewCredit={this.props.addNewCredit} id={this.props.credits.length} />
                <br></br>
                <Link to="/home">Home</Link>
            </div>
        )
    }
}


export default Credit