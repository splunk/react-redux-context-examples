import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  incrementCounter,
  decrementCounter
} from './actions'

const mapStateToProps = state => ({
  counter: state.count
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementCounter()),
  decrement: () => dispatch(decrementCounter())
})

class Counter extends Component {
  render () {
    return (
      <div className="counter">
        Counter: <span>{this.props.counter}</span>
        <div>
          <button onClick={ this.props.decrement }>-</button>
          <button onClick={ this.props.increment }>+</button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
