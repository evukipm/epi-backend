const express = require('express');
const moment = require('moment');
const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;

const router = express.Router();
const Post = require('../models/post');

router.post('/', (req, res) => {
  const userId = req.session.currentUser._id;
  const author = ObjectId(userId);
  const { title, text, steps } = req.body.post;
  const date = moment();

  const newPost = new Post({
    author,
    title,
    text,
    steps,
    date,
  });
  newPost.save()
    .then((post) => {
      res.json(post);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.get('/', (req, res) => {
  Post.find()
  .populate('author')
    .then((list) => {
      res.json(list);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  Post.findById(id)
    .then((post) => {
      res.json(post);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
