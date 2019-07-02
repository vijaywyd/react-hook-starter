import React from "react";
import { useToggle } from "./ToggleHook";

export function ToggleButton() {


    const {value, toggleValue} = useToggle(true)

    return (
        <>
        <p>{value ? "true" : "false"}</p>
        <button onClick = {toggleValue}>Toggle</button>

        </>
    );
}