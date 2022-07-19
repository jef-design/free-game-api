import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { headers } from "../../api/api";
import { addGames, fetchAsyncGames } from "../../redux/store/gameSlice";
import GameList from "../main/GameList";
import axios from '../../api/axios'

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsyncGames());

    }, [dispatch]);
    return (
        <div>
            <div>
                <h1>Best Free Games for PC and Browser In 2022!</h1>
                <p>357 free-to-play games found in our list!</p>
            </div>
            <div>
                <GameList />
            </div>
        </div>
    );
}

export default Home;
