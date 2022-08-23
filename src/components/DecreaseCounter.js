import React from 'react'
import {useDispatch} from 'react-redux';
import {decreaseCounter} from '../redux/actions/counterActions'

export const DecreaseCounter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decreaseCounter())}> -</button>
    </div>
  )
}
