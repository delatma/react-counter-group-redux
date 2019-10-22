import React from 'react';
import './Counter.css'
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../actions";

function CounterWithReduxState() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    console.log(counter);

    return(
        <div className ="counter">
                <button onClick={()=>{dispatch(increment())}}> + </button>
                <span>{counter}</span>
                <button onClick={()=>{dispatch(decrement())}}> - </button>
        </div>
    )
}

export default CounterWithReduxState;
