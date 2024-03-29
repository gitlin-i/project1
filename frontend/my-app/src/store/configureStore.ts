
import { configureStore,  } from "@reduxjs/toolkit";
import pageSettingReducers from "../reducer/pageSettingReducers";
import roomsReducers from "../reducer/roomsReducers"
import modalReducers from "../reducer/modalReducers";

const store = configureStore({
    reducer: {
        rooms: roomsReducers,
        page: pageSettingReducers,
        modal: modalReducers
    },
    // middleware: new MiddlewareArray().concat()
}) 


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {rooms: roomsState}
export type AppDispatch = typeof store.dispatch

export default store;