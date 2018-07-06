import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '../store'
import Main from './Main'
import Nav from './Nav/Nav'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Nav />
        <Main />
      </Fragment>
    </Router>
  </Provider>
)

export default App;
