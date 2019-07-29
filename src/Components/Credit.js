import React, { Component } from 'react'
//import {Link} from 'react-router-dom'
//import { regExpLiteral } from '@babel/types';

class Credit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            credit_transactions: [],
            new_transaction_amt: 0,
            new_transaction_item: '',
            main_div: {
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-around"
            },
            entry_div: {
                width: "22%",
                borderStyle: "solid",
                marginTop: "30px"
            }
        }

        this.addNewEntry = this.addNewEntry.bind(this)
    }

    componentDidMount() {
        fetch("https://moj-api.herokuapp.com/credits")
        .then(res => res.json())
        .then(data => this.setState({
            credit_transactions: data
        }))
        .then(() => {
            console.log(this.state.credit_transactions)
        })
    }

    onChangeAmount = event => {
        let value = event.target.value
        this.setState({
            new_transaction_amt: Number(value)
        })
    }

    onChangeItem = event => {
        let value = event.target.value
        this.setState({
            new_transaction_item: value
        })
    }

    addNewEntry(event) {
        event.preventDefault()
        let component = this
        let date = new Date()
        let date_string = date.toJSON().toString()
        let new_entry = {
            amount: component.state.new_transaction_amt,
            date: date_string,
            description: component.state.new_transaction_item,
            id: component.state.credit_transactions.length
        }
        this.setState(prevState => {
            return(
                prevState.credit_transactions[prevState.credit_transactions.length] = new_entry
            )
        })
    }

    render() {
        let component = this
        return (
            <div>
                <div style={this.state.main_div}>
                    {this.state.credit_transactions.map(function(item) {
                        return (
                            <div style={component.state.entry_div}>
                                <h3>${item.amount.toFixed(2)}</h3>
                                <h3>{item.description}</h3>
                                <h3>{item.date}</h3>
                            </div>
                        )
                    })}
                </div>

                <div>
                    <h2>Enter new purchase</h2>
                    <form>
                        <input type="number" name="cred_charge" placeholder="Enter an amount here" onChange={this.onChangeAmount} />
                        <input type="text" name="cred_item" placeholder="Enter what you purchased" onChange={this.onChangeItem} />
                        <button onClick={this.addNewEntry}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default Credit