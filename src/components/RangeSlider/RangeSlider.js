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
        <div className='sliderFill' style={{width: `${sliderValAsPercent}`}}></div>
        <input className='slider' onChange={handleChange} type='range' min={minValue} max={maxValue} value={sliderValue} defaultValue={50} step={10} id='avgCostRange' />
      </div>
    </div>
  );
}

export default RangeSlider;
