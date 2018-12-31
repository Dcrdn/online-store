import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import productReducer from './reducers/productReducer';
import thunk from "redux-thunk";

const store = createStore(productReducer,
    compose(applyMiddleware(thunk))
  );

ReactDOM.render(  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));