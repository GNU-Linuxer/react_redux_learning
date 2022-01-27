import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { resetCounter, doubleCounter } from './counterSlice'
import './Counter.module.css';

export function Counter2() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Reset Counter"
                    onClick={() => dispatch(resetCounter())}
                >
                    Reset Counter
                </button>
                <span>{count}</span>
                <button
                    aria-label="Double Counter"
                    onClick={() => dispatch(doubleCounter())}
                >
                    Double Counter
                </button>
            </div>
        </div>
    )
}