import React from 'react';
import ReactDOM from 'react-dom';

// third party labrary
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store';

// components
import App from './App';

// helper function

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);
