import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DebitInput from './DebitInput';
import Card from "./Card";
import "./Debits.css"
class Debits extends Component{
    render(){
        let debits = [];
        for (let i of this.props.debits){
            debits.push(
            <Card name = {i.description} amount = {i.amount} date = {i.date}></Card>
            );
        }
        return <div>
                <Link to="">Home</Link><br></br>
                <DebitInput addDebits = {this.props.addDebits}></DebitInput>
                <span><strong>Total Debits : {this.props.debitsTotal}</strong></span>
                <div id = "cards">{debits}</div>
        </div>
    }
}

export default Debits;