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
router.post('/', async (req, res) => {
  const author = new Author({
    name: req.body.name
  })
  try{

    const newAuthor =  await author.save()
    //res.redirect('authors/${newAuthor.id}')
    res.redirect('authors')
    console.log(author)
  } catch{
    res.render('authors/newAuthor',{
      author: author,
      errorMessage: "Error creating author"
    })
    console.log(author)
  }
  
})
//To get de information that is needed from the client we need a library call body parser
module.exports = router