import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT
} from './actions'

const counterInitialState = {
  count: 0
}

function counterReducer (state = counterInitialState, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return Object.assign({}, state, { count: ++state.count })
    case COUNTER_DECREMENT:
      return Object.assign({}, state, { count: --state.count })
    default:
      return state
  }
}

export default counterReducer
