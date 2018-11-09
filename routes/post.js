const express = require('express');
const moment = require('moment');

const router = express.Router();
const Post = '../models.Post';

router.post('/', (req, res) => {
  const userId = req.session.currentUser._id;
  author = ObjectId(userId);
  const { title, text } = req.body;
  const steps = req.body.steps;
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
