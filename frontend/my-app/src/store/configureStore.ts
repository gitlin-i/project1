import { configureStore } from "@reduxjs/toolkit";

import roomsReducers from "../reducer/roomsReducers"

export default {
    reducer: {
        rooms: roomsReducers,
    }
}