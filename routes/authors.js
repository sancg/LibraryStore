const express = require('express')
const router = express.Router()
//import mo_Author to use Schema
const Author = require('../models/mo_Author')

//All Authors route
router.get('/', (req, res) => {
  res.render('authors/au_index') //we need to render our page localized on views folder
})

// New Author route
router.get('/new',(req, res) =>{
  res.render('authors/newAuthor', { author: new Author()})
})

// Create Author route 
router.post('/', (req, res) => {
  res.send(req.body.name) //We  actually are creating the new route
})
//To get de information that is needed from the client we need a library call body parser
module.exports = router