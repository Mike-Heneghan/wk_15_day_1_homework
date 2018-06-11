import React from 'react';
import Film from './Film.js'

const FilmList = (props) => {

  const filmNodes = props.data.map((film) => {
    return (
      <Film name={film.name} imdb={film.imdb} release={film.release} key={film.id}>
      </Film>
    )
  })

  return (
    <div className="film-list-app">
      <div>
        <h1>Top 5 Pixar Films</h1>
      </div>
      <div className='list'>
        {filmNodes}
        <button>Show Times</button>
      </div>
    </div>
  )
};

export default FilmList;
