import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGamesDetail, getSelectedGame, removeSelectedGame } from "../../redux/store/gameSlice";

const GameInfo = () => {
    const dispatch = useDispatch();
    let { id } = useParams();
    const game = useSelector(getSelectedGame);

    useEffect(() => {
        dispatch(fetchGamesDetail(id));

        return () =>{
          dispatch(removeSelectedGame())
        }
    }, [dispatch]);

    return (
        <>
            {[game].map((b, i) => {
                const {
                    id,
                    title,
                    thumbnail,
                    freetogame_profile_url,
                    description,
                    developer,
                    publisher,
                    release_date,
                    genre,
                    platform,
                    screenshots = [],
                    game_url,
                    minimum_system_requirements={}
                } = b;
                return (
                    <section className="game__details__container" key={i}>
                        <div
                            className="game__background"
                            style={{
                                backgroundImage: `url("https://www.freetogame.com/g/${id}/background.jpg")`,
                            }}
                        >
                            <div className="game__bg__gradient"></div>
                        </div>
                        <div className="game__container">
                            <div className="game__profile">
                                <img src={thumbnail} alt="ey" />
                                <div className="game__profile__btn">
                                    <div className="btn btn__free">free</div>
                                    <a href={game_url} className="btn btn__play">play now</a>
                                </div>
                            </div>
                            <div className="game__right">
                                <h2>{title}</h2>
                                <div className="game__about">
                                    <h2>About {title}</h2>
                                    <hr />
                                    <p>{description}</p>
                                    <div className="game__additional">
                                        <div>
                                            <h2>Additional Information</h2>
                                            <p>
                                                Please note this free-to-play
                                                game may or may not offer
                                                optional in-game purchases.
                                            </p>
                                            <hr />
                                        </div>
                                        <div className="game__row">
                                            <div>
                                                <div>Title</div>
                                                <div>{title}</div>
                                            </div>
                                            <div>
                                                <div>Developer</div>
                                                <div>{developer}</div>
                                            </div>
                                            <div>
                                                <div>Publisher</div>
                                                <div>{publisher}</div>
                                            </div>
                                            <div>
                                                <div>Release Date</div>
                                                <div>{release_date}</div>
                                            </div>
                                            <div>
                                                <div>Genre</div>
                                                <div>{genre}</div>
                                            </div>
                                            <div>
                                                <div>Platform</div>
                                                <div>{platform}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="game__screenshots">
                                        <h2>{title} Screenshots</h2>
                                        <hr />
                                        <hr />
                                        <div className="game__screenshot__wrapper">
                                            {screenshots.map(s => {
                                                return (
                                                    <div
                                                        className="game__ss__container"
                                                        key={s.id}
                                                    >
                                                        {genre.name}
                                                        <img
                                                            src={s.image}
                                                            alt="screenshot"
                                                        />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    
                                    <div className="game__requirements">
                                            <h2>Minimum System Requirements ({platform})</h2>
                                            <hr />

                                                  <div className="game__requirements__wrapper">
                                                  <div>
                                                      <div className="game__req__container">
                                                        <h4>OS</h4>
                                                        <p>{minimum_system_requirements.os}</p>
                                                      </div>
                                                      <div className="game__req__container">
                                                        <h4>Memory</h4>
                                                        <p>{minimum_system_requirements.memory}</p>
                                                      </div>
                                                      <div className="game__req__container">
                                                        <h4>Storage</h4>
                                                        <p>{minimum_system_requirements.storage}</p>
                                                      </div>
                                                  </div>
                                                  <div>
                                                  <div className="game__req__container">
                                                        <h4>Processor</h4>
                                                        <p>{minimum_system_requirements.processor}</p>
                                                      </div>
                                                      <div className="game__req__container">
                                                        <h4>Graphics</h4>
                                                        <p>{minimum_system_requirements.graphics}</p>
                                                      </div>
                                                  </div>
                                                </div>                   
                                    </div>
                                    <hr />
                                    <div className="game__copyright">
                                            <p>All material on this page is copyrighted by ©{developer} and their respective licensors. All other trademarks are the property of their respective owners.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}
        </>
    );
};

export default GameInfo;
{
    /* <img
                                src={`https://www.freetogame.com/g/${id}/background.jpg`}
                                alt="ey"
                            /> */
}
