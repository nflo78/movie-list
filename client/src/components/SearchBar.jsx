const React = require('react')

const SearchBar = ({movies, setMovies}) => {
  const axios = require('axios')
  const [searchMovie, setSearchMovie] = React.useState('')
  const searchChange = (e) => {
    setSearchMovie(e.target.value);
  }

  const searchForMovie = () => {
    setMovies(movies.filter((movie)=>(movie.title.toUpperCase().indexOf(searchMovie.toUpperCase()) !== -1)))
    // console.log(movies)
  }

  const loadMovies = () => {
    return axios({
      method: 'GET',
      url: '/movielist'
    })
      .then((result) => {setMovies(result.data)})
      .catch((err) => {console.log('CLIENT GET ERROR :', err)})
  }

  return (
    <>
    <form onSubmit={(e) =>{
      e.preventDefault();
      searchForMovie();
      }}>
      <input placeholder={'Search Movie'} onChange={searchChange}></input>
      <button>Search!</button>
    </form>
    <button onClick={loadMovies}>Reset Current List</button>
    </>
  )
}

export default SearchBar