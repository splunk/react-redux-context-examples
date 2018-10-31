import React, { Component } from 'react'
import Counter from './counter'
import { Provider as CounterProvider } from './context.js'

import './app.css'

class App extends Component {
  state = {
    count: 0,
    increment: () => { this.setState({count: this.state.count + 1}) },
    decrement: () => { this.setState({count: this.state.count - 1}) }
  }

  render() {
    return (
      <CounterProvider value={this.state}>
        <div className="app">
          Redux Example
          <Counter />
        </div>
      </CounterProvider>
    )
  }
}

export default App
