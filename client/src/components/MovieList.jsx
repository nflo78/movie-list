import MovieListEntry from './MovieListEntry.jsx'
import AddBar from './AddBar.jsx'
import SearchBar from './SearchBar.jsx'
const React = require('react')

const MovieList = ({movies, setMovies}) => {
  const [watchList, setWatchList] = React.useState('F1')
  if (watchList === 'F1') {
    return (
      <>
      <AddBar setMovies={setMovies}/>
      <SearchBar movies={movies} setMovies={setMovies}/>
      <div></div>
      <button>Watch</button>
      <button onClick={()=>{setWatchList('F2')}}>To Watch</button>
      {movies.filter((movie) => (movie.watched === 'watched')).map((movie)=>(<MovieListEntry movie={movie} key={movie.title} setMovies={setMovies}/>))}
      </>
    )
  }
  if (watchList === 'F2') {
    return (
      <>
      <AddBar setMovies={setMovies}/>
      <SearchBar movies={movies} setMovies={setMovies}/>
      <button onClick={()=>{setWatchList('F1')}}>Watch</button>
      <button>To Watch</button>
      {movies.filter((movie) => (movie.watched === 'to watch')).map((movie)=>(<MovieListEntry movie={movie} key={movie.title} setMovies={setMovies}/>))}
      </>
    )
  }
}

export default MovieList