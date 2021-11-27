import {configureStore} from "@reduxjs/toolkit";
import {toggleReducer} from "./toggle";
import {noteReducer} from "./note";
import {eventReducer} from "./event";

export const store = configureStore({
    reducer:{
        toggle: toggleReducer,
        note: noteReducer,
        event: eventReducer
    }
})