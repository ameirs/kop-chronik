import { combineReducers } from "redux";
import incidentsReducer from "./incidents/slice.js";
import overlayReducer from "./overlay/slice.js";
import switchBtnReducer from "./switch/slice.js";
import burgerBtnReducer from "./burger/slice.js";

const rootReducer = combineReducers({
    incidents: incidentsReducer,
    switchBtn: switchBtnReducer,
    overlay: overlayReducer,
    burgerBtn: burgerBtnReducer,
});

export default rootReducer;
