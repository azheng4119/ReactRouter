import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
        <div style={{fontSize: "30px"}}>
          Balance: {(this.props.credits-this.props.debits)}<br></br>
          Debits: {this.props.debits} <br></br>
          Credits: {this.props.credits} <br/>
        </div>
    );
  }
}

export default AccountBalance;