import React from 'react';
import './Button.scss';

function Button({ color, text, image, width, height }) {
  const propsToStyle = {
    width: `${width || '100%'}`, 
    height: `${height || '1em'}` 
  };
  const colorClass = (color === 'white') ? 'ButtonWhite' : 'ButtonBlack';
  return (
    <button className={colorClass} style={propsToStyle} id='button'>
      <label htmlFor='button'>
        {image && <img src={image} alt='button Icon'></img>}
        {text}
      </label>
    </button>
  );
}

export default Button;
