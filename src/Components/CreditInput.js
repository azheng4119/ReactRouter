import React, { Component } from 'react'

class CreditInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            amount: 0,
            description: '',
            div_style: {
                width: "30%",
                display: "flex",
                flexDirection: "column",
                margin: "auto"
            },
            div_children: {
                color: "black",
                fontSize: "20px",
                height: "30px"
            }
        }
    }

    handlChangeAmount = event => {
        this.setState({
            amount: event.target.value
        })
    }

    handlChangeDescription = event => {
        this.setState({
            description: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form style={this.state.div_style} onSubmit={event => {
                    event.preventDefault();
                    this.props.addNewCredit(this.props.id, this.state.amount, this.state.description)
                }}>
                    <input style={this.state.div_children} type="number" name="amount" placeholder="Enter amount" onChange={this.handlChangeAmount} />
                    <input style={this.state.div_children} type="text" name="description" placeholder="Enter description" onChange={this.handlChangeDescription} />
                    <button style={this.state.div_children}>Submit</button>
                </form>
            </div>
        )
    }
}

export default CreditInput