const express = require('express')
const authMfe = require('./dictionaries/auth-mfe.json');
const readerMfe = require('./dictionaries/reader-mfe.json');
const bloggerMfe = require('./dictionaries/blogger-mfe.json');
const app = express()
const port = 3000

app.get('/dictionary', (req, res) => {
  switch (req.query.mfe) {
    case 'auth':
      res.status(200).json(authMfe);
      break;
    case 'reader':
      res.status(200).json(readerMfe);
      break;
  
    case 'blogger':
      res.status(200).json(bloggerMfe);
      break;
  
    default:
      res.status(404).json({
        error: {
          message: "Dictionary doesn't exist"
        }
      })
      break;
  }

})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})