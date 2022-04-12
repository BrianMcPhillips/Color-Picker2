import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ bgColor, fgColor, text }) => (
  <div data-testid="display" style={{ 
    backgroundColor: bgColor,
    color: fgColor,
    width: '500px',
    height: '500px'
  }}>
    {text}
  </div>
);

Display.propTypes = {
  bgColor: PropTypes.string.isRequired,
  fgColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Display;
