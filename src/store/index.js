import { createStore, combineReducers } from "redux";
import { tableReducer } from "./Table/reducer";
import { addRowFormReducer } from "./AddRowForm/reducer";

const rootReducer = combineReducers({
    table: tableReducer,
    addRowForm: addRowFormReducer
});

export const store = createStore(rootReducer);

console.log(store.getState());