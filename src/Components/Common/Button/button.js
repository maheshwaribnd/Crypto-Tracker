import React from 'react';
import './style.css';

function Button({text, fun, outlined}) {
  return (
    <div>
      <button className={outlined ? 'btn-outlined' : 'btn'} onClick={() => {fun()}}>{text}</button>
    </div>
  )
}

export default Button;
