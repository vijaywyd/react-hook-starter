import { initialState } from "./initialState";

export default function reducer(state, action) {
    switch(action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + 1
            };
        
        case 'DECREMENT': 
            return {
                count: state.count - 1
            };

        case 'RESET':
            return initialState;
    }
}