import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { RepositoriesState } from './modules/repositories/types'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

export interface ApplicationState {
  repositories: RepositoriesState
}

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)

export default store