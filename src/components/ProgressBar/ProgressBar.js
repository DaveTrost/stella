import React from 'react';
import PropTypes from 'prop-types';
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

ProgressBar.propTypes = {
  now: PropTypes.number.isRequired,
};

export default ProgressBar;