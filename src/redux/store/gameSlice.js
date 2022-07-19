import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { headers } from "../../api/api";


export const fetchAsyncGames = createAsyncThunk(
    "games/fetchAsyncGames",
    async () => {
        const options = {
            method: 'GET',
            headers: headers,
        };
        return await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?platform=all", options).then(
            (res) => res.json()
        )
    }
);

export const fetchGamesDetail = createAsyncThunk(
    "games/fetchGamesDetail",
    async (id) => {
        const options = {
            method: 'GET',
            headers: headers,
        };
        return await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options).then(
            (res) => res.json()
        )
    }
);

const initialState = {
    games: [],
    selectedGame: [],
    status: null,
};

const gameSlice = createSlice({
    name: "games",
    initialState,
    reducers: {
        // addGames: (state, { payload }) => {
        //     state.games = payload;
        //     console.log(state.games);
        // },
        removeSelectedGame: (state) => {
            state.selectedGame = {};
          },
    },
    extraReducers: {
        [fetchAsyncGames.pending]: state => {
            state.status = "pending";
        },
        [fetchAsyncGames.fulfilled]: (state, action) => {
            // console.log(state.games = payload)
            state.status = "success"
            state.games = action.payload
        },
        [fetchGamesDetail.fulfilled]: (state, action) => {
            // console.log(state.games = payload)
            state.status = "success selected games"
            state.selectedGame = action.payload
        },
        [fetchAsyncGames.rejected]: state => {
            state.status = "rejected";
        },
    },
});

export const { removeSelectedGame } = gameSlice.actions;
export const getAllGames = state => state.allgames.games;
export const getSelectedGame = state => state.allgames.selectedGame;
export default gameSlice.reducer;


// async () => {
//     const options = {
//         method: "GET",
//         url: "https://jsonplaceholder.typicode.com/users",
//     };
//     axios.request(options)
//     .then(function (response) {
//         console.log(response.data);
//         return response.data;
//     });
// }