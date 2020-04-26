import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button({ action, color, text, image, width, height }) {
  const propsToStyle = {
    width: `${width || '100%'}`, 
    height: `${height || '1em'}` 
  };
  const colorClass = (color === 'white') ? 'ButtonWhite' : 'ButtonBlack';
  return (
    <button 
      className={colorClass} 
      onClick={action}
      style={propsToStyle} 
      id='button' 
    >
      <label htmlFor='button'>
        {image && <img src={image} alt='button Icon'></img>}
        {text}
      </label>
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.oneOf(['white', 'black']),
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  action: PropTypes.func.isRequired
};

export default Button;
