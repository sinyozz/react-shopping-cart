import React from 'react';
import ReactDOM from 'react-dom';
// import App from '../app';
import Home from './components/app';
// import cartReducer from './components/reducers/cartReducer';
import cartReducer from './reducers/cart_reducer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cartReducer);

ReactDOM.render(<Provider store={store}><Home /></Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
 //'serviceWorker'.unregister();