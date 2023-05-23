import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ButtonLink({ name, classType, icon, testId }) {
  return (
    <a
      href='https://ensinio.com/'
      className={ `${classType} link white-text small-text` }
      data-testid={ testId ? testId : "" }
    >
      {
        icon ? icon() : null
      }
      {
        name
      }
    </a>
  );
}

export default ButtonLink;

ButtonLink.propTypes = {
  name: PropTypes.string.isRequired,
  classType: PropTypes.string.isRequired,
  icon: PropTypes.func,  
};
