import React, {useContext} from "react";
import { CounterContext } from "../hooks/CounterContext";

export default function Counter() {

    function incrementCounter() {
        dispatch({
            type: 'INCREMENT',
        });
    }

    function decrementCounter() {
        dispatch({
            type: 'DECREMENT',
        });
    }

    function resetCounter() {
        dispatch({
            type: 'RESET',
        });
    }



    const {
        store: {
            count
        } = {},

        dispatch
    } = useContext(CounterContext);
    //debugger;
    //console.log(count);
    //console.log(dispatch);
    return (
        <div>
            <button onClick = {incrementCounter}>+</button>
            <button onClick = {decrementCounter}>-</button>
            <button onClick = {resetCounter}>Reset</button>
            <p>{count}</p>
        </div>
    );
}