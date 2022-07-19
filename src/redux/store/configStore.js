import { configureStore } from "@reduxjs/toolkit";
import gameReducer from './gameSlice'

export const store = configureStore({
    reducer: {
        allgames: gameReducer,
    },
});