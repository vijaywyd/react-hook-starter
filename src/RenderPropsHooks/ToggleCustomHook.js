import {useState} from "react";

export function useToggleCustomHook(intitialState) {
    const [on, setOn] = useState(intitialState);

    const toggle = () => {
        setOn(!on);
    }

    return {toggleText: on ? 'on' : 'off', setToggleText: toggle};
}