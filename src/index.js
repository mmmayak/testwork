import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer/rootReducer';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>asdasd</div>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


