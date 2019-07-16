import React from "react";
import { useToggleCustomHook } from "./ToggleCustomHook";

export function ButtonHook() {

    const {toggleText, setToggleText} = useToggleCustomHook(true);
    return (
        <button onClick = {setToggleText}>{toggleText}</button>
    );
}