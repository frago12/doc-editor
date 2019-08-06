import { createStore, compose } from 'redux'
// import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'
// import rootSaga from './sagas'

const isProd = process.env.NODE_ENV === 'production'

const configureStore = (initialState = {}) => {
    // const sagaMiddleware = createSagaMiddleware()
    let enhacer = null

    if (isProd) {
        enhacer = compose(
            // applyMiddleware(sagaMiddleware),
        )
    } else {
        enhacer = compose(
            // applyMiddleware(sagaMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f,
        )
    }

    const store = createStore(rootReducer, initialState, enhacer)

    // sagaMiddleware.run(rootSaga, store.dispatch)

    // allow hot reloading of reducers
    if (module.hot && !isProd) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}

export const history = createHistory()

export default configureStore

