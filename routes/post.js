const express = require('express');
const router = express.Router();
const Post = '../models.Post'

router.post('/', (req, res, next) => {
  const userId = req.session.currentUser._id;
  author = ObjectId(userId);
  const { title, text } = req.body;
  const steps = req.body.steps

  const newPost = new Post({
    author,
    title,
    text,
    steps
  })
  newPost.save()
    .then(post => {
      res.json(post)
    })
    .catch(error => {
      res.json(error)
    })
})

router.get('/', (req, res, next) => {
  Post.find()
    .then(list => {
      res.json(list)
    })
    .catch(error => {
      res.json(error)
    })
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id

  Post.findById(id)
    .then(post => {
      res.json(post)
    })
    .catch(error => {
      res.json(error)
    })
})

module.exports = router;