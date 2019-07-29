import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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
        </div>
    }
}

export default Debits;