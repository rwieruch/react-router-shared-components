import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { PageContext } from './Context';
import { Portfolio } from './Portfolio';
import { Skill } from './Skill';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/skill">Skill</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route path="/skill">
            <PageContext.Provider value="skill">
              <Skill />
            </PageContext.Provider>
          </Route>
          <Route path="/portfolio">
            <PageContext.Provider value="portfolio">
              <Portfolio />
            </PageContext.Provider>
          </Route>
          <Route path="/">
            <h2>Home</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
