export const SET_FORMSTATE_ACTION = 'SET_FORMSTATE_ACTION'; 
export const SET_ISOPEN_ACTION = 'SET_ISOPEN_ACTION';



export const setFormStateAction = (payload) => {
    return {
        type: SET_FORMSTATE_ACTION,
        payload
    }
};

export const setIsOpenAction = (payload) => {
    return {
        type: SET_ISOPEN_ACTION,
        payload
    }
};

