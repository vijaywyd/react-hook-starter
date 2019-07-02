import React,  {useState, useCallback} from "react";

export function useToggle(initialState) {
    
    const [value, setValue] = useState(initialState);
    return {
        value,
        toggleValue: useCallback(() => {
            setValue(!value);
        }, [value]),
    }
}