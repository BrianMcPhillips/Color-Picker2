import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ bgColor, fgColor, text, handleChange }) => (
  <>
    <label htmlFor="bgColor">Background Color</label>
    <input
      id="bgColor"
      type="color"
      name="bgColor"
      value={bgColor}
      onChange={handleChange}
    />
    <label htmlFor="fgColor">Foreground Color</label>
    <input
      id="fgColor"
      type="color"
      name="fgColor"
      value={fgColor}
      onChange={handleChange}
    />
    <label htmlFor="text">Text</label>
    <input
      id="text"
      type="text"
      name="text"
      value={text}
      onChange={handleChange}
    />
  </>

);

Controls.propTypes = {
  bgColor: PropTypes.string.isRequired,
  fgColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Controls;
