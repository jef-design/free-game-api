import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { addGames, getAllGames } from "../../redux/store/gameSlice";
import GameCard from "./GameCard";

function GameList() {
    const games = useSelector(getAllGames);
    console.log(games);
    // const {games} = useSelector(state => state.games.games)

    return (
        <div className="game__list">
            {games &&
                games.slice(0, 20).map((b, i) => {
                    const { id, title, thumbnail, short_description, genre } =
                        b;
                    return (
                        <GameCard
                            key={i}
                            id={id}
                            title={title}
                            thumbnail={thumbnail}
                            short_description={short_description}
                            genre={genre}
                        />
                    );
                })}
        </div>
    );
}

export default GameList;
