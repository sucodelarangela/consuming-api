// importing CORS to allow sharing of requisitions and info
const cors = require('cors')

// importing Express
const express = require('express')
// then
const app = express()

// axios is very similar to fetch on front-end, using promises, for instance. In this case, our previous configuration of route will be different
const axios = require('axios')

// use CORS
app.use(cors())

// Main route returning the data of the API (serving the API) (1st setup)
// app.get('/', (req, res) => {
//   return res.json([{name: 'jeff'}, {name: 'diego'}])
// })

// Main route with axios (2nd setup)
app.get('/', async (req, res) => {
  try {
    // const response = await axios('https://jsonplaceholder.typicode.com/users')
    // differently from fetch, it's not necessary to create a const data to turn the info into json, because axios already deals with the data. So we can get this data by using 'response.data' or just replacing the 'const response' with 'const { data }':
    const {data} = await axios('https://jsonplaceholder.typicode.com/users')

    return res.json(data)
  } catch (error) {
    console.error(error)
  }
})

// port to run the app
app.listen('4567')
