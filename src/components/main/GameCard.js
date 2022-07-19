import React from 'react';
import {Link} from 'react-router-dom';

const GameCard = ({id,title, thumbnail, short_description, genre}) => {
  const onClickLink = () => {
    window.scrollTo(0, 0);
};
  return (
    <Link to={`/game/${id}/`} onClick={onClickLink()}>
      <div className='card'>
        <div className='card__image__wrapper'>
            <img src={thumbnail} alt={title} />
            <div className='card__loader'>
              <div className='spinner-grow'></div>
            </div>
        </div>
        <div className='card__info'>
        <div>
          <h3 className='card__title'>{title}</h3>
        </div>
        <p className='card__desc'>{short_description}</p>
          <p className='card__genre'>{genre}</p>
        </div>
    </div>
    </Link>
  )
}

export default GameCard