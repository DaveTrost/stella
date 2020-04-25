import React from 'react';
import './RangeSlider.scss';
import './RangeSliderTooltip.scss';

function RangeSlider({ sliderValue, minValue, maxValue, stepValue, handleChange }) {
  const sliderValAsPercent = sliderValue / maxValue * 100;
  const sliderButtonWidth = 34;
  const sliderValWithOffset = `calc(${sliderButtonWidth / 2}px + (100% - ${sliderButtonWidth}px) * ${sliderValue / maxValue})`;
  
  return (
    <div className='RangeSlider'>
      <table className='sliderTooltip' style={{left: `${sliderValWithOffset}`}}>
        <thead>
          <tr><th>My electric bill</th></tr>
        </thead>
        <tbody>
          <tr><td>${sliderValue} / month</td></tr>
          <tr><td>Annually: ${sliderValue * 12}</td></tr>
        </tbody>
      </table>
      <div className='sliderInput'>
        <div className='sliderFilled' style={{width: `${sliderValAsPercent}%`}}></div>
        <div className='sliderUnfilled' style={{width: `${100 - sliderValAsPercent}%`}}></div>
        <input 
          className='slider' 
          onChange={handleChange} 
          type='range' 
          value={sliderValue} 
          min={minValue} max={maxValue} 
          step={stepValue} />
      </div>
    </div>
  );
}

export default RangeSlider;
