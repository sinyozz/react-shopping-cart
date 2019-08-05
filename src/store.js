import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import rootReducer from './reducers';

const initialState = [];

 export default createStore(rootReducer,initialState,applyMiddleware(thunk));






 

//import shoppingReducer from './reducers/cartreducer'




// //const store = createStore(shopping.Reducer)
// const store = createStore(shopping.Reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// export default store
