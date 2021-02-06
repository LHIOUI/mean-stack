//api.js
const express = require('express');
const router = express.Router();
const db = require('./db');
const cors = require('cors');
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
// our simple get /users API
router.get('/users', cors(corsOptions), async(req, res) => {
   try {
      const result = await db.getAllUsers();
      res.send(result);
   } catch (error) {
       res.send(error);
   }
});

module.exports = router;