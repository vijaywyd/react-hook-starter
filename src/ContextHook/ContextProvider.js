import React from "react";
import { SampleContext } from "./SampleContext";
import ContextConsumer from "./ContextConsumer";

export default function ContextProvider() {
    return (
        <SampleContext.Provider value="green">
            <ContextConsumer />
        </SampleContext.Provider>
    );
}