import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import { EventList } from '../Event';
import { Summary } from '../Summary';

const Portfolio = () => {
  const match = useRouteMatch();

  return (
    <div>
      <h1>Portfolio</h1>

      <ul>
        <li>
          <Link to={`${match.url}`}>Summary</Link>
        </li>
        <li>
          <Link to={`${match.url}/events`}>Events</Link>
        </li>
      </ul>

      <hr />

      <Switch>
        <Route path={`${match.path}/events`}>
          <EventList />
        </Route>
        <Route path={match.path}>
          <Summary />
        </Route>
      </Switch>
    </div>
  );
};

export { Portfolio };
