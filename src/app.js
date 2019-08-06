import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'

import configureStore, { history } from './store'
import Builder from './builder/builder'
import Viewer from './viewer/viewer'

function App() {
    return (
        <Provider store={configureStore()}>
            <Router history={history}>
                <div>
                    <Route exact path="/" component={Builder} />
                    <Route path="/viewer" component={Viewer} />
                </div>
            </Router>
        </Provider>
    )
}

export default App
