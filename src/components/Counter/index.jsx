import React from 'react';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/solid';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../features/counter/counterSlice';

import './style.css';

export default function Counter() {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="counter-wrapper" >
            <span>
                <h2>
                    Counter
                </h2>
                {count}
            </span>

            <div className="counter-button-wrapper">
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                    className="increment-button"
                >
                    <PlusCircleIcon />
                    Increment
                </button>

                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                    className="decrement-button"
                >
                    <MinusCircleIcon />
                    Decrement
                </button>
            </div>
        </div>
    );
}