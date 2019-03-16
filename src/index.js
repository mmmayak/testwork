import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer/rootReducer';
import Header from './components/Header/Header';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));