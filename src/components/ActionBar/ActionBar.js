import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './ActionBar.scss';

function ActionBar({ actionText, smallText, isDisplayed }) {
  return (
    <div className={`ActionBar ${!isDisplayed && 'hidden'}`}>
      <div className='buttonRow'>
        <div className='goBack'>
          <Button
            text='<'
            color='white' 
            width='40px'
            height='40px'
          />
        </div>
        {actionText &&
          <div className='action'>
            <Button
              text={isDisplayed ? actionText : ''}
              height='40px'
            />
          </div>
        }
      </div>
      {smallText && 
        <div className='smallText'>
          <small>{smallText}</small>
        </div>
      }
    </div>
  );
}

ActionBar.propTypes = {
  actionText: PropTypes.string,
  smallText: PropTypes.string,
  isDisplayed: PropTypes.bool,
};

export default ActionBar;
