import React from 'react';
import Movie from './Movie';

const MovieList = props => {
  return (
    <div className="MovieList">
      {props.returnedMovies.map((movie, index) => {
        return (
          <div key={index}>
            <Movie
              key={index}
              id={index}
              poster={movie.poster_path}
              title={movie.title}
              overview={movie.overview}
              onClick={props.onClick}
        />
            <div className="AddButton">
              <button type="submit"
                onSubmit={(event) => props.onClick(event)}>Add to Favorites!
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Props Validation
MovieList.propTypes = {
  returnedMovies: React.PropTypes.array.isRequired,
  onClick: React.PropTypes.func.isRequired
};







export default MovieList;
