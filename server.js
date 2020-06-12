const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const PORT = 3000

server.set('view engine', 'pug')
server.use(express.static('public'))
server.use(bodyParser.urlencoded({ extended: true }))

server.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`))

server.get('/', (req, res) => res.render('index'))

server.post('/', (req, res) => {

  const { weight, height } = req.body

  const metres = height / 100
  const metresSquared = Math.pow(metres, 2)
  const kgPerMetresSquared = weight / metresSquared

  const result = kgPerMetresSquared.toFixed(1)

  res.render('index', { result, ...req.body })
})
        