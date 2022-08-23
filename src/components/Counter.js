import React from 'react';
import { useSelector} from 'react-redux'

export const Counter = () => {
  const counter = useSelector(state => state )
  
  return (
    <div>
      <h1>{counter.counterReducers}</h1>
    </div>
  )
}



export default Counter