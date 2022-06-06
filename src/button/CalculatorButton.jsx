import React from 'react';
import './CalculatorButton.css'

const CalculatorButton = ({char, width, color}) => {
  return (
    <button className={`calculatorButton ${color}`}>
      {char}
    </button>
  )
}

export default CalculatorButton