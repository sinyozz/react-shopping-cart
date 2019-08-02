import React from 'react';
import ReactDOM from 'react-dom';
// import App from '../App';
import Home from './components/App';
// import cartReducer from './components/reducers/cartReducer';
import cartreducer from './reducers/cartreducer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cartreducer);

ReactDOM.render(<Provider store={store}><Home/></Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// 'serviceWorker'.unregister();
