import React from 'react';
import Header from '../../components/Header/Header';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import StellaSez from '../../components/StellaSez/StellaSez';
import Message from '../../components/StellaSez/Message';
import ActionBar from '../../components/ActionBar/ActionBar';
import Footer from '../../components/Footer/Footer';
import './Calculate.scss';

const avatar = 'https://stella-dev.demand-iq.com/media/avatars/65.jpg';

function Calculate2() {
  return (
    <div className='Calculate'>
      <Header />
      <ProgressBar now={100} />
      <StellaSez avatar={avatar}>
        <Message text={`
          Hang on. I am calculating your savings...
        `} />
      </StellaSez>
      <StellaSez avatar={avatar}>
        <Message text={`
          Sizing your solar system...
        `} />
      </StellaSez>
      <StellaSez avatar={avatar}>
        <Message text={`
          Checking on energy prices...
        `} />
      </StellaSez>
      <ActionBar />
      <Footer />
    </div>
  );
}

export default Calculate2;
