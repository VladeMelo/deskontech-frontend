import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Secondary from './pages/Secondary';
import Product from './pages/Product';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/sec' component={Secondary} />
        <Route path='/prod' component={Product} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
