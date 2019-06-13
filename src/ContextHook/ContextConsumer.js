import React, { useContext } from "react";
import { SampleContext } from "./SampleContext";

export default function ContextConsumer() {
    
    const value = useContext(SampleContext);
    
    return(
        <p>Value is {value}</p>
    );
}