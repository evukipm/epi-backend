const express = require('express');
const mongoose = require('mongoose');

const Steps = require('../models/step');
const Post = require('../models/post');

const ObjectId = mongoose.Types.ObjectId;
const router = express.Router();

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const idStep = ObjectId(req.body.id);
  console.log(id, idStep);
  Post.findById(id)
    .then(() => {
      // res.json(list);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
