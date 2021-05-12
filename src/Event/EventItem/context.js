import React from 'react';

import { PageContext } from 'Context';

const DICTIONARY = {
  portfolio: {
    operationName: 'multiply eventId with itself',
    operation: (id) => Number(id) * Number(id),
  },
  skill: {
    operationName: 'add eventId to itself',
    operation: (id) => Number(id) + Number(id),
  },
};

const usePage = () => {
  const page = React.useContext(PageContext);

  return DICTIONARY[page];
};

export { usePage };
