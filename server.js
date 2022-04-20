// importing CORS to allow sharing of requisitions and info
const cors = require('cors')
// importing Express
const express = require('express')
// then
const app = express()
// use CORS
app.use(cors())

// Main route returning the data of the API (serving the API)
app.get('/', (req, res) => {
  return res.json([{name: 'jeff'}, {name: 'diego'}])
})

// port to run the app
app.listen('4567')
