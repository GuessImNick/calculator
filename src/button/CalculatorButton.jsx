import React from 'react';
import './CalculatorButton.css'

const CalculatorButton = ({char, onClick, operator}) => {
  let isInt;

  if(parseInt(char) >= 0){
    isInt = true
  } else {
    isInt = false
  }

  return (
    <button className={`calculatorButton ${isInt ? "dark" : "orange"} ${operator === char ? 'active' : null}`} onClick={() => {onClick(char)}} >
      {char}
    </button>
  )
}

export default CalculatorButton