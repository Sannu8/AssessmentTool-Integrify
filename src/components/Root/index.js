import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';
//import {getUsers} from '../../util/middleware';

import allReducers from '../../redux/reducers';
import App from '../App';
import './index.css';

//const middleware = applyMiddleware(getUsers)

const store = createStore(
	allReducers, JSON.parse(localStorage.getItem('state')) || undefined,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
store.subscribe(throttle(()=>{
    localStorage.setItem('state', JSON.stringify(store.getState()))
}, 5000))

const Root = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

export default Root;
