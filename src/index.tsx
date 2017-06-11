import * as React from 'react'
import * as ReactDOM from 'react-dom'

import "skeleton-css/css/skeleton.css"
import "./css/index.scss";

// redux
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from "redux-thunk"
import reducers from './reducers'

// routing
import createHistory from 'history/createHashHistory'
import { Route, Redirect } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

// logger
import logger from 'redux-logger'

//Components
import MainContainer from "./components/containers/MainContainer"
import ApprovalPage from "./components/pages/ApprovalPage"
import CatalogPage from "./components/pages/CatalogPage"
import SubmitDesignPage from "./components/pages/SubmitDesignPage"
import UserSettingsPage from "./components/pages/UserSettingsPage"
import DesignViewPage from "./components/pages/DesignViewPage"

//Models
import { AppState } from "./models/state"

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const routermiddleware = routerMiddleware(history)

// init store
// const defaultState: AppState = {
//   approval: {designs:[] },
//   catalog: {dummy: ""}
// }

const store = createStore<AppState>(
  combineReducers<AppState>({
    ...reducers,
    router: routerReducer
  }),
  //defaultState,
  applyMiddleware(thunk, routermiddleware, logger)
)

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" component={MainContainer}/>
        <Route path="/catalog" component={CatalogPage} />
        <Route path="/design/:designId" component={DesignViewPage} />
        <Route path="/approval" component={ApprovalPage} />
        <Route path="/submit/:designId?" component={SubmitDesignPage} />
        <Route path="/settings" component={UserSettingsPage} />
        <Redirect from="/" to="/catalog" />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)