import React from 'react';
import ReactDOM from 'react-dom';
import App from './Main';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { Provider }                     from 'react-redux';
// import * as reducers                    from 'reducers';
import quizReducer from '../reducers/QuizReducer';



let store = createStore(quizReducer);

// Render the main component into the dom
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
