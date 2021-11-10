import { SET_FORMSTATE_ACTION, SET_ISOPEN_ACTION } from "./actions";


const initialState = {
    formState: {
        name: '',
        artikul: '',
        typeId: '',
        date: '',
        price: '',
        quantity: ''
    },
    isOpen: false
};

export const addRowFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORMSTATE_ACTION: {
            return {
                ...state,
            formState: action.payload
            }
        }

        case SET_ISOPEN_ACTION: {
            return {
                ...state,
                isOpen: action.payload
            }
        }

        default: {
            return state;
        }
    }
}