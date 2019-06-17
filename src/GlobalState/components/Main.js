import React,  { useReducer } from "react";
import reducer from "../hooks/reducer";
import { initialState } from "../hooks/initialState";
import { CounterContext } from "../hooks/CounterContext";
import Counter from "./Counter";
import { CounterInfo } from "./CounterInfo";

export default function Main() {
    const [store, dispatch] = useReducer(reducer, initialState);

    return(
        <CounterContext.Provider value={{ store, dispatch }}>
            <Counter />
            <CounterInfo/>
        </CounterContext.Provider>
    );
}