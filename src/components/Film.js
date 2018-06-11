import React from 'react';

const Film = (props) => {
  return (
    <div className="film">
    <h2>{props.name}</h2>
    <h3>{"IMDB Score: " + props.imdb + " Year of Release: " + props.release}</h3>
    </div>
  )
}

export default Film;
