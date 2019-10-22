import React from 'react';
import './Counter.css'
import {useDispatch, useSelector} from "react-redux";
import {decrement, divideByTwo, increment, multiplyByTwo} from "../actions";

function CounterWithReduxState() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    console.log(counter);

    return(
        <div className ="counter">
            <span>{counter}</span>
            <button onClick={()=>{dispatch(increment())}}> + </button>
            <button onClick={()=>{dispatch(decrement())}}> - </button>
            <button onClick={()=>{dispatch(multiplyByTwo())}}> *2 </button>
            <button onClick={()=>{dispatch(divideByTwo())}}> /2 </button>
        </div>
    )
}

export default CounterWithReduxState;
