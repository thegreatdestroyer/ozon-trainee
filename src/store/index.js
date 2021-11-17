import { createStore, combineReducers } from "redux";
import { tableReducer } from "./Table/reducer";
import { addRowFormReducer } from "./AddRowForm/reducer";
import { createCardItemReducer } from "./TableInfo/reducer"

const rootReducer = combineReducers({
    table: tableReducer,
    addRowForm: addRowFormReducer,
    item: createCardItemReducer
});

export const store = createStore(rootReducer);

console.log(store.getState());