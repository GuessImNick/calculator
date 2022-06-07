import React from 'react';
import './CountDisplay.css';

export const CountDisplay = ({count, tempCount}) => {
  return (
    <div className='countDisplay'><p className='count'>{tempCount ? tempCount : count}</p></div>
  )
}
