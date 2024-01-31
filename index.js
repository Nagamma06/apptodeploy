require('dotenv').config()
const express = require('express')
const app = express()

const port =process.env.PORT

app.get('/', (req, res) => {
    res.send('Welcome to the node server')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at node server</h1>')
})

app.listen(port,() => {
    console.log('listening on port ', port)
    console.log('http://localhost/',port)
})