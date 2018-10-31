import React, { Component } from 'react'
import { Consumer as CounterConsumer } from './context'

class Counter extends Component {
  render () {
    return (
      <CounterConsumer>
        {
          ({count, increment, decrement}) => (
            <div className="counter">
              Counter: <span>{ count }</span>
              <div>
                <button onClick={ decrement }>-</button>
                <button onClick={ increment }>+</button>
              </div>
            </div>
          )
        }
      </CounterConsumer>
    )
  }
}

export default Counter
