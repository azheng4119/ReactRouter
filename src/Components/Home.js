import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component{
    render(){
        return <div>
            <Link to="/userProfile">User Profile</Link><br></br>
            <Link to="/login">Login</Link><br></br>
            <Link to="/debits">Debits</Link>
            <h1>Home page.</h1>
            <h2>Debits: {this.props.debits}</h2>
            <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    }
}

export default Home;