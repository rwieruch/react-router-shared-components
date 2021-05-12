import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import { EventItem } from '../EventItem';
import { usePage } from './context';

const EventList = () => {
  const match = useRouteMatch();

  const { whereAmI } = usePage();

  return (
    <div>
      <h2>Events</h2>

      <ul>
        <li>
          <Link to={`${match.url}/1`}>Event 1</Link>
        </li>
        <li>
          <Link to={`${match.url}/2`}>Event 2</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:eventId`}>
          <EventItem />
        </Route>
        <Route path={match.path}>
          <p>
            Please select an event in{' '}
            <strong>{whereAmI} (via PageContext)</strong>.
          </p>
        </Route>
      </Switch>
    </div>
  );
};

export { EventList };
