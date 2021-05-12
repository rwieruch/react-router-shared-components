import React from 'react';

import { PageContext } from 'Context';

const DICTIONARY = {
  portfolio: {
    whereAmI: 'Portfolio yoo',
  },
  skill: {
    whereAmI: 'Skill yay',
  },
};

const usePage = () => {
  const page = React.useContext(PageContext);

  return DICTIONARY[page];
};

export { usePage };
