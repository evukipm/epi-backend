const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');
const Post = require('../models/post');

const { ObjectId } = mongoose.Types;

router.put('/:id/increase', (req, res, next) => {
  const { id } = req.params;
  const stepId = ObjectId(req.body.stepId);

  Post.findById(id)
    .then((post) => {
      const postStep = post.steps.id(stepId);
      postStep.positiveVotes += 1;
      return post.save();
    })
    .then((updatedStep) => {
      res.status(200).json(updatedStep);
    })
    .catch(next);
});

router.put('/:id/decrease', (req, res, next) => {
  const { id } = req.params;
  const stepId = ObjectId(req.body.stepId);

  Post.findById(id)
    .then((post) => {
      const postStep = post.steps.id(stepId);
      postStep.negativeVotes += 1;
      return post.save();
    })
    .then((updatedStep) => {
      res.status(200).json(updatedStep);
    })
    .catch(next);
});

module.exports = router;
