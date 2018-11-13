const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');
const User = require('../models/user');
const Post = require('../models/post');

const { ObjectId } = mongoose.Types;

const { isLoggedIn } = require('../helpers/middlewares');


// GET PROFILE VIEW
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  User.findById(userId)
    .populate('following')
    .then(user => res.json(user))
    .catch(error => res.json(error));
});


// PUT EDIT PROFILE VIEW
router.put('/:id', (req, res) => {
  const userId = req.params.id;
  const user = req.body;
  User.findByIdAndUpdate(userId, user)
    .then(user => res.json(user))
    .catch(error => res.json(error));
});

// GET USER POST
router.get('/post/:id', (req, res) => {
  const userId = req.params.id;

  Post.find({ author: userId })
    .populate('author')
    .then((post) => {
      if (post) {
        res.json(post);
      } else {
        res.json('This user does not have any posts');
      }
    })
    .catch((error) => {
      res.json(error);
    });
});

// ADD A FOLLOWER
router.post('/follow/:id', (req, res) => {
  const followId = ObjectId(req.params.id);
  const userId = req.session.currentUser._id;

  User.findById(userId)
    .then((user) => {
      user.following.push(followId);
      user.save();
      res.json(user);
    })
    .catch((error) => {
      res.json(error);
    });
});

// GET FOLLOWERS
router.get('/followers/:id', (req, res) => {
  const userId = req.params.id;

  User.find({ following: { $in: [userId] } })
    .then((followers) => {
      res.json(followers);
    })
    .catch((error) => {
      res.json(error);
    });
});


// DELETE PROFILE BACKLOG


module.exports = router;
