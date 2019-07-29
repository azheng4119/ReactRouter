import React from 'react'

class DebitInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "" ,
            amount: 0
        }
    }

    handleChange = (event) =>{
        this.setState({
            name: event.target.value
        })
    }

    handleChange2 = (event) => {
        this.setState({
            amount: event.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addDebits(this.state.name, this.state.amount);
    }

    render(){
        return <div>
            <br></br>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Debit Name</label>
            <input type="text" onChange={this.handleChange} />
          </div>
          <div>
            <label >Amount</label>
            <input type = "number" onChange = {this.handleChange2}/>
          </div>
          <button>Add Debit</button>
        </form>
      </div>
    }
}


export default DebitInput;