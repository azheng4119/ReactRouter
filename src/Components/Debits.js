import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DebitInput from './DebitInput';

class Debits extends Component{
    render(){
        let debits = [];
        for (let i of this.props.debits){
            debits.push(<div>{i.description} : {i.amount}</div>);
        }
        return <div>
                <Link to="">Home</Link><br></br>
                <span><strong>Total Debits : {this.props.debitsTotal}</strong></span>
                <span>{debits}</span>
                <DebitInput addDebits = {this.props.addDebits}></DebitInput>
        </div>
    }
}

export default Debits;