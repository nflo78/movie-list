const express = require('express');
const app = express();
const PORT = 3000
const path = require('path')
const {db, save, retrieve, update} = require('./db.js')
app.use(express.json())
app.use(express.static(path.join(__dirname, "../client/dist")))

app.get('/movielist', (req, res) => {
  console.log('SERVER IS GETTING')
  retrieve((err, result) => {
    if (err) {
      console.log('DB GET ERROR: ', err)
      res.send(err)
    } else {
      res.send(result.map(({movietitle, watched}) => ({
        title: movietitle, watched: watched
      })))
    }
  })
})

app.post('/movielist', (req, res) => {
  save(req.body)
  console.log('SERVER WAS POSTED: ', req.body)
  res.send('SERVER POSTED')
})

app.patch('/movielist', (req, res) => {
  console.log('SERVER WILL PATCH', req.body)
  update(req.body)
  res.send('CLOSE PATCH CONNECTION')
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})