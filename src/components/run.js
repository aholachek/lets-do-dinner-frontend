
import React from 'react'
import ReactDOM from 'react-dom'
import App from './Main'
import { Provider } from 'react-redux'
import store from 'store/index'

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <App/>
 </Provider>,
  document.getElementById('app')
);
