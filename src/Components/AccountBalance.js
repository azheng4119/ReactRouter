import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
        <div>
          Balance: {this.props.accountBalance} <br></br>
          Debits: {this.props.debits} <br></br>
        </div>
    );
  }
}

export default AccountBalance;