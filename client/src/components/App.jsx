import React from 'react';
import MovieList from './MovieList.jsx'

const App = () => {
  const axios = require('axios')
  const [movies, setMovies] = React.useState([])

  const loadMovies = () => {
    return axios({
      method: 'GET',
      url: '/movielist'
    })
      .then((result) => {setMovies(result.data)})
      .catch((err) => {console.log('CLIENT GET ERROR :', err)})
  }

  React.useEffect(()=>{loadMovies()}, [])
  return (
    <div>
      <h1>Movie List</h1>
      <MovieList movies={movies} setMovies={setMovies}/>
    </div>
  )
};

export default App;