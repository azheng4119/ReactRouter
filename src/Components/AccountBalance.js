import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
        <div style={{fontSize: "30px"}}>
          Balance: {(this.props.credits-this.props.debits).toFixed(2)}<br></br>
          Debits: {this.props.debits.toFixed(2)} <br></br>
          Credits: {this.props.credits.toFixed(2)} <br/>
        </div>
    );
  }
}

export default AccountBalance;