import { SET_CARD_ITEM_ACTION } from './actions'


const initialState = {
    item: {
        name: '',
        artikul: '',
        typeId: '',
        date: '',
        price: '',
        quantity: ''
    }
};

export const createCardItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARD_ITEM_ACTION: {
            return {
                ...state,
                item: action.payload
            }
        }

        default: {
            return state;
        }
    }
}