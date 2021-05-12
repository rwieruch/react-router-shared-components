import React from 'react';
import { useParams } from 'react-router-dom';

import { usePage } from './context';

const EventItem = () => {
  const { eventId } = useParams();

  const { operationName, operation } = usePage();

  return (
    <table>
      <tr>
        <th>Value</th>
        <th>Source</th>
      </tr>
      <tr>
        <td>{eventId}</td>
        <td>eventId URL via React Router</td>
      </tr>
      <tr>
        <td>{operationName}</td>
        <td>constant variable via PageContext</td>
      </tr>
      <tr>
        <td>{operation(eventId)}</td>
        <td>computed variable via PageContext</td>
      </tr>
    </table>
  );
};

export { EventItem };
