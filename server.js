const express = require('express')
const path = require('path')

const app = express()

app.use('/src', express.static(__dirname + '/src'))

app.get('/*', (req, res) => {
    res.sendFile(path.resolve('src', 'index.html'))
})

app.listen(process.env.PORT || 8080)