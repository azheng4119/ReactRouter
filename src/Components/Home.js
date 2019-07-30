import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component{
    render(){
        return <div>
            <Link to="/userProfile">User Profile</Link><br></br>
            <Link to="/">Login</Link><br></br>
            <Link to="/debits">Debits</Link><br></br>
            <Link to="/credits">Credits</Link>
            <h1>Home page</h1>
            <AccountBalance accountBalance={this.props.accountBalance} debits = {this.props.debits} credits={this.props.credits}/>
        </div>
    }
}

export default Home;