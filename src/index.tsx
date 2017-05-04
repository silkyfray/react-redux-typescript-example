import * as React from 'react'
import * as ReactDOM from 'react-dom'

import "./css/index.scss";

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import reducers from './reducers' // Or wherever you keep your reducers

//Components
import Catalog from "./components/Catalog"
import UserSettings from "./components/UserSettings"

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

store.dispatch(push("/settings"))

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Catalog}/>
        <Route path="/test" component={Catalog}/>
        <Route path="/settings" component={UserSettings}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)