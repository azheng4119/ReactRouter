import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component{
    render(){
        return <div>
            <Link to="/userProfile">User Profile</Link><br></br>
            <Link to="/Login">Login</Link>
            <h1>this is the home page.</h1>
            <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    }
}

export default Home;