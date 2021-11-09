import { createStore } from "redux";
import { reducer } from "./Table/reducer";

export const store = createStore(reducer);