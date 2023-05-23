import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ensinioContext from './ensinioContext';

function Provider({ children }) {
  const [state, setState] = useState();

  const contextValue = {
  };

  return (
    <ensinioContext.Provider value={ contextValue }>
      {children}
    </ensinioContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
