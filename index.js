const express = require('express')

const app = express() // create server express
const users = []

/* METHOD PATH */
app.get('/', (req, res) => {
  console.log('request accepted')
  res.send('<h1>Hi node express</h1>')
})

app.post('/', (req, res) => {
  console.log('post method')
  res.send('POST query')
})

app.delete('/', (req, res) => {
  console.log('delete method')
  res.send('<h2>DELETE query</h2>')
})

app.put('/', (req, res) => {
  console.log('update message')
  res.send('UPDATE query')
})

app.patch('/', (req, res) => {
  console.log('edit message')
  res.send('EDIT query')
})

app.listen(3000, () => {
  console.log('Server started')
}) // start server
