import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Counter from './counter'

import './app.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          Redux Example
          <Counter />
        </div>
      </Provider>
    )
  }
}

export default App
