import React from "react";

export default class ToggleRenderProps extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            on: true,
        }

        this.toggleState = this.toggleState.bind(this);
    }

    toggleState() {
        this.setState({
            on: !this.state.on
        });
    }

    render() {
        return (
            this.props.children({
                on: this.state.on,
                toggleState: this.toggleState
            })
        )
    }

}