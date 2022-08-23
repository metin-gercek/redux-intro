import React from 'react'
import {useDispatch} from 'react-redux';
import {increaseByTwoCounter} from '../redux/actions/counterActions'

export const IncreaseByTwoCounter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increaseByTwoCounter())}> +2</button>
    </div>
  )
}
