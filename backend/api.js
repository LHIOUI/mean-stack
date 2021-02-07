//api.js
const express = require('express');
const router = express.Router();
const Post = require('./models/post.model');
const cors = require('cors');
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
// our simple get /users API
router.get('/posts', cors(corsOptions), async(req, res) => {
   try {
      const result = await Post.find();
      res.send(result);
   } catch (error) {
       res.send(error);
   }
});

module.exports = router;