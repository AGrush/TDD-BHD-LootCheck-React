import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Wallet extends Component {
  render() {
    return (
      <div>
        <h3 className='balance'>Wallet Balance: {this.props.balance}</h3>
      </div>
    )
  }
}

//connect takes two params (function (map state to props) which describes what part of the redux store we want to use on this component, the second one describes what action creators we want to use on the component to send data to the redux store)
export default connect(state => { return { balance: state } },null)(Wallet)