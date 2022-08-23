import React from 'react'
import {useDispatch} from 'react-redux';
import {increaseCounter} from '../redux/actions/counterActions'

export const IncreaseCounter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increaseCounter())}> +</button>
    </div>
  )
}

