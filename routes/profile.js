const express = require('express');

const router = express.Router();

const User = require('../models/user');
const Post = require('../models/post');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const { isLoggedIn } = require('../helpers/middlewares');


// GET PROFILE VIEW
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  User.findById(userId)
    .then((user) => res.json(user))
    .catch((error) => res.json(error));
});


// PUT EDIT PROFILE VIEW
router.put('/:id', (req, res) => {
  const userId = req.params.id;
  const user = req.body;
  User.findByIdAndUpdate(userId, user)
    .then((user) => res.json(user))
    .catch((error) => res.json(error));
});

// GET USER POST
router.get('/post/:id', (req, res) => {
  const userId = req.params.id;

    Post.find({ author: userId })
    .populate('author')
      .then(post => {
        console.log(post)
        if (post) {
          res.json(post);
        } else {
          res.json('This user does not have any posts')
        }
      })
      .catch((error)=> {
        res.json(error);
      });
})


// DELETE PROFILE BACKLOG


module.exports = router;
