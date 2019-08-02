import { createStore } from 'redux'

import shoppingReducer from './reducers/cartreducer'

const store = createStore(shopping.Reducer)
const store = createStore(shopping.Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
