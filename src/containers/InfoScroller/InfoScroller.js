import React, { useState } from 'react';
import InfoTable from '../../components/InfoTable/InfoTable';
import './InfoScroller.scss';

function Arrow({ text, className, handleClick }) {
  return (
    <div className={className} onClick={handleClick}>
      {text}
    </div>
  );
}

function InfoScroller({ items }) {
  const [leftIndex, setLeftIndex] = useState(0)
  const validIndex = newKey => (newKey < 0) ? 0 : Math.min(newKey, items.length - 1);
  const scrollPrev = () => setLeftIndex(validIndex(leftIndex - 1));
  const scrollNext = () => setLeftIndex(validIndex(leftIndex + 1));
  
  const infoItems = items.map((info, i) => (
    <InfoTable className='scrollingCard' key={i} { ...info } />
  ));

  return (
    <div className='InfoScroller'>
      <Arrow className='arrow-prev' text='' handleClick={scrollPrev} />
      {infoItems}
      <Arrow className='arrow-next' text='' handleClick={scrollNext} />
    </div>
  );
}

export default InfoScroller;
