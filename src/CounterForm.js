import React, { useState } from 'react'
import './App.css'

const CounterForm = () => {
  const [val, setval] = useState(0);
  return (
    <>
      <h1 className='value'>{val}</h1>
      <button className='btn' onClick={() => { setval(val + 1) }}>+</button>
      <button className='btn' onClick={() => { val > 0 ? setval(val - 1) : alert('counter is 0') }}>-</button>
      <button className='btn' onClick={() => { setval(0) }}>0</button>
    </>
  )
}

export default CounterForm