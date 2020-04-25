import React from 'react';
import './ActionBar.scss';
import Button from '../Button/Button';

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
        <div className='action'>
          <Button
            text={actionText}
            height='40px'
          />
        </div>
      </div>
      <div className='smallText'>
        <small>{smallText}</small>
      </div>
    </div>
  );
}

export default ActionBar;
