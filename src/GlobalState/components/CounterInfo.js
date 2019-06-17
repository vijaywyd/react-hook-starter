import React, {useContext} from "react";
import { CounterContext } from "../hooks/CounterContext";

export function CounterInfo() {
    
    const {
        store:{
            count
        } = {}
    } = useContext(CounterContext) || {};


    return (
        <p>Counter Value : {count} </p>
    );
}