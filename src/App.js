import React, {Component}  from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import UserProfile from './Components/UserProfile';
import Login from './Components/Login'
import Credit from './Components/Credit'
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios'
import './App.css';
import Debits from './Components/Debits';

class App extends Component{
  constructor() {
    super();
    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: 'Not Logged In',
        memberSince: '08/23/99',
      },
      debitsTotal: 0,
      debits: [],
      creditsTotal: 0,
      credits: []
    }
    this.getDebits = this.getDebits.bind(this);
    this.getCredits = this.getCredits.bind(this)
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

  addNewDebit = (name,amounts) => {
    if (Number(amounts) <= 0) {
      alert("You must enter a valid amount!")
    }else{
      let date_ = new Date();
      let joined = this.state.debits.concat([{
        description : name,
        amount: Number(amounts),
        date: date_.toJSON().toString()
      }]);
      let newTotal = this.state.debitsTotal + Number(amounts);
      this.setState({
        debits: joined,
        debitsTotal: newTotal
      });
   }
   this.calculateTotal();
  }

  getCredits = () => {
    let component = this
    fetch("https://moj-api.herokuapp.com/credits")
    .then(res => res.json())
    .then(data => this.setState({
        credits: data
    }))
    .then(() => {
        console.log(this.state.credits)
    })
    .then(() => this.calculateCredit())
    .then(() => {
      component.calculateTotal()
    })
    .catch(err => console.log(err))
  }

  calculateCredit = () => {
    let amount = 0;
    for (let i = 0; i < this.state.credits.length; i++) {
      amount += this.state.credits[i].amount;
    }
    this.setState({
      creditsTotal: amount
    })
  }

  addNewCredit = (id_, amount_, description_) => {
    if (Number(amount_) <= 0) {
      alert("You must enter a valid amount!")
    }
    else {
      let date_ = new Date();
      let new_entry = {
        amount: Number(amount_),
        date: date_.toJSON().toString(),
        description: description_,
        id: id_
      }

      let new_credits = this.state.credits
      new_credits[new_credits.length] = new_entry

      this.setState({
        credits: new_credits
      })

      let newTotal = this.state.creditsTotal + Number(amount_)
      this.setState({
        creditsTotal: newTotal
      });
    }
    this.calculateTotal();
  }

  componentDidMount = () =>{
    this.getDebits();
    this.getCredits();
  }

  calculateTotal = () => {
    this.setState({
      accountBalance: Number(this.state.creditsTotal - this.state.debitsTotal)
    })
  }
  render(){

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} debits={this.state.debitsTotal} credits ={this.state.creditsTotal}/>);
    const UserProfileComponent = () => (<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>);
    const LogInComponent = () => (<Login user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>);
    const DebitComponent = () => (<Debits balance = {this.state.accountBalance} addDebits = {this.addNewDebit} debits={this.state.debits} debitsTotal = {this.state.debitsTotal}></Debits>);
    let CreditInfo = () => (<Credit accountBalance={this.state.accountBalance} addNewCredit={this.addNewCredit} creditsTotal={this.state.creditsTotal} credits={this.state.credits} />)
                            
    return (<div id = "App">
            <Router basename = "ReactRouter">
                <Switch>
                  <Route exact path = "/" render={LogInComponent}/>
                  <Route exact path = "/home" render={HomeComponent}/>
                  <Route exact path = "/userProfile" render={UserProfileComponent}/>
                  <Route exact path = '/debits' render = {DebitComponent}/>
                  <Route exact path="/credits" render={CreditInfo} />
                </Switch>
            </Router>
      </div>
    );
  }
}

export default App;
