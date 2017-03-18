import React from 'react';

const Movie = props => {
  return (
    <div className="Movie">
      <div className="Poster">
        <img
          alt="movie poster"
          src={`https://image.tmdb.org/t/p/w154${props.poster}`}
        />
      </div>
      <div className="MovieTitle">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

// PropTypes Validation

Movie.propTypes = {
  poster: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  addFavorite: React.PropTypes.func.isRequired
};




export default Movie;
