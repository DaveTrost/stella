import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './ActionBar.scss';

function ActionBar({ actionText, handleAction, handleBack, smallText, isDisplayed }) {
  return (
    <div className={`ActionBar ${isDisplayed? '' : 'hidden'}`}>
      <div className='buttonRow'>
        {handleBack &&
          <div className='goBack'>
            <Button
              action={handleBack}
              text='<'
              color='white' 
              width='40px'
              height='40px'
            />
          </div>
        }
        {(actionText && handleAction) &&
          <div className='action'>
            <Button
              action={handleAction}
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
  handleAction: PropTypes.func,
  handleBack: PropTypes.func,
  smallText: PropTypes.string,
  isDisplayed: PropTypes.bool,
};

export default ActionBar;
