import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';

import App from './Main';
import quizReducer from '../reducers/QuizReducer';


const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(quizReducer);
// let store = createStore(quizReducer);

// Render the main component into the dom
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
