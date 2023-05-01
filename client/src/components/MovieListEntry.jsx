const React = require('react')

const MovieListEntry = ({movie, setMovies}) => {
  const axios = require('axios')
  const editWatch = () => (
    axios({
      url: '/movielist',
      method: 'PATCH',
      data: movie
    })
      .then(() => {
        return axios({
          url: '/movielist',
          method: 'GET'
        })
        .then((result)=>{setMovies(result.data)})
        .catch((err)=>{console.log('CLIENT GET ERROR :', err)})
      })
    .catch((err) => {console.log('CLIENT PATCH ERROR: ', err)})
  )
  return (
    <>
    <div>{movie.title}</div>
    <button onClick={editWatch}>{movie.watched}</button>
    </>
  )
}

export default MovieListEntry;