export const SET_ITEMS_ACTION = 'SET_ITEMS_ACTION'; 
export const SET_TYPES_ACTION = 'SET_TYPES_ACTION';
export const SET_ISLOADING_ACTION = 'SET_ISLOADING_ACTION';

export const setItemsAction = (payload) => {
    return {
        type: SET_ITEMS_ACTION,
        payload
    }
};

export const setTypesAction = (payload) => {
    return {
        type: SET_TYPES_ACTION,
        payload
    }
};

export const setIsLoadingAction = (payload) => {
    return {
        type: SET_ISLOADING_ACTION,
        payload
    }
};