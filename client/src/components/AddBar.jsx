const React = require('react')
const axios = require('axios')

const AddBar = ({setMovies}) => {

const [newMovie, setNewMovie] = React.useState('')
const newMovieChange = (e) => {
  setNewMovie(e.target.value)
}

const addNewMovie = () => {
  return axios({
    method: 'POST',
    url: '/movielist',
    data: {
      title: newMovie,
      watched: 'watched'
    }
  })
    .then( () => {
      return axios({
        method: 'GET',
        url: '/movielist'
      })
        .then((result) => {setMovies(result.data)})
        .catch((err) => {console.log('CLIENT GET ERROR :', err)})
    })
    .catch((err) => {console.log('CLIENT POST ERROR: ', err)})
}

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      addNewMovie()
    }}>
      <input placeholder={'Add Movie'}onChange={newMovieChange}></input>
      <button>Add!</button>
    </form>
  )
}

export default AddBar