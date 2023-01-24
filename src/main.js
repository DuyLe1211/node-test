const path = require('path')
const morgan = require('morgan')
const express = require('express')
const engine = require('express-handlebars')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
console.log(__dirname)
app.engine('hbs', engine.engine({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.use(morgan('combined'))
app.set('views', path.join(__dirname, 'resources\\views'))
app.get('/', (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/user/:userId', (req, res, next) => {
  let Id = Number(req.params)
  console.log(Id)
  if (Id != NaN) {
    res.send('Your Id is valid')
  } else {
    res.send('Your Id is not valid')
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})