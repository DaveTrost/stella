import React from 'react';
import './ProgressBar.scss';

const ProgressBar = ({ now }) => (
  <div className='ProgressBar'>
    <span className='readout' style={{ width: `${now}%` }} >{now}%</span>
    <div className='progress'>
      <div className='fill' style={{ width: `${now}%` }} />
    </div>
  </div>
);

export default ProgressBar;