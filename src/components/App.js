import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';
import Quotes from './Quotes';

import '../assets/main.css';

const App = () => (
  <Switch>
    <Route path="/calculator" component={Calculator} />
    <Route path="/quotes" component={Quotes} />
    <Route path="/" component={Home} />
  </Switch>
);

export default App;
