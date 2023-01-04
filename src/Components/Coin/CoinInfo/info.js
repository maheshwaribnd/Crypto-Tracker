import React from 'react'
import { useState } from 'react';
import "./style.css";

const CoinInfo = ({name, desc}) => {
    const smallDesc = desc.length > 355 ? desc.slice(0, 355) + "<span style='color: var(--white); cursor: hover;'> Read More...</span>" : desc;
    const fullDesc = desc.length > 355 ? desc + "<span style='color: var(--white); cursor: hover;'> Read Less</span>" : desc;

    const [flag, setFlag] = useState(false);
     
  return (
    <div className='info-wrapper'>
      <h2 className='coin-head'>{name}</h2>
      <p 
      onClick={() => {
        desc.length >355 && setFlag(!flag);
      }}
      className='coin-para' dangerouslySetInnerHTML={{__html: flag ? fullDesc : smallDesc}}></p>
    </div>
  )
}

export default CoinInfo;
