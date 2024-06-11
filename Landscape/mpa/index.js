const express = require('express')
const app = express()
const port = 3000
const myHost = 'www.myhost.com'

app.set('view engine', 'pug')
app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.redirect('/page1'); // Redirect to Page 1
})
app.get('/page1', (req, res) => {
  res.render(
    'index',
    {
      
      pageName: 'page-1',
      bodyClass: 'home',
      image: 'https://dummyimage.com/600x400/000/fff.jpg&text=Page%201',
      imageAlt: 'Image for Page 1',
      script: 'page1',
      metaTags:{
        title: 'My MPA Page 1',
        type: 'website',
        description: 'MPA Page Test',
        image: 'https://freerangestock.com/sample/61225/online-shopping--devices-and-bags-with-copyspace.jpg',
        type: 'website',
        url: `https://${myHost}/page1`,
        domain: myHost,
      }
    }
  )
})
app.get('/page2', (req, res) => {
  res.render(
    'index',
    {
      
      pageName: 'page-2',
      bodyClass: 'home',
      image: 'https://dummyimage.com/600x400/000/fff.jpg&text=Page%202',
      imageAlt: 'Image for Page 2',
      script: 'page2',
      metaTags:{
        title: 'My MPA Page 2',
        type: 'website',
        description: 'MPA Page Test 2',
        image: 'https://freerangestock.com/sample/61225/online-shopping--devices-and-bags-with-copyspace.jpg',
        type: 'website',
        url: `https://${myHost}/page2`,
        domain: myHost,
      }
    }
  )
})
app.get('/page3', (req, res) => {
  res.render(
    'index',
    {
      pageName: 'page-3',
      bodyClass: 'home',
      image: 'https://dummyimage.com/600x400/000/fff.jpg&text=Page%203',
      imageAlt: 'Image for Page 3',
      script: 'page3',
      metaTags:{
        title: 'My MPA Page 3',
        type: 'website',
        description: 'MPA Page Test 3',
        image: 'https://freerangestock.com/sample/61225/online-shopping--devices-and-bags-with-copyspace.jpg',
        type: 'website',
        url: `https://${myHost}/page3`,
        domain: myHost,
      }
    }
  )
})
app.get('/:pageName', (req, res) => {
  res.render('page', {
    title: req.params.pageName,
    bodyClass: 'page',
    headline: req.params.pageName,
    message: `You're in the ${req.params.pageName}`
  })
})
// app.get('/api/*', (req, res) => {
//   res.render('index', { title: 'Hey', message: 'Hello there!' })
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})