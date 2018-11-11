const express = require('express');

const router = express.Router();

const User = require('../models/user');
const Post = require('../models/post');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;



router.get('/', (req, res, next) => {
  const searchType = req.query.type
  const searchValue = req.query.class
  
  if(searchType === 'user'){
    User.find({username: { "$regex": searchValue, "$options": "i" }})
    .then(user => res.json(user))
    .catch(error => res.json('No results'));
  }else{
    res.json('No results')
  }
});

module.exports = router;
