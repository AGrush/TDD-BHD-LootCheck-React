import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance'

export class Wallet extends Component {
  state = { 
    balance: undefined
  }

  updateBalance = event => {
    this.setState ({ balance: parseInt(event.target.value) })
  }

  deposit = () => this.props.deposit(this.state.balance)
  withdraw = () => this.props.withdraw(this.state.balance)

  render() {
    return (
      <div>
        <h3 className='balance'>Wallet Balance: {this.props.balance}</h3>
        <br />
        <input className='input-wallet' onChange={this.updateBalance}/>
        <button className='btn-deposit' onClick={this.deposit}>Deposit</button>
        <button className='btn-withdraw' onClick={this.withdraw}>Deposit</button>
      </div>
    )
  }
}

//connect takes two params (function (map state to props) which describes what part of the redux store we want to use on this component, the second one describes what action creators we want to use on the component to send data to the redux store)
export default connect(state => { return { balance: state } }, { deposit, withdraw })(Wallet)