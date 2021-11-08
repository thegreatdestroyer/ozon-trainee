import { SET_ITEMS_ACTION, SET_TYPES_ACTION } from "./actions";


const initialState = {
    items: [],
    types: [], 
    isLoading: false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMS_ACTION: {
            return {
                ...state,
            items: action.payload}
        }

        case SET_TYPES_ACTION: {
            return {
                ...state,
                types: action.payload
            }
        }

        default: {
            return state;
        }
    }
}