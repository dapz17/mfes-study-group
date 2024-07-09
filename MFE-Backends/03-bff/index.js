const express = require('express')
const axios = require('axios');

const app = express()
app.use(express.json());
const port = 3002

// -- AUTH MFE -- 
// auth/login
app.post('/auth/login', async (req, res) => {
  const data = JSON.stringify(req.body);

  const config = {
    method: 'post',
    url: 'https://dummyjson.com/auth/login',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  let login = null;
  try {
    login = await axios(config).then((response) => response.data);
  } catch (error) {
    const statusCode = error.response.status;
    const responseData = error.response.data;
    res.status(statusCode).json(responseData);
    return;
  }

  const config2 = {
    method: 'get',
    url: 'https://dummyjson.com/auth/me',
    headers: { 
      'Authorization': login.token
    }
  };

  try {
    const response = await axios(config2).then((response) => response.data);
    const me = {
      ...response,
      token: login.token,
    }
    res.status(200).json(me)
  } catch (error) {
    const statusCode = error.response.status;
    const responseData = error.response.data;
    res.status(statusCode).json(responseData);
  }

})

// -- READER MFE -- 
// reader/me
app.get('/reader/me', async (req, res) => {
  let meResponse = null;
  let myFavoriteResponse = null;
  let recentPostsResponse = null;

  // Getting Me Data
  try {
    const configMe = {
      method: 'get',
      url: 'https://dummyjson.com/auth/me',
      headers: { 'Authorization': req.headers['authorization']}
    };
    meResponse = await axios(configMe).then((response) => response.data);
  } catch (error) {
    meResponse = {
      error: {
        statusCode: error.response.status,
        details: error.response.data,
      }
    }
  }

  // Getting My Favorite Data
  if (!meResponse.error) {
    try {
      const configMyFavorite = {
        method: 'get',
        url: 'https://dummyjson.com/users/' + meResponse.id + '/posts',
      };
      myFavoriteResponse = await axios(configMyFavorite).then((response) => response.data);
    } catch (error) {
      myFavoriteResponse = {
        error: {
          statusCode: error.response.status,
          details: error.response.data,
        }
      }
    }
  }

  // Getting Recents Posts Data
  try {
    const recentsConfig = {
      method: 'get',
      url: 'https://dummyjson.com/posts/tag/view',
    };
    recentPostsResponse = await axios(recentsConfig).then((response) => response.data);
  } catch (error) {
    recentPostsResponse = {
      error: {
        statusCode: error.response.status,
        details: error.response.data,
      }
    }
  }

  finalResponse = {
    me: meResponse,
    myFavorites: myFavoriteResponse,
    recentPosts: recentPostsResponse,
  }

  res.status(200).json(finalResponse);

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
app.get('/blogger/me', async(req, res) => {
  let meResponse = null;
  let myPostsResponse = null;

  // Getting Me Data
  try {
    const configMe = {
      method: 'get',
      url: 'https://dummyjson.com/auth/me',
      headers: { 'Authorization': req.headers['authorization']}
    };
    meResponse = await axios(configMe).then((response) => response.data);
  } catch (error) {
    meResponse = {
      error: {
        statusCode: error.response.status,
        details: error.response.data,
      }
    }
  }

  // Getting My Posts Data
  if (!meResponse.error) {
    try {
      const configMyPosts = {
        method: 'get',
        url: 'https://dummyjson.com/posts/user/' + meResponse.id,
      };
      myPostsResponse = await axios(configMyPosts).then((response) => response.data);
    } catch (error) {
      myPostsResponse = {
        error: {
          statusCode: error.response.status,
          details: error.response.data,
        }
      }
    }
  }

  finalResponse = {
    me: meResponse,
    myPosts: myPostsResponse,
  }

  res.status(200).json(finalResponse);
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