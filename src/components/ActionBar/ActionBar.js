import React from 'react';
import './ActionBar.scss';
import Button from '../Button/Button';

function ActionBar({ actionText }) {
  return (
    <div className='ActionBar'>
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
  );
}

export default ActionBar;
