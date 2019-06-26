import React from "react";
export const  Button = React.memo(({onClick, children}) => {
    console.log("Rednered")
    return (
        <button onClick = {onClick}>{children}</button>
    );
});