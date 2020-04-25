import React from 'react';
import './RangeSlider.scss';
import './RangeSliderTooltip.scss';

function RangeSlider({ sliderValue, minValue, maxValue, handleChange }) {
  handleChange = () => 0;
  const sliderValAsPercent = sliderValue / maxValue * 100 + '%';

  return (
    <div className='RangeSlider'>
      <table className='sliderTooltip' style={{left: `${sliderValAsPercent}`}}>
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
