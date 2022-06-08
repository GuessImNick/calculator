import React from 'react';
import './CalculatorButton.css'

const CalculatorButton = ({char, onClick, operator}) => {
  const isInt = !Number.isNaN(parseInt(char))

  return (
    <button className={`calculatorButton ${isInt ? "dark" : "orange"} ${operator === char ? 'active' : null}`} onClick={() => {onClick(char)}} >
      {char}
    </button>
  )
}

export default CalculatorButton