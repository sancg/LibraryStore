const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index') //we need to render our page localized on views folder
})

module.exports = router