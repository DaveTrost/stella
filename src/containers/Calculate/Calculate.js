import React, { useState } from 'react';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import StellaSez from '../../components/StellaSez/StellaSez';
import Message from '../../components/StellaSez/Message';
import RangeSlider from '../../components/RangeSlider/RangeSlider';
import ActionBar from '../../components/ActionBar/ActionBar';
import './Calculate.scss';

function Calculate({ avatar, children }) {
  const [avgBill, setAvgBill] = useState(250)
  const handleChange = event => setAvgBill(event.target.value);

  return (
    <div className='Calculate'>
      <ProgressBar now={66} />
      <StellaSez avatar='https://stella-dev.demand-iq.com/media/avatars/65.jpg'>
        <Message text={`
          Almost done! 
          I just need your most recent monthly electric bill 
          to calculate your savings
        `} />
      </StellaSez>
      <RangeSlider 
        sliderValue={avgBill} 
        minValue={0} maxValue={1000} 
        stepValue={10}
        handleChange={handleChange} />
      <ActionBar actionText='Calculate Savings' />
    </div>
  );
}

export default Calculate;
