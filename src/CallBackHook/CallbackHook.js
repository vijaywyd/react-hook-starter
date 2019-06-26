import React,  {useCallback, useState} from "react";
import { Button } from "./Button";

export default function CallbackHook() {

    const [count, setCount] = useState(0);
    const [anotherCount, setAnotherCount] = useState(0);


    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    const decrement = useCallback(() => {
        setCount(count - 1);
    }, [count]);

    const incrementAnotherCount = useCallback(() => {
        setAnotherCount(anotherCount + 1);
    }, [anotherCount]);

    const decrementAnotherCount = useCallback(() => {
        setAnotherCount(anotherCount - 1);
    }, [anotherCount]);


    /**
     * Buttons rendered only when corresponding count / anotherCount changes
     */
    return(
        <>
            <h3>{count}</h3>
            <Button onClick = {increment}>+</Button>
            <Button onClick = {decrement}>-</Button>


            <h3>{anotherCount}</h3>
            <Button onClick = {incrementAnotherCount}>+</Button>
            <Button onClick = {decrementAnotherCount}>-</Button>

        </>
    );
}