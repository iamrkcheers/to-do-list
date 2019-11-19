import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import throttle from 'lodash.throttle';
import { bucketsReducer } from './reducers/bucketsReducer';
import { saveStateToLocalStorage } from './localStorage';
import App from './components/App';

let store = createStore(bucketsReducer, applyMiddleware(logger));

store.subscribe(throttle(() => {
  saveStateToLocalStorage(store.getState());
}, 1000));

render(
	<Provider store={store}>
			<App />
	</Provider>,
	document.querySelector("#root")
);
