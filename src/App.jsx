import React, { useState } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const apiKey = '7f5d9681'; // Replace with your API key
    const url = `http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      setMovies([]);
    }
  };

  return (
    <div className="container">
      <h1>Movie Search App</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
