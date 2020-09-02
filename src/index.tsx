import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

if (module && module.hot) {
  module.hot.accept()
}
const isDev = false

const a = isDev
  ? {
      a: 1,
      b: 2,
    }
  : false

ReactDOM.render(<App name='vortesnail' age={25} />, document.querySelector('#root'))
