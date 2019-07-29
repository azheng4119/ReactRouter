import React, {Component}  from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import UserProfile from './Components/UserProfile';
import Login from './Components/Login'
import Credit from './Components/Credit'
import './App.css';

class App extends Component{
  constructor() {
    super();
    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'andy_zheng',
        memberSince: '08/23/99',
      }
    }
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render(){

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>);
    const LogInComponent = () => (<Login user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
    let CreditInfo = () => (<Credit />)

    return (
      <Router>
          <Switch>
            <Route exact path = "/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/credit" render={CreditInfo} />
          </Switch>
      </Router>
    );
  }
}

export default App;
