import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUserData, getSolarCoSkin } from '../../store/calculate/reducer';
import Header from '../../components/Header/Header';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import StellaSez from '../../components/StellaSez/StellaSez';
import Message from '../../components/StellaSez/Message';
import RangeSlider from '../../components/RangeSlider/RangeSlider';
import ActionBar from '../../components/ActionBar/ActionBar';
import Footer from '../../components/Footer/Footer';
import './Calculate.scss';

function Calculate() {
  const solarCoSkin = useSelector(state => getSolarCoSkin(state));
  const userData = useSelector(state => getUserData(state));
  const [avgBill, setAvgBill] = useState(userData.avgBill)

  const dispatch = useDispatch();
  const handleChange = event => setAvgBill(event.target.value);

  return (
    <div className='Calculate'>
      <Header showStartOver={true} />
      <ProgressBar now={66} />
      <StellaSez avatar={solarCoSkin.avatar}>
        <Message text={`
          Almost done! 
          I just need your most recent monthly electric bill 
          to calculate your savings
        `} />
      </StellaSez>
      <RangeSlider 
        sliderValue={avgBill} 
        minValue='0' maxValue='1000'
        stepValue='10'
        handleChange={handleChange} />
      <ActionBar actionText='Calculate Savings' isDisplayed={true} />
      <Footer />
    </div>
  );
}

export default Calculate;
