const express = require('express')
const axios = require('axios');

const app = express()
app.use(express.json());
const port = 3001

// -- AUTH MFE -- 
// /auth/login - POST
app.post('/auth/login', (req, res) => {
  const data = JSON.stringify(req.body);

  const config = {
    method: 'post',
    url: 'https://dummyjson.com/auth/login',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios(config)
  .then(function (response) {
    const statusCode = response.status;
    const responseData = response.data;
    res.status(statusCode).json(responseData);
  })
  .catch(function (error) {
    const statusCode = error.response.status;
    const responseData = error.response.data;
    res.status(statusCode).json(responseData);
  });

})
// /auth/me
app.get('/auth/me', (req, res) => {
  const config = {
    method: 'get',
    url: 'https://dummyjson.com/auth/me',
    headers: { 
      'Authorization': req.headers['authorization']
    }
  };

  axios(config)
  .then(function (response) {
    const statusCode = response.status;
    const responseData = response.data;
    res.status(statusCode).json(responseData);
  })
  .catch(function (error) {
    const statusCode = error.response.status;
    const responseData = error.response.data;
    res.status(statusCode).json(responseData);
  });

})

// -- READER MFE -- 
// /reader/:userID
app.get('/reader/:userID/favorites', (req, res) => {
  const config = {
    method: 'get',
    url: 'https://dummyjson.com/users/' + req.params.userID + '/posts',
  };

  axios(config)
  .then(function (response) {
    const statusCode = response.status;
    const responseData = response.data;
    res.status(statusCode).json(responseData);
  })
  .catch(function (error) {
    const statusCode = error.response.status;
    const responseData = error.response.data;
    res.status(statusCode).json(responseData);
  });

})
// /reader/recents
app.get('/reader/recents', (req, res) => {
  const config = {
    method: 'get',
    url: 'https://dummyjson.com/posts/tag/view',
  };

  axios(config)
  .then(function (response) {
    const statusCode = response.status;
    const responseData = response.data;
    res.status(statusCode).json(responseData);
  })
  .catch(function (error) {
    const statusCode = error.response.status;
    const responseData = error.response.data;
    res.status(statusCode).json(responseData);
  });

})
// /reader/posts/:postID
app.get('/reader/posts/:postID', (req, res) => {
  const config = {
    method: 'get',
    url: 'https://dummyjson.com/posts/' + req.params.postID,
  };

  axios(config)
  .then(function (response) {
    const statusCode = response.status;
    const responseData = response.data;
    res.status(statusCode).json(responseData);
  })
  .catch(function (error) {
    const statusCode = error.response.status;
    const responseData = error.response.data;
    res.status(statusCode).json(responseData);
  });
})

// -- BLOGGER MFE -- 
// /blogger/:userID/posts
app.get('/blogger/:userID/posts', (req, res) => {
  const config = {
    method: 'get',
    url: 'https://dummyjson.com/posts/user/' + req.params.userID,
  };

  axios(config)
  .then(function (response) {
    const statusCode = response.status;
    const responseData = response.data;
    res.status(statusCode).json(responseData);
  })
  .catch(function (error) {
    const statusCode = error.response.status;
    const responseData = error.response.data;
    res.status(statusCode).json(responseData);
  });
})
// /blogger/new-post - POST
app.post('/blogger/new-post', (req, res) => {
  const data = JSON.stringify(req.body);

  const config = {
    method: 'post',
    url: 'https://dummyjson.com/posts/add',
    headers: { 'Content-Type': 'application/json'},
    data : data
  };

  axios(config)
  .then(function (response) {
    const statusCode = response.status;
    const responseData = response.data;
    res.status(statusCode).json(responseData);
  })
  .catch(function (error) {
    const statusCode = error.response.status;
    const responseData = error.response.data;
    res.status(statusCode).json(responseData);
  });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})