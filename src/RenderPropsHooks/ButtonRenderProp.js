import React from "react";
import ToggleRenderProps from "./ToggleRenderProp";

export default class ButtonRenderProp extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <ToggleRenderProps>
            {
                ({on, toggleState}) => {
                    return <button onClick = {toggleState}>{on ? 'on' : 'off'}</button>
                }
            }
        </ToggleRenderProps>
    }
}