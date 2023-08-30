import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './counter.css'
import {increment,decrement} from "../redux/reducer/Reducer"

function Counter() {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
  return (
    <div className='counter-container'>
        <h1>Redux Counter</h1>
        
        <div className='counter-button' onClick={()=> dispatch(increment())}>
            <button>Increment</button>
        </div>
        <p className='counter-value'> {count}</p>
        <div className='counter-button' onClick={()=> dispatch(decrement())}>
            <button>Decrement</button>
        </div>

    </div>
  )
}

export default Counter