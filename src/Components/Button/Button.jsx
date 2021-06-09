import React from 'react';
import './button-style.css';

function Button(props) {
  return (
    <div className='buttonContainer'>
      <button className='button' onClick={props.clickHandle}>
        Click Me
      </button>
    </div>
  );
}

export default Button;
