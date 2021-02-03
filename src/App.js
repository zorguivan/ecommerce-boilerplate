import React from 'react';
import {Home} from './components/Home';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './styling/style.css'
import './styling/display.css'
function App() {
  return (
    <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;
