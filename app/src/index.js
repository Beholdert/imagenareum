import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={createStore(rootReducer, applyMiddleware(reduxThunk))}>
    <App />
  </Provider>,
  document.getElementById('root')
);
