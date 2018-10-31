import { createContext } from 'react'

export const { Provider, Consumer } = createContext({
  count: 0,
  increment: () => {},
  decrement: () => {}
})
