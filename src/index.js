import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer/rootReducer';
import Routes from './routes/routes';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));