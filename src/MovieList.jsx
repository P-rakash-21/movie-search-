import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.imdbID}>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
