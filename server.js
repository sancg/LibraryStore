//Verified if we are running on the production env or not
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index') //relative path ./

app.set('view engine','ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public')) //Our spreadsheets of style and so on

//Instance to use mongoDB
const mongoose = require('mongoose')
//We need to set the environment variable with npm i --save-dev dotenv only locally 
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to mongoose'))


app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)