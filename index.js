const http = require('http')
const express = require('express')
const helmet = require('helmet')
const path = require('path')

const app = express()
const port = process.env.NODE_ENV === 'production' ? 80 : 8080

app.use(helmet())
app.use(express.static(path.join(__dirname, '/build')))

const server = http.createServer(app)
server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
