import React, {Component}  from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import UserProfile from './Components/UserProfile';
import Login from './Components/Login';
import axios from 'axios';
import './App.css';
import Debits from './Components/Debits';

class App extends Component{
  constructor() {
    super();
    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'andy_zheng',
        memberSince: '08/23/99',
      },
      debitsTotal: 0,
      debits: [],
      credits: {}
    }
    this.getDebits = this.getDebits.bind(this);
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  async getDebits(){
    await axios.get('https://moj-api.herokuapp.com/debits')
    .then(response =>{
      let result = response.data;
      this.setState({
          debits : result
      })
    })
    .catch(err => console.log(err));
    this.calucalteDebit();
  }

  calucalteDebit = () => {
    let total = 0;
    for (let i of this.state.debits){
      total += i.amount;
    }
    this.setState({
      debitsTotal : total
    })
  }

  componentDidMount = () =>{
    this.getDebits();
  }
  render(){

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} debits={this.state.debitsTotal}/>);
    const UserProfileComponent = () => (<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>);
    const LogInComponent = () => (<Login user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>);
    const DebitComponent = () => (<Debits debits={this.state.debits} debitsTotal = {this.state.debitsTotal}></Debits>);
    return (
      <Router>
          <Switch>
            <Route exact path = "/login" render={LogInComponent}/>
            <Route exact path = "/" render={HomeComponent}/>
            <Route exact path = "/userProfile" render={UserProfileComponent}/>
            <Route exact path = '/debits' render = {DebitComponent}/>
          </Switch>
      </Router>
    );
  }
}

export default App;
