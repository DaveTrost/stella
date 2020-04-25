import React from 'react';
import './ProgressBar.scss';

function ProgressBar({ now }) {
  return (
    <div className='ProgressBar'>
      <span className='readout' style={{ width: `${now}%` }} >{now}%</span>
      <div className='progress'>
        <div className='fill' style={{ width: `${now}%` }} />
      </div>
    </div>
  );
}

export default ProgressBar;